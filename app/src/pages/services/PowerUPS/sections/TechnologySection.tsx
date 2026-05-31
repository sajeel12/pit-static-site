import { useState } from 'react';
import { ChevronDown, Check, ArrowUpRight } from 'lucide-react';
import { TECHNOLOGIES } from '../data';

export default function TechnologySection() {
  const [openTech, setOpenTech] = useState<string | null>('Online (Double-Conversion)');

  return (
    <section id="technologies" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
            Technologies
          </span>
          <h2 className="carbon-fluid-display-02 text-[#161616] mb-4">
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
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        isOpen ? 'bg-[#0f62fe] text-white' : 'bg-[#f4f4f4] text-gray-600'
                      }`}
                    >
                      {isOpen ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <span className="carbon-heading-02">{tech.title.charAt(0)}</span>
                      )}
                    </div>
                    <div>
                      <h3 className={`carbon-heading-02 ${isOpen ? 'text-[#0f62fe]' : 'text-[#161616]'}`}>
                        {tech.title}
                      </h3>
                      {!isOpen && (
                        <p className="carbon-body-02 text-gray-500 mt-1 hidden sm:block">{tech.bestFor}</p>
                      )}
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <div className="pl-14">
                      <p className="carbon-body-02 text-gray-600 mb-5">{tech.desc}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                        {tech.specs.map((spec) => (
                          <div key={spec} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0f62fe]" />
                            <span className="carbon-body-02 text-gray-700">{spec}</span>
                          </div>
                        ))}
                      </div>

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
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
