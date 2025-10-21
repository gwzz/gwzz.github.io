# gwzz.github.io — personal Hugo blog ✨📄

This repository contains a Hugo-based personal blog (site source). The site uses the Hugo static site generator and a theme based on "stack" styles. Content is stored under the `content/` and `post/` directories and static assets live in `static/` and `assets/`.

Quick links 🔗
- Live site: https://gwzz.github.io 🌐

Getting started (development) ▶️
- Serve drafts and watch for changes locally:

```powershell
hugo server -D
```

- Build a production site (output to `public/`) 🏗️:

```powershell
hugo
```

Notes about the environment ⚙️
- Hugo is required (see https://gohugo.io). The repo includes a `go.mod` which indicates it may use Hugo modules; ensure your Hugo binary supports modules (Hugo extended recommended for SCSS processing).
- Two convenience VS Code tasks are available in this workspace: `Serve Drafts` (runs `hugo server -D`) and `Build` (runs `hugo`). Use the VS Code Run/Tasks UI or run the commands above in PowerShell.

Project structure (high level) 🗂️
- `config/` — Hugo configuration fragments (toml files) and params. Look at `config/_default/config.toml` and `config/params.toml` for site-wide settings.
- `content/` & `post/` — markdown content. `post/` contains dated posts and page resources like images (e.g. `post/hello-world/index.md`).
- `assets/` — source assets (SCSS, JS) processed by Hugo Pipes. `assets/scss/custom.scss` contains custom styles.
- `static/` — static files copied verbatim to the site root (favicon, etc.).
- `themes/` (not present) or module-based theme — theme is expected to be provided via modules configured in `config/module.toml`.

How to add content ✍️
- Create new posts under `post/` or `content/` following existing directory patterns. Example post:

```
post/My New Post/index.md
post/My New Post/cover.jpg
```

 - Follow front matter conventions already used in other posts (inspect `post/hello-world/index.md`).

Common edits and where to look 📝
- Change site settings in `config/_default/config.toml` and `config/params.toml`.
- Edit styles in `assets/scss/custom.scss`.
- Add images to `static/img/` or as page resources next to the post's `index.md`.

CI / deployment notes 🚀
- The site is set up as a typical GitHub Pages repo (username.github.io). Building locally with `hugo` generates the `public/` folder that you can deploy.

Troubleshooting 🛠️
- If SCSS changes don't apply, make sure you use the Hugo extended binary.
- If the site doesn't load or modules are missing, run `hugo mod get` or inspect `go.mod`.

Contact / contribution 🤝
- Send PRs for content or edits. Keep edits small and preview locally with `hugo server -D`.

---