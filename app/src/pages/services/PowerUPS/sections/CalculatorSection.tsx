import { useState, useEffect } from 'react';
import { Calculator, ArrowRight, Check, RefreshCw } from 'lucide-react';

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
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (load && criticality) {
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
      setShowResult(true);
    } else {
      setShowResult(false);
    }
  }, [load, criticality]);

  const reset = () => {
    setLoad('');
    setCriticality('');
    setResult(null);
    setShowResult(false);
  };

  return (
    <section id="calculator" className="py-16 md:py-24 bg-[#161616]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0f62fe]/10 border border-[#0f62fe]/30 text-[#78a9ff] carbon-label-02 rounded-full mb-4">
            <Calculator className="w-4 h-4" />
            Power Resilience Calculator
          </span>
          <h2 className="carbon-fluid-heading-05 text-white mb-4">
            Find Your Right-Sized Architecture
          </h2>
          <p className="carbon-body-02 text-[#a8a8a8] max-w-2xl mx-auto">
            Two-field estimator: (1) Input your peak load, (2) Select your criticality level. Get a recommended UPS topology, battery chemistry, and 10-year TCO range.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-[#262626] border border-[#393939] p-8 md:p-12">
          {/* Progress */}
          <div className="mb-10">
            <div className="flex items-center justify-between max-w-md mx-auto relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#393939] -translate-y-1/2" />
              <div
                className={`absolute top-1/2 left-0 h-0.5 bg-[#0f62fe] -translate-y-1/2 transition-all duration-500 ${
                  load && criticality ? 'w-full' : load ? 'w-1/2' : 'w-0'
                }`}
              />
              <div className="relative z-10 flex flex-col items-center">
                <div className={`w-8 h-8 flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                  load ? 'bg-[#0f62fe] text-white' : 'bg-[#262626] border border-[#525252] text-[#a8a8a8]'
                }`}>
                  {load ? <Check className="w-4 h-4" /> : '1'}
                </div>
              </div>
              <div className="relative z-10 flex flex-col items-center">
                <div className={`w-8 h-8 flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                  criticality ? 'bg-[#0f62fe] text-white' : load ? 'bg-[#262626] border-2 border-[#0f62fe] text-[#0f62fe]' : 'bg-[#262626] border border-[#525252] text-[#a8a8a8]'
                }`}>
                  {criticality ? <Check className="w-4 h-4" /> : '2'}
                </div>
              </div>
            </div>
            <div className="flex justify-between max-w-md mx-auto mt-2">
              <span className={`carbon-helper-text-01 ${load ? 'text-[#0f62fe]' : 'text-[#6f6f6f]'}`}>Peak Load</span>
              <span className={`carbon-helper-text-01 ${criticality ? 'text-[#0f62fe]' : 'text-[#6f6f6f]'}`}>Criticality</span>
            </div>
          </div>

          {/* Question 1 — Load */}
          <div className="mb-10">
            <div className="flex items-start gap-3 mb-4">
              <span className="w-6 h-6 bg-[#0f62fe] flex items-center justify-center text-xs font-bold text-white mt-0.5">1</span>
              <div>
                <p className="carbon-heading-02 text-white mb-1">What's your peak load?</p>
                <p className="carbon-body-01 text-[#a8a8a8]">Select the kVA range that matches your infrastructure</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {LOAD_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setLoad(load === opt.value ? '' : opt.value)}
                  className={`p-4 text-left border transition-all duration-200 ${
                    load === opt.value
                      ? 'bg-[#0f62fe] border-[#0f62fe] text-white'
                      : 'bg-[#161616] border-[#393939] text-[#e0e0e0] hover:border-[#0f62fe] hover:bg-[#0f62fe]/10'
                  }`}
                >
                  <span className={`carbon-heading-01 block mb-1 ${load === opt.value ? 'text-white' : 'text-[#e0e0e0]'}`}>
                    {opt.label}
                  </span>
                  <span className={`carbon-helper-text-01 ${load === opt.value ? 'text-white/80' : 'text-[#8d8d8d]'}`}>
                    {opt.load}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Question 2 — Criticality */}
          <div className="mb-6">
            <div className="flex items-start gap-3 mb-4">
              <span className="w-6 h-6 bg-[#0f62fe] flex items-center justify-center text-xs font-bold text-white mt-0.5">2</span>
              <div>
                <p className="carbon-heading-02 text-white mb-1">How critical is downtime?</p>
                <p className="carbon-body-01 text-[#a8a8a8]">This determines UPS topology and battery chemistry</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {CRITICALITY_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setCriticality(criticality === opt.value ? '' : opt.value)}
                  className={`p-4 text-left border transition-all duration-200 ${
                    criticality === opt.value
                      ? 'bg-[#0f62fe] border-[#0f62fe] text-white'
                      : 'bg-[#161616] border-[#393939] text-[#e0e0e0] hover:border-[#0f62fe] hover:bg-[#0f62fe]/10'
                  }`}
                >
                  <span className={`carbon-heading-01 block mb-1 ${criticality === opt.value ? 'text-white' : 'text-[#e0e0e0]'}`}>
                    {opt.label}
                  </span>
                  <span className={`carbon-helper-text-01 ${criticality === opt.value ? 'text-white/80' : 'text-[#8d8d8d]'}`}>
                    {opt.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Result — appears only when both fields are selected */}
        {showResult && result && (
          <div className="mt-6 bg-[#f4f4f4] text-[#161616] p-8 md:p-10 border-l-4 border-[#0f62fe] animate-fade-in">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 bg-[#0f62fe] flex items-center justify-center flex-shrink-0">
                <Check className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <p className="carbon-label-01 text-[#0f62fe] uppercase tracking-wider mb-1">Your Recommended Architecture</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 bg-white border border-gray-200">
                    <p className="carbon-label-02 text-gray-500 uppercase mb-1">UPS Topology</p>
                    <p className="carbon-heading-02 text-[#161616]">{result.ups}</p>
                  </div>
                  <div className="p-4 bg-white border border-gray-200">
                    <p className="carbon-label-02 text-gray-500 uppercase mb-1">Battery Chemistry</p>
                    <p className="carbon-heading-02 text-[#161616]">{result.battery}</p>
                  </div>
                  <div className="p-4 bg-white border border-gray-200">
                    <p className="carbon-label-02 text-gray-500 uppercase mb-1">10-Year TCO Estimate</p>
                    <p className="carbon-fluid-heading-03 text-[#161616]">{result.tco}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="#/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f62fe] text-white carbon-heading-02 rounded-lg hover:bg-[#0353e9] transition-colors"
                  >
                    Get Detailed Quote
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={reset}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-[#161616] text-[#161616] carbon-heading-02 rounded-lg hover:bg-[#161616] hover:text-white transition-colors"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Start Over
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
