import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './CoolingThermal.module.css';
import {
  Header, HeaderName, HeaderNavigation, HeaderMenuItem,
  HeaderGlobalBar, HeaderGlobalAction, HeaderContainer, HeaderMenuButton,
  SideNav, SideNavItems, SideNavMenu, SideNavMenuItem,
  Accordion, AccordionItem,
} from '@carbon/react';
import {
  ArrowRight, CheckmarkFilled, ChevronLeft, ChevronRight,
  TemperatureHot, Warning, Settings, Meter, Certificate,
  Dashboard, Search, ChevronUp, ChevronDown, DataCenter, Security, Cloud, Renew,
  Quotes, Windy, Temperature, ChartLine,
} from '@carbon/icons-react';

import { X } from 'lucide-react';
import HeroCoolingGraphics from '../../components/HeroCoolingGraphics';
import Footer from '../../sections/Footer';
import '../../styles/carbon-typography.css';

/* ==============================================================================
   DATA
   ============================================================================== */

const PAGE_SECTIONS = [
  { id: 'services', label: 'Services', inNav: true },
  { id: 'assessment', label: '01 Assessment', inNav: true },
  { id: 'hardware', label: '02 Procurement', inNav: true },
  { id: 'installation', label: '03 Deployment', inNav: true },
  { id: 'managed', label: '04 Managed Services', inNav: true },
  { id: 'results', label: 'Results', inNav: true },
  { id: 'ecosystem', label: 'Facility Ecosystem', inNav: true },
  { id: 'faq', label: 'FAQ', inNav: true },
  { id: 'cta', label: 'Get Started', inNav: true },
] as const;







/* ==============================================================================
   HEADER + MEGA MENU
   ============================================================================== */

const menuData: Record<string, { left: { id: string; title: string }[]; middle: React.ReactNode; right: React.ReactNode }> = {
  Infrastructure: {
    left: [
      { id: 'server-continuity', title: 'Server Continuity' },
      { id: 'hardware-support', title: 'Hardware Support' },
      { id: 'sla-support', title: '24x7 SLA Support' },
      { id: 'network-operations', title: 'Network Operations' },
      { id: 'data-centre', title: 'Data Centre Services' },
    ],
    middle: (
      <div>
        <a href="/#/services/infrastructure" className="group flex items-center gap-2 text-sm font-semibold text-[#161616] mb-2 hover:text-[#0f62fe] transition-colors">
          Infrastructure <ArrowRight className="w-4 h-4 text-[#8d8d8d] group-hover:text-[#0f62fe] transition-colors" />
        </a>
        <p className="text-sm text-[#525252] leading-relaxed mb-6">End-to-end infrastructure services from server continuity to data centre design and build.</p>
        <div className="mb-6">
          <h5 className="text-[11px] font-medium text-[#6f6f6f] uppercase tracking-[0.16px] mb-2">Includes</h5>
          <div className="flex flex-wrap gap-2">
            {['Server Continuity', 'Hardware Support', '24x7 SLA', 'Network Operations', 'Data Centre Design'].map((t) => (
              <span key={t} className="px-2 py-0.5 border border-[#e0e0e0] text-[#525252] text-xs font-medium rounded-full">{t}</span>
            ))}
          </div>
        </div>
        <a href="#cta" className="inline-flex items-center gap-2 px-4 py-3 bg-[#0f62fe] text-white text-sm font-semibold hover:bg-[#0353e9] transition-colors">Talk to an Expert <ArrowRight className="w-4 h-4" /></a>
        <div className="h-8" />
      </div>
    ),
    right: (
      <div className="pl-4 pr-0 py-0 border-l-2 border-[#c6c6c6]">
        <p className="text-[11px] font-semibold text-[#6f6f6f] uppercase tracking-[0.16px] mb-3">Featured Case Study</p>
        <h4 className="text-sm font-semibold text-[#161616] mb-3">Multi-Site Precision Cooling</h4>
        <p className="text-sm text-[#525252] mb-4 leading-relaxed">Deployed precision cooling across 4 data centres, reducing PUE from 1.8 to 1.35.</p>
        <a href="/#/projects" className="inline-flex items-center gap-1 text-sm font-semibold text-[#525252] hover:text-[#0f62fe]">View case study <ArrowRight className="w-4 h-4" /></a>
      </div>
    ),
  },
  Cloud: {
    left: [
      { id: 'cloud-strategy', title: 'Cloud Strategy' },
      { id: 'cloud-cost', title: 'Cloud Cost Optimisation' },
      { id: 'cloud-management', title: 'Cloud Management' },
      { id: 'devops', title: 'DevOps Delivery' },
      { id: 'containers', title: 'Container Platform' },
    ],
    middle: (
      <div>
        <a href="/#/services/cloud" className="group flex items-center gap-2 text-sm font-semibold text-[#161616] mb-2 hover:text-[#0f62fe] transition-colors">
          Cloud Services <ArrowRight className="w-4 h-4 text-[#8d8d8d] group-hover:text-[#0f62fe] transition-colors" />
        </a>
        <p className="text-sm text-[#525252] leading-relaxed mb-6">Multi-cloud strategy, cost optimisation, and managed operations across Azure, AWS, and GCP.</p>
        <div className="mb-6">
          <h5 className="text-[11px] font-medium text-[#6f6f6f] uppercase tracking-[0.16px] mb-2">Includes</h5>
          <div className="flex flex-wrap gap-2">
            {['FinOps', 'Kubernetes', 'CI/CD', 'Multi-Cloud'].map((t) => (
              <span key={t} className="px-2 py-0.5 border border-[#e0e0e0] text-[#525252] text-xs font-medium rounded-full">{t}</span>
            ))}
          </div>
        </div>
        <a href="#cta" className="inline-flex items-center gap-2 px-4 py-3 bg-[#0f62fe] text-white text-sm font-semibold hover:bg-[#0353e9] transition-colors">Talk to an Expert <ArrowRight className="w-4 h-4" /></a>
        <div className="h-8" />
      </div>
    ),
    right: (
      <div className="pl-4 pr-0 py-0 border-l-2 border-[#c6c6c6]">
        <p className="text-[11px] font-semibold text-[#6f6f6f] uppercase tracking-[0.16px] mb-3">Featured</p>
        <h4 className="text-sm font-semibold text-[#161616] mb-3">Cloud Cost Optimisation</h4>
        <p className="text-sm text-[#525252] mb-4 leading-relaxed">Identify waste, right-size resources, and automate savings.</p>
        <a href="/#/services/cloud-cost-optimisation" className="inline-flex items-center gap-1 text-sm font-semibold text-[#525252] hover:text-[#0f62fe]">Learn more <ArrowRight className="w-4 h-4" /></a>
      </div>
    ),
  },
  'Data and Analytics': {
    left: [
      { id: 'iot', title: 'IoT Data Analytics' },
      { id: 'data-lakes', title: 'Data Lakes & Warehousing' },
      { id: 'geospatial', title: 'Geospatial Analytics' },
      { id: 'federation', title: 'Data Federation' },
      { id: 'database', title: 'Database Optimisation' },
    ],
    middle: (
      <div>
        <a href="/#/services/data" className="group flex items-center gap-2 text-sm font-semibold text-[#161616] mb-2 hover:text-[#0f62fe] transition-colors">
          Data & Analytics <ArrowRight className="w-4 h-4 text-[#8d8d8d] group-hover:text-[#0f62fe] transition-colors" />
        </a>
        <p className="text-sm text-[#525252] leading-relaxed mb-6">Real-time analytics, data lakes, geospatial mapping, and database performance tuning.</p>
        <a href="#cta" className="inline-flex items-center gap-2 px-4 py-3 bg-[#0f62fe] text-white text-sm font-semibold hover:bg-[#0353e9] transition-colors">Talk to an Expert <ArrowRight className="w-4 h-4" /></a>
        <div className="h-8" />
      </div>
    ),
    right: (
      <div className="pl-4 pr-0 py-0 border-l-2 border-[#c6c6c6]">
        <p className="text-[11px] font-semibold text-[#6f6f6f] uppercase tracking-[0.16px] mb-3">Featured</p>
        <h4 className="text-sm font-semibold text-[#161616] mb-3">IoT Data Analytics</h4>
        <p className="text-sm text-[#525252] mb-4 leading-relaxed">Real-time sensor data processing and predictive analytics.</p>
      </div>
    ),
  },
  AI: {
    left: [
      { id: 'ai-strategy', title: 'AI Strategy' },
      { id: 'mlops', title: 'MLOps' },
      { id: 'generative', title: 'Generative AI' },
      { id: 'governance', title: 'AI Governance' },
    ],
    middle: (
      <div>
        <a href="/#/services/ai" className="group flex items-center gap-2 text-sm font-semibold text-[#161616] mb-2 hover:text-[#0f62fe] transition-colors">
          AI Services <ArrowRight className="w-4 h-4 text-[#8d8d8d] group-hover:text-[#0f62fe] transition-colors" />
        </a>
        <p className="text-sm text-[#525252] leading-relaxed mb-6">From strategy to production — AI roadmap, MLOps, LLM integration, and governance.</p>
        <a href="#cta" className="inline-flex items-center gap-2 px-4 py-3 bg-[#0f62fe] text-white text-sm font-semibold hover:bg-[#0353e9] transition-colors">Talk to an Expert <ArrowRight className="w-4 h-4" /></a>
        <div className="h-8" />
      </div>
    ),
    right: (
      <div className="pl-4 pr-0 py-0 border-l-2 border-[#c6c6c6]">
        <p className="text-[11px] font-semibold text-[#6f6f6f] uppercase tracking-[0.16px] mb-3">Featured</p>
        <h4 className="text-sm font-semibold text-[#161616] mb-3">AI Accelerator</h4>
        <p className="text-sm text-[#525252] mb-4 leading-relaxed">From data to deployed AI in 90 days.</p>
      </div>
    ),
  },
  'IT Platforms': {
    left: [
      { id: 'servicenow', title: 'ServiceNow' },
      { id: 'salesforce', title: 'Salesforce' },
      { id: 'microsoft', title: 'Microsoft 365' },
      { id: 'cybersecurity', title: 'Cybersecurity' },
    ],
    middle: (
      <div>
        <a href="/#/services/platforms" className="group flex items-center gap-2 text-sm font-semibold text-[#161616] mb-2 hover:text-[#0f62fe] transition-colors">
          IT Platforms <ArrowRight className="w-4 h-4 text-[#8d8d8d] group-hover:text-[#0f62fe] transition-colors" />
        </a>
        <p className="text-sm text-[#525252] leading-relaxed mb-6">ServiceNow, Salesforce, Microsoft 365, and cybersecurity platform implementation.</p>
        <a href="#cta" className="inline-flex items-center gap-2 px-4 py-3 bg-[#0f62fe] text-white text-sm font-semibold hover:bg-[#0353e9] transition-colors">Talk to an Expert <ArrowRight className="w-4 h-4" /></a>
        <div className="h-8" />
      </div>
    ),
    right: (
      <div className="pl-4 pr-0 py-0 border-l-2 border-[#c6c6c6]">
        <p className="text-[11px] font-semibold text-[#6f6f6f] uppercase tracking-[0.16px] mb-3">Featured</p>
        <h4 className="text-sm font-semibold text-[#161616] mb-3">ServiceNow Implementation</h4>
        <p className="text-sm text-[#525252] mb-4 leading-relaxed">ITSM and enterprise workflow automation.</p>
      </div>
    ),
  },
  Consultancy: {
    left: [
      { id: 'assessment', title: 'IT Assessment' },
      { id: 'roadmap', title: 'Technology Roadmap' },
      { id: 'transformation', title: 'Digital Transformation' },
    ],
    middle: (
      <div>
        <a href="/#/services/consultancy" className="group flex items-center gap-2 text-sm font-semibold text-[#161616] mb-2 hover:text-[#0f62fe] transition-colors">
          Consultancy <ArrowRight className="w-4 h-4 text-[#8d8d8d] group-hover:text-[#0f62fe] transition-colors" />
        </a>
        <p className="text-sm text-[#525252] leading-relaxed mb-6">IT assessment, technology roadmap, and digital transformation strategy.</p>
        <a href="#cta" className="inline-flex items-center gap-2 px-4 py-3 bg-[#0f62fe] text-white text-sm font-semibold hover:bg-[#0353e9] transition-colors">Talk to an Expert <ArrowRight className="w-4 h-4" /></a>
        <div className="h-8" />
      </div>
    ),
    right: (
      <div className="pl-4 pr-0 py-0 border-l-2 border-[#c6c6c6]">
        <p className="text-[11px] font-semibold text-[#6f6f6f] uppercase tracking-[0.16px] mb-3">Featured</p>
        <h4 className="text-sm font-semibold text-[#161616] mb-3">IT Assessment</h4>
        <p className="text-sm text-[#525252] mb-4 leading-relaxed">Current-state analysis and gap identification.</p>
      </div>
    ),
  },
};

