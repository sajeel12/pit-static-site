# Code Citations

## License: unknown
https://github.com/121038217/MacuinBueno2/blob/9dfb3ee658bc4e752021578020a0ce84f6acd8eb/resources/views/cliente_consultarticket.blade.php

```
Perfect! I'll provide the complete updated ServiceNow.tsx with 2x Grid conversion and Carbon icon integration. Since I don't have direct terminal access, here are the steps:

**Step 1: Install Carbon icons**
```bash
npm install @carbon/icons-react
```

**Step 2: Updated ServiceNow.tsx** with all 2x Grid spacing and Carbon icons:

```tsx
import { useEffect, useRef, useState } from 'react';
import {
  // Lucide icons (existing)
  ArrowRight,
  MessageSquare,
  Settings,
  Headphones,
  Award,
  Layers,
  Code,
  Clock,
  Activity,
  Server,
  Database,
  Cloud,
  Shield,
  Workflow,
  Network,
  Building2,
  Zap,
  TrendingUp,
  Clock3,
  FileCode,
  Lock,
  Users,
  Link2,
  Globe,
  BookOpen,
  Lightbulb,
  Target,
  ChevronDown,
  ChevronUp,
  CheckCircle2
} from 'lucide-react';

// Carbon icons (new)
import { DataIntegration20, Collaborate20, Support20 } from '@carbon/icons-react';

import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';

const ServiceNow = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [showAllTech, setShowAllTech] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToServices = () => {
    if (servicesRef.current) {
      const yOffset = -80;
      const y = servicesRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const brandColor = '#6B9B8A';

  const highlights = [
    { value: '14+', label: 'Years Experience' },
    { value: 'Deep', label: 'Enterprise Expertise' },
    { value: 'Proven', label: 'Track Record' },
    { value: '50+', label: 'Projects Delivered' }
  ];

  const techStack = [
    { name: 'REST API', icon: Code },
    { name: 'SOAP', icon: Server },
    { name: 'JSON', icon: FileCode },
    { name: 'XML', icon: Globe },
    { name: 'OAuth', icon: Lock },
    { name: 'LDAP', icon: Users },
    { name: 'SQL', icon: Database },
    { name: 'Webhooks', icon: Link2 }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navigation />

      {/* Breadcrumb - 2x Grid: 16px padding */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="hover:text-gray-900 transition-colors">Services</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services#platforms" className="hover:text-gray-900 transition-colors">IT Platforms</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">ServiceNow</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - 2x Grid: 80px section padding, 16px gaps */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ background: `linear-gradient(135deg, #0F172A 0%, #1E293B 50%, ${brandColor}20 100%)` }}>
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: brandColor }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600 rounded-full blur-3xl" />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-8"
                style={{ backgroundColor: `${brandColor}30`, color: brandColor }}
              >
                ServiceNow Integration
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-[1.15] tracking-tight">
                Secure Your ServiceNow Transition
              </h1>
          
              <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
                Risk-mapped integrations that prevent SLA breaches and ensure data continuity 
                between your core systems and ServiceNow workflows.
              </p>
          
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90"
                  style={{ backgroundColor: brandColor }}
                >
                  Free Migration Assessment
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={scrollToServices}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-all"
                >
                  View Services
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
          
              {/* Mobile: Key stats row - 2x Grid: 16px gap */}
              <div className="lg:hidden flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Server className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Legacy Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Network className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">ServiceNow</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Workflow className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Automation</span>
                </div>
              </div>
            </div>

            {/* Right: Integration Diagram */}
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Legacy Systems - Left */}
                <div className="absolute left-0 top-1/4 flex flex-col gap-6">
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                      <Server className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Legacy Servers</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}25` }}>
                      <Database className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Databases</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}20` }}>
                      <Cloud className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Cloud Apps</span>
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <line x1="120" y1="100" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="200" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="300" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                </svg>

                {/* ServiceNow Platform - Center */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative flex flex-col items-center">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: brandColor }}>
                      <Network className="w-10 h-10 text-white" />
                    </div>
                    <div className="mt-3 bg-slate-800/90 backdrop-blur rounded-full px-3 py-1 border border-slate-700">
                      <span className="text-xs font-medium text-white">ServiceNow</span>
                    </div>
                    <div className="absolute inset-0 rounded-xl animate-ping opacity-30" style={{ backgroundColor: brandColor }} />
                  </div>
                </div>

                {/* Output - Right */}
                <div className="absolute right-0 top-1/4 flex flex-col gap-3">
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}30` }}>
                      <Workflow className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">Automated Workflows</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}25` }}>
                      <Shield className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">SLA Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              {highlights.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="font-semibold text-white">{stat.value}</span>
                  <span className="text-gray-300">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 2x Grid: 80px py, 32px gutter (gap-8) */}
      <section ref={servicesRef} id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Helping Businesses Plan and Optimise
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Our ServiceNow Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end ServiceNow capabilities from initial strategy through ongoing optimisation
            </p>
          </div>

          {/* 3-col grid: 32px gutter (2x Grid) */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Consultation - 32px padding (2x Grid unit) */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-50">
                  <MessageSquare className="w-7 h-7 text-blue-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Consultation</h3>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">2-4 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Strategic planning and roadmap development to ensure your ServiceNow investment delivers maximum ROI.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Current state assessment & gap analysis</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Module selection & architecture design</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Risk-mapped migration roadmap</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>ROI projection & business case</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Implementation */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-amber-50">
                  <Settings className="w-7 h-7 text-amber-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Implementation</h3>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">8 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Rapid, risk-mapped deployment with our proven 8-week go-live methodology.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Platform configuration & custom workflows</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Legacy system integrations (REST, SOAP, etc.)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Secure data migration & validation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>User training & go-live support</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Support */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-green-50">
                  <Headphones className="w-7 h-7 text-green-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Support</h3>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Ongoing</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  24/7 managed services with SLA-backed response times and continuous optimisation.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>24/7 technical support (15-min response)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Platform updates & security patches</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Performance monitoring & optimisation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Quarterly business reviews</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Case Studies - 2x Grid: 80px py, 32px spacing (space-y-8) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Proven Results for Enterprise Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world implementations delivering measurable business outcomes
            </p>
          </div>

          {/* 32px spacing between case studies (2x Grid) */}
          <div className="space-y-8">
            {/* Case Study 1 */}
            <Link 
              to="/projects/case-study/telco-service-desk-it-process-migration-to-servicenow"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: `linear-gradient(135deg, ${brandColor}30, ${brandColor}15)` }}>
                  <Building2 className="w-20 h-20" style={{ color: `${brandColor}80` }} />
                  <span className="text-sm font-medium" style={{ color: `${brandColor}` }}>Jazz</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Telecom</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Migration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    Enabling 99.95% uptime and 24/7 follow-the-sun support for Pakistan&apos;s largest telecom through ServiceNow Cloud migration
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Pakistan&apos;s largest telecommunications provider modernised their service desk
                    and migrated to ServiceNow Cloud, enabling 24/7 follow-the-sun support operations
                    with 99.95% platform availability.
                  </p>
                  {/* Metrics: 24px gap (1.5x units) */}
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">99.95%</div>
                        <div className="text-xs text-gray-500">Uptime SLA</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock3 className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">24/7</div>
                        <div className="text-xs text-gray-500">Coverage</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}15` }}>
                        <Activity className="w-5 h-5" style={{ color: brandColor }} />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">52%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link 
              to="/projects/case-study/servicenow-incident-automation"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: 'linear-gradient(135deg, #F5F0EB, #EDE8E3)' }}>
                  <Zap className="w-20 h-20 text-amber-500" />
                  <span className="text-sm font-medium text-amber-700">Client Photo</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">Automation</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Integration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    40% faster incident resolution for major telecom through intelligent ServiceNow automation
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Developed an intelligent microservice bridge integrating network alarms with ServiceNow,
                    eliminating manual incident handling and reducing response times through automated correlation
                    and smart routing.
                  </p>
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-50">
                        <Zap className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">40%</div>
                        <div className="text-xs text-gray-500">Less Manual Work</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-50">
                        <Activity className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">98%</div>
                        <div className="text-xs text-gray-500">SLA Compliance</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">45%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section - 2x Grid: 80px py */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] mb-4 block" style={{ color: '#6B9B8A' }}>
              Client Success
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-6 left-6 text-8xl font-serif text-gray-100 leading-none">&quot;</div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Jazz</p>
                  <p className="text-xs text-gray-500">Pakistan&apos;s Largest Telecom</p>
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                &quot;Perception IT&apos;s expertise in migrating our IBM Maximo ticketing system to ServiceNow was invaluable.
                <br /><br />
                Their smooth and meticulous approach ensured a seamless transition, eliminating the need for on-premises hardware and offering our team a robust cloud-based solution. This has resulted in improved accessibility, increased efficiency, and overall cost savings.&quot;
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-500">UI</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Usman Ikram</p>
                  <p className="text-sm text-gray-500">Manager, SQM & Automation Support, Jazz</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688
```


## License: unknown
https://github.com/wahajsaleem/wahajsaleem.github.io/blob/ea91ca8212afe466686deb2794b0473122688d0a/src/components/StarRating.jsx

```
Perfect! I'll provide the complete updated ServiceNow.tsx with 2x Grid conversion and Carbon icon integration. Since I don't have direct terminal access, here are the steps:

**Step 1: Install Carbon icons**
```bash
npm install @carbon/icons-react
```

**Step 2: Updated ServiceNow.tsx** with all 2x Grid spacing and Carbon icons:

```tsx
import { useEffect, useRef, useState } from 'react';
import {
  // Lucide icons (existing)
  ArrowRight,
  MessageSquare,
  Settings,
  Headphones,
  Award,
  Layers,
  Code,
  Clock,
  Activity,
  Server,
  Database,
  Cloud,
  Shield,
  Workflow,
  Network,
  Building2,
  Zap,
  TrendingUp,
  Clock3,
  FileCode,
  Lock,
  Users,
  Link2,
  Globe,
  BookOpen,
  Lightbulb,
  Target,
  ChevronDown,
  ChevronUp,
  CheckCircle2
} from 'lucide-react';

// Carbon icons (new)
import { DataIntegration20, Collaborate20, Support20 } from '@carbon/icons-react';

import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';

const ServiceNow = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [showAllTech, setShowAllTech] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToServices = () => {
    if (servicesRef.current) {
      const yOffset = -80;
      const y = servicesRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const brandColor = '#6B9B8A';

  const highlights = [
    { value: '14+', label: 'Years Experience' },
    { value: 'Deep', label: 'Enterprise Expertise' },
    { value: 'Proven', label: 'Track Record' },
    { value: '50+', label: 'Projects Delivered' }
  ];

  const techStack = [
    { name: 'REST API', icon: Code },
    { name: 'SOAP', icon: Server },
    { name: 'JSON', icon: FileCode },
    { name: 'XML', icon: Globe },
    { name: 'OAuth', icon: Lock },
    { name: 'LDAP', icon: Users },
    { name: 'SQL', icon: Database },
    { name: 'Webhooks', icon: Link2 }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navigation />

      {/* Breadcrumb - 2x Grid: 16px padding */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="hover:text-gray-900 transition-colors">Services</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services#platforms" className="hover:text-gray-900 transition-colors">IT Platforms</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">ServiceNow</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - 2x Grid: 80px section padding, 16px gaps */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ background: `linear-gradient(135deg, #0F172A 0%, #1E293B 50%, ${brandColor}20 100%)` }}>
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: brandColor }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600 rounded-full blur-3xl" />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-8"
                style={{ backgroundColor: `${brandColor}30`, color: brandColor }}
              >
                ServiceNow Integration
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-[1.15] tracking-tight">
                Secure Your ServiceNow Transition
              </h1>
          
              <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
                Risk-mapped integrations that prevent SLA breaches and ensure data continuity 
                between your core systems and ServiceNow workflows.
              </p>
          
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90"
                  style={{ backgroundColor: brandColor }}
                >
                  Free Migration Assessment
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={scrollToServices}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-all"
                >
                  View Services
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
          
              {/* Mobile: Key stats row - 2x Grid: 16px gap */}
              <div className="lg:hidden flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Server className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Legacy Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Network className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">ServiceNow</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Workflow className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Automation</span>
                </div>
              </div>
            </div>

            {/* Right: Integration Diagram */}
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Legacy Systems - Left */}
                <div className="absolute left-0 top-1/4 flex flex-col gap-6">
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                      <Server className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Legacy Servers</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}25` }}>
                      <Database className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Databases</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}20` }}>
                      <Cloud className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Cloud Apps</span>
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <line x1="120" y1="100" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="200" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="300" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                </svg>

                {/* ServiceNow Platform - Center */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative flex flex-col items-center">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: brandColor }}>
                      <Network className="w-10 h-10 text-white" />
                    </div>
                    <div className="mt-3 bg-slate-800/90 backdrop-blur rounded-full px-3 py-1 border border-slate-700">
                      <span className="text-xs font-medium text-white">ServiceNow</span>
                    </div>
                    <div className="absolute inset-0 rounded-xl animate-ping opacity-30" style={{ backgroundColor: brandColor }} />
                  </div>
                </div>

                {/* Output - Right */}
                <div className="absolute right-0 top-1/4 flex flex-col gap-3">
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}30` }}>
                      <Workflow className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">Automated Workflows</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}25` }}>
                      <Shield className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">SLA Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              {highlights.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="font-semibold text-white">{stat.value}</span>
                  <span className="text-gray-300">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 2x Grid: 80px py, 32px gutter (gap-8) */}
      <section ref={servicesRef} id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Helping Businesses Plan and Optimise
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Our ServiceNow Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end ServiceNow capabilities from initial strategy through ongoing optimisation
            </p>
          </div>

          {/* 3-col grid: 32px gutter (2x Grid) */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Consultation - 32px padding (2x Grid unit) */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-50">
                  <MessageSquare className="w-7 h-7 text-blue-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Consultation</h3>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">2-4 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Strategic planning and roadmap development to ensure your ServiceNow investment delivers maximum ROI.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Current state assessment & gap analysis</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Module selection & architecture design</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Risk-mapped migration roadmap</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>ROI projection & business case</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Implementation */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-amber-50">
                  <Settings className="w-7 h-7 text-amber-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Implementation</h3>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">8 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Rapid, risk-mapped deployment with our proven 8-week go-live methodology.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Platform configuration & custom workflows</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Legacy system integrations (REST, SOAP, etc.)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Secure data migration & validation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>User training & go-live support</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Support */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-green-50">
                  <Headphones className="w-7 h-7 text-green-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Support</h3>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Ongoing</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  24/7 managed services with SLA-backed response times and continuous optimisation.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>24/7 technical support (15-min response)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Platform updates & security patches</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Performance monitoring & optimisation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Quarterly business reviews</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Case Studies - 2x Grid: 80px py, 32px spacing (space-y-8) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Proven Results for Enterprise Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world implementations delivering measurable business outcomes
            </p>
          </div>

          {/* 32px spacing between case studies (2x Grid) */}
          <div className="space-y-8">
            {/* Case Study 1 */}
            <Link 
              to="/projects/case-study/telco-service-desk-it-process-migration-to-servicenow"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: `linear-gradient(135deg, ${brandColor}30, ${brandColor}15)` }}>
                  <Building2 className="w-20 h-20" style={{ color: `${brandColor}80` }} />
                  <span className="text-sm font-medium" style={{ color: `${brandColor}` }}>Jazz</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Telecom</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Migration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    Enabling 99.95% uptime and 24/7 follow-the-sun support for Pakistan&apos;s largest telecom through ServiceNow Cloud migration
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Pakistan&apos;s largest telecommunications provider modernised their service desk
                    and migrated to ServiceNow Cloud, enabling 24/7 follow-the-sun support operations
                    with 99.95% platform availability.
                  </p>
                  {/* Metrics: 24px gap (1.5x units) */}
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">99.95%</div>
                        <div className="text-xs text-gray-500">Uptime SLA</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock3 className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">24/7</div>
                        <div className="text-xs text-gray-500">Coverage</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}15` }}>
                        <Activity className="w-5 h-5" style={{ color: brandColor }} />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">52%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link 
              to="/projects/case-study/servicenow-incident-automation"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: 'linear-gradient(135deg, #F5F0EB, #EDE8E3)' }}>
                  <Zap className="w-20 h-20 text-amber-500" />
                  <span className="text-sm font-medium text-amber-700">Client Photo</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">Automation</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Integration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    40% faster incident resolution for major telecom through intelligent ServiceNow automation
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Developed an intelligent microservice bridge integrating network alarms with ServiceNow,
                    eliminating manual incident handling and reducing response times through automated correlation
                    and smart routing.
                  </p>
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-50">
                        <Zap className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">40%</div>
                        <div className="text-xs text-gray-500">Less Manual Work</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-50">
                        <Activity className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">98%</div>
                        <div className="text-xs text-gray-500">SLA Compliance</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">45%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section - 2x Grid: 80px py */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] mb-4 block" style={{ color: '#6B9B8A' }}>
              Client Success
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-6 left-6 text-8xl font-serif text-gray-100 leading-none">&quot;</div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Jazz</p>
                  <p className="text-xs text-gray-500">Pakistan&apos;s Largest Telecom</p>
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                &quot;Perception IT&apos;s expertise in migrating our IBM Maximo ticketing system to ServiceNow was invaluable.
                <br /><br />
                Their smooth and meticulous approach ensured a seamless transition, eliminating the need for on-premises hardware and offering our team a robust cloud-based solution. This has resulted in improved accessibility, increased efficiency, and overall cost savings.&quot;
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-500">UI</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Usman Ikram</p>
                  <p className="text-sm text-gray-500">Manager, SQM & Automation Support, Jazz</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688
```


## License: unknown
https://github.com/ckiee/cookieblob/blob/b2c2498085b10f7f1d5e05525c202f325361ece2/frontend/src/routes/Dashboard.svelte

```
Perfect! I'll provide the complete updated ServiceNow.tsx with 2x Grid conversion and Carbon icon integration. Since I don't have direct terminal access, here are the steps:

**Step 1: Install Carbon icons**
```bash
npm install @carbon/icons-react
```

**Step 2: Updated ServiceNow.tsx** with all 2x Grid spacing and Carbon icons:

```tsx
import { useEffect, useRef, useState } from 'react';
import {
  // Lucide icons (existing)
  ArrowRight,
  MessageSquare,
  Settings,
  Headphones,
  Award,
  Layers,
  Code,
  Clock,
  Activity,
  Server,
  Database,
  Cloud,
  Shield,
  Workflow,
  Network,
  Building2,
  Zap,
  TrendingUp,
  Clock3,
  FileCode,
  Lock,
  Users,
  Link2,
  Globe,
  BookOpen,
  Lightbulb,
  Target,
  ChevronDown,
  ChevronUp,
  CheckCircle2
} from 'lucide-react';

// Carbon icons (new)
import { DataIntegration20, Collaborate20, Support20 } from '@carbon/icons-react';

import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';

const ServiceNow = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [showAllTech, setShowAllTech] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToServices = () => {
    if (servicesRef.current) {
      const yOffset = -80;
      const y = servicesRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const brandColor = '#6B9B8A';

  const highlights = [
    { value: '14+', label: 'Years Experience' },
    { value: 'Deep', label: 'Enterprise Expertise' },
    { value: 'Proven', label: 'Track Record' },
    { value: '50+', label: 'Projects Delivered' }
  ];

  const techStack = [
    { name: 'REST API', icon: Code },
    { name: 'SOAP', icon: Server },
    { name: 'JSON', icon: FileCode },
    { name: 'XML', icon: Globe },
    { name: 'OAuth', icon: Lock },
    { name: 'LDAP', icon: Users },
    { name: 'SQL', icon: Database },
    { name: 'Webhooks', icon: Link2 }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navigation />

      {/* Breadcrumb - 2x Grid: 16px padding */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="hover:text-gray-900 transition-colors">Services</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services#platforms" className="hover:text-gray-900 transition-colors">IT Platforms</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">ServiceNow</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - 2x Grid: 80px section padding, 16px gaps */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ background: `linear-gradient(135deg, #0F172A 0%, #1E293B 50%, ${brandColor}20 100%)` }}>
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: brandColor }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600 rounded-full blur-3xl" />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-8"
                style={{ backgroundColor: `${brandColor}30`, color: brandColor }}
              >
                ServiceNow Integration
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-[1.15] tracking-tight">
                Secure Your ServiceNow Transition
              </h1>
          
              <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
                Risk-mapped integrations that prevent SLA breaches and ensure data continuity 
                between your core systems and ServiceNow workflows.
              </p>
          
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90"
                  style={{ backgroundColor: brandColor }}
                >
                  Free Migration Assessment
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={scrollToServices}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-all"
                >
                  View Services
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
          
              {/* Mobile: Key stats row - 2x Grid: 16px gap */}
              <div className="lg:hidden flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Server className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Legacy Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Network className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">ServiceNow</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Workflow className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Automation</span>
                </div>
              </div>
            </div>

            {/* Right: Integration Diagram */}
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Legacy Systems - Left */}
                <div className="absolute left-0 top-1/4 flex flex-col gap-6">
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                      <Server className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Legacy Servers</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}25` }}>
                      <Database className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Databases</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}20` }}>
                      <Cloud className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Cloud Apps</span>
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <line x1="120" y1="100" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="200" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="300" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                </svg>

                {/* ServiceNow Platform - Center */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative flex flex-col items-center">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: brandColor }}>
                      <Network className="w-10 h-10 text-white" />
                    </div>
                    <div className="mt-3 bg-slate-800/90 backdrop-blur rounded-full px-3 py-1 border border-slate-700">
                      <span className="text-xs font-medium text-white">ServiceNow</span>
                    </div>
                    <div className="absolute inset-0 rounded-xl animate-ping opacity-30" style={{ backgroundColor: brandColor }} />
                  </div>
                </div>

                {/* Output - Right */}
                <div className="absolute right-0 top-1/4 flex flex-col gap-3">
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}30` }}>
                      <Workflow className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">Automated Workflows</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}25` }}>
                      <Shield className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">SLA Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              {highlights.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="font-semibold text-white">{stat.value}</span>
                  <span className="text-gray-300">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 2x Grid: 80px py, 32px gutter (gap-8) */}
      <section ref={servicesRef} id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Helping Businesses Plan and Optimise
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Our ServiceNow Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end ServiceNow capabilities from initial strategy through ongoing optimisation
            </p>
          </div>

          {/* 3-col grid: 32px gutter (2x Grid) */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Consultation - 32px padding (2x Grid unit) */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-50">
                  <MessageSquare className="w-7 h-7 text-blue-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Consultation</h3>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">2-4 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Strategic planning and roadmap development to ensure your ServiceNow investment delivers maximum ROI.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Current state assessment & gap analysis</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Module selection & architecture design</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Risk-mapped migration roadmap</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>ROI projection & business case</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Implementation */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-amber-50">
                  <Settings className="w-7 h-7 text-amber-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Implementation</h3>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">8 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Rapid, risk-mapped deployment with our proven 8-week go-live methodology.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Platform configuration & custom workflows</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Legacy system integrations (REST, SOAP, etc.)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Secure data migration & validation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>User training & go-live support</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Support */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-green-50">
                  <Headphones className="w-7 h-7 text-green-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Support</h3>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Ongoing</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  24/7 managed services with SLA-backed response times and continuous optimisation.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>24/7 technical support (15-min response)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Platform updates & security patches</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Performance monitoring & optimisation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Quarterly business reviews</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Case Studies - 2x Grid: 80px py, 32px spacing (space-y-8) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Proven Results for Enterprise Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world implementations delivering measurable business outcomes
            </p>
          </div>

          {/* 32px spacing between case studies (2x Grid) */}
          <div className="space-y-8">
            {/* Case Study 1 */}
            <Link 
              to="/projects/case-study/telco-service-desk-it-process-migration-to-servicenow"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: `linear-gradient(135deg, ${brandColor}30, ${brandColor}15)` }}>
                  <Building2 className="w-20 h-20" style={{ color: `${brandColor}80` }} />
                  <span className="text-sm font-medium" style={{ color: `${brandColor}` }}>Jazz</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Telecom</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Migration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    Enabling 99.95% uptime and 24/7 follow-the-sun support for Pakistan&apos;s largest telecom through ServiceNow Cloud migration
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Pakistan&apos;s largest telecommunications provider modernised their service desk
                    and migrated to ServiceNow Cloud, enabling 24/7 follow-the-sun support operations
                    with 99.95% platform availability.
                  </p>
                  {/* Metrics: 24px gap (1.5x units) */}
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">99.95%</div>
                        <div className="text-xs text-gray-500">Uptime SLA</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock3 className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">24/7</div>
                        <div className="text-xs text-gray-500">Coverage</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}15` }}>
                        <Activity className="w-5 h-5" style={{ color: brandColor }} />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">52%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link 
              to="/projects/case-study/servicenow-incident-automation"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: 'linear-gradient(135deg, #F5F0EB, #EDE8E3)' }}>
                  <Zap className="w-20 h-20 text-amber-500" />
                  <span className="text-sm font-medium text-amber-700">Client Photo</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">Automation</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Integration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    40% faster incident resolution for major telecom through intelligent ServiceNow automation
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Developed an intelligent microservice bridge integrating network alarms with ServiceNow,
                    eliminating manual incident handling and reducing response times through automated correlation
                    and smart routing.
                  </p>
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-50">
                        <Zap className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">40%</div>
                        <div className="text-xs text-gray-500">Less Manual Work</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-50">
                        <Activity className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">98%</div>
                        <div className="text-xs text-gray-500">SLA Compliance</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">45%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section - 2x Grid: 80px py */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] mb-4 block" style={{ color: '#6B9B8A' }}>
              Client Success
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-6 left-6 text-8xl font-serif text-gray-100 leading-none">&quot;</div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Jazz</p>
                  <p className="text-xs text-gray-500">Pakistan&apos;s Largest Telecom</p>
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                &quot;Perception IT&apos;s expertise in migrating our IBM Maximo ticketing system to ServiceNow was invaluable.
                <br /><br />
                Their smooth and meticulous approach ensured a seamless transition, eliminating the need for on-premises hardware and offering our team a robust cloud-based solution. This has resulted in improved accessibility, increased efficiency, and overall cost savings.&quot;
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-500">UI</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Usman Ikram</p>
                  <p className="text-sm text-gray-500">Manager, SQM & Automation Support, Jazz</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688
```


## License: unknown
https://github.com/121038217/MacuinBueno2/blob/9dfb3ee658bc4e752021578020a0ce84f6acd8eb/resources/views/cliente_consultarticket.blade.php

