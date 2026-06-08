import { Check } from 'lucide-react';
import { USE_CASES } from '../data';

export default function UseCaseSection() {
  return (
    <section id="usecases" className="py-16 md:py-24 bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
            Use Cases
          </span>
          <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
            Power Solutions by Environment
          </h2>
          <p className="carbon-body-02 text-gray-600">
            Engineered for your operational reality. From server closets to industrial floors.
            Every solution includes grid-sync testing and NOC monitoring.
          </p>
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {USE_CASES.map((useCase) => (
            <div
              key={useCase.title}
              className="group relative bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Colored top accent */}
              <div className="h-1.5 w-full" style={{ backgroundColor: useCase.color }} />

              <div className="p-6 sm:p-8">
                {/* Tag pill */}
                <div className="flex justify-end mb-4">
                  <span
                    className="inline-flex items-center px-2 py-0.5 text-white carbon-label-01 uppercase tracking-wider rounded-full"
                    style={{ backgroundColor: useCase.color }}
                  >
                    {useCase.tag}
                  </span>
                </div>

                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: useCase.color + '12' }}
                  >
                    <useCase.icon className="w-5 h-5" style={{ color: useCase.color }} />
                  </div>
                  <h3 className="carbon-heading-02 text-[#161616]">{useCase.title}</h3>
                </div>

                {/* Description */}
                {Array.isArray(useCase.desc) ? (
                  <ul className="space-y-1.5 mb-5">
                    {useCase.desc.map((point) => (
                      <li key={point} className="flex items-start gap-2 carbon-body-02 text-gray-600">
                        <span className="w-1 h-1 rounded-full bg-[#0f62fe] mt-2 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="carbon-body-02 text-gray-600 mb-5">{useCase.desc}</p>
                )}

                {/* Best For */}
                <div
                  className="mb-5 p-4 rounded-lg border-l-[3px]"
                  style={{ backgroundColor: useCase.color + '08', borderLeftColor: useCase.color }}
                >
                  <span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-900 rounded-lg carbon-badge mb-2">
                    Best For
                  </span>
                  <p className="carbon-body-02 text-gray-600">{useCase.bestFor}</p>
                </div>

                {/* Deliverables */}
                <div className="pt-5 border-t border-gray-100">
                  <p className="carbon-label-02 text-gray-500 uppercase mb-3">Key Deliverables</p>
                  <div className="space-y-3">
                    {useCase.deliverables.map((d) => (
                      <div key={d.label} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#24a148] flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-900 rounded-lg carbon-badge mb-1">
                            {d.label}
                          </span>
                          <p className="carbon-body-02 text-gray-600">{d.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="mailto:contact@perception-it.com?subject=Environment%20Discussion%20-%20Power%20and%20UPS"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f62fe] text-white carbon-heading-02 rounded-lg hover:bg-[#0353e9] transition-colors"
          >
            Discuss your environment
          </a>
          <p className="carbon-helper-text-01 text-gray-500 mt-2">
            Deployed across Karachi, Lahore, and Faisalabad industrial zones
          </p>
        </div>
      </div>
    </section>
  );
}
