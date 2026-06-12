import { useState } from 'react';
import Download from '@carbon/icons-react/es/Download';
import { trackEvent } from '../utils';

export default function CTASection() {
  const [isToolPopupOpen, setIsToolPopupOpen] = useState(false);
  const showInternalLink = import.meta.env.VITE_SHOW_INTERNAL === 'true';

  return (
    <section id="cta" className="py-20 bg-[#0f62fe]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Headline */}
        <div className="text-center mb-10">
          <h2 className="carbon-fluid-heading-05 text-white mb-6">
            Ready to Optimise Your Data Centre Cooling?
          </h2>
        </div>

        {/* Primary CTA */}
        <div className="text-center mb-10">
          <a
            href="mailto:info@perception-it.com?subject=Free%20Cooling%20Consultation%20Request"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0f62fe] carbon-heading-02 hover:bg-white/90 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5 transition-all rounded-lg"
            onClick={() => trackEvent('cta_conversion', { type: 'consultation', location: 'bottom_cta' })}
          >
            Request Technical Consultation
          </a>
          <p className="carbon-helper-text-01 text-white/50 mt-4">
            Response within 1 business day · No obligation
          </p>
        </div>

        {/* Value proposition card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8 sm:p-10 mb-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
            <span className="inline-flex items-center px-3 py-1 bg-white/15 text-white carbon-label-01 uppercase tracking-wider rounded-full">
              Enterprise Pricing
            </span>
            <span className="carbon-helper-text-01 text-white/60">
              Volume discounts when cooling is validated with the full facility stack
            </span>
          </div>
          <p className="carbon-body-02 text-white/90 leading-relaxed">
            You can avail Enterprise Volume Pricing when cooling is integrated with power, monitoring, and containment from a single accountable team. Request a consultation. We&apos;ll assess your thermal profile and identify the right path forward within one business day.
          </p>
        </div>

        {/* Secondary action */}
        <div className="pt-8 flex flex-col items-center gap-3">
          <a
            href="/Sections/Cooling page/downloads-cooling/Perception-IT-Thermal-Readiness-Checklist.pdf"
            download
            className="inline-flex items-center gap-2 text-white/80 hover:text-white carbon-body-02 hover:underline transition-colors"
            onClick={() => trackEvent('cta_conversion', { type: 'checklist_download', location: 'bottom_cta' })}
          >
            <Download className="w-4 h-4" />
            Download the Thermal Health Checklist for self-assessment
          </a>
          <p className="carbon-helper-text-01 text-white/40 max-w-md text-center">
            PDF download. Self-assessment guide only. Not a substitute for professional engineering evaluation.
          </p>

          {showInternalLink && (
            <button
              type="button"
              onClick={() => setIsToolPopupOpen(true)}
              className="inline-flex items-center justify-center gap-2 mt-4 px-6 py-3 bg-[#da1e28] text-white carbon-body-02 rounded-lg"
            >
              Optimised tool selection | remove this red btn later
            </button>
          )}
        </div>
      </div>

      {isToolPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-3xl rounded-3xl bg-white p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="carbon-label-01 text-[#0f62fe] uppercase mb-3">Optimised tool selection</p>
                <h2 className="carbon-fluid-heading-05 text-slate-950">Partner types and selection notes for cooling delivery</h2>
              </div>
              <button type="button" onClick={() => setIsToolPopupOpen(false)} className="text-slate-500 hover:text-slate-900">
                Close
              </button>
            </div>

            <div className="space-y-6 text-slate-700">
              <div>
                <p className="carbon-heading-03 text-slate-900 mb-3">Partner types (who to partner with and why)</p>
                <ul className="space-y-3 list-inside list-disc carbon-body-02">
                  <li><strong>Thermal engineering / CFD consultancies:</strong> run airflow modelling, CFD validation, thermal strategy and remote assessments.</li>
                  <li><strong>Data-centre HVAC equipment OEMs:</strong> CRAC/CRAH, evaporative coolers, in-row coolers, chilled-water plant suppliers for spec, lead times, warranties.</li>
                  <li><strong>Controls / BMS integrators:</strong> supply and integrate building management, control sequences, and thermostatic/pressure controls.</li>
                  <li><strong>Row/rack cooling & containment specialists:</strong> hot/cold aisle containment, blanking, aisle doors, in-rack cooling hardware.</li>
                  <li><strong>Electrical power / UPS vendors:</strong> for load/capacity alignment, derating, and redundancy planning.</li>
                  <li><strong>Fluid systems / pipework installers:</strong> chilled-water piping, pumps, valves, and commissioning.</li>
                  <li><strong>Instrumentation & test labs:</strong> temp/humidity sensors, data loggers, and third-party commissioning/validation (certified labs).</li>
                  <li><strong>Commissioning & site services contractors:</strong> on-site commissioning, validation, and final acceptance testing.</li>
                  <li><strong>Logistics and spares suppliers:</strong> secure shipping, customs handling, spares stocking and fast replacement parts.</li>
                  <li><strong>DCIM / monitoring software vendors:</strong> telemetry, alerting, capacity planning and remote monitoring dashboards.</li>
                  <li><strong>Energy efficiency / sustainability specialists:</strong> PUE optimisation, economiser strategies, and renewable integration (if relevant).</li>
                  <li><strong>Local civil / MEP contractors:</strong> local permitting, site works, rooftop plant supports and local codes compliance.</li>
                  <li><strong>Managed services providers / remote NOC partners:</strong> ongoing monitoring, threshold management, and SLA-driven response.</li>
                  <li><strong>Financing / leasing partners:</strong> for CAPEX smoothing, equipment-as-a-service, and OPEX models.</li>
                </ul>
              </div>

              <div>
                <p className="carbon-heading-03 text-slate-900 mb-3">Selection & integration notes</p>
                <ul className="space-y-3 list-inside list-disc carbon-body-02">
                  <li>Prioritize partners with proven data-centre references and standards compliance (ASHRAE, ISO).</li>
                  <li>Request sample CFD reports and commissioning checklists to verify technical quality.</li>
                  <li>Define clear SLAs for remote deliverables vs. on-site tasks; separate scopes to avoid scope creep.</li>
                  <li>Ensure interoperability: BMS/DCIM APIs, sensor compatibility, and vendor control protocols.</li>
                  <li>Local partner must handle final commissioning and warranty-linked site acceptance.</li>
                </ul>
              </div>

              <div>
                <p className="carbon-heading-03 text-slate-900 mb-3">Next practical steps</p>
                <ul className="space-y-3 list-inside list-disc carbon-body-02">
                  <li>Shortlist 3 vendors per category and request RFI with references, sample deliverables, typical timelines, and pricing.</li>
                  <li>Draft a partner brief (scope + responsibilities + SLA boundaries) and share for review.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