```
Perfect! I'll provide the complete updated ServiceNow.tsx with 2x Grid conversion and Carbon icon integration. Since I don't have direct terminal access, here are the steps:

**Step 1: Install Carbon icons**
```bash
npm install @carbon/icons-react
```

**Step 2: Updated ServiceNow.tsx** with all 2x Grid spacing and Carbon icons:

```tsx
import { useEffect, useRef, useState } from 'react';
import {
  // Lucide icons (existing)
  ArrowRight,
  MessageSquare,
  Settings,
  Headphones,
  Award,
  Layers,
  Code,
  Clock,
  Activity,
  Server,
  Database,
  Cloud,
  Shield,
  Workflow,
  Network,
  Building2,
  Zap,
  TrendingUp,
  Clock3,
  FileCode,
  Lock,
  Users,
  Link2,
  Globe,
  BookOpen,
  Lightbulb,
  Target,
  ChevronDown,
  ChevronUp,
  CheckCircle2
} from 'lucide-react';

// Carbon icons (new)
import { DataIntegration20, Collaborate20, Support20 } from '@carbon/icons-react';

import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';

const ServiceNow = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [showAllTech, setShowAllTech] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToServices = () => {
    if (servicesRef.current) {
      const yOffset = -80;
      const y = servicesRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const brandColor = '#6B9B8A';

  const highlights = [
    { value: '14+', label: 'Years Experience' },
    { value: 'Deep', label: 'Enterprise Expertise' },
    { value: 'Proven', label: 'Track Record' },
    { value: '50+', label: 'Projects Delivered' }
  ];

  const techStack = [
    { name: 'REST API', icon: Code },
    { name: 'SOAP', icon: Server },
    { name: 'JSON', icon: FileCode },
    { name: 'XML', icon: Globe },
    { name: 'OAuth', icon: Lock },
    { name: 'LDAP', icon: Users },
    { name: 'SQL', icon: Database },
    { name: 'Webhooks', icon: Link2 }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navigation />

      {/* Breadcrumb - 2x Grid: 16px padding */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="hover:text-gray-900 transition-colors">Services</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services#platforms" className="hover:text-gray-900 transition-colors">IT Platforms</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">ServiceNow</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - 2x Grid: 80px section padding, 16px gaps */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ background: `linear-gradient(135deg, #0F172A 0%, #1E293B 50%, ${brandColor}20 100%)` }}>
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: brandColor }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600 rounded-full blur-3xl" />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-8"
                style={{ backgroundColor: `${brandColor}30`, color: brandColor }}
              >
                ServiceNow Integration
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-[1.15] tracking-tight">
                Secure Your ServiceNow Transition
              </h1>
          
              <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
                Risk-mapped integrations that prevent SLA breaches and ensure data continuity 
                between your core systems and ServiceNow workflows.
              </p>
          
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90"
                  style={{ backgroundColor: brandColor }}
                >
                  Free Migration Assessment
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={scrollToServices}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-all"
                >
                  View Services
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
          
              {/* Mobile: Key stats row - 2x Grid: 16px gap */}
              <div className="lg:hidden flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Server className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Legacy Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Network className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">ServiceNow</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Workflow className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Automation</span>
                </div>
              </div>
            </div>

            {/* Right: Integration Diagram */}
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Legacy Systems - Left */}
                <div className="absolute left-0 top-1/4 flex flex-col gap-6">
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                      <Server className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Legacy Servers</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}25` }}>
                      <Database className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Databases</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}20` }}>
                      <Cloud className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Cloud Apps</span>
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <line x1="120" y1="100" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="200" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="300" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                </svg>

                {/* ServiceNow Platform - Center */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative flex flex-col items-center">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: brandColor }}>
                      <Network className="w-10 h-10 text-white" />
                    </div>
                    <div className="mt-3 bg-slate-800/90 backdrop-blur rounded-full px-3 py-1 border border-slate-700">
                      <span className="text-xs font-medium text-white">ServiceNow</span>
                    </div>
                    <div className="absolute inset-0 rounded-xl animate-ping opacity-30" style={{ backgroundColor: brandColor }} />
                  </div>
                </div>

                {/* Output - Right */}
                <div className="absolute right-0 top-1/4 flex flex-col gap-3">
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}30` }}>
                      <Workflow className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">Automated Workflows</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}25` }}>
                      <Shield className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">SLA Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              {highlights.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="font-semibold text-white">{stat.value}</span>
                  <span className="text-gray-300">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 2x Grid: 80px py, 32px gutter (gap-8) */}
      <section ref={servicesRef} id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Helping Businesses Plan and Optimise
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Our ServiceNow Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end ServiceNow capabilities from initial strategy through ongoing optimisation
            </p>
          </div>

          {/* 3-col grid: 32px gutter (2x Grid) */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Consultation - 32px padding (2x Grid unit) */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-50">
                  <MessageSquare className="w-7 h-7 text-blue-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Consultation</h3>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">2-4 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Strategic planning and roadmap development to ensure your ServiceNow investment delivers maximum ROI.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Current state assessment & gap analysis</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Module selection & architecture design</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Risk-mapped migration roadmap</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>ROI projection & business case</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Implementation */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-amber-50">
                  <Settings className="w-7 h-7 text-amber-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Implementation</h3>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">8 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Rapid, risk-mapped deployment with our proven 8-week go-live methodology.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Platform configuration & custom workflows</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Legacy system integrations (REST, SOAP, etc.)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Secure data migration & validation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>User training & go-live support</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Support */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-green-50">
                  <Headphones className="w-7 h-7 text-green-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Support</h3>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Ongoing</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  24/7 managed services with SLA-backed response times and continuous optimisation.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>24/7 technical support (15-min response)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Platform updates & security patches</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Performance monitoring & optimisation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Quarterly business reviews</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Case Studies - 2x Grid: 80px py, 32px spacing (space-y-8) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Proven Results for Enterprise Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world implementations delivering measurable business outcomes
            </p>
          </div>

          {/* 32px spacing between case studies (2x Grid) */}
          <div className="space-y-8">
            {/* Case Study 1 */}
            <Link 
              to="/projects/case-study/telco-service-desk-it-process-migration-to-servicenow"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: `linear-gradient(135deg, ${brandColor}30, ${brandColor}15)` }}>
                  <Building2 className="w-20 h-20" style={{ color: `${brandColor}80` }} />
                  <span className="text-sm font-medium" style={{ color: `${brandColor}` }}>Jazz</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Telecom</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Migration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    Enabling 99.95% uptime and 24/7 follow-the-sun support for Pakistan&apos;s largest telecom through ServiceNow Cloud migration
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Pakistan&apos;s largest telecommunications provider modernised their service desk
                    and migrated to ServiceNow Cloud, enabling 24/7 follow-the-sun support operations
                    with 99.95% platform availability.
                  </p>
                  {/* Metrics: 24px gap (1.5x units) */}
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">99.95%</div>
                        <div className="text-xs text-gray-500">Uptime SLA</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock3 className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">24/7</div>
                        <div className="text-xs text-gray-500">Coverage</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}15` }}>
                        <Activity className="w-5 h-5" style={{ color: brandColor }} />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">52%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link 
              to="/projects/case-study/servicenow-incident-automation"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: 'linear-gradient(135deg, #F5F0EB, #EDE8E3)' }}>
                  <Zap className="w-20 h-20 text-amber-500" />
                  <span className="text-sm font-medium text-amber-700">Client Photo</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">Automation</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Integration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    40% faster incident resolution for major telecom through intelligent ServiceNow automation
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Developed an intelligent microservice bridge integrating network alarms with ServiceNow,
                    eliminating manual incident handling and reducing response times through automated correlation
                    and smart routing.
                  </p>
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-50">
                        <Zap className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">40%</div>
                        <div className="text-xs text-gray-500">Less Manual Work</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-50">
                        <Activity className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">98%</div>
                        <div className="text-xs text-gray-500">SLA Compliance</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">45%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section - 2x Grid: 80px py */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] mb-4 block" style={{ color: '#6B9B8A' }}>
              Client Success
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-6 left-6 text-8xl font-serif text-gray-100 leading-none">&quot;</div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Jazz</p>
                  <p className="text-xs text-gray-500">Pakistan&apos;s Largest Telecom</p>
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                &quot;Perception IT&apos;s expertise in migrating our IBM Maximo ticketing system to ServiceNow was invaluable.
                <br /><br />
                Their smooth and meticulous approach ensured a seamless transition, eliminating the need for on-premises hardware and offering our team a robust cloud-based solution. This has resulted in improved accessibility, increased efficiency, and overall cost savings.&quot;
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-500">UI</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Usman Ikram</p>
                  <p className="text-sm text-gray-500">Manager, SQM & Automation Support, Jazz</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688
```


## License: unknown
https://github.com/wahajsaleem/wahajsaleem.github.io/blob/ea91ca8212afe466686deb2794b0473122688d0a/src/components/StarRating.jsx

```
Perfect! I'll provide the complete updated ServiceNow.tsx with 2x Grid conversion and Carbon icon integration. Since I don't have direct terminal access, here are the steps:

**Step 1: Install Carbon icons**
```bash
npm install @carbon/icons-react
```

**Step 2: Updated ServiceNow.tsx** with all 2x Grid spacing and Carbon icons:

```tsx
import { useEffect, useRef, useState } from 'react';
import {
  // Lucide icons (existing)
  ArrowRight,
  MessageSquare,
  Settings,
  Headphones,
  Award,
  Layers,
  Code,
  Clock,
  Activity,
  Server,
  Database,
  Cloud,
  Shield,
  Workflow,
  Network,
  Building2,
  Zap,
  TrendingUp,
  Clock3,
  FileCode,
  Lock,
  Users,
  Link2,
  Globe,
  BookOpen,
  Lightbulb,
  Target,
  ChevronDown,
  ChevronUp,
  CheckCircle2
} from 'lucide-react';

// Carbon icons (new)
import { DataIntegration20, Collaborate20, Support20 } from '@carbon/icons-react';

import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';

const ServiceNow = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [showAllTech, setShowAllTech] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToServices = () => {
    if (servicesRef.current) {
      const yOffset = -80;
      const y = servicesRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const brandColor = '#6B9B8A';

  const highlights = [
    { value: '14+', label: 'Years Experience' },
    { value: 'Deep', label: 'Enterprise Expertise' },
    { value: 'Proven', label: 'Track Record' },
    { value: '50+', label: 'Projects Delivered' }
  ];

  const techStack = [
    { name: 'REST API', icon: Code },
    { name: 'SOAP', icon: Server },
    { name: 'JSON', icon: FileCode },
    { name: 'XML', icon: Globe },
    { name: 'OAuth', icon: Lock },
    { name: 'LDAP', icon: Users },
    { name: 'SQL', icon: Database },
    { name: 'Webhooks', icon: Link2 }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navigation />

      {/* Breadcrumb - 2x Grid: 16px padding */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="hover:text-gray-900 transition-colors">Services</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services#platforms" className="hover:text-gray-900 transition-colors">IT Platforms</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">ServiceNow</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - 2x Grid: 80px section padding, 16px gaps */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ background: `linear-gradient(135deg, #0F172A 0%, #1E293B 50%, ${brandColor}20 100%)` }}>
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: brandColor }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600 rounded-full blur-3xl" />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-8"
                style={{ backgroundColor: `${brandColor}30`, color: brandColor }}
              >
                ServiceNow Integration
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-[1.15] tracking-tight">
                Secure Your ServiceNow Transition
              </h1>
          
              <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
                Risk-mapped integrations that prevent SLA breaches and ensure data continuity 
                between your core systems and ServiceNow workflows.
              </p>
          
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90"
                  style={{ backgroundColor: brandColor }}
                >
                  Free Migration Assessment
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={scrollToServices}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-all"
                >
                  View Services
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
          
              {/* Mobile: Key stats row - 2x Grid: 16px gap */}
              <div className="lg:hidden flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Server className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Legacy Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Network className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">ServiceNow</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Workflow className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Automation</span>
                </div>
              </div>
            </div>

            {/* Right: Integration Diagram */}
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Legacy Systems - Left */}
                <div className="absolute left-0 top-1/4 flex flex-col gap-6">
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                      <Server className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Legacy Servers</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}25` }}>
                      <Database className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Databases</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}20` }}>
                      <Cloud className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Cloud Apps</span>
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <line x1="120" y1="100" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="200" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="300" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                </svg>

                {/* ServiceNow Platform - Center */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative flex flex-col items-center">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: brandColor }}>
                      <Network className="w-10 h-10 text-white" />
                    </div>
                    <div className="mt-3 bg-slate-800/90 backdrop-blur rounded-full px-3 py-1 border border-slate-700">
                      <span className="text-xs font-medium text-white">ServiceNow</span>
                    </div>
                    <div className="absolute inset-0 rounded-xl animate-ping opacity-30" style={{ backgroundColor: brandColor }} />
                  </div>
                </div>

                {/* Output - Right */}
                <div className="absolute right-0 top-1/4 flex flex-col gap-3">
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}30` }}>
                      <Workflow className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">Automated Workflows</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}25` }}>
                      <Shield className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">SLA Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              {highlights.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="font-semibold text-white">{stat.value}</span>
                  <span className="text-gray-300">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 2x Grid: 80px py, 32px gutter (gap-8) */}
      <section ref={servicesRef} id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Helping Businesses Plan and Optimise
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Our ServiceNow Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end ServiceNow capabilities from initial strategy through ongoing optimisation
            </p>
          </div>

          {/* 3-col grid: 32px gutter (2x Grid) */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Consultation - 32px padding (2x Grid unit) */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-50">
                  <MessageSquare className="w-7 h-7 text-blue-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Consultation</h3>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">2-4 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Strategic planning and roadmap development to ensure your ServiceNow investment delivers maximum ROI.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Current state assessment & gap analysis</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Module selection & architecture design</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Risk-mapped migration roadmap</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>ROI projection & business case</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Implementation */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-amber-50">
                  <Settings className="w-7 h-7 text-amber-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Implementation</h3>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">8 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Rapid, risk-mapped deployment with our proven 8-week go-live methodology.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Platform configuration & custom workflows</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Legacy system integrations (REST, SOAP, etc.)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Secure data migration & validation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>User training & go-live support</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Support */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-green-50">
                  <Headphones className="w-7 h-7 text-green-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Support</h3>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Ongoing</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  24/7 managed services with SLA-backed response times and continuous optimisation.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>24/7 technical support (15-min response)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Platform updates & security patches</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Performance monitoring & optimisation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Quarterly business reviews</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Case Studies - 2x Grid: 80px py, 32px spacing (space-y-8) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Proven Results for Enterprise Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world implementations delivering measurable business outcomes
            </p>
          </div>

          {/* 32px spacing between case studies (2x Grid) */}
          <div className="space-y-8">
            {/* Case Study 1 */}
            <Link 
              to="/projects/case-study/telco-service-desk-it-process-migration-to-servicenow"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: `linear-gradient(135deg, ${brandColor}30, ${brandColor}15)` }}>
                  <Building2 className="w-20 h-20" style={{ color: `${brandColor}80` }} />
                  <span className="text-sm font-medium" style={{ color: `${brandColor}` }}>Jazz</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Telecom</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Migration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    Enabling 99.95% uptime and 24/7 follow-the-sun support for Pakistan&apos;s largest telecom through ServiceNow Cloud migration
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Pakistan&apos;s largest telecommunications provider modernised their service desk
                    and migrated to ServiceNow Cloud, enabling 24/7 follow-the-sun support operations
                    with 99.95% platform availability.
                  </p>
                  {/* Metrics: 24px gap (1.5x units) */}
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">99.95%</div>
                        <div className="text-xs text-gray-500">Uptime SLA</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock3 className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">24/7</div>
                        <div className="text-xs text-gray-500">Coverage</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}15` }}>
                        <Activity className="w-5 h-5" style={{ color: brandColor }} />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">52%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link 
              to="/projects/case-study/servicenow-incident-automation"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: 'linear-gradient(135deg, #F5F0EB, #EDE8E3)' }}>
                  <Zap className="w-20 h-20 text-amber-500" />
                  <span className="text-sm font-medium text-amber-700">Client Photo</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">Automation</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Integration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    40% faster incident resolution for major telecom through intelligent ServiceNow automation
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Developed an intelligent microservice bridge integrating network alarms with ServiceNow,
                    eliminating manual incident handling and reducing response times through automated correlation
                    and smart routing.
                  </p>
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-50">
                        <Zap className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">40%</div>
                        <div className="text-xs text-gray-500">Less Manual Work</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-50">
                        <Activity className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">98%</div>
                        <div className="text-xs text-gray-500">SLA Compliance</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">45%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section - 2x Grid: 80px py */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] mb-4 block" style={{ color: '#6B9B8A' }}>
              Client Success
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-6 left-6 text-8xl font-serif text-gray-100 leading-none">&quot;</div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Jazz</p>
                  <p className="text-xs text-gray-500">Pakistan&apos;s Largest Telecom</p>
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                &quot;Perception IT&apos;s expertise in migrating our IBM Maximo ticketing system to ServiceNow was invaluable.
                <br /><br />
                Their smooth and meticulous approach ensured a seamless transition, eliminating the need for on-premises hardware and offering our team a robust cloud-based solution. This has resulted in improved accessibility, increased efficiency, and overall cost savings.&quot;
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-500">UI</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Usman Ikram</p>
                  <p className="text-sm text-gray-500">Manager, SQM & Automation Support, Jazz</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688
```


## License: unknown
https://github.com/ckiee/cookieblob/blob/b2c2498085b10f7f1d5e05525c202f325361ece2/frontend/src/routes/Dashboard.svelte

```
Perfect! I'll provide the complete updated ServiceNow.tsx with 2x Grid conversion and Carbon icon integration. Since I don't have direct terminal access, here are the steps:

**Step 1: Install Carbon icons**
```bash
npm install @carbon/icons-react
```

**Step 2: Updated ServiceNow.tsx** with all 2x Grid spacing and Carbon icons:

```tsx
import { useEffect, useRef, useState } from 'react';
import {
  // Lucide icons (existing)
  ArrowRight,
  MessageSquare,
  Settings,
  Headphones,
  Award,
  Layers,
  Code,
  Clock,
  Activity,
  Server,
  Database,
  Cloud,
  Shield,
  Workflow,
  Network,
  Building2,
  Zap,
  TrendingUp,
  Clock3,
  FileCode,
  Lock,
  Users,
  Link2,
  Globe,
  BookOpen,
  Lightbulb,
  Target,
  ChevronDown,
  ChevronUp,
  CheckCircle2
} from 'lucide-react';

// Carbon icons (new)
import { DataIntegration20, Collaborate20, Support20 } from '@carbon/icons-react';

import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';

const ServiceNow = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [showAllTech, setShowAllTech] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToServices = () => {
    if (servicesRef.current) {
      const yOffset = -80;
      const y = servicesRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const brandColor = '#6B9B8A';

  const highlights = [
    { value: '14+', label: 'Years Experience' },
    { value: 'Deep', label: 'Enterprise Expertise' },
    { value: 'Proven', label: 'Track Record' },
    { value: '50+', label: 'Projects Delivered' }
  ];

  const techStack = [
    { name: 'REST API', icon: Code },
    { name: 'SOAP', icon: Server },
    { name: 'JSON', icon: FileCode },
    { name: 'XML', icon: Globe },
    { name: 'OAuth', icon: Lock },
    { name: 'LDAP', icon: Users },
    { name: 'SQL', icon: Database },
    { name: 'Webhooks', icon: Link2 }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navigation />

      {/* Breadcrumb - 2x Grid: 16px padding */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="hover:text-gray-900 transition-colors">Services</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services#platforms" className="hover:text-gray-900 transition-colors">IT Platforms</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">ServiceNow</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - 2x Grid: 80px section padding, 16px gaps */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ background: `linear-gradient(135deg, #0F172A 0%, #1E293B 50%, ${brandColor}20 100%)` }}>
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: brandColor }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600 rounded-full blur-3xl" />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-8"
                style={{ backgroundColor: `${brandColor}30`, color: brandColor }}
              >
                ServiceNow Integration
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-[1.15] tracking-tight">
                Secure Your ServiceNow Transition
              </h1>
          
              <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
                Risk-mapped integrations that prevent SLA breaches and ensure data continuity 
                between your core systems and ServiceNow workflows.
              </p>
          
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90"
                  style={{ backgroundColor: brandColor }}
                >
                  Free Migration Assessment
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={scrollToServices}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-all"
                >
                  View Services
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
          
              {/* Mobile: Key stats row - 2x Grid: 16px gap */}
              <div className="lg:hidden flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Server className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Legacy Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Network className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">ServiceNow</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Workflow className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Automation</span>
                </div>
              </div>
            </div>

            {/* Right: Integration Diagram */}
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Legacy Systems - Left */}
                <div className="absolute left-0 top-1/4 flex flex-col gap-6">
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                      <Server className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Legacy Servers</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}25` }}>
                      <Database className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Databases</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}20` }}>
                      <Cloud className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Cloud Apps</span>
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <line x1="120" y1="100" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="200" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="300" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                </svg>

                {/* ServiceNow Platform - Center */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative flex flex-col items-center">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: brandColor }}>
                      <Network className="w-10 h-10 text-white" />
                    </div>
                    <div className="mt-3 bg-slate-800/90 backdrop-blur rounded-full px-3 py-1 border border-slate-700">
                      <span className="text-xs font-medium text-white">ServiceNow</span>
                    </div>
                    <div className="absolute inset-0 rounded-xl animate-ping opacity-30" style={{ backgroundColor: brandColor }} />
                  </div>
                </div>

                {/* Output - Right */}
                <div className="absolute right-0 top-1/4 flex flex-col gap-3">
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}30` }}>
                      <Workflow className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">Automated Workflows</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}25` }}>
                      <Shield className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">SLA Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              {highlights.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="font-semibold text-white">{stat.value}</span>
                  <span className="text-gray-300">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 2x Grid: 80px py, 32px gutter (gap-8) */}
      <section ref={servicesRef} id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Helping Businesses Plan and Optimise
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Our ServiceNow Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end ServiceNow capabilities from initial strategy through ongoing optimisation
            </p>
          </div>

          {/* 3-col grid: 32px gutter (2x Grid) */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Consultation - 32px padding (2x Grid unit) */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-50">
                  <MessageSquare className="w-7 h-7 text-blue-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Consultation</h3>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">2-4 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Strategic planning and roadmap development to ensure your ServiceNow investment delivers maximum ROI.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Current state assessment & gap analysis</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Module selection & architecture design</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Risk-mapped migration roadmap</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>ROI projection & business case</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Implementation */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-amber-50">
                  <Settings className="w-7 h-7 text-amber-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Implementation</h3>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">8 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Rapid, risk-mapped deployment with our proven 8-week go-live methodology.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Platform configuration & custom workflows</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Legacy system integrations (REST, SOAP, etc.)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Secure data migration & validation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>User training & go-live support</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Support */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-green-50">
                  <Headphones className="w-7 h-7 text-green-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Support</h3>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Ongoing</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  24/7 managed services with SLA-backed response times and continuous optimisation.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>24/7 technical support (15-min response)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Platform updates & security patches</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Performance monitoring & optimisation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Quarterly business reviews</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Case Studies - 2x Grid: 80px py, 32px spacing (space-y-8) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Proven Results for Enterprise Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world implementations delivering measurable business outcomes
            </p>
          </div>

          {/* 32px spacing between case studies (2x Grid) */}
          <div className="space-y-8">
            {/* Case Study 1 */}
            <Link 
              to="/projects/case-study/telco-service-desk-it-process-migration-to-servicenow"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: `linear-gradient(135deg, ${brandColor}30, ${brandColor}15)` }}>
                  <Building2 className="w-20 h-20" style={{ color: `${brandColor}80` }} />
                  <span className="text-sm font-medium" style={{ color: `${brandColor}` }}>Jazz</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Telecom</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Migration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    Enabling 99.95% uptime and 24/7 follow-the-sun support for Pakistan&apos;s largest telecom through ServiceNow Cloud migration
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Pakistan&apos;s largest telecommunications provider modernised their service desk
                    and migrated to ServiceNow Cloud, enabling 24/7 follow-the-sun support operations
                    with 99.95% platform availability.
                  </p>
                  {/* Metrics: 24px gap (1.5x units) */}
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">99.95%</div>
                        <div className="text-xs text-gray-500">Uptime SLA</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock3 className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">24/7</div>
                        <div className="text-xs text-gray-500">Coverage</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}15` }}>
                        <Activity className="w-5 h-5" style={{ color: brandColor }} />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">52%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link 
              to="/projects/case-study/servicenow-incident-automation"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: 'linear-gradient(135deg, #F5F0EB, #EDE8E3)' }}>
                  <Zap className="w-20 h-20 text-amber-500" />
                  <span className="text-sm font-medium text-amber-700">Client Photo</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">Automation</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Integration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    40% faster incident resolution for major telecom through intelligent ServiceNow automation
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Developed an intelligent microservice bridge integrating network alarms with ServiceNow,
                    eliminating manual incident handling and reducing response times through automated correlation
                    and smart routing.
                  </p>
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-50">
                        <Zap className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">40%</div>
                        <div className="text-xs text-gray-500">Less Manual Work</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-50">
                        <Activity className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">98%</div>
                        <div className="text-xs text-gray-500">SLA Compliance</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">45%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section - 2x Grid: 80px py */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] mb-4 block" style={{ color: '#6B9B8A' }}>
              Client Success
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-6 left-6 text-8xl font-serif text-gray-100 leading-none">&quot;</div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Jazz</p>
                  <p className="text-xs text-gray-500">Pakistan&apos;s Largest Telecom</p>
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                &quot;Perception IT&apos;s expertise in migrating our IBM Maximo ticketing system to ServiceNow was invaluable.
                <br /><br />
                Their smooth and meticulous approach ensured a seamless transition, eliminating the need for on-premises hardware and offering our team a robust cloud-based solution. This has resulted in improved accessibility, increased efficiency, and overall cost savings.&quot;
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-500">UI</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Usman Ikram</p>
                  <p className="text-sm text-gray-500">Manager, SQM & Automation Support, Jazz</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688
```


## License: unknown
https://github.com/121038217/MacuinBueno2/blob/9dfb3ee658bc4e752021578020a0ce84f6acd8eb/resources/views/cliente_consultarticket.blade.php

