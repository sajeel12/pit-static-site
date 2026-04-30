import { useState } from 'react';
import { CheckmarkFilled, ArrowRight, Compare } from '@carbon/icons-react';

/**
 * Scan-Friendly Assessment Section — Carbon Design System Pattern
 *
 * Problem: Readers scanning the page see walls of detail before they understand
 * what's being offered. They bounce before reaching the value proposition.
 *
 * Solution: Emphasise the section header + summary. Hide detailed cards,
 * comparison tables, and fine print behind a single, prominent expand action.
 *
 * IBM Carbon principle: Progressive disclosure. Show the minimum viable
 * information first. Let the reader choose when to dive deeper.
 */

export default function ScanFriendlyAssessment() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="assessment" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ============================================================
            ALWAYS VISIBLE — Scan Layer
            ============================================================ */}
        <div className="grid md:grid-cols-2 gap-11 mb-6">
          {/* Image — left side, always visible */}
          <div>
            <img
              src="/3D images/Cooling and Airflow/perceptionit_document_checks_2.webp"
              alt="Engineer reviewing thermal assessment documentation, checklist validation, and audit scorecards"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Text — right side */}
          <div>
            <div className="border-l-2 border-[#009d9a] pl-3 mb-3">
              <p className="carbon-label-01 text-[#009d9a] uppercase tracking-wider font-semibold">
                01 Assessment
              </p>
            </div>
            <p className="carbon-body-01 text-[#525252] mb-4">Thermal assessment & risk scoring</p>

            <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
              Your Two Assessment Options
            </h2>

            <p className="carbon-body-02 text-[#161616] mb-6">
              Match the assessment to your facility&apos;s scale and criticality.
            </p>

            <div className="border-t border-[#e0e0e0]">
              <p className="carbon-label-01 text-[#8d8d8d] uppercase tracking-wider pt-4 mb-2">Assessment options</p>
              {[
                {
                  title: 'Standard Thermal Health Check',
                  price: 'From PKR 75,000',
                  desc: '90-minute on-site audit with IR mapping and risk scorecard.',
                },
                {
                  title: 'Precision Thermal Engineering',
                  price: 'From PKR 650,000',
                  desc: 'CFD modelling, capacity calculations, and engineering sign-off.',
                },
              ].map((item, idx, arr) => (
                <div
                  key={item.title}
                  className={`py-4 ${idx < arr.length - 1 ? 'border-b border-[#e0e0e0]' : ''}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                    <p className="carbon-heading-01 text-[#161616]">{item.title}</p>
                    <p className="carbon-label-01 text-[#0f62fe] font-medium whitespace-nowrap">{item.price}</p>
                  </div>
                  <p className="carbon-body-01 text-[#525252]">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA + expand link — sits under the assessment options list */}
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <a
                href="#cta"
                className="cds--btn cds--btn--primary inline-flex items-center bg-[#0f62fe] text-white hover:bg-[#0353e9] px-4 py-2 transition-colors"
              >
                Book a Free 15-Minute Call
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>

              {!expanded && (
                <button
                  onClick={() => setExpanded(true)}
                  className="inline-flex items-center gap-2 h-12 carbon-body-01 text-[#0f62fe] hover:underline transition-colors"
                >
                  <Compare className="w-5 h-5 flex-shrink-0" />
                  Compare both options in detail →
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ============================================================
            EXPANDABLE — Detail Layer
            Only rendered when the reader explicitly asks for it.
            This protects scanners from information overload while giving
            committed readers everything they need to make a decision.
            ============================================================ */}
        <div
          className={`overflow-hidden transition-all ${
            expanded ? 'max-h-[8000px] opacity-100 mt-8' : 'max-h-0 opacity-0'
          }`}
          style={{ transitionDuration: '400ms' }}
        >

          {/* Close link — top of detail layer */}
          <div className="text-right">
            <button
              onClick={() => setExpanded(false)}
              className="carbon-body-01 text-[#0f62fe] hover:underline transition-colors mb-4"
            >
              ← Close comparison
            </button>
          </div>

          <div className="mb-12">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                {/* Column identity header */}
                <thead>
                  <tr className="bg-[#0f62fe]/[0.04] border-b border-[#e0e0e0]">
                    <th className="text-left py-5 px-5 w-[18%]"></th>
                    <th className="text-left py-5 px-5 w-[41%]">
                      <span className="inline-flex items-center px-2 py-0.5 bg-[#0f62fe] text-white text-[10px] font-bold uppercase tracking-wider">
                        Option 1
                      </span>
                      <span className="block carbon-label-01 text-[#0f62fe] uppercase tracking-wider mt-2">
                        Standard
                      </span>
                      <h4 className="carbon-heading-02 text-[#161616] leading-snug mt-1.5">
                        Thermal Health Check
                      </h4>
                      <p className="carbon-body-01 text-[#525252] mt-1 font-normal">
                        Quick confidence in 90 minutes
                      </p>
                    </th>
                    <th className="text-left py-5 px-5 w-[41%]">
                      <span className="inline-flex items-center px-2 py-0.5 bg-[#0f62fe] text-white text-[10px] font-bold uppercase tracking-wider">
                        Option 2
                      </span>
                      <span className="block carbon-label-01 text-[#0f62fe] uppercase tracking-wider mt-2">
                        Engineering-Grade
                      </span>
                      <h4 className="carbon-heading-02 text-[#161616] leading-snug mt-1.5">
                        Precision Thermal Engineering
                      </h4>
                      <p className="carbon-body-01 text-[#525252] mt-1 font-normal">
                        See heat flow before you spend
                      </p>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {/* Best For — primary decision row */}
                  <tr className="border-b border-[#e0e0e0]">
                    <td className="py-5 px-5 align-top">
                      <div className="border-l-2 border-[#0f62fe] pl-3">
                        <span className="carbon-label-01 text-[#161616] uppercase tracking-wider font-semibold">
                          Best For
                        </span>
                      </div>
                    </td>
                    <td className="py-5 px-5 align-top">
                      <p className="carbon-heading-01 text-[#161616] leading-snug">
                        Routine maintenance, edge sites, budget planning
                      </p>
                    </td>
                    <td className="py-5 px-5 align-top">
                      <p className="carbon-heading-01 text-[#161616] leading-snug">
                        New builds, high-density, compliance, root cause
                      </p>
                    </td>
                  </tr>

                  {/* Choose this if — secondary decision support */}
                  <tr className="border-b border-[#e0e0e0]">
                    <td className="py-5 px-5 align-top">
                      <div className="border-l-2 border-[#0f62fe] pl-3">
                        <span className="carbon-label-01 text-[#161616] uppercase tracking-wider font-semibold">
                          Choose this if
                        </span>
                      </div>
                    </td>
                    <td className="py-5 px-5 align-top">
                      <ul className="space-y-2.5">
                        {[
                          'Routine maintenance or edge-class sites',
                          'Budget-constrained planning phase',
                          'Quick triage without engineering overhead',
                          'Results needed within 48 hours',
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 carbon-body-01 text-[#525252]">
                            <CheckmarkFilled className="w-4 h-4 text-[#0f62fe] mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="py-5 px-5 align-top">
                      <ul className="space-y-2.5">
                        {[
                          'New build or major retrofit planning',
                          'High-density loads (>8 kW per rack)',
                          'Compliance or audit documentation required',
                          'Recurring thermal issues need root-cause analysis',
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 carbon-body-01 text-[#525252]">
                            <CheckmarkFilled className="w-4 h-4 text-[#0f62fe] mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>

                  {/* Evidence rows */}
                  {[
                    ['Deliverable', 'Photo log + "Fix / Watch / OK" list', '3D heat maps + capacity calculations'],
                    ['Precision', 'Qualitative ("Rack 12 feels warm")', 'Quantitative ("Rack 12 exceeds 27°C at 45°C ambient")'],
                    ['Method', 'Visual inspection + structured checklist', 'CFD modeling + engineering analysis'],
                    ['Tools', 'IR camera, airflow meter, checklist', '6SigmaDC/ANSYS, thermal sensors, load data'],
                  ].map(([feat, opt1, opt2]) => (
                    <tr key={String(feat)} className="border-b border-[#e0e0e0]">
                      <td className="py-3 px-5 align-top">
                        <span className="carbon-body-01 text-[#525252]">{feat}</span>
                      </td>
                      <td className="py-3 px-5 carbon-body-01 text-[#525252] align-top">{opt1}</td>
                      <td className="py-3 px-5 carbon-body-01 text-[#525252] align-top">{opt2}</td>
                    </tr>
                  ))}

                  {/* Timeline & Pricing — supporting info */}
                  <tr className="border-t border-b border-[#e0e0e0]">
                    <td className="py-2 px-5 align-top">
                      <span className="carbon-label-01 text-[#8d8d8d] uppercase tracking-wider">Timeline &amp; Pricing</span>
                    </td>
                    <td className="py-2 px-5 align-top"></td>
                    <td className="py-2 px-5 align-top"></td>
                  </tr>
                  <tr className="border-b border-[#e0e0e0]">
                    <td className="py-2 px-5 align-top">
                      <span className="carbon-helper-text-01 text-[#8d8d8d]">Time On-Site</span>
                    </td>
                    <td className="py-2 px-5 align-top">
                      <span className="carbon-helper-text-01 text-[#525252]">2–4 hours (single visit)</span>
                    </td>
                    <td className="py-2 px-5 align-top">
                      <span className="carbon-helper-text-01 text-[#525252]">1–2 days (data collection)</span>
                    </td>
                  </tr>
                  <tr className="border-b border-[#e0e0e0]">
                    <td className="py-2 px-5 align-top">
                      <span className="carbon-helper-text-01 text-[#8d8d8d]">Turnaround</span>
                    </td>
                    <td className="py-2 px-5 align-top">
                      <span className="carbon-helper-text-01 text-[#525252]">Report from within 48 hours</span>
                    </td>
                    <td className="py-2 px-5 align-top">
                      <span className="carbon-helper-text-01 text-[#525252]">Analysis from within 1–2 weeks</span>
                    </td>
                  </tr>
                  <tr className="border-b border-[#e0e0e0]">
                    <td className="py-2 px-5 align-top">
                      <span className="carbon-helper-text-01 text-[#8d8d8d]">Investment</span>
                    </td>
                    <td className="py-2 px-5 align-top">
                      <span className="carbon-label-01 text-[#0f62fe] font-medium">From PKR 75,000</span>
                      <span className="carbon-helper-text-01 text-[#525252]"> per visit</span>
                    </td>
                    <td className="py-2 px-5 align-top">
                      <span className="carbon-label-01 text-[#0f62fe] font-medium">From PKR 650,000</span>
                      <span className="carbon-helper-text-01 text-[#525252]"> (up to 50 racks)</span>
                    </td>
                  </tr>

                  {/* CTA row */}
                  <tr className="border-t border-[#e0e0e0]">
                    <td className="py-5 px-5 align-top">
                      <span className="carbon-label-01 text-[#161616] uppercase tracking-wider font-semibold">Next step</span>
                    </td>
                    <td className="py-5 px-5 align-top">
                      <a
                        href="#cta"
                        className="cds--btn cds--btn--primary w-full h-12 flex items-center justify-center bg-[#0f62fe] text-white hover:bg-[#0353e9] transition-colors"
                      >
                        Book Thermal Health Check
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </td>
                    <td className="py-5 px-5 align-top">
                      <a
                        href="mailto:contact@perception-it.com?subject=Precision%20Thermal%20Engineering%20Proposal%20Request"
                        className="cds--btn cds--btn--primary w-full h-12 flex items-center justify-center bg-[#0f62fe] text-white hover:bg-[#0353e9] transition-colors"
                      >
                        Request CFD Proposal
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ====== SUPPORTING CALLOUTS ====== */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Upgrade path */}
            <div className="p-5 bg-[#f4f4f4] border-l-4 border-[#009d9a]">
              <p className="carbon-label-01 text-[#161616] uppercase tracking-wider mb-2">
                Upgrade Path
              </p>
              <p className="carbon-body-01 text-[#525252]">
                If your Health Check reveals complexity, <strong className="text-[#161616]">20% of your fee is credited</strong> toward Precision Thermal Engineering when upgraded within 60 days.
              </p>
            </div>

            {/* Explicit exclusions */}
            <div className="p-5 bg-[#f4f4f4] border-l-4 border-[#009d9a]">
              <p className="carbon-label-01 text-[#161616] uppercase tracking-wider mb-2">
                What&apos;s Not Included
              </p>
              <p className="carbon-body-01 text-[#525252]">
                Assessment covers audit, scoring, and recommendation only. Excludes implementation, hardware supply, and ongoing monitoring.
              </p>
            </div>
          </div>

          {/* Collapse link — mirrors expand link */}
          <div className="text-right">
            <button
              onClick={() => setExpanded(false)}
              className="carbon-body-01 text-[#0f62fe] hover:underline transition-colors mt-8"
            >
              ← Close comparison
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
