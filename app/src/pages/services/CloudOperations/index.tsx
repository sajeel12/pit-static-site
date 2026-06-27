import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import usePageSEO from '@/hooks/usePageSEO';
import CoolingNav from '@/pages/services/CoolingNav';
import Footer from '@/sections/Footer';
import StickyAnchorNav from '@/components/StickyAnchorNav';
import '@/styles/carbon-typography.css';
import '@/styles/design-tokens.css';

import HeroSection from './sections/HeroSection';
import TrustTiles from './sections/TrustTiles';
import CoreCapabilitiesSection from './sections/CoreCapabilitiesSection';
import NextGenSection from './sections/NextGenSection';
import TestimonialsSection from './sections/TestimonialsSection';
import CaseStudySection from './sections/CaseStudySection';
import PartnerSection from './sections/PartnerSection';
import CTASection from './sections/CTASection';

import { PAGE_SECTIONS } from './data';

export default function CloudOperations() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  usePageSEO({
    title: 'DevOps & Cloud | Perception IT',
    description:
      'End-to-end DevOps, Cloud, and AI-driven operations for Pakistan, UK, and GCC enterprises. Kubernetes, CI/CD, FinOps, AIOps, MLOps, LLMOps, and Platform Engineering.',
    canonicalPath: '/services/devops-cloud',
    ogType: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'DevOps & Cloud',
      provider: {
        '@type': 'Organization',
        name: 'Perception IT',
        url: 'https://perception-it.com',
      },
      serviceType:
        'DevOps, Cloud, CI/CD, FinOps, AIOps, MLOps, LLMOps, Platform Engineering',
      description:
        'End-to-end DevOps and cloud solutions combining container orchestration, AI-enhanced CI/CD, FinOps, DevSecOps, AIOps, MLOps, LLMOps, and Platform Engineering.',
      url: 'https://perception-it.com/#/services/devops-cloud',
    },
  });

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

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
              <li><a href="/#/services/cloud" className="hover:text-[#0f62fe] transition-colors">Cloud</a></li>
              <li className="text-gray-300">/</li>
              <li className="text-gray-900 font-medium" aria-current="page">DevOps & Cloud</li>
            </ol>
          </nav>
        </div>
      </div>

      <main id="main-content">
        <HeroSection />

        <div className="h-2 bg-white" aria-hidden="true" />

        <StickyAnchorNav items={PAGE_SECTIONS.filter((s) => s.inNav)} defaultActive="capabilities" />

        <TrustTiles />
        <CoreCapabilitiesSection />
        <NextGenSection />
        <TestimonialsSection />
        <CaseStudySection />
        <PartnerSection />
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
}
