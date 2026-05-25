import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Server, Shield, Wrench } from 'lucide-react';
import Navigation from '../../components/Navigation';

export default function HuaweiPartnership() {
  return (
    <>
      <Navigation variant="dark" />

      {/* Hero */}
      <section className="bg-[#161616] text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span
              className="carbon-label-02 uppercase tracking-[0.16px] mb-6 block"
              style={{ color: '#cf0a2c' }}
            >
              Certified Partner
            </span>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-[#cf0a2c] flex items-center justify-center flex-shrink-0 rounded-sm">
                <span className="text-white font-semibold text-xl">H</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight">
                Huawei Enterprise
              </h1>
            </div>

            <p className="carbon-body-02 text-white/70 max-w-2xl mb-8">
              Perception IT is an authorized infrastructure solutions provider for Huawei
              Enterprise in Pakistan. We supply, deploy, and support Huawei data centre
              equipment, from precision cooling to power distribution, with certified
              engineers and local SLA backing.
            </p>

            <Link
              to="/infrastructure/data-centre-services/cooling-airflow"
              className="inline-flex items-center gap-2 px-6 h-12 bg-[#0f62fe] text-white carbon-body-02 font-medium hover:bg-[#0353e9] transition-colors"
            >
              Explore Cooling <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership Scope */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <span
            className="carbon-label-02 uppercase tracking-[0.16px] mb-4 block"
            style={{ color: '#0f62fe' }}
          >
            Partnership Scope
          </span>
          <h2 className="text-2xl sm:text-3xl font-light text-[#161616] mb-12">
            What the partnership covers
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-200 p-6 hover:border-[#0f62fe]/30 hover:shadow-lg transition-all">
              <Server className="w-8 h-8 text-[#0f62fe] mb-4" />
              <h3 className="carbon-heading-02 text-[#161616] mb-2">
                Authorized Supply
              </h3>
              <p className="carbon-body-02 text-[#525252]">
                Direct access to Huawei Enterprise hardware catalog. Factory-accepted units
                with full warranty and traceable serials.
              </p>
            </div>

            <div className="border border-gray-200 p-6 hover:border-[#0f62fe]/30 hover:shadow-lg transition-all">
              <Shield className="w-8 h-8 text-[#0f62fe] mb-4" />
              <h3 className="carbon-heading-02 text-[#161616] mb-2">
                Certified Deployment
              </h3>
              <p className="carbon-body-02 text-[#525252]">
                Engineers hold Huawei manufacturer certifications. Every installation follows
                Huawei deployment standards and checklists.
              </p>
            </div>

            <div className="border border-gray-200 p-6 hover:border-[#0f62fe]/30 hover:shadow-lg transition-all">
              <Wrench className="w-8 h-8 text-[#0f62fe] mb-4" />
              <h3 className="carbon-heading-02 text-[#161616] mb-2">
                Local SLA Support
              </h3>
              <p className="carbon-body-02 text-[#525252]">
                Pakistan-based support team with guaranteed response times. No overseas
                escalation delays for critical infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span
                className="carbon-label-02 uppercase tracking-[0.16px] mb-4 block"
                style={{ color: '#0f62fe' }}
              >
                Certifications
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#161616] mb-6">
                Engineer credentials
              </h2>
              <p className="carbon-body-02 text-[#525252] mb-8">
                Our deployment and support engineers maintain active Huawei certifications.
                This means your infrastructure is handled by technicians who have trained
                directly with Huawei, not generalists learning on the job.
              </p>

              <ul className="space-y-3">
                {[
                  'Huawei Data Centre Infrastructure Certified',
                  'Huawei Network Energy Certified',
                  'Huawei Server & Storage Certified',
                  'Thermal Analysis & CFD Specialisation',
                ].map((cert) => (
                  <li key={cert} className="flex items-start gap-3 carbon-body-02 text-[#525252]">
                    <CheckCircle className="w-5 h-5 text-[#24a148] flex-shrink-0 mt-0.5" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-8">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/logos/partners/Partner-Huawei-Logo.svg"
                  alt="Huawei"
                  className="h-10 w-auto"
                />
                <div className="h-8 w-px bg-gray-200" />
                <span className="carbon-label-02 text-[#a8a8a8] uppercase tracking-[0.16px]">
                  Enterprise Partner
                </span>
              </div>
              <p className="carbon-body-02 text-[#525252] mb-6">
                Perception IT has been a Huawei Enterprise partner since 2019, delivering
                infrastructure solutions across Pakistan&apos;s telecom, banking, and
                manufacturing sectors.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Data Centre', 'Network Energy', 'Server & Storage', 'Cooling'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#f4f4f4] text-[#525252] carbon-label-02"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#161616]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-4">
            Ready to spec Huawei infrastructure?
          </h2>
          <p className="carbon-body-02 text-white/70 max-w-2xl mx-auto mb-8">
            Book a free 30-minute consultation. We&apos;ll assess your requirements and
            recommend the right Huawei configuration for your environment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/infrastructure/data-centre-services/cooling-airflow"
              className="inline-flex items-center gap-2 px-6 h-12 bg-[#0f62fe] text-white carbon-body-02 font-medium hover:bg-[#0353e9] transition-colors"
            >
              Explore Cooling <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 h-12 border border-white/30 text-white carbon-body-02 font-medium hover:bg-white/10 transition-colors"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
