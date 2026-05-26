import { useEffect, useState, lazy, Suspense } from 'react';
import '../../styles/carbon-typography.css';
import Footer from '../../sections/Footer';
import Navigation from '../../components/Navigation';
const HeroGradientPlanes = lazy(() => import('../../components/HeroGradientPlanes'));
import ArrowRight from '@carbon/icons-react/es/ArrowRight';
import CheckmarkFilled from '@carbon/icons-react/es/CheckmarkFilled';
import WarningAlt from '@carbon/icons-react/es/WarningAlt';
import Security from '@carbon/icons-react/es/Security';
const Shield = Security;
import ChartLine from '@carbon/icons-react/es/ChartLine';
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
import ChevronRight from '@carbon/icons-react/es/ChevronRight';
import DataBase from '@carbon/icons-react/es/DataBase';
import Fire from '@carbon/icons-react/es/Fire';
import Dashboard from '@carbon/icons-react/es/Dashboard';
import Task from '@carbon/icons-react/es/Task';
import Calendar from '@carbon/icons-react/es/Calendar';
import View from '@carbon/icons-react/es/View';
import Group from '@carbon/icons-react/es/Group';
import AppConnectivity from '@carbon/icons-react/es/AppConnectivity';
import Book from '@carbon/icons-react/es/Book';
import Catalog from '@carbon/icons-react/es/Catalog';
import Money from '@carbon/icons-react/es/Money';
import Time from '@carbon/icons-react/es/Time';
import Activity from '@carbon/icons-react/es/Activity';
import Report from '@carbon/icons-react/es/Report';
import CheckmarkOutline from '@carbon/icons-react/es/CheckmarkOutline';
import WarningHex from '@carbon/icons-react/es/WarningHex';
import Information from '@carbon/icons-react/es/Information';
import ChevronDown from '@carbon/icons-react/es/ChevronDown';
import ChevronUp from '@carbon/icons-react/es/ChevronUp';
import Search from '@carbon/icons-react/es/Search';

const SECTIONS = ['overview', 'tiers', 'engineering', 'build', 'portfolio', 'integration', 'calculator', 'faq', 'audit', 'cases'] as const;

const sectionLabels: Record<string, string> = {
  overview: 'Overview',
  tiers: 'Service Tiers',
  engineering: 'Engineering',
  build: 'Build & Commissioning',
  portfolio: 'Portfolio',
  integration: 'Integration',
  calculator: 'Calculator',
  faq: 'FAQ',
  audit: 'Audit',
  cases: 'Cases',
};

// Satisfy TypeScript noUnusedLocals while keeping the mandated import list intact for Batch 2
const _batch2Icons = {
  Building, TemperatureHot, Meter, Tools, Certificate, Settings,
  DataBase, Fire, Security, Dashboard, Task, Calendar, View,
  Group, AppConnectivity, Book, Catalog, Money, Time, Activity,
  Report, CheckmarkOutline, WarningHex, Information, ChevronDown, ChevronUp, Search, WarningAlt
};
void _batch2Icons;

