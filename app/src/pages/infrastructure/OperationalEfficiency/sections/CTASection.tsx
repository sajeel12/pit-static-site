import { Layers, SquareStack } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="cta" className="py-20 bg-[#0f62fe]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="carbon-label-01 text-white/70 uppercase mb-3">Take the next step</p>
        <h2 className="carbon-fluid-heading-05 text-white mb-4">
          Choose Your Engagement Model
        </h2>
        <p className="carbon-body-02 text-white/80 max-w-2xl mx-auto mb-10">
          Speak with our engineering team about your data centre priorities. We respond within one business day.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Ecosystem Card */}
          <div className="bg-white rounded-xl p-8 text-left flex flex-col">
            <div className="flex justify-end mb-4">
              <span
                className="inline-flex items-center px-2 py-0.5 text-white carbon-label-01 uppercase tracking-wider rounded-full border border-white/20"
                style={{ backgroundColor: '#a855f7' }}
              >
                Ecosystem
              </span>
            </div>
            <div className="w-12 h-12 rounded-lg bg-[#0f62fe]/10 flex items-center justify-center mb-5">
              <Layers className="w-6 h-6 text-[#0f62fe]" />
            </div>
            <h3 className="carbon-heading-02 text-[#0F172A] mb-2">Data Centre Ecosystem Integration</h3>
            <p className="carbon-body-02 text-gray-500 mb-6 flex-1">
              Enterprise volume pricing. Unified scope across integrated layers.
            </p>
            <a
              href="mailto:contact@perception-it.com?subject=Ecosystem%20Integration%20Consultation%20Request"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0f62fe] text-white carbon-heading-02 hover:bg-[#0353e9] transition-colors rounded-lg"
            >
              Request Technical Consultation
            </a>
          </div>

          {/* Individual Services Card */}
          <div className="bg-white rounded-xl p-8 text-left flex flex-col">
            <div className="flex justify-end mb-4">
              <span
                className="inline-flex items-center px-2 py-0.5 text-white carbon-label-01 uppercase tracking-wider rounded-full border border-white/20"
                style={{ backgroundColor: '#525252' }}
              >
                Individual
              </span>
            </div>
            <div className="w-12 h-12 rounded-lg bg-[#0f62fe]/10 flex items-center justify-center mb-5">
              <SquareStack className="w-6 h-6 text-[#0f62fe]" />
            </div>
            <h3 className="carbon-heading-02 text-[#0F172A] mb-2">Deploy by Individual Service</h3>
            <p className="carbon-body-02 text-gray-500 mb-6 flex-1">
              Fixed scope, fixed price. Pay per layer.
            </p>
            <a
              href="mailto:contact@perception-it.com?subject=Individual%20Service%20Enquiry"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#0f62fe] carbon-heading-02 border-2 border-[#0f62fe] hover:bg-[#0f62fe]/5 transition-colors rounded-lg"
            >
              Request Technical Consultation
            </a>
          </div>
        </div>

        <p className="carbon-helper-text-01 text-white/50">
          All enquiries include a complimentary site assessment and savings estimate.
        </p>
      </div>
    </section>
  );
}
