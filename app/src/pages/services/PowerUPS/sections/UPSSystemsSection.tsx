import { useState } from 'react';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';
import { UPS_SYSTEMS } from '../data';

export default function UPSSystemsSection() {
  const [openCard, setOpenCard] = useState<string | null>(null);

  return (
    <section id="systems" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Hero Banner Header */}
        <div className="relative rounded-2xl overflow-hidden mb-12 md:mb-16 bg-gradient-to-br from-[#161616] to-[#0f172a]">
          <div className="pt-10 lg:pt-12 pb-10 px-8 lg:px-12 max-w-2xl lg:max-w-3xl">
            {/* Label pill */}
            <div className="inline-flex items-center px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full mb-4 md:mb-6">
              <span className="carbon-label-02 text-white/90 uppercase tracking-wider">
                UPS Systems
              </span>
            </div>

            {/* Bold heading with colon emphasis */}
            <h2 className="carbon-fluid-heading-05 text-white mb-4 md:mb-6 leading-[1.4]">
              Six systems. One standard: <span className="block">Right-sized for your load profile.</span>
            </h2>

            {/* Bullet points */}
            <ul className="space-y-1 carbon-body-02 text-white/75">
              <li className="flex items-start gap-2">
                <span className="text-white/50 flex-shrink-0 mt-1.5 text-[10px]">●</span>
                <span>Single-phase to 10kVA for offices and edge racks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/50 flex-shrink-0 mt-1.5 text-[10px]">●</span>
                <span>Three-phase to 800kVA for enterprise and industrial</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {UPS_SYSTEMS.map((system) => {
            const isOpen = openCard === system.title;
            return (
              <div
                key={system.title}
                className={`group relative bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[#0f62fe]/30 shadow-xl'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {/* Top accent bar */}
                <div className="h-1.5 w-full" style={{ backgroundColor: system.color }} />

                <div className="p-6 sm:p-8">
                  {/* Icon + Tag row */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: system.color + '12' }}
                    >
                      <system.icon className="w-6 h-6" style={{ color: system.color }} />
                    </div>
                    <span
                      className="inline-flex items-center px-2.5 py-1 text-white text-[11px] font-semibold uppercase tracking-wider rounded-full"
                      style={{ backgroundColor: system.color }}
                    >
                      {system.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="carbon-heading-02 text-[#161616] mb-2">{system.title}</h3>

                  {/* One-line summary */}
                  <p className="carbon-body-02 text-gray-600 mb-6">{system.desc[0]}</p>

                  {/* Expand toggle — full-width outlined button */}
                  <button
                    onClick={() => setOpenCard(isOpen ? null : system.title)}
                    className={`w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border-2 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${
                      isOpen
                        ? 'border-[#0f62fe] text-[#0f62fe] bg-[#0f62fe08]'
                        : 'border-gray-300 text-gray-500 hover:border-gray-400 hover:text-gray-700'
                    }`}
                  >
                    {isOpen ? 'Show less' : 'View details'}
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
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

                      {/* Capacity Range — prominent highlight */}
                      <div className="mb-5 p-5 rounded-xl border" style={{ backgroundColor: system.color + '06', borderColor: system.color + '18' }}>
                        <p className="carbon-label-02 text-gray-400 uppercase tracking-wider mb-2">Capacity Range</p>
                        <p className="carbon-fluid-heading-04 text-[#161616] mb-4">{system.specs[0]}</p>
                        <ul className="space-y-2">
                          {system.specs.slice(1).map((spec) => (
                            <li key={spec} className="flex items-start gap-2 carbon-body-02 text-gray-600">
                              <Check className="w-4 h-4 text-[#24a148] flex-shrink-0 mt-0.5" />
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Best For */}
                      <div className="pt-5 border-t border-gray-100">
                        <p className="carbon-label-02 text-gray-400 uppercase tracking-wider mb-2">Best For</p>
                        <p className="carbon-body-02 text-gray-600">
                          {system.title === 'Single Phase' && 'Small offices · Workstations · VoIP systems · Edge network racks'}
                          {system.title === 'Three Phase UPS' && 'Enterprise data centres · Manufacturing floors · Mission-critical infrastructure'}
                          {system.title === 'Modular UPS' && 'Growing data centres · Phased expansions · CapEx-conscious organisations'}
                          {system.title === 'Rackmount UPS' && 'Edge computing · Network closets · Space-constrained server rooms'}
                          {system.title === 'UPS Sizes' && 'Unsure of load requirements · Planning future growth · Avoiding over-provisioning'}
                          {system.title === 'UPS Accessories' && 'Extended runtime needs · Remote management · Safe servicing workflows'}
                        </p>
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
            href="mailto:info@perception-it.com?subject=Get%20Load%20Assessment%20-%20Power%20and%20UPS"
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
