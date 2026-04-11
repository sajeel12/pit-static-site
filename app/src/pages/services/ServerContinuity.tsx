import { useEffect, useState } from 'react';
import '../../styles/carbon-typography.css';
import Footer from '../../sections/Footer';
import Navigation from '../../components/Navigation';
import HeroCubeAnimationOrange from '../../components/HeroCubeAnimationOrange';
import HeroGradientPlanesOrange from '../../components/HeroGradientPlanesOrange';
import {
  ArrowRight, CheckmarkFilled, WarningAlt,
  Tools, Calendar, Activity, Money, View,
  ChevronRight, Building, DataBase
} from '@carbon/icons-react';

const ServerContinuity = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0);
  
  // Case studies data
  const caseStudies = [
    {
      id: 'ibrahim',
      tag: 'Manufacturing',
      tagColor: 'blue',
      title: 'Ibrahim Fibres — ServerLife Extend™ Deployment',
      description: 'Extended life of 7-year-old MES servers with same-day spare availability, eliminating forced PKR 8M refresh and maintaining 99.9% production uptime.',
      stats: [
        { value: 'PKR 8M', label: 'CapEx Deferred', color: '#f97316' },
        { value: '99.9%', label: 'Uptime Maintained', color: '#24a148' },
        { value: '4hrs', label: 'Spare Response', color: '#6929c4' }
      ],
      quote: {
        text: "Perception IT gave us clarity on what was actually at risk. We extended our servers confidently without gambling on production continuity.",
        author: "IT Director, Ibrahim Fibres"
      }
    },
    {
      id: 'lumhs',
      tag: 'Academic',
      tagColor: 'green',
      title: 'LUMS — ServerSure™ for Departmental Systems',
      description: 'Converted break-fix chaos to managed utility across 40+ departmental servers. Predictable PKR 45K/month per server vs. emergency callouts averaging PKR 150K each.',
      stats: [
        { value: '40+', label: 'Servers Managed', color: '#f97316' },
        { value: '70%', label: 'Cost Reduction', color: '#24a148' },
        { value: 'Zero', label: 'Emergency Downtime', color: '#6929c4' }
      ]
    },
    {
      id: 'jazz',
      tag: 'Telecom',
      tagColor: 'purple',
      title: 'Jazz — Multi-Site Infrastructure Continuity',
      description: 'Deployed and manage multi-site infrastructure spanning 3 data centers with zero unplanned downtime in 3 years supporting 60+ million subscribers.',
      stats: [
        { value: '99.99%', label: 'Uptime SLA', color: '#f97316' },
        { value: '3', label: 'Data Centers', color: '#24a148' },
        { value: '60M+', label: 'Subscribers', color: '#6929c4' }
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
    { id: 'overview', label: 'Overview' },
    { id: 'value', label: 'Business Value' },
    { id: 'suite', label: 'Server Suite' },
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
        <HeroCubeAnimationOrange />
        <HeroGradientPlanesOrange />
        
        <div className="relative z-10 cds--css-grid" style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
          <div className="cds--col-span-16 lg:cds--col-span-14 lg:cds--col-start-2">
          
          {/* Breadcrumb */}
          <nav className="relative z-10 flex items-center gap-2 text-xs mb-6" aria-label="Breadcrumb">
            <a href="/" className="text-[#f97316] hover:underline">Home</a>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <a href="/services" className="text-[#f97316] hover:underline">Services</a>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <a href="/services/infrastructure" className="text-[#f97316] hover:underline">Infrastructure</a>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="text-gray-400">Server Continuity Suite</span>
          </nav>

          {/* Mobile Dropdown Navigation */}
          <div className="xl:hidden mb-6">
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
              {/* Eyebrow Label */}
              <span className="inline-block carbon-label-01 text-[#f97316] uppercase tracking-wider mb-3">
                SERVER CONTINUITY
              </span>

              {/* Headline */}
              <h1 className="carbon-fluid-heading-05 text-white mb-6">
                From Uncertainty to Certainty
              </h1>

              {/* Lead Text */}
              <p className="carbon-body-02 text-gray-300 mb-6">
                We provide total visibility, predictable costs, and audit-ready control—whether 
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
                  <h3 className="text-sm font-semibold text-white mb-1">Mission-Critical Support</h3>
                  <p className="carbon-label-01 text-gray-400">High-availability server support with 99.95% uptime SLA for production systems.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4 p-4 border-l-2 border-[#f97316] bg-white/5">
                <div className="w-10 h-10 bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <DataBase className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">Departmental Infrastructure</h3>
                  <p className="carbon-label-01 text-gray-400">Fixed-Rate Server Utility: Predictable management for non-critical infrastructure.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4 p-4 border-l-2 border-[#f97316] bg-white/5">
                <div className="w-10 h-10 bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <Money className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">Investment Protection</h3>
                  <p className="carbon-label-01 text-gray-400">Extend server life 2-3 years safely or plan zero-downtime transition to new hardware.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-4 p-4 border-l-2 border-[#f97316] bg-white/5">
                <div className="w-10 h-10 bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <CheckmarkFilled className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">Zero-Downtime Proven</h3>
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
                className="bg-white border border-gray-200 p-4 flex flex-col gap-3"
              >
                <div className="w-10 h-10 bg-orange-100 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="carbon-label-01 text-[var(--cds-text-primary)] leading-tight mb-1">{item.headline}</p>
                  <p className="text-xs text-gray-500">{item.subtext}</p>
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
            <aside className="hidden xl:block w-64 flex-shrink-0 pl-4">
              <nav className="sticky top-20 pt-8 pb-8 border-r border-gray-200 h-[calc(100vh-5rem)]">
                <ul className="space-y-0.5">
                  {SECTIONS.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left px-4 py-2 text-sm transition-colors border-l-[3px] ${
                          activeSection === item.id
                            ? 'text-gray-900 border-[#f97316] bg-orange-50 carbon-label-01 font-semibold'
                            : 'text-gray-500 border-transparent hover:text-gray-900 hover:bg-gray-50'
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
            <main className="flex-1 min-w-0">
              
              {/* Business Value Section */}
              <section id="value" className="py-16 border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-6">
                  <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">
                    Business Value
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Your servers are the engine of your operations. Uncertainty about refresh timing, 
                    warranty gaps, and break-fix chaos lead to unplanned CapEx, compliance exposure, 
                    and production downtime. We engineer server environments that provide total 
                    visibility, predictable costs, and audit-ready control.
                  </p>

                  {/* Risk Warning */}
                  <div className="mb-8 p-4 border-l-4 border-red-500 bg-red-50">
                    <div className="flex items-start gap-3">
                      <WarningAlt className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="carbon-label-01 text-red-600 mb-1">Critical Risk Factors</p>
                        <p className="text-gray-600 text-sm">
                          Servers beyond 3-5 years face performance degradation, firmware vulnerabilities, 
                          and end-of-support from OEMs. Disconnected accountability between vendors 
                          creates blind spots that surface at 2 AM during peak production.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Value Props */}
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { icon: Activity, title: 'Deferred CapEx', desc: 'Extend server life 2-3 years safely with same-day spare support.' },
                      { icon: Money, title: 'Predictable OpEx', desc: 'Flat monthly rate vs. emergency callout surprises averaging PKR 150K.' },
                      { icon: CheckmarkFilled, title: 'Compliance & Audit', desc: 'Full firmware tracking, patch validation, and documentation.' }
                    ].map((item) => (
                      <div key={item.title} className="p-5 bg-white border border-gray-200">
                        <div className="w-10 h-10 bg-orange-100 flex items-center justify-center mb-4">
                          <item.icon className="w-5 h-5 text-orange-600" />
                        </div>
                        <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Server Suite Section */}
              <section id="suite" className="py-16 border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-6">
                  <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">
                    Server Continuity Suite
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Four services designed to capture value at every point of your server lifecycle—
                    from uncertainty to continuity.
                  </p>

                  <div className="space-y-4">
                    {/* ServerAudit™ */}
                    <div className="p-6 bg-green-50 border border-green-200">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-green-100 flex items-center justify-center flex-shrink-0">
                          <View className="w-8 h-8 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="carbon-heading-02 text-[var(--cds-text-primary)]">ServerAudit™</h3>
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold">FREE</span>
                          </div>
                          <p className="text-gray-600 mb-3">
                            <strong>The Trusted Advisor Entry Point.</strong> A 1-3 day data-driven assessment 
                            that answers: "Should we refresh these servers—or can we safely extend?" 
                            Replaces fear-based decisions with evidence-based strategy.
                          </p>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• Health diagnostics: firmware, OS, hardware</li>
                            <li>• Patch gap analysis and CVE exposure</li>
                            <li>• Refresh vs. extend recommendation</li>
                            <li>• No obligation, no sales pressure</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* ServerSure™ */}
                    <div className="p-6 bg-blue-50 border border-blue-200">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <Activity className="w-8 h-8 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="carbon-heading-02 text-[var(--cds-text-primary)]">ServerSure™</h3>
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold">PKR 45K/month</span>
                          </div>
                          <p className="text-gray-600 mb-3">
                            <strong>The Volume Engine.</strong> Low-friction, predictable support for 
                            non-critical servers. Move from "break-fix chaos" to "managed utility" 
                            with flat monthly OpEx.
                          </p>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• 24/7 remote monitoring with health sensors</li>
                            <li>• 9-5 PKT support during business hours</li>
                            <li>• Managed patching and security updates</li>
                            <li>• Monthly health summary reports</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* ServerLife Extend™ */}
                    <div className="p-6 bg-purple-50 border border-purple-200">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-purple-100 flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-8 h-8 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="carbon-heading-02 text-[var(--cds-text-primary)]">ServerLife Extend™</h3>
                            <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-semibold">Custom Quote</span>
                          </div>
                          <p className="text-gray-600 mb-3">
                            <strong>Mission-Critical Continuity.</strong> Enterprise-grade support for 
                            out-of-warranty mission-critical systems. Defer CapEx. Extend server life. 
                            Without extending risk.
                          </p>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• Same-day spare parts availability</li>
                            <li>• Shift-aligned engineer response</li>
                            <li>• Firmware and security patching</li>
                            <li>• 99.95% uptime SLA</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* ModServe™ */}
                    <div className="p-6 bg-orange-50 border border-orange-200">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-orange-100 flex items-center justify-center flex-shrink-0">
                          <Tools className="w-8 h-8 text-orange-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="carbon-heading-02 text-[var(--cds-text-primary)]">ModServe™</h3>
                            <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold">PKR 250K–600K/server</span>
                          </div>
                          <p className="text-gray-600 mb-3">
                            <strong>Zero-Downtime Deployment.</strong> From procurement to go-live, 
                            we ensure your new hardware works from Day 1. Hardware + staging + 
                            migration + validation—all in one outcome.
                          </p>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• Hardware sourcing (Dell, HPE, Huawei)</li>
                            <li>• Pre-deployment staging and config</li>
                            <li>• Zero-downtime migration</li>
                            <li>• Day-1 managed support handover</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical Depth Section */}
              <section id="technical" className="py-16 border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-6">
                  <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">
                    Technical Depth
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Backend expertise that ensures your server environment scales with your business demands.
                  </p>

                  <div className="space-y-4">
                    <div className="p-6 bg-white border border-gray-200">
                      <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-3">
                        Same-Day Spare Availability
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Lahore-based spare inventory for Dell, HPE, and Huawei servers. 
                        Critical components (drives, power supplies, memory) available within 
                        4 hours—not 4 days from Dubai.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {['Drive Controllers', 'Power Supplies', 'Memory', 'Network Cards'].map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs">{tag}</span>
                        ))}
                      </div>
                    </div>

                    <div className="p-6 bg-white border border-gray-200">
                      <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-3">
                        Shift-Aligned Engineering
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Engineers available during your peak operational hours—not just 
                        during their convenience. Morning-shift critical work, 
                        evening-shift maintenance windows.
                      </p>
                    </div>

                    <div className="p-6 bg-white border border-gray-200">
                      <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-3">
                        Firmware & Security Lifecycle
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Comprehensive patch validation and deployment. Not just OS updates—
                        BIOS, RAID controllers, network firmware, and management interfaces. 
                        Full CVE tracking and compliance documentation.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Comparison Section */}
              <section id="comparison" className="py-16 border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-6">
                  <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">
                    Perception IT vs. Alternatives
                  </h2>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-gray-200">
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
                            <td className="py-3 px-4 text-center text-green-600 font-medium">{row.pit}</td>
                            <td className="py-3 px-4 text-center text-gray-400">{row.oem}</td>
                            <td className="py-3 px-4 text-center text-gray-400">{row.msp}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Case Studies Section */}
              <section id="cases" className="py-16 border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-6">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Case Studies</h2>
                    <span className="text-sm text-gray-500">
                      {currentCaseStudy + 1} of {caseStudies.length}
                    </span>
                  </div>

                  {/* Case Study Content */}
                  <div className="bg-white border border-gray-200 mb-6">
                    {/* Case Study Image & Logo */}
                    <div className="relative h-48 bg-gray-100 border-b border-gray-200">
                      {/* Main Image - Company/Industry Photo */}
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                        <span className="text-gray-400 text-sm">Company/Industry Photo (800x400)</span>
                      </div>
                      {/* Company Logo - Top Right */}
                      <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center border border-gray-200">
                        <span className="text-xs text-gray-400 text-center">Logo</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <span className={`inline-block px-2 py-1 text-xs font-semibold mb-3 ${
                        caseStudies[currentCaseStudy].tagColor === 'blue' ? 'bg-blue-100 text-blue-700' :
                        caseStudies[currentCaseStudy].tagColor === 'green' ? 'bg-green-100 text-green-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>
                        {caseStudies[currentCaseStudy].tag}
                      </span>
                      <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-3">
                        {caseStudies[currentCaseStudy].title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {caseStudies[currentCaseStudy].description}
                      </p>
                      
                      {caseStudies[currentCaseStudy].stats && (
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          {caseStudies[currentCaseStudy].stats.map((stat) => (
                            <div key={stat.label}>
                              <p className="carbon-fluid-heading-04" style={{ color: stat.color }}>{stat.value}</p>
                              <p className="text-xs text-gray-500">{stat.label}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {caseStudies[currentCaseStudy].quote && (
                        <div className="bg-gray-50 p-4 border-l-4 border-[#f97316] mt-4">
                          <p className="text-gray-700 italic mb-2">"{caseStudies[currentCaseStudy].quote.text}"</p>
                          <p className="text-sm text-gray-500">— {caseStudies[currentCaseStudy].quote.author}</p>
                        </div>
                      )}
                    </div>

                    {/* Pagination Controls */}
                    <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 bg-gray-50">
                      <button
                        onClick={prevCaseStudy}
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                      >
                        <ArrowRight className="w-4 h-4 rotate-180" />
                        Previous
                      </button>
                      
                      <div className="flex items-center gap-2">
                        {caseStudies.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentCaseStudy(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === currentCaseStudy ? 'bg-[#f97316]' : 'bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>

                      <button
                        onClick={nextCaseStudy}
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                      >
                        Next
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Engagement Section */}
              <section id="engagement" className="py-16">
                <div className="max-w-4xl mx-auto px-6">
                  <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">
                    Engagement Model
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Start low-friction, stay full-lifecycle. Every engagement designed to 
                    evolve naturally into the next stage.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mb-10">
                    {[
                      { step: '01', title: 'Free ServerAudit™', desc: 'Health snapshot of 3 servers. No obligation. Data-driven clarity.', color: 'green' },
                      { step: '02', title: 'Right-Fit Support', desc: 'ServerSure™ for non-critical. ServerLife Extend™ for mission-critical.', color: 'blue' },
                      { step: '03', title: 'Planned Refresh', desc: 'When ready, ModServe™ delivers new hardware with zero downtime.', color: 'purple' }
                    ].map((item) => (
                      <div key={item.step} className="relative p-6 bg-white border border-gray-200">
                        <span className="absolute top-4 right-4 carbon-heading-02" style={{ color: item.color === 'green' ? '#24a148' : item.color === 'blue' ? '#f97316' : '#6929c4' }}>{item.step}</span>
                        <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA Banner */}
                  <div className="p-8 bg-[#f97316] text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Start With a Free Server Health Snapshot
                    </h3>
                    <p className="text-blue-100 mb-6">
                      No obligation. No sales pressure. Just clarity on whether your servers 
                      need refresh—or can safely extend.
                    </p>
                    <a 
                      href="mailto:contact@perception-it.com"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#f97316] carbon-heading-02 hover:bg-gray-100 transition-colors"
                    >
                      Request Free ServerAudit™
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <p className="text-blue-200 text-sm mt-4">
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
