import ScanFriendlyHero from '../components/ScanFriendlyHero';
import ScanFriendlyServices from '../components/ScanFriendlyServices';
import ScanFriendlyAssessment from '../components/ScanFriendlyAssessment';
import ScanFriendlyProcurement from '../components/ScanFriendlyProcurement';
import { ArrowLeft } from '@carbon/icons-react';
import { Link } from 'react-router-dom';

/**
 * Scan-Friendly Demo Page
 *
 * Demonstrates the Carbon progressive-disclosure pattern:
 * emphasise section headers + summaries. Hide detailed cards,
 * tables, and fine print behind a single expand action.
 *
 * Purpose: let skimming readers grasp the offer in 3 seconds
 * before deciding to invest time in the full detail.
 */

export default function ScanDemo() {
  return (
    <div className="min-h-screen bg-white">
      {/* Minimal header */}
      <header className="border-b border-[#e0e0e0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center gap-4">
          <Link
            to="/infrastructure/data-centre-services/cooling-airflow"
            className="inline-flex items-center gap-2 text-[#0f62fe] hover:text-[#0353e9] carbon-body-01 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Cooling & Airflow
          </Link>
          <span className="text-[#c6c6c6]">|</span>
          <span className="carbon-label-01 text-[#525252] uppercase tracking-wider">
            UX Demo — Scan-Friendly Pattern
          </span>
        </div>
      </header>

      {/* Context banner */}
      <div className="bg-[#f4f4f4] border-b border-[#e0e0e0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
          <h1 className="carbon-fluid-heading-05 text-[#161616] mb-3">
            Scan-Friendly Section Pattern
          </h1>
          <p className="carbon-body-01 text-[#525252] max-w-3xl mb-4">
            A demonstration of IBM Carbon progressive disclosure applied to a
            product-page section. The reader sees the headline, summary bullets,
            and a single expand action. Detailed cards, comparison tables, and
            exclusions are hidden until explicitly requested.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-white border border-[#c6c6c6] text-[10px] font-semibold uppercase tracking-wider text-[#525252]">
              Carbon Accordion
            </span>
            <span className="px-2 py-1 bg-white border border-[#c6c6c6] text-[10px] font-semibold uppercase tracking-wider text-[#525252]">
              Progressive Disclosure
            </span>
            <span className="px-2 py-1 bg-white border border-[#c6c6c6] text-[10px] font-semibold uppercase tracking-wider text-[#525252]">
              Scan-First UX
            </span>
          </div>
        </div>
      </div>

      {/* The demo sections — full page flow */}
      <ScanFriendlyHero />
      <ScanFriendlyServices />
      <ScanFriendlyAssessment />
      <ScanFriendlyProcurement />

      {/* Footer note */}
      <div className="border-t border-[#e0e0e0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
          <p className="carbon-caption-01 text-[#8d8d8d]">
            This is a demonstration component. To apply this pattern to the live
            Cooling & Airflow page, replace the static Assessment section with
            the expandable wrapper shown above.
          </p>
        </div>
      </div>
    </div>
  );
}
