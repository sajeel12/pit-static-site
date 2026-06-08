import { AlertTriangle, Zap, Activity, Gauge } from 'lucide-react';

export default function GridContextSection() {
  return (
    <section className="py-12 md:py-16 bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#da1e28]/10 text-[#da1e28] carbon-label-02 rounded-full mb-3">
            <AlertTriangle className="w-4 h-4" />
            Pakistani Grid Reality
          </span>
          <h2 className="carbon-fluid-heading-05 text-[#161616]">
            Why Off-the-Shelf UPS Fails on{' '}
            <span className="whitespace-nowrap">Pakistani Infrastructure</span>
          </h2>
        </div>

        {/* 3 Grid Facts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            {
              icon: Zap,
              color: '#f1c21b',
              title: 'Voltage Swings',
              body: 'Significant voltage fluctuations common in major industrial zones. Standard AVR and entry-level UPS often cannot compensate, risking hardware damage and data corruption.',
            },
            {
              icon: Activity,
              color: '#f1c21b',
              title: 'Frequency Drift',
              body: 'Grid frequency instability outside nominal 50Hz tolerance. Online double-conversion UPS isolates sensitive loads from generator sync failures and phase mismatches.',
            },
            {
              icon: Gauge,
              color: '#da1e28',
              title: 'Outage Frequency',
              body: 'Load-shedding and unplanned outages remain an operational reality across Pakistani industrial and commercial sectors. Runtime modelling and generator sync are essential, not optional.',
            },
          ].map((card) => (
            <div
              key={card.title}
              className="flex flex-col sm:flex-row md:flex-col items-center sm:items-start md:items-start text-center sm:text-left md:text-left p-5 bg-white rounded-xl border border-gray-200"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mb-3 sm:mb-0 md:mb-3 sm:mr-4 md:mr-0"
                style={{ backgroundColor: card.color + '10' }}
              >
                <card.icon className="w-5 h-5" style={{ color: card.color }} />
              </div>
              <div>
                <p className="carbon-heading-02 text-[#161616] mb-1">{card.title}</p>
                <p className="carbon-body-02 text-gray-600">{card.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#0f1d3a] rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center text-center md:text-left justify-between gap-4">
          <p className="carbon-body-02 text-white/90">
            Every Perception-IT deployment includes grid-sync testing and fluctuation simulation before handover.
          </p>
          <a
            href="mailto:contact@perception-it.com?subject=Site%20Assessment%20Request%20-%20Power%20and%20UPS"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f62fe] text-white carbon-heading-02 rounded-lg hover:bg-[#0353e9] transition-colors whitespace-nowrap"
          >
            Request Site Assessment
          </a>
        </div>
      </div>
    </section>
  );
}
