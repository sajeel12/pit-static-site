# Perception IT — Design Logic & Brand System

> Research-backed design decisions for a consistent, scalable site-wide theme.

---

## 1. Core Principle: Light + Category Tint

**Decision:** All pages use a **light background** (`bg-white` / `bg-gray-50`). Category identity is expressed through **accent tints** — not background inversion.

**Why:**
- Dark UIs are proven poor for text-heavy content (IxDF, UX Design Institute)
- Light-to-dark transitions create visual whiplash
- Top brands (Stripe, Vercel, Apple, Notion) use light bodies with accent colors
- Readability, contrast, and accessibility are easiest on light backgrounds

**Reference:**
> *"Dark UIs are a bad choice for text-heavy and data-heavy content."* — Interaction Design Foundation

---

## 2. Page Type Hierarchy

| Page Type | Background | Accent Strategy |
|---|---|---|
| **Main Landing** (Home) | `bg-white` | Blue `#0f62fe` for CTAs only |
| **Hub Pages** (Infrastructure, Cloud, AI...) | `bg-white` / `bg-gray-50` | Category tint on labels, borders, icons, hover states |
| **Sub-hub Pages** (Data Centre Services) | `bg-white` / `bg-gray-50` | Same tint as parent hub |
| **Leaf/Service Pages** (Cooling, SLA Support...) | `bg-white` | Same tint as parent hub |

**Rule:** Hero sections may use dark gradients for visual impact, but the page body **always** returns to light.

---

## 3. Category Color System (Cool Tints)

Each category gets a distinct cool undertone. All are desaturated and subtle — never competing with the primary CTA blue.

| Category | Tint Name | Hex Range | Usage |
|---|---|---|---|
| **Infrastructure / Cooling** | Cyan | `#0891b2` → `#22d3ee` | Labels, borders, hover, icon fills |
| **Cloud** | Indigo | `#6366f1` → `#818cf8` | Labels, borders, hover, icon fills |
| **AI** | Stone/Warm | `#78716c` → `#a8a29e` | Labels, borders, hover, icon fills |
| **Data & Analytics** | Sky | `#0ea5e9` → `#38bdf8` | Labels, borders, hover, icon fills |
| **IT Platforms** | Zinc | `#71717a` → `#a1a1aa` | Labels, borders, hover, icon fills |
| **Consultancy** | Sage | `#65a30d` → `#84cc16` | Labels, borders, hover, icon fills |

**Accent Application:**
- Section labels: `text-{tint}-600`
- Card hover borders: `hover:border-{tint}-400`
- Active nav indicator: `bg-{tint}-500`
- Icon fills: `text-{tint}-500`
- Tag badges: `bg-{tint}-50 text-{tint}-700 border-{tint}-200`

---

## 4. Color Discipline

### Primary Action Color (Untouchable)
- **Blue `#0f62fe`** — reserved exclusively for CTAs, primary buttons, and links
- No other color may be used for buttons or primary actions

### Text Hierarchy
| Level | Light BG | Dark Hero |
|---|---|---|
| Headings | `#161616` | `text-white` |
| Body | `#525252` | `text-cyan-100/70` (adapt to hero tint) |
| Muted | `#a8a8a8` | `text-cyan-200/40` (adapt to hero tint) |
| Links | `#0f62fe` | `#0f62fe` (always blue) |

### Background Palette
| Token | Value | Use |
|---|---|---|
| `bg-white` | `#ffffff` | Primary page background |
| `bg-gray-50` | `#f4f4f4` | Alternate section background |
| `bg-gray-100` | `#e0e0e0` | Cards, borders, separators |

---

## 5. Image Treatment Guidelines

### Color Wash / Overlay
To fit images into the brand without looking stock:

**Option A: Subtle Tint Overlay**
```css
.image-brand-wash {
  position: relative;
}
.image-brand-wash::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(15, 98, 254, 0.08) 0%,
    rgba(34, 211, 238, 0.05) 100%
  );
  mix-blend-mode: multiply;
  pointer-events: none;
}
```

**Option B: Monochrome + Tint**
```css
.image-monotone {
  filter: grayscale(30%) contrast(1.05);
}
.image-monotone-cyan::after {
  background: rgba(6, 182, 212, 0.12);
  mix-blend-mode: overlay;
}
```

**Option C: Dark Bottom Gradient (for text overlay)**
```css
.image-text-safe::after {
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 0%,
    transparent 50%
  );
}
```

