import { useEffect, useRef, useState } from 'react';

const ClientLogos = () => {
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

  const partners = [
    { name: 'Huawei', initials: 'HW' },
    { name: 'ServiceNow', initials: 'SN' },
    { name: 'EZY', initials: 'EZ' },
    { name: 'IBM', initials: 'IBM' },
    { name: 'AWS', initials: 'AWS' },
    { name: 'Microsoft', initials: 'MS' },
  ];

  // Duplicate for seamless loop
  const allPartners = [...partners, ...partners];

  return (
    <section ref={sectionRef} className="py-12 bg-white border-b border-gray-100 overflow-hidden">
      <div className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-8 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-center text-xs uppercase tracking-[0.2em] text-gray-400">
          Trusted by industry leaders
        </p>
      </div>
      
      {/* Scrolling Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling container */}
        <div className={`flex animate-marquee transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {allPartners.map((partner, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 mx-8 text-gray-300 hover:text-gray-600 transition-colors cursor-default flex-shrink-0"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-sm font-semibold">{partner.initials}</span>
              </div>
              <span className="text-sm font-medium hidden sm:block">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;
