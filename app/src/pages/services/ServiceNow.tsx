import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  MessageSquare,
  Settings,
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
  Lock,
  Users,
  ChevronLeft,
  ChevronRight,
  Quote,
  Code,
  Cpu,
  Layers,
  GitBranch,
  FileCode,
  Terminal,
  ArrowUpRight,
  HeadphonesIcon,
  Search,
  AlertTriangle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';
import SidebarMenu from '../../components/SidebarMenu';

const ServiceNow = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  
  // Tech stack expansion state
  const [techExpanded, setTechExpanded] = useState(false);
  
  // Case Studies Carousel State
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0);
  
  // TCO Calculator State
  const [tcoUsers, setTcoUsers] = useState(500);
  const [tcoToolset, setTcoToolset] = useState<'excel' | 'jira' | 'legacy'>('excel');
  const [tcoModules, setTcoModules] = useState<string[]>(['itsm']);

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const brandColor = '#3B82F6';

  const highlights = [
    { value: '14+', label: 'Years Experience' },
    { value: 'Deep', label: 'Enterprise Expertise' },
    { value: 'Proven', label: 'Track Record' },
    { value: '50+', label: 'Projects Delivered' }
  ];

  // Sidebar menu items
  const sidebarItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'offerings', label: 'ServiceNow Offerings' },
    { id: 'expertise', label: 'Technological Expertise' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'testimonial', label: 'Client Testimonial' },
    { id: 'tco-calculator', label: 'TCO Calculator' },
    { id: 'framework', label: 'Success Framework' },
    { id: 'compliance', label: 'Compliance' },
    { id: 'next-steps', label: 'Next Steps' }
  ];

  // ServiceNow Offerings Data
  const offerings = [
    {
      id: 'consultation',
      icon: MessageSquare,
      title: 'Consultation',
      duration: '2-4 weeks',
      description: 'Strategic assessment and roadmap development for your ServiceNow journey. We analyze your current ITSM maturity, identify gaps, and create a tailored implementation plan.',
      tags: ['ITSM Assessment', 'Roadmap Planning', 'ROI Analysis'],
      cta: 'Book Consultation'
    },
    {
      id: 'implementation',
      icon: Settings,
      title: 'Implementation',
      duration: '8 weeks',
      description: 'End-to-end ServiceNow deployment with our proven 8-week go-live methodology. Includes configuration, customization, integration, and comprehensive testing.',
      tags: ['ITSM', 'ITOM', 'HRSD', 'CSM'],
      cta: 'Start Implementation'
    },
    {
      id: 'support',
      icon: HeadphonesIcon,
      title: 'Support',
      duration: 'Ongoing',
      description: '24/7 managed services with certified ServiceNow administrators. Continuous optimization, patch management, and platform evolution to maximize your investment.',
      tags: ['24/7 Support', 'Platform Optimization', 'Training'],
      cta: 'Learn More'
    }
  ];

  // Technology Expertise Data
  const technologies = [
    { name: 'JavaScript', icon: Code },
    { name: 'REST APIs', icon: Cloud },
    { name: 'Glide API', icon: Terminal },
    { name: 'Flow Designer', icon: Workflow },
    { name: 'IntegrationHub', icon: Network },
    { name: 'Service Portal', icon: Layers },
    { name: 'Business Rules', icon: FileCode },
    { name: 'Script Includes', icon: Code },
    { name: 'UI Policies', icon: Shield },
    { name: 'Client Scripts', icon: Terminal },
    { name: 'Scheduled Jobs', icon: Clock },
    { name: 'Import Sets', icon: Database },
    { name: 'Transform Maps', icon: GitBranch },
    { name: 'Notifications', icon: MessageSquare },
    { name: 'SLA Definitions', icon: Clock3 },
    { name: 'Workflow Editor', icon: Workflow },
    { name: 'CMDB', icon: Database },
    { name: 'Discovery', icon: Search },
    { name: 'Service Mapping', icon: Network },
    { name: 'Event Management', icon: Activity },
    { name: 'Orchestration', icon: Cpu },
    { name: 'MID Server', icon: Server },
    { name: 'Update Sets', icon: Layers },
    { name: 'Source Control', icon: GitBranch }
  ];

  // Case Studies Data
  const caseStudies = [
    {
      id: 'migration',
      link: '/projects/case-study/telco-service-desk-it-process-migration-to-servicenow',
      icon: Building2,
      iconColor: brandColor,
      tags: [
        { text: 'Telecom', class: 'bg-blue-100 text-blue-700' },
        { text: 'Migration', class: 'bg-blue-100 text-blue-700' },
        { text: 'ServiceNow', class: 'bg-gray-100 text-gray-700' }
      ],
      title: "Enabling 99.95% uptime and 24/7 follow-the-sun support for Pakistan's largest telecom through ServiceNow Cloud migration",
      description: "Pakistan's largest telecommunications provider modernised their service desk and migrated to ServiceNow Cloud, enabling 24/7 follow-the-sun support operations with 99.95% platform availability.",
      stats: [
        { icon: TrendingUp, iconBg: 'bg-blue-50', iconColor: 'text-blue-600', value: '99.95%', label: 'Uptime SLA' },
        { icon: Clock3, iconBg: 'bg-blue-50', iconColor: 'text-blue-600', value: '24/7', label: 'Coverage' },
        { icon: Activity, iconBg: `${brandColor}15`, iconColor: brandColor, value: '52%', label: 'Faster Resolution' }
      ]
    },
    {
      id: 'automation',
      link: '/projects/case-study/servicenow-incident-automation',
      icon: Zap,
      iconColor: '#F59E0B',
      bgGradient: 'linear-gradient(135deg, #F5F0EB, #EDE8E3)',
      tags: [
        { text: 'Automation', class: 'bg-amber-100 text-amber-700' },
        { text: 'Integration', class: 'bg-blue-100 text-blue-700' },
        { text: 'ServiceNow', class: 'bg-gray-100 text-gray-700' }
      ],
      title: '40% faster incident resolution for major telecom through intelligent ServiceNow automation',
      description: 'Developed an intelligent microservice bridge integrating network alarms with ServiceNow, eliminating manual incident handling and reducing response times through automated correlation and smart routing.',
      stats: [
        { icon: Zap, iconBg: 'bg-amber-50', iconColor: 'text-amber-600', value: '40%', label: 'Less Manual Work' },
        { icon: Activity, iconBg: 'bg-blue-50', iconColor: 'text-blue-600', value: '98%', label: 'SLA Compliance' },
        { icon: Clock, iconBg: 'bg-blue-50', iconColor: 'text-blue-600', value: '45%', label: 'Faster Resolution' }
      ]
    }
  ];

  // TCO Calculation Logic
  const calculateTCO = () => {
    const baseCostPerUser = {
      excel: 450,
      jira: 380,
      legacy: 520
    };
    
    const moduleMultiplier = {
      itsm: 1,
      itom: 1.4,
      itsm_itom: 1.8
    };
    
    const currentAnnualCost = tcoUsers * baseCostPerUser[tcoToolset] * (tcoModules.includes('itom') && tcoModules.includes('itsm') ? moduleMultiplier.itsm_itom : tcoModules.includes('itom') ? moduleMultiplier.itom : moduleMultiplier.itsm);
    const hiddenCosts = currentAnnualCost * 0.35; // Downtime, manual labor
    const current3Year = (currentAnnualCost + hiddenCosts) * 3;
    
    const perceptionCost = tcoUsers * 320 * (tcoModules.includes('itom') && tcoModules.includes('itsm') ? 1.6 : tcoModules.includes('itom') ? 1.3 : 1);
    const perception3Year = perceptionCost * 3;
    
    const savings = current3Year - perception3Year;
    const savingsPercent = Math.round((savings / current3Year) * 100);
    
    return {
      current: Math.round(current3Year / 1000),
      perception: Math.round(perception3Year / 1000),
      savings: Math.round(savings / 1000),
      savingsPercent
    };
  };
  
  const tcoResult = calculateTCO();

  const nextCaseStudy = () => {
    setCurrentCaseStudy((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCaseStudy = () => {
    setCurrentCaseStudy((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-3">
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

      {/* Hero Section */}
      <section id="overview" ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ background: `linear-gradient(135deg, #0F172A 0%, #1E293B 50%, ${brandColor}20 100%)` }}>
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

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-6"
                style={{ backgroundColor: `${brandColor}30`, color: brandColor }}
              >
                ServiceNow Integration
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.15] tracking-tight">
                Secure Your ServiceNow Transition
              </h1>
          
              <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed">
                Risk-mapped integrations that prevent SLA breaches and ensure data continuity 
                during your ServiceNow migration. We don&apos;t just implement—we protect your operations.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
                >
                  Get Risk Assessment
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => scrollToSection('case-studies')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  View Case Studies
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-sm text-gray-400 mb-4">Trusted by enterprise teams</p>
                <div className="flex flex-wrap items-center gap-6">
                  {['Fortune 500', 'SOC 2 Type II', 'ISO 27001'].map((badge) => (
                    <div key={badge} className="flex items-center gap-2 text-gray-300">
                      <Shield className="w-4 h-4" style={{ color: brandColor }} />
                      <span className="text-sm">{badge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Visual Diagram */}
            <div className="relative lg:pl-8">
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                {/* Animated Diagram */}
                <div className="relative h-80">
                  {/* Legacy System */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-28">
                    <div className="bg-slate-700 rounded-lg p-4 border border-slate-600">
                      <Server className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-xs text-center text-gray-300">Legacy ITSM</p>
                    </div>
                  </div>

                  {/* Arrow with Animation */}
                  <div className="absolute left-28 right-28 top-1/2 -translate-y-1/2">
                    <div className="relative h-1 bg-gradient-to-r from-slate-600 via-blue-500 to-green-500 rounded-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer" 
                        style={{ 
                          backgroundSize: '200% 100%',
                          animation: 'shimmer 2s infinite linear'
                        }} 
                      />
                    </div>
                    {/* Risk Indicators */}
                    <div className="absolute -top-8 left-1/4 flex items-center gap-1">
                      <AlertTriangle className="w-4 h-4 text-amber-400" />
                      <span className="text-xs text-amber-400">Data Loss Risk</span>
                    </div>
                    <div className="absolute -bottom-8 left-2/3 flex items-center gap-1">
                      <Clock className="w-4 h-4 text-red-400" />
                      <span className="text-xs text-red-400">Downtime</span>
                    </div>
                  </div>

                  {/* ServiceNow */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-28">
                    <div className="bg-gradient-to-br from-blue-900/50 to-green-900/50 rounded-lg p-4 border border-blue-500/30">
                      <Settings className="w-8 h-8 mx-auto mb-2" style={{ color: brandColor }} />
                      <p className="text-xs text-center text-white font-medium">ServiceNow</p>
                    </div>
                  </div>

                  {/* Protective Shield Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: `${brandColor}20` }}>
                      <Shield className="w-10 h-10" style={{ color: brandColor }} />
                    </div>
                  </div>
                </div>

                {/* Stats Preview */}
                <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-3 gap-4">
                  {[
                    { value: 'Zero', label: 'Data Loss' },
                    { value: '99.9%', label: 'Uptime' },
                    { value: '4x', label: 'Faster Recovery' }
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-xl font-bold text-white">{stat.value}</p>
                      <p className="text-xs text-gray-400">{stat.label}</p>
                    </div>
                  ))}
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

      {/* Main content wrapper with sidebar - starts after hero */}
      <div className="flex">
        {/* Sidebar - Sticky, starts after hero */}
        <div className="hidden xl:block flex-shrink-0">
          <SidebarMenu items={sidebarItems} brandColor={brandColor} />
        </div>
        
        {/* Main content */}
        <div className="flex-1 min-w-0">
      <section id="overview" ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ background: `linear-gradient(135deg, #0F172A 0%, #1E293B 50%, ${brandColor}20 100%)` }}>
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

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-6"
                style={{ backgroundColor: `${brandColor}30`, color: brandColor }}
              >
                ServiceNow Integration
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.15] tracking-tight">
                Secure Your ServiceNow Transition
              </h1>
          
              <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed">
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
          
              {/* Mobile: Key stats row */}
              <div className="lg:hidden flex flex-wrap gap-4 mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Server className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Legacy Systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Network className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">ServiceNow</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${brandColor}30` }}>
                    <Workflow className="w-5 h-5" style={{ color: brandColor }} />
                  </div>
                  <span className="text-sm text-gray-300">Automation</span>
                </div>
              </div>
            </div>

            {/* Right: Integration Diagram (Desktop only) */}
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-square max-w-lg mx-auto scale-110">
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

                {/* Connection Lines - SVG */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <line x1="120" y1="100" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.5s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="200" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.5s" repeatCount="indefinite" />
                  </line>
                  <line x1="120" y1="300" x2="200" y2="200" stroke={brandColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.5s" repeatCount="indefinite" />
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

        {/* ServiceNow Offerings Section */}
        <section id="offerings" ref={servicesRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-4 block" style={{ color: brandColor }}>
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              ServiceNow Offerings
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              End-to-end ServiceNow services from strategy to ongoing support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offerings.map((offering) => (
              <div 
                key={offering.id}
                className="relative bg-white rounded-xl border-2 border-gray-200 p-10 transition-all duration-300 hover:shadow-xl hover:border-blue-300 hover:-translate-y-1"
              >
                
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm"
                    style={{ backgroundColor: `${brandColor}15` }}
                  >
                    <offering.icon className="w-8 h-8" style={{ color: brandColor }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{offering.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{offering.duration}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {offering.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {offering.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90 w-full justify-center"
                  style={{ backgroundColor: brandColor }}
                >
                  {offering.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technological Expertise Section */}
      <section id="expertise" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-4 block" style={{ color: brandColor }}>
              Technical Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Technological Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Deep technical knowledge across the entire ServiceNow platform
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {(techExpanded ? technologies : technologies.slice(0, 12)).map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all"
              >
                <tech.icon className="w-4 h-4" style={{ color: brandColor }} />
                <span className="text-sm font-medium text-gray-700">{tech.name}</span>
              </div>
            ))}
          </div>

          {!techExpanded && technologies.length > 12 && (
            <div className="text-center">
              <button
                onClick={() => setTechExpanded(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium hover:border-blue-300 hover:text-blue-600 transition-all"
              >
                Show all technologies
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {techExpanded && (
            <div className="text-center mt-6">
              <button
                onClick={() => setTechExpanded(false)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium hover:border-blue-300 hover:text-blue-600 transition-all"
              >
                Show less
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Case Studies Carousel */}
      <section id="case-studies" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-4 block" style={{ color: brandColor }}>
                Success Stories
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
                Case Studies
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                to="/projects"
                className="hidden md:inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors mr-4"
              >
                View all case studies
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center gap-3">
                <button
                  onClick={prevCaseStudy}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-blue-300 hover:bg-blue-50 transition-all"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div className="flex gap-2">
                {caseStudies.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentCaseStudy(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentCaseStudy ? 'bg-blue-500 w-6' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextCaseStudy}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-blue-300 hover:bg-blue-50 transition-all"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
              </div>
            </div>
          </div>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentCaseStudy * 100}%)` }}
            >
              {caseStudies.map((study) => (
                <div key={study.id} className="w-full flex-shrink-0">
                  <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {study.tags.map((tag) => (
                            <span 
                              key={tag.text}
                              className={`px-3 py-1 rounded-full text-xs font-medium ${tag.class}`}
                            >
                              {tag.text}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                          {study.title}
                        </h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                          {study.description}
                        </p>
                        <Link
                          to={study.link}
                          className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
                        >
                          Read full case study
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </div>
                      <div className="space-y-6">
                        {/* Photo Placeholder */}
                        <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                          <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                            <div className="text-center">
                              <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-2" />
                              <span className="text-sm text-gray-400">Case Study Photo</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                          {study.stats.map((stat, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-5 text-center shadow-sm">
                              <div className={`w-12 h-12 rounded-lg ${stat.iconBg} flex items-center justify-center mx-auto mb-3`}>
                                <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                              </div>
                              <div className="text-xl font-bold text-gray-900 mb-1">{stat.value}</div>
                              <div className="text-xs text-gray-500">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial Section */}
      <section id="testimonial" className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-4 block" style={{ color: brandColor }}>
              Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              Client Testimonial
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
                  <Users className="w-10 h-10 text-gray-400" />
                </div>
              </div>
              <div className="flex-1">
                <Quote className="w-10 h-10 text-blue-200 mb-4" />
                <blockquote 
                  className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6"
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  &quot;Perception IT transformed our IT operations with their ServiceNow expertise. 
                  Their team successfully migrated us from Maximo to ServiceNow with zero downtime, 
                  and the automation they implemented has reduced our incident resolution time by 45%. 
                  Their deep understanding of both the technical and business aspects made all the difference.&quot;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="font-semibold text-gray-900">Usman Ikram</div>
                    <div className="text-sm text-gray-500">IT Operations Director, Major Telecom Provider</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TCO Calculator Section */}
      <section id="tco-calculator" className="py-24 bg-white border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-10">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-4 block" style={{ color: brandColor }}>
              Financial Transparency
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Stop Guessing Your ITSM Budget
            </h2>
            <p className="text-lg text-gray-600">
              See Your 3-Year TCO Now
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl border border-gray-200 p-8">
            {/* Inputs */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Users</label>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="100"
                  value={tcoUsers}
                  onChange={(e) => setTcoUsers(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  style={{ accentColor: brandColor }}
                />
                <div className="text-center mt-2 text-lg font-semibold text-gray-900">{tcoUsers.toLocaleString()}</div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Toolset</label>
                <select
                  value={tcoToolset}
                  onChange={(e) => setTcoToolset(e.target.value as 'excel' | 'jira' | 'legacy')}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
                >
                  <option value="excel">Excel / Spreadsheets</option>
                  <option value="jira">Jira / Basic Tools</option>
                  <option value="legacy">Legacy ITSM Platform</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Desired Modules</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={tcoModules.includes('itsm')}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setTcoModules([...tcoModules, 'itsm']);
                        } else {
                          setTcoModules(tcoModules.filter(m => m !== 'itsm'));
                        }
                      }}
                      className="w-4 h-4 rounded border-gray-300"
                      style={{ accentColor: brandColor }}
                    />
                    <span className="text-sm text-gray-600">ITSM (Service Desk)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={tcoModules.includes('itom')}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setTcoModules([...tcoModules, 'itom']);
                        } else {
                          setTcoModules(tcoModules.filter(m => m !== 'itom'));
                        }
                      }}
                      className="w-4 h-4 rounded border-gray-300"
                      style={{ accentColor: brandColor }}
                    />
                    <span className="text-sm text-gray-600">ITOM (Operations)</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">Current 3-Year Cost</p>
                <p className="text-3xl font-bold text-gray-900">${tcoResult.current}K</p>
                <p className="text-xs text-gray-400 mt-1">Including hidden costs</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">Perception-IT Fixed Cost</p>
                <p className="text-3xl font-bold" style={{ color: brandColor }}>${tcoResult.perception}K</p>
                <p className="text-xs text-gray-400 mt-1">Fixed-price guarantee</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">Your Savings</p>
                <p className="text-3xl font-bold text-blue-600">{tcoResult.savingsPercent}%</p>
                <p className="text-xs text-gray-400 mt-1">${tcoResult.savings}K saved</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-white font-medium rounded-lg transition-all hover:opacity-90"
                style={{ backgroundColor: brandColor }}
              >
                Download Detailed Commercial Model
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ServiceNow Success Framework */}
      <section id="framework" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">
              The ServiceNow Success Framework
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Delivering ROI requires more than software installation. It demands Full-Stack integration across four critical dimensions.
            </p>
          </div>

          {/* 4-Card Grid - Success Framework */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* 1. Data Integrity (The Foundation) */}
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Database className="w-4 h-4" style={{ color: brandColor }} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">Data Integrity</h3>
                  <p className="text-xs text-gray-400">The Foundation</p>
                </div>
              </div>
              
              <p className="text-sm font-medium text-gray-700 mb-3">
                Success depends on a CMDB you can trust.
              </p>
              
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">The Challenge</p>
                  <p className="text-sm text-gray-600 leading-snug">Legacy data schemas rarely match new models. Without deep auditing, relationships break, and adoption stalls by Week 4.</p>
                </div>
                
                <div className="rounded-lg p-3" style={{ backgroundColor: `${brandColor}10` }}>
                  <p className="text-xs font-medium uppercase tracking-wide mb-1" style={{ color: brandColor }}>The Perception-IT Standard</p>
                  <p className="text-sm text-gray-700 leading-snug">We perform Risk-Mapped Data Audits before migration. By reconciling schema conflicts in the planning phase, we deliver a 99% accurate CMDB from Day 1, ensuring immediate user trust.</p>
                </div>
              </div>
            </div>

            {/* 2. Total Visibility (The Engine) */}
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Server className="w-4 h-4" style={{ color: brandColor }} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">Total Visibility</h3>
                  <p className="text-xs text-gray-400">The Engine</p>
                </div>
              </div>
              
              <p className="text-sm font-medium text-gray-700 mb-3">
                ServiceNow cannot automate what it cannot see.
              </p>
              
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">The Challenge</p>
                  <p className="text-sm text-gray-600 leading-snug">Pure software integrators lack access to physical layer telemetry. Critical server or network events remain silent until users report an outage.</p>
                </div>
                
                <div className="rounded-lg p-3" style={{ backgroundColor: `${brandColor}10` }}>
                  <p className="text-xs font-medium uppercase tracking-wide mb-1" style={{ color: brandColor }}>The Perception-IT Standard</p>
                  <p className="text-sm text-gray-700 leading-snug">As a Huawei Certified Partner, we bridge hardware health metrics directly into ServiceNow ITOM. This enables proactive incident automation, resolving infrastructure issues before they impact business operations.</p>
                </div>
              </div>
            </div>

            {/* 3. Sustainable Architecture (The Long Game) */}
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" style={{ color: brandColor }} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">Sustainable Architecture</h3>
                  <p className="text-xs text-gray-400">The Long Game</p>
                </div>
              </div>
              
              <p className="text-sm font-medium text-gray-700 mb-3">
                True speed means never having to rebuild.
              </p>
              
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">The Challenge</p>
                  <p className="text-sm text-gray-600 leading-snug">Hard-coded customizations create technical debt that breaks during mandatory platform updates, causing downtime and rework.</p>
                </div>
                
                <div className="rounded-lg p-3" style={{ backgroundColor: `${brandColor}10` }}>
                  <p className="text-xs font-medium uppercase tracking-wide mb-1" style={{ color: brandColor }}>The Perception-IT Standard</p>
                  <p className="text-sm text-gray-700 leading-snug">We architect using native ServiceNow capabilities (Flow Designer, Integration Hub). This upgrade-safe approach ensures your investment remains stable and adaptable through future patches without costly refactoring.</p>
                </div>
              </div>
            </div>

            {/* 4. Unified Accountability (The Guarantee) */}
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Shield className="w-4 h-4" style={{ color: brandColor }} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">Unified Accountability</h3>
                  <p className="text-xs text-gray-400">The Guarantee</p>
                </div>
              </div>
              
              <p className="text-sm font-medium text-gray-700 mb-3">
                One partner, one outcome.
              </p>
              
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">The Challenge</p>
                  <p className="text-sm text-gray-600 leading-snug">Fragmented vendors (software vs. hardware) create blame cycles that delay resolution and bleed SLAs.</p>
                </div>
                
                <div className="rounded-lg p-3" style={{ backgroundColor: `${brandColor}10` }}>
                  <p className="text-xs font-medium uppercase tracking-wide mb-1" style={{ color: brandColor }}>The Perception-IT Standard</p>
                  <p className="text-sm text-gray-700 leading-snug">We provide Full-Stack Accountability. From the shipping dock to the cloud dashboard, one team owns the resolution, ensuring seamless coordination and guaranteed uptime.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Supporting Pillars */}
          <div className="mt-8 bg-white rounded-xl p-6 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-base">🚀</span> Accelerating Your Value Realization
                </h3>
                <p className="text-xs text-gray-500 mb-3">How our full-stack capability speeds up your ROI:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="font-medium text-gray-900 flex-shrink-0">Instant Trust:</span>
                    <span className="text-gray-600">Real-time server health mapping keeps your CMDB accurate.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium text-gray-900 flex-shrink-0">Zero-Downtime Ops:</span>
                    <span className="text-gray-600">Physical data center events trigger automated workflows pre-outage.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium text-gray-900 flex-shrink-0">Smart Correlation:</span>
                    <span className="text-gray-600">Network alerts automatically prioritize incidents based on business impact.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium text-gray-900 flex-shrink-0">Seamless Lifecycle:</span>
                    <span className="text-gray-600">Procurement data flows directly into Asset Management for perfect tracking.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-base">🤝</span> The Delivery Backbone
                </h3>
                <p className="text-xs text-gray-500 mb-3">Global alliances enabling local excellence:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="font-medium text-gray-900 flex-shrink-0">Supply Chain Sync:</span>
                    <span className="text-gray-600">Your CMDB matches deployed assets instantly via direct procurement channels.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium text-gray-900 flex-shrink-0">Rapid Readiness:</span>
                    <span className="text-gray-600">Infrastructure staging aligns perfectly with ServiceNow deployment timelines.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium text-gray-900 flex-shrink-0">Deep Connectivity:</span>
                    <span className="text-gray-600">Robust REST/SOAP integration ensures flawless data flow between hardware and ITSM.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium text-gray-900 flex-shrink-0">Unified Oversight:</span>
                    <span className="text-gray-600">24/7 NOC/SOC monitoring feeds directly into your ServiceNow dashboards.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="mt-8 bg-slate-900 rounded-xl p-6 text-center">
            <p className="text-gray-300 mb-1">
              &quot;We don&apos;t just implement ServiceNow; we integrate it with your business reality.&quot;
            </p>
            <p className="text-white font-medium" style={{ color: brandColor }}>
              Our Risk-Mapped Framework identifies opportunities for optimization in Week 1, accelerating your time-to-value.
            </p>
          </div>
        </div>
      </section>



      {/* Compliance Section */}
      <section id="compliance" className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-white rounded-xl border border-gray-200 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{ backgroundColor: `${brandColor}15` }}>
                  <Lock className="w-12 h-12" style={{ color: brandColor }} />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Aligned with SBP Guidelines & Local Data Sovereignty Laws
                </h2>
                <p className="text-gray-600 mb-6">
                  Enable Your Regulatory Compliance with Local Data Control. Our Lahore delivery center ensures your sensitive data remains within Pakistan jurisdiction unless explicitly authorized for cross-border transfer. Unlike global SaaS-only providers, we provide the local oversight and audit trails required by Banking and Government sectors to meet their SBP obligations.
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg">SBP Guidelines Aligned</span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg">Local Data Residency</span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg">Audit-Ready Documentation</span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg">24/7 Local Support Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Roadmap */}
      <section id="next-steps" className="py-24 bg-white border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-4 block" style={{ color: brandColor }}>
              Your Path Forward
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Start Your Migration Audit
            </h2>
            <p className="text-lg text-gray-600">
              A structured process with clear outcomes at every step
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gray-200 hidden md:block" />

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="flex-shrink-0 flex md:block items-center gap-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 relative" style={{ backgroundColor: brandColor }}>
                    1
                  </div>
                  <div className="md:hidden flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">Book a 30-min Technical Discovery Call</h3>
                  </div>
                </div>
                <div className="flex-1 bg-gray-50 rounded-xl p-6 md:ml-0 ml-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 hidden md:block">Book a 30-min Technical Discovery Call</h3>
                  <p className="text-gray-600">
                    We discuss your current setup, pain points, and goals. No sales pitch—just technical assessment.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="flex-shrink-0 flex md:block items-center gap-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 relative" style={{ backgroundColor: brandColor }}>
                    2
                  </div>
                  <div className="md:hidden flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">Receive a Preliminary Risk Assessment Report</h3>
                  </div>
                </div>
                <div className="flex-1 bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 hidden md:block">Receive a Preliminary Risk Assessment Report</h3>
                  <p className="text-gray-600">
                    Free detailed analysis of integration risks, data migration complexity, and recommended approach.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="flex-shrink-0 flex md:block items-center gap-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 relative" style={{ backgroundColor: brandColor }}>
                    3
                  </div>
                  <div className="md:hidden flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">Review Fixed-Scope Proposal within 48 Hours</h3>
                  </div>
                </div>
                <div className="flex-1 bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 hidden md:block">Review Fixed-Scope Proposal within 48 Hours</h3>
                  <p className="text-gray-600">
                    Clear timeline, fixed price, defined deliverables. No hidden costs. No surprises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24" style={{ backgroundColor: brandColor }}>
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-white/90 mb-6">
            8-Week Go-Live Guarantee
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
            Ready to Transform Your ITSM?
          </h2>
          <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
            Get a free ServiceNow migration assessment. We&apos;ll analyse your current setup, 
            identify risks, and provide a detailed roadmap—all at no cost.
          </p>
          <p className="text-sm text-white/60 mb-10 max-w-2xl mx-auto">
            Go live in 8 weeks guaranteed, or we work for free until you do.
          </p>
          <a
            href="#footer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-900 font-semibold rounded-full hover:bg-slate-100 transition-all duration-300 text-lg"
          >
            Get Your Free Assessment
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

        </div>{/* End of main content */}
      </div>{/* End of flex wrapper */}

      <Footer />
    </div>
  );
};

export default ServiceNow;
