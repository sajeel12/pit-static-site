import { Check, Star, ArrowRight } from 'lucide-react';

export default function TrustTiles() {
  const comparisons = [
    {
      label: 'Experienced / Certified Team',
      advantages: [
        {
          title: 'Certified Tier 1 Supply Chain',
          description:
            'Direct relationships with Huawei, Vertiv, and Schneider Electric. No grey-market components. Full manufacturer warranty and support continuity.',
        },
        {
          title: 'Pakistan-Specific Engineering Protocols',
          description:
            'Every design is validated for 45°C ambient, monsoon humidity, and dust ingress. Not generic specifications—Pakistan-proven engineering.',
        },
      ],
    },
    {
      label: 'Accountability & Ownership',
      advantages: [
        {
          title: 'Single-Partner Accountability',
          description:
            'One contract, one SLA, one team responsible for precision cooling, containment integrity, and temperature stability across your facility.',
        },
        {
          title: 'End-to-End Delivery Ownership',
          description:
            'From thermal assessment through procurement, installation, commissioning, and ongoing managed services. No handoff gaps. No blame shifting.',
        },
      ],
    },
  ];

  const guarantees = [
    {
      title: '45°C Ambient Validation',
      description:
        'Every installation tested at 45°C ambient and 80% RH. Not assumed—measured.',
    },
    {
      title: 'Monsoon-Ready Engineering',
      description:
        'Humidity control, drainage redundancy, and sealed containment validated before handover.',
    },
    {
      title: 'Fixed-Scope Pricing',
      description:
        'No hidden change orders. Your commercial model is locked before execution.',
    },
    {
      title: '24/7 Emergency Response',
      description:
        '4-hour on-site SLA with portable cooling units in Karachi, Lahore, and Islamabad.',
    },
  ];

  return (
    <section className="py-20 bg-[#0F172A] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0f62fe] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#78a9ff] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        {/* Header */}
        <div className="mb-12 carbon-font text-center">
          <p className="carbon-label-01 text-[#78a9ff] uppercase mb-3">The Differentiator</p>
          <h2 className="carbon-fluid-heading-05 text-white mb-4">The Perception-IT Advantage</h2>
          <p className="carbon-body-02 text-gray-400 max-w-2xl mx-auto">
            Integrated Hardware & Software Delivery. Faster Time-to-Value. Zero Integration Blind Spots.
          </p>
        </div>

        {/* Why We Outperform */}
        <div className="mb-20">
          <h3 className="carbon-fluid-heading-03 text-white text-center mb-12">
            Why We Outperform
          </h3>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {comparisons.map((group, idx) => (
              <div
                key={idx}
                className="bg-[#1e293b] rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0f62fe]/10 rounded-full mb-6">
                  <span className="carbon-heading-01 text-[#78a9ff]">
                    {group.label}
                  </span>
                </div>

                <ul className="space-y-6">
                  {group.advantages.map((advantage, aidx) => (
                    <li key={aidx} className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#24a148]/20 flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-[#24a148]" />
                      </div>
                      <div>
                        <h4 className="carbon-heading-02 text-white mb-1">
                          {advantage.title}
                        </h4>
                        <p className="carbon-body-01 text-gray-400 leading-relaxed">
                          {advantage.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Our Performance Guarantee */}
        <div className="bg-gradient-to-br from-[#0f62fe]/20 to-[#0353e9]/20 rounded-xl p-8 lg:p-12 border border-white/10">
          <div className="text-center mb-12">
            <h3 className="carbon-fluid-heading-03 text-white mb-2">
              Our Performance Guarantee
            </h3>
            <p className="carbon-body-01 text-gray-400">
              Backed by contractually defined SLAs and risk buffers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee, idx) => (
              <div
                key={idx}
                className="bg-[#1e293b] rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0f62fe]/20 flex items-center justify-center text-[#78a9ff] mb-4">
                  <Star className="w-5 h-5" />
                </div>
                <h4 className="carbon-heading-02 text-white mb-2">
                  {guarantee.title}
                </h4>
                <p className="carbon-body-01 text-gray-400 leading-relaxed">
                  {guarantee.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#0f62fe] text-white carbon-body-02 rounded-lg hover:bg-[#0353e9] transition-all duration-300 group"
          >
            Experience the Advantage
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
