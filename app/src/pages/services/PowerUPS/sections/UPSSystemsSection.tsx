import { useState } from 'react';
import { ArrowRight, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { UPS_SYSTEMS } from '../data';

export default function UPSSystemsSection() {
  const [drawerOpen, setDrawerOpen] = useState<string | null>(null);

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

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {UPS_SYSTEMS.map((system) => {
            const isOpen = drawerOpen === system.title;
            return (
              <div
                key={system.title}
                className="group relative bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Top accent line */}
                <div className="h-1.5 w-full rounded-t-xl" style={{ backgroundColor: system.color }} />

                <div className="p-6 sm:p-8">
                  {/* Badge + Icon row */}
                  <div className="flex justify-between items-start mb-4">
                    <system.icon className="w-8 h-8" style={{ color: system.color }} />
                    <span
                      className="inline-flex items-center px-2 py-0.5 text-white carbon-label-01 uppercase tracking-wider rounded-full"
                      style={{ backgroundColor: system.color }}
                    >
                      {system.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="carbon-heading-02 text-[#161616] mb-3">{system.title}</h3>

                  {/* Description */}
                  <p className="carbon-body-02 text-gray-600 mb-5">{system.desc}</p>

                  {/* Capacity / Range Block */}
                  <div className="mb-5 p-4 rounded-lg border" style={{ backgroundColor: system.color + '08', borderColor: system.color + '18' }}>
                    <p className="carbon-label-02 text-gray-500 uppercase mb-1">Capacity Range</p>
                    <p className="carbon-heading-02 text-gray-900">{system.specs[0]}</p>
                    <p className="carbon-body-short-01 text-gray-500 mt-1.5">
                      {system.specs.slice(1).join(' · ')}
                    </p>
                  </div>

                  {/* Best For */}
                  <div className="mb-5 p-4 rounded-lg border-l-[3px]" style={{ backgroundColor: system.color + '08', borderLeftColor: system.color }}>
                    <span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-900 rounded-lg carbon-label-01 mb-2">Best For</span>
                    <p className="carbon-body-02 text-gray-600">
                      {system.title === 'Single Phase' && 'Small offices, workstations, VoIP systems, and edge network racks.'}
                      {system.title === 'Three Phase UPS' && 'Enterprise data centres, manufacturing floors, and mission-critical infrastructure.'}
                      {system.title === 'Modular UPS' && 'Growing data centres, phased expansions, and CapEx-conscious organisations.'}
                      {system.title === 'Rackmount UPS' && 'Edge computing, network closets, and space-constrained server rooms.'}
                      {system.title === 'UPS Sizes' && 'Organisations unsure of load requirements or planning future growth.'}
                      {system.title === 'UPS Accessories' && 'Existing UPS owners needing extended runtime or remote management.'}
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

                  {/* Related Services Drawer */}
                  <div className="mt-6 pt-5 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {system.links.slice(0, 2).map((link) => (
                        <span
                          key={link}
                          className="inline-flex items-center px-3 py-1.5 bg-white rounded-md border text-xs font-medium text-gray-700"
                          style={{ borderColor: system.color + '25' }}
                        >
                          {link}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setDrawerOpen(isOpen ? null : system.title)}
                      className="w-full flex items-center justify-center gap-2 bg-white border text-gray-900 carbon-body-02 font-medium rounded-lg py-3 hover:bg-gray-50 transition-colors"
                      style={{ borderColor: system.color + '40' }}
                    >
                      {isOpen ? 'Hide related services' : 'View related services'}
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {isOpen && (
                      <div className="mt-4 grid grid-cols-1 gap-2 animate-fade-in">
                        {system.links.map((link) => (
                          <div key={link} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                            <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: system.color }} />
                            <span className="carbon-body-02 text-gray-700">{link}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
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
