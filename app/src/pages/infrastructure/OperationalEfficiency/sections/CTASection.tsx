export default function CTASection() {
  return (
    <section id="cta" className="py-20 bg-[#0f62fe]">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="carbon-fluid-heading-05 text-white mb-4">
          Ready to reduce your data centre costs?
        </h2>
        <p className="carbon-body-02 text-white/80 mb-10">
          Request a free data centre cost assessment. We will audit your current PUE, identify the highest-impact cost avoidance opportunities, and deliver a firm savings proposal.
        </p>

        <a
          href="mailto:contact@perception-it.com?subject=Operational%20Efficiency%20Assessment%20Request"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0f62fe] carbon-heading-02 hover:bg-gray-50 transition-colors rounded-lg"
        >
          Request Free Assessment
        </a>

        <div className="mt-8">
          <p className="carbon-helper-text-01 text-white/50">
            No obligation. Assessment includes PUE baseline, thermal mapping, and prioritised cost reduction roadmap.
          </p>
        </div>
      </div>
    </section>
  );
}
