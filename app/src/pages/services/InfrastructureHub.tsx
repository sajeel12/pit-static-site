import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { 
  Network_4,
  Security,
  View,
  Cloud,
  DataBase
} from '@carbon/icons-react';
import { 
  CloudStorage
} from '@carbon/pictograms-react';

import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';
import ClientLogos from '../../sections/ClientLogos';
import ErrorBoundary from '../../components/ErrorBoundary';
import InfrastructureHeroGraphics from '../../components/InfrastructureHeroGraphics';
import '../../styles/carbon-typography.css';

/**
 * Infrastructure Hub Landing Page
 * 
 * Hero Section: Carbon Pictogram graphics with Blue/Purple theme
 * - White background with InfrastructurePictogramGraphics
 * - IBM Plex Sans typography
 * - Blue accent colors (matching main Cover page)
 * - Left side navigation menu
 */

// Section Registry - Single source of truth
const SECTIONS = [
  { id: 'infrastructure-hero', label: 'Overview' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'process', label: 'Our Process' },
  { id: 'cases', label: 'Case Studies' },
  { id: 'contact', label: 'Contact' }
] as const;

// Hero Section Component - Three-Layer Graphics with Floating Pictograms
const HeroVariant = () => {
  return (
    <section id="infrastructure-hero" className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20 font-['IBM_Plex_Sans']">
      {/* IBM Plex Sans Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: floatSlow 12s ease-in-out infinite;
        }
      `}</style>
      
      {/* Infrastructure Hero Graphics - Three-Layer Visual Logic */}
      <InfrastructureHeroGraphics />

      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20 carbon-font">
        <div className="max-w-3xl">
          {/* Eyebrow - Carbon Label Style */}
          <span className="inline-block carbon-label-02 uppercase tracking-[0.2em] text-[#0f62fe] mb-6">
            Infrastructure Services
          </span>
          
          {/* Heading - Carbon Fluid Display */}
          <h1 className="carbon-fluid-display-03 text-[#161616] mb-6">
            <span className="block">Enterprise Infrastructure.</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0f62fe] to-[#8a3ffc]">Absolute Reliability.</span>
          </h1>
          
          {/* Sub-Heading - Carbon Fluid Heading */}
          <p className="carbon-fluid-heading-03 text-[#525252] mb-5">
            Server Continuity. <span className="text-[#0f62fe]">Data Center Operations.</span> <span className="text-[#8a3ffc]">24/7 Hardware Support.</span>
          </p>
          
          {/* Body Text - Carbon Body */}
          <div className="max-w-2xl mb-8">
            <p className="carbon-body-02 text-[#525252]">
              From procurement to deployment, management to optimisation—we provide end-to-end infrastructure services that keep your enterprise running. No gaps, no surprises, absolute accountability.
            </p>
          </div>
          
          {/* Process Steps */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-[#6f6f6f] mb-8">
            <span>Assess</span>
            <span className="text-[#c6c6c6]">→</span>
            <span>Design</span>
            <span className="text-[#c6c6c6]">→</span>
            <span>Procure</span>
            <span className="text-[#c6c6c6]">→</span>
            <span>Deploy</span>
            <span className="text-[#c6c6c6]">→</span>
            <span>Manage</span>
            <span className="text-[#c6c6c6]">→</span>
            <span className="text-[#0f62fe] font-medium">Optimise</span>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#capabilities"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#0f62fe] text-white font-semibold hover:bg-[#0353e9] transition-all duration-300"
            >
              Explore Infrastructure
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 border border-[#161616] text-[#161616] font-medium hover:bg-[#f4f4f4] transition-all duration-300"
            >
              <img 
                src="/david_headshot.jpg" 
                alt="David Pridmore" 
                className="w-8 h-8 rounded-full object-cover border-2 border-[#0f62fe]"
              />
              Speak with an Infrastructure Expert
            </Link>
          </div>
        </div>
        
        {/* Stats - Positioned absolute bottom right */}
        <div className="absolute bottom-24 right-8 lg:right-12 hidden lg:flex gap-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#161616]">99.99%</div>
            <div className="text-xs text-[#6f6f6f] uppercase tracking-wide mt-1">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#161616]">24/7</div>
            <div className="text-xs text-[#6f6f6f] uppercase tracking-wide mt-1">NOC Coverage</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#161616]">&lt;4hrs</div>
            <div className="text-xs text-[#6f6f6f] uppercase tracking-wide mt-1">Response Time</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6f6f6f]">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-6 bg-gradient-to-b from-[#6f6f6f] to-transparent" />
      </div>
    </section>
  );
};

// Capabilities Section - 6-Icon Grid with Carbon Icons
const CapabilitiesSection = () => {
  const capabilities = [
    {
      icon: <DataBase className="w-6 h-6" />,
      title: 'Hardware',
      description: 'Proactive monitoring and maintenance of physical and virtual server infrastructure. We prevent failures before they impact your operations.',
      tags: ['Server Continuity', 'Virtualization', 'Backup Systems']
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Hybrid',
      description: 'Seamless integration of on-premise and cloud infrastructure. Bridge the gap between legacy systems and modern cloud services.',
      tags: ['Cloud Migration', 'Hybrid Architecture', 'Multi-Cloud']
    },
    {
      icon: <CloudStorage className="w-8 h-8" />,
      title: 'Storage',
      description: 'Enterprise-grade storage solutions with redundancy, backup, and disaster recovery. Your data is always protected and accessible.',
      tags: ['SAN/NAS', 'Backup', 'Disaster Recovery']
    },
    {
      icon: <Network_4 className="w-6 h-6" />,
      title: 'Connectivity',
      description: 'High-performance networking infrastructure design, implementation, and management. Reliable connectivity for your entire organization.',
      tags: ['LAN/WAN', 'SD-WAN', 'Network Security']
    },
    {
      icon: <Security className="w-6 h-6" />,
      title: 'Firewall',
      description: 'Comprehensive security infrastructure including firewalls, intrusion detection, and access control. Protect your perimeter and internal networks.',
      tags: ['Perimeter Security', 'IDS/IPS', 'Access Control']
    },
    {
      icon: <View className="w-6 h-6" />,
      title: 'Audit',
      description: 'Complete visibility and audit capabilities across your infrastructure. Track changes, monitor compliance, and generate comprehensive reports.',
      tags: ['Compliance', 'Change Management', 'Reporting']
    }
  ];

  return (
    <section id="capabilities" className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header - Carbon Typography */}
        <div className="text-center mb-16 carbon-font">
          <span className="carbon-label-02 uppercase tracking-[0.16px] text-[#0f62fe] mb-4 block">
            What We Deliver
          </span>
          <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
            Infrastructure Capabilities
          </h2>
          <p className="carbon-body-02 text-[#525252] max-w-2xl mx-auto">
            End-to-end services that cover every aspect of your infrastructure lifecycle.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="bg-white rounded-lg border border-gray-100 p-8 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-[#0f62fe]">
                  {cap.icon}
                </div>
                <div>
                  <h3 className="carbon-heading-02 text-[#161616] mb-2">{cap.title}</h3>
                  <p className="carbon-body-02 text-[#525252]">{cap.description}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {cap.tags.map(tag => (
                  <span key={tag} className="carbon-label-02 text-[#525252] bg-gray-100 px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Solutions Section
const SolutionsSection = () => {
  const solutions = [
    {
      title: 'Huawei Enterprise Infrastructure',
      description: 'As a certified Huawei Enterprise Partner, we design, deploy, and manage Huawei server, storage, and networking solutions.',
      features: ['Certified Engineers', 'Direct Vendor Support', 'Spare Parts Inventory']
    },
    {
      title: 'Multi-Vendor Support',
      description: 'One partner for all your hardware—Dell, HP, IBM, Cisco, and more. Simplified support, single point of accountability.',
      features: ['Unified SLAs', 'Cross-Platform Expertise', 'Consolidated Reporting']
    },
    {
      title: 'Cloud-Ready Infrastructure',
      description: 'Infrastructure designed for hybrid and multi-cloud deployments. Seamless integration with AWS, Azure, and private cloud.',
      features: ['Hybrid Architecture', 'Cloud Connect', 'Workload Portability']
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 carbon-font">
          <span className="carbon-label-02 uppercase tracking-[0.16px] text-[#0f62fe] mb-4 block">
            Solutions
          </span>
          <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
            Infrastructure Solutions
          </h2>
          <p className="carbon-body-02 text-[#525252] max-w-2xl mx-auto">
            Tailored solutions for enterprise-grade infrastructure challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 carbon-font">
          {solutions.map((sol, idx) => (
            <div key={idx} className="border-t-4 border-[#0f62fe] pt-8">
              <h3 className="carbon-heading-03 text-[#161616] mb-4">{sol.title}</h3>
              <p className="carbon-body-02 text-[#525252] mb-6">{sol.description}</p>
              <ul className="space-y-2">
                {sol.features.map(feat => (
                  <li key={feat} className="flex items-center gap-2 carbon-label-02 text-[#525252]">
                    <span className="w-1.5 h-1.5 bg-[#0f62fe]" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Process Section
const ProcessSection = () => {
  const steps = [
    { num: '01', title: 'Assessment', desc: 'Audit current infrastructure, identify risks, document requirements.' },
    { num: '02', title: 'Design', desc: 'Architecture planning, vendor selection, capacity forecasting.' },
    { num: '03', title: 'Procurement', desc: 'Leverage our Huawei and vendor partnerships for best pricing.' },
    { num: '04', title: 'Deployment', desc: 'Professional installation, configuration, and integration.' },
    { num: '05', title: 'Management', desc: '24/7 monitoring, proactive maintenance, break-fix support.' },
    { num: '06', title: 'Optimisation', desc: 'Continuous improvement, capacity planning, lifecycle management.' }
  ];

  return (
    <section id="process" className="py-20 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 carbon-font">
          <span className="carbon-label-02 uppercase tracking-[0.16px] text-[#0f62fe] mb-4 block">
            How We Work
          </span>
          <h2 className="carbon-fluid-heading-05 text-white mb-4">
            Our Process
          </h2>
          <p className="carbon-body-02 text-gray-400 max-w-2xl mx-auto">
            A proven methodology that ensures consistent, reliable outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 carbon-font">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-6 hover:border-[#0f62fe]/50 transition-colors">
              <span className="carbon-fluid-display-03 text-[#0f62fe]">{step.num}</span>
              <h3 className="carbon-heading-03 text-white mt-4 mb-2">{step.title}</h3>
              <p className="carbon-body-02 text-gray-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Case Study Teaser
const CaseStudySection = () => {
  return (
    <section id="cases" className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-white rounded-lg border border-gray-100 p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="carbon-font">
              <span className="carbon-label-02 uppercase tracking-[0.16px] text-[#0f62fe] mb-4 block">
                Featured Case Study
              </span>
              <h2 className="carbon-fluid-heading-04 text-[#161616] mb-4">
                99.99% Uptime for Pakistan's Largest Telecom
              </h2>
              <p className="carbon-body-02 text-[#525252] mb-6">
                Deployed and manage a multi-site infrastructure spanning 3 data centers, 
                supporting 60+ million subscribers with zero unplanned downtime in 3 years.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div>
                  <span className="carbon-fluid-heading-04 text-[#0f62fe]">99.99%</span>
                  <p className="carbon-label-02 text-[#6f6f6f]">Uptime Achieved</p>
                </div>
                <div>
                  <span className="carbon-fluid-heading-04 text-[#0f62fe]">3</span>
                  <p className="carbon-label-02 text-[#6f6f6f]">Data Centers</p>
                </div>
                <div>
                  <span className="carbon-fluid-heading-04 text-[#0f62fe]">60M+</span>
                  <p className="carbon-label-02 text-[#6f6f6f]">Subscribers Supported</p>
                </div>
              </div>
              <Link 
                to="/projects"
                className="inline-flex items-center gap-2 carbon-heading-02 text-[#0f62fe] hover:gap-3 transition-all"
              >
                View All Case Studies <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <span className="text-gray-400">Case Study Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section id="contact" className="py-20 bg-[#24a148]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center carbon-font">
        <h2 className="carbon-fluid-heading-04 text-white mb-6">
          Ready to Strengthen Your Infrastructure?
        </h2>
        <p className="carbon-body-02 text-white/80 mb-8 max-w-2xl mx-auto">
          Schedule a free infrastructure assessment. We'll identify risks, gaps, and 
          optimisation opportunities—no obligation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0f62fe] font-semibold hover:bg-gray-100 transition-all"
          >
            Schedule Infrastructure Assessment
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

// Main Infrastructure Hub Page
const InfrastructureHub = () => {
  const [activeSection, setActiveSection] = useState('overview');
  
  // Scroll spy for navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      for (const item of SECTIONS) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        {/* Hero - Full width, no side menu */}
        <ErrorBoundary fallback={<div className="h-96 bg-gray-50" />}>
          <HeroVariant />
        </ErrorBoundary>

        {/* Client Logos */}
        <ErrorBoundary fallback={<div className="h-32 bg-gray-50" />}>
          <ClientLogos />
        </ErrorBoundary>

        {/* Main Content with Side Navigation */}
        <div className="border-t border-[var(--cds-border-subtle)]">
          <div className="max-w-[1584px] mx-auto">
            <div className="flex">
              
              {/* Desktop Side Menu */}
              <aside className="hidden xl:block w-64 flex-shrink-0">
                <nav className="sticky top-20 pt-8 pb-8 border-r border-[var(--cds-border-subtle)] h-[calc(100vh-5rem)]">
                  <ul className="space-y-0.5">
                    {SECTIONS.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className={`w-full text-left px-4 py-2 text-sm transition-colors border-l-[3px] ${
                            activeSection === item.id
                              ? 'text-[var(--cds-text-primary)] border-[#24a148] bg-[#24a148]/5 font-semibold'
                              : 'text-[var(--cds-text-secondary)] border-transparent hover:text-[var(--cds-text-primary)] hover:bg-[var(--cds-layer-hover)]'
                          }`}
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>

              {/* Content Area */}
              <div className="flex-1 min-w-0">
                <ErrorBoundary fallback={<div className="h-96 bg-gray-50" />}>
                  <CapabilitiesSection />
                </ErrorBoundary>
                
                <ErrorBoundary fallback={<div className="h-96 bg-gray-50" />}>
                  <SolutionsSection />
                </ErrorBoundary>
                
                <ErrorBoundary fallback={<div className="h-96 bg-gray-50" />}>
                  <ProcessSection />
                </ErrorBoundary>
                
                <ErrorBoundary fallback={<div className="h-96 bg-gray-50" />}>
                  <CaseStudySection />
                </ErrorBoundary>
                
                <ErrorBoundary fallback={<div className="h-96 bg-gray-50" />}>
                  <CTASection />
                </ErrorBoundary>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default InfrastructureHub;
