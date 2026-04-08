# ServiceNow Hero Section - Implementation Brief

## 1. Project Context
**Page:** ServiceNow Service Page  
**URL:** `/services/ServiceNow`  
**Theme:** Dark (g100)  
**Background:** #0F172A (slate-900)

## 2. Objective
Create a visually distinctive hero section that differentiates ServiceNow from other service pages while maintaining:
- Carbon Design System compliance
- Lightweight performance
- Accessibility support (reduced motion)
- Professional enterprise aesthetic

## 3. Design Direction
**Effect:** Flowing Gradient Planes  
**Rationale:** 
- Complements ServiceNow's workflow/orchestration positioning
- Abstract representation of data flow and automation
- More sophisticated/subtle than particle effects
- Professional yet dynamic

## 4. Technical Implementation

### 4.1 Stack
| Technology | Purpose |
|------------|---------|
| Three.js | Core WebGL/3D rendering |
| @react-three/fiber | React integration |
| @react-three/drei | Utilities |
| Custom GLSL | Shader effects |

### 4.2 Component Architecture
```
HeroGradientPlanes.tsx
├── GradientPlane (x4)
│   ├── PlaneGeometry (6x4 units, 32 segments)
│   ├── ShaderMaterial
│   │   ├── Vertex Shader: Wave animation
│   │   └── Fragment Shader: Gradient + fade
│   └── Position/Rotation variants
├── Scene Container
│   └── Mouse parallax binding
└── Canvas
    ├── Camera: [0,0,8], FOV 50
    ├── DPR: [1, 1.5]
    └── Alpha: true
```

### 4.3 Visual Specifications

**Planes:**
| Plane | Position | Rotation | Colors | Opacity | Speed |
|-------|----------|----------|--------|---------|-------|
| 1 | [-2, 0, -3] | [0.2, 0.3, 0] | #0f62fe → #4589ff | 0.15 | 0.5 |
| 2 | [2, -1, -4] | [-0.1, -0.4, 0.1] | #8a3ffc → #0f62fe | 0.12 | 0.7 |
| 3 | [0, 1.5, -5] | [0.3, 0.2, -0.1] | #4589ff → #8a3ffc | 0.10 | 0.4 |
| 4 | [-3, -2, -6] | [-0.2, 0.5, 0.2] | #0f62fe → #6929c4 | 0.08 | 0.6 |

**Shader Effects:**
- **Wave Animation:** `sin(pos.x * 2.0 + uTime * 0.5) * 0.3`
- **Gradient Mix:** Based on UV + elevation
- **Edge Fade:** Smoothstep fade on X/Y edges
- **Transmission:** Semi-transparent layering

**Mouse Interaction:**
- Group rotation: `mouse.y * 0.05` (X-axis), `mouse.x * 0.05` (Y-axis)
- Passive event listener for performance

## 5. Integration

### 5.1 Hero Section Layout
```tsx
<section id="overview" className="relative pt-40 pb-20 bg-[#0F172A] overflow-hidden">
  <HeroGradientPlanes /> {/* z-0, absolute inset-0 */}
  <div className="relative z-10 cds--css-grid">
    {/* Content: Breadcrumb, H1, CTAs */}
  </div>
</section>
```

### 5.2 Content Hierarchy
1. **Breadcrumb:** Home → Services → ServiceNow
2. **H1:** ServiceNow / Implementation & Migration
3. **Subtitle:** End-to-end ITSM transformation with Full-Stack Integration
4. **CTAs:** Explore Services (primary), View Case Studies (tertiary)

## 6. Accessibility & Performance

### 6.1 Reduced Motion Support
```tsx
const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
useEffect(() => {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  setPrefersReducedMotion(mediaQuery.matches);
}, []);
if (prefersReducedMotion) return null;
```

### 6.2 WebGL Detection
```tsx
const canvas = document.createElement('canvas');
const gl = canvas.getContext('webgl');
if (!gl) setWebglSupported(false);
```

### 6.3 Performance Optimizations
- DPR capped at 1.5
- `powerPreference: 'high-performance'`
- `depthWrite: false` on transparent materials
- Passive mouse event listeners

## 7. Comparison with Maximo

| Aspect | ServiceNow (Gradient Planes) | Maximo (Floating Orbs) |
|--------|------------------------------|------------------------|
| **Theme** | Dark (#0F172A) | Light (white) |
| **Effect** | Flowing planes | Floating spheres |
| **Animation** | Wave distortion | Orbital rotation |
| **Particles** | No | Yes (80 dots) |
| **Shaders** | Custom GLSL | Standard materials |
| **Mood** | Sophisticated/Flow | Dynamic/Energy |

## 8. Files Modified/Created

**New:**
- `app/src/components/HeroGradientPlanes.tsx`

**Modified:**
- `app/src/pages/services/ServiceNow.tsx` (import + usage)

## 9. Bundle Impact
- Three.js: ~900KB (shared with Maximo)
- Component: ~5KB
- Gzipped total: ~647KB

## 10. Next Steps / Considerations
- Monitor performance on low-end devices
- Consider adding fog for deeper depth perception
- Potential: tie wave speed to scroll position for parallax integration

---

**Status:** ✅ Implemented & Deployed  
**Last Updated:** 2026-04-02
