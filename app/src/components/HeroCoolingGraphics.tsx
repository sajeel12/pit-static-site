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
          <linearGradient id="hcgFlowGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#0f62fe" stopOpacity="0"/><stop offset="50%" stopColor="#0f62fe" stopOpacity="0.06"/><stop offset="100%" stopColor="#0f62fe" stopOpacity="0"/></linearGradient>
        </defs>
        <ellipse className="hcg-pulse" cx="320" cy="320" rx="380" ry="280" fill="url(#hcgCool1)"/>
        <ellipse className="hcg-pulse-delay" cx="1080" cy="520" rx="340" ry="260" fill="url(#hcgCool2)"/>
        <ellipse className="hcg-pulse" cx="850" cy="180" rx="220" ry="160" fill="url(#hcgCool3)" style={{animationDelay:'10s'}}/>
        <g opacity="0.6">
          <path className="hcg-flow" d="M-50 200Q280 120,580 220T1280 170" fill="none" stroke="url(#hcgFlowGrad)" strokeWidth="1.2" strokeDasharray="300" opacity="0.5"/>
          <path className="hcg-flow-slow" d="M-50 340Q260 250,560 350T1260 300" fill="none" stroke="url(#hcgFlowGrad)" strokeWidth="1" strokeDasharray="300" opacity="0.4"/>
          <path className="hcg-flow" d="M-50 500Q340 400,640 520T1340 440" fill="none" stroke="url(#hcgFlowGrad)" strokeWidth="0.8" strokeDasharray="300" opacity="0.35" style={{animationDelay:'10s'}}/>
        </g>
        <g opacity="0.03">
          {[...Array(10)].map((_,i)=><line key={`gh-${i}`} x1="0" y1={90+i*90} x2="1400" y2={90+i*90} stroke="#161616" strokeWidth="0.5"/>)}
          {[...Array(15)].map((_,i)=><line key={`gv-${i}`} x1={93+i*93} y1="0" x2={93+i*93} y2="900" stroke="#161616" strokeWidth="0.5"/>)}
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
