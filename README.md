# jhill-did.github.io

Technical blog powered by Jekyll, the `minima` theme, and GitHub Pages.

## Local development

1. Install Ruby.
2. Install Bundler if it is not already available:

   ```bash
   gem install bundler
   ```

3. Install dependencies:

   ```bash
   bundle install
   ```

4. Start the local development server:

   ```bash
   bundle exec jekyll serve
   ```

5. Visit <http://127.0.0.1:4000> in your browser.

## Site structure

- `_config.yml` contains site metadata and Jekyll configuration.
- `_posts/` contains blog posts in standard Jekyll dated filename format.
- `about.md` is a simple standalone page linked from the header.
- `assets/css/style.scss` imports `minima` and provides lightweight custom styling.
- `.github/workflows/pages.yml` builds and deploys the site to GitHub Pages on pushes to `main`.

## GitHub Pages deployment

The repository includes a GitHub Actions workflow that:

- installs the Ruby dependencies
- builds the site with Jekyll
- uploads the generated `_site` artifact
- deploys the artifact to GitHub Pages

Before the first deployment, set the repository's GitHub Pages source to **GitHub Actions**
in **Settings → Pages**. After that, pushes to `main` will trigger deployment.
