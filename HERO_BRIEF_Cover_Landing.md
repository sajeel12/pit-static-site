# Hero Section Design Brief: Cover.tsx (Landing Page)

## Page Identity
- **File**: `/app/src/pages/Cover.tsx`
- **Component**: `HeroVariant` + `HeroGraphics`
- **Route**: `http://localhost:5173/#/` (Landing Page)
- **Theme**: "Unified Systems. Absolute Accountability." - Enterprise IT Solutions

---

## 1. Imports Required

### Main Component (Cover.tsx)
```tsx
import { ArrowRight } from 'lucide-react';                          // CTA arrow icon
import { 
  BareMetalServer, 
  Cloud, 
  Ai, 
  View, 
  Headphones, 
  Activity 
} from '@carbon/icons-react';                                       // Service card icons
import { 
  DataScience,
  EventAutomation,
  Robotics,
  EdgeComputing
} from '@carbon/pictograms-react';                                 // Abstract patterns
import { Link } from 'react-router-dom';                           // Navigation
import Navigation from '../components/Navigation';                 // Top nav
import Footer from '../sections/Footer';                           // Footer
import HeroGraphics from '../components/HeroGraphics';             // Background animation
```

### HeroGraphics Component
```tsx
import { useEffect, useState } from 'react';                       // Reduced motion detection
```

---

## 2. Hero Section Dimensions

| Property | Value | Notes |
|----------|-------|-------|
| **Height** | `min-h-screen` | Full viewport height |
| **Min Height** | 100vh | Ensures full coverage |
| **Container Max Width** | `max-w-7xl` (1280px) | Centered with auto margins |
| **Content Max Width** | `max-w-3xl` (768px) | Left content area |
| **Padding X** | `px-6 sm:px-8 lg:px-12` | Responsive horizontal padding |
| **Padding Y** | `py-16 lg:py-20` | Top/bottom spacing |
| **Top Offset** | `pt-20` (80px) | Accounts for fixed navigation |

---

## 3. Layout Structure

```
┌─────────────────────────────────────────────────────────────────────┐
│  [Fixed Navigation - 80px height]                                   │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌───────────────────────────────────────────────────────────────┐ │
│  │  [HeroGraphics - Absolute Background]                         │ │
│  │  - SVG viewBox: 1200x800                                      │ │
│  │  - Floating cubes, grids, lines, hexagons                     │ │
│  └───────────────────────────────────────────────────────────────┘ │
│                                                                     │
│  ┌────────────────────────────────┐  ┌──────────────────────────┐  │
│  │                                │  │                          │  │
│  │   LEFT CONTENT                 │  │   RIGHT VISUAL           │  │
│  │   (max-w-3xl)                  │  │   (absolute positioned)  │  │
│  │                                │  │                          │  │
│  │   - Eyebrow                    │  │   - Stats overlay        │  │
│  │   - Headline (2 lines)         │  │     (bottom-right)       │  │
│  │   - Sub-headline               │  │                          │  │
│  │   - Body text                  │  │                          │  │
│  │   - Process steps              │  │                          │  │
│  │   - CTAs (2 buttons)           │  │                          │  │
│  │                                │  │                          │  │
│  └────────────────────────────────┘  └──────────────────────────┘  │
│                                                                     │
│  [Scroll Indicator - Bottom Center]                                 │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 4. Carbon Design System Application

### Color Palette (Carbon Tokens)
| Element | Carbon Token | Hex Value | Usage |
|---------|--------------|-----------|-------|
| **Background** | White | `#FFFFFF` | Hero section background |
| **Headline Primary** | `$text-primary` | `#161616` | "Unified Systems" |
| **Headline Gradient Start** | Blue 60 | `#0f62fe` | Gradient text start |
| **Headline Gradient End** | Purple 60 | `#8a3ffc` | Gradient text end |
| **Sub-head Primary** | Blue 60 | `#0f62fe` | "Cloud Scalability" |
| **Sub-head Secondary** | Purple 70 | `#6929c4` | "AI Intelligence" |
| **Body Text** | `$text-secondary` | `#525252` | Description paragraph |
| **Process Steps** | `$text-helper` | `#6f6f6f` | Step labels |
| **Arrows** | `$border-subtle` | `#c6c6c6` | Process arrows |
| **CTA Primary** | Blue 60 | `#0f62fe` | Primary button bg |
| **CTA Primary Hover** | Blue 70 | `#0353e9` | Button hover state |
| **CTA Secondary Border** | `$text-primary` | `#161616` | Secondary button border |
| **Eyebrow** | Blue 60 | `#0f62fe` | Label text |

