import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, ChevronRight, ArrowRight, MessageCircle,
  Cloud, Server, LayoutGrid, PieChart, Bell, Calendar, BarChart3, Lightbulb,
  GitBranch, ShieldCheck, FileCode, Hexagon, Layers, Grid3x3, Eye, ScrollText, BellRing,
  Network
} from 'lucide-react';
import {
  serviceCategories,
  dataServices,
  aiServices,
  platformsServices,
  type ServiceCategoryId
} from '../config/services';

interface SolutionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  combines: string[];
  link: string;
  featured?: boolean;
}

interface AboutCategory {
  id: string;
  name: string;
  content: React.ReactNode;
}

// Infrastructure services with Network Operations included
const infrastructureServices = [
  { id: 'server-continuity', title: 'Server Continuity', description: 'Ensure business continuity with robust server management and disaster recovery solutions.', link: '/services/server-continuity' },
  { id: 'datacenter', title: 'Data Center Services', description: 'On-premise + cloud infrastructure that actually works for your business.', link: '/services/datacenter' },
  { id: 'hardware-support', title: 'Hardware Support', description: 'Save 60% vs. vendor support contracts with our comprehensive hardware maintenance.', link: '/services/hardware-support' },
  { id: 'sla-support', title: '24×7 SLA Support', description: 'Guaranteed response times with 24/7 coverage for critical infrastructure.', link: '/services/sla-support' },
];

