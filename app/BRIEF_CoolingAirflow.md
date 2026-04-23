# Cooling & Airflow Management — Page Brief

## 1. Page Content

### 1.1 Hero / Overview (`#overview`)
- **Headline**: "Cooling & Airflow Management"
- **Subheadline**: "Precision cooling hardware, monsoon-hardened installation, and managed thermal services for data centres in Pakistan"
- **CTA**: "Request Thermal Assessment" (mailto)
- **Hero cards** (4-up): Hardware Supply, Installation & Commissioning, Managed Thermal Services, Pakistan-Specific Engineering
- **Background**: Dark navy gradient with subtle pattern overlay

### 1.2 Quick Navigation / Trust Boxes (`#trust`)
- **Label**: "Quick Navigation"
- **Heading**: "Explore Key Topics"
- **6 jump buttons**: Hardware Supply, Installation, Managed Services, Pakistan-Specific, Dependencies, Integration
- **Behavior**: Smooth-scroll to target section
- **Position**: Full-width band between Hero and main content

### 1.3 Hardware Supply (`#hardware`)
- **Step label**: "Step 1: What You Buy"
- **Heading**: "Cooling Hardware Supply"
- **Body**: Precision cooling hardware from Tier-1 manufacturers with Pakistan-specific engineering
- **Manufacturer cards**: Huawei, Vertiv, Schneider Electric, Stulz, Rittal, Condair
- **Feature tags**: Monsoon Hardening, High-Ambient Rating, Dust Exclusion, Humidity Control

### 1.4 Installation (`#installation`)
- **Step label**: "Step 2: How It Gets Built"
- **Heading**: "Installation & Commissioning"
- **Body**: End-to-end installation with Pakistan-specific protocols
- **Process list**: Site Survey, Placement Design, Monsoon Hardening, Start-Up & Balancing, As-Built Documentation
- **Prominent metric**: "45°C+ ambient rated"

### 1.5 Managed Services (`#managed`)
- **Step label**: "Step 3: Who Stays"
- **Heading**: "Managed Thermal Services"
- **Body**: Ongoing thermal management with quarterly validation
- **Service tiers**: Tier 1 (Validation), Tier 2 (Validation + Response), Tier 3 (Validation + Response + Parts)
- **SLA badges**: 4hr Response, Quarterly Validation, Monsoon Standby

### 1.6 Pakistan-Specific (`#pakistan`)
- **Step label**: "Engineered for Pakistan"
- **Heading**: "Pakistan-Specific Deployment"
- **Body**: Cooling systems designed for monsoons, dust, and load-shedding
- **Challenge/Response grid**: Monsoon Humidity, Dust & Contamination, Load-Shedding, High Ambient Heat
- **Metric**: "45°C+ ambient rated"

### 1.7 Dependencies (`#dependencies`)
- **Step label**: "What You Also Need"
- **Heading**: "Critical Dependencies"
- **Body**: Cooling does not work in isolation
- **Dependency cards**: Power & UPS, Rack & Cabinet, Environmental Monitoring, Fire Suppression
- **Each card**: icon, description, CTA to sibling service page

### 1.8 Integration (`#integration`)
- **Step label**: "Part of the Ecosystem"
- **Heading**: "Integration with Server Continuity Suite"
- **Body**: Cooling works alongside hardware support for end-to-end continuity
- **Integration cards**: ServerLife Extend™ (linked to `/services/server-continuity`), Monitoring & Observability, ServiceNow Platform

### 1.9 Case Studies (`#cases`)
- **Section label**: "Credibility / Proven Results"
- **Heading**: "Data Centre Case Studies"
- **6 case studies**, paginated 3 per page:
  1. Pakistan Telecom — 99.97% Uptime, 3-Site Cooling Overhaul
  2. Private Bank — 40% Energy Reduction, Precision Cooling Refresh
  3. Government IDC — 4hrs Response, Managed Thermal Service
  4. Textile Manufacturer — 60% Capacity Gain, Legacy Cooling Replacement
  5. National Bank — 99.9% Uptime SLA, Monsoon-Hardened Edge Cooling
  6. Cloud Provider — 35% Energy Saved, Free Cooling Integration
- **Card pattern**: Watermark initial header, industry + tag meta, title, description, large metric, link to `/projects`
- **Pagination**: 1 / 2 square buttons

