import { useState, useMemo } from 'react';
import { Zap, AlertTriangle, Clock } from 'lucide-react';

type Tab = 'pue' | 'downtime' | 'capex';

/* ------------------------------------------------------------------ */
/*  PUE ENERGY CALCULATOR — BLUE THEME                                */
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
      <div className="bg-[#0f172a] rounded-xl border border-[#0f62fe]/20 p-5 sm:p-8">
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-10 h-10 rounded-lg bg-[#0f62fe]/20 flex items-center justify-center"><Zap className="w-5 h-5 text-[#78a9ff]" /></div>
          <p className="carbon-heading-02 text-white">Your Facility</p>
        </div>
        <div className="space-y-8">
          <Slider label="IT Load" value={loadKw} min={10} max={1000} step={10} unit="kW" display={`${loadKw} kW`} onChange={setLoadKw} accent="#0f62fe" />
          <Slider label="Current PUE" value={currentPue} min={1.1} max={3.0} step={0.1} unit="" display={currentPue.toFixed(1)} onChange={setCurrentPue} accent="#0f62fe" />
          <Slider label="Target PUE" value={targetPue} min={1.1} max={2.5} step={0.1} unit="" display={targetPue.toFixed(1)} onChange={setTargetPue} accent="#0f62fe" />
          <Slider label="Electricity Rate" value={costPerKwh} min={15} max={80} step={1} unit="PKR/kWh" display={`PKR ${costPerKwh}/kWh`} onChange={setCostPerKwh} accent="#0f62fe" />
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-[#0f172a] rounded-xl border border-[#0f62fe]/20 p-5 sm:p-8">
          <p className="carbon-label-02 text-gray-400 uppercase mb-6">Estimated Annual Impact</p>
          <ResultRow label="Current annual energy cost" value={fmt(results.currentCost)} />
          <ResultRow label="Optimised annual energy cost" value={fmt(results.targetCost)} color="text-[#78a9ff]" />
          <ResultRow label="Annual savings" value={fmt(results.annualSavings)} highlight highlightColor="border-[#0f62fe]/30" textColor="text-[#0f62fe]" />
          <ResultRow label="Savings percentage" value={`${results.savingsPercent}%`} />
          <ResultRow label="Estimated CO₂ reduction" value={`${results.co2ReductionTons} tons/year`} color="text-[#22c55e]" />
        </div>
        <Disclaimer borderColor="border-[#0f62fe]/20" bgColor="bg-[#0f62fe]/10" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  DOWNTIME COST CALCULATOR — RED THEME                              */
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
    const recoveryCost = recoveryHours * 50000;
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
      <div className="bg-[#0f172a] rounded-xl border border-[#da1e28]/20 p-5 sm:p-8">
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-10 h-10 rounded-lg bg-[#da1e28]/20 flex items-center justify-center"><AlertTriangle className="w-5 h-5 text-[#da1e28]" /></div>
          <p className="carbon-heading-02 text-white">Downtime Scenario</p>
        </div>
        <div className="space-y-8">
          <Slider label="Revenue per hour" value={revenuePerHour} min={50000} max={5000000} step={50000} unit="PKR" display={`PKR ${(revenuePerHour / 1000).toFixed(0)}K`} onChange={setRevenuePerHour} accent="#da1e28" />
          <Slider label="Employees affected" value={employees} min={5} max={500} step={5} unit="" display={`${employees}`} onChange={setEmployees} accent="#da1e28" />
          <Slider label="Average hourly wage" value={hourlyWage} min={200} max={5000} step={100} unit="PKR" display={`PKR ${hourlyWage}`} onChange={setHourlyWage} accent="#da1e28" />
          <Slider label="Estimated recovery time" value={recoveryHours} min={1} max={48} step={1} unit="hours" display={`${recoveryHours} hours`} onChange={setRecoveryHours} accent="#da1e28" />
          <Slider label="Unplanned outages per year" value={outagesPerYear} min={0} max={12} step={1} unit="" display={`${outagesPerYear}`} onChange={setOutagesPerYear} accent="#da1e28" />
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-[#0f172a] rounded-xl border border-[#da1e28]/20 p-5 sm:p-8">
          <p className="carbon-label-02 text-gray-400 uppercase mb-6">Cost per Outage</p>
          <ResultRow label="Revenue loss" value={fmt(results.revenueLoss)} />
          <ResultRow label="Productivity loss" value={fmt(results.productivityLoss)} />
          <ResultRow label="Recovery cost (engineers + parts)" value={fmt(results.recoveryCost)} />
          <ResultRow label="Total per outage" value={fmt(results.perOutage)} highlight highlightColor="border-[#da1e28]/30" textColor="text-[#da1e28]" />
          <ResultRow label="Annual risk exposure" value={fmt(results.annualExposure)} color="text-[#da1e28]" />
        </div>
        <Disclaimer borderColor="border-[#da1e28]/20" bgColor="bg-[#da1e28]/10" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  DEFERRED CAPEX CALCULATOR — GREEN THEME                           */
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
      <div className="bg-[#0f172a] rounded-xl border border-[#22c55e]/20 p-5 sm:p-8">
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-10 h-10 rounded-lg bg-[#22c55e]/20 flex items-center justify-center"><Clock className="w-5 h-5 text-[#22c55e]" /></div>
          <p className="carbon-heading-02 text-white">Equipment Profile</p>
        </div>
        <div className="space-y-8">
          <Slider label="Replacement cost" value={replacementCost} min={500000} max={50000000} step={500000} unit="PKR" display={`PKR ${(replacementCost / 1000000).toFixed(1)}M`} onChange={setReplacementCost} accent="#22c55e" />
          <Slider label="Current equipment age" value={currentAge} min={1} max={25} step={1} unit="years" display={`${currentAge} years`} onChange={setCurrentAge} accent="#22c55e" />
          <Slider label="Expected lifespan" value={expectedLifespan} min={5} max={30} step={1} unit="years" display={`${expectedLifespan} years`} onChange={setExpectedLifespan} accent="#22c55e" />
          <Slider label="Optimisation spend" value={optimisationSpend} min={100000} max={10000000} step={100000} unit="PKR" display={`PKR ${(optimisationSpend / 1000000).toFixed(1)}M`} onChange={setOptimisationSpend} accent="#22c55e" />
          <Slider label="Efficiency gain" value={efficiencyGain} min={5} max={60} step={5} unit="%" display={`${efficiencyGain}%`} onChange={setEfficiencyGain} accent="#22c55e" />
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-[#0f172a] rounded-xl border border-[#22c55e]/20 p-5 sm:p-8">
          <p className="carbon-label-02 text-gray-400 uppercase mb-6">Deferral Impact</p>
          <ResultRow label="Equipment life extended by" value={`${results.monthsExtended} months`} color="text-[#78a9ff]" />
          <ResultRow label="New replacement date" value={results.deferredDate} />
          <ResultRow label="Replacement cost avoided now" value={fmt(results.netSavings)} highlight highlightColor="border-[#22c55e]/30" textColor="text-[#22c55e]" />
          <ResultRow label="Return on optimisation spend" value={`${results.roi}%`} color="text-[#22c55e]" />
        </div>
        <Disclaimer borderColor="border-[#22c55e]/20" bgColor="bg-[#22c55e]/10" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SHARED UI COMPONENTS                                              */
/* ------------------------------------------------------------------ */
function Slider({ label, value, min, max, step, unit, display, onChange, accent }: {
  label: string; value: number; min: number; max: number; step: number; unit: string; display: string; onChange: (v: number) => void; accent: string;
}) {
  const id = label.toLowerCase().replace(/\s+/g, '-');
  return (
    <div>
      <div className="flex justify-between mb-2">
        <label htmlFor={id} className="carbon-label-02 text-gray-400 uppercase">{label}</label>
        <span className="carbon-body-02 text-white">{display}</span>
      </div>
      <input id={id} type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full" style={{ accentColor: accent }} />
      <div className="flex justify-between mt-1">
        <span className="carbon-helper-text-01 text-gray-500">{min} {unit}</span>
        <span className="carbon-helper-text-01 text-gray-500">{max} {unit}</span>
      </div>
    </div>
  );
}

function ResultRow({ label, value, highlight, highlightColor, textColor, color }: { label: string; value: string; highlight?: boolean; highlightColor?: string; textColor?: string; color?: string }) {
  return (
    <div className={`flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-0 pb-4 ${highlight ? `border-b ${highlightColor}` : 'border-b border-white/10'}`}>
      <span className={`carbon-body-02 ${highlight ? 'text-white font-medium' : 'text-gray-400'}`}>{label}</span>
      <span className={`carbon-heading-02 ${highlight ? textColor : color ?? 'text-white'}`}>{value}</span>
    </div>
  );
}

function Disclaimer({ borderColor, bgColor }: { borderColor: string; bgColor: string }) {
  return (
    <div className={`p-5 rounded-xl border ${borderColor} ${bgColor}`}>
      <p className="carbon-body-02 text-gray-300">
        <strong className="text-white">Directional estimate.</strong> Site assessment required for firm proposal.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN SECTION                                                      */
/* ------------------------------------------------------------------ */
export default function ROICalculatorSection() {
  const [activeTab, setActiveTab] = useState<Tab>('pue');

  const tabs: { id: Tab; label: string; icon: typeof Zap; activeBg: string; activeShadow: string; inactiveBorder: string; inactiveHover: string }[] = [
    { id: 'pue', label: 'PUE Energy', icon: Zap, activeBg: 'bg-[#0f62fe]', activeShadow: 'shadow-[#0f62fe]/20', inactiveBorder: 'border-[#0f62fe]/30', inactiveHover: 'hover:border-[#0f62fe]/50' },
    { id: 'downtime', label: 'Downtime Cost', icon: AlertTriangle, activeBg: 'bg-[#da1e28]', activeShadow: 'shadow-[#da1e28]/20', inactiveBorder: 'border-[#da1e28]/30', inactiveHover: 'hover:border-[#da1e28]/50' },
    { id: 'capex', label: 'Deferred CapEx', icon: Clock, activeBg: 'bg-[#22c55e]', activeShadow: 'shadow-[#22c55e]/20', inactiveBorder: 'border-[#22c55e]/30', inactiveHover: 'hover:border-[#22c55e]/50' },
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
        <div className="flex flex-wrap gap-4 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? `${tab.activeBg} text-white shadow-lg ${tab.activeShadow}`
                    : `bg-[#1e293b] text-gray-400 border ${tab.inactiveBorder} ${tab.inactiveHover} hover:text-white`
                }`}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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
