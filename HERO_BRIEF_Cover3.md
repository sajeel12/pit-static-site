# Hero Section Design Brief: Cover3 (Landing Page)

## Component Identity
- **Page**: Cover3.tsx (Main Landing Page)
- **Component**: `HeroVariant` + `LiveNetworkAnimation`
- **Theme**: "Controlled Complexity" - Representing stability, governance, and 24/7 monitoring

---

## 1. Layout & Composition

### Grid System
- **Type**: 12-column CSS Grid (Tailwind: `grid-cols-12`)
- **Desktop**: Content (6 columns) | Visual (6 columns)
- **Mobile**: Stacks vertically (content first, visual second)
- **Container**: `max-w-7xl` centered with `mx-auto`
- **Padding**: `px-6 sm:px-8 lg:px-12`

### Section Structure
```
┌─────────────────────────────────────────────────────────────┐
│  [12-Column Grid]                                           │
│  ┌──────────────────────┬──────────────────────┐           │
│  │                      │                      │           │
│  │   LEFT (6 cols)      │   RIGHT (6 cols)     │           │
│  │   - Eyebrow          │   - LiveNetwork      │           │
│  │   - Headline         │     Animation        │           │
│  │   - Sub-head         │                      │           │
│  │   - CTA Button       │                      │           │
│  │                      │                      │           │
│  └──────────────────────┴──────────────────────┘           │
│                                                             │
│  [Stats Bar - Full Width]                                   │
│  ┌────────┬────────┬────────┬────────┐                     │
│  │ 99.99% │ <5min  │  24/7  │  50+   │                     │
│  │ Uptime │ Alert  │  NOC   │ Clients│                     │
│  │  SLA   │ Response│ Coverage│       │                     │
│  └────────┴────────┴────────┴────────┘                     │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Visual Design

### Background
```css
background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%)
/* Deep Charcoal to Navy gradient */
```

### Color Palette
| Element | Color | Hex | Usage |
|---------|-------|-----|-------|
| Background Start | Deep Charcoal | `#0F172A` | Hero background |
| Background End | Navy | `#1E293B` | Gradient end |
| Eyebrow | Cyan | `#22D3EE` (`text-cyan-400`) | Label text |
| Headline Primary | White | `#FFFFFF` | Main heading |
| Headline Accent | Cyan | `#22D3EE` | Highlighted text |
| Body Text | Light Grey | `#94A3B8` | Sub-headline |
| CTA Button | Electric Blue | `#2563EB` | Primary button |
| Stats Labels | Light Grey | `#94A3B8` | Stats subtext |
| Border | White 10% | `rgba(255,255,255,0.1)` | Stats bar border |
| Stats BG | White 5% | `rgba(255,255,255,0.05)` | Stats bar background |

### Typography
| Element | Font | Size | Weight | Line Height | Letter Spacing |
|---------|------|------|--------|-------------|----------------|
| Eyebrow | System | 12px (`text-xs`) | 600 (`font-semibold`) | - | 0.3em (`tracking-[0.3em]`) |
| Headline | System | 48px (`text-[48px]`) | 700 (`font-bold`) | 1.1 | -0.02em (tight) |
| Sub-head | System | 18px (`text-lg`) | 400 | 1.6 (`leading-relaxed`) | - |
| CTA Text | System | 16px | 600 (`font-semibold`) | - | - |
| Stats Number | System | 30px (`text-3xl`) | 700 (`font-bold`) | - | - |
| Stats Label | System | 12px (`text-xs`) | 400 | - | 0.1em (uppercase) |

---

## 3. The Live Network Animation

### Technology Stack
- **Format**: Inline SVG (NOT an image file)
- **Animation**: Pure CSS Keyframes
- **NO WebGL/Three.js**: Lightweight, performant

### Visual Structure
```
                    [Cloud GW]
                         |
                         |
        [Client B] ------+------ [Karachi Hub]
                         |
                         |
                   [Core NOC] ★ (Glowing center)
                         |
                         |
        [Client A] ------+------ [Lahore DC]
                         |
                         |
                   [Islamabad]
```

### Animation Details
| Element | Animation | Duration | Effect |
|---------|-----------|----------|--------|
| Core Node | Pulse | 3s ease-in-out | Opacity 0.6→1.0, Scale 1→1.05 |
| Data Packets | Flow | 2s linear | Travel along connection lines |
| Packet Stagger | Delay | 0.3s increments | Each connection offset |
| Glow Effect | Constant | - | SVG filter `feGaussianBlur` |

### Node Specifications
| Node Type | Radius | Color | Stroke | Effect |
|-----------|--------|-------|--------|--------|
| Core | 20px | `#0F172A` fill | `#06B6D4` 2px | Glow filter |
| Core Inner | 12px | `#06B6D4` 30% opacity | - | - |
| Core Center | 6px | `#06B6D4` solid | - | - |
| Secondary | 8px | `#1E293B` fill | `#3B82F6` 1px | Hover expand |
| Secondary Dot | 4px | `#3B82F6` | - | - |

