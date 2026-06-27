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
  Activity,
  Bell,
  ShieldCheck,
  AlertTriangle,
  Check,
  ChevronDown,
  Mail,
  Phone,
  MessageCircle,
} from 'lucide-react';
import {
  PAGE_SECTIONS,
  ENVIRONMENTS,
  COMPARISON_TIERS,
  MONITORED_FACTORS,
  HOW_IT_WORKS_STEPS,
  ALERT_CHANNELS,
  SOFTWARE_MODELS,
  SERVICE_OFFERINGS,
  RELATED_SOLUTIONS,
  CONTACT_EMAIL_BODY,
} from './data';
import ResultsSection from './sections/ResultsSection';

export default function Monitoring() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  usePageSEO({
    title: 'Server Room & Data Centre Monitoring | Perception IT',
    description:
      '24/7 environmental monitoring for server rooms and data centres in Pakistan. Temperature, humidity, water leak, power, security and fire monitoring with email, SMS and SNMP alerts.',
    canonicalPath: '/infrastructure/data-centre-services/monitoring',
    ogType: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Monitoring Solutions',
      provider: {
        '@type': 'Organization',
        name: 'Perception IT',
        url: 'https://perception-it.com',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Pakistan',
      },
      serviceType: 'Server Room and Data Centre Monitoring',
      description:
        'Environmental and infrastructure monitoring for critical IT environments, including temperature, humidity, water leak, power, security and fire detection.',
      url: 'https://perception-it.com/#/infrastructure/data-centre-services/monitoring',
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <li className="text-gray-900 font-medium" aria-current="page">Monitoring</li>
            </ol>
          </nav>
        </div>
      </div>

      <StickyAnchorNav items={PAGE_SECTIONS.filter((s) => s.inNav)} defaultActive="environments" />

      <main id="main-content">
        {/* Hero */}
        <section className="relative bg-[#0a1628] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f1d3a] to-[#0a1628]" />
          <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#0f62fe]/5 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-16 md:pt-28 md:pb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f62fe]/10 border border-[#0f62fe]/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0f62fe]" />
              <span className="carbon-label-02 text-[#78a9ff] uppercase tracking-wider">Data Centre Infrastructure</span>
            </div>

            <h1 className="carbon-fluid-display-03 text-white max-w-4xl mb-4">
              Server Room & Data Centre Monitoring
            </h1>

            <p className="carbon-fluid-heading-04 text-white/90 max-w-3xl mb-10">
              Monitoring is your first line of defence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mb-12">
              {[
                { icon: Activity, label: '24/7 Environmental Intelligence', desc: 'Continuous monitoring of temperature, humidity, power and more.' },
                { icon: Bell, label: 'Instant Multi-Channel Alerts', desc: 'Email, SMS, phone calls and SNMP traps when thresholds breach.' },
                { icon: ShieldCheck, label: 'Prevent Downtime', desc: 'Early warning protects equipment and keeps critical systems running.' },
              ].map((item) => (
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
                href={`mailto:info@perception-it.com?subject=Monitoring%20Solutions%20Enquiry&body=${CONTACT_EMAIL_BODY}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0f62fe] text-white carbon-heading-02 rounded-lg hover:bg-[#0353e9] hover:shadow-xl hover:shadow-[#0f62fe]/25 hover:-translate-y-0.5 transition-all"
              >
                Talk to Our Team
              </a>
              <a
                href="#environments"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('environments');
                  if (el) {
                    const pos = el.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({ top: pos - 80, behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/20 text-white carbon-heading-02 rounded-lg hover:bg-white/10 hover:border-white/30 transition-all"
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </section>

        {/* Environments */}
        <section id="environments" className="py-16 md:py-24 bg-[#f4f4f4]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12 md:mb-16">
              <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
                Choose Your Environment
              </span>
              <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
                Find Your Monitoring Tier
              </h2>
              <p className="carbon-body-02 text-gray-600">
                The right monitoring architecture depends on scale, criticality and operational maturity. Compare the three tiers below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {ENVIRONMENTS.map((env) => {
                const isExpanded = expandedCard === env.title;
                return (
                <div
                  key={env.title}
                  className={`group relative bg-white rounded-2xl border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${isExpanded ? 'border-[#0f62fe]/30 shadow-lg' : 'border-gray-200'}`}
                >
                  <div className="h-2 w-full" style={{ backgroundColor: env.color }} />

                  <div className="p-6 sm:p-8">
                    <div className="mb-5">
                      <div className="mb-5">
                        <span
                          className="inline-flex items-center px-2.5 py-1 text-white carbon-label-01 uppercase tracking-wider rounded-full"
                          style={{ backgroundColor: env.color }}
                        >
                          {env.tag}
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: env.color + '12' }}
                        >
                          <env.icon className="w-6 h-6" style={{ color: env.color }} />
                        </div>
                        <div>
                          <h3 className="carbon-heading-02 text-[#161616]">{env.title}</h3>
                          <p className="carbon-helper-text-01 text-gray-500">{env.subtitle}</p>
                          <p className="carbon-label-01 text-[#0f62fe] mt-0.5">{env.qualifier}</p>
                        </div>
                      </div>
                    </div>

                    <hr className="border-gray-100 mb-6" />

                    <p className="carbon-body-02 text-gray-600 mb-6">
                      <span className="font-semibold text-[#161616]">Built for:</span>{' '}
                      {env.builtFor}
                    </p>

                    <div className="space-y-6">
                      <div className="p-4 rounded-xl bg-white border border-gray-200 border-l-4 border-l-[#da1e28]">
                        <div className="flex items-start gap-2 mb-2">
                          <AlertTriangle className="w-4 h-4 text-[#da1e28] mt-0.5 flex-shrink-0" />
                          <p className="carbon-label-02 text-[#da1e28] uppercase tracking-wider">{env.riskHeading}</p>
                        </div>
                        <ul className="space-y-1 pl-6">
                          {env.riskDesc.map((item) => (
                            <li key={item} className="carbon-body-02 text-gray-600 flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-[#da1e28] mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[800px] opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}`}
                      >
                        <div className="pb-2">
                          <div className="py-4">
                            <p className="carbon-body-02 text-[#161616] font-semibold mb-3">What You Get</p>
                            <ul className="space-y-2">
                              {env.whatYouGet.map((item) => (
                                <li key={item} className="carbon-body-02 text-gray-600 flex items-start gap-2">
                                  <div className="w-5 h-5 rounded-full bg-[#24a148]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Check className="w-3 h-3 text-[#24a148]" />
                                  </div>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="p-4 rounded-xl bg-[#f2f9ff] border border-[#aecbfa]">
                            <p className="carbon-body-02 text-[#161616] font-semibold mb-2">Outcome</p>
                            <ul className="space-y-1">
                              {env.outcome.map((item) => (
                                <li key={item} className="carbon-body-02 text-[#161616] flex items-start gap-2">
                                  <div className="w-5 h-5 rounded-full bg-[#0f62fe]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Check className="w-3 h-3 text-[#0f62fe]" />
                                  </div>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setExpandedCard(isExpanded ? null : env.title)}
                      className="inline-flex items-center justify-center w-full mt-6 px-6 py-3 border-2 rounded-lg carbon-heading-02 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                      style={{ borderColor: env.color, color: env.color, backgroundColor: env.color + '08' }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = env.color;
                        (e.currentTarget as HTMLElement).style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = env.color + '08';
                        (e.currentTarget as HTMLElement).style.color = env.color;
                      }}
                    >
                      {isExpanded ? 'Show less' : 'What you get'}
                      <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>
              );
              })}
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-6">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="bg-[#f4f4f4] border-b border-gray-200">
                      <th className="text-left p-4 carbon-label-02 text-gray-500 uppercase tracking-wider">Segment</th>
                      <th className="text-left p-4 carbon-label-02 text-gray-500 uppercase tracking-wider">Rack Count</th>
                      <th className="text-left p-4 carbon-label-02 text-gray-500 uppercase tracking-wider">Complexity</th>
                      <th className="text-left p-4 carbon-label-02 text-gray-500 uppercase tracking-wider">Typical Go-Live</th>
                    </tr>
                  </thead>
                  <tbody className="carbon-body-02 text-gray-600">
                    {COMPARISON_TIERS.map((tier, idx, arr) => (
                      <tr key={tier.segment} className={idx === arr.length - 1 ? '' : 'border-b border-gray-100'}>
                        <td className="p-4 font-semibold text-[#161616]">{tier.segment}</td>
                        <td className="p-4">{tier.racks}</td>
                        <td className="p-4">{tier.complexity}</td>
                        <td className="p-4">{tier.goLive}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <p className="carbon-heading-02 text-[#161616] mb-1">Not sure which path fits your site?</p>
                  <p className="carbon-body-02 text-gray-500">
                    Tell us about your racks, locations and criticality and we will recommend the right monitoring scope.
                  </p>
                </div>
                <a
                  href={`mailto:info@perception-it.com?subject=Monitoring%20Environment%20Assessment&body=${CONTACT_EMAIL_BODY}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0f62fe] text-white carbon-heading-02 rounded-lg hover:bg-[#0353e9] transition-colors flex-shrink-0"
                >
                  Get Expert Guidance
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What We Monitor */}
        <section id="what" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12 md:mb-16">
              <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
                What We Monitor
              </span>
              <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
                Comprehensive Environmental & Infrastructure Monitoring
              </h2>
              <p className="carbon-body-02 text-gray-600">
                We monitor the conditions that matter most to critical IT infrastructure, from basic environmental sensors to advanced efficiency metrics.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {MONITORED_FACTORS.map((factor) => (
                <div
                  key={factor.title}
                  className="group bg-[#f4f4f4] p-5 sm:p-6 rounded-xl border border-gray-200 hover:border-[#0f62fe]/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0f62fe]/10 flex items-center justify-center mb-3">
                    <factor.icon className="w-5 h-5 text-[#0f62fe]" />
                  </div>
                  <h3 className="carbon-heading-02 text-[#161616] mb-2">{factor.title}</h3>
                  <ul className="space-y-1">
                    {factor.items.map((item) => (
                      <li key={item} className="carbon-helper-text-01 text-gray-500 flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-gray-400 mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how" className="py-16 md:py-24 bg-[#0f1d3a]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12 md:mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/15 rounded-full mb-4">
                <Activity className="w-4 h-4 text-[#78a9ff]" />
                <span className="carbon-label-02 text-white/90 uppercase tracking-wider">How It Works</span>
              </span>
              <h2 className="carbon-fluid-heading-05 text-white mb-4">
                From Sensor to Response
              </h2>
              <p className="carbon-body-02 text-white/80">
                A clear, repeatable process that turns raw sensor data into actionable intelligence and fast incident response.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {HOW_IT_WORKS_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#0f62fe]/30 hover:bg-white/[0.05] transition-all duration-300"
                >
                  <span className="carbon-label-02 text-[#78a9ff] uppercase tracking-wider block mb-3">Step {step.step}</span>
                  <h3 className="carbon-heading-02 text-white mb-3">{step.title}</h3>
                  <p className="carbon-body-02 text-white/70">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Alerts */}
        <section id="alerts" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
                  Alert Options
                </span>
                <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
                  Get Notified Your Way
                </h2>
                <p className="carbon-body-02 text-gray-600 mb-6">
                  Configure alerts through the channels your team already uses, so critical issues reach the right person at the right time.
                </p>

                <div className="rounded-xl bg-white border border-gray-200 shadow-sm overflow-hidden">
                  <div className="flex items-start gap-4 p-5">
                    <div className="w-10 h-10 rounded-full bg-[#fff5f5] flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-5 h-5 text-[#da1e28]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="inline-flex items-center px-2 py-0.5 bg-[#da1e28] text-white carbon-label-01 uppercase tracking-wider rounded">
                          Critical
                        </span>
                        <span className="carbon-helper-text-01 text-gray-400">14:32</span>
                      </div>
                      <p className="carbon-heading-02 text-[#161616] mb-1">
                        Server Room Temperature 32°C
                      </p>
                      <p className="carbon-body-02 text-gray-600 mb-3">
                        Threshold 25°C exceeded. Rack 5, Sensor T2.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-2 py-1 bg-[#f4f4f4] text-gray-600 carbon-helper-text-01 rounded">Rack 5</span>
                        <span className="px-2 py-1 bg-[#f4f4f4] text-gray-600 carbon-helper-text-01 rounded">Sensor T2</span>
                        <span className="px-2 py-1 bg-[#f4f4f4] text-gray-600 carbon-helper-text-01 rounded">Server Room</span>
                      </div>
                      <p className="carbon-body-02 text-[#da1e28] font-medium">
                        Immediate action required.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-2 px-5 py-3 bg-[#f4f4f4] border-t border-gray-100">
                    <button className="px-3 py-1.5 carbon-label-01 text-gray-500 hover:text-[#161616] transition-colors">
                      Dismiss
                    </button>
                    <button className="px-3 py-1.5 bg-[#0f62fe] text-white carbon-label-01 rounded hover:bg-[#0353e9] transition-colors">
                      Acknowledge
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ALERT_CHANNELS.map((channel) => (
                  <div
                    key={channel.label}
                    className="flex items-start gap-3 p-4 bg-[#f4f4f4] rounded-xl border border-gray-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#0f62fe]/10 flex items-center justify-center flex-shrink-0">
                      <channel.icon className="w-5 h-5 text-[#0f62fe]" />
                    </div>
                    <div>
                      <p className="carbon-heading-02 text-[#161616] mb-0.5">{channel.label}</p>
                      <p className="carbon-helper-text-01 text-gray-500">{channel.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Software */}
        <section id="software" className="py-16 md:py-24 bg-[#f4f4f4]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12 md:mb-16">
              <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
                Software & Management
              </span>
              <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
                Deploy How You Want
              </h2>
              <p className="carbon-body-02 text-gray-600">
                Choose the deployment model that matches your security, connectivity and operational requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {SOFTWARE_MODELS.map((model) => (
                <div
                  key={model.title}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#0f62fe]/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0f62fe]/10 flex items-center justify-center mb-4">
                    <model.icon className="w-6 h-6 text-[#0f62fe]" />
                  </div>
                  <h3 className="carbon-heading-02 text-[#161616] mb-2">{model.title}</h3>
                  <p className="carbon-body-02 text-gray-500">{model.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12 md:mb-16">
              <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
                Services
              </span>
              <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
                End-to-End Monitoring Services
              </h2>
              <p className="carbon-body-02 text-gray-600">
                We do not just supply sensors. We design, install, calibrate, train and manage the complete monitoring lifecycle.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICE_OFFERINGS.map((service) => (
                <div
                  key={service.title}
                  className="group bg-[#f4f4f4] p-5 sm:p-6 rounded-xl border border-gray-200 hover:border-[#0f62fe]/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0f62fe]/10 flex items-center justify-center mb-3">
                    <service.icon className="w-5 h-5 text-[#0f62fe]" />
                  </div>
                  <h3 className="carbon-heading-02 text-[#161616] mb-2">{service.title}</h3>
                  <p className="carbon-body-02 text-gray-500">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <ResultsSection />

        {/* Related Solutions */}
        <section id="related" className="py-16 md:py-24 bg-[#f4f4f4]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-10">
              <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
                Related Solutions
              </span>
              <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
                Complete Your Infrastructure
              </h2>
              <p className="carbon-body-02 text-gray-600">
                Monitoring works best when integrated with power, cooling and housing under one architecture.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {RELATED_SOLUTIONS.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-[#0f62fe]/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0f62fe]/10 flex items-center justify-center mb-3 group-hover:bg-[#0f62fe] transition-colors">
                    <item.icon className="w-5 h-5 text-[#0f62fe] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="carbon-heading-02 text-[#161616] mb-2">{item.title}</h3>
                  <p className="carbon-body-02 text-gray-500 mb-4">{item.desc}</p>
                  <div className="flex items-center gap-2 text-[#0f62fe] carbon-label-02">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="py-16 md:py-24 bg-[#0f62fe]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h2 className="carbon-fluid-heading-05 text-white mb-4">
                  Ready to Protect Your Environment?
                </h2>
                <p className="carbon-body-02 text-white/80 mb-8">
                  Tell us about your site and we will recommend the right sensors, software and alert strategy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`mailto:info@perception-it.com?subject=Monitoring%20Solutions%20Consultation&body=${CONTACT_EMAIL_BODY}`}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0f62fe] carbon-heading-02 rounded-lg hover:bg-white/90 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5 transition-all"
                  >
                    <Mail className="w-5 h-5" />
                    Request Consultation
                  </a>
                  <a
                    href="tel:+920000000000"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white carbon-heading-02 rounded-lg hover:bg-white/20 transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    Call Our Team
                  </a>
                </div>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8">
                <h3 className="carbon-heading-02 text-white mb-4 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Not Sure Where to Begin?
                </h3>
                <p className="carbon-body-02 text-white/80 mb-6">
                  Share a few details about your environment and we will respond with a tailored monitoring recommendation within one business day.
                </p>
                <ul className="space-y-3 carbon-body-02 text-white/90">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    Free site survey for qualifying projects
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    Vendor-neutral sensor selection
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    On-premise, cloud or hybrid deployment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 left-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-[#0f62fe] text-white shadow-lg transition-all duration-300 hover:bg-[#0353e9] ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <Footer />
    </div>
  );
}
