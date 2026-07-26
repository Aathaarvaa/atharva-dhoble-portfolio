# Signal Layer - Portfolio Design Concept

## Brand idea

**Signal Layer** presents Atharva Dhoble as the professional who turns raw, fragmented data into dependable decisions. The visual language combines three familiar environments without copying any one of them:

1. A cloud data-platform architecture diagram
2. A polished analytics control room
3. A premium personal portfolio

The site should feel technically credible first, visually memorable second, and never decorative at the expense of clarity.

## Brand statement

> Building trusted data systems - from ingestion and validation to analytics and insight.

Supporting positioning:

- Data Engineer
- Data Analyst
- Analytics Engineer
- Azure Data Platform Professional

## Visual language

- Dark mode is the default.
- Fine grid lines and restrained glows reference data platforms and monitoring tools.
- Thin connector paths, moving signal dots, and status indicators communicate data flow.
- Cards use soft surfaces, precise borders, and minimal blur instead of heavy glass effects.
- Large metrics are reserved for verified production impact.
- Light mode keeps the same hierarchy and replaces glow with subtle depth.

## Color palette

| Token | Dark | Light | Purpose |
|---|---:|---:|---|
| Canvas | `#070A0F` | `#F5F8FC` | Page background |
| Surface | `#0D131C` | `#FFFFFF` | Primary card background |
| Surface elevated | `#121B27` | `#EDF3FA` | Elevated cards and panels |
| Text primary | `#F4F8FC` | `#101722` | Headings and key content |
| Text secondary | `#9FAFC1` | `#536174` | Supporting copy |
| Border | `#243142` | `#D5E0EC` | Card and divider lines |
| Azure | `#47C7FF` | `#087EBD` | Primary action and cloud layer |
| Teal | `#3EE6C4` | `#087F71` | Validation and healthy status |
| Violet | `#9A7CFF` | `#6D4DE3` | Transformation and analytics |
| Lime | `#B8F45D` | `#4D7F00` | Verified metrics and highlights |
| Warning | `#FFC66D` | `#9B5A00` | Placeholder / details required |

Gradients combine Azure -> Teal -> Violet and are used only for hero accents, architecture flow, and key dividers.

## Typography

The website uses a modern system-font stack for speed, privacy, and resilient rendering.

- Display: `Inter`, `Segoe UI`, `Helvetica Neue`, sans-serif
- Body: the same family for visual continuity and recruiter-friendly readability
- Technical labels: `SFMono-Regular`, `Cascadia Code`, `Roboto Mono`, monospace

Type hierarchy:

- Hero name: responsive `clamp(3rem, 8vw, 7rem)`
- Section title: responsive `clamp(2rem, 4vw, 3.8rem)`
- Card title: `1.15rem-1.45rem`
- Body: `1rem`, 1.7 line-height
- Technical metadata: `0.75rem-0.85rem`, uppercase tracking

## Component architecture

The site is a Vite-powered, dependency-light component system. Each section is a JavaScript module that returns semantic HTML and exposes only the interaction hooks it owns.

- `AppShell`
  - `Header / Navigation`
  - `Hero`
  - `About`
  - `ImpactMetrics`
  - `SkillsExplorer`
  - `ExperienceTimeline`
  - `ProjectGallery`
  - `ArchitectureFlow`
  - `Publications`
  - `Education`
  - `Contact`
  - `Footer`
- Shared systems
  - Icon renderer
  - Reveal observer
  - Animated counters
  - Modal manager
  - Theme manager
  - Active-section observer
  - Accessibility and reduced-motion handling

## Page structure

1. Sticky navigation and scroll progress
2. Hero with data-pipeline visualization
3. About and professional focus areas
4. Verified impact metrics
5. Interactive skills categories
6. Expandable professional experience
7. Filterable projects with accessible detail modal
8. Signature Azure data architecture flow
9. Research and publications
10. Education timeline
11. Contact and recruiter CTA
12. Footer with source and resume links

## Animation strategy

Animations are intentionally lightweight and use CSS plus browser-native APIs.

- Hero pipeline signal: continuous low-amplitude motion
- Section reveals: opacity + 16px translation on first intersection
- Metrics: count once when visible
- Architecture: moving signal dots along connectors
- Hover: subtle elevation, border brightening, and 2-4px movement
- Modal: short scale/fade transition
- Navigation: active-section marker

Accessibility safeguards:

- `prefers-reduced-motion` removes continuous movement and counters jump to final values.
- All interactive controls are keyboard accessible.
- Modal supports Escape, focus return, focus trapping, and background scroll lock.
- Color is never the only status indicator.

## Content integrity strategy

- Resume-supported facts are shown as verified professional content.
- Public project themes supplied by Atharva are described conservatively.
- Unavailable project, demo, and PDF URLs remain explicit placeholders.
- Client-sensitive professional work is labeled as selected professional work rather than public source code.
- Contact links are limited to verified email, LinkedIn, and GitHub URLs.
