(function () {
    var button = null;
    var activeSelectionText = "";
    var activeShareUrl = "";
    var hideTimer = 0;

    function getArticleContainer() {
        return document.querySelector(".post-content");
    }

    function selectionIsInsideArticle(selection, article) {
        if (!selection || selection.rangeCount === 0 || !article) return false;
        var range = selection.getRangeAt(0);
        return article.contains(range.commonAncestorContainer);
    }

    function normalizeText(text) {
        return text.replace(/\s+/g, " ").trim();
    }

    function buildTextFragmentUrl(text) {
        var pageUrl = new URL(window.location.href);
        pageUrl.hash = "";
        return pageUrl.toString() + "#:~:text=" + encodeURIComponent(text);
    }

    function createButton() {
        var el = document.createElement("button");
        el.type = "button";
        el.className = "selection-share-button";
        el.textContent = "Share";
        el.setAttribute("aria-label", "Share selected text");
        el.addEventListener("mousedown", function (event) {
            event.preventDefault();
        });
        el.addEventListener("click", shareSelection);
        document.body.appendChild(el);
        return el;
    }

    function getButton() {
        if (!button) button = createButton();
        return button;
    }

    function setButtonState(text) {
        var el = getButton();
        el.textContent = text;
        window.clearTimeout(hideTimer);
        hideTimer = window.setTimeout(function () {
            el.textContent = "Share";
            hideButton();
        }, 1400);
    }

    function hideButton() {
        if (!button) return;
        button.classList.remove("is-visible");
        button.style.left = "";
        button.style.top = "";
    }

    function positionButton(range) {
        var rect = range.getBoundingClientRect();
        if (!rect || (rect.width === 0 && rect.height === 0)) return;

        var el = getButton();
        var top = window.scrollY + rect.top - el.offsetHeight - 10;
        var left = window.scrollX + rect.left + rect.width / 2 - el.offsetWidth / 2;
        var minLeft = window.scrollX + 8;
        var maxLeft = window.scrollX + document.documentElement.clientWidth - el.offsetWidth - 8;

        if (top < window.scrollY + 8) {
            top = window.scrollY + rect.bottom + 10;
        }

        el.style.left = Math.max(minLeft, Math.min(left, maxLeft)) + "px";
        el.style.top = top + "px";
        el.classList.add("is-visible");
    }

    function updateShareButton() {
        var article = getArticleContainer();
        var selection = window.getSelection();

        if (!selectionIsInsideArticle(selection, article) || selection.isCollapsed) {
            hideButton();
            return;
        }

        var text = normalizeText(selection.toString());
        if (!text) {
            hideButton();
            return;
        }

        activeSelectionText = text;
        activeShareUrl = buildTextFragmentUrl(text);
        positionButton(selection.getRangeAt(0));
    }

    function fallbackCopy(text) {
        var input = document.createElement("textarea");
        input.value = text;
        input.setAttribute("readonly", "");
        input.style.position = "fixed";
        input.style.left = "-9999px";
        document.body.appendChild(input);
        input.select();

        try {
            document.execCommand("copy");
            setButtonState("Copied");
        } catch (error) {
            window.prompt("Copy this link", text);
            setButtonState("Copy");
        } finally {
            document.body.removeChild(input);
        }
    }

    function shareSelection() {
        if (!activeShareUrl) return;

        var title = document.title || "";
        var shareData = {
            title: title,
            text: activeSelectionText,
            url: activeShareUrl
        };

        if (navigator.share && (!navigator.canShare || navigator.canShare(shareData))) {
            navigator.share(shareData).then(function () {
                setButtonState("Shared");
            }).catch(function (error) {
                if (error && error.name === "AbortError") return;
                copyShareUrl();
            });
            return;
        }

        copyShareUrl();
    }

    function copyShareUrl() {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(activeShareUrl).then(function () {
                setButtonState("Copied");
            }).catch(function () {
                fallbackCopy(activeShareUrl);
            });
            return;
        }

        fallbackCopy(activeShareUrl);
    }

    document.addEventListener("selectionchange", function () {
        window.clearTimeout(hideTimer);
        window.setTimeout(updateShareButton, 0);
    });
    document.addEventListener("mouseup", updateShareButton);
    document.addEventListener("keyup", updateShareButton);
    document.addEventListener("scroll", hideButton, { passive: true });
    document.addEventListener("click", function (event) {
        if (button && event.target === button) return;
        if (!window.getSelection() || window.getSelection().isCollapsed) hideButton();
    });
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") hideButton();
    });
})();
