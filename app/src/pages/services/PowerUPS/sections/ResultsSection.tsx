import { TESTIMONIALS } from '../data';

export default function ResultsSection() {
  return (
    <section id="results" className="py-16 md:py-24 bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
            Results
          </span>
          <h2 className="carbon-fluid-display-02 text-[#161616] mb-4">
            Client Outcomes
          </h2>
          <p className="carbon-body-02 text-gray-600">
            Real results from Pakistani data centres, industrial facilities, and edge deployments.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${t.bg} p-8 text-white`}
            >
              <div className="relative">
                <p className="carbon-body-02 text-white/90 mb-6 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="carbon-heading-02 text-white">{t.author}</p>
                  <p className="carbon-body-02 text-white/70">{t.org}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
