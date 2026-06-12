import ArrowRight from '@carbon/icons-react/es/ArrowRight';
import EcosystemLandmark from '@/components/EcosystemLandmark';
import { ECOSYSTEM_ITEMS } from '../data';

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 mb-3">
            <EcosystemLandmark />
            <p className="carbon-label-01 text-gray-500 uppercase tracking-wider">Our Ecosystem</p>
          </div>
          <h2 className="carbon-fluid-heading-05 text-[#0F172A] mb-3">Integrated Facility Ecosystem</h2>
          <p className="carbon-body-02 text-gray-600">Beyond cooling, the full facility stack.</p>
        </div>

        {/* Value proposition */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8 mb-12">
          <p className="carbon-fluid-heading-03 text-[#0F172A] leading-tight">
            Cooling does not exist in isolation. Our services connect thermal management with the infrastructure layers that dictate its performance — from a single accountable team.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {ECOSYSTEM_ITEMS.map((item) => (
            <a
              key={item.title}
              href={item.link}
              className="group bg-white rounded-lg border border-gray-200 p-6 hover:border-[#0f62fe]/30 hover:shadow-md transition-all duration-200"
            >
              <item.icon className="w-5 h-5 text-[#0f62fe] mb-4" />
              <p className="carbon-heading-02 text-gray-900 mb-2">{item.title}</p>
              <p className="carbon-body-02 text-gray-500 leading-relaxed mb-4">{item.desc}</p>
              <span className="inline-flex items-center gap-1 carbon-label-01 text-gray-400 group-hover:text-[#0f62fe] transition-colors">
                Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
          ))}
        </div>

        {/* Portfolio link */}
        <div className="text-center mb-12">
          <a
            href="/#/services/datacenter2"
            className="inline-flex items-center gap-1.5 carbon-body-02 text-[#0f62fe] hover:underline"
          >
            Explore the full facility services portfolio <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Closing argument + CTA */}
        <div className="bg-[#0F172A] rounded-xl p-8 sm:p-10">
          <div className="max-w-3xl">
            <h3 className="carbon-fluid-heading-03 text-white mb-3">One partner. One SLA. No gaps.</h3>
            <p className="carbon-body-02 text-white/70 mb-6">
              When power, airflow, monitoring, and suppression are validated together, cooling performance is engineered, not assumed.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
              <span className="inline-flex items-center px-3 py-1 bg-[#0f62fe]/20 text-[#78a9ff] carbon-label-01 uppercase tracking-wider rounded-full">
                Enterprise Pricing
              </span>
              <a
                href="/#/infrastructure/operational-efficiency"
                className="inline-flex items-center gap-1.5 carbon-helper-text-01 text-white/50 hover:text-[#78a9ff] transition-colors"
              >
                Volume discounts for complete Data Centre Ecosystem Integration
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
            <a
              href="mailto:contact@perception-it.com?subject=Integrated%20Facility%20Ecosystem%20Enquiry"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0f62fe] text-white carbon-heading-02 rounded-lg hover:bg-[#0353e9] hover:shadow-lg hover:shadow-[#0f62fe]/25 hover:-translate-y-0.5 transition-all"
            >
              Request Technical Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
