import { useState, useEffect } from 'react';
import usePageSEO from '@/hooks/usePageSEO';
import CoolingNav from '@/pages/services/CoolingNav';
import Footer from '@/sections/Footer';
import StickyAnchorNav from '@/components/StickyAnchorNav';
import '@/styles/carbon-typography.css';
import '@/styles/design-tokens.css';
import {
  ArrowRight,
  ArrowUp,
  Check,
  ChevronDown,
  ChevronUp,
  Wrench,
  Award,
  MapPin,
  Headphones,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import {
  PAGE_SECTIONS,
  HERO_TILES,
  WHY_FACILITIES_FAIL,
  SLA_TIERS,
  SLA_MATRIX,
  COVERAGE_AREAS,
  PROCESS_STEPS,
  TRUST_ITEMS,
  RESULTS,
  FAQS,
  ECOSYSTEM_LINKS,
  CONTACT_EMAIL_BODY,
} from './data';

const MaintenanceSupport = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [monthlyDowntimeCost, setMonthlyDowntimeCost] = useState(500000);
  const [currentMonthlySpend, setCurrentMonthlySpend] = useState(80000);
  const [plannedContractCost, setPlannedContractCost] = useState(120000);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  usePageSEO({
    title: 'Data Centre Maintenance & Support Services Pakistan | Perception IT',
    description: 'SLA-backed maintenance and support for data centre power, cooling, racks and monitoring in Pakistan. 24/7 NOC, 4-hour emergency response, multi-vendor coverage.',
    canonicalPath: '/infrastructure/data-centre-services/maintenance-support',
    ogType: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Data Centre Maintenance & Support Services',
      provider: {
        '@type': 'Organization',
        name: 'Perception IT',
        url: 'https://perception-it.com',
        logo: 'https://perception-it.com/logos/Perception IT_logo_in-white.png',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Pakistan',
      },
      serviceType: 'Data Centre Maintenance and SLA Support',
      description: 'Proactive maintenance, 24/7 NOC monitoring, and emergency response for data centre cooling, power, racks and monitoring systems.',
      url: 'https://perception-it.com/#/infrastructure/data-centre-services/maintenance-support',
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const downtimeSavings = Math.round(monthlyDowntimeCost * 0.35);
  const netPosition = currentMonthlySpend + downtimeSavings - plannedContractCost;

  return (
    <div className="min-h-screen bg-white">
      <CoolingNav />

      {/* Sticky Breadcrumb */}
      <div className="sticky top-12 z-40 bg-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-12 flex items-center">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-500">
              <li><a href="/#/" className="hover:text-[#0f62fe] transition-colors">Home</a></li>
              <li className="text-gray-300">/</li>
              <li><a href="/#/infrastructure" className="hover:text-[#0f62fe] transition-colors">Infrastructure</a></li>
              <li className="text-gray-300">/</li>
              <li><a href="/#/infrastructure/data-centre-services" className="hover:text-[#0f62fe] transition-colors">Data Centre</a></li>
              <li className="text-gray-300">/</li>
              <li className="text-gray-900 font-medium" aria-current="page">Maintenance & Support</li>
            </ol>
          </nav>
        </div>
      </div>

      <StickyAnchorNav items={PAGE_SECTIONS.filter((s) => s.inNav)} defaultActive="overview" />

      <main id="main-content">
        {/* Hero */}
        <section id="overview" className="relative bg-[#0a1628] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f1d3a] to-[#0a1628]" />
          <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#0f62fe]/5 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-16 md:pt-28 md:pb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f62fe]/10 border border-[#0f62fe]/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0f62fe]" />
              <span className="carbon-label-02 text-[#78a9ff] uppercase tracking-wider">Data Centre Infrastructure</span>
            </div>

            <h1 className="carbon-fluid-display-03 text-white max-w-4xl mb-6">
              SLA-Backed Maintenance & Support for Critical Facilities
            </h1>

            <p className="carbon-fluid-heading-04 text-white/90 max-w-3xl mb-10">
              Your infrastructure kept running, not just installed.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mb-12">
              {HERO_TILES.map((item) => (
                <div key={item.label} className="flex flex-col gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[#0f62fe]/15 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#78a9ff]" />
                  </div>
                  <div>
                    <p className="carbon-heading-02 text-white mb-1">{item.label}</p>
                    <p className="carbon-body-02 text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:info@perception-it.com?subject=Maintenance%20%26%20Support%20Quote%20Request&body=${CONTACT_EMAIL_BODY}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0f62fe] text-white carbon-heading-02 rounded-lg hover:bg-[#0353e9] hover:shadow-xl hover:shadow-[#0f62fe]/25 hover:-translate-y-0.5 transition-all"
              >
                Request a Support Quote
              </a>
              <a
                href="#tiers"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('tiers');
                  if (el) {
                    const pos = el.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({ top: pos - 80, behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/20 text-white carbon-heading-02 rounded-lg hover:bg-white/10 hover:border-white/30 transition-all"
              >
                Compare SLA Tiers
              </a>
            </div>
          </div>
        </section>

        {/* Why Facilities Fail */}
        <section id="problem" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12 md:mb-16">
              <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
                Why Facilities Fail After the Install
              </span>
              <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
                The Hidden Risks of Reactive Maintenance
              </h2>
              <p className="carbon-body-02 text-gray-600">
                Most data centre failures are not caused by bad equipment. They are caused by fragmented accountability, rigid maintenance schedules, and missing operational knowledge.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {WHY_FACILITIES_FAIL.map((item) => (
                <div
                  key={item.title}
                  className="bg-[#f4f4f4] rounded-xl border border-gray-200 p-6 hover:border-[#0f62fe]/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0f62fe]/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-[#0f62fe]" />
                  </div>
                  <h3 className="carbon-heading-02 text-[#161616] mb-3">{item.title}</h3>
                  <p className="carbon-body-02 text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SLA Tiers */}
        <section id="tiers" className="py-16 md:py-24 bg-[#f4f4f4]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12 md:mb-16">
              <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
                SLA Tiers
              </span>
              <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
                Support That Matches Your Criticality
              </h2>
              <p className="carbon-body-02 text-gray-600">
                Choose the response time, coverage hours, and accountability level that fits your facility. Upgrade or downgrade as your operations evolve.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {SLA_TIERS.map((tier) => (
                <div
                  key={tier.name}
                  className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-2 w-full" style={{ backgroundColor: tier.color }} />
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className="inline-flex items-center px-2.5 py-1 text-white carbon-label-01 uppercase tracking-wider rounded-full"
                        style={{ backgroundColor: tier.color }}
                      >
                        {tier.tag}
                      </span>
                    </div>
                    <h3 className="carbon-fluid-heading-03 text-[#161616] mb-2">{tier.name}</h3>
                    <p className="carbon-body-02 text-gray-600 mb-6">{tier.who}</p>

                    <div className="mb-6">
                      <p className="carbon-label-01 text-gray-500 uppercase tracking-wider mb-1">Response Target</p>
                      <p className="carbon-heading-02 text-[#161616]">{tier.response}</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {tier.includes.map((inc) => (
                        <li key={inc} className="flex items-start gap-3 carbon-body-02 text-gray-700">
                          <div className="w-5 h-5 rounded-full bg-[#0f62fe]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-[#0f62fe]" />
                          </div>
                          {inc}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={`mailto:info@perception-it.com?subject=${encodeURIComponent(tier.name)}%20Tier%20Enquiry&body=${CONTACT_EMAIL_BODY}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#0f62fe] text-[#0f62fe] carbon-heading-02 rounded-lg hover:bg-[#0f62fe] hover:text-white transition-all"
                    >
                      Enquire About {tier.name}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* SLA qualifier */}
            <div className="bg-[#0a1628] rounded-2xl p-6 sm:p-8 mb-12">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#0f62fe] flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="carbon-heading-02 text-white mb-2">SLA targets depend on subsystem criticality</h3>
                  <p className="carbon-body-02 text-white/80 max-w-3xl">
                    A 4-hour response makes sense for a cooling or UPS emergency, but is over-specified for a cabinet levelling issue. The matrix below shows how each tier maps to the specific data centre disciplines we cover, so you only pay for the urgency each subsystem actually needs.
                  </p>
                </div>
              </div>
            </div>

            {/* SLA matrix */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="p-6 sm:p-8 border-b border-gray-200">
                <h3 className="carbon-fluid-heading-03 text-[#161616] mb-2">Coverage-by-Tier Matrix</h3>
                <p className="carbon-body-02 text-gray-600">
                  Response targets and included activities vary by service area. Use this table to see what each tier means for your environment.
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px]">
                  <thead className="bg-[#f4f4f4]">
                    <tr>
                      <th className="text-left px-6 py-4 carbon-heading-02 text-[#161616] w-[22%]">Service Area</th>
                      <th className="text-left px-6 py-4 carbon-heading-02 text-[#4589ff] w-[26%]">Essential</th>
                      <th className="text-left px-6 py-4 carbon-heading-02 text-[#0f62fe] w-[26%]">Professional</th>
                      <th className="text-left px-6 py-4 carbon-heading-02 text-[#009d9a] w-[26%]">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SLA_MATRIX.map((row, idx) => (
                      <tr key={row.area} className={idx % 2 === 1 ? 'bg-[#f4f4f4]/50' : 'bg-white'}>
                        <td className="px-6 py-4 align-top">
                          <p className="carbon-heading-02 text-[#161616] mb-1">{row.area}</p>
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600">
                            {row.criticality}
                          </span>
                        </td>
                        <td className="px-6 py-4 carbon-body-02 text-gray-700 align-top">{row.essential}</td>
                        <td className="px-6 py-4 carbon-body-02 text-gray-700 align-top">{row.professional}</td>
                        <td className="px-6 py-4 carbon-body-02 text-gray-700 align-top">{row.enterprise}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage */}
        <section id="coverage" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12 md:mb-16">
              <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
                What We Cover
              </span>
              <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
                One Contract for the Entire Facility Layer
              </h2>
              <p className="carbon-body-02 text-gray-600">
                Stop juggling separate contracts for cooling, power, racks and monitoring. We maintain the systems that keep your servers alive.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {COVERAGE_AREAS.map((area) => (
                <div
                  key={area.title}
                  className="bg-[#f4f4f4] rounded-xl border border-gray-200 p-6 hover:border-[#0f62fe]/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0f62fe]/10 flex items-center justify-center mb-4">
                    <area.icon className="w-6 h-6 text-[#0f62fe]" />
                  </div>
                  <h3 className="carbon-heading-02 text-[#161616] mb-3">{area.title}</h3>
                  <ul className="space-y-2">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 carbon-body-02 text-gray-600">
                        <span className="text-[#0f62fe] mt-1.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Trust bar */}
            <div className="bg-[#0a1628] rounded-2xl p-8 sm:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0f62fe] flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="carbon-fluid-heading-03 text-white mb-2">Why Operators Choose Us</h3>
                  <p className="carbon-body-02 text-white/80">
                    Maintenance is only as good as the parts, people and procedures behind it.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {TRUST_ITEMS.map((item) => (
                  <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.05] border border-white/10">
                    <Check className="w-5 h-5 text-[#78a9ff] flex-shrink-0 mt-0.5" />
                    <p className="carbon-body-02 text-white/90">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-16 md:py-24 bg-[#f4f4f4]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12 md:mb-16">
              <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
                How We Work
              </span>
              <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
                The Maintenance Cycle
              </h2>
              <p className="carbon-body-02 text-gray-600">
                Predictable uptime comes from a repeatable process, not heroics. We baseline, plan, execute and improve every facility we support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PROCESS_STEPS.map((step, idx) => (
                <div key={step.step} className="relative">
                  {idx < PROCESS_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-[#0f62fe]/20" />
                  )}
                  <div className="bg-white rounded-xl border border-gray-200 p-6 hover:border-[#0f62fe]/20 hover:shadow-lg transition-all duration-300 h-full">
                    <span className="inline-block carbon-fluid-heading-03 text-[#0f62fe] mb-4">{step.step}</span>
                    <h3 className="carbon-heading-02 text-[#161616] mb-2">{step.title}</h3>
                    <p className="carbon-body-02 text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section id="calculator" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
                  Cost Calculator
                </span>
                <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
                  The Cost of Reactive vs. Predictable Support
                </h2>
                <p className="carbon-body-02 text-gray-600 mb-6">
                  Unplanned downtime in critical facilities typically costs far more than a structured maintenance contract. Use the sliders to estimate the financial case for moving from break-fix to SLA-backed support.
                </p>
                <div className="bg-[#f4f4f4] rounded-xl p-6 border border-gray-200">
                  <p className="carbon-label-02 text-[#161616] uppercase tracking-wider mb-4">How to use this calculator</p>
                  <ol className="space-y-3 carbon-body-02 text-gray-600 list-decimal list-inside">
                    <li><strong>Estimated monthly downtime cost:</strong> Enter what one significant unplanned outage costs your business each month in lost revenue, productivity and recovery labour.</li>
                    <li><strong>Current monthly ad-hoc support spend:</strong> Add up invoices, emergency call-outs, parts and contractor time you already pay reactively.</li>
                    <li><strong>Planned maintenance contract cost:</strong> Adjust to match the SLA tier you are considering — Essential, Professional or Enterprise.</li>
                  </ol>
                  <p className="carbon-body-02 text-gray-600 italic mt-4 pt-4 border-t border-gray-200">
                    “The cheapest maintenance call is the one that prevents the outage.”
                  </p>
                </div>
              </div>

              <div className="bg-[#0a1628] rounded-2xl p-6 sm:p-8">
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="carbon-body-02 text-white">Estimated monthly downtime cost</label>
                      <span className="carbon-heading-02 text-[#78a9ff]">PKR {monthlyDowntimeCost.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="100000"
                      max="5000000"
                      step="100000"
                      value={monthlyDowntimeCost}
                      onChange={(e) => setMonthlyDowntimeCost(Number(e.target.value))}
                      className="w-full accent-[#0f62fe]"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="carbon-body-02 text-white">Current monthly ad-hoc support spend</label>
                      <span className="carbon-heading-02 text-[#78a9ff]">PKR {currentMonthlySpend.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="500000"
                      step="10000"
                      value={currentMonthlySpend}
                      onChange={(e) => setCurrentMonthlySpend(Number(e.target.value))}
                      className="w-full accent-[#0f62fe]"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="carbon-body-02 text-white">Planned maintenance contract cost</label>
                      <span className="carbon-heading-02 text-[#78a9ff]">PKR {plannedContractCost.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="50000"
                      max="500000"
                      step="10000"
                      value={plannedContractCost}
                      onChange={(e) => setPlannedContractCost(Number(e.target.value))}
                      className="w-full accent-[#0f62fe]"
                    />
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="carbon-body-02 text-white/80">Estimated downtime risk reduction (35%)</span>
                      <span className="carbon-heading-02 text-[#42be65]">PKR {downtimeSavings.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="carbon-body-02 text-white/80">Net monthly position</span>
                      <span className={`carbon-heading-02 ${netPosition >= 0 ? 'text-[#42be65]' : 'text-[#fa4d56]'}`}>
                        PKR {netPosition.toLocaleString()}
                      </span>
                    </div>
                    <p className="carbon-helper-text-01 text-white/60 mt-3">
                      *Illustrative estimate. Actual savings depend on facility condition, equipment age and operational maturity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section id="results" className="py-16 md:py-24 bg-[#f4f4f4]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12 md:mb-16">
              <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
                Results
              </span>
              <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
                Outcomes from Proactive Maintenance
              </h2>
              <p className="carbon-body-02 text-gray-600">
                Real results from clients who moved from reactive break-fix to structured SLA-backed support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {RESULTS.map((result) => (
                <div
                  key={result.label}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:border-[#0f62fe]/20 hover:shadow-lg transition-all duration-300"
                >
                  <p className="carbon-fluid-display-03 text-[#0f62fe] mb-2">{result.stat}</p>
                  <h3 className="carbon-heading-02 text-[#161616] mb-2">{result.label}</h3>
                  <p className="carbon-body-02 text-gray-600 leading-relaxed">{result.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ecosystem */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <span className="carbon-label-02 text-[#0f62fe] uppercase tracking-wider">The Ecosystem</span>
            <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4 mt-3">Complete Data Centre Resilience</h2>
            <p className="carbon-body-02 text-gray-600 mb-10 max-w-3xl">
              Maintenance & Support ties together every layer of the data centre. Explore the services we keep running.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {ECOSYSTEM_LINKS.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="group flex items-start gap-4 p-5 rounded-xl bg-[#f4f4f4] border border-gray-200 hover:border-[#0f62fe]/30 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 group-hover:border-[#0f62fe]/30 transition-colors">
                    <item.icon className="w-5 h-5 text-[#0f62fe]" />
                  </div>
                  <div>
                    <h3 className="carbon-heading-02 text-[#161616] group-hover:text-[#0f62fe] transition-colors">{item.title}</h3>
                    <p className="carbon-body-02 text-gray-600">{item.desc}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-[#0F172A] rounded-2xl p-8 sm:p-10 text-center">
              <h3 className="carbon-fluid-heading-03 text-white mb-3">One Partner. One SLA. No Gaps.</h3>
              <p className="carbon-body-02 text-white/80 max-w-2xl mx-auto">
                From cooling to power, racks to monitoring, we maintain the full facility layer under a single accountability chain.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 md:py-24 bg-[#f4f4f4]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12 md:mb-16">
              <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
                FAQ
              </span>
              <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
                Common Questions About Maintenance & Support
              </h2>
            </div>

            <div className="max-w-3xl space-y-4">
              {FAQS.map((faq) => {
                const isOpen = openFaq === faq.q;
                return (
                  <div
                    key={faq.q}
                    className={`bg-white rounded-xl border overflow-hidden transition-all duration-300 ${isOpen ? 'border-[#0f62fe]/30 shadow-lg' : 'border-gray-200'}`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : faq.q)}
                      className="w-full flex items-center justify-between p-5 text-left"
                    >
                      <span className="carbon-heading-02 text-[#161616] pr-4">{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#0f62fe] flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 border-t border-gray-100">
                        <p className="carbon-body-02 text-gray-600 leading-relaxed pt-4">{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="py-16 md:py-24 bg-[#0a1628]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="carbon-fluid-heading-05 text-white mb-4">
                  Get a Maintenance Assessment
                </h2>
                <p className="carbon-body-02 text-white/80 mb-8 leading-relaxed">
                  Tell us about your facility and current support setup. We will recommend the right SLA tier, identify immediate risks, and give you a predictable monthly cost.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`mailto:info@perception-it.com?subject=Maintenance%20Assessment%20Request&body=${CONTACT_EMAIL_BODY}`}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0f62fe] text-white carbon-heading-02 rounded-lg hover:bg-[#0353e9] hover:shadow-xl hover:shadow-[#0f62fe]/25 hover:-translate-y-0.5 transition-all"
                  >
                    Request an Assessment
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="tel:+923001234567"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/20 text-white carbon-heading-02 rounded-lg hover:bg-white/10 hover:border-white/30 transition-all"
                  >
                    <Headphones className="w-4 h-4" />
                    Speak to Support
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-white/[0.05] border border-white/10">
                  <MapPin className="w-6 h-6 text-[#78a9ff] mb-3" />
                  <p className="carbon-heading-02 text-white mb-1">Local Engineers</p>
                  <p className="carbon-body-02 text-white/70">Karachi, Lahore, Islamabad and major cities</p>
                </div>
                <div className="p-5 rounded-xl bg-white/[0.05] border border-white/10">
                  <Wrench className="w-6 h-6 text-[#78a9ff] mb-3" />
                  <p className="carbon-heading-02 text-white mb-1">Multi-Vendor</p>
                  <p className="carbon-body-02 text-white/70">APC, Eaton, Vertiv, Huawei, Schneider</p>
                </div>
                <div className="p-5 rounded-xl bg-white/[0.05] border border-white/10">
                  <Clock className="w-6 h-6 text-[#78a9ff] mb-3" />
                  <p className="carbon-heading-02 text-white mb-1">Fast Response</p>
                  <p className="carbon-body-02 text-white/70">4-hour target for Enterprise tier</p>
                </div>
                <div className="p-5 rounded-xl bg-white/[0.05] border border-white/10">
                  <Award className="w-6 h-6 text-[#78a9ff] mb-3" />
                  <p className="carbon-heading-02 text-white mb-1">Certified Partner</p>
                  <p className="carbon-body-02 text-white/70">Huawei Enterprise Certified Partner</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Back to top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-[#0f62fe] text-white rounded-full shadow-lg hover:bg-[#0353e9] transition-all"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default MaintenanceSupport;
