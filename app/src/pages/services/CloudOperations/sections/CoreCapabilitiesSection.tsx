import { useState } from 'react';
import { CheckCircle2, ChevronDown, ChevronUp, Star } from 'lucide-react';
import { CORE_CAPABILITIES } from '../data';

const StarRating = ({ quote }: { quote: string }) => (
  <div className="p-4 bg-[#f4f4f4] rounded-lg border-l-4 border-[#0f62fe]">
    <div className="flex gap-0.5 mb-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-[#f1c21b] fill-[#f1c21b]" />
      ))}
    </div>
    <p className="carbon-body-01 text-[#525252] italic">&ldquo;{quote}&rdquo;</p>
  </div>
);

export default function CoreCapabilitiesSection() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="capabilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="carbon-label-02 text-[#0f62fe] uppercase tracking-wider block mb-3">
            Core Capabilities
          </span>
          <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
            DevOps Services & Solutions
          </h2>
          <p className="carbon-body-02 text-[#525252] text-lg">
            Seamless IT support for your business. Automate tasks and unlock valuable time to focus
            on crafting exceptional features and refining your products.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {CORE_CAPABILITIES.map((capability, index) => {
            const Icon = capability.icon;
            const isExpanded = expanded[capability.id] ?? false;
            const number = String(index + 1).padStart(2, '0');

            return (
              <div
                key={capability.id}
                className="group relative bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="h-1.5 w-full bg-gradient-to-r from-gray-200 to-gray-100" />
                <div className="p-6 sm:p-8 flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-lg bg-[#0f62fe]/10 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-[#0f62fe]" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#0f62fe] text-white text-xs flex items-center justify-center carbon-label-01">
                        {number}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="carbon-heading-02 text-[#161616] mb-1">{capability.title}</h3>
                      <p className="carbon-label-02 text-[#0f62fe] uppercase tracking-wider">
                        {capability.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="carbon-body-02 text-[#525252] mb-5 leading-relaxed">
                    {capability.description}
                  </p>

                  <button
                    onClick={() => toggle(capability.id)}
                    className="flex items-center gap-2 carbon-label-02 text-[#0f62fe] hover:text-[#0353e9] transition-colors mb-4"
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? 'Show less' : 'Show details'}
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="space-y-5 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div>
                        <h4 className="carbon-heading-02 text-[#161616] mb-3">What we do</h4>
                        <ul className="space-y-2">
                          {capability.whatWeDo.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 carbon-body-02 text-[#525252]"
                            >
                              <CheckCircle2 className="w-5 h-5 text-[#0f62fe] flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-4 bg-[#edf5ff] rounded-lg border-l-[3px] border-[#0f62fe]">
                        <h4 className="carbon-heading-02 text-[#161616] mb-1">The Impact</h4>
                        <p className="carbon-body-02 text-[#525252]">{capability.impact}</p>
                      </div>

                      <StarRating quote={capability.quote} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
