import { Zap, Shield, BatteryCharging, Activity, Gauge, Target, BrainCircuit } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="services" className="relative bg-[#0a1628] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f1d3a] to-[#0a1628]" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#0f62fe]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-16 md:pt-28 md:pb-20">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f62fe]/10 border border-[#0f62fe]/20 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0f62fe]" />
          <span className="carbon-label-02 text-[#78a9ff] uppercase tracking-wider">Data Centre Infrastructure</span>
        </div>

        {/* Headline */}
        <h1 className="carbon-fluid-display-03 text-white max-w-4xl mb-6">
          Power & UPS Solutions for Pakistani Data Centres
        </h1>

        {/* Subhead — scannable value props */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mb-10">
          {[
            { icon: Gauge, label: '1 to 800kVA', desc: 'Single Phase to Three Phase coverage' },
            { icon: Target, label: 'Right-Sized', desc: 'Matched to your actual risk profile' },
            { icon: BrainCircuit, label: 'AI-Ready', desc: 'Grid resilience + predictive battery health' },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0f62fe]/15 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-[#78a9ff]" />
              </div>
              <div>
                <p className="carbon-heading-02 text-white mb-0.5">{item.label}</p>
                <p className="carbon-body-02 text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row gap-4 mb-14">
          <a
            href="mailto:info@perception-it.com?subject=Power%20Resilience%20Assessment%20Request"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0f62fe] text-white carbon-heading-02 rounded-lg hover:bg-[#0353e9] hover:shadow-xl hover:shadow-[#0f62fe]/25 hover:-translate-y-0.5 transition-all"
          >
            Request Power Assessment
          </a>
          <a
            href="#systems"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('systems');
              if (el) {
                const pos = el.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({ top: pos - 80, behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/20 text-white carbon-heading-02 rounded-lg hover:bg-white/10 hover:border-white/30 transition-all"
          >
            Explore UPS Systems
          </a>
        </div>

        {/* Trust bar — grid on mobile, flex on desktop */}
        <div className="grid grid-cols-2 md:flex md:flex-wrap md:items-center gap-3 md:gap-6 text-slate-400 mb-10 md:mb-12">
          {[
            { icon: Shield, label: '99.95% SLA' },
            { icon: BatteryCharging, label: 'Li-ion + VRLA' },
            { icon: Activity, label: 'AI Battery Forecasting' },
            { icon: Zap, label: 'SBP Compliant' },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-2 text-center sm:text-left p-3 sm:p-0 rounded-lg sm:rounded-none bg-white/5 sm:bg-transparent border border-white/10 sm:border-transparent"
            >
              <item.icon className="w-5 h-5 sm:w-4 sm:h-4 text-[#0f62fe]" />
              <span className="text-sm sm:carbon-body-02">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Service pills — 2-col grid on mobile */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
          {['UPS Systems', 'Power Distribution', 'Battery Monitoring', 'Generator Sync', 'SLA Contracts'].map((label) => (
            <span
              key={label}
              className="inline-flex items-center justify-center sm:justify-start gap-2 px-3 py-2 sm:py-1 bg-white/8 border border-white/10 rounded-full carbon-label-02 text-slate-300 text-center sm:text-left"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#0f62fe] flex-shrink-0" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
