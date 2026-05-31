import { ArrowUpRight } from 'lucide-react';
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
            Engineered for your operational reality — from server closets to industrial floors.
            Every solution includes grid-sync testing and NOC monitoring.
          </p>
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {USE_CASES.map((useCase) => (
            <div
              key={useCase.title}
              className="group bg-white rounded-xl border border-gray-200 p-6 sm:p-8 hover:border-[#0f62fe]/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0f62fe]/10 flex items-center justify-center">
                  <useCase.icon className="w-5 h-5 text-[#0f62fe]" />
                </div>
                <h3 className="carbon-heading-02 text-[#161616]">{useCase.title}</h3>
              </div>
              <p className="carbon-body-02 text-gray-600 mb-5">{useCase.desc}</p>
              <div className="p-4 bg-[#f4f4f4] rounded-lg mb-5">
                <p className="carbon-label-02 text-gray-500 uppercase mb-2">Implementation</p>
                <p className="carbon-body-02 text-gray-700">{useCase.implementation}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {useCase.links.map((link) => (
                  <span
                    key={link}
                    className="inline-flex items-center gap-1 carbon-label-01 text-[#0f62fe] bg-[#0f62fe]/5 px-2 py-1 rounded"
                  >
                    {link}
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pakistan Localization Badge */}
        <div className="flex items-center justify-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#0f62fe]/10 text-[#0f62fe] carbon-label-02 rounded-full">
            Deployed across Karachi, Lahore, Faisalabad industrial zones
          </span>
        </div>
      </div>
    </section>
  );
}
