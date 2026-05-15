import { useState, useEffect, useRef } from 'react';
import styles from './CoolingThermal.module.css';
import {
  Accordion, AccordionItem,
} from '@carbon/react';
import {
  ArrowRight, CheckmarkFilled, ChevronLeft, ChevronRight,
  TemperatureHot, Warning, Settings, Meter, Certificate,
  Dashboard, Search, ChevronUp, ChevronDown, DataCenter,
  Quotes, Windy, Temperature, ChartLine,
} from '@carbon/icons-react';

import CoolingNav from './CoolingNav';
import HeroCoolingGraphics from '../../components/HeroCoolingGraphics';
import Footer from '../../sections/Footer';
import '../../styles/carbon-typography.css';

/* ==============================================================================
   GA4 TRACKING
   ============================================================================== */
const gtag = (window as any).gtag || ((...args: any[]) => { console.log('[GA4]', ...args); });

const trackEvent = (eventName: string, params?: Record<string, any>) => {
  try {
    gtag('event', eventName, params);
  } catch {
    /* silent fail */
  }
};

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
          <span className="carbon-label-02" style={{ color: "#0f62fe" }}>Engineered for Pakistan&apos;s 45°C summers</span>
        </div>
        <h1 className="carbon-fluid-display-03 text-[#161616] mb-6 relative">
          <span className="block">Precision Cooling &amp; Thermal Continuity</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0f62fe] to-[#8a3ffc]">for Data Centres</span>
        </h1>
        <p className="carbon-fluid-heading-03 text-[#525252] mb-5">
          One partner, End-to-End Thermal Management.
        </p>
        <div className="flex flex-wrap items-center gap-1 carbon-label-02 mb-8">
          {['Assessment','Procurement','Deployment','24/7 Monitoring'].map((step,i)=> (
            <div key={step} className="flex items-center">
              <span className={`px-2 py-1 transition-colors ${i===3?'bg-[#0f62fe] text-white rounded':'text-[#6f6f6f]'}`}>{step}</span>
              {i<3 && <span className="text-[#c6c6c6] mx-1">→</span>}
            </div>
          ))}
        </div>
        <div className="max-w-2xl mb-8">
          <p className="carbon-body-02 text-[#525252]">
            Engineered for Pakistan: 45°C summers, monsoon humidity, dust, and grid instability.
          </p>
        </div>
        <div className="flex flex-wrap items-stretch gap-4">
          <a href="mailto:contact@perception-it.com?subject=Free%20Cooling%20Consultation%20Request" className="group inline-flex items-center gap-3 px-8 h-14 bg-gradient-to-r from-[#0f62fe] to-[#4589ff] text-white carbon-heading-02 hover:from-[#0353e9] hover:to-[#0f62fe] transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 rounded-lg">
            Speak to an Engineer
          </a>
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
    { icon: TemperatureHot, headline: '45°C Ambient Rated', subtext: 'Pakistan-specific derating', color: '#0f62fe' },
    { icon: Meter, headline: 'IR Thermal Mapping', subtext: '90-minute on-site audit', color: '#6929c4' },
    { icon: Dashboard, headline: '24/7 NOC Monitoring', subtext: 'Real-time thermal alerts', color: '#24a148' },
    { icon: Certificate, headline: 'SLA-Backed Uptime*', subtext: '99.9%* with 4-hour* response', color: '#0f62fe' },
    { icon: Settings, headline: 'Zero-Downtime Deploy', subtext: 'Install without interruption', color: '#6929c4' },
    { icon: CheckmarkFilled, headline: 'Monsoon Hardened', subtext: 'Humidity & dust validated', color: '#24a148' },
  ];
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-10 carbon-font">
          <h2 className="carbon-fluid-heading-04 text-[#0F172A] mb-3">Why Perception IT</h2>
          <p className="carbon-body-02 text-gray-500 max-w-2xl mx-auto">Engineered for Pakistan's climate. Validated for your facility.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {tiles.map((tile) => (
            <div key={tile.headline} className="group p-4 bg-gray-50 border border-gray-100 hover:border-[#0f62fe] hover:shadow-md transition-all cursor-default rounded-lg">
              <div className="w-10 h-10 bg-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform rounded-lg">
                <tile.icon className="w-5 h-5" style={{ color: tile.color }} />
              </div>
              <p className="carbon-label-02 text-gray-900 leading-tight mb-1">{tile.headline}</p>
              <p className="carbon-helper-text-01 text-gray-500">{tile.subtext}</p>
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
      <p className="carbon-body-02 text-gray-600 max-w-2xl mx-auto mb-10">
        A clear 4-phase pathway with defined deliverables at each stage.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
        {[
          { num: '01', label: 'Assess', icon: Search, color: '#0f62fe' },
          { num: '02', label: 'Procure', icon: Temperature, color: '#6929c4' },
          { num: '03', label: 'Deploy', icon: Settings, color: '#0f62fe' },
          { num: '04', label: 'Monitor', icon: Dashboard, color: '#6929c4' },
        ].map((step, i) => (
          <div key={step.label} className="flex items-center gap-2 md:gap-4">
            <div className="flex items-center gap-2 md:gap-3 px-3 py-2 md:px-4 md:py-3 bg-white border border-gray-200 rounded-lg">
              <span className="w-6 h-6 md:w-7 md:h-7 bg-[#0f62fe] text-white flex items-center justify-center carbon-label-01 rounded">{step.num}</span>
              <step.icon className="w-4 h-4 md:w-5 md:h-5 hidden sm:block" style={{ color: step.color }} />
              <span className="carbon-label-02 text-gray-900">{step.label}</span>
            </div>
            {i < 3 && <ArrowRight className="w-4 h-4 text-gray-300 hidden sm:block" />}
          </div>
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
          <h2 className="carbon-fluid-heading-04 text-[#0F172A] mb-3">Choose Your Assessment Path</h2>
          <p className="carbon-body-02 text-gray-500 max-w-2xl">Two options. One goal: Understand your thermal reality before you spend.</p>
        </div>

        {/* Image Banner */}
        <div className="relative rounded-2xl overflow-hidden mb-10 min-h-[320px] lg:min-h-[380px]">
          <img src="/3D images/Cooling and Airflow/Cooling - Assesment.png" alt="Thermal assessment" className="w-full h-full object-cover absolute inset-0" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/50 to-transparent" />
          <div className="relative z-10 p-8 lg:p-12 max-w-lg">
            <p className="carbon-label-01 uppercase mb-3" style={{ color: "rgba(255,255,255,0.7)" }}>01 Assessment</p>
            <h3 className="carbon-fluid-heading-03 text-white mb-4 leading-tight">Thermal clarity before capital spend</h3>
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
        <div className="p-8 rounded-xl relative overflow-hidden mb-6 bg-white border border-[#0f62fe]">
          <div className="flex flex-wrap items-center justify-between gap-6 relative">
            <div className="flex-1 min-w-[300px]">
              <h3 className="carbon-heading-02 text-gray-900 mb-2">Not sure which thermal assessment fits?</h3>
              <p className="carbon-body-02 text-gray-600">Our engineers can recommend the right path based on your rack density and compliance requirements.</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center gap-2 px-5 py-3 border border-gray-300 text-gray-700 carbon-heading-02 hover:border-[#0f62fe] hover:text-[#0f62fe] transition-colors rounded-lg">
                {isOpen ? 'Close' : 'Compare Both'} {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              <a href="mailto:contact@perception-it.com?subject=Assessment%20Consultation%20Request" className="inline-flex items-center gap-2 px-5 py-3 bg-[#0f62fe] text-white carbon-heading-02 hover:bg-[#0353e9] transition-colors rounded-lg">
                Speak to an Engineer
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
                  {[{l:'Best for',v:'New builds, high-density, compliance, root cause'},{l:'Deliverable',v:'3D heat maps + capacity calculations'},{l:'Precision',v:'Quantitative analysis'},{l:'Method',v:'CFD modelling + engineering analysis'},{l:'Time on-site',v:'1–2 days'},{l:'Turnaround',v:'Analysis within 1–2 weeks'}].map((item) => (
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
      desc: 'Data centres requiring ±1°C control. In-row and perimeter units with redundancy options.',
      features: ['In-row and perimeter CRAC/CRAH units','±1°C temperature control for mission-critical','N+1 and 2N redundancy configurations'],
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
          <h2 className="carbon-fluid-heading-04 text-[#0F172A] mb-3">Cooling Hardware</h2>
          <p className="carbon-body-02 text-gray-500 max-w-2xl">Right-sized hardware, certified for Pakistan&apos;s 45°C ambient, monsoon humidity, and dust infiltration.</p>
        </div>

        <div className="relative rounded-2xl overflow-hidden mb-10 min-h-[320px] lg:min-h-[380px]">
          <img src="/3D images/Cooling and Airflow/Cooling - Procurement.png" alt="Cooling hardware procurement" className="w-full h-full object-cover absolute inset-0" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/50 to-transparent" />
          <div className="relative z-10 p-8 lg:p-12 max-w-lg">
            <p className="carbon-label-01 uppercase mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>02 Procurement</p>
            <h3 className="carbon-fluid-heading-03 text-white mb-4 leading-tight">Direct from Tier 1 manufacturers</h3>
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

        <div className="p-8 rounded-xl relative overflow-hidden mb-6 bg-white border border-[#0f62fe]">
          <div className="flex flex-wrap items-center justify-between gap-6 relative">
            <div className="flex-1 min-w-[300px]">
              <h3 className="carbon-heading-02 text-gray-900 mb-2">Need help choosing hardware?</h3>
              <p className="carbon-body-02 text-gray-600">We procure from Tier 1 manufacturers with free site survey before order placement.</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center gap-2 px-5 py-3 border border-gray-300 text-gray-700 carbon-heading-02 hover:border-[#0f62fe] hover:text-[#0f62fe] transition-colors rounded-lg">
                {isOpen ? 'Close' : 'Compare Hardware'} {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              <a href="mailto:contact@perception-it.com?subject=Hardware%20Consultation%20Request" className="inline-flex items-center gap-2 px-5 py-3 bg-[#0f62fe] text-white carbon-heading-02 hover:bg-[#0353e9] transition-colors rounded-lg">Speak to an Engineer</a>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="space-y-4 mb-6 animate-fade-in">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-6 bg-white rounded-xl border border-gray-100">
                <p className="carbon-label-02 text-[#24a148] uppercase mb-4">Room AC</p>
                <ul className="space-y-3">
                  {[{l:'Best for',v:'Edge sites, small rooms, offices'},{l:'Capacity',v:'Up to 50kW per unit'},{l:'Precision',v:'±2–3°C'},{l:'Lead time',v:'2–4 weeks'}].map((item) => (
                    <li key={item.l} className="flex items-start gap-2 carbon-body-02 text-gray-600"><CheckmarkFilled className="w-4 h-4 text-[#24a148] flex-shrink-0 mt-0.5" /><span><strong className="text-gray-900">{item.l}:</strong> {item.v}</span></li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-white rounded-xl border border-gray-100">
                <p className="carbon-label-02 uppercase mb-4" style={{ color: "#0f62fe" }}>Precision (CRAC/CRAH)</p>
                <ul className="space-y-3">
                  {[{l:'Best for',v:'Data centres, high-density racks'},{l:'Capacity',v:'50kW – 500kW+ per unit'},{l:'Precision',v:'±1°C, ±5% RH'},{l:'Lead time',v:'4–8 weeks'}].map((item) => (
                    <li key={item.l} className="flex items-start gap-2 carbon-body-02 text-gray-600"><CheckmarkFilled className="w-4 h-4 text-[#0f62fe] flex-shrink-0 mt-0.5" /><span><strong className="text-gray-900">{item.l}:</strong> {item.v}</span></li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-white rounded-xl border border-gray-100">
                <p className="carbon-label-02 text-[#6929c4] uppercase mb-4">Facility Scale</p>
                <ul className="space-y-3">
                  {[{l:'Best for',v:'Large facilities, hyperscale'},{l:'Capacity',v:'500kW – 10MW+'},{l:'Precision',v:'±2°C at room level'},{l:'Lead time',v:'8–16 weeks'}].map((item) => (
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
            <span className="absolute top-4 left-4 px-3 py-1 bg-[#0f62fe] text-white carbon-label-02 uppercase tracking-wider rounded-full">Featured Hardware</span>
            <img src="/3D images/Cooling and Airflow/FusionCool.png" alt="FusionCol8000-E cooling unit" className="max-w-[90%] max-h-[220px] object-contain" loading="lazy" />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <h3 className="carbon-heading-02 text-gray-900 mb-3">FusionCol8000-E</h3>
            <p className="carbon-body-02 text-gray-600 mb-6">Enterprise-grade precision cooling for high-density data centres. In-row and perimeter deployment, ±1°C control, N+1 redundancy ready.</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[{l:'Cooling Capacity',v:'Up to 100kW'},{l:'Control Precision',v:'±1°C / ±5% RH'},{l:'Redundancy',v:'N+1 ready'},{l:'Deploy',v:'In-row or perimeter'}].map((s) => (
                <div key={s.l}><p className="carbon-label-02 text-gray-400 uppercase mb-1">{s.l}</p><p className="carbon-heading-02 text-gray-900">{s.v}</p></div>
              ))}
            </div>
            <div className="flex gap-3">
              <button onClick={() => alert('Datasheet coming soon')} className="inline-flex items-center gap-2 px-5 py-3 border border-gray-300 text-gray-700 carbon-heading-02 hover:border-[#0f62fe] hover:text-[#0f62fe] transition-colors rounded-lg">Get Datasheet</button>
              <a href="mailto:contact@perception-it.com?subject=FusionCol8000-E%20Enquiry" className="inline-flex items-center gap-2 px-5 py-3 bg-[#0f62fe] text-white carbon-heading-02 hover:bg-[#0353e9] transition-colors rounded-lg">Speak to an Engineer</a>
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
      desc: 'IR mapping, CFD simulation, load-bank testing. We test at 45°C ambient and 80% RH to guarantee performance.',
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
          <h2 className="carbon-fluid-heading-04 text-[#0F172A] mb-3">Deployment & Commissioning</h2>
          <p className="carbon-body-02 text-gray-500 max-w-2xl">Thermal continuity is won or lost at installation. 4-phase deployment with full validation.</p>
        </div>

        <div className="relative rounded-2xl overflow-hidden mb-10 min-h-[320px] lg:min-h-[380px]">
          <img src="/3D images/Cooling and Airflow/Deployment- Cooling.png" alt="Cooling system deployment" className="w-full h-full object-cover absolute inset-0" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/50 to-transparent" />
          <div className="relative z-10 p-8 lg:p-12 max-w-lg">
            <p className="carbon-label-01 uppercase mb-3" style={{ color: "rgba(255,255,255,0.7)" }}>03 Deployment</p>
            <h3 className="carbon-fluid-heading-03 text-white mb-4 leading-tight">Installation is where cooling wins or fails</h3>
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
                <span className="carbon-fluid-heading-03 text-gray-200 font-light">{step.num}</span>
              </div>
              <h3 className="carbon-heading-02 text-gray-900 mb-3">{step.title}</h3>
              <p className="carbon-body-02 text-gray-500">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[{n:'8 weeks',l:'Typical deployment'},{n:'45°C',l:'Tested ambient'},{n:'100%',l:'Load-bank validated'},{n:'Validated commissioning*',l:'Minimal service disruption'}].map((s) => (
            <div key={s.l} className="p-6 bg-gray-50 rounded-xl text-center border border-gray-100">
              <p className="carbon-fluid-heading-03 text-[#0f62fe] font-light mb-1">{s.n}</p>
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
              <a href="mailto:contact@perception-it.com?subject=Deployment%20Consultation%20Request" className="inline-flex items-center gap-2 px-5 py-3 bg-white text-[#0f62fe] carbon-heading-02 hover:bg-gray-50 transition-colors rounded-lg">Speak to an Engineer</a>
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
              <div><p className="carbon-label-02 text-[#24a148] uppercase mb-1">45°C+ Ambient Rated</p><p className="carbon-body-02 text-gray-600">Every installation is validated for Pakistan&apos;s peak summer conditions. We test at 45°C ambient and 80% RH.</p></div>
            </div>
          </div>
        )}

        {/* Scope Boundary */}
        <div className="mt-10 p-5 bg-gray-100 rounded-xl flex gap-4 items-start">
          <Warning className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="carbon-label-02 text-gray-500 uppercase mb-1">Scope</p>
            <p className="carbon-body-02 text-gray-600">Deployment covers mechanical installation, thermal validation, and commissioning only. Capacity planning, monsoon/dust hardening engineering, and SLA-backed uptime targets are scoped separately under Assessment and Managed Services.</p>
          </div>
        </div>
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
      items: ['24/7 NOC monitoring (3 hubs)','4-hour response SLA*','Monsoon standby engineers','Quarterly room integrity validation','99.9% uptime target* under signed SLA','Predictive alerts','On-site spare parts pre-staged'],
    },
  ];

  return (
    <section id="managed" className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-10 carbon-font">
          <span className="carbon-label-02 uppercase tracking-[0.16px] mb-4 block" style={{ color: '#0f62fe' }}>04 Managed Services</span>
          <h2 className="carbon-fluid-heading-04 text-[#0F172A] mb-3">24/7 Managed Thermal Services</h2>
          <p className="carbon-body-02 text-gray-500 max-w-2xl">Filters clog. Refrigerant leaks. Setpoints drift. Our managed service catches degradation before it becomes an outage.</p>
        </div>

        <div className="relative rounded-2xl overflow-hidden mb-10 min-h-[320px] lg:min-h-[380px]">
          <img src="/3D images/Cooling and Airflow/managed service - Cooling - page.png" alt="Managed thermal services" className="w-full h-full object-cover absolute inset-0" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/50 to-transparent" />
          <div className="relative z-10 p-8 lg:p-12 max-w-lg">
            <p className="carbon-label-01 uppercase mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>04 Managed Services</p>
            <h3 className="carbon-fluid-heading-03 text-white mb-4 leading-tight">Thermal continuity does not end at handover</h3>
            <p className="carbon-body-02 text-white/75">Quarterly validation, monsoon standby engineers, and 24/7 NOC monitoring.</p>
          </div>
        </div>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {tiers.map((tier) => (
            <div key={tier.name} className={`group relative p-8 bg-white rounded-xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${tier.recommended ? 'border-[#0f62fe] ring-1 ring-[#0f62fe]' : 'border-gray-100 hover:border-[#0f62fe]'}`}>
              {tier.recommended && (
                <span className="absolute -top-3 left-8 px-3 py-1 bg-[#0f62fe] text-white carbon-label-02 uppercase tracking-wider rounded-full">Recommended</span>
              )}
              <div className="mb-6">
                <p className="carbon-label-02 uppercase mb-2" style={{ color: tier.accent }}>{tier.name}</p>
                <p className="carbon-label-02 text-gray-400 uppercase mb-1">From</p>
                <div className="flex items-baseline mb-1">
                  <span className="carbon-fluid-heading-03 text-gray-900 font-light">{tier.price}</span>
                  <span className="carbon-body-02 text-gray-400 ml-0.5">{tier.period}</span>
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
              <a href="mailto:contact@perception-it.com?subject=Managed%20Services%20Consultation" className="inline-flex items-center gap-2 px-5 py-3 bg-white text-[#0f62fe] carbon-heading-02 hover:bg-gray-50 transition-colors rounded-lg">Speak to an Engineer</a>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="space-y-4 mb-6 animate-fade-in">
            <div className="grid md:grid-cols-3 gap-4">
              {tiers.map((tier) => (
                <div key={tier.name} className="p-6 bg-white rounded-xl border border-gray-100" style={{ borderTopWidth: '4px', borderTopColor: tier.accent }}>
                  <p className="carbon-label-01 uppercase mb-3" style={{ color: tier.accent }}>{tier.name}</p>
                  <p className="carbon-label-01 text-gray-400 uppercase mb-1">From</p>
                  <div className="flex items-baseline mb-4">
                    <span className="carbon-fluid-heading-03 text-gray-900 font-light">{tier.price}</span>
                    <span className="carbon-body-02 text-gray-400 ml-0.5">{tier.period}</span>
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
    quote: "Perception IT transformed our server infrastructure from a risk into a reliable engine for operations. Any downtime could have cost us millions. Their 24/7 support, same-day hardware replacements, and proactive maintenance have kept our systems running without a single major incident. We now operate with confidence knowing our IT backbone is in expert hands.",
    author: 'Mr. Usman Zafar',
    org: 'Head of IT, Ibrahim Fibres Limited',
    logo: '/logos/clients/IFL-logo.png',
    bg: 'from-[#0f62fe] to-[#4589ff]',
    project: {
      headline: 'Deployed ServerLife Extend™ to 48 Critical Servers',
      desc: 'Eliminated hardware downtime risk and deferred CapEx spend without compromise on quality or continuity',
      link: '/services/server-continuity',
    },
  },
  {
    quote: "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum.",
    author: 'Chief Technology Officer',
    org: 'Descon Engineering',
    logo: '/logos/clients/Descon-logo.png',
    bg: 'from-[#6929c4] to-[#8a3ffc]',
    project: {
      headline: 'Deployed Precision Cooling to Critical Infrastructure',
      desc: 'Deferred CapEx spend without compromise on quality and continuity',
      link: '/services/cooling-airflow',
    },
  },
  {
    quote: 'Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum.',
    author: 'Head of Infrastructure',
    org: 'Mayfair Group',
    logo: '/logos/clients/mayfair%20logo%20svg.svg',
    bg: 'from-[#009d9a] to-[#007d79]',
    project: {
      headline: 'Cooling Refresh with Zero Downtime Migration',
      desc: 'PUE reduced from 1.8 to 1.35 with 40% annual energy savings across all facilities',
      link: '/infrastructure/data-centre-services/cooling-thermal',
    },
  },
  {
    quote: "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum.",
    author: 'Plant Operations Manager',
    org: 'Sefam Private Limited',
    logo: '/logos/clients/client-Sefam.jpeg',
    bg: 'from-[#0043ce] to-[#0f62fe]',
    project: {
      headline: 'Monsoon-Hardened Precision Cooling Deployment',
      desc: 'Custom 45°C ambient-rated solution delivering 60% additional cooling capacity with humidity resilience',
      link: '/infrastructure/data-centre-services/cooling-thermal',
    },
  },
  {
    quote: "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum.",
    author: 'Director of IT Infrastructure',
    org: 'Lahore University of Management Sciences',
    logo: '/logos/clients/LUMS-Logo.png',
    bg: 'from-[#8a3ffc] to-[#6929c4]',
    project: {
      headline: 'Research Data Centre Thermal Assessment & Upgrade',
      desc: 'Precision cooling system maintaining stable temperatures through extended load-shedding periods',
      link: '/infrastructure/data-centre-services/cooling-thermal',
    },
  },
];

const PROJECTS = [
  { title: 'Out-of-Warranty Infrastructure Support', org: 'Manufacturing', desc: '48 Lenovo servers running mission-critical MES, ERP, and production scheduling were out of OEM warranty. Perception IT implemented 24x7 hardware support, local replacement parts, proactive maintenance, and automated patching.', outcomes: ['Zero unplanned outages','$750K+ downtime risk avoided','48 servers under 24/7 SLA','Automated patching implemented'], tags: ['Lenovo Servers SLA','24/7 Support','Preventive Maintenance'], caseStudy: '/projects/manufacturing-infrastructure', image: '/case-studies/ibrahim-fibres/hero-optimized.jpg' },
  { title: 'Multi-Site Precision Cooling Deployment', org: 'Leading Pakistani Bank', desc: 'Deployed precision cooling units across four data centres, reducing PUE from 1.8 to 1.35.', outcomes: ['PUE reduced from 1.8 to 1.35','N+1 redundancy achieved','8-week deployment timeline'], tags: ['Multi-Site','PUE Optimisation','N+1 Redundancy'], caseStudy: '/case-studies/multi-site-precision-cooling', image: '/3D images/Cooling and Airflow/Cooling - Assesment.png' },
  { title: 'Thermal Runaway Prevention', org: 'Financial Institution', desc: 'Redesigned airflow management preventing thermal runaway and extending equipment lifespan.', outcomes: ['Hotspots eliminated','3°C average temperature reduction','Annual cooling cost savings of 25%'], tags: ['Airflow Redesign','Thermal Mapping','Cost Reduction'], caseStudy: '/case-studies/thermal-runaway-prevention', image: '/3D images/Cooling and Airflow/perceptionit_thermal_validation_final.webp' },
  { title: 'Monsoon Season Resilience', org: 'E-commerce Platform', desc: 'Implemented humidity control and drainage systems to maintain operations during monsoon season.', outcomes: ['Zero humidity-related outages','99.9% uptime maintained','Reduced equipment corrosion by 40%'], tags: ['Humidity Control','Drainage Systems','Monsoon Hardening'], caseStudy: '/case-studies/monsoon-season-resilience', image: '/3D images/Cooling and Airflow/Deployment- Cooling.png' },
  { title: 'Legacy Cooling System Modernisation', org: 'Government Agency', desc: 'Upgraded 15-year-old cooling infrastructure with modern precision units and smart controls.', outcomes: ['Cooling efficiency improved by 45%','Remote monitoring implemented','Maintenance costs reduced by 30%'], tags: ['Retrofit','Smart Controls','Efficiency Gain'], caseStudy: '/case-studies/legacy-cooling-modernisation', image: '/3D images/Cooling and Airflow/Cooling - Procurement.png' },
  { title: 'Edge Site Thermal Management', org: 'Telecom Provider', desc: 'Designed and deployed compact cooling solutions for 12 edge data centres across Pakistan.', outcomes: ['Standardised cooling across all sites','Remote monitoring for all locations','Deployment completed in 6 weeks'], tags: ['Edge Deployment','Standardisation','Remote Monitoring'], caseStudy: '/case-studies/edge-thermal-management', image: '/3D images/Cooling and Airflow/perceptionit_monitoring_integration.png' },
  { title: 'Data Centre Expansion Cooling', org: 'Cloud Provider', desc: 'Scaled cooling capacity by 200% to support data centre expansion while maintaining efficiency.', outcomes: ['200% capacity increase','PUE maintained at 1.4','Phased deployment minimising downtime'], tags: ['Capacity Scaling','Phased Deploy','PUE Maintenance'], caseStudy: '/case-studies/data-centre-expansion-cooling', image: '/3D images/Cooling and Airflow/perceptionit_noc_bigscreens_v2.png' },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = TESTIMONIALS.length;

  const goTo = (idx: number) => {
    setCurrent(((idx % total) + total) % total);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % total), 8000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [total]);

  const pause = () => { if (timerRef.current) clearInterval(timerRef.current); };
  const resume = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % total), 8000);
  };

  const t = TESTIMONIALS[current];

  return (
    <div
      className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#0F172A] to-[#1e293b] pt-10 px-8 pb-6 md:pt-14 md:px-12 md:pb-8 transition-all duration-700"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <Quotes className="absolute top-6 left-6 w-16 h-16 text-white/10" />
      <div className="relative z-10">
        <p className="carbon-fluid-quotation-01 text-white mt-4 mb-8 leading-relaxed px-4 md:px-8">"{t.quote}"</p>
        <div className="flex items-center gap-4 px-4 md:px-8">
          {t.logo && (
            <div className="p-2 bg-white rounded-lg shadow-sm flex-shrink-0">
              <img
                src={t.logo}
                alt={t.org}
                className="h-8 w-auto"
              />
            </div>
          )}
          <div>
            <p className="carbon-heading-02 text-white">{t.author}</p>
            <p className="carbon-body-02 text-white/70 mt-1">{t.org}</p>
          </div>
        </div>
        {t.project && (
          <div className="mt-14 pl-4 border-l-2 border-white/20">
            <p className="carbon-label-02 text-white/90 mb-1">{t.project.headline}</p>
            <p className="carbon-body-02 text-white/50 mb-2">{t.project.desc}</p>
            <a
              href={t.project.link}
              className="inline-flex items-center gap-1 carbon-label-01 text-white/60 hover:text-white transition-colors"
            >
              View Solution Details <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        )}
      </div>

      {/* Footer: dots + counter + nav */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-3 rounded-full transition-all ${i === current ? 'bg-white w-8' : 'bg-white/40 w-3'}`}
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
            className="w-12 h-12 rounded-lg border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => goTo(current + 1)}
            className="w-12 h-12 rounded-lg border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }: { project: typeof PROJECTS[0]; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={`${styles.projectCard} group rounded-xl overflow-hidden bg-white transition-all duration-500 border border-[#e0e0e0] hover:border-[#0f62fe] hover:shadow-lg`} style={{ animationDelay: `${index * 100}ms` }}>
      <div className="relative h-40 overflow-hidden bg-gray-100">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-[#edf5ff] to-[#f3f0ff]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Settings className="w-10 h-10 text-[#0f62fe]/15" />
            </div>
          </>
        )}
      </div>
      <div className="p-6">
        <p className="carbon-label-01 text-[#0f62fe] uppercase tracking-wider mb-2">{project.org}</p>
        <h3 className="carbon-heading-02 text-gray-900 mb-3 leading-snug">{project.title}</h3>
        <p className="carbon-body-02 text-gray-500 mb-5 leading-relaxed">{project.desc}</p>
        {project.tags && (
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 bg-gray-50 text-gray-500 carbon-label-01 rounded-full border border-gray-100">{tag}</span>
            ))}
          </div>
        )}
        <div className="flex items-center gap-5">
          <button onClick={() => setExpanded(!expanded)} className="inline-flex items-center gap-1.5 carbon-body-02 text-[#0f62fe] hover:underline">
            {expanded ? 'Hide outcomes' : 'Show outcomes'} {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {project.caseStudy && (
            <a href={project.caseStudy} className="inline-flex items-center gap-1 carbon-body-02 text-gray-400 hover:text-[#0f62fe] transition-colors">
              Read case study <ArrowRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      {expanded && (
        <div className={`${styles.projectCard__outcomes} px-6 pb-6`}>
          <div className="pt-4 border-t border-gray-100">
            <ul className="space-y-3">
              {project.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3 carbon-body-02 text-gray-600"><CheckmarkFilled className="w-4 h-4 text-[#24a148] flex-shrink-0 mt-0.5" /><span>{outcome}</span></li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </article>
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
          <button onClick={() => setPage(Math.max(0, page - 1))} disabled={page === 0} className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all ${page === 0 ? 'opacity-40 cursor-not-allowed' : ''}`}><ChevronLeft className="w-5 h-5" /></button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i} onClick={() => setPage(i)} className={`w-10 h-10 rounded-lg flex items-center justify-center carbon-body-02 transition-all ${page === i ? 'bg-[#0f62fe] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{i + 1}</button>
          ))}
          <button onClick={() => setPage(Math.min(totalPages - 1, page + 1))} disabled={page === totalPages - 1} className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all ${page === totalPages - 1 ? 'opacity-40 cursor-not-allowed' : ''}`}><ChevronRight className="w-5 h-5" /></button>
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
          <h2 className="carbon-fluid-heading-04 text-[#0F172A] mb-3">Trusted Across Infrastructure Projects</h2>
          <p className="carbon-body-02 text-gray-500 max-w-2xl">Real outcomes from infrastructure engagements across Pakistan.</p>
        </div>
        <div className="mb-12">
          <TestimonialCarousel />
        </div>
        <div className="mb-8">
          <h3 className="carbon-fluid-heading-03 text-[#0F172A] mb-6">Project Outcomes</h3>
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
  { icon: Meter, title: 'Power & UPS', desc: 'Stable, conditioned, redundant power for cooling load.', link: '/infrastructure/data-centre-services/power-ups' },
  { icon: DataCenter, title: 'Rack & Cabinet', desc: 'Airflow containment, blanking panels, and IP54 sealing.', link: '/infrastructure/data-centre-services/rack-cabinet' },
  { icon: Dashboard, title: 'Environmental Monitoring', desc: 'Rack-level temperature, humidity, and leak detection.', link: '/infrastructure/data-centre-services/environmental-monitoring' },
  { icon: Warning, title: 'Fire Suppression', desc: 'FM200/clean-agent protection with thermal recovery.', link: '/infrastructure/data-centre-services/fire-suppression' },
];

const EcosystemSection = () => {
  return (
    <section id="ecosystem" className="py-16 bg-[#FAFAFA] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-10 carbon-font">
          <h2 className="carbon-fluid-heading-04 text-[#0F172A] mb-3">Integrated Facility Ecosystem</h2>
          <p className="carbon-body-02 text-gray-500 max-w-2xl">Cooling does not exist in isolation. Our services connect thermal management with the infrastructure layers that dictate its performance from a single accountable team.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {ECOSYSTEM_ITEMS.map((item) => (
            <a
              key={item.title}
              href={item.link}
              className="group p-5 bg-white rounded-lg border border-gray-100 hover:border-gray-300 transition-all duration-200"
            >
              <item.icon className="w-5 h-5 text-gray-400 mb-3" />
              <p className="carbon-heading-02 text-gray-900 mb-1">{item.title}</p>
              <p className="carbon-body-02 text-gray-500 leading-relaxed mb-3">{item.desc}</p>
              <span className="inline-flex items-center gap-1 carbon-label-01 text-gray-400 group-hover:text-[#0f62fe] transition-colors">
                Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="/#/services/datacenter2" className="inline-flex items-center gap-1.5 carbon-body-02 text-[#0f62fe] hover:underline">
            Explore the full facility services portfolio <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="carbon-heading-02 text-gray-900 mb-1">One partner. One SLA. No gaps.</p>
            <p className="carbon-body-02 text-gray-500">When power, airflow, monitoring, and suppression are validated together, cooling performance is engineered, not assumed.</p>
          </div>
          <a
            href="mailto:contact@perception-it.com?subject=Integrated%20Facility%20Ecosystem%20Enquiry"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#0f62fe] text-white carbon-heading-02 rounded-lg hover:bg-[#0353e9] transition-colors flex-shrink-0"
          >
            Enquire <ArrowRight className="w-4 h-4" />
          </a>
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
          <h2 className="carbon-fluid-heading-04 text-[#0F172A] mb-4">Frequently Asked Questions</h2>
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
   08 Disclaimer
   ============================================================================== */

const DisclaimerSection = () => (
  <section className="py-6 bg-gray-50 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <p className="carbon-helper-text-01 text-gray-400 leading-relaxed">
        *Service levels, uptime targets, and response times are defined exclusively in signed contractual agreements following site assessment. Actual performance depends on facility condition, environmental factors, and force majeure exclusions.
      </p>
    </div>
  </section>
);

/* ==============================================================================
   09 CTA — Final Banner
   ============================================================================== */

const CTASection = () => {
  return (
    <section id="cta" className="py-20 bg-[#0f62fe]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="carbon-fluid-heading-05 text-white mb-4">Ready to optimise your data centre cooling?</h2>
            <p className="carbon-body-02 text-white/80 max-w-xl">Not sure where to start? Book a free 15-minute call with our thermal team. We&apos;ll help you identify the right way forward.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:contact@perception-it.com?subject=Free%20Cooling%20Consultation%20Request"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-[#0f62fe] carbon-heading-02 hover:bg-gray-50 transition-colors rounded-lg"
              onClick={() => trackEvent('cta_conversion', { type: 'consultation', location: 'bottom_cta' })}
            >
              Book Free Consultation <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@perception-it.com?subject=Send%20me%20the%20Thermal%20Readiness%20Checklist"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 border-2 border-white text-white carbon-heading-02 hover:bg-white/10 transition-colors rounded-lg"
              onClick={() => trackEvent('cta_conversion', { type: 'checklist', location: 'bottom_cta' })}
            >
              Get a Thermal Health Checklist
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
      <CoolingNav />
      <main id="main-content">
        <HeroSection />
        <StickyAnchorNav />
        <ServicesHeader />
        <AssessmentSection />
        <ProcurementSection />
        <DeploymentSection />
        <ManagedSection />
        <ResultsSection />
        <EcosystemSection />
        <FAQSection />
        <TrustTiles />
        <DisclaimerSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default CoolingThermal;
