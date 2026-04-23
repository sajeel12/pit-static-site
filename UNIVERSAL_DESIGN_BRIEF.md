# Universal Design Brief — Perception IT Website

## Based on IBM Carbon Design System

**Project:** Perception IT Corporate Website  
**Stack:** React + Vite + TypeScript + Tailwind CSS + IBM Carbon  
**Last Updated:** 2026-04-18  
**Applies to:** All service pages, landing pages, case studies, and shared components  

---

## 1. Purpose & Scope

This document synthesizes the IBM Carbon Design System guidelines (Elements, Components, Patterns, Accessibility, and Content) into actionable rules for the Perception IT website. It is a single source of truth for designers, developers, and content creators.

**Key Carbon resources referenced:**
- [Color Overview](https://carbondesignsystem.com/elements/color/overview/)
- [2x Grid](https://carbondesignsystem.com/elements/2x-grid/overview/)
- [Typography](https://carbondesignsystem.com/elements/typography/overview/)
- [Spacing](https://carbondesignsystem.com/elements/spacing/overview/)
- [Motion](https://carbondesignsystem.com/elements/motion/overview/)
- [Icons Library](https://carbondesignsystem.com/elements/icons/library/)
- [Pictograms Library](https://carbondesignsystem.com/elements/pictograms/library/)
- [Themes](https://carbondesignsystem.com/elements/themes/overview/)
- [Accessibility](https://carbondesignsystem.com/guidelines/accessibility/overview/)
- [Content](https://carbondesignsystem.com/guidelines/content/overview/)
- [Component Overview](https://carbondesignsystem.com/components/overview/components/)
- [Patterns Overview](https://carbondesignsystem.com/patterns/overview/)

---

## 2. Visual Rhythm & Section Break Ratio

### The Problem
Long pages with consecutive sections of the same background color create "wall of text" fatigue. Users lose their place and engagement drops.

### The Solution — Zebra-Stripe Rhythm
Alternate section backgrounds to create visual breathing room. The pattern follows the page's narrative arc:

| Section Arc | Background | Token / Value | Purpose |
|-------------|-----------|---------------|---------|
| Hero | Dark | `#0a1628` custom | Immediate impact, brand presence |
| Quick Nav / Trust | White | `var(--cds-background)` → `#ffffff` | Clean transition, scannable |
| Buyer Journey (odd) | Carbon Gray 10 | `#f4f4f4` | Subtle break from white |
| Buyer Journey (even) | White | `var(--cds-background)` → `#ffffff` | Return to baseline |
| Credibility (Cases + Testimonials) | Carbon Gray 100 | `#161616` | High-contrast credibility zone |
| Social Proof (Partners) | White | `bg-white` (component-level) | Light, trustworthy |
| Social Proof (Clients) | Carbon Gray 10 | `#f4f4f4` | Soft separation before CTA |
| CTA | White | `var(--cds-background)` → `#ffffff` | Clear action space |
| Legal / Footer | Carbon Gray 10 | `#f4f4f4` | Subdued, informational |

### Implementation Rules
1. **Never use more than 2 consecutive sections with the same light background** (white or gray 10).
2. **Dark sections are reserved for credibility** (case studies, testimonials, metrics) — do not use dark backgrounds for informational/buyer-journey sections.
3. **Borders** (`border-b border-[var(--cds-border-subtle)]` or `border-[#393939]` for dark) separate every section to reinforce the rhythm.
4. **Padding scale**: Buyer-journey sections use `py-12` (48px). Credibility sections use `py-16` (64px). Hero uses `pt-40 pb-20`.

---

## 3. Image & 3D Rendering Placeholder Specification

### Purpose
All major content sections should include a visual anchor: photography, 3D rendering, diagram, or illustration. Until final assets are produced, every section MUST contain a clearly labeled placeholder.

### Placeholder Component Specification

```tsx
// Reusable placeholder — add to any section needing imagery
<div className="mt-8 border-2 border-dashed border-[#c6c6c6] bg-white">
  <div className="flex flex-col items-center justify-center p-8 text-center min-h-[200px]">
    <svg className="w-10 h-10 text-[#8d8d8d] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} 
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
    <p className="carbon-label-01 text-[#525252] uppercase tracking-wider mb-2">
      3D Rendering / Photography Placeholder
    </p>
    <p className="carbon-heading-02 text-[#161616] mb-2">{TITLE}</p>
    <p className="carbon-body-01 text-[#525252] max-w-2xl">{DESCRIPTION}</p>
    <p className="carbon-helper-text-01 text-[#8d8d8d] mt-3">
      Target: {ASPECT} aspect ratio | Min 1200×675px | PNG/WebP
    </p>
  </div>
</div>
```

### Asset Types by Section

| Section Type | Asset Type | Aspect Ratio | Style Direction |
|-------------|-----------|--------------|-----------------|
| Hero | 3D rendering or hero photography | 16:9 or 21:9 | Dark, technical, atmospheric. Show infrastructure at scale. Blue/cyan accent lighting. |
| Hardware/Product | 3D product render or product photography | 16:9 or 4:3 | Clean studio lighting. White or light gray background. Show front 3/4 angle. |
| Installation | 3D rendering or documentary photo | 16:9 | Action-oriented. Technicians in safety gear. Aisle-level perspective. Warm practical lighting. |
| Managed Services | 3D rendering of NOC/dashboard | 16:9 | Cool blue ambient. Multiple screens. Engineers at workstations. HUD-style data overlays. |
| Pakistan-Specific | 3D split-view comparison | 16:9 | Dramatic before/after. Left: exposed to elements. Right: protected. Use `#0f62fe` blue for protected highlights. |
| Dependencies | Isometric 3D diagram | 16:9 | Cutaway data centre view. Color-coded systems. Arrows showing interconnection. Clean, schematic. |
| Integration | Node network visualization | 16:9 | Dark background. Glowing connection lines. Central node highlighted in blue. ServiceNow/Huawei brand colors for connected nodes. |
| Case Studies | Project photography or site rendering | 16:9 | Real-world context. Client facility exterior or server room interior. Natural or architectural lighting. |
| Testimonials | Client facility photo or portrait | 16:9 (bg) or 1:1 (avatar) | Professional corporate photography. Depth of field. Warm, trustworthy tone. |
| Partners/Clients | Logo assets | SVG preferred | Monochrome or full-color on white. No effects. |

### 3D Rendering Instructions for AI Agent

When generating 3D renderings for this site, follow these rules:

1. **Color palette**: Dominant grays (`#161616`, `#262626`, `#393939`), with accent blue `#0f62fe` for highlights, status indicators, and protected/engineered elements.
2. **Lighting**: Soft overhead key light with subtle blue rim light on technical equipment. Avoid harsh shadows.
3. **Materials**: Matte metal for racks, glossy black for server faces, translucent blue for status LEDs, brushed aluminum for cooling units.
4. **Camera**: Eye-level or slightly elevated (15°). Use perspective projection, not isometric, unless specified for diagrams.
5. **People**: When included, show professionals in business casual or safety gear (hi-vis vest, hard hat for installation scenes). Diverse representation.
6. **Environment**: Clean, organized, professional. No clutter. Cables managed. Labels visible.
7. **No text overlay**: Renderings should not contain text, logos, or UI elements. These are added in post or code.
8. **Resolution**: Minimum 1920×1080px for heroes, 1200×675px for section images.
9. **Format**: PNG with transparency where appropriate, or WebP for photos.
10. **Style consistency**: All renderings should feel like they belong to the same visual universe — consistent lighting, materials, and camera angles.

---

## 4. Color System & Themes

### Carbon Themes Used

| Theme | Background | Use Case |
|-------|-----------|----------|
| **White** | `#ffffff` | Default page background, cards on white, trust boxes |
| **Gray 10** | `#f4f4f4` | Alternating section backgrounds, visual breaks |
| **Gray 100** | `#161616` | Credibility sections (case studies, testimonials), dark CTAs |

### Token Mapping (Project-Specific)

Since we use Tailwind directly rather than Carbon's Sass tokens, map to these hex values:

| Token | White Theme | Gray 100 Theme | Usage |
|-------|------------|----------------|-------|
| `$background` | `#ffffff` | `#161616` | Page background |
| `$layer-01` | `#f4f4f4` | `#262626` | Card backgrounds |
| `$layer-02` | `#ffffff` | `#393939` | Elevated cards, dropdowns |
| `$border-subtle` | `#e0e0e0` | `#393939` | Card borders, dividers |
| `$border-strong` | `#8d8d8d` | `#6f6f6f` | Focus borders, active states |
| `$text-primary` | `#161616` | `#f4f4f4` | Headings, body text |
| `$text-secondary` | `#525252` | `#c6c6c6` | Descriptions, metadata |
| `$text-placeholder` | `#6f6f6f` | `#6f6f6f` | Disabled, hints |
| `$text-helper` | `#6f6f6f` | `#a8a8a8` | Captions, fine print |
| `$text-inverse` | `#ffffff` | `#161616` | Text on dark backgrounds |
| `$link-primary` | `#0f62fe` | `#78a9ff` | Text links |
| `$link-primary-hover` | `#0043ce` | `#a6c8ff` | Link hover |
| `$icon-primary` | `#161616` | `#f4f4f4` | Icons |
| `$icon-secondary` | `#525252` | `#c6c6c6` | Subdued icons |
| `$icon-inverse` | `#ffffff` | `#161616` | Icons on dark backgrounds |
| `$support-error` | `#da1e28` | `#fa4d56` | Error states, problem indicators |
| `$support-success` | `#24a148` | `#24a148` | Success, validation, positive metrics |
| `$support-warning` | `#f1c21b` | `#f1c21b` | Warnings, caution |
| `$support-info` | `#0043ce` | `#4589ff` | Informational highlights |

### Accent Colors (Brand Extension)

| Color | Hex | Usage |
|-------|-----|-------|
| Perception Blue | `#0f62fe` | Primary actions, links, highlights, metric numbers |
| Perception Blue Hover | `#0353e9` | Button hover states |
| Perception Blue Light | `#78a9ff` | Dark theme links, hover accents |
| Pakistan Red | `#cf0a2c` | Pakistan-specific sections, urgency |
| Warning Amber | `#f97316` | Callouts, caution banners, dependency warnings |
| Success Green | `#24a148` | Checkmarks, positive outcomes, validation |

### Layering Model

**Light theme (White / Gray 10):**
- Base: White `#ffffff`
- Layer 1: Gray 10 `#f4f4f4`
- Layer 2: White `#ffffff`
- Layer 3: Gray 10 `#f4f4f4`

**Dark theme (Gray 100):**
- Base: Gray 100 `#161616`
- Layer 1: Gray 90 `#262626`
- Layer 2: Gray 80 `#393939`
- Layer 3: Gray 70 `#525252`

> **Rule:** Never use mid-tone grays (`#8d8d8d`, `#a8a8a8`) as backgrounds. They create muddy interfaces. Stick to the layering model.

---

## 5. Typography

### Typeface

**Primary:** IBM Plex Sans  
**Serif (quotes only):** IBM Plex Serif  
**Monospace (code/labels):** IBM Plex Mono

```css
font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
font-family: 'IBM Plex Serif', Georgia, Times, serif;
font-family: 'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', Courier, monospace;
```

### Type Scale

| Token | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| `heading-01` | 14px / 0.875rem | 18px | 600 | Card titles, small headers |
| `heading-02` | 16px / 1rem | 22px | 600 | Section subheaders |
| `heading-03` | 20px / 1.25rem | 26px | 400 | Medium headers |
| `fluid-heading-03` | 20px–28px | 26px–32px | 400 | Responsive medium headers |
| `fluid-heading-04` | 28px–42px | 36px–50px | 400 | Major section headers |
| `body-01` | 14px / 0.875rem | 20px | 400 | Body text, descriptions |
| `body-02` | 16px / 1rem | 24px | 400 | Lead paragraphs, longer reads |
| `label-01` | 12px / 0.75rem | 16px | 400 | Labels, tags, metadata, captions |
| `helper-text-01` | 12px / 0.75rem | 16px | 400 | Fine print, disclaimers |
| `code-01` | 12px / 0.75rem | 16px | 400 | Technical specs, monospace labels |

### Typography Rules

1. **Use Light (300), Regular (400), and SemiBold (600) only.** Do not use Bold (700) — it is too heavy for digital.
2. **Headings use Regular (400) weight.** Subheadings and card titles use SemiBold (600).
3. **Italic is reserved for emphasis only** — titles of works, technical terms, quoted speech. Never use italic for body text.
4. **All caps + letter-spacing for labels:** `uppercase tracking-wider` or `uppercase tracking-[0.2em]` for section labels and captions.
5. **No em-dashes:** Use colons `:` instead of `—` throughout the site.
6. **Quotes:** Use IBM Plex Serif at `text-xl` (20px) for testimonials and featured quotes. Wrap in large decorative quotation marks (`&ldquo;` / `&rdquo;`) at `text-8xl` in `#0f62fe` at 45% opacity.
7. **Line length:** Maximum 75 characters per line for body text. Use `max-w-5xl` (1024px) or `max-w-3xl` (768px) containers to constrain width.

---

## 6. Spacing Scale

### Carbon Spacing Tokens

| Token | rem | px | Tailwind | Usage |
|-------|-----|-----|----------|-------|
| `$spacing-01` | 0.125 | 2px | — | Hairline borders |
| `$spacing-02` | 0.25 | 4px | `p-1` | Tight internal padding |
| `$spacing-03` | 0.5 | 8px | `p-2` | Icon gaps, tight margins |
| `$spacing-04` | 0.75 | 12px | `p-3` | Button padding, small gaps |
| `$spacing-05` | 1.0 | 16px | `p-4` | Standard padding, gutters |
| `$spacing-06` | 1.5 | 24px | `p-6` | Card padding, section internal gaps |
| `$spacing-07` | 2.0 | 32px | `p-8` | Large card padding |
| `$spacing-08` | 2.5 | 40px | `p-10` | Section padding |
| `$spacing-09` | 3.0 | 48px | `p-12` | Section vertical padding (`py-12`) |
| `$spacing-10` | 4.0 | 64px | `p-16` | Large section padding (`py-16`) |
| `$spacing-11` | 5.0 | 80px | `p-20` | Hero padding |
| `$spacing-12` | 6.0 | 96px | `p-24` | Major separators |
| `$spacing-13` | 10.0 | 160px | `p-40` | Hero top padding (`pt-40`) |

### Spacing Rules

1. **Always use multiples of 8px** for margins, padding, and component dimensions. The 2px and 4px tokens are for internal component detail only.
2. **Section padding:** `py-12` (48px) for standard sections, `py-16` (64px) for credibility/social proof sections.
3. **Card padding:** `p-5` (20px) or `p-6` (24px).
4. **Grid gaps:** `gap-3` (12px) for compact grids, `gap-4` (16px) for standard grids, `gap-6` (24px) for feature grids.
5. **Stack spacing:** Related elements get `space-y-2` (8px) to `space-y-3` (12px). Unrelated sections get `mt-8` (32px) or more.
6. **No arbitrary spacing:** Avoid one-off pixel values. If a design calls for 20px, use `p-5` (20px) or adjust to `p-4` (16px) or `p-6` (24px).

---

## 7. 2x Grid & Layout

### Mini Unit
The base unit is **8px**. All spacing, sizing, and grid calculations are multiples of 8.

### Breakpoints

| Name | Width | Columns | Margin | Padding | Usage |
|------|-------|---------|--------|---------|-------|
| Small | 320px | 4 | 0px | 16px | Mobile portrait |
| Medium | 672px | 8 | 16px | 16px | Mobile landscape, tablets |
| Large | 1056px | 16 | 16px | 16px | Desktop |
| X-Large | 1312px | 16 | 16px | 16px | Large desktop |
| Max | 1584px | 16 | 24px | 16px | Ultra-wide |

### Layout Patterns

1. **Max content width:** `max-w-[1584px]` (Carbon Max breakpoint). Center with `mx-auto`.
2. **Reading width:** `max-w-5xl` (1024px) for text-heavy sections.
3. **Side navigation:** Fixed `w-56` (224px) on XL screens (`xl:` breakpoint at 1280px). Sticky positioning with `top-20`.
4. **Card grids:** 
   - 3-column: `grid md:grid-cols-3 gap-4`
   - 2-column: `grid md:grid-cols-2 gap-4`
   - 5/3 split (testimonial): `grid md:grid-cols-5 gap-0` with `col-span-2` / `col-span-3`
5. **Gutterless grids:** Use `gap-0` when items share borders (e.g., testimonial left/right split).
6. **Padding:** Always `px-6` (24px) on mobile, consistent with Carbon's 16px padding + our design needs.

### Key Lines
Ensure vertical and horizontal alignment across sections:
- All section headers align to the same left edge.
- Cards in a grid share top and bottom baselines.
- Text inside cards aligns to padding edge, never on the padding itself.

---

## 8. Icons & Pictograms

### Icon System

**Source:** `@carbon/icons-react`  
**Size:** 16px (`w-4 h-4`) for inline, 20px (`w-5 h-5`) for buttons/cards, 24px for navigation  
**Color:** Inherit from parent text color or explicit token (`text-[#0f62fe]`, `text-[#24a148]`, etc.)

### Icon Usage Rules

1. **Inline with text:** `w-4 h-4` with `mt-0.5` or `flex-shrink-0` for alignment.
2. **Card headers:** `w-5 h-5` inside a `w-10 h-10` container with `bg-[color]/10` background.
3. **Navigation:** `w-4 h-4` inside quick-nav boxes with `w-8 h-8` container.
4. **Buttons:** `w-4 h-4` with `ml-2` spacing. Arrow icons (`ArrowRight`) indicate navigation.
5. **Status:** 
   - Success: `CheckmarkFilled` in `#24a148`
   - Warning: `WarningAlt` in `#f97316`
   - Error: `ErrorFilled` in `#fa4d56`
   - Info: `Information` in `#0f62fe`

### Pictograms

**Source:** `@carbon/pictograms-react`  
**Use case:** Large hero illustrations, empty states, section dividers  
**Size:** 64px–128px (`w-16 h-16` to `w-32 h-32`)  
**Color:** Single color, typically `#0f62fe` or `#161616`

### Relevant Pictograms for Perception IT

| Pictogram | Use Case |
|-----------|----------|
| `Server` / `ServerRack` | Hardware sections, data centre pages |
| `Cloud` / `CloudAnalytics` | Cloud services, monitoring dashboards |
| `Security` / `Shield` | Security services, compliance sections |
| `Network` / `GlobalNetwork` | Connectivity, WAN, network services |
| `DataCenter` | Data centre overview pages |
| `ArtificialIntelligence` | AI/ML services, analytics |
| `Automate` / `Process` | Managed services, automation |
| `Support` / `HelpDesk` | Support services, contact sections |

> **Rule:** Use icons for UI actions and small contexts. Use pictograms for large illustrative moments. Never mix them at the same size.

---

## 9. Motion & Animation

### Motion Styles

| Style | Use Case | Easing | Duration |
|-------|----------|--------|----------|
| **Productive** | Micro-interactions, hovers, toggles, dropdowns | `cubic-bezier(0.2, 0, 0.38, 0.9)` | 70ms–150ms |
| **Expressive** | Page transitions, modals, significant reveals | `cubic-bezier(0.4, 0.14, 0.3, 1)` | 240ms–400ms |

### Easing Curves

| Type | Productive CSS | Expressive CSS | Use |
|------|---------------|----------------|-----|
| Standard | `cubic-bezier(0.2, 0, 0.38, 0.9)` | `cubic-bezier(0.4, 0.14, 0.3, 1)` | Elements visible throughout motion |
| Entrance | `cubic-bezier(0, 0, 0.38, 0.9)` | `cubic-bezier(0, 0, 0.3, 1)` | Adding elements to view |
| Exit | `cubic-bezier(0.2, 0, 1, 0.9)` | `cubic-bezier(0.4, 0.14, 1, 1)` | Removing elements from view |

### Duration Tokens

| Token | Duration | Use |
|-------|----------|-----|
| `duration-fast-01` | 70ms | Button states, toggles |
| `duration-fast-02` | 110ms | Fades, opacity changes |
| `duration-moderate-01` | 150ms | Small expansions, short movements |
| `duration-moderate-02` | 240ms | Expansion, toast, system communication |
| `duration-slow-01` | 400ms | Large expansion, important notifications |
| `duration-slow-02` | 700ms | Background dimming, major transitions |

### Implementation Rules

1. **Hover states:** `transition-all duration-300` (150–300ms) with standard easing.
2. **Border color transitions:** `transition-colors` for card hover borders.
3. **Scroll-triggered animations:** Use IntersectionObserver with `duration-700` for fade-in-up effects.
4. **Logo tickers:** Continuous CSS animation with linear timing. Pause on hover.
5. **No bounce, stretch, or spring physics.** Carbon motion is lightweight and efficient.
6. **Respect `prefers-reduced-motion`:** Disable or simplify animations for users who request reduced motion.

### Tailwind Animation Patterns

```css
/* Card hover lift */
hover:shadow-sm hover:border-[#0f62fe] transition-all duration-300

/* Fade in on scroll */
opacity-0 translate-y-4 → opacity-100 translate-y-0 transition-all duration-700

/* Button arrow shift */
group-hover:translate-x-1 transition-transform duration-200

/* Logo ticker */
animation: ticker 30s linear infinite;
@keyframes ticker {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

---

## 10. Component Usage Guidelines

### Buttons

| Variant | Style | Use Case |
|---------|-------|----------|
| **Primary** | `bg-[#0f62fe] hover:bg-[#0353e9] text-white` | Main CTA, form submission |
| **Secondary** | `bg-transparent border border-[#0f62fe] text-[#0f62fe]` | Alternative action |
| **Tertiary** | `bg-transparent border border-white/50 text-white` | Dark background actions |
| **Ghost** | `text-[#0f62fe] hover:bg-[#0f62fe]/10` | Low-emphasis actions, links |

**Rules:**
- Always include an arrow icon (`ArrowRight`) on linked buttons.
- Buttons on dark backgrounds: use Tertiary or Primary.
- Minimum touch target: 48px height.

### Cards

**Light theme card:**
```tsx
<div className="p-5 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] hover:shadow-sm transition-shadow">
```

**Dark theme card:**
```tsx
<div className="p-5 bg-[#262626] border border-[#393939] hover:border-[#78a9ff] transition-all">
```

**Rules:**
- No border-radius (`rounded-none`). Carbon uses sharp corners.
- Hover: border color change + subtle shadow on light, border highlight on dark.
- Internal padding: `p-5` (20px) or `p-6` (24px).

### Links

**Inline links:**
```tsx
<Link className="text-[#0f62fe] hover:underline font-medium">
```

**Dark theme links:**
```tsx
<Link className="text-[#78a9ff] hover:text-[#a6c8ff] transition-colors">
```

**Rules:**
- Links that navigate to another page: add arrow (`→`) and hover shift.
- Links that trigger actions: use button styling.
- Underline only on hover for inline text links.

### Tags / Labels

**Section labels:**
```tsx
<span className="carbon-label-01 text-[#0f62fe] uppercase tracking-wider">
```

**Dark theme labels:**
```tsx
<span className="px-2 py-0.5 bg-[#0f62fe]/15 text-[#78a9ff] carbon-label-01">
```

### Tables

- Use `border-collapse` with `border-b` on rows.
- Header: `border-b-2 border-[var(--cds-border-subtle)]`.
- Checkmarks for true values, `-` for false.
- Alternating row backgrounds not required — rely on row borders.

### Forms / Inputs

- Height: 48px (`h-12`).
- Border: `border border-[var(--cds-border-subtle)]`.
- Focus: `focus:border-[#0f62fe] focus:outline-none`.
- Labels: `carbon-label-01` above input.
- Helper text: `carbon-helper-text-01` below input.

---

## 11. Accessibility Requirements

### Color Contrast

| Element | Minimum Ratio |
|---------|--------------|
| Normal text (< 24px) | 4.5:1 |
| Large text (≥ 24px or ≥ 18px bold) | 3:1 |
| UI components, graphical objects | 3:1 |

**Verified combinations:**
- `#161616` on `#ffffff`: 17.5:1 ✓
- `#525252` on `#ffffff`: 7.5:1 ✓
- `#0f62fe` on `#ffffff`: 4.6:1 ✓
- `#f4f4f4` on `#161616`: 17.5:1 ✓
- `#c6c6c6` on `#161616`: 7.5:1 ✓
- `#78a9ff` on `#161616`: 7.2:1 ✓

### Focus States

- All interactive elements must have visible focus indicators.
- Use `focus:ring-2 focus:ring-[#0f62fe] focus:ring-offset-2` for custom elements.
- Carbon components handle focus internally — do not override.

### Keyboard Navigation

- All functionality must be accessible via keyboard.
- Tab order follows visual order (left-to-right, top-to-bottom).
- Skip links provided for main content.
- Modal/dialog: Trap focus within, close on Escape.

### Screen Readers

- Semantic HTML: Use `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>` appropriately.
- ARIA labels on icon-only buttons: `aria-label="Previous testimonial"`.
- Images: All `<img>` tags must have meaningful `alt` text. Decorative images use `alt=""`.
- Links: Descriptive text — never "click here" or "read more" alone.

### Motion

- Respect `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Content

- Write at a Flesch-Kincaid Grade 8 level or below.
- Use sentence case for headings, not Title Case.
- Avoid jargon. Define technical terms on first use.
- Error messages: State what happened, why, and how to fix it.

---

## 12. Content Voice & Tone

### Voice (Always Consistent)

- **Confident, not boastful.** Use data and outcomes, not superlatives.
- **Precise, not poetic.** Engineers and IT directors value accuracy over flair.
- **Direct, not terse.** Short sentences. Active voice. No passive constructions.
- **Empathetic to the buyer.** Acknowledge their risks, constraints, and pressures.

### Tone (Adapts by Context)

| Context | Tone | Example |
|---------|------|---------|
| Hero / Value prop | Bold, aspirational | "Keep your critical infrastructure running at optimal temperature." |
| Product specs | Precise, technical | "CRAC units sized with 25% monsoon humidity buffer." |
| Case studies | Outcome-focused, credible | "PUE reduced from 1.8 to 1.35. 40% energy savings validated over 12 months." |
| Warnings / Risks | Direct, urgent | "Over 60% of cooling failures originate from incorrect refrigerant charge." |
| Testimonials | Human, narrative | "Their proactive approach is why we renewed for three more years." |
| Legal / Disclaimer | Formal, precise | "Service outcomes are defined exclusively in signed contractual agreements." |

### Writing Rules

1. **No em-dashes:** Use colons `:` instead of `—` throughout.
2. **Sentence case for headings:** "Hardware supply" not "Hardware Supply".
3. **Acronyms on first use:** "Computer Room Air Conditioning (CRAC)" then "CRAC".
4. **Numbers:** Use digits for all numbers, including 1-9. "4 hours" not "four hours".
5. **Currency:** "PKR 145K/mo" format for pricing.
6. **Percentages:** Use % symbol. "40% energy reduction".
7. **Trademarks:** Use ™ and ® correctly. "ServerLife Extend™".
8. **Lists:** Use parallel structure. All items start with verb or all with noun.

---

## 13. Patterns Reference

### Patterns Used in This Project

| Pattern | Carbon Page | Usage |
|---------|-------------|-------|
| Common Actions | [Link](https://carbondesignsystem.com/patterns/common-actions/) | Buttons, links, icon triggers |
| Disabled States | [Link](https://carbondesignsystem.com/patterns/disabled-states/) | Form validation, unavailable options |
| Empty States | [Link](https://carbondesignsystem.com/patterns/empty-states-pattern/) | No results, placeholder content |
| Filtering | [Link](https://carbondesignsystem.com/patterns/filtering/) | Case study tag filters (future) |
| Forms | [Link](https://carbondesignsystem.com/patterns/forms-pattern/) | Contact forms, assessment requests |
| Global Header | [Link](https://carbondesignsystem.com/patterns/global-header/) | Navigation mega-menu |
| Loading | [Link](https://carbondesignsystem.com/patterns/loading-pattern/) | Skeleton screens, spinners |
| Notification | [Link](https://carbondesignsystem.com/patterns/notification-pattern/) | Toast messages, alerts |
| Overflow Content | [Link](https://carbondesignsystem.com/patterns/overflow-content/) | Truncated text, tooltips |
| Search | [Link](https://carbondesignsystem.com/patterns/search-pattern/) | Global search (future) |
| Status Indicators | [Link](https://carbondesignsystem.com/patterns/status-indicator-pattern/) | Service health, SLA status |

### Anti-Patterns (Avoid)

- **Carousels with auto-play:** Never auto-advance testimonials or case studies. User controls only.
- **Modals for non-critical content:** Use inline expansion or new pages instead.
- **Hamburger menu on desktop:** Use visible navigation or mega-menu.
- **Infinite scroll for case studies:** Use pagination with clear page numbers.
- **Placeholder text as labels:** Always use visible labels above inputs.

---

## 14. Asset Production Checklist

### Before Starting Asset Production

- [ ] Review section placeholder in browser to understand exact placement
- [ ] Check aspect ratio and minimum resolution in placeholder description
- [ ] Confirm color palette: grays + `#0f62fe` blue accent
- [ ] Confirm no text overlay in rendered images

### Photography Checklist

- [ ] High resolution (min 1920px wide for heroes, 1200px for sections)
- [ ] Consistent color grading across all photos
- [ ] No visible brand logos of third parties unless cleared
- [ ] Model releases for any recognizable people
- [ ] Property releases for client facilities

### 3D Rendering Checklist

- [ ] Camera angle: eye-level or 15° elevated
- [ ] Lighting: soft overhead key + subtle blue rim
- [ ] Materials: matte metal, glossy black, translucent blue LEDs
- [ ] Environment: clean, organized, no clutter
- [ ] Resolution: 1920×1080px minimum for heroes
- [ ] Format: PNG (with alpha if needed) or WebP
- [ ] No text or logos baked into render

### Icon & Pictogram Checklist

- [ ] Source from `@carbon/icons-react` or `@carbon/pictograms-react`
- [ ] Size: 16px inline, 20px cards, 24px nav, 64–128px pictograms
- [ ] Color: inherit from text or explicit token
- [ ] Export SVG for icons, PNG/SVG for pictograms

### Logo Checklist

- [ ] Partner logos: SVG preferred, monochrome on white
- [ ] Client logos: PNG with transparent or white background
- [ ] Consistent height: ~40px in tickers, ~80px in hero tiles
- [ ] Hover: opacity 70% → 100%

---

## 15. Quick Reference Tables

### Tailwind ↔ Carbon Mapping

| Tailwind Class | Carbon Token | Value |
|---------------|-------------|-------|
| `bg-white` | `$background` (White theme) | `#ffffff` |
| `bg-[#f4f4f4]` | `$background` (Gray 10) | `#f4f4f4` |
| `bg-[#161616]` | `$background` (Gray 100) | `#161616` |
| `bg-[#262626]` | `$layer-01` (Gray 100) | `#262626` |
| `border-[#e0e0e0]` | `$border-subtle` (White) | `#e0e0e0` |
| `border-[#393939]` | `$border-subtle` (Gray 100) | `#393939` |
| `text-[#161616]` | `$text-primary` (White) | `#161616` |
| `text-[#f4f4f4]` | `$text-primary` (Gray 100) | `#f4f4f4` |
| `text-[#525252]` | `$text-secondary` (White) | `#525252` |
| `text-[#c6c6c6]` | `$text-secondary` (Gray 100) | `#c6c6c6` |
| `text-[#0f62fe]` | `$link-primary` (White) | `#0f62fe` |
| `text-[#78a9ff]` | `$link-primary` (Gray 100) | `#78a9ff` |

### Section Background Sequence (Master Template)

| # | Section | Background | Border |
|---|---------|-----------|--------|
| 1 | Hero | `#0a1628` (dark custom) | none |
| 2 | Quick Nav / Trust | `var(--cds-background)` (white) | `border-b` subtle |
| 3 | Buyer Journey 1 | `#f4f4f4` | `border-b` subtle |
| 4 | Buyer Journey 2 | `var(--cds-background)` (white) | `border-b` subtle |
| 5 | Buyer Journey 3 | `#f4f4f4` | `border-b` subtle |
| 6 | Buyer Journey 4 | `var(--cds-background)` (white) | `border-b` subtle |
| 7 | Buyer Journey 5 | `#f4f4f4` | `border-b` subtle |
| 8 | Buyer Journey 6 | `var(--cds-background)` (white) | `border-b` subtle |
| 9 | Case Studies | `#161616` | `border-b border-[#393939]` |
| 10 | Testimonials | `#161616` (same section) | `border-b border-[#393939]` |
| 11 | Partners | `bg-white` (component) | `border-b` subtle |
| 12 | Clients / Portfolio | `#f4f4f4` | `border-b` subtle |
| 13 | CTA | `var(--cds-background)` (white) | `border-b` subtle |
| 14 | Legal | `#f4f4f4` | `border-t` subtle |
| 15 | Footer | `#161616` | none |

---

## 16. Component Library Quick Links

For detailed usage of individual Carbon components, refer to:

| Component | Link | Usage in Project |
|-----------|------|-----------------|
| Accordion | [Usage](https://carbondesignsystem.com/components/accordion/usage/) | FAQ sections (future) |
| Breadcrumb | [Usage](https://carbondesignsystem.com/components/breadcrumb/usage/) | Page navigation |
| Button | [Usage](https://carbondesignsystem.com/components/button/usage/) | CTAs, navigation |
| Checkbox | [Usage](https://carbondesignsystem.com/components/checkbox/usage/) | Forms |
| Content Switcher | [Usage](https://carbondesignsystem.com/components/content-switcher/usage/) | Tab alternatives |
| Data Table | [Usage](https://carbondesignsystem.com/components/data-table/usage/) | Comparison tables |
| Dropdown | [Usage](https://carbondesignsystem.com/components/dropdown/usage/) | Mobile nav, filters |
| Link | [Usage](https://carbondesignsystem.com/components/link/usage/) | Inline text links |
| Loading | [Usage](https://carbondesignsystem.com/components/loading/usage/) | Page loads |
| Modal | [Usage](https://carbondesignsystem.com/components/modal/usage/) | Dialogs, confirmations |
| Notification | [Usage](https://carbondesignsystem.com/components/notification/usage/) | Toast alerts |
| Pagination | [Usage](https://carbondesignsystem.com/components/pagination/usage/) | Case study grids |
| Progress Bar | [Usage](https://carbondesignsystem.com/components/progress-bar/usage/) | Process steps |
| Select | [Usage](https://carbondesignsystem.com/components/select/usage/) | Forms |
| Structured List | [Usage](https://carbondesignsystem.com/components/structured-list/usage/) | Feature comparisons |
| Tabs | [Usage](https://carbondesignsystem.com/components/tabs/usage/) | Content organization |
| Tag | [Usage](https://carbondesignsystem.com/components/tag/usage/) | Labels, categories |
| Text Input | [Usage](https://carbondesignsystem.com/components/text-input/usage/) | Forms |
| Tile | [Usage](https://carbondesignsystem.com/components/tile/usage/) | Cards, info boxes |
| Tooltip | [Usage](https://carbondesignsystem.com/components/tooltip/usage/) | Icon explanations |
| UI Shell Header | [Usage](https://carbondesignsystem.com/components/UI-shell-header/usage/) | Global navigation |

---

## 17. React & Framework Resources

| Resource | Link | Purpose |
|----------|------|---------|
| Carbon React | [Frameworks](https://carbondesignsystem.com/developing/frameworks/react/) | Official React component library |
| Carbon MCP | [Overview](https://carbondesignsystem.com/developing/carbon-mcp/overview/) | Model Context Protocol for AI |
| Dev Resources | [Resources](https://carbondesignsystem.com/developing/dev-resources/resources/) | Icons, pictograms, color packages |
| React Tutorial | [Tutorial](https://carbondesignsystem.com/developing/react-tutorial/overview/) | Step-by-step Carbon React setup |
| Web Components | [Tutorial](https://carbondesignsystem.com/developing/web-components-tutorial/overview/) | Framework-agnostic components |
| Angular | [Angular](https://carbondesignsystem.com/developing/community-frameworks/angular/) | Angular adapter |
| GitHub | [Repo](https://github.com/carbon-design-system/carbon) | Source code, issues, contributions |

---

*This document is a living reference. Update it when new patterns, components, or design decisions are established.*
