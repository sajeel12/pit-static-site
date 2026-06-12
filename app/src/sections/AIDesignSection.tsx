import { Cpu, type LucideIcon } from 'lucide-react';

interface AIDesignSectionProps {
  id?: string;
  eyebrow?: string;
  headline: string;
  description: string;
  aiAdvantages: { icon: LucideIcon; title: string; desc: string }[];
  humanMandates: { icon: LucideIcon; title: string; desc: string }[];
  resultTitle?: string;
  resultText: string;
}

const AIDesignSection = ({
  id = 'ai-design',
  eyebrow = 'AI-Accelerated Design',
  headline,
  description,
  aiAdvantages,
  humanMandates,
  resultTitle = 'The Result',
  resultText,
}: AIDesignSectionProps) => {
  return (
    <section id={id} className="py-16 md:py-24 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0f62fe]/10 border border-[#0f62fe]/20 rounded-full mb-4">
            <Cpu className="w-4 h-4 text-[#78a9ff]" />
            <span className="carbon-label-02 text-[#78a9ff] uppercase tracking-wider">{eyebrow}</span>
          </span>
          <h2 className="carbon-fluid-heading-05 text-white mb-4">{headline}</h2>
          <p className="carbon-body-02 text-white/80">{description}</p>
        </div>

        {/* AI Advantage */}
        <div className="mb-12 md:mb-16">
          <h3 className="carbon-heading-02 text-white mb-6">The AI Advantage: Exhaustive Technical Validation</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiAdvantages.map((item) => (
              <div key={item.title} className="p-5 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#0f62fe]/20 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-[#78a9ff]" />
                </div>
                <h4 className="carbon-heading-02 text-white mb-2">{item.title}</h4>
                <p className="carbon-body-02 text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Human Mandate */}
        <div className="mb-12 md:mb-16">
          <h3 className="carbon-heading-02 text-white mb-6">The Human Mandate: Physical Context & Accountability</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {humanMandates.map((item) => (
              <div key={item.title} className="p-5 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#0f62fe]/20 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-[#78a9ff]" />
                </div>
                <h4 className="carbon-heading-02 text-white mb-2">{item.title}</h4>
                <p className="carbon-body-02 text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Result */}
        <div className="bg-[#0f62fe]/10 border border-[#0f62fe]/20 rounded-2xl p-8 sm:p-10">
          <div className="max-w-3xl">
            <h3 className="carbon-fluid-heading-04 text-white mb-3">{resultTitle}</h3>
            <p className="carbon-body-02 text-white/80">{resultText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDesignSection;