```
Perfect! I'll provide the complete updated ServiceNow.tsx with 2x Grid conversion and Carbon icon integration. Since I don't have direct terminal access, here are the steps:

**Step 1: Install Carbon icons**
```bash
npm install @carbon/icons-react
```

**Step 2: Updated ServiceNow.tsx** with all 2x Grid spacing and Carbon icons:

```tsx
import { useEffect, useRef, useState } from 'react';
import {
  // Lucide icons (existing)
  ArrowRight,
  MessageSquare,
  Settings,
  Headphones,
  Award,
  Layers,
  Code,
  Clock,
  Activity,
  Server,
  Database,
  Cloud,
  Shield,
  Workflow,
  Network,
  Building2,
  Zap,
  TrendingUp,
  Clock3,
  FileCode,
  Lock,
  Users,
  Link2,
  Globe,
  BookOpen,
  Lightbulb,
  Target,
  ChevronDown,
  ChevronUp,
  CheckCircle2
} from 'lucide-react';

// Carbon icons (new)
import { DataIntegration20, Collaborate20, Support20 } from '@carbon/icons-react';

import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';

const ServiceNow = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [showAllTech, setShowAllTech] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToServices = () => {
    if (servicesRef.current) {
      const yOffset = -80;
      const y = servicesRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const brandColor = '#6B9B8A';

  const highlights = [
    { value: '14+', label: 'Years Experience' },
    { value: 'Deep', label: 'Enterprise Expertise' },
    { value: 'Proven', label: 'Track Record' },
    { value: '50+', label: 'Projects Delivered' }
  ];

  const techStack = [
    { name: 'REST API', icon: Code },
    { name: 'SOAP', icon: Server },
    { name: 'JSON', icon: FileCode },
    { name: 'XML', icon: Globe },
    { name: 'OAuth', icon: Lock },
    { name: 'LDAP', icon: Users },
    { name: 'SQL', icon: Database },
    { name: 'Webhooks', icon: Link2 }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navigation />

      {/* Breadcrumb - 2x Grid: 16px padding */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="hover:text-gray-900 transition-colors">Services</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services#platforms" className="hover:text-gray-900 transition-colors">IT Platforms</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">ServiceNow</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - 2x Grid: 80px section padding, 16px gaps */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ background: `linear-gradient(135deg, #0F172A 0%, #1E293B 50%, ${brandColor}20 100%)` }}>
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: brandColor }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600 rounded-full blur-3xl" />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-8"
                style={{ backgroundColor: `${brandColor}30`, color: brandColor }}
              >
                ServiceNow Integration
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-[1.15] tracking-tight">
                Secure Your ServiceNow Transition
              </h1>
          
              <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
                Risk-mapped integrations that prevent SLA breaches and ensure data continuity 
                between your core systems and ServiceNow workflows.
              </p>
          
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90"
                  style={{ backgroundColor: brandColor }}
                >
                  Free Migration Assessment
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={scrollToServices}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-all"
                >
                  View Services
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
          
              {/* Mobile: Key stats row - 2x Grid: 16px gap */}
              <div className="lg:hidden flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Server className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Legacy Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Network className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">ServiceNow</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Workflow className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Automation</span>
                </div>
              </div>
            </div>

            {/* Right: Integration Diagram */}
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Legacy Systems - Left */}
                <div className="absolute left-0 top-1/4 flex flex-col gap-6">
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                      <Server className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Legacy Servers</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}25` }}>
                      <Database className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Databases</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}20` }}>
                      <Cloud className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Cloud Apps</span>
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <line x1="120" y1="100" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="200" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="300" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                </svg>

                {/* ServiceNow Platform - Center */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative flex flex-col items-center">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: brandColor }}>
                      <Network className="w-10 h-10 text-white" />
                    </div>
                    <div className="mt-3 bg-slate-800/90 backdrop-blur rounded-full px-3 py-1 border border-slate-700">
                      <span className="text-xs font-medium text-white">ServiceNow</span>
                    </div>
                    <div className="absolute inset-0 rounded-xl animate-ping opacity-30" style={{ backgroundColor: brandColor }} />
                  </div>
                </div>

                {/* Output - Right */}
                <div className="absolute right-0 top-1/4 flex flex-col gap-3">
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}30` }}>
                      <Workflow className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">Automated Workflows</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}25` }}>
                      <Shield className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">SLA Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              {highlights.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="font-semibold text-white">{stat.value}</span>
                  <span className="text-gray-300">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 2x Grid: 80px py, 32px gutter (gap-8) */}
      <section ref={servicesRef} id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Helping Businesses Plan and Optimise
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Our ServiceNow Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end ServiceNow capabilities from initial strategy through ongoing optimisation
            </p>
          </div>

          {/* 3-col grid: 32px gutter (2x Grid) */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Consultation - 32px padding (2x Grid unit) */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-50">
                  <MessageSquare className="w-7 h-7 text-blue-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Consultation</h3>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">2-4 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Strategic planning and roadmap development to ensure your ServiceNow investment delivers maximum ROI.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Current state assessment & gap analysis</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Module selection & architecture design</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Risk-mapped migration roadmap</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>ROI projection & business case</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Implementation */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-amber-50">
                  <Settings className="w-7 h-7 text-amber-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Implementation</h3>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">8 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Rapid, risk-mapped deployment with our proven 8-week go-live methodology.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Platform configuration & custom workflows</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Legacy system integrations (REST, SOAP, etc.)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Secure data migration & validation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>User training & go-live support</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Support */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-green-50">
                  <Headphones className="w-7 h-7 text-green-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Support</h3>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Ongoing</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  24/7 managed services with SLA-backed response times and continuous optimisation.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>24/7 technical support (15-min response)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Platform updates & security patches</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Performance monitoring & optimisation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Quarterly business reviews</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Case Studies - 2x Grid: 80px py, 32px spacing (space-y-8) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Proven Results for Enterprise Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world implementations delivering measurable business outcomes
            </p>
          </div>

          {/* 32px spacing between case studies (2x Grid) */}
          <div className="space-y-8">
            {/* Case Study 1 */}
            <Link 
              to="/projects/case-study/telco-service-desk-it-process-migration-to-servicenow"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: `linear-gradient(135deg, ${brandColor}30, ${brandColor}15)` }}>
                  <Building2 className="w-20 h-20" style={{ color: `${brandColor}80` }} />
                  <span className="text-sm font-medium" style={{ color: `${brandColor}` }}>Jazz</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Telecom</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Migration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    Enabling 99.95% uptime and 24/7 follow-the-sun support for Pakistan&apos;s largest telecom through ServiceNow Cloud migration
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Pakistan&apos;s largest telecommunications provider modernised their service desk
                    and migrated to ServiceNow Cloud, enabling 24/7 follow-the-sun support operations
                    with 99.95% platform availability.
                  </p>
                  {/* Metrics: 24px gap (1.5x units) */}
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">99.95%</div>
                        <div className="text-xs text-gray-500">Uptime SLA</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock3 className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">24/7</div>
                        <div className="text-xs text-gray-500">Coverage</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}15` }}>
                        <Activity className="w-5 h-5" style={{ color: brandColor }} />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">52%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link 
              to="/projects/case-study/servicenow-incident-automation"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: 'linear-gradient(135deg, #F5F0EB, #EDE8E3)' }}>
                  <Zap className="w-20 h-20 text-amber-500" />
                  <span className="text-sm font-medium text-amber-700">Client Photo</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">Automation</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Integration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    40% faster incident resolution for major telecom through intelligent ServiceNow automation
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Developed an intelligent microservice bridge integrating network alarms with ServiceNow,
                    eliminating manual incident handling and reducing response times through automated correlation
                    and smart routing.
                  </p>
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-50">
                        <Zap className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">40%</div>
                        <div className="text-xs text-gray-500">Less Manual Work</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-50">
                        <Activity className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">98%</div>
                        <div className="text-xs text-gray-500">SLA Compliance</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">45%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section - 2x Grid: 80px py */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] mb-4 block" style={{ color: '#6B9B8A' }}>
              Client Success
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-6 left-6 text-8xl font-serif text-gray-100 leading-none">&quot;</div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Jazz</p>
                  <p className="text-xs text-gray-500">Pakistan&apos;s Largest Telecom</p>
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                &quot;Perception IT&apos;s expertise in migrating our IBM Maximo ticketing system to ServiceNow was invaluable.
                <br /><br />
                Their smooth and meticulous approach ensured a seamless transition, eliminating the need for on-premises hardware and offering our team a robust cloud-based solution. This has resulted in improved accessibility, increased efficiency, and overall cost savings.&quot;
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-500">UI</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Usman Ikram</p>
                  <p className="text-sm text-gray-500">Manager, SQM & Automation Support, Jazz</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688
```


## License: unknown
https://github.com/wahajsaleem/wahajsaleem.github.io/blob/ea91ca8212afe466686deb2794b0473122688d0a/src/components/StarRating.jsx

```
Perfect! I'll provide the complete updated ServiceNow.tsx with 2x Grid conversion and Carbon icon integration. Since I don't have direct terminal access, here are the steps:

**Step 1: Install Carbon icons**
```bash
npm install @carbon/icons-react
```

**Step 2: Updated ServiceNow.tsx** with all 2x Grid spacing and Carbon icons:

```tsx
import { useEffect, useRef, useState } from 'react';
import {
  // Lucide icons (existing)
  ArrowRight,
  MessageSquare,
  Settings,
  Headphones,
  Award,
  Layers,
  Code,
  Clock,
  Activity,
  Server,
  Database,
  Cloud,
  Shield,
  Workflow,
  Network,
  Building2,
  Zap,
  TrendingUp,
  Clock3,
  FileCode,
  Lock,
  Users,
  Link2,
  Globe,
  BookOpen,
  Lightbulb,
  Target,
  ChevronDown,
  ChevronUp,
  CheckCircle2
} from 'lucide-react';

// Carbon icons (new)
import { DataIntegration20, Collaborate20, Support20 } from '@carbon/icons-react';

import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';

const ServiceNow = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [showAllTech, setShowAllTech] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToServices = () => {
    if (servicesRef.current) {
      const yOffset = -80;
      const y = servicesRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const brandColor = '#6B9B8A';

  const highlights = [
    { value: '14+', label: 'Years Experience' },
    { value: 'Deep', label: 'Enterprise Expertise' },
    { value: 'Proven', label: 'Track Record' },
    { value: '50+', label: 'Projects Delivered' }
  ];

  const techStack = [
    { name: 'REST API', icon: Code },
    { name: 'SOAP', icon: Server },
    { name: 'JSON', icon: FileCode },
    { name: 'XML', icon: Globe },
    { name: 'OAuth', icon: Lock },
    { name: 'LDAP', icon: Users },
    { name: 'SQL', icon: Database },
    { name: 'Webhooks', icon: Link2 }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navigation />

      {/* Breadcrumb - 2x Grid: 16px padding */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="hover:text-gray-900 transition-colors">Services</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services#platforms" className="hover:text-gray-900 transition-colors">IT Platforms</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">ServiceNow</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - 2x Grid: 80px section padding, 16px gaps */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ background: `linear-gradient(135deg, #0F172A 0%, #1E293B 50%, ${brandColor}20 100%)` }}>
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: brandColor }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600 rounded-full blur-3xl" />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-8"
                style={{ backgroundColor: `${brandColor}30`, color: brandColor }}
              >
                ServiceNow Integration
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-[1.15] tracking-tight">
                Secure Your ServiceNow Transition
              </h1>
          
              <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
                Risk-mapped integrations that prevent SLA breaches and ensure data continuity 
                between your core systems and ServiceNow workflows.
              </p>
          
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90"
                  style={{ backgroundColor: brandColor }}
                >
                  Free Migration Assessment
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={scrollToServices}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-all"
                >
                  View Services
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
          
              {/* Mobile: Key stats row - 2x Grid: 16px gap */}
              <div className="lg:hidden flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Server className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Legacy Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Network className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">ServiceNow</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Workflow className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Automation</span>
                </div>
              </div>
            </div>

            {/* Right: Integration Diagram */}
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Legacy Systems - Left */}
                <div className="absolute left-0 top-1/4 flex flex-col gap-6">
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                      <Server className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Legacy Servers</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}25` }}>
                      <Database className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Databases</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}20` }}>
                      <Cloud className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Cloud Apps</span>
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <line x1="120" y1="100" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="200" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="300" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                </svg>

                {/* ServiceNow Platform - Center */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative flex flex-col items-center">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: brandColor }}>
                      <Network className="w-10 h-10 text-white" />
                    </div>
                    <div className="mt-3 bg-slate-800/90 backdrop-blur rounded-full px-3 py-1 border border-slate-700">
                      <span className="text-xs font-medium text-white">ServiceNow</span>
                    </div>
                    <div className="absolute inset-0 rounded-xl animate-ping opacity-30" style={{ backgroundColor: brandColor }} />
                  </div>
                </div>

                {/* Output - Right */}
                <div className="absolute right-0 top-1/4 flex flex-col gap-3">
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}30` }}>
                      <Workflow className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">Automated Workflows</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}25` }}>
                      <Shield className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">SLA Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              {highlights.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="font-semibold text-white">{stat.value}</span>
                  <span className="text-gray-300">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 2x Grid: 80px py, 32px gutter (gap-8) */}
      <section ref={servicesRef} id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Helping Businesses Plan and Optimise
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Our ServiceNow Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end ServiceNow capabilities from initial strategy through ongoing optimisation
            </p>
          </div>

          {/* 3-col grid: 32px gutter (2x Grid) */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Consultation - 32px padding (2x Grid unit) */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-50">
                  <MessageSquare className="w-7 h-7 text-blue-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Consultation</h3>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">2-4 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Strategic planning and roadmap development to ensure your ServiceNow investment delivers maximum ROI.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Current state assessment & gap analysis</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Module selection & architecture design</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Risk-mapped migration roadmap</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>ROI projection & business case</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Implementation */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-amber-50">
                  <Settings className="w-7 h-7 text-amber-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Implementation</h3>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">8 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Rapid, risk-mapped deployment with our proven 8-week go-live methodology.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Platform configuration & custom workflows</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Legacy system integrations (REST, SOAP, etc.)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Secure data migration & validation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>User training & go-live support</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Support */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-green-50">
                  <Headphones className="w-7 h-7 text-green-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Support</h3>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Ongoing</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  24/7 managed services with SLA-backed response times and continuous optimisation.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>24/7 technical support (15-min response)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Platform updates & security patches</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Performance monitoring & optimisation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Quarterly business reviews</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Case Studies - 2x Grid: 80px py, 32px spacing (space-y-8) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Proven Results for Enterprise Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world implementations delivering measurable business outcomes
            </p>
          </div>

          {/* 32px spacing between case studies (2x Grid) */}
          <div className="space-y-8">
            {/* Case Study 1 */}
            <Link 
              to="/projects/case-study/telco-service-desk-it-process-migration-to-servicenow"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: `linear-gradient(135deg, ${brandColor}30, ${brandColor}15)` }}>
                  <Building2 className="w-20 h-20" style={{ color: `${brandColor}80` }} />
                  <span className="text-sm font-medium" style={{ color: `${brandColor}` }}>Jazz</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Telecom</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Migration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    Enabling 99.95% uptime and 24/7 follow-the-sun support for Pakistan&apos;s largest telecom through ServiceNow Cloud migration
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Pakistan&apos;s largest telecommunications provider modernised their service desk
                    and migrated to ServiceNow Cloud, enabling 24/7 follow-the-sun support operations
                    with 99.95% platform availability.
                  </p>
                  {/* Metrics: 24px gap (1.5x units) */}
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">99.95%</div>
                        <div className="text-xs text-gray-500">Uptime SLA</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock3 className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">24/7</div>
                        <div className="text-xs text-gray-500">Coverage</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}15` }}>
                        <Activity className="w-5 h-5" style={{ color: brandColor }} />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">52%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link 
              to="/projects/case-study/servicenow-incident-automation"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: 'linear-gradient(135deg, #F5F0EB, #EDE8E3)' }}>
                  <Zap className="w-20 h-20 text-amber-500" />
                  <span className="text-sm font-medium text-amber-700">Client Photo</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">Automation</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Integration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    40% faster incident resolution for major telecom through intelligent ServiceNow automation
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Developed an intelligent microservice bridge integrating network alarms with ServiceNow,
                    eliminating manual incident handling and reducing response times through automated correlation
                    and smart routing.
                  </p>
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-50">
                        <Zap className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">40%</div>
                        <div className="text-xs text-gray-500">Less Manual Work</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-50">
                        <Activity className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">98%</div>
                        <div className="text-xs text-gray-500">SLA Compliance</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">45%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section - 2x Grid: 80px py */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] mb-4 block" style={{ color: '#6B9B8A' }}>
              Client Success
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-6 left-6 text-8xl font-serif text-gray-100 leading-none">&quot;</div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Jazz</p>
                  <p className="text-xs text-gray-500">Pakistan&apos;s Largest Telecom</p>
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                &quot;Perception IT&apos;s expertise in migrating our IBM Maximo ticketing system to ServiceNow was invaluable.
                <br /><br />
                Their smooth and meticulous approach ensured a seamless transition, eliminating the need for on-premises hardware and offering our team a robust cloud-based solution. This has resulted in improved accessibility, increased efficiency, and overall cost savings.&quot;
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-500">UI</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Usman Ikram</p>
                  <p className="text-sm text-gray-500">Manager, SQM & Automation Support, Jazz</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688
```


## License: unknown
https://github.com/ckiee/cookieblob/blob/b2c2498085b10f7f1d5e05525c202f325361ece2/frontend/src/routes/Dashboard.svelte

```
Perfect! I'll provide the complete updated ServiceNow.tsx with 2x Grid conversion and Carbon icon integration. Since I don't have direct terminal access, here are the steps:

**Step 1: Install Carbon icons**
```bash
npm install @carbon/icons-react
```

**Step 2: Updated ServiceNow.tsx** with all 2x Grid spacing and Carbon icons:

```tsx
import { useEffect, useRef, useState } from 'react';
import {
  // Lucide icons (existing)
  ArrowRight,
  MessageSquare,
  Settings,
  Headphones,
  Award,
  Layers,
  Code,
  Clock,
  Activity,
  Server,
  Database,
  Cloud,
  Shield,
  Workflow,
  Network,
  Building2,
  Zap,
  TrendingUp,
  Clock3,
  FileCode,
  Lock,
  Users,
  Link2,
  Globe,
  BookOpen,
  Lightbulb,
  Target,
  ChevronDown,
  ChevronUp,
  CheckCircle2
} from 'lucide-react';

// Carbon icons (new)
import { DataIntegration20, Collaborate20, Support20 } from '@carbon/icons-react';

import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';

const ServiceNow = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [showAllTech, setShowAllTech] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToServices = () => {
    if (servicesRef.current) {
      const yOffset = -80;
      const y = servicesRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const brandColor = '#6B9B8A';

  const highlights = [
    { value: '14+', label: 'Years Experience' },
    { value: 'Deep', label: 'Enterprise Expertise' },
    { value: 'Proven', label: 'Track Record' },
    { value: '50+', label: 'Projects Delivered' }
  ];

  const techStack = [
    { name: 'REST API', icon: Code },
    { name: 'SOAP', icon: Server },
    { name: 'JSON', icon: FileCode },
    { name: 'XML', icon: Globe },
    { name: 'OAuth', icon: Lock },
    { name: 'LDAP', icon: Users },
    { name: 'SQL', icon: Database },
    { name: 'Webhooks', icon: Link2 }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navigation />

      {/* Breadcrumb - 2x Grid: 16px padding */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="hover:text-gray-900 transition-colors">Services</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services#platforms" className="hover:text-gray-900 transition-colors">IT Platforms</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">ServiceNow</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - 2x Grid: 80px section padding, 16px gaps */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ background: `linear-gradient(135deg, #0F172A 0%, #1E293B 50%, ${brandColor}20 100%)` }}>
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: brandColor }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600 rounded-full blur-3xl" />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-8"
                style={{ backgroundColor: `${brandColor}30`, color: brandColor }}
              >
                ServiceNow Integration
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-[1.15] tracking-tight">
                Secure Your ServiceNow Transition
              </h1>
          
              <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
                Risk-mapped integrations that prevent SLA breaches and ensure data continuity 
                between your core systems and ServiceNow workflows.
              </p>
          
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90"
                  style={{ backgroundColor: brandColor }}
                >
                  Free Migration Assessment
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={scrollToServices}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-all"
                >
                  View Services
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
          
              {/* Mobile: Key stats row - 2x Grid: 16px gap */}
              <div className="lg:hidden flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Server className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Legacy Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Network className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">ServiceNow</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Workflow className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Automation</span>
                </div>
              </div>
            </div>

            {/* Right: Integration Diagram */}
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Legacy Systems - Left */}
                <div className="absolute left-0 top-1/4 flex flex-col gap-6">
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                      <Server className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Legacy Servers</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}25` }}>
                      <Database className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Databases</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}20` }}>
                      <Cloud className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Cloud Apps</span>
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <line x1="120" y1="100" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="200" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="300" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                </svg>

                {/* ServiceNow Platform - Center */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative flex flex-col items-center">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: brandColor }}>
                      <Network className="w-10 h-10 text-white" />
                    </div>
                    <div className="mt-3 bg-slate-800/90 backdrop-blur rounded-full px-3 py-1 border border-slate-700">
                      <span className="text-xs font-medium text-white">ServiceNow</span>
                    </div>
                    <div className="absolute inset-0 rounded-xl animate-ping opacity-30" style={{ backgroundColor: brandColor }} />
                  </div>
                </div>

                {/* Output - Right */}
                <div className="absolute right-0 top-1/4 flex flex-col gap-3">
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}30` }}>
                      <Workflow className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">Automated Workflows</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}25` }}>
                      <Shield className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">SLA Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              {highlights.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="font-semibold text-white">{stat.value}</span>
                  <span className="text-gray-300">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 2x Grid: 80px py, 32px gutter (gap-8) */}
      <section ref={servicesRef} id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Helping Businesses Plan and Optimise
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Our ServiceNow Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end ServiceNow capabilities from initial strategy through ongoing optimisation
            </p>
          </div>

          {/* 3-col grid: 32px gutter (2x Grid) */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Consultation - 32px padding (2x Grid unit) */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-50">
                  <MessageSquare className="w-7 h-7 text-blue-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Consultation</h3>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">2-4 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Strategic planning and roadmap development to ensure your ServiceNow investment delivers maximum ROI.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Current state assessment & gap analysis</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Module selection & architecture design</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Risk-mapped migration roadmap</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>ROI projection & business case</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Implementation */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-amber-50">
                  <Settings className="w-7 h-7 text-amber-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Implementation</h3>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">8 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Rapid, risk-mapped deployment with our proven 8-week go-live methodology.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Platform configuration & custom workflows</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Legacy system integrations (REST, SOAP, etc.)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Secure data migration & validation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>User training & go-live support</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Support */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-green-50">
                  <Headphones className="w-7 h-7 text-green-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Support</h3>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Ongoing</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  24/7 managed services with SLA-backed response times and continuous optimisation.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>24/7 technical support (15-min response)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Platform updates & security patches</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Performance monitoring & optimisation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Quarterly business reviews</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Case Studies - 2x Grid: 80px py, 32px spacing (space-y-8) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Proven Results for Enterprise Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world implementations delivering measurable business outcomes
            </p>
          </div>

          {/* 32px spacing between case studies (2x Grid) */}
          <div className="space-y-8">
            {/* Case Study 1 */}
            <Link 
              to="/projects/case-study/telco-service-desk-it-process-migration-to-servicenow"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: `linear-gradient(135deg, ${brandColor}30, ${brandColor}15)` }}>
                  <Building2 className="w-20 h-20" style={{ color: `${brandColor}80` }} />
                  <span className="text-sm font-medium" style={{ color: `${brandColor}` }}>Jazz</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Telecom</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Migration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    Enabling 99.95% uptime and 24/7 follow-the-sun support for Pakistan&apos;s largest telecom through ServiceNow Cloud migration
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Pakistan&apos;s largest telecommunications provider modernised their service desk
                    and migrated to ServiceNow Cloud, enabling 24/7 follow-the-sun support operations
                    with 99.95% platform availability.
                  </p>
                  {/* Metrics: 24px gap (1.5x units) */}
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">99.95%</div>
                        <div className="text-xs text-gray-500">Uptime SLA</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock3 className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">24/7</div>
                        <div className="text-xs text-gray-500">Coverage</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}15` }}>
                        <Activity className="w-5 h-5" style={{ color: brandColor }} />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">52%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link 
              to="/projects/case-study/servicenow-incident-automation"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: 'linear-gradient(135deg, #F5F0EB, #EDE8E3)' }}>
                  <Zap className="w-20 h-20 text-amber-500" />
                  <span className="text-sm font-medium text-amber-700">Client Photo</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">Automation</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Integration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    40% faster incident resolution for major telecom through intelligent ServiceNow automation
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Developed an intelligent microservice bridge integrating network alarms with ServiceNow,
                    eliminating manual incident handling and reducing response times through automated correlation
                    and smart routing.
                  </p>
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-50">
                        <Zap className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">40%</div>
                        <div className="text-xs text-gray-500">Less Manual Work</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-50">
                        <Activity className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">98%</div>
                        <div className="text-xs text-gray-500">SLA Compliance</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">45%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section - 2x Grid: 80px py */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] mb-4 block" style={{ color: '#6B9B8A' }}>
              Client Success
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-6 left-6 text-8xl font-serif text-gray-100 leading-none">&quot;</div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Jazz</p>
                  <p className="text-xs text-gray-500">Pakistan&apos;s Largest Telecom</p>
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                &quot;Perception IT&apos;s expertise in migrating our IBM Maximo ticketing system to ServiceNow was invaluable.
                <br /><br />
                Their smooth and meticulous approach ensured a seamless transition, eliminating the need for on-premises hardware and offering our team a robust cloud-based solution. This has resulted in improved accessibility, increased efficiency, and overall cost savings.&quot;
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-500">UI</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Usman Ikram</p>
                  <p className="text-sm text-gray-500">Manager, SQM & Automation Support, Jazz</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688
```


## License: unknown
https://github.com/121038217/MacuinBueno2/blob/9dfb3ee658bc4e752021578020a0ce84f6acd8eb/resources/views/cliente_consultarticket.blade.php

```
Perfect! I'll provide the complete updated ServiceNow.tsx with 2x Grid conversion and Carbon icon integration. Since I don't have direct terminal access, here are the steps:

**Step 1: Install Carbon icons**
```bash
npm install @carbon/icons-react
```

**Step 2: Updated ServiceNow.tsx** with all 2x Grid spacing and Carbon icons:

```tsx
import { useEffect, useRef, useState } from 'react';
import {
  // Lucide icons (existing)
  ArrowRight,
  MessageSquare,
  Settings,
  Headphones,
  Award,
  Layers,
  Code,
  Clock,
  Activity,
  Server,
  Database,
  Cloud,
  Shield,
  Workflow,
  Network,
  Building2,
  Zap,
  TrendingUp,
  Clock3,
  FileCode,
  Lock,
  Users,
  Link2,
  Globe,
  BookOpen,
  Lightbulb,
  Target,
  ChevronDown,
  ChevronUp,
  CheckCircle2
} from 'lucide-react';

