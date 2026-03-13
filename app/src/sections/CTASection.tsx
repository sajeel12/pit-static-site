import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-white"
    >
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl font-semibold text-pi-black mb-4">
            Ready to upgrade your infrastructure?
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-pi-gray-text mb-10 leading-relaxed">
            Schedule a consultation with David Pridmore and discover how British 
            standards can transform your IT operations.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-pi-blue text-white font-medium rounded-lg hover:bg-pi-blue-dark transition-colors"
            >
              Schedule a Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-pi-blue text-pi-blue font-medium rounded-lg hover:bg-pi-blue hover:text-white transition-colors"
            >
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
