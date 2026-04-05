/**
 * ServiceNowHero - LOCKED COMPONENT
 * 
 * This component represents the finalized hero design for the ServiceNow page.
 * It wraps the reusable CarbonHeroDark component with ServiceNow-specific configuration.
 * 
 * DO NOT MODIFY without creating a new backup branch first.
 * 
 * Created: 2026-04-05
 * Backup: backup/hero-v2-20260405
 * 
 * For new pages, use CarbonHeroDark component directly.
 */

import CarbonHeroDark from './CarbonHeroDark';
import {
  Security,
  Time,
  Headphones,
  Locked,
  Building
} from '@carbon/icons-react';

interface ServiceNowHeroProps {
  onScrollToSection?: (id: string) => void;
}

export const ServiceNowHero = ({ onScrollToSection }: ServiceNowHeroProps) => {
  return (
    <CarbonHeroDark
      breadcrumb={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'IT Platforms', href: '/services#platforms' },
      ]}
      currentPage="ServiceNow"
      headline="Secure Your ServiceNow Transition"
      description="Risk-mapped integrations that prevent SLA breaches and ensure data continuity during your ServiceNow migration. We don't just implement, we protect your operations."
      primaryCta={{ 
        label: 'Get Risk Assessment', 
        onClick: () => onScrollToSection?.('contact') 
      }}
      secondaryCta={{ 
        label: 'View Case Studies', 
        onClick: () => onScrollToSection?.('case-studies') 
      }}
      stats={[
        { value: '14+', label: 'Years Experience' },
        { value: '50+', label: 'Projects Delivered' },
        { value: '99.9%', label: 'SLA Uptime' },
      ]}
      features={[
        { 
          icon: Security, 
          title: 'Risk-Mapped Approach', 
          description: 'Identify and mitigate migration risks before they impact operations.',
          color: '#0f62fe' 
        },
        { 
          icon: Time, 
          title: '8-Week Deployment', 
          description: 'Fixed-scope implementations with guaranteed timelines.',
          color: '#24a148' 
        },
        { 
          icon: Headphones, 
          title: '24/7 Support', 
          description: 'Lahore-based NOC for continuous monitoring and response.',
          color: '#f1c21b' 
        },
      ]}
      trustBadges={[
        { icon: Locked, label: 'SOC 2 Type II' },
        { icon: Security, label: 'ISO 27001' },
        { icon: Building, label: 'Fortune 500 Ready' },
      ]}
      trustLabel="Trusted by enterprise teams"
    />
  );
};

export default ServiceNowHero;