// Carbon icons (new)
import { DataIntegration20, Collaborate20, Support20 } from '@carbon/icons-react';

import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';

const ServiceNow = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [showAllTech, setShowAllTech] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToServices = () => {
    if (servicesRef.current) {
      const yOffset = -80;
      const y = servicesRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const brandColor = '#6B9B8A';

  const highlights = [
    { value: '14+', label: 'Years Experience' },
    { value: 'Deep', label: 'Enterprise Expertise' },
    { value: 'Proven', label: 'Track Record' },
    { value: '50+', label: 'Projects Delivered' }
  ];

  const techStack = [
    { name: 'REST API', icon: Code },
    { name: 'SOAP', icon: Server },
    { name: 'JSON', icon: FileCode },
    { name: 'XML', icon: Globe },
    { name: 'OAuth', icon: Lock },
    { name: 'LDAP', icon: Users },
    { name: 'SQL', icon: Database },
    { name: 'Webhooks', icon: Link2 }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navigation />

      {/* Breadcrumb - 2x Grid: 16px padding */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="hover:text-gray-900 transition-colors">Services</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services#platforms" className="hover:text-gray-900 transition-colors">IT Platforms</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">ServiceNow</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - 2x Grid: 80px section padding, 16px gaps */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ background: `linear-gradient(135deg, #0F172A 0%, #1E293B 50%, ${brandColor}20 100%)` }}>
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: brandColor }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600 rounded-full blur-3xl" />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-8"
                style={{ backgroundColor: `${brandColor}30`, color: brandColor }}
              >
                ServiceNow Integration
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-[1.15] tracking-tight">
                Secure Your ServiceNow Transition
              </h1>
          
              <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
                Risk-mapped integrations that prevent SLA breaches and ensure data continuity 
                between your core systems and ServiceNow workflows.
              </p>
          
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90"
                  style={{ backgroundColor: brandColor }}
                >
                  Free Migration Assessment
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={scrollToServices}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-all"
                >
                  View Services
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
          
              {/* Mobile: Key stats row - 2x Grid: 16px gap */}
              <div className="lg:hidden flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Server className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Legacy Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Network className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">ServiceNow</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Workflow className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Automation</span>
                </div>
              </div>
            </div>

            {/* Right: Integration Diagram */}
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Legacy Systems - Left */}
                <div className="absolute left-0 top-1/4 flex flex-col gap-6">
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                      <Server className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Legacy Servers</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}25` }}>
                      <Database className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Databases</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}20` }}>
                      <Cloud className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Cloud Apps</span>
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <line x1="120" y1="100" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="200" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="300" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                </svg>

                {/* ServiceNow Platform - Center */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative flex flex-col items-center">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: brandColor }}>
                      <Network className="w-10 h-10 text-white" />
                    </div>
                    <div className="mt-3 bg-slate-800/90 backdrop-blur rounded-full px-3 py-1 border border-slate-700">
                      <span className="text-xs font-medium text-white">ServiceNow</span>
                    </div>
                    <div className="absolute inset-0 rounded-xl animate-ping opacity-30" style={{ backgroundColor: brandColor }} />
                  </div>
                </div>

                {/* Output - Right */}
                <div className="absolute right-0 top-1/4 flex flex-col gap-3">
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}30` }}>
                      <Workflow className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">Automated Workflows</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}25` }}>
                      <Shield className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">SLA Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              {highlights.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="font-semibold text-white">{stat.value}</span>
                  <span className="text-gray-300">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 2x Grid: 80px py, 32px gutter (gap-8) */}
      <section ref={servicesRef} id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Helping Businesses Plan and Optimise
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Our ServiceNow Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end ServiceNow capabilities from initial strategy through ongoing optimisation
            </p>
          </div>

          {/* 3-col grid: 32px gutter (2x Grid) */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Consultation - 32px padding (2x Grid unit) */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-50">
                  <MessageSquare className="w-7 h-7 text-blue-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Consultation</h3>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">2-4 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Strategic planning and roadmap development to ensure your ServiceNow investment delivers maximum ROI.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Current state assessment & gap analysis</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Module selection & architecture design</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Risk-mapped migration roadmap</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>ROI projection & business case</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Implementation */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-amber-50">
                  <Settings className="w-7 h-7 text-amber-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Implementation</h3>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">8 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Rapid, risk-mapped deployment with our proven 8-week go-live methodology.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Platform configuration & custom workflows</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Legacy system integrations (REST, SOAP, etc.)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Secure data migration & validation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>User training & go-live support</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Support */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-green-50">
                  <Headphones className="w-7 h-7 text-green-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Support</h3>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Ongoing</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  24/7 managed services with SLA-backed response times and continuous optimisation.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>24/7 technical support (15-min response)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Platform updates & security patches</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Performance monitoring & optimisation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Quarterly business reviews</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Case Studies - 2x Grid: 80px py, 32px spacing (space-y-8) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Proven Results for Enterprise Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world implementations delivering measurable business outcomes
            </p>
          </div>

          {/* 32px spacing between case studies (2x Grid) */}
          <div className="space-y-8">
            {/* Case Study 1 */}
            <Link 
              to="/projects/case-study/telco-service-desk-it-process-migration-to-servicenow"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: `linear-gradient(135deg, ${brandColor}30, ${brandColor}15)` }}>
                  <Building2 className="w-20 h-20" style={{ color: `${brandColor}80` }} />
                  <span className="text-sm font-medium" style={{ color: `${brandColor}` }}>Jazz</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Telecom</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Migration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    Enabling 99.95% uptime and 24/7 follow-the-sun support for Pakistan&apos;s largest telecom through ServiceNow Cloud migration
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Pakistan&apos;s largest telecommunications provider modernised their service desk
                    and migrated to ServiceNow Cloud, enabling 24/7 follow-the-sun support operations
                    with 99.95% platform availability.
                  </p>
                  {/* Metrics: 24px gap (1.5x units) */}
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">99.95%</div>
                        <div className="text-xs text-gray-500">Uptime SLA</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock3 className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">24/7</div>
                        <div className="text-xs text-gray-500">Coverage</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}15` }}>
                        <Activity className="w-5 h-5" style={{ color: brandColor }} />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">52%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link 
              to="/projects/case-study/servicenow-incident-automation"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: 'linear-gradient(135deg, #F5F0EB, #EDE8E3)' }}>
                  <Zap className="w-20 h-20 text-amber-500" />
                  <span className="text-sm font-medium text-amber-700">Client Photo</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">Automation</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Integration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    40% faster incident resolution for major telecom through intelligent ServiceNow automation
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Developed an intelligent microservice bridge integrating network alarms with ServiceNow,
                    eliminating manual incident handling and reducing response times through automated correlation
                    and smart routing.
                  </p>
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-50">
                        <Zap className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">40%</div>
                        <div className="text-xs text-gray-500">Less Manual Work</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-50">
                        <Activity className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">98%</div>
                        <div className="text-xs text-gray-500">SLA Compliance</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">45%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section - 2x Grid: 80px py */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] mb-4 block" style={{ color: '#6B9B8A' }}>
              Client Success
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-6 left-6 text-8xl font-serif text-gray-100 leading-none">&quot;</div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Jazz</p>
                  <p className="text-xs text-gray-500">Pakistan&apos;s Largest Telecom</p>
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                &quot;Perception IT&apos;s expertise in migrating our IBM Maximo ticketing system to ServiceNow was invaluable.
                <br /><br />
                Their smooth and meticulous approach ensured a seamless transition, eliminating the need for on-premises hardware and offering our team a robust cloud-based solution. This has resulted in improved accessibility, increased efficiency, and overall cost savings.&quot;
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-500">UI</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Usman Ikram</p>
                  <p className="text-sm text-gray-500">Manager, SQM & Automation Support, Jazz</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688
```


## License: unknown
https://github.com/wahajsaleem/wahajsaleem.github.io/blob/ea91ca8212afe466686deb2794b0473122688d0a/src/components/StarRating.jsx

```
Perfect! I'll provide the complete updated ServiceNow.tsx with 2x Grid conversion and Carbon icon integration. Since I don't have direct terminal access, here are the steps:

**Step 1: Install Carbon icons**
```bash
npm install @carbon/icons-react
```

**Step 2: Updated ServiceNow.tsx** with all 2x Grid spacing and Carbon icons:

```tsx
import { useEffect, useRef, useState } from 'react';
import {
  // Lucide icons (existing)
  ArrowRight,
  MessageSquare,
  Settings,
  Headphones,
  Award,
  Layers,
  Code,
  Clock,
  Activity,
  Server,
  Database,
  Cloud,
  Shield,
  Workflow,
  Network,
  Building2,
  Zap,
  TrendingUp,
  Clock3,
  FileCode,
  Lock,
  Users,
  Link2,
  Globe,
  BookOpen,
  Lightbulb,
  Target,
  ChevronDown,
  ChevronUp,
  CheckCircle2
} from 'lucide-react';

// Carbon icons (new)
import { DataIntegration20, Collaborate20, Support20 } from '@carbon/icons-react';

import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';

const ServiceNow = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [showAllTech, setShowAllTech] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToServices = () => {
    if (servicesRef.current) {
      const yOffset = -80;
      const y = servicesRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const brandColor = '#6B9B8A';

  const highlights = [
    { value: '14+', label: 'Years Experience' },
    { value: 'Deep', label: 'Enterprise Expertise' },
    { value: 'Proven', label: 'Track Record' },
    { value: '50+', label: 'Projects Delivered' }
  ];

  const techStack = [
    { name: 'REST API', icon: Code },
    { name: 'SOAP', icon: Server },
    { name: 'JSON', icon: FileCode },
    { name: 'XML', icon: Globe },
    { name: 'OAuth', icon: Lock },
    { name: 'LDAP', icon: Users },
    { name: 'SQL', icon: Database },
    { name: 'Webhooks', icon: Link2 }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navigation />

      {/* Breadcrumb - 2x Grid: 16px padding */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="hover:text-gray-900 transition-colors">Services</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services#platforms" className="hover:text-gray-900 transition-colors">IT Platforms</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">ServiceNow</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - 2x Grid: 80px section padding, 16px gaps */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ background: `linear-gradient(135deg, #0F172A 0%, #1E293B 50%, ${brandColor}20 100%)` }}>
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: brandColor }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600 rounded-full blur-3xl" />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-8"
                style={{ backgroundColor: `${brandColor}30`, color: brandColor }}
              >
                ServiceNow Integration
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-[1.15] tracking-tight">
                Secure Your ServiceNow Transition
              </h1>
          
              <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
                Risk-mapped integrations that prevent SLA breaches and ensure data continuity 
                between your core systems and ServiceNow workflows.
              </p>
          
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90"
                  style={{ backgroundColor: brandColor }}
                >
                  Free Migration Assessment
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={scrollToServices}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-all"
                >
                  View Services
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
          
              {/* Mobile: Key stats row - 2x Grid: 16px gap */}
              <div className="lg:hidden flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Server className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Legacy Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Network className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">ServiceNow</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Workflow className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Automation</span>
                </div>
              </div>
            </div>

            {/* Right: Integration Diagram */}
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Legacy Systems - Left */}
                <div className="absolute left-0 top-1/4 flex flex-col gap-6">
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                      <Server className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Legacy Servers</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}25` }}>
                      <Database className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Databases</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}20` }}>
                      <Cloud className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Cloud Apps</span>
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <line x1="120" y1="100" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="200" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="300" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                </svg>

                {/* ServiceNow Platform - Center */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative flex flex-col items-center">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: brandColor }}>
                      <Network className="w-10 h-10 text-white" />
                    </div>
                    <div className="mt-3 bg-slate-800/90 backdrop-blur rounded-full px-3 py-1 border border-slate-700">
                      <span className="text-xs font-medium text-white">ServiceNow</span>
                    </div>
                    <div className="absolute inset-0 rounded-xl animate-ping opacity-30" style={{ backgroundColor: brandColor }} />
                  </div>
                </div>

                {/* Output - Right */}
                <div className="absolute right-0 top-1/4 flex flex-col gap-3">
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}30` }}>
                      <Workflow className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">Automated Workflows</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}25` }}>
                      <Shield className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">SLA Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              {highlights.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="font-semibold text-white">{stat.value}</span>
                  <span className="text-gray-300">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 2x Grid: 80px py, 32px gutter (gap-8) */}
      <section ref={servicesRef} id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Helping Businesses Plan and Optimise
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Our ServiceNow Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end ServiceNow capabilities from initial strategy through ongoing optimisation
            </p>
          </div>

          {/* 3-col grid: 32px gutter (2x Grid) */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Consultation - 32px padding (2x Grid unit) */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-50">
                  <MessageSquare className="w-7 h-7 text-blue-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Consultation</h3>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">2-4 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Strategic planning and roadmap development to ensure your ServiceNow investment delivers maximum ROI.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Current state assessment & gap analysis</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Module selection & architecture design</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Risk-mapped migration roadmap</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>ROI projection & business case</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Implementation */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-amber-50">
                  <Settings className="w-7 h-7 text-amber-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Implementation</h3>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">8 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Rapid, risk-mapped deployment with our proven 8-week go-live methodology.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Platform configuration & custom workflows</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Legacy system integrations (REST, SOAP, etc.)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Secure data migration & validation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>User training & go-live support</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Support */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-green-50">
                  <Headphones className="w-7 h-7 text-green-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Support</h3>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Ongoing</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  24/7 managed services with SLA-backed response times and continuous optimisation.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>24/7 technical support (15-min response)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Platform updates & security patches</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Performance monitoring & optimisation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Quarterly business reviews</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Case Studies - 2x Grid: 80px py, 32px spacing (space-y-8) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Proven Results for Enterprise Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world implementations delivering measurable business outcomes
            </p>
          </div>

          {/* 32px spacing between case studies (2x Grid) */}
          <div className="space-y-8">
            {/* Case Study 1 */}
            <Link 
              to="/projects/case-study/telco-service-desk-it-process-migration-to-servicenow"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: `linear-gradient(135deg, ${brandColor}30, ${brandColor}15)` }}>
                  <Building2 className="w-20 h-20" style={{ color: `${brandColor}80` }} />
                  <span className="text-sm font-medium" style={{ color: `${brandColor}` }}>Jazz</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Telecom</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Migration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    Enabling 99.95% uptime and 24/7 follow-the-sun support for Pakistan&apos;s largest telecom through ServiceNow Cloud migration
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Pakistan&apos;s largest telecommunications provider modernised their service desk
                    and migrated to ServiceNow Cloud, enabling 24/7 follow-the-sun support operations
                    with 99.95% platform availability.
                  </p>
                  {/* Metrics: 24px gap (1.5x units) */}
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">99.95%</div>
                        <div className="text-xs text-gray-500">Uptime SLA</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock3 className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">24/7</div>
                        <div className="text-xs text-gray-500">Coverage</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}15` }}>
                        <Activity className="w-5 h-5" style={{ color: brandColor }} />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">52%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link 
              to="/projects/case-study/servicenow-incident-automation"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: 'linear-gradient(135deg, #F5F0EB, #EDE8E3)' }}>
                  <Zap className="w-20 h-20 text-amber-500" />
                  <span className="text-sm font-medium text-amber-700">Client Photo</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">Automation</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Integration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    40% faster incident resolution for major telecom through intelligent ServiceNow automation
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Developed an intelligent microservice bridge integrating network alarms with ServiceNow,
                    eliminating manual incident handling and reducing response times through automated correlation
                    and smart routing.
                  </p>
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-50">
                        <Zap className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">40%</div>
                        <div className="text-xs text-gray-500">Less Manual Work</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-50">
                        <Activity className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">98%</div>
                        <div className="text-xs text-gray-500">SLA Compliance</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">45%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section - 2x Grid: 80px py */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] mb-4 block" style={{ color: '#6B9B8A' }}>
              Client Success
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-6 left-6 text-8xl font-serif text-gray-100 leading-none">&quot;</div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Jazz</p>
                  <p className="text-xs text-gray-500">Pakistan&apos;s Largest Telecom</p>
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                &quot;Perception IT&apos;s expertise in migrating our IBM Maximo ticketing system to ServiceNow was invaluable.
                <br /><br />
                Their smooth and meticulous approach ensured a seamless transition, eliminating the need for on-premises hardware and offering our team a robust cloud-based solution. This has resulted in improved accessibility, increased efficiency, and overall cost savings.&quot;
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-500">UI</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Usman Ikram</p>
                  <p className="text-sm text-gray-500">Manager, SQM & Automation Support, Jazz</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688
```


## License: unknown
https://github.com/ckiee/cookieblob/blob/b2c2498085b10f7f1d5e05525c202f325361ece2/frontend/src/routes/Dashboard.svelte

```
Perfect! I'll provide the complete updated ServiceNow.tsx with 2x Grid conversion and Carbon icon integration. Since I don't have direct terminal access, here are the steps:

**Step 1: Install Carbon icons**
```bash
npm install @carbon/icons-react
```

**Step 2: Updated ServiceNow.tsx** with all 2x Grid spacing and Carbon icons:

```tsx
import { useEffect, useRef, useState } from 'react';
import {
  // Lucide icons (existing)
  ArrowRight,
  MessageSquare,
  Settings,
  Headphones,
  Award,
  Layers,
  Code,
  Clock,
  Activity,
  Server,
  Database,
  Cloud,
  Shield,
  Workflow,
  Network,
  Building2,
  Zap,
  TrendingUp,
  Clock3,
  FileCode,
  Lock,
  Users,
  Link2,
  Globe,
  BookOpen,
  Lightbulb,
  Target,
  ChevronDown,
  ChevronUp,
  CheckCircle2
} from 'lucide-react';

// Carbon icons (new)
import { DataIntegration20, Collaborate20, Support20 } from '@carbon/icons-react';

import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';

const ServiceNow = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [showAllTech, setShowAllTech] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToServices = () => {
    if (servicesRef.current) {
      const yOffset = -80;
      const y = servicesRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const brandColor = '#6B9B8A';

  const highlights = [
    { value: '14+', label: 'Years Experience' },
    { value: 'Deep', label: 'Enterprise Expertise' },
    { value: 'Proven', label: 'Track Record' },
    { value: '50+', label: 'Projects Delivered' }
  ];

  const techStack = [
    { name: 'REST API', icon: Code },
    { name: 'SOAP', icon: Server },
    { name: 'JSON', icon: FileCode },
    { name: 'XML', icon: Globe },
    { name: 'OAuth', icon: Lock },
    { name: 'LDAP', icon: Users },
    { name: 'SQL', icon: Database },
    { name: 'Webhooks', icon: Link2 }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navigation />

      {/* Breadcrumb - 2x Grid: 16px padding */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="hover:text-gray-900 transition-colors">Services</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services#platforms" className="hover:text-gray-900 transition-colors">IT Platforms</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">ServiceNow</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - 2x Grid: 80px section padding, 16px gaps */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ background: `linear-gradient(135deg, #0F172A 0%, #1E293B 50%, ${brandColor}20 100%)` }}>
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: brandColor }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600 rounded-full blur-3xl" />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-8"
                style={{ backgroundColor: `${brandColor}30`, color: brandColor }}
              >
                ServiceNow Integration
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-[1.15] tracking-tight">
                Secure Your ServiceNow Transition
              </h1>
          
              <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
                Risk-mapped integrations that prevent SLA breaches and ensure data continuity 
                between your core systems and ServiceNow workflows.
              </p>
          
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90"
                  style={{ backgroundColor: brandColor }}
                >
                  Free Migration Assessment
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={scrollToServices}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-all"
                >
                  View Services
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
          
              {/* Mobile: Key stats row - 2x Grid: 16px gap */}
              <div className="lg:hidden flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Server className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Legacy Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Network className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">ServiceNow</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Workflow className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Automation</span>
                </div>
              </div>
            </div>

            {/* Right: Integration Diagram */}
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Legacy Systems - Left */}
                <div className="absolute left-0 top-1/4 flex flex-col gap-6">
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                      <Server className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Legacy Servers</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}25` }}>
                      <Database className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Databases</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}20` }}>
                      <Cloud className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Cloud Apps</span>
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <line x1="120" y1="100" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="200" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="300" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                </svg>

                {/* ServiceNow Platform - Center */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative flex flex-col items-center">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: brandColor }}>
                      <Network className="w-10 h-10 text-white" />
                    </div>
                    <div className="mt-3 bg-slate-800/90 backdrop-blur rounded-full px-3 py-1 border border-slate-700">
                      <span className="text-xs font-medium text-white">ServiceNow</span>
                    </div>
                    <div className="absolute inset-0 rounded-xl animate-ping opacity-30" style={{ backgroundColor: brandColor }} />
                  </div>
                </div>

                {/* Output - Right */}
                <div className="absolute right-0 top-1/4 flex flex-col gap-3">
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}30` }}>
                      <Workflow className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">Automated Workflows</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}25` }}>
                      <Shield className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">SLA Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              {highlights.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="font-semibold text-white">{stat.value}</span>
                  <span className="text-gray-300">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 2x Grid: 80px py, 32px gutter (gap-8) */}
      <section ref={servicesRef} id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Helping Businesses Plan and Optimise
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Our ServiceNow Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end ServiceNow capabilities from initial strategy through ongoing optimisation
            </p>
          </div>

          {/* 3-col grid: 32px gutter (2x Grid) */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Consultation - 32px padding (2x Grid unit) */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-50">
                  <MessageSquare className="w-7 h-7 text-blue-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Consultation</h3>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">2-4 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Strategic planning and roadmap development to ensure your ServiceNow investment delivers maximum ROI.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Current state assessment & gap analysis</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Module selection & architecture design</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Risk-mapped migration roadmap</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>ROI projection & business case</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Implementation */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-amber-50">
                  <Settings className="w-7 h-7 text-amber-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Implementation</h3>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">8 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Rapid, risk-mapped deployment with our proven 8-week go-live methodology.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Platform configuration & custom workflows</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Legacy system integrations (REST, SOAP, etc.)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Secure data migration & validation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>User training & go-live support</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Support */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-green-50">
                  <Headphones className="w-7 h-7 text-green-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Support</h3>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Ongoing</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  24/7 managed services with SLA-backed response times and continuous optimisation.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>24/7 technical support (15-min response)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Platform updates & security patches</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Performance monitoring & optimisation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Quarterly business reviews</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Case Studies - 2x Grid: 80px py, 32px spacing (space-y-8) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Proven Results for Enterprise Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world implementations delivering measurable business outcomes
            </p>
          </div>

          {/* 32px spacing between case studies (2x Grid) */}
          <div className="space-y-8">
            {/* Case Study 1 */}
            <Link 
              to="/projects/case-study/telco-service-desk-it-process-migration-to-servicenow"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: `linear-gradient(135deg, ${brandColor}30, ${brandColor}15)` }}>
                  <Building2 className="w-20 h-20" style={{ color: `${brandColor}80` }} />
                  <span className="text-sm font-medium" style={{ color: `${brandColor}` }}>Jazz</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Telecom</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Migration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    Enabling 99.95% uptime and 24/7 follow-the-sun support for Pakistan&apos;s largest telecom through ServiceNow Cloud migration
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Pakistan&apos;s largest telecommunications provider modernised their service desk
                    and migrated to ServiceNow Cloud, enabling 24/7 follow-the-sun support operations
                    with 99.95% platform availability.
                  </p>
                  {/* Metrics: 24px gap (1.5x units) */}
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">99.95%</div>
                        <div className="text-xs text-gray-500">Uptime SLA</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock3 className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">24/7</div>
                        <div className="text-xs text-gray-500">Coverage</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}15` }}>
                        <Activity className="w-5 h-5" style={{ color: brandColor }} />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">52%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link 
              to="/projects/case-study/servicenow-incident-automation"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: 'linear-gradient(135deg, #F5F0EB, #EDE8E3)' }}>
                  <Zap className="w-20 h-20 text-amber-500" />
                  <span className="text-sm font-medium text-amber-700">Client Photo</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">Automation</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Integration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    40% faster incident resolution for major telecom through intelligent ServiceNow automation
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Developed an intelligent microservice bridge integrating network alarms with ServiceNow,
                    eliminating manual incident handling and reducing response times through automated correlation
                    and smart routing.
                  </p>
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-50">
                        <Zap className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">40%</div>
                        <div className="text-xs text-gray-500">Less Manual Work</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-50">
                        <Activity className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">98%</div>
                        <div className="text-xs text-gray-500">SLA Compliance</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">45%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section - 2x Grid: 80px py */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] mb-4 block" style={{ color: '#6B9B8A' }}>
              Client Success
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-6 left-6 text-8xl font-serif text-gray-100 leading-none">&quot;</div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Jazz</p>
                  <p className="text-xs text-gray-500">Pakistan&apos;s Largest Telecom</p>
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                &quot;Perception IT&apos;s expertise in migrating our IBM Maximo ticketing system to ServiceNow was invaluable.
                <br /><br />
                Their smooth and meticulous approach ensured a seamless transition, eliminating the need for on-premises hardware and offering our team a robust cloud-based solution. This has resulted in improved accessibility, increased efficiency, and overall cost savings.&quot;
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-500">UI</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Usman Ikram</p>
                  <p className="text-sm text-gray-500">Manager, SQM & Automation Support, Jazz</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688
```


## License: unknown
https://github.com/121038217/MacuinBueno2/blob/9dfb3ee658bc4e752021578020a0ce84f6acd8eb/resources/views/cliente_consultarticket.blade.php

```
Perfect! I'll provide the complete updated ServiceNow.tsx with 2x Grid conversion and Carbon icon integration. Since I don't have direct terminal access, here are the steps:

**Step 1: Install Carbon icons**
```bash
npm install @carbon/icons-react
```

**Step 2: Updated ServiceNow.tsx** with all 2x Grid spacing and Carbon icons:

```tsx
import { useEffect, useRef, useState } from 'react';
import {
  // Lucide icons (existing)
  ArrowRight,
  MessageSquare,
  Settings,
  Headphones,
  Award,
  Layers,
  Code,
  Clock,
  Activity,
  Server,
  Database,
  Cloud,
  Shield,
  Workflow,
  Network,
  Building2,
  Zap,
  TrendingUp,
  Clock3,
  FileCode,
  Lock,
  Users,
  Link2,
  Globe,
  BookOpen,
  Lightbulb,
  Target,
  ChevronDown,
  ChevronUp,
  CheckCircle2
} from 'lucide-react';

// Carbon icons (new)
import { DataIntegration20, Collaborate20, Support20 } from '@carbon/icons-react';

import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';

