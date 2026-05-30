import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: 'How do you verify the savings numbers?',
    a: 'Industry benchmarks from Uptime Institute, ASHRAE, and IDC inform our modelling. We cross-reference manufacturer efficiency curves, regional utility tariffs, and third-party commissioning standards. Projected savings are validated through site assessment and baseline measurement.',
  },
  {
    q: 'What is the typical payback period?',
    a: 'Most clients see full ROI within 18–24 months for comprehensive optimisation engagements. Simple cooling retrofits can pay back in 12–18 months. The calculators above use conservative estimates.',
  },
  {
    q: 'Can you work with our existing infrastructure?',
    a: 'Yes. Our assessment includes retrofit recommendations designed to maximise reuse of existing equipment. We only recommend replacement when the efficiency gain justifies the capital outlay.',
  },
  {
    q: 'Do you guarantee the savings?',
    a: 'We provide engineering baselines and projected savings ranges based on site assessment. Contractual performance guarantees, remedies, and credit calculations are defined exclusively in signed Service Level Agreements.',
  },
  {
    q: 'Which calculator should I use?',
    a: '<ul class="space-y-2"><li><strong>PUE Energy:</strong> Estimate annual savings from improving power usage effectiveness and reducing energy waste.</li><li><strong>Downtime:</strong> Quantify risk exposure, cost per outage, and annual financial impact of unplanned interruptions.</li><li><strong>CapEx Deferral:</strong> Compare optimisation spend against premature replacement costs and equipment lifecycle extension.</li></ul><p class="mt-3">Each calculator uses industry-standard formulas. Actual savings require site assessment.</p>',
  },
  {
    q: 'Are the calculators accurate?',
    a: 'All three calculators are estimators using industry-standard formulas. PUE-based energy modelling, downtime cost averages for Pakistan, and equipment lifecycle curves inform the outputs. Actual savings depend on facility condition, infrastructure age, utility rates, and scope of work. A formal proposal requires site assessment.',
  },
  {
    q: 'What services can be bundled for better pricing?',
    a: 'Cooling + Power + Monitoring under a single SLA averages 30% lower total cost than individual contracts. We also offer Infrastructure-as-a-Service models that convert CapEx to predictable monthly OpEx.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-[#FAFAFA]">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-10 text-center">
          <p className="carbon-label-01 text-[#0f62fe] uppercase mb-3">FAQ</p>
          <h2 className="carbon-fluid-heading-05 text-[#0F172A] mb-4">
            Questions About Cost & ROI
          </h2>
          <p className="carbon-body-02 text-gray-500">
            Straight answers for budget holders and technical buyers building a business case.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-xl border transition-colors duration-300 ${
                  isOpen ? 'border-[#0f62fe]/30 bg-[#0f62fe]/[0.02]' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex items-center justify-between w-full p-5 text-left"
                >
                  <span className={`carbon-heading-02 pr-4 ${isOpen ? 'text-[#0f62fe]' : 'text-gray-900'}`}>
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#0f62fe] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5">
                    {faq.a.startsWith('<') ? (
                      <div className="carbon-body-02 text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }} />
                    ) : (
                      <p className="carbon-body-02 text-gray-600 leading-relaxed">{faq.a}</p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
