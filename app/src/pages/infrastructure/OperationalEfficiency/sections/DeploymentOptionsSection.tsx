import { CheckCircle2 } from 'lucide-react';

export default function DeploymentOptionsSection() {
  return (
    <section id="deployment" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-10">
          <p className="carbon-label-01 text-[#0f62fe] uppercase mb-3">Deployment Options</p>
          <h2 className="carbon-fluid-heading-05 text-[#0F172A] mb-4">
            Choose Your Engagement Model
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Ecosystem Integration */}
          <div className="group relative bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className="h-1.5 w-full rounded-t-xl bg-gradient-to-r from-gray-200 to-gray-100" />
            <div className="p-6 sm:p-8 flex flex-col flex-1">
              <div className="flex justify-end mb-6">
                <span className="inline-flex items-center px-2 py-0.5 text-white carbon-label-01 uppercase tracking-wider rounded-full border border-white/20" style={{ backgroundColor: '#a855f7' }}>Ecosystem</span>
              </div>
              <div className="mb-6">
                <p className="carbon-heading-02 text-gray-900 leading-tight">Data Centre Ecosystem Integration</p>
              </div>
              <div className="mb-6 p-5 bg-[#0f62fe]/5 rounded-lg border border-[#0f62fe]/20">
                <p className="carbon-fluid-heading-03 text-[#0f62fe] mb-5">Enterprise volume pricing. Unified scope across integrated layers.</p>
                <ul className="space-y-3 carbon-body-02 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                    <span>Compounded savings via consolidated procurement and integrated design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                    <span>Multiple services under one SLA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                    <span>Single architecture with unified reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                    <span>One accountable team across all infrastructure disciplines</span>
                  </li>
                </ul>
              </div>
              <div className="mb-6 p-5 bg-[#6f6f6f]/5 rounded-lg border-l-[3px] border-[#6f6f6f]">
                <span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-900 rounded-lg carbon-badge mb-5">Best For</span>
                <ul className="space-y-3 carbon-body-02 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                    <span>New builds, full refreshes, or multi-vendor consolidation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                    <span>Organisations prioritising long-term TCO over short-term fixes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                    <span>Teams seeking one accountable SLA across critical infrastructure layers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                    <span>Facilities integrating critical infrastructure instruments, cooling, power, and monitoring, into a unified operational loop</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 border-t border-gray-100">
                <p className="carbon-label-02 text-gray-500 uppercase mb-4">Key Benefits</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#24a148] flex-shrink-0 mt-1" />
                    <div>
                      <span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-900 rounded-lg carbon-badge mb-1">Single SLA</span>
                      <p className="carbon-body-02 text-gray-600">One accountable team across all infrastructure disciplines</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#24a148] flex-shrink-0 mt-1" />
                    <div>
                      <span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-900 rounded-lg carbon-badge mb-1">TCO Reduction</span>
                      <p className="carbon-body-02 text-gray-600">Long-term cost optimisation through integrated design</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#24a148] flex-shrink-0 mt-1" />
                    <div>
                      <span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-900 rounded-lg carbon-badge mb-1">Volume Pricing</span>
                      <p className="carbon-body-02 text-gray-600">Enterprise discounts for bundled engagements</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-auto pt-8">
                <a
                  href="mailto:contact@perception-it.com?subject=Ecosystem%20Integration%20Consultation%20Request"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#0f62fe] text-white carbon-heading-02 hover:bg-[#0353e9] transition-colors rounded-lg"
                >
                  Request Technical Consultation
                </a>
              </div>
            </div>
          </div>

          {/* Individual Services */}
          <div className="group relative bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className="h-1.5 w-full rounded-t-xl bg-gradient-to-r from-gray-200 to-gray-100" />
            <div className="p-6 sm:p-8 flex flex-col flex-1">
              <div className="flex justify-end mb-6">
                <span className="inline-flex items-center px-2 py-0.5 text-white carbon-label-01 uppercase tracking-wider rounded-full border border-white/20" style={{ backgroundColor: '#525252' }}>Individual Services</span>
              </div>
              <div className="mb-6">
                <p className="carbon-heading-02 text-gray-900 leading-tight">Deploy by Individual Service</p>
              </div>
              <div className="mb-6 p-5 bg-[#0f62fe]/5 rounded-lg border border-[#0f62fe]/20">
                <p className="carbon-fluid-heading-03 text-[#0f62fe] mb-5">Fixed scope, fixed price. Pay per layer.</p>
                <ul className="space-y-3 carbon-body-02 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                    <span>Clearly defined deliverables with no bundled commitment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                    <span>Rapid, non-intrusive deployment on live environments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                    <span>No commitment to a broader programme</span>
                  </li>
                </ul>
              </div>
              <div className="mb-6 p-5 bg-[#6f6f6f]/5 rounded-lg border-l-[3px] border-[#6f6f6f]">
                <span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-900 rounded-lg carbon-badge mb-5">Best For</span>
                <ul className="space-y-3 carbon-body-02 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                    <span>Targeted upgrades, known gaps, or urgent remediation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                    <span>Teams validating ROI before broader capital commitment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                    <span>Organisations with capped budgets or phased deployment roadmaps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                    <span>Live environments where operational continuity must be preserved</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 border-t border-gray-100">
                <p className="carbon-label-02 text-gray-500 uppercase mb-4">Key Benefits</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#24a148] flex-shrink-0 mt-1" />
                    <div>
                      <span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-900 rounded-lg carbon-badge mb-1">Fast Deployment</span>
                      <p className="carbon-body-02 text-gray-600">Address immediate needs without broader scope</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#24a148] flex-shrink-0 mt-1" />
                    <div>
                      <span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-900 rounded-lg carbon-badge mb-1">Clear Scope</span>
                      <p className="carbon-body-02 text-gray-600">Full specifications and fixed pricing per service</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#24a148] flex-shrink-0 mt-1" />
                    <div>
                      <span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-900 rounded-lg carbon-badge mb-1">Scalable</span>
                      <p className="carbon-body-02 text-gray-600">Add services incrementally as needs evolve</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#24a148] flex-shrink-0 mt-1" />
                    <div>
                      <span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-900 rounded-lg carbon-badge mb-1">SLA Support</span>
                      <p className="carbon-body-02 text-gray-600">Optional SLA-backed support available for every engagement</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-auto pt-8">
                <a
                  href="mailto:contact@perception-it.com?subject=Individual%20Service%20Enquiry"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#0f62fe] text-white carbon-heading-02 hover:bg-[#0353e9] transition-colors rounded-lg"
                >
                  Request Technical Consultation
                </a>
                <p className="text-center carbon-helper-text-01 text-gray-500 mt-4">
                  Begin with a single service. Consolidate under Ecosystem anytime, with no rework or penalty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
