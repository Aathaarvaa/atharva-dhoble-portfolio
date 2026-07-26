# Atharva Dhoble - Data Engineering Portfolio

A premium, responsive, single-page portfolio presenting Atharva Dhoble as a **Data Engineer, Data Analyst, Analytics Engineer, Power BI Developer, and Azure Data Engineer**.

The design concept is called **Signal Layer**: a restrained combination of a cloud data-platform diagram, analytics control room, and professional personal brand. Dark mode is the default, with a complete light theme.

## What is included

- Recruiter-focused hero and positioning
- Verified impact metrics
- Interactive skill categories without percentage bars
- Expandable experience timeline
- Filterable project gallery with accessible detail modals
- Animated Azure data-platform architecture flow
- Research and publications section
- Education timeline
- Contact links, resume download, and copy-email action
- Responsive desktop, tablet, and mobile layouts
- Keyboard navigation, focus states, reduced-motion handling, and semantic HTML
- SEO, Open Graph, favicon, web manifest, and robots metadata
- Automatic GitHub Pages deployment through GitHub Actions

## Technology

- Vite
- Component-based JavaScript modules
- Semantic HTML
- Modern CSS with design tokens, container-friendly layouts, and native animations
- Browser-native `IntersectionObserver` for reveal, counter, and active-navigation behavior
- Inline SVG icon system

The production website has no runtime framework dependency. This keeps the static output small, fast, and easy to maintain on GitHub Pages.

## Project structure

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── assets/
│   │   └── README.md
│   ├── .nojekyll
│   ├── Atharva_Dhoble_Resume.pdf
│   ├── favicon.svg
│   ├── og-preview.png
│   ├── robots.txt
│   └── site.webmanifest
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── Architecture.js
│   │   ├── Contact.js
│   │   ├── Education.js
│   │   ├── Experience.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── Metrics.js
│   │   ├── Projects.js
│   │   ├── Publications.js
│   │   └── Skills.js
│   ├── data/
│   │   └── portfolio.js
│   ├── utils/
│   │   ├── html.js
│   │   └── icons.js
│   ├── App.js
│   ├── main.js
│   └── styles.css
├── CONTENT_CHECKLIST.md
├── DESIGN_SYSTEM.md
├── index.html
├── package.json
└── vite.config.js
```

## Local development

Install Node.js 22 or a current Node.js version supported by Vite.

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

Create a production build:

```bash
npm run build
npm run preview
```

Run the included JavaScript syntax check:

```bash
npm run check
```

## Edit portfolio content

Most content is centralized in:

```text
src/data/portfolio.js
```

Update the profile, metrics, skills, experiences, projects, architecture stages, publications, and education there. Keep numerical claims and links evidence-based.

## Replace placeholder links

Search the repository for:

```text
[ADD GITHUB LINK]
[ADD DEMO LINK]
[ADD PDF LINK]
```

The visible buttons are generated whenever a corresponding field in `src/data/portfolio.js` is `null`.

Example:

```js
github: 'https://github.com/your-account/verified-repository',
demo: 'https://your-verified-demo.example',
paper: 'https://your-public-paper.example/paper.pdf',
```

Do not replace placeholders with guessed URLs.

## Add images and logos

See `public/assets/README.md` for recommended filenames, optimization guidance, and integration steps.

For a project image, add a field such as:

```js
image: './assets/project-example.webp',
imageAlt: 'Power BI dashboard showing verified project results',
```

Then render it in `src/components/Projects.js`. Use only screenshots and logos you are allowed to publish. Anonymize confidential client data.

## Update the resume

Replace:

```text
public/Atharva_Dhoble_Resume.pdf
```

Keep the filename unchanged, or update `profile.resume` in `src/data/portfolio.js`.

## GitHub Pages deployment

1. Create a GitHub repository and push this project to its `main` branch.
2. In the repository, open **Settings -> Pages**.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. Push to `main`, or manually run the **Deploy portfolio to GitHub Pages** workflow.
5. The workflow installs dependencies, runs the Vite build, uploads `dist`, and deploys it to Pages.

`vite.config.js` automatically detects the repository name during GitHub Actions:

- A project site is built with `/repository-name/` as its base.
- A user or organization site such as `username.github.io` is built with `/` as its base.

No manual base-path edit is required for the normal GitHub Pages cases above.

## Add the final deployed URL

After deployment, add a canonical URL and absolute Open Graph URL to `index.html`:

```html
<link rel="canonical" href="https://your-verified-pages-url/" />
<meta property="og:url" content="https://your-verified-pages-url/" />
<meta property="og:image" content="https://your-verified-pages-url/og-preview.png" />
```

Use the actual URL shown by the successful Pages deployment.

## Content integrity

- Employment, education, skills, and production metrics are based on the supplied resume.
- Publication links use verified DOI/publication references.
- Public/student project descriptions are conservative where implementation details were not supplied.
- Client projects are clearly labeled as confidential professional work.
- Missing repositories, demos, and direct PDF links remain visible placeholders.

See `CONTENT_CHECKLIST.md` for the remaining facts and links to add.
