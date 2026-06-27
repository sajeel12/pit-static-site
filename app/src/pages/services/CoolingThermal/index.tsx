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
import AIDesignSection from '@/sections/AIDesignSection';
import { ArrowUp, Thermometer, Wind, Droplets, Gauge, Activity, Sun, Snowflake, Building2, Expand, Award } from 'lucide-react';

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



    canonicalPath: '/infrastructure/data-centre-services/cooling',



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



      url: 'https://perception-it.com/#/infrastructure/data-centre-services/cooling',



      breadcrumb: {



        '@type': 'BreadcrumbList',



        itemListElement: [



          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://perception-it.com/#/' },



          { '@type': 'ListItem', position: 2, name: 'Infrastructure', item: 'https://perception-it.com/#/services/infrastructure' },



          { '@type': 'ListItem', position: 3, name: 'Data Centre Infrastructure Services', item: 'https://perception-it.com/#/infrastructure/data-centre-services' },



          { '@type': 'ListItem', position: 4, name: 'Cooling & Airflow', item: 'https://perception-it.com/#/infrastructure/data-centre-services/cooling' },



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
              <li className="text-gray-900 font-medium" aria-current="page">Cooling</li>
            </ol>
          </nav>
        </div>
      </div>

      <main id="main-content">



        <HeroSection />



        <div className="h-3 bg-white md:h-4" aria-hidden="true" />



        <StickyAnchorNav items={PAGE_SECTIONS.filter((s) => s.inNav)} defaultActive="assessment" />



        <AssessmentSection />



        <AIDesignSection
          id="ai-design"
          headline="Precision Cooling Design at Machine Speed, Validated by Human Expertise"
          description="AI compresses thermal modelling from days to hours. Our engineers then validate every design against the site realities no algorithm can see."
          media={{
            type: 'video',
            src: '/Sections/Cooling page/Images-cooling/cooling - AI image 800 x 600.mp4',
            alt: 'AI-generated cooling visualisation',
          }}
          aiAdvantages={[
            { icon: Thermometer, title: 'Heat Load Simulation', desc: 'AI models rack-level BTU output, cabinet densities and hot-spot formation across the full equipment list.' },
            { icon: Wind, title: 'CFD Airflow Modelling', desc: 'Computational fluid dynamics predicts cold/hot aisle effectiveness, bypass airflow and recirculation zones before installation.' },
            { icon: Droplets, title: 'Humidity & Condensation Risk', desc: 'Monsoon-season psychrometric analysis ensures dew-point margins and corrosion risk are quantified for Pakistan\'s climate.' },
            { icon: Gauge, title: 'Cooling Capacity Sizing', desc: 'Total cooling load, redundant capacity and part-load efficiency are calculated for every deployment scenario.' },
            { icon: Activity, title: 'PUE & Efficiency Forecasting', desc: 'Projected annual energy consumption and PUE are generated across equipment options and operating profiles.' },
            { icon: Snowflake, title: 'Redundancy Topology Validation', desc: 'N, N+1 and 2N configurations are validated against ASHRAE thermal guidelines and site uptime targets.' },
          ]}
          humanMandates={[
            { icon: Building2, title: 'Site-Specific Reality Checks', desc: 'Engineers validate AI outputs against ceiling height, column locations, existing CRAC layout and ambient conditions.' },
            { icon: Sun, title: 'Pakistan Climate Engineering', desc: 'Designs account for load-shedding cycles, monsoon humidity, dust ingress and 45°C+ ambient ratings.' },
            { icon: Expand, title: 'Scalability & Future Load', desc: 'Cooling pathways are sized for 3–5 year growth so capacity can be added without ripping out infrastructure.' },
            { icon: Award, title: 'Final Sign-Off & Liability', desc: 'Every thermal design is signed off by a senior engineer with 15+ years of critical cooling experience.' },
          ]}
          resultText="What traditionally takes 2–3 weeks of thermal modelling and back-and-forth design is compressed into 48–72 hours. You get machine-speed analysis without sacrificing the engineering judgement required for mission-critical cooling."
        />

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