### Connection Lines
- **Static**: `#3B82F6` at 20% opacity, 1px stroke
- **Active**: Data packets (bright dots) travel along paths
- **Animation**: CSS `offset-path` with `offset-distance`

### Interactivity
- **Hover on Node**: Node brightens, tooltip appears
- **Tooltip**: Shows "Label • Metric" (e.g., "Karachi Hub • Latency: 12ms")
- **Tooltip Style**: Dark bg, cyan border, white text

---

## 4. Component Code Structure

### HeroVariant Component
```tsx
const HeroVariant = () => {
  return (
    <section 
      className="relative min-h-screen overflow-hidden pt-20"
      style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' }}
    >
      {/* 12-Column Grid */}
      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[70vh]">
          
          {/* Left Content - 6 columns */}
          <div className="lg:col-span-6 relative z-10">
            {/* Eyebrow */}
            {/* Headline */}
            {/* Sub-head */}
            {/* CTA */}
          </div>
          
          {/* Right Visual - 6 columns */}
          <div className="lg:col-span-6 relative h-[400px] lg:h-[500px]">
            <LiveNetworkAnimation />
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-white/5 backdrop-blur-sm">
        {/* 4-column stats grid */}
      </div>
    </section>
  );
};
```

### LiveNetworkAnimation Component
```tsx
const LiveNetworkAnimation = () => {
  // State for hover/tooltip
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const [tooltip, setTooltip] = useState<{x, y, text} | null>(null);

  // Node definitions
  const nodes = [
    { id: 0, x: 150, y: 150, type: 'core', label: 'Core NOC', metric: 'Status: Active' },
    // ... 6 secondary nodes
  ];

  // Connection definitions
  const connections = [
    { from: 0, to: 1 }, // etc.
  ];

  return (
    <svg viewBox="0 0 360 360" className="w-full max-w-md h-auto">
      {/* CSS animations in <defs> */}
      {/* Connection lines with packet animation */}
      {/* Secondary nodes */}
      {/* Core node with pulse */}
    </svg>
  );
};
```

---

## 5. Key Implementation Notes

### Do's
- ✅ Use inline SVG for crisp rendering at any resolution
- ✅ Use CSS keyframes (not JS) for animations
- ✅ Implement `prefers-reduced-motion` support
- ✅ Use `backdrop-blur-sm` for glassmorphism effect on stats bar
- ✅ Maintain 12-column grid consistency

### Don'ts
- ❌ Do NOT use WebGL/Three.js for this animation
- ❌ Do NOT use image files for the network diagram
- ❌ Do NOT use complex particle systems
- ❌ Do NOT exceed 60fps animation budget

### Performance Budget
- Max 60 FPS
- Animation only on GPU-accelerated properties (`transform`, `opacity`)
- SVG filter effects minimal (single glow filter)
- Passive mouse event listeners

---

## 6. Responsive Behavior

| Breakpoint | Layout | Font Size | Network Animation |
|------------|--------|-----------|-------------------|
| Desktop (lg+) | 6/6 split | 48px headline | 500px height |
| Tablet (md) | Stacked | 40px headline | 400px height |
| Mobile (sm) | Stacked | 32px headline | 350px height |

---

## 7. External Dependencies & Imports

### Required NPM Packages
```json
{
  "dependencies": {
    "react": "^18.x",
    "lucide-react": "latest"
  }
}
```

### Required Imports (Top of File)
```tsx
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
```

### Where These Are Used
| Import | Used In | Purpose |
|--------|---------|---------|
| `useState` | `LiveNetworkAnimation` | Hover state for nodes, tooltip position |
| `ArrowRight` | `HeroVariant` | CTA button icon with hover animation |

---

## 8. Copy Text (Reference)

| Element | Text |
|---------|------|
| Eyebrow | "24/7 Network Operations Center" |
| Headline Line 1 | "Controlled Complexity." |
| Headline Line 2 | "Absolute Governance." |
| Sub-head | "Enterprise infrastructure monitoring with millisecond precision. We maintain the systems that power your business—so you never have to worry about them." |
| CTA Button | "Schedule NOC Consultation" |
| Stats | 99.99% Uptime SLA, <5min Alert Response, 24/7 NOC Coverage, 50+ Enterprise Clients |

---

## 9. Files Location

- **Main Component**: `/app/src/pages/Cover3.tsx`
- **Hero Component**: `HeroVariant` (lines 725-806)
- **Animation Component**: `LiveNetworkAnimation` (lines 515-723)
- **Styles**: Inline Tailwind classes (no separate CSS file)

---

## 10. How to Duplicate

1. Copy `HeroVariant` and `LiveNetworkAnimation` components
2. Adjust gradient colors for different themes
3. Modify node positions in `LiveNetworkAnimation` for different layouts
4. Update copy text in `HeroVariant`
5. Adjust stats in the stats bar section
6. Keep the 12-column grid structure for consistency

---

*Last Updated: 2026-04-02*
*Theme: "Controlled Complexity" - Deep Navy/Cyan*
