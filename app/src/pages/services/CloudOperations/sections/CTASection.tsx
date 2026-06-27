import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="cta" className="py-20 bg-[#0f62fe]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="carbon-fluid-heading-05 text-white mb-6">
          Ready to Future-Proof Your DevOps & Cloud?
        </h2>
        <p className="carbon-body-02 text-white/90 text-lg mb-10 max-w-2xl mx-auto">
          Let us show you how DevOps, FinOps, AIOps, and Platform Engineering can reduce cost,
          accelerate delivery, and prepare your business for the AI era.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:info@perception-it.com?subject=Consultation%20Request%20for%20DevOps%20and%20Cloud"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0f62fe] carbon-heading-02 hover:bg-white/90 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5 transition-all rounded-lg"
          >
            Book a Cloud Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="/#/services/cloud-cost-optimisation"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white carbon-heading-02 hover:bg-white/10 transition-all rounded-lg"
          >
            Explore FinOps
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
        <p className="carbon-helper-text-01 text-white/50 mt-6">
          Response within 1 business day · No obligation
        </p>
      </div>
    </section>
  );
}
