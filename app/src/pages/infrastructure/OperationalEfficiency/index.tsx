import { useEffect } from 'react';
import usePageSEO from '@/hooks/usePageSEO';
import CoolingNav from '@/pages/services/CoolingNav';
import Footer from '@/sections/Footer';
import '@/styles/carbon-typography.css';
import '@/styles/design-tokens.css';
import HeroSection from './sections/HeroSection';
import StickyAnchorNav from './sections/StickyAnchorNav';
import StatsSection from './sections/StatsSection';
import ServiceCategoriesSection from './sections/ServiceCategoriesSection';
import ROICalculatorSection from './sections/ROICalculatorSection';
import DeploymentOptionsSection from './sections/DeploymentOptionsSection';
import CaseStudiesSection from './sections/CaseStudiesSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FAQSection from './sections/FAQSection';
import CTASection from './sections/CTASection';

const OperationalEfficiency = () => {
  usePageSEO({
    title: 'Data Centre Cost Optimisation | Perception IT Pakistan',
    description: 'Data centre cost avoidance and reduction across cooling, power, UPS, rack, and environmental monitoring. Interactive ROI calculators for energy, downtime, and CapEx deferral.',
    canonicalPath: '/infrastructure/operational-efficiency',
    ogType: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Data Centre Cost Optimisation Services',
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
      serviceType: 'Data Centre Cost Optimisation & ROI',
      description: 'End-to-end data centre cost avoidance and reduction services including cooling optimisation, power right-sizing, and environmental monitoring.',
      url: 'https://perception-it.com/#/infrastructure/operational-efficiency',
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
        <div className="h-3 bg-white md:h-4" aria-hidden="true" />
        <StickyAnchorNav />
        <StatsSection />
        <ServiceCategoriesSection />
        <ROICalculatorSection />
        <DeploymentOptionsSection />
        <TestimonialsSection />
        <CaseStudiesSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default OperationalEfficiency;
