export default function CTASection() {
  return (
    <section id="cta" className="py-20 bg-[#0f62fe]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12 text-center">
          <p className="carbon-label-01 text-white/70 uppercase tracking-wider mb-3">Get Started</p>
          <h2 className="carbon-fluid-heading-05 text-white mb-4">Choose Your Engagement Model</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Ecosystem */}
          <div className="bg-[#0353e9]/40 rounded-xl border border-white/30 p-8 flex flex-col">
            <div className="flex justify-end mb-4">
              <span
                className="inline-flex items-center px-2.5 py-1 text-white carbon-label-01 uppercase tracking-wider rounded-full"
                style={{ backgroundColor: '#a855f7' }}
              >
                Ecosystem
              </span>
            </div>
            <h3 className="carbon-heading-02 text-white mb-2">Data Centre Ecosystem Integration</h3>
            <p className="carbon-body-02 text-white/80 mb-6 flex-1">
              Enterprise volume pricing. Unified scope across integrated layers.
            </p>
            <a
              href="mailto:info@perception-it.com?subject=Ecosystem%20Integration%20Consultation%20Request"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-[#0f62fe] carbon-heading-02 hover:bg-white/90 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5 transition-all rounded-lg"
            >
              Request Technical Consultation
            </a>
          </div>

          {/* Individual */}
          <div className="bg-[#0353e9]/40 rounded-xl border border-white/30 p-8 flex flex-col">
            <div className="flex justify-end mb-4">
              <span
                className="inline-flex items-center px-2.5 py-1 text-white carbon-label-01 uppercase tracking-wider rounded-full"
                style={{ backgroundColor: '#009d9a' }}
              >
                Individual
              </span>
            </div>
            <h3 className="carbon-heading-02 text-white mb-2">Deploy by Individual Service</h3>
            <p className="carbon-body-02 text-white/80 mb-6 flex-1">
              Fixed scope, fixed price. Pay per layer.
            </p>
            <a
              href="mailto:info@perception-it.com?subject=Individual%20Service%20Enquiry"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-[#0f62fe] carbon-heading-02 hover:bg-white/90 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5 transition-all rounded-lg"
            >
              Request Technical Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
