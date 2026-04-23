import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/carbon-typography.css';
import Footer from '../../sections/Footer';
import Navigation from '../../components/Navigation';
import PartnerLogos from '../../sections/PartnerLogos';
import ClientLogos from '../../sections/ClientLogos';
import {
  ArrowRight, CheckmarkFilled, WarningAlt,
  TemperatureHot, RainDrop, WindGusts as Wind,
  Tools, Settings, Meter, Certificate,
  ChevronRight,
  ChevronLeft,

  Lightning, Security as Shield, DataBase, Dashboard,
  Building
} from '@carbon/icons-react';


const SECTIONS = ['trust', 'hardware', 'installation', 'managed', 'pakistan', 'dependencies', 'integration', 'cases', 'feedback', 'partners', 'portfolio', 'cta'] as const;

const caseStudyData = [
  { stat: '99.97%', label: 'Uptime Achieved', client: 'Pakistan Telecom', industry: 'Telecommunications', title: '3-Site Cooling Overhaul', desc: 'Precision CRAC deployment with monsoon-hardened protocols. Zero thermal outages across two monsoon seasons.', tags: ['CRAC Deployment', 'Monsoon Hardening'], outcomes: ['Zero thermal outages across two monsoon seasons', 'CRAC units sized with 25% monsoon humidity buffer', 'Remote monitoring with 4-hour response SLA'] },
  { stat: '40%', label: 'Energy Reduction', client: 'Private Bank', industry: 'Financial Services', title: 'Precision Cooling Refresh', desc: 'Replaced legacy AC with in-row cooling and aisle containment. PUE dropped from 1.8 to 1.35.', tags: ['In-Row Cooling', 'PUE Optimisation'], outcomes: ['PUE reduced from 1.8 to 1.35', '40% energy savings validated over 12 months', 'Hot-spot elimination across all 8 racks'] },
  { stat: '4hrs', label: 'Response Time', client: 'Government IDC', industry: 'Government', title: 'Managed Thermal Service', desc: 'End-to-end cooling supply, install, and managed service with quarterly validation and monsoon standby.', tags: ['Managed Service', 'SLA'], outcomes: ['4-hour on-site response guarantee', 'Quarterly thermal validation reports', 'Monsoon standby protocol with spare CRAC'] },
  { stat: '60%', label: 'Capacity Gain', client: 'Textile Manufacturer', industry: 'Manufacturing', title: 'Legacy Cooling Replacement', desc: 'Custom cooling capacity derating for 45°C ambient. High-ambient condensers with thermal mass buffering.', tags: ['Retrofit', 'Precision Cooling'], outcomes: ['60% additional cooling capacity unlocked', 'Condensers rated for 50°C ambient', 'Thermal mass buffering for power fluctuations'] },
  { stat: '99.9%', label: 'Uptime SLA', client: 'National Bank', industry: 'Financial Services', title: 'Monsoon-Hardened Edge Cooling', desc: 'Quarterly room integrity validation and humidity-compensated CRAC setpoints. Zero monsoon-related failures.', tags: ['Edge', 'Monsoon Hardening'], outcomes: ['99.9% uptime SLA met for 24 months', 'Zero monsoon-related cooling failures', 'Automated humidity compensation active'] },
  { stat: '35%', label: 'Energy Saved', client: 'Cloud Provider', industry: 'Technology', title: 'Free Cooling Integration', desc: 'Hot/cold aisle containment with free-cooling integration. Energy consumption reduced by 35%.', tags: ['Free Cooling', 'PUE Optimisation'], outcomes: ['35% annual energy reduction', 'Free cooling active 8 months/year', 'Containment retrofit completed without downtime'] },
];

const sectionLabels: Record<string, string> = {
  hardware: 'Hardware Supply',
  installation: 'Installation',
  managed: 'Managed Services',
  pakistan: 'Pakistan-Specific',
  dependencies: 'Dependencies',
  integration: 'Integration',
  trust: 'Key Topics',
  cases: 'Case Studies',
  feedback: 'Testimonials',
  partners: 'Partners',
  portfolio: 'Clients',
  cta: 'Get Started',
};

