# Manual GitHub Pages deploy notes

This site currently publishes from the `gh-pages` branch, not directly from `main`.

## What happened

- The new blog post was committed and pushed to `main`.
- GitHub Pages is configured as a legacy Pages site with source:
  - branch: `gh-pages`
  - path: `/`
- Because `gh-pages` was not updated, `https://evanlyu732.github.io/blog46/` returned `404`.
- The workflow `.github/workflows/build.yml` only has `workflow_dispatch`, so pushing to `main` does not automatically deploy.
- Manually triggering that workflow failed with:
  - `The job was not started because your account is locked due to a billing issue.`

So the fix is to build locally and push the generated static files to `gh-pages`.

## Current local Zola issue

The local Zola version is newer than the version expected by this repository's old config.

With `zola 0.22.1`, the existing `config.toml` fails on:

```txt
unknown field `highlight_code`
```

For local build/serve only, use a temporary config copied from `config.toml` and change:

```toml
[markdown]
highlight_code = true
highlight_theme = "base16-ocean-light"
```

to:

```toml
[markdown]

[markdown.highlighting]
theme = "catppuccin-mocha"
```

This temp config is only for local build compatibility. Do not commit it unless the repo is intentionally upgraded to newer Zola.

## Manual deploy flow

During this incident, the practical path was to use the locally installed newer Zola with the temporary compatibility config. This preserves `atom.xml`.

An older Zola binary such as `0.17.1` can read the repository's original `config.toml`, but it may not understand newer feed settings such as `feed_filenames`, causing `atom.xml` to disappear from the generated output. Check the generated files before pushing `gh-pages`.

Build to a temp directory:

```bash
zola --config /tmp/evanlyu-zola-config.toml build --output-dir /tmp/evanlyu-site-public --force
```

Create a temporary worktree for `gh-pages`:

```bash
git worktree add /tmp/evanlyu-gh-pages gh-pages
```

Sync generated files into the `gh-pages` worktree:

```bash
rsync -a --delete --exclude .git /tmp/evanlyu-site-public/ /tmp/evanlyu-gh-pages/
```

Add `.nojekyll` in the `gh-pages` worktree so GitHub Pages serves the generated static files directly:

```bash
touch /tmp/evanlyu-gh-pages/.nojekyll
```

Commit and push `gh-pages`:

```bash
cd /tmp/evanlyu-gh-pages
git status --short
git add -A
git commit -m "Deploy site"
git push origin gh-pages
```

Because `gh-pages` is generated output, expect index pages, pagination pages, feeds, sitemap, and neighboring post navigation to change when a new post is added. The important check is that the generated site contains the new post and does not remove expected top-level files such as `atom.xml`.

After pushing, verify:

```bash
curl --noproxy '*' -I https://evanlyu732.github.io/blog46/
```

## Authentication note

If push fails with `403`, check the active GitHub CLI account:

```bash
gh auth status
gh repo view EvanLyu732/evanlyu732.github.io --json viewerPermission
```

The account needs write/admin permission on `EvanLyu732/evanlyu732.github.io`.