const ServiceNow = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [showAllTech, setShowAllTech] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToServices = () => {
    if (servicesRef.current) {
      const yOffset = -80;
      const y = servicesRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const brandColor = '#6B9B8A';

  const highlights = [
    { value: '14+', label: 'Years Experience' },
    { value: 'Deep', label: 'Enterprise Expertise' },
    { value: 'Proven', label: 'Track Record' },
    { value: '50+', label: 'Projects Delivered' }
  ];

  const techStack = [
    { name: 'REST API', icon: Code },
    { name: 'SOAP', icon: Server },
    { name: 'JSON', icon: FileCode },
    { name: 'XML', icon: Globe },
    { name: 'OAuth', icon: Lock },
    { name: 'LDAP', icon: Users },
    { name: 'SQL', icon: Database },
    { name: 'Webhooks', icon: Link2 }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navigation />

      {/* Breadcrumb - 2x Grid: 16px padding */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="hover:text-gray-900 transition-colors">Services</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services#platforms" className="hover:text-gray-900 transition-colors">IT Platforms</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">ServiceNow</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - 2x Grid: 80px section padding, 16px gaps */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ background: `linear-gradient(135deg, #0F172A 0%, #1E293B 50%, ${brandColor}20 100%)` }}>
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: brandColor }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600 rounded-full blur-3xl" />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-8"
                style={{ backgroundColor: `${brandColor}30`, color: brandColor }}
              >
                ServiceNow Integration
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-[1.15] tracking-tight">
                Secure Your ServiceNow Transition
              </h1>
          
              <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
                Risk-mapped integrations that prevent SLA breaches and ensure data continuity 
                between your core systems and ServiceNow workflows.
              </p>
          
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90"
                  style={{ backgroundColor: brandColor }}
                >
                  Free Migration Assessment
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={scrollToServices}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-all"
                >
                  View Services
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
          
              {/* Mobile: Key stats row - 2x Grid: 16px gap */}
              <div className="lg:hidden flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Server className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Legacy Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Network className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">ServiceNow</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Workflow className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Automation</span>
                </div>
              </div>
            </div>

            {/* Right: Integration Diagram */}
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Legacy Systems - Left */}
                <div className="absolute left-0 top-1/4 flex flex-col gap-6">
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                      <Server className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Legacy Servers</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}25` }}>
                      <Database className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Databases</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}20` }}>
                      <Cloud className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Cloud Apps</span>
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <line x1="120" y1="100" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="200" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="300" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                </svg>

                {/* ServiceNow Platform - Center */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative flex flex-col items-center">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: brandColor }}>
                      <Network className="w-10 h-10 text-white" />
                    </div>
                    <div className="mt-3 bg-slate-800/90 backdrop-blur rounded-full px-3 py-1 border border-slate-700">
                      <span className="text-xs font-medium text-white">ServiceNow</span>
                    </div>
                    <div className="absolute inset-0 rounded-xl animate-ping opacity-30" style={{ backgroundColor: brandColor }} />
                  </div>
                </div>

                {/* Output - Right */}
                <div className="absolute right-0 top-1/4 flex flex-col gap-3">
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}30` }}>
                      <Workflow className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">Automated Workflows</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}25` }}>
                      <Shield className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">SLA Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              {highlights.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="font-semibold text-white">{stat.value}</span>
                  <span className="text-gray-300">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 2x Grid: 80px py, 32px gutter (gap-8) */}
      <section ref={servicesRef} id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Helping Businesses Plan and Optimise
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Our ServiceNow Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end ServiceNow capabilities from initial strategy through ongoing optimisation
            </p>
          </div>

          {/* 3-col grid: 32px gutter (2x Grid) */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Consultation - 32px padding (2x Grid unit) */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-50">
                  <MessageSquare className="w-7 h-7 text-blue-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Consultation</h3>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">2-4 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Strategic planning and roadmap development to ensure your ServiceNow investment delivers maximum ROI.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Current state assessment & gap analysis</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Module selection & architecture design</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Risk-mapped migration roadmap</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>ROI projection & business case</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Implementation */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-amber-50">
                  <Settings className="w-7 h-7 text-amber-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Implementation</h3>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">8 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Rapid, risk-mapped deployment with our proven 8-week go-live methodology.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Platform configuration & custom workflows</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Legacy system integrations (REST, SOAP, etc.)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Secure data migration & validation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>User training & go-live support</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Support */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-green-50">
                  <Headphones className="w-7 h-7 text-green-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Support</h3>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Ongoing</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  24/7 managed services with SLA-backed response times and continuous optimisation.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>24/7 technical support (15-min response)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Platform updates & security patches</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Performance monitoring & optimisation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Quarterly business reviews</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Case Studies - 2x Grid: 80px py, 32px spacing (space-y-8) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Proven Results for Enterprise Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world implementations delivering measurable business outcomes
            </p>
          </div>

          {/* 32px spacing between case studies (2x Grid) */}
          <div className="space-y-8">
            {/* Case Study 1 */}
            <Link 
              to="/projects/case-study/telco-service-desk-it-process-migration-to-servicenow"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: `linear-gradient(135deg, ${brandColor}30, ${brandColor}15)` }}>
                  <Building2 className="w-20 h-20" style={{ color: `${brandColor}80` }} />
                  <span className="text-sm font-medium" style={{ color: `${brandColor}` }}>Jazz</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Telecom</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Migration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    Enabling 99.95% uptime and 24/7 follow-the-sun support for Pakistan&apos;s largest telecom through ServiceNow Cloud migration
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Pakistan&apos;s largest telecommunications provider modernised their service desk
                    and migrated to ServiceNow Cloud, enabling 24/7 follow-the-sun support operations
                    with 99.95% platform availability.
                  </p>
                  {/* Metrics: 24px gap (1.5x units) */}
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">99.95%</div>
                        <div className="text-xs text-gray-500">Uptime SLA</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock3 className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">24/7</div>
                        <div className="text-xs text-gray-500">Coverage</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}15` }}>
                        <Activity className="w-5 h-5" style={{ color: brandColor }} />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">52%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link 
              to="/projects/case-study/servicenow-incident-automation"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: 'linear-gradient(135deg, #F5F0EB, #EDE8E3)' }}>
                  <Zap className="w-20 h-20 text-amber-500" />
                  <span className="text-sm font-medium text-amber-700">Client Photo</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">Automation</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Integration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    40% faster incident resolution for major telecom through intelligent ServiceNow automation
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Developed an intelligent microservice bridge integrating network alarms with ServiceNow,
                    eliminating manual incident handling and reducing response times through automated correlation
                    and smart routing.
                  </p>
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-50">
                        <Zap className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">40%</div>
                        <div className="text-xs text-gray-500">Less Manual Work</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-50">
                        <Activity className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">98%</div>
                        <div className="text-xs text-gray-500">SLA Compliance</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">45%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section - 2x Grid: 80px py */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] mb-4 block" style={{ color: '#6B9B8A' }}>
              Client Success
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-6 left-6 text-8xl font-serif text-gray-100 leading-none">&quot;</div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Jazz</p>
                  <p className="text-xs text-gray-500">Pakistan&apos;s Largest Telecom</p>
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                &quot;Perception IT&apos;s expertise in migrating our IBM Maximo ticketing system to ServiceNow was invaluable.
                <br /><br />
                Their smooth and meticulous approach ensured a seamless transition, eliminating the need for on-premises hardware and offering our team a robust cloud-based solution. This has resulted in improved accessibility, increased efficiency, and overall cost savings.&quot;
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-500">UI</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Usman Ikram</p>
                  <p className="text-sm text-gray-500">Manager, SQM & Automation Support, Jazz</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688
```


## License: unknown
https://github.com/wahajsaleem/wahajsaleem.github.io/blob/ea91ca8212afe466686deb2794b0473122688d0a/src/components/StarRating.jsx

```
Perfect! I'll provide the complete updated ServiceNow.tsx with 2x Grid conversion and Carbon icon integration. Since I don't have direct terminal access, here are the steps:

**Step 1: Install Carbon icons**
```bash
npm install @carbon/icons-react
```

**Step 2: Updated ServiceNow.tsx** with all 2x Grid spacing and Carbon icons:

```tsx
import { useEffect, useRef, useState } from 'react';
import {
  // Lucide icons (existing)
  ArrowRight,
  MessageSquare,
  Settings,
  Headphones,
  Award,
  Layers,
  Code,
  Clock,
  Activity,
  Server,
  Database,
  Cloud,
  Shield,
  Workflow,
  Network,
  Building2,
  Zap,
  TrendingUp,
  Clock3,
  FileCode,
  Lock,
  Users,
  Link2,
  Globe,
  BookOpen,
  Lightbulb,
  Target,
  ChevronDown,
  ChevronUp,
  CheckCircle2
} from 'lucide-react';

// Carbon icons (new)
import { DataIntegration20, Collaborate20, Support20 } from '@carbon/icons-react';

import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';

const ServiceNow = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [showAllTech, setShowAllTech] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToServices = () => {
    if (servicesRef.current) {
      const yOffset = -80;
      const y = servicesRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const brandColor = '#6B9B8A';

  const highlights = [
    { value: '14+', label: 'Years Experience' },
    { value: 'Deep', label: 'Enterprise Expertise' },
    { value: 'Proven', label: 'Track Record' },
    { value: '50+', label: 'Projects Delivered' }
  ];

  const techStack = [
    { name: 'REST API', icon: Code },
    { name: 'SOAP', icon: Server },
    { name: 'JSON', icon: FileCode },
    { name: 'XML', icon: Globe },
    { name: 'OAuth', icon: Lock },
    { name: 'LDAP', icon: Users },
    { name: 'SQL', icon: Database },
    { name: 'Webhooks', icon: Link2 }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navigation />

      {/* Breadcrumb - 2x Grid: 16px padding */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="hover:text-gray-900 transition-colors">Services</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services#platforms" className="hover:text-gray-900 transition-colors">IT Platforms</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">ServiceNow</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - 2x Grid: 80px section padding, 16px gaps */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ background: `linear-gradient(135deg, #0F172A 0%, #1E293B 50%, ${brandColor}20 100%)` }}>
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: brandColor }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600 rounded-full blur-3xl" />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-8"
                style={{ backgroundColor: `${brandColor}30`, color: brandColor }}
              >
                ServiceNow Integration
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-[1.15] tracking-tight">
                Secure Your ServiceNow Transition
              </h1>
          
              <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
                Risk-mapped integrations that prevent SLA breaches and ensure data continuity 
                between your core systems and ServiceNow workflows.
              </p>
          
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90"
                  style={{ backgroundColor: brandColor }}
                >
                  Free Migration Assessment
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={scrollToServices}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-all"
                >
                  View Services
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
          
              {/* Mobile: Key stats row - 2x Grid: 16px gap */}
              <div className="lg:hidden flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Server className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Legacy Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Network className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">ServiceNow</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Workflow className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Automation</span>
                </div>
              </div>
            </div>

            {/* Right: Integration Diagram */}
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Legacy Systems - Left */}
                <div className="absolute left-0 top-1/4 flex flex-col gap-6">
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                      <Server className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Legacy Servers</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}25` }}>
                      <Database className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Databases</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}20` }}>
                      <Cloud className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Cloud Apps</span>
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <line x1="120" y1="100" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="200" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="300" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                </svg>

                {/* ServiceNow Platform - Center */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative flex flex-col items-center">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: brandColor }}>
                      <Network className="w-10 h-10 text-white" />
                    </div>
                    <div className="mt-3 bg-slate-800/90 backdrop-blur rounded-full px-3 py-1 border border-slate-700">
                      <span className="text-xs font-medium text-white">ServiceNow</span>
                    </div>
                    <div className="absolute inset-0 rounded-xl animate-ping opacity-30" style={{ backgroundColor: brandColor }} />
                  </div>
                </div>

                {/* Output - Right */}
                <div className="absolute right-0 top-1/4 flex flex-col gap-3">
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}30` }}>
                      <Workflow className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">Automated Workflows</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}25` }}>
                      <Shield className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">SLA Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              {highlights.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="font-semibold text-white">{stat.value}</span>
                  <span className="text-gray-300">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 2x Grid: 80px py, 32px gutter (gap-8) */}
      <section ref={servicesRef} id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Helping Businesses Plan and Optimise
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Our ServiceNow Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end ServiceNow capabilities from initial strategy through ongoing optimisation
            </p>
          </div>

          {/* 3-col grid: 32px gutter (2x Grid) */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Consultation - 32px padding (2x Grid unit) */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-50">
                  <MessageSquare className="w-7 h-7 text-blue-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Consultation</h3>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">2-4 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Strategic planning and roadmap development to ensure your ServiceNow investment delivers maximum ROI.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Current state assessment & gap analysis</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Module selection & architecture design</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Risk-mapped migration roadmap</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>ROI projection & business case</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Implementation */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-amber-50">
                  <Settings className="w-7 h-7 text-amber-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Implementation</h3>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">8 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Rapid, risk-mapped deployment with our proven 8-week go-live methodology.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Platform configuration & custom workflows</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Legacy system integrations (REST, SOAP, etc.)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Secure data migration & validation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>User training & go-live support</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Support */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-green-50">
                  <Headphones className="w-7 h-7 text-green-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Support</h3>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Ongoing</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  24/7 managed services with SLA-backed response times and continuous optimisation.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>24/7 technical support (15-min response)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Platform updates & security patches</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Performance monitoring & optimisation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Quarterly business reviews</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Case Studies - 2x Grid: 80px py, 32px spacing (space-y-8) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Proven Results for Enterprise Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world implementations delivering measurable business outcomes
            </p>
          </div>

          {/* 32px spacing between case studies (2x Grid) */}
          <div className="space-y-8">
            {/* Case Study 1 */}
            <Link 
              to="/projects/case-study/telco-service-desk-it-process-migration-to-servicenow"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: `linear-gradient(135deg, ${brandColor}30, ${brandColor}15)` }}>
                  <Building2 className="w-20 h-20" style={{ color: `${brandColor}80` }} />
                  <span className="text-sm font-medium" style={{ color: `${brandColor}` }}>Jazz</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Telecom</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Migration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    Enabling 99.95% uptime and 24/7 follow-the-sun support for Pakistan&apos;s largest telecom through ServiceNow Cloud migration
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Pakistan&apos;s largest telecommunications provider modernised their service desk
                    and migrated to ServiceNow Cloud, enabling 24/7 follow-the-sun support operations
                    with 99.95% platform availability.
                  </p>
                  {/* Metrics: 24px gap (1.5x units) */}
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">99.95%</div>
                        <div className="text-xs text-gray-500">Uptime SLA</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock3 className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">24/7</div>
                        <div className="text-xs text-gray-500">Coverage</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}15` }}>
                        <Activity className="w-5 h-5" style={{ color: brandColor }} />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">52%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link 
              to="/projects/case-study/servicenow-incident-automation"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: 'linear-gradient(135deg, #F5F0EB, #EDE8E3)' }}>
                  <Zap className="w-20 h-20 text-amber-500" />
                  <span className="text-sm font-medium text-amber-700">Client Photo</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">Automation</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Integration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    40% faster incident resolution for major telecom through intelligent ServiceNow automation
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Developed an intelligent microservice bridge integrating network alarms with ServiceNow,
                    eliminating manual incident handling and reducing response times through automated correlation
                    and smart routing.
                  </p>
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-50">
                        <Zap className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">40%</div>
                        <div className="text-xs text-gray-500">Less Manual Work</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-50">
                        <Activity className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">98%</div>
                        <div className="text-xs text-gray-500">SLA Compliance</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">45%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section - 2x Grid: 80px py */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] mb-4 block" style={{ color: '#6B9B8A' }}>
              Client Success
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-6 left-6 text-8xl font-serif text-gray-100 leading-none">&quot;</div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Jazz</p>
                  <p className="text-xs text-gray-500">Pakistan&apos;s Largest Telecom</p>
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                &quot;Perception IT&apos;s expertise in migrating our IBM Maximo ticketing system to ServiceNow was invaluable.
                <br /><br />
                Their smooth and meticulous approach ensured a seamless transition, eliminating the need for on-premises hardware and offering our team a robust cloud-based solution. This has resulted in improved accessibility, increased efficiency, and overall cost savings.&quot;
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-500">UI</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Usman Ikram</p>
                  <p className="text-sm text-gray-500">Manager, SQM & Automation Support, Jazz</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688
```


## License: unknown
https://github.com/ckiee/cookieblob/blob/b2c2498085b10f7f1d5e05525c202f325361ece2/frontend/src/routes/Dashboard.svelte

```
Perfect! I'll provide the complete updated ServiceNow.tsx with 2x Grid conversion and Carbon icon integration. Since I don't have direct terminal access, here are the steps:

**Step 1: Install Carbon icons**
```bash
npm install @carbon/icons-react
```

**Step 2: Updated ServiceNow.tsx** with all 2x Grid spacing and Carbon icons:

```tsx
import { useEffect, useRef, useState } from 'react';
import {
  // Lucide icons (existing)
  ArrowRight,
  MessageSquare,
  Settings,
  Headphones,
  Award,
  Layers,
  Code,
  Clock,
  Activity,
  Server,
  Database,
  Cloud,
  Shield,
  Workflow,
  Network,
  Building2,
  Zap,
  TrendingUp,
  Clock3,
  FileCode,
  Lock,
  Users,
  Link2,
  Globe,
  BookOpen,
  Lightbulb,
  Target,
  ChevronDown,
  ChevronUp,
  CheckCircle2
} from 'lucide-react';

// Carbon icons (new)
import { DataIntegration20, Collaborate20, Support20 } from '@carbon/icons-react';

import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';

const ServiceNow = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [showAllTech, setShowAllTech] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToServices = () => {
    if (servicesRef.current) {
      const yOffset = -80;
      const y = servicesRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const brandColor = '#6B9B8A';

  const highlights = [
    { value: '14+', label: 'Years Experience' },
    { value: 'Deep', label: 'Enterprise Expertise' },
    { value: 'Proven', label: 'Track Record' },
    { value: '50+', label: 'Projects Delivered' }
  ];

  const techStack = [
    { name: 'REST API', icon: Code },
    { name: 'SOAP', icon: Server },
    { name: 'JSON', icon: FileCode },
    { name: 'XML', icon: Globe },
    { name: 'OAuth', icon: Lock },
    { name: 'LDAP', icon: Users },
    { name: 'SQL', icon: Database },
    { name: 'Webhooks', icon: Link2 }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navigation />

      {/* Breadcrumb - 2x Grid: 16px padding */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="hover:text-gray-900 transition-colors">Services</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services#platforms" className="hover:text-gray-900 transition-colors">IT Platforms</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">ServiceNow</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - 2x Grid: 80px section padding, 16px gaps */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ background: `linear-gradient(135deg, #0F172A 0%, #1E293B 50%, ${brandColor}20 100%)` }}>
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: brandColor }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600 rounded-full blur-3xl" />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-8"
                style={{ backgroundColor: `${brandColor}30`, color: brandColor }}
              >
                ServiceNow Integration
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-[1.15] tracking-tight">
                Secure Your ServiceNow Transition
              </h1>
          
              <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
                Risk-mapped integrations that prevent SLA breaches and ensure data continuity 
                between your core systems and ServiceNow workflows.
              </p>
          
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90"
                  style={{ backgroundColor: brandColor }}
                >
                  Free Migration Assessment
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={scrollToServices}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-all"
                >
                  View Services
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
          
              {/* Mobile: Key stats row - 2x Grid: 16px gap */}
              <div className="lg:hidden flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Server className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Legacy Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Network className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">ServiceNow</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Workflow className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Automation</span>
                </div>
              </div>
            </div>

            {/* Right: Integration Diagram */}
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Legacy Systems - Left */}
                <div className="absolute left-0 top-1/4 flex flex-col gap-6">
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                      <Server className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Legacy Servers</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}25` }}>
                      <Database className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Databases</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}20` }}>
                      <Cloud className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Cloud Apps</span>
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <line x1="120" y1="100" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="200" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="300" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                </svg>

                {/* ServiceNow Platform - Center */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative flex flex-col items-center">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: brandColor }}>
                      <Network className="w-10 h-10 text-white" />
                    </div>
                    <div className="mt-3 bg-slate-800/90 backdrop-blur rounded-full px-3 py-1 border border-slate-700">
                      <span className="text-xs font-medium text-white">ServiceNow</span>
                    </div>
                    <div className="absolute inset-0 rounded-xl animate-ping opacity-30" style={{ backgroundColor: brandColor }} />
                  </div>
                </div>

                {/* Output - Right */}
                <div className="absolute right-0 top-1/4 flex flex-col gap-3">
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}30` }}>
                      <Workflow className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">Automated Workflows</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}25` }}>
                      <Shield className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">SLA Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              {highlights.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="font-semibold text-white">{stat.value}</span>
                  <span className="text-gray-300">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 2x Grid: 80px py, 32px gutter (gap-8) */}
      <section ref={servicesRef} id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Helping Businesses Plan and Optimise
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Our ServiceNow Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end ServiceNow capabilities from initial strategy through ongoing optimisation
            </p>
          </div>

          {/* 3-col grid: 32px gutter (2x Grid) */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Consultation - 32px padding (2x Grid unit) */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-50">
                  <MessageSquare className="w-7 h-7 text-blue-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Consultation</h3>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">2-4 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Strategic planning and roadmap development to ensure your ServiceNow investment delivers maximum ROI.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Current state assessment & gap analysis</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Module selection & architecture design</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Risk-mapped migration roadmap</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>ROI projection & business case</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Implementation */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-amber-50">
                  <Settings className="w-7 h-7 text-amber-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Implementation</h3>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">8 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Rapid, risk-mapped deployment with our proven 8-week go-live methodology.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Platform configuration & custom workflows</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Legacy system integrations (REST, SOAP, etc.)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Secure data migration & validation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>User training & go-live support</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Support */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-green-50">
                  <Headphones className="w-7 h-7 text-green-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Support</h3>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Ongoing</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  24/7 managed services with SLA-backed response times and continuous optimisation.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>24/7 technical support (15-min response)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Platform updates & security patches</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Performance monitoring & optimisation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Quarterly business reviews</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Case Studies - 2x Grid: 80px py, 32px spacing (space-y-8) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Proven Results for Enterprise Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world implementations delivering measurable business outcomes
            </p>
          </div>

          {/* 32px spacing between case studies (2x Grid) */}
          <div className="space-y-8">
            {/* Case Study 1 */}
            <Link 
              to="/projects/case-study/telco-service-desk-it-process-migration-to-servicenow"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: `linear-gradient(135deg, ${brandColor}30, ${brandColor}15)` }}>
                  <Building2 className="w-20 h-20" style={{ color: `${brandColor}80` }} />
                  <span className="text-sm font-medium" style={{ color: `${brandColor}` }}>Jazz</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Telecom</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Migration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    Enabling 99.95% uptime and 24/7 follow-the-sun support for Pakistan&apos;s largest telecom through ServiceNow Cloud migration
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Pakistan&apos;s largest telecommunications provider modernised their service desk
                    and migrated to ServiceNow Cloud, enabling 24/7 follow-the-sun support operations
                    with 99.95% platform availability.
                  </p>
                  {/* Metrics: 24px gap (1.5x units) */}
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">99.95%</div>
                        <div className="text-xs text-gray-500">Uptime SLA</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock3 className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">24/7</div>
                        <div className="text-xs text-gray-500">Coverage</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}15` }}>
                        <Activity className="w-5 h-5" style={{ color: brandColor }} />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">52%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link 
              to="/projects/case-study/servicenow-incident-automation"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: 'linear-gradient(135deg, #F5F0EB, #EDE8E3)' }}>
                  <Zap className="w-20 h-20 text-amber-500" />
                  <span className="text-sm font-medium text-amber-700">Client Photo</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">Automation</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Integration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    40% faster incident resolution for major telecom through intelligent ServiceNow automation
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Developed an intelligent microservice bridge integrating network alarms with ServiceNow,
                    eliminating manual incident handling and reducing response times through automated correlation
                    and smart routing.
                  </p>
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-50">
                        <Zap className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">40%</div>
                        <div className="text-xs text-gray-500">Less Manual Work</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-50">
                        <Activity className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">98%</div>
                        <div className="text-xs text-gray-500">SLA Compliance</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">45%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section - 2x Grid: 80px py */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] mb-4 block" style={{ color: '#6B9B8A' }}>
              Client Success
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-6 left-6 text-8xl font-serif text-gray-100 leading-none">&quot;</div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Jazz</p>
                  <p className="text-xs text-gray-500">Pakistan&apos;s Largest Telecom</p>
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                &quot;Perception IT&apos;s expertise in migrating our IBM Maximo ticketing system to ServiceNow was invaluable.
                <br /><br />
                Their smooth and meticulous approach ensured a seamless transition, eliminating the need for on-premises hardware and offering our team a robust cloud-based solution. This has resulted in improved accessibility, increased efficiency, and overall cost savings.&quot;
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-500">UI</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Usman Ikram</p>
                  <p className="text-sm text-gray-500">Manager, SQM & Automation Support, Jazz</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688
```


## License: unknown
https://github.com/PalmersTaiwan/palmers-taiwan/blob/a79590f0ff82d53031ce669c451a11d9a101721b/components/product/review-stars.js

```
Perfect! I'll provide the complete updated ServiceNow.tsx with 2x Grid conversion and Carbon icon integration. Since I don't have direct terminal access, here are the steps:

**Step 1: Install Carbon icons**
```bash
npm install @carbon/icons-react
```

**Step 2: Updated ServiceNow.tsx** with all 2x Grid spacing and Carbon icons:

```tsx
import { useEffect, useRef, useState } from 'react';
import {
  // Lucide icons (existing)
  ArrowRight,
  MessageSquare,
  Settings,
  Headphones,
  Award,
  Layers,
  Code,
  Clock,
  Activity,
  Server,
  Database,
  Cloud,
  Shield,
  Workflow,
  Network,
  Building2,
  Zap,
  TrendingUp,
  Clock3,
  FileCode,
  Lock,
  Users,
  Link2,
  Globe,
  BookOpen,
  Lightbulb,
  Target,
  ChevronDown,
  ChevronUp,
  CheckCircle2
} from 'lucide-react';

// Carbon icons (new)
import { DataIntegration20, Collaborate20, Support20 } from '@carbon/icons-react';

import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';

