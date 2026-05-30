export default function CTASection() {
  return (
    <section id="cta" className="py-20 bg-[#0f62fe]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="carbon-fluid-heading-05 text-white mb-4">
          Start your infrastructure assessment
        </h2>
        <p className="carbon-body-02 text-white/80 max-w-2xl mx-auto mb-10">
          Speak with our engineering team about your data centre priorities. We respond within one business day.
        </p>
        <a
          href="mailto:contact@perception-it.com?subject=Data%20Centre%20Cost%20Optimisation%20Enquiry"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0f62fe] carbon-heading-02 hover:bg-gray-50 transition-colors rounded-lg"
        >
          Request technical consultation
        </a>
        <p className="carbon-helper-text-01 text-white/50 mt-6">
          All enquiries include a complimentary site assessment and savings estimate.
        </p>
      </div>
    </section>
  );
}
