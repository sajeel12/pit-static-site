# AGENTS.md — Perception IT Website

> This file is intended for AI coding agents. It assumes zero prior knowledge of the project.

## Project Overview

This repository contains the **Perception IT** corporate website — a multi-page React application marketing enterprise IT solutions (infrastructure, cloud, data analytics, AI, and IT platforms). The site targets B2B audiences across Pakistan, the UK, and the GCC.

The active application lives entirely inside the `app/` directory. The repository root also contains marketing assets (screenshots, briefs, design documents) and a legacy Python virtual environment (`.venv`) that is **not** part of the main build.

---

## Technology Stack

| Layer | Technology | Version / Notes |
|-------|------------|-----------------|
| Framework | React | 19.x (StrictMode enabled) |
| Language | TypeScript | ~5.9.3, `strict: true` |
| Build Tool | Vite | 7.2.4, `@vitejs/plugin-react` |
| Router | `react-router-dom` | 7.x, **HashRouter** (`/#/...`) |
| Styling | Tailwind CSS | 3.4.19 + `tailwindcss-animate` |
| UI Components | shadcn/ui | "new-york" style, non-RSC |
| Component Primitives | Radix UI | Various (`@radix-ui/react-*`) |
| Icons | Lucide React + IBM Carbon Icons/Pictograms | `@carbon/icons-react`, `@carbon/pictograms-react` |
| 3D / Graphics | React Three Fiber + Drei | Used selectively for hero animations |
| Charts | Recharts | Used for data-visualisation pages |
| Testing | Playwright | 1.60, single-project Chromium @ 1440×900 |
| Linting | ESLint 9 + `typescript-eslint` + `react-hooks` + `react-refresh` |

---

## Directory Structure

