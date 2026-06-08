import { Zap, Shield, BatteryCharging, Activity } from 'lucide-react';

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

        {/* Subhead */}
        <p className="carbon-fluid-heading-03 text-slate-300 max-w-2xl mb-10">
          Single Phase to 800kVA Three Phase. Right-sized for your risk profile. 
          From grid-fluctuation resilience to AI-predicted battery health.
        </p>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row gap-4 mb-14">
          <a
            href="mailto:contact@perception-it.com?subject=Power%20Resilience%20Assessment%20Request"
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

        {/* Trust bar */}
        <div className="flex flex-wrap items-center gap-6 text-slate-400 carbon-body-02 mb-12">
          <span className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#0f62fe]" />
            99.95% SLA
          </span>
          <span className="flex items-center gap-2">
            <BatteryCharging className="w-4 h-4 text-[#0f62fe]" />
            Li-ion + VRLA
          </span>
          <span className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#0f62fe]" />
            AI Battery Forecasting
          </span>
          <span className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#0f62fe]" />
            SBP Compliant
          </span>
        </div>

        {/* Service pills */}
        <div className="flex flex-wrap items-center gap-2">
          {['UPS Systems', 'Power Distribution', 'Battery Monitoring', 'Generator Sync', 'SLA Contracts'].map((label) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white/8 border border-white/10 rounded-full carbon-label-02 text-slate-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#0f62fe]" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
