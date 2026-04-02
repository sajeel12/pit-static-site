import { useState } from 'react';

interface Partner {
  name: string;
  displayName: string;
}

const partners: Partner[] = [
  { name: 'Huawei', displayName: 'Huawei' },
  { name: 'EZY', displayName: 'EZY Distributors' },
  { name: 'Lenovo', displayName: 'Lenovo' },
  { name: 'IBM', displayName: 'IBM' },
  { name: 'ServiceNow', displayName: 'ServiceNow' },
  { name: 'Databricks', displayName: 'Databricks' },
  { name: 'Azure', displayName: 'Microsoft Azure' },
  { name: 'AWS', displayName: 'Amazon AWS' },
];

const LogoTicker = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="w-full bg-gray-50 border-y border-gray-200 py-8">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center gap-8">
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap">
            Trusted by
          </span>
          
          <div 
            className="flex-1 overflow-hidden relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Gradient fade on left */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
            
            {/* Gradient fade on right */}
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
            
            {/* Scrolling container */}
            <div 
              className="flex items-center gap-10"
              style={{
                animation: `scroll 30s linear infinite`,
                animationPlayState: isPaused ? 'paused' : 'running',
                width: 'fit-content',
              }}
            >
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex items-center justify-center px-5 py-2.5 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 cursor-pointer group"
                >
                  <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900 transition-colors whitespace-nowrap">
                    {partner.displayName}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default LogoTicker;
