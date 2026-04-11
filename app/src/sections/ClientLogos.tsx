import { useEffect, useRef, useState } from 'react';

interface Client {
  name: string;
  logo: string;
  width?: number;
}

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

  const clients: Client[] = [
    { name: 'Jazz', logo: '/logos/clients/jazz-logo.png', width: 70 },
    { name: 'Client 1', logo: '/logos/clients/image.png', width: 100 },
    { name: 'Client 2', logo: '/logos/clients/image (1).png', width: 100 },
    { name: 'Client 3', logo: '/logos/clients/image (2).png', width: 100 },
  ];

  // Duplicate for seamless loop
  const allClients = [...clients, ...clients];

  return (
    <section ref={sectionRef} className="py-12 bg-[#FAFAFA] border-y border-gray-100 overflow-hidden">
      <div className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-8 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-center text-xs uppercase tracking-[0.2em] text-gray-400">
          Trusted By
        </p>
      </div>
      
      {/* Scrolling Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling container */}
        <div className={`flex animate-marquee transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {allClients.map((client, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center mx-10 flex-shrink-0 h-12"
              style={{ width: client.width || 100 }}
            >
              <img 
                src={client.logo} 
                alt={client.name}
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
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;
