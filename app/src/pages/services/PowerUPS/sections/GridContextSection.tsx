import { useState } from 'react';
import { AlertTriangle, MapPin, Zap, Activity, Gauge } from 'lucide-react';

const CITY_RECOMMENDATIONS: Record<string, { risk: string; rec: string; icon: string }> = {
  Lahore: { risk: 'High fluctuation risk', rec: 'Line-Interactive + AVR + Generator sync', icon: 'high' },
  Karachi: { risk: 'High fluctuation + humidity', rec: 'Online Double-Conversion + Li-ion', icon: 'high' },
  Islamabad: { risk: 'Moderate fluctuation', rec: 'Line-Interactive + Extended backup', icon: 'medium' },
  Faisalabad: { risk: 'High industrial load variance', rec: 'Three Phase + Modular + AVR', icon: 'high' },
  Multan: { risk: 'Moderate + seasonal spikes', rec: 'Line-Interactive + Generator sync', icon: 'medium' },
  Rawalpindi: { risk: 'Moderate fluctuation', rec: 'Online + SNMP monitoring', icon: 'medium' },
};

export default function GridContextSection() {
  const [city, setCity] = useState('Lahore');
  const data = CITY_RECOMMENDATIONS[city];

  return (
    <section className="py-12 md:py-16 bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#da1e28]/10 text-[#da1e28] carbon-label-02 rounded-full mb-3">
              <AlertTriangle className="w-4 h-4" />
              Pakistani Grid Reality
            </span>
            <h2 className="carbon-fluid-heading-05 text-[#161616]">
              Why Standard UPS Isn't Enough Here
            </h2>
          </div>

          {/* City Selector */}
          <div className="flex items-center gap-3">
            <span className="carbon-body-02 text-gray-500">Your location:</span>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="px-4 py-2.5 bg-white border border-gray-300 rounded-lg carbon-body-02 text-gray-900 focus:outline-none focus:border-[#0f62fe] focus:ring-1 focus:ring-[#0f62fe]"
            >
              {Object.keys(CITY_RECOMMENDATIONS).map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
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
                Load-shedding and unplanned outages remain a operational reality across Pakistani industrial and commercial sectors. Runtime modeling and generator sync are essential, not optional.
              </p>
            </div>
          </div>
        </div>

        {/* City Recommendation */}
        <div className="bg-[#0f1d3a] rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <MapPin className="w-6 h-6 text-[#78a9ff]" />
            <div>
              <p className="carbon-label-02 text-white/60 uppercase">{city} — {data.risk}</p>
              <p className="carbon-heading-02 text-white">Recommended: {data.rec}</p>
            </div>
          </div>
          <a
            href="#/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f62fe] text-white carbon-heading-02 rounded-lg hover:bg-[#0353e9] transition-colors whitespace-nowrap"
          >
            Get Location-Specific Assessment
          </a>
        </div>
      </div>
    </section>
  );
}