### Typography (Carbon Hierarchy)
| Element | Font | Size | Weight | Line Height | Letter Spacing |
|---------|------|------|--------|-------------|----------------|
| **Eyebrow** | IBM Plex Sans | 12px | 600 (semibold) | 1.33 | 0.3em (uppercase) |
| **Headline** | IBM Plex Sans | 48-64px | 700 (bold) | 1.1 | tight |
| **Sub-head** | IBM Plex Sans | 18-20px | 300 (light) | 1.5 | wide |
| **Body** | IBM Plex Sans | 16-18px | 400 (regular) | 1.6 | normal |
| **Process Steps** | IBM Plex Sans | 14px | 400-500 | 1.5 | normal |
| **CTA Text** | IBM Plex Sans | 16px | 600 (semibold) | 1 | normal |
| **Stats Number** | IBM Plex Sans | 36px | 700 (bold) | 1 | normal |
| **Stats Label** | IBM Plex Sans | 12px | 400 | 1 | 0.05em (uppercase) |

### Spacing Tokens
| Element | Value | Carbon Token Equivalent |
|---------|-------|------------------------|
| **Section Padding** | 80px (py-20) | `$spacing-10` |
| **Content Gap** | 24px (mb-6) | `$spacing-06` |
| **CTA Gap** | 16px (gap-4) | `$spacing-05` |
| **Container Padding** | 48px (px-12) | `$spacing-09` |

---

## 5. HeroGraphics Component Details

### Technology Stack
- **Format**: Inline SVG (pure SVG, no WebGL)
- **Animations**: CSS Keyframes (no JavaScript animation libraries)
- **Responsive**: `viewBox="0 0 1200 800"` with `preserveAspectRatio="xMidYMid slice"`

### Visual Elements
| Element | Description | Animation |
|---------|-------------|-----------|
| **Background Grid** | 8 horizontal + 12 vertical lines | Pulse opacity (6s) |
| **Large Orb (Top Right)** | 180px radius, blue gradient | Float up/down (8s) |
| **Secondary Orb (Bottom Left)** | 120px radius, purple gradient | Float reverse (10s) |
| **Small Orb (Middle Right)** | 80px radius, blue | Float (12s) |
| **Geometric Rings** | 2 ellipses centered at (900, 300) | Rotate (60s linear) |
| **Flowing Lines** | 3 curved bezier paths | Drift horizontal (15s) |
| **Dashed Arcs** | 2 dashed circular paths | Float (8s) |
| **Accent Dots** | 6 small circles (3-6px) | Pulse opacity (6s) |
| **Hexagons** | 2 hexagon shapes | Float with rotation |
| **Corner Accents** | Triangles top-left/bottom-right | Static |

### Gradient Definitions
```svg
<linearGradient id="blueGradient">
  <stop offset="0%" stopColor="#0f62fe" stopOpacity="0.8" />
  <stop offset="50%" stopColor="#4589ff" stopOpacity="0.6" />
  <stop offset="100%" stopColor="#8a3ffc" stopOpacity="0.4" />
</linearGradient>

<radialGradient id="orbGradient1">
  <stop offset="0%" stopColor="#0f62fe" stopOpacity="0.15" />
  <stop offset="70%" stopColor="#4589ff" stopOpacity="0.05" />
  <stop offset="100%" stopColor="#0f62fe" stopOpacity="0" />
</radialGradient>
```

