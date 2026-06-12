import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { FAQ_ITEMS } from '../data';

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<number>(0);

  const activeItem = FAQ_ITEMS[openItem];

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header — No label, heading stands alone */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
            Power & UPS Questions
          </h2>
          <p className="carbon-body-02 text-gray-600">
            Answers to the most common questions about UPS selection, battery life,
            migration, and SLA coverage in Pakistan.
          </p>
        </div>

        {/* Desktop: 2-column settings panel */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8">
          {/* Left: Question list */}
          <div className="lg:col-span-5">
            <div className="space-y-1">
              {FAQ_ITEMS.map((item, idx) => {
                const isActive = openItem === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setOpenItem(idx)}
                    className={`w-full text-left px-4 py-3.5 rounded-lg text-sm transition-all duration-200 flex items-start gap-3 ${
                      isActive
                        ? 'bg-[#f4f4f4] text-[#161616] font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <ChevronRight
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 transition-transform duration-200 ${
                        isActive ? 'rotate-90 text-[#0f62fe]' : 'text-gray-400'
                      }`}
                    />
                    <span className="leading-snug">{item.q}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Answer panel */}
          <div className="lg:col-span-7">
            <div className="bg-[#f4f4f4] rounded-xl p-6 sm:p-8 min-h-[240px]">
              <p className="carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-4">
                Answer
              </p>
              {Array.isArray(activeItem.a) ? (
                <ul className="space-y-3">
                  {activeItem.a.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 carbon-body-02 text-gray-700 leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0f62fe] mt-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="carbon-body-02 text-gray-700 leading-relaxed">
                  {activeItem.a}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Mobile: Standard accordion */}
        <div className="lg:hidden space-y-3">
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
                  onClick={() => setOpenItem(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span
                    className={`carbon-heading-02 pr-4 ${
                      isOpen ? 'text-[#0f62fe]' : 'text-[#161616]'
                    }`}
                  >
                    {item.q}
                  </span>
                  <ChevronRight
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-90 text-[#0f62fe]' : 'text-gray-400'
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 animate-fade-in">
                    {Array.isArray(item.a) ? (
                      <ul className="space-y-2">
                        {item.a.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2 carbon-body-02 text-gray-600 leading-relaxed"
                          >
                            <span className="w-1 h-1 rounded-full bg-[#0f62fe] mt-2 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="carbon-body-02 text-gray-600 leading-relaxed">
                        {item.a}
                      </p>
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
