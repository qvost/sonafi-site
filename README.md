# Sanofi reimagined

An independent executive pitch prototype, built with React 19, Vite, TypeScript, Tailwind CSS 4, Framer Motion and Lucide. Official Sanofi fonts, photography and the supplied partnership teaser are served locally.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

The production output is `dist/`. Deploy it to any static host. `.openai/hosting.json` retains the registered private Sites project identity.

## Experience

- Restrained corporate typography, factual section headings and neutral clinical portfolio cards.
- A custom opening preloader with the supplied Sanofi brand mark and the requested “Sanofi” text. It waits for essential image/font readiness with a bounded fallback, respects reduced motion, and keeps underlying controls inert until dismissed.
- Cinematic, scroll-responsive partnership hero with pause control and a separate accessible film dialog.
- Therapy and clinical-phase filters across five curated programs, with mechanisms and registry links.
- Medicine/condition/trial search, including Command/Ctrl+K.
- Static research metrics, a pinned research photograph that expands with native scroll, and patient portraits with restrained parallax.
- The hero transitions into an inset frame while leaving the viewport. Scroll effects reverse naturally and become static layouts for reduced-motion users; the research scene also removes its pin on short screens.
- Official-logo SVG, PNG and ICO favicons, plus a 180-pixel Apple touch icon.
- Filtered press room, country selector, persistent light/dark theme and responsive navigation.
- Native modal focus containment, Escape dismissal, skip navigation, visible focus indicators and reduced-motion support.

## Content boundaries

This is an independent concept, not an official Sanofi property. The headline pipeline metrics are illustrative snapshots from the supplied brief, not live feeds. The five programs are a curated set, not a complete pipeline. Regulatory statuses must be reviewed before any official release. No patient quotes or audio interviews were invented. Story dialogs preview real published Sanofi stories and link to their originals. The supplied partnership video runs approximately 15 seconds; the site labels it accordingly.

`plai` is attributed to Aily Labs; the separate OpenAI/Formation Bio collaboration is described independently. Beyfortus is identified as an antibody in the prevention portfolio rather than a vaccine. The #4 access ranking is labeled as coming from the pitch brief.

## Structure

`src/components/` contains Navbar, BrandPreloader, Hero, ResearchFrameScroll, ScienceMetrics, PipelineMatrix, BrandJourney, StoriesGrid, MetricsBento, PressRoom, Footer, FooterBrandModel and dialog/search components. `src/sanofi-content.ts` owns the curated program and story records. `src/styles.css` contains the responsive design system. `scripts/build-tailwind.mjs` compiles the small Tailwind utility set before development and production builds.

## Verification

TypeScript strict checking and the production build pass. Server-rendered checks confirm the major sections, a single H1, five program cards, patient content and skip navigation. The current sandbox blocks listening sockets and Chromium startup; rendered mobile/desktop layout, browser interactions, external link availability and a full WCAG audit remain unverified. Accessibility features are implemented, but this prototype is not certified WCAG 2.2 AAA.

## Source material

The supplied `SANOFI_ASSETS_AND_STRUCTURE.md`, `SANOFI_INDEPENDENT_RESEARCH.md`, content catalog and sitemap informed the implementation. Primary references include:

- [Official partnership](https://www.sanofi.com/en/tour-de-france-major-partner-sponsor-white-jersey-sports-healthcare)
- [Sanofi homepage and patient stories](https://www.sanofi.com/en)
- [Official clinical pipeline](https://www.sanofi.com/en/our-science/our-pipeline)
- [Q3 2026 results](https://www.sanofi.com/en/media-room/press-releases/2026/2026-10-30-06-30-00-3392028)
- [HERCULES at Oxford](https://www.ndcn.ox.ac.uk/research/ms-clinical-trials-unit/clinical-trials-recruiting/hercules)
- [Beyfortus prescribing information](https://products.sanofi.us/beyfortus/beyfortus.pdf)

Brand assets require appropriate rights and corporate/medical review before an official public launch.

The requested BLANK frame-scroll reference was unreachable from this environment. `ResearchFrameScroll` is an original implementation of a scroll-controlled frame, not a copy of the inaccessible component. No wheel handlers or separate scroll containers are used.

The footer credits Siddid Pandey for design and development. Gmail (`qvostwon@gmail.com`), GitHub and LinkedIn links were verified against [github.com/qvost](https://github.com/qvost) on November 13, 2026. These personal links are separate from Sanofi’s corporate social links.

The parallax-model-footer reference was also unreachable. The custom footer model uses layered copies of the supplied SVG logo with scroll-driven depth and rotation, without WebGL or a new runtime dependency. Links remain stationary and reduced-motion users receive a static logo.
