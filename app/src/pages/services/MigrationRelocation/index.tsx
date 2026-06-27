import { useState, useEffect } from 'react';
import usePageSEO from '@/hooks/usePageSEO';
import CoolingNav from '@/pages/services/CoolingNav';
import Footer from '@/sections/Footer';
import StickyAnchorNav from '@/components/StickyAnchorNav';
import '@/styles/carbon-typography.css';
import '@/styles/design-tokens.css';
import {
  ArrowRight,
  ArrowUp,
  Phone,
  MessageCircle,
  Check,
  Calendar,
  Download,
  Users,
  Star,
} from 'lucide-react';
import {
  PAGE_SECTIONS,
  WHY_MIGRATIONS_FAIL,
  ENGAGEMENT_MODELS,
  INDUSTRY_EXPERIENCE,
  HARDWARE_BUNDLE_FEATURES,
  RECENT_PROJECTS,
  OPERATIONAL_CREDENTIALS,
  CONTACT_EMAIL_BODY,
} from './data';
import ResultsSection from './sections/ResultsSection';

export default function MigrationRelocation() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  usePageSEO({
    title: 'Data Centre Migration & Relocation Services | Perception IT',
    description:
      'Risk-managed data centre migration and relocation in Pakistan and the GCC. Advisory, managed oversight, and turnkey migration with 24/7 NOC support and Huawei hardware bundles.',
    canonicalPath: '/infrastructure/data-centre-services/migration-relocation',
    ogType: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Data Centre Migration & Relocation Services',
      provider: {
        '@type': 'Organization',
        name: 'Perception IT',
        url: 'https://perception-it.com',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Pakistan',
      },
      serviceType: 'Data Centre Migration and Relocation',
      description:
        'Risk-managed infrastructure transitions with advisory assessment, managed oversight, and turnkey execution backed by 24/7 NOC and ongoing managed services.',
      url: 'https://perception-it.com/#/infrastructure/data-centre-services/migration-relocation',
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <CoolingNav />

      {/* Sticky Breadcrumb */}
      <div className="sticky top-12 z-40 bg-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-12 flex items-center">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-500">
              <li><a href="/#/" className="hover:text-[#0f62fe] transition-colors">Home</a></li>
              <li className="text-gray-300">/</li>
              <li><a href="/#/infrastructure" className="hover:text-[#0f62fe] transition-colors">Infrastructure</a></li>
              <li className="text-gray-300">/</li>
              <li><a href="/#/infrastructure/data-centre-services" className="hover:text-[#0f62fe] transition-colors">Data Centre</a></li>
              <li className="text-gray-300">/</li>
              <li className="text-gray-900 font-medium" aria-current="page">Migration & Relocation</li>
            </ol>
          </nav>
        </div>
      </div>

      <StickyAnchorNav items={PAGE_SECTIONS.filter((s) => s.inNav)} defaultActive="overview" />

      <main id="main-content">
        {/* Hero */}
        <section id="overview" className="relative bg-[#0a1628] pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#0f62fe]/30 via-transparent to-transparent" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f62fe]/10 border border-[#0f62fe]/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f62fe]" />
                <span className="carbon-label-02 text-[#78a9ff] uppercase tracking-wider">Data Centre Infrastructure</span>
              </div>
              <h1 className="carbon-fluid-display-03 text-white mb-6">
                De-Risk Your Infrastructure Transition
              </h1>
              <p className="carbon-fluid-heading-04 text-[#78a9ff] mb-6">
                Risk-Managed Migration with Guaranteed Operational Continuity
              </p>
              <p className="carbon-body-02 text-white/80 max-w-3xl mb-10 leading-relaxed">
                We do not just move infrastructure. As operators who run 24/7 NOCs and manage critical systems for telcos, banks, and manufacturers, we ensure your business survives the transition and thrives afterward — with a clear path to ongoing managed services.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <a
                  href={`mailto:info@perception-it.com?subject=Migration%20Risk%20Assessment&body=${CONTACT_EMAIL_BODY}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#0f62fe] text-white carbon-heading-02 rounded-lg hover:bg-[#0353e9] hover:shadow-xl hover:-translate-y-0.5 transition-all"
                >
                  <Calendar className="w-5 h-5" />
                  Get a Migration Risk Assessment
                </a>
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 border border-white/20 text-white carbon-heading-02 rounded-lg hover:bg-white/20 transition-all"
                >
                  <Download className="w-5 h-5" />
                  Review Our Methodology
                </button>
                <a
                  href={`mailto:info@perception-it.com?subject=Speak%20to%20a%20Migration%20Architect&body=${CONTACT_EMAIL_BODY}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-[#0f62fe] carbon-heading-02 rounded-lg hover:bg-white/90 transition-all"
                >
                  <Users className="w-5 h-5" />
                  Speak to a Migration Architect
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Migrations Succeed */}
        <section id="problem" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12 md:mb-16">
              <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
                Migration Success Factors
              </span>
              <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
                What Separates a Successful Migration from a Costly One
              </h2>
              <p className="carbon-body-02 text-gray-600">
                The best migrations are measured by operational continuity, keeping your business running while your infrastructure moves. The difference is in how discovery, handover, and accountability are handled.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {WHY_MIGRATIONS_FAIL.map((item, idx) => (
                <div
                  key={item.title}
                  className="relative bg-[#f4f4f4] rounded-xl border border-gray-200 p-6 hover:border-[#0f62fe]/20 hover:shadow-lg transition-all duration-300"
                >
                  {idx < WHY_MIGRATIONS_FAIL.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-[#0f62fe]/20" />
                  )}
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0f62fe] text-white carbon-heading-02 mb-4">
                    {item.step}
                  </span>
                  <h3 className="carbon-heading-02 text-[#161616] mb-3">{item.title}</h3>
                  {item.bullets ? (
                    <>
                      <p className="carbon-body-02 text-gray-600 leading-relaxed mb-3">{item.desc}</p>
                      <ul className="space-y-2">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2 carbon-body-02 text-gray-600">
                            <span className="text-[#0f62fe] mt-1.5">•</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <p className="carbon-body-02 text-gray-600 leading-relaxed">{item.desc}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section id="models" className="py-16 md:py-24 bg-[#f4f4f4]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12 md:mb-16">
              <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
                Engagement Models
              </span>
              <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
                Three Ways to Work With Us
              </h2>
              <p className="carbon-body-02 text-gray-600">
                Choose the level of involvement that matches your risk profile, internal capability, and commercial strategy.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {ENGAGEMENT_MODELS.map((model) => (
                <div
                  key={model.title}
                  className={`relative rounded-xl border p-6 transition-all duration-300 flex flex-col ${
                    model.featured
                      ? 'bg-gradient-to-b from-white to-[#f8fbff] border-[#0f62fe]/20 border-t-4 border-t-[#0f62fe] shadow-lg hover:shadow-xl hover:-translate-y-1 ring-1 ring-[#0f62fe]/10'
                      : 'bg-white border-gray-200 hover:border-[#0f62fe]/20 hover:shadow-lg hover:-translate-y-0.5'
                  }`}
                >
                  {model.featured && (
                    <span className="absolute -top-3 left-6 inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f62fe] text-white text-[10px] font-semibold uppercase tracking-wider rounded-full shadow-sm">
                      <Star className="w-3 h-3" />
                      Recommended First Step
                    </span>
                  )}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      model.featured ? 'bg-[#0f62fe] text-white' : 'bg-[#0f62fe]/10 text-[#0f62fe]'
                    }`}
                  >
                    <model.icon className="w-6 h-6" />
                  </div>
                  <h3 className="carbon-heading-02 text-[#161616] mb-1">{model.title}</h3>
                  <p className="carbon-label-01 text-[#0f62fe] uppercase tracking-wider mb-3">{model.subtitle}</p>
                  <p className="carbon-body-02 text-gray-600 mb-6 leading-relaxed">{model.desc}</p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {model.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 carbon-body-02 text-gray-700">
                        <div className="w-5 h-5 rounded-full bg-[#0f62fe]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#0f62fe]" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`mailto:info@perception-it.com?subject=${encodeURIComponent(model.cta)}%20-%20Migration&body=${CONTACT_EMAIL_BODY}`}
                    className={`inline-flex items-center gap-2 px-5 py-3 carbon-heading-02 rounded-lg transition-all ${
                      model.featured
                        ? 'bg-[#0f62fe] text-white hover:bg-[#0353e9] shadow-md hover:shadow-lg'
                        : 'bg-[#0f62fe] text-white hover:bg-[#0353e9]'
                    }`}
                  >
                    {model.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries + Operational Credentials */}
        <section id="industries" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
                  Industry Experience
                </span>
                <h2 className="carbon-fluid-heading-05 text-[#161616] mb-6">
                  Migrations Where Downtime Is Not an Option
                </h2>
                <div className="space-y-6">
                  {INDUSTRY_EXPERIENCE.map((industry) => (
                    <div key={industry.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#0f62fe]/10 flex items-center justify-center flex-shrink-0">
                        <industry.icon className="w-6 h-6 text-[#0f62fe]" />
                      </div>
                      <div>
                        <h3 className="carbon-heading-02 text-[#161616] mb-1">{industry.title}</h3>
                        <p className="carbon-body-02 text-gray-600 leading-relaxed">{industry.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#f4f4f4] rounded-xl border border-gray-200 p-6 sm:p-8">
                <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
                  Operational Credibility
                </span>
                <h3 className="carbon-fluid-heading-05 text-[#161616] mb-6">
                  We Are Operators, Not Just Consultants
                </h3>
                <div className="space-y-6">
                  {OPERATIONAL_CREDENTIALS.map((cred) => (
                    <div key={cred.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#0f62fe]/10 flex items-center justify-center flex-shrink-0">
                        <cred.icon className="w-5 h-5 text-[#0f62fe]" />
                      </div>
                      <div>
                        <h4 className="carbon-heading-02 text-[#161616] mb-1">{cred.title}</h4>
                        <p className="carbon-body-02 text-gray-600 leading-relaxed">{cred.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hardware Bundle */}
        <section id="hardware" className="py-16 md:py-24 bg-[#0a1628]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <span className="inline-block carbon-label-02 text-[#78a9ff] uppercase tracking-wider mb-3">
                  Hardware + Migration Bundle
                </span>
                <h2 className="carbon-fluid-heading-05 text-white mb-4">
                  Refresh & Relocate Packages
                </h2>
                <p className="carbon-body-02 text-white/80 mb-8 leading-relaxed">
                  Leverage our Huawei Enterprise Certified Partner status to combine new hardware procurement, migration execution, and multi-year managed support under a single vendor relationship. Right-sized infrastructure for your new facility — not old problems moved to a new location.
                </p>
                <ul className="space-y-4 mb-8">
                  {HARDWARE_BUNDLE_FEATURES.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 carbon-body-02 text-white/90">
                      <div className="w-6 h-6 rounded-full bg-[#0f62fe] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:info@perception-it.com?subject=Refresh%20and%20Relocate%20Package%20Enquiry&body=${CONTACT_EMAIL_BODY}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f62fe] text-white carbon-heading-02 rounded-lg hover:bg-[#0353e9] transition-all"
                >
                  Discuss Refresh & Relocate
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
                <h3 className="carbon-heading-02 text-white mb-4">Why bundle hardware with migration?</h3>
                <div className="space-y-4 carbon-body-02 text-white/80 leading-relaxed">
                  <p>Procurement, migration, and support are typically handled by separate vendors — creating gaps in accountability and procurement complexity.</p>
                  <p>Our bundle removes that friction. One contract, one migration plan, one support team. And because we operate the infrastructure post-go-live, we specify hardware that is supportable, efficient, and aligned with your runtime requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Projects */}
        <section id="projects" className="py-16 md:py-24 bg-[#f4f4f4]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-10">
              <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
                Recent Projects
              </span>
              <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
                Representative Migration Outcomes
              </h2>
              <p className="carbon-body-02 text-gray-600">
                Project details are available under NDA. These examples reflect the scale and risk profile we routinely manage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {RECENT_PROJECTS.map((project) => (
                <div
                  key={project.title}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:border-[#0f62fe]/20 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="carbon-heading-02 text-[#161616] mb-3">{project.title}</h3>
                  <p className="carbon-body-02 text-gray-600 leading-relaxed">{project.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <ResultsSection />

        {/* CTA */}
        <section id="cta" className="py-16 md:py-24 bg-[#0f62fe]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h2 className="carbon-fluid-heading-05 text-white mb-4">
                  Start Your Migration Journey
                </h2>
                <p className="carbon-body-02 text-white/80 mb-8">
                  Book a migration risk assessment, review our methodology, or speak directly to a migration architect.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                  <a
                    href={`mailto:info@perception-it.com?subject=Migration%20Risk%20Assessment&body=${CONTACT_EMAIL_BODY}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-[#0f62fe] carbon-heading-02 rounded-lg hover:bg-white/90 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5 transition-all"
                  >
                    <Calendar className="w-5 h-5" />
                    Get Assessment
                  </a>
                  <a
                    href={`mailto:info@perception-it.com?subject=Speak%20to%20a%20Migration%20Architect&body=${CONTACT_EMAIL_BODY}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 border border-white/20 text-white carbon-heading-02 rounded-lg hover:bg-white/20 transition-all"
                  >
                    <Users className="w-5 h-5" />
                    Speak to an Architect
                  </a>
                  <a
                    href="tel:+447456457005"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 border border-white/20 text-white carbon-heading-02 rounded-lg hover:bg-white/20 transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    Call Our Team
                  </a>
                </div>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8">
                <h3 className="carbon-heading-02 text-white mb-4 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Every Migration Includes
                </h3>
                <ul className="space-y-3 carbon-body-02 text-white/90">
                  {[
                    'Dedicated migration programme manager',
                    'UK-based senior consultant oversight',
                    '24/7 NOC monitoring during execution',
                    'Comprehensive documentation and runbooks',
                    'Post-migration hyper-care support',
                    'Lessons learned review and optimisation recommendations',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 left-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-[#0f62fe] text-white shadow-lg transition-all duration-300 hover:bg-[#0353e9] ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <Footer />
    </div>
  );
}
