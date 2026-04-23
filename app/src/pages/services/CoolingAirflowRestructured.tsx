import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/carbon-typography.css';
import Footer from '../../sections/Footer';
import Navigation from '../../components/Navigation';
import FeaturedTestimonial from '../../components/FeaturedTestimonial';
import PartnerLogos from '../../sections/PartnerLogos';
import ClientLogos from '../../sections/ClientLogos';
import {
  ArrowRight, CheckmarkFilled, WarningAlt,
  TemperatureHot, RainDrop, WindGusts as Wind,
  Tools, Settings, Meter, Certificate,
  ChevronRight,
  Lightning, Security as Shield, DataBase, Dashboard
} from '@carbon/icons-react';

const SECTIONS = ['trust', 'solution', 'proof', 'pricing', 'ecosystem', 'faq', 'cta'] as const;

const caseStudyData = [
  { stat: '99.97%', label: 'Uptime Achieved', client: 'Pakistan Telecom', industry: 'Telecommunications', title: '3-Site Cooling Overhaul', desc: 'Precision CRAC deployment with monsoon-hardened protocols. Zero thermal outages across two monsoon seasons.', tags: ['CRAC Deployment', 'Monsoon Hardening'], outcomes: ['Zero thermal outages across two monsoon seasons', 'CRAC units sized with 25% monsoon humidity buffer', 'Remote monitoring with 4-hour response SLA'] },
  { stat: '40%', label: 'Energy Reduction', client: 'Private Bank', industry: 'Financial Services', title: 'Precision Cooling Refresh', desc: 'Replaced legacy AC with in-row cooling and aisle containment. PUE dropped from 1.8 to 1.35.', tags: ['In-Row Cooling', 'PUE Optimisation'], outcomes: ['PUE reduced from 1.8 to 1.35', '40% energy savings validated over 12 months', 'Hot-spot elimination across all 8 racks'] },
  { stat: '4hrs', label: 'Response Time', client: 'Government IDC', industry: 'Government', title: 'Managed Thermal Service', desc: 'End-to-end cooling supply, install, and managed service with quarterly validation and monsoon standby.', tags: ['Managed Service', 'SLA'], outcomes: ['4-hour on-site response guarantee', 'Quarterly thermal validation reports', 'Monsoon standby protocol with spare CRAC'] },
];

const sectionLabels: Record<string, string> = {
  solution: 'Solution',
  proof: 'Proof',
  pricing: 'Pricing',
  ecosystem: 'Ecosystem',
  faq: 'FAQ',
  cta: 'Get Started',
};

