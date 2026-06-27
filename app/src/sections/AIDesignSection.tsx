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
  media?: {
    type: 'video' | 'image';
    src: string;
    alt?: string;
  };
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
  media,
}: AIDesignSectionProps) => {
  return (
    <section id={id} className={`relative py-16 md:py-24 ${media ? 'bg-black overflow-hidden' : 'bg-[#0a1628]'}`}>
      {media && (
        <>
          {/* Background media — positioned on the right, blending with section background */}
          <div className="relative md:absolute -top-12 md:-top-24 right-0 w-full md:w-[800px] h-auto md:h-[600px] md:max-w-full md:max-h-full max-h-[260px] md:max-h-none">
            {media.type === 'video' ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-contain"
                aria-label={media.alt || 'AI design visualisation'}
              >
                <source src={media.src} type="video/mp4" />
              </video>
            ) : (
              <img
                src={media.src}
                alt={media.alt || ''}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            )}
            {/* Bottom-edge fade */}
            <div className="absolute inset-x-0 bottom-0 h-20 md:h-32 bg-gradient-to-t from-black via-black/80 via-[20%] to-transparent to-[45%] pointer-events-none" />
          </div>
          {/* Gradient overlay keeps text readable while letting the media show on the right */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,0,0,0.25)_0%,_rgba(0,0,0,0.85)_60%,_rgba(0,0,0,0.95)_100%)]" />
        </>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header: text on the left, media visible on the right */}
        <div className={`grid grid-cols-1 ${media ? 'md:grid-cols-2' : ''} gap-8 items-start mb-12 md:mb-16`}>
          <div className={media ? '' : 'max-w-3xl'}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0f62fe]/10 border border-[#0f62fe]/20 rounded-full mb-4">
              <Cpu className="w-4 h-4 text-[#78a9ff]" />
              <span className="carbon-label-02 text-[#78a9ff] uppercase tracking-wider">{eyebrow}</span>
            </span>
            <h2 className="carbon-fluid-heading-05 text-white mb-4">{headline}</h2>
            <p className="carbon-body-02 text-white/90">{description}</p>
          </div>
          {media && <div className="hidden md:block" aria-hidden="true" />}
        </div>

        {/* AI Advantage */}
        <div className="mb-12 md:mb-16">
          <div className="mb-6">
            <div className="w-12 h-0.5 bg-[#0f62fe] mb-4" />
            <span className="carbon-label-02 text-[#78a9ff] uppercase tracking-wider block mb-1">The AI Advantage</span>
            <h3 className="carbon-fluid-heading-04 text-white">Exhaustive Technical Validation</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiAdvantages.map((item) => (
              <div key={item.title} className="p-5 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#0f62fe]/20 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-[#78a9ff]" />
                </div>
                <h4 className="carbon-heading-02 text-white/85 mb-2">{item.title}</h4>
                <p className="carbon-body-02 text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Human Mandate */}
        <div className="mb-12 md:mb-16">
          <div className="mb-6">
            <div className="w-12 h-0.5 bg-[#0f62fe] mb-4" />
            <span className="carbon-label-02 text-[#78a9ff] uppercase tracking-wider block mb-1">The Human Mandate</span>
            <h3 className="carbon-fluid-heading-04 text-white">Physical Context & Accountability</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {humanMandates.map((item) => (
              <div key={item.title} className="p-5 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#0f62fe]/20 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-[#78a9ff]" />
                </div>
                <h4 className="carbon-heading-02 text-white/85 mb-2">{item.title}</h4>
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
