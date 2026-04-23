# Perception IT — Page Quality Checklist

## 1. UXI Best Practices

### Typography
- [ ] **Headings**: All section `<h2>` elements use `carbon-fluid-heading-05` (42px / Light weight)
- [ ] **Sub-headings**: `<h3>` uses `carbon-fluid-heading-03` or `carbon-fluid-heading-04` consistently
- [ ] **Eyebrows**: All eyebrows follow the pattern: `w-6 h-0.5` teal bar + `carbon-label-01` uppercase text
- [ ] **Body text**: `carbon-body-01` for paragraphs; `carbon-body-02` for larger intro text only
- [ ] **No em-dashes**: All `—` replaced with `:` throughout copy
- [ ] **Stat numbers**: Large figures use `carbon-fluid-heading-06` or custom large sizing with Light weight

### Spacing & Layout
- [ ] **Light sections**: `py-16` padding (white/`var(--cds-background)` backgrounds)
- [ ] **Dark sections**: `py-20` padding (`#161616` backgrounds)
- [ ] **No border-b**: Content sections do not use `border-b` dividers
- [ ] **Container width**: Content uses `max-w-5xl mx-auto px-6` consistently
- [ ] **Card grids**: Gap of `gap-4` for 2-col, `gap-6` for 3-col layouts
- [ ] **Breathing room**: At least 2rem (32px) between unrelated content blocks inside a section

### Visual Hierarchy
- [ ] **Hero**: Single-column `max-w-3xl` layout preferred (no right-column bullet lists)
- [ ] **Breadcrumb**: Inside dark hero, semantic `<nav><ol>`, `aria-hidden` separators, `aria-current="page"`
- [ ] **Schema.org**: JSON-LD breadcrumb structured data present in `<Helmet>`
- [ ] **Cards**: `bg-[var(--cds-layer-01)]` with `border-[var(--cds-border-subtle)]` for light sections
- [ ] **Dark cards**: `bg-[#262626]` with `border-[#393939]` for dark sections

### Accessibility
- [ ] **Images**: `<img>` with `object-cover object-top` preferred over CSS `bg-cover`
- [ ] **Alt text**: All images have descriptive `alt` attributes
- [ ] **Focus states**: Interactive elements have visible `:focus` outlines
- [ ] **Color contrast**: Text on dark backgrounds uses `#f4f4f4` (primary) or `#a8a8a8` (secondary)
- [ ] **Interactive targets**: Buttons and links minimum 44×44px touch target

---

## 2. Coding Structure

### File Organization
- [ ] **One page per route**: Page components live in `src/pages/services/`
- [ ] **Reusable components**: Shared UI elements extracted to `src/components/`
- [ ] **Config-driven data**: Service lists, case studies, testimonials in `src/config/services.ts`
- [ ] **No inline mega-data**: Arrays of >3 items live outside the JSX return

### TypeScript
- [ ] **Typed props**: All components define interfaces for props
- [ ] **No `any`**: Avoid implicit `any`; use proper union types
- [ ] **Route params**: URL parameters typed and validated

### Tailwind CSS
- [ ] **Class ordering**: Layout → Sizing → Spacing → Typography → Background → Border → Effects
- [ ] **Token values**: Prefer Carbon tokens (`var(--cds-background)`) over raw hex where available
- [ ] **Hardcoded hex audit**: Non-token colors (`#009d9a`, `#cf0a2c`, `#f97316`) used only for accents
- [ ] **No arbitrary values**: Avoid `w-[123px]`; use standard spacing scale

### React Patterns
- [ ] **Helmet for SEO**: Each page has unique `<title>` and `<meta name="description">`
- [ ] **Scroll restoration**: Pages handle scroll-to-top on mount
- [ ] **Lazy loading**: Heavy sections below fold use `React.lazy()` or dynamic imports
- [ ] **useEffect cleanup**: Event listeners and timers cleaned up on unmount

### Performance
- [ ] **Image optimization**: Images served in WebP/AVIF with fallback
- [ ] **Chunk size**: Monitor `npm run build` for warnings; lazy-load heavy pages
- [ ] **No unused imports**: Remove dead code and unused component imports

---

## 3. Carbon Design System Adherence

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `--cds-background` | `#ffffff` | Page background (light) |
| `--cds-text-primary` | `#161616` | Primary text on light |
| `--cds-text-secondary` | `#525252` | Secondary/body text |
| `--cds-layer-01` | `#f4f4f4` | Card backgrounds |
| `--cds-border-subtle` | `#e0e0e0` | Card borders |
| `#161616` | — | Dark section backgrounds |
| `#262626` | — | Dark card backgrounds |
| `#393939` | — | Dark borders |
| `#f4f4f4` | — | Primary text on dark |
| `#a8a8a8` | — | Secondary text on dark |
| `#0f62fe` | — | Primary interactive (links, buttons) |
| `#78a9ff` | — | Link hover on dark backgrounds |
| `#009d9a` | — | Teal accent (eyebrows, highlights) |
| `#fa4d56` | — | Danger/error accent |

- [ ] **Dark sections**: Background `#161616`, cards `#262626`, borders `#393939`
- [ ] **Light sections**: Background `var(--cds-background)`, cards `var(--cds-layer-01)`, borders `var(--cds-border-subtle)`
- [ ] **Accent usage**: Teal `#009d9a` for eyebrows and highlights; Blue `#0f62fe` for CTAs

### Typography Tokens
- [ ] `carbon-fluid-heading-05` (42px / Light) — all section h2 headings
- [ ] `carbon-fluid-heading-04` (28px / Regular) — subsection h3 headings
- [ ] `carbon-fluid-heading-04-strong` (32px / SemiBold) — stat headings if needed
- [ ] `carbon-fluid-heading-03` (24px / Regular) — card titles
- [ ] `carbon-body-01` (14px / 1.5rem line-height) — body copy
- [ ] `carbon-label-01` (12px / uppercase) — eyebrows, tags, overlines