### Image Rules
1. All images should feel like they belong to the same family
2. Apply the same treatment consistently across a page
3. Prefer real photography over illustration
4. When using category-specific imagery, apply that category's tint wash
5. Avoid pure black/white — use off-grays for depth

---

## 6. Typography System

**Font Families:**
- Primary: `IBM Plex Sans` (400, 500, 600, 700)
- Mono: `IBM Plex Mono` (400, 500)

**Scale (Carbon-aligned):**
| Token | Size | Weight | Use |
|---|---|---|---|
| `display-03` | 42–64px fluid | 600 | Hero H1 |
| `heading-04` | 32px | 600 | Section H2 |
| `heading-03` | 24px | 600 | Section H3 |
| `heading-02` | 20px | 600 | Card titles |
| `body-02` | 16px | 400 | Body text |
| `body-01` | 14px | 400 | Secondary text |
| `label-02` | 14px | 500 | Labels, badges |
| `label-01` | 12px | 500 | Captions, metadata |

**Rules:**
- No raw Tailwind text sizes (`text-xl`, `text-2xl`, etc.)
- All text uses Carbon CSS classes
- Headings: `#161616` on light, `white` on dark
- Body: `#525252` on light, tinted muted on dark

---

## 7. Spacing System

**Section Padding:**
- Standard content sections: `py-20`
- Compact sections (TrustTiles, Disclaimer): `py-16` or `py-6`
- Hero: `pt-20 pb-16 lg:pb-20`

**Container:**
- Max width: `max-w-7xl`
- Padding: `px-6 sm:px-8 lg:px-12`

**Component Spacing:**
- Card grids: `gap-6`
- Card internal: `p-6` or `p-8`
- Section title to content: `mb-10`

---

## 8. Component Patterns

### Cards
```
bg-white
border border-gray-100
rounded-xl
hover:border-{tint}-400 hover:shadow-lg
transition-all duration-300
```

### Buttons (Primary)
```
bg-gradient-to-r from-[#0f62fe] to-[#4589ff]
text-white
rounded-lg
hover:from-[#0353e9] hover:to-[#0f62fe]
```

### Section Labels
```
text-xs font-semibold text-{tint}-600
uppercase tracking-[0.16px]
mb-2
```

### Active States (Nav, Tabs)
```
border-l-2 border-[#0f62fe]
bg-gray-50
font-semibold
```

---

## 9. Navigation Theming

### Desktop Dropdown
- Background: `bg-white`
- Group headings (link): `text-xs font-semibold text-[#0f62fe]`
- Group headings (static): `text-xs font-semibold text-[#6f6f6f]`
- Link items: `flex items-center gap-3 px-4 py-2.5 text-sm`
- Link hover: `hover:bg-gray-50 hover:text-[#0f62fe]`
- Arrow icon: fades in on hover (`opacity-0 → opacity-100`)
- "View All" footer: `text-sm font-semibold text-[#0f62fe]` with `border-t` separator

### Mobile Menu
- Background: dark (`#161616`) — this is the ONE dark surface (navigation chrome)
- Top-level items: `border border-gray-800/50 rounded-lg`
- Expanded content: `bg-white/[0.03] border border-gray-800/40 rounded-xl`
- Link cards: `p-3 border border-gray-700/50 rounded-lg`
- Category tint not applied in mobile nav (maintains dark chrome consistency)

---

## 10. What NOT To Do

| Don't | Why |
|---|---|
| Full-page dark hub pages | Text-heavy content suffers on dark backgrounds |
| Different background per category | Visual whiplash, breaks consistency |
| Use category color for CTAs | Blue `#0f62fe` is the only CTA color |
| Purple/gradient text on headings | Violates blue-only-for-CTAs rule |
| Raw Tailwind text sizes | Use Carbon typography classes |
| Inline styles for colors | Use Tailwind classes or CSS variables |

---

## 11. Implementation Checklist

- [ ] All hub pages: `bg-white` body, category tint accents
- [ ] All leaf pages: `bg-white` body, inherited category tint
- [ ] Hero sections may be dark with category tint glow
- [ ] CTA buttons always blue `#0f62fe`
- [ ] Images use consistent brand wash
- [ ] Typography uses Carbon classes only
- [ ] Section padding standardized to `py-20`
- [ ] Navigation uses white dropdowns (desktop), dark chrome (mobile)
