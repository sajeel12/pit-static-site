import { useEffect, useState } from 'react';
import { 
  Servers,
  Enterprise,
  Cloud,
  AcceleratedComputing
} from '@carbon/pictograms-react';

/**
 * Infrastructure Hero Graphics using Carbon Pictograms
 * Following IBM Carbon Design System guidelines
 * Animated floating pictograms with blue/purple theme
 */
const InfrastructurePictogramGraphics = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const animationClass = prefersReducedMotion ? '' : 'animate';

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-2deg); }
        }
        
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes drift {
          0% { transform: translateX(0); }
          50% { transform: translateX(30px); }
          100% { transform: translateX(0); }
        }
        
        @keyframes scale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .infra-picto .float-1 {
          animation: float 8s ease-in-out infinite;
        }
        
        .infra-picto .float-2 {
          animation: floatReverse 10s ease-in-out infinite;
        }
        
        .infra-picto .float-3 {
          animation: floatSlow 12s ease-in-out infinite;
        }
        
        .infra-picto .pulse {
          animation: pulse 6s ease-in-out infinite;
        }
        
        .infra-picto .rotate-slow {
          animation: rotate 60s linear infinite;
        }
        
        .infra-picto .drift {
          animation: drift 15s ease-in-out infinite;
        }
        
        .infra-picto .scale {
          animation: scale 8s ease-in-out infinite;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .infra-picto * {
            animation: none !important;
          }
        }
        
        /* Carbon Pictogram styling */
        .pictogram-container svg {
          width: 100%;
          height: 100%;
        }
      `}</style>

      <div className={`infra-picto w-full h-full ${animationClass} relative`}>
        {/* Background grid pattern - subtle */}
        <svg 
          className="absolute inset-0 w-full h-full pulse"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          opacity="0.15"
        >
          <defs>
            <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f62fe" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8a3ffc" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {[...Array(8)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={100 + i * 80}
              x2="1200"
              y2={100 + i * 80}
              stroke="url(#gridGradient)"
              strokeWidth="1"
            />
          ))}
          {[...Array(12)].map((_, i) => (
            <line
              key={`v-${i}`}
              x1={100 + i * 100}
              y1="0"
              x2={100 + i * 100}
              y2="800"
              stroke="url(#gridGradient)"
              strokeWidth="1"
            />
          ))}
        </svg>

        {/* Large Enterprise Pictogram - top right */}
        <div 
          className="absolute float-1 pictogram-container"
          style={{ 
            top: '8%', 
            right: '5%', 
            width: '280px', 
            height: '280px',
            opacity: 0.9
          }}
        >
          <Enterprise className="w-full h-full text-[#0f62fe]" />
        </div>

        {/* Server Pictogram - middle right */}
        <div 
          className="absolute float-2 pictogram-container scale"
          style={{ 
            top: '35%', 
            right: '15%', 
            width: '200px', 
            height: '200px',
            opacity: 0.7
          }}
        >
          <Servers className="w-full h-full text-[#8a3ffc]" />
        </div>

        {/* Cloud Pictogram - bottom left */}
        <div 
          className="absolute float-3 pictogram-container"
          style={{ 
            bottom: '15%', 
            left: '8%', 
            width: '180px', 
            height: '180px',
            opacity: 0.6
          }}
        >
          <Cloud className="w-full h-full text-[#4589ff]" />
        </div>

        {/* Accelerated Computing Pictogram - middle left */}
        <div 
          className="absolute float-1 pictogram-container"
          style={{ 
            top: '45%', 
            left: '3%', 
            width: '150px', 
            height: '150px',
            opacity: 0.5
          }}
        >
          <AcceleratedComputing className="w-full h-full text-[#0f62fe]" />
        </div>

        {/* Decorative orbs/accents */}
        <div 
          className="absolute drift rounded-full"
          style={{ 
            top: '20%', 
            right: '25%', 
            width: '60px', 
            height: '60px',
            background: 'radial-gradient(circle, rgba(15,98,254,0.2) 0%, transparent 70%)'
          }}
        />
        <div 
          className="absolute pulse rounded-full"
          style={{ 
            bottom: '30%', 
            right: '8%', 
            width: '100px', 
            height: '100px',
            background: 'radial-gradient(circle, rgba(138,63,252,0.15) 0%, transparent 70%)'
          }}
        />
        <div 
          className="absolute float-2 rounded-full"
          style={{ 
            top: '60%', 
            left: '20%', 
            width: '80px', 
            height: '80px',
            background: 'radial-gradient(circle, rgba(69,137,255,0.2) 0%, transparent 70%)'
          }}
        />

        {/* Geometric accent lines */}
        <svg 
          className="absolute inset-0 w-full h-full drift"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          opacity="0.3"
        >
          <defs>
            <linearGradient id="lineAccent" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0f62fe" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8a3ffc" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            d="M-100 300 Q 300 150, 600 300 T 1300 300"
            fill="none"
            stroke="url(#lineAccent)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M-100 500 Q 300 350, 600 500 T 1300 500"
            fill="none"
            stroke="url(#lineAccent)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>

        {/* Corner accents */}
        <div 
          className="absolute top-0 left-0 w-32 h-32 opacity-10"
          style={{
            background: 'linear-gradient(135deg, #0f62fe 0%, transparent 70%)'
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-40 h-40 opacity-10"
          style={{
            background: 'linear-gradient(315deg, #8a3ffc 0%, transparent 70%)'
          }}
        />
      </div>
    </div>
  );
};

export default InfrastructurePictogramGraphics;
