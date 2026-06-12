import { useEffect, useState, lazy, Suspense } from 'react';
import '../../styles/carbon-typography.css';
import Footer from '../../sections/Footer';
import Navigation from '../../components/Navigation';
const HeroGradientPlanes = lazy(() => import('../../components/HeroGradientPlanes'));
import ArrowRight from '@carbon/icons-react/es/ArrowRight';
import CheckmarkFilled from '@carbon/icons-react/es/CheckmarkFilled';
import Security from '@carbon/icons-react/es/Security';
const Shield = Security;
import Trophy from '@carbon/icons-react/es/Trophy';
const Award = Trophy;
import Growth from '@carbon/icons-react/es/Growth';
const TrendingUp = Growth;
import Building from '@carbon/icons-react/es/Building';
import Lightning from '@carbon/icons-react/es/Lightning';
import RainDrop from '@carbon/icons-react/es/RainDrop';
import TemperatureHot from '@carbon/icons-react/es/TemperatureHot';
import Meter from '@carbon/icons-react/es/Meter';
import Tools from '@carbon/icons-react/es/Tools';
import Certificate from '@carbon/icons-react/es/Certificate';
import Settings from '@carbon/icons-react/es/Settings';
import Dashboard from '@carbon/icons-react/es/Dashboard';
import ChevronRight from '@carbon/icons-react/es/ChevronRight';
import DataBase from '@carbon/icons-react/es/DataBase';
import ChevronDown from '@carbon/icons-react/es/ChevronDown';
import ChevronUp from '@carbon/icons-react/es/ChevronUp';
import Book from '@carbon/icons-react/es/Book';
import WarningAlt from '@carbon/icons-react/es/WarningAlt';

const SECTIONS = ['overview', 'capabilities', 'services', 'tiers', 'dependency', 'engineering', 'calculator', 'faq', 'audit'] as const;
const sectionLabels: Record<string, string> = {
  overview: 'Overview',
  capabilities: 'Capabilities',
  services: 'Service Layers',
  tiers: 'Tiers',
  dependency: 'Server SLA Dependency',
  engineering: 'Pakistan Engineering',
  calculator: 'Calculator',
  faq: 'FAQ',
  audit: 'Audit',
};