const ServiceNow = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [showAllTech, setShowAllTech] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToServices = () => {
    if (servicesRef.current) {
      const yOffset = -80;
      const y = servicesRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const brandColor = '#6B9B8A';

  const highlights = [
    { value: '14+', label: 'Years Experience' },
    { value: 'Deep', label: 'Enterprise Expertise' },
    { value: 'Proven', label: 'Track Record' },
    { value: '50+', label: 'Projects Delivered' }
  ];

  const techStack = [
    { name: 'REST API', icon: Code },
    { name: 'SOAP', icon: Server },
    { name: 'JSON', icon: FileCode },
    { name: 'XML', icon: Globe },
    { name: 'OAuth', icon: Lock },
    { name: 'LDAP', icon: Users },
    { name: 'SQL', icon: Database },
    { name: 'Webhooks', icon: Link2 }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navigation />

      {/* Breadcrumb - 2x Grid: 16px padding */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="hover:text-gray-900 transition-colors">Services</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services#platforms" className="hover:text-gray-900 transition-colors">IT Platforms</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">ServiceNow</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - 2x Grid: 80px section padding, 16px gaps */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ background: `linear-gradient(135deg, #0F172A 0%, #1E293B 50%, ${brandColor}20 100%)` }}>
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: brandColor }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600 rounded-full blur-3xl" />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-8"
                style={{ backgroundColor: `${brandColor}30`, color: brandColor }}
              >
                ServiceNow Integration
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-[1.15] tracking-tight">
                Secure Your ServiceNow Transition
              </h1>
          
              <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
                Risk-mapped integrations that prevent SLA breaches and ensure data continuity 
                between your core systems and ServiceNow workflows.
              </p>
          
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90"
                  style={{ backgroundColor: brandColor }}
                >
                  Free Migration Assessment
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={scrollToServices}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-all"
                >
                  View Services
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
          
              {/* Mobile: Key stats row - 2x Grid: 16px gap */}
              <div className="lg:hidden flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Server className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Legacy Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Network className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">ServiceNow</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Workflow className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Automation</span>
                </div>
              </div>
            </div>

            {/* Right: Integration Diagram */}
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Legacy Systems - Left */}
                <div className="absolute left-0 top-1/4 flex flex-col gap-6">
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                      <Server className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Legacy Servers</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}25` }}>
                      <Database className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Databases</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}20` }}>
                      <Cloud className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Cloud Apps</span>
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <line x1="120" y1="100" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="200" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="300" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                </svg>

                {/* ServiceNow Platform - Center */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative flex flex-col items-center">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: brandColor }}>
                      <Network className="w-10 h-10 text-white" />
                    </div>
                    <div className="mt-3 bg-slate-800/90 backdrop-blur rounded-full px-3 py-1 border border-slate-700">
                      <span className="text-xs font-medium text-white">ServiceNow</span>
                    </div>
                    <div className="absolute inset-0 rounded-xl animate-ping opacity-30" style={{ backgroundColor: brandColor }} />
                  </div>
                </div>

                {/* Output - Right */}
                <div className="absolute right-0 top-1/4 flex flex-col gap-3">
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}30` }}>
                      <Workflow className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">Automated Workflows</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}25` }}>
                      <Shield className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">SLA Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              {highlights.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="font-semibold text-white">{stat.value}</span>
                  <span className="text-gray-300">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 2x Grid: 80px py, 32px gutter (gap-8) */}
      <section ref={servicesRef} id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Helping Businesses Plan and Optimise
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Our ServiceNow Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end ServiceNow capabilities from initial strategy through ongoing optimisation
            </p>
          </div>

          {/* 3-col grid: 32px gutter (2x Grid) */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Consultation - 32px padding (2x Grid unit) */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-50">
                  <MessageSquare className="w-7 h-7 text-blue-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Consultation</h3>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">2-4 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Strategic planning and roadmap development to ensure your ServiceNow investment delivers maximum ROI.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Current state assessment & gap analysis</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Module selection & architecture design</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Risk-mapped migration roadmap</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>ROI projection & business case</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Implementation */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-amber-50">
                  <Settings className="w-7 h-7 text-amber-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Implementation</h3>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">8 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Rapid, risk-mapped deployment with our proven 8-week go-live methodology.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Platform configuration & custom workflows</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Legacy system integrations (REST, SOAP, etc.)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Secure data migration & validation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>User training & go-live support</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Support */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-green-50">
                  <Headphones className="w-7 h-7 text-green-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Support</h3>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Ongoing</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  24/7 managed services with SLA-backed response times and continuous optimisation.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>24/7 technical support (15-min response)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Platform updates & security patches</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Performance monitoring & optimisation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Quarterly business reviews</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Case Studies - 2x Grid: 80px py, 32px spacing (space-y-8) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Proven Results for Enterprise Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world implementations delivering measurable business outcomes
            </p>
          </div>

          {/* 32px spacing between case studies (2x Grid) */}
          <div className="space-y-8">
            {/* Case Study 1 */}
            <Link 
              to="/projects/case-study/telco-service-desk-it-process-migration-to-servicenow"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: `linear-gradient(135deg, ${brandColor}30, ${brandColor}15)` }}>
                  <Building2 className="w-20 h-20" style={{ color: `${brandColor}80` }} />
                  <span className="text-sm font-medium" style={{ color: `${brandColor}` }}>Jazz</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Telecom</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Migration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    Enabling 99.95% uptime and 24/7 follow-the-sun support for Pakistan&apos;s largest telecom through ServiceNow Cloud migration
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Pakistan&apos;s largest telecommunications provider modernised their service desk
                    and migrated to ServiceNow Cloud, enabling 24/7 follow-the-sun support operations
                    with 99.95% platform availability.
                  </p>
                  {/* Metrics: 24px gap (1.5x units) */}
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">99.95%</div>
                        <div className="text-xs text-gray-500">Uptime SLA</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock3 className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">24/7</div>
                        <div className="text-xs text-gray-500">Coverage</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}15` }}>
                        <Activity className="w-5 h-5" style={{ color: brandColor }} />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">52%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link 
              to="/projects/case-study/servicenow-incident-automation"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: 'linear-gradient(135deg, #F5F0EB, #EDE8E3)' }}>
                  <Zap className="w-20 h-20 text-amber-500" />
                  <span className="text-sm font-medium text-amber-700">Client Photo</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">Automation</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Integration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    40% faster incident resolution for major telecom through intelligent ServiceNow automation
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Developed an intelligent microservice bridge integrating network alarms with ServiceNow,
                    eliminating manual incident handling and reducing response times through automated correlation
                    and smart routing.
                  </p>
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-50">
                        <Zap className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">40%</div>
                        <div className="text-xs text-gray-500">Less Manual Work</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-50">
                        <Activity className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">98%</div>
                        <div className="text-xs text-gray-500">SLA Compliance</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">45%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section - 2x Grid: 80px py */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] mb-4 block" style={{ color: '#6B9B8A' }}>
              Client Success
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-6 left-6 text-8xl font-serif text-gray-100 leading-none">&quot;</div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Jazz</p>
                  <p className="text-xs text-gray-500">Pakistan&apos;s Largest Telecom</p>
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                &quot;Perception IT&apos;s expertise in migrating our IBM Maximo ticketing system to ServiceNow was invaluable.
                <br /><br />
                Their smooth and meticulous approach ensured a seamless transition, eliminating the need for on-premises hardware and offering our team a robust cloud-based solution. This has resulted in improved accessibility, increased efficiency, and overall cost savings.&quot;
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-500">UI</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Usman Ikram</p>
                  <p className="text-sm text-gray-500">Manager, SQM & Automation Support, Jazz</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Perception IT Section - 2x Grid: 80py, 32px gaps */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] mb-4 block" style={{ color: '#6B9B8A' }}>
              The Differentiator
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              The Perception-IT Advantage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Integrate
```


## License: unknown
https://github.com/jrcairns/e-learn/blob/80a46ae220591862209a45513f85350dabcb419a/src/components/course-card/course-card.js

```
Perfect! I'll provide the complete updated ServiceNow.tsx with 2x Grid conversion and Carbon icon integration. Since I don't have direct terminal access, here are the steps:

**Step 1: Install Carbon icons**
```bash
npm install @carbon/icons-react
```

**Step 2: Updated ServiceNow.tsx** with all 2x Grid spacing and Carbon icons:

```tsx
import { useEffect, useRef, useState } from 'react';
import {
  // Lucide icons (existing)
  ArrowRight,
  MessageSquare,
  Settings,
  Headphones,
  Award,
  Layers,
  Code,
  Clock,
  Activity,
  Server,
  Database,
  Cloud,
  Shield,
  Workflow,
  Network,
  Building2,
  Zap,
  TrendingUp,
  Clock3,
  FileCode,
  Lock,
  Users,
  Link2,
  Globe,
  BookOpen,
  Lightbulb,
  Target,
  ChevronDown,
  ChevronUp,
  CheckCircle2
} from 'lucide-react';

// Carbon icons (new)
import { DataIntegration20, Collaborate20, Support20 } from '@carbon/icons-react';

import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';

const ServiceNow = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [showAllTech, setShowAllTech] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToServices = () => {
    if (servicesRef.current) {
      const yOffset = -80;
      const y = servicesRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const brandColor = '#6B9B8A';

  const highlights = [
    { value: '14+', label: 'Years Experience' },
    { value: 'Deep', label: 'Enterprise Expertise' },
    { value: 'Proven', label: 'Track Record' },
    { value: '50+', label: 'Projects Delivered' }
  ];

  const techStack = [
    { name: 'REST API', icon: Code },
    { name: 'SOAP', icon: Server },
    { name: 'JSON', icon: FileCode },
    { name: 'XML', icon: Globe },
    { name: 'OAuth', icon: Lock },
    { name: 'LDAP', icon: Users },
    { name: 'SQL', icon: Database },
    { name: 'Webhooks', icon: Link2 }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navigation />

      {/* Breadcrumb - 2x Grid: 16px padding */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="hover:text-gray-900 transition-colors">Services</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services#platforms" className="hover:text-gray-900 transition-colors">IT Platforms</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">ServiceNow</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - 2x Grid: 80px section padding, 16px gaps */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ background: `linear-gradient(135deg, #0F172A 0%, #1E293B 50%, ${brandColor}20 100%)` }}>
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: brandColor }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600 rounded-full blur-3xl" />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-8"
                style={{ backgroundColor: `${brandColor}30`, color: brandColor }}
              >
                ServiceNow Integration
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-[1.15] tracking-tight">
                Secure Your ServiceNow Transition
              </h1>
          
              <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
                Risk-mapped integrations that prevent SLA breaches and ensure data continuity 
                between your core systems and ServiceNow workflows.
              </p>
          
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90"
                  style={{ backgroundColor: brandColor }}
                >
                  Free Migration Assessment
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={scrollToServices}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-all"
                >
                  View Services
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
          
              {/* Mobile: Key stats row - 2x Grid: 16px gap */}
              <div className="lg:hidden flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Server className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Legacy Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Network className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">ServiceNow</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Workflow className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Automation</span>
                </div>
              </div>
            </div>

            {/* Right: Integration Diagram */}
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Legacy Systems - Left */}
                <div className="absolute left-0 top-1/4 flex flex-col gap-6">
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                      <Server className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Legacy Servers</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}25` }}>
                      <Database className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Databases</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}20` }}>
                      <Cloud className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Cloud Apps</span>
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <line x1="120" y1="100" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="200" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="300" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                </svg>

                {/* ServiceNow Platform - Center */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative flex flex-col items-center">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: brandColor }}>
                      <Network className="w-10 h-10 text-white" />
                    </div>
                    <div className="mt-3 bg-slate-800/90 backdrop-blur rounded-full px-3 py-1 border border-slate-700">
                      <span className="text-xs font-medium text-white">ServiceNow</span>
                    </div>
                    <div className="absolute inset-0 rounded-xl animate-ping opacity-30" style={{ backgroundColor: brandColor }} />
                  </div>
                </div>

                {/* Output - Right */}
                <div className="absolute right-0 top-1/4 flex flex-col gap-3">
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}30` }}>
                      <Workflow className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">Automated Workflows</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}25` }}>
                      <Shield className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">SLA Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              {highlights.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="font-semibold text-white">{stat.value}</span>
                  <span className="text-gray-300">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 2x Grid: 80px py, 32px gutter (gap-8) */}
      <section ref={servicesRef} id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Helping Businesses Plan and Optimise
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Our ServiceNow Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end ServiceNow capabilities from initial strategy through ongoing optimisation
            </p>
          </div>

          {/* 3-col grid: 32px gutter (2x Grid) */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Consultation - 32px padding (2x Grid unit) */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-50">
                  <MessageSquare className="w-7 h-7 text-blue-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Consultation</h3>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">2-4 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Strategic planning and roadmap development to ensure your ServiceNow investment delivers maximum ROI.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Current state assessment & gap analysis</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Module selection & architecture design</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Risk-mapped migration roadmap</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>ROI projection & business case</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Implementation */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-amber-50">
                  <Settings className="w-7 h-7 text-amber-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Implementation</h3>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">8 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Rapid, risk-mapped deployment with our proven 8-week go-live methodology.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Platform configuration & custom workflows</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Legacy system integrations (REST, SOAP, etc.)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Secure data migration & validation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>User training & go-live support</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Support */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-green-50">
                  <Headphones className="w-7 h-7 text-green-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Support</h3>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Ongoing</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  24/7 managed services with SLA-backed response times and continuous optimisation.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>24/7 technical support (15-min response)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Platform updates & security patches</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Performance monitoring & optimisation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Quarterly business reviews</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Case Studies - 2x Grid: 80px py, 32px spacing (space-y-8) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Proven Results for Enterprise Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world implementations delivering measurable business outcomes
            </p>
          </div>

          {/* 32px spacing between case studies (2x Grid) */}
          <div className="space-y-8">
            {/* Case Study 1 */}
            <Link 
              to="/projects/case-study/telco-service-desk-it-process-migration-to-servicenow"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: `linear-gradient(135deg, ${brandColor}30, ${brandColor}15)` }}>
                  <Building2 className="w-20 h-20" style={{ color: `${brandColor}80` }} />
                  <span className="text-sm font-medium" style={{ color: `${brandColor}` }}>Jazz</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Telecom</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Migration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    Enabling 99.95% uptime and 24/7 follow-the-sun support for Pakistan&apos;s largest telecom through ServiceNow Cloud migration
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Pakistan&apos;s largest telecommunications provider modernised their service desk
                    and migrated to ServiceNow Cloud, enabling 24/7 follow-the-sun support operations
                    with 99.95% platform availability.
                  </p>
                  {/* Metrics: 24px gap (1.5x units) */}
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">99.95%</div>
                        <div className="text-xs text-gray-500">Uptime SLA</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock3 className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">24/7</div>
                        <div className="text-xs text-gray-500">Coverage</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}15` }}>
                        <Activity className="w-5 h-5" style={{ color: brandColor }} />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">52%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link 
              to="/projects/case-study/servicenow-incident-automation"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: 'linear-gradient(135deg, #F5F0EB, #EDE8E3)' }}>
                  <Zap className="w-20 h-20 text-amber-500" />
                  <span className="text-sm font-medium text-amber-700">Client Photo</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">Automation</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Integration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    40% faster incident resolution for major telecom through intelligent ServiceNow automation
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Developed an intelligent microservice bridge integrating network alarms with ServiceNow,
                    eliminating manual incident handling and reducing response times through automated correlation
                    and smart routing.
                  </p>
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-50">
                        <Zap className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">40%</div>
                        <div className="text-xs text-gray-500">Less Manual Work</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-50">
                        <Activity className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">98%</div>
                        <div className="text-xs text-gray-500">SLA Compliance</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">45%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section - 2x Grid: 80px py */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] mb-4 block" style={{ color: '#6B9B8A' }}>
              Client Success
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-6 left-6 text-8xl font-serif text-gray-100 leading-none">&quot;</div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Jazz</p>
                  <p className="text-xs text-gray-500">Pakistan&apos;s Largest Telecom</p>
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                &quot;Perception IT&apos;s expertise in migrating our IBM Maximo ticketing system to ServiceNow was invaluable.
                <br /><br />
                Their smooth and meticulous approach ensured a seamless transition, eliminating the need for on-premises hardware and offering our team a robust cloud-based solution. This has resulted in improved accessibility, increased efficiency, and overall cost savings.&quot;
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-500">UI</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Usman Ikram</p>
                  <p className="text-sm text-gray-500">Manager, SQM & Automation Support, Jazz</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Perception IT Section - 2x Grid: 80py, 32px gaps */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] mb-4 block" style={{ color: '#6B9B8A' }}>
              The Differentiator
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              The Perception-IT Advantage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Integrate
```


## License: unknown
https://github.com/wonjongjang/TIL/blob/2705a20d8b28aeab3283d60a6a0e09d180643d3f/NextJS/Nomad%20Coders/%EC%BA%90%EB%9F%BF%EB%A7%88%EC%BC%93%20%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9/carrot-market/pages/profile/index.tsx

```
Perfect! I'll provide the complete updated ServiceNow.tsx with 2x Grid conversion and Carbon icon integration. Since I don't have direct terminal access, here are the steps:

**Step 1: Install Carbon icons**
```bash
npm install @carbon/icons-react
```

**Step 2: Updated ServiceNow.tsx** with all 2x Grid spacing and Carbon icons:

```tsx
import { useEffect, useRef, useState } from 'react';
import {
  // Lucide icons (existing)
  ArrowRight,
  MessageSquare,
  Settings,
  Headphones,
  Award,
  Layers,
  Code,
  Clock,
  Activity,
  Server,
  Database,
  Cloud,
  Shield,
  Workflow,
  Network,
  Building2,
  Zap,
  TrendingUp,
  Clock3,
  FileCode,
  Lock,
  Users,
  Link2,
  Globe,
  BookOpen,
  Lightbulb,
  Target,
  ChevronDown,
  ChevronUp,
  CheckCircle2
} from 'lucide-react';

// Carbon icons (new)
import { DataIntegration20, Collaborate20, Support20 } from '@carbon/icons-react';

import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';

const ServiceNow = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [showAllTech, setShowAllTech] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToServices = () => {
    if (servicesRef.current) {
      const yOffset = -80;
      const y = servicesRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const brandColor = '#6B9B8A';

  const highlights = [
    { value: '14+', label: 'Years Experience' },
    { value: 'Deep', label: 'Enterprise Expertise' },
    { value: 'Proven', label: 'Track Record' },
    { value: '50+', label: 'Projects Delivered' }
  ];

  const techStack = [
    { name: 'REST API', icon: Code },
    { name: 'SOAP', icon: Server },
    { name: 'JSON', icon: FileCode },
    { name: 'XML', icon: Globe },
    { name: 'OAuth', icon: Lock },
    { name: 'LDAP', icon: Users },
    { name: 'SQL', icon: Database },
    { name: 'Webhooks', icon: Link2 }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navigation />

      {/* Breadcrumb - 2x Grid: 16px padding */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="hover:text-gray-900 transition-colors">Services</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services#platforms" className="hover:text-gray-900 transition-colors">IT Platforms</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">ServiceNow</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - 2x Grid: 80px section padding, 16px gaps */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ background: `linear-gradient(135deg, #0F172A 0%, #1E293B 50%, ${brandColor}20 100%)` }}>
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: brandColor }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600 rounded-full blur-3xl" />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-8"
                style={{ backgroundColor: `${brandColor}30`, color: brandColor }}
              >
                ServiceNow Integration
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-[1.15] tracking-tight">
                Secure Your ServiceNow Transition
              </h1>
          
              <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
                Risk-mapped integrations that prevent SLA breaches and ensure data continuity 
                between your core systems and ServiceNow workflows.
              </p>
          
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90"
                  style={{ backgroundColor: brandColor }}
                >
                  Free Migration Assessment
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={scrollToServices}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-all"
                >
                  View Services
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
          
              {/* Mobile: Key stats row - 2x Grid: 16px gap */}
              <div className="lg:hidden flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Server className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Legacy Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Network className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">ServiceNow</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Workflow className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Automation</span>
                </div>
              </div>
            </div>

            {/* Right: Integration Diagram */}
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Legacy Systems - Left */}
                <div className="absolute left-0 top-1/4 flex flex-col gap-6">
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                      <Server className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Legacy Servers</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}25` }}>
                      <Database className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Databases</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}20` }}>
                      <Cloud className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Cloud Apps</span>
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <line x1="120" y1="100" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="200" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="300" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                </svg>

                {/* ServiceNow Platform - Center */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative flex flex-col items-center">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: brandColor }}>
                      <Network className="w-10 h-10 text-white" />
                    </div>
                    <div className="mt-3 bg-slate-800/90 backdrop-blur rounded-full px-3 py-1 border border-slate-700">
                      <span className="text-xs font-medium text-white">ServiceNow</span>
                    </div>
                    <div className="absolute inset-0 rounded-xl animate-ping opacity-30" style={{ backgroundColor: brandColor }} />
                  </div>
                </div>

                {/* Output - Right */}
                <div className="absolute right-0 top-1/4 flex flex-col gap-3">
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}30` }}>
                      <Workflow className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">Automated Workflows</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}25` }}>
                      <Shield className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">SLA Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              {highlights.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="font-semibold text-white">{stat.value}</span>
                  <span className="text-gray-300">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 2x Grid: 80px py, 32px gutter (gap-8) */}
      <section ref={servicesRef} id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Helping Businesses Plan and Optimise
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Our ServiceNow Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end ServiceNow capabilities from initial strategy through ongoing optimisation
            </p>
          </div>

          {/* 3-col grid: 32px gutter (2x Grid) */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Consultation - 32px padding (2x Grid unit) */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-50">
                  <MessageSquare className="w-7 h-7 text-blue-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Consultation</h3>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">2-4 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Strategic planning and roadmap development to ensure your ServiceNow investment delivers maximum ROI.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Current state assessment & gap analysis</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Module selection & architecture design</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Risk-mapped migration roadmap</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>ROI projection & business case</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Implementation */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-amber-50">
                  <Settings className="w-7 h-7 text-amber-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Implementation</h3>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">8 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Rapid, risk-mapped deployment with our proven 8-week go-live methodology.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Platform configuration & custom workflows</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Legacy system integrations (REST, SOAP, etc.)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Secure data migration & validation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>User training & go-live support</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Support */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-green-50">
                  <Headphones className="w-7 h-7 text-green-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Support</h3>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Ongoing</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  24/7 managed services with SLA-backed response times and continuous optimisation.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>24/7 technical support (15-min response)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Platform updates & security patches</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Performance monitoring & optimisation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Quarterly business reviews</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Case Studies - 2x Grid: 80px py, 32px spacing (space-y-8) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Proven Results for Enterprise Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world implementations delivering measurable business outcomes
            </p>
          </div>

          {/* 32px spacing between case studies (2x Grid) */}
          <div className="space-y-8">
            {/* Case Study 1 */}
            <Link 
              to="/projects/case-study/telco-service-desk-it-process-migration-to-servicenow"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: `linear-gradient(135deg, ${brandColor}30, ${brandColor}15)` }}>
                  <Building2 className="w-20 h-20" style={{ color: `${brandColor}80` }} />
                  <span className="text-sm font-medium" style={{ color: `${brandColor}` }}>Jazz</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Telecom</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Migration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    Enabling 99.95% uptime and 24/7 follow-the-sun support for Pakistan&apos;s largest telecom through ServiceNow Cloud migration
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Pakistan&apos;s largest telecommunications provider modernised their service desk
                    and migrated to ServiceNow Cloud, enabling 24/7 follow-the-sun support operations
                    with 99.95% platform availability.
                  </p>
                  {/* Metrics: 24px gap (1.5x units) */}
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">99.95%</div>
                        <div className="text-xs text-gray-500">Uptime SLA</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock3 className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">24/7</div>
                        <div className="text-xs text-gray-500">Coverage</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}15` }}>
                        <Activity className="w-5 h-5" style={{ color: brandColor }} />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">52%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link 
              to="/projects/case-study/servicenow-incident-automation"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: 'linear-gradient(135deg, #F5F0EB, #EDE8E3)' }}>
                  <Zap className="w-20 h-20 text-amber-500" />
                  <span className="text-sm font-medium text-amber-700">Client Photo</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">Automation</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Integration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    40% faster incident resolution for major telecom through intelligent ServiceNow automation
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Developed an intelligent microservice bridge integrating network alarms with ServiceNow,
                    eliminating manual incident handling and reducing response times through automated correlation
                    and smart routing.
                  </p>
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-50">
                        <Zap className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">40%</div>
                        <div className="text-xs text-gray-500">Less Manual Work</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-50">
                        <Activity className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">98%</div>
                        <div className="text-xs text-gray-500">SLA Compliance</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">45%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section - 2x Grid: 80px py */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] mb-4 block" style={{ color: '#6B9B8A' }}>
              Client Success
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-6 left-6 text-8xl font-serif text-gray-100 leading-none">&quot;</div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Jazz</p>
                  <p className="text-xs text-gray-500">Pakistan&apos;s Largest Telecom</p>
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                &quot;Perception IT&apos;s expertise in migrating our IBM Maximo ticketing system to ServiceNow was invaluable.
                <br /><br />
                Their smooth and meticulous approach ensured a seamless transition, eliminating the need for on-premises hardware and offering our team a robust cloud-based solution. This has resulted in improved accessibility, increased efficiency, and overall cost savings.&quot;
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-500">UI</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Usman Ikram</p>
                  <p className="text-sm text-gray-500">Manager, SQM & Automation Support, Jazz</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Perception IT Section - 2x Grid: 80py, 32px gaps */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] mb-4 block" style={{ color: '#6B9B8A' }}>
              The Differentiator
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              The Perception-IT Advantage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Integrate
```


## License: unknown
https://github.com/PalmersTaiwan/palmers-taiwan/blob/a79590f0ff82d53031ce669c451a11d9a101721b/components/product/review-stars.js

```
Perfect! I'll provide the complete updated ServiceNow.tsx with 2x Grid conversion and Carbon icon integration. Since I don't have direct terminal access, here are the steps:

**Step 1: Install Carbon icons**
```bash
npm install @carbon/icons-react
```

**Step 2: Updated ServiceNow.tsx** with all 2x Grid spacing and Carbon icons:

```tsx
import { useEffect, useRef, useState } from 'react';
import {
  // Lucide icons (existing)
  ArrowRight,
  MessageSquare,
  Settings,
  Headphones,
  Award,
  Layers,
  Code,
  Clock,
  Activity,
  Server,
  Database,
  Cloud,
  Shield,
  Workflow,
  Network,
  Building2,
  Zap,
  TrendingUp,
  Clock3,
  FileCode,
  Lock,
  Users,
  Link2,
  Globe,
  BookOpen,
  Lightbulb,
  Target,
  ChevronDown,
  ChevronUp,
  CheckCircle2
} from 'lucide-react';

// Carbon icons (new)
import { DataIntegration20, Collaborate20, Support20 } from '@carbon/icons-react';

import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';

