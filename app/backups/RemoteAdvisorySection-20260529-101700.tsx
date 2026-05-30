import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import ArrowRight from '@carbon/icons-react/es/ArrowRight';
import ChevronDown from '@carbon/icons-react/es/ChevronDown';
import CheckmarkFilled from '@carbon/icons-react/es/CheckmarkFilled';
import TemperatureHot from '@carbon/icons-react/es/TemperatureHot';
import Settings from '@carbon/icons-react/es/Settings';
import Meter from '@carbon/icons-react/es/Meter';
import Certificate from '@carbon/icons-react/es/Certificate';
import Dashboard from '@carbon/icons-react/es/Dashboard';
import Windy from '@carbon/icons-react/es/Windy';
import ChartLine from '@carbon/icons-react/es/ChartLine';

export default function RemoteAdvisorySection() {

  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const isMobile = useIsMobile();

  return (

    <section id="international" className="relative py-20 bg-[#0F172A] carbon-font text-white overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="mb-8 carbon-font">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full mb-4 md:mb-6">
            <span className="w-5 h-5 rounded-full bg-[#0f62fe] flex items-center justify-center text-[10px] font-bold text-white">05</span>
            <span className="carbon-label-02 text-white/90 uppercase tracking-wider">International Advisory</span>
          </div>
          <h2 className="carbon-fluid-heading-05 text-white mb-4 md:mb-6">Offshore Technical Consultation</h2>
          <p className="carbon-body-02 text-gray-400 max-w-3xl">
            Strategic thermal guidance for offshore data centres, delivered entirely remotely. We review your designs, specifications, and airflow plans, then provide actionable recommendations validated for extreme heat, humidity, and operational stress.
          </p>
        </div>

        {/* Who It's For | 3 cards */}

        <div className="mb-12 pt-4 border-t border-white/10">
          <p className="carbon-label-02 text-white uppercase tracking-wider mb-8">Who It&apos;s For</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {[

              { icon: ChartLine, title: 'Pre-Sales & Planning Teams', desc: 'Need thermal direction before procurement or site mobilisation. Validate feasibility before budget commitment.' },

              { icon: TemperatureHot, title: 'International Operators', desc: 'Designing for emerging-market or extreme climates where local thermal expertise is unavailable.' },

              { icon: Settings, title: 'Architects & Engineers', desc: 'Validating cooling strategy during design or refurbishment phases. Independent engineering sign-off.' },

            ].map((card) => (

              <div key={card.title} className="relative p-6 bg-[#1e293b] border border-white/10 rounded-xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-white/10 to-white/5" />
                <div className="w-9 h-9 rounded-lg bg-[#0f62fe]/20 flex items-center justify-center mb-3">
                  <card.icon className="w-4 h-4 text-[#78a9ff]" />
                </div>
                <p className="carbon-heading-02 text-[#78a9ff] mb-1">{card.title}</p>
                <p className="carbon-body-02 text-slate-400">{card.desc}</p>
              </div>

            ))}

          </div>

        </div>

        {/* What You Receive | 4 cards with top accent */}

        <div className="mb-12 pt-4 border-t border-white/10">
          <p className="carbon-label-02 text-white uppercase tracking-wider mb-8">What You Receive</p>

          <div className="group grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {[

              { num: '01', icon: Windy, title: 'CFD & Airflow Review', bullets: ['Remote CFD modelling and airflow analysis from your supplied drawings', 'Equipment placement recommendations', 'Containment strategy comparison', 'What-if scenario simulation'] },

              { num: '02', icon: TemperatureHot, title: 'Climate Risk Assessment', bullets: ['Thermal validation for 45°C+ ambient conditions', 'Monsoon humidity derating using Pakistan-validated data', 'Climate stress scenario modelling'] },

              { num: '03', icon: Certificate, title: 'Vendor Spec Review', bullets: ['Independent validation of equipment specs', 'Redundancy verification against your load profile', 'Manufacturer claims benchmarking'] },

              { num: '04', icon: Dashboard, title: 'Implementation Roadmap', bullets: ['Phased plan with prioritised actions', 'Clear responsibility boundaries', 'Physical validation requirements'] },

            ].map((item) => (

              <div
                key={item.num}
                onClick={() => isMobile && setExpandedCard(expandedCard === item.num ? null : item.num)}
                className={`relative bg-[#1e293b] border rounded-xl overflow-hidden flex flex-col hover:border-white/20 transition-colors duration-300 cursor-pointer sm:cursor-default ${expandedCard === item.num ? 'border-[#78a9ff]' : 'border-white/10'}`}
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-white/10 to-white/5" />
                <div className="p-5 flex-1 flex flex-col">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 bg-[#0f62fe]/20`}>
                    <item.icon className={`w-4 h-4 text-[#78a9ff]`} />
                  </div>
                  <p className="carbon-heading-02 text-white mb-2 sm:group-hover:text-[#78a9ff] transition-colors duration-300">{item.title}</p>
                  {isMobile && (
                    <p className="carbon-label-01 text-[#78a9ff] mb-2 flex items-center gap-1">
                      {expandedCard === item.num ? 'Tap to collapse' : 'Tap to expand'}
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${expandedCard === item.num ? 'rotate-180' : ''}`} />
                    </p>
                  )}
                  <ul className={`carbon-body-02 text-slate-400 overflow-hidden transition-all duration-300 list-disc list-outside pl-4 space-y-1 ${isMobile ? (expandedCard === item.num ? 'max-h-60 opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0') : 'max-h-0 opacity-0 mt-0 group-hover:max-h-60 group-hover:opacity-100 group-hover:mt-3'}`}>
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Save on Time and Costs */}

        <div className="mb-12 pt-4 border-t border-white/10">
          <p className="carbon-label-02 text-white uppercase tracking-wider mb-8">Save on Time and Costs</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            {[

              { icon: ArrowRight, title: 'Accelerate Timelines', desc: 'Begin strategy and spec review immediately, without travel logistics or visa delays.', rotate: true },

              { icon: Meter, title: 'Reduce Advisory Overhead', desc: 'Expert engineering without mobilisation fees, daily allowances, or travel costs.' },

              { icon: CheckmarkFilled, title: 'De-risk Procurement', desc: 'Validate thermal design and vendor claims before capital commitment or contract signature.' },

            ].map((card) => (

              <div key={card.title} className="relative p-6 bg-[#1e293b] border border-white/10 rounded-xl overflow-hidden">

                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-white/10 to-white/5" />

                <div className="w-9 h-9 rounded-lg bg-[#0f62fe]/20 flex items-center justify-center mb-3">

                  <card.icon className={`w-4 h-4 text-[#78a9ff] ${card.rotate ? 'rotate-[-45deg]' : ''}`} />

                </div>

                <p className="carbon-heading-02 text-[#78a9ff] mb-1">{card.title}</p>

                <p className="carbon-body-02 text-slate-400">{card.desc}</p>

              </div>

            ))}

          </div>

        </div>

        {/* How It Works + Scope | Accordion */}
        <div className="my-20">
          <div className="bg-[#0f172a] border border-white/10 rounded-xl overflow-hidden">
          {[
            {
              title: 'How It Works',
              meta: '',
              content: (
                <div className="pb-2">
                  <div className="grid gap-3">
                    {[
                      { step: '01', title: 'Data Submission', desc: 'Room layouts, equipment schedules, and environmental parameters via secure portal.' },
                      { step: '02', title: 'Remote Analysis', desc: 'CFD modelling, thermal risk assessment, and vendor specification validation.' },
                      { step: '03', title: 'Roadmap Delivery', desc: 'Practical thermal strategy with prioritised recommendations and clear implementation boundaries.' },
                    ].map((s) => (
                      <div key={s.step} className="flex items-start gap-4 p-4 bg-[#1e293b] border border-white/10 rounded-lg">
                        <span className="w-8 h-8 rounded-lg bg-[#0f62fe]/20 flex items-center justify-center flex-shrink-0 carbon-label-01 text-[#78a9ff] mt-0.5">{s.step}</span>
                        <div>
                          <p className="carbon-heading-02 text-[#78a9ff] mb-1">{s.title}</p>
                          <p className="carbon-body-01 text-slate-400">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2 px-4 py-3 bg-[#1e293b] border border-white/10 rounded-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#78a9ff]" />
                    <p className="carbon-helper-text-01 text-slate-400">Typical turnaround: <span className="text-slate-200">10–15 business days</span> from data receipt.</p>
                  </div>
                </div>
              ),
            },
            {
              title: 'Scope & Delivery Boundaries',
              meta: '',
              content: (
                <div className="pb-2">
                  <p className="carbon-body-01 text-slate-400 mb-4">This engagement delivers strategic advisory only.</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="p-4 bg-[#1e293b] border border-white/10 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#78a9ff]" />
                        <p className="carbon-label-01 text-[#78a9ff] uppercase tracking-wider">Included</p>
                      </div>
                      <ul className="space-y-2.5 carbon-body-01 text-slate-300">
                        {['Methodology validation', 'Design logic review', 'Specification alignment', 'Risk modelling'].map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <CheckmarkFilled className="w-4 h-4 text-[#78a9ff] flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 bg-[#1e293b] border border-white/10 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                        <p className="carbon-label-01 text-slate-400 uppercase tracking-wider">Not Included for offshore clients</p>
                      </div>
                      <ul className="space-y-2.5 carbon-body-01 text-slate-400">
                        {['Physical site surveys', 'Instrumented testing', 'On-site commissioning', 'Final handover sign-off', 'Verification of client-supplied data accuracy'].map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <span className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="w-2.5 h-0.5 bg-slate-600 rounded-full" />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 flex items-start gap-3 px-4 py-3 bg-[#1e293b] border border-white/10 rounded-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-1.5 flex-shrink-0" />
                    <p className="carbon-body-01 text-slate-400">Physical validation, commissioning, and managed services are available separately for Pakistan-based deployments.</p>
                  </div>
                </div>
              ),
            },
          ].map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={item.title} className="border-b border-white/10 last:border-b-0">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-white/[0.03] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-1 h-4 bg-[#0f62fe] rounded-full" />
                    <span className="carbon-label-02 text-white uppercase tracking-wider">{item.title}</span>
                    {item.meta && <span className="hidden sm:inline carbon-label-01 text-slate-500">{item.meta}</span>}
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5">
                      {item.content}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          </div>

        </div>

        {/* CTA */}

        <div className="rounded-xl bg-gradient-to-r from-[#0f62fe] to-[#4589ff] p-8 sm:p-10 md:flex md:items-center md:justify-between gap-6 text-center md:text-left">

          <div className="max-w-xl">

            <h3 className="carbon-heading-02 text-white mb-2">Ready to review your thermal strategy?</h3>

            <p className="carbon-body-02 text-white/80">Request a Remote Advisory Consultation and receive a scoping call within 48 hours.</p>

          </div>

          <a href="mailto:contact@perception-it.com?subject=Remote%20Advisory%20Consultation%20Request" className="mt-6 md:mt-0 inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#0f62fe] carbon-body-02 hover:bg-slate-100 transition-colors rounded-lg flex-shrink-0">

            Request Remote Advisory Consultation

          </a>

        </div>

      </div>

    </section>

  );

};

