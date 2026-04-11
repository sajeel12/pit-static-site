import { useEffect, useRef, useState } from 'react';

interface Partner {
  name: string;
  logo: string;
}

const PartnerLogos = () => {
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

  const partners: Partner[] = [
    { name: 'Huawei', logo: '/logos/partners/huawei_logo.png' },
    { name: 'Dell', logo: '/logos/partners/Dell_Logo.svg.png' },
    { name: 'HP', logo: '/logos/partners/HP_logo_2025.svg.png' },
    { name: 'Broadcom', logo: '/logos/partners/broadcom-logo.png' },
    { name: 'Lenovo', logo: '/logos/partners/lenovo-logo.webp' },
    { name: 'EZY', logo: '/logos/partners/ezy.png' },
    { name: 'Fortinet', logo: '/logos/partners/fortinet-logo.svg' },
    { name: 'Sophos', logo: '/logos/partners/partner-sophos-logo.svg' },
    { name: 'ManageEngine', logo: '/logos/partners/manageengine-logo.svg' },
    { name: 'Veeam', logo: '/logos/partners/partner-veem-logo.svg' },
  ];

  // Duplicate for seamless loop
  const allPartners = [...partners, ...partners];

  return (
    <section ref={sectionRef} className="py-12 bg-white border-b border-gray-100 overflow-hidden">
      <div className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-8 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-center text-xs uppercase tracking-[0.2em] text-gray-400">
          Technology Partners
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
              className="flex items-center justify-center mx-8 flex-shrink-0 w-24 h-12"
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
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
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PartnerLogos;