const networkOperationsServices = [
  { id: 'cross-domain-automation', title: 'Cross-Domain Automation', description: 'Automate correlation of alarms across telecom domains.', link: '/services/cross-domain-automation' },
  { id: 'network-monitoring', title: 'Network Monitoring', description: 'Real-time visibility and performance optimisation for network infrastructure.', link: '/services/network-monitoring' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [showHighlightBar, setShowHighlightBar] = useState(true);
  const [, setActiveCategory] = useState<ServiceCategoryId>('cloud');

  // Track active service/hub for dynamic right rail content per category
  const initialServiceState: Record<ServiceCategoryId, string> = serviceCategories.reduce((acc, category) => {
    if (category.hubs && category.hubs.length > 0) {
      acc[category.id] = category.hubs[0].id;
    } else if (category.services && category.services.length > 0) {
      acc[category.id] = category.services[0].id;
    } else {
      acc[category.id] = '';
    }
    return acc;
  }, {} as Record<ServiceCategoryId, string>);

  const [activeServiceByCategory, setActiveServiceByCategory] = useState<Record<ServiceCategoryId, string>>(initialServiceState);
  const [activeInfrastructureItem, setActiveInfrastructureItem] = useState<string>('server-continuity');
  const [activeAboutCategory, setActiveAboutCategory] = useState<string>('company-overview');
  const [mobileActiveTab, setMobileActiveTab] = useState<string>('solutions');
  const [, setMobileExpandedCategory] = useState<string | null>(null);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setActiveMegaMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = useCallback((menu: string) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    if (menu === 'cloud') setActiveCategory('cloud');
    if (menu === 'infrastructure') setActiveInfrastructureItem('server-continuity');
    setActiveMegaMenu(prev => prev === menu ? prev : menu);
  }, []);

  // Helper to get active hub or service for a category
  const getActiveItem = (categoryId: ServiceCategoryId) => {
    const category = serviceCategories.find(c => c.id === categoryId);
    const activeId = activeServiceByCategory[categoryId];
    
    // Check hubs first (for Cloud)
    if (category?.hubs) {
      return category.hubs.find(h => h.id === activeId) || category.hubs[0];
    }
    
    // Fall back to services
    return category?.services?.find(s => s.id === activeId) || category?.services?.[0];
  };

  // Icon mapping for hub spokes
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Cloud, Server, LayoutGrid, PieChart, Bell, Calendar, BarChart3, Lightbulb,
    GitBranch, ShieldCheck, FileCode, Hexagon, Layers, Grid3x3, Eye, ScrollText, BellRing
  };

  const handleMouseLeave = useCallback(() => {
    closeTimerRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 100);
  }, []);

  const solutions: SolutionItem[] = [
    {
      id: 'ai-accelerator',
      title: 'AI Accelerator',
      subtitle: 'From Data to Production AI',
      description: 'From data to deployed AI in 90 days',
      combines: ['MLOps', 'Cloud Infrastructure', 'Data Observability', 'Consulting'],
      link: '/services',
      featured: true
    },
    {
      id: 'cover3-prototype',
      title: 'Cover 3 Prototype',
      subtitle: 'Direct Homepage Copy',
      description: 'Exact copy of the main landing page for controlled design experiments',
      combines: ['Prototype', 'Homepage Copy', 'Baseline', 'Sandbox'],
      link: '/cover3',
      featured: false
    },
    {
      id: 'cloud-control',
      title: 'Cloud Control',
      subtitle: 'Cost & Performance Management',
      description: 'Cut cloud costs 40% and never worry about uptime',
      combines: ['FinOps', 'Cloud Optimisation', 'Observability', 'Managed Cloud'],
      link: '/services'
    },
    {
      id: 'service-excellence',
      title: 'Service Excellence',
      subtitle: 'ITSM & Support Operations',
      description: '95% user satisfaction, 60% cost reduction',
      combines: ['ServiceNow', 'Service Desk', 'ITSM Processes', 'Automation'],
      link: '/services'
    },
    {
      id: 'total-transformation',
      title: 'Total Transformation',
      subtitle: 'Hardware to Cloud Journey',
      description: 'End-to-end: Hardware audit → Cloud migration → Managed operations',
      combines: ['ServerAudit™', 'Cloud Migration', 'Managed Services', 'Optimisation'],
      link: '/services'
    }
  ];

  const aboutCategories: AboutCategory[] = [
    { 
      id: 'company-overview', 
      name: 'Company Overview',
      content: (
        <div className="space-y-4">
          <p className="text-sm text-[#525252]">Perception IT is your trusted partner from hardware to cloud, delivering enterprise-grade solutions across Pakistan, UK, and GCC markets.</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-slate-50 rounded-lg">
              <p className="text-2xl font-bold text-blue-600">14+</p>
              <p className="text-xs text-[#525252]">Years Experience</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg">
              <p className="text-2xl font-bold text-blue-600">50+</p>
              <p className="text-xs text-[#525252]">Platforms Deployed</p>
            </div>
          </div>
        </div>
      )
    },
    { 
      id: 'approach', 
      name: 'Our Approach',
      content: (
        <div className="space-y-4">
          <p className="text-sm text-[#525252]">We combine deep technical expertise with business understanding to deliver solutions that drive measurable outcomes.</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-[#525252]">
              <span className="text-blue-600 font-bold">→</span>
              <span>Business-first technology decisions</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#525252]">
              <span className="text-blue-600 font-bold">→</span>
              <span>Risk-managed implementation</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#525252]">
              <span className="text-blue-600 font-bold">→</span>
              <span>24/7 operational support</span>
            </li>
          </ul>
        </div>
      )
    },
    { 
      id: 'team', 
      name: 'Leadership Team',
      content: (
        <div className="space-y-4">
          <p className="text-sm text-[#525252]">Our leadership combines decades of enterprise IT experience with hands-on technical expertise across cloud, infrastructure, and platforms.</p>
          <Link to="/about" className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700">
            Meet the team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )
    }
  ];

  const getActiveAboutCategory = () => aboutCategories.find(c => c.id === activeAboutCategory) || aboutCategories[0];

  // Mobile tabs - updated for new structure
  const mobileTabs = [
    { id: 'solutions', label: 'Solutions' },
    { id: 'consultancy', label: 'Consultancy' },
    { id: 'cloud', label: 'Cloud' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'data', label: 'Data & Analytics' },
    { id: 'ai', label: 'AI' },
    { id: 'platforms', label: 'IT Platforms' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' }
  ];

  // Get cloud category for mega menu (preserved)
  const cloudCategory = serviceCategories.find(c => c.id === 'cloud');

  return (
    <>
      {/* Highlight Bar */}
      {showHighlightBar && (
        <div className="fixed top-0 left-0 right-0 z-[60] bg-slate-900 text-white">
          <div className="max-w-[1400px] mx-auto px-4 py-2 flex items-center justify-center gap-2 text-sm">
            <span className="px-2 py-0.5 bg-blue-500 text-white text-xs font-bold rounded">NEW</span>
            <Link to="/services" className="hover:underline">AI Accelerator — Deploy AI in 90 days</Link>
            <button 
              onClick={() => setShowHighlightBar(false)} 
              className="ml-4 text-slate-400 hover:text-white p-1"
              aria-label="Dismiss highlight"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <nav className={`fixed left-0 right-0 z-50 transition-all duration-300 ${showHighlightBar ? 'top-[36px]' : 'top-0'} ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-white border-b border-transparent'}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center group flex-shrink-0">
              <img src="/logo_icon.png" alt="Perception IT" className="h-8 w-auto" />
            </Link>

            <div className="hidden lg:flex items-center ml-8" ref={megaMenuRef}>
              
              {/* SOLUTIONS - Hybrid Style with Divider */}
              <div className="h-6 w-px bg-gray-300" />
              <div 
                className="relative" 
                onMouseEnter={() => handleMouseEnter('solutions')}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-colors ${activeMegaMenu === 'solutions' ? 'text-blue-600' : 'text-[#161616] hover:text-blue-600'}`}>
                  Solutions
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeMegaMenu === 'solutions' ? 'rotate-90' : ''}`} />
                </button>
                {activeMegaMenu === 'solutions' && (
                  <div className="fixed left-0 right-0 z-30" style={{ top: showHighlightBar ? '116px' : '80px' }}>
                    <div className="absolute -top-4 left-0 right-0 h-4" />
                    <div className="bg-white border-b border-gray-200 shadow-2xl overflow-hidden w-full">
                      <div className="bg-gradient-to-r from-blue-500/10 to-blue-400/5 border-b border-blue-200">
                        <div className="max-w-[1400px] mx-auto px-6 py-4">
                          <h3 className="text-base font-bold text-[#161616]">Integrated Solutions</h3>
                          <p className="text-sm text-[#525252] mt-1">From Hardware to Cloud — One Partner, Complete Accountability</p>
                        </div>
                      </div>
                      <div className="py-6 max-w-[1400px] mx-auto px-6">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                          {solutions.map((solution) => (
                            <Link key={solution.id} to={solution.link} className={`p-4 rounded-lg border-2 transition-all group ${solution.featured ? 'border-blue-500 bg-blue-50 shadow-md' : 'border-blue-200 bg-blue-50/30 hover:bg-blue-50 hover:border-blue-400'}`}>
                              <div className="flex items-start justify-between mb-2">
                                <h4 className="font-bold text-[#161616] group-hover:text-blue-600 text-sm">{solution.title}</h4>
                                {solution.featured && <span className="px-2 py-0.5 bg-blue-500 text-white text-[10px] font-bold rounded">POPULAR</span>}
                              </div>
                              <p className="text-xs text-blue-600 mb-1 font-semibold uppercase tracking-wide">{solution.subtitle}</p>
                              <p className="text-sm text-[#525252] mb-3 leading-relaxed">{solution.description}</p>
                              <div className="flex flex-wrap gap-1">
                                {solution.combines.map((item, i) => <span key={i} className="px-2 py-0.5 bg-white border border-blue-200 text-[11px] text-[#525252] rounded font-medium">{item}</span>)}
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-5 max-w-[1400px] mx-auto">
                          <div className="p-4 bg-gradient-to-r from-blue-50 to-white border border-blue-200 rounded-lg">
                            <div className="flex items-start gap-4">
                              <div className="flex-1">
                                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wide mb-1">Featured Case Study</p>
                                <h4 className="text-base font-bold text-[#161616] mb-1">Total Transformation — African Telecom</h4>
                                <p className="text-sm text-[#525252]">Hardware audit → Cloud migration → Managed operations. End-to-end accountability.</p>
                              </div>
                              <Link to="/projects" className="px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-all">View Portfolio</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-gray-200 bg-gray-50/50">
                        <div className="max-w-[1400px] mx-auto px-6 py-4">
                          <Link to="/#contact" className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 hover:scale-[1.02] transition-all shadow-md">
                            Get Expert Advice — Schedule Free Consultation <ArrowRight className="w-5 h-5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* CONSULTANCY - Hybrid Style */}
              <div className="h-6 w-px bg-gray-300 mx-1" />
              <div 
                className="relative" 
                onMouseEnter={() => handleMouseEnter('consultancy')}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-colors ${activeMegaMenu === 'consultancy' ? 'text-blue-600' : 'text-[#161616] hover:text-blue-600'}`}>
                  Consultancy
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeMegaMenu === 'consultancy' ? 'rotate-90' : ''}`} />
                </button>
                
                {activeMegaMenu === 'consultancy' && (
                  <div className="absolute left-0 top-full z-50 w-[480px]">
                    <div className="absolute -top-2 left-0 right-0 h-2" />
                    <div className="bg-white border border-gray-200 shadow-xl rounded-lg overflow-hidden mt-2">
                      {/* Header */}
                      <div className="px-4 py-2 bg-slate-50 border-b border-gray-100">
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Consultancy Services</span>
                      </div>
                      
                      {/* Two Column Content */}
                      <div className="flex">
                        {/* Left: Services */}
                        <div className="w-1/2 p-4 border-r border-gray-100">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Services</p>
                          <div className="space-y-1">
                            <Link to="/services/cloud-strategy" className="flex items-center px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors group" onClick={() => setActiveMegaMenu(null)}>
                              <span className="text-sm text-[#161616] group-hover:text-blue-600">Cloud Strategy</span>
                            </Link>
                            <Link to="/services/digital-transformation" className="flex items-center px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors group" onClick={() => setActiveMegaMenu(null)}>
                              <span className="text-sm text-[#161616] group-hover:text-blue-600">Digital Transformation</span>
                            </Link>
                            <Link to="/services/it-assessment" className="flex items-center px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors group" onClick={() => setActiveMegaMenu(null)}>
                              <span className="text-sm text-[#161616] group-hover:text-blue-600">IT Assessment</span>
                            </Link>
                            <Link to="/services/technology-roadmap" className="flex items-center px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors group" onClick={() => setActiveMegaMenu(null)}>
                              <span className="text-sm text-[#161616] group-hover:text-blue-600">Technology Roadmap</span>
                            </Link>
                          </div>
                        </div>
                        
                        {/* Right: Industries */}
                        <div className="w-1/2 p-4">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Industries</p>
                          <div className="space-y-1">
                            <Link to="/projects?industry=telecommunications" className="flex items-center px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors group" onClick={() => setActiveMegaMenu(null)}>
                              <span className="text-sm text-[#161616] group-hover:text-blue-600">Telecommunications</span>
                            </Link>
                            <Link to="/projects?industry=financial" className="flex items-center px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors group" onClick={() => setActiveMegaMenu(null)}>
                              <span className="text-sm text-[#161616] group-hover:text-blue-600">Financial Services</span>
                            </Link>
                            <Link to="/projects?industry=manufacturing" className="flex items-center px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors group" onClick={() => setActiveMegaMenu(null)}>
                              <span className="text-sm text-[#161616] group-hover:text-blue-600">Manufacturing</span>
                            </Link>
                            <Link to="/projects?industry=realestate" className="flex items-center px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors group" onClick={() => setActiveMegaMenu(null)}>
                              <span className="text-sm text-[#161616] group-hover:text-blue-600">Real Estate</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      
                      {/* Footer CTA */}
                      <div className="border-t border-gray-100 p-4">
                        <Link to="/#contact" className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-colors">
                          Book a Consultation <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* CLOUD - Hybrid Style */}
              <div className="h-6 w-px bg-gray-300 mx-1" />
              <div 
                className="relative" 
                onMouseEnter={() => handleMouseEnter('cloud')}
                onMouseLeave={handleMouseLeave}
              >
                <Link 
                  to="/services/cloud"
                  className={`flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-colors ${activeMegaMenu === 'cloud' ? 'text-blue-600' : 'text-[#161616] hover:text-blue-600'}`}
                >
                  Cloud
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeMegaMenu === 'cloud' ? 'rotate-90' : ''}`} />
                </Link>
                
                {activeMegaMenu === 'cloud' && cloudCategory && (
                  <div className="fixed left-0 right-0 z-30" style={{ top: showHighlightBar ? '116px' : '80px' }}>
                    <div className="absolute -top-4 left-0 right-0 h-4" />
                    <div className="bg-white border-b border-gray-200 shadow-2xl overflow-hidden w-full">
                      {/* Header */}
                      <div className="bg-gradient-to-r from-blue-500/10 to-blue-400/5 border-b border-blue-200">
                        <div className="max-w-[1400px] mx-auto px-6 py-4">
                          <h3 className="text-base font-bold text-[#161616]">{cloudCategory.label}</h3>
                          <p className="text-sm text-[#525252] mt-1">{cloudCategory.description}</p>
                        </div>
                      </div>
                      {/* Content */}
                      <div className="max-w-[1400px] mx-auto flex">
                        {/* Left Rail */}
                        <div className="w-[260px] bg-slate-100 p-5 flex-shrink-0 border-r border-gray-200">
                          <div className="space-y-1">
                            {cloudCategory.hubs?.map((hub) => {
                              const isActive = activeServiceByCategory['cloud'] === hub.id;
                              return (
                                <button 
                                  key={hub.id}
                                  onMouseEnter={() => setActiveServiceByCategory(prev => ({ ...prev, cloud: hub.id }))}
                                  className={`block w-full text-left px-4 py-3 text-sm rounded-lg transition-all font-medium ${
                                    isActive 
                                      ? 'bg-blue-600 text-white shadow-lg' 
                                      : 'text-[#161616] hover:bg-blue-50/20'
                                  }`}
                                >
                                  <div className="flex items-center justify-between">
                                    <span>{hub.title}</span>
                                    {hub.badge && (
                                      <span className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                                        isActive ? 'bg-blue-400 text-white' : 'bg-blue-500 text-white'
                                      }`}>
                                        {hub.badge}
                                      </span>
                                    )}
                                  </div>
                                </button>
                              );
                            })}
                            <div className="border-t border-slate-300 my-3" />
                            <Link to="/services/cloud" className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-blue-600 hover:text-blue-700">
                              View All Cloud Services <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link to="/projects/cloud" className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-blue-600 hover:text-blue-700">
                              See Client Success Stories <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                        
                        {/* Right Content */}
                        <div className="flex-1 p-6 bg-white">
                          {(() => {
                            const activeItem = getActiveItem('cloud');
                            if (!activeItem) return null;
                            
                            return (
                              <>
                                <div className="mb-6">
                                  <a 
                                    href={`/services/${activeItem.id}`}
                                    className="group flex items-center gap-2 text-base font-bold text-[#161616] mb-2 pl-3 border-l-4 border-blue-600 hover:text-blue-600 transition-colors"
                                  >
                                    {activeItem.title}
                                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                                  </a>
                                  <p className="text-sm text-slate-600 leading-relaxed">{activeItem.description}</p>
                                </div>
                                
                                {'spokes' in activeItem && activeItem.spokes.length > 0 && (
                                  <div className="mb-6">
                                    <h5 className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-3">Services</h5>
                                    <div className="grid grid-cols-2 gap-3">
                                      {activeItem.spokes.map((spoke) => {
                                        const IconComponent = iconMap[spoke.icon];
                                        return (
                                          <a 
                                            key={spoke.id}
                                            href={spoke.link}
                                            className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 border-l-4 border-l-transparent hover:border-l-blue-600 hover:bg-blue-50 transition-all group"
                                          >
                                            {IconComponent && <IconComponent className="w-4 h-4 text-blue-600 flex-shrink-0" />}
                                            <span className="text-[13px] font-medium text-blue-600 flex-1">{spoke.title}</span>
                                            <ArrowRight className="w-4 h-4 text-blue-600 transition-colors flex-shrink-0" />
                                          </a>
                                        );
                                      })}
                                    </div>
                                  </div>
                                )}
                                
                                {cloudCategory.caseStudies.find(s => s.featured) && (
                                  <div className="mt-5 p-4 bg-gradient-to-r from-blue-50 to-white border border-blue-200 rounded-lg">
                                    <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wide mb-1">Featured Case Study</p>
                                    {(() => {
                                      const featured = cloudCategory.caseStudies.find(s => s.featured)!;
                                      return (
                                        <>
                                          <h4 className="text-base font-bold text-[#161616] mb-1">{featured.title}</h4>
                                          <p className="text-sm text-[#525252] mb-3">{featured.description}</p>
                                          <Link to={`/projects/case-study/${featured.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700">
                                            Read story <ArrowRight className="w-4 h-4" />
                                          </Link>
                                        </>
                                      );
                                    })()}
                                  </div>
                                )}
                              </>
                            );
                          })()}
                        </div>
                      </div>
                      
                      {/* Footer */}
                      <div className="border-t border-blue-200 bg-blue-50/30 py-4">
                        <div className="max-w-[1400px] mx-auto px-6">
                          <a href="#contact" className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 hover:scale-[1.02] transition-all shadow-md">
                            Talk to an Expert <ArrowRight className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* INFRASTRUCTURE - Hybrid Style */}
              <div className="h-6 w-px bg-gray-300 mx-1" />
              <div 
                className="relative" 
                onMouseEnter={() => handleMouseEnter('infrastructure')}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-colors ${activeMegaMenu === 'infrastructure' ? 'text-blue-600' : 'text-[#161616] hover:text-blue-600'}`}>
                  Infrastructure
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeMegaMenu === 'infrastructure' ? 'rotate-90' : ''}`} />
                </button>
                
                {activeMegaMenu === 'infrastructure' && (
                  <div className="fixed left-0 right-0 z-30" style={{ top: showHighlightBar ? '116px' : '80px' }}>
                    <div className="absolute -top-4 left-0 right-0 h-4" />
                    <div className="bg-white border-b border-gray-200 shadow-2xl overflow-hidden w-full">
                      {/* Header */}
                      <div className="bg-gradient-to-r from-slate-500/10 to-slate-400/5 border-b border-slate-200">
                        <div className="max-w-[1400px] mx-auto px-6 py-4">
                          <h3 className="text-base font-bold text-[#161616]">Infrastructure</h3>
                          <p className="text-sm text-[#525252] mt-1">Hardware support, data center services, and 24×7 SLA support</p>
                        </div>
                      </div>
                      {/* Content */}
                      <div className="max-w-[1400px] mx-auto flex">
                        {/* Left Rail */}
                        <div className="w-[260px] bg-slate-100 p-5 flex-shrink-0 border-r border-gray-200">
                          <div className="space-y-1">
                            {infrastructureServices.map((service) => {
                              const isActive = activeInfrastructureItem === service.id;
                              return (
                                <button 
                                  key={service.id}
                                  onMouseEnter={() => setActiveInfrastructureItem(service.id)}
                                  className={`block w-full text-left px-4 py-3 text-sm rounded-lg transition-all font-medium ${
                                    isActive 
                                      ? 'bg-blue-600 text-white shadow-lg' 
                                      : 'text-[#161616] hover:bg-slate-200'
                                  }`}
                                >
                                  {service.title}
                                </button>
                              );
                            })}
                            <button 
                              onMouseEnter={() => setActiveInfrastructureItem('network-operations')}
                              className={`block w-full text-left px-4 py-3 text-sm rounded-lg transition-all font-medium ${
                                activeInfrastructureItem === 'network-operations'
                                  ? 'bg-blue-600 text-white shadow-lg' 
                                  : 'text-[#161616] hover:bg-slate-200'
                              }`}
                            >
                              Network Operations
                            </button>
                            <div className="border-t border-slate-300 my-3" />
                            <a href="/services#infrastructure" className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-blue-600 hover:text-blue-700">
                              View All Infrastructure <ArrowRight className="w-4 h-4" />
                            </a>
                            <Link to="/projects/infrastructure" className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-blue-600 hover:text-blue-700">
                              See Client Success Stories <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                        
                        {/* Right Content */}
                        <div className="flex-1 p-6 bg-white">
                          {activeInfrastructureItem === 'network-operations' ? (
                            <>
                              <div className="mb-6">
                                <h3 className="text-base font-bold text-[#161616] mb-2 pl-3 border-l-4 border-blue-600">Network Operations</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">Cross-domain automation and network monitoring solutions for telecom and enterprise networks.</p>
                              </div>
                              <div className="mb-6">
                                <h5 className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-3">Services</h5>
                                <div className="grid grid-cols-2 gap-3">
                                  {networkOperationsServices.map((service) => (
                                    <a 
                                      key={service.id}
                                      href={service.link}
                                      className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all group"
                                    >
                                      <Network className="w-4 h-4 text-[#161616] flex-shrink-0" />
                                      <span className="text-[13px] font-medium text-blue-600 flex-1">{service.title}</span>
                                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                                    </a>
                                  ))}
                                </div>
                              </div>
                              <div className="mt-5 p-4 bg-gradient-to-r from-slate-50 to-white border border-slate-200 rounded-lg">
                                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wide mb-1">Featured Case Study</p>
                                <h4 className="text-base font-bold text-[#161616] mb-1">Cross-Domain Network Automation</h4>
                                <p className="text-sm text-[#525252] mb-3">Enhanced network efficiency by automating alarm correlation across telecom domains.</p>
                                <Link to="/projects/case-study/network-operations-automation" className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700">
                                  Read story <ArrowRight className="w-4 h-4" />
                                </Link>
                              </div>
                              {/* Huawei Partnership Badge */}
                              <div className="mt-4 p-4 bg-gradient-to-r from-red-50 to-white border border-red-200 rounded-lg">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-bold text-sm">H</span>
                                  </div>
                                  <div>
                                    <p className="text-[10px] font-bold text-red-600 uppercase tracking-wide">Certified Partner</p>
                                    <h4 className="text-sm font-bold text-[#161616]">Huawei Enterprise</h4>
                                    <p className="text-xs text-[#525252]">Authorized infrastructure solutions provider</p>
                                  </div>
                                </div>
                              </div>
                            </>
                          ) : (
                            (() => {
                              const service = infrastructureServices.find(s => s.id === activeInfrastructureItem);
                              if (!service) return null;
                              return (
                                <>
                                  <div className="mb-6">
                                    <h3 className="text-base font-bold text-[#161616] mb-2 pl-3 border-l-4 border-blue-600">{service.title}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
                                  </div>
                                  <div className="mt-5 p-4 bg-gradient-to-r from-slate-50 to-white border border-slate-200 rounded-lg">
                                    <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wide mb-1">Featured Case Study</p>
                                    <h4 className="text-base font-bold text-[#161616] mb-1">Integrated Operations Platform</h4>
                                    <p className="text-sm text-[#525252] mb-3">Multi-layered operational support handling millions of daily events for Asia's largest telecom.</p>
                                    <Link to="/projects/case-study/integrated-operations-platform" className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700">
                                      Read story <ArrowRight className="w-4 h-4" />
                                    </Link>
                                  </div>
                                  {/* Huawei Partnership Badge */}
                                  <div className="mt-4 p-4 bg-gradient-to-r from-red-50 to-white border border-red-200 rounded-lg">
                                    <div className="flex items-center gap-3">
                                      <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-white font-bold text-sm">H</span>
                                      </div>
                                      <div>
                                        <p className="text-[10px] font-bold text-red-600 uppercase tracking-wide">Certified Partner</p>
                                        <h4 className="text-sm font-bold text-[#161616]">Huawei Enterprise</h4>
                                        <p className="text-xs text-[#525252]">Authorized infrastructure solutions provider</p>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              );
                            })()
                          )}
                        </div>
                      </div>
                      
                      {/* Footer */}
                      <div className="border-t border-slate-200 bg-slate-50/30 py-4">
                        <div className="max-w-[1400px] mx-auto px-6">
                          <a href="#contact" className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 hover:scale-[1.02] transition-all shadow-md">
                            Talk to an Infrastructure Expert <ArrowRight className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* DATA AND ANALYTICS - Hybrid Style */}
              <div className="h-6 w-px bg-gray-300 mx-1" />
              <div 
                className="relative" 
                onMouseEnter={() => handleMouseEnter('data')}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-colors ${activeMegaMenu === 'data' ? 'text-blue-600' : 'text-[#161616] hover:text-blue-600'}`}>
                  Data and Analytics
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeMegaMenu === 'data' ? 'rotate-90' : ''}`} />
                </button>
                
                {activeMegaMenu === 'data' && (
                  <div className="absolute left-0 top-full z-50 w-[280px]">
                    <div className="absolute -top-2 left-0 right-0 h-2" />
                    <div className="bg-white border border-gray-200 shadow-xl rounded-lg overflow-hidden mt-2">
                      <div className="p-3 space-y-1">
                        {dataServices.map((service) => (
                          <a 
                            key={service.id}
                            href={service.link}
                            className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                          >
                            <span className="text-sm text-[#161616] group-hover:text-blue-600">{service.title}</span>
                            {service.badge && (
                              <span className="px-2 py-0.5 bg-blue-500 text-white text-[10px] font-bold rounded">{service.badge}</span>
                            )}
                          </a>
                        ))}
                        <div className="border-t border-gray-100 my-2" />
                        <a href="/services#data" className="flex items-center gap-2 px-3 py-2 text-sm font-bold text-blue-600 hover:text-blue-700">
                          View All Data Services <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* AI - Hybrid Style */}
              <div className="h-6 w-px bg-gray-300 mx-1" />
              <div 
                className="relative" 
                onMouseEnter={() => handleMouseEnter('ai')}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-colors ${activeMegaMenu === 'ai' ? 'text-blue-600' : 'text-[#161616] hover:text-blue-600'}`}>
                  AI
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeMegaMenu === 'ai' ? 'rotate-90' : ''}`} />
                </button>
                
                {activeMegaMenu === 'ai' && (
                  <div className="absolute left-0 top-full z-50 w-[260px]">
                    <div className="absolute -top-2 left-0 right-0 h-2" />
                    <div className="bg-white border border-gray-200 shadow-xl rounded-lg overflow-hidden mt-2">
                      <div className="p-3 space-y-1">
                        {aiServices.map((service) => (
                          <a 
                            key={service.id}
                            href={service.link}
                            className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                          >
                            <span className="text-sm text-[#161616] group-hover:text-blue-600">{service.title}</span>
                          </a>
                        ))}
                        <div className="border-t border-gray-100 my-2" />
                        <a href="/services#ai" className="flex items-center gap-2 px-3 py-2 text-sm font-bold text-blue-600 hover:text-blue-700">
                          View All AI Services <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* IT PLATFORMS - Hybrid Style */}
              <div className="h-6 w-px bg-gray-300 mx-1" />
              <div 
                className="relative" 
                onMouseEnter={() => handleMouseEnter('platforms')}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-colors ${activeMegaMenu === 'platforms' ? 'text-blue-600' : 'text-[#161616] hover:text-blue-600'}`}>
                  IT Platforms
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeMegaMenu === 'platforms' ? 'rotate-90' : ''}`} />
                </button>
                
                {activeMegaMenu === 'platforms' && (
                  <div className="absolute left-0 top-full z-50 w-[280px]">
                    <div className="absolute -top-2 left-0 right-0 h-2" />
                    <div className="bg-white border border-gray-200 shadow-xl rounded-lg overflow-hidden mt-2">
                      <div className="p-3 space-y-1">
                        {platformsServices.map((service) => (
                          <Link 
                            key={service.id}
                            to={service.link}
                            className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                            onClick={() => setActiveMegaMenu(null)}
                          >
                            <span className="text-sm text-[#161616] group-hover:text-blue-600">{service.title}</span>
                            {service.badge && (
                              <span className="px-2 py-0.5 bg-blue-500 text-white text-[10px] font-bold rounded">{service.badge}</span>
                            )}
                          </Link>
                        ))}
                        <div className="border-t border-gray-100 my-2" />
                        <Link to="/services#platforms" className="flex items-center gap-2 px-3 py-2 text-sm font-bold text-blue-600 hover:text-blue-700">
                          View All Platform Services <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* PROJECTS - Hybrid Style */}
              <div className="h-6 w-px bg-gray-300 mx-1" />
              <div className="relative">
                <Link
                  to="/projects"
                  className="flex items-center px-3 py-2 text-[13px] font-medium transition-colors text-[#161616] hover:text-blue-600"
                >
                  Projects
                </Link>
              </div>

              {/* ABOUT - Hybrid Style */}
              <div className="h-6 w-px bg-gray-300 mx-1" />
              <div 
                className="relative" 
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-colors ${activeMegaMenu === 'about' ? 'text-blue-600' : 'text-[#161616] hover:text-blue-600'}`}>
                  About
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeMegaMenu === 'about' ? 'rotate-90' : ''}`} />
                </button>
                {activeMegaMenu === 'about' && (
                  <div className="fixed left-0 right-0 z-30" style={{ top: showHighlightBar ? '116px' : '80px' }}>
                    <div className="absolute -top-4 left-0 right-0 h-4" />
                    <div className="bg-white border-b border-gray-200 shadow-2xl overflow-hidden w-full">
                      <div className="bg-gradient-to-r from-blue-500/10 to-blue-400/5 border-b border-blue-200">
                        <div className="max-w-[1400px] mx-auto px-6 py-4">
                          <h3 className="text-base font-bold text-[#161616]">About Perception IT</h3>
                          <p className="text-sm text-[#525252] mt-1">Your partner from hardware to cloud</p>
                        </div>
                      </div>
                      <div className="max-w-[1400px] mx-auto flex">
                        <div className="w-[260px] bg-slate-100 p-5 flex-shrink-0 border-r border-gray-200">
                          <div className="space-y-1">
                            {aboutCategories.map((category) => (
                              <button 
                                key={category.id} 
                                onMouseEnter={() => setActiveAboutCategory(category.id)} 
                                className={`w-full text-left px-4 py-3 text-sm rounded-lg transition-all ${
                                  activeAboutCategory === category.id 
                                    ? 'bg-blue-600 text-white shadow-lg font-bold' 
                                    : 'text-[#161616] hover:bg-slate-200 font-medium'
                                }`}
                              >
                                {category.name}
                              </button>
                            ))}
                            <div className="border-t border-slate-300 my-3" />
                            <Link to="/projects" className="block px-4 py-3 text-sm rounded-lg text-[#161616] hover:bg-slate-200 transition-all font-medium" onClick={() => setActiveMegaMenu(null)}>Projects</Link>
                            <Link to="/contact" className="block px-4 py-3 text-sm rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all font-bold" onClick={() => setActiveMegaMenu(null)}>Contact Us</Link>
                          </div>
                        </div>
                        <div className="flex-1 p-6 bg-white">
                          <Link to="/about" className="inline-flex items-center gap-2 text-base font-bold text-blue-700 hover:text-blue-800 mb-5 group">
                            {getActiveAboutCategory().name}<ArrowRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
                          </Link>
                          <div className="text-sm text-[#525252]">{getActiveAboutCategory().content}</div>
                          <div className="mt-5 p-3 bg-gradient-to-r from-blue-50 to-white border border-blue-200 rounded-lg">
                            <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wide mb-1">Client Success</p>
                            <h4 className="text-sm font-bold text-[#161616] mb-1">14+ Years of Enterprise Excellence</h4>
                            <p className="text-xs text-[#525252] mb-2">50+ platforms deployed across Pakistan, UK, and GCC markets</p>
                            <Link to="/projects" className="text-xs text-blue-600 font-semibold hover:underline inline-flex items-center gap-1">View all case studies <ArrowRight className="w-3 h-3" /></Link>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-blue-200 bg-blue-50/30">
                        <div className="max-w-[1400px] mx-auto px-6 py-4">
                          <a href="#contact" className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 hover:scale-[1.02] transition-all shadow-md">
                            Start Your Project — Contact Us Today <ArrowRight className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sticky Floating Contact Button - Appears on Scroll */}
            {isScrolled && (
              <div className="hidden lg:block fixed right-4 xl:right-8 top-24 z-50">
                <Link 
                  to="/contact" 
                  className="group flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:w-auto hover:px-4 hover:rounded-full"
                >
                  <MessageCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 text-[13px] font-medium">
                    Contact Us
                  </span>
                </Link>
              </div>
            )}

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-[#161616]">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Background Overlay for Mega Menus */}
      {activeMegaMenu && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-200"
          style={{ top: showHighlightBar ? '84px' : '48px' }}
          onClick={() => setActiveMegaMenu(null)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-white" style={{ top: showHighlightBar ? '84px' : '48px' }}>
          <div className="flex items-center justify-between px-4 h-16 border-b border-gray-100">
            <Link to="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
              <img src="/logo_icon.png" alt="Perception IT" className="h-8 w-auto" />
            </Link>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-[#161616]"><X className="w-6 h-6" /></button>
          </div>
          <div className="border-b border-gray-100 overflow-x-auto scrollbar-hide">
            <div className="flex px-2 py-3 gap-1 min-w-max">
              {mobileTabs.map((tab) => (
                <button 
                  key={tab.id} 
                  onClick={() => { setMobileActiveTab(tab.id); setMobileExpandedCategory(null); }} 
                  className={`px-4 py-2 text-[13px] font-medium rounded-full whitespace-nowrap transition-colors ${
                    mobileActiveTab === tab.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-[#525252] hover:bg-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Mobile Content */}
          <div className="px-4 py-4 h-[calc(100vh-180px)] overflow-y-auto">
            {/* Solutions Mobile - Preserved */}
            {mobileActiveTab === 'solutions' && (
              <div className="space-y-4">
                <p className="text-sm text-[#525252]">Integrated solutions from hardware to cloud</p>
                {solutions.map((solution) => (
                  <div key={solution.id} className={`p-4 rounded-lg border ${solution.featured ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-[#161616]">{solution.title}</h3>
                      {solution.featured && <span className="text-[10px] px-2 py-0.5 bg-blue-500 text-white rounded font-medium">POPULAR</span>}
                    </div>
                    <p className="text-xs text-blue-600 mb-1">{solution.subtitle}</p>
                    <p className="text-sm text-[#525252] mb-2">{solution.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {solution.combines.map((item, i) => <span key={i} className="px-2 py-0.5 bg-white border border-gray-200 text-[10px] text-[#525252] rounded">{item}</span>)}
                    </div>
                  </div>
                ))}
                <a href="#services" className="block w-full text-center py-3 bg-blue-600 text-white rounded-lg font-medium">Talk to an architect</a>
              </div>
            )}

            {/* Consultancy Mobile */}
            {mobileActiveTab === 'consultancy' && (
              <div className="space-y-4">
                {/* Services Section */}
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Services</p>
                  <div className="space-y-2">
                    <Link to="/services/cloud-strategy" className="block p-4 border border-gray-200 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
                      <h3 className="font-semibold text-[#161616]">Cloud Strategy</h3>
                      <p className="text-sm text-[#525252] mt-1">Expert guidance for cloud adoption and migration planning</p>
                    </Link>
                    <Link to="/services/digital-transformation" className="block p-4 border border-gray-200 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
                      <h3 className="font-semibold text-[#161616]">Digital Transformation</h3>
                      <p className="text-sm text-[#525252] mt-1">End-to-end digital transformation consulting</p>
                    </Link>
                    <Link to="/services/it-assessment" className="block p-4 border border-gray-200 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
                      <h3 className="font-semibold text-[#161616]">IT Assessment</h3>
                      <p className="text-sm text-[#525252] mt-1">Comprehensive IT infrastructure and process assessment</p>
                    </Link>
                    <Link to="/services/technology-roadmap" className="block p-4 border border-gray-200 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
                      <h3 className="font-semibold text-[#161616]">Technology Roadmap</h3>
                      <p className="text-sm text-[#525252] mt-1">Strategic technology planning and roadmapping</p>
                    </Link>
                  </div>
                </div>
                
                {/* Industries Section */}
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Industries</p>
                  <div className="space-y-2">
                    <Link to="/projects?industry=telecommunications" className="block p-4 border border-gray-200 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
                      <h3 className="font-semibold text-[#161616]">Telecommunications</h3>
                      <p className="text-sm text-[#525252] mt-1">Solutions for telecom operators and ISPs</p>
                    </Link>
                    <Link to="/projects?industry=financial" className="block p-4 border border-gray-200 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
                      <h3 className="font-semibold text-[#161616]">Financial Services</h3>
                      <p className="text-sm text-[#525252] mt-1">IT solutions for banks and stock exchanges</p>
                    </Link>
                    <Link to="/projects?industry=manufacturing" className="block p-4 border border-gray-200 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
                      <h3 className="font-semibold text-[#161616]">Manufacturing</h3>
                      <p className="text-sm text-[#525252] mt-1">Infrastructure support for manufacturers</p>
                    </Link>
                    <Link to="/projects?industry=realestate" className="block p-4 border border-gray-200 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
                      <h3 className="font-semibold text-[#161616]">Real Estate</h3>
                      <p className="text-sm text-[#525252] mt-1">Property management platforms and solutions</p>
                    </Link>
                  </div>
                </div>
                
                <a href="#contact" className="block w-full text-center py-3 bg-blue-600 text-white rounded-lg font-medium">Book a Consultation</a>
              </div>
            )}

            {/* Cloud Mobile - Preserved */}
            {mobileActiveTab === 'cloud' && cloudCategory && (
              <div className="space-y-4">
                <p className="text-sm text-[#525252]">{cloudCategory.description}</p>
                <div className="space-y-3">
                  {cloudCategory.hubs?.map((hub) => (
                    <div key={hub.id} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="p-4 bg-slate-50">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-[#161616]">{hub.title}</h3>
                          {hub.badge && <span className="px-2 py-0.5 bg-blue-500 text-white text-[10px] font-bold rounded">{hub.badge}</span>}
                        </div>
                        <p className="text-sm text-[#525252] mt-1">{hub.description}</p>
                      </div>
                      <div className="p-2 space-y-1">
                        {hub.spokes.map((spoke) => (
                          <a 
                            key={spoke.id}
                            href={spoke.link} 
                            className="block p-3 hover:bg-slate-50 rounded-lg"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <span className="text-[13px] font-medium text-[#161616]">{spoke.title}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Infrastructure Mobile */}
            {mobileActiveTab === 'infrastructure' && (
              <div className="space-y-4">
                <p className="text-sm text-[#525252]">Hardware support, data center services, and 24×7 SLA support</p>
                <div className="space-y-3">
                  {infrastructureServices.map((service) => (
                    <a 
                      key={service.id}
                      href={service.link} 
                      className="block p-4 border border-gray-200 rounded-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <h3 className="font-semibold text-[#161616]">{service.title}</h3>
                      <p className="text-sm text-[#525252] mt-1">{service.description}</p>
                    </a>
                  ))}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="p-4 bg-slate-50">
                      <h3 className="font-semibold text-[#161616]">Network Operations</h3>
                      <p className="text-sm text-[#525252] mt-1">Cross-domain automation and network monitoring</p>
                    </div>
                    <div className="p-2 space-y-1">
                      {networkOperationsServices.map((service) => (
                        <a 
                          key={service.id}
                          href={service.link} 
                          className="block p-3 hover:bg-slate-50 rounded-lg"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span className="text-[13px] font-medium text-[#161616]">{service.title}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Data and Analytics Mobile */}
            {mobileActiveTab === 'data' && (
              <div className="space-y-3">
                <p className="text-sm text-[#525252]">Transform data into actionable insights</p>
                {dataServices.map((service) => (
                  <a 
                    key={service.id}
                    href={service.link} 
                    className="block p-4 border border-gray-200 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-[#161616]">{service.title}</h3>
                      {service.badge && <span className="px-2 py-0.5 bg-blue-500 text-white text-[10px] font-bold rounded">{service.badge}</span>}
                    </div>
                    <p className="text-sm text-[#525252] mt-1">{service.description}</p>
                  </a>
                ))}
              </div>
            )}

            {/* AI Mobile */}
            {mobileActiveTab === 'ai' && (
              <div className="space-y-3">
                <p className="text-sm text-[#525252]">AI-first services for intelligent operations</p>
                {aiServices.map((service) => (
                  <a 
                    key={service.id}
                    href={service.link} 
                    className="block p-4 border border-gray-200 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <h3 className="font-semibold text-[#161616]">{service.title}</h3>
                    <p className="text-sm text-[#525252] mt-1">{service.description}</p>
                  </a>
                ))}
              </div>
            )}

            {/* IT Platforms Mobile */}
            {mobileActiveTab === 'platforms' && (
              <div className="space-y-3">
                <p className="text-sm text-[#525252]">ServiceNow, IBM Maximo, and custom platform implementations</p>
                {platformsServices.map((service) => (
                  <Link 
                    key={service.id}
                    to={service.link} 
                    className="block p-4 border border-gray-200 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-[#161616]">{service.title}</h3>
                      {service.badge && <span className="px-2 py-0.5 bg-blue-500 text-white text-[10px] font-bold rounded">{service.badge}</span>}
                    </div>
                    <p className="text-sm text-[#525252] mt-1">{service.description}</p>
                  </Link>
                ))}
              </div>
            )}
            
            {/* Projects Mobile */}
            {mobileActiveTab === 'projects' && (
              <div className="space-y-2">
                <Link 
                  to="/projects" 
                  className="block px-4 py-3 border border-gray-200 rounded-lg text-[#161616] font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  View all projects
                </Link>
                <p className="text-sm text-[#525252]">Explore all published case studies with category filters.</p>
              </div>
            )}

            {/* About Mobile */}
            {mobileActiveTab === 'about' && (
              <div className="space-y-2">
                {aboutCategories.map((category) => (
                  <Link 
                    key={category.id} 
                    to="/about" 
                    className="block px-4 py-3 border border-gray-200 rounded-lg text-[#161616] font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
                <Link 
                  to="/projects" 
                  className="block px-4 py-3 border border-gray-200 rounded-lg text-[#161616] font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </Link>
              </div>
            )}
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <Link 
                to="/contact" 
                className="block w-full text-center py-4 bg-blue-600 text-white font-medium rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
