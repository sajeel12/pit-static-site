import { useEffect, useRef, useState } from 'react';
import '../../styles/carbon-typography.css';
// Batch 1: Carbon Icons (exact name matches)
import {
  ArrowRight,
  Settings,
  Activity,
  Code,
  Layers,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight
} from '@carbon/icons-react';

// Batch 2: Carbon Icons (simple name changes)
import {
  Chat,
  Building,
  Security,
  Lightning,
  Locked,
  Quotes,
  Headphones
} from '@carbon/icons-react';

// Batch 3: Carbon Icons (complex mappings)
import {
  Time,
  DataBase,
  Network_1,
  ServerDns
} from '@carbon/icons-react';

// Pictograms
import { 
  IbmAutomationPlatform,
  Cloud
} from '@carbon/pictograms-react';

// Batch 4: Final Lucide→Carbon migrations
import {
  ArrowUp,
  Alarm,
  Terminal,
  ChartLine,
  Chip,
  EdgeNode,
  Money,
  ArrowDown,
  Plug,
  LogoLinkedin as LinkedIn
} from '@carbon/icons-react';

// Batch 5: Remaining Lucide icons (no Carbon equivalent)
// Server kept from Batch 3
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';
import OfferingCard from '../../components/OfferingCard';
import HeroWebGL from '../../components/HeroWebGL';

