import { Clock, Shield, Award, Wrench, Battery, Users } from 'lucide-react';

const OPERATIONAL_BADGES = [
  { icon: Clock, label: 'Lahore 24/7 NOC', desc: 'Round-the-clock monitoring and response' },
  { icon: Users, label: 'Certified Engineers', desc: 'Trained and certified on every system we deploy' },
  { icon: Shield, label: 'SBP Aligned', desc: 'Compliance with State Bank of Pakistan standards' },
  { icon: Award, label: 'SLA Backed', desc: 'Contractually guaranteed uptime and response' },
  { icon: Wrench, label: 'Local Spares', desc: 'Inventory held in-country for rapid replacement' },
  { icon: Battery, label: 'SBP Disposal', desc: 'Certified e-waste and battery disposal' },
];

const PARTNERS = [
  { name: 'Huawei', src: '/logos/partners/Partner-Huawei-Logo.svg', pad: true },
  { name: 'Dell', src: '/logos/partners/DELL LOGO/DELL LOGO 1 .webp', pad: false },
  { name: 'HP', src: '/logos/partners/HPE logo /HPE Logo files/HPE Logo/HPE-logo-full-clr-pos-rgb (3).webp', pad: true },
  { name: 'Lenovo', src: '/logos/partners/Partner-Lenovo-Logo.svg', pad: true },
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
          </p>
        </div>

        {/* Two-column layout: Partner logos left, badges right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Partner Logos */}
          <div className="lg:col-span-5">
            <p className="carbon-label-02 text-gray-500 uppercase tracking-wider mb-5">Authorised Partners</p>
            <div className="flex flex-wrap items-center gap-8 md:gap-10">
              {PARTNERS.map((p) => (
                <div
                  key={p.name}
                  className={`w-28 h-14 md:w-36 md:h-16 flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105 ${p.pad ? 'p-2 md:p-3' : ''}`}
                >
                  <img
                    src={p.src}
                    alt={p.name}
                    title={p.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Operational Badges */}
          <div className="lg:col-span-7">
            <p className="carbon-label-02 text-gray-500 uppercase tracking-wider mb-5">Operational Standards</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 rounded-xl overflow-hidden border border-gray-200">
              {OPERATIONAL_BADGES.map((item) => (
                <div
                  key={item.label}
                  className="group bg-white p-5 sm:p-6 hover:bg-[#f4f4f4] transition-colors duration-200"
                >
                  <div className="flex flex-col items-start">
                    <div className="w-10 h-10 rounded-lg bg-[#0f62fe]/10 flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5 text-[#0f62fe]" />
                    </div>
                    <span className="block carbon-heading-02 text-[#161616] mb-1">{item.label}</span>
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
