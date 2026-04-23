# FeaturedTestimonial Component Brief

## Overview

`FeaturedTestimonial` is the canonical single-testimonial card for credibility sections across the Perception IT website. It presents one client quote in a prominent, scannable layout with client identity, service context, and attribution.

**Reference design**: DataCentre 4 (`CoolingAirflowEnhanced.tsx`) dark testimonial card.

**Location**: `src/components/FeaturedTestimonial.tsx`

---

## When to Use

| Page type | Placement | Typical variant |
|-----------|-----------|-----------------|
| Service page | Below case-study grid, above partners | `dark` |
| Case-study detail | After hero + metrics, before challenge/solution | `dark` |
| Hub / landing page | Inline trust strip | `light` |
| Blog / press | Sidebar or inline quote | `minimal` |
| Narrow column | Sidebar alongside body text | `compact` |

**Do not use** for homepage rotating testimonials (that pattern is handled by `src/sections/Testimonials.tsx`).

---

## Visual Anatomy

```
┌─────────────────────────────────────────────────────────────────┐
│  ┌─────────────────┐  ┌───────────────────────────────────────┐  │
│  │                 │  │ Client / Service  ●  Client Name      │  │
│  │   [bgImage]     │  │                                       │  │
│  │   ┌─────────┐   │  │ Description line…                     │  │
│  │   │ [logo]  │   │  │ Solution details →                    │  │
│  │   │ Client  │   │  ├───────────────────────────────────────┤  │
│  │   └─────────┘   │  │                                       │  │
│  │                 │  │      "Quote text in IBM Plex Serif"   │  │
│  │   2 cols        │  │                                       │  │
│  │                 │  │   3 cols                              │  │
│  │                 │  ├───────────────────────────────────────┤  │
│  └─────────────────┘  │ ● UZ  Author Name        Read case →  │  │
│                       │     Role / Company                      │  │
│                       └───────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
        ↑ overflow nav buttons (optional, desktop only)
```

### Layout rules
- **Desktop**: 5-column grid — image/logo panel (2 cols) + content panel (3 cols)
- **Mobile**: Stacks vertically — image/logo panel on top, content below
- **Min height**: Left panel `min-h-[320px]`, quote area `min-h-[220px]`
- **Overflow buttons**: Positioned at card edge, hidden on mobile (`hidden md:flex`)

---

## Prop Reference

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `quote` | `string` | ✅ | — | Testimonial body. Use `\n\n` to split paragraphs. |
| `author` | `string` | ✅ | — | Attribution name |
| `role` | `string` | ✅ | — | Attribution role / company |
| `client` | `string` | ✅ | — | Client or company name |
| `initials` | `string` | — | auto | Avatar initials. Computed from `author` if omitted. |
| `clientLogo` | `string \| null` | — | — | Logo URL. Shows building icon if absent. |
| `bgImage` | `string \| null` | — | — | Background image for left panel. Shows placeholder if absent. |
| `contextDesc` | `string` | — | — | Descriptive context (e.g. "Deployed X to Y…") |
| `contextLink` | `string \| null` | — | — | Case-study detail page link (right-side CTA) |
| `solutionLink` | `string \| null` | — | — | Solution page link (context header CTA) |
| `solutionLabel` | `string` | — | `"Solution details"` | Label for solution link |
| `showNav` | `boolean` | — | `false` | Show overflow prev/next buttons |
| `onPrev` | `() => void` | — | — | Prev button handler |
| `onNext` | `() => void` | — | — | Next button handler |
| `variant` | `"dark" \| "light"` | — | `"dark"` | Visual theme |

---

## Variants

### Dark (default)

The canonical design. Used in credibility sections on dark backgrounds.

| Token | Value |
|-------|-------|
| Section background | `#161616` |
| Card background | `#262626` |
| Borders | `#393939` |
| Text primary | `#f4f4f4` |
| Text secondary | `#a8a8a8` |
| Text tertiary | `#c6c6c6` |
| Accent / avatar | `#0f62fe` |
| Link | `#78a9ff` |
| Quote font | IBM Plex Serif, `text-xl` |

**Use case**: Service page credibility sections, case-study detail pages.

---

### Light

Inverted for use on white or Gray 10 sections.

| Token | Value |
|-------|-------|
| Section background | `#ffffff` |
| Card background | `#f4f4f4` |
| Borders | `#e0e0e0` |
| Text primary | `#161616` |
| Text secondary | `#525252` |
| Text tertiary | `#6f6f6f` |
| Accent / avatar | `#0f62fe` |
| Link | `#0f62fe` |
| Quote font | IBM Plex Serif, `text-xl` |

**Use case**: Hub pages, about pages, light-themed landing sections.

---

### Compact

Same as **Dark** but:
- No background image panel
- Logo tile only (no image behind)
- Reduced padding (`p-5` instead of `p-8`)
- No context header

