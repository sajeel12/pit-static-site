import { ArrowRight } from 'lucide-react';
import EcosystemLandmark from '@/components/EcosystemLandmark';
import { ECOSYSTEM_ITEMS } from '../data';

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-3 mb-3">
            <EcosystemLandmark />
            <span className="carbon-label-02 text-[#0f62fe] uppercase tracking-wider">
              The Ecosystem
            </span>
          </div>
          <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
            Complete Data Centre Resilience
          </h2>
          <p className="carbon-body-02 text-gray-600">
            Cooling does not operate in isolation. When integrated with power, rack layout, and monitoring under one SLA, your infrastructure operates as a single resilient system.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {ECOSYSTEM_ITEMS.map((item) => (
            <a
              key={item.title}
              href={item.link}
              className="group bg-[#f4f4f4] rounded-xl border border-gray-200 p-6 hover:border-[#0f62fe]/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0f62fe]/10 flex items-center justify-center mb-3 group-hover:bg-[#0f62fe] transition-colors">
                <item.icon className="w-5 h-5 text-[#0f62fe] group-hover:text-white transition-colors" />
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

        <div className="bg-[#0F172A] rounded-2xl p-8 sm:p-10 text-center">
          <h3 className="carbon-fluid-heading-03 text-white mb-3">
            One partner. One SLA. No gaps.
          </h3>
          <p className="carbon-body-02 text-white/70 max-w-2xl mx-auto mb-6">
            When airflow, power, rack layout, and monitoring are validated together, your data centre operates as a single resilient system.
          </p>
          <a
            href="mailto:info@perception-it.com?subject=Enterprise%20Pricing%20-%20Cooling%20and%20Airflow"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#0f62fe]/20 text-[#78a9ff] carbon-label-02 rounded-full hover:bg-[#0f62fe]/30 transition-colors"
          >
            Enterprise Pricing
          </a>
        </div>
      </div>
    </section>
  );
}
