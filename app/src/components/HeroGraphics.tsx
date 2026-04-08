import { useEffect, useState } from 'react';

/**
 * IBM Consulting-style Hero Graphics
 * Abstract geometric shapes with subtle animations
 */
const HeroGraphics = () => {
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
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes dash {
          to { stroke-dashoffset: -100; }
        }
        
        @keyframes drift {
          0% { transform: translateX(0); }
          50% { transform: translateX(30px); }
          100% { transform: translateX(0); }
        }
        
        .hero-graphics .float-1 {
          animation: float 8s ease-in-out infinite;
        }
        
        .hero-graphics .float-2 {
          animation: floatReverse 10s ease-in-out infinite;
        }
        
        .hero-graphics .float-3 {
          animation: float 12s ease-in-out infinite;
        }
        
        .hero-graphics .pulse {
          animation: pulse 6s ease-in-out infinite;
        }
        
        .hero-graphics .rotate-slow {
          animation: rotate 60s linear infinite;
        }
        
        .hero-graphics .dash-animate {
          animation: dash 20s linear infinite;
        }
        
        .hero-graphics .drift {
          animation: drift 15s ease-in-out infinite;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .hero-graphics * {
            animation: none !important;
          }
        }
      `}</style>

      <svg 
        className={`hero-graphics w-full h-full ${animationClass}`}
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient definitions */}
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f62fe" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#4589ff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8a3ffc" stopOpacity="0.4" />
          </linearGradient>
          
          <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8a3ffc" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0f62fe" stopOpacity="0.3" />
          </linearGradient>
          
          <radialGradient id="orbGradient1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0f62fe" stopOpacity="0.15" />
            <stop offset="70%" stopColor="#4589ff" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#0f62fe" stopOpacity="0" />
          </radialGradient>
          
          <radialGradient id="orbGradient2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8a3ffc" stopOpacity="0.12" />
            <stop offset="70%" stopColor="#0f62fe" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#8a3ffc" stopOpacity="0" />
          </radialGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Background grid pattern */}
        <g className="pulse" opacity="0.3">
          {[...Array(8)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={100 + i * 80}
              x2="1200"
              y2={100 + i * 80}
              stroke="#e0e0e0"
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
              stroke="#e0e0e0"
              strokeWidth="1"
            />
          ))}
        </g>

        {/* Large floating orb - top right */}
        <circle
          className="float-1"
          cx="950"
          cy="200"
          r="180"
          fill="url(#orbGradient1)"
        />

        {/* Secondary orb - bottom left */}
        <circle
          className="float-2"
          cx="200"
          cy="600"
          r="120"
          fill="url(#orbGradient2)"
        />

        {/* Small accent orb - middle right */}
        <circle
          className="float-3"
          cx="1050"
          cy="500"
          r="80"
          fill="url(#orbGradient1)"
          opacity="0.6"
        />

        {/* Geometric rings */}
        <g className="rotate-slow" transform-origin="900 300">
          <ellipse
            cx="900"
            cy="300"
            rx="200"
            ry="120"
            fill="none"
            stroke="url(#blueGradient)"
            strokeWidth="1"
            opacity="0.4"
          />
          <ellipse
            cx="900"
            cy="300"
            rx="240"
            ry="150"
            fill="none"
            stroke="url(#blueGradient)"
            strokeWidth="0.5"
            opacity="0.2"
          />
        </g>

        {/* Flowing curved lines */}
        <g className="drift" opacity="0.5">
          <path
            d="M-100 400 Q 200 200, 500 400 T 1100 400"
            fill="none"
            stroke="url(#blueGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M-100 450 Q 200 250, 500 450 T 1100 450"
            fill="none"
            stroke="url(#blueGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M-100 350 Q 200 150, 500 350 T 1100 350"
            fill="none"
            stroke="url(#purpleGradient)"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.6"
          />
        </g>

        {/* Dashed arc lines */}
        <g className="float-1" opacity="0.4">
          <path
            d="M 600 100 A 300 300 0 0 1 900 400"
            fill="none"
            stroke="#0f62fe"
            strokeWidth="2"
            strokeDasharray="10 5"
          />
          <path
            d="M 650 150 A 250 250 0 0 1 880 380"
            fill="none"
            stroke="#8a3ffc"
            strokeWidth="1.5"
            strokeDasharray="5 10"
            opacity="0.6"
          />
        </g>

        {/* Small accent dots */}
        <g className="pulse">
          <circle cx="700" cy="150" r="4" fill="#0f62fe" opacity="0.6" />
          <circle cx="800" cy="250" r="6" fill="#8a3ffc" opacity="0.4" />
          <circle cx="1000" cy="350" r="3" fill="#0f62fe" opacity="0.8" />
          <circle cx="750" cy="450" r="5" fill="#4589ff" opacity="0.5" />
          <circle cx="1100" cy="200" r="4" fill="#8a3ffc" opacity="0.6" />
          <circle cx="600" cy="300" r="3" fill="#0f62fe" opacity="0.7" />
        </g>

        {/* Hexagon shapes */}
        <g className="float-2" opacity="0.3" transform="translate(1000, 100)">
          <polygon
            points="30,0 60,15 60,45 30,60 0,45 0,15"
            fill="none"
            stroke="#0f62fe"
            strokeWidth="1.5"
          />
        </g>

        <g className="float-1" opacity="0.2" transform="translate(150, 200)">
          <polygon
            points="20,0 40,10 40,30 20,40 0,30 0,10"
            fill="none"
            stroke="#8a3ffc"
            strokeWidth="1"
          />
        </g>

        {/* Corner accents */}
        <g opacity="0.15">
          <path
            d="M 0 0 L 100 0 L 0 100 Z"
            fill="url(#blueGradient)"
          />
          <path
            d="M 1200 800 L 1100 800 L 1200 700 Z"
            fill="url(#purpleGradient)"
          />
        </g>
      </svg>
    </div>
  );
};

export default HeroGraphics;
