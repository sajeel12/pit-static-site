import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { 
  DataBase,
  Network_1,
  Security,
  Activity
} from '@carbon/icons-react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';
import ClientLogos from '../../sections/ClientLogos';
import ErrorBoundary from '../../components/ErrorBoundary';
import '../../styles/carbon-typography.css';

/**
 * Infrastructure Hub Landing Page
 * 
 * Hero Section: Custom cube-based graphics with Green/Teal theme
 * - White background with InfrastructureCubeGraphics SVG
 * - IBM Plex Sans typography
 * - Green accent colors (distinct from main Cover page)
 * - Left side navigation menu
 */

// Custom Cube Graphics Component for Infrastructure
// Distinct from HeroGraphics - uses cubes instead of orbs, green/teal theme
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
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-2deg); }
        }
        
        @keyframes float3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
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
        
        .infra-graphics .float-1 {
          animation: float 8s ease-in-out infinite;
        }
        
        .infra-graphics .float-2 {
          animation: floatReverse 10s ease-in-out infinite;
        }
        
        .infra-graphics .float-3 {
          animation: float3 12s ease-in-out infinite;
        }
        
        .infra-graphics .pulse {
          animation: pulse 6s ease-in-out infinite;
        }
        
        .infra-graphics .rotate-slow {
          animation: rotate 60s linear infinite;
        }
        
        .infra-graphics .drift {
          animation: drift 15s ease-in-out infinite;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .infra-graphics * {
            animation: none !important;
          }
        }
      `}</style>

      <svg 
        className={`infra-graphics w-full h-full ${animationClass}`}
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Green-Teal Gradient for Infrastructure Theme */}
          <linearGradient id="cubeGreen1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#24a148" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#42be65" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#009d9a" stopOpacity="0.45" />
          </linearGradient>
          
          <linearGradient id="cubeTeal1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#009d9a" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#08bdba" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3ddbd9" stopOpacity="0.4" />
          </linearGradient>
          
          <linearGradient id="lineGreen" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#24a148" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#009d9a" stopOpacity="0.3" />
          </linearGradient>
          
          <filter id="glowGreen">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Background grid pattern */}
        <g className="pulse" opacity="0.2">
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

        {/* Large floating cube - top right */}
        <g className="float-1" transform="translate(860, 110)">
          {/* Front face */}
          <rect width="180" height="180" fill="url(#cubeGreen1)" rx="4" />
          {/* Right face (3D depth) */}
          <polygon points="180,0 200,-20 200,160 180,180" fill="url(#cubeGreen1)" opacity="0.8" />
          {/* Top face (3D depth) */}
          <polygon points="0,0 20,-20 200,-20 180,0" fill="url(#cubeGreen1)" opacity="0.6" />
        </g>

        {/* Secondary cube - bottom left */}
        <g className="float-2" transform="translate(140, 540)">
          <rect width="120" height="120" fill="url(#cubeTeal1)" rx="4" />
          <polygon points="120,0 140,-15 140,105 120,120" fill="url(#cubeTeal1)" opacity="0.8" />
          <polygon points="0,0 20,-15 140,-15 120,0" fill="url(#cubeTeal1)" opacity="0.6" />
        </g>

        {/* Small accent cube - middle right */}
        <g className="float-3" transform="translate(1010, 460)" opacity="0.7">
          <rect width="80" height="80" fill="url(#cubeGreen1)" rx="2" />
          <polygon points="80,0 95,-12 95,68 80,80" fill="url(#cubeGreen1)" opacity="0.8" />
          <polygon points="0,0 15,-12 95,-12 80,0" fill="url(#cubeGreen1)" opacity="0.6" />
        </g>

        {/* Geometric rings - green theme */}
        <g className="rotate-slow" transform-origin="900 300">
          <ellipse
            cx="900"
            cy="300"
            rx="200"
            ry="120"
            fill="none"
            stroke="url(#lineGreen)"
            strokeWidth="1"
            opacity="0.4"
          />
          <ellipse
            cx="900"
            cy="300"
            rx="240"
            ry="150"
            fill="none"
            stroke="url(#lineGreen)"
            strokeWidth="0.5"
            opacity="0.2"
          />
        </g>

        {/* Flowing curved lines - green */}
        <g className="drift" opacity="0.5">
          <path
            d="M-100 400 Q 200 200, 500 400 T 1100 400"
            fill="none"
            stroke="url(#lineGreen)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M-100 450 Q 200 250, 500 450 T 1100 450"
            fill="none"
            stroke="url(#lineGreen)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.7"
          />
        </g>

        {/* Small accent squares (representing servers/racks) */}
        <g className="pulse">
          <rect x="700" y="150" width="8" height="8" fill="#24a148" opacity="0.6" rx="1" />
          <rect x="800" y="250" width="10" height="10" fill="#009d9a" opacity="0.5" rx="1" />
          <rect x="1000" y="350" width="6" height="6" fill="#24a148" opacity="0.7" rx="1" />
          <rect x="750" y="450" width="8" height="8" fill="#42be65" opacity="0.5" rx="1" />
          <rect x="1100" y="200" width="8" height="8" fill="#009d9a" opacity="0.6" rx="1" />
          <rect x="600" y="300" width="6" height="6" fill="#24a148" opacity="0.7" rx="1" />
        </g>

        {/* Network connection nodes */}
        <g className="float-2" opacity="0.3" transform="translate(1000, 100)">
          <rect width="40" height="30" fill="none" stroke="#24a148" strokeWidth="1.5" rx="2" />
          <line x1="10" y1="0" x2="10" y2="30" stroke="#24a148" strokeWidth="0.5" />
          <line x1="20" y1="0" x2="20" y2="30" stroke="#24a148" strokeWidth="0.5" />
          <line x1="30" y1="0" x2="30" y2="30" stroke="#24a148" strokeWidth="0.5" />
        </g>

        <g className="float-1" opacity="0.25" transform="translate(150, 200)">
          <rect width="30" height="25" fill="none" stroke="#009d9a" strokeWidth="1" rx="2" />
          <line x1="8" y1="0" x2="8" y2="25" stroke="#009d9a" strokeWidth="0.5" />
          <line x1="15" y1="0" x2="15" y2="25" stroke="#009d9a" strokeWidth="0.5" />
          <line x1="22" y1="0" x2="22" y2="25" stroke="#009d9a" strokeWidth="0.5" />
        </g>

        {/* Corner accents - green theme */}
        <g opacity="0.1">
          <path
            d="M 0 0 L 100 0 L 0 100 Z"
            fill="url(#cubeGreen1)"
          />
          <path
            d="M 1200 800 L 1100 800 L 1200 700 Z"
            fill="url(#cubeTeal1)"
          />
        </g>
      </svg>
    </div>
  );
};

// Section Registry - Single source of truth
const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'process', label: 'Our Process' },
  { id: 'cases', label: 'Case Studies' },
  { id: 'contact', label: 'Contact' }
] as const;

// Hero Section Component - Cube Graphics with Green/Teal Theme
const HeroVariant = () => {
  return (
    <section id="overview" className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20 font-['IBM_Plex_Sans']">
      {/* IBM Plex Sans Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');
      `}</style>
      
      {/* Infrastructure Cube Graphics - Green/Teal Theme (distinct from Cover) */}
      <InfrastructureCubeGraphics />

      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="max-w-3xl">
          {/* Eyebrow - Green accent */}
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-[#24a148] mb-6">
            Infrastructure Services
          </span>
          
          {/* Heading - Green to Teal gradient */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#161616] mb-6 leading-[1.1] tracking-tight">
            <span className="block">Enterprise Infrastructure.</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#24a148] to-[#009d9a]">Absolute Reliability.</span>
          </h1>
          
          {/* Sub-Heading - Green accents */}
          <p className="text-lg sm:text-xl text-[#525252] mb-5 font-light tracking-wide">
            Server Continuity. <span className="text-[#24a148]">Data Center Operations.</span> <span className="text-[#009d9a]">24/7 Hardware Support.</span>
          </p>
          
          {/* Body Text */}
          <div className="max-w-2xl mb-8">
            <p className="text-base sm:text-lg text-[#525252] leading-relaxed">
              From procurement to deployment, management to optimisation—we provide end-to-end infrastructure services that keep your enterprise running. No gaps, no surprises, absolute accountability.
            </p>
          </div>
          
          {/* Process Steps */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-[#6f6f6f] mb-8">
            <span>Assess</span>
            <span className="text-[#c6c6c6]">→</span>
            <span>Design</span>
            <span className="text-[#c6c6c6]">→</span>
            <span>Procure</span>
            <span className="text-[#c6c6c6]">→</span>
            <span>Deploy</span>
            <span className="text-[#c6c6c6]">→</span>
            <span>Manage</span>
            <span className="text-[#c6c6c6]">→</span>
            <span className="text-[#0f62fe] font-medium">Optimise</span>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#capabilities"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#24a148] text-white font-semibold hover:bg-[#1a7a38] transition-all duration-300"
            >
              Explore Infrastructure
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 border border-[#161616] text-[#161616] font-medium hover:bg-[#f4f4f4] transition-all duration-300"
            >
              <img 
                src="/david_headshot.jpg" 
                alt="David Pridmore" 
                className="w-8 h-8 rounded-full object-cover border-2 border-[#0f62fe]"
              />
              Speak with an Infrastructure Expert
            </Link>
          </div>
        </div>
        
        {/* Stats - Positioned absolute bottom right */}
        <div className="absolute bottom-24 right-8 lg:right-12 hidden lg:flex gap-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#161616]">99.99%</div>
            <div className="text-xs text-[#6f6f6f] uppercase tracking-wide mt-1">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#161616]">24/7</div>
            <div className="text-xs text-[#6f6f6f] uppercase tracking-wide mt-1">NOC Coverage</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#161616]">&lt;4hrs</div>
            <div className="text-xs text-[#6f6f6f] uppercase tracking-wide mt-1">Response Time</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6f6f6f]">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-6 bg-gradient-to-b from-[#6f6f6f] to-transparent" />
      </div>
    </section>
  );
};

// Capabilities Section
const CapabilitiesSection = () => {
  const capabilities = [
    {
      icon: <DataBase className="w-6 h-6" />,
      title: 'Server Continuity',
      description: 'Proactive monitoring and maintenance of physical and virtual server infrastructure. We prevent failures before they impact your operations.',
      tags: ['Hardware Health', 'Virtualization', 'Backup Systems']
    },
    {
      icon: <Network_1 className="w-6 h-6" />,
      title: 'Data Center Operations',
      description: 'Full-stack data center management including power, cooling, networking, and physical security. Your critical assets in safe hands.',
      tags: ['DCIM', 'Power Management', 'Environmental Controls']
    },
    {
      icon: <Security className="w-6 h-6" />,
      title: 'Hardware Support',
      description: 'Multi-vendor hardware support with certified engineers. From break-fix to proactive replacement, we keep your stack running.',
      tags: ['Break-Fix', 'SLA Support', 'Spare Management']
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Network Operations',
      description: '24/7 network monitoring and management. Real-time visibility into performance, with rapid response to anomalies.',
      tags: ['NOC', 'Performance Monitoring', 'Incident Response']
    }
  ];

  return (
    <section id="capabilities" className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#0f62fe] mb-4 block">
            What We Deliver
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#161616] leading-tight tracking-tight mb-4">
            Infrastructure Capabilities
          </h2>
          <p className="text-lg text-[#525252] max-w-2xl mx-auto">
            End-to-end services that cover every aspect of your infrastructure lifecycle.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="bg-white rounded-lg border border-gray-100 p-8 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-[#0f62fe]">
                  {cap.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#161616] mb-2">{cap.title}</h3>
                  <p className="text-[#525252] leading-relaxed">{cap.description}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {cap.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 text-[10px] font-medium text-[#525252] bg-gray-100 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Solutions Section
const SolutionsSection = () => {
  const solutions = [
    {
      title: 'Huawei Enterprise Infrastructure',
      description: 'As a certified Huawei Enterprise Partner, we design, deploy, and manage Huawei server, storage, and networking solutions.',
      features: ['Certified Engineers', 'Direct Vendor Support', 'Spare Parts Inventory']
    },
    {
      title: 'Multi-Vendor Support',
      description: 'One partner for all your hardware—Dell, HP, IBM, Cisco, and more. Simplified support, single point of accountability.',
      features: ['Unified SLAs', 'Cross-Platform Expertise', 'Consolidated Reporting']
    },
    {
      title: 'Cloud-Ready Infrastructure',
      description: 'Infrastructure designed for hybrid and multi-cloud deployments. Seamless integration with AWS, Azure, and private cloud.',
      features: ['Hybrid Architecture', 'Cloud Connect', 'Workload Portability']
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#0f62fe] mb-4 block">
            Solutions
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#161616] leading-tight tracking-tight mb-4">
            Infrastructure Solutions
          </h2>
          <p className="text-lg text-[#525252] max-w-2xl mx-auto">
            Tailored solutions for enterprise-grade infrastructure challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((sol, idx) => (
            <div key={idx} className="border-t-4 border-[#0f62fe] pt-8">
              <h3 className="text-2xl font-semibold text-[#161616] mb-4">{sol.title}</h3>
              <p className="text-[#525252] mb-6 leading-relaxed">{sol.description}</p>
              <ul className="space-y-2">
                {sol.features.map(feat => (
                  <li key={feat} className="flex items-center gap-2 text-sm text-[#525252]">
                    <span className="w-1.5 h-1.5 bg-[#24a148] rounded-full" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Process Section
const ProcessSection = () => {
  const steps = [
    { num: '01', title: 'Assessment', desc: 'Audit current infrastructure, identify risks, document requirements.' },
    { num: '02', title: 'Design', desc: 'Architecture planning, vendor selection, capacity forecasting.' },
    { num: '03', title: 'Procurement', desc: 'Leverage our Huawei and vendor partnerships for best pricing.' },
    { num: '04', title: 'Deployment', desc: 'Professional installation, configuration, and integration.' },
    { num: '05', title: 'Management', desc: '24/7 monitoring, proactive maintenance, break-fix support.' },
    { num: '06', title: 'Optimisation', desc: 'Continuous improvement, capacity planning, lifecycle management.' }
  ];

  return (
    <section id="process" className="py-20 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#0f62fe] mb-4 block">
            How We Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white leading-tight tracking-tight mb-4">
            Our Process
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A proven methodology that ensures consistent, reliable outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-6 hover:border-[#0f62fe]/50 transition-colors">
              <span className="text-4xl font-bold text-[#0f62fe]">{step.num}</span>
              <h3 className="text-xl font-semibold text-white mt-4 mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Case Study Teaser
const CaseStudySection = () => {
  return (
    <section id="cases" className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-white rounded-lg border border-gray-100 p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#0f62fe] mb-4 block">
                Featured Case Study
              </span>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#161616] mb-4">
                99.99% Uptime for Pakistan's Largest Telecom
              </h2>
              <p className="text-[#525252] mb-6 leading-relaxed">
                Deployed and manage a multi-site infrastructure spanning 3 data centers, 
                supporting 60+ million subscribers with zero unplanned downtime in 3 years.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div>
                  <span className="text-3xl font-bold text-[#0f62fe]">99.99%</span>
                  <p className="text-sm text-[#6f6f6f]">Uptime Achieved</p>
                </div>
                <div>
                  <span className="text-3xl font-bold text-[#0f62fe]">3</span>
                  <p className="text-sm text-[#6f6f6f]">Data Centers</p>
                </div>
                <div>
                  <span className="text-3xl font-bold text-[#0f62fe]">60M+</span>
                  <p className="text-sm text-[#6f6f6f]">Subscribers Supported</p>
                </div>
              </div>
              <Link 
                to="/projects"
                className="inline-flex items-center gap-2 text-[#0f62fe] font-semibold hover:gap-3 transition-all"
              >
                View All Case Studies <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <span className="text-gray-400">Case Study Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section id="contact" className="py-20 bg-[#24a148]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
          Ready to Strengthen Your Infrastructure?
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Schedule a free infrastructure assessment. We'll identify risks, gaps, and 
          optimisation opportunities—no obligation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0f62fe] font-semibold hover:bg-gray-100 transition-all"
          >
            Schedule Infrastructure Assessment
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

// Main Infrastructure Hub Page
const InfrastructureHub = () => {
  const [activeSection, setActiveSection] = useState('overview');
  
  // Scroll spy for navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      for (const item of SECTIONS) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        {/* Hero - Full width, no side menu */}
        <ErrorBoundary fallback={<div className="h-96 bg-gray-50" />}>
          <HeroVariant />
        </ErrorBoundary>

        {/* Client Logos */}
        <ErrorBoundary fallback={<div className="h-32 bg-gray-50" />}>
          <ClientLogos />
        </ErrorBoundary>

        {/* Main Content with Side Navigation */}
        <div className="border-t border-[var(--cds-border-subtle)]">
          <div className="max-w-[1584px] mx-auto">
            <div className="flex">
              
              {/* Desktop Side Menu */}
              <aside className="hidden xl:block w-64 flex-shrink-0">
                <nav className="sticky top-20 pt-8 pb-8 border-r border-[var(--cds-border-subtle)] h-[calc(100vh-5rem)]">
                  <ul className="space-y-0.5">
                    {SECTIONS.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className={`w-full text-left px-4 py-2 text-sm transition-colors border-l-[3px] ${
                            activeSection === item.id
                              ? 'text-[var(--cds-text-primary)] border-[#24a148] bg-[#24a148]/5 font-semibold'
                              : 'text-[var(--cds-text-secondary)] border-transparent hover:text-[var(--cds-text-primary)] hover:bg-[var(--cds-layer-hover)]'
                          }`}
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>

              {/* Content Area */}
              <div className="flex-1 min-w-0">
                <ErrorBoundary fallback={<div className="h-96 bg-gray-50" />}>
                  <CapabilitiesSection />
                </ErrorBoundary>
                
                <ErrorBoundary fallback={<div className="h-96 bg-gray-50" />}>
                  <SolutionsSection />
                </ErrorBoundary>
                
                <ErrorBoundary fallback={<div className="h-96 bg-gray-50" />}>
                  <ProcessSection />
                </ErrorBoundary>
                
                <ErrorBoundary fallback={<div className="h-96 bg-gray-50" />}>
                  <CaseStudySection />
                </ErrorBoundary>
                
                <ErrorBoundary fallback={<div className="h-96 bg-gray-50" />}>
                  <CTASection />
                </ErrorBoundary>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default InfrastructureHub;
