# jhill-did.github.io

Technical blog powered by Eleventy (11ty) and GitHub Pages.

## Local development

1. Install Node.js.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the local development server with live reload:

   ```bash
   npm run serve
   ```

4. Visit <http://127.0.0.1:8080> in your browser.

5. Create a production build at any time with:

   ```bash
   npm run build
   ```

## Site structure

- `.eleventy.js` contains the Eleventy configuration, collections, filters, and passthrough copy rules.
- `_includes/layouts/` contains the shared page templates.
- `_data/site.js` contains site-wide metadata used for templates and feeds.
- `posts/` contains blog posts and shared front matter defaults.
- `assets/css/site.css` provides the site's lightweight styling.
- Visual styling is inspired by Michael Rose's [Basically Basic Jekyll theme](https://github.com/mmistakes/jekyll-theme-basically-basic) (MIT licensed), adapted here for Eleventy without Jekyll or Ruby theme dependencies.
- `.github/workflows/pages.yml` builds and deploys the generated `_site` output to GitHub Pages on pushes to `main`.

## GitHub Pages deployment

The repository includes a GitHub Actions workflow that:

- installs the Node dependencies
- builds the site with Eleventy
- uploads the generated `_site` artifact
- deploys the artifact to GitHub Pages

Before the first deployment, set the repository's GitHub Pages source to **GitHub Actions**
in **Settings → Pages**. After that, pushes to `main` will trigger deployment.