const ImagePlaceholder = ({ title, desc, aspect = '16/9' }: { title: string; desc: string; aspect?: string }) => (
  <div className="mt-8 border-2 border-dashed border-[#c6c6c6] bg-white">
    <div className="flex flex-col items-center justify-center p-8 text-center min-h-[200px]">
      <svg className="w-10 h-10 text-[#8d8d8d] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <p className="carbon-label-01 text-[#525252] uppercase tracking-wider mb-2">3D Rendering / Photography Placeholder</p>
      <p className="carbon-heading-02 text-[#161616] mb-2">{title}</p>
      <p className="carbon-body-01 text-[#525252] max-w-2xl">{desc}</p>
      <p className="carbon-helper-text-01 text-[#8d8d8d] mt-3">Target: {aspect} aspect ratio | Min 1200×675px | PNG/WebP</p>
    </div>
  </div>
);

const CoolingAirflow = () => {
  const [activeSection, setActiveSection] = useState('trust');
  const [caseStudyPage, setCaseStudyPage] = useState(0);
  const [testimonialPage, setTestimonialPage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      for (const id of SECTIONS) {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
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
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500 rounded-full blur-[100px]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs mb-8" aria-label="Breadcrumb">
            <a href="/" className="text-[#0f62fe] hover:underline">Home</a>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <a href="/services" className="text-[#0f62fe] hover:underline">Services</a>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="text-[#0f62fe] hover:underline cursor-pointer">Infrastructure</span>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="px-2 py-0.5 border border-[#a8a8a8] text-[#a8a8a8] rounded-full">Cooling & Airflow</span>
          </nav>

          {/* Mobile Dropdown Navigation */}
          <div className="xl:hidden mb-8">
            <label className="text-xs text-gray-400 block mb-2">On this page:</label>
            <select
              onChange={handleMobileNavChange}
              value={activeSection}
              className="w-full h-12 px-4 bg-gray-800 border border-gray-700 text-white text-sm"
            >
              {SECTIONS.map((id) => (
                <option key={id} value={id}>{sectionLabels[id]}</option>
              ))}
            </select>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column */}
            <div>
              <p className="carbon-label-01 text-[#c6c6c6] uppercase mb-4">Data Centre Services</p>
              <h1 className="carbon-fluid-heading-04 text-white mb-6">Cooling & Airflow Management</h1>
              <p className="carbon-heading-02 text-[#c6c6c6] mb-6">Keep your critical infrastructure running at optimal temperature. From hardware supply to 24/7 managed thermal continuity.</p>
              <p className="carbon-body-02 text-gray-300 mb-8">Precision cooling engineered for Pakistan&apos;s climate reality: 45°C summers, monsoon humidity spikes, dust infiltration, and unstable grid power. One partner, end-to-end accountability.</p>
              <div className="flex flex-wrap gap-4">
                <a href="#cta" className="cds--btn cds--btn--primary bg-[#0f62fe] hover:bg-[#0353e9] inline-flex items-center">
                  Request Cooling Assessment
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a href="#hardware" className="cds--btn cds--btn--tertiary" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white', borderWidth: '1px' }}>
                  Explore Hardware Options
                </a>
              </div>
            </div>

            {/* Right Column - Feature Bullets */}
            <div className="space-y-3">

              {[
                { icon: TemperatureHot, title: 'Precision Cooling Supply', desc: 'CRAC, in-row, liquid cooling. Procured from Vertiv, APC, Mitsubishi' },
                { icon: Tools, title: 'Full Installation & Commissioning', desc: 'Thermal mapping, airflow CFD, failover validation' },
                { icon: Shield, title: '24/7 Managed Thermal Services', desc: 'Predictive maintenance, SLA-backed response, NOC monitoring' },
                { icon: RainDrop, title: 'Monsoon-Hardened for Pakistan', desc: 'Humidity compensation, dust filtration, 40% capacity derating at 45°C' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-4 border-l-2 border-[#0f62fe] bg-white/5">
                  <div className="w-10 h-10 bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#0f62fe]" />
                  </div>
                  <div>
                    <h3 className="carbon-heading-01 text-white mb-1">{item.title}</h3>
                    <p className="carbon-label-01 text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation: Trust Boxes */}
      <section id="trust" className="py-10 border-b border-[var(--cds-border-subtle)] bg-[var(--cds-background)]">
        <div className="max-w-[1584px] mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <p className="carbon-label-01 text-[#0f62fe] uppercase mb-3">Quick Navigation</p>
            <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">Explore Key Topics</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { icon: TemperatureHot, label: 'Hardware Supply', section: 'hardware', color: '#0f62fe' },
                { icon: Tools, label: 'Installation', section: 'installation', color: '#6929c4' },
                { icon: Shield, label: 'Managed Services', section: 'managed', color: '#24a148' },
                { icon: RainDrop, label: 'Pakistan-Specific', section: 'pakistan', color: '#cf0a2c' },
                { icon: Lightning, label: 'Dependencies', section: 'dependencies', color: '#f97316' },
                { icon: Dashboard, label: 'Integration', section: 'integration', color: '#0f62fe' },
              ].map((item) => (
                <button
                  key={item.section}
                  onClick={() => scrollToSection(item.section)}
                  className="group p-4 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] hover:border-[#0f62fe] hover:shadow-sm transition-all text-left"
                >
                  <div className="w-8 h-8 flex items-center justify-center mb-2" style={{ backgroundColor: `${item.color}15` }}>
                    <item.icon className="w-4 h-4" style={{ color: item.color }} />
                  </div>
                  <span className="text-sm font-medium text-[var(--cds-text-primary)] group-hover:text-[#0f62fe]">{item.label}</span>
                  <ArrowRight className="w-3 h-3 text-[#c6c6c6] group-hover:text-[#0f62fe] mt-1 block" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Side Navigation */}
      <div className="max-w-[1584px] mx-auto">
        <div className="flex">
          {/* Desktop Side Menu */}
          <aside className="hidden xl:block w-56 flex-shrink-0 pl-6 pr-8">
            <nav className="sticky top-20 pt-8 pb-8 h-[calc(100vh-5rem)]">
              <ul className="space-y-0.5">
                {SECTIONS.map((id) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollToSection(id)}
                      className={`w-full text-left px-4 py-2 carbon-body-01 transition-colors border-l-2 ${
                        activeSection === id
                          ? 'text-[#161616] border-[#0f62fe] bg-[#f4f4f4] font-semibold'
                          : 'text-[#525252] border-transparent hover:text-[#161616] hover:bg-[#f4f4f4]'
                      }`}
                    >
                      {sectionLabels[id]}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content Area */}
          <main className="flex-1 min-w-0 pl-8 pr-6">
            
            {/* Section 1: Hardware Supply */}
            <section id="hardware" className="py-12 border-b border-[var(--cds-border-subtle)]">
              <div className="max-w-5xl mx-auto px-6">
                <p className="carbon-label-01 text-[#0f62fe] uppercase mb-3">Step 1: What You Buy</p>
                <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">Precision Cooling Hardware: Procured, Certified, Ready for Pakistan</h2>
                <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-8">We source cooling equipment from tier-1 manufacturers and validate every unit for Pakistan&apos;s operating conditions before it ships. No guesswork, no incompatible hardware.</p>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {[
                    { icon: TemperatureHot, title: 'Server Room AC Units', desc: 'Wall-mounted, ceiling-suspended, and portable units for edge sites and small server rooms up to 50kW heat load.' },
                    { icon: Wind, title: 'In-Row & CRAC Precision Cooling', desc: 'Close-coupled cooling for high-density racks. Hot/cold aisle compatible with N+1 redundancy options.' },
                    { icon: Meter, title: 'Liquid Cooling Systems', desc: 'Direct-to-chip and immersion cooling for HPC, AI training clusters, and GPU-dense deployments.' },
                  ].map((card) => (
                    <div key={card.title} className="p-5 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] ">
                      <div className="w-10 h-10 bg-[#0f62fe]/10 flex items-center justify-center mb-3">
                        <card.icon className="w-5 h-5 text-[#0f62fe]" />
                      </div>
                      <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">{card.title}</h3>
                      <p className="carbon-body-01 text-[var(--cds-text-secondary)]">{card.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)]">
                  <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-4">Manufacturer Partnerships</h3>
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    {[
                      { name: 'Huawei', logo: '/logos/partners/Partner-Huawei-Logo.svg', width: 80 },
                      { name: 'Lenovo', logo: '/logos/partners/Partner-Lenovo-Logo.svg', width: 70 },
                      { name: 'Dell', logo: '/logos/partners/Partner-Dell-logo.svg', width: 60 },
                      { name: 'HP', logo: '/logos/partners/Partner- Hewlett-Packard-Logo.svg', width: 50 },
                    ].map((partner) => (
                      <div key={partner.name} className="flex items-center justify-center h-10 px-2">
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="h-full w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                          style={{ maxWidth: partner.width }}
                        />
                      </div>
                    ))}
                  </div>
                  <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)]">
                    All hardware includes manufacturer warranty pass-through. Extended warranty and spare-part bundling available via{' '}
                    <Link 
                      to="/services/server-continuity" 
                      className="text-[#0f62fe] hover:underline font-medium"
                      title="Mission-critical support for out-of-warranty systems with same-day spares and 99.95% uptime SLA"
                    >
                      ServerLife Extend™
                    </Link>.
                  </p>
                </div>

                <ImagePlaceholder
                  title="Precision Cooling Hardware Showcase"
                  desc="3D rendering of server room precision cooling units in a data centre environment. Show CRAC/ACU units with front intake grilles, rear exhaust, and hot/cold aisle containment. Include subtle blue LED status indicators. Monsoon-hardened casing detail visible on one unit. Clean, technical aesthetic with soft overhead lighting. No people."
                />
              </div>
            </section>

            {/* Section 2: Basic Installation */}
            <section id="installation" className="py-12 border-b border-[var(--cds-border-subtle)] bg-[var(--cds-background)]">
              <div className="max-w-5xl mx-auto px-6">
                <p className="carbon-label-01 text-[#0f62fe] uppercase mb-3">Step 2: How It Gets Deployed</p>
                <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">Installation & Commissioning: Beyond Plug-and-Play</h2>
                <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-8">Standard installation stops at power-on. We validate thermal performance under real load conditions, map airflow patterns, and prove failover before handover.</p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Settings, title: 'Mechanical Installation', items: ['Positioning and levelling', 'Refrigerant line brazing and pressure testing', 'Condensate drain routing', 'Electrical connection and breaker sizing'] },
                    { icon: Meter, title: 'Thermal Validation', items: ['Infrared thermal mapping of rack inlets', 'CFD airflow simulation for hotspot elimination', 'Load-bank testing at design capacity', 'Failover simulation: primary → secondary → portable'] },
                    { icon: Certificate, title: 'Commissioning Sign-Off', items: ['As-built documentation', 'Cooling capacity test report', 'Setpoint calibration (temperature & humidity)', 'Operator training handover'] },
                    { icon: Dashboard, title: 'Monitoring Integration', items: ['Sensor placement (rack inlet, return air, under-floor)', 'DCIM integration (Huawei iManager, Schneider StruxureWare)', 'Alert threshold configuration', 'NOC dashboard onboarding'] },
                  ].map((card) => (
                    <div key={card.title} className="p-6 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] ">
                      <div className="w-10 h-10 bg-[#0f62fe]/10 flex items-center justify-center mb-4">
                        <card.icon className="w-5 h-5 text-[#0f62fe]" />
                      </div>
                      <h3 className="carbon-fluid-heading-03 text-[var(--cds-text-primary)] mb-3">{card.title}</h3>
                      <ul className="space-y-2">
                        {card.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                            <CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="p-5 border-l-4 border-[#f97316] bg-[#fff8e1]">
                  <div className="flex items-start gap-3">
                    <WarningAlt className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="carbon-label-01 text-[#f97316] font-semibold mb-1">Common Installation Failure</p>
                      <p className="carbon-body-01 text-[var(--cds-text-primary)]">Over 60% of cooling failures in Pakistan within the first 12 months originate from incorrect refrigerant charge, undersized condensate drains, or missing thermal validation, not hardware defects. Our commissioning protocol is designed to eliminate these root causes.</p>
                    </div>
                  </div>
                </div>

                <ImagePlaceholder
                  title="Cooling Installation in Progress"
                  desc="3D rendering of technicians installing in-row cooling units between server racks. Show aisle containment being sealed, refrigerant lines being connected, and thermal sensors being placed. Clean, professional environment. Use perspective from aisle level looking down the row. Safety gear visible on technicians."
                />
              </div>
            </section>

            {/* Section 3: Managed Services */}
            <section id="managed" className="py-12 border-b border-[var(--cds-border-subtle)]">
              <div className="max-w-5xl mx-auto px-6">
                <p className="carbon-label-01 text-[#24a148] uppercase mb-3">Step 3: Who Runs It</p>
                <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">Managed Thermal Services: 24/7 Accountability</h2>
                <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-8">Cooling equipment degrades predictably. Filters clog. Refrigerant leaks. Setpoints drift. Our managed service catches these before they become outages.</p>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {[
                    { tier: 'Essential', price: 'PKR 65K/mo', desc: 'Quarterly preventive maintenance, filter replacement, refrigerant check, basic telemetry review.', highlight: false },
                    { tier: 'Professional', price: 'PKR 145K/mo', desc: 'Monthly PM, 8-hour response SLA, predictive alerts, thermal trending report, spare parts pre-staging.', highlight: true },
                    { tier: 'Enterprise', price: 'PKR 380K+/mo', desc: '24/7 NOC monitoring, 4-hour response, monsoon standby engineers, quarterly room integrity validation, SLA-backed uptime.', highlight: false },
                  ].map((card) => (
                    <div key={card.tier} className={`p-6 flex flex-col ${card.highlight ? 'bg-[var(--cds-layer-01)] border-2 border-[#0f62fe] ' : 'bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] hover:shadow-md hover:-translate-y-1'} transition-all duration-300`}>
                      <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-1">{card.tier}</h3>
                      <p className="text-2xl font-semibold text-[#0f62fe] mb-4">{card.price}</p>
                      <p className="carbon-body-01 text-[var(--cds-text-secondary)] flex-1">{card.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b-2 border-[var(--cds-border-subtle)]">
                        <th className="text-left py-3 px-4 carbon-label-01 text-[var(--cds-text-primary)]">Capability</th>
                        <th className="text-center py-3 px-4 carbon-label-01 text-[var(--cds-text-primary)]">Essential</th>
                        <th className="text-center py-3 px-4 carbon-label-01 text-[var(--cds-text-primary)]">Professional</th>
                        <th className="text-center py-3 px-4 carbon-label-01 text-[var(--cds-text-primary)]">Enterprise</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { cap: 'Preventive Maintenance', e: true, p: true, en: true },
                        { cap: 'Filter / Refrigerant Service', e: true, p: true, en: true },
                        { cap: 'Remote Monitoring', e: false, p: true, en: true },
                        { cap: 'Predictive Alerts', e: false, p: true, en: true },
                        { cap: 'Response SLA', e: 'Next business day', p: '8 hours', en: '4 hours' },
                        { cap: 'Monsoon Standby', e: false, p: false, en: true },
                        { cap: 'Room Integrity Validation', e: false, p: false, en: 'Quarterly' },
                        { cap: 'Uptime Guarantee', e: false, p: false, en: '99.9%*' },
                      ].map((row, idx) => (
                        <tr key={idx} className="border-b border-[var(--cds-border-subtle)]">
                          <td className="py-3 px-4 text-[var(--cds-text-primary)]">{row.cap}</td>
                          <td className="py-3 px-4 text-center">
                            {typeof row.e === 'boolean' ? (row.e ? <CheckmarkFilled className="w-4 h-4 text-[#24a148] mx-auto" /> : <span className="text-[#a8a8a8]">-</span>) : <span className="carbon-body-01 text-[var(--cds-text-secondary)]">{row.e}</span>}
                          </td>
                          <td className="py-3 px-4 text-center">
                            {typeof row.p === 'boolean' ? (row.p ? <CheckmarkFilled className="w-4 h-4 text-[#24a148] mx-auto" /> : <span className="text-[#a8a8a8]">-</span>) : <span className="carbon-body-01 text-[var(--cds-text-secondary)]">{row.p}</span>}
                          </td>
                          <td className="py-3 px-4 text-center">
                            {typeof row.en === 'boolean' ? (row.en ? <CheckmarkFilled className="w-4 h-4 text-[#24a148] mx-auto" /> : <span className="text-[#a8a8a8]">-</span>) : <span className="carbon-body-01 text-[var(--cds-text-secondary)]">{row.en}</span>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)] mt-2">*Uptime targets subject to signed SLA, site assessment, and force majeure exclusions.</p>
                </div>

                <ImagePlaceholder
                  title="Thermal Monitoring Operations Centre"
                  desc="3D rendering of a network operations centre (NOC) with large thermal monitoring dashboards displaying rack-level heat maps, alert indicators, and cooling system status. Engineers at workstations reviewing data. Cool blue ambient lighting with warm alert highlights. Show multiple screens with real-time temperature graphs."
                />
              </div>
            </section>

            {/* Section 4: Pakistan-Specific Deployment */}
            <section id="pakistan" className="py-12 border-b border-[var(--cds-border-subtle)] bg-[var(--cds-background)]">
              <div className="max-w-5xl mx-auto px-6">
                <p className="carbon-label-01 text-[#cf0a2c] uppercase mb-3">Built for Local Reality</p>
                <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">Pakistan-Specific Engineering: Global Templates Fail Here</h2>
                <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-8">Standard data centre cooling assumes 35°C ambient, clean air, and stable power. Lahore hits 45°C. Karachi&apos;s dust clogs filters in weeks. Load-shedding cycles stress compressors. We engineer for reality.</p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: TemperatureHot, title: 'Extreme Heat Resilience', items: ['Cooling capacity derated 40% at 45°C → we oversize by 60%', 'High-ambient condensers rated for 50°C+ operation', 'Thermal mass buffering for load-shedding intervals'] },
                    { icon: RainDrop, title: 'Monsoon Humidity Control', items: ['Precision CRAC/CRAH with active humidity management (40-60% RH)', 'Condensate overflow protection and drain redundancy', 'Quarterly validation protocols June–September'] },
                    { icon: Wind, title: 'Dust Exclusion & Filtration', items: ['IP54 cabinet rating with gasket integrity checks', 'MERV 13+ filter specification (not standard G4)', 'Monthly filter inspection in industrial zones'] },
                    { icon: Lightning, title: 'Grid Instability Hardening', items: ['Soft-start compressors to reduce inrush current', 'UPS-buffered control circuits for graceful shutdown', 'Generator-compatible start sequences'] },
                  ].map((card) => (
                    <div key={card.title} className="p-6 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] ">
                      <div className="w-10 h-10 bg-[#cf0a2c]/10 flex items-center justify-center mb-4">
                        <card.icon className="w-5 h-5 text-[#cf0a2c]" />
                      </div>
                      <h3 className="carbon-fluid-heading-03 text-[var(--cds-text-primary)] mb-3">{card.title}</h3>
                      <ul className="space-y-2">
                        {card.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                            <CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-[#0f62fe] text-white text-center">
                  <p className="carbon-fluid-heading-04 mb-2">45°C+</p>
                  <p className="carbon-body-01 text-white/90">Lahore summer peak ambient. Standard units fail. We engineer for this.</p>
                </div>

                <ImagePlaceholder
                  title="Monsoon-Hardened Cooling Infrastructure"
                  desc="3D rendering showing split-view comparison: left side shows standard cooling unit exposed to monsoon rain and dust, right side shows protected unit with IP54 housing, humidity shields, elevated condensate drains, and MERV 13+ filters. Dramatic lighting to highlight the engineering difference. Use Perception IT blue accent (#0f62fe) for protected elements."
                />
              </div>
            </section>

            {/* Section 5: Critical Dependencies */}
            <section id="dependencies" className="py-12 border-b border-[var(--cds-border-subtle)]">
              <div className="max-w-5xl mx-auto px-6">
                <p className="carbon-label-01 text-[#f97316] uppercase mb-3">Risk Transparency</p>
                <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">Critical Dependencies: What Cooling Needs to Work</h2>
                <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-8">Cooling does not work in isolation. Power quality, rack layout, monitoring coverage, and physical security all affect thermal performance. We map these dependencies so there are no surprises.</p>

                <div className="space-y-4 mb-8">
                  {[
                    { from: 'UPS Power Quality', to: 'Compressor motor life degrades 3× with voltage fluctuation > ±10%. Stabilised power extends cooling asset life.', icon: Lightning },
                    { from: 'Rack Layout & Airflow', to: 'Hotspots form when rack inlet temperatures vary > 3°C. Proper aisle containment and blanking panels are non-negotiable.', icon: Wind },
                    { from: 'Environmental Monitoring', to: 'Without rack-level sensors, thermal runaway is invisible until equipment fails. We integrate temperature, humidity, and leak detection.', icon: Dashboard },
                    { from: 'Physical Security', to: 'Unauthorized door openings destroy pressure differentials and introduce dust. Access control audit logs correlate with thermal anomalies.', icon: Shield },
                    { from: 'Fire Suppression', to: 'Gas discharge creates a temporary thermal shock. Cooling must recover within 90 seconds to prevent secondary damage.', icon: DataBase },
                  ].map((item) => (
                    <div key={item.from} className="p-5 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] flex items-start gap-4 ">
                      <div className="w-10 h-10 bg-[#f97316]/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-[#f97316]" />
                      </div>
                      <div>
                        <p className="carbon-label-01 text-[#f97316] uppercase mb-1">{item.from}</p>
                        <p className="carbon-body-01 text-[var(--cds-text-primary)]">{item.to}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-5 border-l-4 border-[#f97316] bg-[#fff8e1]">
                  <p className="carbon-body-01 text-[var(--cds-text-primary)]">
                    <strong>Our approach:</strong> Every cooling engagement includes a dependency audit. If your power, monitoring, or physical layout is not ready, we tell you upfront and offer the services to fix it. No hidden gaps, no finger-pointing later.
                  </p>
                </div>

                <ImagePlaceholder
                  title="Integrated Infrastructure Ecosystem"
                  desc="3D isometric diagram showing how cooling interconnects with power (UPS), racks, fire suppression, and monitoring in a data centre. Cooling highlighted in blue (#0f62fe), power in amber, monitoring in green. Arrows showing data flow and dependency relationships. Clean cutaway view showing under-floor cabling and overhead ducting."
                />
              </div>
            </section>

            {/* Section 6: Integration with Server Continuity Suite */}
            <section id="integration" className="py-12 border-b border-[var(--cds-border-subtle)] bg-[var(--cds-background)]">
              <div className="max-w-5xl mx-auto px-6">
                <p className="carbon-label-01 text-[#24a148] uppercase mb-3">Unified Accountability</p>
                <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">Integration with Server Continuity Suite</h2>
                <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-8">31% of server SLA breaches originate in the facility layer: cooling failure, power loss, or environmental excursion. When cooling is bundled with ServerLife Extend™, ModServe™, or ServerSure™, accountability is unified. One call. One SLA. One partner.</p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    { from: 'Cooling stability', to: 'ServerLife Extend™ thermal requirements (18–24°C inlet, ASHRAE A2)' },
                    { from: 'Predictive thermal alerts', to: 'ServerSure™ dashboard integration: facility + server health in one view' },
                    { from: 'Monsoon standby', to: 'ModServe™ migration windows protected by guaranteed cooling continuity' },
                    { from: 'Dust control', to: 'IP54 cabinets prevent 17% higher server fan failures that breach ServerLife Extend™ SLAs' },
                  ].map((item) => (
                    <div key={item.from} className="p-5 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] flex items-center gap-4 ">
                      <div className="w-10 h-10 bg-[#24a148]/10 flex items-center justify-center flex-shrink-0">
                        <ArrowRight className="w-5 h-5 text-[#24a148]" />
                      </div>
                      <div>
                        <p className="carbon-label-01 text-[var(--cds-text-secondary)] uppercase">{item.from}</p>
                        <p className="carbon-body-01 text-[var(--cds-text-primary)]">{item.to}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-8 bg-[#0f62fe] text-white text-center">
                  <p className="carbon-fluid-heading-04 mb-2">31%</p>
                  <p className="carbon-body-01 text-white/90">of ServerLife Extend™ SLA breaches originate in cooling/power, not server hardware. Bundling eliminates this gap.</p>
                </div>

                <ImagePlaceholder
                  title="Server Continuity Suite Ecosystem"
                  desc="3D diagram or node network visualization showing the Server Continuity Suite ecosystem. Central cooling node connected to ServerLife Extend™, ModServe™, ServerSure™, and ServiceNow nodes. Cooling highlighted with blue glow. Lines between nodes show data exchange. Dark background with subtle grid pattern."
                />
              </div>
            </section>

            {/* Section 7–8: Credibility — Case Studies + Featured Testimonial */}
            <section id="cases" className="py-16 border-b border-[#393939] bg-[#161616]">
              <div className="max-w-5xl mx-auto px-6">
                {/* Shared credibility header */}
                <div className="mb-10">
                  <p className="carbon-label-01 text-[#a8a8a8] uppercase tracking-wider mb-2">Credibility</p>
                  <div className="flex items-end justify-between">
                    <h2 className="carbon-fluid-heading-05 text-[#f4f4f4]">Proven Results</h2>
                    <Link to="/projects" className="hidden md:inline-flex items-center gap-2 carbon-body-01 text-[#78a9ff] hover:text-[#a6c8ff] transition-colors">
                      View all projects <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Case Study Grid */}
                <div className="grid md:grid-cols-3 gap-4 mb-12">
                  {caseStudyData.slice(caseStudyPage * 3, caseStudyPage * 3 + 3).map((study) => (
                    <Link
                      key={study.title}
                      to="/projects"
                      className="group bg-[#262626] border border-[#393939] overflow-hidden hover:border-[#78a9ff] transition-all duration-300 flex flex-col"
                    >
                      {/* Watermark Header */}
                      <div className="relative h-28 bg-[#1a1a1a] border-b border-[#393939] flex items-center justify-center overflow-hidden">
                        <span className="text-7xl font-light text-[#2a2a2a] select-none">
                          {study.client.charAt(0)}
                        </span>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="carbon-label-01 text-[#525252] uppercase tracking-wider bg-[#1a1a1a]/80 px-3 py-1">Project Photo Placeholder</span>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-[#0f62fe] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>

                      {/* Content */}
                      <div className="p-5 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="carbon-label-01 text-[#a8a8a8]">{study.industry}</span>
                          <span className="w-1 h-1 rounded-full bg-[#525252]" />
                          <span className="carbon-label-01 text-[#6f6f6f]">{study.tags[0]}</span>
                        </div>

                        <h3 className="carbon-heading-02 text-[#f4f4f4] mb-2 group-hover:text-[#78a9ff] transition-colors">
                          {study.title}
                        </h3>

                        <p className="carbon-body-01 text-[#a8a8a8] leading-relaxed mb-5 line-clamp-2">
                          {study.desc}
                        </p>

                        {/* Metric */}
                        <div className="mt-auto pt-4 border-t border-[#393939]">
                          <div className="text-3xl font-light text-[#0f62fe]">{study.stat}</div>
                          <div className="carbon-label-01 text-[#6f6f6f] uppercase tracking-wider mt-0.5">{study.label}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Case Study Pagination */}
                <div className="flex items-center justify-center gap-3 mb-16">
                  <button
                    onClick={() => setCaseStudyPage(0)}
                    className={`w-8 h-8 flex items-center justify-center carbon-label-01 transition-colors ${caseStudyPage === 0 ? 'bg-[#0f62fe] text-[#f4f4f4]' : 'bg-transparent text-[#6f6f6f] border border-[#525252] hover:border-[#78a9ff]'}`}
                  >
                    1
                  </button>
                  <button
                    onClick={() => setCaseStudyPage(1)}
                    className={`w-8 h-8 flex items-center justify-center carbon-label-01 transition-colors ${caseStudyPage === 1 ? 'bg-[#0f62fe] text-[#f4f4f4]' : 'bg-transparent text-[#6f6f6f] border border-[#525252] hover:border-[#78a9ff]'}`}
                  >
                    2
                  </button>
                </div>

                {/* Featured Testimonial — dark card, cohesive with section */}
                <div className="mb-4">
                  <p className="carbon-label-01 text-[#a8a8a8] uppercase tracking-wider mb-2">Client Voice</p>
                  <h3 className="carbon-fluid-heading-04 text-[#f4f4f4]">Testimonials</h3>
                </div>

                {([
                  {
                    context: { client: 'Ibrahim Fibres', desc: 'Deployed ServerLife Extend™ to Critical Infrastructure and deferred CapEx spend without compromise on quality and continuity', link: '/projects/case-study/out-of-warranty-server-support-ibrahim-fibres', solutionLink: '/services/server-continuity' },
                    bgImage: '/case-studies/ibrahim-fibres/hero-1920.jpg',
                    quote: "Perception IT transformed our server infrastructure from a risk into a reliable engine for operations. With 48 critical Lenovo servers supporting our production and financial systems, any downtime could have cost us millions. Their 24/7 support, same-day hardware replacements, and proactive maintenance have kept our systems running without a single major incident.\n\nWe now operate with confidence knowing our IT backbone is in expert hands. For any organization managing critical hardware, I highly recommend their service.",
                    author: 'Mr. Usman Zafar',
                    role: 'Head of IT, Ibrahim Fibres Limited',
                    initials: 'UZ',
                    logo: '/logos/clients/IFL-logo.png',
                  },
                  {
                    context: { client: 'National Telecom Operator', desc: 'Monsoon-hardened precision cooling across 3 sites', link: null, solutionLink: null },
                    bgImage: null,
                    quote: 'Their quarterly monsoon validation protocol caught a condensate drain issue before it became an outage. That proactive approach is why we renewed for three more years.',
                    author: 'DC Operations Manager',
                    role: 'National Telecom Operator',
                    initials: 'NT',
                    logo: null,
                  },
                ] as const).filter((_, i) => i === testimonialPage).map((item, i) => (
                  <div key={i} className="relative">
                    {/* Prev / Next — overlap the card edge */}
                    <button
                      onClick={() => setTestimonialPage(testimonialPage === 0 ? 1 : 0)}
                      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-12 h-12 bg-[#1a1a1a] border border-[#393939] flex items-center justify-center text-[#a8a8a8] hover:text-[#f4f4f4] hover:border-[#78a9ff] transition-colors hidden md:flex"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setTestimonialPage(testimonialPage === 0 ? 1 : 0)}
                      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-12 h-12 bg-[#1a1a1a] border border-[#393939] flex items-center justify-center text-[#a8a8a8] hover:text-[#f4f4f4] hover:border-[#78a9ff] transition-colors hidden md:flex"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    <div className="bg-[#262626] border border-[#393939]">
                      <div className="grid md:grid-cols-5 gap-0">
                      {/* Left: Logo with background image */}
                      <div className="relative flex flex-col md:col-span-2 min-h-[320px]">
                        {item.bgImage ? (
                          <>
                            <div
                              className="absolute inset-0 bg-cover bg-center"
                              style={{ backgroundImage: `url(${item.bgImage})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-[#161616]/70 via-[#161616]/40 to-[#161616]/80" />
                          </>
                        ) : (
                          <>
                            <div className="absolute inset-0 bg-[#1a1a1a]" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="carbon-label-01 text-[#525252] uppercase tracking-wider">Client Facility Photo Placeholder</span>
                            </div>
                          </>
                        )}
                        <div className="relative flex-1 flex flex-col p-8 items-start justify-start">
                          {/* Client Identity Tile */}
                          <div className="w-40">
                            <div className="h-28 bg-white flex items-center justify-center">
                              {item.logo ? (
                                <img
                                  src={item.logo}
                                  alt={item.context.client}
                                  className="max-w-full max-h-full object-contain p-3"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                  }}
                                />
                              ) : (
                                <Building className="w-14 h-14 text-[#8d8d8d]" />
                              )}
                            </div>
                            <div className="bg-[#1a1a1a] border border-t-0 border-[#393939] px-4 py-3">
                              <p className="carbon-heading-02 text-[#f4f4f4]">{item.context.client}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right: Context + Quote + Author */}
                      <div className="md:col-span-3 flex flex-col">
                        {/* Context header */}
                        <div className="px-8 pt-6 pb-4 border-b border-[#393939]">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-0.5 bg-[#0f62fe]/15 text-[#78a9ff] carbon-label-01">Client / Service</span>
                            <span className="w-1 h-1 rounded-full bg-[#525252]" />
                            <span className="carbon-label-01 text-[#c6c6c6]">{item.context.client}</span>
                          </div>
                          <p className="carbon-body-01 text-[#a8a8a8] mb-3">{item.context.desc}</p>
                          {item.context.solutionLink && (
                            <Link
                              to={item.context.solutionLink}
                              className="inline-flex items-center gap-2 carbon-label-01 text-[#78a9ff] hover:text-[#a6c8ff] transition-colors"
                            >
                              ServerLife Extend™ Solution details
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          )}
                        </div>

                        {/* Quote */}
                        <div className="px-8 py-8 flex-1 flex flex-col justify-center min-h-[220px]">
                          <blockquote className="relative">
                            <span className="absolute -top-4 -left-4 text-8xl text-[#0f62fe] opacity-45 font-serif leading-none">&ldquo;</span>
                            <div className="text-xl font-serif text-[#f4f4f4] leading-relaxed relative z-10 space-y-5">
                              {item.quote.split('\n\n').map((para, idx) => (
                                <p key={idx}>{para}</p>
                              ))}
                            </div>
                            <span className="absolute -bottom-8 -right-2 text-8xl text-[#0f62fe] opacity-45 font-serif leading-none">&rdquo;</span>
                          </blockquote>
                        </div>

                        {/* Bottom Bar: clean, single CTA */}
                        <div className="border-t border-[#393939] bg-[#1a1a1a]">
                          <div className="flex items-center justify-between px-8 py-5">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-[#0f62fe] text-white flex items-center justify-center text-xs font-semibold tracking-wide">
                                {item.initials}
                              </div>
                              <div>
                                <div className="carbon-heading-01 text-[#f4f4f4] font-semibold">{item.author}</div>
                                <div className="carbon-helper-text-01 text-[#a8a8a8]">{item.role}</div>
                              </div>
                            </div>
                            {item.context.link && (
                              <Link
                                to={item.context.link}
                                className="inline-flex items-center gap-2 carbon-label-01 text-[#78a9ff] hover:text-[#a6c8ff] transition-colors"
                              >
                                Read case study
                                <ArrowRight className="w-4 h-4" />
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

                {/* Testimonial Pagination */}
                <div className="mt-6 flex items-center justify-center gap-3">
                  <button
                    onClick={() => setTestimonialPage(0)}
                    className={`w-8 h-8 flex items-center justify-center carbon-label-01 transition-colors ${testimonialPage === 0 ? 'bg-[#0f62fe] text-[#f4f4f4]' : 'bg-transparent text-[#6f6f6f] border border-[#525252] hover:border-[#78a9ff]'}`}
                  >
                    1
                  </button>
                  <button
                    onClick={() => setTestimonialPage(1)}
                    className={`w-8 h-8 flex items-center justify-center carbon-label-01 transition-colors ${testimonialPage === 1 ? 'bg-[#0f62fe] text-[#f4f4f4]' : 'bg-transparent text-[#6f6f6f] border border-[#525252] hover:border-[#78a9ff]'}`}
                  >
                    2
                  </button>
                </div>
              </div>
            </section>

            {/* Section 10: Partners */}
            <section id="partners" className="border-b border-[var(--cds-border-subtle)]">
              <PartnerLogos />
            </section>

            {/* Section 11: Client Portfolio */}
            <section id="portfolio" className="border-b border-[var(--cds-border-subtle)]">
              <ClientLogos />
            </section>

            {/* Section 12: CTA */}
            <section id="cta" className="py-12 border-b border-[var(--cds-border-subtle)]">
              <div className="max-w-5xl mx-auto px-6">
                <p className="carbon-label-01 text-[#0f62fe] uppercase mb-3">Next Step</p>
                <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">Start With a Thermal Resilience Assessment</h2>
                <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-8">90-minute structured assessment: thermal mapping, capacity validation, dependency audit, and Pakistan-specific risk scoring. Delivered within 48 hours.</p>

                <div className="grid md:grid-cols-3 gap-4 mb-10">
                  {[
                    { step: '01', title: 'On-Site Thermal Audit', desc: 'Infrared thermal mapping, airflow analysis, cooling capacity validation, and single-point-of-failure identification.' },
                    { step: '02', title: 'Engineered Roadmap', desc: 'Tier recommendation, hardware specification, installation scope, and managed service fit. Delivered within 48 hours.' },
                    { step: '03', title: 'Mutual Agreement', desc: 'Service levels, scope, and terms defined in signed contractual agreements, if pursued.' },
                  ].map((item) => (
                    <div key={item.step} className="relative p-6 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] ">
                      <span className="absolute top-4 right-4 carbon-heading-02 text-[var(--cds-text-secondary)]">{item.step}</span>
                      <h3 className="carbon-fluid-heading-03 text-[var(--cds-text-primary)] mb-2">{item.title}</h3>
                      <p className="carbon-body-01 text-[var(--cds-text-secondary)]">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="p-8 bg-[#0f62fe] text-center">
                  <h3 className="carbon-fluid-heading-04 text-white mb-4">Ready to protect your thermal continuity?</h3>
                  <p className="carbon-body-01 text-white/90 mb-6">Request a Thermal Resilience Assessment. PKR 15K fee, credited toward implementation if pursued.</p>
                  <a 
                    href="mailto:contact@perception-it.com"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0f62fe] font-semibold hover:bg-[var(--cds-background)] transition-colors"
                  >
                    Request Assessment
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </section>

            {/* Legal Disclaimer */}
            <section className="py-8 bg-[var(--cds-background)] border-t border-[var(--cds-border-subtle)]">
              <div className="max-w-5xl mx-auto px-6">
                <p className="carbon-label-01 text-[var(--cds-text-secondary)] uppercase tracking-wide mb-3">Important Notices</p>
                <div className="space-y-2 carbon-helper-text-01 text-[var(--cds-text-secondary)]">
                  <p>• Service outcomes, uptime targets, and remedies are defined exclusively in signed contractual agreements between Perception-IT and the client. Marketing materials do not constitute offers or guarantees.</p>
                  <p>• Cooling capacity figures are illustrative and depend on room dimensions, heat load, insulation, and environmental conditions. Formal sizing requires on-site thermal assessment.</p>
                  <p>• &quot;Monsoon-hardened,&quot; &quot;dust-excluded,&quot; and similar terms describe engineering protocols and design intent, not absolute performance warranties.</p>
                  <p>• Perception-IT (Private) Limited. Huawei Enterprise Partner certification valid through Feb 2027 (CERT20251216000154). All trademarks acknowledged.</p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CoolingAirflow;