```
app/
├── index.html                 # Vite entry HTML (fonts pre-connected, SEO meta)
├── package.json               # npm scripts & dependencies
├── vite.config.ts             # Build config, `@/` alias, rollup visualizer, manual chunks
├── tsconfig.json              # App TS config (references tsconfig.node.json)
├── tsconfig.app.json          # Strict compiler options, `@/*` paths
├── tsconfig.node.json         # Config for Vite config file
├── playwright.config.ts       # E2E test config (baseURL http://localhost:5176)
├── tailwind.config.js         # Theme extensions (IBM Plex Sans/Mono, CSS vars)
├── postcss.config.js          # Tailwind + autoprefixer
├── eslint.config.js           # Flat ESLint config
├── components.json            # shadcn/ui registry config
├── public/                    # Static assets (images, case-studies, logos, team photos)
├── tests/
│   └── smoke.spec.ts          # Playwright smoke tests for core routes
├── src/
│   ├── main.tsx               # React root render (imports carbon.scss)
│   ├── App.tsx                # HashRouter, ScrollToTop, lazy route declarations
│   ├── App.css                # App-level styles
│   ├── index.css              # Tailwind directives, CSS vars, scrollbar, reduced-motion
│   ├── vite-env.d.ts          # Vite client types
│   ├── carbon-motion.d.ts     # Custom type declarations
│   ├── pages/                 # Top-level route components
│   │   ├── Cover.tsx          # Homepage (default `/`)
│   │   ├── Cover2.tsx, Cover3.tsx  # Alternative homepage variants
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectDetail.tsx
│   │   ├── UnderConstruction.tsx
│   │   ├── partners/
│   │   │   └── HuaweiPartnership.tsx
│   │   ├── services/          # ~40 service-specific landing pages
│   │   │   ├── CloudHub.tsx
│   │   │   ├── CoolingThermal.tsx
│   │   │   ├── ServiceNow.tsx
│   │   │   └── ... (many more)
│   │   └── infrastructure/
│   │       └── OperationalEfficiency.tsx
│   ├── sections/              # Reusable homepage sections (Hero, Footer, Testimonials, etc.)
│   ├── components/            # Shared components + UI primitives
│   │   ├── ui/                # shadcn/ui components (button, card, dialog, etc.)
│   │   ├── Navigation.tsx     # Mega-menu nav (desktop + mobile)
│   │   ├── Chatbot.tsx
│   │   ├── FloatingWhatsApp.tsx
│   │   ├── ErrorBoundary.tsx
│   │   ├── OptimizedImage.tsx
│   │   └── Hero*Graphics.tsx  # Page-specific WebGL/Canvas hero visuals
│   ├── hooks/                 # Custom React hooks
│   │   ├── use-mobile.ts
│   │   ├── useInView.ts
│   │   └── usePageSEO.ts
│   ├── lib/                   # Utilities
│   │   ├── utils.ts           # `cn()` helper (clsx + tailwind-merge)
│   │   └── webVitals.ts       # Core Web Vitals tracking
│   ├── data/                  # Static data configs
│   │   └── siteMenu.ts        # Single source of truth for navigation links
│   ├── styles/
│   │   ├── carbon.scss        # IBM Carbon Design System SCSS imports
│   │   ├── carbon-typography.css   # Fluid type scale (MANDATORY for pages)
│   │   ├── design-tokens.css  # Semantic CSS custom properties
│   │   └── designSystem.ts    # JS/TS design tokens (colors, spacing, radius)
│   └── config/
│       └── services.ts        # Service metadata config
```

---

## Build & Development Commands

All commands are run from `app/`:

```bash
cd app

# Start dev server (Vite defaults to port 5173; project scripts often use 5176)
npm run dev

# Production build (type-check then Vite build)
npm run build

# Preview production build locally
npm run preview

# Lint TypeScript + React files
npm run lint

# Run Playwright E2E tests (spins up dev server automatically)
npm run test

# Run Playwright in UI mode
npm run test:ui
```

**Port Notes:** The Playwright config expects the dev server on `http://localhost:5176`. If `npm run dev` binds to a different port, update `playwright.config.ts` or launch Vite with `--port 5176`.

---

## Code Style & Conventions

### 1. Import Aliases
- **Always use `@/` aliases** for cross-directory imports.
  - ✅ `@/hooks/useInView`, `@/styles/carbon-typography.css`, `@/sections/Footer`
  - ❌ `../../../../hooks/useInView`
- Sibling imports (`./`, `../`) are fine for files within the same module.

### 2. Typography
- **Single source of truth:** `src/styles/carbon-typography.css`
- Use Carbon class names such as `.carbon-fluid-display-03`, `.carbon-body-02`, `.carbon-label-02`.
- **Do not** use raw Tailwind utilities like `text-2xl font-semibold` for page text.
- Load `carbon-typography.css` **once per page** (in the page component). **Never** import it inside individual section components.

### 3. Styling Rules
- Tailwind utilities are the default for layout and spacing.
- IBM Carbon SCSS (`styles/carbon.scss`) provides the design-system baseline.
- Custom CSS animations (float, shimmer) live in `index.css`.
- Theme tokens (colors, radius, etc.) are defined via CSS variables in `index.css` and consumed by Tailwind config.

### 4. Component Patterns
- shadcn/ui components are located in `src/components/ui/` and use `class-variance-authority` + Radix UI.
- Example usage:
  ```tsx
  import { Button } from '@/components/ui/button';
  import { Card, CardHeader, CardTitle } from '@/components/ui/card';
  ```

### 5. Performance
- Heavy pages (> 500 KB JS) **must** use route-level code splitting:
  ```tsx
  const Page = lazy(() => import('@/pages/services/PageName'));
  ```
- Wrap lazy routes in `<Suspense fallback={...}>`.
- Vite already splits manual chunks for `vendor-react` and `vendor-ui`.

### 6. Navigation / Links
- Because the app uses `HashRouter`, all internal links must include the `/#/` hash prefix.
- `siteMenu.ts` is the single source of truth for navigation structure. Update it when adding or renaming routes so both desktop mega-menu and mobile hamburger stay in sync.

---

## Testing Strategy

| Type | Tool | Details |
|------|------|---------|
| E2E | Playwright | `tests/smoke.spec.ts` iterates over core routes, asserts page content length > 100, and fails on any `pageerror` or non-aborted network failure. |
| Lint | ESLint | Flat config, runs on `**/*.{ts,tsx}` except `dist/`. |
| Type Check | TypeScript | `tsc -b` runs as part of `npm run build`. |

**CI behaviour (Playwright):**
- `retries: 2`, `workers: 1` when `CI` env var is set.
- `forbidOnly: true` in CI (no `.only` tests).

**Adding a new page?** Add its route to `tests/smoke.spec.ts` so smoke coverage stays complete.

---

## Deployment & Runtime Architecture

- **Output:** Static site generated by Vite into `app/dist/`.
- **Hosting:** Designed for static hosting (e.g., CDN, Netlify, Vercel, or traditional web server).
- **No server-side runtime:** All logic is client-side React. Contact forms or chatbot integrations must call external APIs; there is no backend API inside this repo.
- **SEO:** Meta tags are hard-coded in `index.html`. For page-specific SEO, use `usePageSEO` hook or update tags dynamically, but remember this is a CSR app (search engines that execute JS will see updates).

---

## Security Considerations

- **Secrets:** The repository contains `app/.env.local` (ignored by git). Never commit environment files.
- **Dependencies:** The project pulls in many Radix UI and Carbon packages. Keep `npm audit` clean before deploying.
- **CSP / External Resources:** `index.html` loads Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`). If a strict CSP is added, allow these origins.
- **Build artifacts:** `app/dist/` and `.vite/` are ignored and must never be committed.

---

## Git Hygiene

The following are already in `.gitignore`. **Never commit them:**

- `app/dist/` — build artifacts
- `app/node_modules/.vite/` — Vite dependency cache
- `.env.local` — environment secrets
- `app/backups/` — local snapshot files (component backups)
- `app/src/components/backups/` — old component versions
- `screenshots/` — local screenshot dumps
- `*.tsbuildinfo` — TypeScript incremental build info

If you introduce new generated artifacts, add exclusions to the **root** `.gitignore`.

---

## Useful Reference Files

| File | Purpose |
|------|---------|
| `app/src/data/siteMenu.ts` | All nav links — update when routes change |
| `app/src/styles/designSystem.ts` | JS design tokens (colors, typography, spacing, radius) |
| `app/src/styles/carbon-typography.css` | Mandatory page typography classes |
| `app/playwright.config.ts` | E2E test ports and device settings |
| `app/vite.config.ts` | Aliases, manual chunks, bundle visualizer |
| `app/components.json` | shadcn/ui configuration |

---

## Contact & Context

- **Brand voice:** Professional, technical, risk-mitigation focused, enterprise-grade.
- **Key people:** David Pridmore (CEO & CTO) — referenced in hero CTAs and about sections.
- **Partners:** Huawei Enterprise Partner, EZY Distribution Alliance.
- **Regions:** Pakistan, UK, GCC.

For questions about content strategy or brand tone, refer to the brief documents in the repository root (e.g., `MASTER_TEMPLATE_BRIEF.md`, `DESIGN_LOGIC.md`).
