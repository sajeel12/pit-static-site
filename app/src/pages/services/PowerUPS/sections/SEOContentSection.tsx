import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function LiIonArticle() {
  return (
    <div className="space-y-8">
      {/* Intro */}
      <div>
        <p className="carbon-body-02 text-gray-600 leading-relaxed">
          Ambient temperatures in Karachi, Lahore, and Faisalabad regularly exceed 35°C—with server rooms often reaching 40°C+ without precision cooling. For UPS batteries, heat is the #1 accelerator of degradation. Choosing the wrong chemistry doesn't just increase replacement frequency; it introduces unplanned CapEx risk and potential SLA breaches.
        </p>
      </div>

      {/* Comparison Table */}
      <div>
        <h4 className="carbon-heading-02 text-[#161616] mb-4">Technical Comparison: Li-ion vs. VRLA at 35–45°C</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 pr-4 carbon-label-02 text-gray-500 uppercase">Factor</th>
                <th className="py-3 pr-4 carbon-label-02 text-gray-500 uppercase">VRLA (Lead-Acid)</th>
                <th className="py-3 pr-4 carbon-label-02 text-gray-500 uppercase">Li-ion (LiFePO₄)</th>
                <th className="py-3 carbon-label-02 text-gray-500 uppercase">Pakistan Impact</th>
              </tr>
            </thead>
            <tbody>
              {[
                { factor: 'Design Life at 25°C', vrla: '3–5 years', liion: '10–15 years', impact: 'Li-ion reduces replacement cycles by 2–3x' },
                { factor: 'Life at 40°C', vrla: '~1.5–2 years (50% reduction)', liion: '~12–14 years (<15% reduction)', impact: 'VRLA degrades rapidly in non-climate-controlled rooms' },
                { factor: 'Operating Temp Range', vrla: '20–25°C optimal; >30°C accelerates failure', liion: '-10°C to 50°C with minimal impact', impact: 'Li-ion tolerates Pakistani industrial environments' },
                { factor: 'Recharge Time', vrla: '8–12 hours to 90%', liion: '1–2 hours to 90%', impact: 'Critical during frequent grid outages' },
                { factor: 'Footprint/Weight', vrla: 'Large, heavy (lead)', liion: '30–50% smaller, 60% lighter', impact: 'Saves rack space; easier retrofit in constrained sites' },
                { factor: 'Maintenance', vrla: 'Quarterly voltage checks, hydration monitoring', liion: 'Cloud-based health analytics; minimal manual intervention', impact: 'Reduces site visits for remote/edge locations' },
                { factor: 'Upfront Cost', vrla: 'Lower CapEx', liion: '1.5–2x higher CapEx', impact: 'Li-ion TCO often lower over 10 years' },
                { factor: 'Disposal Compliance', vrla: 'Hazardous waste; SBP-aligned disposal required', liion: 'Recyclable; SBP-aligned chain of custody', impact: 'Perception-IT manages certified disposal for both' },
              ].map((row, idx) => (
                <tr key={row.factor} className={`border-b border-gray-100 ${idx % 2 === 1 ? 'bg-[#f4f4f4]' : ''}`}>
                  <td className="py-3 pr-4 carbon-body-02 text-[#161616] font-medium">{row.factor}</td>
                  <td className="py-3 pr-4 carbon-body-02 text-gray-600">{row.vrla}</td>
                  <td className="py-3 pr-4 carbon-body-02 text-gray-600">{row.liion}</td>
                  <td className="py-3 carbon-body-02 text-[#0f62fe]">{row.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* TCO Section */}
      <div>
        <h4 className="carbon-heading-02 text-[#161616] mb-4">The TCO Reality for Pakistani Buyers</h4>
        <p className="carbon-body-02 text-gray-600 mb-4">
          While VRLA has lower upfront cost, the total cost of ownership shifts dramatically in high-temperature environments:
        </p>
        <p className="carbon-label-02 text-gray-500 uppercase mb-3">10-Year TCO Estimate (PKR) — 20kVA UPS, 40°C ambient</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="p-4 bg-[#f4f4f4] rounded-lg border border-gray-200">
            <p className="carbon-heading-02 text-[#161616] mb-3">VRLA</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 carbon-body-02 text-gray-600"><span className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0" />Initial battery set: PKR 450K</li>
              <li className="flex items-start gap-2 carbon-body-02 text-gray-600"><span className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0" />Replacements (Years 2, 4, 6, 8): PKR 1.8M</li>
              <li className="flex items-start gap-2 carbon-body-02 text-gray-600"><span className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0" />Maintenance visits (40): PKR 320K</li>
              <li className="flex items-start gap-2 carbon-body-02 text-gray-600"><span className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0" />Downtime risk: PKR 200K–2M</li>
              <li className="flex items-start gap-2 carbon-body-02 text-gray-600"><span className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0" />Disposal compliance: PKR 45K</li>
            </ul>
            <p className="carbon-heading-02 text-[#da1e28] mt-3 pt-3 border-t border-gray-200">→ Estimated Total: PKR 2.8M–4.6M</p>
          </div>
          <div className="p-4 bg-[#24a148]/5 rounded-lg border border-[#24a148]/20">
            <p className="carbon-heading-02 text-[#161616] mb-3">Li-ion (SmartLi-class)</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 carbon-body-02 text-gray-600"><span className="w-1 h-1 rounded-full bg-[#24a148] mt-2 flex-shrink-0" />Initial battery set: PKR 900K</li>
              <li className="flex items-start gap-2 carbon-body-02 text-gray-600"><span className="w-1 h-1 rounded-full bg-[#24a148] mt-2 flex-shrink-0" />Replacements: None (15-year design life)</li>
              <li className="flex items-start gap-2 carbon-body-02 text-gray-600"><span className="w-1 h-1 rounded-full bg-[#24a148] mt-2 flex-shrink-0" />Maintenance visits (remote): PKR 80K</li>
              <li className="flex items-start gap-2 carbon-body-02 text-gray-600"><span className="w-1 h-1 rounded-full bg-[#24a148] mt-2 flex-shrink-0" />Downtime risk: PKR 20K–200K</li>
              <li className="flex items-start gap-2 carbon-body-02 text-gray-600"><span className="w-1 h-1 rounded-full bg-[#24a148] mt-2 flex-shrink-0" />Disposal compliance: PKR 30K</li>
            </ul>
            <p className="carbon-heading-02 text-[#24a148] mt-3 pt-3 border-t border-[#24a148]/20">→ Estimated Total: PKR 1.0M–1.2M</p>
          </div>
        </div>
        <p className="carbon-body-02 text-gray-500">
          Source: Perception-IT Commercial Model Template; assumptions validated against NEPRA grid data and client deployments 2023–2025.
        </p>
      </div>

      {/* When VRLA Still Makes Sense */}
      <div>
        <h4 className="carbon-heading-02 text-[#161616] mb-4">When VRLA Still Makes Sense</h4>
        <p className="carbon-body-02 text-gray-600 mb-3">Li-ion isn't always the default. VRLA remains appropriate when:</p>
        <ul className="space-y-2">
          {['Budget constraints require minimal upfront CapEx', 'Environment is climate-controlled (<25°C) with reliable cooling', 'Backup runtime is short (<15 min) and load is non-critical', 'Replacement logistics are simple (urban, accessible sites)'].map((item) => (
            <li key={item} className="flex items-start gap-3 carbon-body-02 text-gray-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0f62fe] mt-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Recommendation Framework */}
      <div>
        <h4 className="carbon-heading-02 text-[#161616] mb-4">Perception-IT's Recommendation Framework</h4>
        <p className="carbon-body-02 text-gray-600 mb-3">We don't prescribe chemistry first. We assess:</p>
        <ul className="space-y-2 mb-4">
          {['Ambient temperature profile (site survey or historical data)', 'Load criticality (revenue impact per minute of downtime)', 'Maintenance accessibility (remote edge vs. urban data centre)', 'Budget structure (CapEx-constrained vs. OpEx-optimised)', 'Compliance requirements (SBP, PTA, internal ESG policies)'].map((item) => (
            <li key={item} className="flex items-start gap-3 carbon-body-02 text-gray-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0f62fe] mt-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="carbon-body-02 text-gray-600">
          Only then do we recommend VRLA, Li-ion, or a hybrid architecture—with full TCO modelling in PKR and SLA impact analysis.
        </p>
      </div>

      {/* CTA */}
      <div className="bg-[#0f1d3a] rounded-xl p-6 sm:p-8">
        <h4 className="carbon-heading-02 text-white mb-3">Ready to Model Your Battery TCO?</h4>
        <p className="carbon-body-02 text-white/80 mb-4">
          Get a no-obligation Battery Architecture Assessment from Perception-IT: site temperature profiling, 10-year TCO comparison in PKR, SBP-compliant disposal pathway documentation, and SLA impact analysis.
        </p>
        <a
          href="mailto:info@perception-it.com?subject=Battery%20Architecture%20Assessment%20Request"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f62fe] text-white carbon-heading-02 rounded-lg hover:bg-[#0353e9] transition-colors"
        >
          Request Assessment
        </a>
        <p className="carbon-body-02 text-white/50 mt-3">Response within 1 business day · Lahore NOC-backed</p>
      </div>
    </div>
  );
}

export default function SEOContentSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-[#f4f4f4]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
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
          {/* Article 1 — Li-ion vs VRLA */}
          <div className={`rounded-xl border transition-all duration-200 ${open === 0 ? 'border-[#0f62fe]/20 bg-white' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
            <button
              onClick={() => setOpen(open === 0 ? null : 0)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <div>
                <h3 className={`carbon-heading-02 ${open === 0 ? 'text-[#0f62fe]' : 'text-[#161616]'}`}>
                  Li-ion vs. VRLA in High-Temp Environments
                </h3>
                <p className="carbon-label-01 text-gray-400 mt-1">Target: lithium battery UPS Pakistan · ~320 words · 2 min read</p>
              </div>
              <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${open === 0 ? 'rotate-180 text-[#0f62fe]' : 'text-gray-400'}`} />
            </button>
            {open === 0 && (
              <div className="px-6 pb-6 animate-fade-in">
                <div className="pt-4 border-t border-gray-100">
                  <LiIonArticle />
                </div>
              </div>
            )}
          </div>

          {/* Article 2 — placeholder */}
          <div className={`rounded-xl border transition-all duration-200 ${open === 1 ? 'border-[#0f62fe]/20 bg-white' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
            <button
              onClick={() => setOpen(open === 1 ? null : 1)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <div>
                <h3 className={`carbon-heading-02 ${open === 1 ? 'text-[#0f62fe]' : 'text-[#161616]'}`}>
                  Why Pakistani Grids Need Specialised UPS
                </h3>
                <p className="carbon-label-01 text-gray-400 mt-1">Target: UPS for Pakistan voltage fluctuation</p>
              </div>
              <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${open === 1 ? 'rotate-180 text-[#0f62fe]' : 'text-gray-400'}`} />
            </button>
            {open === 1 && (
              <div className="px-6 pb-6 animate-fade-in">
                <div className="pt-4 border-t border-gray-100">
                  <p className="carbon-body-02 text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
