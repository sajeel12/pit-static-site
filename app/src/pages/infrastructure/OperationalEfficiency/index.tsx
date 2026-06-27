import { useEffect } from 'react';
import usePageSEO from '@/hooks/usePageSEO';
import CoolingNav from '@/pages/services/CoolingNav';
import Footer from '@/sections/Footer';
import '@/styles/carbon-typography.css';
import '@/styles/design-tokens.css';
import HeroSection from './sections/HeroSection';
import StickyAnchorNav from '@/components/StickyAnchorNav';
import ServiceCategoriesSection from './sections/ServiceCategoriesSection';
import ROICalculatorSection from './sections/ROICalculatorSection';
import DeploymentOptionsSection from './sections/DeploymentOptionsSection';
import CaseStudiesSection from './sections/CaseStudiesSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FAQSection from './sections/FAQSection';
import CTASection from './sections/CTASection';

const NAV_ITEMS = [
  { id: 'services', label: 'Services' },
  { id: 'calculator', label: 'Calculator' },
  { id: 'deployment', label: 'Deployment' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'cases', label: 'Case Studies' },
  { id: 'faq', label: 'FAQ' },
  { id: 'cta', label: 'Get Started' },
];

const OperationalEfficiency = () => {
  usePageSEO({
    title: 'Data Centre Cost Optimisation | Perception IT Pakistan',
    description: 'Data centre cost avoidance and reduction across cooling, power, UPS, rack, and environmental monitoring. Interactive ROI calculators for energy, downtime, and CapEx deferral.',
    canonicalPath: '/infrastructure/data-centre-services/cost-optimisation',
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
      url: 'https://perception-it.com/#/infrastructure/data-centre-services/cost-optimisation',
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <CoolingNav />

      {/* Sticky Breadcrumb */}
      <div className="sticky top-12 z-40 bg-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-12 flex items-center">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-500">
              <li><a href="/#/" className="hover:text-[#0f62fe] transition-colors">Home</a></li>
              <li className="text-gray-300">/</li>
              <li><a href="/#/infrastructure" className="hover:text-[#0f62fe] transition-colors">Infrastructure</a></li>
              <li className="text-gray-300">/</li>
              <li><a href="/#/infrastructure/data-centre-services" className="hover:text-[#0f62fe] transition-colors">Data Centre</a></li>
              <li className="text-gray-300">/</li>
              <li className="text-gray-900 font-medium" aria-current="page">Cost Optimisation</li>
            </ol>
          </nav>
        </div>
      </div>

      <main id="main-content">
        <HeroSection />
        <div className="h-3 bg-white md:h-4" aria-hidden="true" />
        <StickyAnchorNav items={NAV_ITEMS} defaultActive="services" />
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
