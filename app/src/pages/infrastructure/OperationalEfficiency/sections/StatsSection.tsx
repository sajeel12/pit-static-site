import { TrendingDown, Zap, Shield, Clock, BarChart, Award } from 'lucide-react';

const stats = [
  {
    icon: TrendingDown,
    value: '1.8 → 1.35',
    label: 'Average PUE reduction',
    desc: 'Achievable with precision engineering and targeted retrofit',
  },
  {
    icon: Zap,
    value: '25–40%',
    label: 'Energy cost reduction',
    desc: 'Through VFD, free-cooling and AI-driven setpoint optimisation',
  },
  {
    icon: Shield,
    value: 'PKR 750K+',
    label: 'Downtime risk avoided',
    desc: 'Through proactive hardware support and rapid parts replacement',
  },
  {
    icon: Clock,
    value: '18–24 mo',
    label: 'Typical payback period',
    desc: 'Typical payback for comprehensive infrastructure programmes',
  },
  {
    icon: BarChart,
    value: '45%',
    label: 'Cooling efficiency gain',
    desc: 'Through legacy system modernisation and smart control integration',
  },
  {
    icon: Award,
    value: '99.9%',
    label: 'Uptime SLA achieved',
    desc: 'Under SLA-backed enterprise managed services',
  },
];

export default function StatsSection() {
  return (
    <section id="savings" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-10">
          <p className="carbon-label-01 text-[#0f62fe] uppercase mb-3">Benchmarks</p>
          <h2 className="carbon-fluid-heading-05 text-[#0F172A] mb-4">
            Infrastructure optimisation benchmarks
          </h2>
          <p className="carbon-body-02 text-gray-500 max-w-2xl mb-6">
            Representative outcomes based on industry benchmarks and documented best-practice infrastructure engagements. Actual results depend on facility condition, scope, and implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group relative bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
            >
              <div className="h-1.5 w-full rounded-t-xl bg-gradient-to-r from-gray-200 to-gray-100" />
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-[#0f62fe]/10 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-[#0f62fe]" />
                  </div>
                </div>
                <p className="carbon-fluid-heading-03 text-[#0F172A] font-light mb-1">{s.value}</p>
                <p className="carbon-heading-02 text-gray-900 mb-2">{s.label}</p>
                <p className="carbon-body-02 text-gray-500">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
