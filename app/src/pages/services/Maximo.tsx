import { useEffect, useState, lazy, Suspense } from 'react';
import '../../styles/carbon-typography.css';
import Footer from '../../sections/Footer';
import Navigation from '../../components/Navigation';
const HeroCubeAnimation = lazy(() => import('../../components/HeroCubeAnimation'));
const HeroGradientPlanes = lazy(() => import('../../components/HeroGradientPlanes'));
import ArrowRight from '@carbon/icons-react/es/ArrowRight';
import DataBase from '@carbon/icons-react/es/DataBase';
import WarningAlt from '@carbon/icons-react/es/WarningAlt';
import CheckmarkFilled from '@carbon/icons-react/es/CheckmarkFilled';
import Settings from '@carbon/icons-react/es/Settings';
import Layers from '@carbon/icons-react/es/Layers';
import Plug from '@carbon/icons-react/es/Plug';
import Migrate from '@carbon/icons-react/es/Migrate';
import Calendar from '@carbon/icons-react/es/Calendar';
import Tools from '@carbon/icons-react/es/Tools';
import Box from '@carbon/icons-react/es/Box';
import Report from '@carbon/icons-react/es/Report';
import Activity from '@carbon/icons-react/es/Activity';
import Security from '@carbon/icons-react/es/Security';
import Money from '@carbon/icons-react/es/Money';
import ChevronRight from '@carbon/icons-react/es/ChevronRight';
import Building from '@carbon/icons-react/es/Building';

