import { useState } from 'react';
import { ChevronDown, ArrowRight, ArrowDown, Close, Cube } from '@carbon/icons-react';
import { AirConditioner, Windy, ServerRack } from '@carbon/pictograms-react';
import { blue50, blue80 } from '@carbon/colors';

/**
 * Scan-Friendly Procurement Section — Carbon Design System Pattern
 *
 * Visible: header + 3 summary bullets + image + CTA
 * Expandable: flip hardware cards, exclusions, partnerships
 */

export default function ScanFriendlyProcurement() {
  const [expanded, setExpanded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });

  const cards = [
    {
      pictogram: AirConditioner,
      title: 'Server Room AC Units',
      short: 'Edge sites & small server rooms up to 50kW.',
      category: 'Room Cooling',
      bullets: [
        'Wall-mounted, ceiling-suspended, and portable units',
        'Designed for edge sites and small server rooms up to 50kW heat load',
        'Split-system and ducted configurations available',
        'All units validated for 45°C ambient and monsoon humidity before shipment',
      ],
    },
    {
      pictogram: Windy,
      title: 'In-Row & CRAC Precision Cooling',
      short: 'Close-coupled cooling for high-density racks.',
      category: 'Precision Cooling',
      bullets: [
        'Close-coupled cooling for high-density racks',
        'Hot/cold aisle compatible with N+1 redundancy options',
        'Row-based and room-based CRAC/CRAH units from 5kW to 150kW',
        'Integrated with aisle containment and variable-speed fans for part-load efficiency',
      ],
    },
    {
      pictogram: ServerRack,
      title: 'Large-Scale Facility Cooling',
      short: 'Centralised chilled water and hybrid systems for facilities above 500kW.',
      category: 'Facility Cooling',
      bullets: [
        'Chillers, cooling towers, and CRAH units for data centre-wide temperature control',
        'Hybrid dry/wet cooling systems optimised for 45°C ambient and monsoon humidity',
        'Redundant N+1 configurations with automated failover and remote monitoring',
      ],
    },
  ];

  return (
    <section id="hardware" className="py-16 bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Gradient definition for pictograms */}
        <svg width="0" height="0" className="absolute" aria-hidden="true">
          <defs>
            <linearGradient id="pictogramGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={blue80} />
              <stop offset="100%" stopColor={blue50} />
            </linearGradient>
          </defs>
        </svg>

        {/* ============================================================
            ALWAYS VISIBLE — Scan Layer
            ============================================================ */}
        <div className="grid md:grid-cols-2 gap-11 mb-8 items-start">
          {/* Image + Featured Product — left side */}
          <div>
            <img
              src="/3D images/Cooling and Airflow/FusionCool.png"
              alt="Precision cooling hardware showcase: CRAC and ACU units in a data centre environment"
              className="w-full h-auto object-cover"
              loading="lazy"
            />

            {/* Featured Product Card — under the image */}
            <div className="border-l-2 border-[#cf0a2c] pl-6 mt-6">
              <p className="carbon-label-01 text-[#cf0a2c] uppercase tracking-wider mb-3">
                Featured Product
              </p>
              <h4 className="carbon-heading-02 text-[#161616] mb-4">
                FusionCol8000-E
              </h4>
              <p className="carbon-body-01 text-[#525252] mb-1">
                <span className="carbon-label-01 text-[#8d8d8d] uppercase tracking-wider">Type: </span>
                Indirect Evaporative Cooling
              </p>
              <p className="carbon-body-01 text-[#525252] mb-6">
                <span className="carbon-label-01 text-[#8d8d8d] uppercase tracking-wider">For: </span>
                Public cloud, large colo DCs, and medium- to large-sized data centres.
              </p>
              <a
                href="#cta"
                className="cds--btn cds--btn--primary inline-flex items-center bg-[#cf0a2c] text-white hover:bg-[#a80a20] px-4 py-2 transition-colors mb-5"
              >
                Enquire About FusionCol8000-E
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <div className="mt-4 pt-4 border-t border-[#e0e0e0]">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-2 carbon-body-01 text-[#0f62fe] hover:underline transition-colors"
                >
                  <ArrowDown className="w-4 h-4" />
                  Download datasheet
                </button>
              </div>
            </div>
          </div>

          {/* Text — right side */}
          <div>
            <div className="mb-6">
              <div className="border-l-2 border-[#009d9a] pl-3 mb-3">
                <p className="carbon-label-01 text-[#161616] uppercase tracking-wider font-semibold">02 Procurement</p>
              </div>
              <p className="carbon-body-01 text-[#525252]">Right-sized hardware, certified</p>
            </div>

            <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
              Cooling Hardware Procurement
            </h2>

            <p className="carbon-body-02 text-[#161616] mb-6">
              From procurement to deployment, one partner handles the full stack. No guesswork, no incompatible hardware, full accountability.
            </p>

            {/* Service layer — what Perception-IT does */}
            <div className="mb-6">
              <p className="carbon-label-01 text-[#8d8d8d] uppercase tracking-wider mb-2">What you get</p>
              <p className="carbon-body-01 text-[#525252] leading-relaxed">
                Thermal continuity depends on hardware that survives Pakistan&apos;s reality. We source cooling equipment from tier-1 manufacturers and validate every unit for 45°C ambient, monsoon humidity, and dust infiltration before it ships.
              </p>
            </div>

            {/* Product layer — hardware categories */}
            <div className="border-t border-[#e0e0e0] mb-6">
              <p className="carbon-label-01 text-[#8d8d8d] uppercase tracking-wider pt-4 mb-2">Hardware categories</p>
              {[
                {
                  title: 'Server Room AC Units',
                  desc: 'Wall-mounted, ceiling, and portable units for edge sites up to 50kW.',
                },
                {
                  title: 'In-Row & CRAC Precision Cooling',
                  desc: 'Close-coupled cooling from 5kW to 150kW with N+1 redundancy.',
                },
                {
                  title: 'Large-Scale Facility Cooling',
                  desc: 'Centralised chilled water and hybrid systems for facilities above 500kW.',
                },
              ].map((item, idx, arr) => (
                <div
                  key={item.title}
                  className={`py-4 ${idx < arr.length - 1 ? 'border-b border-[#e0e0e0]' : ''}`}
                >
                  <p className="carbon-heading-01 text-[#161616] mb-1">{item.title}</p>
                  <p className="carbon-body-01 text-[#525252]">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA + expand link — same row pattern as Assessment */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#cta"
                className="cds--btn cds--btn--primary inline-flex items-center bg-[#0f62fe] text-white hover:bg-[#0353e9] px-4 py-2 transition-colors"
              >
                Request Hardware Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>

              {!expanded && (
                <button
                  onClick={() => setExpanded(true)}
                  className="inline-flex items-center gap-2 h-12 carbon-body-01 text-[#0f62fe] hover:underline transition-colors"
                >
                  <Cube className="w-5 h-5 flex-shrink-0" />
                  View hardware details
                  <ChevronDown className="w-4 h-4 flex-shrink-0" />
                </button>
              )}
            </div>
          </div>

        </div>

        {/* ============================================================
            EXPANDABLE — Detail Layer
            ============================================================ */}
        <div
          className={`overflow-hidden transition-all ${
            expanded ? 'max-h-[6000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{ transitionDuration: '400ms' }}
        >

          {/* Collapse link — top of detail layer */}
          <div className="text-right">
            <button
              onClick={() => setExpanded(false)}
              className="inline-flex items-center gap-2 carbon-body-01 text-[#0f62fe] hover:underline transition-colors mb-4"
            >
              Collapse details
              <ChevronDown className="w-4 h-4 rotate-180" />
            </button>
          </div>

          {/* Hardware category flip cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {cards.map((card) => {
              const P = card.pictogram;
              return (
                <div key={card.title} className="group [perspective:1000px] h-96">
                  <div className="relative h-full w-full overflow-hidden shadow-sm hover:shadow-lg group">
                    {/* Front Face */}
                    <div className="h-full w-full bg-white border border-[#e0e0e0] flex flex-col">
                      <div className="h-1.5" style={{ background: `linear-gradient(135deg, ${blue80}, ${blue50})` }} />
                      <div className="p-6 flex-1 flex flex-col relative">
                        <span className="inline-flex self-start px-2 py-0.5 bg-[#f4f4f4] border border-[#e0e0e0] text-[#525252] text-[10px] font-medium uppercase tracking-wider mb-3">
                          {card.category}
                        </span>
                        <h3 className="text-xl font-normal text-[#161616] leading-snug mb-4">{card.title}</h3>
                        <p className="carbon-body-01 text-[#525252]">{card.short}</p>
                        <div className="mt-auto flex items-end justify-between">
                          <P className="w-20 h-20" style={{ fill: 'url(#pictogramGrad)' }} />
                          <svg className="w-5 h-5 text-[#0f62fe]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/* Back Face — gradient overlay on hover */}
                    <div
                      className="absolute inset-0 h-full w-full text-white flex flex-col opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: `linear-gradient(to bottom right, ${blue80}, ${blue50})`, transitionDuration: '245ms' }}
                    >
                      <div
                        className="p-6 flex-1 flex flex-col opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all"
                        style={{ transitionDuration: '245ms', transitionDelay: '122ms' }}
                      >
                        <h3 className="text-sm font-semibold text-white leading-snug mb-6">{card.title}</h3>
                        <ul className="text-sm text-white/90 leading-relaxed list-disc list-outside pl-4 space-y-2 marker:text-white/50 flex-1">
                          {card.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Exclusions */}
          <div className="border-t border-[#e0e0e0] pt-6 mb-6">
            <p className="carbon-helper-text-01 text-[#525252]">
              Procurement covers hardware supply and manufacturer warranty administration only; thermal capacity planning, monsoon/dust hardening, commissioning validation, uptime SLAs, and 24/7 monitoring are scoped separately under Assessment, Deployment, and Managed Services.
            </p>
          </div>

          {/* Manufacturer Partners — shown inside expanded details */}
          <div className="bg-white border border-[#e0e0e0] p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              {/* Label + warranty text */}
              <div className="md:w-1/2">
                <p className="carbon-body-01 text-[#525252]">
                  Warranty administered through Perception-IT. One partner for claims, diagnostics, and replacement, not the manufacturer.
                </p>
              </div>

              {/* Logo row with vertical dividers */}
              <div className="md:w-1/2 flex items-center justify-center md:justify-end divide-x divide-[#e0e0e0]">
                {[
                  { name: 'Huawei', logo: '/logos/partners/Partner-Huawei-Logo.svg', width: 100 },
                  { name: 'Lenovo', logo: '/logos/partners/Partner-Lenovo-Logo.svg', width: 90 },
                  { name: 'Dell', logo: '/logos/partners/Partner-Dell-logo.svg', width: 80 },
                  { name: 'HP', logo: '/logos/partners/Partner- Hewlett-Packard-Logo.svg', width: 70 },
                ].map((partner) => (
                  <div key={partner.name} className="flex items-center justify-center h-14 px-5 md:px-6">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-8 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                      style={{ maxWidth: partner.width }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Collapse link — bottom of detail layer */}
          <div className="text-right">
            <button
              onClick={() => setExpanded(false)}
              className="inline-flex items-center gap-2 carbon-body-01 text-[#0f62fe] hover:underline transition-colors mb-8"
            >
              Collapse details
              <ChevronDown className="w-4 h-4 rotate-180" />
            </button>
          </div>
        </div>
      </div>

      {/* Email Gate Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="relative w-full max-w-md bg-white shadow-lg">
            {/* Modal header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#e0e0e0]">
              <p className="carbon-heading-02 text-[#161616]">Download Datasheet</p>
              <button
                onClick={() => setModalOpen(false)}
                className="p-2 text-[#525252] hover:text-[#161616] transition-colors"
                aria-label="Close modal"
              >
                <Close className="w-5 h-5" />
              </button>
            </div>

            {/* Modal body */}
            <div className="px-5 py-5">
              <p className="carbon-body-01 text-[#525252] mb-5">
                Enter your details and we&apos;ll send the FusionCol8000-E datasheet to your inbox.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  // Trigger download
                  const link = document.createElement('a');
                  link.href = '/3D images/Cooling and Airflow Data sheet /FusionCol8000-E260&400+Datasheet.pdf';
                  link.download = 'FusionCol8000-E260&400+Datasheet.pdf';
                  link.click();
                  setModalOpen(false);
                  setFormData({ name: '', email: '', company: '' });
                }}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="ds-name" className="block carbon-label-01 text-[#525252] mb-1">Full Name</label>
                  <input
                    id="ds-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-10 px-3 border border-[#c6c6c6] bg-white text-[#161616] text-sm focus:outline-none focus:border-[#0f62fe]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="ds-email" className="block carbon-label-01 text-[#525252] mb-1">Email Address <span className="text-[#cf0a2c]">*</span></label>
                  <input
                    id="ds-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-10 px-3 border border-[#c6c6c6] bg-white text-[#161616] text-sm focus:outline-none focus:border-[#0f62fe]"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="ds-company" className="block carbon-label-01 text-[#525252] mb-1">Company</label>
                  <input
                    id="ds-company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full h-10 px-3 border border-[#c6c6c6] bg-white text-[#161616] text-sm focus:outline-none focus:border-[#0f62fe]"
                    placeholder="Your organisation"
                  />
                </div>

                <p className="carbon-caption-01 text-[#8d8d8d]">
                  We respect your privacy. No spam, ever.
                </p>

                <button
                  type="submit"
                  className="cds--btn cds--btn--primary w-full h-12 flex items-center justify-center bg-[#0f62fe] text-white hover:bg-[#0353e9] transition-colors"
                >
                  Download Datasheet
                  <ArrowDown className="w-4 h-4 ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
