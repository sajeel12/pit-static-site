import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Server, Phone, Clock, Shield, AlertTriangle } from 'lucide-react';
import { View } from '@carbon/icons-react';

import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';
import ClientLogos from '../../sections/ClientLogos';
import PartnerLogos from '../../sections/PartnerLogos';
import ErrorBoundary from '../../components/ErrorBoundary';
import InfrastructureHeroGraphics from '../../components/InfrastructureHeroGraphics';
import '../../styles/carbon-typography.css';

/**
 * Infrastructure Hub Landing Page
 * 
 * High-conversion page for Server Continuity Suite + Data Centre Services
 * Built from uploaded content documents
 */

// Section Registry
const SECTIONS = [
  { id: 'infrastructure-hero', label: 'Overview' },
  { id: 'problem', label: 'The Problem' },
  { id: 'suite', label: 'Server Suite' },
  { id: 'datacentre', label: 'Data Centre' },
  { id: 'process', label: 'How It Works' },
  { id: 'cases', label: 'Case Studies' },
  { id: 'contact', label: 'Contact' }
] as const;

// HERO SECTION
const HeroVariant = () => {
  return (
    <section id="infrastructure-hero" className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20 carbon-font">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
      
      <InfrastructureHeroGraphics />

      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-medium text-[#475569] uppercase tracking-wide">THE SERVER EXPERTS</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Server Continuity
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#475569] to-[#64748b]">
              Without Compromise
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            From uncertainty to continuity-one partner across your entire server lifecycle. 
            Audit, support, extend, or refresh. All with local engineers and same-day spares.
          </p>
          
          {/* 4-Stage Portfolio */}
          <div className="flex flex-wrap gap-3 mb-8">
            {['ServerAudit™', 'ServerSure™', 'ServerLife Extend™', 'ModServe™'].map((service) => (
              <span key={service} className="px-3 py-1.5 rounded-full text-sm font-medium bg-slate-100 text-[#475569]">
                {service}
              </span>
            ))}
          </div>
          
          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#suite"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25"
            >
              Explore Server Suite
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold hover:border-blue-600 hover:text-blue-600 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call an Expert
            </Link>
          </div>
        </div>
        
        {/* Stats */}
        <div className="absolute bottom-24 right-8 lg:right-12 hidden lg:flex gap-8">
          {[
            { value: '99.99%', label: 'Uptime SLA' },
            { value: '4hrs', label: 'Response Time' },
            { value: '6+', label: 'Enterprise Clients' }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-[#475569]">{stat.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Stack Layer Bar | Infrastructure: steel-start */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, #e2e8f0 0%, #94a3b8 100%)' }} />
    </section>
  );
};

// PROBLEM SECTION
const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#475569] font-semibold text-sm uppercase tracking-wide">The Reality</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
              Fragmented Accountability Leaves You Exposed
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              OEMs stop supporting hardware after 3-5 years. Generic MSPs lack local spares. 
              Internal teams fight fires. Who owns continuity when everything fails at 2 AM?
            </p>
            
            <div className="space-y-4">
              {[
                { icon: AlertTriangle, text: 'Forced refreshes from OEMs at end-of-warranty' },
                { icon: AlertTriangle, text: 'Break-fix chaos with unpredictable costs' },
                { icon: AlertTriangle, text: 'Downtime during peak production hours' },
                { icon: AlertTriangle, text: 'No local support when you need it most' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">The Cost of Inaction</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <span className="text-gray-600">Emergency callout</span>
                <span className="text-red-600 font-bold">PKR 50K–150K</span>
              </div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <span className="text-gray-600">Production downtime (per hour)</span>
                <span className="text-red-600 font-bold">PKR 500K+</span>
              </div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <span className="text-gray-600">Forced early refresh</span>
                <span className="text-red-600 font-bold">PKR 2M–10M</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Data loss / compliance gap</span>
                <span className="text-red-600 font-bold">Priceless</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// SERVER SUITE SECTION
const ServerSuiteSection = () => {
  const services = [
    {
      id: 'audit',
      name: 'ServerAudit™',
      tagline: 'The Trusted Advisor Entry Point',
      price: 'FREE',
      priceNote: 'for 3 servers (remote)',
      description: 'Data-driven assessment that answers: "Should we refresh or can we safely extend?"',
      features: [
        'Health diagnostics across firmware, OS, and hardware',
        'Patch gap analysis and CVE exposure',
        'Refresh vs. extend recommendation',
        'No obligation, no sales pressure'
      ],
      cta: 'Get Free Assessment',
      color: 'green',
      icon: View
    },
    {
      id: 'sure',
      name: 'ServerSure™',
      tagline: 'The Volume Engine',
      price: 'PKR 45K',
      priceNote: '/month per server',
      description: 'Managed utility for non-critical servers. Predictable OpEx instead of break-fix chaos.',
      features: [
        '24/7 remote monitoring with health sensors',
        '9-5 PKT support during business hours',
        'Managed patching and security updates',
        'Monthly health summary reports'
      ],
      cta: 'Start ServerSure',
      color: 'blue',
      icon: Shield
    },
    {
      id: 'extend',
      name: 'ServerLife Extend™',
      tagline: 'Mission-Critical Continuity',
      price: 'Custom',
      priceNote: 'quote based on risk profile',
      description: 'Enterprise-grade support for out-of-warranty mission-critical systems.',
      features: [
        'Same-day spare parts availability',
        'Shift-aligned engineer response',
        'Firmware and security patching',
        '99.95% uptime SLA'
      ],
      cta: 'Request Quote',
      color: 'purple',
      icon: Clock
    },
    {
      id: 'modserve',
      name: 'ModServe™',
      tagline: 'Zero-Downtime Deployment',
      price: 'PKR 250K–600K',
      priceNote: 'per server (all-inclusive)',
      description: 'New server procurement, staging, migration, and validation-all in one outcome.',
      features: [
        'Hardware sourcing (Dell, HPE, Huawei)',
        'Pre-deployment staging and config',
        'Zero-downtime migration',
        'Day-1 managed support handover'
      ],
      cta: 'Plan Your Refresh',
      color: 'orange',
      icon: Server
    }
  ];

  return (
    <section id="suite" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-[#475569] font-semibold text-sm uppercase tracking-wide">Server Continuity Suite</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
            Four Stages. One Accountability Point.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From uncertainty to continuity-each service designed to naturally evolve into the next stage of your server lifecycle.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className={`group bg-white rounded-2xl border-2 border-gray-100 p-8 hover:border-${service.color}-500 hover:shadow-xl transition-all`}>
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-xl bg-${service.color}-100 flex items-center justify-center`}>
                  <service.icon className={`w-7 h-7 text-${service.color}-600`} />
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-bold text-${service.color}-600`}>{service.price}</div>
                  <div className="text-sm text-gray-500">{service.priceNote}</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
              <p className={`text-sm font-semibold text-${service.color}-600 mb-4`}>{service.tagline}</p>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className={`w-5 h-5 text-${service.color}-500 flex-shrink-0 mt-0.5`} />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="#contact"
                className={`inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-${service.color}-600 text-white font-semibold rounded-lg hover:bg-${service.color}-700 transition-all group-hover:gap-3`}
              >
                {service.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
        
        {/* Cross-sell banner */}
        <div className="mt-16 bg-gradient-to-r from-gray-100 to-slate-100 rounded-2xl p-8 border border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Need Facility-Layer Continuity?</h3>
              <p className="text-gray-600">
                Server continuity is incomplete without power, cooling, and physical environment protection.
              </p>
            </div>
            <a
              href="#datacentre"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all whitespace-nowrap"
            >
              Explore Data Centre Services
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// DATA CENTRE SECTION (Detailed Cooling Services)
const DataCentreSection = () => {
  const coolingServices = [
    {
      category: "Server Room Air Conditioners",
      service: "AC Unit Supply & Installation",
      outcome: "Precision Thermal Environment Control - Tiered cooling deployment with load-matched capacity, thermal mapping, and failover validation for 24/7 temperature stability"
    },
    {
      category: "Data Centre Cooling Systems",
      service: "Cooling System Supply",
      outcome: "Engineered Thermal Resilience - In-row precision cooling, CRAC, and liquid cooling integration with airflow management, hot/cold aisle containment, and PUE optimisation to 1.15 or below"
    },
    {
      category: "Air Conditioner Sizing",
      service: "AC Sizing Service",
      outcome: "Thermal Capacity Planning - Load-profiled cooling design with 30% headroom for growth, seasonal variation modelling, and cooling-compatibility validation with power infrastructure"
    },
    {
      category: "Cooling Site Surveys",
      service: "Site Survey",
      outcome: "Thermal Resilience Audits - Infrared thermal mapping, airflow analysis, cooling capacity validation, and single-point-of-failure identification across the thermal chain"
    },
    {
      category: "Validation Testing",
      service: "Cooling Load Testing",
      outcome: "Thermal Failure Simulation - Full-capacity testing with staged cooling failure scenarios (primary → secondary → portable) and temperature ramp validation"
    },
    {
      category: "Monitoring",
      service: "Cooling Monitoring Setup",
      outcome: "24/7 Thermal Surveillance - Real-time temperature/humidity monitoring with predictive alerts, automatic failover triggering, and historical trending for capacity forecasting"
    },
    {
      category: "Maintenance",
      service: "AC Servicing",
      outcome: "Predictive Thermal Maintenance - Coil cleaning, refrigerant checks, filter replacement, and component health monitoring with lifecycle forecasting"
    },
    {
      category: "Environment-Specific",
      service: "Cooling for Data Centres",
      outcome: "Context-Aware Thermal Continuity - Right-sized cooling stacks for edge sites (portable units), enterprise DCs (in-row precision), and high-density facilities (liquid cooling)"
    },
    {
      category: "Emergency Response",
      service: "Emergency AC Hire",
      outcome: "Thermal Continuity Bridging - Rapid-deployment cooling rental with certified engineers on-site within 4 hours for outage recovery or capacity gaps"
    },
    {
      category: "Energy Efficiency",
      service: "PUE Optimisation",
      outcome: "Thermal Energy Intelligence - Cooling system optimisation with VFD control, free-cooling integration, and AI-driven setpoint adjustments to reduce energy consumption by 25-40%"
    },
    {
      category: "Airflow Management",
      service: "Aisle Containment",
      outcome: "Precision Airflow Engineering - Hot/cold aisle containment design with Containment Integrity Validation (pressure decay testing) to eliminate hotspots and ensure fire suppression efficacy"
    }
  ];

  return (
    <section id="datacentre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#475569] font-semibold text-sm uppercase tracking-wide">Data Centre Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Thermal Integrity as the Foundation of Operational Continuity
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Server continuity is incomplete without facility continuity. You cannot credibly promise "99.95% uptime" 
            while outsourcing the power and cooling that keeps servers alive.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left: Service Tiers */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6">Four-Tier Service Model</h3>
            <div className="space-y-4">
              {[
                { tier: 'Tier 0', title: 'Advisory', desc: 'Strategy & Roadmap - Business-aligned Tier + TCO model. No over/under-spend.', price: 'PKR 42K–120K/mo' },
                { tier: 'Tier 1', title: 'Build', desc: 'Design & Build - Sovereign hardware, precision cooling, integrated telemetry. Built for Pakistan.', price: 'PKR 120K–480K/mo' },
                { tier: 'Tier 2', title: 'Operate', desc: 'Ongoing Services - 24/7 Lahore NOC, predictive maintenance, 99.98%+ uptime.', price: 'PKR 480K–2.1M/mo' },
                { tier: 'Tier 3', title: 'Optimise', desc: 'Proactive Value - PUE tuning, refresh planning, DR validation. ROI proven year after year.', price: 'Custom' }
              ].map((item) => (
                <div key={item.tier} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#475569] font-bold">{item.tier}</span>
                    <span className="text-xs text-gray-500">{item.price}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all mt-6 w-full justify-center"
            >
              Schedule Data Centre Assessment
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Pakistan Reality */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold mb-8">Pakistan-Specific Engineering</h3>
            <div className="space-y-6">
              <div className="pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-red-400 font-semibold">Global Standard:</span>
                  <span className="text-gray-500">"Design for 35°C ambient"</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-yellow-400 font-semibold">Pakistan Reality:</span>
                  <span className="text-gray-600">45°C+ sustained (Lahore summer peaks)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400 font-semibold">Our Response:</span>
                  <span className="text-gray-900">Cooling capacity derated 40% at 45°C → oversize by 60%</span>
                </div>
              </div>
              
              <div className="pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-red-400 font-semibold">Global Standard:</span>
                  <span className="text-gray-500">"Annual maintenance"</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-yellow-400 font-semibold">Pakistan Reality:</span>
                  <span className="text-gray-600">Monsoon degradation in weeks (June–Sept = 80-95% RH)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400 font-semibold">Our Response:</span>
                  <span className="text-gray-900">Quarterly validation protocols; precision CRAC/CRAH mandatory</span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-red-400 font-semibold">Standard AC Units:</span>
                  <span className="text-gray-500">Fail at &gt;70% RH</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400 font-semibold">Our Solution:</span>
                  <span className="text-gray-900">Residential-grade units rejected; precision cooling only</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cooling Services Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Complete Cooling Service Translation</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {coolingServices.map((service, index) => (
              <div key={index} className="bg-white p-5 rounded-lg border border-gray-200 hover:border-[#475569] transition-colors shadow-sm">
                <h4 className="font-semibold text-[#475569] text-sm mb-1">{service.category}</h4>
                <h5 className="font-bold text-gray-900 mb-2">{service.service}</h5>
                <p className="text-gray-500 text-sm leading-relaxed">{service.outcome}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Business Model */}
        <div className="bg-gradient-to-r from-gray-100 to-slate-100 p-8 rounded-2xl border border-gray-200">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Two-Tier Business Strategy</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-green-600">Tier 1: SLA-Backed Continuity</span>
                    <span className="text-sm text-gray-500">Core Engine</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">Continuity assurance with engineered validation, monsoon/dust hardening</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-green-600">45-60% margin</span>
                    <span className="text-gray-500">|</span>
                    <span className="text-gray-500">24-36 month contracts</span>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-[#475569]">Tier 2: Product Suppliers</span>
                    <span className="text-sm text-gray-500">Strategic Gateway</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">Hardware components with installation and basic maintenance</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-[#475569]">12-18% margin</span>
                    <span className="text-gray-500">|</span>
                    <span className="text-gray-500">0-12 months transactional</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Target Clients</h3>
              <ul className="space-y-3">
                {[
                  'Banks (SBP-regulated) - where downtime &gt; PKR 500K/hour',
                  'Government & PSDP-funded units',
                  'Manufacturing - production continuity critical',
                  'Telecommunications - subscriber-facing infrastructure'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// PROCESS SECTION
const ProcessSection = () => {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-[#475569] font-semibold text-sm uppercase tracking-wide">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
            From Assessment to Continuous Operations
          </h2>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Free ServerAudit™', desc: 'Remote health snapshot of 3 servers. No obligation.', color: 'green' },
            { step: '02', title: 'Right-Sized Support', desc: 'ServerSure™ for non-critical. ServerLife Extend™ for mission-critical.', color: 'blue' },
            { step: '03', title: 'Extend Life Safely', desc: 'Defer CapEx with confidence. Same-day spares, local engineers.', color: 'purple' },
            { step: '04', title: 'Planned Refresh', desc: 'When ready, ModServe™ delivers new hardware with zero downtime.', color: 'orange' }
          ].map((item) => (
            <div key={item.step} className="relative">
              <div className={`text-5xl font-bold text-${item.color}-100 mb-4`}>{item.step}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CASE STUDY SECTION
const CaseStudySection = () => {
  return (
    <section id="cases" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#475569] font-semibold text-sm uppercase tracking-wide">Featured Case Study</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-4">
                99.99% Uptime for Pakistan's Largest Telecom
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Deployed and manage a multi-site infrastructure spanning 3 data centres, 
                supporting 60+ million subscribers with zero unplanned downtime in 3 years.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-[#475569]">99.99%</div>
                  <div className="text-sm text-gray-500">Uptime Achieved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#475569]">3</div>
                  <div className="text-sm text-gray-500">Data Centres</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#475569]">60M+</div>
                  <div className="text-sm text-gray-500">Subscribers</div>
                </div>
              </div>
              
              <Link 
                to="/projects"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
              >
                View All Case Studies <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="bg-gray-100 rounded-xl h-80 flex items-center justify-center">
              <span className="text-gray-400">Case Study Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA SECTION
const CTASection = () => {
  return (
    <section id="contact" className="py-20 bg-blue-600">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Start With a Free Server Health Snapshot
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          No obligation. No sales pressure. Just clarity on whether your servers need refresh-or can safely extend.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Request Free ServerAudit™
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="tel:+924211111111"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>
        
        <p className="text-blue-200 text-sm mt-6">
          Response within 4 hours. Lahore-based engineers. Same-day site visits available.
        </p>
      </div>
    </section>
  );
};

// MAIN PAGE
const InfrastructureHub = () => {
  const [activeSection, setActiveSection] = useState('infrastructure-hero');
  
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
        <ErrorBoundary fallback={<div className="h-96 bg-gray-50" />}>
          <HeroVariant />
        </ErrorBoundary>

        <ErrorBoundary fallback={<div className="h-32 bg-gray-50" />}>
          <PartnerLogos />
        </ErrorBoundary>

        <div className="border-t border-gray-100">
          <div className="max-w-[1584px] mx-auto">
            <div className="flex">
              
              <aside className="hidden xl:block w-64 flex-shrink-0 pl-4">
                <nav className="sticky top-20 pt-8 pb-8 border-r border-gray-100 h-[calc(100vh-5rem)]">
                  <ul className="space-y-0.5">
                    {SECTIONS.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className={`w-full text-left px-4 py-2 text-sm transition-colors border-l-[3px] ${
                            activeSection === item.id
                              ? 'text-gray-900 border-blue-600 bg-blue-50 font-semibold'
                              : 'text-gray-500 border-transparent hover:text-gray-900 hover:bg-gray-50'
                          }`}
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>

              <div className="flex-1 min-w-0">
                <ErrorBoundary fallback={<div className="h-96 bg-gray-50" />}>
                  <ProblemSection />
                </ErrorBoundary>
                
                <ErrorBoundary fallback={<div className="h-96 bg-gray-50" />}>
                  <ServerSuiteSection />
                </ErrorBoundary>
                
                <ErrorBoundary fallback={<div className="h-96 bg-gray-50" />}>
                  <DataCentreSection />
                </ErrorBoundary>
                
                <ErrorBoundary fallback={<div className="h-96 bg-gray-50" />}>
                  <ProcessSection />
                </ErrorBoundary>
                
                <ErrorBoundary fallback={<div className="h-96 bg-gray-50" />}>
                  <CaseStudySection />
                </ErrorBoundary>
                
                <ErrorBoundary fallback={<div className="h-32 bg-gray-50" />}>
                  <ClientLogos />
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