const Maximo = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0);
  
  // Case studies data
  const caseStudies = [
    {
      id: 'jazz',
      tag: 'Telco Migration',
      tagColor: 'blue',
      title: 'Jazz - Migration from Maximo to ServiceNow',
      description: 'Migrated end-user experience from legacy Maximo to ServiceNow while preserving critical asset workflows. Replicated custom UI patterns to maintain operational familiarity.',
      stats: [
        { value: '100%', label: 'Data Migration', color: '#00b4d8' },
        { value: 'Zero', label: 'Workflow Disruption', color: '#24a148' },
        { value: 'Cloud', label: 'Scalability', color: '#6929c4' }
      ],
      quote: {
        text: "Perception IT delivered a seamless migration that preserved our operational workflows while giving us the cloud agility we needed.",
        author: "Usman Ikram, Jazz"
      }
    },
    {
      id: 'db2',
      tag: 'Database Optimization',
      tagColor: 'green',
      title: 'High-Performance DB2 PureScale Implementation',
      description: 'Migrated legacy Maximo database infrastructure to IBM DB2 PureScale, eliminating performance bottlenecks and enabling horizontal scalability for high-volume asset transactions.',
      tags: ['Active-Active Clustering', 'Continuous Availability', '3x Throughput']
    },
    {
      id: 'telecom',
      tag: 'Infrastructure Management',
      tagColor: 'purple',
      title: 'Telecom Infrastructure Enhancement',
      description: 'Integrated asset management module within existing Service Desk operations. Automated approval workflows improved resource allocation and reduced mean time to repair.',
      tags: ['Integrated ITSM', 'Automated Approvals', 'MTTR Reduction']
    }
  ];
  
  const nextCaseStudy = () => {
    setCurrentCaseStudy((prev) => (prev + 1) % caseStudies.length);
  };
  
  const prevCaseStudy = () => {
    setCurrentCaseStudy((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };
  
  // Section Registry - Single source of truth for nav and sections
  const SECTIONS = [
    { id: 'overview', label: 'Overview' },
    { id: 'value', label: 'Business Value' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'technical', label: 'Technical Depth' },
    { id: 'migration', label: 'Migration Paths' },
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
      {/* Global Top Navigation */}
      <Navigation />
      
      {/* Hero Section with Integrated Navigation */}
      <section id="overview" className="relative pt-40 pb-20 bg-[#0a1628] overflow-hidden">
        {/* WebGL Background Effects */}
        <Suspense fallback={<div className="h-[500px] bg-slate-900" />}>
          <HeroCubeAnimation />
        </Suspense>
        <Suspense fallback={<div className="h-[500px] bg-slate-900" />}>
          <HeroGradientPlanes />
        </Suspense>
        
        <div className="relative z-10 cds--css-grid" style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
          <div className="cds--col-span-16 lg:cds--col-span-14 lg:cds--col-start-2">
            
            {/* Breadcrumb - with explicit z-index */}
            <nav className="relative z-10 flex items-center gap-2 text-xs mb-8" aria-label="Breadcrumb">
              <a href="/" className="text-[#00b4d8] hover:underline">Home</a>
              <ChevronRight className="w-3 h-3 text-gray-400" />
              <a href="/services" className="text-[#00b4d8] hover:underline">Services</a>
              <ChevronRight className="w-3 h-3 text-gray-400" />
              <span className="px-2 py-0.5 border border-[#a8a8a8] text-[#a8a8a8] rounded-full">IBM Maximo Asset Management</span>
            </nav>

            {/* Mobile Dropdown Navigation */}
            <div className="xl:hidden mb-8">
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

            {/* Single Column Layout */}
            <div className="max-w-3xl">
                {/* Headline - Carbon Fluid Heading 05 */}
                <h1 className="carbon-fluid-heading-05 text-white mb-6">
                  IBM Maximo Asset Management
                </h1>

                {/* Subtitle */}
                <p className="carbon-label-01 text-[#c6c6c6] uppercase tracking-wide mb-6">
                  Engineered for Scale, Optimized for Transition
                </p>

                {/* Lead Text */}
                <p className="carbon-body-02 text-gray-300 mb-8">
                  We architect high-performance Maximo environments to maximize ROI on your 
                  current deployment or execute seamless migrations to cloud-native efficiency.
                </p>

                {/* CTAs - Carbon Button Styles */}
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => scrollToSection('engagement')}
                    className="cds--btn cds--btn--primary bg-[#00b4d8] hover:bg-[#22d3ee]"
                  >
                    Request a Technical Audit
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                  <button 
                    onClick={() => scrollToSection('cases')}
                    className="cds--btn cds--btn--tertiary inline-flex items-center gap-2"
                    style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white', borderWidth: '1px' }}
                  >
                    View Jazz Telco Migration Case Study
                    <ArrowRight className="w-4 h-4" />
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
                  icon: Building,
                  headline: "Proven with Pakistan's Largest Telco", 
                  subtext: 'Successfully delivered for Jazz (13,000+ sites).',
                  link: '#cases',
                  clickable: true
                },
                { 
                  icon: DataBase,
                  headline: 'DB2 PureScale & Multi-Vendor DB Experts', 
                  subtext: 'Specialized in Active-Active Clustering for massive datasets.',
                  link: '#technical',
                  clickable: true
                },
                { 
                  icon: Migrate,
                  headline: 'ServiceNow & Cloud-Native Migration', 
                  subtext: 'Executing Seamless Transitions with zero process disruption.',
                  link: '#migration',
                  clickable: true
                },
                { 
                  icon: CheckmarkFilled,
                  headline: '100% Data Integrity Guarantee', 
                  subtext: 'Zero Data Loss track record in complex migrations.',
                  link: '#technical',
                  clickable: true
                },
                { 
                  icon: Box,
                  headline: 'Asset Lifecycle Mastery', 
                  subtext: 'End-to-End Management from procurement to disposal.',
                  link: '#solutions',
                  clickable: true
                },
                { 
                  icon: Calendar,
                  headline: '24/7 Local Support', 
                  subtext: 'Always Available via our Lahore NOC.',
                  link: '#engagement',
                  clickable: true
                }
              ].map((item) => (
                <button
                  key={item.headline}
                  onClick={() => item.clickable && scrollToSection(item.link.replace('#', ''))}
                  className="cds--tile bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] p-4 flex flex-col gap-3 text-left hover:border-[#00b4d8] hover:shadow-sm transition-all cursor-pointer"
                >
                  <div className="w-10 h-10 bg-[var(--cds-layer-02)] flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#00b4d8]" />
                  </div>
                  <div>
                    <p className="text-[13px] text-[var(--cds-text-primary)] font-semibold leading-tight mb-1">{item.headline}</p>
                    <p className="text-[11px] text-[var(--cds-text-secondary)]">{item.subtext}</p>
                  </div>
                </button>
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
              <nav className="sticky top-20 pt-8 pb-8 h-[calc(100vh-5rem)]">
                <ul className="space-y-0.5">
                  {SECTIONS.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left px-4 py-2 carbon-body-01 transition-colors border-l-2 ${
                          activeSection === item.id
                            ? 'text-[#161616] border-[#00b4d8] bg-[#f4f4f4] font-semibold'
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
            <main className="flex-1 min-w-0">
              {/* Business Value Section */}
              <section id="value" className="py-16 border-b border-[var(--cds-border-subtle)]">
                <div className="cds--css-grid">
                  <div className="cds--col-span-16 lg:cds--col-span-12">
                    <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">
                      Business Value
                    </h2>
                    <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-8">
                      Your assets are the engine of your business. Disconnected systems lead to unplanned CapEx, 
                      compliance gaps, and operational blind spots. We engineer Maximo environments that provide 
                      total visibility, predictive maintenance, and audit-ready control.
                    </p>

                    {/* Risk Warning */}
                    <div className="mb-8 p-4 border-l-4 border-[#da1e28] bg-[#da1e28]/5">
                      <div className="flex items-start gap-3">
                        <WarningAlt className="w-5 h-5 text-[#da1e28] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="carbon-label-01 text-[#da1e28] mb-1">Critical Risk Factors</p>
                          <p className="carbon-body-compact-01 text-[var(--cds-text-secondary)]">
                            Legacy Maximo instances without DB2 PureScale face performance bottlenecks at scale. 
                            Disconnected asset data creates compliance exposure and unexpected capital expenditure.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Value Props */}
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { icon: Activity, title: 'Boosted Productivity', desc: 'Automated workflows reduce manual intervention by up to 60%.' },
                        { icon: Money, title: 'Cost Predictability', desc: 'Preventive maintenance reduces emergency repairs and unplanned CapEx.' },
                        { icon: Security, title: 'Compliance & Security', desc: 'Full audit trails with SBP-aligned controls and documentation.' }
                      ].map((item) => (
                        <div key={item.title} className="p-5 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)]">
                          <div className="w-10 h-10 bg-[#00b4d8]/10 flex items-center justify-center mb-4">
                            <item.icon className="w-5 h-5 text-[#00b4d8]" />
                          </div>
                          <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">{item.title}</h3>
                          <p className="carbon-body-compact-01 text-[var(--cds-text-secondary)]">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Migration Paths Section */}
              <section id="migration" className="py-16 border-b border-[var(--cds-border-subtle)]">
                <div className="cds--css-grid">
                  <div className="cds--col-span-16 lg:cds--col-span-12">
                    <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">
                      Migration Paths
                    </h2>
                    <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-10">
                      Is your current Maximo instance a bottleneck or an asset? We provide objective counsel 
                      based on your operational maturity and strategic goals.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-6 bg-[#00b4d8]/5 border border-[#00b4d8]/20">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-[#00b4d8] flex items-center justify-center">
                            <Tools className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <span className="cds--tag cds--tag--blue text-[10px]">Path A</span>
                            <h3 className="carbon-heading-02 text-[var(--cds-text-primary)]">Modernize & Scale</h3>
                          </div>
                        </div>
                        <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-4">
                          For organizations committed to Maximo but needing deeper capability. Upgrade to DB2 PureScale, 
                          implement advanced workflows, and integrate with enterprise systems.
                        </p>
                        <ul className="space-y-2">
                          {['DB2 upgrade for performance', 'Advanced workflow automation', 'Enhanced reporting'].map((item) => (
                            <li key={item} className="flex items-center gap-2 carbon-body-compact-01 text-[var(--cds-text-secondary)]">
                              <CheckmarkFilled className="w-4 h-4 text-[#24a148]" />{item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-6 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)]">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-[#6929c4] flex items-center justify-center">
                            <Migrate className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <span className="cds--tag cds--tag--purple text-[10px]">Path B</span>
                            <h3 className="carbon-heading-02 text-[var(--cds-text-primary)]">Strategic Migration</h3>
                          </div>
                        </div>
                        <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-4">
                          For organizations ready for cloud-native agility. Migrate Maximo workflows to ServiceNow 
                          with zero data loss and preserved user familiarity.
                        </p>
                        <ul className="space-y-2">
                          {['Zero-downtime migration', 'Cloud scalability', 'Reduced TCO'].map((item) => (
                            <li key={item} className="flex items-center gap-2 carbon-body-compact-01 text-[var(--cds-text-secondary)]">
                              <CheckmarkFilled className="w-4 h-4 text-[#24a148]" />{item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Solutions Section */}
              <section id="solutions" className="py-16 border-b border-[var(--cds-border-subtle)]">
                <div className="cds--css-grid">
                  <div className="cds--col-span-16 lg:cds--col-span-12">
                    <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-8">
                      Solutions
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { icon: Box, title: 'Lifecycle Management', desc: 'End-to-end tracking from procurement to disposal. Complete asset genealogy with warranty and contract management.' },
                        { icon: Calendar, title: 'Preventive Maintenance', desc: 'Optimized PM schedules based on asset criticality and usage patterns. Reduce unplanned downtime by up to 40%.' },
                        { icon: Layers, title: 'Inventory & Spares', desc: 'Real-time visibility into stock levels, reorder points, and critical spares allocation across locations.' },
                        { icon: Report, title: 'Reporting & Analytics', desc: 'Data-driven decision making with customizable KPIs, MTBF/MTTR tracking, and maintenance cost analysis.' }
                      ].map((cap) => (
                        <div key={cap.title} className="group p-5 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] hover:border-[#00b4d8] transition-colors">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-[var(--cds-layer-02)] flex items-center justify-center flex-shrink-0">
                              <cap.icon className="w-6 h-6 text-[#00b4d8]" />
                            </div>
                            <div>
                              <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">{cap.title}</h3>
                              <p className="carbon-body-compact-01 text-[var(--cds-text-secondary)]">{cap.desc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical Depth Section */}
              <section id="technical" className="py-16 border-b border-[var(--cds-border-subtle)]">
                <div className="cds--css-grid">
                  <div className="cds--col-span-16 lg:cds--col-span-12">
                    <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">
                      Technical Depth
                    </h2>
                    <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-10">
                      Backend expertise that ensures your Maximo environment scales with your business demands.
                    </p>

                    <div className="space-y-4">
                      <div className="p-6 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)]">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 bg-[#00b4d8]/10 flex items-center justify-center flex-shrink-0">
                            <DataBase className="w-8 h-8 text-[#00b4d8]" />
                          </div>
                          <div className="flex-1">
                            <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">
                              IBM DB2 PureScale Scalability
                            </h3>
                            <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-4">
                              High-volume transaction handling for enterprise-scale asset operations. Eliminate database 
                              bottlenecks that throttle asset-intensive workflows.
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {['Active-Active Clustering', 'Continuous Availability', 'Horizontal Scaling'].map((tag) => (
                                <span key={tag} className="cds--tag text-[10px]">{tag}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)]">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 bg-[#00b4d8]/10 flex items-center justify-center flex-shrink-0">
                            <Plug className="w-8 h-8 text-[#00b4d8]" />
                          </div>
                          <div className="flex-1">
                            <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">
                              Complex System Integration
                            </h3>
                            <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-4">
                              Connect Maximo with ITSM tools, ERPs, and monitoring systems. Unified data flow 
                              eliminates silos between operations and maintenance.
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {['ServiceNow', 'SAP', 'Oracle', 'REST/SOAP APIs'].map((tag) => (
                                <span key={tag} className="cds--tag text-[10px]">{tag}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)]">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 bg-[#00b4d8]/10 flex items-center justify-center flex-shrink-0">
                            <Settings className="w-8 h-8 text-[#00b4d8]" />
                          </div>
                          <div className="flex-1">
                            <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">
                              Custom Workflow Automation
                            </h3>
                            <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-4">
                              Tailored Maximo configurations for Telco and Industrial processes. Not out-of-the-box-
                              engineered for your operational reality.
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {['Escalation Matrix', 'Approval Chains', 'Condition Monitoring'].map((tag) => (
                                <span key={tag} className="cds--tag text-[10px]">{tag}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Case Studies Section with Pagination */}
              <section id="cases" className="py-16 border-b border-[var(--cds-border-subtle)]">
                <div className="cds--css-grid">
                  <div className="cds--col-span-16 lg:cds--col-span-12">
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)]">
                        Case Studies
                      </h2>
                      <span className="carbon-label-01 text-[var(--cds-text-secondary)]">
                        {currentCaseStudy + 1} of {caseStudies.length}
                      </span>
                    </div>

                    {/* Case Study Content */}
                    <div className="bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)]">
                      {caseStudies[currentCaseStudy].quote ? (
                        // Jazz case study with quote sidebar
                        <div className="grid md:grid-cols-3 gap-6 p-6">
                          <div className="md:col-span-2">
                            <span className={`cds--tag cds--tag--${caseStudies[currentCaseStudy].tagColor} text-[10px] mb-3 inline-block`}>
                              {caseStudies[currentCaseStudy].tag}
                            </span>
                            <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-3">
                              {caseStudies[currentCaseStudy].title}
                            </h3>
                            <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-4">
                              {caseStudies[currentCaseStudy].description}
                            </p>
                            <div className="grid grid-cols-3 gap-4">
                              {caseStudies[currentCaseStudy].stats?.map((stat) => (
                                <div key={stat.label}>
                                  <p className="carbon-heading-02" style={{ color: stat.color }}>{stat.value}</p>
                                  <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)]">{stat.label}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="bg-[var(--cds-background)] p-4 border-l-4 border-[#00b4d8]">
                            <p className="carbon-body-compact-01 text-[var(--cds-text-primary)] italic mb-3">
                              "{caseStudies[currentCaseStudy].quote.text}"
                            </p>
                            <p className="carbon-label-01 text-[var(--cds-text-secondary)]">
                              - {caseStudies[currentCaseStudy].quote.author}
                            </p>
                          </div>
                        </div>
                      ) : (
                        // Other case studies
                        <div className="p-6">
                          <span className={`cds--tag cds--tag--${caseStudies[currentCaseStudy].tagColor} text-[10px] mb-3 inline-block`}>
                            {caseStudies[currentCaseStudy].tag}
                          </span>
                          <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-3">
                            {caseStudies[currentCaseStudy].title}
                          </h3>
                          <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-4">
                            {caseStudies[currentCaseStudy].description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {caseStudies[currentCaseStudy].tags?.map((tag) => (
                              <span key={tag} className={`cds--tag cds--tag--${caseStudies[currentCaseStudy].tagColor} text-[10px]`}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Pagination Controls */}
                      <div className="flex items-center justify-between px-6 py-4 border-t border-[var(--cds-border-subtle)] bg-[var(--cds-background)]">
                        <button
                          onClick={prevCaseStudy}
                          className="flex items-center gap-2 px-4 py-2 carbon-body-01 text-[var(--cds-text-secondary)] hover:text-[var(--cds-text-primary)] hover:bg-[var(--cds-layer-hover)] transition-colors"
                        >
                          <ArrowRight className="w-4 h-4 rotate-180" />
                          Previous
                        </button>
                        
                        {/* Dot Indicators */}
                        <div className="flex items-center gap-2">
                          {caseStudies.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentCaseStudy(index)}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                index === currentCaseStudy
                                  ? 'bg-[#00b4d8]'
                                  : 'bg-[var(--cds-border-subtle)] hover:bg-[var(--cds-text-secondary)]'
                              }`}
                              aria-label={`Go to case study ${index + 1}`}
                            />
                          ))}
                        </div>

                        <button
                          onClick={nextCaseStudy}
                          className="flex items-center gap-2 px-4 py-2 carbon-body-01 text-[var(--cds-text-secondary)] hover:text-[var(--cds-text-primary)] hover:bg-[var(--cds-layer-hover)] transition-colors"
                        >
                          Next
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section id="faq" className="py-16 border-b border-[var(--cds-border-subtle)]">
                <div className="cds--css-grid">
                  <div className="cds--col-span-16 lg:cds--col-span-12">
                    <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-8">
                      Frequently Asked Questions
                    </h2>

                    <div className="space-y-4">
                      {/* FAQ 1 */}
                      <details className="group bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)]">
                        <summary className="flex items-center justify-between p-4 cursor-pointer list-none carbon-heading-02 text-[var(--cds-text-primary)] hover:bg-[var(--cds-layer-hover)] transition-colors">
                          Will my custom workflows transfer?
                          <ChevronRight className="w-5 h-5 text-[var(--cds-text-secondary)] group-open:rotate-90 transition-transform" />
                        </summary>
                        <div className="px-4 pb-4">
                          <p className="carbon-body-01 text-[var(--cds-text-secondary)]">
                            Yes. We analyze and replicate your custom workflows during migration. 
                            Our approach preserves operational familiarity-users see the same process 
                            logic, field validations, and approval chains in the new platform.
                          </p>
                        </div>
                      </details>

                      {/* FAQ 2 */}
                      <details className="group bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)]">
                        <summary className="flex items-center justify-between p-4 cursor-pointer list-none carbon-heading-02 text-[var(--cds-text-primary)] hover:bg-[var(--cds-layer-hover)] transition-colors">
                          How long does a typical migration take?
                          <ChevronRight className="w-5 h-5 text-[var(--cds-text-secondary)] group-open:rotate-90 transition-transform" />
                        </summary>
                        <div className="px-4 pb-4">
                          <p className="carbon-body-01 text-[var(--cds-text-secondary)]">
                            Most migrations complete in 8-12 weeks. Timeline depends on data volume, 
                            customizations, and integration complexity. We provide a detailed schedule 
                            during the assessment phase with milestone-based deliverables.
                          </p>
                        </div>
                      </details>
                    </div>
                  </div>
                </div>
              </section>

              {/* Engagement Section */}
              <section id="engagement" className="py-16">
                <div className="cds--css-grid">
                  <div className="cds--col-span-16 lg:cds--col-span-12">
                    <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">
                      Engagement Model
                    </h2>
                    <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-10">
                      Risk-oriented approach with clear deliverables at each phase.
                    </p>

                    <div className="grid md:grid-cols-3 gap-4 mb-10">
                      {[
                        { step: '01', title: 'Asset Health Audit', desc: 'Identify compliance gaps, warranty risks, and performance bottlenecks.', color: '#00b4d8' },
                        { step: '02', title: 'Roadmap Definition', desc: 'Objective assessment: optimize current state or migrate to new platform.', color: '#6929c4' },
                        { step: '03', title: 'Execution', desc: 'Fixed-price or SLA-backed delivery with milestone-based payments.', color: '#24a148' }
                      ].map((item) => (
                        <div key={item.step} className="relative p-6 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)]">
                          <span className="absolute top-4 right-4 carbon-label-01" style={{ color: item.color }}>{item.step}</span>
                          <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">{item.title}</h3>
                          <p className="carbon-body-compact-01 text-[var(--cds-text-secondary)]">{item.desc}</p>
                        </div>
                      ))}
                    </div>

                    {/* CTA Banner */}
                    <div className="p-8 bg-[#00b4d8] text-center">
                      <h3 className="carbon-fluid-heading-04 text-white mb-4">
                        Schedule Your Asset Audit
                      </h3>
                      <p className="carbon-body-01 text-white/80 mb-6 max-w-2xl mx-auto">
                        Identify risks and opportunities in your current Maximo environment. 
                        No commitment required-objective assessment delivered within 2 weeks.
                      </p>
                      <a 
                        href="mailto:contact@perception-it.com"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#00b4d8] carbon-label-01 hover:bg-[#e5e5e5] transition-colors"
                      >
                        Request Assessment
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
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

export default Maximo;
