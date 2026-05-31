import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ARTICLES = [
  {
    title: 'Why Pakistani Grids Need Specialized UPS',
    keyword: 'UPS for Pakistan voltage fluctuation',
    content: `Pakistan's national grid presents unique challenges that off-the-shelf UPS systems simply aren't designed for. Voltage fluctuations of ±15% are routine in Lahore and Karachi industrial zones — well beyond the ±10% tolerance of many entry-level standby units. Frequency drift between 48–52Hz (vs. nominal 50Hz) forces generators to work harder and causes synchronization failures in standard three-phase UPS without intelligent sync logic.

The consequences of under-specified power protection are severe: unprotected facilities experience 3–8 outages per month, with each outage costing manufacturing operations PKR 150K–500K in lost production. Data centres without online double-conversion topology face micro-outages during grid switching that corrupt databases and damage SSD storage controllers.

Perception-IT's UPS assessments include 72-hour grid-fluctuation simulation at your site — testing transfer times, AVR response curves, and generator handoff sequencing under real Pakistani grid conditions. We specify Line-Interactive + AVR for stable urban grids, Online Double-Conversion for mission-critical loads, and Industrial-grade UPS with extended temperature range (-10°C to 50°C) for factory floors.`,
  },
  {
    title: 'Li-ion vs. VRLA in High-Temp Environments',
    keyword: 'lithium battery UPS Pakistan',
    content: `In Pakistan's ambient conditions — where server room temperatures routinely reach 35°C+ during summer load-shedding periods — battery chemistry choice directly determines reliability and total cost of ownership.

VRLA (Valve-Regulated Lead-Acid) batteries degrade rapidly above 25°C ambient. At 35°C, their design life collapses from 5 years to just 18–24 months. This means Pakistani data centres using VRLA face replacement cycles every 2–3 years, with each replacement requiring scheduled downtime, disposal logistics, and re-commissioning.

Lithium-ion batteries maintain stable chemistry up to 45°C ambient. Their 10–15 year design life at Pakistani temperatures translates to 3–5x fewer replacement cycles over a decade. The 1.5x energy density also reduces floor space by 30% — critical in space-constrained Lahore and Karachi facilities.

Perception-IT's AI battery monitoring predicts cell degradation 30–60 days before failure, using temperature-corrected models calibrated for Pakistani ambient profiles. All Li-ion deployments include SBP-compliant disposal certification and documented chain-of-custody for end-of-life cells.`,
  },
];

export default function SEOContentSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-[#f4f4f4]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-10">
          <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
            Technical Resources
          </span>
          <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
            Power Protection in Pakistan
          </h2>
          <p className="carbon-body-02 text-gray-600">
            Deep-dive explainers on grid-specific challenges, battery chemistry, and compliance.
          </p>
        </div>

        <div className="space-y-4">
          {ARTICLES.map((article, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={article.title}
                className={`rounded-xl border transition-all duration-200 ${
                  isOpen ? 'border-[#0f62fe]/20 bg-white' : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div>
                    <h3 className={`carbon-heading-02 ${isOpen ? 'text-[#0f62fe]' : 'text-[#161616]'}`}>
                      {article.title}
                    </h3>
                    <p className="carbon-label-01 text-gray-400 mt-1">Target: {article.keyword}</p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#0f62fe]' : 'text-gray-400'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <div className="pt-4 border-t border-gray-100">
                      <p className="carbon-body-02 text-gray-600 leading-relaxed whitespace-pre-line">
                        {article.content}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
