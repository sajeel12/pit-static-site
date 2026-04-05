/**
 * CarbonHeroDark - REUSABLE DARK HERO COMPONENT
 * 
 * A dark-themed hero section following IBM Carbon Design System principles.
 * Based on the finalized ServiceNow hero design (backup/hero-v2-20260405).
 * 
 * Usage:
 * ```tsx
 * import CarbonHeroDark from './components/CarbonHeroDark';
 * 
 * <CarbonHeroDark
 *   breadcrumb={[
 *     { label: 'Home', href: '/' },
 *     { label: 'Services', href: '/services' },
 *     { label: 'IT Platforms', href: '/services#platforms' },
 *   ]}
 *   currentPage="ServiceNow"
 *   headline="Secure Your ServiceNow Transition"
 *   description="Risk-mapped integrations that prevent SLA breaches..."
 *   primaryCta={{ label: 'Get Risk Assessment', onClick: () => {} }}
 *   secondaryCta={{ label: 'View Case Studies', onClick: () => {} }}
 *   stats={[
 *     { value: '14+', label: 'Years Experience' },
 *     { value: '50+', label: 'Projects Delivered' },
 *     { value: '99.9%', label: 'SLA Uptime' },
 *   ]}
 *   features={[
 *     { icon: Security, title: 'Risk-Mapped Approach', description: '...', color: '#0f62fe' },
 *     { icon: Time, title: '8-Week Deployment', description: '...', color: '#24a148' },
 *     { icon: Headphones, title: '24/7 Support', description: '...', color: '#f1c21b' },
 *   ]}
 *   trustBadges={[
 *     { icon: Locked, label: 'SOC 2 Type II' },
 *     { icon: Security, label: 'ISO 27001' },
 *     { icon: Building, label: 'Fortune 500 Ready' },
 *   ]}
 * />
 * ```
 */

import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  type CarbonIconType
} from '@carbon/icons-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface StatItem {
  value: string;
  label: string;
}

interface FeatureItem {
  icon: CarbonIconType;
  title: string;
  description: string;
  color: string;
}

interface TrustBadge {
  icon: CarbonIconType;
  label: string;
}

interface CtaButton {
  label: string;
  onClick: () => void;
}

interface CarbonHeroDarkProps {
  /** Breadcrumb navigation items */
  breadcrumb?: BreadcrumbItem[];
  /** Current page name (last breadcrumb item, not clickable) */
  currentPage: string;
  /** Main headline - 60px, Light weight */
  headline: string;
  /** Description paragraph */
  description: string;
  /** Primary CTA button */
  primaryCta: CtaButton;
  /** Secondary CTA button */
  secondaryCta?: CtaButton;
  /** Stats to display (3 items recommended) */
  stats?: StatItem[];
  /** Feature tiles to display (3 items recommended) */
  features: FeatureItem[];
  /** Trust badges for bottom bar */
  trustBadges?: TrustBadge[];
  /** Trust bar label */
  trustLabel?: string;
}

