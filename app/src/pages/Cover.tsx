import { ArrowRight, Shield, Clock, Award, Users, Globe } from 'lucide-react';
import { 
  BareMetalServer, 
  Cloud, 
  Ai, 
  View, 
  Headphones, 
  Activity,
  CheckmarkFilled,
  WarningAlt
} from '@carbon/icons-react';
import { 
  DataScience,
  EventAutomation,
  Robotics,
  EdgeComputing
} from '@carbon/pictograms-react';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../sections/Footer';
import HeroGraphics from '../components/HeroGraphics';
import PartnerLogos from '../sections/PartnerLogos';
import ClientLogos from '../sections/ClientLogos';
import Testimonials from '../sections/Testimonials';
import CaseStudies from '../sections/CaseStudies';
import About from '../sections/About';
import Delivery from '../sections/Delivery';
import Reliability from '../sections/Reliability';
import Partnerships from '../sections/Partnerships';
import Closing from '../sections/Closing';
import Contact from '../sections/Contact';
import Differentiator from '../sections/Differentiator';
import ErrorBoundary from '../components/ErrorBoundary';
import FloatingPipNav from '../components/FloatingPipNav';
import '../styles/carbon-typography.css';

/**
 * Cover - Main Homepage Layout
 * 
 * Strategic Services layout with custom Hero and Observability-style cards.
 */

