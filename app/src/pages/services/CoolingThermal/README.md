# Cooling & Airflow Service Page

This folder contains the **Data Centre Cooling & Airflow** service page and its sections.

---

## Architecture

```
CoolingThermal/
├── index.tsx              — Main page component (SEO + assembly)
├── utils.ts               — Shared utilities (GA4 tracking)
├── data.ts                — Shared constants (sections, testimonials, projects, FAQ)
├── CoolingThermal.module.css  — Page-specific styles (sticky nav, skip link)
├── sections/
│   ├── HeroSection.tsx
│   ├── StickyAnchorNav.tsx
│   ├── TrustTiles.tsx
│   ├── AssessmentSection.tsx      — 01 / Thermal Assessment
│   ├── ProcurementSection.tsx     — 02 / Hardware Procurement
│   ├── DeploymentSection.tsx      — 03 / Installation & Deployment
│   ├── ManagedSection.tsx         — 04 / 24/7 Managed Services
│   ├── RemoteAdvisorySection.tsx  — International Advisory
│   ├── TestimonialCarousel.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectCardGrid.tsx
│   ├── ResultsSection.tsx
│   ├── EcosystemSection.tsx
│   ├── FAQSection.tsx
│   ├── DisclaimerSection.tsx
│   └── CTASection.tsx
```

**Rule:** Each section is self-contained. It imports what it needs. The main `index.tsx` is a table of contents — no logic, no markup.

---

## Typography System

All type comes from **`../../../styles/carbon-typography.css`**. There is no other authority.

### Hierarchy

| Token | Size / Weight | Use When |
|-------|--------------|----------|
| `carbon-fluid-display-03` | 60px / 300wt | Hero headline only |
| `carbon-banner-heading` | 36→30→24px / 600wt | Image-banner section headings |
| `carbon-fluid-heading-04` | 28px / 400wt | Section titles on light backgrounds |
| `carbon-card-title` | 24px / 600wt | Card headings, pricing plan names |
| `carbon-price` | 18px / 600wt | Pricing amounts, spec values |
| `carbon-heading-02` | 16px / 600wt | Button text, CTA labels, table headers |
| `carbon-body-02` | 16px / 400wt | Body paragraphs |
| `carbon-body-short-01` | 14px / 400wt | Compact body, table cells |
| `carbon-label-02` | 14px / 400wt | UI labels, captions, metadata |
| `carbon-label-01` | 12px / 400wt | Small labels (base — add `font-semibold` for emphasis) |
| `carbon-badge` | 12px / 600wt uppercase | Badge labels ("Best For", "Thermal Mapping", etc.) |
| `carbon-micro` | 10px / 600wt | Step numbers, compact nav labels |
| `carbon-stat` | 24px / 300wt | Large statistics ("20%", "99.99%") |

### Rules

1. **Never use raw Tailwind font utilities** (`text-2xl`, `text-lg`, `font-semibold` as a size shortcut).
2. **Never use arbitrary font sizes** (`text-[18px]`).
3. **Weight modifiers are allowed** only on base tokens where semibold is an exception, not the rule:
   - `carbon-label-01 font-semibold` — OK for one-off emphasis
   - `carbon-badge` — preferred for systematic badge use
4. **Responsive scaling is built into the CSS**. Banner headings scale 36→30→24px automatically via media queries. Do not add responsive prefixes to type.

---

## Spacing

Use Tailwind's standard spacing scale. **No arbitrary spacing values** (`mb-[30px]`).

| Context | Token |
|---------|-------|
| Compact bars (trust tiles, disclaimers) | `py-6` / `py-12` / `py-16` |
| Major feature sections | `py-20` |
| Hero / closing CTA | `py-24` or `min-h-screen` |
| Section gaps (between major sections) | `h-3 md:h-4` |
| Container padding | `px-6 sm:px-8 lg:px-12` |
| Container max-width | `max-w-7xl mx-auto` |

---

## Tracking / Analytics

Use `trackEvent()` from `./utils` for all GA4 events. The utility silently fails if `gtag` is unavailable.

```tsx
import { trackEvent } from './utils';

<button onClick={() => trackEvent('cta_conversion', { type: 'consultation' })}>
```

---

## Adding a New Section

1. Create `sections/YourSection.tsx`
2. Import only what the section needs
3. Export as `export default function YourSection() { ... }`
4. Import and render in `index.tsx`
5. Add the section ID to `PAGE_SECTIONS` in `data.ts` if it should appear in the sticky nav
