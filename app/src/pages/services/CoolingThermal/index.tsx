import { useEffect, useState } from 'react';
import usePageSEO from '@/hooks/usePageSEO';
import CoolingNav from '@/pages/services/CoolingNav';
import Footer from '@/sections/Footer';
import '@/styles/carbon-typography.css';
import '@/styles/design-tokens.css';
import StickyAnchorNav from '@/components/StickyAnchorNav';
import { PAGE_SECTIONS } from './data';
import HeroSection from './sections/HeroSection';
import TrustTiles from './sections/TrustTiles';
import AssessmentSection from './sections/AssessmentSection';
import RemoteAdvisorySection from './sections/RemoteAdvisorySection';
import ProcurementSection from './sections/ProcurementSection';
import DeploymentSection from './sections/DeploymentSection';
import ManagedSection from './sections/ManagedSection';
import ResultsSection from './sections/ResultsSection';
import EcosystemSection from './sections/EcosystemSection';
import FAQSection from './sections/FAQSection';
import DisclaimerSection from './sections/DisclaimerSection';
import CTASection from './sections/CTASection';
import { ArrowUp } from 'lucide-react';

const CoolingThermal = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });



  usePageSEO({



    title: 'Data Centre Cooling & Airflow Services Pakistan | Perception IT',



    description: 'End-to-end data centre cooling for Pakistan\'s climate: thermal assessment, precision cooling hardware, installation, and 24/7 managed thermal services. One partner, one SLA.',



    canonicalPath: '/infrastructure/data-centre-services/cooling-thermal',



    ogType: 'website',



    jsonLd: {



      '@context': 'https://schema.org',



      '@type': 'Service',



      name: 'Data Centre Cooling & Airflow Services',



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



      serviceType: 'Data Centre Cooling & Thermal Management',



      description: 'End-to-end data centre cooling services including thermal assessment, precision cooling hardware supply, installation, and 24/7 managed thermal monitoring.',



      url: 'https://perception-it.com/#/infrastructure/data-centre-services/cooling-thermal',



      breadcrumb: {



        '@type': 'BreadcrumbList',



        itemListElement: [



          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://perception-it.com/#/' },



          { '@type': 'ListItem', position: 2, name: 'Infrastructure', item: 'https://perception-it.com/#/services/infrastructure' },



          { '@type': 'ListItem', position: 3, name: 'Data Centre Infrastructure Services', item: 'https://perception-it.com/#/services/datacenter2' },



          { '@type': 'ListItem', position: 4, name: 'Cooling & Airflow', item: 'https://perception-it.com/#/infrastructure/data-centre-services/cooling-thermal' },



        ],



      },



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



        <StickyAnchorNav items={PAGE_SECTIONS.filter((s) => s.inNav)} defaultActive="assessment" />



        <AssessmentSection />



        <ProcurementSection />



        <DeploymentSection />



        <ManagedSection />



        <RemoteAdvisorySection />



        <EcosystemSection />



        <ResultsSection />



        <TrustTiles />



        <FAQSection />



        <DisclaimerSection />



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

export default CoolingThermal;