export const CarbonHeroDark = ({
  breadcrumb = [],
  currentPage,
  headline,
  description,
  primaryCta,
  secondaryCta,
  stats = [],
  features,
  trustBadges = [],
  trustLabel = 'Trusted by enterprise teams',
}: CarbonHeroDarkProps) => {
  return (
    <section 
      className="overflow-hidden" 
      style={{ 
        marginTop: '120px', 
        background: 'linear-gradient(180deg, #0a0a0a 0%, #161616 100%)' 
      }}
    >
      {/* Top Accent Bar */}
      <div style={{ height: '4px', backgroundColor: '#0f62fe' }} />
      
      {/* Main Hero Content - Combined Grid */}
      <div className="cds--css-grid" style={{ 
        paddingTop: '32px',
        paddingBottom: '64px',
        paddingLeft: '32px',
        paddingRight: '32px'
      }}>
        {/* Breadcrumb - full width */}
        <div className="cds--col-span-16 cds--col-span-16--lg" style={{ marginTop: '48px', marginBottom: '24px' }}>
          <nav className="flex items-center gap-2">
            {breadcrumb.map((item, index) => (
              <div key={item.href} className="flex items-center gap-2">
                <Link 
                  to={item.href} 
                  className="hover:text-white transition-colors cds--label-01" 
                  style={{ color: '#a8a8a8' }}
                >
                  {item.label}
                </Link>
                <ChevronRight className="w-3 h-3" style={{ color: '#6f6f6f' }} />
              </div>
            ))}
            <span className="cds--label-01" style={{ color: '#ffffff' }}>{currentPage}</span>
          </nav>
        </div>

        {/* Left Content - 8 cols */}
        <div className="cds--col-span-8 cds--col-span-8--lg">
          {/* Headline - 60px, Light weight, White */}
          <h1 style={{ 
            marginBottom: '24px', 
            maxWidth: '700px', 
            color: '#ffffff', 
            fontSize: '60px', 
            lineHeight: '1.2', 
            fontWeight: 300, 
            letterSpacing: '-0.64px' 
          }}>
            {headline}
          </h1>

          {/* Body - White */}
          <p style={{ 
            marginBottom: '32px', 
            maxWidth: '560px', 
            color: '#ffffff',
            fontSize: '16px',
            lineHeight: '1.5'
          }}>
            {description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap" style={{ gap: '16px', marginBottom: '48px' }}>
            <button 
              onClick={primaryCta.onClick}
              className="cds--btn cds--btn--primary"
            >
              {primaryCta.label}
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            {secondaryCta && (
              <button 
                onClick={secondaryCta.onClick}
                className="cds--btn"
                style={{ 
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#ffffff'
                }}
              >
                {secondaryCta.label}
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </button>
            )}
          </div>

          {/* Stats Section */}
          {stats.length > 0 && (
            <div style={{ position: 'relative', paddingTop: '32px' }}>
              {/* Subtle Line */}
              <div style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '60px', 
                height: '1px', 
                backgroundColor: '#525252'
              }} />
              {/* Quick Stats */}
              <div style={{ display: 'flex', gap: '48px' }}>
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p style={{ 
                      fontSize: '36px', 
                      fontWeight: 300, 
                      lineHeight: '1.2', 
                      color: '#ffffff', 
                      marginBottom: '8px', 
                      letterSpacing: '-0.64px' 
                    }}>{stat.value}</p>
                    <p style={{ 
                      fontSize: '12px', 
                      lineHeight: '1.3', 
                      color: '#6f6f6f', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.5px' 
                    }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Content - 8 cols - Feature Tiles */}
        <div className="cds--col-span-8 cds--col-span-8--lg">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  style={{ 
                    padding: '24px', 
                    backgroundColor: '#1f1f1f', 
                    borderLeft: `3px solid ${feature.color}` 
                  }}
                >
                  <div className="flex items-start" style={{ gap: '16px' }}>
                    <div style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '8px', 
                      backgroundColor: `${feature.color}1F`, // 12% opacity
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      flexShrink: 0 
                    }}>
                      <Icon style={{ width: '20px', height: '20px', color: feature.color }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ 
                        fontSize: '16px', 
                        fontWeight: 600, 
                        lineHeight: '1.5', 
                        color: '#ffffff',
                        marginBottom: '4px'
                      }}>{feature.title}</h3>
                      <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#8d8d8d' }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      {trustBadges.length > 0 && (
        <div style={{ backgroundColor: '#0a0a0a' }}>
          <div className="cds--css-grid" style={{ 
            paddingTop: '24px', 
            paddingBottom: '24px',
            paddingLeft: '32px',
            paddingRight: '32px'
          }}>
            <div className="cds--col-span-16 cds--col-span-16--lg">
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '32px', flexWrap: 'wrap' }}>
                {/* Label */}
                <p style={{ fontSize: '12px', fontWeight: 400, color: '#6f6f6f', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>{trustLabel}</p>
                
                {/* Badges */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
                  {trustBadges.map((badge, index) => {
                    const Icon = badge.icon;
                    return (
                      <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Icon style={{ width: '18px', height: '18px', color: '#8d8d8d' }} />
                        <span style={{ fontSize: '15px', fontWeight: 400, color: '#8d8d8d' }}>{badge.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CarbonHeroDark;
