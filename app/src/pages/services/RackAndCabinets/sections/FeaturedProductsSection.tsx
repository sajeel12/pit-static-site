import { ArrowRight, ShieldCheck, Zap, Layers, Settings, Gauge, Sun, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const ONE_CABINET_ENQUIRY_BODY = encodeURIComponent(
  'Hi Perception IT Team,\n\nI am interested in the Huawei One Site One Cabinet solution for our site. Please find the initial details below.\n\nPlease provide as much information as you can — you do not need to fill out every field completely. Even partial details are helpful to start the conversation.\n\n- Site location:\n- Number of cabinets required:\n- Target load capacity (kW):\n- Preferred installation mode (floor-mounted / stacked / rooftop):\n- Cooling requirement (heat exchanger / direct ventilation / air conditioner):\n- IP rating required (IP45 / IP55):\n- Input power mode (three-phase / single-phase / dual-live wire):\n- Planned deployment timeline:\n- Specific site conditions or constraints:\n\nPlease contact me to discuss the recommended model (MTS9300A / MTS9000A / iSuperSite) and next steps.\n\nBest regards,'
);

export default function FeaturedProductsSection() {
  const [comparisonOpen, setComparisonOpen] = useState(false);

  return (
    <section id="featured-products" className="py-16 md:py-24 bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-6">
          <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
            Featured Product
          </span>
          <h2 className="carbon-fluid-heading-05 text-[#161616] mb-1">
            Huawei One Site One Cabinet
          </h2>
          <h3 className="carbon-heading-02 text-gray-500 mb-4">
            Replacing multiple cabinets with one, achieving whole-link intelligence
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
              src="/Sections/Racks and Cabinets/Racks and Cabinets - Images/Huawei- One Site One Cabinet.jpg"
              alt="Huawei One Site One Cabinet outdoor power solution"
              className="max-w-full max-h-[240px] object-contain rounded-lg"
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
              One Site One Cabinet
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

            {/* CTA */}
            <div className="flex gap-3 flex-wrap">
              <a
                href={`mailto:info@perception-it.com?subject=One%20Cabinet%20Enquiry%20-%20Rack%20%26%20Cabinet&body=${ONE_CABINET_ENQUIRY_BODY}`}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#0f62fe] text-white carbon-body-02 hover:bg-[#0353e9] transition-colors rounded-lg"
              >
                Enquire About This Model
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Technical Strengths */}
        <div className="mb-10">
          <h3 className="carbon-heading-02 text-[#161616] mb-6">Technical Strengths</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Layers,
                title: 'High Density',
                desc: 'High-density power supply and lithium battery with higher power density',
              },
              {
                icon: Settings,
                title: 'Simplified Deployment',
                desc: 'Intelligent peak shaving and intelligent voltage boosting',
              },
              {
                icon: Gauge,
                title: 'Intelligent Power Consumption',
                desc: 'Intelligent peak staggering and energy slicing for on-demand backup',
              },
              {
                icon: Sun,
                title: 'Smart PV Deployment',
                desc: 'Low electricity cost and low carbon emissions',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl border border-gray-200 p-5 hover:border-[#0f62fe]/30 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0f62fe]/10 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-[#0f62fe]" />
                </div>
                <h4 className="carbon-heading-02 text-[#161616] mb-2">{item.title}</h4>
                <p className="carbon-body-02 text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Product Comparison */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <button
            onClick={() => setComparisonOpen(!comparisonOpen)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-[#f4f4f4] transition-colors"
          >
            <h3 className="carbon-heading-02 text-[#161616]">Model Comparison for One Site One Cabinet</h3>
            <ChevronDown
              className={`w-5 h-5 text-[#0f62fe] transition-transform duration-300 ${
                comparisonOpen ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              comparisonOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="overflow-x-auto border-t border-gray-200">
              <table className="w-full min-w-[700px]">
              <thead>
                <tr className="bg-[#f4f4f4]">
                  <th className="text-left p-4 carbon-label-02 text-gray-500 uppercase tracking-wider border-b border-gray-200">Item</th>
                  <th className="text-left p-4 carbon-label-02 text-gray-500 uppercase tracking-wider border-b border-gray-200">MTS9300A</th>
                  <th className="text-left p-4 carbon-label-02 text-gray-500 uppercase tracking-wider border-b border-gray-200">MTS9000A</th>
                  <th className="text-left p-4 carbon-label-02 text-gray-500 uppercase tracking-wider border-b border-gray-200">iSuperSite</th>
                </tr>
              </thead>
              <tbody className="carbon-body-02 text-gray-600">
                {[
                  { item: 'Cabinet material', mts9300a: 'Steel', mts9000a: 'PU', isupersite: 'PU' },
                  { item: 'Dimensions (W x D)', mts9300a: '650 mm x 650 mm', mts9000a: '750 mm x 750 mm', isupersite: '900 mm x 1200 mm' },
                  { item: 'Height', mts9300a: '1000 / 1600 / 2000 mm', mts9000a: '1600 / 2000 mm', isupersite: '2100 mm' },
                  { item: 'System capacity', mts9300a: 'Max. 36 kW', mts9000a: 'Max. 24 kW', isupersite: 'Max. 36 kW' },
                  { item: 'Installation mode', mts9300a: 'Floor-mounted / Stacked', mts9000a: 'Floor-mounted / Rooftop-mounted', isupersite: 'Floor-mounted' },
                  { item: 'Cooling mode', mts9300a: 'Heat exchanger / Direct ventilation / Air conditioner', mts9000a: 'Air conditioner', isupersite: 'Air conditioner' },
                  { item: 'IP rating', mts9300a: 'IP45, IP55', mts9000a: 'IP55', isupersite: 'IP55' },
                  { item: 'Input mode', mts9300a: 'Three-phase / Single-phase / Three-live wire / Dual-live wire', mts9000a: 'Three-phase / Single-phase / Dual-live wire', isupersite: 'Three-phase / Single-phase / Dual-live wire' },
                ].map((row, idx, arr) => (
                  <tr key={row.item} className={idx === arr.length - 1 ? '' : 'border-b border-gray-100'}>
                    <td className="p-4 font-medium text-[#161616]">{row.item}</td>
                    <td className="p-4">{row.mts9300a}</td>
                    <td className="p-4">{row.mts9000a}</td>
                    <td className="p-4">{row.isupersite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
        </div>

      </div>

    </section>
  );
}