const ServiceNow = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  
  // Navigation State
  const [activeSection, setActiveSection] = useState('overview');
  
  // Case Studies State
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0);
  
  // TCO Calculator State
  const [tcoUserMultiple, setTcoUserMultiple] = useState(500);
  const [tcoToolset, setTcoToolset] = useState<'excel' | 'jira' | 'legacy'>('excel');
  const [tcoModules, setTcoModules] = useState<string[]>(['itsm']);

  // Section Registry - Single source of truth for nav and sections
  const SECTIONS = [
    { id: 'overview', label: 'Overview' },
    { id: 'offerings', label: 'ServiceNow Offerings' },
    { id: 'expertise', label: 'Technological Expertise' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'testimonial', label: 'Client Testimonial' },
    { id: 'tco-calculator', label: 'TCO Calculator' },
    { id: 'framework', label: 'Success Framework' },
    { id: 'compliance', label: 'Compliance' },
    { id: 'ceo-oversight', label: 'CEO Oversight' },
    { id: 'complementary', label: 'Complementary Solutions' },
    { id: 'performance-commitment', label: 'Performance Commitment' },
    { id: 'next-steps', label: 'Migration Audit' },
    { id: 'contact', label: 'Contact' }
  ] as const;

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const brandColor = 'var(--cds-button-primary)';

  // ServiceNow Offerings Data
  const offerings = [
    {
      id: 'consultation',
      icon: Chat,
      title: 'Consultation',
      duration: '2-4 weeks',
      descriptionBold: "Secure your build by identifying integration risks on Day 1.",
      descriptionNormal: "Our risk-mapped approach ensures your business case is solid before a single line of code is written.",
      shortTags: ['Current State & Gap Analysis', 'SBP-Aligned Roadmap', 'TCO & ROI Modeling'],
      detailHeading: "We cover:",
      detailBullets: [
        { title: 'Current State & Gap Analysis:', desc: 'Including legacy hardware assessment.' },
        { title: 'SBP-Aligned Roadmap:', desc: 'Compliance-ready architecture design.' },
        { title: 'TCO & ROI Modeling:', desc: 'Fixed-scope financial projections.' },
        { title: 'Outcome:', desc: 'A de-risked blueprint ready for immediate execution.' }
      ],
      cta: 'Get Your Risk Assessment',
      color: 'bg-blue-500',
      link: '#contact'
    },
    {
      id: 'implementation',
      icon: Settings,
      title: 'Rapid Implementation',
      duration: '8 Weeks',
      descriptionBold: 'Go live faster, with zero integration blind spots.',
      descriptionNormal: 'Our proven methodology deploys core ITSM modules in 8 weeks. Unlike pure software shops, we integrate your physical infrastructure (Huawei/Servers) from Day 1.',
      shortTags: ['Native Configuration', 'Full-Stack Integration', 'Data Migration'],
      detailHeadingBold: 'We deliver:',
      detailHeadingNormal: null,
      detailBullets: [
        { title: 'Native Configuration:', desc: 'Upgrade-safe workflows using Flow Designer.' },
        { title: 'Full-Stack Integration:', desc: 'Bridging hardware telemetry to ServiceNow ITOM.' },
        { title: 'Data Migration:', desc: '99% accurate CMDB population via risk-mapped audits.' },
        { title: 'Go Live:', desc: 'Go-live in 8 weeks' }
      ],
      cta: 'Start Your 8-Week Deployment',
      color: 'bg-green-500',
      link: '#contact'
    },
    {
      id: 'support',
      icon: Headphones,
      title: 'Managed Support & Optimization',
      duration: 'Ongoing',
      descriptionBold: 'One partner for your software and underlying infrastructure.',
      descriptionNormal: 'Stop managing multiple vendors. Our Lahore-based NOC provides 24/7 oversight of both your ServiceNow instance and the servers it runs on.',
      shortTags: ['Unified 24/7 NOC', 'Proactive CMDB Health', 'Quarterly Business Reviews'],
      detailHeadingBold: 'SLA Backed:',
      detailHeadingNormal: '99.95% uptime guarantee with contractual penalties.',
      detailBullets: [
        { title: 'Unified 24/7 NOC:', desc: 'Single point of contact for app AND infrastructure alerts.' },
        { title: 'Proactive CMDB Health:', desc: 'Continuous data cleansing and asset reconciliation.' },
        { title: 'Quarterly Business Reviews:', desc: 'Strategic optimization aligned with your growth.' }
      ],
      cta: 'View Support SLAs',
      color: 'bg-purple-500',
      link: '#contact'
    }
  ];

  // Technology Expertise Data
  // Case Studies Data
  const caseStudies = [
    {
      id: 'migration',
      link: '/projects/case-study/telco-service-desk-it-process-migration-to-servicenow',
      icon: Building,
      iconColor: brandColor,
      tags: [
        { text: 'Telecom', class: 'bg-[var(--cds-layer-accent)] text-[var(--cds-link-primary-hover)]' },
        { text: 'Migration', class: 'bg-[var(--cds-layer-accent)] text-[var(--cds-link-primary-hover)]' },
        { text: 'ServiceNow', class: 'bg-[var(--cds-layer-02)] text-[var(--cds-text-secondary)]' }
      ],
      title: "Enabling 99.95% uptime and 24/7 follow-the-sun support for Pakistan's largest telecom through ServiceNow Cloud migration",
      description: "Pakistan's largest telecommunications provider modernised their service desk and migrated to ServiceNow Cloud, enabling 24/7 follow-the-sun support operations with 99.95% platform availability.",
      stats: [
        { icon: ArrowUp, iconBg: 'bg-[var(--cds-layer-accent)]', iconColor: 'text-[var(--cds-link-primary)]', value: '99.95%', label: 'Uptime SLA' },
        { icon: Alarm, iconBg: 'bg-[var(--cds-layer-accent)]', iconColor: 'text-[var(--cds-link-primary)]', value: '24/7', label: 'Coverage' },
        { icon: Activity, iconBg: `${brandColor}15`, iconColor: brandColor, value: '52%', label: 'Faster Resolution' }
      ]
    },
    {
      id: 'automation',
      link: '/projects/case-study/servicenow-incident-automation',
      icon: Lightning,
      iconColor: 'var(--cds-support-warning)',
      bgGradient: 'linear-gradient(135deg, var(--cds-layer-01), var(--cds-layer-02))',
      tags: [
        { text: 'Automation', class: 'bg-[var(--cds-support-warning-subtle)] text-[var(--cds-support-warning)]' },
        { text: 'Integration', class: 'bg-[var(--cds-layer-accent)] text-[var(--cds-link-primary-hover)]' },
        { text: 'ServiceNow', class: 'bg-[var(--cds-layer-02)] text-[var(--cds-text-secondary)]' }
      ],
      title: '40% faster incident resolution for major telecom through intelligent ServiceNow automation',
      description: 'Developed an intelligent microservice bridge integrating network alarms with ServiceNow, eliminating manual incident handling and reducing response times through automated correlation and smart routing.',
      stats: [
        { icon: Lightning, iconBg: 'bg-[var(--cds-support-warning-subtle)]', iconColor: 'text-[var(--cds-support-warning)]', value: '40%', label: 'Less Manual Work' },
        { icon: Activity, iconBg: 'bg-[var(--cds-layer-accent)]', iconColor: 'text-[var(--cds-link-primary)]', value: '98%', label: 'SLA Compliance' },
        { icon: Time, iconBg: 'bg-[var(--cds-layer-accent)]', iconColor: 'text-[var(--cds-link-primary)]', value: '45%', label: 'Faster Resolution' }
      ]
    }
  ];

  // TCO Calculation Logic
  const calculateTCO = () => {
    const baseCostPerUser = {
      excel: 450,
      jira: 380,
      legacy: 520
    };
    
    const moduleMultiplier = {
      itsm: 1,
      itom: 1.4,
      itsm_itom: 1.8
    };
    
    const currentAnnualCost = tcoUserMultiple * baseCostPerUser[tcoToolset] * (tcoModules.includes('itom') && tcoModules.includes('itsm') ? moduleMultiplier.itsm_itom : tcoModules.includes('itom') ? moduleMultiplier.itom : moduleMultiplier.itsm);
    const hiddenCosts = currentAnnualCost * 0.35; // Downtime, manual labor
    const current3Year = (currentAnnualCost + hiddenCosts) * 3;
    
    const perceptionCost = tcoUserMultiple * 320 * (tcoModules.includes('itom') && tcoModules.includes('itsm') ? 1.6 : tcoModules.includes('itom') ? 1.3 : 1);
    const perception3Year = perceptionCost * 3;
    
    const savings = current3Year - perception3Year;
    const savingsPercent = Math.round((savings / current3Year) * 100);
    
    return {
      current: Math.round(current3Year / 1000),
      perception: Math.round(perception3Year / 1000),
      savings: Math.round(savings / 1000),
      savingsPercent
    };
  };
  
  const tcoResult = calculateTCO();



  const handleMobileNavChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    scrollToSection(e.target.value);
  };

  return (
    <div className="min-h-screen bg-[var(--cds-background)]">
      {/* Top Navigation */}
      <Navigation />
      
      {/* Hero Section with Integrated Navigation */}
      <section id="overview" className="relative pt-40 pb-20 bg-[#0F172A] overflow-hidden">
        {/* WebGL Background Effects - Floating Orbs */}
        <HeroWebGL />
        
        <div className="relative z-10 cds--css-grid" style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
          <div className="cds--col-span-16 lg:cds--col-span-14 lg:cds--col-start-2">
            
            {/* Breadcrumb - with explicit z-index */}
            <nav className="relative z-10 flex items-center gap-2 text-xs mb-6" aria-label="Breadcrumb">
              <a href="/" className="text-[#00b4d8] hover:underline">Home</a>
              <ArrowRight className="w-3 h-3 text-gray-400 rotate-180" />
              <a href="/services" className="text-[#00b4d8] hover:underline">Services</a>
              <ArrowRight className="w-3 h-3 text-gray-400 rotate-180" />
              <span className="text-gray-400">ServiceNow</span>
            </nav>

            {/* Mobile Dropdown Navigation */}
            <div className="xl:hidden mb-6">
              <label className="carbon-label-01 text-gray-400 block mb-2">
                On this page:
              </label>
              <select 
                onChange={handleMobileNavChange}
                value={activeSection}
                className="w-full h-12 px-4 bg-[var(--cds-field)] border border-[var(--cds-border-subtle)] text-[var(--cds-text-primary)] carbon-body-01"
              >
                {SECTIONS.map(item => (
                  <option key={item.id} value={item.id}>{item.label}</option>
                ))}
              </select>
            </div>

            {/* Hero Content */}
            <div className="max-w-3xl">
              <span className="inline-block carbon-label-01 text-[#00b4d8] uppercase tracking-wider mb-3">
                SERVICENOW
              </span>
              <h1 className="carbon-fluid-heading-05 text-white mb-6">
                Implementation & Migration
              </h1>
              
              <p className="carbon-body-02 text-gray-300 mb-6">
                End-to-end ITSM transformation with <strong className="text-white">Full-Stack Integration.</strong>
              </p>
              
              <div className="max-w-2xl mb-8">
                <p className="carbon-body-01 text-gray-300">
                  From legacy system migration to advanced workflow automation, we deliver ServiceNow solutions that integrate seamlessly with your infrastructure—hardware to cloud.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('offerings')}
                  className="cds--btn cds--btn--primary"
                >
                  Explore Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                <button
                  onClick={() => scrollToSection('case-studies')}
                  className="cds--btn cds--btn--tertiary"
                  style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white', borderWidth: '1px' }}
                >
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar - Carbon Tile Design */}
      <section className="bg-[var(--cds-background)] border-y border-[var(--cds-border-subtle)]">
        <div className="cds--css-grid py-6">
          <div className="cds--col-span-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { 
                  icon: Security,
                  headline: 'Compliance', 
                  subtext: 'SBP Guidelines Aligned'
                },
                { 
                  icon: ChartLine,
                  headline: 'Scale Proof', 
                  subtext: 'Tier-1 Telecom Proven'
                },
                { 
                  icon: ServerDns,
                  headline: 'Hardware Authority', 
                  subtext: 'Huawei Certified Partner'
                },
                { 
                  icon: Code,
                  headline: 'Software Discipline', 
                  subtext: 'ServiceNow Standards Compliant'
                },
                { 
                  icon: Activity,
                  headline: 'Performance', 
                  subtext: '99.95% Uptime Record'
                },
                { 
                  icon: Time,
                  headline: 'Local Ops', 
                  subtext: '24/7 Lahore NOC'
                }
              ].map((item) => (
                <div 
                  key={item.headline} 
                  className="cds--tile bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] p-4 flex flex-col gap-3"
                >
                  <div className="w-10 h-10 bg-[var(--cds-layer-02)] flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#00b4d8]" />
                  </div>
                  <div>
                    <p className="carbon-label-01 text-[var(--cds-text-primary)] font-semibold">{item.headline}</p>
                    <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)]">{item.subtext}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Side Navigation */}
      <div>
        <div className="max-w-[1584px] mx-auto">
          <div className="flex">
            
            {/* Desktop Side Menu - Hidden on mobile */}
            <aside className="hidden xl:block w-64 flex-shrink-0 pl-4">
              <nav className="sticky top-20 pt-8 pb-8 border-r border-[var(--cds-border-subtle)] h-[calc(100vh-5rem)]">
                <ul className="space-y-0.5">
                  {SECTIONS.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left px-4 py-2 text-sm transition-colors border-l-[3px] ${
                          activeSection === item.id
                            ? 'text-[var(--cds-text-primary)] border-[#00b4d8] bg-[#00b4d8]/5 font-semibold'
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

            {/* Main Content */}
            <main className="flex-1 min-w-0">
        {/* ServiceNow Offerings Section */}
        <section id="offerings" ref={servicesRef} className="py-16 bg-white">
        <div className="cds--css-grid">
        <div className="cds--col-span-16 cds--col-span-16--lg">
          <div className="mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--cds-text-helper)] mb-4 block" style={{ color: brandColor }}>
              Our Services
            </span>
            <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-4">
              ServiceNow Offerings
            </h2>
            <p className="carbon-body-02 text-[var(--cds-text-secondary)] max-w-2xl">
              End-to-end ServiceNow services from strategy to ongoing support
            </p>
          </div>

          <div className="cds--css-grid gap-6" style={{ padding: 0 }}>
            {offerings.map((offering) => (
              <OfferingCard
                key={offering.id}
                icon={offering.icon}
                title={offering.title}
                duration={offering.duration}
                descriptionBold={offering.descriptionBold}
                descriptionNormal={offering.descriptionNormal}
                shortTags={offering.shortTags}
                detailHeadingBold={offering.detailHeadingBold}
                detailHeadingNormal={offering.detailHeadingNormal}
                detailBullets={offering.detailBullets}
                cta={offering.cta}
                link={offering.link}
              />
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Technological Expertise Section - Code-to-Dashboard Visualization */}
      <section id="expertise" className="py-16 bg-[var(--cds-background)]">
        <div className="cds--css-grid">
          <div className="cds--col-span-16 cds--col-span-16--lg">
            {/* Section Header */}
            <div className="mb-16 text-center">
              <div className="cds--tag cds--tag--blue mb-4 inline-flex">
                <Settings className="w-4 h-4 mr-2" />
                Technical Architecture
              </div>
              <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-4">
                Engineering the Bridge Between Technical Depth and Business Clarity
              </h2>
              <p className="carbon-body-02 text-[var(--cds-text-secondary)] max-w-3xl mx-auto">
                We don&apos;t just configure modules; we architect data flows that turn raw system events into executive decision-making tools.
              </p>
            </div>

            {/* Split-Screen Visualization */}
            <div className="relative">
              {/* Animated Connection Lines - Background */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20" viewBox="0 0 800 400">
                  <defs>
                    <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00b4d8" stopOpacity="0" />
                      <stop offset="50%" stopColor="#00b4d8" stopOpacity="1" />
                      <stop offset="100%" stopColor="#24a148" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {[...Array(5)].map((_, i) => (
                    <line
                      key={i}
                      x1="200"
                      y1={100 + i * 50}
                      x2="600"
                      y2={100 + i * 50}
                      stroke="url(#dataFlow)"
                      strokeWidth="1"
                      strokeDasharray="8 8"
                      className="animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </svg>
              </div>

              <div className="cds--css-grid gap-8 relative z-10" style={{ padding: 0 }}>
                {/* Left Side: Engineering Layer (Dark Theme - g100) */}
                <div className="cds--col-span-8 cds--col-span-8--lg">
                  <div className="h-full border border-[var(--cds-border-subtle)] overflow-hidden group">
                    {/* Code Editor Header - Dark */}
                    <div className="bg-[#161616] px-4 py-3 border-b border-[#393939] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                          <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                          <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                        </div>
                        <Terminal className="w-4 h-4 text-[#c6c6c6] ml-2" />
                        <span className="carbon-label-01 text-[#c6c6c6]">ServiceNowIntegration.js</span>
                      </div>
                      <span className="carbon-helper-text-01 text-[#6f6f6f]">Scoped App</span>
                    </div>
                    
                    {/* Code Content - Dark Theme */}
                    <div className="p-6 font-mono text-sm bg-[#0a0a0a]">
                      <div className="flex gap-4">
                        <div className="text-[#6f6f6f] select-none text-right">
                          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'].map(n => (
                            <div key={n} className="leading-6">{n}</div>
                          ))}
                        </div>
                        <div className="flex-1">
                          <div className="leading-6"><span className="text-[#be95ff]">class</span> <span className="text-[#82cfff]">ServiceNowIntegration</span> <span className="text-[#f4f4f4]">{'{'}</span></div>
                          <div className="leading-6 pl-4"><span className="text-[#be95ff]">constructor</span><span className="text-[#f4f4f4]">() {'{'}</span></div>
                          <div className="leading-6 pl-8 text-[#6f6f6f]">// Risk-mapped data architecture</div>
                          <div className="leading-6 pl-8"><span className="text-[#be95ff]">this</span><span className="text-[#f4f4f4]">.cmdb = </span><span className="text-[#be95ff]">new</span> <span className="text-[#82cfff]">CMDBValidator</span><span className="text-[#f4f4f4]">();</span></div>
                          <div className="leading-6 pl-4 text-[#f4f4f4]">{'}'}</div>
                          <div className="leading-6 pl-4"><span className="text-[#be95ff]">async</span> <span className="text-[#82cfff]">syncInfrastructure</span><span className="text-[#f4f4f4]">() {'{'}</span></div>
                          <div className="leading-6 pl-8"><span className="text-[#be95ff]">const</span> <span className="text-[#f4f4f4]">telemetry = </span><span className="text-[#be95ff]">await</span> <span className="text-[#be95ff]">this</span><span className="text-[#f4f4f4]">.midServer.poll();</span></div>
                          <div className="leading-6 pl-8"><span className="text-[#be95ff]">return</span> <span className="text-[#be95ff]">this</span><span className="text-[#f4f4f4]">.cmdb.reconcile(telemetry);</span></div>
                          <div className="leading-6 pl-4 text-[#f4f4f4]">{'}'}</div>
                          <div className="leading-6 text-[#f4f4f4]">{'}'}</div>
                        </div>
                      </div>
                    </div>

                    {/* Engineering Overlay with Accent */}
                    <div className="relative">
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00b4d8] to-transparent opacity-50"></div>
                      <div className="px-6 py-5 bg-[var(--cds-layer-01)]">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-[#00b4d8] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                            <Chip className="w-6 h-6 text-[#00b4d8]" />
                          </div>
                          <div className="flex-1">
                            <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">
                              High-Performance Development
                            </h3>
                            <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-4">
                              Clean, upgrade-safe JavaScript following ServiceNow&apos;s Scoped Application standards. We build for the long game—minimizing technical debt while maximizing platform agility.
                            </p>
                            
                            {/* Technical Tags - Carbon Style */}
                            <div className="flex flex-wrap gap-2">
                              {['Glide API', 'Script Includes', 'Asynchronous Integration', 'Flow Designer'].map((tag, i) => (
                                <span 
                                  key={tag}
                                  className="cds--tag"
                                  style={{ 
                                    backgroundColor: i % 2 === 0 ? 'var(--cds-tag-background-blue)' : 'var(--cds-layer-02)',
                                    color: 'var(--cds-text-primary)'
                                  }}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Outcome Layer (Light Theme with Gradients) */}
                <div className="cds--col-span-8 cds--col-span-8--lg">
                  <div className="h-full border border-[var(--cds-border-subtle)] overflow-hidden relative">
                    {/* Success Gradient Accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#24a148] via-[#42be65] to-[#24a148]"></div>
                    
                    {/* Dashboard Header */}
                    <div className="bg-[var(--cds-layer-02)] px-5 py-4 border-b border-[var(--cds-border-subtle)] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#24a148] bg-opacity-10 flex items-center justify-center">
                          <ChartLine className="w-4 h-4 text-[#24a148]" />
                        </div>
                        <span className="carbon-heading-01 text-[var(--cds-text-primary)]">Executive Dashboard</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 bg-[#24a148] bg-opacity-10">
                        <div className="w-2 h-2 rounded-full bg-[#24a148] animate-pulse"></div>
                        <span className="carbon-label-01 text-[#24a148]">99.95% Uptime</span>
                      </div>
                    </div>
                    
                    {/* Dashboard Content */}
                    <div className="p-6 bg-gradient-to-br from-[var(--cds-layer-01)] to-[var(--cds-layer-02)]">
                      {/* Dashboard Metrics - Card Style */}
                      <div className="grid grid-cols-3 gap-3 mb-6">
                        {[
                          { value: '99.95%', label: 'Uptime SLA', color: '#24a148' },
                          { value: '52%', label: 'Faster Resolution', color: '#00b4d8' },
                          { value: '24/7', label: 'Coverage', color: '#f4f4f4' }
                        ].map((metric, i) => (
                          <div 
                            key={i} 
                            className="text-center p-4 border border-[var(--cds-border-subtle)] hover:border-[var(--cds-border-strong)] transition-colors"
                            style={{ backgroundColor: 'var(--cds-layer-01)' }}
                          >
                            <div 
                              className="carbon-fluid-heading-04 mb-1"
                              style={{ color: metric.color === '#f4f4f4' ? 'var(--cds-text-primary)' : metric.color }}
                            >
                              {metric.value}
                            </div>
                            <div className="carbon-helper-text-01 text-[var(--cds-text-secondary)]">{metric.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Dashboard Chart - Solid Bars */}
                      <div className="h-36 border border-[var(--cds-border-subtle)] relative" style={{ backgroundColor: 'var(--cds-layer-01)' }}>
                        {/* Chart Label - Bottom Left */}
                        <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-white px-2 py-1 border border-[var(--cds-border-subtle)] z-10">
                          <div className="w-2 h-2 bg-[#24a148]"></div>
                          <span className="carbon-helper-text-01 text-[var(--cds-text-secondary)]">Incident Resolution Trend</span>
                        </div>
                        
                        {/* Bars */}
                        <div className="absolute inset-0 flex items-end justify-around px-4 pb-10 pt-4">
                          {[40, 65, 45, 80, 55, 90, 75, 85, 70, 95, 88, 92].map((h, i) => (
                            <div 
                              key={i} 
                              className="w-8 relative group flex items-end"
                              style={{ height: '100%' }}
                            >
                              <div 
                                className="w-full bg-[#24a148] transition-all duration-300 group-hover:bg-[#198038]"
                                style={{ height: `${h}%` }}
                              ></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Outcome Overlay */}
                    <div className="relative">
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#24a148] to-transparent opacity-30"></div>
                      <div className="px-6 py-5 bg-[var(--cds-layer-01)]">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-[#24a148] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                            <ChartLine className="w-6 h-6 text-[#24a148]" />
                          </div>
                          <div className="flex-1">
                            <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">
                              Predictive Business Intelligence
                            </h3>
                            <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-4">
                              Raw telemetry converted into real-time operational truth. Your leadership team sees the health of the entire enterprise on a single pane of glass, backed by data they can actually trust.
                            </p>
                            
                            {/* Business Tags - Carbon Green Style */}
                            <div className="flex flex-wrap gap-2">
                              {['Fixed TCO', 'SLA Compliance', 'Risk-Mapped Operations'].map((tag) => (
                                <span 
                                  key={tag}
                                  className="cds--tag"
                                  style={{ 
                                    backgroundColor: '#24a148',
                                    color: '#ffffff'
                                  }}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Bridge - Center Connection */}
            <div className="mt-16 text-center relative">
              {/* Animated Data Flow Arrows */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-32 h-px bg-gradient-to-r from-transparent to-[#00b4d8] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-pulse"></div>
                </div>
                <div className="w-16 h-16 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full border-2 border-[#00b4d8] opacity-20 animate-ping"></div>
                  <div className="w-12 h-12 bg-[#00b4d8] bg-opacity-10 flex items-center justify-center">
                    <EdgeNode className="w-7 h-7 text-[#00b4d8]" />
                  </div>
                </div>
                <div className="w-32 h-px bg-gradient-to-l from-transparent to-[#24a148] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
              
              <h3 className="carbon-fluid-heading-04 text-[var(--cds-text-primary)] mb-4">
                Where Logic Becomes Value
              </h3>
              
              <div className="cds--css-grid gap-8" style={{ padding: 0 }}>
                <div className="cds--col-span-10 cds--col-span-10--lg cds--col-start-4">
                  <div className="bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] p-0 overflow-hidden">
                    <div className="grid md:grid-cols-2">
                      {/* The Logic Side */}
                      <div className="p-6 border-b md:border-b-0 md:border-r border-[var(--cds-border-subtle)] relative">
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#00b4d8]"></div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-[#00b4d8] bg-opacity-10 flex items-center justify-center">
                            <Terminal className="w-5 h-5 text-[#00b4d8]" />
                          </div>
                          <p className="carbon-label-01 text-[#00b4d8] uppercase tracking-wide">The Logic</p>
                        </div>
                        <p className="carbon-body-01 text-[var(--cds-text-secondary)] pl-13">
                          Our developers utilize Flow Designer and IntegrationHub to automate the mundane. Scoped applications built to ServiceNow standards.
                        </p>
                      </div>
                      
                      {/* The Value Side */}
                      <div className="p-6 relative">
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#24a148]"></div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-[#24a148] bg-opacity-10 flex items-center justify-center">
                            <ChartLine className="w-5 h-5 text-[#24a148]" />
                          </div>
                          <p className="carbon-label-01 text-[#24a148] uppercase tracking-wide">The Value</p>
                        </div>
                        <p className="carbon-body-01 text-[var(--cds-text-secondary)]">
                          Your IT team saves <span className="font-semibold text-[var(--cds-text-primary)]">40+ hours</span> a month on manual reporting, shifting focus from &quot;keeping the lights on&quot; to strategic growth.
                        </p>
                      </div>
                    </div>
                    
                    {/* Bottom Stats Bar */}
                    <div className="bg-[var(--cds-layer-02)] px-6 py-4 border-t border-[var(--cds-border-subtle)] flex items-center justify-around">
                      {[
                        { label: 'Technical Debt Reduced', value: '-60%' },
                        { label: 'Platform Agility', value: '+85%' },
                        { label: 'Upgrade Safety', value: '100%' }
                      ].map((stat, i) => (
                        <div key={i} className="text-center">
                          <div className="carbon-heading-02 text-[var(--cds-text-primary)]">{stat.value}</div>
                          <div className="carbon-helper-text-01 text-[var(--cds-text-secondary)]">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Four Technical Categories - Interactive Cards */}
            <div className="mt-20">
              <div className="text-center mb-10">
                <h3 className="carbon-fluid-heading-04 text-[var(--cds-text-primary)] mb-3">
                  Technical Capability Matrix
                </h3>
                <p className="carbon-body-01 text-[var(--cds-text-secondary)]">
                  Four pillars of ServiceNow excellence, each critical to enterprise-scale success
                </p>
              </div>
              
              <div className="cds--css-grid gap-4" style={{ padding: 0 }}>
                {/* Platform Foundations */}
                <div className="cds--col-span-4 cds--col-span-4--md">
                  <div className="group relative bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] p-0 h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#00b4d8]">
                    {/* Top Accent Bar */}
                    <div className="h-1 bg-[#00b4d8] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    
                    <div className="p-6">
                      {/* Icon with Background Animation */}
                      <div className="flex items-center gap-4 mb-5">
                        <div className="relative w-14 h-14 flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#00b4d815' }}>
                          <div className="absolute inset-0 bg-[#00b4d8] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                          <Layers className="w-7 h-7 text-[#00b4d8] relative z-10 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div>
                          <span className="carbon-label-01 text-[#00b4d8] uppercase tracking-wider">01</span>
                          <h3 className="carbon-heading-02 text-[var(--cds-text-primary)]">Platform Foundations</h3>
                        </div>
                      </div>
                      
                      <ul className="space-y-3 carbon-body-01 text-[var(--cds-text-secondary)]">
                        {['ITSM Architecture', 'CMDB Governance', 'Service Portal Design', 'Workflow Orchestration'].map((item, i) => (
                          <li key={item} className="flex items-center gap-3 group/item">
                            <div className="w-6 h-6 flex items-center justify-center border border-[var(--cds-border-subtle)] text-[var(--cds-text-helper)] carbon-helper-text-01 group-hover/item:border-[#00b4d8] group-hover/item:text-[#00b4d8] transition-colors">
                              {String(i + 1).padStart(2, '0')}
                            </div>
                            <span className="group-hover/item:text-[var(--cds-text-primary)] transition-colors">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Engineered Customization */}
                <div className="cds--col-span-4 cds--col-span-4--md">
                  <div className="group relative bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] p-0 h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#24a148]">
                    <div className="h-1 bg-[#24a148] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-5">
                        <div className="relative w-14 h-14 flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#24a14815' }}>
                          <div className="absolute inset-0 bg-[#24a148] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                          <Code className="w-7 h-7 text-[#24a148] relative z-10 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div>
                          <span className="carbon-label-01 text-[#24a148] uppercase tracking-wider">02</span>
                          <h3 className="carbon-heading-02 text-[var(--cds-text-primary)]">Engineered Customization</h3>
                        </div>
                      </div>
                      
                      <ul className="space-y-3 carbon-body-01 text-[var(--cds-text-secondary)]">
                        {['Scoped Applications', 'Glide API Mastery', 'Script Optimization', 'Source Control Integration'].map((item, i) => (
                          <li key={item} className="flex items-center gap-3 group/item">
                            <div className="w-6 h-6 flex items-center justify-center border border-[var(--cds-border-subtle)] text-[var(--cds-text-helper)] carbon-helper-text-01 group-hover/item:border-[#24a148] group-hover/item:text-[#24a148] transition-colors">
                              {String(i + 1).padStart(2, '0')}
                            </div>
                            <span className="group-hover/item:text-[var(--cds-text-primary)] transition-colors">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Systems Interconnectivity */}
                <div className="cds--col-span-4 cds--col-span-4--md">
                  <div className="group relative bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] p-0 h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#f1c21b]">
                    <div className="h-1 bg-[#f1c21b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-5">
                        <div className="relative w-14 h-14 flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#f1c21b15' }}>
                          <div className="absolute inset-0 bg-[#f1c21b] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                          <Network_1 className="w-7 h-7 text-[#b28600] relative z-10 group-hover:text-[#3e3e3e] transition-colors duration-300" />
                        </div>
                        <div>
                          <span className="carbon-label-01 text-[#b28600] uppercase tracking-wider">03</span>
                          <h3 className="carbon-heading-02 text-[var(--cds-text-primary)]">Systems Interconnectivity</h3>
                        </div>
                      </div>
                      
                      <ul className="space-y-3 carbon-body-01 text-[var(--cds-text-secondary)]">
                        {['REST/SOAP APIs', 'IntegrationHub', 'MID Server Config', 'Enterprise Connectors'].map((item, i) => (
                          <li key={item} className="flex items-center gap-3 group/item">
                            <div className="w-6 h-6 flex items-center justify-center border border-[var(--cds-border-subtle)] text-[var(--cds-text-helper)] carbon-helper-text-01 group-hover/item:border-[#f1c21b] group-hover/item:text-[#b28600] transition-colors">
                              {String(i + 1).padStart(2, '0')}
                            </div>
                            <span className="group-hover/item:text-[var(--cds-text-primary)] transition-colors">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Infrastructure Observability */}
                <div className="cds--col-span-4 cds--col-span-4--md">
                  <div className="group relative bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] p-0 h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#da1e28]">
                    <div className="h-1 bg-[#da1e28] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-5">
                        <div className="relative w-14 h-14 flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#da1e2815' }}>
                          <div className="absolute inset-0 bg-[#da1e28] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                          <Activity className="w-7 h-7 text-[#da1e28] relative z-10 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div>
                          <span className="carbon-label-01 text-[#da1e28] uppercase tracking-wider">04</span>
                          <h3 className="carbon-heading-02 text-[var(--cds-text-primary)]">Infrastructure Observability</h3>
                        </div>
                      </div>
                      
                      <ul className="space-y-3 carbon-body-01 text-[var(--cds-text-secondary)]">
                        {['Discovery & Mapping', 'Event Correlation', 'Cloud Operations', 'Predictive Analytics'].map((item, i) => (
                          <li key={item} className="flex items-center gap-3 group/item">
                            <div className="w-6 h-6 flex items-center justify-center border border-[var(--cds-border-subtle)] text-[var(--cds-text-helper)] carbon-helper-text-01 group-hover/item:border-[#da1e28] group-hover/item:text-[#da1e28] transition-colors">
                              {String(i + 1).padStart(2, '0')}
                            </div>
                            <span className="group-hover/item:text-[var(--cds-text-primary)] transition-colors">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section - Improved Design */}
      <section id="case-studies" className="py-16 bg-[var(--cds-background)]">
        <div className="cds--css-grid">
          <div className="cds--col-span-16 cds--col-span-16--lg">
            {/* Section Header - Compact */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <div className="cds--tag cds--tag--green mb-3">
                  <Building className="w-3 h-3 mr-1" />
                  Success Stories
                </div>
                <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)]">
                  Case Studies
                </h2>
              </div>
              <Link 
                to="/projects"
                className="inline-flex items-center gap-2 text-[var(--cds-link-primary)] carbon-link-01 hover:text-[var(--cds-link-primary-hover)] transition-colors"
              >
                View all case studies
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Case Study Card with Image - Single View with Pagination */}
            <div className="bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] overflow-hidden">
              {caseStudies.map((study, index) => (
                index === currentCaseStudy && (
                  <div key={study.id} className="cds--css-grid gap-0" style={{ padding: 0 }}>
                    {/* Left: Image (4 cols) */}
                    <div className="cds--col-span-4 cds--col-span-4--lg relative">
                      <div className="h-full min-h-[300px] bg-[var(--cds-layer-02)] flex items-center justify-center">
                        <div className="text-center p-6">
                          <study.icon className="w-20 h-20 text-[var(--cds-text-placeholder)] mx-auto mb-4" />
                          <span className="carbon-helper-text-01 text-[var(--cds-text-secondary)]">Case Study Image</span>
                        </div>
                      </div>
                      {/* Case Study Number Badge */}
                      <div className="absolute top-4 left-4 px-3 py-1 bg-[var(--cds-background)] border border-[var(--cds-border-subtle)]">
                        <span className="carbon-label-01 text-[var(--cds-text-primary)]">Case Study {currentCaseStudy + 1} of {caseStudies.length}</span>
                      </div>
                    </div>
                    
                    {/* Middle: Content (8 cols) */}
                    <div className="cds--col-span-8 cds--col-span-8--lg p-6 md:p-8 flex flex-col justify-between border-l border-r border-[var(--cds-border-subtle)]">
                      <div>
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {study.tags.map((tag) => (
                            <span 
                              key={tag.text}
                              className="cds--tag"
                              style={{ 
                                backgroundColor: tag.text === 'Telecom' ? 'var(--cds-tag-background-blue)' : 
                                                tag.text === 'Automation' ? 'var(--cds-tag-background-green)' :
                                                'var(--cds-layer-02)',
                                color: 'var(--cds-text-primary)'
                              }}
                            >
                              {tag.text}
                            </span>
                          ))}
                        </div>
                        
                        {/* Title */}
                        <h3 className="carbon-heading-03 text-[var(--cds-text-primary)] mb-4">
                          {study.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-6">
                          {study.description}
                        </p>
                      </div>
                      
                      {/* CTA */}
                      <Link
                        to={study.link}
                        className="inline-flex items-center gap-2 text-[var(--cds-link-primary)] carbon-link-01 hover:gap-3 transition-all"
                      >
                        Read full case study
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                    
                    {/* Right: Stats (4 cols) */}
                    <div className="cds--col-span-4 cds--col-span-4--lg bg-[var(--cds-layer-02)] p-6 md:p-8">
                      <p className="carbon-label-01 text-[var(--cds-text-helper)] uppercase tracking-wide mb-5">
                        Key Results
                      </p>
                      
                      <div className="space-y-5">
                        {study.stats.map((stat, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div 
                              className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                              style={{ backgroundColor: idx === 0 ? '#24a14815' : idx === 1 ? '#00b4d815' : '#f1c21b15' }}
                            >
                              <stat.icon 
                                className="w-5 h-5" 
                                style={{ 
                                  color: idx === 0 ? '#24a148' : idx === 1 ? '#00b4d8' : '#b28600' 
                                }} 
                              />
                            </div>
                            <div>
                              <div 
                                className="carbon-heading-01"
                                style={{ 
                                  color: idx === 0 ? '#24a148' : idx === 1 ? '#00b4d8' : 'var(--cds-text-primary)' 
                                }}
                              >
                                {stat.value}
                              </div>
                              <div className="carbon-helper-text-01 text-[var(--cds-text-secondary)]">
                                {stat.label}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
            
            {/* Pagination Controls */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                onClick={() => setCurrentCaseStudy((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)}
                className="w-10 h-10 border border-[var(--cds-border-subtle)] flex items-center justify-center hover:border-[var(--cds-link-primary)] hover:bg-[var(--cds-layer-hover)] transition-all"
                aria-label="Previous case study"
              >
                <ChevronLeft className="w-5 h-5 text-[var(--cds-text-secondary)]" />
              </button>
              
              <div className="flex items-center gap-2">
                {caseStudies.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentCaseStudy(idx)}
                    className={`w-10 h-10 flex items-center justify-center transition-all ${
                      idx === currentCaseStudy 
                        ? 'bg-[var(--cds-link-primary)] text-white' 
                        : 'border border-[var(--cds-border-subtle)] text-[var(--cds-text-secondary)] hover:border-[var(--cds-link-primary)]'
                    }`}
                    aria-label={`Go to case study ${idx + 1}`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => setCurrentCaseStudy((prev) => (prev + 1) % caseStudies.length)}
                className="w-10 h-10 border border-[var(--cds-border-subtle)] flex items-center justify-center hover:border-[var(--cds-link-primary)] hover:bg-[var(--cds-layer-hover)] transition-all"
                aria-label="Next case study"
              >
                <ChevronRight className="w-5 h-5 text-[var(--cds-text-secondary)]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial Section - Enhanced Design */}
      <section id="testimonial" className="py-16 bg-[var(--cds-background)]">
        <div className="cds--css-grid">
          <div className="cds--col-span-16 cds--col-span-16--lg">
            {/* Section Header */}
            <div className="text-center mb-10">
              <div className="cds--tag cds--tag--purple mb-3">
                <Quotes className="w-3 h-3 mr-1" />
                Client Feedback
              </div>
              <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)]">
                What Our Clients Say
              </h2>
            </div>

            {/* Testimonial Card - Refined Design */}
            <div className="bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] overflow-hidden">
              <div className="cds--css-grid gap-0" style={{ padding: 0 }}>
                {/* Left: Company Logo & Trust Indicator */}
                <div className="cds--col-span-4 cds--col-span-4--lg relative flex flex-col" style={{ backgroundColor: '#f4f4f4' }}>
                  {/* Center: Large Round Logo Placeholder */}
                  <div className="flex-1 flex flex-col items-center justify-center p-6">
                    <div className="w-32 h-32 rounded-full bg-[var(--cds-layer-01)] border-2 border-[var(--cds-border-subtle)] flex items-center justify-center mb-4 shadow-sm">
                      <Building className="w-14 h-14 text-[var(--cds-text-placeholder)]" />
                    </div>
                    <p className="carbon-heading-02 text-[var(--cds-text-primary)] text-center">
                      Pakistan&apos;s Largest Telecom
                    </p>
                  </div>
                  
                  {/* Accent Line */}
                  <div className="absolute top-0 right-0 w-1 h-full bg-[#00b4d8]"></div>
                </div>
                
                {/* Right: Quote Content */}
                <div className="cds--col-span-12 cds--col-span-12--lg flex flex-col">
                  {/* Quote Area */}
                  <div className="p-8 md:p-10 flex-1 flex flex-col justify-center">
                    <blockquote className="relative">
                      <span className="absolute -top-4 -left-4 text-7xl text-[#00b4d8] opacity-10 font-serif">&ldquo;</span>
                      <p className="carbon-fluid-quotation-01 text-[var(--cds-text-primary)] leading-relaxed relative z-10">
                        Perception IT transformed our IT operations with their ServiceNow expertise. 
                        Their team successfully migrated us from Maximo to ServiceNow with zero downtime, 
                        and the automation they implemented has reduced our incident resolution time by 45%. 
                        Their deep understanding of both the technical and business aspects made all the difference.
                      </p>
                      <span className="absolute -bottom-8 -right-2 text-7xl text-[#00b4d8] opacity-10 font-serif">&rdquo;</span>
                    </blockquote>
                  </div>
                  
                  {/* Bottom Bar: Author & Metrics */}
                  <div className="border-t border-[var(--cds-border-subtle)] bg-[var(--cds-layer-02)]">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between p-6 gap-4">
                      {/* Author Info - Clean */}
                      <div>
                        <div className="carbon-heading-01 text-[var(--cds-text-primary)]">Usman Ikram</div>
                        <div className="carbon-helper-text-01 text-[var(--cds-text-secondary)]">IT Operations Director, Major Telecom Provider</div>
                      </div>
                      
                      {/* Metrics - Compact */}
                      <div className="flex gap-6">
                        <div className="text-right">
                          <div className="carbon-heading-02 text-[#24a148]">Zero</div>
                          <div className="carbon-helper-text-01 text-[var(--cds-text-secondary)]">Downtime</div>
                        </div>
                        <div className="text-right">
                          <div className="carbon-heading-02 text-[#00b4d8]">45%</div>
                          <div className="carbon-helper-text-01 text-[var(--cds-text-secondary)]">Faster</div>
                        </div>
                        <div className="text-right">
                          <div className="carbon-heading-02 text-[var(--cds-text-primary)]">99.95%</div>
                          <div className="carbon-helper-text-01 text-[var(--cds-text-secondary)]">Uptime</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TCO Calculator Section - Enhanced Design */}
      <section id="tco-calculator" className="py-16 bg-[var(--cds-background)]">
        <div className="cds--css-grid">
          <div className="cds--col-span-16 cds--col-span-16--lg">
            {/* Section Header */}
            <div className="text-center mb-10">
              <div className="cds--tag cds--tag--green mb-3">
                <Money className="w-3 h-3 mr-1" />
                Financial Transparency
              </div>
              <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-3">
                Stop Guessing Your ITSM Budget
              </h2>
              <p className="carbon-body-02 text-[var(--cds-text-secondary)] max-w-2xl mx-auto">
                See your 3-Year TCO comparison instantly. No email required.
              </p>
            </div>

            {/* Calculator Card - Clean Unified Layout */}
            <div className="bg-white border border-[var(--cds-border-subtle)] overflow-hidden">
              <div className="cds--css-grid gap-0" style={{ padding: 0 }}>
                {/* Left: Inputs */}
                <div className="cds--col-span-7 cds--col-span-7--lg p-6 md:p-8 border-r border-[var(--cds-border-subtle)]">
                  <h3 className="carbon-heading-02 text-[#161616] mb-6 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-[#00b4d8]" />
                    Your Current Setup
                  </h3>
                  
                  {/* User Count */}
                  <div className="mb-6">
                    <label className="carbon-label-01 text-[#525252] mb-2 block">Number of Users</label>
                    <div className="flex items-center gap-4">
                      <input
                        type="range"
                        min="100"
                        max="5000"
                        step="100"
                        value={tcoUserMultiple}
                        onChange={(e) => setTcoUserMultiple(Number(e.target.value))}
                        className="flex-1 h-2 bg-[#e0e0e0] appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #00b4d8 0%, #00b4d8 ${((tcoUserMultiple - 100) / 4900) * 100}%, #e0e0e0 ${((tcoUserMultiple - 100) / 4900) * 100}%, #e0e0e0 100%)`
                        }}
                      />
                      <span className="px-3 py-1 bg-[#00b4d8] text-white carbon-heading-02 min-w-[80px] text-center">{tcoUserMultiple.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Toolset */}
                  <div className="mb-6">
                    <label className="carbon-label-01 text-[#525252] mb-2 block">Current Toolset</label>
                    <div className="space-y-2">
                      {[
                        { value: 'excel', label: 'Excel / Spreadsheets' },
                        { value: 'jira', label: 'Jira / Basic Tools' },
                        { value: 'legacy', label: 'Legacy ITSM Platform' }
                      ].map((tool) => (
                        <button
                          key={tool.value}
                          onClick={() => setTcoToolset(tool.value as 'excel' | 'jira' | 'legacy')}
                          className={`w-full p-3 text-left border transition-all flex items-center justify-between ${
                            tcoToolset === tool.value
                              ? 'border-[#00b4d8] bg-[#f4f4f4]'
                              : 'border-[#e0e0e0] hover:border-[#00b4d8]'
                          }`}
                        >
                          <span className={`carbon-body-01 ${tcoToolset === tool.value ? 'text-[#00b4d8] font-semibold' : 'text-[#525252]'}`}>
                            {tool.label}
                          </span>
                          {tcoToolset === tool.value && (
                            <div className="w-2 h-2 bg-[#00b4d8]"></div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Modules */}
                  <div>
                    <label className="carbon-label-01 text-[#525252] mb-2 block">Modules Needed</label>
                    <div className="space-y-2">
                      {[
                        { id: 'itsm', label: 'ITSM (Service Desk)' },
                        { id: 'itom', label: 'ITOM (Operations)' }
                      ].map((module) => (
                        <label
                          key={module.id}
                          className={`flex items-center gap-3 p-3 border cursor-pointer transition-all ${
                            tcoModules.includes(module.id)
                              ? 'border-[#00b4d8] bg-[#f4f4f4]'
                              : 'border-[#e0e0e0] hover:border-[#00b4d8]'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={tcoModules.includes(module.id)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setTcoModules([...tcoModules, module.id]);
                              } else {
                                setTcoModules(tcoModules.filter(m => m !== module.id));
                              }
                            }}
                            className="w-4 h-4 accent-[#00b4d8]"
                          />
                          <span className={`carbon-body-01 ${tcoModules.includes(module.id) ? 'text-[#161616]' : 'text-[#525252]'}`}>
                            {module.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Results */}
                <div className="cds--col-span-9 cds--col-span-9--lg p-6 md:p-8 bg-[#f4f4f4] flex flex-col justify-center">
                  <h3 className="carbon-heading-02 text-[#00b4d8] mb-6 flex items-center gap-2">
                    <ChartLine className="w-5 h-5 text-[#00b4d8]" />
                    Your 3-Year TCO Analysis
                  </h3>

                  {/* Current Cost */}
                  <div className="bg-white border border-[#c6c6c6] p-4 mb-4 flex items-center justify-between">
                    <div>
                      <p className="carbon-label-01 text-[#525252]">Current 3-Year Cost</p>
                      <p className="carbon-helper-text-01 text-[#8d8d8d]">With inefficiencies</p>
                    </div>
                    <p className="carbon-fluid-heading-04 text-[#525252]">${tcoResult.current}K</p>
                  </div>

                  {/* Perception Cost */}
                  <div className="bg-white border-2 border-[#00b4d8] p-4 mb-4 shadow-sm relative">
                    <div className="absolute -top-3 left-4 bg-[#00b4d8] text-white carbon-label-01 px-2 py-0.5 font-semibold">
                      RECOMMENDED
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <p className="carbon-label-01 text-[#00b4d8] font-semibold">Perception-IT Cost</p>
                        <p className="carbon-helper-text-01 text-[#6f6f6f]">Fixed-price, no surprises</p>
                      </div>
                      <p className="carbon-fluid-heading-03 text-[#00b4d8]">${tcoResult.perception}K</p>
                    </div>
                  </div>

                  {/* Savings */}
                  <div className="bg-[#24a148] text-white p-5 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <ArrowDown className="w-6 h-6" />
                        <div>
                          <p className="carbon-label-01 text-white font-semibold">Your Total Savings</p>
                          <p className="carbon-helper-text-01 text-white text-opacity-80">Over 3 years</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="carbon-fluid-heading-03 text-white">{tcoResult.savingsPercent}%</p>
                        <p className="carbon-heading-02 text-white">${tcoResult.savings}K</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 text-white carbon-heading-01 bg-[#00b4d8] hover:bg-[#0353e9] transition-colors"
                  >
                    Get Your Detailed Quote
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ServiceNow Success Framework - Improved Design */}
      <section id="framework" className="py-16 bg-[var(--cds-background)]">
        <div className="cds--css-grid">
          <div className="cds--col-span-16 cds--col-span-16--lg">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="cds--tag cds--tag--blue mb-3">
                <IbmAutomationPlatform className="w-4 h-4 mr-1" />
                Our Methodology
              </div>
              <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-3">
                The ServiceNow Success Framework
              </h2>
              <p className="carbon-body-02 text-[var(--cds-text-secondary)] max-w-3xl mx-auto">
                Four critical dimensions for delivering measurable ROI
              </p>
            </div>

            {/* 4-Pillar Connected Layout */}
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-[#e0e0e0]"></div>
              
              <div className="cds--css-grid gap-4" style={{ padding: 0 }}>
                {/* 1. Data Integrity */}
                <div className="cds--col-span-4 cds--col-span-4--lg relative">
                  <div className="bg-white border border-[#e0e0e0] p-6 h-full hover:border-[#00b4d8] transition-all hover:shadow-lg">
                    {/* Step Number */}
                    <div className="absolute -top-3 left-6 w-6 h-6 bg-[#00b4d8] text-white flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    
                    <div className="pt-4">
                      <div className="w-12 h-12 bg-[#00b4d8] bg-opacity-10 flex items-center justify-center mb-4">
                        <DataBase className="w-6 h-6 text-[#00b4d8]" />
                      </div>
                      <h3 className="carbon-heading-02 text-[#161616] mb-1">Data Integrity</h3>
                      <p className="carbon-helper-text-01 text-[#8d8d8d] mb-4">The Foundation</p>
                      
                      <p className="carbon-body-01 text-[#525252] mb-4">
                        99% accurate CMDB from Day 1 through Risk-Mapped Data Audits.
                      </p>
                      
                      <div className="pt-4 border-t border-[#e0e0e0]">
                        <p className="carbon-label-01 text-[#00b4d8]">Eliminates</p>
                        <p className="carbon-helper-text-01 text-[#6f6f6f]">Relationship breakages, adoption stalls</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Total Visibility */}
                <div className="cds--col-span-4 cds--col-span-4--lg relative">
                  <div className="bg-white border border-[#e0e0e0] p-6 h-full hover:border-[#24a148] transition-all hover:shadow-lg">
                    <div className="absolute -top-3 left-6 w-6 h-6 bg-[#24a148] text-white flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    
                    <div className="pt-4">
                      <div className="w-12 h-12 bg-[#24a148] bg-opacity-10 flex items-center justify-center mb-4">
                        <ServerDns className="w-6 h-6 text-[#24a148]" />
                      </div>
                      <h3 className="carbon-heading-02 text-[#161616] mb-1">Total Visibility</h3>
                      <p className="carbon-helper-text-01 text-[#8d8d8d] mb-4">The Engine</p>
                      
                      <p className="carbon-body-01 text-[#525252] mb-4">
                        Huawei Certified Partner bridges hardware metrics into ITOM.
                      </p>
                      
                      <div className="pt-4 border-t border-[#e0e0e0]">
                        <p className="carbon-label-01 text-[#24a148]">Eliminates</p>
                        <p className="carbon-helper-text-01 text-[#6f6f6f]">Silent failures, reactive outages</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Sustainable Architecture */}
                <div className="cds--col-span-4 cds--col-span-4--lg relative">
                  <div className="bg-white border border-[#e0e0e0] p-6 h-full hover:border-[#f1c21b] transition-all hover:shadow-lg">
                    <div className="absolute -top-3 left-6 w-6 h-6 bg-[#f1c21b] text-[#161616] flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    
                    <div className="pt-4">
                      <div className="w-12 h-12 bg-[#f1c21b] bg-opacity-15 flex items-center justify-center mb-4">
                        <ArrowUp className="w-6 h-6 text-[#b28600]" />
                      </div>
                      <h3 className="carbon-heading-02 text-[#161616] mb-1">Sustainable Architecture</h3>
                      <p className="carbon-helper-text-01 text-[#8d8d8d] mb-4">The Long Game</p>
                      
                      <p className="carbon-body-01 text-[#525252] mb-4">
                        Native capabilities (Flow Designer) ensure upgrade-safe deployments.
                      </p>
                      
                      <div className="pt-4 border-t border-[#e0e0e0]">
                        <p className="carbon-label-01 text-[#b28600]">Eliminates</p>
                        <p className="carbon-helper-text-01 text-[#6f6f6f]">Technical debt, rework costs</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Unified Accountability */}
                <div className="cds--col-span-4 cds--col-span-4--lg relative">
                  <div className="bg-white border border-[#e0e0e0] p-6 h-full hover:border-[#da1e28] transition-all hover:shadow-lg">
                    <div className="absolute -top-3 left-6 w-6 h-6 bg-[#da1e28] text-white flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    
                    <div className="pt-4">
                      <div className="w-12 h-12 bg-[#da1e28] bg-opacity-10 flex items-center justify-center mb-4">
                        <Security className="w-6 h-6 text-[#da1e28]" />
                      </div>
                      <h3 className="carbon-heading-02 text-[#161616] mb-1">Unified Accountability</h3>
                      <p className="carbon-helper-text-01 text-[#8d8d8d] mb-4">The Guarantee</p>
                      
                      <p className="carbon-body-01 text-[#525252] mb-4">
                        Full-Stack Accountability from dock to dashboard.
                      </p>
                      
                      <div className="pt-4 border-t border-[#e0e0e0]">
                        <p className="carbon-label-01 text-[#da1e28]">Eliminates</p>
                        <p className="carbon-helper-text-01 text-[#6f6f6f]">Vendor blame cycles, SLA breaches</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Supporting Section - Simplified */}
            <div className="mt-12 bg-white border border-[#e0e0e0] p-8">
              <div className="text-center mb-8">
                <h3 className="carbon-heading-02 text-[#161616]">Accelerating Value Realization</h3>
                <p className="carbon-body-01 text-[#6f6f6f]">How our full-stack capability delivers faster ROI</p>
              </div>
              
              <div className="cds--css-grid gap-4" style={{ padding: 0 }}>
                {[
                  { icon: Lightning, title: 'Instant Trust', desc: 'Real-time server health mapping keeps CMDB accurate', color: '#00b4d8' },
                  { icon: Activity, title: 'Zero-Downtime Ops', desc: 'Physical events trigger automated workflows pre-outage', color: '#24a148' },
                  { icon: Network_1, title: 'Smart Correlation', desc: 'Network alerts prioritize incidents by business impact', color: '#6929c4' },
                  { icon: ArrowRight, title: 'Seamless Lifecycle', desc: 'Procurement flows directly into Asset Management', color: '#b28600' }
                ].map((item, idx) => (
                  <div key={idx} className="cds--col-span-4 cds--col-span-4--lg flex items-start gap-3 p-4 bg-[#f4f4f4]">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${item.color}15` }}>
                      <item.icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <div>
                      <p className="carbon-label-01 text-[#161616]">{item.title}</p>
                      <p className="carbon-helper-text-01 text-[#6f6f6f]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 text-center">
              <p className="carbon-body-01 text-[#6f6f6f] mb-4">
                Our Risk-Mapped Framework identifies optimization opportunities in Week 1
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#00b4d8] text-white carbon-label-01 hover:bg-[#0353e9] transition-colors"
              >
                Start Your Framework Assessment
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* Compliance Section - Enhanced Design */}
      <section id="compliance" className="py-16 bg-[var(--cds-background)]">
        <div className="cds--css-grid">
          <div className="cds--col-span-16 cds--col-span-16--lg">
            {/* Section Header */}
            <div className="text-center mb-10">
              <div className="cds--tag cds--tag--purple mb-3">
                <Locked className="w-3 h-3 mr-1" />
                Data Sovereignty & Compliance
              </div>
              <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-3">
                Your Data Stays in Pakistan
              </h2>
              <p className="carbon-body-02 text-[var(--cds-text-secondary)] max-w-3xl mx-auto">
                SBP-aligned compliance with local data residency. No cross-border transfers without explicit authorization.
              </p>
            </div>

            {/* Main Compliance Card */}
            <div className="bg-white border border-[var(--cds-border-subtle)] overflow-hidden">
              <div className="cds--css-grid gap-0" style={{ padding: 0 }}>
                {/* Left: Visual & Key Stats */}
                <div className="cds--col-span-6 cds--col-span-6--lg p-8 md:p-10 border-b md:border-b-0 md:border-r border-[var(--cds-border-subtle)] bg-[#f4f4f4]">
                  {/* Large Icon */}
                  <div className="w-20 h-20 bg-[#6929c4] bg-opacity-10 flex items-center justify-center mb-6">
                    <Locked className="w-10 h-10 text-[#6929c4]" />
                  </div>
                  
                  <h3 className="carbon-heading-02 text-[#161616] mb-4">
                    Why Local Data Residency Matters
                  </h3>
                  
                  <p className="carbon-body-01 text-[#525252] mb-6">
                    Banking and Government sectors require strict data sovereignty. Our Lahore delivery center ensures complete compliance.
                  </p>
                  
                  {/* Key Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 border border-[#e0e0e0]">
                      <p className="carbon-heading-02 text-[#6929c4]">100%</p>
                      <p className="carbon-helper-text-01 text-[#6f6f6f]">SBP Guidelines Aligned</p>
                    </div>
                    <div className="bg-white p-4 border border-[#e0e0e0]">
                      <p className="carbon-heading-02 text-[#6929c4]">24/7</p>
                      <p className="carbon-helper-text-01 text-[#6f6f6f]">Local Support Access</p>
                    </div>
                  </div>
                </div>
                
                {/* Right: Compliance Features */}
                <div className="cds--col-span-10 cds--col-span-10--lg p-8 md:p-10">
                  <h3 className="carbon-heading-02 text-[#161616] mb-6">
                    Compliance Framework
                  </h3>
                  
                  <div className="space-y-4">
                    {/* Feature 1 */}
                    <div className="flex items-start gap-4 p-4 bg-[#f4f4f4] border-l-2 border-[#6929c4]">
                      <div className="w-10 h-10 bg-[#6929c4] flex items-center justify-center flex-shrink-0">
                        <span className="text-white carbon-heading-01">1</span>
                      </div>
                      <div>
                        <p className="carbon-heading-01 text-[#161616]">SBP Guidelines Aligned</p>
                        <p className="carbon-body-01 text-[#525252]">Full compliance with State Bank of Pakistan regulations for financial institutions.</p>
                      </div>
                    </div>
                    
                    {/* Feature 2 */}
                    <div className="flex items-start gap-4 p-4 bg-[#f4f4f4] border-l-2 border-[#6929c4]">
                      <div className="w-10 h-10 bg-[#6929c4] flex items-center justify-center flex-shrink-0">
                        <span className="text-white carbon-heading-01">2</span>
                      </div>
                      <div>
                        <p className="carbon-heading-01 text-[#161616]">Local Data Residency</p>
                        <p className="carbon-body-01 text-[#525252]">Data never leaves Pakistan jurisdiction. Lahore-based infrastructure with local oversight.</p>
                      </div>
                    </div>
                    
                    {/* Feature 3 */}
                    <div className="flex items-start gap-4 p-4 bg-[#f4f4f4] border-l-2 border-[#6929c4]">
                      <div className="w-10 h-10 bg-[#6929c4] flex items-center justify-center flex-shrink-0">
                        <span className="text-white carbon-heading-01">3</span>
                      </div>
                      <div>
                        <p className="carbon-heading-01 text-[#161616]">Audit-Ready Documentation</p>
                        <p className="carbon-body-01 text-[#525252]">Complete audit trails and compliance documentation for regulatory inspections.</p>
                      </div>
                    </div>
                    
                    {/* Feature 4 */}
                    <div className="flex items-start gap-4 p-4 bg-[#f4f4f4] border-l-2 border-[#6929c4]">
                      <div className="w-10 h-10 bg-[#6929c4] flex items-center justify-center flex-shrink-0">
                        <span className="text-white carbon-heading-01">4</span>
                      </div>
                      <div>
                        <p className="carbon-heading-01 text-[#161616]">No Cross-Border Transfers</p>
                        <p className="carbon-body-01 text-[#525252]">Explicit authorization required for any data transfer outside Pakistan.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Banner */}
              <div className="bg-[#6929c4] px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-white carbon-body-01">
                  Trusted by Banking & Government sectors across Pakistan
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#6929c4] carbon-label-01 hover:bg-[#f4f4f4] transition-colors"
                >
                  Request Compliance Documentation
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Oversight Section - David Pridmore */}
      <section id="ceo-oversight" className="py-16 bg-[#0F172A]">
        <div className="cds--css-grid">
          <div className="cds--col-span-16 lg:cds--col-span-14 lg:cds--col-start-2">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              
              {/* Left: Photo & Stats */}
              <div className="flex-shrink-0 flex flex-col items-center lg:items-start">
                <div className="relative">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-[#00b4d8] shadow-lg shadow-[#00b4d8]/20">
                    <img 
                      src="/david_headshot.jpg" 
                      alt="David Pridmore" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Experience Badge */}
                  <div className="absolute -bottom-2 -right-2 bg-[#00b4d8] text-white px-3 py-1.5 rounded-sm">
                    <span className="text-lg font-bold">24</span>
                    <span className="text-xs block -mt-1">Years Exp.</span>
                  </div>
                </div>
              </div>
              
              {/* Right: Content */}
              <div className="flex-1">
                {/* Section Label */}
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#00b4d8] mb-3 block">
                  CEO Oversight & Strategic Accountability
                </span>
                
                {/* Title */}
                <h2 className="carbon-fluid-heading-04 text-white mb-4">
                  Your Migration Led by 24 Years of Enterprise Architecture Experience
                </h2>
                
                {/* Quote Block */}
                <blockquote className="border-l-2 border-[#00b4d8] pl-6 mb-6">
                  <p className="carbon-body-01 text-gray-300 leading-relaxed mb-4 italic">
                    "In critical infrastructure, weak assumptions cost millions. At Perception-IT, I don't just sign the contracts; 
                    I personally oversee the architectural risk mapping for every major migration.
                  </p>
                  <p className="carbon-body-01 text-gray-300 leading-relaxed mb-4 italic">
                    My commitment to you is simple: We do not deploy 'hope-based' strategies. Every workflow, integration, 
                    and data map is validated against real-world physical constraints before go-live. When you partner with us, 
                    you gain direct access to senior leadership, ensuring your ServiceNow investment aligns perfectly with your 
                    business continuity goals."
                  </p>
                </blockquote>
                
                {/* Signature Block */}
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-white font-semibold">David Pridmore</p>
                    <p className="text-gray-400 text-sm">CEO & Lead Architect, Perception-IT</p>
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/david-pridmore-31379217/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#00b4d8] hover:text-[#4589ff] text-sm flex items-center gap-1"
                  >
                    <LinkedIn className="w-4 h-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complementary Solutions Section */}
      <section id="complementary" className="py-20 bg-[var(--cds-background)]">
        <div className="cds--css-grid">
          <div className="cds--col-span-16">
            {/* Section Header - Carbon Compliant */}
            <div className="mb-12">
              <span className="cds--tag cds--tag--blue mb-4">
                Extend Your Value
              </span>
              <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-4">
                Complementary Solutions
              </h2>
              <p className="carbon-body-01 text-[var(--cds-text-secondary)] max-w-2xl">
                Extend your ServiceNow value beyond IT with integrated full-stack capabilities. Each solution is designed to work seamlessly with your existing infrastructure.
              </p>
            </div>

            {/* Solutions Grid - Using Carbon Tile Pattern */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Infrastructure & Observability */}
              <a 
                href="/services/infrastructure" 
                className="cds--tile group bg-[var(--cds-layer-01)] p-6 flex flex-col h-full hover:shadow-md transition-shadow"
              >
                {/* Icon Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 bg-[var(--cds-layer-02)] flex items-center justify-center">
                    <Cloud className="w-6 h-6 text-[var(--cds-link-primary)]" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-[var(--cds-icon-secondary)] group-hover:text-[var(--cds-link-primary)] transition-colors flex-shrink-0 mt-1" />
                </div>
                
                {/* Content */}
                <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-3">
                  Infrastructure & Observability
                </h3>
                
                <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-6 flex-grow">
                  Bridge physical reality to digital workflows with server health audits, network correlation, and DCIM integration.
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {['CMDB Sync', 'DCIM', 'Monitoring'].map((tag) => (
                    <span key={tag} className="cds--tag text-[10px]">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>

              {/* Security & Compliance */}
              <a 
                href="/services/security" 
                className="cds--tile group bg-[var(--cds-layer-01)] p-6 flex flex-col h-full hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 bg-[var(--cds-layer-02)] flex items-center justify-center">
                    <Security className="w-6 h-6 text-[var(--cds-support-error)]" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-[var(--cds-icon-secondary)] group-hover:text-[var(--cds-support-error)] transition-colors flex-shrink-0 mt-1" />
                </div>
                
                <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-3">
                  Security & Compliance
                </h3>
                
                <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-6 flex-grow">
                  Automate risk response with SecOps integration, vulnerability remediation, and SBP-aligned compliance.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {['SecOps', 'SIEM', 'SBP'].map((tag) => (
                    <span key={tag} className="cds--tag text-[10px]">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>

              {/* Enterprise Automation */}
              <a 
                href="/services/automation" 
                className="cds--tile group bg-[var(--cds-layer-01)] p-6 flex flex-col h-full hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 bg-[var(--cds-layer-02)] flex items-center justify-center">
                    <IbmAutomationPlatform className="w-6 h-6 text-[var(--cds-support-success)]" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-[var(--cds-icon-secondary)] group-hover:text-[var(--cds-support-success)] transition-colors flex-shrink-0 mt-1" />
                </div>
                
                <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-3">
                  Enterprise Automation
                </h3>
                
                <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-6 flex-grow">
                  Scale beyond IT to HR, Facilities, and Customers with ESM portals and ERP-linked automation.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {['ESM', 'CSM', 'App Engine'].map((tag) => (
                    <span key={tag} className="cds--tag text-[10px]">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </div>

            {/* Integration Footer - Carbon Compliant */}
            <div className="mt-12 pt-8 border-t border-[var(--cds-border-subtle)]">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[var(--cds-layer-02)] flex items-center justify-center">
                    <Plug className="w-6 h-6 text-[var(--cds-link-primary)]" />
                  </div>
                  <div>
                    <p className="carbon-heading-01 text-[var(--cds-text-primary)]">Unified Integration</p>
                    <p className="carbon-body-01 text-[var(--cds-text-secondary)]">Seamless connection to your ServiceNow instance</p>
                  </div>
                </div>
                <div className="flex items-center gap-10">
                  <div className="text-center">
                    <span className="carbon-heading-02 text-[var(--cds-link-primary)] block">3</span>
                    <span className="carbon-helper-text-01 text-[var(--cds-text-secondary)]">Solution Areas</span>
                  </div>
                  <div className="text-center">
                    <span className="carbon-heading-02 text-[var(--cds-text-primary)] block">1</span>
                    <span className="carbon-helper-text-01 text-[var(--cds-text-secondary)]">Accountability Partner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Commitment Section */}
      <section id="performance-commitment" className="py-16 bg-[#0F172A]">
        <div className="cds--css-grid">
          <div className="cds--col-span-16 lg:cds--col-span-14 lg:cds--col-start-2">
            {/* Section Header */}
            <div className="mb-12">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#00b4d8] mb-4 block">
                The Perception-IT Performance Commitment
              </span>
              <h2 className="carbon-fluid-heading-04 text-white mb-4">
                Contractual Accountability. Predictable Outcomes.
              </h2>
              <p className="carbon-body-01 text-gray-400 max-w-3xl">
                We don&apos;t just promise speed; we engineer it into our contract. Our performance commitments align our success directly with yours.
              </p>
            </div>

            {/* Commitment Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {/* 8-Week Go-Live */}
              <div className="bg-[#1E293B] border border-gray-700 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00b4d8]/10 flex items-center justify-center flex-shrink-0">
                    <Time className="w-6 h-6 text-[#00b4d8]" />
                  </div>
                  <div>
                    <h3 className="carbon-heading-02 text-white mb-2">8-Week Go-Live Target</h3>
                    <p className="carbon-body-01 text-gray-400 mb-2">
                      For defined &apos;Rapid Start&apos; scopes, we commit to an 8-week deployment timeline. If delays occur due to our execution, we absorb the associated labor overrun costs.
                    </p>
                    <p className="carbon-helper-text-01 text-gray-500">
                      (Subject to timely client data access and approvals.)
                    </p>
                  </div>
                </div>
              </div>

              {/* 99.95% Uptime */}
              <div className="bg-[#1E293B] border border-gray-700 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#24a148]/10 flex items-center justify-center flex-shrink-0">
                    <Activity className="w-6 h-6 text-[#24a148]" />
                  </div>
                  <div>
                    <h3 className="carbon-heading-02 text-white mb-2">99.95% Uptime SLA</h3>
                    <p className="carbon-body-01 text-gray-400">
                      We back our managed services with a contractual uptime guarantee. Financial penalties apply if stability targets are missed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Fixed-Scope Pricing */}
              <div className="bg-[#1E293B] border border-gray-700 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f1c21b]/10 flex items-center justify-center flex-shrink-0">
                    <Money className="w-6 h-6 text-[#f1c21b]" />
                  </div>
                  <div>
                    <h3 className="carbon-heading-02 text-white mb-2">Fixed-Scope Pricing</h3>
                    <p className="carbon-body-01 text-gray-400">
                      Your commercial model is locked before execution begins. No hidden change orders for defined requirements. Budget predictability is guaranteed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Certified Architect */}
              <div className="bg-[#1E293B] border border-gray-700 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#8a3ffc]/10 flex items-center justify-center flex-shrink-0">
                    <Settings className="w-6 h-6 text-[#8a3ffc]" />
                  </div>
                  <div>
                    <h3 className="carbon-heading-02 text-white mb-2">Certified Architect Leadership</h3>
                    <p className="carbon-body-01 text-gray-400">
                      Your deployment is led exclusively by ServiceNow-certified architects. Zero junior learning curves on your critical infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why This Matters */}
            <div className="border-l-2 border-[#00b4d8] pl-6">
              <p className="carbon-body-01 text-gray-300 italic">
                <strong className="text-white">Why This Matters:</strong> Most vendors sell &quot;effort.&quot; We sell outcomes. By tying our commercial terms to specific performance metrics, we ensure our incentives are 100% aligned with your business continuity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Path Forward - Next Steps */}
      <section id="next-steps" className="py-16 bg-white">
        <div className="cds--css-grid">
          <div className="cds--col-span-16 lg:cds--col-span-14 lg:cds--col-start-2">
            {/* Section Header */}
            <div className="mb-12">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#00b4d8] mb-4 block">
                Your Path Forward
              </span>
              <h2 className="carbon-fluid-heading-04 text-[var(--cds-text-primary)] mb-4">
                Start Your Migration Audit
              </h2>
              <p className="carbon-body-01 text-[var(--cds-text-secondary)] max-w-3xl">
                A structured, risk-free process to validate your roadmap. Our Performance Commitments apply immediately upon engagement.
              </p>
            </div>

            {/* Steps */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Step 1 */}
              <div className="bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] p-6">
                <div className="w-12 h-12 bg-[#00b4d8] text-white flex items-center justify-center font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">
                  Technical Discovery (30 Mins)
                </h3>
                <p className="carbon-body-01 text-[var(--cds-text-secondary)]">
                  We discuss your current setup, pain points, and goals. No sales pitch—just a technical assessment of your integration risks.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] p-6">
                <div className="w-12 h-12 bg-[#00b4d8] text-white flex items-center justify-center font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">
                  Preliminary Risk Assessment Report (Free)
                </h3>
                <p className="carbon-body-01 text-[var(--cds-text-secondary)]">
                  You receive a detailed analysis of data migration complexity, hardware blind spots, and a recommended architecture.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] p-6">
                <div className="w-12 h-12 bg-[#00b4d8] text-white flex items-center justify-center font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">
                  Fixed-Scope Proposal (Within 48 Hours)
                </h3>
                <p className="carbon-body-01 text-[var(--cds-text-secondary)]">
                  Clear timeline, fixed price, defined deliverables. No hidden costs. No surprises.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="#footer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#00b4d8] text-white font-semibold rounded hover:bg-[#0353e9] transition-all duration-300"
              >
                Get Your Free Assessment & Risk Report
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)] mt-4">
                By clicking, you agree to a brief technical discovery call. No obligation to proceed.
              </p>
            </div>
          </div>
        </div>
      </section>

            </main>
          </div>{/* End of flex wrapper */}
        </div>{/* End of max-w-[1584px] */}
      </div>{/* End of border-t */}

      <Footer />
    </div>
  );
};

export default ServiceNow;
