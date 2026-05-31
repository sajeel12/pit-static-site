import { Check, X } from 'lucide-react';
import { SLA_TIERS } from '../data';

export default function SLATierSection() {
  return (
    <section id="sla" className="py-16 md:py-24 bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
            SLA Tiers
          </span>
          <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
            Predictable Uptime, Transparent Pricing
          </h2>
          <p className="carbon-body-02 text-gray-600">
            Choose the protection level that matches your risk tolerance. All tiers include 
            Perception-IT NOC monitoring and local 24/7 support.
          </p>
        </div>

        {/* SLA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {SLA_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-white rounded-xl border flex flex-col ${
                tier.recommended
                  ? 'border-[#0f62fe] shadow-xl'
                  : 'border-gray-200 hover:border-gray-300 hover:shadow-lg'
              } transition-all duration-300`}
            >
              {tier.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-3 py-1 bg-[#0f62fe] text-white carbon-label-01 rounded-full">
                    Recommended
                  </span>
                </div>
              )}

              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="carbon-heading-02 text-[#161616]">{tier.name}</h3>
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: tier.color }}
                  />
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="carbon-fluid-display-03 text-[#161616]">{tier.uptime}</span>
                    <span className="carbon-body-02 text-gray-500">uptime</span>
                  </div>
                  <p className="carbon-body-02 text-gray-600 mt-1">
                    Response: {tier.response}
                  </p>
                </div>

                <div className="flex-1">
                  <p className="carbon-label-02 text-gray-500 uppercase mb-3">Included</p>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />
                        <span className="carbon-body-02 text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {tier.excluded.length > 0 && (
                    <>
                      <p className="carbon-label-02 text-gray-500 uppercase mb-3">Not Included</p>
                      <ul className="space-y-3">
                        {tier.excluded.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <X className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                            <span className="carbon-body-02 text-gray-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100">
                  <p className="carbon-fluid-heading-03 text-[#161616] mb-4">{tier.price}</p>
                  <a
                    href="#/contact"
                    className={`inline-flex items-center justify-center w-full px-6 py-3 carbon-heading-02 rounded-lg transition-all ${
                      tier.recommended
                        ? 'bg-[#0f62fe] text-white hover:bg-[#0353e9] hover:shadow-lg'
                        : 'bg-white border border-gray-300 text-[#161616] hover:border-[#0f62fe] hover:text-[#0f62fe]'
                    }`}
                  >
                    {tier.recommended ? 'Get Enterprise Quote' : 'Select Plan'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Signal */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="carbon-heading-02 text-[#161616] mb-1">Warranty + SLA Alignment</p>
              <p className="carbon-body-02 text-gray-600">
                Huawei hardware warranty + Perception-IT 99.95% uptime SLA = single-point accountability
              </p>
            </div>
            <div className="flex items-center gap-4 text-gray-500 carbon-label-02">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#24a148]" />
                SBP Compliant
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#24a148]" />
                Local Spares in Lahore
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