### Animation Keyframes
```css
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
}

@keyframes pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes drift {
  0% { transform: translateX(0); }
  50% { transform: translateX(30px); }
  100% { transform: translateX(0); }
}
```

### Accessibility
- `prefers-reduced-motion` media query disables all animations
- `aria-hidden="true"` on decorative graphics
- `pointer-events-none` prevents interaction blocking

---

## 6. Content Copy

### Text Content
| Element | Copy |
|---------|------|
| **Eyebrow** | "ENTERPRISE IT SOLUTIONS" |
| **Headline Line 1** | "Unified Systems" |
| **Headline Line 2** | "Absolute Accountability" (gradient) |
| **Sub-head** | "Hardware Infrastructure. Cloud Scalability. AI Intelligence." |
| **Body** | "By bridging global supply chains with on-the-ground expertise, we engineer the infrastructure that powers your transformation with absolute accountability" |
| **Process** | Design → Procure → Deploy → Integrate → Manage → **Optimise** |
| **CTA Primary** | "Explore Services" |
| **CTA Secondary** | "Meet David Pridmore, CEO & CTO" |

### Stats Overlay (Bottom Right)
| Stat | Value | Label |
|------|-------|-------|
| 1 | 14+ | Years Experience |
| 2 | 50+ | Platforms Deployed |
| 3 | 24/7 | Support Coverage |

### Trust Bar (Below Hero)
- British-certified technologists
- Huawei Enterprise Partner
- EZY Distribution Alliance

---

## 7. CTA Buttons Specification

### Primary CTA
```
Background: #0f62fe (Blue 60)
Text: White, 16px, semibold
Padding: 16px 32px (px-8 py-4)
Hover: #0353e9 (Blue 70)
Icon: ArrowRight (lucide-react)
Icon Animation: translateX(4px) on hover
```

### Secondary CTA
```
Background: Transparent
Border: 1px solid #161616
Text: #161616, 16px, medium
Padding: 16px 32px
Hover: #f4f4f4 background
Avatar: 32px circular image (david_headshot.jpg)
Avatar Border: 2px solid #0f62fe
```

---

## 8. Responsive Breakpoints

| Breakpoint | Hero Height | Headline Size | Stats |
|------------|-------------|---------------|-------|
| **Mobile** (<640px) | min-h-screen | 36px (text-4xl) | Hidden |
| **Tablet** (640-1024px) | min-h-screen | 48px (text-5xl) | Hidden |
| **Desktop** (>1024px) | min-h-screen | 60px (text-6xl) | Visible |

---

## 9. File Locations

| File | Path | Purpose |
|------|------|---------|
| **Main Page** | `/app/src/pages/Cover.tsx` | Landing page with HeroVariant |
| **Graphics Component** | `/app/src/components/HeroGraphics.tsx` | SVG background animation |
| **Avatar Image** | `/public/david_headshot.jpg` | CEO photo for secondary CTA |

---

## 10. Performance Specifications

| Metric | Target |
|--------|--------|
| **Animation FPS** | 60fps (GPU accelerated) |
| **Bundle Impact** | ~5KB for HeroGraphics component |
| **Image Size** | david_headshot.jpg ~75KB |
| **Reduced Motion** | All animations disableable |
| **LCP Target** | < 2.5 seconds |

---

## 11. How to Replicate

1. **Create HeroGraphics component** with SVG and CSS animations
2. **Add to page** as absolute positioned background
3. **Implement HeroVariant** with content structure
4. **Add Navigation** (fixed, 80px height)
5. **Include TrustBar** below hero
6. **Add remaining sections** (ClientLogos, Services, etc.)

---

*Last Updated: 2026-04-02*
*Theme: "Unified Systems. Absolute Accountability." - Light Theme with Blue/Purple Accents*
