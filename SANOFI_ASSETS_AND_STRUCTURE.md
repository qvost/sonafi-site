# Sanofi Official Site Extraction & Modernization Blueprint

Fetched from: `https://www.sanofi.com/en`

---

## 1. Brand Tokens & Design System

- **Brand Signature**: Clean, clinical, human-centric biopharmaceutical design.
- **Brand Colors**:
  - Primary Brand Purple: `#7A00E6` (Used for logo signature dots, key accents, highlighted titles)
  - Deep Navy / Purple: `#1D1464`
  - Dark Charcoal / Text: `#0A0A0A` / `#1F2937`
  - Soft Light Background: `#F8F8FA` / `#FFFFFF`
  - Dark Mode Accent (if modernizing): `#9933FF`
- **Typography**:
  - `Sanofi Sans` (Regular & Bold) - downloaded in `fetched_assets/fonts/`
  - Fallbacks: `Inter`, `Work Sans`, `system-ui, sans-serif`
- **Logo Vector**:
  - Available at [`svg_1.svg`](file:///home/qvost/Projects/sonafisite/svg_1.svg) and [`favicon.svg`](file:///home/qvost/Projects/sonafisite/fetched_assets/brand/favicon.svg)
  - Features the distinct lowercase "sanofi" typography with the signature purple dots.

---

## 2. Extracted Data & Assets Directory

| Directory / File | Description |
|---|---|
| [`sanofi_content_catalog.json`](file:///home/qvost/Projects/sonafisite/sanofi_content_catalog.json) | Ready-to-import JSON catalog with complete navigation, hero, sections, copy, cards, and metrics |
| [`sanofi_page_complete.json`](file:///home/qvost/Projects/sonafisite/sanofi_page_complete.json) | Deserialized React Router / Turbo-Stream CMS data straight from Sanofi |
| [`sitemap.en.xml`](file:///home/qvost/Projects/sonafisite/sitemap.en.xml) | Complete 1,271-page architectural map of Sanofi's English site |
| [`sanofi_home.html`](file:///home/qvost/Projects/sonafisite/sanofi_home.html) | Raw SSR HTML snapshot |
| [`fetched_assets/fonts/`](file:///home/qvost/Projects/sonafisite/fetched_assets/fonts/) | Official `Sanofi_Sans-Regular.woff2` and `Sanofi_Sans-Bold.woff2` |
| [`fetched_assets/images/`](file:///home/qvost/Projects/sonafisite/fetched_assets/images/) | High-res photography, cards, and the 7.9 MB Tour de France hero video |
| [`fetched_assets/brand/`](file:///home/qvost/Projects/sonafisite/fetched_assets/brand/) | Official SVGs, favicons, and logos |

---

## 3. Homepage Structure & Content Flow

1. **Top Navigation & Mega Menu**:
   - **Our Company**: Strategy, Science with Purpose ("Chasing Miracles"), Governance (Board of Directors, Executive Committee), Sustainability (Net Zero 2045, Health Systems Resilience, Global Health Unit), Our Legacy.
   - **Our Science**: Pipeline, Therapeutic Areas (Immunology, Neurology, Oncology, Rare Diseases, Vaccines), Technology Platforms (AI in R&D, mRNA), Clinical Trials.
   - **Media**: Stories & Magazine, Press Releases, Media Contacts.
   - **Investors**: Shares, ADRs, Financial Results, Governance, Events & Webcasts.
   - **Careers**: Global Careers, Graduate programs.
   - **Global Site Selector**: 135 countries and regions, EN/FR language switcher.

2. **Hero Banner**:
   - **Headline**: "Tour de France: The Race for Health Is On"
   - **Background Video**: `web-sanofi-tour-de-france-partnership.mp4`
   - **CTA**: "Learn more" -> `/en/tour-de-france-major-partner-sponsor-white-jersey-sports-healthcare`

3. **Section 0 - Campaign Spotlight**:
   - **Title**: "Major Partner of the Tour de France"
   - **Copy**: Sanofi sponsoring the iconic White Jersey for both men and women in the Tour de France and Tour de France Femmes avec Zwift.
   - **Asset**: `sanofi-white-jersey-tour-de-france_20261002084139.jpg`

4. **Section 1 - Latest Articles & Thought Leadership**:
   - *AI in R&D*: "Trust Is the Real Measure of Success for AI in R&D" (Matt Truppo)
   - *Neurology*: "Why It’s Time to Rethink Multiple Sclerosis" (Elke Blansaer & Chakib Borsali)
   - *Immunology*: "Alert Instead of Alarm: Shifting the Timing and Impact of Type 1 (T1D) Diabetes Diagnosis"

5. **Section 2 & 3 - Brand Purpose: "Chasing Miracles" & People Stories**:
   - Headline: "The Power of Chasing A Dream"
   - Human Stories:
     - **Céline**: Para-surfer living with secondary progressive MS (France)
     - **Xavier**: Filmmaker living with autoimmune type 1 diabetes (US)
     - **Wei**: Sanofi AI Scientist (China)

6. **Section 4 - Core Mission Statement**:
   - *"We are an R&D driven, AI-powered biopharmaceutical company committed to improving people's lives and delivering compelling growth."*

7. **Section 5 - About Us Pillars**:
   - **Who We Are**: Our strategy and growth engine
   - **Our Science**: Turning the impossible into possible
   - **Patients**: Chasing miracles to improve lives
   - **Sustainability**: Net zero towards 2045, healthcare resilience

8. **Section 6 - R&D Pipeline Metrics**:
   - **5** Therapeutic Areas
   - **61** Compounds in Clinical Development
   - **20** Phase 3 Clinical Trials

9. **Section 7 - Careers**:
   - Title: "Pursue Progress. Discover Extraordinary."
   - CTA to Sanofi Global Career Portal.

10. **Section 8 - Press Releases & Financial News**:
    - Q3 double-digit growth in sales and upgraded business EPS guidance
    - Teva & Sanofi duvakitug Phase 2b data in ulcerative colitis & Crohn's
    - Groundbreaking of new state-of-the-art insulin manufacturing facility in Germany

11. **Footer**:
    - Regional selector (135 countries), follow us social channels, copyright, legal disclaimer, accessibility.

---

## 4. How to Make it Better

1. **Lightning Performance**:
   - Sanofi's production site uses heavy Emotion CSS-in-JS and legacy MUI styling, causing hydration waterfalls.
   - A modern stack (Next.js 15 / Tailwind CSS / Vite) will deliver sub-second initial load and 100/100 Lighthouse performance.
2. **Interactive R&D Pipeline Explorer**:
   - Instead of static numbers (5, 61, 20), build an interactive filtering table/card matrix where visitors can toggle by Therapeutic Area (Immunology, Oncology, Neurology, Rare Diseases, Vaccines) and Phase (Phase 1, 2, 3).
3. **Interactive "Chasing Miracles" Stories**:
   - Fullscreen video story transitions (Instagram/TikTok style or high-end Apple-style scrolling) for Céline, Xavier, and Wei.
4. **Enhanced Clinical Trial Finder**:
   - A built-in quick-search widget allowing patients and doctors to search by condition or location directly from the homepage.
5. **Modern Dark/Light Mode & Accessibility**:
   - High-contrast mode complying with WCAG 2.2 AAA accessibility standards, especially valuable for visually impaired patients.
