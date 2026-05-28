import { useState, useMemo } from 'react';
import { Zap, AlertTriangle, Clock } from 'lucide-react';

type Tab = 'pue' | 'downtime' | 'capex';

/* ------------------------------------------------------------------ */
/*  PUE ENERGY CALCULATOR                                             */
/* ------------------------------------------------------------------ */
function PUECalculator() {
  const [loadKw, setLoadKw] = useState(100);
  const [currentPue, setCurrentPue] = useState(1.8);
  const [targetPue, setTargetPue] = useState(1.4);
  const [costPerKwh, setCostPerKwh] = useState(35);

  const results = useMemo(() => {
    const annualHours = 8760;
    const currentTotal = loadKw * currentPue * annualHours;
    const targetTotal = loadKw * targetPue * annualHours;
    const currentCost = currentTotal * costPerKwh;
    const targetCost = targetTotal * costPerKwh;
    const annualSavings = currentCost - targetCost;
    const savingsPercent = currentCost > 0 ? (annualSavings / currentCost) * 100 : 0;
    const co2ReductionTons = (currentTotal - targetTotal) * 0.0005;

    return {
      currentCost: Math.round(currentCost),
      targetCost: Math.round(targetCost),
      annualSavings: Math.round(annualSavings),
      savingsPercent: Math.round(savingsPercent),
      co2ReductionTons: Math.round(co2ReductionTons * 10) / 10,
    };
  }, [loadKw, currentPue, targetPue, costPerKwh]);

  const fmt = (n: number) => `PKR ${n.toLocaleString('en-PK')}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Inputs */}
      <div className="bg-[#1e293b] rounded-xl border border-white/10 p-5 sm:p-8">
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-10 h-10 rounded-lg bg-[#0f62fe]/20 flex items-center justify-center flex-shrink-0"><Zap className="w-5 h-5 text-[#78a9ff]" /></div>
          <p className="carbon-heading-02 text-white">Your Facility</p>
        </div>
        <div className="space-y-8">
          <Slider label="IT Load" value={loadKw} min={10} max={1000} step={10} unit="kW" display={`${loadKw} kW`} onChange={setLoadKw} />
          <Slider label="Current PUE" value={currentPue} min={1.1} max={3.0} step={0.1} unit="" display={currentPue.toFixed(1)} onChange={setCurrentPue} />
          <Slider label="Target PUE" value={targetPue} min={1.1} max={2.5} step={0.1} unit="" display={targetPue.toFixed(1)} onChange={setTargetPue} />
          <Slider label="Electricity Rate" value={costPerKwh} min={15} max={80} step={1} unit="PKR/kWh" display={`PKR ${costPerKwh}/kWh`} onChange={setCostPerKwh} />
        </div>
      </div>

      {/* Results */}
      <div className="space-y-6">
        <div className="bg-[#1e293b] rounded-xl border border-white/10 p-5 sm:p-8">
          <p className="carbon-label-02 text-gray-400 uppercase mb-6">Estimated Annual Impact</p>
          <ResultRow label="Current annual energy cost" value={fmt(results.currentCost)} highlight={false} />
          <ResultRow label="Optimised annual energy cost" value={fmt(results.targetCost)} highlight={false} color="text-[#78a9ff]" />
          <ResultRow label="Annual savings" value={fmt(results.annualSavings)} highlight border />
          <ResultRow label="Savings percentage" value={`${results.savingsPercent}%`} highlight={false} />
          <ResultRow label="Estimated CO₂ reduction" value={`${results.co2ReductionTons} tons/year`} highlight={false} color="text-[#22c55e]" />
        </div>
        <Disclaimer />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  DOWNTIME COST CALCULATOR                                          */
/* ------------------------------------------------------------------ */
function DowntimeCalculator() {
  const [revenuePerHour, setRevenuePerHour] = useState(500000);
  const [employees, setEmployees] = useState(50);
  const [hourlyWage, setHourlyWage] = useState(500);
  const [recoveryHours, setRecoveryHours] = useState(4);
  const [outagesPerYear, setOutagesPerYear] = useState(2);

  const results = useMemo(() => {
    const revenueLoss = revenuePerHour * recoveryHours;
    const productivityLoss = employees * hourlyWage * recoveryHours;
    const recoveryCost = recoveryHours * 50000; // rough engineer + parts estimate
    const perOutage = revenueLoss + productivityLoss + recoveryCost;
    const annualExposure = perOutage * outagesPerYear;

    return {
      revenueLoss: Math.round(revenueLoss),
      productivityLoss: Math.round(productivityLoss),
      recoveryCost: Math.round(recoveryCost),
      perOutage: Math.round(perOutage),
      annualExposure: Math.round(annualExposure),
    };
  }, [revenuePerHour, employees, hourlyWage, recoveryHours, outagesPerYear]);

  const fmt = (n: number) => `PKR ${n.toLocaleString('en-PK')}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-[#1e293b] rounded-xl border border-white/10 p-5 sm:p-8">
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-10 h-10 rounded-lg bg-[#da1e28]/20 flex items-center justify-center flex-shrink-0"><AlertTriangle className="w-5 h-5 text-[#da1e28]" /></div>
          <p className="carbon-heading-02 text-white">Downtime Scenario</p>
        </div>
        <div className="space-y-8">
          <Slider label="Revenue per hour" value={revenuePerHour} min={50000} max={5000000} step={50000} unit="PKR" display={`PKR ${(revenuePerHour / 1000).toFixed(0)}K`} onChange={setRevenuePerHour} />
          <Slider label="Employees affected" value={employees} min={5} max={500} step={5} unit="" display={`${employees}`} onChange={setEmployees} />
          <Slider label="Average hourly wage" value={hourlyWage} min={200} max={5000} step={100} unit="PKR" display={`PKR ${hourlyWage}`} onChange={setHourlyWage} />
          <Slider label="Estimated recovery time" value={recoveryHours} min={1} max={48} step={1} unit="hours" display={`${recoveryHours} hours`} onChange={setRecoveryHours} />
          <Slider label="Unplanned outages per year" value={outagesPerYear} min={0} max={12} step={1} unit="" display={`${outagesPerYear}`} onChange={setOutagesPerYear} />
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-[#1e293b] rounded-xl border border-white/10 p-5 sm:p-8">
          <p className="carbon-label-02 text-gray-400 uppercase mb-6">Cost per Outage</p>
          <ResultRow label="Revenue loss" value={fmt(results.revenueLoss)} highlight={false} />
          <ResultRow label="Productivity loss" value={fmt(results.productivityLoss)} highlight={false} />
          <ResultRow label="Recovery cost (engineers + parts)" value={fmt(results.recoveryCost)} highlight={false} />
          <ResultRow label="Total per outage" value={fmt(results.perOutage)} highlight border />
          <ResultRow label="Annual risk exposure" value={fmt(results.annualExposure)} highlight={false} color="text-[#da1e28]" />
        </div>
        <Disclaimer />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  DEFERRED CAPEX CALCULATOR                                         */
/* ------------------------------------------------------------------ */
function CapExCalculator() {
  const [replacementCost, setReplacementCost] = useState(5000000);
  const [currentAge, setCurrentAge] = useState(8);
  const [expectedLifespan, setExpectedLifespan] = useState(15);
  const [optimisationSpend, setOptimisationSpend] = useState(1500000);
  const [efficiencyGain, setEfficiencyGain] = useState(30);

  const results = useMemo(() => {
    const yearsExtended = (expectedLifespan - currentAge) * (efficiencyGain / 100);
    const monthsExtended = Math.round(yearsExtended * 12);
    const deferredDate = new Date();
    deferredDate.setMonth(deferredDate.getMonth() + monthsExtended);
    const netSavings = replacementCost - optimisationSpend;
    const roi = optimisationSpend > 0 ? ((netSavings / optimisationSpend) * 100) : 0;

    return {
      monthsExtended,
      deferredDate: deferredDate.toLocaleDateString('en-PK', { year: 'numeric', month: 'long' }),
      netSavings: Math.round(netSavings),
      roi: Math.round(roi),
    };
  }, [replacementCost, currentAge, expectedLifespan, optimisationSpend, efficiencyGain]);

  const fmt = (n: number) => `PKR ${n.toLocaleString('en-PK')}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-[#1e293b] rounded-xl border border-white/10 p-5 sm:p-8">
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-10 h-10 rounded-lg bg-[#22c55e]/20 flex items-center justify-center flex-shrink-0"><Clock className="w-5 h-5 text-[#22c55e]" /></div>
          <p className="carbon-heading-02 text-white">Equipment Profile</p>
        </div>
        <div className="space-y-8">
          <Slider label="Replacement cost" value={replacementCost} min={500000} max={50000000} step={500000} unit="PKR" display={`PKR ${(replacementCost / 1000000).toFixed(1)}M`} onChange={setReplacementCost} />
          <Slider label="Current equipment age" value={currentAge} min={1} max={25} step={1} unit="years" display={`${currentAge} years`} onChange={setCurrentAge} />
          <Slider label="Expected lifespan" value={expectedLifespan} min={5} max={30} step={1} unit="years" display={`${expectedLifespan} years`} onChange={setExpectedLifespan} />
          <Slider label="Optimisation spend" value={optimisationSpend} min={100000} max={10000000} step={100000} unit="PKR" display={`PKR ${(optimisationSpend / 1000000).toFixed(1)}M`} onChange={setOptimisationSpend} />
          <Slider label="Efficiency gain" value={efficiencyGain} min={5} max={60} step={5} unit="%" display={`${efficiencyGain}%`} onChange={setEfficiencyGain} />
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-[#1e293b] rounded-xl border border-white/10 p-5 sm:p-8">
          <p className="carbon-label-02 text-gray-400 uppercase mb-6">Deferral Impact</p>
          <ResultRow label="Equipment life extended by" value={`${results.monthsExtended} months`} highlight={false} color="text-[#78a9ff]" />
          <ResultRow label="New replacement date" value={results.deferredDate} highlight={false} />
          <ResultRow label="Replacement cost avoided now" value={fmt(results.netSavings)} highlight border />
          <ResultRow label="Return on optimisation spend" value={`${results.roi}%`} highlight={false} color="text-[#22c55e]" />
        </div>
        <Disclaimer />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SHARED UI COMPONENTS                                              */
/* ------------------------------------------------------------------ */
function Slider({ label, value, min, max, step, unit, display, onChange }: {
  label: string; value: number; min: number; max: number; step: number; unit: string; display: string; onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <label className="carbon-label-02 text-gray-400 uppercase">{label}</label>
        <span className="carbon-body-02 text-white">{display}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full accent-[#0f62fe]" />
      <div className="flex justify-between mt-1">
        <span className="carbon-helper-text-01 text-gray-500">{min} {unit}</span>
        <span className="carbon-helper-text-01 text-gray-500">{max} {unit}</span>
      </div>
    </div>
  );
}

function ResultRow({ label, value, highlight, border, color }: { label: string; value: string; highlight?: boolean; border?: boolean; color?: string }) {
  return (
    <div className={`flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-0 pb-4 ${border ? 'border-b border-[#0f62fe]/30' : 'border-b border-white/10'}`}>
      <span className={`carbon-body-02 ${highlight ? 'text-white font-medium' : 'text-gray-400'}`}>{label}</span>
      <span className={`carbon-heading-02 ${highlight ? 'text-[#0f62fe]' : color ?? 'text-white'}`}>{value}</span>
    </div>
  );
}

function Disclaimer() {
  return (
    <div className="p-5 bg-[#0f62fe]/10 rounded-xl border border-[#0f62fe]/20">
      <p className="carbon-body-02 text-gray-300">
        <strong className="text-white">This is an estimate only.</strong> Actual outcomes depend on facility condition, infrastructure age, utility rates, and scope of work. A site assessment is required for a firm proposal.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN SECTION                                                      */
/* ------------------------------------------------------------------ */
export default function ROICalculatorSection() {
  const [activeTab, setActiveTab] = useState<Tab>('pue');

  const tabs: { id: Tab; label: string; icon: typeof Zap }[] = [
    { id: 'pue', label: 'PUE Energy', icon: Zap },
    { id: 'downtime', label: 'Downtime Cost', icon: AlertTriangle },
    { id: 'capex', label: 'Deferred CapEx', icon: Clock },
  ];

  return (
    <section id="calculator" className="py-20 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12">
          <p className="carbon-label-01 text-[#78a9ff] uppercase mb-3">ROI Calculators</p>
          <h2 className="carbon-fluid-heading-05 text-white mb-4">
            Run Your Own Numbers
          </h2>
          <p className="carbon-body-02 text-gray-400 max-w-2xl">
            Estimate savings from energy reduction, downtime avoidance, or capital deferral. Pick the calculator that matches your priority.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2 -mx-6 px-6 sm:mx-0 sm:px-0 no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-[#0f62fe] text-white shadow-lg shadow-[#0f62fe]/20'
                    : 'bg-[#1e293b] text-gray-400 border border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Active Calculator */}
        {activeTab === 'pue' && <PUECalculator />}
        {activeTab === 'downtime' && <DowntimeCalculator />}
        {activeTab === 'capex' && <CapExCalculator />}
      </div>
    </section>
  );
}