### Component Patterns
- [ ] **Buttons**: `inline-flex items-center gap-2`, `bg-[#0f62fe]`, hover `bg-[#0353e9]`
- [ ] **Links**: `text-[#0f62fe]` on light; `text-[#78a9ff]` on dark
- [ ] **Cards**: `border border-[var(--cds-border-subtle)]` with subtle hover shadow/translate
- [ ] **Form inputs**: `bg-[#f4f4f4]`, `border-b-2` bottom-border focus pattern

---

## 4. AIDA + PAS Framework Adherence

### Is this a *classic* AIDA + PAS framework?

**Verdict: Yes — with one structural note.**

The restructured page (`/services/cooling-restructured`) follows the classic AIDA progression sequentially and maps cleanly to PAS within the first three sections. Below is the full mapping with fidelity ratings.

---

### AIDA Mapping

| Stage | Section | Content | Fidelity |
|-------|---------|---------|----------|
| **A — Attention** | Hero | Dark hero, bold headline, value proposition, CTA button | ✅ Strong |
| **I — Interest** | Problem (#problem) | "Why Standard Cooling Fails" — 4 challenge cards | ✅ Strong |
| **I — Interest** | Solution (#solution) | Hardware → Installation → Managed Services — 3 steps | ✅ Strong |
| **D — Desire** | Proof (#proof) | 3 case studies + featured testimonial | ✅ Strong |
| **D — Desire** | Pricing (#pricing) | Summary cards + assessment CTA | ⚠️ Medium — lacks concrete pricing figures; works better as "desire amplifier" if numbers are shown |
| **A — Action** | CTA (#cta) | "Request Assessment" form + contact | ✅ Strong |

**Structural note:** The page adds two sections *after* the classic AIDA close:
- **Ecosystem** (integrations, dependencies) — this is post-purchase reassurance, not AIDA
- **FAQ** — objection handling, typically placed *before* the final CTA in classic AIDA

**Recommendation:** Move FAQ before Pricing/CTA for purer AIDA flow. Ecosystem can stay post-CTA as trust reinforcement.

---

### PAS Mapping

| Stage | Section | Content | Fidelity |
|-------|---------|---------|----------|
| **P — Problem** | Problem (#problem) | "Why Standard Cooling Fails in Pakistan" — 4 challenge cards | ✅ Strong |
| **P — Problem** | Cost of Failure card | PKR 2–5M/day, warranty voiding, SLA penalties, reputation damage | ✅ Strong |
| **A — Agitate** | 35°C vs 45°C+ banner | Visual comparison amplifying the gap between standard and reality | ✅ Strong |
| **A — Agitate** | Cost of Failure card (positioned) | Placed *after* problem cards, *before* solution — emotionally escalates | ✅ Strong |
| **S — Solution** | Solution (#solution) | "Our Solution: End-to-End Thermal Continuity" — 3 steps | ✅ Strong |

**Verdict on PAS:** This is textbook PAS. Problem is clearly stated, agitation is layered (visual banner + monetary cost card), and the solution follows immediately after the emotional peak. The Cost of Failure card is the critical agitator — it converts abstract problems into concrete financial loss.

---

### Combined AIDA + PAS Flow (Recommended Sequence)

```
1. ATTENTION    → Hero (dark, bold, CTA)
2. PROBLEM      → "Why Standard Cooling Fails" (4 cards)
3. AGITATE      → 35°C vs 45°C+ banner
4. AGITATE      → Cost of Failure card (PKR 2–5M/day)
5. INTEREST     → Solution: 3 steps (Hardware → Install → Managed)
6. INTEREST     → Thermal Engineering add-on
7. DESIRE       → Proof: 3 case studies + testimonial
8. DESIRE       → Pricing (concrete tiers or "from PKR X")
9. OBJECTION    → FAQ (move before CTA)
10. ACTION      → CTA: "Request Assessment"
11. TRUST       → Ecosystem + Partners (post-CTA reassurance)
```

---

## 5. Page-Specific Checks

### `/services/datacentre-4` (Enhanced — Current Production)
- [ ] Cost of Failure card implemented in Pakistan section
- [ ] 4-card trust bar present in Integration section
- [ ] 31% donut banner present
- [ ] Breadcrumb in hero with Schema.org JSON-LD
- [ ] All h2 headings use `carbon-fluid-heading-05`

### `/services/cooling-restructured` (AIDA+PAS Prototype)
- [ ] AIDA flow verified: Attention → Interest → Desire → Action
- [ ] PAS flow verified: Problem → Agitate → Solution
- [ ] FAQ moved before CTA (if implementing pure AIDA)
- [ ] Pricing section has concrete numbers or clear "from PKR X" anchoring
- [ ] Cost of Failure card uses new dark impact template (if approved)

### `/services/server-continuity` (Reference Standard)
- [ ] All heading tokens match this page's pattern
- [ ] Section spacing matches `py-16` light / `py-20` dark

---

## 6. Quick Audit Commands

```bash
# Check for em-dashes
grep -rn " — " src/pages/

# Check for non-standard heading sizes
grep -rn "text-4xl\|text-5xl\|text-3xl" src/pages/

# Check for border-b in sections
grep -rn "border-b" src/pages/services/

# Check for missing Helmet
grep -rn "import.*Helmet" src/pages/ | wc -l
# Compare with total page files
ls src/pages/services/*.tsx | wc -l

# TypeScript check
cd app && npx tsc --noEmit
```

---

*Last updated: 2026-04-18*
*Applies to: All service pages in `/services/*`*
