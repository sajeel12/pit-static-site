import { ArrowRight } from 'lucide-react';

const cases = [
  {
    client: 'Ibrahim Fibres Limited',
    sector: 'Manufacturing / Textile',
    title: 'Out-of-Warranty Infrastructure Support',
    headline: 'PKR 750K+ downtime risk avoided',
    desc: '48 critical servers running MES and ERP were out of OEM warranty. Perception IT implemented 24×7 hardware support with same-day replacement parts and proactive maintenance.',
    outcomes: [
      'Zero unplanned outages in 24 months',
      'PKR 750K+ potential downtime cost avoided',
      '48 servers under active SLA',
      'Deferred OEM renewal CapEx',
    ],
    link: '/projects/manufacturing-infrastructure',
  },
  {
    client: 'Leading Pakistani Bank',
    sector: 'Banking / Financial Services',
    title: 'Multi-Site Precision Cooling Deployment',
    headline: 'PUE 1.8 → 1.35, 40% energy savings',
    desc: 'Deployed precision cooling units across four data centres, replacing legacy DX systems with VFD-controlled, free-cooling-integrated units.',
    outcomes: [
      'PUE reduced from 1.8 to 1.35',
      '40% reduction in annual cooling energy bill',
      'N+1 redundancy achieved across all sites',
      '8-week deployment timeline',
    ],
    link: '/case-studies/multi-site-precision-cooling',
  },
  {
    client: 'Financial Institution',
    sector: 'Financial Services',
    title: 'Thermal Runaway Prevention',
    headline: '25% annual cooling cost savings',
    desc: 'Redesigned airflow management with aisle containment and blanking panels, preventing thermal runaway and extending equipment lifespan.',
    outcomes: [
      'Hotspots eliminated across all racks',
      '3°C average temperature reduction',
      '25% annual cooling cost savings',
      'Equipment lifespan extended by estimated 3 years',
    ],
    link: '/case-studies/thermal-runaway-prevention',
  },
  {
    client: 'E-commerce Platform',
    sector: 'E-commerce / Retail',
    title: 'Monsoon Season Resilience',
    headline: 'Zero humidity-related outages',
    desc: 'Implemented humidity control and drainage systems to maintain operations during monsoon season, eliminating weather-related downtime.',
    outcomes: [
      'Zero humidity-related outages',
      '99.9% uptime maintained through monsoon',
      '40% reduction in equipment corrosion',
      'Insurance premium reduction negotiated',
    ],
    link: '/case-studies/monsoon-season-resilience',
  },
];

export default function CaseStudiesSection() {
  return (
    <section id="cases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12">
          <p className="carbon-label-01 text-[#0f62fe] uppercase mb-3">Case Studies</p>
          <h2 className="carbon-fluid-heading-05 text-[#0F172A] mb-4">
            Financial Outcomes from Infrastructure Engagements
          </h2>
          <p className="carbon-body-02 text-gray-500 max-w-2xl">
            Every figure below is client-verified. We do not publish estimates or projections as outcomes.
          </p>
        </div>

        <div className="space-y-6">
          {cases.map((c) => (
            <div
              key={c.client}
              className="group relative bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg overflow-hidden"
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-[#0f62fe] to-[#78a9ff]" />
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="carbon-label-02 text-gray-500 uppercase">{c.sector}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <span className="carbon-label-02 text-[#0f62fe] uppercase">{c.client}</span>
                    </div>
                    <p className="carbon-heading-02 text-gray-900 mb-2">{c.title}</p>
                    <p className="carbon-fluid-heading-03 text-[#0f62fe] font-light mb-4">{c.headline}</p>
                    <p className="carbon-body-02 text-gray-600 max-w-2xl">{c.desc}</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="carbon-label-02 text-gray-500 uppercase mb-3">Verified Outcomes</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {c.outcomes.map((o) => (
                      <div key={o} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0f62fe] flex-shrink-0 mt-2" />
                        <span className="carbon-body-02 text-gray-700">{o}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href={c.link}
                    className="inline-flex items-center gap-2 text-[#0f62fe] carbon-label-01 uppercase hover:gap-3 transition-all"
                  >
                    View Full Case Study <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
