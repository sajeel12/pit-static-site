import { useState } from 'react';
import { ChevronDown, ArrowUpRight, ShieldCheck, Activity, Power, Zap, Timer } from 'lucide-react';
import { TECHNOLOGIES } from '../data';

export default function TechnologySection() {
  const [openTech, setOpenTech] = useState<string | null>('Online (Double-Conversion)');

  return (
    <section id="technologies" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
            Technologies
          </span>
          <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
            Power Technologies Explained
          </h2>
          <p className="carbon-body-02 text-gray-600">
            Choose the right protection level for your risk profile. From entry-level standby to 
            enterprise online double-conversion with AI-predicted battery health.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4 max-w-4xl">
          {TECHNOLOGIES.map((tech) => {
            const isOpen = openTech === tech.title;
            return (
              <div
                key={tech.title}
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen ? 'border-[#0f62fe]/30 shadow-lg' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => setOpenTech(isOpen ? null : tech.title)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                        isOpen ? 'bg-[#0f62fe] text-white' : 'bg-[#f4f4f4] text-gray-600'
                      }`}
                    >
                      {tech.icon === 'ShieldCheck' && <ShieldCheck className="w-5 h-5" />}
                      {tech.icon === 'Activity' && <Activity className="w-5 h-5" />}
                      {tech.icon === 'Power' && <Power className="w-5 h-5" />}
                      {tech.icon === 'Zap' && <Zap className="w-5 h-5" />}
                      {tech.icon === 'Timer' && <Timer className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className={`carbon-heading-02 ${isOpen ? 'text-[#0f62fe]' : 'text-[#161616]'}`}>
                        {tech.title}
                      </h3>
                      {!isOpen && (
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {tech.bestFor.split(' · ').slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-2 py-0.5 bg-gray-100 text-gray-600 rounded carbon-label-01"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen ? 'bg-[#0f62fe]/10' : 'bg-[#f4f4f4]'
                    }`}
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#0f62fe]' : 'text-gray-400'
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <div className="pl-14">
                      {/* Benefits */}
                      <ul className="space-y-1.5">
                        {tech.desc.split(' · ').map((point) => (
                          <li key={point} className="flex items-start gap-2 carbon-body-02 text-gray-600">
                            <span className="w-1 h-1 rounded-full bg-[#0f62fe] mt-2 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>

                      {/* Divider + Specs */}
                      <div className="border-t border-gray-100 pt-5 mt-5">
                        <p className="carbon-label-02 text-gray-400 uppercase mb-3">Key Specifications</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {tech.specs.map((spec) => (
                            <div key={spec} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#24a148]" />
                              <span className="carbon-body-02 text-gray-700">{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Divider + Links */}
                      <div className="border-t border-gray-100 pt-5 mt-5">
                        <p className="carbon-label-02 text-gray-400 uppercase mb-3">Related Services</p>
                        <div className="flex flex-wrap gap-2">
                          {tech.links.map((link) => (
                            <span
                              key={link}
                              className="inline-flex items-center gap-1 carbon-label-01 text-[#0f62fe] bg-[#0f62fe]/5 px-3 py-1.5 rounded-full"
                            >
                              {link}
                              <ArrowUpRight className="w-3 h-3" />
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
