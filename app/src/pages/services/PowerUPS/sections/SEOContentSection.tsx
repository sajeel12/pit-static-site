import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ARTICLES = [
  {
    title: 'Why Pakistani Grids Need Specialized UPS',
    keyword: 'UPS for Pakistan voltage fluctuation',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
  },
  {
    title: 'Li-ion vs. VRLA in High-Temp Environments',
    keyword: 'lithium battery UPS Pakistan',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
  },
];

export default function SEOContentSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-[#f4f4f4]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-10">
          <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
            Technical Resources
          </span>
          <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
            Power Protection in Pakistan
          </h2>
          <p className="carbon-body-02 text-gray-600">
            Deep-dive explainers on grid-specific challenges, battery chemistry, and compliance.
          </p>
        </div>

        <div className="space-y-4">
          {ARTICLES.map((article, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={article.title}
                className={`rounded-xl border transition-all duration-200 ${
                  isOpen ? 'border-[#0f62fe]/20 bg-white' : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div>
                    <h3 className={`carbon-heading-02 ${isOpen ? 'text-[#0f62fe]' : 'text-[#161616]'}`}>
                      {article.title}
                    </h3>
                    <p className="carbon-label-01 text-gray-400 mt-1">Target: {article.keyword}</p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#0f62fe]' : 'text-gray-400'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <div className="pt-4 border-t border-gray-100">
                      <p className="carbon-body-02 text-gray-600 leading-relaxed whitespace-pre-line">
                        {article.content}
                      </p>
                    </div>
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
