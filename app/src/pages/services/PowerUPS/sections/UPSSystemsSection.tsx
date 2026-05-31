import { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { UPS_SYSTEMS } from '../data';

export default function UPSSystemsSection() {
  const [expanded, setExpanded] = useState<string | null>(null);

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
          <p className="carbon-body-02 text-gray-600">
            From single-phase office protection to 800kVA three-phase enterprise redundancy.
            Every system includes load profiling, runtime modeling, and growth forecasting.
          </p>
        </div>

        {/* Expandable Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {UPS_SYSTEMS.map((system) => {
            const isOpen = expanded === system.title;
            return (
              <div
                key={system.title}
                className={`group relative bg-white rounded-xl border transition-all duration-300 ${
                  isOpen ? 'border-[#0f62fe]/30 shadow-lg' : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
              >
                {/* Top accent line */}
                <div className="h-1.5 w-full rounded-t-xl" style={{ backgroundColor: system.color }} />

                <div className="p-6 sm:p-8">
                  {/* Card header */}
                  <div className="flex justify-between items-start mb-4">
                    <system.icon className="w-8 h-8" style={{ color: system.color }} />
                    <span
                      className="inline-flex items-center px-2 py-0.5 text-white carbon-label-01 uppercase tracking-wider rounded-full"
                      style={{ backgroundColor: system.color }}
                    >
                      {system.tag}
                    </span>
                  </div>

                  <h3 className="carbon-heading-02 text-[#161616] mb-3">{system.title}</h3>
                  <p className="carbon-body-02 text-gray-600 mb-4">{system.desc}</p>

                  {/* Expand toggle */}
                  <button
                    onClick={() => setExpanded(isOpen ? null : system.title)}
                    className="inline-flex items-center gap-2 carbon-label-02 text-[#0f62fe] hover:text-[#0353e9] transition-colors"
                  >
                    {isOpen ? 'Hide specs' : 'Show specs'}
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {/* Expanded content */}
                  {isOpen && (
                    <div className="mt-5 pt-5 border-t border-gray-100 animate-fade-in">
                      <p className="carbon-label-02 uppercase tracking-wider text-gray-500 mb-3">
                        Technical Specs
                      </p>
                      <ul className="space-y-2 mb-5">
                        {system.specs.map((spec) => (
                          <li key={spec} className="flex items-center gap-2 carbon-body-02 text-gray-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0f62fe]" />
                            {spec}
                          </li>
                        ))}
                      </ul>

                      <p className="carbon-label-02 uppercase tracking-wider text-gray-500 mb-2">
                        Related Services
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {system.links.map((link) => (
                          <span
                            key={link}
                            className="carbon-label-01 text-[#0f62fe] bg-[#0f62fe]/5 px-2 py-1 rounded"
                          >
                            {link}
                          </span>
                        ))}
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
              Most mid-size data centres start with Three Phase UPS at 20–40% headroom. We can profile your exact load in a 30-minute call.
            </p>
          </div>
          <a
            href="#/contact"
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