### 1.10 Testimonials (`#feedback`)
- **Section label**: "Client Voice"
- **Heading**: "Testimonials"
- **2 testimonials**, paginated 1 per page:
  1. **Ibrahim Fibres** — Mr. Usman Zafar, Head of IT. Full quote about ServerLife Extend™ transformation. Links to case study and solution page.
  2. **National Telecom Operator** — DC Operations Manager. Short quote about monsoon validation protocol.
- **Card pattern**: 2/5 left panel (bg image + logo tile + caption bar), 3/5 right panel (context header + serif quote + author bar)
- **Navigation**: Prev/Next arrow buttons overlapping card edges + pagination dots

### 1.11 Partners (`#partners`)
- **Component**: `PartnerLogos` scrolling marquee
- **11 partner logos**: Huawei, Vertiv, Schneider Electric, Stulz, Rittal, Condair, Lenovo, Dell, HP, IBM, Cisco

### 1.12 Client Portfolio (`#portfolio`)
- **Component**: `ClientLogos` scrolling marquee
- **Client logos**: Ibrahim Fibres, Pakistan Telecom, Private Bank, Government IDC, National Bank, etc.

### 1.13 CTA (`#cta`)
- **Label**: "Next Step"
- **Heading**: "Start With a Thermal Resilience Assessment"
- **Body**: 90-minute structured assessment, delivered within 48 hours
- **3-step process**: On-Site Thermal Audit, Engineered Roadmap, Mutual Agreement
- **Banner**: "Ready to protect your thermal continuity?" — blue bg, white text, mailto CTA

### 1.14 Legal Disclaimer
- **Heading**: "Important Notices"
- **4 disclaimer paragraphs**: contractual terms, illustrative figures, engineering protocol descriptions, company credentials

---

## 2. Logic

### 2.1 State Management
```
activeSection: string        // Scroll-spy tracking. Default: 'trust'
caseStudyPage: number        // 0 | 1. Controls which 3 case studies render
testimonialPage: number     // 0 | 1. Controls which testimonial renders
expandedCaseStudy: string | null  // Which case study outcomes are expanded
```

### 2.2 Scroll-Spy Behavior
- **Trigger**: `window.scroll` event with `+150px` offset
- **Mechanism**: Iterates `SECTIONS` array, finds first section whose `offsetTop <= scrollPosition < offsetTop + offsetHeight`
- **Update**: `setActiveSection(id)`
- **Visual**: Side nav button gets `border-[#0f62fe] bg-[#f4f4f4] font-semibold`

### 2.3 Section Navigation
- **Desktop**: Fixed left rail (`w-56`), sticky `top-20`
- **Mobile**: No side nav; user scrolls naturally
- **Jump buttons**: Trust Boxes call `scrollToSection(id)` via `element.scrollIntoView({ behavior: 'smooth' })`

### 2.4 Pagination Logic
- **Case Studies**: `caseStudyData.slice(page * 3, page * 3 + 3)`
- **Testimonials**: `.filter((_, i) => i === testimonialPage)` — single item visible
- **Prev/Next buttons**: Toggle between 0 and 1 (`page === 0 ? 1 : 0`)

### 2.5 Routing
- **Page route**: `/#/services/cooling-airflow` (HashRouter)
- **Internal links**: `/projects`, `/services/server-continuity`, `/services/{sibling-services}`
- **External links**: `mailto:contact@perception-it.com`

### 2.6 Component Interactions
| Trigger | Action |
|---|---|
| Click case study card | Navigates to `/projects` |
| Click "Show outcomes" | Expands bullet list for that case study |
| Click testimonial prev/next | Switches testimonial page |
| Click trust box | Smooth-scrolls to target section |
| Hover case study card | Blue top border appears |
| Hover pagination button | Border turns blue |

---

## 3. Design Guidelines

### 3.1 Carbon Design System Compliance
- **Typography**: All text uses Carbon classes (`carbon-label-01`, `carbon-heading-02`, `carbon-fluid-heading-04`, `carbon-body-01`, `carbon-helper-text-01`)
- **Color tokens**: Light sections use `var(--cds-background)`, `var(--cds-layer-01)`, `var(--cds-text-primary)`, `var(--cds-border-subtle)`. Dark sections use explicit Gray 100 values.
- **Spacing**: Multiples of 8px (4, 8, 12, 16, 24, 32, 48, 64)
- **No rounded corners on cards**: Case study cards use `rounded-none`. Testimonial card uses sharp edges.

