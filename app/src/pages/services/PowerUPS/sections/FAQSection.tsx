import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data';

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
            FAQ
          </span>
          <h2 className="carbon-fluid-display-02 text-[#161616] mb-4">
            Power & UPS Questions
          </h2>
          <p className="carbon-body-02 text-gray-600">
            Answers to the most common questions about UPS selection, battery life, 
            migration, and SLA coverage in Pakistan.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openItem === idx;
            return (
              <div
                key={idx}
                className={`rounded-lg border transition-all duration-200 ${
                  isOpen ? 'border-[#0f62fe]/20 bg-[#f4f4f4]' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => setOpenItem(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className={`carbon-heading-02 pr-4 ${isOpen ? 'text-[#0f62fe]' : 'text-[#161616]'}`}>
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#0f62fe]' : 'text-gray-400'
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 animate-fade-in">
                    <p className="carbon-body-02 text-gray-600 leading-relaxed">{item.a}</p>
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
