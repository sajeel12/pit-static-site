import { ArrowRight } from '@carbon/icons-react';

/**
 * Thermal Risk Hero — Scan-Friendly Demo
 *
 * Already scannable by design. 3 visual cards + CTA.
 * No expand pattern needed — lightweight, visual, fast to grasp.
 */

export default function ScanFriendlyHero() {
  return (
    <section id="thermal-failure" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-6">
          <div className="border-l-2 border-[#cf0a2c] pl-3 mb-3">
            <p className="carbon-label-01 text-[#cf0a2c] uppercase tracking-wider">Thermal Risk</p>
          </div>
        </div>

        <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
          What Happens at 45°C / 90% RH
        </h2>

        <p className="carbon-body-01 text-[#525252] mb-10 max-w-3xl">
          Pakistan&apos;s summer peaks push standard cooling beyond its design limits. When ambient exceeds 35°C and humidity crosses 80%, three failure modes cascade — and they cascade fast.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {[
            {
              step: '01',
              title: 'Overheat',
              temp: '45°C+',
              desc: 'Server inlet temperatures exceed 27°C. Thermal throttling begins. Performance drops 30–50% before hard shutdown.',
            },
            {
              step: '02',
              title: 'Condensation',
              temp: '90% RH',
              desc: 'Humidity exceeds dew point inside cabinets. Corrosion begins on boards and contacts. Latent damage not visible for weeks.',
            },
            {
              step: '03',
              title: 'Downtime',
              temp: 'PKR 2–5M/day',
              desc: 'Cascading thermal shutdowns trigger SLA penalties, client churn, and emergency CapEx.',
            },
          ].map((item) => (
            <div key={item.step} className="p-6 bg-[#f4f4f4] border border-[#e0e0e0]">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-[#cf0a2c] text-white flex items-center justify-center font-semibold text-base">
                  {item.step}
                </div>
                <span className="carbon-label-01 text-[#cf0a2c] font-semibold uppercase tracking-wider">
                  {item.temp}
                </span>
              </div>
              <h3 className="carbon-heading-02 text-[#161616] mb-2">{item.title}</h3>
              <p className="carbon-body-01 text-[#525252]">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="py-6 text-left">
          <h3 className="carbon-heading-02 text-[#161616] mb-2">
            Don&apos;t wait for the next heatwave.
          </h3>
          <p className="carbon-body-01 text-[#525252] mb-4 max-w-xl">
            A Thermal Health Check identifies your risk profile before the summer peak. From PKR 75,000. 90 minutes. No obligation.
          </p>
          <a
            href="#cta"
            className="cds--btn cds--btn--primary inline-flex items-center bg-[#0f62fe] text-white hover:bg-[#0353e9] transition-colors"
          >
            Book Thermal Health Check
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
