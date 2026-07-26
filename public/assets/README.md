# Portfolio media assets

This directory is intentionally empty so the shipped website does not invent personal photography, company branding, or project screenshots.

## Suggested files

- `profile.webp` - a professional portrait, ideally square and at least 800 x 800 px.
- `project-dq-dashboard.webp` - approved, anonymized data-quality dashboard image.
- `project-ecommerce-platform.webp` - approved, anonymized architecture or dashboard image.
- `project-cricket-analytics.webp` - project screenshot.
- `project-demand-forecasting.webp` - notebook/chart screenshot.
- `project-climate-food.webp` - project visualization.
- `project-hand-sign.webp` - system or publication figure that you have permission to use.
- `project-covid-voice.webp` - workflow or app screenshot.

## Recommended format

Use WebP or AVIF where possible. Keep each image below roughly 300 KB and provide meaningful `alt` text when adding it to a component.

## Adding a profile photo

1. Add the image to this folder.
2. Open `src/components/Hero.js` or `src/components/About.js`.
3. Insert an `<img>` element with a relative path such as `./assets/profile.webp`.
4. Use a factual alt description such as `Portrait of Atharva Dhoble`.

## Adding company logos

Use logos only when you have permission. Keep a monochrome SVG or transparent WebP in this folder, then add it beside the company name in `src/components/Experience.js`. Do not replace textual company names with logo-only labels.
