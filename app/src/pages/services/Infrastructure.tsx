import { useState } from 'react';
import { ArrowRight } from '@carbon/icons-react';
// Carbon Pictograms available for future use:
// Enterprise, Servers, Cloud, Security from '@carbon/pictograms-react'
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';
import '../../styles/carbon-typography.css';

/**
 * Infrastructure Hub Page
 * 
 * Hero Section: "Controlled Complexity" Theme
 * - Carbon 16-column grid layout
 * - IBM Plex Sans typography
 * - SVG-based Live Network Animation (no WebGL)
 * - Carbon Pictograms for network nodes
 */

// Live Network Animation Component - SVG-based
const LiveNetworkAnimation = () => {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const [tooltip, setTooltip] = useState<{x: number, y: number, text: string} | null>(null);

  // Node definitions for Infrastructure network
  const nodes = [
    { id: 0, x: 200, y: 180, type: 'core', label: 'Core DC', metric: 'Status: Active' },
    { id: 1, x: 340, y: 100, type: 'edge', label: 'Edge Node A', metric: 'Latency: 8ms' },
    { id: 2, x: 380, y: 200, type: 'edge', label: 'Edge Node B', metric: 'Latency: 12ms' },
    { id: 3, x: 320, y: 300, type: 'edge', label: 'Edge Node C', metric: 'Latency: 15ms' },
    { id: 4, x: 120, y: 320, type: 'edge', label: 'Client Site', metric: 'Status: Secure' },
    { id: 5, x: 60, y: 220, type: 'cloud', label: 'Cloud GW', metric: 'Throughput: 100Gbps' },
    { id: 6, x: 80, y: 100, type: 'edge', label: 'Backup DC', metric: 'Standby' },
  ];

  const connections = [
    { from: 0, to: 1 },
    { from: 0, to: 2 },
    { from: 0, to: 3 },
    { from: 0, to: 4 },
    { from: 0, to: 5 },
    { from: 0, to: 6 },
  ];

  const handleNodeHover = (e: React.MouseEvent, nodeId: number) => {
    setHoveredNode(nodeId);
    const node = nodes.find(n => n.id === nodeId);
    if (node) {
      setTooltip({
        x: e.clientX,
        y: e.clientY - 40,
        text: `${node.label} • ${node.metric}`
      });
    }
  };

  const handleNodeLeave = () => {
    setHoveredNode(null);
    setTooltip(null);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg 
        viewBox="0 0 440 400" 
        className="w-full max-w-lg h-auto"
        style={{ filter: 'drop-shadow(0 0 30px rgba(34, 211, 238, 0.15))' }}
      >
        <defs>
          {/* Glow filter for core node */}
          <filter id="coreGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Pulse animation using SVG animate */}
          <style>{`
            .core-pulse {
              animation: pulse 3s ease-in-out infinite;
              transform-origin: center;
            }
            @keyframes pulse {
              0%, 100% { opacity: 0.7; transform: scale(1); }
              50% { opacity: 1; transform: scale(1.08); }
            }
            .packet {
              fill: #22D3EE;
              filter: drop-shadow(0 0 4px #22D3EE);
            }
          `}</style>
        </defs>

        {/* Connection Lines with dash animation for data flow */}
        {connections.map((conn, idx) => {
          const fromNode = nodes.find(n => n.id === conn.from);
          const toNode = nodes.find(n => n.id === conn.to);
          if (!fromNode || !toNode) return null;
          
          return (
            <g key={`conn-${idx}`}>
              {/* Static line */}
              <line
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke="#334155"
                strokeWidth="1.5"
                opacity="0.4"
              />
              
              {/* Animated data packet using animateMotion */}
              <circle r="3" className="packet" opacity="0">
                <animateMotion
                  dur={`${1.5 + idx * 0.2}s`}
                  repeatCount="indefinite"
                  path={`M${fromNode.x},${fromNode.y} L${toNode.x},${toNode.y}`}
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  dur={`${1.5 + idx * 0.2}s`}
                  repeatCount="indefinite"
                />
              </circle>
              
              {/* Return packet */}
              <circle r="2" className="packet" opacity="0" fill="#3B82F6">
                <animateMotion
                  dur={`${1.5 + idx * 0.2}s`}
                  repeatCount="indefinite"
                  path={`M${toNode.x},${toNode.y} L${fromNode.x},${fromNode.y}`}
                  begin={`${0.75 + idx * 0.1}s`}
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  dur={`${1.5 + idx * 0.2}s`}
                  begin={`${0.75 + idx * 0.1}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}

        {/* Secondary Nodes (Edge/Cloud) */}
        {nodes.filter(n => n.type !== 'core').map(node => (
          <g 
            key={node.id}
            onMouseEnter={(e) => handleNodeHover(e, node.id)}
            onMouseLeave={handleNodeLeave}
            className="cursor-pointer"
          >
            {/* Node circle */}
            <circle
              cx={node.x}
              cy={node.y}
              r="10"
              fill="#0F172A"
              stroke={hoveredNode === node.id ? '#22D3EE' : '#475569'}
              strokeWidth={hoveredNode === node.id ? '2' : '1.5'}
              className="transition-all duration-200"
            />
            {/* Inner dot */}
            <circle
              cx={node.x}
              cy={node.y}
              r="4"
              fill={hoveredNode === node.id ? '#22D3EE' : '#64748B'}
              opacity={hoveredNode === node.id ? '1' : '0.7'}
              className="transition-all duration-200"
            />
          </g>
        ))}

        {/* Core Node with Pulse */}
        <g 
          className="core-pulse cursor-pointer"
          onMouseEnter={(e) => handleNodeHover(e, 0)}
          onMouseLeave={handleNodeLeave}
        >
          {/* Outer glow ring */}
          <circle
            cx={nodes[0].x}
            cy={nodes[0].y}
            r="28"
            fill="none"
            stroke="#22D3EE"
            strokeWidth="1"
            opacity="0.3"
            filter="url(#coreGlow)"
          />
          {/* Main core circle */}
          <circle
            cx={nodes[0].x}
            cy={nodes[0].y}
            r="22"
            fill="#0F172A"
            stroke="#22D3EE"
            strokeWidth="2"
          />
          {/* Inner cyan circle */}
          <circle
            cx={nodes[0].x}
            cy={nodes[0].y}
            r="12"
            fill="#22D3EE"
            opacity="0.4"
          />
          {/* Center dot */}
          <circle
            cx={nodes[0].x}
            cy={nodes[0].y}
            r="6"
            fill="#22D3EE"
          />
        </g>
      </svg>

      {/* Tooltip - Carbon Dark Theme */}
      {tooltip && (
        <div 
          className="fixed z-50 px-3 py-2 bg-gray-900 border border-cyan-500/30 rounded text-sm text-white whitespace-nowrap pointer-events-none font-['IBM_Plex_Sans']"
          style={{ 
            left: tooltip.x, 
            top: tooltip.y,
            transform: 'translateX(-50%)'
          }}
        >
          {tooltip.text}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
        </div>
      )}
    </div>
  );
};

// Hero Section Component
const HeroVariant = () => {
  return (
    <section 
      className="relative min-h-screen overflow-hidden pt-20 font-['IBM_Plex_Sans']"
      style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)'
      }}
    >
      {/* IBM Plex Sans Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap');
      `}</style>

      {/* Carbon 16-Column Grid Container */}
      <div className="relative w-full max-w-[1584px] mx-auto px-6 md:px-8 lg:px-16 py-16 lg:py-24">
        {/* 
          CARBON 16-COLUMN GRID
          - Content: col-span-7 (approx 44%)
          - Visual: col-span-9 (approx 56%)
          - This maintains visual balance within Carbon's 16-col system
        */}
        <div className="grid grid-cols-16 gap-8 lg:gap-12 items-center min-h-[70vh]">
          
          {/* Left: Content (7 columns) */}
          <div className="col-span-16 lg:col-span-7 relative z-10">
            {/* Eyebrow - Carbon Style */}
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 mb-6">
              24/7 Network Operations Center
            </span>
            
            {/* Headline - IBM Plex Sans Bold */}
            <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Controlled Complexity.
              <br />
              <span className="text-cyan-400">Absolute Governance.</span>
            </h1>
            
            {/* Sub-head - IBM Plex Sans Regular */}
            <p 
              className="text-lg leading-relaxed mb-8 max-w-[500px]"
              style={{ color: '#94A3B8' }}
            >
              Enterprise infrastructure monitoring with millisecond precision. 
              We maintain the systems that power your business so you never have to worry about them.
            </p>
            
            {/* CTA Button - Carbon Primary Style */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-6 py-3.5 text-white font-semibold rounded-none transition-all duration-200 hover:brightness-110"
              style={{ 
                backgroundColor: '#0f62fe', // Carbon Blue-60
                boxShadow: '0 2px 8px rgba(15, 98, 254, 0.4)'
              }}
            >
              Schedule NOC Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          {/* Right: Visual (9 columns) */}
          <div className="col-span-16 lg:col-span-9 relative h-[400px] lg:h-[500px]">
            <LiveNetworkAnimation />
          </div>
        </div>
      </div>

      {/* Stats Bar - Full Width, Carbon Style */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-[1584px] mx-auto px-6 md:px-8 lg:px-16 py-6">
          {/* Carbon 4-column stat grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-white">99.99%</div>
              <div className="text-xs uppercase tracking-wider mt-1 font-medium" style={{ color: '#94A3B8' }}>Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">&lt;5min</div>
              <div className="text-xs uppercase tracking-wider mt-1 font-medium" style={{ color: '#94A3B8' }}>Alert Response</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-xs uppercase tracking-wider mt-1 font-medium" style={{ color: '#94A3B8' }}>NOC Coverage</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-xs uppercase tracking-wider mt-1 font-medium" style={{ color: '#94A3B8' }}>Enterprise Clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* Reduced Motion Support */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .core-pulse {
            animation: none !important;
          }
          .packet {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

// Main Infrastructure Page Component
const Infrastructure = () => {
  return (
    <div className="min-h-screen bg-[var(--cds-background)]">
      <Navigation />
      <main>
        <HeroVariant />
        
        {/* Additional sections will go here */}
        {/* - Services Overview */}
        {/* - Key Capabilities */}
        {/* - Case Studies */}
        {/* - CTA Section */}
        
      </main>
      <Footer />
    </div>
  );
};

export default Infrastructure;
