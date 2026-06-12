import { CheckCircle2 } from 'lucide-react';

export default function DeploymentOptionsSection() {
  return (
    <section id="deployment" className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12">
          <p className="carbon-label-01 text-gray-500 uppercase tracking-wider mb-3">Engagement</p>
          <h2 className="carbon-fluid-heading-05 text-[#0F172A]">Choose Your Engagement Model</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Ecosystem — Recommended */}
          <div className="relative bg-white rounded-lg border border-gray-200 flex flex-col">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#0f62fe] rounded-t-lg" />
            <div className="absolute top-4 right-6">
              <span className="inline-flex items-center px-3 py-1 bg-[#0f62fe]/8 text-[#0f62fe] carbon-label-01 uppercase tracking-wider rounded-full">
                Recommended
              </span>
            </div>

            <div className="p-8 sm:p-10 flex flex-col flex-1">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="inline-flex items-center px-2.5 py-1 text-white carbon-label-01 uppercase tracking-wider rounded-full border border-white/20"
                    style={{ backgroundColor: '#a855f7' }}
                  >
                    Ecosystem
                  </span>
                </div>
                <div className="p-5 bg-[#f8f9ff] rounded-lg border border-[#e8ecff]">
                  <h3 className="carbon-fluid-heading-03 text-[#0F172A] leading-tight mb-2">
                    Data Centre Ecosystem Integration
                  </h3>
                  <p className="carbon-heading-02 text-[#0f62fe]">
                    Enterprise volume pricing. Unified scope across integrated layers.
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  'Compounded savings via consolidated procurement and integrated design',
                  'Multiple services under one SLA',
                  'Single architecture with unified reporting',
                  'One accountable team across all infrastructure disciplines',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0f62fe] flex-shrink-0 mt-0.5" />
                    <p className="carbon-body-02 text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <p className="carbon-label-01 text-gray-500 uppercase tracking-wider font-semibold mb-3">Best For</p>
                <ul className="space-y-2">
                  {[
                    'New builds, full refreshes, or multi-vendor consolidation',
                    'Organisations prioritising long-term TCO over short-term fixes',
                    'Teams seeking one accountable SLA across critical infrastructure layers',
                    'Facilities integrating cooling, power, and monitoring into a unified operational loop',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 carbon-body-02 text-gray-600">
                      <span className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6 border-t border-gray-100">
                <a
                  href="mailto:info@perception-it.com?subject=Ecosystem%20Integration%20Consultation%20Request"
                  className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-[#0f62fe] text-white carbon-heading-02 hover:bg-[#0353e9] transition-colors rounded-lg"
                >
                  Request Technical Consultation
                </a>
              </div>
            </div>
          </div>

          {/* Individual */}
          <div className="relative bg-white rounded-lg border border-gray-200 flex flex-col">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gray-300 rounded-t-lg" />

            <div className="p-8 sm:p-10 flex flex-col flex-1">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="inline-flex items-center px-2.5 py-1 text-white carbon-label-01 uppercase tracking-wider rounded-full border border-white/20"
                    style={{ backgroundColor: '#009d9a' }}
                  >
                    Individual
                  </span>
                </div>
                <div className="p-5 bg-[#f8f9ff] rounded-lg border border-[#e8ecff]">
                  <h3 className="carbon-fluid-heading-03 text-[#0F172A] leading-tight mb-2">
                    Deploy by Individual Service
                  </h3>
                  <p className="carbon-heading-02 text-[#0f62fe]">
                    Fixed scope, fixed price. Pay per layer.
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  'Clearly defined deliverables with no bundled commitment',
                  'Rapid, non-intrusive deployment on live environments',
                  'No commitment to a broader programme',
                  'Optional SLA-backed support available for every engagement',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                    <p className="carbon-body-02 text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <p className="carbon-label-01 text-gray-500 uppercase tracking-wider font-semibold mb-3">Best For</p>
                <ul className="space-y-2">
                  {[
                    'Targeted upgrades, known gaps, or urgent remediation',
                    'Teams validating ROI before broader capital commitment',
                    'Organisations with capped budgets or phased deployment roadmaps',
                    'Live environments where operational continuity must be preserved',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 carbon-body-02 text-gray-600">
                      <span className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6 border-t border-gray-100">
                <p className="text-center carbon-helper-text-01 text-gray-500 mb-4">
                  Begin with a single service. Consolidate under Ecosystem anytime, with no rework or penalty.
                </p>
                <a
                  href="mailto:info@perception-it.com?subject=Individual%20Service%20Enquiry"
                  className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-[#0f62fe] text-white carbon-heading-02 hover:bg-[#0353e9] transition-colors rounded-lg"
                >
                  Request Technical Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
