import { useEffect, useState, useRef } from 'react';

/**
 * Carbon Design System Hero Background
 * Parallax, texture, and data flow visualization
 */
const HeroGraphics = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const rafRef = useRef<number | null>(null);
  const lastScrollRef = useRef<number>(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Parallax scroll handler with RAF
  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      lastScrollRef.current = window.scrollY;
      
      if (rafRef.current !== null) return;
      
      rafRef.current = requestAnimationFrame(() => {
        setScrollY(lastScrollRef.current);
        rafRef.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [prefersReducedMotion]);

  const animationClass = prefersReducedMotion ? '' : 'animate';
  const parallaxOffset = prefersReducedMotion ? 0 : scrollY * 0.15;
  const parallaxSlow = prefersReducedMotion ? 0 : scrollY * 0.08;

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <style>{`
        @keyframes slow-breathe {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        
        @keyframes square-pulse {
          0%, 100% { opacity: 0.9; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        
        @keyframes grid-move-h-1 {
          0% { transform: translateX(0); }
          100% { transform: translateX(1300px); }
        }
        
        @keyframes dot-h {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(80px); }
        }
        
        @keyframes dot-h-reverse {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-60px); }
        }
        
        @keyframes dot-v {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-80px); }
        }
        
        @keyframes dot-simple {
          /* Simple up-down path with fewer turns, slower speed */
          0% { transform: translate(0, 0); }
          50% { transform: translate(0, -160px); }
          100% { transform: translate(0, 0); }
        }
        
        @keyframes dot-v-reverse {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(50px); }
        }
        
        @keyframes dot-grid-path {
          /* Path strictly on grid lines: up, right, down to y=400, left, down, right back */
          0% { transform: translate(0, 0); }
          /* Go up vertical grid line x=700: 480 -> 320 (160px) */
          15% { transform: translate(0, -160px); }
          /* Go right horizontal grid line y=320: 700 -> 900 (200px) */
          30% { transform: translate(200px, -160px); }
          /* Go down vertical grid line x=900: 320 -> 400 (80px down - past halfway) */
          45% { transform: translate(200px, -80px); }
          /* Take left horizontal grid line y=400: 900 -> 600 (300px left) */
          60% { transform: translate(-100px, -80px); }
          /* Go down vertical grid line x=600: 400 -> 480 (80px down) */
          75% { transform: translate(-100px, 0); }
          /* Go right horizontal grid line y=480: 600 -> 700 (100px right) back to start */
          100% { transform: translate(0, 0); }
        }
        
        .hero-graphics .slow-breathe {
          animation: slow-breathe 12s ease-in-out infinite;
        }
        
        .hero-graphics .square-pulse {
          animation: square-pulse 5s ease-in-out infinite;
          transform-origin: center;
        }
        
        .hero-graphics .grid-move-h-1 {
          animation: grid-move-h-1 180s linear infinite;
        }
        
        .hero-graphics .dot-h {
          animation: dot-h 20s ease-in-out infinite;
        }
        
        .hero-graphics .dot-h-reverse {
          animation: dot-h-reverse 25s ease-in-out infinite;
        }
        
        .hero-graphics .dot-v {
          animation: dot-v 35s ease-in-out infinite;
        }
        
        .hero-graphics .dot-v-reverse {
          animation: dot-v-reverse 40s ease-in-out infinite;
        }
        
        .hero-graphics .dot-simple {
          animation: dot-simple 30s ease-in-out infinite;
        }
        
        .hero-graphics .dot-grid-path {
          animation: dot-grid-path 20s ease-in-out infinite;
        }
        
        .hero-graphics .parallax-layer-1 {
          transform: translateY(${parallaxOffset}px);
          transition: transform 0.1s linear;
        }
        
        .hero-graphics .parallax-layer-2 {
          transform: translateY(${parallaxSlow}px);
          transition: transform 0.1s linear;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .hero-graphics * {
            animation: none !important;
          }
          .hero-graphics .parallax-layer-1,
          .hero-graphics .parallax-layer-2 {
            transform: none !important;
          }
        }
      `}</style>

      {/* Texture Overlay - Noise at 3% */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      <svg 
        className={`hero-graphics w-full h-full ${animationClass}`}
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Square gradients */}
          <linearGradient id="carbonSquare1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f62fe" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#4589ff" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#8a3ffc" stopOpacity="0.04" />
          </linearGradient>
          
          <linearGradient id="carbonSquare2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8a3ffc" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#0f62fe" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Grid lines - visible */}
        <g opacity="0.15" className="parallax-layer-2">
          {[...Array(10)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={80 + i * 80}
              x2="1200"
              y2={80 + i * 80}
              stroke="#c6c6c6"
              strokeWidth="1"
            />
          ))}
          {[...Array(13)].map((_, i) => (
            <line
              key={`v-${i}`}
              x1={i * 100}
              y1="0"
              x2={i * 100}
              y2="800"
              stroke="#c6c6c6"
              strokeWidth="1"
            />
          ))}
        </g>

        {/* Parallax Layer 1 - Main squares */}
        <g className="parallax-layer-1">
          {/* Largest square - pulsates, aligned to grid */}
          <rect
            className="square-pulse"
            x="600"
            y="80"
            width="350"
            height="300"
            fill="url(#carbonSquare1)"
          />
          <rect
            className="slow-breathe"
            x="900"
            y="320"
            width="200"
            height="180"
            fill="url(#carbonSquare2)"
            style={{ animationDelay: '4s' }}
          />
          <rect
            className="slow-breathe"
            x="80"
            y="620"
            width="180"
            height="120"
            fill="url(#carbonSquare1)"
            style={{ animationDelay: '8s' }}
          />
        </g>

        {/* Parallax Layer 2 - Secondary squares */}
        <g className="parallax-layer-2">
          {/* Static pulsating squares */}
          <rect
            className="slow-breathe"
            x="1000"
            y="100"
            width="120"
            height="120"
            fill="url(#carbonSquare2)"
            style={{ animationDelay: '2s' }}
          />
          <rect
            className="slow-breathe"
            x="50"
            y="400"
            width="80"
            height="80"
            fill="url(#carbonSquare1)"
            style={{ animationDelay: '6s' }}
          />
          <rect
            className="slow-breathe"
            x="1100"
            y="600"
            width="60"
            height="60"
            fill="url(#carbonSquare2)"
            style={{ animationDelay: '10s' }}
          />
        </g>

        {/* Grid mover - horizontal (no parallax) */}
        <g opacity="0.12">
          <rect x="-50" y="240" width="80" height="25" fill="url(#carbonSquare1)" className="grid-move-h-1" />
        </g>

        {/* Oscillating Dots - half horizontal, half vertical */}
        <g opacity="0.5">
          {/* Horizontal movers (3 dots) - back and forth along horizontal grid lines */}
          <circle cx="150" cy="240" r="3.5" fill="#0f62fe" className="dot-h" />
          <circle cx="500" cy="400" r="3" fill="#4589ff" className="dot-h-reverse" />
          <circle cx="850" cy="560" r="3.5" fill="#8a3ffc" className="dot-h" />
          
          {/* Vertical movers (3 dots) - back and forth along vertical grid lines */}
          <circle cx="300" cy="150" r="3" fill="#0f62fe" className="dot-v" />
          {/* Grid-following dot - starts on grid intersection, follows grid lines */}
          <circle cx="700" cy="480" r="3.5" fill="#4589ff" className="dot-grid-path" />
          

          <circle cx="1100" cy="320" r="3" fill="#8a3ffc" className="dot-v" />
        </g>
      </svg>
    </div>
  );
};

export default HeroGraphics;
