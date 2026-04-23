# Master Template Brief — Perception IT Website

## IBM Carbon Design System — Page-Type Differentiation Guide

**Project:** Perception IT Corporate Website  
**Stack:** React + Vite + TypeScript + Tailwind CSS + IBM Carbon  
**Last Updated:** 2026-04-18  
**Prerequisite:** Read `UNIVERSAL_DESIGN_BRIEF.md` for universal tokens (color, typography, spacing, motion, grid)  

---

## 1. Site Architecture & Page Taxonomy

### Page Types Defined

| Type | Purpose | Examples | Route Pattern |
|------|---------|----------|---------------|
| **Main Landing** | Conversion-focused homepage. Brand impression + trust + CTA | `Cover.tsx` | `/` |
| **Hub** | Category landing. Educate + navigate to child services | Infrastructure Hub, Cloud Hub, Services | `/services/infrastructure`, `/services/cloud` |
| **Service** | Deep-dive product page. Buyer's journey: problem → solution → proof → action | CoolingAirflow, ServerContinuity, HardwareSupport | `/services/:service-id` |
| **Project / Case Study** | Credibility proof. Project narrative with metrics | Projects list, Ibrahim Fibres detail | `/projects`, `/projects/case-study/:slug` |
| **About** | Company story. Team, values, history, certifications | About (under construction) | `/about` |
| **Contact** | Lead capture. Form + direct contact channels | Contact | `/contact` |

### Navigation Hierarchy

```
Perception IT (Logo) → Home
├── Solutions (Mega Menu)
│   ├── AI Accelerator, Cloud Control, Server Continuity Suite...
├── Cloud (Mega Menu)
│   ├── Cloud Management, Cost Optimisation, DevOps, Containers, Operations
├── Infrastructure (Mega Menu)
│   ├── Server Continuity, Data Center Services, Data Centre 2, Hardware Support, SLA Support, Business Continuity
│   └── Data Centre Services 3 (sub-menu)
│       ├── Cooling & Airflow, Power & UPS, Rack & Cabinet, Environmental Monitoring...
├── Data & Analytics (Mega Menu)
│   ├── IoT Analytics, Data Lakes, Geospatial, Data Federation, Database Optimisation
├── AI (Mega Menu)
│   ├── AI Accelerator, Model Development, MLOps, AI Consulting
├── IT Platforms (Mega Menu)
│   ├── ServiceNow, Maximo, Jira, Custom Development, Service Desk
├── About
└── Contact
```

### URL Conventions

| Page Type | URL Pattern | Example |
|-----------|-------------|---------|
| Landing | `/` | `/` |
| Hub | `/services/:category` | `/services/infrastructure` |
| Service | `/services/:service-id` | `/services/cooling-airflow` |
| Projects list | `/projects` or `/projects/:category` | `/projects`, `/projects/infrastructure` |
| Case study detail | `/projects/case-study/:slug` | `/projects/case-study/out-of-warranty-server-support-ibrahim-fibres` |
| About | `/about` | `/about` |
| Contact | `/contact` | `/contact` |

---

## 2. Universal Design Tokens (All Pages)

**Reference `UNIVERSAL_DESIGN_BRIEF.md` for complete token tables.**

Quick-reference for page-type decisions:

| Token | Light Theme | Dark Theme | Page-Type Usage |
|-------|------------|------------|-----------------|
| `$background` | `#ffffff` | `#161616` | Default page background |
| `$layer-01` | `#f4f4f4` | `#262626` | Card backgrounds, section alternation |
| `$layer-02` | `#ffffff` | `#393939` | Elevated cards, dropdowns |
| `$text-primary` | `#161616` | `#f4f4f4` | Headings on light / dark |
| `$text-secondary` | `#525252` | `#c6c6c6` | Body text, descriptions |
| `$link-primary` | `#0f62fe` | `#78a9ff` | Interactive links |
| `$border-subtle` | `#e0e0e0` | `#393939` | Card borders, dividers |

---

## 3. Main Landing Page (Homepage) Template