**Use case**: Sidebars, narrow columns, inline within body text.

> **Note**: The `compact` variant is not yet implemented as a prop. To achieve it, pass `bgImage={null}` and omit `contextDesc` / `solutionLink`. For reduced padding, wrap in a custom container.

---

### Minimal

Same as **Dark** but:
- No image panel at all
- No context header
- No navigation buttons
- No solution link
- Just quote + author bar

**Use case**: Inline testimonials within blog posts, press pages.

> **Note**: The `minimal` variant is not yet implemented as a prop. To achieve it, pass `bgImage={null}`, omit `contextDesc` / `solutionLink` / `contextLink`, and do not set `showNav`.

---

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| `md` (768px+) | 5-column grid, overflow nav buttons visible |
| `< md` | Stacked layout, nav buttons hidden |

The left panel always maintains `min-h-[320px]` so the logo tile has breathing room. The quote area maintains `min-h-[220px]` to preserve vertical rhythm.

---

## Accessibility

- Quote is rendered inside `<blockquote>` with decorative quotation marks (not read by screen readers)
- Navigation buttons have `aria-label` attributes
- Logo images have `alt={client}` text
- Background images use `alt=""` (decorative)
- Color contrast meets WCAG AA for all text tokens

---

## Content Guidelines

### Quote length
- **Ideal**: 40–80 words
- **Maximum**: 150 words (use `\n\n` to break into 2–3 paragraphs)
- Single-paragraph quotes work best for scanning

### Attribution format
- `author`: Full name and title, e.g. `"Mr. Usman Zafar"` or `"Head of IT"`
- `role`: Company name with location if relevant, e.g. `"Ibrahim Fibres Limited"` or `"Head of IT, Ibrahim Fibres Limited"`
- `initials`: 2 characters max. Auto-computed from author name if omitted.

### Client logo
- White background (`bg-white`), no border-radius, sharp edges
- PNG or SVG with transparent background preferred
- Display size: `max-w-full max-h-full object-contain p-3` inside a `h-28` container

---

## Usage Examples

### Service page with pagination (DataCentre 4)

```tsx
import FeaturedTestimonial from '../components/FeaturedTestimonial';

const [page, setPage] = useState(0);
const items = [
  {
    context: { client: 'Ibrahim Fibres', desc: 'Deployed ServerLife Extend™…', link: '/projects/...', solutionLink: '/services/...' },
    bgImage: '/case-studies/.../hero-1920.jpg',
    quote: "Perception IT transformed our server infrastructure…",
    author: 'Mr. Usman Zafar',
    role: 'Head of IT, Ibrahim Fibres Limited',
    initials: 'UZ',
    logo: '/logos/clients/IFL-logo.png',
  },
  // …more items
];

{items.filter((_, i) => i === page).map((item) => (
  <FeaturedTestimonial
    key={item.context.client}
    quote={item.quote}
    author={item.author}
    role={item.role}
    client={item.context.client}
    initials={item.initials}
    clientLogo={item.logo}
    bgImage={item.bgImage}
    contextDesc={item.context.desc}
    contextLink={item.context.link}
    solutionLink={item.context.solutionLink}
    solutionLabel="ServerLife Extend™ Solution details"
    showNav
    onPrev={() => setPage(page === 0 ? items.length - 1 : page - 1)}
    onNext={() => setPage(page === items.length - 1 ? 0 : page + 1)}
    variant="dark"
  />
))}
```

### Case-study detail page (ProjectDetail)

```tsx
<FeaturedTestimonial
  quote={project.quote.text}
  author={project.quote.author}
  role={project.quote.role}
  client={project.client}
  clientLogo={project.logo}
  bgImage={project.heroImage || project.logo}
  contextDesc="Deployed ServerLife Extend™ to Critical Infrastructure…"
  contextLink="/services/server-continuity"
  solutionLink="/services/server-continuity"
  solutionLabel="ServerLife Extend™ Solution details"
  variant="dark"
/>
```

### Light variant on a hub page

```tsx
<section className="py-16 bg-white">
  <div className="max-w-5xl mx-auto px-6">
    <FeaturedTestimonial
      quote="…"
      author="…"
      role="…"
      client="…"
      variant="light"
    />
  </div>
</section>
```

---

## Related Components

| Component | Purpose | Difference |
|-----------|---------|------------|
| `FeaturedTestimonial` | Single prominent testimonial | This component |
| `Testimonials` (section) | Homepage rotating carousel | Light theme, auto-rotate, multiple quotes |
| `CrossSellCard` | Related service teaser | No quote, different layout |

---

## Changelog

| Date | Change |
|------|--------|
| 2026-04-18 | Extracted from `CoolingAirflowEnhanced.tsx` into shared component. Migrated `ProjectDetail.tsx`. Created this brief. |