// Trust Tiles Component (inspired by Maximo trust bar)
const TrustTiles = () => {
  const tiles = [
    { icon: Shield, headline: 'Absolute Accountability', subtext: 'One partner, end-to-end ownership', color: '#0f62fe' },
    { icon: Clock, headline: '24/7 Operations', subtext: 'Guaranteed response times', color: '#24a148' },
    { icon: Award, headline: 'Certified Experts', subtext: 'British-trained technologists', color: '#6929c4' },
    { icon: Users, headline: '50+ Platforms Deployed', subtext: 'Proven enterprise scale', color: '#0f62fe' },
    { icon: Globe, headline: 'Global Supply Chain', subtext: 'Local deployment expertise', color: '#6929c4' },
    { icon: CheckmarkFilled, headline: 'Zero-Downtime Proven', subtext: 'Complex migrations delivered', color: '#24a148' },
  ];

  return (
    <section className="py-8 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {tiles.map((tile) => (
            <div key={tile.headline} className="group p-4 bg-gray-50 border border-gray-100 hover:border-[#0f62fe] hover:shadow-md transition-all cursor-default">
              <div className="w-10 h-10 bg-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <tile.icon className="w-5 h-5" style={{ color: tile.color }} />
              </div>
              <p className="text-[13px] text-gray-900 font-semibold leading-tight mb-1">{tile.headline}</p>
              <p className="text-[11px] text-gray-500">{tile.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Attention Block Component
const AttentionBlock = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-8">
          <span className="inline-block carbon-label-02 uppercase tracking-[0.16px] text-[#da1e28] mb-4">
            The Integration Gap
          </span>
          <h2 className="carbon-fluid-heading-05 text-gray-900 mb-4">
            Most enterprises work with <span className="text-[#da1e28]">5+ vendors</span> for a single deployment
          </h2>
          <p className="carbon-body-02 text-gray-600">
            Hardware from one. Cloud from another. AI from a third. When something breaks, everyone points fingers.
          </p>
        </div>
        
        <div className="p-6 border-l-4 border-[#da1e28] bg-red-50">
          <div className="flex items-start gap-4">
            <WarningAlt className="w-6 h-6 text-[#da1e28] flex-shrink-0 mt-0.5" />
            <div>
              <p className="carbon-heading-02 text-gray-900 mb-2">The Risk</p>
              <p className="carbon-body-02 text-gray-600">
                Fragmented accountability leads to delayed projects, budget overruns, and systems that don't talk to each other. 
                By the time issues surface, you're locked into contracts with no clear path forward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// How We Work Component
const HowWeWork = () => {
  const steps = [
    { step: '01', title: 'Discovery', desc: 'Deep-dive into your infrastructure, workflows, and strategic goals.', color: '#0f62fe' },
    { step: '02', title: 'Design', desc: 'Architect unified solutions spanning hardware, cloud, and AI.', color: '#6929c4' },
    { step: '03', title: 'Deliver', desc: 'End-to-end deployment with 24/7 accountability and optimisation.', color: '#24a148' },
  ];

  return (
    <section className="py-16 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <span className="carbon-label-02 uppercase tracking-[0.16px] text-[#0f62fe] mb-4 block">Engagement Model</span>
          <h2 className="carbon-fluid-heading-05 text-gray-900 mb-4">How We Work</h2>
          <p className="carbon-body-02 text-gray-600 max-w-2xl mx-auto">
            Risk-oriented approach with clear deliverables at each phase.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((item) => (
            <div key={item.step} className="relative p-6 bg-white border border-gray-100 hover:border-[#0f62fe] transition-colors">
              <span className="absolute top-4 right-4 carbon-heading-02" style={{ color: item.color }}>{item.step}</span>
              <h3 className="carbon-heading-02 text-gray-900 mb-2">{item.title}</h3>
              <p className="carbon-body-02 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Banner Component
const CTABanner = () => {
  return (
    <section className="py-16 bg-[#0f62fe]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="carbon-fluid-heading-05 text-white mb-4">
          Ready to eliminate vendor fragmentation?
        </h2>
        <p className="carbon-body-02 text-white/80 mb-8 max-w-2xl mx-auto">
          Schedule a discovery call. We'll assess your current infrastructure and show you how unified accountability reduces risk and accelerates delivery.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0f62fe] carbon-heading-02 hover:bg-gray-100 transition-colors"
          >
            Schedule Discovery Call
            <ArrowRight className="w-4 h-4" />
          </a>
          <a 
            href="tel:+442012345678"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white carbon-heading-02 hover:bg-white/10 transition-colors"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
};

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
    <div className="group bg-white rounded-lg border border-gray-100 p-6 hover:border-blue-200 hover:shadow-xl transition-all duration-300 carbon-font">
      {/* Icon and Title */}
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
          {icon}
        </div>
        <div>
          <h3 className="carbon-heading-02 text-gray-900">{title}</h3>
          {badge && (
            <span className={`inline-block px-2 py-0.5 carbon-label-02 mt-1 ${
              badge === 'Emerging' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'
            }`}>
              {badge}
            </span>
          )}
        </div>
      </div>
      
      {/* Description with hover reveal */}
      <div className="carbon-body-02 text-gray-600">
        {description}
      </div>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5 mt-4">
        {tags.map((tag) => (
          <span key={tag} className="px-2.5 py-1 carbon-label-02 text-gray-500 bg-gray-100">
            {tag}
          </span>
        ))}
      </div>
      
      {/* CTA */}
      <Link 
        to={ctaLink}
        className="inline-flex items-center gap-1 carbon-heading-02 text-blue-600 hover:text-blue-700 transition-colors group-hover:gap-2"
      >
        {cta} <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};

// IBM-Style Abstract Pattern Component - Uses Carbon Pictograms
const AbstractPattern = ({ type }: { type: string }) => {
  const pictograms: Record<string, React.ReactNode> = {
    mlops: <DataScience className="w-16 h-10 opacity-60 group-hover:opacity-80 transition-opacity" />,
    aiops: <EventAutomation className="w-16 h-10 opacity-60 group-hover:opacity-80 transition-opacity" />,
    agents: <Robotics className="w-16 h-10 opacity-60 group-hover:opacity-80 transition-opacity" />,
    edge: <EdgeComputing className="w-16 h-10 opacity-60 group-hover:opacity-80 transition-opacity" />,
    iot: <DataScience className="w-16 h-10 opacity-60 group-hover:opacity-80 transition-opacity" />,
    finops: <EventAutomation className="w-16 h-10 opacity-60 group-hover:opacity-80 transition-opacity" />,
    observability: <Robotics className="w-16 h-10 opacity-60 group-hover:opacity-80 transition-opacity" />,
    cicd: <EdgeComputing className="w-16 h-10 opacity-60 group-hover:opacity-80 transition-opacity" />,
  };
  
  return pictograms[type] || pictograms.mlops;
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
      className="group relative h-56 bg-white hover:bg-blue-600 transition-all duration-300 p-4 rounded-sm overflow-hidden cursor-pointer block text-blue-600 group-hover:text-white carbon-font"
    >
      {/* Header - Always visible */}
      <div className="flex items-start justify-between gap-2 relative z-10">
        <h3 className="carbon-heading-02 text-gray-900 group-hover:text-white transition-colors leading-tight">
          {title}
        </h3>
        {badge && (
          <span className="carbon-label-02 px-1.5 py-0.5 transition-colors whitespace-nowrap flex-shrink-0 bg-gray-100 text-gray-600 group-hover:bg-white/20 group-hover:text-white">
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
              className="px-2 py-0.5 bg-gray-100 text-gray-600 carbon-label-02"
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
        <p className="carbon-helper-text-02 text-white">
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
          {/* Header - Carbon Typography */}
          <div className="text-center mb-16 carbon-font">
            <span className="carbon-label-02 uppercase tracking-[0.16px] text-blue-500 mb-4 block">
              Built for What Matters
            </span>
            <h2 className="carbon-fluid-heading-05 text-[#0F172A] mb-4">
              One Partner. Complete Accountability.
            </h2>
            <p className="carbon-body-02 text-gray-600 max-w-2xl mx-auto">
              From foundational hardware to AI-driven intelligence.
            </p>
          </div>

          {/* Pillar Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              icon={<BareMetalServer className="w-5 h-5" />}
              title="Infrastructure"
              description={
                <>
                  <p className="font-semibold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">Leveraging our global alliances, we procure, deploy, and manage the physical assets that power your enterprise.</p>
                  <p className="text-gray-500 max-h-0 opacity-0 overflow-hidden group-hover:max-h-20 group-hover:opacity-100 group-hover:mt-2 transition-all duration-300">From the shipping to the data center floor and final integration, your 24/7 uptime is our absolute accountability.</p>
                </>
              }
              tags={['Server Continuity', 'Data Center', 'Hardware Support', 'Network Operations']}
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
              icon={<Ai className="w-5 h-5" />}
              title="AI"
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
      <section id="future" className="py-20 bg-[#0A2C50]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header - Carbon Typography */}
          <div className="text-center mb-12 carbon-font">
            <span className="carbon-label-02 uppercase tracking-[0.16px] text-blue-400 mb-4 block">
              Extend Your Partnership
            </span>
            <h2 className="carbon-fluid-heading-05 text-white mb-4">
              Engineering for the Future
            </h2>
            <p className="carbon-body-02 text-blue-200 max-w-2xl mx-auto">
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
          {/* Header - Carbon Typography */}
          <div className="text-center mb-16 carbon-font">
            <span className="carbon-label-02 uppercase tracking-[0.16px] text-indigo-600 mb-4 block">
              24/7 Operations
            </span>
            <h2 className="carbon-fluid-heading-05 text-[#0F172A] mb-4">
              Observability & Support
            </h2>
            <p className="carbon-body-02 text-gray-600 max-w-2xl mx-auto">
              Full-stack monitoring with guaranteed response times.
            </p>
            <p className="carbon-fluid-heading-04 text-indigo-600 max-w-2xl mx-auto mt-2">
              We keep your systems running.
            </p>
          </div>

          {/* Operations Cards - Two Column */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Observability Card - Left */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-8 carbon-font">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center">
                  <View className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <p className="carbon-label-02 uppercase text-indigo-600">Platform</p>
                  <h3 className="carbon-fluid-heading-03 text-gray-900">Full-Stack Observability</h3>
                </div>
              </div>
              <p className="carbon-body-02 text-gray-600 mb-6">
                Real-time visibility into infrastructure, applications, and logs. Distributed tracing and intelligent alerting across your entire stack.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 carbon-body-02 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                  Infrastructure monitoring
                </div>
                <div className="flex items-center gap-2 carbon-body-02 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                  Application tracing
                </div>
                <div className="flex items-center gap-2 carbon-body-02 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                  Log aggregation
                </div>
                <div className="flex items-center gap-2 carbon-body-02 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                  Custom dashboards
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Observability', 'Logging', 'Tracing', 'Alerting'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-indigo-100 text-indigo-700 carbon-label-02">{tag}</span>
                ))}
              </div>
            </div>

            {/* Support Card - Right */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 carbon-font">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="carbon-label-02 uppercase text-blue-600">Service</p>
                  <h3 className="carbon-fluid-heading-03 text-gray-900">24/7 SLA Support</h3>
                </div>
              </div>
              <p className="carbon-body-02 text-gray-600 mb-6">
                Round-the-clock NOC with guaranteed response times. Cross-domain automation and incident management with escalation procedures.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 carbon-body-02 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  24/7 NOC coverage
                </div>
                <div className="flex items-center gap-2 carbon-body-02 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Guaranteed response times
                </div>
                <div className="flex items-center gap-2 carbon-body-02 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Cross-domain automation
                </div>
                <div className="flex items-center gap-2 carbon-body-02 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Incident management
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {['24/7 Support', 'AIOps', 'Network Monitoring', 'SLA'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-700 carbon-label-02">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Case Study - Dark contrast with thumbnail */}
          <div className="bg-slate-900 rounded-xl p-6 md:p-8 relative overflow-hidden carbon-font">
            {/* Subtle gradient accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-600/10 to-transparent" />
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative">
              {/* Left: Thumbnail */}
              <div className="w-full md:w-48 h-32 bg-slate-800 rounded-lg border border-slate-700 flex-shrink-0 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-indigo-500/20 via-slate-800 to-blue-500/20 flex items-center justify-center">
                  <Activity className="w-10 h-10 text-indigo-400/50" />
                </div>
              </div>
              
              {/* Middle: Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 carbon-label-02">Featured Case Study</span>
                </div>
                <h3 className="carbon-heading-03 text-white mb-2">Advanced Observability for Stock Exchange</h3>
                <p className="text-slate-400 carbon-body-02 mb-4">Trading infrastructure monitoring with 99.99% uptime SLA and 30-day immutable audit trail.</p>
                <Link to="/projects/case-study/financial-market-observability" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 carbon-heading-02 transition-colors">
                  Read the full story <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              {/* Right: Stats */}
              <div className="flex gap-8 md:gap-10 border-l border-slate-700 pl-8">
                <div className="text-center">
                  <div className="carbon-fluid-heading-03 text-white">99.99%</div>
                  <div className="carbon-label-02 text-indigo-400 uppercase mt-1">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="carbon-fluid-heading-03 text-white">30d</div>
                  <div className="carbon-label-02 text-indigo-400 uppercase mt-1">Audit Trail</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const HeroVariant = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20 carbon-font">
      {/* IBM-Style Hero Graphics */}
      <HeroGraphics />

      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="max-w-3xl lg:pl-6 relative">
          {/* Slot Accent Line */}
          <div className="absolute -left-2 top-[3.2rem] h-[130px] w-0.5 bg-gradient-to-b from-[#0f62fe] to-[#8a3ffc] animate-slot-draw hidden lg:block" />
          
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#24a148] rounded-full animate-pulse" />
            <span className="carbon-label-02 text-[#0f62fe]">Now accepting enterprise engagements for Q3</span>
          </div>
          
          {/* Heading - Carbon Fluid Display */}
          <h1 className="carbon-fluid-display-03 text-[#161616] mb-6 relative">
            <span className="block">Unified Systems</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0f62fe] to-[#8a3ffc]">Absolute Accountability</span>
          </h1>
          
          {/* Sub-Heading - Carbon Fluid Heading */}
          <p className="carbon-fluid-heading-03 text-[#525252] mb-5">
            Hardware Infrastructure. <span className="text-[#0f62fe]">Cloud Scalability.</span> <span className="text-[#6929c4]">AI Intelligence.</span>
          </p>
          
          {/* Body Text - Carbon Body */}
          <div className="max-w-2xl mb-8">
            <p className="carbon-body-02 text-[#525252]">
              By bridging global supply chains with on-the-ground expertise, we engineer the infrastructure that powers your transformation with absolute accountability
            </p>
          </div>
          
          {/* Process Steps - Visual Pathway */}
          <div className="flex flex-wrap items-center gap-1 carbon-label-02 mb-8">
            {['Design', 'Procure', 'Deploy', 'Integrate', 'Manage', 'Optimise'].map((step, i) => (
              <div key={step} className="flex items-center">
                <span className={`px-2 py-1 transition-colors ${i === 5 ? 'bg-[#0f62fe] text-white rounded' : 'text-[#6f6f6f]'}`}>
                  {step}
                </span>
                {i < 5 && <span className="text-[#c6c6c6] mx-1">→</span>}
              </div>
            ))}
          </div>
          
          {/* CTAs - Enhanced with depth and glow */}
          <div className="flex flex-wrap items-stretch gap-4">
            <a
              href="#services"
              className="group inline-flex items-center gap-3 px-8 h-14 bg-gradient-to-r from-[#0f62fe] to-[#4589ff] text-white carbon-heading-02 hover:from-[#0353e9] hover:to-[#0f62fe] transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
            >
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/about"
              className="group inline-flex items-center gap-3 px-6 h-14 bg-white/80 backdrop-blur-sm border border-gray-200 text-[#525252] carbon-body-02 hover:bg-white hover:border-[#0f62fe]/30 hover:shadow-lg transition-all duration-300"
            >
              <img 
                src="/team/david_headshot.jpg" 
                alt="David Pridmore" 
                className="w-8 h-8 rounded-full object-cover border-2 border-[#c6c6c6] group-hover:border-[#0f62fe] transition-colors"
              />
              Meet David Pridmore, CEO & CTO
            </Link>
          </div>
        </div>
        
        {/* Animation styles */}
        <style>{`
          @keyframes slot-draw {
            from { transform: scaleY(0); }
            to { transform: scaleY(1); }
          }
          .animate-slot-draw {
            animation: slot-draw 1.5s ease-out forwards;
            transform-origin: top;
          }
          
          @keyframes float-slow {
            0%, 100% { transform: translateY(0) translateX(0); }
            25% { transform: translateY(-20px) translateX(10px); }
            50% { transform: translateY(-10px) translateX(-10px); }
            75% { transform: translateY(-30px) translateX(5px); }
          }
          
          @keyframes float-medium {
            0%, 100% { transform: translateY(0) translateX(0); }
            33% { transform: translateY(15px) translateX(-15px); }
            66% { transform: translateY(-10px) translateX(10px); }
          }
          
          @keyframes float-fast {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(2deg); }
          }
          
          @keyframes float-card {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          .animate-float-slow {
            animation: float-slow 12s ease-in-out infinite;
          }
          
          .animate-float-medium {
            animation: float-medium 8s ease-in-out infinite;
          }
          
          .animate-float-fast {
            animation: float-fast 4s ease-in-out infinite;
          }
          
          .animate-float-card {
            animation: float-card 6s ease-in-out infinite;
          }
          
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
        `}</style>
        
        {/* Stats - Plain text with colored numbers */}
        <div className="absolute bottom-24 right-8 lg:right-12 hidden lg:flex gap-12 carbon-font">
          <div className="text-center">
            <div className="carbon-fluid-heading-05 text-[#0f62fe]">14+</div>
            <div className="carbon-label-02 text-[#a8a8a8] uppercase mt-1">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="carbon-fluid-heading-05 text-[#8a3ffc]">50+</div>
            <div className="carbon-label-02 text-[#a8a8a8] uppercase mt-1">Platforms Deployed</div>
          </div>
          <div className="text-center">
            <div className="carbon-fluid-heading-05 text-[#24a148]">24/7</div>
            <div className="carbon-label-02 text-[#a8a8a8] uppercase mt-1">Support Coverage</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 carbon-font">
        <span className="carbon-label-02 uppercase">Scroll</span>
        <div className="w-px h-6 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  );
};

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'services', label: 'Solutions' },
  { id: 'future', label: 'Emerging' },
  { id: 'testimonials', label: 'Clients' },
  { id: 'differentiator', label: 'Accountability' },
  { id: 'case-studies', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'delivery', label: 'Delivery' },
  { id: 'reliability', label: 'Support' },
  { id: 'partnerships', label: 'Partners' },
  { id: 'contact', label: 'Contact' },
];

const Cover = () => {
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  
  return (
    <>
      <Navigation activeMegaMenu={activeMegaMenu} setActiveMegaMenu={setActiveMegaMenu} />
      <FloatingPipNav sections={sections} hidden={!!activeMegaMenu} />
      <main>
        <ErrorBoundary fallback={<div className="h-96 bg-gray-50" />}>
          <HeroVariant />
        </ErrorBoundary>
        <ErrorBoundary fallback={<div className="h-32 bg-gray-50" />}>
          <div id="partners-ticker">
            <PartnerLogos />
          </div>
        </ErrorBoundary>
        <ErrorBoundary>
          <TrustTiles />
        </ErrorBoundary>
        <ErrorBoundary>
          <AttentionBlock />
        </ErrorBoundary>
        <ErrorBoundary>
          <ServicesVariant />
        </ErrorBoundary>
        <ErrorBoundary>
          <div id="testimonials">
            <Testimonials />
          </div>
        </ErrorBoundary>
        <ErrorBoundary fallback={<div className="h-32 bg-gray-50" />}>
          <div id="clients-ticker">
            <ClientLogos />
          </div>
        </ErrorBoundary>
        <ErrorBoundary>
          <div id="differentiator">
            <Differentiator />
          </div>
        </ErrorBoundary>
        <ErrorBoundary>
          <div id="case-studies">
            <CaseStudies />
          </div>
        </ErrorBoundary>
        <ErrorBoundary>
          <div id="about">
            <About />
          </div>
        </ErrorBoundary>
        <ErrorBoundary>
          <div id="delivery">
            <Delivery />
          </div>
        </ErrorBoundary>
        <ErrorBoundary>
          <div id="reliability">
            <Reliability />
          </div>
        </ErrorBoundary>
        <ErrorBoundary>
          <div id="partnerships">
            <Partnerships />
          </div>
        </ErrorBoundary>
        <ErrorBoundary>
          <HowWeWork />
        </ErrorBoundary>
        <ErrorBoundary>
          <CTABanner />
        </ErrorBoundary>
        <ErrorBoundary>
          <Closing />
        </ErrorBoundary>
        <ErrorBoundary>
          <div id="contact">
            <Contact />
          </div>
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  );
};

export default Cover;
