import { useEffect, useState } from 'react';

/**
 * Dark hero background animation
 * Subtle grid, floating squares, and drifting dots on pure black.
 * Inspired by HeroGraphics but re-themed for dark surfaces.
 */
const HeroDarkGraphics = () => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const animate = reducedMotion ? '' : 'hdg-animate';

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <style>{`
        @keyframes hdg-breathe {
          0%, 100% { opacity: 0.06; transform: scale(1); }
          50% { opacity: 0.10; transform: scale(1.04); }
        }
        @keyframes hdg-drift-h {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(60px); }
        }
        @keyframes hdg-drift-v {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-50px); }
        }
        @keyframes hdg-drift-slow {
          0% { transform: translate(0, 0); }
          33% { transform: translate(30px, -20px); }
          66% { transform: translate(-20px, 30px); }
          100% { transform: translate(0, 0); }
        }
        .hdg-animate .hdg-breathe {
          animation: hdg-breathe 14s ease-in-out infinite;
        }
        .hdg-animate .hdg-drift-h {
          animation: hdg-drift-h 24s ease-in-out infinite;
        }
        .hdg-animate .hdg-drift-v {
          animation: hdg-drift-v 32s ease-in-out infinite;
        }
        .hdg-animate .hdg-drift-slow {
          animation: hdg-drift-slow 20s ease-in-out infinite;
        }
        .hdg-animate .hdg-drift-slow-delay {
          animation: hdg-drift-slow 26s ease-in-out infinite;
          animation-delay: 6s;
        }
        @media (prefers-reduced-motion: reduce) {
          .hdg-animate * { animation: none !important; }
        }
      `}</style>

      <svg className={`w-full h-full ${animate}`} viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="hdgGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f62fe" stopOpacity="0.07" />
            <stop offset="100%" stopColor="#161616" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="hdgGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8a3ffc" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#0f62fe" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* Faint grid */}
        <g opacity="0.04">
          {[...Array(8)].map((_, i) => (
            <line key={`gh-${i}`} x1="0" y1={100 + i * 100} x2="1200" y2={100 + i * 100} stroke="#ffffff" strokeWidth="1" />
          ))}
          {[...Array(12)].map((_, i) => (
            <line key={`gv-${i}`} x1={100 + i * 100} y1="0" x2={100 + i * 100} y2="800" stroke="#ffffff" strokeWidth="1" />
          ))}
        </g>

        {/* Large floating squares */}
        <g>
          <rect className="hdg-breathe" x="700" y="60" width="320" height="280" fill="url(#hdgGrad1)" />
          <rect className="hdg-breathe" x="50" y="500" width="200" height="160" fill="url(#hdgGrad2)" style={{ animationDelay: '5s' }} />
          <rect className="hdg-breathe" x="950" y="400" width="140" height="140" fill="url(#hdgGrad1)" style={{ animationDelay: '10s' }} />
        </g>

        {/* Small drifting dots */}
        <g opacity="0.35">
          <circle cx="200" cy="200" r="2.5" fill="#0f62fe" className="hdg-drift-h" />
          <circle cx="600" cy="350" r="2" fill="#4589ff" className="hdg-drift-slow" />
          <circle cx="1000" cy="150" r="2.5" fill="#8a3ffc" className="hdg-drift-v" />
          <circle cx="400" cy="600" r="2" fill="#0f62fe" className="hdg-drift-slow-delay" />
          <circle cx="1100" cy="550" r="2" fill="#4589ff" className="hdg-drift-h" style={{ animationDelay: '8s' }} />
        </g>
      </svg>
    </div>
  );
};

export default HeroDarkGraphics;
