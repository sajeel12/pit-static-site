import { useEffect, useState } from 'react';

/**
 * Infrastructure Hero Graphics - Animated 3D Cubes
 * Floating cube shapes with blue/purple gradient theme
 * Following IBM Carbon color palette
 */
const InfrastructureCubeGraphics = () => {
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
          0%, 100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
          50% { transform: translateY(-25px) rotateX(5deg) rotateY(5deg); }
        }
        
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
          50% { transform: translateY(25px) rotateX(-5deg) rotateY(-5deg); }
        }
        
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
          50% { transform: translateY(-15px) rotateX(3deg) rotateY(-3deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes drift {
          0% { transform: translateX(0); }
          50% { transform: translateX(40px); }
          100% { transform: translateX(0); }
        }
        
        .cube-graphics .float-1 {
          animation: float 10s ease-in-out infinite;
        }
        
        .cube-graphics .float-2 {
          animation: floatReverse 12s ease-in-out infinite;
        }
        
        .cube-graphics .float-3 {
          animation: floatSlow 14s ease-in-out infinite;
        }
        
        .cube-graphics .pulse {
          animation: pulse 6s ease-in-out infinite;
        }
        
        .cube-graphics .rotate-slow {
          animation: rotate 80s linear infinite;
        }
        
        .cube-graphics .drift {
          animation: drift 20s ease-in-out infinite;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .cube-graphics * {
            animation: none !important;
          }
        }
      `}</style>

      <svg 
        className={`cube-graphics w-full h-full ${animationClass}`}
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Blue-Purple Gradients */}
          <linearGradient id="cubeBlue1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f62fe" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#4589ff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8a3ffc" stopOpacity="0.4" />
          </linearGradient>
          
          <linearGradient id="cubePurple1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8a3ffc" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#0f62fe" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#4589ff" stopOpacity="0.35" />
          </linearGradient>
          
          <linearGradient id="cubeBlue2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4589ff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0f62fe" stopOpacity="0.5" />
          </linearGradient>
          
          <linearGradient id="lineAccent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0f62fe" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8a3ffc" stopOpacity="0.2" />
          </linearGradient>
          
          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background grid pattern */}
        <g className="pulse" opacity="0.15">
          {[...Array(10)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={80 + i * 70}
              x2="1200"
              y2={80 + i * 70}
              stroke="#0f62fe"
              strokeWidth="0.5"
            />
          ))}
          {[...Array(15)].map((_, i) => (
            <line
              key={`v-${i}`}
              x1={80 + i * 80}
              y1="0"
              x2={80 + i * 80}
              y2="800"
              stroke="#0f62fe"
              strokeWidth="0.5"
            />
          ))}
        </g>

        {/* Large floating cube - top right */}
        <g className="float-1" transform="translate(850, 80)">
          {/* Front face */}
          <rect width="200" height="200" fill="url(#cubeBlue1)" rx="4" filter="url(#glow)" />
          {/* Right face (3D depth) */}
          <polygon points="200,0 240,-30 240,170 200,200" fill="url(#cubeBlue1)" opacity="0.7" />
          {/* Top face (3D depth) */}
          <polygon points="0,0 40,-30 240,-30 200,0" fill="url(#cubeBlue1)" opacity="0.5" />
          {/* Edge highlights */}
          <line x1="0" y1="0" x2="200" y2="0" stroke="#4589ff" strokeWidth="1" opacity="0.8" />
          <line x1="200" y1="0" x2="200" y2="200" stroke="#4589ff" strokeWidth="1" opacity="0.8" />
          <line x1="200" y1="0" x2="240" y2="-30" stroke="#4589ff" strokeWidth="1" opacity="0.6" />
        </g>

        {/* Medium cube - middle right */}
        <g className="float-2" transform="translate(980, 320)">
          <rect width="140" height="140" fill="url(#cubePurple1)" rx="3" />
          <polygon points="140,0 175,-25 175,115 140,140" fill="url(#cubePurple1)" opacity="0.7" />
          <polygon points="0,0 35,-25 175,-25 140,0" fill="url(#cubePurple1)" opacity="0.5" />
          <line x1="0" y1="0" x2="140" y2="0" stroke="#8a3ffc" strokeWidth="1" opacity="0.8" />
          <line x1="140" y1="0" x2="140" y2="140" stroke="#8a3ffc" strokeWidth="1" opacity="0.8" />
        </g>

        {/* Small cube - bottom right */}
        <g className="float-3" transform="translate(1050, 550)">
          <rect width="90" height="90" fill="url(#cubeBlue2)" rx="2" />
          <polygon points="90,0 115,-20 115,70 90,90" fill="url(#cubeBlue2)" opacity="0.7" />
          <polygon points="0,0 25,-20 115,-20 90,0" fill="url(#cubeBlue2)" opacity="0.5" />
        </g>

        {/* Small accent cube - middle left */}
        <g className="float-1" transform="translate(50, 250)" opacity="0.6">
          <rect width="70" height="70" fill="url(#cubePurple1)" rx="2" />
          <polygon points="70,0 90,-15 90,55 70,70" fill="url(#cubePurple1)" opacity="0.7" />
          <polygon points="0,0 20,-15 90,-15 70,0" fill="url(#cubePurple1)" opacity="0.5" />
        </g>

        {/* Floating line accents */}
        <g className="drift" opacity="0.3">
          <line x1="300" y1="100" x2="500" y2="100" stroke="url(#lineAccent)" strokeWidth="2" strokeLinecap="round" />
          <line x1="350" y1="150" x2="480" y2="150" stroke="url(#lineAccent)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        </g>

        <g className="drift" opacity="0.25" style={{ animationDelay: '2s' }}>
          <line x1="200" y1="600" x2="400" y2="600" stroke="url(#lineAccent)" strokeWidth="2" strokeLinecap="round" />
          <line x1="250" y1="650" x2="380" y2="650" stroke="url(#lineAccent)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        </g>

        {/* Small floating squares */}
        <g className="float-2" opacity="0.5">
          <rect x="650" y="180" width="12" height="12" fill="#0f62fe" rx="1" />
          <rect x="750" y="280" width="10" height="10" fill="#8a3ffc" rx="1" />
          <rect x="850" y="450" width="8" height="8" fill="#4589ff" rx="1" />
        </g>

        <g className="float-1" opacity="0.4">
          <rect x="150" y="500" width="10" height="10" fill="#8a3ffc" rx="1" />
          <rect x="200" y="580" width="8" height="8" fill="#0f62fe" rx="1" />
        </g>

        {/* Connection dots */}
        <g className="pulse">
          <circle cx="920" cy="150" r="4" fill="#0f62fe" opacity="0.6" />
          <circle cx="1050" cy="280" r="3" fill="#8a3ffc" opacity="0.5" />
          <circle cx="1120" cy="500" r="5" fill="#4589ff" opacity="0.4" />
          <circle cx="300" y="200" r="3" fill="#0f62fe" opacity="0.5" />
          <circle cx="400" y="550" r="4" fill="#8a3ffc" opacity="0.4" />
        </g>

        {/* Corner accents */}
        <g opacity="0.08">
          <path
            d="M 0 0 L 120 0 L 0 120 Z"
            fill="url(#cubeBlue1)"
          />
          <path
            d="M 1200 800 L 1080 800 L 1200 680 Z"
            fill="url(#cubePurple1)"
          />
        </g>

        {/* Subtle orb accents */}
        <circle cx="750" cy="200" r="60" fill="url(#cubeBlue1)" opacity="0.1" className="pulse" />
        <circle cx="650" cy="500" r="80" fill="url(#cubePurple1)" opacity="0.08" className="pulse" style={{ animationDelay: '3s' }} />
      </svg>
    </div>
  );
};

export default InfrastructureCubeGraphics;
