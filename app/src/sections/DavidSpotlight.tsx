import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const DavidSpotlight = () => {
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
      id="david-pridmore"
      ref={sectionRef}
      className="py-24 bg-pi-gray"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div
            className={`lg:col-span-2 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative max-w-[360px] mx-auto lg:mx-0">
              <img
                src="/team/david_pridmore.jpg"
                alt="David Pridmore"
                className="w-full aspect-square object-cover rounded-xl shadow-card"
              />
            </div>
          </div>

          {/* Content */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Label */}
            <span className="inline-block text-xs font-medium uppercase tracking-[0.1em] text-pi-gray-text mb-4">
              Leadership
            </span>

            {/* Name */}
            <h2 className="text-3xl sm:text-[32px] font-bold text-pi-black mb-1">
              David Pridmore
            </h2>

            {/* Title */}
            <p className="text-lg text-pi-gray-text mb-6">
              Chief Technology Officer
            </p>

            {/* Headline */}
            <h3 className="text-xl sm:text-2xl font-semibold text-pi-black mb-6">
              British Standards, Pakistani Delivery
            </h3>

            {/* Paragraphs */}
            <div className="space-y-4 mb-6">
              <p className="text-base text-pi-gray-text leading-relaxed">
                14 years architecting enterprise solutions for UK organizations. 
                Now bringing that expertise to Pakistan's growing market.
              </p>
              <p className="text-base text-pi-gray-text leading-relaxed">
                For international clients: A British senior technologist who understands 
                your requirements, manages Pakistani teams, and eliminates offshore risk.
              </p>
            </div>

            {/* Credentials */}
            <p className="text-sm text-pi-gray-text mb-8">
              Former Barclays UK • AWS Certified • ITIL Expert
            </p>

            {/* CTA */}
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-pi-blue text-white font-medium rounded-lg hover:bg-pi-blue-dark transition-colors"
            >
              Schedule a Consultation with David
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DavidSpotlight;