const Datacenter2 = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // Scroll spy
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

      {/* Under Construction Banner */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-3 flex items-center gap-3">
          <WarningAlt className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <p className="carbon-label-02 text-amber-700">
            <strong className="font-semibold">Under Construction:</strong> This page is being rebuilt. Content may be incomplete or change without notice.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section id="overview" className="relative pt-40 pb-20 bg-[#0a1628] overflow-hidden">
        <Suspense fallback={<div className="h-[500px] bg-slate-900" />}>
          <HeroGradientPlanes />
        </Suspense>
        <div className="relative z-10 cds--css-grid" style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
          <div className="cds--col-span-16 lg:cds--col-span-14 lg:cds--col-start-2">
            {/* Breadcrumb */}
            <nav className="relative z-10 flex items-center gap-2 text-xs mb-8" aria-label="Breadcrumb">
              <a href="/" className="text-[#0f62fe] hover:underline">Home</a>
              <ChevronRight className="w-3 h-3 text-gray-400" />
              <a href="/services" className="text-[#0f62fe] hover:underline">Services</a>
              <ChevronRight className="w-3 h-3 text-gray-400" />
              <span className="text-[#0f62fe] hover:underline cursor-pointer">Infrastructure</span>
              <ChevronRight className="w-3 h-3 text-gray-400" />
              <span className="px-2 py-0.5 border border-[#a8a8a8] text-[#a8a8a8] rounded-full">Data Centre Continuity</span>
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

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left Column */}
              <div>
                <p className="carbon-label-01 text-[#c6c6c6] uppercase mb-4">Data Centre Services</p>
                <h1 className="carbon-fluid-heading-04 text-white mb-6">Your server uptime guarantees are only as strong as your facility</h1>
                <p className="carbon-heading-02 text-[#c6c6c6] mb-6">We engineer power, cooling, and physical infrastructure for Pakistan&apos;s monsoons, dust, and grid instability.</p>
                <p className="carbon-body-02 text-gray-300 mb-8">Five recognised capabilities-Cooling, Power, Energy, Monitoring, and Physical Infrastructure-engineered for Pakistan&apos;s reality. Engage via Consultancy, Build, Cooling design, or Custom quote. SLA-backed continuity available for revenue-critical systems.</p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:info@perception-it.com"
                    className="cds--btn cds--btn--primary bg-[#0f62fe] hover:bg-[#0353e9] inline-flex items-center"
                  >
                    Request Continuity Assessment
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <button
                    onClick={() => scrollToSection('tiers')}
                    className="cds--btn cds--btn--tertiary"
                    style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white', borderWidth: '1px' }}
                  >
                    View Service Tiers
                  </button>
                </div>
              </div>

              {/* Right Column - Feature Bullets */}
              <div className="space-y-3">
                <div className="flex items-start gap-4 p-4 border-l-2 border-[#0f62fe] bg-white/5">
                  <div className="w-10 h-10 bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">&#9889;</span>
                  </div>
                  <div>
                    <h3 className="carbon-heading-01 text-white mb-1">4-hour monsoon response target*</h3>
                    <p className="carbon-label-01 text-gray-400">Jun-Sept standby engineers</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 border-l-2 border-[#0f62fe] bg-white/5">
                  <div className="w-10 h-10 bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">&#127783;</span>
                  </div>
                  <div>
                    <h3 className="carbon-heading-01 text-white mb-1">Quarterly room integrity revalidation&dagger;</h3>
                    <p className="carbon-label-01 text-gray-400">vs. industry annual</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 border-l-2 border-[#0f62fe] bg-white/5">
                  <div className="w-10 h-10 bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">&#128737;</span>
                  </div>
                  <div>
                    <h3 className="carbon-heading-01 text-white mb-1">Designed to reduce facility-layer failure risk&dagger;</h3>
                    <p className="carbon-label-01 text-gray-400">Quarterly validation protocols vs. annual baseline</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 border-l-2 border-[#0f62fe] bg-white/5">
                  <div className="w-10 h-10 bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">&#128279;</span>
                  </div>
                  <div>
                    <h3 className="carbon-heading-01 text-white mb-1">Required to maintain compute-layer uptime guarantees&ddagger;</h3>
                    <p className="carbon-label-01 text-gray-400">Cooling/power validation required</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-8 carbon-helper-text-01 text-gray-400">
              *Subject to signed SLA, site assessment, and force majeure exclusions. &dagger;Based on quarterly validation protocols vs. industry annual baseline. &ddagger;Cooling/power validation required to maintain associated uptime SLAs.
            </p>
          </div>
        </div>
      {/* Stack Layer Bar | Data Centre: steel-mid */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, #cbd5e1 0%, #64748b 100%)' }} />
      </section>

      {/* Trust Bar */}
      <section className="bg-[var(--cds-background)] border-y border-[var(--cds-border-subtle)]">
        <div className="max-w-7xl mx-auto py-6 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Shield, headline: '89% Client Retention*', subtext: '*Pilot data, 12 clients, 18-month tracking period' },
              { icon: TrendingUp, headline: 'Outcome-Based Pricing', subtext: 'Recurring OPEX model vs. one-time hardware' },
              { icon: Award, headline: 'Huawei Enterprise Partner', subtext: 'Valid through Feb 2027 (CERT20251216000154)' },
              { icon: CheckmarkFilled, headline: '78% Tier 2 -> Tier 1 Conversion&trade;', subtext: 'Within 18 months post-hardware sale (pilot data)' }
            ].map((item) => (
              <div key={item.headline} className="cds--tile bg-[var(--cds-layer-01)] p-4 flex flex-col gap-3">
                <div className="w-10 h-10 bg-blue-100 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-[#0f62fe]" />
                </div>
                <div>
                  <p className="text-[13px] text-[var(--cds-text-primary)] font-semibold leading-tight mb-1">{item.headline}</p>
                  <p className="text-[11px] text-[var(--cds-text-secondary)]">{item.subtext}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Strip */}
      <section className="w-full bg-[var(--cds-background)] py-8 border-b border-[var(--cds-border-subtle)]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="carbon-label-01 text-[#475569] uppercase mb-3">Regulatory & Partner Credentials</p>
          <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">Trusted by Regulated Sectors</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {['SBP Circular DRD2-141 Support', 'NFPA 2001 Alignment', 'ISO 27001 Ready', 'PUE &le;1.4 Target by 2027'].map((tag) => (
              <span key={tag} className="px-3 py-1 border border-[#0f62fe] text-[#0f62fe] text-xs font-medium rounded-sm">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {['Huawei Enterprise', 'Vertiv Certified', 'APC by Schneider', 'Mitsubishi Cooling'].map((tag) => (
              <span key={tag} className="px-3 py-1 border border-[#475569] text-[#475569] text-xs font-medium rounded-sm">
                {tag}
              </span>
            ))}
          </div>
          <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)]">Compliance support does not constitute legal advice or regulatory certification. Clients remain responsible for their own compliance obligations.</p>
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
              {/* Section: Core Capabilities */}
              <section id="capabilities" className="py-12 border-b border-[var(--cds-border-subtle)]">
                <div className="max-w-5xl mx-auto px-6">
                  <p className="carbon-label-01 text-[#0f62fe] uppercase mb-3">Capabilities</p>
                  <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">Five recognised disciplines. One continuity loop.</h2>
                  <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-8">Cooling, power, energy, monitoring, and physical infrastructure-engineered for Pakistan&apos;s monsoons, dust, and load-shedding.</p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { icon: TemperatureHot, title: 'Cooling', tag: 'Managed Services / Build', desc: 'Thermal integrity foundation; prevents 31% of server downtime' },
                      { icon: Lightning, title: 'Power', tag: 'Managed Services / Build', desc: 'Load-shedding hardened; validates UPS/generator/ATS failover' },
                      { icon: Meter, title: 'Energy', tag: 'Consultation / Managed Services', desc: 'Continuity multiplier; funds resilience via PUE/tariff optimisation' },
                      { icon: Dashboard, title: 'Monitoring', tag: 'Managed Services', desc: 'Proactive prevention; auto-triggers failover, <60-sec flood alerts' },
                      { icon: Building, title: 'Racks / Physical', tag: 'Build / Hardware', desc: 'Dust exclusion, IP54 validation, airflow integrity; protects ServerLife Extend™' },
                      { icon: Settings, title: 'Bespoke Infra', tag: 'Custom quote', desc: 'Non-standard layouts, legacy integration, or specialist vendor requirements' }
                    ].map((card) => (
                      <div key={card.title} className="cds--tile bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] p-5">
                        <div className="w-10 h-10 bg-blue-100 flex items-center justify-center mb-3">
                          <card.icon className="w-5 h-5 text-[#0f62fe]" />
                        </div>
                        <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-1">{card.title}</h3>
                        <p className="carbon-label-01 text-[#0f62fe] uppercase mb-2">{card.tag}</p>
                        <p className="carbon-body-01 text-[var(--cds-text-secondary)]">{card.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section: Service Layers */}
              <section id="services" className="py-12 border-b border-[var(--cds-border-subtle)]">
                <div className="max-w-5xl mx-auto px-6">
                  <p className="carbon-label-01 text-[#0f62fe] uppercase mb-3">Service Layers</p>
                  <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">Consultancy. Build. Cooling. Custom.</h2>
                  <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-8">Four ways to engage. Choose the entry point that matches your priority.</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Consultancy */}
                    <div className="p-6 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] flex flex-col">
                      <div className="w-10 h-10 bg-blue-100 flex items-center justify-center mb-3">
                        <Book className="w-5 h-5 text-[#0f62fe]" />
                      </div>
                      <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">Consultancy</h3>
                      <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-4">Assessment, risk scoring, SBP compliance gap review, and next-step roadmap.</p>
                      <ul className="space-y-2 mb-4 flex-1">
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                          <CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />
                          Business Impact Analysis
                        </li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                          <CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />
                          3-year continuity roadmap
                        </li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                          <CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />
                          PKR/day exposure model
                        </li>
                      </ul>
                      <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)] mb-4">PKR 15K assessment (credited against Tier 1) | PKR 0 for Tier 2 hardware clients</p>
                      <button className="w-full cds--btn cds--btn--primary bg-[#0f62fe]">Request Assessment</button>
                    </div>

                    {/* Build */}
                    <div className="p-6 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] flex flex-col">
                      <div className="w-10 h-10 bg-blue-100 flex items-center justify-center mb-3">
                        <Tools className="w-5 h-5 text-[#0f62fe]" />
                      </div>
                      <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">Build</h3>
                      <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-4">Flooring, racks, physical planning, and engineered infrastructure deployment.</p>
                      <ul className="space-y-2 mb-4 flex-1">
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                          <CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />
                          Floor loading & levelling
                        </li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                          <CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />
                          Rack layout & cable management
                        </li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                          <CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />
                          Physical security integration
                        </li>
                      </ul>
                      <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)] mb-4">PKR 320K+/month recurring (validation) OR PKR 2.8M-8.5M project-based | PKR 280K-1.2M one-time</p>
                      <button className="w-full cds--btn cds--btn--secondary">Request Build Consultation</button>
                    </div>

                    {/* Cooling */}
                    <div className="p-6 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] flex flex-col">
                      <div className="w-10 h-10 bg-blue-100 flex items-center justify-center mb-3">
                        <TemperatureHot className="w-5 h-5 text-[#0f62fe]" />
                      </div>
                      <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">Cooling</h3>
                      <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-4">Precision cooling, in-row units, and monsoon-hardened thermal design.</p>
                      <ul className="space-y-2 mb-4 flex-1">
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                          <CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />
                          Precision AC sizing
                        </li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                          <CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />
                          In-row / in-rack cooling
                        </li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                          <CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />
                          Humidity-compensated setpoints
                        </li>
                      </ul>
                      <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)] mb-4">Custom quote based on kW load and room layout</p>
                      <button className="w-full cds--btn cds--btn--tertiary">Discuss Cooling Design</button>
                    </div>

                    {/* Custom Quote */}
                    <div className="p-6 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] flex flex-col">
                      <div className="w-10 h-10 bg-blue-100 flex items-center justify-center mb-3">
                        <Settings className="w-5 h-5 text-[#0f62fe]" />
                      </div>
                      <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">Custom Quote</h3>
                      <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-4">Bespoke infrastructure for non-standard requirements or legacy integration.</p>
                      <ul className="space-y-2 mb-4 flex-1">
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                          <CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />
                          Specialist vendor integration
                        </li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                          <CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />
                          Custom cabinet / fabrication
                        </li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                          <CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />
                          Hybrid on-prem / cloud physical layer
                        </li>
                      </ul>
                      <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)] mb-4">Scope-dependent pricing</p>
                      <button className="w-full cds--btn cds--btn--tertiary">Request Custom Quote</button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section: Tiers */}
              <section id="tiers" className="py-12 border-b border-[var(--cds-border-subtle)]">
                <div className="max-w-5xl mx-auto px-6">
                  <p className="carbon-label-01 text-[#24a148] uppercase mb-3">Service Tiers</p>
                  <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">Tier 1 vs Tier 2</h2>
                  <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-8">Tier 1 is SLA-backed continuity across all service layers. Tier 2 is hardware and basic installation without continuity guarantees. Tier 1 required to maintain ServerLife Extend&trade;, ModServe&trade;, and ServerSure&trade; SLAs.</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Tier 1 */}
                    <div className="p-6 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] flex flex-col">
                      <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">Tier 1 - SLA-Backed Continuity</h3>
                      <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-4">Quarterly validation, 24/7 NOC monitoring, and Pakistan-hardened engineering protocols.</p>
                      <ul className="space-y-2 mb-4 flex-1">
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                          <CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />
                          Target 99.99% uptime*
                        </li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                          <CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />
                          4hr emergency response target*
                        </li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                          <CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />
                          Quarterly validation protocols
                        </li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                          <CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />
                          Monsoon/dust-hardened engineering
                        </li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                          <CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />
                          SBP-aligned documentation
                        </li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                          <CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />
                          24/7 NOC + auto-failover monitoring
                        </li>
                      </ul>
                      <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)] mb-4">PKR 42K-480K/mo recurring (managed) | PKR 320K+/mo validation | PKR 2.8M-8.5M project (build)</p>
                      <button className="w-full cds--btn cds--btn--primary bg-[#0f62fe]">Discuss Tier 1 Scope</button>
                      <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)] mt-3">*Subject to signed SLA, site assessment, and force majeure exclusions.</p>
                    </div>

                    {/* Tier 2 */}
                    <div className="p-6 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] flex flex-col">
                      <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">Tier 2 - Basic Hardware & Install</h3>
                      <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-4">Manufacturer-certified hardware with basic mechanical installation. Suitable for non-critical environments.</p>
                      <ul className="space-y-2 mb-4 flex-1">
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                          <CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />
                          Manufacturer-certified hardware
                        </li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                          <CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />
                          Basic mechanical installation
                        </li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-secondary)]">
                          <WarningAlt className="w-4 h-4 text-[#a8a8a8] mt-0.5 flex-shrink-0" />
                          Reactive support only
                        </li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-secondary)]">
                          <WarningAlt className="w-4 h-4 text-[#a8a8a8] mt-0.5 flex-shrink-0" />
                          No SLA / no proactive validation
                        </li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-secondary)]">
                          <WarningAlt className="w-4 h-4 text-[#a8a8a8] mt-0.5 flex-shrink-0" />
                          No 24/7 monitoring
                        </li>
                      </ul>
                      <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)] mb-4">PKR 150K-450K one-time | PKR 8K-22K/hr reactive</p>
                      <button className="w-full cds--btn cds--btn--tertiary">Request Tier 2 Quote</button>
                    </div>
                  </div>

                  <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)] mt-6">78% of Tier 2 clients add Tier 1 validation within 18 months after experiencing preventable outages. <a href="#faq" className="text-[#0f62fe] hover:underline">Learn why -&gt;</a></p>
                </div>
              </section>

              {/* Section: Server SLA Dependency */}
              <section id="dependency" className="py-12 border-b border-[var(--cds-border-subtle)]">
                <div className="max-w-5xl mx-auto px-6">
                  <p className="carbon-label-01 text-[#24a148] uppercase mb-3">Server Continuity Dependency</p>
                  <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">ServerLife Extend&trade;, ModServe&trade;, and ServerSure&trade; Require Validated Facility Continuity</h2>
                  <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-8">31% of ServerLife Extend&trade; SLA breaches originate in facility-layer failures (cooling/power), not server hardware. Without validated power, cooling, and physical infrastructure, your server SLA is exposed.</p>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b-2 border-[var(--cds-border-subtle)]">
                          <th className="text-left py-3 px-4 carbon-label-01 text-[var(--cds-text-primary)]">Service</th>
                          <th className="text-left py-3 px-4 carbon-label-01 text-[var(--cds-text-primary)]">What It Promises</th>
                          <th className="text-left py-3 px-4 carbon-label-01 text-[var(--cds-text-primary)]">What Breaks It</th>
                          <th className="text-left py-3 px-4 carbon-label-01 text-[var(--cds-text-primary)]">Business Risk if Unaddressed</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-[var(--cds-border-subtle)]">
                          <td className="py-3 px-4 text-[var(--cds-text-primary)]">ServerLife Extend&trade;</td>
                          <td className="py-3 px-4 text-[var(--cds-text-secondary)]">99.95% uptime SLA for aging hardware</td>
                          <td className="py-3 px-4 text-[var(--cds-text-secondary)]">Cooling failure -&gt; thermal shutdown</td>
                          <td className="py-3 px-4 text-[var(--cds-text-secondary)]">SLA breach despite perfect server health</td>
                        </tr>
                        <tr className="border-b border-[var(--cds-border-subtle)]">
                          <td className="py-3 px-4 text-[var(--cds-text-primary)]">ModServe&trade;</td>
                          <td className="py-3 px-4 text-[var(--cds-text-secondary)]">Zero-downtime migration</td>
                          <td className="py-3 px-4 text-[var(--cds-text-secondary)]">UPS failure during cutover</td>
                          <td className="py-3 px-4 text-[var(--cds-text-secondary)]">Migration rupture -&gt; data loss</td>
                        </tr>
                        <tr className="border-b border-[var(--cds-border-subtle)]">
                          <td className="py-3 px-4 text-[var(--cds-text-primary)]">ServerSure&trade;</td>
                          <td className="py-3 px-4 text-[var(--cds-text-secondary)]">9-5 remote monitoring</td>
                          <td className="py-3 px-4 text-[var(--cds-text-secondary)]">Blind to facility-level thermal/power anomalies</td>
                          <td className="py-3 px-4 text-[var(--cds-text-secondary)]">&quot;Server crashed&quot; root cause = cooling failure (not hardware)</td>
                        </tr>
                        <tr className="border-b border-[var(--cds-border-subtle)]">
                          <td className="py-3 px-4 text-[var(--cds-text-primary)]">ServerAudit&trade;</td>
                          <td className="py-3 px-4 text-[var(--cds-text-secondary)]">&quot;Extend 5 more years&quot; recommendation</td>
                          <td className="py-3 px-4 text-[var(--cds-text-secondary)]">Invalid if facility power/cooling is end-of-life</td>
                          <td className="py-3 px-4 text-[var(--cds-text-secondary)]">False confidence -&gt; unplanned outage</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Banner */}
                  <div className="p-6 bg-[#0f62fe] text-white text-center mb-8">
                    <p className="carbon-body-01 text-white/90">&quot;Server continuity cannot exist without facility continuity. Your current suite owns half the risk chain. Data Centre Services complete the accountability loop.&quot;</p>
                  </div>

                  {/* CTA Block */}
                  <div className="p-6 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] mb-8">
                    <h3 className="carbon-fluid-heading-03 text-[var(--cds-text-primary)] mb-2">Full-Stack Continuity: Server + Facility</h3>
                    <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-4">ServerLife Extend&trade; + Tier 1 Data Centre Services = 99.95% uptime at 22% lower OPEX*</p>
                    <button className="cds--btn cds--btn--primary bg-[#0f62fe]">Request Full-Stack Assessment</button>
                    <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)] mt-3">*Based on pilot client data. Actual savings depend on facility condition and operational practices.</p>
                  </div>

                  {/* Visual break placeholder */}
                  <div className="h-40 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] flex items-center justify-center p-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-4 mb-3">
                        <Meter className="w-8 h-8 text-[#0f62fe]" />
                        <ArrowRight className="w-5 h-5 text-[var(--cds-text-secondary)]" />
                        <Lightning className="w-8 h-8 text-[#0f62fe]" />
                        <ArrowRight className="w-5 h-5 text-[var(--cds-text-secondary)]" />
                        <TemperatureHot className="w-8 h-8 text-[#0f62fe]" />
                        <ArrowRight className="w-5 h-5 text-[var(--cds-text-secondary)]" />
                        <DataBase className="w-8 h-8 text-[#0f62fe]" />
                      </div>
                      <p className="carbon-label-01 text-[var(--cds-text-primary)] font-semibold">Utility meter -&gt; UPS -&gt; cooling -&gt; rack -&gt; server BIOS</p>
                      <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)]">Diagram: Integration touchpoints highlighted</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section: Pakistan Engineering */}
              <section id="engineering" className="py-12 border-b border-[var(--cds-border-subtle)]">
                <div className="max-w-5xl mx-auto px-6">
                  <p className="carbon-label-01 text-[#475569] uppercase mb-3">Local Engineering</p>
                  <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">Global Templates Fail Here. We Engineer for Monsoons, Dust & Load-Shedding.</h2>
                  <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-8">Standard data centre designs assume &quot;textbook conditions.&quot; We design for Lahore&apos;s 45&deg;C summers, Karachi&apos;s dust, and 8-12hr daily load-shedding first-efficiency second.</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {[
                      { icon: RainDrop, title: 'Monsoon Resilience', items: ['Quarterly room integrity revalidation (Jun-Sept) vs. industry annual', 'Humidity-compensated cooling setpoints (40-60% RH target)', 'Designed to reduce monsoon-related failure risk&trade;'] },
                      { icon: Shield, title: 'Dust Exclusion', items: ['IP54 cabinets + quarterly gasket integrity validation', 'Monthly filter validation for Lahore/Karachi industrial zones', 'Supports ServerLife Extend&trade; thermal requirements&trade;'] },
                      { icon: Lightning, title: 'Load-Shedding Continuity', items: ['Generator/UPS failover validation with 72hr runtime assurance', 'Generator powers cooling plant (not just IT load)', 'Designed to prevent PKR 2.1M/hour downtime exposure'] },
                      { icon: Certificate, title: 'SBP/SECP Alignment', items: ['Audit-ready validation reports aligned to Circular DRD2-141', 'Quarterly fire suppression testing support', 'PUE &le;1.4 target by 2027 for Tier-3 banking clients'] }
                    ].map((card) => (
                      <div key={card.title} className="p-6 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)]">
                        <div className="w-10 h-10 bg-[#0f62fe]/10 flex items-center justify-center mb-4">
                          <card.icon className="w-5 h-5 text-[#0f62fe]" />
                        </div>
                        <h3 className="carbon-fluid-heading-03 text-[var(--cds-text-primary)] mb-3">{card.title}</h3>
                        <ul className="space-y-2 mb-3">
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

                  <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)] mb-8">
                    &trade;Based on pilot client data comparing quarterly vs. annual validation frequency. Actual outcomes depend on facility condition and environmental factors. &trade;When facility-layer services are contracted alongside ServerLife Extend&trade;. Individual results vary.
                  </p>

                  {/* Visual break placeholder */}
                  <div className="h-48 bg-gradient-to-r from-[var(--cds-background)] to-[#e5e5e5] border border-[var(--cds-border-subtle)] flex items-center justify-center p-6">
                    <div className="text-center">
                      <TemperatureHot className="w-12 h-12 text-[#475569] mx-auto mb-3" />
                      <p className="carbon-label-01 text-[var(--cds-text-primary)] font-semibold mb-1">Thermal Imaging Visual</p>
                      <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)]">Before/after thermal imaging showing hotspot elimination post-engineered validation vs. standard install</p>
                    </div>
                  </div>
                </div>
              </section>
              {/* Section: Risk Calculator */}
              <section id="calculator" className="py-12 border-b border-[var(--cds-border-subtle)] bg-[var(--cds-background)]">
                <div className="max-w-5xl mx-auto px-6">
                  <p className="carbon-label-01 text-[#475569] uppercase mb-3">Risk Awareness</p>
                  <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">What&apos;s Your Facility&apos;s Risk Profile?</h2>
                  <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-8">Illustrative assessment only. Formal risk analysis requires on-site assessment and is subject to contractual terms.</p>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div>
                      <label className="block carbon-label-01 text-[var(--cds-text-primary)] mb-2">Estimated downtime cost/hour</label>
                      <select className="w-full h-12 px-4 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] text-[var(--cds-text-primary)]">
                        <option>PKR 50K</option>
                        <option>PKR 250K</option>
                        <option>PKR 500K</option>
                        <option>PKR 2.1M+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block carbon-label-01 text-[var(--cds-text-primary)] mb-2">Annual unplanned outage hours</label>
                      <input type="number" defaultValue={8} className="w-full h-12 px-4 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] text-[var(--cds-text-primary)]" />
                      <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)] mt-1">Industry average for non-SLA facilities in Pakistan: 8-12 hours/year</p>
                    </div>
                    <div>
                      <label className="block carbon-label-01 text-[var(--cds-text-primary)] mb-2">Current facility age</label>
                      <select className="w-full h-12 px-4 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] text-[var(--cds-text-primary)]">
                        <option>&lt;2 years</option>
                        <option>2-7 years</option>
                        <option>&gt;7 years</option>
                      </select>
                    </div>
                  </div>

                  {/* Output */}
                  <div className="p-6 border-l-4 border-[#f97316] bg-[#fff8e1]">
                    <h3 className="carbon-fluid-heading-03 text-[var(--cds-text-primary)] mb-3">Illustrative Risk Exposure Estimate</h3>
                    <p className="carbon-body-01 text-[var(--cds-text-primary)] mb-4">Based on your inputs, facilities with similar profiles in Pakistan have experienced annual downtime exposure ranging from PKR 400K to PKR 16.8M. Actual exposure depends on facility condition, environmental factors, and operational practices.</p>
                    <p className="carbon-body-01 text-[var(--cds-text-primary)] mb-4">Request a formal Continuity Assessment (PKR 15K fee, potentially credited toward future services subject to mutual agreement) to receive a site-specific analysis.</p>
                    <button className="cds--btn cds--btn--primary bg-[#f97316] hover:bg-[#ea580c] text-white">Request Formal Assessment</button>
                    <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)] mt-4">*This tool provides illustrative estimates only. It does not constitute a prediction of actual losses, a risk assessment, or an offer of services. Formal analysis requires on-site assessment and is subject to contractual terms.</p>
                  </div>
                </div>
              </section>

              {/* Section: FAQ */}
              <section id="faq" className="py-12 border-b border-[var(--cds-border-subtle)]">
                <div className="max-w-5xl mx-auto px-6">
                  <p className="carbon-label-01 text-[#0f62fe] uppercase mb-3">Clarifications</p>
                  <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">Everything You Need to Know About Data Centre Continuity Services</h2>
                  <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-8">Answers to common questions about service layers, tiers, and Pakistan-specific engineering.</p>

                  <div className="space-y-3">
                    <details className="group bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)]">
                      <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                        <span className="carbon-heading-02 text-[var(--cds-text-primary)] pr-4">What&apos;s the difference between Tier 1 and Tier 2?</span>
                        <ChevronDown className="w-5 h-5 text-[var(--cds-text-secondary)] flex-shrink-0 group-open:hidden" />
                        <ChevronUp className="w-5 h-5 text-[var(--cds-text-secondary)] flex-shrink-0 hidden group-open:block" />
                      </summary>
                      <div className="px-5 pb-5 border-t border-[var(--cds-border-subtle)]">
                        <div className="carbon-body-01 text-[var(--cds-text-secondary)] pt-4">
                          <p className="mb-2"><strong>Tier 1</strong> is SLA-backed continuity with quarterly validation, 24/7 NOC monitoring, 4hr emergency response target, monsoon/dust-hardened engineering, and SBP-aligned documentation. Pricing: PKR 42K-480K/mo recurring (managed) | PKR 320K+/mo validation | PKR 2.8M-8.5M project (build).</p>
                          <p className="mb-2"><strong>Tier 2</strong> is manufacturer-certified hardware with basic mechanical installation, reactive support only, no SLA, no proactive validation, and no 24/7 monitoring. Pricing: PKR 150K-450K one-time | PKR 8K-22K/hr reactive.</p>
                          <p>Tier 1 is required to maintain ServerLife Extend&trade;, ModServe&trade;, and ServerSure&trade; SLAs. 78% of Tier 2 clients add Tier 1 validation within 18 months after experiencing preventable outages.</p>
                        </div>
                      </div>
                    </details>

                    <details className="group bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)]">
                      <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                        <span className="carbon-heading-02 text-[var(--cds-text-primary)] pr-4">Do I need Data Centre Services if I already have ServerLife Extend&trade;?</span>
                        <ChevronDown className="w-5 h-5 text-[var(--cds-text-secondary)] flex-shrink-0 group-open:hidden" />
                        <ChevronUp className="w-5 h-5 text-[var(--cds-text-secondary)] flex-shrink-0 hidden group-open:block" />
                      </summary>
                      <div className="px-5 pb-5 border-t border-[var(--cds-border-subtle)]">
                        <div className="carbon-body-01 text-[var(--cds-text-secondary)] pt-4">
                          <p className="mb-2">ServerLife Extend&trade; covers your servers, not your facility. 31% of ServerLife Extend&trade; SLA breaches originate in facility-layer failures (cooling/power), not server hardware.</p>
                          <p className="mb-2">Without validated power, cooling, and physical infrastructure, your server SLA is exposed. Data Centre Services complete the accountability loop.</p>
                          <p>Bundling ServerLife Extend&trade; + Tier 1 Data Centre Services = 99.95% uptime at 22% lower OPEX* (*Based on pilot client data. Actual savings depend on facility condition and operational practices).</p>
                        </div>
                      </div>
                    </details>

                    <details className="group bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)]">
                      <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                        <span className="carbon-heading-02 text-[var(--cds-text-primary)] pr-4">Is this SBP/SECP compliant?</span>
                        <ChevronDown className="w-5 h-5 text-[var(--cds-text-secondary)] flex-shrink-0 group-open:hidden" />
                        <ChevronUp className="w-5 h-5 text-[var(--cds-text-secondary)] flex-shrink-0 hidden group-open:block" />
                      </summary>
                      <div className="px-5 pb-5 border-t border-[var(--cds-border-subtle)]">
                        <div className="carbon-body-01 text-[var(--cds-text-secondary)] pt-4">
                          <p className="mb-2">Tier 1 includes support for SBP Circular DRD2-141 alignment, NFPA 2001 validation support, quarterly fire suppression testing support, and audit-ready documentation.</p>
                          <p>Compliance support does not constitute legal advice or regulatory certification. Clients remain responsible for their own compliance obligations.</p>
                        </div>
                      </div>
                    </details>

                    <details className="group bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)]">
                      <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                        <span className="carbon-heading-02 text-[var(--cds-text-primary)] pr-4">Can I start with hardware and add managed services later?</span>
                        <ChevronDown className="w-5 h-5 text-[var(--cds-text-secondary)] flex-shrink-0 group-open:hidden" />
                        <ChevronUp className="w-5 h-5 text-[var(--cds-text-secondary)] flex-shrink-0 hidden group-open:block" />
                      </summary>
                      <div className="px-5 pb-5 border-t border-[var(--cds-border-subtle)]">
                        <div className="carbon-body-01 text-[var(--cds-text-secondary)] pt-4">
                          <p className="mb-2">Yes. Conversion pathway:</p>
                          <ol className="list-decimal list-inside space-y-1 mb-2">
                            <li>Tier 2 hardware purchase</li>
                            <li>Risk exposure assessment via our NOC or near-miss experience</li>
                            <li>Continuity Assessment (PKR 15K, potentially credited)</li>
                            <li>3-year continuity roadmap with risk model</li>
                            <li>Tier 1 contract across Consultancy, Build, Cooling, or Monitoring if mutually agreed</li>
                          </ol>
                          <p>Timeline: 90 days average from Tier 2 sale to Tier 1 close (pilot data).</p>
                        </div>
                      </div>
                    </details>
                  </div>
                </div>
              </section>

              {/* Section: Final CTA */}
              <section id="audit" className="py-12 border-b border-[var(--cds-border-subtle)] bg-[var(--cds-background)]">
                <div className="max-w-5xl mx-auto px-6">
                  <p className="carbon-label-01 text-[#0f62fe] uppercase mb-3">Next Step</p>
                  <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">Discover Your Continuity Gaps in 90 Minutes</h2>
                  <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-8">A structured assessment to identify risk exposure and alignment opportunities-not a sales pitch.</p>

                  {/* 3-step process cards */}
                  <div className="grid md:grid-cols-3 gap-4 mb-10">
                    {[
                      { step: '01', title: 'On-Site Assessment', desc: 'Criticality scoring, asset inventory, environmental scan, load analysis, compliance gap check' },
                      { step: '02', title: 'Risk-Calibrated Roadmap', desc: 'Tier recommendation, illustrative risk model, 3-year continuity projection' },
                      { step: '03', title: 'Mutual Agreement', desc: 'Service levels, scope, and terms defined exclusively in signed contractual agreements' }
                    ].map((item) => (
                      <div key={item.step} className="relative p-6 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)]">
                        <span className="absolute top-4 right-4 carbon-heading-02 text-[var(--cds-text-secondary)]">{item.step}</span>
                        <h3 className="carbon-fluid-heading-03 text-[var(--cds-text-primary)] mb-2">{item.title}</h3>
                        <p className="carbon-body-01 text-[var(--cds-text-secondary)]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Pricing Reference */}
                  <div className="grid md:grid-cols-4 gap-4 mb-10">
                    {[
                      { name: 'Consultancy', price1: 'PKR 15K', desc: 'Assessment (credited against Tier 1)' },
                      { name: 'Build', price1: 'PKR 2.8M-8.5M', price2: 'PKR 280K-1.2M', desc: 'Project vs basic install' },
                      { name: 'Cooling', price1: 'Custom quote', desc: 'Based on kW load and room layout' },
                      { name: 'Custom / Bespoke', price1: 'Custom quote', desc: 'Scope-dependent pricing' }
                    ].map((tier) => (
                      <div key={tier.name} className="p-5 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)]">
                        <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-1">{tier.name}</h3>
                        <div className="flex flex-col mb-2">
                          <span className="text-xl font-bold text-[var(--cds-text-primary)]">{tier.price1}</span>
                          {tier.price2 && <span className="text-sm text-[var(--cds-text-secondary)]">{tier.price2}</span>}
                        </div>
                        <p className="carbon-body-01 text-[var(--cds-text-secondary)]">{tier.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Final CTA Banner */}
                  <div className="p-8 bg-[#0f62fe] text-center">
                    <h3 className="carbon-fluid-heading-04 text-white mb-4">Prepare for Monsoon Season with Confidence</h3>
                    <p className="carbon-body-01 text-white/90 mb-6">
                      Request a Continuity Assessment. PKR 15K fee, potentially credited toward future services subject to mutual agreement.
                    </p>
                    <a 
                      href="mailto:info@perception-it.com"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0f62fe] font-semibold hover:bg-[var(--cds-background)] transition-colors"
                    >
                      Request Assessment
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <p className="text-white/70 text-sm mt-4">
                      <a href="#" className="underline hover:text-white">Download Facility Readiness Checklist</a>
                    </p>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>

      {/* Legal Disclaimer */}
      <section className="py-8 bg-[var(--cds-background)] border-t border-[var(--cds-border-subtle)]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="carbon-label-01 text-[var(--cds-text-secondary)] uppercase tracking-wide mb-3">Important Notices</p>
          <div className="space-y-2 carbon-helper-text-01 text-[var(--cds-text-secondary)]">
            <p>Service outcomes, uptime targets, and remedies are defined exclusively in signed contractual agreements between Perception-IT and the client. Marketing materials do not constitute offers or guarantees.</p>
            <p>Risk calculations, exposure estimates, and failure reduction statistics are illustrative only, based on industry benchmarks and pilot client data. Actual results depend on facility condition, environmental factors, client cooperation, and forces beyond Perception-IT&apos;s control.</p>
            <p>&quot;Monsoon-hardened,&quot; &quot;dust-excluded,&quot; and similar terms describe engineering protocols and design intent, not absolute performance warranties.</p>
            <p>SBP/SECP/NFPA compliance support does not constitute legal advice or regulatory certification. Clients remain responsible for their own compliance obligations.</p>
            <p>ServerLife Extend&trade;, ModServe&trade;, ServerSure&trade;, and ServerAudit&trade; are trademarks of Perception-IT. Facility-layer validation required to maintain associated SLAs.</p>
            <p>Perception-IT (Private) Limited. Huawei Enterprise Partner certification valid through Feb 2027 (CERT20251216000154). All trademarks acknowledged.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Datacenter2;
