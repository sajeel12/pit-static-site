import { CheckCircle2 } from 'lucide-react';
import { NEXT_GEN_SERVICES } from '../data';

export default function NextGenSection() {
  return (
    <section id="ai-services" className="py-20 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="carbon-label-02 text-[#78a9ff] uppercase tracking-wider block mb-3">
            Next-Gen Tech & AI Services
          </span>
          <h2 className="carbon-fluid-heading-05 text-white mb-4">
            AI-Native Operations & Intelligence
          </h2>
          <p className="carbon-body-02 text-slate-400 text-lg">
            Move beyond traditional operations with predictive intelligence, production-grade AI
            infrastructure, and self-service platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {NEXT_GEN_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="relative p-6 sm:p-8 bg-[#1e293b] border border-white/10 rounded-xl overflow-hidden hover:border-[#0f62fe]/50 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-white/10 to-white/5" />
                <div className="w-12 h-12 rounded-lg bg-[#0f62fe]/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#78a9ff]" />
                </div>
                <h3 className="carbon-heading-02 text-white mb-2">{service.title}</h3>
                <p className="carbon-label-02 text-[#78a9ff] uppercase tracking-wider mb-4">
                  {service.tagline}
                </p>
                <ul className="space-y-3">
                  {service.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-3 carbon-body-02 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-[#0f62fe] flex-shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
