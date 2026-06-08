import { Clock, Shield, Award, Wrench, Battery } from 'lucide-react';

const OPERATIONAL_BADGES = [
  { icon: Clock, label: 'Lahore 24/7 NOC', desc: 'Round-the-clock monitoring and response' },
  { icon: Shield, label: 'SBP Aligned', desc: 'Compliance with State Bank of Pakistan standards' },
  { icon: Award, label: 'SLA Backed', desc: 'Contractually guaranteed uptime and response' },
  { icon: Wrench, label: 'Local Spares', desc: 'Inventory held in-country for rapid replacement' },
  { icon: Battery, label: 'SBP Disposal', desc: 'Certified e-waste and battery disposal' },
];

const PARTNERS = [
  { name: 'Huawei', src: '/logos/partners/Partner-Huawei-Logo.svg' },
  { name: 'Dell', src: '/logos/partners/Partner-Dell-logo.svg' },
  { name: 'HP', src: '/logos/partners/Partner-%20Hewlett-Packard-Logo.svg' },
  { name: 'Lenovo', src: '/logos/partners/Partner-Lenovo-Logo.svg' },
];

export default function TrustBarSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-10 md:mb-12">
          <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
            Why Perception IT
          </span>
          <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
            Certified Partnerships · Local Accountability
          </h2>
          <p className="carbon-body-02 text-gray-600">
            Supply-chain relationships and operational standards that de-risk every power deployment.
            We hold local inventory, maintain certified engineers, and back every installation with a written SLA.
          </p>
        </div>

        {/* Two-column layout: Partner logos left, badges right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Partner Logos */}
          <div className="lg:col-span-5">
            <p className="carbon-label-02 text-gray-500 uppercase tracking-wider mb-5">Authorised Partners</p>
            <div className="grid grid-cols-2 gap-4">
              {PARTNERS.map((p) => (
                <div
                  key={p.name}
                  className="flex items-center justify-center p-5 bg-[#f4f4f4] rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
                >
                  <img
                    src={p.src}
                    alt={p.name}
                    className="h-6 md:h-7 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Operational Badges */}
          <div className="lg:col-span-7">
            <p className="carbon-label-02 text-gray-500 uppercase tracking-wider mb-5">Operational Standards</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {OPERATIONAL_BADGES.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-4 bg-[#f4f4f4] rounded-xl border border-gray-200 hover:border-[#0f62fe]/20 hover:shadow-sm transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0f62fe]/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#0f62fe]" />
                  </div>
                  <div>
                    <span className="block carbon-heading-02 text-[#161616] mb-0.5">{item.label}</span>
                    <span className="block carbon-helper-text-01 text-gray-500">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
