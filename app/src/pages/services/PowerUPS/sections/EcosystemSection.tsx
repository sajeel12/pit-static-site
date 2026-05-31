import { ArrowRight } from 'lucide-react';
import { ECOSYSTEM_ITEMS } from '../data';

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
            Ecosystem
          </span>
          <h2 className="carbon-fluid-display-02 text-[#161616] mb-4">
            Complete Data Centre Resilience
          </h2>
          <p className="carbon-body-02 text-gray-600">
            Power doesn't exist in isolation. When cooling, airflow, monitoring, and suppression 
            are validated together, gaps disappear.
          </p>
        </div>

        {/* Ecosystem Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ECOSYSTEM_ITEMS.map((item) => (
            <a
              key={item.title}
              href={`/#${item.link}`}
              className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-[#0f62fe]/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0f62fe]/10 flex items-center justify-center mb-4 group-hover:bg-[#0f62fe] transition-colors">
                <item.icon className="w-6 h-6 text-[#0f62fe] group-hover:text-white transition-colors" />
              </div>
              <h3 className="carbon-heading-02 text-[#161616] mb-2">{item.title}</h3>
              <p className="carbon-body-02 text-gray-600 mb-4">{item.desc}</p>
              <div className="flex items-center gap-2 text-[#0f62fe] carbon-label-02">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* Closing Block */}
        <div className="bg-[#0F172A] rounded-2xl p-8 sm:p-10 text-center">
          <h3 className="carbon-fluid-heading-03 text-white mb-3">
            One partner. One SLA. No gaps.
          </h3>
          <p className="carbon-body-02 text-white/70 max-w-2xl mx-auto mb-6">
            When power, cooling, monitoring, and suppression are validated together, 
            your data centre operates as a single resilient system — not a collection of vendor contracts.
          </p>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#0f62fe]/20 text-[#78a9ff] carbon-label-02 rounded-full mb-4">
            Enterprise Pricing
          </span>
          <p className="carbon-body-02 text-white/60">
            Volume discounts for complete Ecosystem Integration.{' '}
            <a href="/#/infrastructure/operational-efficiency" className="text-[#78a9ff] hover:underline">
              View Cost Optimisation options
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
