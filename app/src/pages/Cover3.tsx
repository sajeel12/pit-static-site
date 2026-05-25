import { useState } from 'react';
import { ArrowRight, Server, Cloud, Brain, Eye, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../sections/Footer';
import ClientLogos from '../sections/ClientLogos';
import Testimonials from '../sections/Testimonials';
import CaseStudies from '../sections/CaseStudies';
import About from '../sections/About';
import Delivery from '../sections/Delivery';
import Reliability from '../sections/Reliability';
import Partnerships from '../sections/Partnerships';
import Closing from '../sections/Closing';
import Contact from '../sections/Contact';
import ErrorBoundary from '../components/ErrorBoundary';

/**
 * Cover3 - Strategic Services Layout
 * 
 * Custom Hero + Strategic Services section with Observability-style cards.
 * 
 * Access at: /#/cover3
 */

// Service Card Component (Observability-style for pillars)
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  tags: string[];
  cta: string;
  ctaLink: string;
  badge?: string;
}

const ServiceCard = ({ icon, title, description, tags, cta, ctaLink, badge }: ServiceCardProps) => {
  return (
    <div className="group bg-white rounded-lg border border-gray-100 p-6 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
      {/* Icon and Title */}
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {badge && (
            <span className={`inline-block px-2 py-0.5 text-[10px] font-semibold uppercase rounded mt-1 ${
              badge === 'Emerging' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'
            }`}>
              {badge}
            </span>
          )}
        </div>
      </div>
      
      {/* Description with hover reveal */}
      <div className="text-sm text-gray-600 leading-relaxed">
        {description}
      </div>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5 mt-4">
        {tags.map((tag) => (
          <span key={tag} className="px-2.5 py-1 text-[10px] font-medium text-gray-500 bg-gray-100 rounded">
            {tag}
          </span>
        ))}
      </div>
      
      {/* CTA */}
      <Link 
        to={ctaLink}
        className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group-hover:gap-2"
      >
        {cta} <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};

// IBM-Style Abstract Pattern Component
const AbstractPattern = ({ type }: { type: string }) => {
  const patterns: Record<string, React.ReactNode> = {
    mlops: (
      <svg viewBox="0 0 80 50" className="w-20 h-12 opacity-50 group-hover:opacity-70 transition-opacity brightness-75">
        <circle cx="15" cy="25" r="3" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="40" cy="15" r="3" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="40" cy="35" r="3" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="65" cy="25" r="3" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <line x1="18" y1="25" x2="37" y2="15" stroke="currentColor" strokeWidth="0.8" />
        <line x1="18" y1="25" x2="37" y2="35" stroke="currentColor" strokeWidth="0.8" />
        <line x1="43" y1="15" x2="62" y2="25" stroke="currentColor" strokeWidth="0.8" />
        <line x1="43" y1="35" x2="62" y2="25" stroke="currentColor" strokeWidth="0.8" />
      </svg>
    ),
    aiops: (
      <svg viewBox="0 0 80 50" className="w-20 h-12 opacity-50 group-hover:opacity-70 transition-opacity brightness-75">
        <rect x="10" y="12" width="16" height="26" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <rect x="32" y="8" width="16" height="34" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <rect x="54" y="16" width="16" height="18" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <line x1="26" y1="25" x2="32" y2="25" stroke="currentColor" strokeWidth="0.8" />
        <line x1="48" y1="25" x2="54" y2="25" stroke="currentColor" strokeWidth="0.8" />
      </svg>
    ),
    agents: (
      <svg viewBox="0 0 80 50" className="w-20 h-12 opacity-50 group-hover:opacity-70 transition-opacity brightness-75">
        <polygon points="40,10 50,32 30,32" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <polygon points="20,18 30,40 10,40" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <polygon points="60,18 70,40 50,40" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <line x1="30" y1="32" x2="25" y2="36" stroke="currentColor" strokeWidth="0.8" />
        <line x1="50" y1="32" x2="55" y2="36" stroke="currentColor" strokeWidth="0.8" />
      </svg>
    ),
    edge: (
      <svg viewBox="0 0 80 50" className="w-20 h-12 opacity-50 group-hover:opacity-70 transition-opacity brightness-75">
        <circle cx="40" cy="25" r="12" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="40" cy="25" r="8" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="40" cy="25" r="4" fill="currentColor" opacity="0.4" />
        <line x1="15" y1="25" x2="28" y2="25" stroke="currentColor" strokeWidth="0.8" />
        <line x1="52" y1="25" x2="65" y2="25" stroke="currentColor" strokeWidth="0.8" />
      </svg>
    ),
    iot: (
      <svg viewBox="0 0 80 50" className="w-20 h-12 opacity-50 group-hover:opacity-70 transition-opacity brightness-75">
        <line x1="8" y1="38" x2="72" y2="38" stroke="currentColor" strokeWidth="0.8" />
        <line x1="12" y1="38" x2="20" y2="28" stroke="currentColor" strokeWidth="0.8" />
        <line x1="28" y1="38" x2="36" y2="18" stroke="currentColor" strokeWidth="0.8" />
        <line x1="44" y1="38" x2="52" y2="24" stroke="currentColor" strokeWidth="0.8" />
        <line x1="60" y1="38" x2="68" y2="14" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="20" cy="28" r="2" fill="currentColor" />
        <circle cx="36" cy="18" r="2" fill="currentColor" />
        <circle cx="52" cy="24" r="2" fill="currentColor" />
        <circle cx="68" cy="14" r="2" fill="currentColor" />
      </svg>
    ),
    finops: (
      <svg viewBox="0 0 80 50" className="w-20 h-12 opacity-50 group-hover:opacity-70 transition-opacity brightness-75">
        <rect x="16" y="18" width="12" height="20" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <rect x="34" y="12" width="12" height="26" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <rect x="52" y="22" width="12" height="16" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <line x1="12" y1="40" x2="68" y2="40" stroke="currentColor" strokeWidth="0.8" />
      </svg>
    ),
    observability: (
      <svg viewBox="0 0 80 50" className="w-20 h-12 opacity-50 group-hover:opacity-70 transition-opacity brightness-75">
        <circle cx="40" cy="25" r="10" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="40" cy="25" r="6" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="40" cy="25" r="3" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <line x1="40" y1="8" x2="40" y2="15" stroke="currentColor" strokeWidth="0.8" />
        <line x1="40" y1="35" x2="40" y2="42" stroke="currentColor" strokeWidth="0.8" />
        <line x1="22" y1="25" x2="30" y2="25" stroke="currentColor" strokeWidth="0.8" />
        <line x1="50" y1="25" x2="58" y2="25" stroke="currentColor" strokeWidth="0.8" />
      </svg>
    ),
    cicd: (
      <svg viewBox="0 0 80 50" className="w-20 h-12 opacity-50 group-hover:opacity-70 transition-opacity brightness-75">
        <circle cx="20" cy="16" r="3" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="40" cy="25" r="3" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="60" cy="34" r="3" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <line x1="23" y1="18" x2="37" y2="23" stroke="currentColor" strokeWidth="0.8" />
        <line x1="43" y1="27" x2="57" y2="32" stroke="currentColor" strokeWidth="0.8" />
        <rect x="16" y="38" width="48" height="6" fill="none" stroke="currentColor" strokeWidth="0.8" rx="1" />
      </svg>
    ),
  };
  
  return patterns[type] || patterns.mlops;
};

// IBM-Style Flip Card for Future Services
interface FlipCardProps {
  pattern: string;
  title: string;
  description: string;
  tags: string[];
  ctaLink: string;
  badge?: string;
}

const FlipCard = ({ pattern, title, description, tags, ctaLink, badge }: FlipCardProps) => {
  return (
    <Link 
      to={ctaLink}
      className="group relative h-56 bg-white hover:bg-blue-600 transition-all duration-300 p-4 rounded-sm overflow-hidden cursor-pointer block text-blue-600 group-hover:text-white"
    >
      {/* Header - Always visible */}
      <div className="flex items-start justify-between gap-2 relative z-10">
        <h3 className="text-base font-semibold text-gray-900 group-hover:text-white transition-colors leading-tight">
          {title}
        </h3>
        {badge && (
          <span className="text-[9px] px-1.5 py-0.5 rounded-sm transition-colors whitespace-nowrap flex-shrink-0 bg-gray-100 text-gray-600 group-hover:bg-white/20 group-hover:text-white">
            {badge}
          </span>
        )}
      </div>
      
      {/* Tags - Fixed height for alignment, hides on hover */}
      <div className="absolute inset-x-4 top-14 h-16 group-hover:opacity-0 transition-opacity duration-300">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* Pattern - Bottom left corner only, hides on hover */}
      <div className="absolute bottom-4 left-4 w-16 h-10 group-hover:opacity-0 transition-opacity duration-300">
        <AbstractPattern type={pattern} />
      </div>
      
      {/* Prominent Arrow - Bottom right corner, always visible */}
      <div className="absolute bottom-4 right-4 z-10">
        <div className="w-10 h-10 rounded-sm bg-blue-50 flex items-center justify-center group-hover:bg-white/20 transition-colors">
          <ArrowRight className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
        </div>
      </div>
      
      {/* Description - Hover state only (no tags) */}
      <div className="absolute inset-x-4 top-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-xs text-white leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
};

// Custom Services Section
const ServicesVariant = () => {
  return (
    <>
      {/* SECTION 1: Strategic Pillars */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-500 mb-4 block">
              Built for What Matters
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold text-[#0F172A] leading-tight tracking-tight mb-4">
              One Partner. Complete Accountability.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From foundational hardware to AI-driven intelligence.
            </p>
          </div>

          {/* Pillar Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Server className="w-5 h-5" />}
              title="Infrastructure"
              description={
                <>
                  <p className="font-semibold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">Leveraging our global alliances, we procure, deploy, and manage the physical assets that power your enterprise.</p>
                  <p className="text-gray-500 max-h-0 opacity-0 overflow-hidden group-hover:max-h-20 group-hover:opacity-100 group-hover:mt-2 transition-all duration-300">From the shipping to the data centre floor and final integration, your 24/7 uptime is our absolute accountability.</p>
                </>
              }
              tags={['Server Continuity', 'Data Centre', 'Hardware Support', 'Network Operations']}
              cta="Explore Infrastructure"
              ctaLink="/services/infrastructure"
            />
            <ServiceCard
              icon={<Cloud className="w-5 h-5" />}
              title="Cloud"
              description={
                <>
                  <p className="font-semibold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">Synchronized growth. Digital scale without the integration gap.</p>
                  <p className="text-gray-500 max-h-0 opacity-0 overflow-hidden group-hover:max-h-20 group-hover:opacity-100 group-hover:mt-2 transition-all duration-300">A unified bridge that connects your physical infrastructure to digital scale-zero vendor fragmentation, total operational ownership.</p>
                </>
              }
              tags={['Cost Optimisation', 'DevOps', 'Containers', 'Operations']}
              cta="Explore Cloud"
              ctaLink="/services/cloud"
            />
            <ServiceCard
              icon={<Brain className="w-5 h-5" />}
              title="AI: The Intelligence Layer"
              description={
                <>
                  <p className="font-semibold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">Break out of 'Pilot Purgatory' with hardware-integrated AI.</p>
                  <p className="text-gray-500 max-h-0 opacity-0 overflow-hidden group-hover:max-h-20 group-hover:opacity-100 group-hover:mt-2 transition-all duration-300">We engineer MLOps into your hardware foundation, moving AI from experimental pilots to production-grade assets.</p>
                </>
              }
              tags={['MLOps', 'AI Consulting', 'Data Observability', 'Model Training']}
              cta="Explore AI"
              ctaLink="/services/ai"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: Engineering for the Future */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400 mb-4 block">
              Extend Your Partnership
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight tracking-tight mb-4">
              Engineering for the Future
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Scaling capabilities without scaling complexity.
            </p>
          </div>

          {/* Future Services - IBM-Style 2x4 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <FlipCard
              pattern="mlops"
              title="MLOps"
              description="End-to-end machine learning operations from development to production deployment."
              tags={['Model Deployment', 'Pipeline Automation', 'Governance']}
              ctaLink="/services/mlops"
              badge="Emerging"
            />
            <FlipCard
              pattern="aiops"
              title="AIOps"
              description="AI-driven operations that automatically detect anomalies and correlate events."
              tags={['Anomaly Detection', 'Event Correlation', 'Automation']}
              ctaLink="/services/aiops"
              badge="Emerging"
            />
            <FlipCard
              pattern="agents"
              title="AI Agents"
              description="Autonomous systems that execute complex workflows without human intervention."
              tags={['LLM', 'Autonomous Workflows', 'Agents']}
              ctaLink="/services/ai-agents"
              badge="Emerging"
            />
            <FlipCard
              pattern="edge"
              title="Edge Computing"
              description="Process data where it's generated. Reduce latency, improve reliability."
              tags={['IoT', 'Low-latency', 'Distributed']}
              ctaLink="/services/edge-computing"
              badge="Emerging"
            />
            <FlipCard
              pattern="iot"
              title="IoT Analytics"
              description="Real-time analytics for connected devices and sensor networks."
              tags={['Streaming Data', 'Real-time', 'Sensors']}
              ctaLink="/services/iot-analytics"
              badge="Emerging"
            />
            <FlipCard
              pattern="finops"
              title="FinOps Maturity"
              description="AI-enabled cost intelligence at scale. Optimise spend across multi-cloud."
              tags={['Cost Intelligence', 'Governance', 'AI']}
              ctaLink="/services/finops"
              badge="Essential"
            />
            <FlipCard
              pattern="observability"
              title="Advanced Observability"
              description="Full-stack observability with distributed tracing and SRE practices."
              tags={['Distributed Tracing', 'SRE', 'Telemetry']}
              ctaLink="/services/advanced-observability"
              badge="Emerging"
            />
            <FlipCard
              pattern="cicd"
              title="K8s-Native CI/CD"
              description="GitOps-driven continuous delivery built for Kubernetes scale."
              tags={['GitOps', 'ArgoCD', 'Helm']}
              ctaLink="/services/kubernetes-cicd"
              badge="Emerging"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: Operations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-600 mb-4 block">
              24/7 Operations
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold text-[#0F172A] leading-tight tracking-tight mb-4">
              Observability & Support
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Full-stack monitoring with guaranteed response times.
            </p>
            <p className="text-xl text-blue-600 font-semibold max-w-2xl mx-auto mt-2">
              We keep your systems running.
            </p>
          </div>

          {/* Operations Cards - Two Column */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Observability Card - Left */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <p className="text-xs font-medium text-indigo-600 uppercase tracking-wide">Platform</p>
                  <h3 className="text-xl font-semibold text-gray-900">Full-Stack Observability</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Real-time visibility into infrastructure, applications, and logs. Distributed tracing and intelligent alerting across your entire stack.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                  Infrastructure monitoring
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                  Application tracing
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                  Log aggregation
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                  Custom dashboards
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Observability', 'Logging', 'Tracing', 'Alerting'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">{tag}</span>
                ))}
              </div>
            </div>

            {/* Support Card - Right */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-medium text-blue-600 uppercase tracking-wide">Service</p>
                  <h3 className="text-xl font-semibold text-gray-900">24/7 SLA Support</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Round-the-clock NOC with guaranteed response times. Cross-domain automation and incident management with escalation procedures.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  24/7 NOC coverage
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Guaranteed response times
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Cross-domain automation
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Incident management
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {['24/7 Support', 'AIOps', 'Network Monitoring', 'SLA'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Case Study */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <p className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-2">Featured Case Study</p>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Advanced Observability for Stock Exchange</h3>
                <p className="text-gray-600 mb-4">Trading infrastructure monitoring with 99.99% uptime SLA and 30-day immutable audit trail.</p>
                <Link to="/projects/case-study/financial-market-observability" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors">
                  Read the story <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900">99.99%</div>
                  <div className="text-xs text-indigo-600 uppercase tracking-wide mt-1">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900">30d</div>
                  <div className="text-xs text-indigo-600 uppercase tracking-wide mt-1">Audit Trail</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// The Live Network SVG Animation Component
const LiveNetworkAnimation = () => {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const [tooltip, setTooltip] = useState<{x: number, y: number, text: string} | null>(null);

  const nodes = [
    { id: 0, x: 150, y: 150, type: 'core', label: 'Core NOC', metric: 'Status: Active' },
    { id: 1, x: 280, y: 80, type: 'secondary', label: 'Karachi Hub', metric: 'Latency: 12ms' },
    { id: 2, x: 320, y: 180, type: 'secondary', label: 'Lahore DC', metric: 'Latency: 18ms' },
    { id: 3, x: 260, y: 260, type: 'secondary', label: 'Islamabad', metric: 'Latency: 24ms' },
    { id: 4, x: 100, y: 280, type: 'secondary', label: 'Client A', metric: 'Status: Secure' },
    { id: 5, x: 40, y: 200, type: 'secondary', label: 'Client B', metric: 'Status: Secure' },
    { id: 6, x: 60, y: 100, type: 'secondary', label: 'Cloud GW', metric: 'Throughput: 10Gbps' },
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
        viewBox="0 0 360 360" 
        className="w-full max-w-md h-auto"
        style={{ filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.2))' }}
      >
        <defs>
          {/* Glow filter for core node */}
          <filter id="coreGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Pulse animation */}
          <style>{`
            @keyframes pulse {
              0%, 100% { opacity: 0.6; transform: scale(1); }
              50% { opacity: 1; transform: scale(1.05); }
            }
            .core-pulse {
              animation: pulse 3s ease-in-out infinite;
              transform-origin: center;
            }
            @keyframes packet-flow {
              0% { offset-distance: 0%; opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { offset-distance: 100%; opacity: 0; }
            }
            .packet {
              animation: packet-flow 2s linear infinite;
            }
            .packet-delay-1 { animation-delay: 0.3s; }
            .packet-delay-2 { animation-delay: 0.6s; }
            .packet-delay-3 { animation-delay: 0.9s; }
            .packet-delay-4 { animation-delay: 1.2s; }
            .packet-delay-5 { animation-delay: 1.5s; }
            .packet-delay-6 { animation-delay: 1.8s; }
          `}</style>
        </defs>

        {/* Connection Lines */}
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
                stroke="#3B82F6"
                strokeWidth="1"
                opacity="0.2"
              />
              {/* Animated packet path */}
              <path
                id={`path-${idx}`}
                d={`M${fromNode.x},${fromNode.y} L${toNode.x},${toNode.y}`}
                fill="none"
                stroke="none"
              />
              {/* Data packet */}
              <circle
                r="3"
                fill="#06B6D4"
                className={`packet packet-delay-${idx}`}
                style={{
                  offsetPath: `path('M${fromNode.x},${fromNode.y} L${toNode.x},${toNode.y}')`,
                }}
              />
              {/* Return packet */}
              <circle
                r="2"
                fill="#3B82F6"
                className={`packet packet-delay-${idx}`}
                style={{
                  offsetPath: `path('M${toNode.x},${toNode.y} L${fromNode.x},${fromNode.y}')`,
                  animationDelay: `${0.3 + idx * 0.3}s`,
                }}
              />
            </g>
          );
        })}

        {/* Secondary Nodes */}
        {nodes.filter(n => n.type === 'secondary').map(node => (
          <g 
            key={node.id}
            onMouseEnter={(e) => handleNodeHover(e, node.id)}
            onMouseLeave={handleNodeLeave}
            className="cursor-pointer"
          >
            <circle
              cx={node.x}
              cy={node.y}
              r="8"
              fill="#1E293B"
              stroke={hoveredNode === node.id ? '#06B6D4' : '#3B82F6'}
              strokeWidth={hoveredNode === node.id ? '2' : '1'}
              className="transition-all duration-200"
            />
            <circle
              cx={node.x}
              cy={node.y}
              r="4"
              fill={hoveredNode === node.id ? '#06B6D4' : '#3B82F6'}
              opacity={hoveredNode === node.id ? '1' : '0.6'}
              className="transition-all duration-200"
            />
          </g>
        ))}

        {/* Core Node */}
        <g 
          className="core-pulse cursor-pointer"
          onMouseEnter={(e) => handleNodeHover(e, 0)}
          onMouseLeave={handleNodeLeave}
        >
          <circle
            cx={nodes[0].x}
            cy={nodes[0].y}
            r="20"
            fill="#0F172A"
            stroke="#06B6D4"
            strokeWidth="2"
            filter="url(#coreGlow)"
          />
          <circle
            cx={nodes[0].x}
            cy={nodes[0].y}
            r="12"
            fill="#06B6D4"
            opacity="0.3"
          />
          <circle
            cx={nodes[0].x}
            cy={nodes[0].y}
            r="6"
            fill="#06B6D4"
          />
        </g>
      </svg>

      {/* Tooltip */}
      {tooltip && (
        <div 
          className="fixed z-50 px-3 py-2 bg-gray-900 border border-cyan-500/30 rounded text-xs text-white whitespace-nowrap pointer-events-none"
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

const HeroVariant = () => {
  return (
    <section 
      className="relative min-h-screen overflow-hidden pt-20"
      style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)'
      }}
    >
      {/* 12-Column Grid Layout */}
      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[70vh]">
          
          {/* Left: Content (6 columns) */}
          <div className="lg:col-span-6 relative z-10">
            {/* Eyebrow */}
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 mb-6">
              24/7 Network Operations Center
            </span>
            
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[48px] font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Controlled Complexity.
              <br />
              <span className="text-slate-400">Absolute Governance.</span>
            </h1>
            
            {/* Sub-head */}
            <p 
              className="text-lg leading-relaxed mb-8 max-w-[500px]"
              style={{ color: '#94A3B8' }}
            >
              Enterprise infrastructure monitoring with millisecond precision. 
              We maintain the systems that power your business-so you never have to worry about them.
            </p>
            
            {/* CTA Button */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 text-white font-semibold rounded transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
              style={{ 
                backgroundColor: '#2563EB',
                boxShadow: '0 4px 14px rgba(37, 99, 235, 0.4)'
              }}
            >
              Schedule NOC Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          {/* Right: Visual (6 columns) */}
          <div className="lg:col-span-6 relative h-[400px] lg:h-[500px]">
            <LiveNetworkAnimation />
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-white">99.99%</div>
              <div className="text-xs uppercase tracking-wider mt-1" style={{ color: '#94A3B8' }}>Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">&lt;5min</div>
              <div className="text-xs uppercase tracking-wider mt-1" style={{ color: '#94A3B8' }}>Alert Response</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-xs uppercase tracking-wider mt-1" style={{ color: '#94A3B8' }}>NOC Coverage</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-xs uppercase tracking-wider mt-1" style={{ color: '#94A3B8' }}>Enterprise Clients</div>
            </div>
          </div>
        </div>
      </div>
      {/* Stack Layer Bar | Home: warm-neutral to steel-hint */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, #cbd5e1 0%, #64748b 100%)' }} />
    </section>
  );
};

const Cover3 = () => {
  return (
    <>
      <Navigation />
      <main>
        <ErrorBoundary fallback={<div className="h-96 bg-gray-50" />}>
          <HeroVariant />
        </ErrorBoundary>
        <ErrorBoundary fallback={<div className="h-32 bg-gray-50" />}>
          <ClientLogos />
        </ErrorBoundary>
        <ErrorBoundary>
          <ServicesVariant />
        </ErrorBoundary>
        <ErrorBoundary>
          <Testimonials />
        </ErrorBoundary>
        <ErrorBoundary>
          <CaseStudies />
        </ErrorBoundary>
        <ErrorBoundary>
          <About />
        </ErrorBoundary>
        <ErrorBoundary>
          <Delivery />
        </ErrorBoundary>
        <ErrorBoundary>
          <Reliability />
        </ErrorBoundary>
        <ErrorBoundary>
          <Partnerships />
        </ErrorBoundary>
        <ErrorBoundary>
          <Closing />
        </ErrorBoundary>
        <ErrorBoundary>
          <Contact />
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  );
};

export default Cover3;