const CoolingAirflowRestructured = () => {
  const [activeSection, setActiveSection] = useState('trust');
  const [testimonialPage, setTestimonialPage] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target as Element);
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll('.scroll-animate').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
      window.scrollTo({ top: elementPosition - headerOffset, behavior: 'smooth' });
    }
  };

  const handleMobileNavChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    scrollToSection(e.target.value);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-[var(--cds-background)]">
      <Navigation />

      {/* Schema.org BreadcrumbList */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://perception-it.com/' },
            { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://perception-it.com/services' },
            { '@type': 'ListItem', position: 3, name: 'Infrastructure' },
            { '@type': 'ListItem', position: 4, name: 'Data Centre Services' },
            { '@type': 'ListItem', position: 5, name: 'Cooling & Airflow' }
          ]
        })}
      </script>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1: HERO
          ═══════════════════════════════════════════════════════════ */}
      <section id="overview" className="relative pt-40 pb-20 bg-[#0a1628] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 right-1/4 w-[600px] h-[600px] bg-[#0f62fe] rounded-full blur-[140px] opacity-20 animate-drift" />
          <div className="absolute -bottom-20 left-1/4 w-[500px] h-[500px] bg-[#009d9a] rounded-full blur-[120px] opacity-[0.15] animate-drift-slow" />
          <div className="absolute top-1/3 left-1/2 w-[400px] h-[400px] bg-[#1192e8] rounded-full blur-[100px] opacity-10 animate-drift" style={{ animationDelay: '-5s' }} />
          <div className="absolute bottom-1/4 right-1/3 w-[350px] h-[350px] bg-[#0f62fe] rounded-full blur-[90px] opacity-[0.15] animate-drift-slow" style={{ animationDelay: '-10s' }} />
          <div className="absolute top-1/2 left-[20%] w-[300px] h-[300px] bg-[#009d9a] rounded-full blur-[80px] opacity-10 animate-drift" style={{ animationDelay: '-15s' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Mobile Dropdown Navigation */}
          <div className="xl:hidden mb-8">
            <label className="text-xs text-gray-400 block mb-2">On this page:</label>
            <select onChange={handleMobileNavChange} value={activeSection} className="w-full h-12 px-4 bg-gray-800 border border-gray-700 text-white text-sm">
              {SECTIONS.map((id) => (
                <option key={id} value={id}>{sectionLabels[id]}</option>
              ))}
            </select>
          </div>

          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-xs">
              <li><a href="/" className="text-[#78a9ff] hover:text-white hover:underline transition-colors">Home</a></li>
              <li aria-hidden="true"><ChevronRight className="w-3 h-3 text-[#525252]" /></li>
              <li><a href="/services" className="text-[#78a9ff] hover:text-white hover:underline transition-colors">Services</a></li>
              <li aria-hidden="true"><ChevronRight className="w-3 h-3 text-[#525252]" /></li>
              <li><span className="text-[#a8a8a8]">Infrastructure</span></li>
              <li aria-hidden="true"><ChevronRight className="w-3 h-3 text-[#525252]" /></li>
              <li><span className="text-[#a8a8a8]">Data Centre Services</span></li>
              <li aria-hidden="true"><ChevronRight className="w-3 h-3 text-[#525252]" /></li>
              <li><span className="text-[#009d9a] font-medium" aria-current="page">Cooling & Airflow</span></li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="carbon-fluid-heading-05 text-white mb-8 max-w-4xl leading-tight">Cooling & Airflow Management</h1>
            <p className="carbon-heading-02 text-[#c6c6c6] mb-8 max-w-2xl">Keep your critical infrastructure running at optimal temperature. From hardware supply to 24/7 managed thermal continuity.</p>
            <p className="carbon-body-02 text-[#a8a8a8] mb-10 max-w-2xl">Precision cooling engineered for Pakistan&apos;s climate reality: 45°C summers, monsoon humidity spikes, dust infiltration, and unstable grid power. One partner, end-to-end accountability.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#cta" className="cds--btn cds--btn--primary bg-[#0f62fe] hover:bg-[#0353e9] inline-flex items-center">
                Request Cooling Assessment
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a href="#solution" className="cds--btn cds--btn--tertiary" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white', borderWidth: '1px' }}>
                Explore Our Solution
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2: QUICK NAVIGATION
          ═══════════════════════════════════════════════════════════ */}
      <section id="trust" className="py-16 bg-[var(--cds-background)] border-b border-[var(--cds-border-subtle)]">
        <div className="max-w-[1584px] mx-auto px-6">
          <div className="max-w-5xl mx-auto scroll-animate">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { icon: TemperatureHot, label: 'Solution', section: 'solution', color: '#0f62fe' },
                { icon: Tools, label: 'Proof', section: 'proof', color: '#6929c4' },
                { icon: Shield, label: 'Pricing', section: 'pricing', color: '#24a148' },
                { icon: RainDrop, label: 'Ecosystem', section: 'ecosystem', color: '#cf0a2c' },
                { icon: Lightning, label: 'FAQ', section: 'faq', color: '#f97316' },
                { icon: Dashboard, label: 'Get Started', section: 'cta', color: '#0f62fe' },
              ].map((item) => (
                <button
                  key={item.section}
                  onClick={() => scrollToSection(item.section)}
                  className="group p-4 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] hover:border-[#009d9a] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-left"
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

      {/* ═══════════════════════════════════════════════════════════
          MAIN CONTENT WITH SIDE NAV
          ═══════════════════════════════════════════════════════════ */}
      <div className="max-w-[1584px] mx-auto">
        <div className="flex">
          {/* Desktop Side Menu */}
          <aside className="hidden xl:block w-56 flex-shrink-0 pl-6 pr-8">
            <nav className="sticky top-20 pt-8 pb-8 h-[calc(100vh-5rem)]">
              <p className="carbon-label-01 text-[#a8a8a8] uppercase tracking-wider mb-4 px-3">On this page</p>
              <ul className="space-y-0.5">
                {SECTIONS.filter((id) => id !== 'trust').map((id) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollToSection(id)}
                      className={`w-full text-left px-3 py-2 text-sm transition-colors border-l-2 ${
                        activeSection === id
                          ? 'text-[#0f62fe] border-[#0f62fe] bg-[#f4f4f4] font-semibold'
                          : 'text-[#525252] border-transparent hover:text-[#161616] hover:bg-[#f4f4f4] hover:border-[#c6c6c6]'
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

            {/* ═══════════════════════════════════════════════════════════
                SECTION 3: WHY STANDARD COOLING FAILS IN PAKISTAN
                ═══════════════════════════════════════════════════════════ */}
            <section id="problem" className="py-16 bg-[var(--cds-background)] border-b border-[var(--cds-border-subtle)]">
              <div className="max-w-5xl mx-auto px-6 scroll-animate">
                <div className="mb-3">
                  <div className="w-6 h-0.5 bg-[#009d9a] mb-2" />
                  <p className="carbon-label-01 text-[#161616] uppercase tracking-wider">The Reality</p>
                </div>
                <h2 className="carbon-fluid-heading-04 text-[var(--cds-text-primary)] mb-6">Why Most Cooling Fails in Pakistan</h2>
                <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-8">Standard data centre cooling assumes 35°C ambient, clean air, and stable power. Pakistan delivers none of these. Here&apos;s what actually happens:</p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: TemperatureHot, title: 'Extreme Heat Destroys Standard Units', items: ['Cooling capacity derated 40% at 45°C → we oversize by 60%', 'High-ambient condensers rated for 50°C+ operation', 'Thermal mass buffering for load-shedding intervals'] },
                    { icon: RainDrop, title: 'Monsoons Flood Condensate Drains', items: ['Precision CRAC/CRAH with active humidity management (40-60% RH)', 'Condensate overflow protection and drain redundancy', 'Quarterly validation protocols June–September'] },
                    { icon: Wind, title: 'Dust Clogs Filters in Weeks', items: ['IP54 cabinet rating with gasket integrity checks', 'MERV 13+ filter specification (not standard G4)', 'Monthly filter inspection in industrial zones'] },
                    { icon: Lightning, title: 'Load-Shedding Cycles Kill Compressors', items: ['Soft-start compressors to reduce inrush current', 'UPS-buffered control circuits for graceful shutdown', 'Generator-compatible start sequences'] },
                  ].map((card) => (
                    <div key={card.title} className="p-6 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] hover:shadow-md hover:-translate-y-1 transition-all duration-300">
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

                {/* Cost of Failure card */}
                <div className="p-6 bg-[#fff8e1] border-l-4 border-[#f97316] mb-8">
                  <div className="flex items-start gap-3">
                    <WarningAlt className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="carbon-label-01 text-[#f97316] font-semibold mb-1">The Cost of Failure</p>
                      <ul className="space-y-1 carbon-body-01 text-[var(--cds-text-primary)]">
                        <li>Unplanned outages cost PKR 2–5M/day in lost production</li>
                        <li>Equipment thermal damage voids manufacturer warranties</li>
                        <li>SLA breaches trigger penalty clauses with downstream clients</li>
                        <li>Reputation damage with regulators and enterprise customers</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 35°C vs 45°C+ comparison */}
                <div className="bg-gradient-to-r from-[#0f62fe] to-[#009d9a] p-10 text-white text-center scroll-animate">
                  <div className="flex items-center justify-center gap-8 mb-4">
                    <div className="text-right">
                      <div className="text-sm text-white/70 uppercase tracking-wider">Standard Design</div>
                      <div className="text-4xl font-light text-white/60">35°C</div>
                    </div>
                    <div className="w-px h-16 bg-white/30" />
                    <div className="text-left">
                      <div className="text-sm text-white/70 uppercase tracking-wider">Our Engineering</div>
                      <div className="text-6xl font-light">45°C+</div>
                    </div>
                  </div>
                  <p className="carbon-body-01 text-white/90">Lahore summer peak ambient. Standard units fail. We engineer for this.</p>
                </div>
              </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════
                SECTION 4: OUR SOLUTION
                ═══════════════════════════════════════════════════════════ */}
            <section id="solution" className="py-16 bg-[#f4f4f4] border-b border-[var(--cds-border-subtle)]">
              <div className="max-w-5xl mx-auto px-6 scroll-animate">
                <div className="mb-3">
                  <div className="w-6 h-0.5 bg-[#009d9a] mb-2" />
                  <p className="carbon-label-01 text-[#161616] uppercase tracking-wider">How We Fix It</p>
                </div>
                <h2 className="carbon-fluid-heading-04 text-[var(--cds-text-primary)] mb-6">Our Solution: End-to-End Thermal Continuity</h2>
                <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-10">We handle everything from hardware procurement to 24/7 monitoring. Three steps. One partner. Full accountability.</p>

                {/* ─── Step 1: Hardware Supply ─── */}
                <div className="mb-16">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#0f62fe] text-white flex items-center justify-center font-semibold text-sm">01</div>
                    <div>
                      <p className="carbon-label-01 text-[#0f62fe] uppercase tracking-wider">Step 1</p>
                      <h3 className="carbon-fluid-heading-03 text-[var(--cds-text-primary)]">What You Buy</h3>
                    </div>
                  </div>
                  <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-6">Precision cooling hardware from tier-1 manufacturers, validated for Pakistan&apos;s 45°C+ ambient and monsoon humidity before shipment.</p>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    {[
                      { icon: TemperatureHot, title: 'Server Room AC Units', short: 'Edge sites & small server rooms up to 50kW.', category: 'Edge Cooling', bullets: ['Wall-mounted, ceiling-suspended, and portable units', 'Designed for edge sites and small server rooms up to 50kW heat load', 'Split-system and ducted configurations available', 'All units validated for 45°C ambient and monsoon humidity before shipment'] },
                      { icon: Wind, title: 'In-Row & CRAC Precision Cooling', short: 'Close-coupled cooling for high-density racks.', category: 'Precision Cooling', bullets: ['Close-coupled cooling for high-density racks', 'Hot/cold aisle compatible with N+1 redundancy options', 'Row-based and room-based CRAC/CRAH units from 5kW to 150kW', 'Integrated with aisle containment and variable-speed fans for part-load efficiency'] },
                      { icon: Meter, title: 'Liquid Cooling Systems', short: 'Direct-to-chip and immersion cooling.', category: 'Liquid Cooling', bullets: ['Direct-to-chip and immersion cooling for HPC, AI training clusters, and GPU-dense deployments', 'Coolant Distribution Units (CDUs) with leak detection and automatic isolation', 'Supports NVIDIA H100/A100 densities up to 80kW per rack'] },
                    ].map((card) => (
                      <div key={card.title} className="group h-80 [perspective:1000px]">
                        <div className="relative h-full w-full [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateY(180deg)] shadow-sm hover:shadow-lg">
                          <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] flex flex-col overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f62fe]/[0.04] pointer-events-none" />
                            <div className="h-1 bg-[#0f62fe]" />
                            <div className="p-5 flex-1 flex flex-col relative">
                              <div className="w-11 h-11 bg-[#0f62fe]/10 border border-[#0f62fe]/20 flex items-center justify-center mb-4">
                                <card.icon className="w-5 h-5 text-[#0f62fe]" />
                              </div>
                              <span className="inline-flex self-start px-2 py-0.5 bg-[#f4f4f4] border border-[#e0e0e0] text-[#525252] text-[10px] font-medium uppercase tracking-wider mb-3">{card.category}</span>
                              <h4 className="text-lg font-semibold text-[var(--cds-text-primary)] leading-snug mb-2">{card.title}</h4>
                              <p className="text-sm text-[var(--cds-text-secondary)] leading-relaxed">{card.short}</p>
                              <div className="mt-auto pt-4 border-t border-[var(--cds-border-subtle)]">
                                <span className="inline-flex items-center gap-1.5 carbon-label-01 text-[#0f62fe]">Explore <ArrowRight className="w-3.5 h-3.5" /></span>
                              </div>
                            </div>
                          </div>
                          <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#0f62fe] text-white flex flex-col overflow-hidden">
                            <div className="h-1 bg-white/30" />
                            <div className="p-5 flex-1 flex flex-col">
                              <div className="w-10 h-10 bg-white/15 border border-white/20 flex items-center justify-center mb-3">
                                <card.icon className="w-5 h-5 text-white" />
                              </div>
                              <h4 className="text-sm font-semibold text-white leading-snug mb-4">{card.title}</h4>
                              <ul className="text-xs text-white/90 leading-snug list-disc list-outside pl-3.5 space-y-2.5 marker:text-white/50 flex-1 flex flex-col justify-center">
                                {card.bullets.map((b, i) => (<li key={i}>{b}</li>))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-6 bg-white border border-[var(--cds-border-subtle)]">
                    <h4 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-4">Manufacturer Partnerships</h4>
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      {['Huawei', 'Lenovo', 'Dell', 'HP'].map((name) => (
                        <div key={name} className="flex items-center justify-center h-10 px-2">
                          <span className="carbon-label-01 text-[#525252]">{name}</span>
                        </div>
                      ))}
                    </div>
                    <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)]">
                      All hardware includes manufacturer warranty pass-through. Extended warranty and spare-part bundling available via <Link to="/services/server-continuity" className="text-[#0f62fe] hover:underline font-medium">ServerLife Extend™</Link>.
                    </p>
                  </div>
                </div>

                {/* ─── Step 2: Installation ─── */}
                <div className="mb-16">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#0f62fe] text-white flex items-center justify-center font-semibold text-sm">02</div>
                    <div>
                      <p className="carbon-label-01 text-[#0f62fe] uppercase tracking-wider">Step 2</p>
                      <h3 className="carbon-fluid-heading-03 text-[var(--cds-text-primary)]">How It Gets Deployed</h3>
                    </div>
                  </div>
                  <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-6">Standard installation stops at power-on. We validate thermal performance under real load conditions, map airflow patterns, and prove failover before handover.</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {[
                      { icon: Settings, title: 'Mechanical Installation', items: ['Positioning and levelling', 'Refrigerant line brazing and pressure testing', 'Condensate drain routing', 'Electrical connection and breaker sizing'] },
                      { icon: Meter, title: 'Thermal Validation', items: ['Infrared thermal mapping of rack inlets', 'CFD airflow simulation for hotspot elimination', 'Load-bank testing at design capacity', 'Failover simulation: primary → secondary → portable'] },
                      { icon: Certificate, title: 'Commissioning Sign-Off', items: ['As-built documentation', 'Cooling capacity test report', 'Setpoint calibration (temperature & humidity)', 'Operator training handover'] },
                      { icon: Dashboard, title: 'Monitoring Integration', items: ['Sensor placement (rack inlet, return air, under-floor)', 'DCIM integration (Huawei iManager, Schneider StruxureWare)', 'Alert threshold configuration', 'NOC dashboard onboarding'] },
                    ].map((card) => (
                      <div key={card.title} className="p-6 bg-white border border-[var(--cds-border-subtle)] hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                        <div className="w-10 h-10 bg-[#0f62fe]/10 flex items-center justify-center mb-4">
                          <card.icon className="w-5 h-5 text-[#0f62fe]" />
                        </div>
                        <h4 className="carbon-fluid-heading-03 text-[var(--cds-text-primary)] mb-3">{card.title}</h4>
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
                        <p className="carbon-body-01 text-[var(--cds-text-primary)]">Over 60% of cooling failures in Pakistan within the first 12 months originate from incorrect refrigerant charge, undersized condensate drains, or missing thermal validation — not hardware defects.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ─── Step 3: Managed Services ─── */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#0f62fe] text-white flex items-center justify-center font-semibold text-sm">03</div>
                    <div>
                      <p className="carbon-label-01 text-[#0f62fe] uppercase tracking-wider">Step 3</p>
                      <h3 className="carbon-fluid-heading-03 text-[var(--cds-text-primary)]">Who Runs It</h3>
                    </div>
                  </div>
                  <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-6">Cooling equipment degrades predictably. Filters clog. Refrigerant leaks. Setpoints drift. Our managed service catches these before they become outages.</p>

                  {/* Pricing Tiers */}
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="flex flex-col bg-white border border-[var(--cds-border-subtle)] hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                      <div className="p-6 border-b border-[var(--cds-border-subtle)]">
                        <h4 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">Essential</h4>
                        <div className="flex items-baseline gap-1"><span className="text-3xl font-light text-[#161616]">PKR 65K</span><span className="carbon-body-01 text-[#525252]">/mo</span></div>
                      </div>
                      <div className="p-6 flex-1">
                        <ul className="space-y-3">
                          {['Quarterly preventive maintenance', 'Filter replacement', 'Refrigerant check', 'Basic telemetry review'].map((item) => (
                            <li key={item} className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]"><CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-6 border-t border-[var(--cds-border-subtle)]">
                        <a href="#cta" className="cds--btn cds--btn--tertiary w-full h-12 flex items-center justify-center border-[#161616] text-[#161616] hover:bg-[#161616] hover:text-white transition-colors">Enquire</a>
                      </div>
                    </div>

                    <div className="flex flex-col bg-white border-2 border-[#0f62fe] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative">
                      <div className="absolute top-0 left-0 w-full h-1 bg-[#0f62fe]" />
                      <div className="px-6 pt-3 pb-2">
                        <span className="inline-block px-2 py-0.5 bg-[#0f62fe]/10 text-[#0f62fe] carbon-label-01 uppercase tracking-wider">Recommended</span>
                      </div>
                      <div className="px-6 pb-4 border-b border-[var(--cds-border-subtle)]">
                        <h4 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">Professional</h4>
                        <div className="flex items-baseline gap-1"><span className="text-3xl font-light text-[#0f62fe]">PKR 145K</span><span className="carbon-body-01 text-[#525252]">/mo</span></div>
                      </div>
                      <div className="p-6 flex-1">
                        <ul className="space-y-3">
                          {['Monthly preventive maintenance', '8-hour response SLA', 'Predictive alerts', 'Thermal trending report', 'Spare parts pre-staging', 'Remote monitoring'].map((item) => (
                            <li key={item} className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]"><CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-6 border-t border-[var(--cds-border-subtle)]">
                        <a href="#cta" className="cds--btn cds--btn--primary w-full h-12 flex items-center justify-center bg-[#0f62fe] text-white hover:bg-[#0353e9] transition-colors">Get Started <ArrowRight className="w-4 h-4 ml-2" /></a>
                      </div>
                    </div>

                    <div className="flex flex-col bg-white border border-[var(--cds-border-subtle)] hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                      <div className="p-6 border-b border-[var(--cds-border-subtle)]">
                        <h4 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">Enterprise</h4>
                        <div className="flex items-baseline gap-1"><span className="text-3xl font-light text-[#161616]">PKR 380K+</span><span className="carbon-body-01 text-[#525252]">/mo</span></div>
                      </div>
                      <div className="p-6 flex-1">
                        <ul className="space-y-3">
                          {['24/7 NOC monitoring', '4-hour response SLA', 'Monsoon standby engineers', 'Quarterly room integrity validation', 'SLA-backed 99.9% uptime', 'Predictive alerts', 'Spare parts pre-staging'].map((item) => (
                            <li key={item} className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]"><CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-6 border-t border-[var(--cds-border-subtle)]">
                        <a href="#cta" className="cds--btn cds--btn--tertiary w-full h-12 flex items-center justify-center border-[#161616] text-[#161616] hover:bg-[#161616] hover:text-white transition-colors">Contact Sales</a>
                      </div>
                    </div>
                  </div>

                  {/* Comparison Table */}
                  <div className="overflow-x-auto mb-8">
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
                            <td className="py-3 px-4 text-center">{typeof row.e === 'boolean' ? (row.e ? <CheckmarkFilled className="w-4 h-4 text-[#24a148] mx-auto" /> : <span className="text-[#a8a8a8]">-</span>) : <span className="carbon-body-01 text-[var(--cds-text-secondary)]">{row.e}</span>}</td>
                            <td className="py-3 px-4 text-center">{typeof row.p === 'boolean' ? (row.p ? <CheckmarkFilled className="w-4 h-4 text-[#24a148] mx-auto" /> : <span className="text-[#a8a8a8]">-</span>) : <span className="carbon-body-01 text-[var(--cds-text-secondary)]">{row.p}</span>}</td>
                            <td className="py-3 px-4 text-center">{typeof row.en === 'boolean' ? (row.en ? <CheckmarkFilled className="w-4 h-4 text-[#24a148] mx-auto" /> : <span className="text-[#a8a8a8]">-</span>) : <span className="carbon-body-01 text-[var(--cds-text-secondary)]">{row.en}</span>}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)] mt-2">*Uptime targets subject to signed SLA, site assessment, and force majeure exclusions.</p>
                  </div>

                  {/* Thermal Engineering Add-On */}
                  <div className="p-6 bg-white border border-[#009d9a] border-l-4">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex-1">
                        <p className="carbon-label-01 text-[#009d9a] uppercase tracking-wider mb-1">Optional Add-On</p>
                        <h4 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">Thermal Engineering</h4>
                        <p className="carbon-body-01 text-[var(--cds-text-secondary)]">Remote CFD analysis, capacity planning, and cooling audits — without committing to a managed service contract.</p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <div className="px-3 py-2 bg-[#f4f4f4] text-center">
                          <p className="text-sm font-semibold text-[#161616]">PKR 25–50K</p>
                          <p className="text-[11px] text-[#525252]">Quick-Look</p>
                        </div>
                        <div className="px-3 py-2 bg-[#f4f4f4] text-center">
                          <p className="text-sm font-semibold text-[#161616]">PKR 150–300K</p>
                          <p className="text-[11px] text-[#525252]">CFD Simulation</p>
                        </div>
                        <div className="px-3 py-2 bg-[#f4f4f4] text-center">
                          <p className="text-sm font-semibold text-[#161616]">PKR 500K–1M</p>
                          <p className="text-[11px] text-[#525252]">Full Design</p>
                        </div>
                      </div>
                      <a href="mailto:contact@perception-it.com?subject=Thermal%20Engineering%20Enquiry" className="cds--btn cds--btn--tertiary h-12 px-4 border-[#009d9a] text-[#009d9a] hover:bg-[#009d9a] hover:text-white transition-colors flex-shrink-0">Enquire</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════
                SECTION 5: PROOF
                ═══════════════════════════════════════════════════════════ */}
            <section id="proof" className="py-20 bg-[#161616] border-b border-[#393939] relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-[#0f62fe] rounded-full blur-[150px] opacity-[0.04]" />
              <div className="relative max-w-5xl mx-auto px-6 scroll-animate">

                {/* Case Studies */}
                <div className="mb-16">
                  <div className="mb-10">
                    <p className="carbon-label-01 text-[#a8a8a8] uppercase tracking-wider mb-2">Credibility</p>
                    <div className="flex items-end justify-between">
                      <h2 className="carbon-fluid-heading-04 text-[#f4f4f4]">Proven Results</h2>
                      <Link to="/projects" className="hidden md:inline-flex items-center gap-2 carbon-body-01 text-[#78a9ff] hover:text-[#a6c8ff] transition-colors">View all projects <ArrowRight className="w-4 h-4" /></Link>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    {caseStudyData.map((study) => (
                      <Link key={study.title} to="/projects" className="group bg-[#262626] border border-[#393939] overflow-hidden hover:border-[#009d9a] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
                        <div className="relative h-28 bg-[#1a1a1a] border-b border-[#393939] flex items-center justify-center overflow-hidden">
                          <span className="text-7xl font-light text-[#2a2a2a] select-none">{study.client.charAt(0)}</span>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="carbon-label-01 text-[#525252] uppercase tracking-wider bg-[#1a1a1a]/80 px-3 py-1">Project Photo Placeholder</span>
                          </div>
                          <div className="absolute top-0 left-0 w-full h-0.5 bg-[#0f62fe] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="p-5 flex-1 flex flex-col">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="carbon-label-01 text-[#a8a8a8]">{study.industry}</span>
                            <span className="w-1 h-1 rounded-full bg-[#525252]" />
                            <span className="carbon-label-01 text-[#6f6f6f]">{study.tags[0]}</span>
                          </div>
                          <h3 className="carbon-heading-02 text-[#f4f4f4] mb-2 group-hover:text-[#78a9ff] transition-colors">{study.title}</h3>
                          <p className="carbon-body-01 text-[#a8a8a8] leading-relaxed mb-5 line-clamp-2">{study.desc}</p>
                          <div className="mt-auto pt-4 border-t border-[#393939]">
                            <div className="text-3xl font-light text-[#0f62fe]">{study.stat}</div>
                            <div className="carbon-label-01 text-[#6f6f6f] uppercase tracking-wider mt-0.5">{study.label}</div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div>
                  <div className="mb-4">
                    <p className="carbon-label-01 text-[#a8a8a8] uppercase tracking-wider mb-2">Client Voice</p>
                    <h3 className="carbon-fluid-heading-04 text-[#f4f4f4]">What Clients Say</h3>
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
                  ] as const).filter((_, i) => i === testimonialPage).map((item) => (
                    <FeaturedTestimonial
                      key={item.context.client}
                      quote={item.quote}
                      author={item.author}
                      role={item.role}
                      client={item.context.client}
                      initials={item.initials}
                      clientLogo={item.logo}
                      bgImage={item.bgImage}
                      contextDesc={item.context.desc}
                      contextLink={item.context.link}
                      solutionLink={item.context.solutionLink}
                      solutionLabel="ServerLife Extend™ Solution details"
                      showNav
                      onPrev={() => setTestimonialPage(testimonialPage === 0 ? 1 : 0)}
                      onNext={() => setTestimonialPage(testimonialPage === 0 ? 1 : 0)}
                      variant="dark"
                    />
                  ))}
                  <div className="mt-6 flex items-center justify-center gap-3">
                    <button onClick={() => setTestimonialPage(0)} className={`w-8 h-8 flex items-center justify-center carbon-label-01 transition-colors ${testimonialPage === 0 ? 'bg-[#0f62fe] text-[#f4f4f4]' : 'bg-transparent text-[#6f6f6f] border border-[#525252] hover:border-[#78a9ff]'}`}>1</button>
                    <button onClick={() => setTestimonialPage(1)} className={`w-8 h-8 flex items-center justify-center carbon-label-01 transition-colors ${testimonialPage === 1 ? 'bg-[#0f62fe] text-[#f4f4f4]' : 'bg-transparent text-[#6f6f6f] border border-[#525252] hover:border-[#78a9ff]'}`}>2</button>
                  </div>
                </div>
              </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════
                SECTION 6: PRICING
                ═══════════════════════════════════════════════════════════ */}
            <section id="pricing" className="py-16 bg-[var(--cds-background)] border-b border-[var(--cds-border-subtle)]">
              <div className="max-w-5xl mx-auto px-6 scroll-animate">
                <div className="mb-3">
                  <div className="w-6 h-0.5 bg-[#009d9a] mb-2" />
                  <p className="carbon-label-01 text-[#161616] uppercase tracking-wider">Investment</p>
                </div>
                <h2 className="carbon-fluid-heading-04 text-[var(--cds-text-primary)] mb-4">Transparent Pricing</h2>
                <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-8">Choose the tier that matches your risk tolerance. All tiers include Pakistan-validated hardware and monsoon-hardened installation.</p>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="p-6 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)]">
                    <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">Essential</h3>
                    <p className="text-3xl font-light text-[#161616] mb-2">PKR 65K<span className="text-base text-[#525252]">/mo</span></p>
                    <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-4">Quarterly maintenance, next-business-day response.</p>
                    <a href="#cta" className="cds--btn cds--btn--tertiary w-full h-12 flex items-center justify-center border-[#161616] text-[#161616] hover:bg-[#161616] hover:text-white transition-colors">Enquire</a>
                  </div>
                  <div className="p-6 bg-[var(--cds-layer-01)] border-2 border-[#0f62fe] relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#0f62fe]" />
                    <span className="inline-block px-2 py-0.5 bg-[#0f62fe]/10 text-[#0f62fe] carbon-label-01 uppercase tracking-wider mb-2">Recommended</span>
                    <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">Professional</h3>
                    <p className="text-3xl font-light text-[#0f62fe] mb-2">PKR 145K<span className="text-base text-[#525252]">/mo</span></p>
                    <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-4">Monthly maintenance, 8-hour response, remote monitoring.</p>
                    <a href="#cta" className="cds--btn cds--btn--primary w-full h-12 flex items-center justify-center bg-[#0f62fe] text-white hover:bg-[#0353e9] transition-colors">Get Started <ArrowRight className="w-4 h-4 ml-2" /></a>
                  </div>
                  <div className="p-6 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)]">
                    <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">Enterprise</h3>
                    <p className="text-3xl font-light text-[#161616] mb-2">PKR 380K+<span className="text-base text-[#525252]">/mo</span></p>
                    <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-4">24/7 NOC, 4-hour response, monsoon standby engineers.</p>
                    <a href="#cta" className="cds--btn cds--btn--tertiary w-full h-12 flex items-center justify-center border-[#161616] text-[#161616] hover:bg-[#161616] hover:text-white transition-colors">Contact Sales</a>
                  </div>
                </div>

                <div className="p-6 bg-[#f4f4f4] border border-[var(--cds-border-subtle)] text-center">
                  <p className="carbon-body-01 text-[var(--cds-text-primary)]">Not sure which tier? <strong>Start with a Thermal Resilience Assessment.</strong> PKR 15K fee, credited toward implementation if pursued.</p>
                </div>
              </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════
                SECTION 7: ECOSYSTEM
                ═══════════════════════════════════════════════════════════ */}
            <section id="ecosystem" className="py-16 bg-[#f4f4f4] border-b border-[var(--cds-border-subtle)] relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #161616 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
              <div className="relative max-w-5xl mx-auto px-6 scroll-animate">

                {/* Integration */}
                <div className="mb-16">
                  <div className="mb-3">
                    <div className="w-6 h-0.5 bg-[#009d9a] mb-2" />
                    <p className="carbon-label-01 text-[#161616] uppercase tracking-wider">Unified Accountability</p>
                  </div>
                  <h2 className="carbon-fluid-heading-04 text-[var(--cds-text-primary)] mb-4">Part of the Server Continuity Suite</h2>
                  <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-8">31% of server SLA breaches originate in the facility layer: cooling failure, power loss, or environmental excursion. When cooling is bundled with ServerLife Extend™, ModServe™, or ServerSure™, accountability is unified. One call. One SLA. One partner.</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {[
                      { from: 'Cooling stability', to: 'ServerLife Extend™ thermal requirements (18–24°C inlet, ASHRAE A2)' },
                      { from: 'Predictive thermal alerts', to: 'ServerSure™ dashboard integration: facility + server health in one view' },
                      { from: 'Monsoon standby', to: 'ModServe™ migration windows protected by guaranteed cooling continuity' },
                      { from: 'Dust control', to: 'IP54 cabinets prevent 17% higher server fan failures that breach ServerLife Extend™ SLAs' },
                    ].map((item) => (
                      <div key={item.from} className="p-5 bg-white border border-[var(--cds-border-subtle)] flex items-center gap-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
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

                  {/* 31% stat banner */}
                  <div className="bg-gradient-to-br from-[#0f62fe] to-[#009d9a] p-10 text-white text-center relative overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                      <div className="relative w-32 h-32">
                        <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                          <path className="text-white/20" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                          <path className="text-white" strokeDasharray="31, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-2xl font-light">31%</span>
                        </div>
                      </div>
                      <div className="text-left">
                        <p className="carbon-fluid-heading-04 mb-2">of ServerLife Extend™ SLA breaches</p>
                        <p className="carbon-body-01 text-white/90">originate in cooling/power, not server hardware. Bundling eliminates this gap.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dependencies */}
                <div>
                  <div className="mb-3">
                    <div className="w-6 h-0.5 bg-[#009d9a] mb-2" />
                    <p className="carbon-label-01 text-[#161616] uppercase tracking-wider">Risk Transparency</p>
                  </div>
                  <h3 className="carbon-fluid-heading-04 text-[var(--cds-text-primary)] mb-4">What Cooling Needs to Work</h3>
                  <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-8">Cooling does not work in isolation. Power quality, rack layout, monitoring coverage, and physical security all affect thermal performance. We map these dependencies so there are no surprises.</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {[
                      { icon: Lightning, label: 'UPS Power', desc: 'Compressor motor life degrades 3× with voltage fluctuation > ±10%. Stabilised power extends cooling asset life.' },
                      { icon: Wind, label: 'Rack Layout', desc: 'Hotspots form when rack inlet temperatures vary > 3°C. Proper aisle containment and blanking panels are non-negotiable.' },
                      { icon: Dashboard, label: 'Monitoring', desc: 'Without rack-level sensors, thermal runaway is invisible until equipment fails. We integrate temperature, humidity, and leak detection.' },
                      { icon: Shield, label: 'Security', desc: 'Unauthorized door openings destroy pressure differentials and introduce dust. Access control audit logs correlate with thermal anomalies.' },
                      { icon: DataBase, label: 'Fire Suppression', desc: 'Gas discharge creates a temporary thermal shock. Cooling must recover within 90 seconds to prevent secondary damage.' },
                    ].map((item) => (
                      <div key={item.label} className="p-5 bg-white border border-[var(--cds-border-subtle)] flex items-start gap-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                        <div className="w-10 h-10 bg-[#f97316]/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-[#f97316]" />
                        </div>
                        <div>
                          <p className="carbon-heading-02 text-[var(--cds-text-primary)] mb-1">{item.label}</p>
                          <p className="carbon-body-01 text-[var(--cds-text-secondary)]">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-5 border-l-4 border-[#f97316] bg-[#fff8e1]">
                    <p className="carbon-body-01 text-[var(--cds-text-primary)]"><strong>Our approach:</strong> Every cooling engagement includes a dependency audit. If your power, monitoring, or physical layout is not ready, we tell you upfront and offer the services to fix it. No hidden gaps, no finger-pointing later.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════
                SECTION 8: TRUSTED BY
                ═══════════════════════════════════════════════════════════ */}
            <section id="trusted" className="bg-[var(--cds-background)] border-b border-[var(--cds-border-subtle)]">
              <div className="py-16">
                <div className="max-w-5xl mx-auto px-6 scroll-animate">
                  <div className="mb-3">
                    <div className="w-6 h-0.5 bg-[#009d9a] mb-2" />
                    <p className="carbon-label-01 text-[#161616] uppercase tracking-wider">Technology Partners</p>
                  </div>
                  <h2 className="carbon-fluid-heading-04 text-[var(--cds-text-primary)] mb-6">Built On Proven Technology</h2>
                </div>
              </div>
              <PartnerLogos />
              <div className="py-16 bg-[#f4f4f4]">
                <div className="max-w-5xl mx-auto px-6 scroll-animate">
                  <div className="mb-3">
                    <div className="w-6 h-0.5 bg-[#009d9a] mb-2" />
                    <p className="carbon-label-01 text-[#161616] uppercase tracking-wider">Trusted By</p>
                  </div>
                  <h3 className="carbon-fluid-heading-04 text-[var(--cds-text-primary)] mb-6">Organizations That Rely On Us</h3>
                </div>
              </div>
              <ClientLogos />
            </section>

            {/* ═══════════════════════════════════════════════════════════
                SECTION 9: CTA
                ═══════════════════════════════════════════════════════════ */}
            <section id="cta" className="py-16 bg-[var(--cds-background)] border-b border-[var(--cds-border-subtle)]">
              <div className="max-w-5xl mx-auto px-6 scroll-animate">
                <div className="mb-3">
                  <div className="w-6 h-0.5 bg-[#009d9a] mb-2" />
                  <p className="carbon-label-01 text-[#161616] uppercase tracking-wider">Next Step</p>
                </div>
                <h2 className="carbon-fluid-heading-04 text-[var(--cds-text-primary)] mb-6">Start With a Thermal Resilience Assessment</h2>
                <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-8">90-minute structured assessment: thermal mapping, capacity validation, dependency audit, and Pakistan-specific risk scoring. Delivered within 48 hours.</p>

                <div className="grid md:grid-cols-3 gap-4 mb-10">
                  {[
                    { step: '01', title: 'On-Site Thermal Audit', desc: 'Infrared thermal mapping, airflow analysis, cooling capacity validation, and single-point-of-failure identification.' },
                    { step: '02', title: 'Engineered Roadmap', desc: 'Tier recommendation, hardware specification, installation scope, and managed service fit. Delivered within 48 hours.' },
                    { step: '03', title: 'Mutual Agreement', desc: 'Service levels, scope, and terms defined in signed contractual agreements, if pursued.' },
                  ].map((item) => (
                    <div key={item.step} className="relative p-6 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                      <span className="absolute top-4 right-4 carbon-heading-02 text-[var(--cds-text-secondary)]">{item.step}</span>
                      <h3 className="carbon-fluid-heading-03 text-[var(--cds-text-primary)] mb-2">{item.title}</h3>
                      <p className="carbon-body-01 text-[var(--cds-text-secondary)]">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="p-8 bg-gradient-to-br from-[#0f62fe] to-[#009d9a] text-center">
                  <h3 className="carbon-fluid-heading-04 text-white mb-4">Ready to protect your thermal continuity?</h3>
                  <p className="carbon-body-01 text-white/90 mb-6">Request a Thermal Resilience Assessment. PKR 15K fee, credited toward implementation if pursued.</p>
                  <a href="mailto:contact@perception-it.com" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0f62fe] font-semibold hover:bg-[var(--cds-background)] transition-colors">
                    Request Assessment
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════
                SECTION 10: FAQ
                ═══════════════════════════════════════════════════════════ */}
            <section id="faq" className="py-16 bg-[#f4f4f4] border-b border-[var(--cds-border-subtle)]">
              <div className="max-w-5xl mx-auto px-6 scroll-animate">
                <div className="mb-3">
                  <div className="w-6 h-0.5 bg-[#009d9a] mb-2" />
                  <p className="carbon-label-01 text-[#161616] uppercase tracking-wider">Common Questions</p>
                </div>
                <h2 className="carbon-fluid-heading-04 text-[var(--cds-text-primary)] mb-8">What Buyers Ask</h2>

                <div className="space-y-0">
                  {[
                    {
                      q: 'Can you work with my existing cooling units?',
                      a: 'Yes. We assess your current infrastructure during the Thermal Resilience Assessment and recommend whether to retrofit, supplement, or replace. Many clients start with our managed service on existing equipment and upgrade hardware in Phase 2.',
                    },
                    {
                      q: 'What happens if monsoon flooding affects the condensate drain?',
                      a: 'Our monsoon-hardened installation includes elevated drain routing, overflow sensors, and automatic pump backup. The Enterprise managed service tier includes quarterly monsoon validation June–September.',
                    },
                    {
                      q: 'How long does full installation take?',
                      a: 'Standard installation: 2–3 weeks. Monsoon-hardened commissioning adds 1 week for thermal validation and failover testing. We schedule around your maintenance windows.',
                    },
                    {
                      q: 'Do I need all three tiers, or can I start with Essential?',
                      a: 'Most clients start with Professional for the first 12 months, then right-size based on actual incident data. Essential is designed for facilities with basic cooling and low density. Enterprise is for mission-critical environments with SLA-backed uptime requirements.',
                    },
                    {
                      q: 'What if I only need the Thermal Engineering analysis, not managed services?',
                      a: 'Thermal Engineering is available as a standalone engagement. Choose Quick-Look (48hr), CFD Simulation (5–7 days), or Full Design Package (2–3 weeks). There is no obligation to purchase hardware or managed services afterward.',
                    },
                    {
                      q: 'How does the 4-hour response SLA work in practice?',
                      a: 'Our NOC monitors your cooling telemetry 24/7. On alert, a pre-staged engineer is dispatched from the nearest hub (Karachi, Lahore, or Islamabad). Spare parts are held at your site or the nearest depot. Response clock starts on alert acknowledgement, not arrival.',
                    },
                  ].map((faq, idx) => (
                    <div key={idx} className="border-b border-[var(--cds-border-subtle)]">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between py-4 text-left hover:bg-white/50 transition-colors px-2"
                      >
                        <span className="carbon-heading-02 text-[var(--cds-text-primary)] pr-4">{faq.q}</span>
                        <span className={`text-[#0f62fe] text-xl font-light flex-shrink-0 transition-transform duration-200 ${openFaq === idx ? 'rotate-45' : ''}`}>+</span>
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-96 pb-4' : 'max-h-0'}`}>
                        <p className="carbon-body-01 text-[var(--cds-text-secondary)] px-2">{faq.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════
                SECTION 11: LEGAL
                ═══════════════════════════════════════════════════════════ */}
            <section id="legal" className="py-8 bg-[#f4f4f4] border-t border-[var(--cds-border-subtle)]">
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

export default CoolingAirflowRestructured;
