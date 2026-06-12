import { useState, useRef } from 'react';
import { POWER_DISTRIBUTION } from '../data';

export default function PowerDistributionSection() {
  const [activeDist, setActiveDist] = useState<string | null>(null);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

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
                className={`group relative bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isActive
                    ? 'border-[#0f62fe]/30 shadow-xl'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-xl hover:-translate-y-1'
                }`}
                onClick={() => setActiveDist(isActive ? null : item.title)}
                onMouseEnter={() => {
                  if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
                  setActiveDist(item.title);
                }}
                onMouseLeave={() => {
                  hoverTimeout.current = setTimeout(() => setActiveDist(null), 500);
                }}
              >
                {/* Top accent bar */}
                <div className="h-1.5 w-full" style={{ backgroundColor: item.color }} />

                <div className="p-6 sm:p-8">
                  {/* Icon + Tag row */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: item.color + '12' }}
                    >
                      <item.icon className="w-6 h-6" style={{ color: item.color }} />
                    </div>
                    <span
                      className="inline-flex items-center px-2.5 py-1 text-white text-[11px] font-semibold uppercase tracking-wider rounded-full"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="carbon-heading-02 text-[#161616] mb-2">{item.title}</h3>

                  {/* Description */}
                  <ul className="space-y-1 mb-5">
                    {item.desc.split(' · ').map((point) => (
                      <li key={point} className="flex items-start gap-2 carbon-body-02 text-gray-600">
                        <span className="w-1 h-1 rounded-full bg-[#0f62fe] mt-2 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Expandable specs */}
                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-4 border-t border-gray-100">
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
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
