import { PARTNER_CARDS } from '../data';

export default function PartnerSection() {
  return (
    <section id="partner" className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="carbon-label-02 text-[#0f62fe] uppercase tracking-wider block mb-3">
            Perception IT as Your Partner
          </span>
          <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
            Running a Service Yourself Is Expensive
          </h2>
          <p className="carbon-body-02 text-[#525252] text-lg">
            We can help you utilise cloud services to get better value and performance than running
            them in-house. With a cloud-first or hybrid approach you can have the power of a company
            like Amazon or Google to run your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PARTNER_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group relative bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="h-1.5 w-full bg-gradient-to-r from-gray-200 to-gray-100" />
                <div className="p-6 sm:p-8">
                  <div className="w-12 h-12 rounded-lg bg-[#0f62fe]/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#0f62fe]" />
                  </div>
                  <h3 className="carbon-heading-02 text-[#161616] mb-3">{card.title}</h3>
                  <p className="carbon-body-02 text-[#525252]">{card.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