**File:** `src/pages/Cover.tsx`  
**Route:** `/`  
**Purpose:** First impression. Convert visitors to category explorers or direct leads.  
**Carbon Influence:** [Homepage pattern](https://carbondesignsystem.com/patterns/global-header/), [Content Switcher](https://carbondesignsystem.com/components/content-switcher/usage/), [Tile](https://carbondesignsystem.com/components/tile/usage/)

### Section Sequence

| # | Section | Background | Height | Carbon Component |
|---|---------|-----------|--------|------------------|
| 1 | **Hero** | `#0F172A` custom dark | `min-h-screen` | Custom hero |
| 2 | **Trust Tiles** | White | Auto | Grid of clickable tiles |
| 3 | **Attention Block** | White | Auto | Feature highlight |
| 4 | **Differentiator** | `#f4f4f4` | Auto | Content switcher tabs |
| 5 | **Case Studies** | White | Auto | Carousel or grid |
| 6 | **Testimonials** | `#161616` dark | Auto | Featured quote |
| 7 | **Delivery** | `#f4f4f4` | Auto | Process steps |
| 8 | **Reliability** | White | Auto | Stats + proof |
| 9 | **Partners** | White | Auto | Logo ticker |
| 10 | **Clients** | `#f4f4f4` | Auto | Logo ticker |
| 11 | **About Teaser** | White | Auto | Team/company snippet |
| 12 | **Closing CTA** | `#0f62fe` | Auto | Full-width CTA banner |
| 13 | **Contact** | White | Auto | Form + info |
| 14 | **Footer** | `#161616` | Auto | Site map + legal |

### Hero Specifications

- **Background:** Dark gradient (`#0F172A` to `#0A2C50`) with animated geometric patterns
- **Headline:** `carbon-fluid-display-04` — max 2 lines, light weight (300)
- **Subheadline:** `carbon-heading-02` — value proposition, 1 sentence
- **CTAs:** Primary (blue filled) + Secondary (white outline) — both with `ArrowRight`
- **Right side:** Hero graphics component (abstract tech illustration or 3D render)
- **Scroll indicator:** Optional subtle bounce animation on arrow

### Trust Tiles Pattern

- **Grid:** 6 tiles on desktop (`grid-cols-6`), 3 on tablet, 2 on mobile
- **Tile:** `bg-gray-50 border border-gray-100 p-4 hover:border-[#0f62fe]`
- **Icon:** 40px container, colored icon (use category accent colors)
- **Headline:** 13px semibold, 1 line
- **Subtext:** 11px regular, muted
- **Behavior:** Clickable, scrolls to relevant section or links to hub page

### Differentiator Section (Content Switcher Pattern)

- **Pattern:** Carbon [Content Switcher](https://carbondesignsystem.com/components/content-switcher/usage/)
- **Tabs:** 3–5 category tabs (e.g., Cloud, Infrastructure, Data, AI, Platforms)
- **Active tab:** `bg-[#0f62fe] text-white`
- **Inactive tab:** `bg-transparent border border-[#e0e0e0] text-[#525252]`
- **Content panel:** Feature list + image per tab
- **Transition:** Cross-fade, 300ms

### Case Studies Carousel

- **Pattern:** Carbon [Carousel](https://carbondesignsystem.com/components/tile/usage/) or custom slider
- **Cards:** 3 visible on desktop, 1 on mobile
- **Card style:** Image top, text bottom, no border-radius
- **Navigation:** Dot indicators + prev/next arrows
- **Auto-play:** NO — user-controlled only (accessibility)

### Testimonial Section

- **Background:** `#161616` (Gray 100)
- **Quote:** IBM Plex Serif, `text-xl`, `#f4f4f4`
- **Attribution:** Avatar (initials) + name + role
- **Layout:** Single featured quote, centered, max-width 800px

### Closing CTA Banner

- **Background:** `#0f62fe` solid or gradient to teal
- **Headline:** `carbon-fluid-heading-04` white
- **Button:** White background, `#0f62fe` text, sharp corners
- **Padding:** `py-20` (80px) for impact

### Landing Page Rules

1. **No scroll-spy side nav** — landing pages use anchor links or floating PIP nav only
2. **Hero must be full viewport height** — creates immersion
3. **At least 3 CTAs above the fold** — hero primary, hero secondary, trust tile clicks
4. **Social proof within 2 scrolls** — trust tiles → case studies must appear early
5. **Footer is always dark** (`#161616`) — bookend the page

---

## 4. Hub Page Template

**Files:** `InfrastructureHub.tsx`, `CloudHub.tsx`, `Services.tsx`  
**Routes:** `/services/infrastructure`, `/services/cloud`, `/services`  
**Purpose:** Category education. Bridge from "what we do" (landing) to "how we do it" (service).  
**Carbon Influence:** [Content Switcher](https://carbondesignsystem.com/components/content-switcher/usage/), [Structured List](https://carbondesignsystem.com/components/structured-list/usage/), [Tile](https://carbondesignsystem.com/components/tile/usage/)

### Section Sequence

| # | Section | Background | Purpose |
|---|---------|-----------|---------|
| 1 | **Hero** | White or light gradient | Category-level value prop |
| 2 | **Problem Statement** | `#f4f4f4` | Agitate the pain point |
| 3 | **Solution Overview** | White | Introduce the suite/platform |
| 4 | **Hub & Spoke Cards** | `#f4f4f4` | Grid of child services |
| 5 | **Process / How It Works** | White | 3–4 step buyer journey |
| 6 | **Case Studies (filtered)** | `#161616` dark | Category-specific proof |
| 7 | **FAQ / Objections** | `#f4f4f4` | Accordion of common questions |
| 8 | **Contact / CTA** | White | Form or direct contact |

### Hero Specifications (Hub)

- **Different from service page:** Broader, category-level messaging — NOT product specs
- **Headline:** "Infrastructure That Actually Works" — emotional + outcome-focused
- **Subheadline:** One sentence covering the breadth of the category
- **No pricing** — pricing lives on service pages only
- **Badge:** Category label pill (e.g., `INFRASTRUCTURE` in uppercase)

### Hub & Spoke Card Pattern

- **Grid:** 3–4 cards per row on desktop, 2 on tablet, 1 on mobile
- **Card structure:**
  ```
  ┌─────────────────────────┐
  │ [Icon]  Service Name    │
  │         Description     │
  │                         │
  │ [Tags]          →       │
  └─────────────────────────┘
  ```
- **Icon:** Carbon pictogram or `@carbon/icons-react` icon, 32px
- **Title:** `carbon-heading-02`
- **Description:** `carbon-body-01` line-clamp-2
- **Tags:** 1–2 category tags using Carbon [Tag](https://carbondesignsystem.com/components/tag/usage/) component
- **Hover:** Border color change to `#0f62fe`, subtle lift
- **Link:** Entire card is clickable, navigates to service page

### Process Steps Pattern

- **Layout:** Horizontal timeline on desktop, vertical stack on mobile
- **Step indicator:** Number in circle (`01`, `02`, `03`) or checkmark
- **Title:** `carbon-heading-02`
- **Description:** `carbon-body-01`
- **Connector:** Thin line between steps (`border-l-2` or horizontal rule)
- **Carbon reference:** [Progress Indicator](https://carbondesignsystem.com/components/progress-indicator/usage/)

### FAQ Accordion Pattern

- **Component:** Carbon [Accordion](https://carbondesignsystem.com/components/accordion/usage/)
- **Style:** No border-radius, `border-b border-[var(--cds-border-subtle)]`
- **Header:** `carbon-heading-02`
- **Content:** `carbon-body-01`
- **Behavior:** One open at a time (optional), smooth height transition

### Hub Page Rules

1. **Never dive into product specs** — that's for service pages
2. **Every child service must be reachable within 1 click** from the hub
3. **Case studies must be category-filtered** — don't show cloud case studies on infrastructure hub
4. **FAQ section is mandatory** — hubs answer "should I explore further?"
5. **Always link back to landing page** in breadcrumb: `Home > Services > Infrastructure`

---

## 5. Service Page Template

**Files:** `CoolingAirflow.tsx`, `ServerContinuity.tsx`, `HardwareSupport.tsx`, etc.  
**Routes:** `/services/:service-id`  
**Purpose:** Convert interested buyers. Full buyer's journey from problem to purchase.  
**Carbon Influence:** [Tabs](https://carbondesignsystem.com/components/tabs/usage/), [Data Table](https://carbondesignsystem.com/components/data-table/usage/), [Tile](https://carbondesignsystem.com/components/tile/usage/), [Structured List](https://carbondesignsystem.com/components/structured-list/usage/)

### Section Sequence (14-Section Master Pattern)

| # | Section ID | Background | Purpose |
|---|-----------|-----------|---------|
| 1 | `overview` (Hero) | `#0a1628` dark | Product-level value prop + feature bullets |
| 2 | `trust` | White | Quick navigation trust boxes |
| 3 | `hardware` | `#f4f4f4` | What you buy (products/specs) |
| 4 | `installation` | White | How it gets deployed |
| 5 | `managed` | `#f4f4f4` | Who runs it (service tiers) |
| 6 | `pakistan` | White | Local reality / context |
| 7 | `dependencies` | `#f4f4f4` | Risk transparency |
| 8 | `integration` | White | Ecosystem connections |
| 9 | `cases` | `#161616` dark | Case studies (credibility) |
| 10 | `feedback` | `#161616` dark | Testimonials (social proof) |
| 11 | `partners` | White | Partner logos |
| 12 | `portfolio` | `#f4f4f4` | Client logos |
| 13 | `cta` | White | Next step / assessment |
| 14 | `legal` | `#f4f4f4` | Disclaimers |

### Hero Specifications (Service)

- **Background:** Dark (`#0a1628`) with ambient gradient orbs (animated drift)
- **Left column:**
  - Breadcrumb: `Home > Services > Infrastructure > Cooling & Airflow`
  - Label: `carbon-label-01` uppercase — category name
  - Headline: `carbon-fluid-heading-04` — service name
  - Subheadline: `carbon-heading-02` — 1-line value proposition
  - Body: `carbon-body-02` — 2-3 sentences on differentiation
  - CTAs: Primary (`Request Assessment`) + Secondary (`Explore Hardware`)
- **Right column:** 3–4 feature bullets with icons (border-left accent bar)
- **No pricing in hero** — pricing lives in Managed Services section

### Trust Boxes (Quick Navigation)

- **Placement:** Immediately after hero, before main content
- **Grid:** 6 boxes, 3 columns on desktop, 2 on mobile
- **Box:** Icon + label + arrow, clickable scroll-to-section
- **Background:** White (`var(--cds-background)`)
- **Purpose:** Scannable overview of page sections, reduces bounce

### Buyer Journey Sections (3–8)

Each buyer journey section follows this structure:

```
┌─────────────────────────────────────────────┐
│ [Accent bar]  EYEBROW LABEL                  │
│ Section Headline (fluid-heading-04)          │
│ 1–2 sentence description (body-01)           │
│                                              │
│ [Card Grid or Feature List]                  │
│                                              │
│ [Callout / Warning / Stat Banner]            │
│                                              │
│ [Image Placeholder / 3D Rendering]           │
└─────────────────────────────────────────────┘
```

**Eyebrow pattern:**
```tsx
<div className="mb-3">
  <div className="w-6 h-0.5 bg-[#009d9a] mb-2" />
  <p className="carbon-label-01 text-[#161616] uppercase tracking-wider">Step 1: What You Buy</p>
</div>
```

**Card pattern:**
- Background: `var(--cds-layer-01)` (white on gray sections, gray on white sections)
- Border: `border border-[var(--cds-border-subtle)]`
- Padding: `p-5` or `p-6`
- Hover: `hover:shadow-md hover:-translate-y-1` (enhanced) or `hover:shadow-sm` (reference)
- No border-radius: `rounded-none`

**Callout / Warning pattern:**
- Left border: `border-l-4 border-[#f97316]`
- Background: `bg-[#fff8e1]` (light amber)
- Icon: `WarningAlt` in `#f97316`
- Use for: common failures, cautions, important notes

**Stat banner pattern:**
- Background: `bg-[#0f62fe]` or gradient `bg-gradient-to-br from-[#0f62fe] to-[#009d9a]`
- Large number: `carbon-fluid-heading-04` white
- Description: `carbon-body-01 text-white/90`
- Use for: key metrics, proof points, compelling stats

### Pricing Tier Pattern (Managed Services Section)

- **Grid:** 3 columns on desktop, 1 on mobile
- **Card structure:**
  ```
  ┌─────────────────────────────┐
  │ [Recommended badge — optional]│
  │ Tier Name                     │
  │ PKR XXX/mo                    │
  ├─────────────────────────────┤
  │ ✓ Feature 1                   │
  │ ✓ Feature 2                   │
  │ ✓ Feature 3                   │
  │ ...                           │
  ├─────────────────────────────┤
  │ [CTA Button]                  │
  └─────────────────────────────┘
  ```
- **Highlighted tier:** `border-2 border-[#0f62fe]`, blue top bar, "Recommended" badge
- **Feature list:** `CheckmarkFilled` in `#24a148`, one feature per line
- **CTA buttons:** Primary (blue) for recommended, Tertiary (outline) for others
- **Comparison table:** Below cards, full feature matrix with checkmarks/dashes

### Credibility Section (Case Studies + Testimonials)

- **Background:** `#161616` (Gray 100) — creates visual break from buyer journey
- **Shared header:** "Credibility" eyebrow + "Proven Results" headline
- **Case study cards:**
  - Background: `#262626` (Gray 90)
  - Border: `border-[#393939]`
  - Hover: `hover:border-[#78a9ff]`
  - Image area: Project photo placeholder with watermark initial fallback
  - Metrics: Large number in `#0f62fe`
- **Testimonial card:**
  - 2-column layout: Image/logo left, quote right
  - Quote: IBM Plex Serif, `text-xl`, `#f4f4f4`
  - Attribution: Avatar circle + name + role
  - Navigation: Prev/Next arrows overlapping card edge

### Service Page Rules

1. **Scroll-spy side nav on desktop** — sticky left nav highlighting active section
2. **Mobile dropdown nav** — `<select>` element for section jumping
3. **Zebra-stripe backgrounds** — alternate white / `#f4f4f4` every 1–2 sections
4. **Dark band for credibility** — case studies + testimonials share `#161616`
5. **Every section must have a visual anchor** — image placeholder, chart, icon, or pictogram
6. **No dead ends** — every page ends with CTA + legal disclaimer
7. **Breadcrumb on every service page** — `Home > Services > Category > Service`

---

## 6. Project / Case Study Page Template

**Files:** `Projects.tsx` (listing), `ProjectDetail.tsx` (detail)  
**Routes:** `/projects`, `/projects/case-study/:slug`  
**Purpose:** Proof. Turn skeptics into believers with detailed project narratives.  
**Carbon Influence:** [Data Table](https://carbondesignsystem.com/components/data-table/usage/), [Tag](https://carbondesignsystem.com/components/tag/usage/), [Breadcrumb](https://carbondesignsystem.com/components/breadcrumb/usage/)

### Projects Listing Page

**Section Sequence:**
1. **Hero** — White background, `carbon-fluid-heading-04` "Client Results"
2. **Filter Tabs** — Category pills (All, Cloud, Infrastructure, Data, AI, Platforms)
3. **Case Study Grid** — 3-column card grid
4. **CTA** — "Start Your Project" banner

**Filter Tabs Pattern:**
- Component: Carbon [Content Switcher](https://carbondesignsystem.com/components/content-switcher/usage/) or custom pills
- Active: `bg-[#0f62fe] text-white`
- Inactive: `bg-transparent border border-[#e0e0e0] text-[#525252]`

**Case Study Card Pattern:**
```
┌─────────────────────────────┐
│ [Image — 16:9 aspect]       │
│ Category tag + Client name  │
│ Title (heading-02)          │
│ 2-line description          │
│ [Tech tags]        →        │
└─────────────────────────────┘
```
- Image: Project photo or 3D rendering, `aspect-[16/9]`
- Tags: Carbon [Tag](https://carbondesignsystem.com/components/tag/usage/) component, 2–3 max
- Hover: Border highlight + lift

### Case Study Detail Page

**Section Sequence:**
1. **Hero** — Full-width image background with dark gradient overlay, title + client + industry
2. **Metrics Bar** — 3–4 key numbers in a row (e.g., "99.9% Uptime", "60% Faster", "$2.3M Saved")
3. **Challenge / Solution / Outcome** — 3-column scannable grid
4. **Detailed Narrative** — Long-form text with inline images/diagrams
5. **Technologies Used** — Tag list
6. **Related Services** — Links back to service pages
7. **Testimonial** — Client quote (dark card, same pattern as service page)
8. **Next Case Study** — Link to adjacent project
9. **CTA** — "Discuss Your Project"

**Metrics Bar Pattern:**
- Background: White or `#f4f4f4`
- Layout: `grid-cols-4` on desktop, `grid-cols-2` on mobile
- Each metric: Large number (`text-4xl font-light`) + label (`carbon-label-01`)
- Divider: `border-r` between metrics

**Challenge / Solution / Outcome Pattern:**
```
┌─────────────┬─────────────┬─────────────┐
│ CHALLENGE   │ SOLUTION    │ OUTCOME     │
│ (red bar)   │ (blue bar)  │ (green bar) │
│             │             │             │
│ Description │ Service link│ Description │
│             │ + details   │ + metrics   │
└─────────────┴─────────────┴─────────────┘
```
- Top accent bar: `#fa4d56` (red), `#0f62fe` (blue), `#24a148` (green)
- Labels: `carbon-label-01` uppercase in matching color
- Solution column: Links to relevant service pages with `→` arrows

### Project Page Rules

1. **Every case study must have a hero image** — no exceptions
2. **Metrics must be specific** — "40% energy reduction" not "significant savings"
3. **Client names only with permission** — use "Major Asian Telecom" if NDA applies
4. **Technology tags link to service pages** — create cross-navigation
5. **Related case studies at bottom** — keep the user exploring

---

## 7. About Page Template

**File:** `About.tsx` (currently under construction)  
**Route:** `/about`  
**Purpose:** Humanize the brand. Build trust through transparency.  
**Carbon Influence:** [Tile](https://carbondesignsystem.com/components/tile/usage/), [Structured List](https://carbondesignsystem.com/components/structured-list/usage/)

### Section Sequence

| # | Section | Background | Purpose |
|---|---------|-----------|---------|
| 1 | **Hero** | `#f4f4f4` | Company headline + mission |
| 2 | **Story / Timeline** | White | Company history, milestones |
| 3 | **Values** | `#f4f4f4` | 3–4 core values with icons |
| 4 | **Team** | White | Leadership photos + bios |
| 5 | **Certifications** | `#f4f4f4` | Partner badges, certifications |
| 6 | **Stats** | White | Employee count, years, clients, countries |
| 7 | **Contact CTA** | `#0f62fe` | "Work With Us" banner |

### Hero Specifications (About)

- **Background:** Light (`#f4f4f4`) — not dark. About pages should feel open and human
- **Headline:** Mission statement, not product pitch — e.g., "We Make Technology Invisible"
- **Subheadline:** Origin story — 2 sentences max
- **Image:** Team photo or office environment — real photography, not 3D render

### Values Pattern

- **Grid:** 4 columns on desktop, 2 on tablet, 1 on mobile
- **Card:** Icon (48px pictogram) + value name + 1-sentence description
- **Icons:** Use Carbon [Pictograms](https://carbondesignsystem.com/elements/pictograms/library/) — e.g., `Security`, `GlobalNetwork`, `Cloud`, `DataCenter`

### Team Pattern

- **Grid:** 4 columns on desktop, 2 on tablet, 1 on mobile
- **Card:** Photo (1:1 square, no border-radius) + name + role + LinkedIn icon
- **Photo style:** Professional headshot, consistent lighting, neutral background
- **Hover:** Show brief bio or quote

### Stats Bar Pattern

- **Layout:** Full-width row, 4–5 metrics
- **Style:** Large number (`text-5xl font-light`) + label below
- **Animation:** Count-up on scroll (optional)

### About Page Rules

1. **No dark hero** — about pages should feel warm and approachable
2. **Real photography only** — no stock photos, no 3D renders for team/ office
3. **Mission before metrics** — lead with purpose, then prove with numbers
4. **Certifications must be current** — show expiration dates if relevant
5. **Team photos must be consistent** — same photographer, same style

---

## 8. Contact Page Template

**File:** `Contact.tsx`  
**Route:** `/contact`  
**Purpose:** Capture leads. Reduce friction to inquiry.  
**Carbon Influence:** [Form](https://carbondesignsystem.com/components/form/usage/), [Text Input](https://carbondesignsystem.com/components/text-input/usage/), [Dropdown](https://carbondesignsystem.com/components/dropdown/usage/), [Button](https://carbondesignsystem.com/components/button/usage/)

### Section Sequence

| # | Section | Background | Purpose |
|---|---------|-----------|---------|
| 1 | **Hero** | White | "Let's Talk" headline |
| 2 | **Contact Form** | `#f4f4f4` | Lead capture form |
| 3 | **Direct Contact** | White | Phone, email, address |
| 4 | **Office Map** | `#f4f4f4` | Location embed |
| 5 | **FAQ** | White | Common pre-sale questions |

### Form Specifications

- **Fields:** Name, Email, Company, Phone (optional), Service Interest (dropdown), Message (textarea)
- **Input height:** 48px (`h-12`)
- **Label position:** Above input, `carbon-label-01`
- **Helper text:** Below input, `carbon-helper-text-01`
- **Focus state:** `border-[#0f62fe]` + `outline-none`
- **Error state:** Border `#da1e28`, error message in red
- **Submit button:** Primary, full-width on mobile, auto-width on desktop
- **Validation:** Real-time on blur, full validation on submit

### Direct Contact Pattern

- **Layout:** 3 columns (Phone, Email, Address)
- **Icon:** 32px, `#0f62fe`
- **Label:** `carbon-label-01` uppercase
- **Value:** `carbon-body-01` — clickable (tel: link, mailto: link)

### Contact Page Rules

1. **Form above the fold on desktop** — no scrolling to find it
2. **Phone number clickable** — `tel:` protocol for mobile
3. **Email clickable** — `mailto:` protocol
4. **Response time expectation** — "We respond within 24 hours" near submit button
5. **Privacy notice** — "Your data is never shared" below form
6. **No CAPTCHA if possible** — use honeypot field instead for accessibility

---

## 9. Shared Components Reference

### Navigation (Mega Menu)

**File:** `src/components/Navigation.tsx`

| Element | Spec |
|---------|------|
| Height | 64px (`h-16`) |
| Background | White, `border-b border-[#e0e0e0]` |
| Logo | Left-aligned, 40px height |
| Top-level items | Solutions, Cloud, Infrastructure, Data & Analytics, AI, IT Platforms, About |
| Mega menu width | Full-width, `max-w-[1584px]` centered |
| Mega menu background | White with shadow |
| Active item | `text-[#0f62fe]` + bottom border indicator |
| Mobile | Hamburger → full-screen overlay |

**Mega Menu Structure (per category):**
```
┌─────────────────────────────────────────────────────────────┐
│ LEFT RAIL        │ MIDDLE RAIL          │ RIGHT RAIL       │
│ Category list    │ Service grid         │ Featured promo   │
│ (vertical)       │ (2-col compact)      │ (Huawei, etc.)   │
└─────────────────────────────────────────────────────────────┘
```

### Footer

**File:** `src/sections/Footer.tsx`

| Element | Spec |
|---------|------|
| Background | `#161616` (Gray 100) |
| Text | `#f4f4f4` primary, `#a8a8a8` secondary |
| Links | `#78a9ff`, hover `#a6c8ff` |
| Layout | 4 columns on desktop: Solutions, Services, Company, Legal |
| Bottom bar | Copyright + social icons |

### Partner Logos Ticker

**File:** `src/sections/PartnerLogos.tsx`

- **Background:** White
- **Animation:** CSS marquee, 30s linear infinite, pause on hover
- **Logo style:** Grayscale or monochrome, 40px height, opacity 70% → 100% on hover
- **Logos:** Huawei, Dell, HP, VMware, Broadcom, Lenovo, Fortinet, Sophos, Veeam

### Client Logos Ticker

**File:** `src/sections/ClientLogos.tsx`

- **Background:** `#f4f4f4` or `#FAFAFA`
- **Animation:** Same marquee pattern as partners
- **Label:** "Trusted By" — `carbon-label-01` uppercase, centered

### FeaturedTestimonial (Shared Component)

**File**: `src/components/FeaturedTestimonial.tsx`  
**Brief**: `BRIEF_FeaturedTestimonial.md`

The canonical single-testimonial card for credibility sections. Replaces all inline testimonial implementations.

```tsx
import FeaturedTestimonial from '../components/FeaturedTestimonial';

<FeaturedTestimonial
  quote="Perception IT transformed our server infrastructure…"
  author="Mr. Usman Zafar"
  role="Head of IT, Ibrahim Fibres Limited"
  client="Ibrahim Fibres"
  initials="UZ"
  clientLogo="/logos/clients/IFL-logo.png"
  bgImage="/case-studies/ibrahim-fibres/hero-1920.jpg"
  contextDesc="Deployed ServerLife Extend™ to Critical Infrastructure…"
  contextLink="/projects/case-study/…"
  solutionLink="/services/server-continuity"
  solutionLabel="ServerLife Extend™ Solution details"
  showNav        // optional: overflow prev/next buttons
  onPrev={…}
  onNext={…}
  variant="dark" // "dark" | "light"
/>
```

**Variants**:
- `dark` (default): Gray 100 theme for dark sections — service pages, case-study detail
- `light`: White/Gray 10 theme for light sections — hub pages, about pages

**Used by**:
- `CoolingAirflowEnhanced.tsx` (DataCentre 4) — paginated testimonials, dark variant
- `ProjectDetail.tsx` — single testimonial, dark variant

**Do not use** for homepage rotating testimonials (handled by `src/sections/Testimonials.tsx`).

### Case Study Card (Reusable)

```tsx
// Dark theme case study card
<Link to="/projects" className="group bg-[#262626] border border-[#393939] hover:border-[#78a9ff] transition-all duration-300 flex flex-col">
  {/* Image area */}
  <div className="relative h-28 bg-[#1a1a1a] border-b border-[#393939] flex items-center justify-center overflow-hidden">
    <span className="text-7xl font-light text-[#2a2a2a]">{clientInitial}</span>
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="carbon-label-01 text-[#525252] uppercase">Project Photo Placeholder</span>
    </div>
    <div className="absolute top-0 left-0 w-full h-0.5 bg-[#0f62fe] opacity-0 group-hover:opacity-100 transition-opacity" />
  </div>
  {/* Content */}
  <div className="p-5 flex-1 flex flex-col">
    <div className="flex items-center gap-2 mb-3">
      <span className="carbon-label-01 text-[#a8a8a8]">{industry}</span>
      <span className="w-1 h-1 rounded-full bg-[#525252]" />
      <span className="carbon-label-01 text-[#6f6f6f]">{primaryTag}</span>
    </div>
    <h3 className="carbon-heading-02 text-[#f4f4f4] mb-2 group-hover:text-[#78a9ff] transition-colors">{title}</h3>
    <p className="carbon-body-01 text-[#a8a8a8] line-clamp-2 mb-5">{description}</p>
    <div className="mt-auto pt-4 border-t border-[#393939]">
      <div className="text-3xl font-light text-[#0f62fe]">{stat}</div>
      <div className="carbon-label-01 text-[#6f6f6f] uppercase">{statLabel}</div>
    </div>
  </div>
</Link>
```

---

## 10. Carbon Component Mapping by Page Type

| Carbon Component | Landing | Hub | Service | Project | About | Contact |
|-----------------|---------|-----|---------|---------|-------|---------|
| [Accordion](https://carbondesignsystem.com/components/accordion/usage/) | — | FAQ | — | — | — | FAQ |
| [Breadcrumb](https://carbondesignsystem.com/components/breadcrumb/usage/) | — | ✓ | ✓ | ✓ | ✓ | — |
| [Button](https://carbondesignsystem.com/components/button/usage/) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [Content Switcher](https://carbondesignsystem.com/components/content-switcher/usage/) | ✓ (Differentiator) | — | — | Filter | — | — |
| [Data Table](https://carbondesignsystem.com/components/data-table/usage/) | — | Comparison | Pricing compare | — | — | — |
| [Dropdown](https://carbondesignsystem.com/components/dropdown/usage/) | — | — | Mobile nav | Category filter | — | Service select |
| [Form](https://carbondesignsystem.com/components/form/usage/) | — | — | — | — | — | ✓ |
| [Link](https://carbondesignsystem.com/components/link/usage/) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [Loading](https://carbondesignsystem.com/components/loading/usage/) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [Modal](https://carbondesignsystem.com/components/modal/usage/) | — | Video/lightbox | — | Image gallery | — | — |
| [Notification](https://carbondesignsystem.com/components/notification/usage/) | — | — | — | — | — | Form success/error |
| [Pagination](https://carbondesignsystem.com/components/pagination/usage/) | — | — | Case studies | Projects list | — | — |
| [Progress Indicator](https://carbondesignsystem.com/components/progress-indicator/usage/) | — | Process steps | — | — | Timeline | — |
| [Structured List](https://carbondesignsystem.com/components/structured-list/usage/) | — | Feature comparison | Feature lists | Tech stack | Certifications | — |
| [Tabs](https://carbondesignsystem.com/components/tabs/usage/) | — | — | Section tabs (mobile) | — | — | — |
| [Tag](https://carbondesignsystem.com/components/tag/usage/) | — | Service tags | Service tags | Tech tags | — | — |
| [Text Input](https://carbondesignsystem.com/components/text-input/usage/) | — | — | — | — | — | ✓ |
| [Tile](https://carbondesignsystem.com/components/tile/usage/) | Trust tiles | Service cards | Feature cards | Case cards | Value cards | — |
| [Tooltip](https://carbondesignsystem.com/components/tooltip/usage/) | Icon hints | — | Abbreviations | Metric definitions | — | — |
| [UI Shell Header](https://carbondesignsystem.com/components/UI-shell-header/usage/) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

---

## 11. Asset & Content Guidelines by Page Type

### Image Requirements

| Page Type | Hero | Section Images | Team/People | Icons |
|-----------|------|---------------|-------------|-------|
| **Landing** | 3D render / abstract tech | 3D renders, diagrams | — | Carbon icons + pictograms |
| **Hub** | 3D render / category visual | Diagrams, infographics | — | Carbon pictograms |
| **Service** | 3D render / product photo | 3D renders, process photos | — | Carbon icons |
| **Project** | Project photography | Site photos, dashboards | Client contacts (if approved) | Technology logos |
| **About** | Team photo / office | Office, events | Professional headshots | Carbon pictograms |
| **Contact** | — | Office exterior | — | Carbon icons |

### Content Tone by Page Type

| Page Type | Tone | Sentence Length | Jargon |
|-----------|------|----------------|--------|
| **Landing** | Bold, aspirational | Short (≤15 words) | Minimal |
| **Hub** | Educational, guiding | Medium (≤20 words) | Defined on first use |
| **Service** | Precise, technical | Medium (≤20 words) | Heavy, always defined |
| **Project** | Narrative, outcome-focused | Medium-long | Explained in context |
| **About** | Human, warm | Medium | Minimal |
| **Contact** | Direct, helpful | Short | None |

### SEO Requirements by Page Type

| Page Type | Title Tag | Meta Description | H1 |
|-----------|-----------|-----------------|----|
| **Landing** | "Perception IT | Enterprise Technology Partner" | 150 chars, value prop | "Enterprise Technology Partner" |
| **Hub** | "[Category] Services | Perception IT" | Category summary | "[Category] Services" |
| **Service** | "[Service Name] | Perception IT" | Service value prop | "[Service Name]" |
| **Project** | "[Client] [Outcome] | Perception IT Case Study" | Project summary | "[Project Title]" |
| **About** | "About Perception IT | Team & Mission" | Company overview | "About Perception IT" |
| **Contact** | "Contact Perception IT | Get in Touch" | Contact invitation | "Contact Us" |

---

## 12. Carbon Design System Reference Links

All links provided by the user, organized by relevance:

### Foundations
- [Color Overview](https://carbondesignsystem.com/elements/color/overview/)
- [Themes](https://carbondesignsystem.com/elements/themes/overview/)
- [Icons Library](https://carbondesignsystem.com/elements/icons/library/)
- [Pictograms Library](https://carbondesignsystem.com/elements/pictograms/library/)
- [2x Grid](https://carbondesignsystem.com/elements/2x-grid/overview/)
- [Typography](https://carbondesignsystem.com/elements/typography/overview/)
- [Spacing](https://carbondesignsystem.com/elements/spacing/overview/)
- [Motion](https://carbondesignsystem.com/elements/motion/overview/)

### Guidelines
- [Accessibility](https://carbondesignsystem.com/guidelines/accessibility/overview/)
- [Carbon for AI](https://carbondesignsystem.com/guidelines/carbon-for-ai/)
- [Content](https://carbondesignsystem.com/guidelines/content/overview/)

### Components
- [Component Overview](https://carbondesignsystem.com/components/overview/components/)
- [Accordion](https://carbondesignsystem.com/components/accordion/usage/)
- [Breadcrumb](https://carbondesignsystem.com/components/breadcrumb/usage/)
- [Button](https://carbondesignsystem.com/components/button/usage/)
- [Checkbox](https://carbondesignsystem.com/components/checkbox/usage/)
- [Content Switcher](https://carbondesignsystem.com/components/content-switcher/usage/)
- [Data Table](https://carbondesignsystem.com/components/data-table/usage/)
- [Date Picker](https://carbondesignsystem.com/components/date-picker/usage/)
- [Dropdown](https://carbondesignsystem.com/components/dropdown/usage/)
- [Form](https://carbondesignsystem.com/components/form/usage/)
- [Link](https://carbondesignsystem.com/components/link/usage/)
- [Loading](https://carbondesignsystem.com/components/loading/usage/)
- [Menu](https://carbondesignsystem.com/components/menu/usage/)
- [Modal](https://carbondesignsystem.com/components/modal/usage/)
- [Notification](https://carbondesignsystem.com/components/notification/usage/)
- [Pagination](https://carbondesignsystem.com/components/pagination/usage/)
- [Progress Bar](https://carbondesignsystem.com/components/progress-bar/usage/)
- [Progress Indicator](https://carbondesignsystem.com/components/progress-indicator/usage/)
- [Radio Button](https://carbondesignsystem.com/components/radio-button/usage/)
- [Search](https://carbondesignsystem.com/components/search/usage/)
- [Select](https://carbondesignsystem.com/components/select/usage/)
- [Slider](https://carbondesignsystem.com/components/slider/usage/)
- [Structured List](https://carbondesignsystem.com/components/structured-list/usage/)
- [Tabs](https://carbondesignsystem.com/components/tabs/usage/)
- [Tag](https://carbondesignsystem.com/components/tag/usage/)
- [Text Input](https://carbondesignsystem.com/components/text-input/usage/)
- [Tile](https://carbondesignsystem.com/components/tile/usage/)
- [Toggle](https://carbondesignsystem.com/components/toggle/usage/)
- [Tooltip](https://carbondesignsystem.com/components/tooltip/usage/)
- [Tree View](https://carbondesignsystem.com/components/tree-view/usage/)
- [UI Shell Header](https://carbondesignsystem.com/components/UI-shell-header/usage/)

### Patterns
- [Common Actions](https://carbondesignsystem.com/patterns/common-actions/)
- [Disabled States](https://carbondesignsystem.com/patterns/disabled-states/)
- [Disclosures](https://carbondesignsystem.com/patterns/disclosures-pattern/)
- [Empty States](https://carbondesignsystem.com/patterns/empty-states-pattern/)
- [Filtering](https://carbondesignsystem.com/patterns/filtering/)
- [Fluid Styles](https://carbondesignsystem.com/patterns/fluid-styles/)
- [Forms](https://carbondesignsystem.com/patterns/forms-pattern/)
- [Global Header](https://carbondesignsystem.com/patterns/global-header/)
- [Loading](https://carbondesignsystem.com/patterns/loading-pattern/)
- [Login](https://carbondesignsystem.com/patterns/login-pattern/)
- [Notification](https://carbondesignsystem.com/patterns/notification-pattern/)
- [Overflow Content](https://carbondesignsystem.com/patterns/overflow-content/)
- [Search](https://carbondesignsystem.com/patterns/search-pattern/)
- [Status Indicator](https://carbondesignsystem.com/patterns/status-indicator-pattern/)

### Development
- [Carbon React](https://carbondesignsystem.com/developing/frameworks/react/)
- [Carbon MCP](https://carbondesignsystem.com/developing/carbon-mcp/overview/)
- [Dev Resources](https://carbondesignsystem.com/developing/dev-resources/resources/)
- [React Tutorial](https://carbondesignsystem.com/developing/react-tutorial/overview/)
- [Web Components](https://carbondesignsystem.com/developing/web-components-tutorial/overview/)
- [Angular](https://carbondesignsystem.com/developing/community-frameworks/angular/)
- [GitHub](https://github.com/carbon-design-system/carbon)

---

*This document is a living reference. Update it when new page types, components, or patterns are established.*
