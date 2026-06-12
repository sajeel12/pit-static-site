import { useState } from 'react';
import { AlertTriangle, Zap, Activity, Gauge, ChevronDown } from 'lucide-react';

export default function GridContextSection() {
  const [openCard, setOpenCard] = useState<string | null>('Voltage Swings');

  const cards = [
    {
      icon: Zap,
      color: '#0f62fe',
      title: 'Voltage Swings',
      tagline: '±20–30% fluctuations damage hardware that standard AVR cannot protect.',
      problem: [
        'Voltage fluctuations of **±20–30%** are common in major Pakistani industrial zones',
        'Standard AVR and entry-level UPS units **cannot compensate** in time',
        'Result: hardware damage, data corruption, and **premature equipment failure**',
      ],
      solution: [
        'Specify **online double-conversion UPS** with wide-input AVR (±25% tolerance)',
        'Add **transient voltage surge suppression** at the distribution level',
        'Validate every deployment against **simulated grid fluctuations** before handover',
      ],
    },
    {
      icon: Activity,
      color: '#4589ff',
      title: 'Frequency Drift',
      tagline: 'Grid frequency drifts beyond 50Hz tolerance, causing sync failures and shutdowns.',
      problem: [
        'Grid frequency **regularly drifts** outside the nominal 50Hz tolerance band',
        'Entry-level UPS and basic inverters **fail to isolate** sensitive loads',
        'Result: generator sync failures, phase mismatches, and **unplanned shutdowns**',
      ],
      solution: [
        'Deploy three-phase and modular UPS with **digital signal processing**',
        'Maintain **<1ms transfer time** with generator-sync-ready control logic',
        'Test every installation against **simulated frequency drift** scenarios',
      ],
    },
    {
      icon: Gauge,
      color: '#002d9c',
      title: 'Outage Frequency',
      tagline: 'Daily load-shedding exceeds the runtime of standard UPS configurations.',
      problem: [
        'Scheduled load-shedding and unplanned outages are a **daily reality** across Pakistani industrial and commercial sectors',
        'Most standard UPS configurations **lack the runtime** to bridge extended gaps',
        'Entry-level systems have **no intelligence** for generator handoff or load shedding',
      ],
      solution: [
        'We **model actual outage patterns** per location using historical grid data',
        'Right-size battery strings — **Li-ion or VRLA** — matched to your real load profile',
        'Integrate **generator auto-transfer** with seamless handoff logic',
        'Validate runtime under **real-world load profiles** before commissioning',
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#f4f4f4]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-14 md:mb-20">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#da1e28]/10 text-[#da1e28] carbon-label-02 rounded-full mb-4">
            <AlertTriangle className="w-4 h-4" />
            Pakistani Grid Reality
          </span>
          <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
            Solutions Built for Pakistani Grid Conditions
          </h2>
          <p className="carbon-body-02 text-gray-600">
            <strong className="text-[#161616] font-semibold">Standard UPS</strong> is engineered for{' '}
            <strong className="text-[#161616] font-semibold">stable European grids</strong>.
            {' '}<strong className="text-[#161616] font-semibold">Pakistan's infrastructure</strong> demands a{' '}
            <strong className="text-[#161616] font-semibold">different protection architecture</strong>.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {cards.map((card, idx) => {
            const isOpen = openCard === card.title;
            const isLast = idx === cards.length - 1;

            return (
              <div key={card.title} className="relative flex gap-6 md:gap-10">
                {/* Timeline pillar */}
                <div className="flex flex-col items-center flex-shrink-0 w-10 md:w-12">
                  {/* Dot */}
                  <button
                    onClick={() => setOpenCard(isOpen ? null : card.title)}
                    className={`relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#0f62fe] border-[#0f62fe] text-white shadow-lg shadow-[#0f62fe]/25'
                        : 'bg-white border-gray-300 text-gray-500 hover:border-[#0f62fe] hover:text-[#0f62fe]'
                    }`}
                  >
                    <span className="text-sm md:text-base font-bold">{String(idx + 1).padStart(2, '0')}</span>
                  </button>

                  {/* Connecting line */}
                  {!isLast && (
                    <div
                      className={`w-px flex-1 min-h-[2rem] transition-colors duration-300 ${
                        isOpen ? 'bg-[#0f62fe]/30' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>

                {/* Card content */}
                <div className={`flex-1 pb-10 md:pb-14 ${isLast ? '' : ''}`}>
                  <div
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? 'bg-white border-[#0f62fe]/20 shadow-xl shadow-[#0f62fe]/5'
                        : 'bg-white/60 border-transparent hover:bg-white hover:border-gray-200 hover:shadow-md'
                    }`}
                  >
                    {/* Header — always visible */}
                    <button
                      onClick={() => setOpenCard(isOpen ? null : card.title)}
                      className="w-full text-left p-6 md:p-8 flex items-start gap-4 md:gap-5"
                    >
                      <div
                        className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                        style={{ backgroundColor: isOpen ? card.color + '12' : card.color + '08' }}
                      >
                        <card.icon
                          className="w-6 h-6 md:w-7 md:h-7 transition-colors duration-300"
                          style={{ color: card.color }}
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="carbon-heading-02 text-[#161616]">{card.title}</h3>
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 flex-shrink-0 ${
                              isOpen
                                ? 'bg-[#0f62fe] border-[#0f62fe] rotate-180'
                                : 'bg-gray-50 border-gray-200'
                            }`}
                          >
                            <ChevronDown
                              className={`w-5 h-5 transition-colors duration-300 ${
                                isOpen ? 'text-white' : 'text-gray-500'
                              }`}
                            />
                          </div>
                        </div>
                        <p className="carbon-body-02 text-gray-500 leading-relaxed">{card.tagline}</p>
                      </div>
                    </button>

                    {/* Expandable body */}
                    <div
                      className={`grid transition-all duration-500 ease-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-gray-100">
                          <div className="pt-6 md:pt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            {/* Problem */}
                            <div>
                              <div className="flex items-center gap-2 mb-4">
                                <div className="w-2 h-2 rounded-full bg-[#da1e28]" />
                                <span className="carbon-label-01 text-[#da1e28] uppercase tracking-wider">
                                  The Risk
                                </span>
                              </div>
                              <ul className="space-y-3">
                                {card.problem.map((point, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-3 carbon-body-02 text-gray-600"
                                  >
                                    <span className="w-1 h-1 rounded-full bg-[#da1e28]/40 mt-2.5 flex-shrink-0" />
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: point.replace(
                                          /\*\*(.*?)\*\*/g,
                                          '<strong class="text-[#161616] font-semibold">$1</strong>'
                                        ),
                                      }}
                                    />
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Solution */}
                            <div>
                              <div className="flex items-center gap-2 mb-4">
                                <div className="w-2 h-2 rounded-full bg-[#0f62fe]" />
                                <span className="carbon-label-01 text-[#0f62fe] uppercase tracking-wider">
                                  Our Response
                                </span>
                              </div>
                              <ul className="space-y-3">
                                {card.solution.map((point, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-3 carbon-body-02 text-gray-600"
                                  >
                                    <span className="w-1 h-1 rounded-full bg-[#0f62fe]/40 mt-2.5 flex-shrink-0" />
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: point.replace(
                                          /\*\*(.*?)\*\*/g,
                                          '<strong class="text-[#161616] font-semibold">$1</strong>'
                                        ),
                                      }}
                                    />
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-4 md:ml-[3.5rem] md:mt-2 bg-white rounded-2xl border border-gray-200 p-6 md:p-8 flex flex-col md:flex-row items-center text-center md:text-left justify-between gap-5">
          <div>
            <p className="carbon-heading-02 text-[#161616] mb-1">
              Every deployment is grid-tested before handover
            </p>
            <p className="carbon-body-02 text-gray-500">
              Grid-sync testing and fluctuation simulation are mandatory — not optional.
            </p>
          </div>
          <a
            href="mailto:info@perception-it.com?subject=Site%20Assessment%20Request%20-%20Power%20and%20UPS"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f62fe] text-white carbon-heading-02 rounded-xl hover:bg-[#0353e9] transition-colors whitespace-nowrap"
          >
            Request Site Assessment
          </a>
        </div>
      </div>
    </section>
  );
}
