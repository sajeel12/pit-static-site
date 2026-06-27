import { Cloud, ArrowRight } from 'lucide-react';
import HeroGridLines from '@/components/HeroGridLines';
import { HERO_BADGES } from '../data';

export default function HeroSection() {
  return (
    <section
      id="overview"
      className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center bg-black overflow-hidden pt-20 carbon-font text-white"
    >
      {/* Subtle grid lines — left half only, faded at the edges */}
      <div
        className="hidden md:block absolute inset-y-0 left-0 w-[55%] overflow-hidden pointer-events-none z-[15]"
        style={{
          maskImage: 'linear-gradient(to right, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, black 60%, transparent 100%)',
        }}
      >
        <HeroGridLines variant="dark" className="absolute inset-0 w-full h-full" />
      </div>

      {/* Background infinity image — right half, desktop only */}
      <div className="hidden md:flex absolute inset-y-0 right-0 w-full lg:w-[55%] items-center justify-end z-0 pointer-events-none bg-black">
        <img
          src="/Sections/Devops and Cloud/infinity image for hero.png"
          alt=""
          className="max-h-full max-w-full object-contain object-right mix-blend-screen"
          loading="eager"
          style={{
            maskImage: 'radial-gradient(ellipse at center, black 70%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 70%, transparent 100%)',
          }}
        />
      </div>

      {/* Left-to-right scrim so text can overlap the image safely */}
      <div
        className="hidden md:block absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, #000000 0%, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0.5) 60%, transparent 100%)',
        }}
      />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-6 pb-12 lg:pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/15 rounded-full mb-6">
            <Cloud className="w-4 h-4 text-[#78a9ff]" />
            <span className="carbon-label-02 text-slate-100">DevOps & Cloud</span>
          </div>

          <div className="relative mb-6">
            <h1 className="relative carbon-fluid-display-03 text-white">
              <span className="block bg-gradient-to-r from-[#78a9ff] to-[#0f62fe] bg-clip-text text-transparent">
                Pioneering DevOps, Cloud,
              </span>
              <span className="block text-slate-200">and AI-Driven Automation</span>
            </h1>
          </div>

          <p className="carbon-fluid-heading-03 font-medium text-slate-100 mb-5">
            From Systems Automation to Intelligent DevOps & Cloud.
          </p>

          <p className="carbon-body-02 text-slate-400 mb-8">
            Our journey in systems automation, spanning over two decades, has naturally evolved
            into profound expertise in DevOps, Cloud Architecture, and AI-driven operations. By
            integrating our foundational automation skills with next-generation methodologies
            like AIOps, Platform Engineering, and GitOps, we deliver robust, scalable, and
            intelligent solutions that future-proof your business.
          </p>

          {/* Service categories */}
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {HERO_BADGES.map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 px-3 py-1 bg-white/8 border border-white/10 rounded-full carbon-label-02 text-slate-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#78a9ff]" />
                {label}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10">
            <a
              href="mailto:info@perception-it.com?subject=Consultation%20Request%20for%20DevOps%20and%20Cloud"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 h-12 sm:h-14 bg-gradient-to-r from-[#0f62fe] to-[#4589ff] text-white carbon-body-02 hover:from-[#0353e9] hover:to-[#0f62fe] shadow-lg shadow-blue-500/25 hover:shadow-[0_0_30px_rgba(15,98,254,0.5)] rounded-lg"
            >
              Request Technical Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => {
                const el = document.getElementById('capabilities');
                if (el) {
                  const headerOffset = 80;
                  const pos = el.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({ top: pos - headerOffset, behavior: 'smooth' });
                }
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 h-12 sm:h-14 text-slate-300 carbon-body-02 hover:text-white transition-colors cursor-pointer"
            >
              Explore Capabilities
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile: show image below text */}
        <div className="md:hidden mt-8 flex justify-center">
          <img
            src="/Sections/Devops and Cloud/infinity image for hero.png"
            alt="DevOps infinity loop"
            className="w-full max-w-sm object-contain"
            loading="eager"
          />
        </div>
      </div>

      {/* Stack Layer Bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5"
        style={{ background: 'linear-gradient(90deg, #94a3b8 0%, #475569 100%)' }}
      />
    </section>
  );
}
