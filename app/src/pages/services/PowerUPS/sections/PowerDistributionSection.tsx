import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { POWER_DISTRIBUTION } from '../data';

export default function PowerDistributionSection() {
  const [activeDist, setActiveDist] = useState<string | null>(null);

  return (
    <section id="distribution" className="py-16 md:py-24 bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
            Power Distribution
          </span>
          <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
            From PDU to Busbar
          </h2>
          <p className="carbon-body-02 text-gray-600">
            Intelligent power distribution that scales with your density. From basic rack PDUs 
            to AI-monitored busbar systems for HPC and AI workloads.
          </p>
        </div>

        {/* Distribution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {POWER_DISTRIBUTION.map((item) => {
            const isActive = activeDist === item.title;
            return (
              <div
                key={item.title}
                className={`group relative bg-white rounded-xl border p-6 sm:p-8 transition-all duration-300 cursor-default ${
                  isActive
                    ? 'border-[#0f62fe] shadow-lg -translate-y-1'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-md hover:-translate-y-0.5'
                }`}
                onClick={() => setActiveDist(isActive ? null : item.title)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? 'bg-[#0f62fe] text-white' : 'bg-[#f4f4f4] text-gray-600'
                    }`}
                  >
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      isActive ? 'bg-[#0f62fe]/10' : 'bg-[#f4f4f4]'
                    }`}
                  >
                    <ChevronRight
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isActive ? 'rotate-90 text-[#0f62fe]' : 'text-gray-400'
                      }`}
                    />
                  </div>
                </div>

                <h3 className="carbon-heading-02 text-[#161616] mb-2">{item.title}</h3>
                <ul className="space-y-1 mb-4">
                  {item.desc.split(' · ').map((point) => (
                    <li key={point} className="flex items-start gap-2 carbon-body-02 text-gray-600">
                      <span className="w-1 h-1 rounded-full bg-[#0f62fe] mt-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                {isActive && (
                  <div className="pt-4 border-t border-gray-100 animate-fade-in">
                    <p className="carbon-label-02 text-gray-500 uppercase mb-3">Specifications</p>
                    <ul className="space-y-2">
                      {item.specs.map((spec) => (
                        <li key={spec} className="flex items-center gap-2 carbon-body-02 text-gray-700">
                          <span className="w-1 h-1 rounded-full bg-[#0f62fe]" />
                          {spec}
                        </li>
                      ))}
                    </ul>
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
