import { useEffect, useState } from 'react';

/**
 * Thermal-themed hero background animation
 * Flowing air currents, heat shimmer waves, cool gradient zones,
 * and subtle rack silhouettes on pure black.
 */
const HeroThermalGraphics = () => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const animate = reducedMotion ? '' : 'htg-animate';

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <style>{`
        @keyframes htg-shimmer {
          0%, 100% { opacity: 0.03; transform: translateX(0) scaleY(1); }
          50% { opacity: 0.07; transform: translateX(20px) scaleY(1.02); }
        }
        @keyframes htg-flow {
          0% { stroke-dashoffset: 400; opacity: 0.06; }
          50% { opacity: 0.12; }
          100% { stroke-dashoffset: 0; opacity: 0.06; }
        }
        @keyframes htg-pulse {
          0%, 100% { opacity: 0.04; transform: scale(1); }
          50% { opacity: 0.10; transform: scale(1.08); }
        }
        @keyframes htg-drift {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(15px, -10px); }
          66% { transform: translate(-10px, 15px); }
        }
        @keyframes htg-therm {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.35; }
        }
        .htg-animate .htg-shimmer {
          animation: htg-shimmer 12s ease-in-out infinite;
        }
        .htg-animate .htg-shimmer-delay {
          animation: htg-shimmer 16s ease-in-out infinite;
          animation-delay: 4s;
        }
        .htg-animate .htg-flow {
          animation: htg-flow 18s linear infinite;
        }
        .htg-animate .htg-flow-slow {
          animation: htg-flow 24s linear infinite;
          animation-delay: 6s;
        }
        .htg-animate .htg-pulse {
          animation: htg-pulse 10s ease-in-out infinite;
        }
        .htg-animate .htg-pulse-delay {
          animation: htg-pulse 14s ease-in-out infinite;
          animation-delay: 5s;
        }
        .htg-animate .htg-drift {
          animation: htg-drift 20s ease-in-out infinite;
        }
        .htg-animate .htg-therm {
          animation: htg-therm 8s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .htg-animate * { animation: none !important; }
        }
      `}</style>

      <svg className={`w-full h-full ${animate}`} viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          {/* Cool zone gradient — blue fading to transparent */}
          <radialGradient id="htgCool1" cx="30%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#0f62fe" stopOpacity="0.06" />
            <stop offset="60%" stopColor="#0f62fe" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#0f62fe" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="htgCool2" cx="70%" cy="60%" r="45%">
            <stop offset="0%" stopColor="#4589ff" stopOpacity="0.05" />
            <stop offset="70%" stopColor="#4589ff" stopOpacity="0.01" />
            <stop offset="100%" stopColor="#4589ff" stopOpacity="0" />
          </radialGradient>
          {/* Warm zone gradient — very subtle orange/red hint */}
          <radialGradient id="htgWarm1" cx="85%" cy="25%" r="35%">
            <stop offset="0%" stopColor="#fa4d56" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#fa4d56" stopOpacity="0" />
          </radialGradient>
          {/* Airflow path gradient */}
          <linearGradient id="htgFlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0f62fe" stopOpacity="0" />
            <stop offset="50%" stopColor="#0f62fe" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#0f62fe" stopOpacity="0" />
          </linearGradient>
          {/* Heat shimmer gradient */}
          <linearGradient id="htgShimmer" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Cool zones — large soft blobs */}
        <ellipse className="htg-pulse" cx="350" cy="350" rx="400" ry="300" fill="url(#htgCool1)" />
        <ellipse className="htg-pulse-delay" cx="1050" cy="550" rx="350" ry="280" fill="url(#htgCool2)" />
        <ellipse className="htg-pulse" cx="1200" cy="200" rx="200" ry="180" fill="url(#htgWarm1)" style={{ animationDelay: '8s' }} />

        {/* Airflow current lines — curved paths suggesting cool air circulation */}
        <g opacity="0.5">
          {/* Top-left to bottom-right sweeping curves */}
          <path
            className="htg-flow"
            d="M -50 180 Q 300 80, 600 200 T 1300 150"
            fill="none"
            stroke="url(#htgFlowGrad)"
            strokeWidth="1.5"
            strokeDasharray="400"
            opacity="0.5"
          />
          <path
            className="htg-flow-slow"
            d="M -50 320 Q 250 220, 550 340 T 1250 290"
            fill="none"
            stroke="url(#htgFlowGrad)"
            strokeWidth="1.2"
            strokeDasharray="400"
            opacity="0.4"
          />
          <path
            className="htg-flow"
            d="M -50 480 Q 350 380, 650 500 T 1350 420"
            fill="none"
            stroke="url(#htgFlowGrad)"
            strokeWidth="1"
            strokeDasharray="400"
            opacity="0.35"
            style={{ animationDelay: '9s' }}
          />
          <path
            className="htg-flow-slow"
            d="M -50 620 Q 400 520, 700 640 T 1400 580"
            fill="none"
            stroke="url(#htgFlowGrad)"
            strokeWidth="0.8"
            strokeDasharray="400"
            opacity="0.3"
            style={{ animationDelay: '12s' }}
          />
          {/* Return airflow — bottom to top */}
          <path
            className="htg-flow"
            d="M 1450 750 Q 1100 850, 800 720 T 100 780"
            fill="none"
            stroke="url(#htgFlowGrad)"
            strokeWidth="1"
            strokeDasharray="400"
            opacity="0.25"
            style={{ animationDelay: '15s' }}
          />
        </g>

        {/* Heat shimmer waves — horizontal wavy bands */}
        <g>
          {[0, 1, 2, 3, 4].map((i) => (
            <path
              key={`shimmer-${i}`}
              className={i % 2 === 0 ? 'htg-shimmer' : 'htg-shimmer-delay'}
              d={`M 0 ${200 + i * 120} Q 175 ${180 + i * 120}, 350 ${200 + i * 120} T 700 ${200 + i * 120} T 1050 ${200 + i * 120} T 1400 ${200 + i * 120}`}
              fill="none"
              stroke="url(#htgShimmer)"
              strokeWidth="1"
              style={{ animationDelay: `${i * 2}s` }}
            />
          ))}
        </g>

        {/* Subtle rack silhouettes — very faint outlines */}
        <g opacity="0.03">
          {/* Rack 1 */}
          <rect x="920" y="280" width="60" height="340" rx="0" fill="none" stroke="#ffffff" strokeWidth="1" />
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <line key={`r1-${i}`} x1="930" y1={300 + i * 38} x2="970" y2={300 + i * 38} stroke="#ffffff" strokeWidth="0.5" />
          ))}
          {/* Rack 2 */}
          <rect x="1000" y="280" width="60" height="340" rx="0" fill="none" stroke="#ffffff" strokeWidth="1" />
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <line key={`r2-${i}`} x1="1010" y1={300 + i * 38} x2="1050" y2={300 + i * 38} stroke="#ffffff" strokeWidth="0.5" />
          ))}
          {/* Rack 3 */}
          <rect x="1080" y="280" width="60" height="340" rx="0" fill="none" stroke="#ffffff" strokeWidth="1" />
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <line key={`r3-${i}`} x1="1090" y1={300 + i * 38} x2="1130" y2={300 + i * 38} stroke="#ffffff" strokeWidth="0.5" />
          ))}
        </g>

        {/* Thermal indicator dots — small temperature sensors */}
        <g>
          {/* Cold sensor dots (blue) */}
          <circle cx="280" cy="280" r="3" fill="#0f62fe" className="htg-drift" opacity="0.4" />
          <circle cx="680" cy="420" r="2.5" fill="#4589ff" className="htg-drift" style={{ animationDelay: '5s' }} opacity="0.35" />
          <circle cx="480" cy="580" r="2" fill="#0f62fe" className="htg-drift" style={{ animationDelay: '10s' }} opacity="0.3" />
          {/* Hot sensor dots (subtle red/orange) */}
          <circle cx="1180" cy="180" r="2.5" fill="#fa4d56" className="htg-therm" opacity="0.25" />
          <circle cx="1280" cy="320" r="2" fill="#fa4d56" className="htg-therm" style={{ animationDelay: '3s' }} opacity="0.2" />
        </g>

        {/* Fine grid overlay — extremely subtle structural lines */}
        <g opacity="0.025">
          {[...Array(10)].map((_, i) => (
            <line key={`gh-${i}`} x1="0" y1={90 + i * 90} x2="1400" y2={90 + i * 90} stroke="#ffffff" strokeWidth="0.5" />
          ))}
          {[...Array(15)].map((_, i) => (
            <line key={`gv-${i}`} x1={93 + i * 93} y1="0" x2={93 + i * 93} y2="900" stroke="#ffffff" strokeWidth="0.5" />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default HeroThermalGraphics;