const ServiceNow = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [showAllTech, setShowAllTech] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToServices = () => {
    if (servicesRef.current) {
      const yOffset = -80;
      const y = servicesRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const brandColor = '#6B9B8A';

  const highlights = [
    { value: '14+', label: 'Years Experience' },
    { value: 'Deep', label: 'Enterprise Expertise' },
    { value: 'Proven', label: 'Track Record' },
    { value: '50+', label: 'Projects Delivered' }
  ];

  const techStack = [
    { name: 'REST API', icon: Code },
    { name: 'SOAP', icon: Server },
    { name: 'JSON', icon: FileCode },
    { name: 'XML', icon: Globe },
    { name: 'OAuth', icon: Lock },
    { name: 'LDAP', icon: Users },
    { name: 'SQL', icon: Database },
    { name: 'Webhooks', icon: Link2 }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navigation />

      {/* Breadcrumb - 2x Grid: 16px padding */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="hover:text-gray-900 transition-colors">Services</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services#platforms" className="hover:text-gray-900 transition-colors">IT Platforms</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">ServiceNow</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - 2x Grid: 80px section padding, 16px gaps */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ background: `linear-gradient(135deg, #0F172A 0%, #1E293B 50%, ${brandColor}20 100%)` }}>
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: brandColor }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600 rounded-full blur-3xl" />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-8"
                style={{ backgroundColor: `${brandColor}30`, color: brandColor }}
              >
                ServiceNow Integration
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-[1.15] tracking-tight">
                Secure Your ServiceNow Transition
              </h1>
          
              <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
                Risk-mapped integrations that prevent SLA breaches and ensure data continuity 
                between your core systems and ServiceNow workflows.
              </p>
          
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90"
                  style={{ backgroundColor: brandColor }}
                >
                  Free Migration Assessment
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={scrollToServices}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-all"
                >
                  View Services
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
          
              {/* Mobile: Key stats row - 2x Grid: 16px gap */}
              <div className="lg:hidden flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Server className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Legacy Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Network className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">ServiceNow</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Workflow className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Automation</span>
                </div>
              </div>
            </div>

            {/* Right: Integration Diagram */}
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Legacy Systems - Left */}
                <div className="absolute left-0 top-1/4 flex flex-col gap-6">
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                      <Server className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Legacy Servers</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}25` }}>
                      <Database className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Databases</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}20` }}>
                      <Cloud className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Cloud Apps</span>
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <line x1="120" y1="100" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="200" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="300" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                </svg>

                {/* ServiceNow Platform - Center */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative flex flex-col items-center">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: brandColor }}>
                      <Network className="w-10 h-10 text-white" />
                    </div>
                    <div className="mt-3 bg-slate-800/90 backdrop-blur rounded-full px-3 py-1 border border-slate-700">
                      <span className="text-xs font-medium text-white">ServiceNow</span>
                    </div>
                    <div className="absolute inset-0 rounded-xl animate-ping opacity-30" style={{ backgroundColor: brandColor }} />
                  </div>
                </div>

                {/* Output - Right */}
                <div className="absolute right-0 top-1/4 flex flex-col gap-3">
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}30` }}>
                      <Workflow className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">Automated Workflows</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}25` }}>
                      <Shield className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">SLA Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              {highlights.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="font-semibold text-white">{stat.value}</span>
                  <span className="text-gray-300">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 2x Grid: 80px py, 32px gutter (gap-8) */}
      <section ref={servicesRef} id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Helping Businesses Plan and Optimise
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Our ServiceNow Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end ServiceNow capabilities from initial strategy through ongoing optimisation
            </p>
          </div>

          {/* 3-col grid: 32px gutter (2x Grid) */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Consultation - 32px padding (2x Grid unit) */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-50">
                  <MessageSquare className="w-7 h-7 text-blue-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Consultation</h3>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">2-4 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Strategic planning and roadmap development to ensure your ServiceNow investment delivers maximum ROI.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Current state assessment & gap analysis</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Module selection & architecture design</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Risk-mapped migration roadmap</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>ROI projection & business case</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Implementation */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-amber-50">
                  <Settings className="w-7 h-7 text-amber-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Implementation</h3>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">8 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Rapid, risk-mapped deployment with our proven 8-week go-live methodology.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Platform configuration & custom workflows</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Legacy system integrations (REST, SOAP, etc.)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Secure data migration & validation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>User training & go-live support</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Support */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-green-50">
                  <Headphones className="w-7 h-7 text-green-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Support</h3>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Ongoing</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  24/7 managed services with SLA-backed response times and continuous optimisation.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>24/7 technical support (15-min response)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Platform updates & security patches</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Performance monitoring & optimisation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Quarterly business reviews</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Case Studies - 2x Grid: 80px py, 32px spacing (space-y-8) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Proven Results for Enterprise Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world implementations delivering measurable business outcomes
            </p>
          </div>

          {/* 32px spacing between case studies (2x Grid) */}
          <div className="space-y-8">
            {/* Case Study 1 */}
            <Link 
              to="/projects/case-study/telco-service-desk-it-process-migration-to-servicenow"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: `linear-gradient(135deg, ${brandColor}30, ${brandColor}15)` }}>
                  <Building2 className="w-20 h-20" style={{ color: `${brandColor}80` }} />
                  <span className="text-sm font-medium" style={{ color: `${brandColor}` }}>Jazz</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Telecom</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Migration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    Enabling 99.95% uptime and 24/7 follow-the-sun support for Pakistan&apos;s largest telecom through ServiceNow Cloud migration
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Pakistan&apos;s largest telecommunications provider modernised their service desk
                    and migrated to ServiceNow Cloud, enabling 24/7 follow-the-sun support operations
                    with 99.95% platform availability.
                  </p>
                  {/* Metrics: 24px gap (1.5x units) */}
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">99.95%</div>
                        <div className="text-xs text-gray-500">Uptime SLA</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock3 className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">24/7</div>
                        <div className="text-xs text-gray-500">Coverage</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}15` }}>
                        <Activity className="w-5 h-5" style={{ color: brandColor }} />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">52%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link 
              to="/projects/case-study/servicenow-incident-automation"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: 'linear-gradient(135deg, #F5F0EB, #EDE8E3)' }}>
                  <Zap className="w-20 h-20 text-amber-500" />
                  <span className="text-sm font-medium text-amber-700">Client Photo</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">Automation</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Integration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    40% faster incident resolution for major telecom through intelligent ServiceNow automation
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Developed an intelligent microservice bridge integrating network alarms with ServiceNow,
                    eliminating manual incident handling and reducing response times through automated correlation
                    and smart routing.
                  </p>
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-50">
                        <Zap className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">40%</div>
                        <div className="text-xs text-gray-500">Less Manual Work</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-50">
                        <Activity className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">98%</div>
                        <div className="text-xs text-gray-500">SLA Compliance</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">45%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section - 2x Grid: 80px py */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] mb-4 block" style={{ color: '#6B9B8A' }}>
              Client Success
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-6 left-6 text-8xl font-serif text-gray-100 leading-none">&quot;</div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Jazz</p>
                  <p className="text-xs text-gray-500">Pakistan&apos;s Largest Telecom</p>
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                &quot;Perception IT&apos;s expertise in migrating our IBM Maximo ticketing system to ServiceNow was invaluable.
                <br /><br />
                Their smooth and meticulous approach ensured a seamless transition, eliminating the need for on-premises hardware and offering our team a robust cloud-based solution. This has resulted in improved accessibility, increased efficiency, and overall cost savings.&quot;
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-500">UI</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Usman Ikram</p>
                  <p className="text-sm text-gray-500">Manager, SQM & Automation Support, Jazz</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Perception IT Section - 2x Grid: 80py, 32px gaps */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] mb-4 block" style={{ color: '#6B9B8A' }}>
              The Differentiator
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              The Perception-IT Advantage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Integrate
```


## License: unknown
https://github.com/jrcairns/e-learn/blob/80a46ae220591862209a45513f85350dabcb419a/src/components/course-card/course-card.js

```
Perfect! I'll provide the complete updated ServiceNow.tsx with 2x Grid conversion and Carbon icon integration. Since I don't have direct terminal access, here are the steps:

**Step 1: Install Carbon icons**
```bash
npm install @carbon/icons-react
```

**Step 2: Updated ServiceNow.tsx** with all 2x Grid spacing and Carbon icons:

```tsx
import { useEffect, useRef, useState } from 'react';
import {
  // Lucide icons (existing)
  ArrowRight,
  MessageSquare,
  Settings,
  Headphones,
  Award,
  Layers,
  Code,
  Clock,
  Activity,
  Server,
  Database,
  Cloud,
  Shield,
  Workflow,
  Network,
  Building2,
  Zap,
  TrendingUp,
  Clock3,
  FileCode,
  Lock,
  Users,
  Link2,
  Globe,
  BookOpen,
  Lightbulb,
  Target,
  ChevronDown,
  ChevronUp,
  CheckCircle2
} from 'lucide-react';

// Carbon icons (new)
import { DataIntegration20, Collaborate20, Support20 } from '@carbon/icons-react';

import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';

const ServiceNow = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [showAllTech, setShowAllTech] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToServices = () => {
    if (servicesRef.current) {
      const yOffset = -80;
      const y = servicesRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const brandColor = '#6B9B8A';

  const highlights = [
    { value: '14+', label: 'Years Experience' },
    { value: 'Deep', label: 'Enterprise Expertise' },
    { value: 'Proven', label: 'Track Record' },
    { value: '50+', label: 'Projects Delivered' }
  ];

  const techStack = [
    { name: 'REST API', icon: Code },
    { name: 'SOAP', icon: Server },
    { name: 'JSON', icon: FileCode },
    { name: 'XML', icon: Globe },
    { name: 'OAuth', icon: Lock },
    { name: 'LDAP', icon: Users },
    { name: 'SQL', icon: Database },
    { name: 'Webhooks', icon: Link2 }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navigation />

      {/* Breadcrumb - 2x Grid: 16px padding */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="hover:text-gray-900 transition-colors">Services</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services#platforms" className="hover:text-gray-900 transition-colors">IT Platforms</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">ServiceNow</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - 2x Grid: 80px section padding, 16px gaps */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ background: `linear-gradient(135deg, #0F172A 0%, #1E293B 50%, ${brandColor}20 100%)` }}>
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: brandColor }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600 rounded-full blur-3xl" />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-8"
                style={{ backgroundColor: `${brandColor}30`, color: brandColor }}
              >
                ServiceNow Integration
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-[1.15] tracking-tight">
                Secure Your ServiceNow Transition
              </h1>
          
              <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
                Risk-mapped integrations that prevent SLA breaches and ensure data continuity 
                between your core systems and ServiceNow workflows.
              </p>
          
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90"
                  style={{ backgroundColor: brandColor }}
                >
                  Free Migration Assessment
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={scrollToServices}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-all"
                >
                  View Services
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
          
              {/* Mobile: Key stats row - 2x Grid: 16px gap */}
              <div className="lg:hidden flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Server className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Legacy Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Network className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">ServiceNow</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Workflow className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Automation</span>
                </div>
              </div>
            </div>

            {/* Right: Integration Diagram */}
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Legacy Systems - Left */}
                <div className="absolute left-0 top-1/4 flex flex-col gap-6">
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                      <Server className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Legacy Servers</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}25` }}>
                      <Database className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Databases</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}20` }}>
                      <Cloud className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Cloud Apps</span>
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <line x1="120" y1="100" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="200" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="300" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                </svg>

                {/* ServiceNow Platform - Center */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative flex flex-col items-center">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: brandColor }}>
                      <Network className="w-10 h-10 text-white" />
                    </div>
                    <div className="mt-3 bg-slate-800/90 backdrop-blur rounded-full px-3 py-1 border border-slate-700">
                      <span className="text-xs font-medium text-white">ServiceNow</span>
                    </div>
                    <div className="absolute inset-0 rounded-xl animate-ping opacity-30" style={{ backgroundColor: brandColor }} />
                  </div>
                </div>

                {/* Output - Right */}
                <div className="absolute right-0 top-1/4 flex flex-col gap-3">
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}30` }}>
                      <Workflow className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">Automated Workflows</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}25` }}>
                      <Shield className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">SLA Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              {highlights.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="font-semibold text-white">{stat.value}</span>
                  <span className="text-gray-300">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 2x Grid: 80px py, 32px gutter (gap-8) */}
      <section ref={servicesRef} id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Helping Businesses Plan and Optimise
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Our ServiceNow Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end ServiceNow capabilities from initial strategy through ongoing optimisation
            </p>
          </div>

          {/* 3-col grid: 32px gutter (2x Grid) */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Consultation - 32px padding (2x Grid unit) */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-50">
                  <MessageSquare className="w-7 h-7 text-blue-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Consultation</h3>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">2-4 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Strategic planning and roadmap development to ensure your ServiceNow investment delivers maximum ROI.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Current state assessment & gap analysis</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Module selection & architecture design</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Risk-mapped migration roadmap</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>ROI projection & business case</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Implementation */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-amber-50">
                  <Settings className="w-7 h-7 text-amber-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Implementation</h3>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">8 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Rapid, risk-mapped deployment with our proven 8-week go-live methodology.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Platform configuration & custom workflows</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Legacy system integrations (REST, SOAP, etc.)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Secure data migration & validation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>User training & go-live support</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Support */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-green-50">
                  <Headphones className="w-7 h-7 text-green-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Support</h3>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Ongoing</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  24/7 managed services with SLA-backed response times and continuous optimisation.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>24/7 technical support (15-min response)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Platform updates & security patches</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Performance monitoring & optimisation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Quarterly business reviews</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Case Studies - 2x Grid: 80px py, 32px spacing (space-y-8) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Proven Results for Enterprise Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world implementations delivering measurable business outcomes
            </p>
          </div>

          {/* 32px spacing between case studies (2x Grid) */}
          <div className="space-y-8">
            {/* Case Study 1 */}
            <Link 
              to="/projects/case-study/telco-service-desk-it-process-migration-to-servicenow"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: `linear-gradient(135deg, ${brandColor}30, ${brandColor}15)` }}>
                  <Building2 className="w-20 h-20" style={{ color: `${brandColor}80` }} />
                  <span className="text-sm font-medium" style={{ color: `${brandColor}` }}>Jazz</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Telecom</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Migration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    Enabling 99.95% uptime and 24/7 follow-the-sun support for Pakistan&apos;s largest telecom through ServiceNow Cloud migration
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Pakistan&apos;s largest telecommunications provider modernised their service desk
                    and migrated to ServiceNow Cloud, enabling 24/7 follow-the-sun support operations
                    with 99.95% platform availability.
                  </p>
                  {/* Metrics: 24px gap (1.5x units) */}
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">99.95%</div>
                        <div className="text-xs text-gray-500">Uptime SLA</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock3 className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">24/7</div>
                        <div className="text-xs text-gray-500">Coverage</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}15` }}>
                        <Activity className="w-5 h-5" style={{ color: brandColor }} />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">52%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link 
              to="/projects/case-study/servicenow-incident-automation"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: 'linear-gradient(135deg, #F5F0EB, #EDE8E3)' }}>
                  <Zap className="w-20 h-20 text-amber-500" />
                  <span className="text-sm font-medium text-amber-700">Client Photo</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">Automation</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Integration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    40% faster incident resolution for major telecom through intelligent ServiceNow automation
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Developed an intelligent microservice bridge integrating network alarms with ServiceNow,
                    eliminating manual incident handling and reducing response times through automated correlation
                    and smart routing.
                  </p>
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-50">
                        <Zap className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">40%</div>
                        <div className="text-xs text-gray-500">Less Manual Work</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-50">
                        <Activity className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">98%</div>
                        <div className="text-xs text-gray-500">SLA Compliance</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">45%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section - 2x Grid: 80px py */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] mb-4 block" style={{ color: '#6B9B8A' }}>
              Client Success
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-6 left-6 text-8xl font-serif text-gray-100 leading-none">&quot;</div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Jazz</p>
                  <p className="text-xs text-gray-500">Pakistan&apos;s Largest Telecom</p>
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                &quot;Perception IT&apos;s expertise in migrating our IBM Maximo ticketing system to ServiceNow was invaluable.
                <br /><br />
                Their smooth and meticulous approach ensured a seamless transition, eliminating the need for on-premises hardware and offering our team a robust cloud-based solution. This has resulted in improved accessibility, increased efficiency, and overall cost savings.&quot;
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-500">UI</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Usman Ikram</p>
                  <p className="text-sm text-gray-500">Manager, SQM & Automation Support, Jazz</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Perception IT Section - 2x Grid: 80py, 32px gaps */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] mb-4 block" style={{ color: '#6B9B8A' }}>
              The Differentiator
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              The Perception-IT Advantage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Integrate
```


## License: unknown
https://github.com/wonjongjang/TIL/blob/2705a20d8b28aeab3283d60a6a0e09d180643d3f/NextJS/Nomad%20Coders/%EC%BA%90%EB%9F%BF%EB%A7%88%EC%BC%93%20%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9/carrot-market/pages/profile/index.tsx

```
Perfect! I'll provide the complete updated ServiceNow.tsx with 2x Grid conversion and Carbon icon integration. Since I don't have direct terminal access, here are the steps:

**Step 1: Install Carbon icons**
```bash
npm install @carbon/icons-react
```

**Step 2: Updated ServiceNow.tsx** with all 2x Grid spacing and Carbon icons:

```tsx
import { useEffect, useRef, useState } from 'react';
import {
  // Lucide icons (existing)
  ArrowRight,
  MessageSquare,
  Settings,
  Headphones,
  Award,
  Layers,
  Code,
  Clock,
  Activity,
  Server,
  Database,
  Cloud,
  Shield,
  Workflow,
  Network,
  Building2,
  Zap,
  TrendingUp,
  Clock3,
  FileCode,
  Lock,
  Users,
  Link2,
  Globe,
  BookOpen,
  Lightbulb,
  Target,
  ChevronDown,
  ChevronUp,
  CheckCircle2
} from 'lucide-react';

// Carbon icons (new)
import { DataIntegration20, Collaborate20, Support20 } from '@carbon/icons-react';

import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';

const ServiceNow = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [showAllTech, setShowAllTech] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToServices = () => {
    if (servicesRef.current) {
      const yOffset = -80;
      const y = servicesRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const brandColor = '#6B9B8A';

  const highlights = [
    { value: '14+', label: 'Years Experience' },
    { value: 'Deep', label: 'Enterprise Expertise' },
    { value: 'Proven', label: 'Track Record' },
    { value: '50+', label: 'Projects Delivered' }
  ];

  const techStack = [
    { name: 'REST API', icon: Code },
    { name: 'SOAP', icon: Server },
    { name: 'JSON', icon: FileCode },
    { name: 'XML', icon: Globe },
    { name: 'OAuth', icon: Lock },
    { name: 'LDAP', icon: Users },
    { name: 'SQL', icon: Database },
    { name: 'Webhooks', icon: Link2 }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navigation />

      {/* Breadcrumb - 2x Grid: 16px padding */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="hover:text-gray-900 transition-colors">Services</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services#platforms" className="hover:text-gray-900 transition-colors">IT Platforms</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">ServiceNow</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - 2x Grid: 80px section padding, 16px gaps */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ background: `linear-gradient(135deg, #0F172A 0%, #1E293B 50%, ${brandColor}20 100%)` }}>
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: brandColor }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600 rounded-full blur-3xl" />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-8"
                style={{ backgroundColor: `${brandColor}30`, color: brandColor }}
              >
                ServiceNow Integration
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-[1.15] tracking-tight">
                Secure Your ServiceNow Transition
              </h1>
          
              <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
                Risk-mapped integrations that prevent SLA breaches and ensure data continuity 
                between your core systems and ServiceNow workflows.
              </p>
          
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90"
                  style={{ backgroundColor: brandColor }}
                >
                  Free Migration Assessment
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={scrollToServices}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-all"
                >
                  View Services
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
          
              {/* Mobile: Key stats row - 2x Grid: 16px gap */}
              <div className="lg:hidden flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Server className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Legacy Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Network className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">ServiceNow</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Workflow className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Automation</span>
                </div>
              </div>
            </div>

            {/* Right: Integration Diagram */}
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Legacy Systems - Left */}
                <div className="absolute left-0 top-1/4 flex flex-col gap-6">
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                      <Server className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Legacy Servers</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}25` }}>
                      <Database className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Databases</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}20` }}>
                      <Cloud className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Cloud Apps</span>
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <line x1="120" y1="100" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="200" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="300" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                </svg>

                {/* ServiceNow Platform - Center */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative flex flex-col items-center">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: brandColor }}>
                      <Network className="w-10 h-10 text-white" />
                    </div>
                    <div className="mt-3 bg-slate-800/90 backdrop-blur rounded-full px-3 py-1 border border-slate-700">
                      <span className="text-xs font-medium text-white">ServiceNow</span>
                    </div>
                    <div className="absolute inset-0 rounded-xl animate-ping opacity-30" style={{ backgroundColor: brandColor }} />
                  </div>
                </div>

                {/* Output - Right */}
                <div className="absolute right-0 top-1/4 flex flex-col gap-3">
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}30` }}>
                      <Workflow className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">Automated Workflows</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}25` }}>
                      <Shield className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">SLA Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              {highlights.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="font-semibold text-white">{stat.value}</span>
                  <span className="text-gray-300">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 2x Grid: 80px py, 32px gutter (gap-8) */}
      <section ref={servicesRef} id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Helping Businesses Plan and Optimise
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Our ServiceNow Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end ServiceNow capabilities from initial strategy through ongoing optimisation
            </p>
          </div>

          {/* 3-col grid: 32px gutter (2x Grid) */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Consultation - 32px padding (2x Grid unit) */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-50">
                  <MessageSquare className="w-7 h-7 text-blue-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Consultation</h3>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">2-4 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Strategic planning and roadmap development to ensure your ServiceNow investment delivers maximum ROI.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Current state assessment & gap analysis</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Module selection & architecture design</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Risk-mapped migration roadmap</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>ROI projection & business case</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Implementation */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-amber-50">
                  <Settings className="w-7 h-7 text-amber-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Implementation</h3>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">8 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Rapid, risk-mapped deployment with our proven 8-week go-live methodology.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Platform configuration & custom workflows</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Legacy system integrations (REST, SOAP, etc.)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Secure data migration & validation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>User training & go-live support</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Support */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-green-50">
                  <Headphones className="w-7 h-7 text-green-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Support</h3>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Ongoing</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  24/7 managed services with SLA-backed response times and continuous optimisation.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>24/7 technical support (15-min response)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Platform updates & security patches</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Performance monitoring & optimisation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Quarterly business reviews</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Case Studies - 2x Grid: 80px py, 32px spacing (space-y-8) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Proven Results for Enterprise Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world implementations delivering measurable business outcomes
            </p>
          </div>

          {/* 32px spacing between case studies (2x Grid) */}
          <div className="space-y-8">
            {/* Case Study 1 */}
            <Link 
              to="/projects/case-study/telco-service-desk-it-process-migration-to-servicenow"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: `linear-gradient(135deg, ${brandColor}30, ${brandColor}15)` }}>
                  <Building2 className="w-20 h-20" style={{ color: `${brandColor}80` }} />
                  <span className="text-sm font-medium" style={{ color: `${brandColor}` }}>Jazz</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Telecom</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Migration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    Enabling 99.95% uptime and 24/7 follow-the-sun support for Pakistan&apos;s largest telecom through ServiceNow Cloud migration
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Pakistan&apos;s largest telecommunications provider modernised their service desk
                    and migrated to ServiceNow Cloud, enabling 24/7 follow-the-sun support operations
                    with 99.95% platform availability.
                  </p>
                  {/* Metrics: 24px gap (1.5x units) */}
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">99.95%</div>
                        <div className="text-xs text-gray-500">Uptime SLA</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock3 className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">24/7</div>
                        <div className="text-xs text-gray-500">Coverage</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}15` }}>
                        <Activity className="w-5 h-5" style={{ color: brandColor }} />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">52%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link 
              to="/projects/case-study/servicenow-incident-automation"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: 'linear-gradient(135deg, #F5F0EB, #EDE8E3)' }}>
                  <Zap className="w-20 h-20 text-amber-500" />
                  <span className="text-sm font-medium text-amber-700">Client Photo</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">Automation</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Integration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    40% faster incident resolution for major telecom through intelligent ServiceNow automation
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Developed an intelligent microservice bridge integrating network alarms with ServiceNow,
                    eliminating manual incident handling and reducing response times through automated correlation
                    and smart routing.
                  </p>
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-50">
                        <Zap className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">40%</div>
                        <div className="text-xs text-gray-500">Less Manual Work</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-50">
                        <Activity className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">98%</div>
                        <div className="text-xs text-gray-500">SLA Compliance</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">45%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section - 2x Grid: 80px py */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] mb-4 block" style={{ color: '#6B9B8A' }}>
              Client Success
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-6 left-6 text-8xl font-serif text-gray-100 leading-none">&quot;</div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Jazz</p>
                  <p className="text-xs text-gray-500">Pakistan&apos;s Largest Telecom</p>
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                &quot;Perception IT&apos;s expertise in migrating our IBM Maximo ticketing system to ServiceNow was invaluable.
                <br /><br />
                Their smooth and meticulous approach ensured a seamless transition, eliminating the need for on-premises hardware and offering our team a robust cloud-based solution. This has resulted in improved accessibility, increased efficiency, and overall cost savings.&quot;
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-500">UI</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Usman Ikram</p>
                  <p className="text-sm text-gray-500">Manager, SQM & Automation Support, Jazz</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Perception IT Section - 2x Grid: 80py, 32px gaps */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] mb-4 block" style={{ color: '#6B9B8A' }}>
              The Differentiator
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              The Perception-IT Advantage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Integrate
```


## License: unknown
https://github.com/PalmersTaiwan/palmers-taiwan/blob/a79590f0ff82d53031ce669c451a11d9a101721b/components/product/review-stars.js

```
Perfect! I'll provide the complete updated ServiceNow.tsx with 2x Grid conversion and Carbon icon integration. Since I don't have direct terminal access, here are the steps:

**Step 1: Install Carbon icons**
```bash
npm install @carbon/icons-react
```

**Step 2: Updated ServiceNow.tsx** with all 2x Grid spacing and Carbon icons:

```tsx
import { useEffect, useRef, useState } from 'react';
import {
  // Lucide icons (existing)
  ArrowRight,
  MessageSquare,
  Settings,
  Headphones,
  Award,
  Layers,
  Code,
  Clock,
  Activity,
  Server,
  Database,
  Cloud,
  Shield,
  Workflow,
  Network,
  Building2,
  Zap,
  TrendingUp,
  Clock3,
  FileCode,
  Lock,
  Users,
  Link2,
  Globe,
  BookOpen,
  Lightbulb,
  Target,
  ChevronDown,
  ChevronUp,
  CheckCircle2
} from 'lucide-react';

