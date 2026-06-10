import { ArrowRight, Download, ShieldCheck, Zap } from 'lucide-react';
import { useState } from 'react';

export default function FeaturedProductsSection() {
  const [datasheetOpen, setDatasheetOpen] = useState(false);

  return (
    <section id="featured-products" className="py-16 md:py-24 bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-6">
          <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
            Featured Product
          </span>
          <h2 className="carbon-fluid-heading-05 text-[#161616] mb-1">
            Huawei Outdoor Power Solution
          </h2>
          <h3 className="carbon-heading-02 text-gray-500 mb-4">
            Reliable Power for Remote and Edge Sites
          </h3>
          <p className="carbon-body-02 text-gray-600">
            As a Huawei Enterprise Certified Partner, we integrate outdoor power facilities for sites 
            where rack and power infrastructure must operate beyond the data centre — with IP-rated 
            enclosures, thermal management and scalable power delivery.
          </p>
        </div>

        {/* Vendor-agnostic banner */}
        <div className="mb-10 p-6 sm:p-8 rounded-xl bg-[#0f62fe]/[0.04] border border-[#0f62fe]/15">
          <div className="flex flex-col md:flex-row gap-5 md:items-start">
            <div className="w-12 h-12 rounded-full bg-[#0f62fe]/10 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#0f62fe]" />
            </div>
            <div className="flex-1">
              <p className="carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-2">
                Vendor agnostic
              </p>
              <h3 className="carbon-heading-02 text-[#161616] mb-3">
                Client-aligned outcomes
              </h3>
              <p className="carbon-body-02 text-[#161616] font-medium border-l-2 border-[#0f62fe] pl-4 mb-4">
                Our recommendations are governed by your site standards, total cost of ownership,
                and operational constraints. Not by vendor quotas.
              </p>
              <p className="carbon-body-02 text-gray-600 mb-5">
                Certified partnerships across every major infrastructure manufacturer. We procure,
                integrate, and support the configuration that is objectively best for your environment.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Huawei', 'Dell', 'HPE', 'Lenovo', 'APC', 'Eaton'].map((brand) => (
                  <span
                    key={brand}
                    className="px-3 py-1.5 bg-white text-[#0f62fe] text-sm font-medium rounded-full border border-[#0f62fe]/20"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Product Card */}
        <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] gap-0 rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm mb-10">
          {/* Image */}
          <div className="relative bg-gray-50 flex items-center justify-center p-8 min-h-[280px]">
            <span className="absolute top-4 left-4 px-3 py-1 bg-[#1f2937] text-white carbon-label-02 uppercase tracking-wider rounded-full">
              Featured Hardware
            </span>
            <img
              src="/logos/partners/Partner-Huawei-Logo.svg"
              alt="Huawei Outdoor Power Solution"
              className="max-w-[80%] max-h-[180px] object-contain"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#0f62fe]/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#0f62fe]" />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-[#cf0a2c] uppercase tracking-wider">
                  Outdoor Power
                </p>
                <p className="carbon-label-01 text-[#525252]">Remote & Edge Deployments</p>
              </div>
            </div>

            <h3 className="carbon-heading-02 text-gray-900 mb-3 leading-tight">
              All-Weather Outdoor Power Facility
            </h3>

            <p className="carbon-body-02 text-gray-600 mb-5">
              Integrated outdoor power cabinet for telecom, industrial and edge sites. Combines 
              rectifiers, battery backup and thermal management in an IP-rated enclosure designed 
              for harsh Pakistani climates.
            </p>

            {/* Spec pills */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {[
                { label: 'Protection', value: 'IP-rated' },
                { label: 'Application', value: 'Outdoor / Edge' },
                { label: 'Integration', value: 'Power + Thermal' },
                { label: 'Compliance', value: 'IEC' },
              ].map((s) => (
                <div key={s.label} className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                  <p className="carbon-label-02 text-gray-400 uppercase mb-1">{s.label}</p>
                  <p className="carbon-heading-01 text-gray-900">{s.value}</p>
                </div>
              ))}
            </div>

            {/* Bullets */}
            <ul className="carbon-body-02 text-gray-600 mb-6 list-disc list-inside space-y-1.5">
              <li>
                IP-rated enclosure protects power electronics from dust, moisture and temperature extremes
              </li>
              <li>
                Integrated thermal management maintains battery and rectifier performance in 40°C+ ambient
              </li>
              <li>
                Scalable rectifier and battery configuration to match load growth and runtime requirements
              </li>
              <li>
                Remote monitoring ready for integration with our 24/7 NOC operations centre
              </li>
            </ul>

            {/* CTAs */}
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => setDatasheetOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-3 border border-gray-300 text-gray-700 carbon-body-02 hover:border-[#0f62fe] hover:text-[#0f62fe] transition-colors rounded-lg"
              >
                <Download className="w-4 h-4" />
                Get Datasheet
              </button>
              <a
                href="mailto:contact@perception-it.com?subject=Huawei%20Outdoor%20Power%20Enquiry%20-%20Rack%20and%20Cabinet"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#0f62fe] text-white carbon-body-02 hover:bg-[#0353e9] transition-colors rounded-lg"
              >
                Enquire About This Model
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Datasheet Modal */}
      {datasheetOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setDatasheetOpen(false)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setDatasheetOpen(false)}
              className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <span className="sr-only">Close</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="carbon-heading-02 text-gray-900 mb-2">Huawei Outdoor Power Datasheet</h3>
            <p className="carbon-body-02 text-gray-500 mb-6">
              This datasheet is available on request. Send us a quick email and we&apos;ll deliver
              the full technical specifications to your inbox.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:contact@perception-it.com?subject=Request:%20Huawei%20Outdoor%20Power%20Datasheet"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#0f62fe] text-white carbon-body-02 hover:bg-[#0353e9] transition-colors rounded-lg"
              >
                Request via Email
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
