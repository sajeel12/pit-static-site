/**
 * Perception IT Design System
 * Based on Cover.tsx (Main Homepage)
 * All service pages should follow these standards
 */

// Color System
export const colors = {
  // Primary Brand Colors
  primary: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#3B82F6',  // Main brand color
    600: '#2563EB',
    700: '#1D4ED8',
    800: '#1E40AF',
    900: '#1E3A8A',
  },
  
  // Background Colors
  bg: {
    dark: '#0F172A',      // Hero background
    darker: '#0A2C50',    // Dark sections
    light: '#FAFAFA',     // Light sections
    white: '#FFFFFF',
  },
  
  // Text Colors
  text: {
    primary: '#0F172A',   // Main headings
    secondary: '#1F2937', // Subheadings
    body: '#4B5563',      // Body text
    muted: '#6B7280',     // Secondary text
    light: '#9CA3AF',     // Muted on dark
  },
  
  // Accent Colors (for badges)
  accent: {
    amber: { bg: '#FEF3C7', text: '#B45309' },  // Emerging
    green: { bg: '#DCFCE7', text: '#15803D' },  // Essential
  }
};

// Typography
export const typography = {
  // Font Sizes
  sizes: {
    hero: 'text-4xl sm:text-5xl lg:text-6xl',      // 40px-60px
    section: 'text-4xl sm:text-5xl',               // 36px-48px
    cardTitle: 'text-lg',                          // 18px
    bodyLarge: 'text-lg',                          // 18px
    body: 'text-base sm:text-lg',                  // 16-18px
    small: 'text-sm',                              // 14px
    caption: 'text-xs',                            // 12px
    micro: 'text-[10px]',                          // 10px
  },
  
  // Font Weights
  weights: {
    bold: 'font-bold',       // 700 - Hero headings
    semibold: 'font-semibold', // 600 - Section headings
    medium: 'font-medium',   // 500 - Labels
    normal: 'font-normal',   // 400 - Body
    light: 'font-light',     // 300 - Hero subheadings
  },
  
  // Letter Spacing
  tracking: {
    hero: 'tracking-[0.3em]',    // Hero eyebrow
    section: 'tracking-[0.2em]', // Section eyebrow
    tight: 'tracking-tight',     // Headings
    wide: 'tracking-wide',       // Stats labels
  },
  
  // Line Heights
  leading: {
    tight: 'leading-[1.1]',    // Hero heading
    snug: 'leading-tight',     // Section headings
    relaxed: 'leading-relaxed', // Body text
  }
};

// Spacing
export const spacing = {
  // Section Padding
  section: 'py-20',           // 80px - Major sections
  sectionLarge: 'py-24 lg:py-32', // For emphasis (optional)
  
  // Container
  container: 'max-w-7xl mx-auto px-6 sm:px-8 lg:px-12',
  containerNarrow: 'max-w-3xl mx-auto',
  containerWide: 'max-w-6xl mx-auto',
  
  // Grid Gaps
  gap: {
    sm: 'gap-2',      // 8px - Tags
    md: 'gap-4',      // 16px - Buttons
    lg: 'gap-6',      // 24px - Cards
    xl: 'gap-8',      // 32px - Large grids
  },
  
  // Component Spacing
  component: {
    card: 'p-6',           // Card padding
    cardLarge: 'p-8',      // Large card padding
    sectionHeader: 'mb-16', // Section header margin
  }
};

// Border Radius
export const radius = {
  full: 'rounded-full',    // CTAs, badges
  xl: 'rounded-xl',        // 12px - Featured cards
  lg: 'rounded-lg',        // 8px - Standard cards
  md: 'rounded',           // 4px - Tags
  sm: 'rounded-sm',        // 2px - Small elements
};

// Component Patterns
export const components = {
  // Primary CTA Button
  primaryButton: `
    group inline-flex items-center gap-3 
    px-8 py-4 
    bg-gradient-to-r from-blue-500 to-blue-600 
    text-white font-semibold 
    rounded-full 
    hover:from-blue-400 hover:to-blue-500 
    transition-all duration-300 
    shadow-lg shadow-blue-500/25
  `,
  
  // Secondary CTA Button
  secondaryButton: `
    group inline-flex items-center gap-3 
    px-8 py-4 
    border border-white/20 
    text-white font-medium 
    rounded-full 
    hover:bg-white/10 
    transition-all duration-300
  `,
  
  // Service Card
  serviceCard: `
    group 
    bg-white rounded-lg border border-gray-100 p-6 
    hover:border-blue-200 hover:shadow-xl 
    transition-all duration-300
  `,
  
  // Icon Container
  iconContainer: `
    w-10 h-10 rounded-lg bg-blue-50 
    flex items-center justify-center 
    text-blue-500
  `,
  
  // Section Eyebrow Label
  eyebrow: `
    inline-block 
    px-3 py-1 rounded-full 
    text-xs font-medium uppercase 
    tracking-[0.2em] 
    bg-blue-100 text-blue-600
  `,
  
  // Badge - Emerging
  badgeEmerging: `
    px-2 py-0.5 
    text-[10px] font-semibold uppercase 
    rounded 
    bg-amber-100 text-amber-700
  `,
  
  // Badge - Essential
  badgeEssential: `
    px-2 py-0.5 
    text-[10px] font-semibold uppercase 
    rounded 
    bg-green-100 text-green-700
  `,
  
  // Tag
  tag: `
    px-2.5 py-1 
    text-[10px] font-medium 
    text-gray-500 bg-gray-100 
    rounded
  `,
};

// Animation
export const animation = {
  // Duration
  duration: 'duration-300',
  
  // Common transitions
  hover: {
    card: 'hover:border-blue-200 hover:shadow-xl transition-all duration-300',
    button: 'hover:from-blue-400 hover:to-blue-500 transition-all duration-300',
    link: 'hover:text-blue-700 transition-colors',
    arrow: 'group-hover:translate-x-1 transition-transform',
  },
  
  // Opacity transitions
  opacity: {
    show: 'opacity-100',
    hide: 'opacity-0',
    hover: 'opacity-50 group-hover:opacity-70 transition-opacity',
  }
};

// Hero Section Standard
export const hero = {
  container: 'relative min-h-screen flex items-center overflow-hidden',
  background: 'bg-[#0F172A]',
  gradient: 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10',
  pattern: `opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:80px_80px]`,
  heading: 'text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight',
  subheading: 'text-lg sm:text-xl text-gray-400 font-light',
};

// Section Standard
export const section = {
  container: 'py-20',
  header: {
    wrapper: 'text-center max-w-2xl mx-auto mb-16',
    eyebrow: 'text-xs font-medium uppercase tracking-[0.2em] text-blue-500 mb-4 block',
    title: 'text-4xl sm:text-5xl font-semibold text-[#0F172A] leading-tight',
    description: 'text-lg text-gray-600',
  }
};

export default {
  colors,
  typography,
  spacing,
  radius,
  components,
  animation,
  hero,
  section,
};