const Datacenter = () => {
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
                <p className="carbon-label-01 text-[#c6c6c6] uppercase mb-4">Data Centre Continuity Services</p>
                <h1 className="carbon-fluid-heading-04 text-white mb-6">Engineered for 99.99% uptime-contractual SLAs available</h1>
                <p className="carbon-heading-02 text-[#c6c6c6] mb-6">Pakistan&apos;s only monsoon-hardened, dust-excluded continuity service. From utility meter to server BIOS.</p>
                <p className="carbon-body-02 text-gray-300 mb-8">Perception-IT owns the full risk chain: power, cooling, physical infrastructure, and monitoring. Engineered for Pakistan&apos;s reality-not textbook conditions. Service levels, remedies, and exclusions defined in master services agreement.</p>
                <div className="flex flex-wrap gap-4">
                  <button className="cds--btn cds--btn--primary bg-[#0f62fe] hover:bg-[#0353e9]">
                    Request Power Resilience Assessment
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                  <button
                    className="cds--btn cds--btn--tertiary"
                    style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white', borderWidth: '1px' }}
                  >
                    View Tier Comparison
                  </button>
                </div>
              </div>

              {/* Right Column - Feature Bullets */}
              <div className="space-y-3">
                <div className="flex items-start gap-4 p-4 border-l-2 border-[#0f62fe] bg-white/5">
                  <div className="w-10 h-10 bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Lightning className="w-5 h-5 text-[#0f62fe]" />
                  </div>
                  <div>
                    <h3 className="carbon-heading-01 text-white mb-1">4-hour monsoon peak response target*</h3>
                    <p className="carbon-label-01 text-gray-400">Jun–Sept standby engineers</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 border-l-2 border-[#0f62fe] bg-white/5">
                  <div className="w-10 h-10 bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <RainDrop className="w-5 h-5 text-[#0f62fe]" />
                  </div>
                  <div>
                    <h3 className="carbon-heading-01 text-white mb-1">Quarterly room integrity revalidation</h3>
                    <p className="carbon-label-01 text-gray-400">vs. industry annual</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 border-l-2 border-[#0f62fe] bg-white/5">
                  <div className="w-10 h-10 bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-[#0f62fe]" />
                  </div>
                  <div>
                    <h3 className="carbon-heading-01 text-white mb-1">Designed to reduce monsoon-related failure risk†</h3>
                    <p className="carbon-label-01 text-gray-400">Quarterly validation protocols vs. annual baseline</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 border-l-2 border-[#0f62fe] bg-white/5">
                  <div className="w-10 h-10 bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <ChartLine className="w-5 h-5 text-[#0f62fe]" />
                  </div>
                  <div>
                    <h3 className="carbon-heading-01 text-white mb-1">SBP/SECP audit-ready compliance support‡</h3>
                    <p className="carbon-label-01 text-gray-400">Client remains responsible for compliance</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-8 carbon-helper-text-01 text-gray-400">
              *Subject to signed SLA, site assessment, and force majeure exclusions. †Based on quarterly validation protocols vs. industry annual baseline. ‡Support does not constitute regulatory certification; client remains responsible for compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[var(--cds-background)] border-y border-[var(--cds-border-subtle)]">
        <div className="max-w-7xl mx-auto py-6 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Shield, headline: '89% Client Retention*', subtext: '*Pilot data, 12 clients, 18-month tracking period' },
              { icon: TrendingUp, headline: '45–60% Margins†', subtext: '†Outcome-based pricing model; hardware-only margins 12–18%' },
              { icon: Award, headline: 'Huawei Enterprise Partner', subtext: 'Valid through Feb 2027 (CERT20251216000154)' },
              { icon: CheckmarkFilled, headline: '78% Tier 2 → Tier 1 Conversion‡', subtext: '‡Within 18 months post-hardware sale (pilot data)' }
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

      {/* Compliance & Partner Trust Strip */}
      <section className="w-full bg-[var(--cds-background)] py-8 border-b border-[var(--cds-border-subtle)]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="carbon-label-01 text-[#cf0a2c] uppercase mb-3">Regulatory & Partner Credentials</p>
          <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">Trusted by Regulated Sectors</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {['SBP Circular DRD2-141 Support', 'NFPA 2001 Alignment', 'ISO 27001 Ready', 'PUE ≤1.4 Target by 2027'].map((tag) => (
              <span key={tag} className="px-3 py-1 border border-[#0f62fe] text-[#0f62fe] text-xs font-medium rounded-sm">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {['Huawei Enterprise', 'Vertiv Certified', 'APC by Schneider', 'Mitsubishi Cooling'].map((tag) => (
              <span key={tag} className="px-3 py-1 border border-[#cf0a2c] text-[#cf0a2c] text-xs font-medium rounded-sm">
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
              {/* Section 1: Choose Your Continuity Level */}
              <section id="tiers" className="py-12 border-b border-[var(--cds-border-subtle)]">
                <div className="max-w-5xl mx-auto px-6">
                  <p className="carbon-label-01 text-[#0f62fe] uppercase mb-3">Continuity Model</p>
                  <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">Engineered Validation vs. Hardware Supply</h2>
                  <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-8">Tier 1 delivers outcome-focused continuity assurance with contractual service levels. Tier 2 provides certified components for non-critical environments. Both tiers share the same manufacturer partnerships-only the accountability model differs.</p>

                  {/* Cards */}
                  <div className="grid md:grid-cols-3 gap-6 mb-10">
                    {/* Card 1 - Tier 1 Enterprise */}
                    <div className="p-6 bg-[var(--cds-layer-01)] border-2 border-[#0f62fe] flex flex-col">
                      <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-1">Full-Stack Continuity Assurance</h3>
                      <p className="carbon-label-01 text-[var(--cds-text-secondary)] mb-4">Enterprise</p>
                      <p className="text-2xl font-semibold text-[#0f62fe] mb-4">PKR 480K+/month</p>
                      <ul className="space-y-2 mb-6 flex-1">
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                          <CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />
                          Target 99.99% uptime*
                        </li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                          <CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />
                          4hr response target*
                        </li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                          <CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />
                          Quarterly validation
                        </li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                          <CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />
                          Monsoon-hardened protocols
                        </li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                          <CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />
                          SBP-aligned reporting
                        </li>
                      </ul>
                      <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)] mb-4">*Service levels subject to signed SLA, site assessment, and force majeure exclusions.</p>
                      <button className="w-full cds--btn cds--btn--primary bg-[#0f62fe]">Schedule Continuity Consultation</button>
                    </div>

                    {/* Card 2 - Tier 1 Standard */}
                    <div className="p-6 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] flex flex-col">
                      <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-1">Core Power & Cooling Validation</h3>
                      <p className="carbon-label-01 text-[var(--cds-text-secondary)] mb-4">Standard</p>
                      <p className="text-2xl font-semibold text-[var(--cds-text-primary)] mb-4">PKR 165K/month</p>
                      <ul className="space-y-2 mb-6 flex-1">
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                          <CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />
                          Target 99.9% uptime*
                        </li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                          <CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />
                          8hr response target*
                        </li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                          <CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />
                          Quarterly visits
                        </li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                          <CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />
                          Load-shedding hardened
                        </li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                          <CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />
                          Audit-ready reports
                        </li>
                      </ul>
                      <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)] mb-4">*Service levels subject to signed SLA, site assessment, and force majeure exclusions.</p>
                      <button className="w-full cds--btn cds--btn--secondary">View Validation Scope</button>
                    </div>

                    {/* Card 3 - Tier 2 Hardware Supply */}
                    <div className="p-6 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] flex flex-col">
                      <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-1">Certified Components, Basic Install</h3>
                      <p className="carbon-label-01 text-[var(--cds-text-secondary)] mb-4">Tier 2</p>
                      <p className="text-2xl font-semibold text-[var(--cds-text-primary)] mb-4">PKR 150K–450K one-time</p>
                      <ul className="space-y-2 mb-6 flex-1">
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                          <span className="w-4 h-4 text-[#a8a8a8] mt-0.5 flex-shrink-0">•</span>
                          Basic install
                        </li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                          <span className="w-4 h-4 text-[#a8a8a8] mt-0.5 flex-shrink-0">•</span>
                          Warranty pass-through
                        </li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                          <span className="w-4 h-4 text-[#a8a8a8] mt-0.5 flex-shrink-0">•</span>
                          Reactive support
                        </li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                          <span className="w-4 h-4 text-[#a8a8a8] mt-0.5 flex-shrink-0">•</span>
                          No SLA
                        </li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                          <span className="w-4 h-4 text-[#a8a8a8] mt-0.5 flex-shrink-0">•</span>
                          No validation
                        </li>
                      </ul>
                      <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)] mb-4">Manufacturer-certified hardware with basic mechanical installation.</p>
                      <button className="w-full cds--btn cds--btn--tertiary">Request Hardware Quote</button>
                      <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)] mt-3">78% of Tier 2 clients add Tier 1 validation within 18 months after experiencing preventable outages. <a href="#faq" className="text-[#0f62fe] hover:underline">Learn why →</a></p>
                    </div>
                  </div>

                  {/* Comparison Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b-2 border-[var(--cds-border-subtle)]">
                          <th className="text-left py-3 px-4 carbon-label-01 text-[var(--cds-text-primary)]">Capability</th>
                          <th className="text-center py-3 px-4 carbon-label-01 text-[var(--cds-text-primary)]">Tier 1</th>
                          <th className="text-center py-3 px-4 carbon-label-01 text-[var(--cds-text-primary)]">Tier 2</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { cap: 'Engineering Design', t1: true, t2: false },
                          { cap: 'Validation & Testing', t1: true, t2: false },
                          { cap: 'SLA Guarantee', t1: true, t2: false },
                          { cap: 'Monsoon Hardening', t1: true, t2: false },
                          { cap: 'Quarterly Reporting', t1: true, t2: false },
                          { cap: 'SBP Compliance Support', t1: true, t2: false }
                        ].map((row, idx) => (
                          <tr key={idx} className="border-b border-[var(--cds-border-subtle)]">
                            <td className="py-3 px-4 text-[var(--cds-text-primary)]">{row.cap}</td>
                            <td className="py-3 px-4 text-center">
                              {row.t1 ? (
                                <CheckmarkFilled className="w-4 h-4 text-[#24a148] mx-auto" />
                              ) : (
                                <span className="text-[#a8a8a8]">✗</span>
                              )}
                            </td>
                            <td className="py-3 px-4 text-center">
                              {row.t2 ? (
                                <CheckmarkFilled className="w-4 h-4 text-[#24a148] mx-auto" />
                              ) : (
                                <span className="text-[#a8a8a8]">✗</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Section 2: Built for Pakistan's Reality */}
              <section id="engineering" className="py-12 border-b border-[var(--cds-border-subtle)]">
                <div className="max-w-5xl mx-auto px-6">
                  <span className="carbon-label-01 text-[#cf0a2c] uppercase tracking-wide mb-3 block">Local Engineering</span>
                  <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">Global Templates Fail Here. We Engineer for Monsoons, Dust & Load-Shedding.</h2>
                  <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-8">Standard data centre designs assume &quot;textbook conditions.&quot; We design for Lahore&apos;s 45°C summers, Karachi&apos;s dust, and 8–12hr daily load-shedding first-efficiency second.</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-10">
                    {[
                      { icon: RainDrop, title: 'Monsoon Resilience', items: ['Quarterly room integrity revalidation (Jun–Sept) vs. industry annual', 'Humidity-compensated cooling setpoints (40–60% RH target)', 'Designed to reduce monsoon-related failure risk†'] },
                      { icon: Shield, title: 'Dust Exclusion', items: ['IP54 cabinets + quarterly gasket integrity validation', 'Monthly filter validation for Lahore/Karachi industrial zones', 'Supports ServerLife Extend™ thermal requirements‡'] },
                      { icon: Lightning, title: 'Load-Shedding Continuity', items: ['Generator/UPS failover validation with 72hr runtime assurance', 'Generator powers cooling plant (not just IT load)', 'Designed to prevent PKR 2.1M/hour downtime exposure'] },
                      { icon: Certificate, title: 'SBP/SECP Alignment', items: ['Audit-ready validation reports aligned to Circular DRD2-141', 'Quarterly fire suppression testing support', 'PUE ≤1.4 target by 2027 for Tier-3 banking clients'] }
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

                  {/* Visual Break */}
                  <div className="h-48 bg-gradient-to-r from-[var(--cds-background)] to-[#e5e5e5] border border-[var(--cds-border-subtle)] flex items-center justify-center p-6">
                    <div className="text-center">
                      <TemperatureHot className="w-12 h-12 text-[#cf0a2c] mx-auto mb-3" />
                      <p className="carbon-label-01 text-[var(--cds-text-primary)] font-semibold mb-1">Thermal Imaging Visual</p>
                      <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)]">Before/after thermal imaging showing hotspot elimination post-engineered validation vs. standard install</p>
                    </div>
                  </div>

                  <p className="mt-6 carbon-helper-text-01 text-[var(--cds-text-secondary)]">
                    †Based on pilot client data comparing quarterly vs. annual validation frequency. Actual outcomes depend on facility condition and environmental factors. ‡When facility-layer services are contracted alongside ServerLife Extend™. Individual results vary.
                  </p>
                </div>
              </section>

              {/* Section 3: Data Centre Build & Commissioning */}
              <section id="build" className="py-12 border-b border-[var(--cds-border-subtle)] bg-[var(--cds-background)]">
                <div className="max-w-5xl mx-auto px-6">
                  <span className="carbon-label-01 text-[#0f62fe] uppercase tracking-wide mb-3 block">Physical Continuity Foundation</span>
                  <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">Engineered Construction vs. Basic Installation</h2>
                  <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-8">Global templates fail in Pakistan. We build data centres that survive monsoons, dust, and load-shedding - with validation that proves it.</p>

                  {/* Build Tier Comparison Table */}
                  <div className="overflow-x-auto mb-10">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b-2 border-[var(--cds-border-subtle)]">
                          <th className="text-left py-3 px-4 carbon-label-01 text-[var(--cds-text-primary)]">Capability</th>
                          <th className="text-left py-3 px-4 carbon-label-01 text-[var(--cds-text-primary)]">Tier 1: Engineered Build</th>
                          <th className="text-left py-3 px-4 carbon-label-01 text-[var(--cds-text-primary)]">Tier 2: Basic Install</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { cap: 'Design Validation', t1: 'CFD airflow modelling + thermal simulation', t2: 'As-specified installation only' },
                          { cap: 'Flood/Dust Hardening', t1: '≥1.5m above flood plain + IP54 cabinets + sealed plenum', t2: 'Standard raised floor, no environmental sealing' },
                          { cap: 'Monsoon Protocol', t1: 'Quarterly room integrity revalidation (Jun–Sept) baked into contract', t2: 'Annual test only (if any)' },
                          { cap: 'SBP/SECP Alignment', t1: 'Audit-ready documentation + NFPA 2001 validation support', t2: 'Manufacturer warranty pass-through only' },
                          { cap: 'Integration Testing', t1: 'Staged failover simulation (power → cooling → IT load)', t2: 'Power-on test only' },
                          { cap: 'Uptime Target', t1: 'Target 99.99% facility availability*', t2: 'No uptime commitment' }
                        ].map((row, idx) => (
                          <tr key={idx} className="border-b border-[var(--cds-border-subtle)]">
                            <td className="py-3 px-4 text-[var(--cds-text-primary)]">{row.cap}</td>
                            <td className="py-3 px-4 text-left carbon-body-01 text-[var(--cds-text-primary)]">
                              <span className="text-[#24a148] mr-2">✓</span>{row.t1}
                            </td>
                            <td className="py-3 px-4 text-left carbon-body-01 text-[var(--cds-text-secondary)]">
                              <span className="text-[#a8a8a8] mr-2">✗</span>{row.t2}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)] mt-2">*Subject to signed SLA, site assessment, and force majeure exclusions</p>
                  </div>

                  {/* Build Cards */}
                  <div className="grid md:grid-cols-2 gap-6 mb-10">
                    {/* Card A - Tier 1 Engineered Build */}
                    <div className="p-6 bg-[var(--cds-layer-01)] border-2 border-[#0f62fe] flex flex-col">
                      <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-1">Monsoon-Hardened, SBP-Aligned Construction</h3>
                      <p className="carbon-label-01 text-[var(--cds-text-secondary)] mb-4">Tier 1 - Engineered Build</p>
                      <p className="text-2xl font-semibold text-[#0f62fe] mb-4">PKR 320K+/month recurring<br /><span className="text-base font-normal text-[var(--cds-text-secondary)]">or PKR 2.8M–8.5M project-based</span></p>
                      <ul className="space-y-2 mb-6 flex-1">
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]"><CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />CFD-validated design</li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]"><CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />Flood-resilient siting</li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]"><CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />IP54 dust exclusion</li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]"><CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />Quarterly revalidation</li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]"><CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />Audit-ready reporting</li>
                      </ul>
                      <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)] mb-4">Included: Site risk assessment • Thermal/fluid modelling • Monsoon protocol integration • Staged failover testing • SBP alignment documentation</p>
                      <button className="w-full cds--btn cds--btn--primary bg-[#0f62fe]">Request Build Consultation</button>
                    </div>

                    {/* Card B - Tier 2 Basic Build */}
                    <div className="p-6 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] flex flex-col">
                      <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-1">Certified Components, Plug-and-Play Deployment</h3>
                      <p className="carbon-label-01 text-[var(--cds-text-secondary)] mb-4">Tier 2 - Basic Build</p>
                      <p className="text-2xl font-semibold text-[var(--cds-text-primary)] mb-4">PKR 280K–1.2M one-time</p>
                      <ul className="space-y-2 mb-6 flex-1">
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]"><span className="w-4 h-4 text-[#a8a8a8] mt-0.5 flex-shrink-0">•</span>Basic install</li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]"><span className="w-4 h-4 text-[#a8a8a8] mt-0.5 flex-shrink-0">•</span>Warranty pass-through</li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]"><span className="w-4 h-4 text-[#a8a8a8] mt-0.5 flex-shrink-0">•</span>Reactive support</li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]"><span className="w-4 h-4 text-[#a8a8a8] mt-0.5 flex-shrink-0">•</span>No validation</li>
                        <li className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]"><span className="w-4 h-4 text-[#a8a8a8] mt-0.5 flex-shrink-0">•</span>No SLA</li>
                      </ul>
                      <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)] mb-4">Included: Raised floor supply • Rack mounting • Patch panel termination • Basic cable dressing<br />Excluded: Design validation • Environmental hardening • Failover testing • Compliance reporting</p>
                      <button className="w-full cds--btn cds--btn--tertiary">Request Hardware Quote</button>
                      <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)] mt-3">78% of Tier 2 build clients add Tier 1 validation within 12 months after monsoon exposure.</p>
                    </div>
                  </div>

                  {/* Visual Break */}
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
                      <p className="carbon-label-01 text-[var(--cds-text-primary)] font-semibold">Utility meter → UPS → cooling → rack → server BIOS</p>
                      <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)]">Diagram: Tier 1 validation checkpoints highlighted along the continuity chain</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Comprehensive Facility Systems */}
              <section id="portfolio" className="py-12 border-b border-[var(--cds-border-subtle)] bg-[var(--cds-background)]">
                <div className="max-w-5xl mx-auto px-6">
                  <span className="carbon-label-01 text-[#0f62fe] uppercase tracking-wide mb-3 block">Facility Systems</span>
                  <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">End-to-End Data Centre Services</h2>
                  <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-8">Six integrated service layers designed to eliminate unowned failure domains. Each service cross-validates with adjacent systems to prevent cascade failures during monsoon, dust, or grid instability events.</p>

                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { icon: Lightning, title: 'Power Continuity Assurance', desc: 'UPS, generator, and PDU validation with staged failover testing, battery impedance monitoring, and 72-hour runtime assurance for extended load-shedding events.' },
                      { icon: TemperatureHot, title: 'Thermal Integrity & Cooling', desc: 'Precision CRAC/CRAH deployment with monsoon humidity compensation, hot/cold aisle containment, and quarterly thermal failure simulation to prevent thermal runaway.' },
                      { icon: Building, title: 'Physical Infrastructure & Flooring', desc: 'Flood-resilient raised floors, IP54 dust-exclusion cabinets, sealed plenum edges, and quarterly room integrity revalidation for monsoon season.' },
                      { icon: Fire, title: 'Fire Suppression & Safety Systems', desc: 'FM200/VESDA gas suppression with quarterly NFPA 2001 pressure decay testing support, room integrity validation, and automated environmental shutdown protocols.' },
                      { icon: DataBase, title: 'Structured Cabling & Connectivity', desc: 'Tier II/III Cat6A/OM4 fibre deployment with OTDR certification, sealed conduits for dust exclusion, and out-of-band management continuity for monsoon fibre cuts.' },
                      { icon: Dashboard, title: 'Infrastructure Monitoring & DCIM', desc: 'Multi-path telemetry (Ethernet + 4G + NB-IoT), rack-level thermal/humidity sensors, leak detection grids, and unified continuity dashboard with predictive anomaly alerts.' }
                    ].map((svc) => (
                      <div key={svc.title} className="p-5 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] hover:shadow-sm transition-shadow">
                        <div className="w-10 h-10 bg-[#0f62fe]/10 flex items-center justify-center mb-3">
                          <svc.icon className="w-5 h-5 text-[#0f62fe]" />
                        </div>
                        <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-1">{svc.title}</h3>
                        <p className="carbon-body-01 text-[var(--cds-text-secondary)]">{svc.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 5: Full-Stack Accountability */}
              <section id="integration" className="py-12 border-b border-[var(--cds-border-subtle)]">
                <div className="max-w-5xl mx-auto px-6">
                  <span className="carbon-label-01 text-[#24a148] uppercase tracking-wide mb-3 block">Server Continuity Integration</span>
                  <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">Continuity from Utility Meter to Server BIOS</h2>
                  <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-8">Tier 1 integrates seamlessly with ServerLife Extend™, ModServe™, and ServerSure™-designed to prevent the 31% of SLA breaches that originate in facility-layer failures (cooling/power), not server hardware.</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {[
                      { from: 'Cooling stability', to: 'ServerLife Extend™ thermal requirements (18–24°C inlet, ASHRAE A2)' },
                      { from: 'Power quality', to: 'ModServe™ zero-downtime migrations require stable power during cutover' },
                      { from: 'Dust control', to: 'IP54 cabinets prevent 17% higher server fan failures that breach ServerLife Extend™ SLAs' },
                      { from: 'Thermal monitoring', to: 'ServerSure™ predictive alerts require rack inlet sensors integrated into facility DCIM' }
                    ].map((item) => (
                      <div key={item.from} className="p-5 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] flex items-center gap-4">
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

                  {/* Stat Banner */}
                  <div className="p-6 bg-[#0f62fe] text-white text-center">
                    <p className="carbon-fluid-heading-04 mb-2">31%</p>
                    <p className="carbon-body-01 text-white/90">of ServerLife Extend™ SLA breaches originate in cooling/power-not server hardware.</p>
                    <p className="carbon-helper-text-01 text-white/70 mt-2">(Uptime Institute 2025, pilot validation)</p>
                  </div>
                </div>
              </section>

              {/* Section 6: Understand Your Continuity Exposure */}
              <section id="calculator" className="py-12 border-b border-[var(--cds-border-subtle)] bg-[var(--cds-background)]">
                <div className="max-w-5xl mx-auto px-6">
                  <span className="carbon-label-01 text-[#cf0a2c] uppercase tracking-wide mb-3 block">Risk Awareness</span>
                  <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">What's Your Facility's Risk Profile?</h2>
                  <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-8">Illustrative assessment only. Formal risk analysis requires on-site assessment and is subject to contractual terms.</p>

                  <div className="p-6 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] mb-6">
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div>
                        <label className="block carbon-label-01 text-[var(--cds-text-primary)] mb-2">Estimated downtime cost/hour</label>
                        <select className="w-full h-12 px-4 bg-[var(--cds-background)] border border-[var(--cds-border-subtle)] text-[var(--cds-text-primary)]">
                          <option>PKR 50K (SME/non-critical)</option>
                          <option>PKR 250K (departmental systems)</option>
                          <option selected>PKR 500K (production/manufacturing)</option>
                          <option>PKR 2.1M+ (core banking/mission-critical)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block carbon-label-01 text-[var(--cds-text-primary)] mb-2">Annual unplanned outage hours</label>
                        <input type="number" defaultValue={8} className="w-full h-12 px-4 bg-[var(--cds-background)] border border-[var(--cds-border-subtle)] text-[var(--cds-text-primary)]" />
                        <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)] mt-1">Industry average for non-SLA facilities in Pakistan: 8–12 hours/year</p>
                      </div>
                      <div>
                        <label className="block carbon-label-01 text-[var(--cds-text-primary)] mb-2">Current facility age</label>
                        <select className="w-full h-12 px-4 bg-[var(--cds-background)] border border-[var(--cds-border-subtle)] text-[var(--cds-text-primary)]">
                          <option>&lt;2 years (baseline risk profile)</option>
                          <option selected>2–7 years (standard risk profile)</option>
                          <option>&gt;7 years (enhanced risk profile: failure probability ↑ 3.2×)</option>
                        </select>
                      </div>
                    </div>

                    {/* Output Display */}
                    <div className="p-5 border-l-4 border-[#f97316] bg-[#fff8e1]">
                      <div className="flex items-start gap-3">
                        <WarningAlt className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="carbon-label-01 text-[#f97316] font-semibold mb-1">Illustrative Risk Exposure Estimate</p>
                          <p className="carbon-body-01 text-[var(--cds-text-primary)] mb-2">
                            Based on your inputs, facilities with similar profiles in Pakistan have experienced annual downtime exposure ranging from PKR 400K to PKR 16.8M. Actual exposure depends on facility condition, environmental factors, and operational practices.
                          </p>
                          <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)] mb-4">
                            Request a formal Power Resilience Assessment (PKR 15K fee, potentially credited toward future services subject to mutual agreement) to receive a site-specific analysis.
                          </p>
                          <a href="#audit" className="inline-flex items-center gap-2 px-4 py-2 bg-[#f97316] text-white carbon-button-01 hover:bg-[#ea580c] transition-colors">
                            Request Formal Assessment
                            <ArrowRight className="w-4 h-4" />
                          </a>
                          <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)] mt-3">
                            *This tool provides illustrative estimates only. It does not constitute a prediction of actual losses, a risk assessment, or an offer of services. Formal analysis requires on-site assessment and is subject to contractual terms.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: FAQ Accordion */}
              {/* Section 7: FAQ Accordion */}
              <section id="faq" className="py-12 border-b border-[var(--cds-border-subtle)]">
                <div className="max-w-5xl mx-auto px-6">
                  <span className="carbon-label-01 text-[#0f62fe] uppercase tracking-wide mb-3 block">Clarifications</span>
                  <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">Everything You Need to Know About Data Centre Continuity Services</h2>
                  <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-8">Answers to common questions about service tiers, SLAs, and Pakistan-specific engineering.</p>

                  <div className="space-y-3">
                    {[
                      { q: "What's the difference between Tier 1 and Tier 2?", a: (
                        <>
                          <p className="mb-2"><strong>Tier 1 (SLA-Backed Continuity):</strong> We provide engineered validation of power/cooling/physical infrastructure with monsoon/dust hardening protocols, 24/7 monitoring, and contractual service levels defined in a signed agreement. Pricing: PKR 42K–480K/month recurring.</p>
                          <p className="mb-2"><strong>Tier 2 (Product Suppliers):</strong> We supply certified hardware (UPS, cabinets, cooling) with basic installation and manufacturer warranty. No validation, no SLA, no proactive monitoring. Pricing: PKR 150K–450K one-time.</p>
                          <p>💡 78% of Tier 2 clients add Tier 1 validation within 18 months after experiencing preventable outages.</p>
                        </>
                      )},
                      { q: "How does the 4-hour monsoon response target work?", a: (
                        <>
                          <p className="mb-2"><strong>Monsoon Peak Protocol (June–September):</strong> Dedicated standby engineers in Lahore/Karachi hubs, pre-staged portable cooling units, GPS-tracked dispatch with real-time ETA updates.</p>
                          <p>Response time targets are engineering baselines; contractual commitments, remedies, and exclusions are defined exclusively in signed service agreements following site assessment.</p>
                        </>
                      )},
                      { q: "Can I start with Tier 2 and upgrade later?", a: (
                        <>
                          <p className="mb-2">Yes-Tier 2 is designed as a gateway to Tier 1. Conversion pathway:</p>
                          <ol className="list-decimal list-inside space-y-1 mb-2">
                            <li>Tier 2 hardware purchase</li>
                            <li>Risk exposure assessment via our NOC or near-miss experience</li>
                            <li>Power Resilience Assessment (PKR 15K, potentially credited)</li>
                            <li>3-year continuity roadmap with risk model</li>
                            <li>Tier 1 contract if mutually agreed</li>
                          </ol>
                          <p>Timeline: 90 days average from Tier 2 sale to Tier 1 close (pilot data).</p>
                        </>
                      )},
                      { q: "Is this SBP/SECP compliant?", a: (
                        <>
                          <p className="mb-2">Tier 1 Standard & Enterprise include support for SBP Circular DRD2-141 alignment, NFPA 2001 validation support, and audit-ready documentation.</p>
                          <p>Compliance support does not constitute regulatory certification; clients remain responsible for their own compliance obligations. Non-regulated clients receive annual minimum validation.</p>
                        </>
                      )},
                      { q: "What happens if service levels aren't met?", a: (
                        <>
                          <p className="mb-2">Service levels, measurement methodology, and remedies for shortfalls are defined exclusively in signed contractual agreements.</p>
                          <p>Historical performance data is available upon request for qualified prospects. We structure agreements to align incentives-our success depends on your continuity. Specific terms are customized per client risk profile and facility assessment.</p>
                        </>
                      )},
                      { q: "Do you integrate with our existing ServerLife Extend™ contract?", a: (
                        <>
                          <p className="mb-2">Yes-bundled &quot;Continuity from Utility Meter to Server BIOS&quot; offering aligns facility-layer validation with compute-layer SLAs.</p>
                          <p>Integration benefits: single accountability, unified monitoring, coordinated response, and potential cost savings vs. separate contracts. Pilot result: 31% of ServerLife Extend™ SLA breaches originated in facility layer; bundling is designed to address this.</p>
                        </>
                      )},
                      { q: "What's included in the Power Resilience Assessment?", a: (
                        <>
                          <p className="mb-2"><strong>90-minute on-site assessment</strong> covering: criticality scoring, asset inventory, environmental scan (thermal imaging, humidity, particulate count), load analysis, and compliance gap check.</p>
                          <p><strong>Deliverables:</strong> PDF report with findings, executive summary, detailed technical notes, and Tier 1 proposal if mutually pursued. PKR 15K fee, potentially credited toward future services subject to mutual agreement.</p>
                        </>
                      )}
                    ].map((item, i) => (
                      <details key={i} className="group bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)]">
                        <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                          <span className="carbon-heading-02 text-[var(--cds-text-primary)] pr-4">{item.q}</span>
                          <ChevronDown className="w-5 h-5 text-[var(--cds-text-secondary)] flex-shrink-0 group-open:hidden" />
                          <ChevronUp className="w-5 h-5 text-[var(--cds-text-secondary)] flex-shrink-0 hidden group-open:block" />
                        </summary>
                        <div className="px-5 pb-5 border-t border-[var(--cds-border-subtle)]">
                          <div className="carbon-body-01 text-[var(--cds-text-secondary)] pt-4">{item.a}</div>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 8: Start with an Assessment */}
              <section id="audit" className="py-12 border-b border-[var(--cds-border-subtle)] bg-[var(--cds-background)]">
                <div className="max-w-5xl mx-auto px-6">
                  <span className="carbon-label-01 text-[#0f62fe] uppercase tracking-wide mb-3 block">Next Step</span>
                  <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">Discover Your Continuity Gaps in 90 Minutes</h2>
                  <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-8">A structured assessment to identify risk exposure and alignment opportunities-not a sales pitch.</p>

                  {/* 3-Step Process */}
                  <div className="grid md:grid-cols-3 gap-4 mb-10">
                    {[
                      { step: '01', title: 'On-Site Assessment', desc: 'Criticality scoring, asset inventory, environmental scan, load analysis, compliance gap check - all in 90 minutes.' },
                      { step: '02', title: 'Risk-Calibrated Roadmap', desc: 'Tier recommendation, illustrative risk model, 3-year continuity projection - delivered within 48 hours.' },
                      { step: '03', title: 'Mutual Agreement', desc: 'Service levels, scope, and terms defined exclusively in signed contractual agreements - if pursued.' }
                    ].map((item) => (
                      <div key={item.step} className="relative p-6 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)]">
                        <span className="absolute top-4 right-4 carbon-heading-02 text-[var(--cds-text-secondary)]">{item.step}</span>
                        <h3 className="carbon-fluid-heading-03 text-[var(--cds-text-primary)] mb-2">{item.title}</h3>
                        <p className="carbon-body-01 text-[var(--cds-text-secondary)]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Pricing Reference */}
                  <div className="grid md:grid-cols-3 gap-4 mb-10">
                    {[
                      { name: 'Starter', price: 'PKR 42K', period: '/month', desc: 'SME/edge sites - baseline monitoring' },
                      { name: 'Standard', price: 'PKR 165K', period: '/month', desc: 'Core power/cooling validation' },
                      { name: 'Enterprise', price: 'PKR 480K+', period: '/month', desc: 'Full-stack continuity assurance' }
                    ].map((tier) => (
                      <div key={tier.name} className="p-5 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)]">
                        <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-1">{tier.name}</h3>
                        <div className="flex items-baseline gap-1 mb-2">
                          <span className="text-2xl font-bold text-[var(--cds-text-primary)]">{tier.price}</span>
                          <span className="carbon-helper-text-01 text-[var(--cds-text-secondary)]">{tier.period}</span>
                        </div>
                        <p className="carbon-body-01 text-[var(--cds-text-secondary)]">{tier.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Final CTA Banner */}
                  <div className="p-8 bg-[#0f62fe] text-center">
                    <h3 className="carbon-fluid-heading-04 text-white mb-4">Prepare for Monsoon Season with Confidence</h3>
                    <p className="carbon-body-01 text-white/90 mb-6">
                      Request a Power Resilience Assessment. PKR 15K fee, potentially credited toward future services subject to mutual agreement.
                    </p>
                    <a 
                      href="mailto:contact@perception-it.com"
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

              {/* Section 9: Pilot Client Outcomes */}
              <section id="cases" className="py-12 border-b border-[var(--cds-border-subtle)]">
                <div className="max-w-5xl mx-auto px-6">
                  <span className="carbon-label-01 text-[#0f62fe] uppercase tracking-wide mb-3 block">Proven Approach</span>
                  <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">Early Results from Pakistan-Specific Validation</h2>
                  <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-6">Formal case studies pending client approval. Pilot data shared under NDA.</p>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    {[
                      { value: '89%', label: 'Client Retention*', note: '*vs. 32% industry average - 12-client pilot, 18-month tracking' },
                      { value: '0.4', label: 'Preventable Events/Year*', note: '*Enterprise tier vs. 2.3/year industry average (pilot data)' },
                      { value: '78%', label: 'Conversion Velocity', note: 'Of Tier 2 clients added Tier 1 validation within 18 months' }
                    ].map((stat) => (
                      <div key={stat.label} className="p-6 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] text-center">
                        <p className="carbon-fluid-heading-04 text-[#0f62fe] mb-2">{stat.value}</p>
                        <p className="carbon-body-01 text-[var(--cds-text-primary)]">{stat.label}</p>
                        <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)] mt-2">{stat.note}</p>
                      </div>
                    ))}
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
            <p>• Service outcomes, uptime targets, and remedies are defined exclusively in signed contractual agreements between Perception-IT and the client. Marketing materials do not constitute offers or guarantees.</p>
            <p>• Risk calculations, exposure estimates, and failure reduction statistics are illustrative only, based on industry benchmarks and pilot client data. Actual results depend on facility condition, environmental factors, client cooperation, and forces beyond Perception-IT's control.</p>
            <p>• "Monsoon-hardened," "dust-excluded," and similar terms describe engineering protocols and design intent, not absolute performance warranties.</p>
            <p>• SBP/SECP/NFPA compliance support does not constitute legal advice or regulatory certification. Clients remain responsible for their own compliance obligations.</p>
            <p>• Perception-IT (Private) Limited. Huawei Enterprise Partner certification valid through Feb 2027 (CERT20251216000154). All trademarks acknowledged.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Datacenter;
