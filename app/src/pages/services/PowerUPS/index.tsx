import { useEffect } from 'react';
import usePageSEO from '@/hooks/usePageSEO';
import CoolingNav from '@/pages/services/CoolingNav';
import Footer from '@/sections/Footer';
import '@/styles/carbon-typography.css';
import '@/styles/design-tokens.css';
import StickyAnchorNav from '@/components/StickyAnchorNav';
import { PAGE_SECTIONS } from './data';
import HeroSection from './sections/HeroSection';
import GridContextSection from './sections/GridContextSection';
import UPSSystemsSection from './sections/UPSSystemsSection';
import CalculatorSection from './sections/CalculatorSection';
import UseCaseSection from './sections/UseCaseSection';
import TechnologySection from './sections/TechnologySection';
import PowerDistributionSection from './sections/PowerDistributionSection';
import MonitoringSection from './sections/MonitoringSection';
import SLATierSection from './sections/SLATierSection';
import TrustBarSection from './sections/TrustBarSection';
import EcosystemSection from './sections/EcosystemSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ResultsSection from './sections/ResultsSection';
import SEOContentSection from './sections/SEOContentSection';
import FAQSection from './sections/FAQSection';
import CTASection from './sections/CTASection';

const PowerUPS = () => {
  usePageSEO({
    title: 'Power & UPS Solutions Pakistan | Perception IT',
    description: 'Enterprise UPS systems, power distribution, and battery monitoring for Pakistani data centres. Single phase to 800kVA three-phase with 99.95% SLA.',
    canonicalPath: '/infrastructure/data-centre-services/power-ups',
    ogType: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Power & UPS Solutions',
      provider: {
        '@type': 'Organization',
        name: 'Perception IT',
        url: 'https://perception-it.com',
        logo: 'https://perception-it.com/logos/Perception IT_logo_in-white.png',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Pakistan',
      },
      serviceType: 'Data Centre Power & UPS Infrastructure',
      description: 'End-to-end power solutions including UPS systems, power distribution, battery monitoring, and SLA-backed managed services for data centres in Pakistan.',
      url: 'https://perception-it.com/#/infrastructure/data-centre-services/power-ups',
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <CoolingNav />
      <main id="main-content">
        <HeroSection />
        <GridContextSection />
        <TrustBarSection />
        <div className="h-3 bg-white md:h-4" aria-hidden="true" />
        <StickyAnchorNav items={PAGE_SECTIONS.filter((s) => s.inNav)} defaultActive="systems" />
        <UPSSystemsSection />
        <CalculatorSection />
        <UseCaseSection />
        <TechnologySection />
        <PowerDistributionSection />
        <MonitoringSection />
        <SLATierSection />
        <EcosystemSection />
        <TestimonialsSection />
        <ResultsSection />
        <SEOContentSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default PowerUPS;
