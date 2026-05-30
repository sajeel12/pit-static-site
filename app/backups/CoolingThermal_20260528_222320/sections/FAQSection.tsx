import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_ITEMS } from '../data';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12 text-center">
          <p className="carbon-label-01 text-[#0f62fe] uppercase mb-3">FAQ</p>
          <h2 className="carbon-fluid-heading-05 text-[#0F172A] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="carbon-body-02 text-gray-500">
            Common questions about cooling assessments, procurement, deployment timelines, and managed service terms.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((faq, i) => {
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
                    <p className="carbon-body-02 text-gray-600 leading-relaxed">{faq.a}</p>
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
