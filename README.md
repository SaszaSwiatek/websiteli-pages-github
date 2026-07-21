# Websiteli Pages

This repository contains static, GitHub Pages-ready company demo websites.
Everything that is published lives in `docs/`.






Each `CHE...` directory is one independent static website. The root

There is no application build step in this repository. Do not assume a React,
Vite, Next, or server-side app unless those files are added later.

## How To Add A New Static Page

Use this structure for every newly generated company page:

```text
docs/
  CHE123456789/
    index.html
    assets/
      styles.css
      favicon.svg
      og.png
      hero-or-primary-image.png
```

For multilingual pages, use static language folders:

```text
docs/
  CHE123456789/
    index.html              # primary/default language
    impressum/
      index.html            # legal notice for the default language, if needed
    en/
      index.html
      impressum/
        index.html
    tr/
      index.html
      impressum/
        index.html
    assets/
      styles.css
      favicon.svg
      og.png
      hero-or-primary-image.png
```

### Required Steps

1. Create a new folder under `docs/` named after the company UID without dots,
   for example `docs/CHE123456789/`.
2. Put the main page at `docs/CHE123456789/index.html`.
3. Keep page-specific CSS, JavaScript, images, favicons, and Open Graph images
   inside that same company folder. Prefer `assets/` for new pages.
4. Use relative asset paths:
   - From `docs/CHE123456789/index.html`: `assets/styles.css`.
   - From `docs/CHE123456789/en/index.html`: `../assets/styles.css`.
   - From `docs/CHE123456789/en/impressum/index.html`:
     `../../assets/styles.css`.
5. Update `docs/index.html` and add a catalog link:

   ```html
   <a href="CHE123456789/">Company Name</a>
   ```

6. Keep catalog links relative and directory-based. Use `CHE123456789/`, not
   `CHE123456789/index.html`.
7. Keep `docs/.nojekyll` in place.
8. Do not add generated pages outside `docs/`.

### HTML Requirements

Every new `index.html` should include:

- `<!doctype html>`
- `<html lang="...">`
- `<meta charset="utf-8">`
- `<meta name="viewport" content="width=device-width, initial-scale=1">`
- A clear `<title>`.
- A concise `<meta name="description">`.
- Open Graph metadata: `og:type`, `og:title`, `og:description`, and
  `og:image`.
- `twitter:card` when an Open Graph image exists.
- A favicon link.
- A canonical URL when the final public path is known.

The public URL pattern is:

```text
https://saszaswiatek.github.io/websiteli-pages-github/CHE123456789/
```

For language variants, include `hreflang` alternates on every translated page
and make sure each page has its own canonical URL.

### Asset Guidelines

- Prefer one self-contained `assets/` folder per company page.
- Use descriptive asset names such as `hero.png`, `og.png`, `favicon.svg`, or
  `practice-room.png`.
- Avoid absolute local paths and references to files outside the company folder.
- Avoid external scripts, fonts, and CDNs unless the page explicitly needs them.
- Use UTF-8 content and preserve real language characters correctly.

### Multilingual Pages

Use one of these patterns:

- Static folder translations: preferred for SEO and legal pages. The default
  language lives at `CHE123456789/`, and additional languages live at folders
  such as `en/`, `de/`, `fr/`, or `tr/`.
- JavaScript language switcher: acceptable for compact demo pages where one HTML
  file contains all translated strings in `script.js`.

If a multilingual page has an `impressum` or legal notice, create the equivalent
legal page for each language and link between language versions.

## Prompt Instructions For Future Page Generation

When generating a new static company page for this repository, follow this
contract:

```text
Create a self-contained static website under docs/<UID_WITHOUT_DOTS>/.
The main file must be docs/<UID_WITHOUT_DOTS>/index.html.
Use docs/<UID_WITHOUT_DOTS>/assets/ for CSS, images, favicon, and OG image.
Use only relative links and relative asset paths inside the site.
Update docs/index.html with a relative catalog link to <UID_WITHOUT_DOTS>/.
Do not create files outside docs/ unless explicitly requested.
Do not add a build system, package manager files, or framework scaffolding.
Include complete metadata: title, description, Open Graph, Twitter card,
favicon, canonical URL, and hreflang alternates if multilingual.
If multiple languages are required, create static language folders such as en/
or tr/ and keep legal/impressum pages in matching language paths.
After generation, verify that docs/index.html links to the new page and that all
local assets resolve with the correct relative paths.
```

## Final Checklist Before Committing

- The new page opens from the catalog.
- All image, CSS, JavaScript, favicon, canonical, Open Graph, and language links
  resolve correctly.
- The page is usable on mobile and desktop widths.
- Text is encoded as UTF-8 and special characters display correctly.
- The new page does not depend on unpublished local files.
