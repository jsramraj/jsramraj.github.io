# Ramaraj Portfolio

A modern, build-free static portfolio for GitHub Pages.

## Structure

- `index.html` - main page
- `styles.css` - site styling
- `script.js` - project modal interactions
- `favicon.png` - site favicon at root
- `dist/img` - reused image assets
- `dist/docs/Ramaraj-Resume.pdf` - reused resume
- `CNAME` - custom domain mapping

Legacy webpack/source files and npm package files were removed because this site is now fully static.

## Deploy on GitHub Pages

1. Push this repository to GitHub.
2. Open repository **Settings** → **Pages**.
3. Under **Build and deployment**, choose:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Save and wait for deployment.

If you use a custom domain, keep the `CNAME` file in the repo root.

## Update Content

- Edit text/content in `index.html`
- Adjust styles in `styles.css`
- Edit project modal details and screenshots in `script.js`
