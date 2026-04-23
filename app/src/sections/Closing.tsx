import { ArrowRight, Mail } from 'lucide-react';

const Closing = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#0F172A] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400 mb-6 block">
          Get Started
        </span>
        
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight tracking-tight">
          Ready when you are.
        </h2>
        
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Book a consultation. We'll assess your needs and recommend the right approach-no obligation.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:hello@perception-it.com"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-400 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            Book a consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="tel:+923018436565"
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300"
          >
            +92 301 8436565
          </a>
        </div>
      </div>
    </section>
  );
};

export default Closing;
