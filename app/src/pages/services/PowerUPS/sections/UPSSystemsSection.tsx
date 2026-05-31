import { useState } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { UPS_SYSTEMS } from '../data';

export default function UPSSystemsSection() {
  const [flipped, setFlipped] = useState<string | null>(null);

  return (
    <section id="systems" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
            UPS Systems
          </span>
          <h2 className="carbon-fluid-display-02 text-[#161616] mb-4">
            Right-Sized Power Resilience
          </h2>
          <p className="carbon-body-02 text-gray-600">
            From single-phase office protection to 800kVA three-phase enterprise redundancy. 
            Every system includes load profiling, runtime modeling, and growth forecasting.
          </p>
        </div>

        {/* Flip Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {UPS_SYSTEMS.map((system) => {
            const isFlipped = flipped === system.title;
            return (
              <div
                key={system.title}
                className="group relative h-[340px] perspective-1000"
                onMouseEnter={() => setFlipped(system.title)}
                onMouseLeave={() => setFlipped(null)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-500 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front */}
                  <div
                    className="absolute inset-0 bg-white rounded-xl border border-gray-200 p-6 sm:p-8 flex flex-col backface-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="h-1.5 w-full rounded-t-xl mb-6" style={{ backgroundColor: system.color }} />
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
                    <p className="carbon-body-02 text-gray-600 flex-1">{system.desc}</p>
                    <div className="flex items-center gap-2 text-[#0f62fe] carbon-label-02 mt-4">
                      <span>Hover for specs</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Back */}
                  <div
                    className="absolute inset-0 rounded-xl p-6 sm:p-8 flex flex-col text-white backface-hidden rotate-y-180"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      backgroundColor: system.color,
                    }}
                  >
                    <h3 className="carbon-heading-02 mb-4">{system.title}</h3>
                    <p className="carbon-body-02 text-white/90 mb-6">{system.desc}</p>
                    <div className="flex-1">
                      <p className="carbon-label-02 uppercase tracking-wider text-white/70 mb-3">Technical Specs</p>
                      <ul className="space-y-2">
                        {system.specs.map((spec) => (
                          <li key={spec} className="flex items-center gap-2 carbon-body-02 text-white/90">
                            <span className="w-1 h-1 rounded-full bg-white/60" />
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-white/20 mt-4">
                      <p className="carbon-label-02 uppercase tracking-wider text-white/70 mb-2">Related Services</p>
                      <div className="flex flex-wrap gap-2">
                        {system.links.map((link) => (
                          <span key={link} className="carbon-label-01 text-white/80 bg-white/10 px-2 py-1 rounded">
                            {link}
                          </span>
                        ))}
                      </div>
                    </div>
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
