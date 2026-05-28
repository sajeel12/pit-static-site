import { Link } from 'react-router-dom';
import { Thermometer, BatteryCharging, Server, Eye, Flame, Layers, Construction, Settings } from 'lucide-react';

const services = [
  {
    icon: Thermometer,
    title: 'Cooling & Airflow',
    headline: 'PUE 1.8 → 1.35',
    desc: 'Precision cooling, aisle containment, and AI-driven setpoint optimisation. 25–40% energy reduction with deferred CapEx on expansion.',
    link: '/infrastructure/data-centre-services/cooling-thermal',
    metric: '25–40% energy saved',
  },
  {
    icon: BatteryCharging,
    title: 'Power & UPS',
    headline: 'Right-sized UPS loads',
    desc: 'Eliminate over-provisioning. Load-aligned UPS configurations, lithium-ion battery upgrades, and harmonic filtering reduce power waste and cooling load.',
    link: '/services/power-ups',
    metric: '15–20% power waste cut',
  },
  {
    icon: Server,
    title: 'Rack & Cabinet',
    headline: 'Airflow containment',
    desc: 'Hot/cold aisle containment, blanking panels, and brush-sealed cable entry reduce bypass airflow. Lower cooling demand = lower energy bill.',
    link: '/services/rack-cabinets',
    metric: '10–15% cooling load reduced',
  },
  {
    icon: Eye,
    title: 'Environmental Monitoring',
    headline: 'Prevent costly outages',
    desc: 'Rack-level temperature, humidity, and leak detection with predictive alerting. Catch thermal drift before it becomes downtime.',
    link: '/services/environmental-monitoring',
    metric: 'Zero thermal surprises',
  },
  {
    icon: Flame,
    title: 'Fire Suppression',
    headline: 'Avoid total loss',
    desc: 'FM200 and clean-agent systems with thermal recovery planning. Insurance premium reduction and regulatory compliance bundled.',
    link: '/services/fire-suppression',
    metric: 'Insurance cost reduction',
  },
  {
    icon: Construction,
    title: 'Design & Build',
    headline: 'Right-first-time construction',
    desc: 'CFD-validated layout design and phased construction planning. Eliminate costly rework, change orders, and schedule overruns before breaking ground.',
    link: '/services/design-build',
    metric: 'Zero design rework',
  },
  {
    icon: Settings,
    title: 'Maintenance & Support',
    headline: 'Predictable OpEx',
    desc: 'SLA-backed maintenance contracts with fixed monthly pricing. Replace variable emergency repair costs with predictable operational expenditure.',
    link: '/services/maintenance-support',
    metric: 'Fixed monthly cost',
  },
  {
    icon: Layers,
    title: 'Cross-Service Bundles',
    headline: 'Stacked discounts',
    desc: 'Combine cooling + power + monitoring under a single SLA. Bundled engagements average 30% lower total cost than individual service contracts.',
    link: '/services/infrastructure',
    metric: '30% lower total cost',
  },
];

export default function ServiceCategoriesSection() {
  return (
    <section id="services" className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12">
          <p className="carbon-label-01 text-[#0f62fe] uppercase mb-3">By Service Category</p>
          <h2 className="carbon-fluid-heading-05 text-[#0F172A] mb-4">
            Where the Savings Come From
          </h2>
          <p className="carbon-body-02 text-gray-500 max-w-2xl">
            Each infrastructure discipline contributes to the total cost picture.
            <br />
            <span className="text-[#0f62fe]">Click any card to explore full specifications, pricing tiers, and deployment methodologies.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <Link
              key={s.title}
              to={s.link}
              className="group relative bg-white rounded-xl border border-gray-200 hover:border-[#0f62fe] transition-all duration-300 hover:shadow-lg flex flex-col"
            >
              <div className="h-1.5 w-full rounded-t-xl bg-gradient-to-r from-gray-200 to-gray-100 group-hover:from-[#0f62fe]/30 group-hover:to-[#78a9ff]/20 transition-all" />
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <div className="w-10 h-10 rounded-lg bg-[#0f62fe]/10 flex items-center justify-center mb-5">
                  <s.icon className="w-5 h-5 text-[#0f62fe]" />
                </div>

                <p className="carbon-heading-02 text-gray-900 mb-1">{s.title}</p>
                <p className="carbon-label-01 text-[#0f62fe] uppercase tracking-wider mb-3">{s.metric}</p>
                <p className="carbon-body-02 text-gray-600 flex-1">{s.desc}</p>

                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center gap-1 text-[#0f62fe] carbon-label-01 uppercase group-hover:gap-2 transition-all">
                  View Service <span className="text-lg leading-none">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
