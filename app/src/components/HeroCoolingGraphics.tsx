import { useEffect, useState } from 'react';

const HeroCoolingGraphics = () => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const animate = reducedMotion ? '' : 'hcg-animate';

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <style>{`@keyframes hcg-flow{0%{stroke-dashoffset:300;opacity:.08}50%{opacity:.18}100%{stroke-dashoffset:0;opacity:.08}}@keyframes hcg-pulse{0%,100%{opacity:.03;transform:scale(1)}50%{opacity:.08;transform:scale(1.06)}}@keyframes hcg-drift{0%,100%{transform:translate(0,0)}33%{transform:translate(12px,-8px)}66%{transform:translate(-8px,12px)}}.hcg-animate .hcg-flow{animation:hcg-flow 20s linear infinite}.hcg-animate .hcg-flow-slow{animation:hcg-flow 28s linear infinite;animation-delay:6s}.hcg-animate .hcg-pulse{animation:hcg-pulse 14s ease-in-out infinite}.hcg-animate .hcg-pulse-delay{animation:hcg-pulse 18s ease-in-out infinite;animation-delay:7s}.hcg-animate .hcg-drift{animation:hcg-drift 24s ease-in-out infinite}@media (prefers-reduced-motion:reduce){.hcg-animate *{animation:none!important}}`}</style>
      <svg className={`w-full h-full ${animate}`} viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="hcgCool1" cx="25%" cy="35%" r="50%"><stop offset="0%" stopColor="#0f62fe" stopOpacity="0.04"/><stop offset="60%" stopColor="#0f62fe" stopOpacity="0.01"/><stop offset="100%" stopColor="#0f62fe" stopOpacity="0"/></radialGradient>
          <radialGradient id="hcgCool2" cx="75%" cy="55%" r="45%"><stop offset="0%" stopColor="#4589ff" stopOpacity="0.03"/><stop offset="70%" stopColor="#4589ff" stopOpacity="0.01"/><stop offset="100%" stopColor="#4589ff" stopOpacity="0"/></radialGradient>
          <radialGradient id="hcgCool3" cx="60%" cy="20%" r="35%"><stop offset="0%" stopColor="#8a3ffc" stopOpacity="0.02"/><stop offset="100%" stopColor="#8a3ffc" stopOpacity="0"/></radialGradient>
          <radialGradient id="hcgFanGlow" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.32"/><stop offset="100%" stopColor="#7dd3fc" stopOpacity="0"/></radialGradient>
          <radialGradient id="hcgNodeGlow" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#38bdf8" stopOpacity="0.24"/><stop offset="100%" stopColor="#38bdf8" stopOpacity="0"/></radialGradient>
          <linearGradient id="hcgFlowGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#0f62fe" stopOpacity="0"/><stop offset="50%" stopColor="#0f62fe" stopOpacity="0.06"/><stop offset="100%" stopColor="#0f62fe" stopOpacity="0"/></linearGradient>
        </defs>
        <ellipse className="hcg-pulse" cx="320" cy="320" rx="380" ry="280" fill="url(#hcgCool1)"/>
        <ellipse className="hcg-pulse-delay" cx="1080" cy="520" rx="340" ry="260" fill="url(#hcgCool2)"/>
        <ellipse className="hcg-pulse" cx="850" cy="180" rx="220" ry="160" fill="url(#hcgCool3)" style={{animationDelay:'10s'}}/>
        <g opacity="0.6">
          <path className="hcg-flow" d="M-50 200Q280 120,580 220T1280 170" fill="none" stroke="url(#hcgFlowGrad)" strokeWidth="1.2" strokeDasharray="300" opacity="0.5"/>
          <path className="hcg-flow-slow" d="M-50 340Q260 250,560 350T1260 300" fill="none" stroke="url(#hcgFlowGrad)" strokeWidth="1" strokeDasharray="300" opacity="0.4"/>
          <path className="hcg-flow" d="M-50 500Q340 400,640 520T1340 440" fill="none" stroke="url(#hcgFlowGrad)" strokeWidth="0.8" strokeDasharray="300" opacity="0.35" style={{animationDelay:'10s'}}/>
          <path d="M1400 120C1180 80,1080 220,920 160" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="8 8" opacity="0.35"/>
          <path d="M1280 480C1100 520,980 420,820 470" fill="none" stroke="#7dd3fc" strokeWidth="1" strokeDasharray="10 6" opacity="0.26"/>
        </g>
        <g opacity="0.18">
          <circle cx="1180" cy="200" r="38" fill="url(#hcgFanGlow)" />
          <circle cx="1180" cy="200" r="30" fill="none" stroke="#7dd3fc" strokeWidth="1.2" />
          <circle cx="1180" cy="200" r="16" fill="none" stroke="#38bdf8" strokeWidth="1" opacity="0.95" />
          <path d="M1180 182L1180 218M1164 200L1196 200M1170 189L1190 211M1170 211L1190 189" stroke="#7dd3fc" strokeWidth="1" opacity="0.6"/>
          <circle cx="900" cy="140" r="24" fill="url(#hcgNodeGlow)" />
          <circle cx="900" cy="140" r="8" fill="#4589ff" opacity="0.95" />
          <circle cx="1040" cy="380" r="28" fill="url(#hcgNodeGlow)" />
          <circle cx="1040" cy="380" r="10" fill="#0f62fe" opacity="0.95" />
          <path d="M860 120C920 60,980 140,1040 100" fill="none" stroke="#7dd3fc" strokeWidth="0.8" opacity="0.4" />
        </g>
        <g opacity="0.24">
          <circle cx="1080" cy="620" r="46" fill="url(#hcgFanGlow)" />
          <circle cx="1080" cy="620" r="34" fill="none" stroke="#7dd3fc" strokeWidth="1.2" />
          <circle cx="1080" cy="620" r="14" fill="none" stroke="#38bdf8" strokeWidth="1" opacity="0.95" />
          <path d="M1080 596L1080 644M1064 620L1096 620M1074 606L1102 634M1074 634L1102 606" stroke="#7dd3fc" strokeWidth="1" opacity="0.6"/>
          <path d="M1030 618C1060 610,1100 630,1120 620" fill="none" stroke="#38bdf8" strokeWidth="0.6" opacity="0.4" />
        </g>
        <g opacity="0.16">
          <path d="M220 900L360 720L500 660L620 560L740 510L860 480L980 450L1100 430" stroke="#7dd3fc" strokeWidth="0.8" opacity="0.28" fill="none"/>
          <path d="M260 900L760 520M340 900L840 540M420 900L920 560M500 900L1000 580" stroke="#7dd3fc" strokeWidth="0.5" opacity="0.22" fill="none"/>
        </g>
        <g opacity="0.08">
          {[...Array(8)].map((_,i)=><line key={`gh-${i}`} x1="0" y1={80+i*100} x2="1400" y2={80+i*100} stroke="#7dd3fc" strokeWidth="0.6" opacity="0.18"/>)}
          {[...Array(12)].map((_,i)=><line key={`gv-${i}`} x1={100+i*100} y1="0" x2={100+i*100} y2="900" stroke="#7dd3fc" strokeWidth="0.6" opacity="0.14"/>)}
          <path d="M120 860L220 740L420 760L600 620L760 650L920 520" stroke="#7dd3fc" strokeWidth="0.8" opacity="0.16" fill="none"/>
          <path d="M1100 140L1180 80L1280 110" stroke="#7dd3fc" strokeWidth="0.8" opacity="0.16" fill="none"/>
        </g>
        <g>
          <circle cx="260" cy="260" r="2.5" fill="#0f62fe" className="hcg-drift" opacity="0.25"/>
          <circle cx="620" cy="400" r="2" fill="#4589ff" className="hcg-drift" style={{animationDelay:'6s'}} opacity="0.2"/>
          <circle cx="460" cy="560" r="2" fill="#0f62fe" className="hcg-drift" style={{animationDelay:'12s'}} opacity="0.18"/>
          <circle cx="1120" cy="220" r="2" fill="#8a3ffc" className="hcg-drift" style={{animationDelay:'8s'}} opacity="0.15"/>
        </g>
      </svg>
    </div>
  );
};

export default HeroCoolingGraphics;
