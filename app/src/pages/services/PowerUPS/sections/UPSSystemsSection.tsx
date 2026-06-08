import { useState } from 'react';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';
import { UPS_SYSTEMS } from '../data';

export default function UPSSystemsSection() {
  const [openCard, setOpenCard] = useState<string | null>(null);

  return (
    <section id="systems" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
            UPS Systems
          </span>
          <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
            Right-Sized Power Resilience
          </h2>
          <p className="carbon-body-02 text-gray-600 mb-2">
            From single-phase office protection to 800kVA three-phase enterprise redundancy.
          </p>
          <p className="carbon-body-02 text-gray-600">
            Systems include load profiling, runtime modelling, and growth forecasting where applicable.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {UPS_SYSTEMS.map((system) => {
            const isOpen = openCard === system.title;
            return (
              <div
                key={system.title}
                className={`group relative rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-[#0f62fe]/30 shadow-lg' : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
              >
                {/* Left color bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: system.color }} />

                <div className="p-6 sm:p-8 pl-7">
                  {/* Tag pill — top right */}
                  <div className="flex justify-end mb-3">
                    <span
                      className="inline-flex items-center px-2.5 py-1 text-white text-[11px] font-semibold uppercase tracking-wider rounded-full"
                      style={{ backgroundColor: system.color }}
                    >
                      {system.tag}
                    </span>
                  </div>

                  {/* Icon + Title row */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-lg"
                      style={{ backgroundColor: system.color + '12' }}
                    >
                      <system.icon className="w-5 h-5" style={{ color: system.color }} />
                    </div>
                    <h3 className="carbon-heading-02 text-[#161616]">{system.title}</h3>
                  </div>

                  {/* One-line summary */}
                  <p className="carbon-body-02 text-gray-600 mb-5">{system.desc[0]}</p>

                  {/* Expand toggle — pill button */}
                  <button
                    onClick={() => setOpenCard(isOpen ? null : system.title)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 hover:shadow-sm"
                    style={{
                      borderColor: isOpen ? '#0f62fe' : system.color + '40',
                      color: isOpen ? '#0f62fe' : system.color,
                      backgroundColor: isOpen ? '#0f62fe08' : system.color + '06',
                    }}
                  >
                    {isOpen ? 'Show less' : 'View details'}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Expanded content */}
                  {isOpen && (
                    <div className="animate-fade-in">
                      {/* Remaining benefit bullets */}
                      <ul className="space-y-1.5 mb-5 pt-4 border-t border-gray-100">
                        {system.desc.slice(1).map((point) => (
                          <li key={point} className="flex items-start gap-2 carbon-body-02 text-gray-600">
                            <span className="w-1 h-1 rounded-full bg-[#0f62fe] mt-2 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>

                      {/* Capacity / Range Block */}
                      <div className="mb-5 p-4 rounded-lg border" style={{ backgroundColor: system.color + '08', borderColor: system.color + '18' }}>
                        <p className="carbon-label-02 text-gray-500 uppercase mb-1">Capacity Range</p>
                        <p className="carbon-heading-02 text-gray-900">{system.specs[0]}</p>
                        <ul className="mt-2 space-y-1">
                          {system.specs.slice(1).map((spec) => (
                            <li key={spec} className="flex items-start gap-2 carbon-body-short-01 text-gray-500">
                              <span className="w-1 h-1 rounded-full bg-gray-400 mt-1.5 flex-shrink-0" />
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Best For */}
                      <div className="mb-5 p-4 rounded-lg border-l-[3px]" style={{ backgroundColor: system.color + '08', borderLeftColor: system.color }}>
                        <span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-900 rounded-lg carbon-label-01 mb-2">Best For</span>
                        <p className="carbon-body-02 text-gray-600">
                          {system.title === 'Single Phase' && 'Small offices · Workstations · VoIP systems · Edge network racks'}
                          {system.title === 'Three Phase UPS' && 'Enterprise data centres · Manufacturing floors · Mission-critical infrastructure'}
                          {system.title === 'Modular UPS' && 'Growing data centres · Phased expansions · CapEx-conscious organisations'}
                          {system.title === 'Rackmount UPS' && 'Edge computing · Network closets · Space-constrained server rooms'}
                          {system.title === 'UPS Sizes' && 'Unsure of load requirements · Planning future growth · Avoiding over-provisioning'}
                          {system.title === 'UPS Accessories' && 'Extended runtime needs · Remote management · Safe servicing workflows'}
                        </p>
                      </div>

                      {/* Key Deliverables */}
                      <div className="pt-5 border-t border-gray-100">
                        <p className="carbon-label-02 text-gray-500 uppercase mb-3">Key Deliverables</p>
                        <div className="space-y-3">
                          {system.specs.map((spec) => (
                            <div key={spec} className="flex items-start gap-3">
                              <Check className="w-4 h-4 text-[#24a148] flex-shrink-0 mt-0.5" />
                              <span className="carbon-body-02 text-gray-700">{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Recommendation CTA */}
        <div className="bg-gradient-to-r from-[#0f62fe] to-[#4589ff] rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="carbon-heading-02 text-white mb-2">Not sure which UPS fits your load?</h3>
            <p className="carbon-body-02 text-white/80">
              Most mid-size data centres start with Three Phase UPS with appropriate headroom. We can profile your exact load in a brief consultation.
            </p>
          </div>
          <a
            href="mailto:contact@perception-it.com?subject=Get%20Load%20Assessment%20-%20Power%20and%20UPS"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0f62fe] carbon-heading-02 rounded-lg hover:bg-white/90 hover:shadow-lg transition-all whitespace-nowrap"
          >
            Get Load Assessment
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
