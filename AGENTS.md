# AGENTS.md

## Cursor Cloud specific instructions

This repository is a personal blog built with the [Zola](https://www.getzola.org/) static site generator (theme: Seje2). There is no Node/Python project; the only build tool is the `zola` binary.

- **Zola version:** Use Zola `0.17.1` (matches the `shalzz/zola-deploy-action@v0.17.1` used in `.github/workflows/build.yml`). Newer Zola (0.19+) renamed `config.toml` fields (e.g. `highlight_code` → `highlighting`) and will fail to build this repo's `config.toml`. The update script installs `0.17.1` if `zola` is missing.
- **Build:** `zola build` (output goes to `/public`, which is gitignored).
- **Check/lint:** `zola check`. Note it validates *external* links over the network, so it will report many false-positive broken links (403/404/cert errors from third-party sites) that are unrelated to the repo. Internal link checks are the meaningful signal.
- **Run (dev):** `zola serve --interface 0.0.0.0 --port 1111`. Serves at `http://localhost:1111/` with live reload; new/edited files in `content/` are picked up automatically.
- **Content:** Posts live in `content/*.md` with TOML front matter (`+++ ... +++`). Most content is in Chinese; `default_language = "zh-cn"`.
- **Deploy:** Handled by the GitHub Action (manual `workflow_dispatch`) to the `gh-pages` branch; no local deploy needed.
