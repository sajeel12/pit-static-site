import { MONITORING_TOOLS } from '../data';

const DEPLOYMENT_OPTIONS = [
  { label: 'Hardwired Sensors', desc: 'Zero-latency for mission-critical zones' },
  { label: 'Wireless Sensors', desc: 'Retrofit-friendly for legacy sites' },
  { label: 'Ethernet Gateway', desc: 'Real-time API + dashboard integration' },
  { label: 'SMS Gateway', desc: 'Remote alerts where internet is unreliable' },
];

export default function MonitoringSection() {
  return (
    <section id="monitoring" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
            Monitoring
          </span>
          <h2 className="carbon-fluid-display-02 text-[#161616] mb-4">
            Proactive Power Observability
          </h2>
          <p className="carbon-body-02 text-gray-600">
            Predict failures before they cause downtime. AI-driven battery health forecasting, 
            circuit-level monitoring, and unified NOC dashboards.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {MONITORING_TOOLS.map((group) => (
            <div key={group.category} className="bg-[#f4f4f4] rounded-xl p-6 sm:p-8">
              <h3 className="carbon-heading-02 text-[#161616] mb-6">{group.category}</h3>
              <div className="space-y-4">
                {group.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-[#0f62fe]/30 hover:shadow-sm transition-all"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#0f62fe] mt-2 flex-shrink-0" />
                    <div>
                      <p className="carbon-heading-02 text-[#161616]">{item.label}</p>
                      <p className="carbon-body-02 text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Deployment Options */}
        <div className="bg-[#0f1d3a] rounded-xl p-6 sm:p-8">
          <h3 className="carbon-heading-02 text-white mb-6">Deployment Options</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {DEPLOYMENT_OPTIONS.map((opt) => (
              <div key={opt.label} className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <p className="carbon-heading-02 text-white mb-1">{opt.label}</p>
                <p className="carbon-body-02 text-white/60">{opt.desc}</p>
              </div>
            ))}
          </div>
          <p className="carbon-body-02 text-white/80">
            View all power health metrics in the Perception-IT NOC Dashboard — mobile app + API integration available.
          </p>
        </div>
      </div>
    </section>
  );
}
