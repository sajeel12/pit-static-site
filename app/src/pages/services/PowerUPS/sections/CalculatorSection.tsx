import { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';

const LOAD_OPTIONS = [
  { value: '5', label: '1–10 kVA', load: 'Small office / edge rack' },
  { value: '20', label: '10–30 kVA', load: 'Server room / branch office' },
 { value: '50', label: '30–80 kVA', load: 'Mid-size data centre' },
  { value: '150', label: '80–200 kVA', load: 'Enterprise facility' },
  { value: '400', label: '200–500 kVA', load: 'Large data centre' },
  { value: '800', label: '500–800+ kVA', load: 'Hyperscale / industrial' },
];

const CRITICALITY_OPTIONS = [
  { value: 'low', label: 'Low', desc: 'Workstations, non-critical IT' },
  { value: 'medium', label: 'Medium', desc: 'Business servers, network gear' },
  { value: 'high', label: 'High', desc: 'Mission-critical infrastructure' },
];

export default function CalculatorSection() {
  const [load, setLoad] = useState('');
  const [criticality, setCriticality] = useState('');
  const [result, setResult] = useState<null | { ups: string; battery: string; tco: string }>(null);

  const calculate = () => {
    const loadNum = parseInt(load);
    const crit = criticality;

    let ups = 'Single Phase UPS';
    let battery = 'VRLA (standard)';
    let tco = 'PKR 450K – 900K';

    if (loadNum >= 400) {
      ups = crit === 'high' ? 'Three Phase Online + Modular N+1' : 'Three Phase Online';
      battery = 'Li-ion (SmartLi)';
      tco = 'PKR 12M – 25M (10yr)';
    } else if (loadNum >= 150) {
      ups = crit === 'high' ? 'Three Phase Online + N+1' : 'Three Phase Online';
      battery = crit === 'high' ? 'Li-ion' : 'VRLA';
      tco = 'PKR 4M – 8M (10yr)';
    } else if (loadNum >= 50) {
      ups = crit === 'high' ? 'Modular Online (N+1)' : 'Three Phase / Modular';
      battery = crit === 'high' ? 'Li-ion' : 'VRLA';
      tco = 'PKR 1.5M – 3.5M (10yr)';
    } else if (loadNum >= 20) {
      ups = crit === 'high' ? 'Online Double-Conversion' : 'Line-Interactive + AVR';
      battery = 'VRLA';
      tco = 'PKR 600K – 1.2M (10yr)';
    } else {
      ups = crit === 'high' ? 'Online (1–3kVA)' : 'Line-Interactive';
      battery = 'VRLA';
      tco = 'PKR 150K – 350K (10yr)';
    }

    setResult({ ups, battery, tco });
  };

  const canCalculate = load && criticality;

  return (
    <section id="calculator" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0f62fe]/10 text-[#0f62fe] carbon-label-02 rounded-full mb-3">
            <Calculator className="w-4 h-4" />
            Power Resilience Calculator
          </span>
          <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
            Find Your Right-Sized Architecture
          </h2>
          <p className="carbon-body-02 text-gray-600">
            2-field estimator: input your peak load and criticality level. 
            Get a recommended UPS topology, battery chemistry, and 10-year TCO range.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-[#f4f4f4] rounded-xl p-6 sm:p-8">
            <div className="space-y-6">
              {/* Load */}
              <div>
                <label className="block carbon-label-02 text-gray-500 uppercase mb-2">
                  Peak Load (kVA)
                </label>
                <select
                  value={load}
                  onChange={(e) => { setLoad(e.target.value); setResult(null); }}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg carbon-body-02 text-gray-900 focus:outline-none focus:border-[#0f62fe] focus:ring-1 focus:ring-[#0f62fe]"
                >
                  <option value="">Select load range</option>
                  {LOAD_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label} — {opt.load}
                    </option>
                  ))}
                </select>
              </div>

              {/* Criticality */}
              <div>
                <label className="block carbon-label-02 text-gray-500 uppercase mb-2">
                  Load Criticality
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {CRITICALITY_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => { setCriticality(opt.value); setResult(null); }}
                      className={`p-4 rounded-lg border text-left transition-all ${
                        criticality === opt.value
                          ? 'border-[#0f62fe] bg-[#0f62fe]/5'
                          : 'border-gray-300 bg-white hover:border-gray-400'
                      }`}
                    >
                      <p className={`carbon-heading-02 ${criticality === opt.value ? 'text-[#0f62fe]' : 'text-[#161616]'}`}>
                        {opt.label}
                      </p>
                      <p className="carbon-body-02 text-gray-500 mt-1">{opt.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={calculate}
                disabled={!canCalculate}
                className={`w-full flex items-center justify-center gap-2 px-6 py-4 carbon-heading-02 rounded-lg transition-all ${
                  canCalculate
                    ? 'bg-[#0f62fe] text-white hover:bg-[#0353e9] hover:shadow-lg'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Calculate Recommendation
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Result */}
          <div className="bg-[#0f1d3a] rounded-xl p-6 sm:p-8 flex flex-col justify-center">
            {result ? (
              <div className="animate-fade-in">
                <p className="carbon-label-02 text-[#78a9ff] uppercase mb-4">Recommended Architecture</p>

                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <p className="carbon-label-02 text-white/60 uppercase mb-1">UPS Topology</p>
                    <p className="carbon-heading-02 text-white">{result.ups}</p>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <p className="carbon-label-02 text-white/60 uppercase mb-1">Battery Chemistry</p>
                    <p className="carbon-heading-02 text-white">{result.battery}</p>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <p className="carbon-label-02 text-white/60 uppercase mb-1">10-Year TCO Estimate</p>
                    <p className="carbon-fluid-heading-03 text-white">{result.tco}</p>
                  </div>
                </div>

                <a
                  href="#/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f62fe] text-white carbon-heading-02 rounded-lg hover:bg-[#0353e9] transition-colors"
                >
                  Get Detailed Quote
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ) : (
              <div className="text-center">
                <Calculator className="w-16 h-16 text-white/10 mx-auto mb-4" />
                <p className="carbon-heading-02 text-white/40">Select load and criticality to see your recommendation</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
