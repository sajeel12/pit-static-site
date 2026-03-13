import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0F172A] overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500 rounded-full blur-[100px]" />
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32">
        <div className="max-w-3xl">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.25em] text-blue-400 mb-6">
            Enterprise IT Solutions
          </span>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white mb-6 leading-[1.05] tracking-tight">
            Hardware to Cloud.<br />
            One Partner.<br />
            <span className="text-blue-400">Zero Compromise</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl font-light">
            Systems integration that actually owns the outcome: global hardware supply, 
            local integration expertise, end-to-end lifecycle management.
          </p>
          
          {/* Process Steps */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-10">
            <span>Design</span>
            <span className="text-gray-600">→</span>
            <span>Procure</span>
            <span className="text-gray-600">→</span>
            <span>Deploy</span>
            <span className="text-gray-600">→</span>
            <span>Integrate</span>
            <span className="text-gray-600">→</span>
            <span>Manage</span>
            <span className="text-gray-600">→</span>
            <span className="text-blue-400">Optimise</span>
          </div>
          
          {/* Trust Bar */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-12">
            <span>British-certified technologists</span>
            <span className="text-gray-700">|</span>
            <span>Huawei Enterprise Partner</span>
            <span className="text-gray-700">|</span>
            <span>EZY Distribution Alliance</span>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-400 transition-all duration-300"
            >
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="group inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300"
            >
              <img 
                src="/david_headshot.jpg" 
                alt="David Pridmore" 
                className="w-8 h-8 rounded-full object-cover border-2 border-blue-500"
              />
              Meet David Pridmore, CTO
            </a>
          </div>
        </div>
        
        {/* Stats */}
        <div className="absolute bottom-32 right-8 lg:right-12 hidden lg:flex gap-12">
          <div className="text-center">
            <div className="text-4xl font-light text-white">14+</div>
            <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-white">50+</div>
            <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">Platforms Deployed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-white">24/7</div>
            <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">Support Coverage</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
