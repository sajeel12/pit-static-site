Business BenefitsBusines


---

## 📁 Folder Structure

```
public/
│
├── 📸 hero/                          # Hero section backgrounds
│   ├── hero_main_office.jpg
│   └── hero_micro_meeting.jpg
│
├── 📊 case-studies/                  # Case study photos
│   ├── case_study_farmdar.jpg
│   ├── case_study_jazz.jpg
│   ├── ibrahim-fibres-facility.jpg   # Add new case study photos here
│   └── lumhs-campus.jpg
│
├── 👥 team/                          # Team member photos
│   ├── david_headshot.jpg
│   └── david_pridmore.jpg
│
├── 💬 testimonials/                  # Testimonial headshots
│   ├── testimonial_andy.jpg
│   ├── testimonial_julian.jpg
│   ├── testimonial_muhammad.jpg
│   └── testimonial_usman.jpg
│
├── 🏭 industries/                    # Industry-specific photos
│   ├── manufacturing-facility.jpg
│   ├── telecom-tower.jpg
│   ├── data-center.jpg
│   └── education-campus.jpg
│
├── 📑 sections/                      # Section-specific images
│   ├── about-team.jpg
│   ├── services-hero.jpg
│   └── contact-office.jpg
│
├── 🏢 logos/                         # All logos
│   ├── clients/                      # Client company logos
│   │   ├── jazz-logo.png
│   │   └── [client-name]-logo.svg
│   │
│   └── partners/                     # Technology partner logos
│       ├── Partner-Dell-logo.svg
│       ├── Partner-Huawei-Logo.svg
│       └── [partner-name]-logo.svg
│
└── 🎯 Root level files               # Main brand assets
    ├── logo.png
    ├── logo_icon.png
    └── ibrahim-fibres-logo.svg
```

---

## 📸 Image Specifications

### Hero Backgrounds
| Property | Value |
|----------|-------|
| **Size** | 1920x1080px (16:9) |
| **Format** | WebP (preferred), JPG |
| **Max file size** | 500KB |
| **Usage** | Page hero sections, landing pages |

### Case Study Photos
| Property | Value |
|----------|-------|
| **Size** | 800x600px (4:3) or 1200x675px (16:9) |
| **Format** | WebP, JPG |
| **Max file size** | 300KB |
| **Usage** | Case study cards, project galleries |
| **Naming** | `{company-name}-{description}.jpg` |

### Testimonial Headshots
| Property | Value |
|----------|-------|
| **Size** | 400x400px (1:1) |
| **Format** | JPG |
| **Max file size** | 100KB |
| **Usage** | Testimonial cards, team sections |
| **Naming** | `testimonial_{firstname}.jpg` |

### Company/Industry Photos
| Property | Value |
|----------|-------|
| **Size** | 800x600px (4:3) |
| **Format** | WebP, JPG |
| **Max file size** | 300KB |
| **Usage** | Case studies, industry pages |

### Logos
| Property | Value |
|----------|-------|
| **Size** | Variable (SVG scales) |
| **Format** | SVG (preferred), PNG |
| **Max file size** | 50KB |
| **Usage** | Client logos, partner logos, case studies |
| **Naming** | `{company-name}-logo.svg` |

---

## 💻 How to Use in Code

### Basic Image
```tsx
<img 
  src="/case-studies/ibrahim-fibres-facility.jpg" 
  alt="Ibrahim Fibres manufacturing facility"
  className="w-full h-auto"
/>
```

### Background Image
```tsx
<div 
  className="bg-cover bg-center"
  style={{ backgroundImage: 'url(/hero/cloud-services.jpg)' }}
>
  {/* Content */}
</div>
```

### Logo
```tsx
<img 
  src="/logos/clients/jazz-logo.png" 
  alt="Jazz"
  className="h-12 w-auto"
/>
```

### Testimonial Photo
```tsx
<img 
  src="/testimonials/testimonial_andy.jpg" 
  alt="Andy - CTO"
  className="w-16 h-16 rounded-full object-cover"
/>
```

### Industry Photo
```tsx
<img 
  src="/industries/telecom-tower.jpg" 
  alt="Telecommunications infrastructure"
  className="w-full h-64 object-cover"
/>
```

---

## 🎯 Quick Reference

| What You Need | Where to Put It | How to Reference |
|---------------|-----------------|------------------|
| Case study photo | `case-studies/` | `/case-studies/company-name.jpg` |
| Hero background | `hero/` | `/hero/page-name.jpg` |
| Team photo | `team/` | `/team/name.jpg` |
| Testimonial headshot | `testimonials/` | `/testimonials/testimonial_name.jpg` |
| Client logo | `logos/clients/` | `/logos/clients/company-logo.svg` |
| Partner logo | `logos/partners/` | `/logos/partners/partner-logo.svg` |
| Industry photo | `industries/` | `/industries/industry-type.jpg` |

---

## 📝 Naming Conventions

### Photos
```
{company-or-subject}-{description}.{ext}

Examples:
- ibrahim-fibres-factory.jpg
- lumhs-campus-aerial.jpg
- jazz-datacenter-interior.jpg
- manufacturing-production-line.jpg
```

### Logos
```
{company-name}-logo.{ext}

Examples:
- ibrahim-fibres-logo.svg
- jazz-logo.png
- dell-logo.svg
```

### People
```
{role}_{firstname}_{lastname}.{ext}

Examples:
- team_david_pridmore.jpg
- testimonial_andy_chen.jpg
```

---

## 🎨 Image Optimization Tips

1. **Use WebP format** when possible (30-50% smaller than JPG)
2. **Compress images** before adding (use TinyPNG or Squoosh)
3. **Use appropriate dimensions** - don't upload 4000px images for 800px displays
4. **Provide alt text** for accessibility
5. **Use SVG for logos** - they scale infinitely and are small

---

## 📦 Adding New Images

1. Save image to appropriate folder
2. Follow naming convention
3. Optimize/compress if needed
4. Reference in code with leading `/`
5. Test in browser
6. Commit to git

Example workflow:
```bash
# 1. Copy image to folder
cp ~/Downloads/factory-photo.jpg app/public/case-studies/ibrahim-fibres-facility.jpg

# 2. Use in code
# src="/case-studies/ibrahim-fibres-facility.jpg"

# 3. Commit
git add app/public/case-studies/ibrahim-fibres-facility.jpg
git commit -m "Add Ibrahim Fibres case study photo"
```