### 3.2 Dark Theme (Credibility Section)
Applies to Case Studies + Testimonials sections:
| Element | Token / Value |
|---|---|
| Section background | `#161616` (Gray 100) |
| Card background | `#262626` (Gray 90) |
| Card border | `#393939` (Gray 80) |
| Primary text | `#f4f4f4` (Gray 10) |
| Secondary text | `#c6c6c6` (Gray 30) |
| Helper text | `#a8a8a8` (Gray 40) |
| Link primary | `#78a9ff` (Blue 40) |
| Link hover | `#a6c8ff` (Blue 30) |
| Accent / stat | `#0f62fe` (Blue 60) |
| Muted text | `#6f6f6f` (Gray 60) |

### 3.3 Light Theme (Buyer Journey Sections)
| Element | Token / Value |
|---|---|
| Background | `var(--cds-background)` (white) |
| Layer | `var(--cds-layer-01)` (white) |
| Text primary | `var(--cds-text-primary)` (#161616) |
| Text secondary | `var(--cds-text-secondary)` (#525252) |
| Border | `var(--cds-border-subtle)` (#e0e0e0) |
| Accent | `#0f62fe` (Blue 60) |

### 3.4 Card Patterns

**Case Study Card**
- Top: `h-28 bg-[#1a1a1a]` with large watermark initial (`text-7xl font-light text-[#2a2a2a]`)
- Hover: thin blue top border appears (`h-0.5 bg-[#0f62fe]`)
- Meta: industry label + dot + tag
- Metric: `text-3xl font-light text-[#0f62fe]` + uppercase label
- Border: `border-[#393939]`, hover `border-[#78a9ff]`

**Testimonial Card**
- Left panel (2/5): background image + gradient overlay + white logo tile (`w-40 h-28 bg-white`) + dark caption bar (`bg-[#1a1a1a] border-[#393939]`)
- Right panel (3/5): context header + serif quote (`text-xl font-serif text-[#f4f4f4]`) + author bar
- Decorative quotes: `text-8xl text-[#0f62fe] opacity-45 font-serif`
- Quote: non-italic, `leading-relaxed`, `space-y-5`
- Author bar: `bg-[#1a1a1a] border-t border-[#393939]`
- Avatar: `w-10 h-10 rounded-full bg-[#0f62fe]`

### 3.5 Typography Rules
- **No em-dashes (`—`) anywhere**: Use colons (`:`) per site-wide rule
- **Headings**: `carbon-fluid-heading-04` for section headings, `carbon-heading-02` for card titles
- **Labels**: `carbon-label-01`, uppercase, tracking-wider
- **Body**: `carbon-body-01` for descriptions, `carbon-helper-text-01` for captions
- **Testimonial quote**: `text-xl font-serif` (NOT italic) on dark bg

### 3.6 Hover & Interaction States
- Links: `hover:text-[#0f62fe]` or `hover:text-[#78a9ff]` with `transition-colors`
- Cards: `hover:border-[#78a9ff] transition-all duration-300`
- Buttons: `hover:bg-[#0353e9]` for primary blue buttons
- Tags/pills: `hover:bg-[#0f62fe] hover:text-white`
- Arrows: `group-hover:translate-x-0.5 transition-all`

### 3.7 Visual Assets
- **Hero background**: Dark navy gradient (`#0a1628` to `#0d1f35`)
- **Testimonial bg images**: `/case-studies/ibrahim-fibres/hero-1920.jpg`
- **Logos**: `/logos/clients/IFL-logo.png` (white bg, sharp edges, no rounding)
- **Partner logos**: `/logos/partners/` (SVG, scrolling marquee)
- **Client logos**: `/logos/clients/` (PNG, scrolling marquee)

---

## 4. Information Architecture

### 4.1 Section Order & Rationale

| # | Section | Purpose | BG |
|---|---|---|---|
| 1 | Hero | Hook + value proposition | Dark |
| 2 | Trust Boxes | Quick navigation to buyer journey | Light |
| 3 | Hardware Supply | Step 1: What you buy | Light |
| 4 | Installation | Step 2: How it gets built | Light |
| 5 | Managed Services | Step 3: Who stays | Light |
| 6 | Pakistan-Specific | Differentiator: local engineering | Light |
| 7 | Dependencies | Cross-sell: related services | Light |
| 8 | Integration | Cross-sell: ecosystem | Light |
| 9 | Case Studies | Rational proof | Dark |
| 10 | Testimonials | Emotional proof | Dark |
| 11 | Partners | Authority by association | Light |
| 12 | Portfolio | Social proof | Light |
| 13 | CTA | Conversion | Light |

**Rationale**: The first 8 sections form a guided buyer journey (hardware → install → managed → local → dependencies → ecosystem). Sections 9–10 are credibility (dark band). Sections 11–13 are trust + conversion.

### 4.2 User Flow

**Primary persona**: Infrastructure Manager / CTO evaluating cooling solutions for a Pakistan-based data centre

**Flow**:
1. Lands on Hero → reads value prop
2. Jumps to relevant step via Trust Boxes OR scrolls sequentially
3. Reviews hardware options (manufacturer logos create trust)
4. Sees installation process (reduces perceived risk)
5. Sees managed services (recurring revenue hook)
6. Sees Pakistan-specific engineering (differentiator)
7. Realises dependencies → explores sibling services
8. Sees ecosystem integration → explores Server Continuity
9. Arrives at Case Studies → validates with metrics
10. Reads testimonial → emotional validation
11. Sees partner logos → authority reinforcement
12. Sees CTA → requests assessment

### 4.3 Navigation Hierarchy

```
Infrastructure (top nav dropdown)
└── Data Centre Services 3
    ├── Cooling & Airflow Management ← THIS PAGE
    ├── Power & UPS
    ├── Rack & Cabinet
    ├── Environmental Monitoring
    ├── Fire Suppression
    ├── Design & Build
    ├── Migration & Relocation
    └── Maintenance & Support
```

**Side nav** ( CoolingAirflow page only):
- Key Topics (trust)
- Hardware Supply
- Installation
- Managed Services
- Pakistan-Specific
- Dependencies
- Integration
- Case Studies
- Testimonials
- Partners
- Clients
- Get Started

### 4.4 Content Hierarchy

**Primary**: Section headings + body copy (buyer journey)
**Secondary**: Case study metrics + testimonial quotes (credibility)
**Tertiary**: Partner logos + legal disclaimers (trust)
**Conversion**: CTA banner + assessment form (action)

### 4.5 URL Structure
```
/#/services/cooling-airflow              ← This page
/#/services/server-continuity            ← Linked solution page
/#/services/{sibling-service}            ← Dependency links
/#/projects                              ← Case study destination
/#/projects/case-study/{slug}            ← Individual case studies
```

---

## 5. Additional Notes

### 5.1 Voice & Tone
- **Authoritative but accessible**: Technical precision without jargon overload
- **Pakistan-centric**: References to monsoons, load-shedding, Lahore warehouse
- **Outcome-focused**: Every section ties to a business result (uptime, PUE, cost avoidance)
- **No hyperbole**: "Monsoon-hardened" and "dust-excluded" are engineering protocols, not warranties

### 5.2 Accessibility
- All interactive elements have `hover:` and `focus:` states
- Images have `alt` text
- Pagination buttons have `aria-label`
- Testimonial prev/next buttons have `aria-label`
- Section IDs enable anchor linking and scroll-spy

### 5.3 Performance
- Images use `object-contain` and `onError` fallbacks
- Logo tickers use CSS animation (no JS)
- No heavy third-party scripts

### 5.4 Reusability for Remaining 7 Pages
This page is the **template** for all Data Centre service pages. Each sibling page will:
- Follow the same 13-section structure
- Swap section content for the relevant service
- Keep the same Credibility section (Case Studies + Testimonials)
- Keep the same Partners + Portfolio + CTA sections
- Keep the same Trust Boxes (updated with relevant jump targets)
- Update the Hero headline, subheadline, and cards
- Update the 8-step buyer journey for the specific service

### 5.5 Content Gaps
- Case studies 4–6 have shorter descriptions than 1–3
- Testimonial 2 (National Telecom) is fictional and has no image
- Partner logos are placeholder SVGs (need actual brand assets)
- Client logos are placeholder PNGs (need actual brand assets)