// Carbon icons (new)
import { DataIntegration20, Collaborate20, Support20 } from '@carbon/icons-react';

import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';

const ServiceNow = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [showAllTech, setShowAllTech] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToServices = () => {
    if (servicesRef.current) {
      const yOffset = -80;
      const y = servicesRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const brandColor = '#6B9B8A';

  const highlights = [
    { value: '14+', label: 'Years Experience' },
    { value: 'Deep', label: 'Enterprise Expertise' },
    { value: 'Proven', label: 'Track Record' },
    { value: '50+', label: 'Projects Delivered' }
  ];

  const techStack = [
    { name: 'REST API', icon: Code },
    { name: 'SOAP', icon: Server },
    { name: 'JSON', icon: FileCode },
    { name: 'XML', icon: Globe },
    { name: 'OAuth', icon: Lock },
    { name: 'LDAP', icon: Users },
    { name: 'SQL', icon: Database },
    { name: 'Webhooks', icon: Link2 }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navigation />

      {/* Breadcrumb - 2x Grid: 16px padding */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="hover:text-gray-900 transition-colors">Services</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services#platforms" className="hover:text-gray-900 transition-colors">IT Platforms</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">ServiceNow</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - 2x Grid: 80px section padding, 16px gaps */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ background: `linear-gradient(135deg, #0F172A 0%, #1E293B 50%, ${brandColor}20 100%)` }}>
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: brandColor }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600 rounded-full blur-3xl" />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-8"
                style={{ backgroundColor: `${brandColor}30`, color: brandColor }}
              >
                ServiceNow Integration
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-[1.15] tracking-tight">
                Secure Your ServiceNow Transition
              </h1>
          
              <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
                Risk-mapped integrations that prevent SLA breaches and ensure data continuity 
                between your core systems and ServiceNow workflows.
              </p>
          
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90"
                  style={{ backgroundColor: brandColor }}
                >
                  Free Migration Assessment
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={scrollToServices}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-all"
                >
                  View Services
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
          
              {/* Mobile: Key stats row - 2x Grid: 16px gap */}
              <div className="lg:hidden flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Server className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Legacy Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Network className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">ServiceNow</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Workflow className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Automation</span>
                </div>
              </div>
            </div>

            {/* Right: Integration Diagram */}
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Legacy Systems - Left */}
                <div className="absolute left-0 top-1/4 flex flex-col gap-6">
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                      <Server className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Legacy Servers</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}25` }}>
                      <Database className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Databases</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}20` }}>
                      <Cloud className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Cloud Apps</span>
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <line x1="120" y1="100" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="200" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="300" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                </svg>

                {/* ServiceNow Platform - Center */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative flex flex-col items-center">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: brandColor }}>
                      <Network className="w-10 h-10 text-white" />
                    </div>
                    <div className="mt-3 bg-slate-800/90 backdrop-blur rounded-full px-3 py-1 border border-slate-700">
                      <span className="text-xs font-medium text-white">ServiceNow</span>
                    </div>
                    <div className="absolute inset-0 rounded-xl animate-ping opacity-30" style={{ backgroundColor: brandColor }} />
                  </div>
                </div>

                {/* Output - Right */}
                <div className="absolute right-0 top-1/4 flex flex-col gap-3">
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}30` }}>
                      <Workflow className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">Automated Workflows</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}25` }}>
                      <Shield className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">SLA Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              {highlights.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="font-semibold text-white">{stat.value}</span>
                  <span className="text-gray-300">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 2x Grid: 80px py, 32px gutter (gap-8) */}
      <section ref={servicesRef} id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Helping Businesses Plan and Optimise
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Our ServiceNow Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end ServiceNow capabilities from initial strategy through ongoing optimisation
            </p>
          </div>

          {/* 3-col grid: 32px gutter (2x Grid) */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Consultation - 32px padding (2x Grid unit) */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-50">
                  <MessageSquare className="w-7 h-7 text-blue-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Consultation</h3>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">2-4 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Strategic planning and roadmap development to ensure your ServiceNow investment delivers maximum ROI.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Current state assessment & gap analysis</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Module selection & architecture design</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Risk-mapped migration roadmap</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>ROI projection & business case</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Implementation */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-amber-50">
                  <Settings className="w-7 h-7 text-amber-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Implementation</h3>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">8 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Rapid, risk-mapped deployment with our proven 8-week go-live methodology.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Platform configuration & custom workflows</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Legacy system integrations (REST, SOAP, etc.)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Secure data migration & validation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>User training & go-live support</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Support */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-green-50">
                  <Headphones className="w-7 h-7 text-green-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Support</h3>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Ongoing</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  24/7 managed services with SLA-backed response times and continuous optimisation.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>24/7 technical support (15-min response)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Platform updates & security patches</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Performance monitoring & optimisation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Quarterly business reviews</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Case Studies - 2x Grid: 80px py, 32px spacing (space-y-8) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Proven Results for Enterprise Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world implementations delivering measurable business outcomes
            </p>
          </div>

          {/* 32px spacing between case studies (2x Grid) */}
          <div className="space-y-8">
            {/* Case Study 1 */}
            <Link 
              to="/projects/case-study/telco-service-desk-it-process-migration-to-servicenow"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: `linear-gradient(135deg, ${brandColor}30, ${brandColor}15)` }}>
                  <Building2 className="w-20 h-20" style={{ color: `${brandColor}80` }} />
                  <span className="text-sm font-medium" style={{ color: `${brandColor}` }}>Jazz</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Telecom</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Migration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    Enabling 99.95% uptime and 24/7 follow-the-sun support for Pakistan&apos;s largest telecom through ServiceNow Cloud migration
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Pakistan&apos;s largest telecommunications provider modernised their service desk
                    and migrated to ServiceNow Cloud, enabling 24/7 follow-the-sun support operations
                    with 99.95% platform availability.
                  </p>
                  {/* Metrics: 24px gap (1.5x units) */}
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">99.95%</div>
                        <div className="text-xs text-gray-500">Uptime SLA</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock3 className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">24/7</div>
                        <div className="text-xs text-gray-500">Coverage</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}15` }}>
                        <Activity className="w-5 h-5" style={{ color: brandColor }} />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">52%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link 
              to="/projects/case-study/servicenow-incident-automation"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: 'linear-gradient(135deg, #F5F0EB, #EDE8E3)' }}>
                  <Zap className="w-20 h-20 text-amber-500" />
                  <span className="text-sm font-medium text-amber-700">Client Photo</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">Automation</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Integration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    40% faster incident resolution for major telecom through intelligent ServiceNow automation
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Developed an intelligent microservice bridge integrating network alarms with ServiceNow,
                    eliminating manual incident handling and reducing response times through automated correlation
                    and smart routing.
                  </p>
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-50">
                        <Zap className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">40%</div>
                        <div className="text-xs text-gray-500">Less Manual Work</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-50">
                        <Activity className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">98%</div>
                        <div className="text-xs text-gray-500">SLA Compliance</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">45%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section - 2x Grid: 80px py */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] mb-4 block" style={{ color: '#6B9B8A' }}>
              Client Success
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-6 left-6 text-8xl font-serif text-gray-100 leading-none">&quot;</div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Jazz</p>
                  <p className="text-xs text-gray-500">Pakistan&apos;s Largest Telecom</p>
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                &quot;Perception IT&apos;s expertise in migrating our IBM Maximo ticketing system to ServiceNow was invaluable.
                <br /><br />
                Their smooth and meticulous approach ensured a seamless transition, eliminating the need for on-premises hardware and offering our team a robust cloud-based solution. This has resulted in improved accessibility, increased efficiency, and overall cost savings.&quot;
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-500">UI</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Usman Ikram</p>
                  <p className="text-sm text-gray-500">Manager, SQM & Automation Support, Jazz</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Perception IT Section - 2x Grid: 80py, 32px gaps */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] mb-4 block" style={{ color: '#6B9B8A' }}>
              The Differentiator
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              The Perception-IT Advantage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Integrate
```


## License: unknown
https://github.com/jrcairns/e-learn/blob/80a46ae220591862209a45513f85350dabcb419a/src/components/course-card/course-card.js

```
Perfect! I'll provide the complete updated ServiceNow.tsx with 2x Grid conversion and Carbon icon integration. Since I don't have direct terminal access, here are the steps:

**Step 1: Install Carbon icons**
```bash
npm install @carbon/icons-react
```

**Step 2: Updated ServiceNow.tsx** with all 2x Grid spacing and Carbon icons:

```tsx
import { useEffect, useRef, useState } from 'react';
import {
  // Lucide icons (existing)
  ArrowRight,
  MessageSquare,
  Settings,
  Headphones,
  Award,
  Layers,
  Code,
  Clock,
  Activity,
  Server,
  Database,
  Cloud,
  Shield,
  Workflow,
  Network,
  Building2,
  Zap,
  TrendingUp,
  Clock3,
  FileCode,
  Lock,
  Users,
  Link2,
  Globe,
  BookOpen,
  Lightbulb,
  Target,
  ChevronDown,
  ChevronUp,
  CheckCircle2
} from 'lucide-react';

// Carbon icons (new)
import { DataIntegration20, Collaborate20, Support20 } from '@carbon/icons-react';

import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';

const ServiceNow = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [showAllTech, setShowAllTech] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToServices = () => {
    if (servicesRef.current) {
      const yOffset = -80;
      const y = servicesRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const brandColor = '#6B9B8A';

  const highlights = [
    { value: '14+', label: 'Years Experience' },
    { value: 'Deep', label: 'Enterprise Expertise' },
    { value: 'Proven', label: 'Track Record' },
    { value: '50+', label: 'Projects Delivered' }
  ];

  const techStack = [
    { name: 'REST API', icon: Code },
    { name: 'SOAP', icon: Server },
    { name: 'JSON', icon: FileCode },
    { name: 'XML', icon: Globe },
    { name: 'OAuth', icon: Lock },
    { name: 'LDAP', icon: Users },
    { name: 'SQL', icon: Database },
    { name: 'Webhooks', icon: Link2 }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navigation />

      {/* Breadcrumb - 2x Grid: 16px padding */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="hover:text-gray-900 transition-colors">Services</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services#platforms" className="hover:text-gray-900 transition-colors">IT Platforms</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">ServiceNow</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - 2x Grid: 80px section padding, 16px gaps */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ background: `linear-gradient(135deg, #0F172A 0%, #1E293B 50%, ${brandColor}20 100%)` }}>
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: brandColor }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600 rounded-full blur-3xl" />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-8"
                style={{ backgroundColor: `${brandColor}30`, color: brandColor }}
              >
                ServiceNow Integration
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-[1.15] tracking-tight">
                Secure Your ServiceNow Transition
              </h1>
          
              <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
                Risk-mapped integrations that prevent SLA breaches and ensure data continuity 
                between your core systems and ServiceNow workflows.
              </p>
          
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90"
                  style={{ backgroundColor: brandColor }}
                >
                  Free Migration Assessment
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={scrollToServices}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-all"
                >
                  View Services
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
          
              {/* Mobile: Key stats row - 2x Grid: 16px gap */}
              <div className="lg:hidden flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Server className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Legacy Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Network className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">ServiceNow</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Workflow className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Automation</span>
                </div>
              </div>
            </div>

            {/* Right: Integration Diagram */}
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Legacy Systems - Left */}
                <div className="absolute left-0 top-1/4 flex flex-col gap-6">
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                      <Server className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Legacy Servers</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}25` }}>
                      <Database className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Databases</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}20` }}>
                      <Cloud className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Cloud Apps</span>
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <line x1="120" y1="100" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="200" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="300" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                </svg>

                {/* ServiceNow Platform - Center */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative flex flex-col items-center">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: brandColor }}>
                      <Network className="w-10 h-10 text-white" />
                    </div>
                    <div className="mt-3 bg-slate-800/90 backdrop-blur rounded-full px-3 py-1 border border-slate-700">
                      <span className="text-xs font-medium text-white">ServiceNow</span>
                    </div>
                    <div className="absolute inset-0 rounded-xl animate-ping opacity-30" style={{ backgroundColor: brandColor }} />
                  </div>
                </div>

                {/* Output - Right */}
                <div className="absolute right-0 top-1/4 flex flex-col gap-3">
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}30` }}>
                      <Workflow className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">Automated Workflows</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}25` }}>
                      <Shield className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">SLA Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              {highlights.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="font-semibold text-white">{stat.value}</span>
                  <span className="text-gray-300">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 2x Grid: 80px py, 32px gutter (gap-8) */}
      <section ref={servicesRef} id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Helping Businesses Plan and Optimise
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Our ServiceNow Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end ServiceNow capabilities from initial strategy through ongoing optimisation
            </p>
          </div>

          {/* 3-col grid: 32px gutter (2x Grid) */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Consultation - 32px padding (2x Grid unit) */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-50">
                  <MessageSquare className="w-7 h-7 text-blue-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Consultation</h3>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">2-4 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Strategic planning and roadmap development to ensure your ServiceNow investment delivers maximum ROI.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Current state assessment & gap analysis</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Module selection & architecture design</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Risk-mapped migration roadmap</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>ROI projection & business case</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Implementation */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-amber-50">
                  <Settings className="w-7 h-7 text-amber-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Implementation</h3>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">8 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Rapid, risk-mapped deployment with our proven 8-week go-live methodology.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Platform configuration & custom workflows</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Legacy system integrations (REST, SOAP, etc.)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Secure data migration & validation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>User training & go-live support</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Support */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-green-50">
                  <Headphones className="w-7 h-7 text-green-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Support</h3>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Ongoing</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  24/7 managed services with SLA-backed response times and continuous optimisation.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>24/7 technical support (15-min response)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Platform updates & security patches</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Performance monitoring & optimisation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Quarterly business reviews</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Case Studies - 2x Grid: 80px py, 32px spacing (space-y-8) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Proven Results for Enterprise Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world implementations delivering measurable business outcomes
            </p>
          </div>

          {/* 32px spacing between case studies (2x Grid) */}
          <div className="space-y-8">
            {/* Case Study 1 */}
            <Link 
              to="/projects/case-study/telco-service-desk-it-process-migration-to-servicenow"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: `linear-gradient(135deg, ${brandColor}30, ${brandColor}15)` }}>
                  <Building2 className="w-20 h-20" style={{ color: `${brandColor}80` }} />
                  <span className="text-sm font-medium" style={{ color: `${brandColor}` }}>Jazz</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Telecom</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Migration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    Enabling 99.95% uptime and 24/7 follow-the-sun support for Pakistan&apos;s largest telecom through ServiceNow Cloud migration
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Pakistan&apos;s largest telecommunications provider modernised their service desk
                    and migrated to ServiceNow Cloud, enabling 24/7 follow-the-sun support operations
                    with 99.95% platform availability.
                  </p>
                  {/* Metrics: 24px gap (1.5x units) */}
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">99.95%</div>
                        <div className="text-xs text-gray-500">Uptime SLA</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock3 className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">24/7</div>
                        <div className="text-xs text-gray-500">Coverage</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}15` }}>
                        <Activity className="w-5 h-5" style={{ color: brandColor }} />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">52%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link 
              to="/projects/case-study/servicenow-incident-automation"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: 'linear-gradient(135deg, #F5F0EB, #EDE8E3)' }}>
                  <Zap className="w-20 h-20 text-amber-500" />
                  <span className="text-sm font-medium text-amber-700">Client Photo</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">Automation</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Integration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    40% faster incident resolution for major telecom through intelligent ServiceNow automation
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Developed an intelligent microservice bridge integrating network alarms with ServiceNow,
                    eliminating manual incident handling and reducing response times through automated correlation
                    and smart routing.
                  </p>
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-50">
                        <Zap className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">40%</div>
                        <div className="text-xs text-gray-500">Less Manual Work</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-50">
                        <Activity className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">98%</div>
                        <div className="text-xs text-gray-500">SLA Compliance</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">45%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section - 2x Grid: 80px py */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] mb-4 block" style={{ color: '#6B9B8A' }}>
              Client Success
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-6 left-6 text-8xl font-serif text-gray-100 leading-none">&quot;</div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Jazz</p>
                  <p className="text-xs text-gray-500">Pakistan&apos;s Largest Telecom</p>
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                &quot;Perception IT&apos;s expertise in migrating our IBM Maximo ticketing system to ServiceNow was invaluable.
                <br /><br />
                Their smooth and meticulous approach ensured a seamless transition, eliminating the need for on-premises hardware and offering our team a robust cloud-based solution. This has resulted in improved accessibility, increased efficiency, and overall cost savings.&quot;
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-500">UI</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Usman Ikram</p>
                  <p className="text-sm text-gray-500">Manager, SQM & Automation Support, Jazz</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Perception IT Section - 2x Grid: 80py, 32px gaps */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] mb-4 block" style={{ color: '#6B9B8A' }}>
              The Differentiator
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              The Perception-IT Advantage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Integrate
```


## License: unknown
https://github.com/wonjongjang/TIL/blob/2705a20d8b28aeab3283d60a6a0e09d180643d3f/NextJS/Nomad%20Coders/%EC%BA%90%EB%9F%BF%EB%A7%88%EC%BC%93%20%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9/carrot-market/pages/profile/index.tsx

```
Perfect! I'll provide the complete updated ServiceNow.tsx with 2x Grid conversion and Carbon icon integration. Since I don't have direct terminal access, here are the steps:

**Step 1: Install Carbon icons**
```bash
npm install @carbon/icons-react
```

**Step 2: Updated ServiceNow.tsx** with all 2x Grid spacing and Carbon icons:

```tsx
import { useEffect, useRef, useState } from 'react';
import {
  // Lucide icons (existing)
  ArrowRight,
  MessageSquare,
  Settings,
  Headphones,
  Award,
  Layers,
  Code,
  Clock,
  Activity,
  Server,
  Database,
  Cloud,
  Shield,
  Workflow,
  Network,
  Building2,
  Zap,
  TrendingUp,
  Clock3,
  FileCode,
  Lock,
  Users,
  Link2,
  Globe,
  BookOpen,
  Lightbulb,
  Target,
  ChevronDown,
  ChevronUp,
  CheckCircle2
} from 'lucide-react';

// Carbon icons (new)
import { DataIntegration20, Collaborate20, Support20 } from '@carbon/icons-react';

import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';

const ServiceNow = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [showAllTech, setShowAllTech] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToServices = () => {
    if (servicesRef.current) {
      const yOffset = -80;
      const y = servicesRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const brandColor = '#6B9B8A';

  const highlights = [
    { value: '14+', label: 'Years Experience' },
    { value: 'Deep', label: 'Enterprise Expertise' },
    { value: 'Proven', label: 'Track Record' },
    { value: '50+', label: 'Projects Delivered' }
  ];

  const techStack = [
    { name: 'REST API', icon: Code },
    { name: 'SOAP', icon: Server },
    { name: 'JSON', icon: FileCode },
    { name: 'XML', icon: Globe },
    { name: 'OAuth', icon: Lock },
    { name: 'LDAP', icon: Users },
    { name: 'SQL', icon: Database },
    { name: 'Webhooks', icon: Link2 }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navigation />

      {/* Breadcrumb - 2x Grid: 16px padding */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="hover:text-gray-900 transition-colors">Services</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services#platforms" className="hover:text-gray-900 transition-colors">IT Platforms</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">ServiceNow</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - 2x Grid: 80px section padding, 16px gaps */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ background: `linear-gradient(135deg, #0F172A 0%, #1E293B 50%, ${brandColor}20 100%)` }}>
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: brandColor }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600 rounded-full blur-3xl" />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-8"
                style={{ backgroundColor: `${brandColor}30`, color: brandColor }}
              >
                ServiceNow Integration
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-[1.15] tracking-tight">
                Secure Your ServiceNow Transition
              </h1>
          
              <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
                Risk-mapped integrations that prevent SLA breaches and ensure data continuity 
                between your core systems and ServiceNow workflows.
              </p>
          
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90"
                  style={{ backgroundColor: brandColor }}
                >
                  Free Migration Assessment
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={scrollToServices}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-all"
                >
                  View Services
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
          
              {/* Mobile: Key stats row - 2x Grid: 16px gap */}
              <div className="lg:hidden flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Server className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Legacy Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Network className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">ServiceNow</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Workflow className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Automation</span>
                </div>
              </div>
            </div>

            {/* Right: Integration Diagram */}
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Legacy Systems - Left */}
                <div className="absolute left-0 top-1/4 flex flex-col gap-6">
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                      <Server className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Legacy Servers</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}25` }}>
                      <Database className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Databases</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur rounded-lg px-4 py-3 border border-slate-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}20` }}>
                      <Cloud className="w-5 h-5" style={{ color: brandColor }} />
                    </div>
                    <span className="text-sm text-gray-300">Cloud Apps</span>
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <line x1="120" y1="100" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="200" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="300" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                  </line>
                </svg>

                {/* ServiceNow Platform - Center */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative flex flex-col items-center">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: brandColor }}>
                      <Network className="w-10 h-10 text-white" />
                    </div>
                    <div className="mt-3 bg-slate-800/90 backdrop-blur rounded-full px-3 py-1 border border-slate-700">
                      <span className="text-xs font-medium text-white">ServiceNow</span>
                    </div>
                    <div className="absolute inset-0 rounded-xl animate-ping opacity-30" style={{ backgroundColor: brandColor }} />
                  </div>
                </div>

                {/* Output - Right */}
                <div className="absolute right-0 top-1/4 flex flex-col gap-3">
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}30` }}>
                      <Workflow className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">Automated Workflows</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur rounded-lg px-3 py-2 border border-slate-700">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${brandColor}25` }}>
                      <Shield className="w-4 h-4" style={{ color: brandColor }} />
                    </div>
                    <span className="text-xs text-gray-300">SLA Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              {highlights.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="font-semibold text-white">{stat.value}</span>
                  <span className="text-gray-300">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 2x Grid: 80px py, 32px gutter (gap-8) */}
      <section ref={servicesRef} id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Helping Businesses Plan and Optimise
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Our ServiceNow Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end ServiceNow capabilities from initial strategy through ongoing optimisation
            </p>
          </div>

          {/* 3-col grid: 32px gutter (2x Grid) */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Consultation - 32px padding (2x Grid unit) */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-50">
                  <MessageSquare className="w-7 h-7 text-blue-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Consultation</h3>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">2-4 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Strategic planning and roadmap development to ensure your ServiceNow investment delivers maximum ROI.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Current state assessment & gap analysis</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Module selection & architecture design</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Risk-mapped migration roadmap</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>ROI projection & business case</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Implementation */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-amber-50">
                  <Settings className="w-7 h-7 text-amber-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Implementation</h3>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">8 weeks</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Rapid, risk-mapped deployment with our proven 8-week go-live methodology.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Platform configuration & custom workflows</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Legacy system integrations (REST, SOAP, etc.)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>Secure data migration & validation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                      <span>User training & go-live support</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Support */}
            <Link
              to="#contact"
              className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-green-50">
                  <Headphones className="w-7 h-7 text-green-600" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Support</h3>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Ongoing</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  24/7 managed services with SLA-backed response times and continuous optimisation.
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>24/7 technical support (15-min response)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Platform updates & security patches</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Performance monitoring & optimisation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>Quarterly business reviews</span>
                    </li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Case Studies - 2x Grid: 80px py, 32px spacing (space-y-8) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
            >
              Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Proven Results for Enterprise Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world implementations delivering measurable business outcomes
            </p>
          </div>

          {/* 32px spacing between case studies (2x Grid) */}
          <div className="space-y-8">
            {/* Case Study 1 */}
            <Link 
              to="/projects/case-study/telco-service-desk-it-process-migration-to-servicenow"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: `linear-gradient(135deg, ${brandColor}30, ${brandColor}15)` }}>
                  <Building2 className="w-20 h-20" style={{ color: `${brandColor}80` }} />
                  <span className="text-sm font-medium" style={{ color: `${brandColor}` }}>Jazz</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Telecom</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Migration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    Enabling 99.95% uptime and 24/7 follow-the-sun support for Pakistan&apos;s largest telecom through ServiceNow Cloud migration
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Pakistan&apos;s largest telecommunications provider modernised their service desk
                    and migrated to ServiceNow Cloud, enabling 24/7 follow-the-sun support operations
                    with 99.95% platform availability.
                  </p>
                  {/* Metrics: 24px gap (1.5x units) */}
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">99.95%</div>
                        <div className="text-xs text-gray-500">Uptime SLA</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock3 className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">24/7</div>
                        <div className="text-xs text-gray-500">Coverage</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}15` }}>
                        <Activity className="w-5 h-5" style={{ color: brandColor }} />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">52%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link 
              to="/projects/case-study/servicenow-incident-automation"
              className="group block bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto flex items-center justify-center flex-col justify-center gap-4" style={{ background: 'linear-gradient(135deg, #F5F0EB, #EDE8E3)' }}>
                  <Zap className="w-20 h-20 text-amber-500" />
                  <span className="text-sm font-medium text-amber-700">Client Photo</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">Automation</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Integration</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">ServiceNow</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    40% faster incident resolution for major telecom through intelligent ServiceNow automation
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Developed an intelligent microservice bridge integrating network alarms with ServiceNow,
                    eliminating manual incident handling and reducing response times through automated correlation
                    and smart routing.
                  </p>
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-50">
                        <Zap className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">40%</div>
                        <div className="text-xs text-gray-500">Less Manual Work</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-50">
                        <Activity className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">98%</div>
                        <div className="text-xs text-gray-500">SLA Compliance</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">45%</div>
                        <div className="text-xs text-gray-500">Faster Resolution</div>
                      </div>
                    </div>
                  </div>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: brandColor }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section - 2x Grid: 80px py */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] mb-4 block" style={{ color: '#6B9B8A' }}>
              Client Success
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-6 left-6 text-8xl font-serif text-gray-100 leading-none">&quot;</div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Jazz</p>
                  <p className="text-xs text-gray-500">Pakistan&apos;s Largest Telecom</p>
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                &quot;Perception IT&apos;s expertise in migrating our IBM Maximo ticketing system to ServiceNow was invaluable.
                <br /><br />
                Their smooth and meticulous approach ensured a seamless transition, eliminating the need for on-premises hardware and offering our team a robust cloud-based solution. This has resulted in improved accessibility, increased efficiency, and overall cost savings.&quot;
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-500">UI</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Usman Ikram</p>
                  <p className="text-sm text-gray-500">Manager, SQM & Automation Support, Jazz</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Perception IT Section - 2x Grid: 80py, 32px gaps */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] mb-4 block" style={{ color: '#6B9B8A' }}>
              The Differentiator
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              The Perception-IT Advantage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Integrate
```

