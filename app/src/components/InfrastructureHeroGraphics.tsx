import { useEffect, useState } from 'react';

/**
 * Infrastructure Hero Graphics - Refined Professional Design
 * 
 * Clean, sophisticated composition with balanced visual weight
 */
const InfrastructureHeroGraphics = () => {
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
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.03); opacity: 0.7; }
        }
        
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse-gentle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        
        @keyframes flow {
          0% { stroke-dashoffset: 60; }
          100% { stroke-dashoffset: 0; }
        }
        
        .hero-graphics .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        
        .hero-graphics .animate-breathe {
          animation: breathe 8s ease-in-out infinite;
        }
        
        .hero-graphics .animate-orbit-slow {
          animation: orbit 100s linear infinite;
        }
        
        .hero-graphics .animate-orbit-reverse {
          animation: orbit 80s linear infinite reverse;
        }
        
        .hero-graphics .animate-pulse-gentle {
          animation: pulse-gentle 4s ease-in-out infinite;
        }
        
        .hero-graphics .animate-flow {
          animation: flow 4s linear infinite;
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
          {/* Soft atmospheric gradients */}
          <radialGradient id="glow-primary" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0f62fe" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#4589ff" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#0f62fe" stopOpacity="0" />
          </radialGradient>
          
          <radialGradient id="glow-secondary" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8a3ffc" stopOpacity="0.08" />
            <stop offset="60%" stopColor="#0f62fe" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#8a3ffc" stopOpacity="0" />
          </radialGradient>
          
          <linearGradient id="line-subtle" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0f62fe" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#8a3ffc" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0f62fe" stopOpacity="0" />
          </linearGradient>

          <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* === LAYER 1: FOUNDATION GRID (Blue Tint) === */}
        <g className="pulse" opacity="0.3">
          {[...Array(8)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={100 + i * 80}
              x2="1200"
              y2={100 + i * 80}
              stroke="#c9d9fc"
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
              stroke="#c9d9fc"
              strokeWidth="1"
            />
          ))}
        </g>

        {/* === LAYER 2: ATMOSPHERIC ORBS === */}
        {/* Primary soft glow - upper right quadrant */}
        <ellipse
          className="animate-breathe"
          cx="920"
          cy="250"
          rx="320"
          ry="260"
          fill="url(#glow-primary)"
          opacity="0.6"
        />
        
        {/* Secondary glow - lower right */}
        <ellipse
          className="animate-breathe"
          style={{ animationDelay: '-3s' }}
          cx="980"
          cy="550"
          rx="280"
          ry="220"
          fill="url(#glow-secondary)"
          opacity="0.5"
        />

        {/* === LAYER 3: REFINED NETWORK TOPOLOGY === */}
        <g className="animate-float" opacity="0.75" transform="translate(100, -30)">
          
          {/* Main Hub - Central Data Centre */}
          <g transform="translate(850, 320)">
            {/* Outer ring */}
            <circle r="38" fill="none" stroke="#0f62fe" strokeWidth="1" opacity="0.2" className="animate-breathe" />
            {/* Main hub circle */}
            <circle r="28" fill="#ffffff" stroke="#0f62fe" strokeWidth="2" filter="url(#soft-glow)" />
            {/* Inner accent */}
            <circle r="16" fill="none" stroke="#4589ff" strokeWidth="1.5" opacity="0.4" />
            <circle r="8" fill="#0f62fe" opacity="0.2" />
            {/* Core indicator */}
            <circle r="4" fill="#0f62fe" opacity="0.8" className="animate-pulse-gentle" />
            
            {/* Connection Lines - Minimalist */}
            <line x1="0" y1="0" x2="-70" y2="-50" stroke="url(#line-subtle)" strokeWidth="1.5" />
            <line x1="0" y1="0" x2="85" y2="-35" stroke="url(#line-subtle)" strokeWidth="1.5" />
            <line x1="0" y1="0" x2="-55" y2="70" stroke="url(#line-subtle)" strokeWidth="1.5" />
            <line x1="0" y1="0" x2="70" y2="60" stroke="url(#line-subtle)" strokeWidth="1.5" />
            
            {/* Server Node 1 - Upper Left (Primary Compute Node) */}
            <g transform="translate(-75, -55)">
              {/* Rack mounting ears */}
              <rect x="-12" y="-24" width="3" height="48" rx="1" fill="#f4f4f4" stroke="#c6c6c6" strokeWidth="0.5" />
              <rect x="9" y="-24" width="3" height="48" rx="1" fill="#f4f4f4" stroke="#c6c6c6" strokeWidth="0.5" />
              {/* Main chassis */}
              <rect x="-9" y="-22" width="18" height="44" rx="2" fill="#ffffff" stroke="#0f62fe" strokeWidth="1.5" />
              {/* Top handle/vent */}
              <rect x="-6" y="-19" width="12" height="3" rx="1" fill="#f4f4f4" stroke="#e0e0e0" strokeWidth="0.5" />
              {/* Server units with drive bays */}
              <g opacity="0.9">
                <rect x="-6" y="-14" width="12" height="6" rx="1" fill="#f8f9fa" stroke="#e0e0e0" strokeWidth="0.5" />
                <circle cx="-3" cy="-11" r="1.5" fill="#0f62fe" opacity="0.8" />
                <rect x="0" y="-12" width="5" height="2" rx="0.5" fill="#e0e0e0" />
              </g>
              <g opacity="0.9">
                <rect x="-6" y="-7" width="12" height="6" rx="1" fill="#f8f9fa" stroke="#e0e0e0" strokeWidth="0.5" />
                <circle cx="-3" cy="-4" r="1.5" fill="#4589ff" opacity="0.6" />
                <rect x="0" y="-5" width="5" height="2" rx="0.5" fill="#e0e0e0" />
              </g>
              <g opacity="0.9">
                <rect x="-6" y="0" width="12" height="6" rx="1" fill="#f8f9fa" stroke="#e0e0e0" strokeWidth="0.5" />
                <circle cx="-3" cy="3" r="1.5" fill="#0f62fe" opacity="0.9" className="animate-pulse-gentle" />
                <rect x="0" y="2" width="5" height="2" rx="0.5" fill="#e0e0e0" />
              </g>
              <g opacity="0.9">
                <rect x="-6" y="7" width="12" height="6" rx="1" fill="#f8f9fa" stroke="#e0e0e0" strokeWidth="0.5" />
                <circle cx="-3" cy="10" r="1.5" fill="#4589ff" opacity="0.5" />
                <rect x="0" y="9" width="5" height="2" rx="0.5" fill="#e0e0e0" />
              </g>
              {/* Bottom port panel */}
              <rect x="-6" y="14" width="12" height="6" rx="1" fill="#f4f4f4" stroke="#e0e0e0" strokeWidth="0.5" />
              <circle cx="-2" cy="17" r="1" fill="#525252" opacity="0.4" />
              <circle cx="2" cy="17" r="1" fill="#525252" opacity="0.4" />
              {/* Power indicator */}
              <circle cx="0" cy="20" r="1.5" fill="#0f62fe" opacity="0.9" />
            </g>
            
            {/* Server Node 2 - Upper Right (Storage Array) */}
            <g transform="translate(90, -40)">
              {/* Rack ears */}
              <rect x="-10" y="-22" width="2.5" height="44" rx="0.5" fill="#f4f4f4" stroke="#c6c6c6" strokeWidth="0.5" />
              <rect x="7.5" y="-22" width="2.5" height="44" rx="0.5" fill="#f4f4f4" stroke="#c6c6c6" strokeWidth="0.5" />
              {/* Chassis */}
              <rect x="-8" y="-20" width="16" height="40" rx="2" fill="#ffffff" stroke="#8a3ffc" strokeWidth="1.5" />
              {/* Storage drive bays - horizontal slots */}
              <g opacity="0.95">
                <rect x="-5" y="-16" width="10" height="5" rx="1" fill="#f8f9fa" stroke="#e0e0e0" strokeWidth="0.5" />
                <line x1="-3" y1="-13.5" x2="3" y2="-13.5" stroke="#e0e0e0" strokeWidth="2" />
                <circle cx="5" cy="-13.5" r="1.2" fill="#8a3ffc" opacity="0.6" />
              </g>
              <g opacity="0.95">
                <rect x="-5" y="-10" width="10" height="5" rx="1" fill="#f8f9fa" stroke="#e0e0e0" strokeWidth="0.5" />
                <line x1="-3" y1="-7.5" x2="3" y2="-7.5" stroke="#e0e0e0" strokeWidth="2" />
                <circle cx="5" cy="-7.5" r="1.2" fill="#0f62fe" opacity="0.7" />
              </g>
              <g opacity="0.95">
                <rect x="-5" y="-4" width="10" height="5" rx="1" fill="#f8f9fa" stroke="#e0e0e0" strokeWidth="0.5" />
                <line x1="-3" y1="-1.5" x2="3" y2="-1.5" stroke="#e0e0e0" strokeWidth="2" />
                <circle cx="5" cy="-1.5" r="1.2" fill="#8a3ffc" opacity="0.8" className="animate-pulse-gentle" />
              </g>
              <g opacity="0.95">
                <rect x="-5" y="2" width="10" height="5" rx="1" fill="#f8f9fa" stroke="#e0e0e0" strokeWidth="0.5" />
                <line x1="-3" y1="4.5" x2="3" y2="4.5" stroke="#e0e0e0" strokeWidth="2" />
                <circle cx="5" cy="4.5" r="1.2" fill="#0f62fe" opacity="0.5" />
              </g>
              {/* Controller panel */}
              <rect x="-5" y="9" width="10" height="8" rx="1" fill="#f4f4f4" stroke="#e0e0e0" strokeWidth="0.5" />
              <circle cx="0" cy="13" r="2" fill="#8a3ffc" opacity="0.8" />
            </g>
            
            {/* Server Node 3 - Lower Left (Network Appliance) */}
            <g transform="translate(-60, 75)">
              {/* Rack ears with mounting holes */}
              <rect x="-13" y="-26" width="3" height="52" rx="1" fill="#f4f4f4" stroke="#c6c6c6" strokeWidth="0.5" />
              <circle cx="-11.5" cy="-20" r="1" fill="#525252" opacity="0.3" />
              <circle cx="-11.5" cy="20" r="1" fill="#525252" opacity="0.3" />
              <rect x="10" y="-26" width="3" height="52" rx="1" fill="#f4f4f4" stroke="#c6c6c6" strokeWidth="0.5" />
              <circle cx="11.5" cy="-20" r="1" fill="#525252" opacity="0.3" />
              <circle cx="11.5" cy="20" r="1" fill="#525252" opacity="0.3" />
              {/* Main unit - taller network switch style */}
              <rect x="-10" y="-24" width="20" height="48" rx="2" fill="#ffffff" stroke="#0f62fe" strokeWidth="1.5" />
              {/* Port panel - dense network ports */}
              <rect x="-7" y="-20" width="14" height="32" rx="1" fill="#f8f9fa" stroke="#e0e0e0" strokeWidth="0.5" />
              {/* Port rows */}
              {[...Array(6)].map((_, i) => (
                <g key={i}>
                  <rect x="-5" y={-17 + i * 5} width="3" height="3" rx="0.5" fill="#e0e0e0" />
                  <rect x="-1" y={-17 + i * 5} width="3" height="3" rx="0.5" fill="#e0e0e0" />
                  <rect x="3" y={-17 + i * 5} width="3" height="3" rx="0.5" fill="#e0e0e0" />
                </g>
              ))}
              {/* Activity LEDs */}
              <circle cx="-6" cy="-14" r="1" fill="#0f62fe" opacity="0.7" />
              <circle cx="-2" cy="-9" r="1" fill="#4589ff" opacity="0.5" />
              <circle cx="2" cy="-4" r="1" fill="#0f62fe" opacity="0.8" className="animate-pulse-gentle" />
              <circle cx="6" cy="1" r="1" fill="#4589ff" opacity="0.6" />
              <circle cx="-6" cy="6" r="1" fill="#0f62fe" opacity="0.5" />
              <circle cx="-2" cy="11" r="1" fill="#4589ff" opacity="0.7" />
              {/* Status panel */}
              <rect x="-7" y="15" width="14" height="6" rx="1" fill="#f4f4f4" stroke="#e0e0e0" strokeWidth="0.5" />
              <circle cx="0" cy="18" r="1.8" fill="#0f62fe" opacity="0.9" />
            </g>
            
            {/* Server Node 4 - Lower Right (Blade Server) */}
            <g transform="translate(75, 65)">
              {/* Rack ears */}
              <rect x="-11" y="-24" width="2.5" height="48" rx="0.5" fill="#f4f4f4" stroke="#c6c6c6" strokeWidth="0.5" />
              <rect x="8.5" y="-24" width="2.5" height="48" rx="0.5" fill="#f4f4f4" stroke="#c6c6c6" strokeWidth="0.5" />
              {/* Chassis */}
              <rect x="-9" y="-22" width="18" height="44" rx="2" fill="#ffffff" stroke="#8a3ffc" strokeWidth="1.5" />
              {/* Blade slots */}
              <g opacity="0.9">
                <rect x="-6" y="-18" width="12" height="7" rx="1" fill="#f8f9fa" stroke="#e0e0e0" strokeWidth="0.5" />
                <rect x="-4" y="-15" width="6" height="2" rx="0.5" fill="#e0e0e0" />
                <circle cx="5" cy="-14.5" r="1.3" fill="#8a3ffc" opacity="0.6" />
              </g>
              <g opacity="0.9">
                <rect x="-6" y="-10" width="12" height="7" rx="1" fill="#f8f9fa" stroke="#e0e0e0" strokeWidth="0.5" />
                <rect x="-4" y="-7" width="6" height="2" rx="0.5" fill="#e0e0e0" />
                <circle cx="5" cy="-6.5" r="1.3" fill="#0f62fe" opacity="0.7" />
              </g>
              <g opacity="0.9">
                <rect x="-6" y="-2" width="12" height="7" rx="1" fill="#f8f9fa" stroke="#e0e0e0" strokeWidth="0.5" />
                <rect x="-4" y="1" width="6" height="2" rx="0.5" fill="#e0e0e0" />
                <circle cx="5" cy="1.5" r="1.3" fill="#8a3ffc" opacity="0.8" className="animate-pulse-gentle" />
              </g>
              <g opacity="0.9">
                <rect x="-6" y="6" width="12" height="7" rx="1" fill="#f8f9fa" stroke="#e0e0e0" strokeWidth="0.5" />
                <rect x="-4" y="9" width="6" height="2" rx="0.5" fill="#e0e0e0" />
                <circle cx="5" cy="9.5" r="1.3" fill="#0f62fe" opacity="0.5" />
              </g>
              {/* Management module */}
              <rect x="-6" y="14" width="12" height="6" rx="1" fill="#f4f4f4" stroke="#e0e0e0" strokeWidth="0.5" />
              <circle cx="0" cy="17" r="1.5" fill="#8a3ffc" opacity="0.9" />
            </g>
          </g>
          
          {/* Secondary Cluster - Smaller Network */}
          <g transform="translate(1020, 480)" opacity="0.6">
            <circle r="16" fill="#ffffff" stroke="#4589ff" strokeWidth="1.5" />
            <circle r="9" fill="none" stroke="#0f62fe" strokeWidth="1" opacity="0.3" />
            <circle r="3" fill="#4589ff" opacity="0.4" />
            
            {/* Mini connections */}
            <line x1="0" y1="0" x2="-35" y2="20" stroke="url(#line-subtle)" strokeWidth="1" />
            <line x1="0" y1="0" x2="30" y2="25" stroke="url(#line-subtle)" strokeWidth="1" />
            
            <circle cx="-35" cy="20" r="6" fill="#ffffff" stroke="#0f62fe" strokeWidth="1" />
            <circle cx="30" cy="25" r="5" fill="#ffffff" stroke="#4589ff" strokeWidth="1" />
          </g>
        </g>

        {/* === LAYER 4: SUBTLE DATA FLOW === */}
        <g opacity="0.3">
          {/* Minimal ambient flow lines */}
          <path
            d="M 850 320 Q 950 310, 1050 320"
            fill="none"
            stroke="url(#line-subtle)"
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray="4 8"
          />
          <path
            d="M 900 400 Q 1000 390, 1100 400"
            fill="none"
            stroke="#0f62fe"
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray="3 6"
            opacity="0.4"
          />
        </g>

        {/* === LAYER 5: REFINED CUBE ORNAMENTS === */}
        {/* Orbit Group 1 - Upper Right */}
        <g className="animate-orbit-slow" transform-origin="950 300" opacity="0.3">
          <g transform="translate(1050, 180)">
            <rect width="45" height="45" fill="none" stroke="#0f62fe" strokeWidth="0.5" />
            <line x1="0" y1="0" x2="45" y2="45" stroke="#0f62fe" strokeWidth="0.5" opacity="0.5" />
            <line x1="45" y1="0" x2="0" y2="45" stroke="#0f62fe" strokeWidth="0.5" opacity="0.5" />
            <polygon points="45,0 55,-10 55,35 45,45" fill="none" stroke="#0f62fe" strokeWidth="0.5" strokeDasharray="3 2" opacity="0.6" />
          </g>
          
          <g transform="translate(1120, 280)">
            <rect width="30" height="30" fill="none" stroke="#4589ff" strokeWidth="0.5" />
            <polygon points="30,0 38,-8 38,22 30,30" fill="none" stroke="#4589ff" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.5" />
          </g>
        </g>
        
        {/* Orbit Group 2 - Lower Area */}
        <g className="animate-orbit-reverse" transform-origin="850 450" opacity="0.25">
          <g transform="translate(920, 580)">
            <rect width="38" height="38" fill="none" stroke="#8a3ffc" strokeWidth="0.5" />
            <line x1="0" y1="0" x2="38" y2="38" stroke="#8a3ffc" strokeWidth="0.5" opacity="0.4" />
            <polygon points="38,0 46,-8 46,30 38,38" fill="none" stroke="#8a3ffc" strokeWidth="0.5" strokeDasharray="3 2" opacity="0.5" />
          </g>
          
          <g transform="translate(750, 620)">
            <rect width="25" height="25" fill="none" stroke="#a56eff" strokeWidth="0.5" />
            <polygon points="25,0 31,-6 31,19 25,25" fill="none" stroke="#a56eff" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.4" />
          </g>
        </g>

        {/* === LAYER 6: SUBTLE ACCENTS === */}
        <g fill="#0f62fe" opacity="0.25">
          <circle cx="680" cy="200" r="2" />
          <circle cx="750" cy="180" r="1.5" />
          <circle cx="1150" cy="350" r="2" />
          <circle cx="1050" cy="580" r="1.5" />
        </g>
      </svg>
    </div>
  );
};

export default InfrastructureHeroGraphics;
