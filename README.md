# jhill-did.github.io

Technical blog powered by the standard [Eleventy Base Blog](https://github.com/11ty/eleventy-base-blog) starter and deployed with GitHub Pages.

## Local development

1. Install Node.js 18 or newer.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the local development server:

   ```bash
   npm run serve
   ```

4. Visit <http://127.0.0.1:8080> in your browser.

5. Create a production build at any time with:

   ```bash
   npm run build
   ```

## Project structure

- `eleventy.config.js` contains the Eleventy Base Blog configuration and plugin setup.
- `content/` contains the home page, archive, about page, tag pages, feed assets, and blog posts.
- `_includes/` contains the shared base, home, and post layouts.
- `_data/metadata.js` contains site-wide metadata.
- `css/` contains the default Eleventy Base Blog starter styles.
- `.github/workflows/pages.yml` builds and deploys the generated `_site` output to GitHub Pages.

## GitHub Pages deployment

The repository includes a GitHub Actions workflow that installs dependencies, builds the site with Eleventy, uploads the generated `_site` artifact, and deploys it to GitHub Pages.

The workflow continues to use `SITE_URL` and `ELEVENTY_PATH_PREFIX` environment variables so the starter works correctly when deployed through GitHub Pages.
