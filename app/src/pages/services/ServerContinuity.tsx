import { useEffect, useState, lazy, Suspense } from 'react';
import '../../styles/carbon-typography.css';
import Footer from '../../sections/Footer';
import Navigation from '../../components/Navigation';
const HeroCubeAnimationOrange = lazy(() => import('../../components/HeroCubeAnimationOrange'));
const HeroGradientPlanesOrange = lazy(() => import('../../components/HeroGradientPlanesOrange'));
import ArrowRight from '@carbon/icons-react/es/ArrowRight';
import CheckmarkFilled from '@carbon/icons-react/es/CheckmarkFilled';
import WarningAlt from '@carbon/icons-react/es/WarningAlt';
import Tools from '@carbon/icons-react/es/Tools';
import Calendar from '@carbon/icons-react/es/Calendar';
import Activity from '@carbon/icons-react/es/Activity';
import Money from '@carbon/icons-react/es/Money';
import View from '@carbon/icons-react/es/View';
import ChevronRight from '@carbon/icons-react/es/ChevronRight';
import Building from '@carbon/icons-react/es/Building';
import DataBase from '@carbon/icons-react/es/DataBase';
import Restart from '@carbon/icons-react/es/Restart';
import Time from '@carbon/icons-react/es/Time';

const ServerContinuity = () => {
  const [activeSection, setActiveSection] = useState('value');
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0);
  const [intakeAnswers, setIntakeAnswers] = useState<{situation?: string; criticality?: string; budget?: string}>({});
  
  // Case studies data
  const caseStudies = [
    {
      id: 'ibrahim',
      tags: [
        { text: 'Textile', color: 'blue' },
        { text: 'Servers', color: 'gray' },
        { text: 'Out-of-Warranty', color: 'orange' }
      ],
      title: 'Infrastructure Stability: Ibrahim Fibres',
      description: 'We strategized the security of 48 mission critical Lenovo servers via shift aligned engineering. Our 24/7 Managed Utility framework protected essential ERP and production systems. This neutralized downtime risk and maximized asset lifecycle value through successful CAPEX deferral.',
      logo: '/logos/clients/IFL-logo.png',
      companyName: 'Infrastructure Stability: Ibrahim Fibres',
      solutionName: 'ServerLife Extend™',
      solutionContext: 'Critical Infrastructure',
      caseStudyLink: '/#/projects/case-study/out-of-warranty-server-support-ibrahim-fibres',
      image: '/case-studies/ibrahim-fibres/Ibrahim Fibres -case study-1080x1350.jpg',
      stats: [
        { value: 'Zero', label: 'Unplanned Downtime', icon: CheckmarkFilled, color: '#f97316' },
        { value: '<6hrs', label: 'MTTR', icon: Activity, color: '#24a148' },
        { value: '$750K+', label: 'Cost Avoidance', icon: Money, color: '#6929c4' },
        { value: '$200K+', label: 'CapEx Deferred', icon: Money, color: '#0f62fe' }
      ],
      quote: {
        text: "Perception IT transformed our server infrastructure from a risk into a reliable engine for operations. Their 24/7 support, same-day hardware replacements, and proactive maintenance have kept our systems running without a single major incident.",
        author: "Mr. Usman Zafar, Head of IT, Ibrahim Fibres Limited"
      }
    },
    {
      id: 'lumhs',
      tags: [
        { text: 'Academic', color: 'blue' },
        { text: 'Servers', color: 'gray' },
        { text: 'Managed Support', color: 'orange' }
      ],
      title: 'LUMS - Departmental Server Management',
      description: 'Converted break-fix chaos to managed utility across 40+ departmental servers. Predictable PKR 45K/month per server vs. emergency callouts averaging PKR 150K each.',
      logo: '/logos/clients/LUMS-Logo.png',
      companyName: 'LUMS',
      solutionName: 'ServerSure™',
      solutionContext: 'Departmental Systems',
      image: '/case-studies/lumhs/carousel.jpg',
      stats: [
        { value: '40+', label: 'Servers Managed', icon: DataBase, color: '#f97316' },
        { value: '70%', label: 'Cost Reduction', icon: Money, color: '#24a148' },
        { value: 'Zero', label: 'Emergency Downtime', icon: CheckmarkFilled, color: '#6929c4' }
      ]
    },
    {
      id: 'descon',
      tags: [
        { text: 'Manufacturing', color: 'blue' },
        { text: 'Data Centres', color: 'gray' },
        { text: 'Mission-Critical Support', color: 'orange' }
      ],
      title: 'Descon - Multi-Site Infrastructure Resilience',
      description: 'Deployed and manage multi-site infrastructure spanning 3 data centres with zero unplanned downtime in 3 years supporting critical manufacturing operations.',
      logo: '/logos/clients/Descon-logo.png',
      companyName: 'Descon',
      solutionName: 'ServerLife Extend™',
      solutionContext: 'Multi-Site Infrastructure',
      image: '/case-studies/descon/carousel.jpg',
      stats: [
        { value: '99.99%', label: 'Uptime SLA', icon: Activity, color: '#f97316' },
        { value: '3', label: 'Data Centres', icon: Building, color: '#24a148' },
        { value: 'Zero', label: 'Unplanned Downtime', icon: CheckmarkFilled, color: '#6929c4' }
      ]
    },
    {
      id: 'sefam',
      tags: [
        { text: 'Manufacturing', color: 'blue' },
        { text: 'Servers', color: 'gray' },
        { text: 'Production Support', color: 'orange' }
      ],
      title: 'Sefam - Manufacturing Operations Support',
      description: '24/7 monitoring and support for mission-critical production servers ensuring continuous manufacturing operations with rapid response to hardware issues.',
      logo: '/logos/clients/client-Sefam.jpeg',
      companyName: 'Sefam',
      solutionName: 'ServerSure™',
      solutionContext: 'Manufacturing Operations',
      image: '/case-studies/sefam/carousel.jpg',
      quote: {
        text: "Perception IT's proactive monitoring and rapid response has eliminated unexpected downtime. Our production lines run continuously with full confidence in our server infrastructure.",
        author: "IT Manager, Sefam"
      },
      stats: [
        { value: '99.9%', label: 'Uptime Maintained', icon: Activity, color: '#f97316' },
        { value: '4hrs', label: 'Response Time', icon: Calendar, color: '#24a148' },
        { value: '24/7', label: 'Monitoring', icon: CheckmarkFilled, color: '#6929c4' }
      ]
    }
  ];
  
  const nextCaseStudy = () => {
    setCurrentCaseStudy((prev) => (prev + 1) % caseStudies.length);
  };
  
  const prevCaseStudy = () => {
    setCurrentCaseStudy((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };
  
  // Section Registry
  const SECTIONS = [
    { id: 'value', label: 'Business Value' },
    { id: 'suite', label: 'Server Suite' },
    { id: 'integration', label: 'Server Environment' },
    { id: 'technical', label: 'Technical Depth' },
    { id: 'comparison', label: 'Vs. Alternatives' },
    { id: 'cases', label: 'Case Studies' },
    { id: 'engagement', label: 'Engagement' }
  ] as const;

  // Scroll spy
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
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerOffset,
        behavior: 'smooth'
      });
    }
  };

  const handleMobileNavChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    scrollToSection(e.target.value);
  };

  return (
    <div className="min-h-screen bg-[var(--cds-background)]">
      <Navigation />
      
      {/* Hero Section */}
      <section id="overview" className="relative pt-40 pb-20 bg-[#0a1628] overflow-hidden">
        <Suspense fallback={<div className="h-[500px] bg-slate-900" />}>
          <HeroCubeAnimationOrange />
        </Suspense>
        <Suspense fallback={<div className="h-[500px] bg-slate-900" />}>
          <HeroGradientPlanesOrange />
        </Suspense>
        
        <div className="relative z-10 cds--css-grid" style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
          <div className="cds--col-span-16 lg:cds--col-span-14 lg:cds--col-start-2">
          
          {/* Breadcrumb */}
          <nav className="relative z-10 flex items-center gap-2 text-xs mb-8" aria-label="Breadcrumb">
            <a href="/" className="text-[#f97316] hover:underline">Home</a>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <a href="/services" className="text-[#f97316] hover:underline">Services</a>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="text-[#f97316] hover:underline cursor-pointer">Infrastructure</span>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="px-2 py-0.5 border border-[#a8a8a8] text-[#a8a8a8] rounded-full">Server Continuity Suite</span>
          </nav>

          {/* Mobile Dropdown Navigation */}
          <div className="xl:hidden mb-8">
            <label className="text-xs text-gray-400 block mb-2">
              On this page:
            </label>
            <select 
              onChange={handleMobileNavChange}
              value={activeSection}
              className="w-full h-12 px-4 bg-gray-800 border border-gray-700 text-white text-sm"
            >
              {SECTIONS.map(item => (
                <option key={item.id} value={item.id}>{item.label}</option>
              ))}
            </select>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Column - Main Content */}
            <div>
              {/* Headline */}
              <h1 className="carbon-fluid-heading-05 text-white mb-6">
                Server Continuity Suite
              </h1>

              {/* Subtitle */}
              <p className="carbon-label-01 text-[#c6c6c6] uppercase tracking-wide mb-6">
                Comprehensive Server Support & Lifecycle Management
              </p>

              {/* Lead Text */}
              <p className="carbon-body-02 text-gray-300 mb-8">
                We provide total visibility, predictable costs, and audit-ready control-whether 
                extending current hardware or transitioning to new.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('engagement')}
                  className="cds--btn cds--btn--primary bg-[#f97316] hover:bg-[#ea580c]"
                >
                  Request Free ServerAudit™
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                <button 
                  onClick={() => scrollToSection('cases')}
                  className="cds--btn cds--btn--tertiary"
                  style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white', borderWidth: '1px' }}
                >
                  View Client Results
                </button>
              </div>
            </div>

            {/* Right Column - Key Features */}
            <div className="space-y-3">
              {/* Feature 1 */}
              <div className="flex items-start gap-4 p-4 border-l-2 border-[#f97316] bg-white/5">
                <div className="w-10 h-10 bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <Activity className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="carbon-heading-01 text-white mb-1">Mission-Critical Support</h3>
                  <p className="carbon-label-01 text-gray-400">High-availability server support with 99.95% uptime SLA for production systems.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4 p-4 border-l-2 border-[#f97316] bg-white/5">
                <div className="w-10 h-10 bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <DataBase className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="carbon-heading-01 text-white mb-1">Departmental Infrastructure</h3>
                  <p className="carbon-label-01 text-gray-400">Fixed-Rate Server Utility: Predictable management for non-critical infrastructure.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4 p-4 border-l-2 border-[#f97316] bg-white/5">
                <div className="w-10 h-10 bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <Money className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="carbon-heading-01 text-white mb-1">Investment Protection</h3>
                  <p className="carbon-label-01 text-gray-400">Extend server life 2-3 years safely or plan zero-downtime transition to new hardware.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-4 p-4 border-l-2 border-[#f97316] bg-white/5">
                <div className="w-10 h-10 bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <CheckmarkFilled className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="carbon-heading-01 text-white mb-1">Zero-Downtime Proven</h3>
                  <p className="carbon-label-01 text-gray-400">Delivered across 6+ enterprise clients including Ibrahim Fibres, LUMS, and Jazz.</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Trust Bar - Carbon Tile Design */}
      <section className="bg-[var(--cds-background)] border-y border-[var(--cds-border-subtle)]">
        <div className="max-w-7xl mx-auto py-6 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Building, headline: "6+ Enterprise Clients", subtext: 'Ibrahim Fibres, LUMS, Jazz' },
              { icon: DataBase, headline: 'Server Audit to Refresh', subtext: 'Full Lifecycle Coverage' },
              { icon: CheckmarkFilled, headline: 'Same-Day Spares', subtext: 'Lahore Stock' },
              { icon: Calendar, headline: '24/7 SLA Support', subtext: 'Always Available' }
            ].map((item) => (
              <div
                key={item.headline}
                className="bg-white border border-[#e0e0e0] p-4 flex flex-col gap-3"
              >
                <div className="w-10 h-10 bg-orange-100 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-[13px] text-[var(--cds-text-primary)] font-semibold leading-tight mb-1">{item.headline}</p>
                  <p className="text-[11px] text-[#525252]">{item.subtext}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content with Side Navigation */}
      <div>
        <div className="max-w-[1584px] mx-auto">
          <div className="flex">
            
            {/* Desktop Side Menu */}
            <aside className="hidden xl:block w-56 flex-shrink-0 pl-6 pr-8">
              <nav className="sticky top-20 pt-8 pb-8 h-[calc(100vh-5rem)]">
                <ul className="space-y-0.5">
                  {SECTIONS.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left px-4 py-2 carbon-body-01 transition-colors border-l-2 ${
                          activeSection === item.id
                            ? 'text-[#161616] border-[#f97316] bg-[#f4f4f4] font-semibold'
                            : 'text-[#525252] border-transparent hover:text-[#161616] hover:bg-[#f4f4f4]'
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
            <main className="flex-1 min-w-0 pl-8 pr-6">
              
              {/* Business Value Section */}
              <section id="value" className="py-20 border-b border-[#e0e0e0]">
                <div className="max-w-5xl mx-auto px-6">
                  
                  {/* Header + Visual Intro */}
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
                    <div>
                      <span className="carbon-label-01 text-[#f97316] uppercase tracking-wide mb-3 block">Business Value</span>
                      <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">
                        Engineered Continuity for Your Infrastructure
                      </h2>
                      <p className="carbon-body-01 text-[#525252] mb-6">
                        Your servers are the engine of your operations. Uncertainty about refresh timing, 
                        warranty gaps, and break-fix chaos lead to unplanned CapEx, compliance exposure, 
                        and production downtime.
                      </p>
                      <p className="carbon-body-01 text-[#161616]">
                        We engineer server environments that provide <strong>total visibility</strong>, <strong>predictable costs</strong>, and <strong>audit-ready control</strong>.
                      </p>
                    </div>
                    <div className="h-64 lg:h-auto bg-gradient-to-br from-[#fff3e0] to-[#ffe0b2] border border-[#f97316]/20 flex items-center justify-center p-6">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-4 mb-4">
                          <div className="w-16 h-16 bg-white border border-[#f97316]/30 flex items-center justify-center">
                            <Activity className="w-8 h-8 text-[#f97316]" />
                          </div>
                          <ArrowRight className="w-6 h-6 text-[#f97316]" />
                          <div className="w-16 h-16 bg-white border border-[#f97316]/30 flex items-center justify-center">
                            <CheckmarkFilled className="w-8 h-8 text-[#24a148]" />
                          </div>
                        </div>
                        <p className="carbon-label-01 text-[#e65100] font-semibold mb-1">Risk → Value Framework</p>
                        <p className="carbon-helper-text-01 text-[#bf360c]">Insert a TCO comparison diagram or server lifecycle infographic here.</p>
                      </div>
                    </div>
                  </div>

                  {/* Problem → Solution Framework */}
                  <div className="mb-12">
                    <div className="text-center mb-10">
                      <span className="carbon-label-01 text-red-500 uppercase tracking-wide mb-3 block">Critical Risk Factors</span>
                      <h3 className="carbon-fluid-heading-04 text-[var(--cds-text-primary)]">What happens when server support is left to chance</h3>
                    </div>

                    <div className="space-y-4">
                      {[
                        { 
                          riskIcon: Calendar, riskTitle: 'Aging Hardware', riskDesc: 'Servers beyond 3-5 years face performance degradation and end-of-support from OEMs.',
                          solIcon: Activity, solTitle: 'Deferred CapEx', solDesc: 'Extend server life 2-3 years safely with same-day spare support.'
                        },
                        { 
                          riskIcon: WarningAlt, riskTitle: 'Security Gaps', riskDesc: 'Firmware vulnerabilities and unpatched systems create compliance exposure.',
                          solIcon: CheckmarkFilled, solTitle: 'Compliance & Audit', solDesc: 'Full firmware tracking, patch validation, and documentation.'
                        },
                        { 
                          riskIcon: Time, riskTitle: '2 AM Surprises', riskDesc: 'Disconnected accountability between vendors creates blind spots during peak production.',
                          solIcon: Money, solTitle: 'Predictable OpEx', solDesc: 'Flat monthly rate vs. emergency callout surprises averaging PKR 150K.'
                        }
                      ].map((pair) => (
                        <div key={pair.riskTitle} className="grid md:grid-cols-[1fr,auto,1fr] gap-4 items-stretch">
                          {/* Risk Card */}
                          <div className="p-5 bg-[#1a1a1a] text-white flex items-start gap-4">
                            <div className="w-10 h-10 bg-red-500/20 flex items-center justify-center flex-shrink-0">
                              <pair.riskIcon className="w-5 h-5 text-red-400" />
                            </div>
                            <div>
                              <p className="carbon-label-01 text-red-400 uppercase tracking-wide mb-1">Risk</p>
                              <p className="carbon-heading-02 text-white mb-1">{pair.riskTitle}</p>
                              <p className="carbon-helper-text-01 text-gray-400">{pair.riskDesc}</p>
                            </div>
                          </div>

                          {/* Connector */}
                          <div className="hidden md:flex items-center justify-center px-2">
                            <div className="w-10 h-10 bg-[#f97316] flex items-center justify-center">
                              <ArrowRight className="w-5 h-5 text-white" />
                            </div>
                          </div>

                          {/* Solution Card */}
                          <div className="p-5 bg-white border border-[#e0e0e0] flex items-start gap-4">
                            <div className="w-10 h-10 bg-orange-100 flex items-center justify-center flex-shrink-0">
                              <pair.solIcon className="w-5 h-5 text-orange-600" />
                            </div>
                            <div>
                              <p className="carbon-label-01 text-[#f97316] uppercase tracking-wide mb-1">Solution</p>
                              <p className="carbon-heading-02 text-[#161616] mb-1">{pair.solTitle}</p>
                              <p className="carbon-helper-text-01 text-[#525252]">{pair.solDesc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Server Suite Section */}
              <section id="suite" className="py-20 border-b border-[#e0e0e0]">
                <div className="max-w-5xl mx-auto px-6">
                  <span className="carbon-label-01 text-[#f97316] uppercase tracking-wide mb-3 block">Our Services</span>
                  <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">
                    Server Continuity Suite
                  </h2>
                  <p className="carbon-body-01 text-[#525252] mb-8">
                    Four services designed to capture value at every point of your server lifecycle-
                    from uncertainty to continuity.
                  </p>

                  {/* Flip Cards Grid */}
                  <div className="grid md:grid-cols-2 gap-6" style={{ perspective: '1000px' }}>
                    
                    {/* ServerAudit™ */}
                    <div className="group h-[320px] cursor-pointer" style={{ perspective: '1000px' }}>
                      <div className="relative w-full h-full transition-transform duration-500 preserve-3d group-hover:[transform:rotateY(180deg)]">
                        {/* Front */}
                        <div className="absolute inset-0 backface-hidden bg-white border-2 border-[#0f62fe] p-6 flex flex-col">
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-16 h-16 bg-[#e5f6ff] flex items-center justify-center">
                              <View className="w-8 h-8 text-[#0f62fe]" />
                            </div>
                            <span className="px-3 py-1 bg-[#0f62fe] text-white text-xs font-semibold">FREE</span>
                          </div>
                          <h3 className="text-2xl font-semibold text-gray-900 mb-2">ServerAudit™</h3>
                          <p className="text-lg text-[#0f62fe] font-medium mb-3">The Trusted Advisor Entry Point</p>
                          <p className="text-gray-500 text-sm flex-1">A 1-3 day data-driven assessment that answers: "Should we refresh these servers-or can we safely extend?"</p>
                          <div className="mt-4 text-xs text-[#0f62fe] font-medium uppercase tracking-wider flex items-center gap-2">
                            Hover to explore <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                        {/* Back */}
                        <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] bg-[#0f62fe] text-white p-6 flex flex-col">
                          <h3 className="text-xl font-semibold mb-3">ServerAudit™</h3>
                          <p className="text-sm mb-4 opacity-90">
                            <strong>The Trusted Advisor Entry Point.</strong> A 1-3 day data-driven assessment 
                            that answers: "Should we refresh these servers-or can we safely extend?" 
                            Replaces fear-based decisions with evidence-based strategy.
                          </p>
                          <ul className="space-y-2 text-sm flex-1">
                            <li className="flex items-start gap-2"><span className="text-[#78a9ff]">•</span> Health diagnostics: firmware, OS, hardware</li>
                            <li className="flex items-start gap-2"><span className="text-[#78a9ff]">•</span> Patch gap analysis and CVE exposure</li>
                            <li className="flex items-start gap-2"><span className="text-[#78a9ff]">•</span> Refresh vs. extend recommendation</li>
                            <li className="flex items-start gap-2"><span className="text-[#78a9ff]">•</span> No obligation, no sales pressure</li>
                          </ul>
                          <div className="mt-4 pt-4 border-t border-[#4589ff]">
                            <span className="text-2xl font-bold">FREE</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ServerSure™ */}
                    <div className="group h-[320px] cursor-pointer" style={{ perspective: '1000px' }}>
                      <div className="relative w-full h-full transition-transform duration-500 preserve-3d group-hover:[transform:rotateY(180deg)]">
                        {/* Front */}
                        <div className="absolute inset-0 backface-hidden bg-white border-2 border-[#198038] p-6 flex flex-col">
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-16 h-16 bg-[#ddefe5] flex items-center justify-center">
                              <Activity className="w-8 h-8 text-[#198038]" />
                            </div>
                            <span className="px-3 py-1 bg-[#198038] text-white text-xs font-semibold">PKR 45K/month</span>
                          </div>
                          <h3 className="text-2xl font-semibold text-gray-900 mb-2">ServerSure™</h3>
                          <p className="text-lg text-[#198038] font-medium mb-3">The Volume Engine</p>
                          <p className="text-gray-500 text-sm flex-1">Low-friction, predictable support for non-critical servers. Move from "break-fix chaos" to "managed utility".</p>
                          <div className="mt-4 text-xs text-[#198038] font-medium uppercase tracking-wider flex items-center gap-2">
                            Hover to explore <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                        {/* Back */}
                        <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] bg-[#198038] text-white p-6 flex flex-col">
                          <h3 className="text-xl font-semibold mb-3">ServerSure™</h3>
                          <p className="text-sm mb-4 opacity-90">
                            <strong>The Volume Engine.</strong> Low-friction, predictable support for 
                            non-critical servers. Move from "break-fix chaos" to "managed utility" 
                            with flat monthly OpEx.
                          </p>
                          <ul className="space-y-2 text-sm flex-1">
                            <li className="flex items-start gap-2"><span className="text-[#6fdc8c]">•</span> 24/7 remote monitoring with health sensors</li>
                            <li className="flex items-start gap-2"><span className="text-[#6fdc8c]">•</span> 9-5 PKT support during business hours</li>
                            <li className="flex items-start gap-2"><span className="text-[#6fdc8c]">•</span> Managed patching and security updates</li>
                            <li className="flex items-start gap-2"><span className="text-[#6fdc8c]">•</span> Monthly health summary reports</li>
                          </ul>
                          <div className="mt-4 pt-4 border-t border-[#42be65]">
                            <span className="text-2xl font-bold">PKR 45K/month</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ServerLife Extend™ */}
                    <div className="group h-[320px] cursor-pointer" style={{ perspective: '1000px' }}>
                      <div className="relative w-full h-full transition-transform duration-500 preserve-3d group-hover:[transform:rotateY(180deg)]">
                        {/* Front */}
                        <div className="absolute inset-0 backface-hidden bg-white border-2 border-[#8a3ffc] p-6 flex flex-col">
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-16 h-16 bg-[#f0e6ff] flex items-center justify-center">
                              <Calendar className="w-8 h-8 text-[#8a3ffc]" />
                            </div>
                            <span className="px-3 py-1 bg-[#8a3ffc] text-white text-xs font-semibold">Custom Quote</span>
                          </div>
                          <h3 className="text-2xl font-semibold text-gray-900 mb-2">ServerLife Extend™</h3>
                          <p className="text-lg text-[#8a3ffc] font-medium mb-3">Mission-Critical Continuity</p>
                          <p className="text-gray-500 text-sm flex-1">Enterprise-grade support for out-of-warranty mission-critical systems. Defer CapEx. Extend server life.</p>
                          <div className="mt-4 text-xs text-[#8a3ffc] font-medium uppercase tracking-wider flex items-center gap-2">
                            Hover to explore <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                        {/* Back */}
                        <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] bg-[#8a3ffc] text-white p-6 flex flex-col">
                          <h3 className="text-xl font-semibold mb-3">ServerLife Extend™</h3>
                          <p className="text-sm mb-4 opacity-90">
                            <strong>Mission-Critical Continuity.</strong> Enterprise-grade support for 
                            out-of-warranty mission-critical systems. Defer CapEx. Extend server life. 
                            Without extending risk.
                          </p>
                          <ul className="space-y-2 text-sm flex-1">
                            <li className="flex items-start gap-2"><span className="text-[#d4bbff]">•</span> Same-day spare parts availability</li>
                            <li className="flex items-start gap-2"><span className="text-[#d4bbff]">•</span> Shift-aligned engineer response</li>
                            <li className="flex items-start gap-2"><span className="text-[#d4bbff]">•</span> Firmware and security patching</li>
                            <li className="flex items-start gap-2"><span className="text-[#d4bbff]">•</span> 99.95% uptime SLA</li>
                          </ul>
                          <div className="mt-4 pt-4 border-t border-[#a78bfa]">
                            <span className="text-xl font-bold">Custom Quote</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ModServe™ */}
                    <div className="group h-[320px] cursor-pointer" style={{ perspective: '1000px' }}>
                      <div className="relative w-full h-full transition-transform duration-500 preserve-3d group-hover:[transform:rotateY(180deg)]">
                        {/* Front */}
                        <div className="absolute inset-0 backface-hidden bg-white border-2 border-[#f97316] p-6 flex flex-col">
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-16 h-16 bg-[#fff2e5] flex items-center justify-center">
                              <Tools className="w-8 h-8 text-[#f97316]" />
                            </div>
                            <span className="px-3 py-1 bg-[#f97316] text-white text-xs font-semibold">PKR 250K–600K/server</span>
                          </div>
                          <h3 className="text-2xl font-semibold text-gray-900 mb-2">ModServe™</h3>
                          <p className="text-lg text-[#f97316] font-medium mb-3">Zero-Downtime Deployment</p>
                          <p className="text-gray-500 text-sm flex-1">From procurement to go-live, we ensure your new hardware works from Day 1. Hardware + staging + migration.</p>
                          <div className="mt-4 text-xs text-[#f97316] font-medium uppercase tracking-wider flex items-center gap-2">
                            Hover to explore <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                        {/* Back */}
                        <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] bg-[#f97316] text-white p-6 flex flex-col">
                          <h3 className="text-xl font-semibold mb-3">ModServe™</h3>
                          <p className="text-sm mb-4 opacity-90">
                            <strong>Zero-Downtime Deployment.</strong> From procurement to go-live, 
                            we ensure your new hardware works from Day 1. Hardware + staging + 
                            migration + validation-all in one outcome.
                          </p>
                          <ul className="space-y-2 text-sm flex-1">
                            <li className="flex items-start gap-2"><span className="text-[#ffcc99]">•</span> Hardware sourcing (Dell, HPE, Huawei)</li>
                            <li className="flex items-start gap-2"><span className="text-[#ffcc99]">•</span> Pre-deployment staging and config</li>
                            <li className="flex items-start gap-2"><span className="text-[#ffcc99]">•</span> Zero-downtime migration</li>
                            <li className="flex items-start gap-2"><span className="text-[#ffcc99]">•</span> Day-1 managed support handover</li>
                          </ul>
                          <div className="mt-4 pt-4 border-t border-[#ffb380]">
                            <span className="text-xl font-bold">PKR 250K–600K/server</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                
                {/* CSS for 3D flip */}
                <style>{`
                  .preserve-3d {
                    transform-style: preserve-3d;
                  }
                  .backface-hidden {
                    backface-visibility: hidden;
                    -webkit-backface-visibility: hidden;
                  }
                `}</style>

                {/* Interactive Intake Form - Carbon Dark Theme */}
                <div className="max-w-5xl mx-auto px-6 mt-12">
                  <div className="text-center mb-8">
                    <span className="carbon-label-01 text-[#f97316] uppercase tracking-wide mb-3 block">Not sure which is the right service for your infrastructure?</span>
                    <h3 className="carbon-fluid-heading-04 text-[var(--cds-text-primary)]">Let Harris match you with the right service plan</h3>
                  </div>
                  <div className="bg-[#161616] text-white p-8 md:p-12 border border-[#393939]">
                    {/* Header with Agent */}
                    <div className="flex flex-col md:flex-row items-start gap-6 mb-10">
                      {/* Agent Image */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#f97316] p-0.5">
                            <img 
                              src="/team/harris_head.jpg" 
                              alt="Harris - Your Server Support Specialist" 
                              className="w-full h-full object-cover rounded-full"
                            />
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-[#161616] flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      {/* Header Content */}
                      <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f97316]/10 border border-[#f97316]/30 text-[#f97316] text-xs carbon-label-01 uppercase tracking-wider mb-3">
                          Interactive Service Matcher
                        </div>
                        <p className="carbon-fluid-heading-03 text-white max-w-2xl">Hi, I'm Harris, your infrastructure specialist. <span className="text-[#f97316]">Answer 3 quick questions and I'll match you with the ideal support plan for your servers.</span></p>
                      </div>
                    </div>

                    {/* Progress Bar - Carbon Style */}
                    <div className="mb-10">
                      <div className="flex items-center justify-between max-w-lg mx-auto relative">
                        {/* Background Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#393939] -translate-y-1/2"></div>
                        {/* Progress Fill */}
                        <div className={`absolute top-1/2 left-0 h-0.5 bg-[#f97316] -translate-y-1/2 transition-all duration-500 ${intakeAnswers.budget ? 'w-full' : intakeAnswers.criticality ? 'w-[66%]' : intakeAnswers.situation ? 'w-[33%]' : 'w-0'}`}></div>
                        
                        {/* Step 1 */}
                        <div className="relative z-10 flex flex-col items-center">
                          <div className={`w-8 h-8 flex items-center justify-center text-sm font-semibold transition-all duration-300 ${intakeAnswers.situation ? 'bg-[#f97316] text-white' : 'bg-[#262626] border border-[#525252] text-[#a8a8a8]'}`}>
                            {intakeAnswers.situation ? <CheckmarkFilled className="w-4 h-4" /> : '1'}
                          </div>
                        </div>
                        
                        {/* Step 2 */}
                        <div className="relative z-10 flex flex-col items-center">
                          <div className={`w-8 h-8 flex items-center justify-center text-sm font-semibold transition-all duration-300 ${intakeAnswers.criticality ? 'bg-[#f97316] text-white' : intakeAnswers.situation ? 'bg-[#161616] border-2 border-[#f97316] text-[#f97316]' : 'bg-[#262626] border border-[#525252] text-[#a8a8a8]'}`}>
                            {intakeAnswers.criticality ? <CheckmarkFilled className="w-4 h-4" /> : '2'}
                          </div>
                        </div>
                        
                        {/* Step 3 */}
                        <div className="relative z-10 flex flex-col items-center">
                          <div className={`w-8 h-8 flex items-center justify-center text-sm font-semibold transition-all duration-300 ${intakeAnswers.budget ? 'bg-[#f97316] text-white' : intakeAnswers.criticality ? 'bg-[#161616] border-2 border-[#f97316] text-[#f97316]' : 'bg-[#262626] border border-[#525252] text-[#a8a8a8]'}`}>
                            {intakeAnswers.budget ? <CheckmarkFilled className="w-4 h-4" /> : '3'}
                          </div>
                        </div>
                      </div>
                      {/* Step Labels */}
                      <div className="flex justify-between max-w-lg mx-auto mt-2">
                        <span className={`carbon-helper-text-01 ${intakeAnswers.situation ? 'text-[#f97316]' : 'text-[#6f6f6f]'}`}>Server Situation</span>
                        <span className={`carbon-helper-text-01 ${intakeAnswers.criticality ? 'text-[#f97316]' : 'text-[#6f6f6f]'}`}>Criticality</span>
                        <span className={`carbon-helper-text-01 ${intakeAnswers.budget ? 'text-[#f97316]' : 'text-[#6f6f6f]'}`}>Budget</span>
                      </div>
                    </div>

                    {/* Question 1 */}
                    <div className="mb-10">
                      <div className="flex items-start gap-3 mb-4">
                        <span className="w-6 h-6 bg-[#f97316] flex items-center justify-center text-xs font-bold mt-0.5">1</span>
                        <div>
                          <p className="carbon-heading-02 text-white mb-1">What's your current server situation?</p>
                          <p className="carbon-body-01 text-[#a8a8a8]">Choose the option that best describes your infrastructure status</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[
                          { id: 'new', label: 'Planning new servers', icon: Tools },
                          { id: 'running', label: 'Running fine, but aging', icon: Activity },
                          { id: 'expired', label: 'Warranty expired', icon: Calendar },
                          { id: 'unsure', label: 'Not sure of status', icon: View },
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            onClick={() => setIntakeAnswers({...intakeAnswers, situation: opt.id})}
                            className={`p-4 text-left border transition-all duration-200 ${
                              intakeAnswers.situation === opt.id
                                ? 'bg-[#f97316] border-[#f97316] text-white'
                                : 'bg-[#262626] border-[#393939] text-[#e0e0e0] hover:border-[#f97316] hover:bg-[#f97316]/10'
                            }`}
                          >
                            <opt.icon className={`w-5 h-5 mb-2 ${intakeAnswers.situation === opt.id ? 'text-white' : 'text-[#f97316]'}`} />
                            <span className="carbon-body-01 block">{opt.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Question 2 */}
                    <div className="mb-10">
                      <div className="flex items-start gap-3 mb-4">
                        <span className="w-6 h-6 bg-[#f97316] flex items-center justify-center text-xs font-bold mt-0.5">2</span>
                        <div>
                          <p className="carbon-heading-02 text-white mb-1">How critical is downtime for your business?</p>
                          <p className="carbon-body-01 text-[#a8a8a8]">This helps us determine the right SLA and response time</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { id: 'zero', label: 'Zero tolerance', desc: 'Revenue stops immediately' },
                          { id: 'some', label: 'Some acceptable', desc: 'Internal tools affected' },
                          { id: 'minimal', label: 'Minimal impact', desc: 'Non-production systems' },
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            onClick={() => setIntakeAnswers({...intakeAnswers, criticality: opt.id})}
                            className={`p-4 text-left border transition-all duration-200 ${
                              intakeAnswers.criticality === opt.id
                                ? 'bg-[#f97316] border-[#f97316] text-white'
                                : 'bg-[#262626] border-[#393939] text-[#e0e0e0] hover:border-[#f97316] hover:bg-[#f97316]/10'
                            }`}
                          >
                            <span className="carbon-heading-01 block mb-1">{opt.label}</span>
                            <span className={`carbon-helper-text-01 ${intakeAnswers.criticality === opt.id ? 'text-white/80' : 'text-[#8d8d8d]'}`}>{opt.desc}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Question 3 */}
                    <div className="mb-10">
                      <div className="flex items-start gap-3 mb-4">
                        <span className="w-6 h-6 bg-[#f97316] flex items-center justify-center text-xs font-bold mt-0.5">3</span>
                        <div>
                          <p className="carbon-heading-02 text-white mb-1">What's your preferred payment model?</p>
                          <p className="carbon-body-01 text-[#a8a8a8]">Select the budget approach that fits your financial planning</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { id: 'opex', label: 'Monthly OpEx', desc: 'Predictable monthly spend' },
                          { id: 'capex', label: 'One-time CapEx', desc: 'Project-based budget' },
                          { id: 'free', label: 'Start free', desc: 'Assessment first' },
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            onClick={() => setIntakeAnswers({...intakeAnswers, budget: opt.id})}
                            className={`p-4 text-left border transition-all duration-200 ${
                              intakeAnswers.budget === opt.id
                                ? 'bg-[#f97316] border-[#f97316] text-white'
                                : 'bg-[#262626] border-[#393939] text-[#e0e0e0] hover:border-[#f97316] hover:bg-[#f97316]/10'
                            }`}
                          >
                            <span className="carbon-heading-01 block mb-1">{opt.label}</span>
                            <span className={`carbon-helper-text-01 ${intakeAnswers.budget === opt.id ? 'text-white/80' : 'text-[#8d8d8d]'}`}>{opt.desc}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Result - Carbon Dark Theme */}
                    {intakeAnswers.situation && intakeAnswers.criticality && intakeAnswers.budget && (
                      <div className="bg-[#f4f4f4] text-[#161616] p-8 border-l-4 border-[#f97316] animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-start gap-5">
                          <div className="w-14 h-14 bg-[#f97316] flex items-center justify-center flex-shrink-0">
                            <CheckmarkFilled className="w-7 h-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="carbon-label-01 text-[#f97316] uppercase tracking-wider mb-1">Your Matched Solution</p>
                            <h4 className="carbon-fluid-heading-04 mb-3 text-[#161616]">
                              {intakeAnswers.situation === 'new' ? 'ModServe™' :
                               intakeAnswers.situation === 'unsure' ? 'ServerAudit™' :
                               intakeAnswers.criticality === 'zero' ? 'ServerLife Extend™' :
                               intakeAnswers.budget === 'opex' ? 'ServerSure™' :
                               'ServerLife Extend™'}
                            </h4>
                            <p className="carbon-body-01 text-[#525252] mb-6">
                              {intakeAnswers.situation === 'new' 
                                ? 'You need new hardware deployed with zero downtime. We handle procurement, staging, migration, and handover.'
                                : intakeAnswers.situation === 'unsure'
                                ? 'Start with our free assessment. Get clarity on your server health before making any decisions.'
                                : intakeAnswers.criticality === 'zero'
                                ? 'Mission-critical systems need enterprise-grade support. Same-day parts, shift-aligned engineers, 99.95% SLA.'
                                : intakeAnswers.budget === 'opex'
                                ? 'Predictable monthly support for non-critical servers. Move from break-fix chaos to managed utility.'
                                : 'Extend the life of your existing servers with custom support that defers costly refresh cycles.'}
                            </p>
                            <div className="flex flex-wrap gap-3">
                              <a 
                                href="#engagement" 
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#f97316] text-white carbon-button-01 hover:bg-[#ea580c] transition-colors"
                              >
                                Get Your Custom Quote <ArrowRight className="w-4 h-4" />
                              </a>
                              <button 
                                onClick={() => setIntakeAnswers({})}
                                className="inline-flex items-center gap-2 px-6 py-3 border border-[#161616] text-[#161616] carbon-button-01 hover:bg-[#161616] hover:text-white transition-colors"
                              >
                                <Restart className="w-4 h-4" /> Start Over
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </section>

              {/* Facility Integration Section */}
              <section id="integration" className="py-20 border-b border-[#e0e0e0]">
                <div className="max-w-5xl mx-auto px-6">
                  <span className="carbon-label-01 text-[#f97316] uppercase tracking-wide mb-3 block">Full-Stack Accountability</span>
                  <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">
                    Server Environment: Why Facility Validation Matters
                  </h2>
                  <p className="carbon-body-01 text-[#525252] mb-8">
                    Server hardware is only as reliable as the facility it sits in. Whether you run Dell, HPE, Huawei, or Lenovo, 
                    the leading cause of unplanned downtime is the same: cooling failure, power instability, dust infiltration, 
                    and unmonitored thermal conditions.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {[
                      { from: 'Cooling stability', to: 'Every server needs 18–24°C inlet air. If your CRAC fails, your hardware fails with it-regardless of manufacturer.' },
                      { from: 'Power quality', to: 'Zero-downtime migrations, firmware updates, and routine reboots all require stable power during cutover.' },
                      { from: 'Dust control', to: 'Industrial dust increases server fan failure rates by ~17%. IP54 cabinets and sealed plenums protect any rack.' },
                      { from: 'Thermal monitoring', to: 'Rack inlet sensors catch hotspots before they trigger thermal shutdown-across Dell, HPE, Huawei, and Lenovo.' }
                    ].map((item) => (
                      <div key={item.from} className="p-5 bg-white border border-[#e0e0e0] flex items-center gap-4">
                        <div className="w-10 h-10 bg-[#24a148]/10 flex items-center justify-center flex-shrink-0">
                          <ArrowRight className="w-5 h-5 text-[#24a148]" />
                        </div>
                        <div>
                          <p className="carbon-label-01 text-[#525252] uppercase">{item.from}</p>
                          <p className="carbon-body-01 text-[var(--cds-text-primary)]">{item.to}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Stat Banner */}
                  <div className="p-6 bg-[#0f62fe] text-white text-center mb-8">
                    <p className="carbon-fluid-heading-04 mb-2">31%</p>
                    <p className="carbon-body-01 text-white/90">of compute-layer SLA breaches originate in cooling and power-not the server hardware itself.</p>
                    <p className="carbon-helper-text-01 text-white/70 mt-2">(Uptime Institute 2025, pilot validation)</p>
                  </div>

                  {/* CTA Card to Data Centre Services */}
                  <div className="p-6 bg-white border border-[#e0e0e0]">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="w-16 h-16 bg-[#e5f6ff] flex items-center justify-center flex-shrink-0">
                        <Building className="w-8 h-8 text-[#0f62fe]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">Explore Data Centre Continuity Services</h3>
                        <p className="carbon-body-01 text-[#525252] mb-1">
                          From utility meter to server BIOS: monsoon-hardened power, cooling, physical infrastructure, and monitoring.
                        </p>
                        <p className="carbon-helper-text-01 text-[#525252]">
                          SLA-backed continuity for Pakistan's climate. Starting at PKR 165K/month.
                        </p>
                      </div>
                      <a 
                        href="/#/services/datacenter"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f62fe] text-white font-semibold hover:bg-[#0353e9] transition-colors flex-shrink-0"
                      >
                        View Facility Services
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical Depth Section */}
              <section id="technical" className="py-20 border-b border-[#e0e0e0]">
                <div className="max-w-5xl mx-auto px-6">
                  <span className="carbon-label-01 text-[#f97316] uppercase tracking-wide mb-3 block">Capabilities</span>
                  <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">
                    Technical Depth
                  </h2>
                  <p className="carbon-body-01 text-[#525252] mb-8">
                    Backend expertise that ensures your server environment scales with your business demands.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { icon: Tools, title: 'Same-Day Spare Availability', desc: 'Lahore-based spare inventory for Dell, HPE, and Huawei servers. Critical components available within 4 hours-not 4 days from Dubai.', tags: ['Drive Controllers', 'Power Supplies', 'Memory', 'Network Cards'] },
                      { icon: Activity, title: 'Shift-Aligned Engineering', desc: 'Engineers available during your peak operational hours-not just during their convenience. Morning-shift critical work, evening-shift maintenance windows.' },
                      { icon: CheckmarkFilled, title: 'Firmware & Security Lifecycle', desc: 'Comprehensive patch validation and deployment. Not just OS updates-BIOS, RAID controllers, network firmware, and management interfaces. Full CVE tracking and compliance documentation.' }
                    ].map((item) => (
                      <div key={item.title} className="p-6 bg-white border border-[#e0e0e0]">
                        <div className="w-12 h-12 bg-orange-100 flex items-center justify-center mb-4">
                          <item.icon className="w-6 h-6 text-orange-600" />
                        </div>
                        <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-3">{item.title}</h3>
                        <p className="carbon-body-01 text-[#525252] mb-3">{item.desc}</p>
                        {item.tags && (
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span key={tag} className="px-2 py-1 bg-[#f4f4f4] text-[#525252] carbon-helper-text-01">{tag}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Visual Break */}
                  <div className="mt-12 h-48 bg-gradient-to-r from-[#fff3e0] to-[#ffe0b2] border border-[#f97316]/20 flex items-center justify-center p-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-8 mb-4">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-white border border-[#f97316]/30 flex items-center justify-center mx-auto mb-2">
                            <Building className="w-8 h-8 text-[#f97316]" />
                          </div>
                          <p className="carbon-helper-text-01 text-[#bf360c]">Lahore NOC</p>
                        </div>
                        <ArrowRight className="w-6 h-6 text-[#f97316]" />
                        <div className="text-center">
                          <div className="w-16 h-16 bg-white border border-[#f97316]/30 flex items-center justify-center mx-auto mb-2">
                            <DataBase className="w-8 h-8 text-[#f97316]" />
                          </div>
                          <p className="carbon-helper-text-01 text-[#bf360c]">Spare Inventory</p>
                        </div>
                        <ArrowRight className="w-6 h-6 text-[#f97316]" />
                        <div className="text-center">
                          <div className="w-16 h-16 bg-white border border-[#f97316]/30 flex items-center justify-center mx-auto mb-2">
                            <Tools className="w-8 h-8 text-[#f97316]" />
                          </div>
                          <p className="carbon-helper-text-01 text-[#bf360c]">On-Site Fix</p>
                        </div>
                      </div>
                      <p className="carbon-label-01 text-[#e65100] font-semibold">Insert a diagram showing Lahore NOC → spare inventory → on-site engineer response chain</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Comparison Section */}
              <section id="comparison" className="py-20 border-b border-[#e0e0e0]">
                <div className="max-w-5xl mx-auto px-6">
                  <span className="carbon-label-01 text-[#f97316] uppercase tracking-wide mb-3 block">Why Perception IT</span>
                  <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">
                    Perception IT vs. Alternatives
                  </h2>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-[#e0e0e0]">
                          <th className="text-left py-3 px-4 carbon-label-01 text-[var(--cds-text-primary)]">Capability</th>
                          <th className="text-center py-3 px-4 carbon-label-01 text-[#f97316]">Perception IT</th>
                          <th className="text-center py-3 px-4 carbon-label-01 text-gray-500">OEM</th>
                          <th className="text-center py-3 px-4 carbon-label-01 text-gray-500">Generic MSP</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { cap: 'Local Spare Inventory', pit: '✓ Same day', oem: '✗ 3-5 days', msp: '✗ Order on demand' },
                          { cap: 'Warranty Extension', pit: '✓ Beyond Year 5', oem: '✗ Ends Year 3', msp: '✗ Limited' },
                          { cap: 'Shift-Aligned Support', pit: '✓ Your hours', oem: '✗ Their hours', msp: '✗ Ticket logging only' },
                          { cap: 'Firmware Lifecycle', pit: '✓ Comprehensive', oem: '✓ While supported', msp: '✗ OS only' },
                          { cap: 'Hardware Agnostic', pit: '✓ Dell/HPE/Huawei', oem: '✗ Their brand only', msp: '✓ (limited depth)' },
                          { cap: 'Accountability', pit: '✓ One partner', oem: '✗ +MSP gaps', msp: '✗ No hardware ownership' }
                        ].map((row, i) => (
                          <tr key={i} className="border-b border-gray-100">
                            <td className="py-3 px-4 text-gray-900">{row.cap}</td>
                            <td className="py-3 px-4 text-center text-[#f97316] font-medium">{row.pit}</td>
                            <td className="py-3 px-4 text-center text-gray-400">{row.oem}</td>
                            <td className="py-3 px-4 text-center text-gray-400">{row.msp}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-8 p-6 bg-[#f4f4f4] border-l-4 border-[#f97316]">
                    <p className="carbon-body-01 text-[#161616]">
                      <strong>The difference:</strong> OEMs abandon hardware after Year 3. Generic MSPs stop at the OS. We own the full stack-hardware, firmware, and accountability.
                    </p>
                  </div>
                </div>
              </section>


              {/* Case Studies Section */}
              <section id="cases" className="py-20 border-b border-[#e0e0e0] bg-white">
                <div className="max-w-5xl mx-auto px-6">
                  <span className="carbon-label-01 text-[#f97316] uppercase tracking-wide mb-3 block">Proof Points</span>
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)]">Client Results</h2>
                    <p className="carbon-body-01 text-[#525252]">
                      {currentCaseStudy + 1} of {caseStudies.length}
                    </p>
                  </div>

                  {/* Case Study Card */}
                  <div className="bg-white border border-[#e0e0e0] overflow-hidden">
                    {caseStudies.map((study, index) => (
                      index === currentCaseStudy && (
                        <div key={study.id} className="grid grid-cols-12 gap-0">
                          {/* Left: Image (4 cols) */}
                          <div className="col-span-12 md:col-span-4 relative bg-gray-900 min-h-[300px]">
                            {/* Company Logo - Top Left */}
                            <div className="absolute top-4 left-4 z-10">
                              {study.logo ? (
                                <div className="w-20 h-20 bg-white rounded-lg shadow-lg flex items-center justify-center p-2">
                                  <img 
                                    src={study.logo} 
                                    alt={`${study.companyName} logo`}
                                    className="max-w-full max-h-full object-contain"
                                  />
                                </div>
                              ) : (
                                <div className="w-20 h-20 bg-white rounded-lg shadow-lg flex items-center justify-center p-2">
                                  <span className="text-xs text-gray-400">LOGO</span>
                                </div>
                              )}
                            </div>
                            
                            {/* Main Image */}
                            {study.image ? (
                              <div className="absolute inset-0">
                                <img 
                                  src={study.image} 
                                  alt={study.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ) : (
                              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                                <div className="text-center p-6">
                                  <Building className="w-16 h-16 text-gray-600 mx-auto mb-3" />
                                  <span className="text-gray-500 text-sm">Company/Industry Photo</span>
                                </div>
                              </div>
                            )}
                            
                          </div>
                          
                          {/* Middle: Content (5 cols) - Dark BG */}
                          <div className="col-span-12 md:col-span-5 p-6 md:p-8 flex flex-col justify-between border-r border-gray-700 bg-black text-white">
                            <div>
                              {/* Tags */}
                              <div className="flex flex-wrap gap-2 mb-4">
                                {study.tags.map((tag) => (
                                  <span 
                                    key={tag.text}
                                    className="px-2 py-1 text-xs font-medium rounded-sm border"
                                    style={{ 
                                      backgroundColor: 'transparent',
                                      borderColor: tag.color === 'blue' ? '#0066cc' : 
                                                   tag.color === 'green' ? '#198038' :
                                                   tag.color === 'orange' ? '#f97316' :
                                                   '#6929c4',
                                      color: tag.color === 'blue' ? '#60a5fa' : 
                                             tag.color === 'green' ? '#4ade80' :
                                             tag.color === 'orange' ? '#f97316' :
                                             '#a78bfa'
                                    }}
                                  >
                                    {tag.text}
                                  </span>
                                ))}
                              </div>
                              
                              {/* Title */}
                              <div className="mb-4">
                                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Client / Service</p>
                                <p className="text-lg font-semibold text-white">{study.companyName}</p>
                                {study.solutionName && study.solutionContext && (
                                  <a 
                                    href={study.caseStudyLink || '#contact'}
                                    className="text-sm text-[#f97316] mt-1 inline-flex items-center gap-1 hover:underline group"
                                  >
                                    Deployed {study.solutionName} to {study.solutionContext}
                                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                  </a>
                                )}
                              </div>
                              
                              {/* Description */}
                              <p className="text-gray-300 mb-6">
                                {study.description}
                              </p>
                              
                              {/* Quote if available */}
                              {study.quote && (
                                <div className="bg-gray-900 p-4 border-l-4 border-[#f97316] mb-4">
                                  <p className="text-gray-300 italic text-sm mb-2">"{study.quote.text}"</p>
                                  <p className="text-xs text-gray-500">- {study.quote.author}</p>
                                </div>
                              )}
                            </div>
                            
                            {/* CTA */}
                            {study.caseStudyLink ? (
                              <a
                                href={study.caseStudyLink}
                                className="inline-flex items-center gap-2 text-[#f97316] font-medium hover:gap-3 transition-all"
                              >
                                Read full case study
                                <ArrowRight className="w-4 h-4" />
                              </a>
                            ) : (
                              <a
                                href="#contact"
                                className="inline-flex items-center gap-2 text-[#f97316] font-medium hover:gap-3 transition-all"
                              >
                                Read full case study
                                <ArrowRight className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                          
                          {/* Right: Stats (3 cols) - Dark BG */}
                          <div className="col-span-12 md:col-span-3 bg-black p-6 md:p-8">
                            <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-5">
                              Key Results
                            </p>
                            
                            <div className="space-y-5">
                              {study.stats.map((stat, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                  <div 
                                    className="w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-sm"
                                    style={{ backgroundColor: `${stat.color}15` }}
                                  >
                                    <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
                                  </div>
                                  <div>
                                    <div className="text-lg font-bold" style={{ color: stat.color }}>
                                      {stat.value}
                                    </div>
                                    <div className="text-xs text-gray-400">{stat.label}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                            
                            {/* CTA under stats */}
                            <div className="mt-8 pt-6 border-t border-gray-800">
                              <a
                                href="#contact"
                                
                                className="block w-full text-center px-4 py-3 bg-[#f97316] text-white text-sm font-semibold hover:bg-[#ea580c] transition-colors"
                              >
                                Get Similar Results
                              </a>
                              <p className="text-xs text-gray-500 text-center mt-3">
                                Free ServerAudit™ assessment
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                    ))}
                  </div>
                  
                  {/* Pagination Controls */}
                  <div className="flex items-center justify-center gap-3 mt-8">
                    <button
                      onClick={prevCaseStudy}
                      className="w-10 h-10 border border-[#e0e0e0] flex items-center justify-center hover:border-[#f97316] hover:bg-[#f4f4f4] transition-all"
                      aria-label="Previous case study"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-500 rotate-180" />
                    </button>
                    
                    <div className="flex items-center gap-2">
                      {caseStudies.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentCaseStudy(idx)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            idx === currentCaseStudy ? 'bg-[#f97316]' : 'bg-gray-300'
                          }`}
                          aria-label={`Go to case study ${idx + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={nextCaseStudy}
                      className="w-10 h-10 border border-[#e0e0e0] flex items-center justify-center hover:border-[#f97316] hover:bg-[#f4f4f4] transition-all"
                      aria-label="Next case study"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>
                </div>
              </section>

              {/* Engagement Section */}
              <section id="engagement" className="py-20">
                <div className="max-w-5xl mx-auto px-6">
                  <span className="carbon-label-01 text-[#f97316] uppercase tracking-wide mb-3 block">Get Started</span>
                  <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">
                    Engagement Model
                  </h2>
                  <p className="carbon-body-01 text-[#525252] mb-8">
                    Start low-friction, stay full-lifecycle. Every engagement designed to 
                    evolve naturally into the next stage.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mb-10">
                    {[
                      { step: '01', title: 'Free ServerAudit™', desc: 'Health snapshot of 3 servers. No obligation. Data-driven clarity.', color: '#f97316' },
                      { step: '02', title: 'Right-Fit Support', desc: 'ServerSure™ for non-critical. ServerLife Extend™ for mission-critical.', color: '#f97316' },
                      { step: '03', title: 'Planned Refresh', desc: 'When ready, ModServe™ delivers new hardware with zero downtime.', color: '#f97316' }
                    ].map((item) => (
                      <div key={item.step} className="relative p-6 bg-white border border-[#e0e0e0]">
                        <span className="absolute top-4 right-4 carbon-heading-02" style={{ color: item.color }}>{item.step}</span>
                        <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">{item.title}</h3>
                        <p className="carbon-body-01 text-[#525252]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA Banner */}
                  <div className="p-8 bg-[#f97316] text-center">
                    <h3 className="carbon-fluid-heading-04 text-white mb-4">
                      Start With a Free Server Health Snapshot
                    </h3>
                    <p className="carbon-body-01 text-white/80 mb-6">
                      No obligation. No sales pressure. Just clarity on whether your servers 
                      need refresh-or can safely extend.
                    </p>
                    <a 
                      href="mailto:contact@perception-it.com"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#f97316] font-semibold hover:bg-[#f4f4f4] transition-colors"
                    >
                      Request Free ServerAudit™
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <p className="text-white/60 text-sm mt-4">
                      Response within 4 hours. Lahore-based engineers.
                    </p>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServerContinuity;
