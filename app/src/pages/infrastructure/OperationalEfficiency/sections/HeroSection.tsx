export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative py-20 lg:py-24 bg-[#0F172A] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0f62fe]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#78a9ff]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Breadcrumb */}
        <nav className="mb-6" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-400">
            <li><a href="/#/" className="hover:text-[#78a9ff] transition-colors">Home</a></li>
            <li className="text-gray-600">/</li>
            <li><a href="/#/services/infrastructure" className="hover:text-[#78a9ff] transition-colors">Infrastructure</a></li>
            <li className="text-gray-600">/</li>
            <li><a href="/#/services/datacenter2" className="hover:text-[#78a9ff] transition-colors">Data Centre</a></li>
            <li className="text-gray-600">/</li>
            <li className="text-gray-300 font-medium" aria-current="page">Cost Optimisation</li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          <h1 className="carbon-fluid-display-03 text-white mb-6 leading-[1.15]">
            Reduce Data Centre Costs.{" "}
            <span className="lg:block bg-gradient-to-r from-[#78a9ff] to-[#0f62fe] bg-clip-text text-transparent">
              Defer Capital Expenditure.
            </span>
          </h1>
          <p className="carbon-body-02 text-gray-400 max-w-2xl mb-10">
            Cost avoidance and reduction outcomes across cooling, power, rack, and environmental
            infrastructure for data centres in Pakistan. Real savings from real engagements.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#savings"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f62fe] text-white carbon-body-02 rounded-lg hover:bg-[#0353e9] transition-colors"
            >
              Explore Savings
            </a>
            <a
              href="#calculator"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white carbon-body-02 rounded-lg hover:bg-white/10 transition-colors"
            >
              Run the Numbers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
