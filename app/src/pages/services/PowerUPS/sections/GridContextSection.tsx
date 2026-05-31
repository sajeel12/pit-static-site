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
            Why Standard UPS Isn't Enough Here
          </h2>
        </div>

        {/* 3 Grid Facts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200">
            <div className="w-10 h-10 rounded-lg bg-[#f1c21b]/10 flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-[#f1c21b]" />
            </div>
            <div>
              <p className="carbon-heading-02 text-[#161616] mb-1">Voltage Swings</p>
              <p className="carbon-body-02 text-gray-600">
                Significant voltage fluctuations common in major industrial zones — standard AVR and entry-level UPS often cannot compensate, risking hardware damage and data corruption.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200">
            <div className="w-10 h-10 rounded-lg bg-[#f1c21b]/10 flex items-center justify-center flex-shrink-0">
              <Activity className="w-5 h-5 text-[#f1c21b]" />
            </div>
            <div>
              <p className="carbon-heading-02 text-[#161616] mb-1">Frequency Drift</p>
              <p className="carbon-body-02 text-gray-600">
                Grid frequency instability outside nominal 50Hz tolerance. Online double-conversion UPS isolates sensitive loads from generator sync failures and phase mismatches.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200">
            <div className="w-10 h-10 rounded-lg bg-[#da1e28]/10 flex items-center justify-center flex-shrink-0">
              <Gauge className="w-5 h-5 text-[#da1e28]" />
            </div>
            <div>
              <p className="carbon-heading-02 text-[#161616] mb-1">Outage Frequency</p>
              <p className="carbon-body-02 text-gray-600">
                Load-shedding and unplanned outages remain an operational reality across Pakistani industrial and commercial sectors. Runtime modeling and generator sync are essential, not optional.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#0f1d3a] rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="carbon-body-02 text-white/90">
            Every Perception-IT deployment includes grid-sync testing and 72-hour fluctuation simulation before handover.
          </p>
          <a
            href="#/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f62fe] text-white carbon-heading-02 rounded-lg hover:bg-[#0353e9] transition-colors whitespace-nowrap"
          >
            Request Site Assessment
          </a>
        </div>
      </div>
    </section>
  );
}
