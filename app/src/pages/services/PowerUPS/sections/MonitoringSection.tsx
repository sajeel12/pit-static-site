import { Zap, Wifi, Globe, MessageSquare } from 'lucide-react';
import { MONITORING_TOOLS } from '../data';

const DEPLOYMENT_OPTIONS = [
  { label: 'Hardwired Sensors', desc: 'Zero-latency for mission-critical zones', icon: Zap },
  { label: 'Wireless Sensors', desc: 'Retrofit-friendly for legacy sites', icon: Wifi },
  { label: 'Ethernet Gateway', desc: 'Real-time API + dashboard integration', icon: Globe },
  { label: 'SMS Gateway', desc: 'Remote alerts where internet is unreliable', icon: MessageSquare },
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
          <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
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
          <h3 className="carbon-heading-02 text-white mb-5 text-center">Deployment Options</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {DEPLOYMENT_OPTIONS.map((opt) => (
              <div key={opt.label} className="p-5 bg-white/5 border border-white/10 rounded-lg">
                <opt.icon className="w-5 h-5 text-[#78a9ff] mb-3" />
                <p className="carbon-heading-02 text-white mb-1">{opt.label}</p>
                <p className="carbon-body-02 text-white/60">{opt.desc}</p>
              </div>
            ))}
          </div>

          {/* NOC Dashboard Benefit */}
          <div className="bg-[#0f62fe]/10 border border-[#0f62fe]/20 rounded-xl p-6 sm:p-8 text-center">
            <p className="carbon-label-02 text-[#78a9ff] uppercase tracking-wider mb-3">
              Perception IT NOC Dashboard for Power and UPS
            </p>
            <h3 className="carbon-fluid-heading-03 text-white mb-3">
              One dashboard. Every metric. Zero blind spots.
            </h3>
            <p className="carbon-body-02 text-white/70 max-w-2xl mx-auto mb-6">
              View all power health metrics in real time, from any device. Mobile app and API integration included.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              {['Real-time metrics', 'Mobile app', 'API access', 'AI alerting'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-white/10 text-white/90 carbon-label-01 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="mailto:info@perception-it.com?subject=NOC%20Dashboard%20Demo%20Request%20-%20UPS"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0f62fe] carbon-heading-02 rounded-lg hover:bg-white/90 transition-colors"
            >
              Request Dashboard Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
