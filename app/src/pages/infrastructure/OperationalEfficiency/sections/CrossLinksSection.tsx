import { Link } from 'react-router-dom';
import { ArrowRight, Thermometer, BatteryCharging, Server, Eye, Flame, HardHat, Settings } from 'lucide-react';

const links = [
  { icon: Thermometer, title: 'Cooling & Airflow', desc: 'Precision cooling & thermal continuity', href: '/infrastructure/data-centre-services/cooling' },
  { icon: BatteryCharging, title: 'Power & UPS', desc: 'UPS & power distribution', href: '/infrastructure/data-centre-services/power-ups' },
  { icon: Server, title: 'Rack & Cabinet', desc: 'Server cabinets & enclosures', href: '/infrastructure/data-centre-services/rack-cabinets' },
  { icon: Eye, title: 'Monitoring', desc: 'Temp, humidity, leak detection', href: '/infrastructure/data-centre-services/monitoring' },
  { icon: Flame, title: 'Fire Suppression', desc: 'FM200 & clean-agent protection', href: '/services/fire-suppression' },
  { icon: HardHat, title: 'Design & Build', desc: 'End-to-end construction & CFD', href: '/services/design-build' },
  { icon: Settings, title: 'Maintenance & Support', desc: 'SLA-backed contracts', href: '/infrastructure/data-centre-services/maintenance-support' },
  { icon: Server, title: 'Server Continuity', desc: 'Business continuity & DR', href: '/services/server-continuity' },
];

export default function CrossLinksSection() {
  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-10">
          <p className="carbon-label-01 text-[#0f62fe] uppercase mb-3">Explore Services</p>
          <h2 className="carbon-fluid-heading-05 text-[#0F172A] mb-4">
            Dive into the Technical Detail
          </h2>
          <p className="carbon-body-02 text-gray-500 max-w-2xl mb-6">
            Each service page contains full specifications, pricing tiers, and deployment methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((l) => (
            <Link
              key={l.title}
              to={l.href}
              className="group flex items-center gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-[#0f62fe] transition-all duration-300 hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-[#0f62fe]/10 transition-colors">
                <l.icon className="w-5 h-5 text-gray-500 group-hover:text-[#0f62fe] transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="carbon-body-02 text-gray-900 font-medium truncate">{l.title}</p>
                <p className="carbon-helper-text-01 text-gray-500 truncate">{l.desc}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#0f62fe] group-hover:translate-x-1 transition-all flex-shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
