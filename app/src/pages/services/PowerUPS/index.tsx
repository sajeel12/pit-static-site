import { useEffect, useState } from 'react';
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
import FeaturedProductsSection from './sections/FeaturedProductsSection';
import SEOContentSection from './sections/SEOContentSection';
import FAQSection from './sections/FAQSection';
import CTASection from './sections/CTASection';
import { ArrowUp } from 'lucide-react';

const PowerUPS = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
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
              <li className="text-gray-900 font-medium" aria-current="page">Power & UPS</li>
            </ol>
          </nav>
        </div>
      </div>

      <main id="main-content">
        <HeroSection />
        <GridContextSection />
        <TrustBarSection />
        <div className="h-3 bg-white md:h-4" aria-hidden="true" />
        <StickyAnchorNav items={PAGE_SECTIONS.filter((s) => s.inNav)} defaultActive="systems" />
        <UPSSystemsSection />
        <FeaturedProductsSection />
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
      {/* Back to top — bottom-left to avoid chat widgets on right */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 left-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-[#0f62fe] text-white shadow-lg transition-all duration-300 hover:bg-[#0353e9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0f62fe] ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <Footer />
    </div>
  );
};

export default PowerUPS;
