/**
 * ServiceNowHero - LOCKED COMPONENT
 * 
 * This component represents the finalized hero design for the ServiceNow page.
 * DO NOT MODIFY without creating a new backup branch first.
 * 
 * Created: 2026-04-02
 * Backup: backup/hero-locked-20250402
 * 
 * Design Specifications:
 * - Background: Linear gradient (#0a0a0a to #161616)
 * - Headline: 60px, font-weight 300 (Light), white (#ffffff)
 * - Body: 16px, white (#ffffff)
 * - Stats: 36px values with subtle gray line above
 * - Tiles: #1f1f1f background with colored left borders
 */

import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Security,
  Time,
  Headphones,
  ChevronRight,
  Locked,
  Building
} from '@carbon/icons-react';

interface ServiceNowHeroProps {
  onScrollToSection?: (id: string) => void;
}

export const ServiceNowHero = ({ onScrollToSection }: ServiceNowHeroProps) => {
  const scrollTo = (id: string) => {
    if (onScrollToSection) {
      onScrollToSection(id);
    }
  };

  return (
    <section 
      id="overview" 
      className="overflow-hidden" 
      style={{ 
        marginTop: '120px', 
        background: 'linear-gradient(180deg, #0a0a0a 0%, #161616 100%)' 
      }}
    >
      {/* Top Accent Bar */}
      <div style={{ height: '4px', backgroundColor: 'var(--cds-link-primary)' }} />
      
      {/* Main Hero Content - Combined Grid */}
      <div className="cds--css-grid" style={{ 
        paddingTop: 'var(--cds-spacing-05)',
        paddingBottom: 'var(--cds-spacing-10)',
        paddingLeft: 'var(--cds-spacing-07)',
        paddingRight: 'var(--cds-spacing-07)'
      }}>
        {/* Breadcrumb - full width */}
        <div className="cds--col-span-16 cds--col-span-16--lg" style={{ marginTop: '48px', marginBottom: 'var(--cds-spacing-06)' }}>
          <nav className="flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors cds--label-01" style={{ color: '#a8a8a8' }}>Home</Link>
            <ChevronRight className="w-3 h-3" style={{ color: '#6f6f6f' }} />
            <Link to="/services" className="hover:text-white transition-colors cds--label-01" style={{ color: '#a8a8a8' }}>Services</Link>
            <ChevronRight className="w-3 h-3" style={{ color: '#6f6f6f' }} />
            <Link to="/services#platforms" className="hover:text-white transition-colors cds--label-01" style={{ color: '#a8a8a8' }}>IT Platforms</Link>
            <ChevronRight className="w-3 h-3" style={{ color: '#6f6f6f' }} />
            <span className="cds--label-01" style={{ color: '#ffffff' }}>ServiceNow</span>
          </nav>
        </div>

        {/* Left Content - 8 cols */}
        <div className="cds--col-span-8 cds--col-span-8--lg">
          {/* Headline - LOCKED: 60px, Light weight, White */}
          <h1 style={{ 
            marginBottom: 'var(--cds-spacing-06)', 
            maxWidth: '700px', 
            color: '#ffffff', 
            fontSize: '60px', 
            lineHeight: '1.2', 
            fontWeight: 300, 
            letterSpacing: '-0.64px' 
          }}>
            Secure Your ServiceNow Transition
          </h1>

          {/* Body - LOCKED: White for contrast */}
          <p className="carbon-body-02" style={{ 
            marginBottom: 'var(--cds-spacing-07)', 
            maxWidth: '560px', 
            color: '#ffffff' 
          }}>
            Risk-mapped integrations that prevent SLA breaches and ensure data continuity 
            during your ServiceNow migration. We don&apos;t just implement, we protect your operations.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap" style={{ gap: 'var(--cds-spacing-05)', marginBottom: 'var(--cds-spacing-09)' }}>
            <button 
              onClick={() => scrollTo('contact')}
              className="cds--btn cds--btn--primary"
            >
              Get Risk Assessment
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button 
              onClick={() => scrollTo('case-studies')}
              className="cds--btn"
              style={{ 
                backgroundColor: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: '#ffffff'
              }}
            >
              View Case Studies
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </button>
          </div>

          {/* Stats Section - LOCKED DESIGN */}
          <div style={{ position: 'relative', paddingTop: 'var(--cds-spacing-07)' }}>
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
              {[
                { value: '14+', label: 'Years Experience' },
                { value: '50+', label: 'Projects Delivered' },
                { value: '99.9%', label: 'SLA Uptime' }
              ].map((stat) => (
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
        </div>

        {/* Right Content - 8 cols - LOCKED TILES */}
        <div className="cds--col-span-8 cds--col-span-8--lg">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--cds-spacing-05)' }}>
            
            {/* Tile 1 - Risk-Mapped Approach */}
            <div className="group" style={{ 
              padding: '24px', 
              backgroundColor: '#1f1f1f', 
              borderLeft: '3px solid #0f62fe'
            }}>
              <div className="flex items-start" style={{ gap: '16px' }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '8px', 
                  backgroundColor: 'rgba(15, 98, 254, 0.12)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  flexShrink: 0 
                }}>
                  <Security style={{ width: '20px', height: '20px', color: '#0f62fe' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div className="flex items-center justify-between" style={{ marginBottom: '6px' }}>
                    <h3 style={{ 
                      fontSize: '16px', 
                      fontWeight: 600, 
                      lineHeight: '1.5', 
                      color: '#ffffff' 
                    }}>Risk-Mapped Approach</h3>
                    <ArrowRight className="w-4 h-4" style={{ color: '#525252', opacity: 0 }} />
                  </div>
                  <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#8d8d8d' }}>
                    Identify and mitigate migration risks before they impact operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Tile 2 - 8-Week Deployment */}
            <div className="group" style={{ 
              padding: '24px', 
              backgroundColor: '#1f1f1f', 
              borderLeft: '3px solid #24a148'
            }}>
              <div className="flex items-start" style={{ gap: '16px' }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '8px', 
                  backgroundColor: 'rgba(36, 161, 72, 0.12)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  flexShrink: 0 
                }}>
                  <Time style={{ width: '20px', height: '20px', color: '#24a148' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div className="flex items-center justify-between" style={{ marginBottom: '6px' }}>
                    <h3 style={{ 
                      fontSize: '16px', 
                      fontWeight: 600, 
                      lineHeight: '1.5', 
                      color: '#ffffff' 
                    }}>8-Week Deployment</h3>
                    <ArrowRight className="w-4 h-4" style={{ color: '#525252', opacity: 0 }} />
                  </div>
                  <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#8d8d8d' }}>
                    Fixed-scope implementations with guaranteed timelines.
                  </p>
                </div>
              </div>
            </div>

            {/* Tile 3 - 24/7 Support */}
            <div className="group" style={{ 
              padding: '24px', 
              backgroundColor: '#1f1f1f', 
              borderLeft: '3px solid #f1c21b'
            }}>
              <div className="flex items-start" style={{ gap: '16px' }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '8px', 
                  backgroundColor: 'rgba(241, 194, 27, 0.12)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  flexShrink: 0 
                }}>
                  <Headphones style={{ width: '20px', height: '20px', color: '#f1c21b' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div className="flex items-center justify-between" style={{ marginBottom: '6px' }}>
                    <h3 style={{ 
                      fontSize: '16px', 
                      fontWeight: 600, 
                      lineHeight: '1.5', 
                      color: '#ffffff' 
                    }}>24/7 Support</h3>
                    <ArrowRight className="w-4 h-4" style={{ color: '#525252', opacity: 0 }} />
                  </div>
                  <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#8d8d8d' }}>
                    Lahore-based NOC for continuous monitoring and response.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div style={{ backgroundColor: '#0a0a0a' }}>
        <div className="cds--css-grid" style={{ 
          paddingTop: 'var(--cds-spacing-06)', 
          paddingBottom: 'var(--cds-spacing-06)',
          paddingLeft: 'var(--cds-spacing-07)',
          paddingRight: 'var(--cds-spacing-07)'
        }}>
          <div className="cds--col-span-16 cds--col-span-16--lg">
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '32px', flexWrap: 'wrap' }}>
              {/* Label */}
              <p style={{ fontSize: '12px', fontWeight: 400, color: '#6f6f6f', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>Trusted by enterprise teams</p>
              
              {/* Badges */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
                {[
                  { icon: Locked, text: 'SOC 2 Type II' },
                  { icon: Security, text: 'ISO 27001' },
                  { icon: Building, text: 'Fortune 500 Ready' }
                ].map((item) => (
                  <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <item.icon style={{ width: '18px', height: '18px', color: '#8d8d8d' }} />
                    <span style={{ fontSize: '15px', fontWeight: 400, color: '#8d8d8d' }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceNowHero;
