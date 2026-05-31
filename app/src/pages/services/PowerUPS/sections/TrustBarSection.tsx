import { Clock, Shield, Award, Wrench, Battery } from 'lucide-react';

const TRUST_ITEMS = [
  { icon: Clock, label: 'Lahore 24/7 NOC' },
  { icon: Shield, label: 'SBP Aligned' },
  { icon: Award, label: '99.95% SLA' },
  { icon: Wrench, label: 'Local Spares' },
  { icon: Battery, label: 'SBP Disposal' },
];

export default function TrustBarSection() {
  return (
    <section className="py-6 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {TRUST_ITEMS.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-gray-500 carbon-label-02">
              <item.icon className="w-4 h-4 text-[#0f62fe]" />
              <span>{item.label}</span>
            </div>
          ))}

          {/* Huawei Certified with logo */}
          <div className="flex items-center gap-2 text-gray-500 carbon-label-02">
            <img
              src="/logos/partners/Partner-Huawei-Logo.svg"
              alt="Huawei"
              className="h-4 w-auto"
            />
            <span>Huawei Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
}