const CarbonHeader = () => {
  const SNavItem = SideNavMenuItem as any;
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string>('');
  const menuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!activeMenu) return;
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (menuRef.current && !menuRef.current.contains(target) && navRef.current && !navRef.current.contains(target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [activeMenu]);


  const menuTrigger = (label: string, hasDropdown: boolean) => {
    const hrefMap: Record<string, string> = {
      'Solutions': '/#/services',
      'Consultancy': '/#/services/consultancy',
      'Cloud': '/#/services/cloud',
      'Infrastructure': '/#/services/infrastructure',
      'Data and Analytics': '/#/services/data-analytics',
      'AI': '/#/services/ai',
      'IT Platforms': '/#/services/platforms',
      'Projects': '/#/projects',
      'About': '/#/about',
    };
    return (
      <div style={{ position: 'relative', height: '100%' }} onClick={() => hasDropdown && setActiveMenu(activeMenu === label ? null : label)}>
        <HeaderMenuItem href={hrefMap[label] || '/#/services'} style={{ color: 'var(--cds-text-inverse)' }}>
          <span className="cooling-nav-text">{label}</span>
        </HeaderMenuItem>
      </div>
    );
  };

  const currentData = activeMenu ? menuData[activeMenu] : null;

  return (
    <>
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }: { isSideNavExpanded: boolean; onClickSideNavExpand: () => void }) => (
          <>
            <Header aria-label="Perception IT" className="cooling-airflow-v2-header cds--header--dark">
              <a href="#services" className={styles['skip-link']}>Skip to main content</a>
              <HeaderMenuButton aria-label="Open menu" onClick={onClickSideNavExpand} isActive={isSideNavExpanded} aria-expanded={isSideNavExpanded} />
              <HeaderName href="/#/" prefix="">Perception IT</HeaderName>
              <HeaderNavigation aria-label="Main navigation">
                {menuTrigger('Solutions', true)}
                {menuTrigger('Consultancy', true)}
                {menuTrigger('Cloud', true)}
                {menuTrigger('Infrastructure', true)}
                {menuTrigger('Data and Analytics', true)}
                {menuTrigger('AI', true)}
                {menuTrigger('IT Platforms', true)}
                <HeaderMenuItem href="/#/projects" style={{ color: 'var(--cds-text-inverse)' }}><span className="cooling-nav-text">Projects</span></HeaderMenuItem>
                <HeaderMenuItem href="/#/about" style={{ color: 'var(--cds-text-inverse)' }}><span className="cooling-nav-text">About</span></HeaderMenuItem>
              </HeaderNavigation>
              <HeaderGlobalBar>
                <HeaderGlobalAction aria-label="Search" tooltipAlignment="end"><Search size={20} /></HeaderGlobalAction>
              </HeaderGlobalBar>
            </Header>
            <SideNav aria-label="Side navigation" expanded={isSideNavExpanded} isPersistent={false}>
              <SideNavItems>
                <SideNavMenu title="Infrastructure">
                  <SNavItem href="/#/services/server-continuity">Server Continuity</SNavItem>
                  <SNavItem href="/#/services/hardware-support">Hardware Support</SNavItem>
                  <SNavItem href="/#/services/sla-support">24x7 SLA Support</SNavItem>
                  <SNavItem href="/#/infrastructure/data-centre-services/cooling-thermal">Cooling & Airflow</SNavItem>
                  <SNavItem href="/#/services/power-ups">Power & UPS</SNavItem>
                </SideNavMenu>
                <SideNavMenu title="Cloud">
                  <SNavItem href="/#/services/cloud-strategy">Cloud Strategy</SNavItem>
                  <SNavItem href="/#/services/cloud-cost-optimisation">Cloud Cost Optimisation</SNavItem>
                </SideNavMenu>
                <SNavItem href="/#/projects">Projects</SNavItem>
                <SNavItem href="/#/about">About</SNavItem>
              </SideNavItems>
            </SideNav>
          </>
        )}
      />
      {activeMenu && currentData && createPortal(
        <>
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[8998]" onClick={() => setActiveMenu(null)} />
          <div
            ref={menuRef}
            onMouseEnter={() => { if (closeTimerRef.current) { clearTimeout(closeTimerRef.current); closeTimerRef.current = null; } }}
            className="fixed top-12 left-0 right-0 z-[8999] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] max-h-[calc(100vh-3rem)] overflow-y-auto"
          >
            <button onClick={() => setActiveMenu(null)} className="absolute top-4 right-4 z-10 p-2 bg-[#e0e0e0] hover:bg-[#161616] transition-colors group" aria-label="Close menu">
              <X className="w-5 h-5 text-[#161616] group-hover:text-white transition-colors" />
            </button>
            <div className="max-w-6xl mx-auto flex pb-8 pt-2">
              {/* Left Rail */}
              <div className="w-[240px] p-4 flex-shrink-0 border-r border-[#e0e0e0]">
                <div className="space-y-1">
                  {currentData.left.map((item) => (
                    <a
                      key={item.id}
                      href={`/#/services/${item.id}`}
                      onMouseEnter={() => setHoveredItem(item.id)}
                      className={`block w-full text-left px-3 py-2 text-sm transition-all border-l-2 ${
                        hoveredItem === item.id
                          ? 'bg-[#f4f4f4] text-[#161616] border-[#0f62fe] font-semibold'
                          : 'text-[#161616] hover:bg-[#f4f4f4] border-transparent'
                      }`}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
              {/* Middle */}
              <div className="flex-1 p-6">{currentData.middle}</div>
              {/* Right Rail */}
              <div className="w-[280px] pt-6 pr-6 pb-6 flex-shrink-0">{currentData.right}</div>
            </div>
          </div>
        </>,
        document.body
      )}
    </>
  );
};


/* ==============================================================================
   HERO
   ============================================================================== */

/* ==============================================================================
   STICKY ANCHOR NAV
   ============================================================================== */

const StickyAnchorNav = () => {
  const [activeSection, setActiveSection] = useState('services');
  const [navScrolled, setNavScrolled] = useState(false);
  const navItems = PAGE_SECTIONS.filter((s) => s.inNav);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setNavScrolled(scrollY > 400);
      const spyY = scrollY + 150;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && el.offsetTop <= spyY) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - headerOffset, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`${styles['sticky-nav']} desktop-anchor-nav`}
      style={{
        background: navScrolled ? 'var(--cds-layer)' : 'var(--cds-background)',
        boxShadow: navScrolled ? 'var(--cds-shadow)' : 'none',
        top: '3rem',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <ul className="anchor-nav-list">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className={`anchor-nav-item ${activeSection === item.id ? 'anchor-nav-item--active' : ''}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const HeroSection = () => (
  <section id="overview" className="relative min-h-[85vh] flex items-center bg-white overflow-hidden pt-20 carbon-font">
    <HeroCoolingGraphics />
    <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
      <div className="max-w-3xl lg:pl-6 relative">
        <div className="absolute -left-2 top-[3.2rem] h-[130px] w-0.5 bg-gradient-to-b from-[#0f62fe] to-[#8a3ffc] animate-slot-draw hidden lg:block" />
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-6">
          <span className="w-2 h-2 bg-[#24a148] rounded-full animate-pulse" />
          <span className="carbon-label-02" style={{ color: "#0f62fe" }}>Engineered for Pakistan&apos;s 45C summers</span>
        </div>
        <h1 className="carbon-fluid-display-03 text-[#161616] mb-6 relative">
          <span className="block">Precision Cooling &</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0f62fe] to-[#8a3ffc]">Thermal Continuity</span>
        </h1>
        <p className="carbon-fluid-heading-03 text-[#525252] mb-5">
          One partner.{" "}
          <span className="text-[#0f62fe]">Thermal Assessment.</span>{" "}
          <span className="text-[#6929c4]">Hardware Procurement.</span>{" "}
          <span className="text-[#0f62fe]">Installation.</span>{" "}
          <span className="text-[#6929c4]">24/7 Monitoring.</span>
        </p>
        <div className="max-w-2xl mb-8">
          <p className="carbon-body-02 text-[#525252]">
            End-to-end thermal management engineered for Pakistan&apos;s climate: 45C summers, monsoon humidity, dust, and grid instability. From assessment to 24/7 managed services.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-1 carbon-label-02 mb-8">
          {['Assess','Specify','Deploy','Monitor'].map((step,i)=> (
            <div key={step} className="flex items-center">
              <span className={`px-2 py-1 transition-colors ${i===3?'bg-[#0f62fe] text-white rounded':'text-[#6f6f6f]'}`}>{step}</span>
              {i<3 && <span className="text-[#c6c6c6] mx-1">→</span>}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-stretch gap-4">
          <button onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })} className="group inline-flex items-center gap-3 px-8 h-14 bg-gradient-to-r from-[#0f62fe] to-[#4589ff] text-white carbon-heading-02 hover:from-[#0353e9] hover:to-[#0f62fe] transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5">
            Request Thermal Health Check <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="group inline-flex items-center gap-3 px-6 h-14 bg-white/80 backdrop-blur-sm border border-gray-200 text-[#525252] carbon-body-02 hover:bg-white hover:border-[#0f62fe]/30 hover:shadow-lg transition-all duration-300">
            Explore Services
          </button>
        </div>
      </div>
      <div className="hidden lg:block absolute bottom-0 right-8">
        <div className="flex gap-8 border-t border-gray-200 pt-4">
          {[
            { num: '45C', label: 'Ambient Rated', color: '#0f62fe' },
            { num: '99.9%', label: 'Uptime SLA', color: '#8a3ffc' },
            { num: '4hrs', label: 'Response', color: '#24a148' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="carbon-fluid-heading-05" style={{ color: s.color, fontWeight: 300 }}>{s.num}</div>
              <div className="carbon-label-02 text-[#a8a8a8] uppercase mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <style>{`@keyframes slot-draw{from{transform:scaleY(0)}to{transform:scaleY(1)}}.animate-slot-draw{animation:slot-draw 1.5s ease-out forwards;transform-origin:top}`}</style>
  </section>
);

/* ==============================================================================
   TRUST TILES
   ============================================================================== */

const TrustTiles = () => {
  const tiles = [
    { icon: TemperatureHot, headline: '45C Ambient Rated', subtext: 'Pakistan-specific derating', color: '#0f62fe' },
    { icon: Meter, headline: 'IR Thermal Mapping', subtext: '90-minute on-site audit', color: '#6929c4' },
    { icon: Dashboard, headline: '24/7 NOC Monitoring', subtext: 'Real-time thermal alerts', color: '#24a148' },
    { icon: Certificate, headline: 'SLA-Backed Uptime', subtext: '99.9% with 4hr response', color: '#0f62fe' },
    { icon: Settings, headline: 'Zero-Downtime Deploy', subtext: 'Install without interruption', color: '#6929c4' },
    { icon: CheckmarkFilled, headline: 'Monsoon Hardened', subtext: 'Humidity & dust validated', color: '#24a148' },
  ];
  return (
    <section className="py-8 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {tiles.map((tile) => (
            <div key={tile.headline} className="group p-4 bg-gray-50 border border-gray-100 hover:border-[#0f62fe] hover:shadow-md transition-all cursor-default">
              <div className="w-10 h-10 bg-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <tile.icon className="w-5 h-5" style={{ color: tile.color }} />
              </div>
              <p className="text-[13px] text-gray-900 font-semibold leading-tight mb-1">{tile.headline}</p>
              <p className="text-[11px] text-gray-500">{tile.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ==============================================================================
   SECTION HEADER — clickable 01-04 links
   ============================================================================== */

const ServicesHeader = () => (
  <section id="services" className="py-16 bg-[#FAFAFA] border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center carbon-font">
      <span className="carbon-label-02 uppercase tracking-[0.16px] mb-4 block" style={{ color: "#0f62fe" }}>Services</span>
      <h2 className="carbon-fluid-heading-05 text-[#0F172A] mb-4">From Assessment to 24/7 Monitoring</h2>
      <p className="carbon-body-02 text-gray-600 max-w-2xl mx-auto mb-8">
        A clear 4-phase pathway with defined deliverables at each stage.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {[
          { num: '01', label: 'Assessment', id: 'assessment' },
          { num: '02', label: 'Procurement', id: 'hardware' },
          { num: '03', label: 'Deployment', id: 'installation' },
          { num: '04', label: 'Managed Services', id: 'managed' },
        ].map((s) => (
          <button
            key={s.num}
            onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-3 px-5 py-3 bg-white border border-gray-200 hover:border-[#0f62fe] hover:shadow-md transition-all text-left"
          >
            <span className="w-8 h-8 bg-[#0f62fe] text-white flex items-center justify-center text-sm font-semibold flex-shrink-0">{s.num}</span>
            <span className="carbon-heading-02 text-gray-900 group-hover:text-[#0f62fe] transition-colors">{s.label}</span>
            <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#0f62fe] group-hover:translate-x-1 transition-all" />
          </button>
        ))}
      </div>
    </div>
  </section>
);

/* ==============================================================================
   01 ASSESSMENT OPTIONS — Bento with image overlay, hover cards, comparison
   ============================================================================== */

/* ==============================================================================
   01 ASSESSMENT — Image banner + floating cards + hover reveal
   ============================================================================== */

const AssessmentSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const cards = [
    {
      icon: Search,
      tag: 'Entry',
      title: 'Rapid Thermal Health Check',
      desc: '90-minute on-site audit with IR mapping and risk scorecard. Ideal for routine maintenance, edge sites, and budget planning.',
      features: ['Infrared thermal mapping of all racks','Structured checklist with Fix/Watch/OK scoring','Pakistan-specific derating validation','48-hour report delivery'],
    },
    {
      icon: ChartLine,
      tag: 'Engineering',
      title: 'Precision Thermal Engineering',
      desc: 'CFD modelling, capacity calculations, and engineering sign-off. For new builds, high-density, and compliance.',
      features: ['3D heat maps and hotspot predictions','CFD airflow simulation','Capacity calculations with derating','Engineering sign-off documentation'],
    },
  ];

  return (
    <section id="assessment" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-10 carbon-font">
          <span className="carbon-label-02 uppercase tracking-[0.16px] mb-4 block" style={{ color: "#0f62fe" }}>01 Assessment</span>
          <h2 className="carbon-fluid-heading-05 text-[#0F172A] mb-3">Choose Your Assessment Path</h2>
          <p className="carbon-body-02 text-gray-500 max-w-2xl">Two options. One goal: understand your thermal reality before you spend.</p>
        </div>

        {/* Image Banner */}
        <div className="relative rounded-2xl overflow-hidden mb-10 min-h-[320px] lg:min-h-[380px]">
          <img src="/3D images/Cooling and Airflow/Cooling - Assesment.png" alt="Thermal assessment" className="w-full h-full object-cover absolute inset-0" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/50 to-transparent" />
          <div className="relative z-10 p-8 lg:p-12 max-w-lg">
            <p className="carbon-label-01 uppercase mb-3" style={{ color: "rgba(255,255,255,0.7)" }}>01 Assessment</p>
            <h3 className="carbon-fluid-heading-04 text-white mb-4 leading-tight">Thermal clarity before capital spend</h3>
            <p className="carbon-body-02 text-white/75">Rapid health check for routine confidence. Engineering-grade analysis before major investment.</p>
          </div>
        </div>

        {/* Option Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {cards.map((card) => (
            <div key={card.title} className="group relative p-8 bg-white rounded-xl border border-gray-100 hover:border-[#0f62fe] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#0f62fe]/5 flex items-center justify-center group-hover:bg-[#0f62fe]/10 transition-colors">
                <card.icon className="w-6 h-6 text-[#0f62fe]" />
              </div>
              <p className="carbon-label-02 text-gray-400 uppercase mb-3">{card.tag}</p>
              <h3 className="carbon-heading-02 text-gray-900 mb-3 pr-16">{card.title}</h3>
              <p className="carbon-body-02 text-gray-500 mb-5">{card.desc}</p>
              <div className="space-y-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                {card.features.slice(0, 3).map((f) => (
                  <div key={f} className="flex items-start gap-2 carbon-body-02 text-gray-600">
                    <CheckmarkFilled className="w-4 h-4 text-[#0f62fe] flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Band */}
        <div className="p-8 rounded-xl relative overflow-hidden mb-6 bg-gradient-to-r from-[#0f62fe] to-[#4589ff]">
          <div className="flex flex-wrap items-center justify-between gap-6 relative">
            <div className="flex-1 min-w-[300px]">
              <h3 className="carbon-heading-02 text-white mb-2">Not sure which assessment fits?</h3>
              <p className="carbon-body-02 text-white/80">Our engineers can recommend the right path based on your rack density and compliance requirements.</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center gap-2 px-5 py-3 border border-white/40 text-white carbon-heading-02 hover:bg-white/10 transition-colors rounded-lg">
                {isOpen ? 'Close' : 'Compare Both'} {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              <a href="mailto:contact@perception-it.com?subject=Assessment%20Consultation%20Request" className="inline-flex items-center gap-2 px-5 py-3 bg-white text-[#0f62fe] carbon-heading-02 hover:bg-gray-50 transition-colors rounded-lg">
                Consult an Engineer <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Expandable Comparison */}
        {isOpen && (
          <div className="space-y-4 mb-6 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                <p className="carbon-label-02 text-[#24a148] uppercase mb-2">Rapid — Health Check</p>
                <p className="carbon-label-02 text-gray-400 uppercase mb-1">From</p>
                <p className="carbon-fluid-heading-03 text-gray-900 font-light mb-1">PKR 45,000*</p>
                <ul className="space-y-3">
                  {[{l:'Best for',v:'Routine maintenance, edge sites, budget planning'},{l:'Deliverable',v:'Photo log + Fix/Watch/OK list'},{l:'Precision',v:'Qualitative assessment'},{l:'Method',v:'Visual inspection + structured checklist'},{l:'Time on-site',v:'2–4 hours'},{l:'Turnaround',v:'Report within 48 hours'}].map((item) => (
                    <li key={item.l} className="flex items-start gap-2 carbon-body-02 text-gray-600"><CheckmarkFilled className="w-4 h-4 text-[#24a148] flex-shrink-0 mt-0.5" /><span><strong className="text-gray-900">{item.l}:</strong> {item.v}</span></li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                <p className="carbon-label-02 uppercase mb-2" style={{ color: "#0f62fe" }}>Engineering-Grade — Precision</p>
                <p className="carbon-label-02 text-gray-400 uppercase mb-1">From</p>
                <p className="carbon-fluid-heading-03 text-gray-900 font-light mb-1">PKR 180,000*</p>
                <ul className="space-y-3">
                  {[{l:'Best for',v:'New builds, high-density, compliance, root cause'},{l:'Deliverable',v:'3D heat maps + capacity calculations'},{l:'Precision',v:'Quantitative analysis'},{l:'Method',v:'CFD modeling + engineering analysis'},{l:'Time on-site',v:'1–2 days'},{l:'Turnaround',v:'Analysis within 1–2 weeks'}].map((item) => (
                    <li key={item.l} className="flex items-start gap-2 carbon-body-02 text-gray-600"><CheckmarkFilled className="w-4 h-4 text-[#0f62fe] flex-shrink-0 mt-0.5" /><span><strong className="text-gray-900">{item.l}:</strong> {item.v}</span></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-5 bg-[#24a148]/5 rounded-xl border border-[#24a148]/20 flex gap-4 items-start">
              <Certificate className="w-6 h-6 text-[#24a148] flex-shrink-0 mt-0.5" />
              <div><p className="carbon-label-02 text-[#24a148] uppercase mb-1">Upgrade Path</p><p className="carbon-body-02 text-gray-600">If your Health Check reveals complexity, <strong className="text-gray-900">20% of your report fee</strong> is potentially credited toward Precision Thermal Engineering when upgraded within 60 days, subject to mutual agreement. Travel and visitation charges are not included.</p></div>
            </div>
            <div className="p-5 bg-gray-100 rounded-xl flex gap-4 items-start">
              <Warning className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" />
              <div><p className="carbon-label-02 text-gray-500 uppercase mb-1">What&apos;s Not Included</p><p className="carbon-body-02 text-gray-600">Both Assessments cover audit, scoring, and recommendation only. Excludes implementation, hardware supply, ongoing monitoring, day rate and travel charges.</p></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

/* ==============================================================================
   02 PROCUREMENT — Image banner + 3-up cards + featured product
   ============================================================================== */

const ProcurementSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const cards = [
    {
      icon: Temperature,
      tag: 'Room Cooling',
      title: 'Server Room AC Units',
      desc: 'Edge sites & small server rooms up to 50kW. Wall-mounted, ceiling-suspended, and portable units.',
      features: ['Wall-mounted, ceiling-suspended, and portable units','Designed for edge sites up to 50kW heat load','Split-system and ducted configurations'],
    },
    {
      icon: Windy,
      tag: 'Precision',
      title: 'Precision Cooling (CRAC/CRAH)',
      desc: 'Data centres requiring ±1C control. In-row and perimeter units with redundancy options.',
      features: ['In-row and perimeter CRAC/CRAH units','±1C temperature control for mission-critical','N+1 and 2N redundancy configurations'],
    },
    {
      icon: DataCenter,
      tag: 'Facility',
      title: 'Large-Scale Facility Cooling',
      desc: 'Chillers, cooling towers, free cooling. Custom designs for facilities >500kW cooling load.',
      features: ['Centralised chiller plants and cooling towers','Free-cooling and adiabatic cooling','Custom designs for facilities >500kW'],
    },
  ];

  return (
    <section id="hardware" className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-10 carbon-font">
          <span className="carbon-label-02 uppercase tracking-[0.16px] mb-4 block" style={{ color: '#0f62fe' }}>02 Procurement</span>
          <h2 className="carbon-fluid-heading-05 text-[#0F172A] mb-3">Cooling Hardware</h2>
          <p className="carbon-body-02 text-gray-500 max-w-2xl">Right-sized hardware, certified for Pakistan&apos;s 45C ambient, monsoon humidity, and dust infiltration.</p>
        </div>

        <div className="relative rounded-2xl overflow-hidden mb-10 min-h-[320px] lg:min-h-[380px]">
          <img src="/3D images/Cooling and Airflow/Cooling - Procurement.png" alt="Cooling hardware procurement" className="w-full h-full object-cover absolute inset-0" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/50 to-transparent" />
          <div className="relative z-10 p-8 lg:p-12 max-w-lg">
            <p className="carbon-label-01 uppercase mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>02 Procurement</p>
            <h3 className="carbon-fluid-heading-04 text-white mb-4 leading-tight">Direct from tier-1 manufacturers</h3>
            <p className="carbon-body-02 text-white/75">We source from Huawei, Vertiv, Stulz, and others. Every unit is factory-accepted and pre-validated before shipping.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {cards.map((card) => (
            <div key={card.title} className="group relative p-8 bg-white rounded-xl border border-gray-100 hover:border-[#0f62fe] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#0f62fe]/5 flex items-center justify-center group-hover:bg-[#0f62fe]/10 transition-colors">
                <card.icon className="w-6 h-6 text-[#0f62fe]" />
              </div>
              <p className="carbon-label-02 text-gray-400 uppercase mb-3">{card.tag}</p>
              <h3 className="carbon-heading-02 text-gray-900 mb-3 pr-12">{card.title}</h3>
              <p className="carbon-body-02 text-gray-500 mb-5">{card.desc}</p>
              <div className="space-y-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                {card.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 carbon-body-02 text-gray-600">
                    <CheckmarkFilled className="w-4 h-4 text-[#0f62fe] flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 rounded-xl relative overflow-hidden mb-6 bg-gradient-to-r from-[#0f62fe] to-[#4589ff]">
          <div className="flex flex-wrap items-center justify-between gap-6 relative">
            <div className="flex-1 min-w-[300px]">
              <h3 className="carbon-heading-02 text-white mb-2">Need help choosing hardware?</h3>
              <p className="carbon-body-02 text-white/80">We procure from tier-1 manufacturers with free site survey before order placement.</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center gap-2 px-5 py-3 border border-white/40 text-white carbon-heading-02 hover:bg-white/10 transition-colors rounded-lg">
                {isOpen ? 'Close' : 'Compare Hardware'} {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              <a href="mailto:contact@perception-it.com?subject=Hardware%20Consultation%20Request" className="inline-flex items-center gap-2 px-5 py-3 bg-white text-[#0f62fe] carbon-heading-02 hover:bg-gray-50 transition-colors rounded-lg">Speak to an Engineer <ArrowRight className="w-4 h-4" /></a>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="space-y-4 mb-6 animate-fade-in">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-6 bg-white rounded-xl border border-gray-100">
                <p className="carbon-label-02 text-[#24a148] uppercase mb-4">Room AC</p>
                <ul className="space-y-3">
                  {[{l:'Best for',v:'Edge sites, small rooms, offices'},{l:'Capacity',v:'Up to 50kW per unit'},{l:'Precision',v:'±2–3C'},{l:'Lead time',v:'2–4 weeks'}].map((item) => (
                    <li key={item.l} className="flex items-start gap-2 carbon-body-02 text-gray-600"><CheckmarkFilled className="w-4 h-4 text-[#24a148] flex-shrink-0 mt-0.5" /><span><strong className="text-gray-900">{item.l}:</strong> {item.v}</span></li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-white rounded-xl border border-gray-100">
                <p className="carbon-label-02 uppercase mb-4" style={{ color: "#0f62fe" }}>Precision (CRAC/CRAH)</p>
                <ul className="space-y-3">
                  {[{l:'Best for',v:'Data centres, high-density racks'},{l:'Capacity',v:'50kW – 500kW+ per unit'},{l:'Precision',v:'±1C, ±5% RH'},{l:'Lead time',v:'4–8 weeks'}].map((item) => (
                    <li key={item.l} className="flex items-start gap-2 carbon-body-02 text-gray-600"><CheckmarkFilled className="w-4 h-4 text-[#0f62fe] flex-shrink-0 mt-0.5" /><span><strong className="text-gray-900">{item.l}:</strong> {item.v}</span></li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-white rounded-xl border border-gray-100">
                <p className="carbon-label-02 text-[#6929c4] uppercase mb-4">Facility Scale</p>
                <ul className="space-y-3">
                  {[{l:'Best for',v:'Large facilities, hyperscale'},{l:'Capacity',v:'500kW – 10MW+'},{l:'Precision',v:'±2C at room level'},{l:'Lead time',v:'8–16 weeks'}].map((item) => (
                    <li key={item.l} className="flex items-start gap-2 carbon-body-02 text-gray-600"><CheckmarkFilled className="w-4 h-4 text-[#6929c4] flex-shrink-0 mt-0.5" /><span><strong className="text-gray-900">{item.l}:</strong> {item.v}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Partner Logos */}
        <div className="mb-10">
          <p className="carbon-label-02 uppercase tracking-[0.16px] text-gray-500 mb-4">Certified Supply Chain</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-gray-200 rounded-xl overflow-hidden">
            {[
              { name: 'Huawei', src: '/logos/partners/Partner-Huawei-Logo.svg' },
              { name: 'Lenovo', src: '/logos/partners/Partner-Lenovo-Logo.svg' },
              { name: 'Dell', src: '/logos/partners/Partner-Dell-logo.svg' },
              { name: 'HP', src: '/logos/partners/Partner-%20Hewlett-Packard-Logo.svg' },
            ].map((p) => (
              <div key={p.name} className="flex items-center justify-center p-6 bg-white border-r border-b border-gray-200 last:border-r-0">
                <img src={p.src} alt={p.name} className="max-w-[180px] max-h-[48px] opacity-60 hover:opacity-100 transition-opacity" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* Featured Product */}
        <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] gap-0 rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm">
          <div className="relative bg-gray-50 flex items-center justify-center p-8 min-h-[280px]">
            <span className="absolute top-4 left-4 px-3 py-1 bg-[#0f62fe] text-white carbon-label-02 uppercase tracking-wider rounded-full text-xs">Featured Hardware</span>
            <img src="/3D images/Cooling and Airflow/FusionCool.png" alt="FusionCol8000-E cooling unit" className="max-w-[90%] max-h-[220px] object-contain" loading="lazy" />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <h3 className="carbon-heading-02 text-gray-900 font-semibold mb-3">FusionCol8000-E</h3>
            <p className="carbon-body-02 text-gray-600 mb-6">Enterprise-grade precision cooling for high-density data centres. In-row and perimeter deployment, ±1C control, N+1 redundancy ready.</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[{l:'Cooling Capacity',v:'Up to 100kW'},{l:'Control Precision',v:'±1C / ±5% RH'},{l:'Redundancy',v:'N+1 ready'},{l:'Deploy',v:'In-row or perimeter'}].map((s) => (
                <div key={s.l}><p className="carbon-label-02 text-gray-400 uppercase text-[11px] mb-1">{s.l}</p><p className="carbon-body-02 text-gray-900 font-medium">{s.v}</p></div>
              ))}
            </div>
            <div className="flex gap-3">
              <button onClick={() => alert('Datasheet coming soon')} className="inline-flex items-center gap-2 px-5 py-3 border border-gray-300 text-gray-700 carbon-heading-02 hover:border-[#0f62fe] hover:text-[#0f62fe] transition-colors rounded-lg">Get Datasheet</button>
              <a href="mailto:contact@perception-it.com?subject=FusionCol8000-E%20Enquiry" className="inline-flex items-center gap-2 px-5 py-3 bg-[#0f62fe] text-white carbon-heading-02 hover:bg-[#0353e9] transition-colors rounded-lg">Enquire Now <ArrowRight className="w-4 h-4" /></a>
            </div>
          </div>
        </div>

        {/* Scope Boundary */}
        <div className="mt-10 p-5 bg-gray-100 rounded-xl flex gap-4 items-start">
          <Warning className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="carbon-label-02 text-gray-500 uppercase mb-1">Scope</p>
            <p className="carbon-body-02 text-gray-600">Procurement covers hardware supply and manufacturer warranty administration only. Installation, piping, ducting, commissioning validation, and ongoing maintenance are scoped separately under Deployment and Managed Services.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==============================================================================
   03 DEPLOYMENT — Image banner + step cards + process timeline
   ============================================================================== */

const DeploymentSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const steps = [
    {
      num: '01',
      icon: Settings,
      title: 'Mechanical Installation',
      desc: 'Positioning, refrigerant lines, drains, electrical connections. Every install is validated for Pakistan\'s peak conditions.',
    },
    {
      num: '02',
      icon: TemperatureHot,
      title: 'Thermal Validation',
      desc: 'IR mapping, CFD simulation, load-bank testing. We test at 45C ambient and 80% RH to guarantee performance.',
    },
    {
      num: '03',
      icon: Certificate,
      title: 'Commissioning & Handover',
      desc: 'Setpoint calibration, DCIM integration, as-built docs. Full operator handover with monitoring dashboard onboarding.',
    },
  ];

  return (
    <section id="installation" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-10 carbon-font">
          <span className="carbon-label-02 uppercase tracking-[0.16px] mb-4 block" style={{ color: "#0f62fe" }}>03 Deployment</span>
          <h2 className="carbon-fluid-heading-05 text-[#0F172A] mb-3">Deployment & Commissioning</h2>
          <p className="carbon-body-02 text-gray-500 max-w-2xl">Thermal continuity is won or lost at installation. 4-phase deployment with full validation.</p>
        </div>

        <div className="relative rounded-2xl overflow-hidden mb-10 min-h-[320px] lg:min-h-[380px]">
          <img src="/3D images/Cooling and Airflow/Deployment- Cooling.png" alt="Cooling system deployment" className="w-full h-full object-cover absolute inset-0" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/50 to-transparent" />
          <div className="relative z-10 p-8 lg:p-12 max-w-lg">
            <p className="carbon-label-01 uppercase mb-3" style={{ color: "rgba(255,255,255,0.7)" }}>03 Deployment</p>
            <h3 className="carbon-fluid-heading-04 text-white mb-4 leading-tight">Installation is where cooling wins or fails</h3>
            <p className="carbon-body-02 text-white/75">60% of cooling failures are installation-related. Our protocol prevents that.</p>
          </div>
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {steps.map((step) => (
            <div key={step.title} className="group relative p-8 bg-white rounded-xl border border-gray-100 hover:border-[#0f62fe] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-[#0f62fe]/5 flex items-center justify-center group-hover:bg-[#0f62fe]/10 transition-colors">
                  <step.icon className="w-6 h-6 text-[#0f62fe]" />
                </div>
                <span className="carbon-fluid-heading-04 text-gray-200 font-light">{step.num}</span>
              </div>
              <h3 className="carbon-heading-02 text-gray-900 mb-3">{step.title}</h3>
              <p className="carbon-body-02 text-gray-500">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[{n:'8 weeks',l:'Typical deployment'},{n:'45C',l:'Tested ambient'},{n:'100%',l:'Load-bank validated'},{n:'0',l:'Downtime commitment'}].map((s) => (
            <div key={s.l} className="p-6 bg-gray-50 rounded-xl text-center border border-gray-100">
              <p className="carbon-fluid-heading-04 text-[#0f62fe] font-light mb-1">{s.n}</p>
              <p className="carbon-body-02 text-gray-500">{s.l}</p>
            </div>
          ))}
        </div>

        <div className="p-8 rounded-xl relative overflow-hidden mb-6 bg-gradient-to-r from-[#0f62fe] to-[#4589ff]">
          <div className="flex flex-wrap items-center justify-between gap-6 relative">
            <div className="flex-1 min-w-[300px]">
              <h3 className="carbon-heading-02 text-white mb-2">Need deployment planning?</h3>
              <p className="carbon-body-02 text-white/80">Our deployment team understands Pakistani power conditions better than anyone.</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center gap-2 px-5 py-3 border border-white/40 text-white carbon-heading-02 hover:bg-white/10 transition-colors rounded-lg">
                {isOpen ? 'Close' : 'View Full Process'} {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              <a href="mailto:contact@perception-it.com?subject=Deployment%20Consultation%20Request" className="inline-flex items-center gap-2 px-5 py-3 bg-white text-[#0f62fe] carbon-heading-02 hover:bg-gray-50 transition-colors rounded-lg">Discuss Timeline <ArrowRight className="w-4 h-4" /></a>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="space-y-4 mb-6 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                <p className="carbon-label-02 text-[#da1e28] uppercase mb-4">Common Installation Failures</p>
                <ul className="space-y-3">
                  {[{l:'Refrigerant charge',v:'Incorrect charge causes 40% of first-year failures'},{l:'Condensate drains',v:'Undersized drains flood during monsoon humidity'},{l:'Thermal validation',v:'Missing validation leaves hotspots undetected'}].map((item) => (
                    <li key={item.l} className="flex items-start gap-2 carbon-body-02 text-gray-600"><Warning className="w-4 h-4 text-[#da1e28] flex-shrink-0 mt-0.5" /><span><strong className="text-gray-900">{item.l}:</strong> {item.v}</span></li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                <p className="carbon-label-02 uppercase mb-4" style={{ color: "#0f62fe" }}>Our Deployment Protocol</p>
                <ul className="space-y-3">
                  {[{l:'Site survey',v:'Thermal load, airflow path, electrical capacity'},{l:'Placement design',v:'CFD-validated layout for optimal airflow'},{l:'Monsoon hardening',v:'Drain sizing, seal verification, humidity buffers'},{l:'Start-up & balancing',v:'Load-bank test, setpoint calibration, failover'},{l:'As-built docs',v:'Full documentation and operator handover'}].map((item) => (
                    <li key={item.l} className="flex items-start gap-2 carbon-body-02 text-gray-600"><CheckmarkFilled className="w-4 h-4 text-[#0f62fe] flex-shrink-0 mt-0.5" /><span><strong className="text-gray-900">{item.l}:</strong> {item.v}</span></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-5 bg-[#24a148]/5 rounded-xl border border-[#24a148]/20 flex gap-4 items-start">
              <Certificate className="w-6 h-6 text-[#24a148] flex-shrink-0 mt-0.5" />
              <div><p className="carbon-label-02 text-[#24a148] uppercase mb-1">45C+ Ambient Rated</p><p className="carbon-body-02 text-gray-600">Every installation is validated for Pakistan&apos;s peak summer conditions. We test at 45C ambient and 80% RH.</p></div>
            </div>

            {/* Scope Boundary */}
            <div className="p-5 bg-gray-100 rounded-xl flex gap-4 items-start">
              <Warning className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="carbon-label-02 text-gray-500 uppercase mb-1">Scope</p>
                <p className="carbon-body-02 text-gray-600">Deployment covers mechanical installation, thermal validation, and commissioning only. Capacity planning, monsoon/dust hardening engineering, and SLA-backed uptime targets are scoped separately under Assessment and Managed Services.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

/* ==============================================================================
   04 MANAGED SERVICES — Image banner + tier cards + comparison
   ============================================================================== */

const ManagedSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const tiers = [
    {
      name: 'Essential',
      price: 'PKR 65K*',
      period: '/mo',
      accent: '#6f6f6f',
      items: ['Quarterly preventive maintenance','Filter replacement','Refrigerant check','Basic telemetry review'],
    },
    {
      name: 'Professional',
      price: 'PKR 145K*',
      period: '/mo',
      accent: '#0f62fe',
      items: ['Monthly preventive maintenance','8-hour response SLA','Predictive alerts','Thermal trending report','Spare parts pre-staging','Remote monitoring'],
      recommended: true,
    },
    {
      name: 'Enterprise',
      price: 'PKR 380K+*',
      period: '/mo',
      accent: '#6929c4',
      items: ['24/7 NOC monitoring (3 hubs)','4-hour response SLA','Monsoon standby engineers','Quarterly room integrity validation','99.9% uptime target under signed SLA','Predictive alerts','On-site spare parts pre-staged'],
    },
  ];

  return (
    <section id="managed" className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-10 carbon-font">
          <span className="carbon-label-02 uppercase tracking-[0.16px] mb-4 block" style={{ color: '#0f62fe' }}>04 Managed Services</span>
          <h2 className="carbon-fluid-heading-05 text-[#0F172A] mb-3">24/7 Managed Thermal Services</h2>
          <p className="carbon-body-02 text-gray-500 max-w-2xl">Filters clog. Refrigerant leaks. Setpoints drift. Our managed service catches degradation before it becomes an outage.</p>
        </div>

        <div className="relative rounded-2xl overflow-hidden mb-10 min-h-[320px] lg:min-h-[380px]">
          <img src="/3D images/Cooling and Airflow/managed service - Cooling - page.png" alt="Managed thermal services" className="w-full h-full object-cover absolute inset-0" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/50 to-transparent" />
          <div className="relative z-10 p-8 lg:p-12 max-w-lg">
            <p className="carbon-label-01 uppercase mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>04 Managed Services</p>
            <h3 className="carbon-fluid-heading-04 text-white mb-4 leading-tight">Thermal continuity does not end at handover</h3>
            <p className="carbon-body-02 text-white/75">Quarterly validation, monsoon standby engineers, and 24/7 NOC monitoring.</p>
          </div>
        </div>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {tiers.map((tier) => (
            <div key={tier.name} className={`group relative p-8 bg-white rounded-xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${tier.recommended ? 'border-[#0f62fe] ring-1 ring-[#0f62fe]' : 'border-gray-100 hover:border-[#0f62fe]'}`}>
              {tier.recommended && (
                <span className="absolute -top-3 left-8 px-3 py-1 bg-[#0f62fe] text-white carbon-label-02 uppercase tracking-wider text-[10px] rounded-full">Recommended</span>
              )}
              <div className="mb-6">
                <p className="carbon-label-02 uppercase mb-2" style={{ color: tier.accent }}>{tier.name}</p>
                <p className="carbon-label-02 text-gray-400 uppercase mb-1">From</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="carbon-fluid-heading-03 text-gray-900 font-light">{tier.price}</span>
                  <span className="carbon-body-02 text-gray-400">{tier.period}</span>
                </div>
                <p className="carbon-helper-text-01 text-gray-400 mb-4">*Starting price. Scales with cooling load and SLA tier.</p>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 carbon-body-02 text-gray-600">
                    <CheckmarkFilled className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: tier.accent }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="mailto:contact@perception-it.com?subject=Managed%20Services%20Enquiry" className={`inline-flex items-center gap-2 px-5 py-3 w-full justify-center carbon-heading-02 rounded-lg transition-colors ${tier.recommended ? 'bg-[#0f62fe] text-white hover:bg-[#0353e9]' : 'border border-gray-300 text-gray-700 hover:border-[#0f62fe] hover:text-[#0f62fe]'}`}>
                Choose {tier.name}
              </a>
            </div>
          ))}
        </div>

        <div className="p-8 rounded-xl relative overflow-hidden mb-6 bg-gradient-to-r from-[#0f62fe] to-[#4589ff]">
          <div className="flex flex-wrap items-center justify-between gap-6 relative">
            <div className="flex-1 min-w-[300px]">
              <h3 className="carbon-heading-02 text-white mb-2">Not sure which tier fits?</h3>
              <p className="carbon-body-02 text-white/80">Most mid-size data centres start with Professional. We can assess your cooling load in a 30-minute call.</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center gap-2 px-5 py-3 border border-white/40 text-white carbon-heading-02 hover:bg-white/10 transition-colors rounded-lg">
                {isOpen ? 'Close' : 'Compare All Tiers'} {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              <a href="mailto:contact@perception-it.com?subject=Managed%20Services%20Consultation" className="inline-flex items-center gap-2 px-5 py-3 bg-white text-[#0f62fe] carbon-heading-02 hover:bg-gray-50 transition-colors rounded-lg">Book a Call <ArrowRight className="w-4 h-4" /></a>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="space-y-4 mb-6 animate-fade-in">
            <div className="grid md:grid-cols-3 gap-4">
              {tiers.map((tier) => (
                <div key={tier.name} className="p-6 bg-white rounded-xl border border-gray-100" style={{ borderTopWidth: '4px', borderTopColor: tier.accent }}>
                  <p className="carbon-label-01 uppercase mb-3" style={{ color: tier.accent }}>{tier.name}</p>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="carbon-fluid-heading-03 text-gray-900 font-light">{tier.price}</span>
                    <span className="carbon-body-02 text-gray-400">{tier.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {tier.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 carbon-body-02 text-gray-600"><CheckmarkFilled className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: tier.accent }} /><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="p-5 bg-[#24a148]/5 rounded-xl border border-[#24a148]/20 flex gap-4 items-start">
              <Certificate className="w-6 h-6 text-[#24a148] flex-shrink-0 mt-0.5" />
              <div><p className="carbon-label-02 text-[#24a148] uppercase mb-1">SLA-Backed Uptime</p><p className="carbon-body-02 text-gray-600">Enterprise tier includes a signed SLA with 99.9% uptime target, 4-hour on-site response, and dedicated monsoon standby engineers.</p></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};


/* ==============================================================================
   05 RESULTS — Testimonials + Project Grid
   ============================================================================== */

const TESTIMONIALS = [
  {
    quote: "Perception IT transformed our server infrastructure from a risk into a reliable engine for operations. With 48 critical Lenovo servers supporting our production and financial systems, any downtime could have cost us millions. Their 24/7 support, same-day hardware replacements, and proactive maintenance have kept our systems running without a single major incident. We now operate with confidence knowing our IT backbone is in expert hands.",
    author: 'Mr. Usman Zafar',
    org: 'Head of IT, Ibrahim Fibres Limited',
    logo: '/logos/clients/IFL-logo.png',
    bg: 'from-[#0f62fe] to-[#4589ff]',
  },
  {
    quote: "Perception IT's cooling solutions have significantly improved our data centre reliability. Their thermal assessments identified critical hotspots we weren't aware of, and their proactive monitoring has prevented several potential outages. The team's expertise in Pakistan's climate conditions is unmatched.",
    author: 'Chief Technology Officer',
    org: 'Descon Engineering',
    logo: '/logos/clients/Descon-logo.png',
    bg: 'from-[#6929c4] to-[#8a3ffc]',
  },
  {
    quote: 'The cooling refresh project delivered exceptional results. Our PUE dropped from 1.8 to 1.35, and we have seen 40% energy savings over the past year. The Perception IT team managed the entire migration with zero downtime, which was critical for our operations.',
    author: 'Head of Infrastructure',
    org: 'Mayfair Group',
    logo: '/logos/clients/mayfair%20logo%20svg.svg',
    bg: 'from-[#009d9a] to-[#007d79]',
  },
  {
    quote: "Perception IT understood our unique challenges as a textile manufacturer. Their custom cooling solution with 45°C ambient rating has given us 60% additional capacity. The monsoon-hardened design means we no longer worry about humidity-related failures during the rainy season.",
    author: 'Plant Operations Manager',
    org: 'Sefam Private Limited',
    logo: '/logos/clients/IFL-logo.png',
    bg: 'from-[#0043ce] to-[#0f62fe]',
  },
  {
    quote: "Perception IT delivered a comprehensive thermal assessment and cooling upgrade for our research data centre. Their understanding of high-density compute loads and Pakistan's power challenges was exceptional. The new precision cooling system maintains stable temperatures even during extended load-shedding periods.",
    author: 'Director of IT Infrastructure',
    org: 'Lahore University of Management Sciences',
    logo: '/logos/clients/LUMS-Logo.png',
    bg: 'from-[#8a3ffc] to-[#6929c4]',
  },
];

const PROJECTS = [
  { title: 'Multi-Site Precision Cooling Deployment', org: 'Leading Pakistani Bank', year: '2024', desc: 'Deployed precision cooling units across four data centres, reducing PUE from 1.8 to 1.35.', outcomes: ['PUE reduced from 1.8 to 1.35','N+1 redundancy achieved','8-week deployment timeline'] },
  { title: 'Thermal Runaway Prevention', org: 'Financial Institution', year: '2023', desc: 'Redesigned airflow management preventing thermal runaway and extending equipment lifespan.', outcomes: ['Hotspots eliminated','3°C average temperature reduction','Annual cooling cost savings of 25%'] },
  { title: 'Monsoon Season Resilience', org: 'E-commerce Platform', year: '2024', desc: 'Implemented humidity control and drainage systems to maintain operations during monsoon season.', outcomes: ['Zero humidity-related outages','99.9% uptime maintained','Reduced equipment corrosion by 40%'] },
  { title: 'Legacy Cooling System Modernisation', org: 'Government Agency', year: '2023', desc: 'Upgraded 15-year-old cooling infrastructure with modern precision units and smart controls.', outcomes: ['Cooling efficiency improved by 45%','Remote monitoring implemented','Maintenance costs reduced by 30%'] },
  { title: 'Edge Site Thermal Management', org: 'Telecom Provider', year: '2024', desc: 'Designed and deployed compact cooling solutions for 12 edge data centres across Pakistan.', outcomes: ['Standardised cooling across all sites','Remote monitoring for all locations','Deployment completed in 6 weeks'] },
  { title: 'Data Centre Expansion Cooling', org: 'Cloud Provider', year: '2024', desc: 'Scaled cooling capacity by 200% to support data centre expansion while maintaining efficiency.', outcomes: ['200% capacity increase','PUE maintained at 1.4','Phased deployment minimising downtime'] },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = TESTIMONIALS.length;

  const goTo = (idx: number) => {
    setCurrent(((idx % total) + total) % total);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % total), 6000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [total]);

  const t = TESTIMONIALS[current];

  return (
    <div className={`relative overflow-hidden rounded-xl bg-gradient-to-r ${t.bg} p-8 md:p-12 transition-all duration-700`}>
      <Quotes className="absolute top-4 left-4 w-16 h-16 text-white/10" />
      <div className="relative z-10">
        {/* Logo */}
        {t.logo && (
          <div className="mb-6 p-2 bg-white rounded inline-block shadow-sm">
            <img
              src={t.logo}
              alt={t.org}
              className="h-10 w-auto"
            />
          </div>
        )}
        <p className="carbon-fluid-heading-03 text-white mb-6 leading-relaxed">"{t.quote}"</p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <span className="carbon-body-01 text-white font-semibold">{t.author.charAt(0)}</span>
          </div>
          <div>
            <p className="carbon-heading-02 text-white">{t.author}</p>
            <p className="carbon-body-02 text-white/70">{t.org}</p>
          </div>
        </div>
      </div>

      {/* Footer: dots + counter + nav */}
      <div className="flex items-center justify-between mt-8">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${i === current ? 'bg-white w-6' : 'bg-white/40 w-2'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <span className="carbon-label-01 text-white/60">
            {current + 1} / {total}
          </span>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => goTo(current - 1)}
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => goTo(current + 1)}
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }: { project: typeof PROJECTS[0]; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`${styles.projectCard} rounded-xl overflow-hidden bg-white transition-all duration-500 border border-[#e0e0e0] hover:border-[#0f62fe]`} style={{ animationDelay: `${index * 100}ms` }}>
      <div className="relative h-48 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100`} />
        <div className="absolute inset-0 flex items-center justify-center">
          <Settings className="w-12 h-12 text-[#0f62fe]/20" />
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full"><span className="carbon-label-01 text-gray-600">{project.year}</span></div>
      </div>
      <div className="p-6">
        <p className="carbon-label-02 uppercase mb-2" style={{ color: "#0f62fe" }}>{project.org}</p>
        <h3 className="carbon-heading-02 text-gray-900 mb-3">{project.title}</h3>
        <p className="carbon-body-02 text-gray-500 mb-4">{project.desc}</p>
        <button onClick={() => setExpanded(!expanded)} className="inline-flex items-center gap-2 text-[#0f62fe] carbon-heading-02 hover:underline">
          {expanded ? 'Hide details' : 'View outcomes'} {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>
      {expanded && (
        <div className={`${styles.projectCard__outcomes} p-6 pt-0`}>
          <ul className="space-y-2">
            {project.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-2 carbon-body-02 text-gray-600"><CheckmarkFilled className="w-4 h-4 text-[#0f62fe] flex-shrink-0 mt-0.5" /><span>{outcome}</span></li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const ProjectCardGrid = () => {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(PROJECTS.length / perPage);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.slice(page * perPage, (page + 1) * perPage).map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          <button onClick={() => setPage(Math.max(0, page - 1))} disabled={page === 0} className={`${styles.projectPagination} ${page === 0 ? 'opacity-40 cursor-not-allowed' : ''}`}><ChevronLeft className="w-5 h-5" /></button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i} onClick={() => setPage(i)} className={`w-10 h-10 rounded-lg flex items-center justify-center carbon-body-02 transition-all ${page === i ? 'bg-[#0f62fe] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{i + 1}</button>
          ))}
          <button onClick={() => setPage(Math.min(totalPages - 1, page + 1))} disabled={page === totalPages - 1} className={`${styles.projectPagination} ${page === totalPages - 1 ? 'opacity-40 cursor-not-allowed' : ''}`}><ChevronRight className="w-5 h-5" /></button>
        </div>
      )}
    </div>
  );
};

const ResultsSection = () => {
  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12 carbon-font">
          <span className="carbon-label-02 uppercase tracking-[0.16px] mb-4 block" style={{ color: "#0f62fe" }}>Results</span>
          <h2 className="carbon-fluid-heading-05 text-[#0F172A] mb-4">What Our Clients Say</h2>
        </div>
        <div className="mb-16">
          <TestimonialCarousel />
        </div>
        <div className="mb-8">
          <h3 className="carbon-fluid-heading-04 text-[#0F172A] mb-6">Project Outcomes</h3>
          <ProjectCardGrid />
        </div>
      </div>
    </section>
  );
};
/* ==============================================================================
   06 ECOSYSTEM — Integrated Services
   ============================================================================== */

const ECOSYSTEM_ITEMS = [
  { icon: Security, title: 'Security', desc: 'Physical access control and environmental monitoring.' },
  { icon: DataCenter, title: 'Structured Cabling', desc: 'High-density fibre and copper infrastructure.' },
  { icon: Dashboard, title: 'Data Centre Builds', desc: 'Design, fit-out, and commissioning.' },
  { icon: Cloud, title: 'Cloud Integration', desc: 'Hybrid cloud architecture and migration.' },
  { icon: Renew, title: 'Hardware Refresh', desc: 'Lifecycle management and disposal.' },
];

const EcosystemSection = () => {
  return (
    <section id="ecosystem" className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12 carbon-font">
          <span className="carbon-label-02 uppercase tracking-[0.16px] mb-4 block" style={{ color: "#0f62fe" }}>Facility Ecosystem</span>
          <h2 className="carbon-fluid-heading-05 text-[#0F172A] mb-4">Integrated Data Centre Services</h2>
          <p className="carbon-body-02 text-gray-500 max-w-2xl">Cooling does not exist in isolation. Our services connect thermal management with power, cabling, security, and cloud — from a single accountable team.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {ECOSYSTEM_ITEMS.map((item) => (
            <div key={item.title} className="group p-6 bg-white rounded-xl border border-gray-100 hover:border-[#0f62fe] transition-all duration-300 hover:shadow-lg cursor-pointer">
              <item.icon className="w-8 h-8 text-[#0f62fe] mb-4 group-hover:scale-110 transition-transform" />
              <p className="carbon-heading-02 text-gray-900 mb-2">{item.title}</p>
              <p className="carbon-body-02 text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl border border-gray-100 text-center">
            <p className="carbon-fluid-heading-04 text-[#0f62fe] font-light mb-2">Single Point</p>
            <p className="carbon-body-02 text-gray-500">One partner for all data centre infrastructure needs</p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-gray-100 text-center">
            <p className="carbon-fluid-heading-04 text-[#0f62fe] font-light mb-2">Unified SLA</p>
            <p className="carbon-body-02 text-gray-500">One service level agreement across all services</p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-gray-100 text-center">
            <p className="carbon-fluid-heading-04 text-[#0f62fe] font-light mb-2">Accountable</p>
            <p className="carbon-body-02 text-gray-500">One team accountable for cross-service issues</p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==============================================================================
   07 FAQ
   ============================================================================== */

const FAQ_ITEMS = [
  { q: 'How long does a thermal assessment take?', a: 'A standard assessment takes 2-3 days on-site, plus 5 business days for report delivery. For multi-site deployments, we parallelise teams to compress the timeline.' },
  { q: 'Can you work with existing cooling equipment?', a: 'Yes. Our assessment includes retrofit recommendations for existing infrastructure. We design solutions that maximise reuse while achieving target PUE.' },
  { q: 'What is the typical ROI on precision cooling?', a: 'Most clients see ROI within 18-24 months through reduced energy costs, deferred capital expenditure on expansion, and prevented thermal-related downtime.' },
  { q: 'Do you provide emergency cooling response?', a: 'Enterprise managed services include 24/7 emergency response with 4-hour on-site SLA. We maintain portable cooling units in Karachi, Lahore, and Islamabad for rapid deployment.' },
  { q: 'How do you handle monsoon humidity?', a: 'Our designs include humidity control systems, drainage redundancy, and monsoon-specific maintenance protocols. Enterprise tier includes dedicated monsoon standby engineers.' },
  { q: 'What certifications do your engineers hold?', a: 'Our deployment engineers hold manufacturer certifications from Huawei, Vertiv, and Stulz. Our NOC team includes certified thermal analysts and CFD specialists.' },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12 carbon-font">
          <span className="carbon-label-02 uppercase tracking-[0.16px] mb-4 block" style={{ color: "#0f62fe" }}>FAQ</span>
          <h2 className="carbon-fluid-heading-05 text-[#0F172A] mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-4xl">
          <Accordion>
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} title={item.q}>
                <p className="carbon-body-02 text-gray-600">{item.a}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

/* ==============================================================================
   08 CTA — Final Banner
   ============================================================================== */

const CTASection = () => {
  return (
    <section id="cta" className="py-20 bg-[#0f62fe]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="carbon-fluid-heading-04 text-white mb-4">Ready to optimise your data centre cooling?</h2>
            <p className="carbon-body-02 text-white/80 max-w-xl">Call us for a free 15-minute consultation. We will guide you on the right assessment path and next steps for your facility.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:contact@perception-it.com?subject=Cooling%20Assessment%20Request" className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-[#0f62fe] carbon-heading-02 hover:bg-gray-50 transition-colors rounded-lg">
              Book Free Call <ArrowRight className="w-5 h-5" />
            </a>
            <a href="tel:+923001234567" className="inline-flex items-center justify-center gap-2 px-6 py-4 border-2 border-white text-white carbon-heading-02 hover:bg-white/10 transition-colors rounded-lg">
              Call Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==============================================================================
   MAIN PAGE COMPONENT
   ============================================================================== */

const CoolingThermal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <CarbonHeader />
      <HeroSection />
      <TrustTiles />
      <StickyAnchorNav />
      <ServicesHeader />
      <AssessmentSection />
      <ProcurementSection />
      <DeploymentSection />
      <ManagedSection />
      <ResultsSection />
      <EcosystemSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default CoolingThermal;
