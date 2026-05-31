import { ArrowRight, Phone, MessageCircle } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="cta" className="py-16 md:py-24 bg-[#0f62fe]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="carbon-fluid-display-02 text-white mb-4">
            Ready to Secure Your Power?
          </h2>
          <p className="carbon-body-02 text-white/80 max-w-2xl mx-auto mb-8">
            Get a Power Resilience Assessment — includes load profiling, runtime modeling, 
            and recommended architecture. Response within 1 business day.
          </p>
          <a
            href="#/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0f62fe] carbon-heading-02 rounded-lg hover:bg-white/90 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5 transition-all"
          >
            Request Power Assessment
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="carbon-body-02 text-white/50 mt-4">
            No obligation · PKR-based estimates · SBP-compliant options flagged
          </p>
        </div>

        {/* Value Prop Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8 sm:p-10 mb-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 text-white carbon-label-02 rounded-full mb-4">
                Enterprise Pricing
              </span>
              <p className="carbon-body-02 text-white/90 max-w-2xl">
                When power, cooling, and monitoring are integrated under one SLA, you get 
                volume pricing and single-point accountability. No vendor blame games.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="tel:+924235111488"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/15 border border-white/30 text-white carbon-body-02 rounded-lg hover:bg-white/25 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Lahore NOC
              </a>
              <a
                href="https://wa.me/923218445598"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/15 border border-white/30 text-white carbon-body-02 rounded-lg hover:bg-white/25 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-white/60 carbon-label-02">
          <span>Lahore NOC</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>SBP-Compliant</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>99.95% SLA</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>Huawei Certified</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>Local Spares</span>
        </div>
      </div>
    </section>
  );
}
