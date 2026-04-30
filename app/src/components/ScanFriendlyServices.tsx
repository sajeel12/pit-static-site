import { ArrowRight } from '@carbon/icons-react';

/**
 * Services Overview — Scan-Friendly Demo
 *
 * Already scannable by design. 4 step cards act as page TOC.
 * No expand pattern needed — each card is a single glance.
 */

export default function ScanFriendlyServices() {
  return (
    <section id="how-it-works" className="py-16 bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-3">
          <div className="border-l-2 border-[#009d9a] pl-3 mb-3">
            <p className="carbon-label-01 text-[#161616] uppercase tracking-wider">Services</p>
          </div>
        </div>

        <h2 className="carbon-fluid-heading-04 text-[#161616] mb-8">
          From Cooling Assessment to 24/7 Accountability
        </h2>

        <div className="grid grid-cols-2 gap-4 items-start md:flex md:flex-row md:items-stretch md:gap-0">
          {[
            { step: '01', title: 'Assessment', desc: 'Thermal assessment & risk scoring' },
            { step: '02', title: 'Procurement', desc: 'Right-sized hardware, certified' },
            { step: '03', title: 'Deployment', desc: 'Install, validate, monitor' },
            { step: '04', title: 'Managed Services', desc: '24/7 monitoring & maintenance' },
          ].map((item, idx) => (
            <div key={item.step} className="md:flex md:items-stretch md:flex-1">
              <button
                className={`md:flex-1 p-5 bg-white text-left transition-colors border-b-2 cursor-pointer ${idx === 0 ? 'border-[#0f62fe] hover:bg-[#f4f4f4]' : 'border-transparent hover:border-[#0f62fe] hover:bg-[#f4f4f4]'}`}
              >
                <div className="w-10 h-10 bg-[#0f62fe] text-white flex items-center justify-center font-semibold text-base mb-3">
                  {item.step}
                </div>
                <p className="carbon-heading-02 text-[#161616] mb-1">{item.title}</p>
                <p className="carbon-body-01 text-[#525252]">{item.desc}</p>
              </button>
              {idx < 3 && (
                <div className="hidden md:flex md:items-center md:justify-center md:px-3">
                  <ArrowRight className="w-5 h-5 text-[#c6c6c6]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
