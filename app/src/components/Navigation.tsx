import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, ChevronRight, ArrowRight, MessageCircle, Star
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

interface NavigationProps {
  activeMegaMenu?: string | null;
  setActiveMegaMenu?: (menu: string | null) => void;
}

const Navigation = ({ activeMegaMenu: externalActiveMegaMenu, setActiveMegaMenu: externalSetActiveMegaMenu }: NavigationProps = {}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [internalActiveMegaMenu, setInternalActiveMegaMenu] = useState<string | null>(null);
  const [showHighlightBar, setShowHighlightBar] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  
  // Use external state if provided, otherwise use internal state
  const activeMegaMenu = externalActiveMegaMenu !== undefined ? externalActiveMegaMenu : internalActiveMegaMenu;
  const setActiveMegaMenu = externalSetActiveMegaMenu || setInternalActiveMegaMenu;
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
  const [activeSolution, setActiveSolution] = useState<string>('ai-accelerator');
  const [activeDataItem, setActiveDataItem] = useState<string>('iot-analytics');
  const [activeAIItem, setActiveAIItem] = useState<string>('mlops');
  const [activePlatformItem, setActivePlatformItem] = useState<string>('servicenow');
  const [mobileActiveTab, setMobileActiveTab] = useState<string>('solutions');
  const [, setMobileExpandedCategory] = useState<string | null>(null);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  // Update CSS custom property for dropdown positioning based on nav's actual bottom position
  useEffect(() => {
    const updateNavBottom = () => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        document.documentElement.style.setProperty('--nav-bottom', `${rect.bottom}px`);
      }
    };
    
    // Initial update
    updateNavBottom();
    
    // Update on scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      updateNavBottom();
      
      // Close mega menu on scroll
      if (activeMegaMenu) {
        setActiveMegaMenu(null);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Update when highlight bar visibility changes (after transition)
    const timeoutId = setTimeout(updateNavBottom, 350);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [showHighlightBar, activeMegaMenu, setActiveMegaMenu]);

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
    const newValue = activeMegaMenu === menu ? activeMegaMenu : menu;
    setActiveMegaMenu(newValue);
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

  const handleMouseLeave = useCallback(() => {
    closeTimerRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
      setIsClosing(false);
    }, 100);
  }, []);

  // Smooth close handler for category clicks
  const handleCategoryClick = useCallback((callback?: () => void) => {
    setIsClosing(true);
    setTimeout(() => {
      setActiveMegaMenu(null);
      setIsClosing(false);
      if (callback) callback();
    }, 200);
  }, [setActiveMegaMenu]);

  const solutions: SolutionItem[] = [
    {
      id: 'ai-accelerator',
      title: 'AI Accelerator',
      subtitle: '',
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
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-2 flex items-center justify-center gap-2 text-sm">
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
      <nav ref={navRef} className={`fixed left-0 right-0 z-50 transition-all duration-300 ${showHighlightBar ? 'top-[36px]' : 'top-0'} ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-white border-b border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 sm:px-6 lg:px-8 relative">
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
                <button 
                  onClick={() => setActiveMegaMenu(null)}
                  className={`flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-all rounded-sm ${activeMegaMenu === 'solutions' ? 'text-[#0f62fe] bg-[#f4f4f4]' : 'text-[#161616] hover:text-[#0f62fe] hover:bg-[#f4f4f4]/50'}`}
                >
                  Solutions
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeMegaMenu === 'solutions' ? 'rotate-90' : ''}`} />
                </button>
                {activeMegaMenu === 'solutions' && (
                  <div className={`fixed left-0 right-0 z-30 transition-all duration-200 ease-out ${isClosing ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}`} style={{ top: 'var(--nav-bottom)' }}>
                    <div className="bg-white border-b border-[#c6c6c6] shadow-[0_4px_12px_rgba(0,0,0,0.15)] w-full max-h-[calc(100vh-80px)] overflow-y-auto">
                      {/* Header */}
                      <div className="bg-[#f4f4f4] border-b border-[#e0e0e0]">
                        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                          <Link 
                            to="/services" 
                            onClick={() => setActiveMegaMenu(null)}
                            className="group"
                          >
                            <h3 className="text-sm font-semibold text-[#161616] group-hover:text-[#0f62fe] transition-colors">Solutions</h3>
                            <p className="text-xs text-[#525252] mt-1 group-hover:text-[#0f62fe]/70 transition-colors">From Hardware to Cloud: One Partner, Complete Accountability</p>
                          </Link>
                          <button 
                            onClick={() => setActiveMegaMenu(null)}
                            className="p-2 bg-[#e0e0e0] hover:bg-[#161616] transition-all group"
                            aria-label="Close menu"
                          >
                            <X className="w-6 h-6 text-[#161616] group-hover:text-white transition-colors" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Content - Three Panel Layout */}
                      <div className="max-w-6xl mx-auto flex pb-8">
                        {/* Left Rail - Category Links */}
                        <div className="w-[240px] bg-white p-4 flex-shrink-0 border-r border-[#e0e0e0]">
                          <div className="space-y-1">
                            {solutions.map((solution) => {
                              const isActive = activeSolution === solution.id;
                              return (
                                <Link 
                                  key={solution.id}
                                  to={solution.link}
                                  onMouseEnter={() => setActiveSolution(solution.id)}
                                  onClick={() => handleCategoryClick()}
                                  className={`block w-full text-left px-3 py-2 text-sm transition-all border-l-2 ${
                                    isActive 
                                      ? 'bg-[#f4f4f4] text-[#161616] border-[#0f62fe] font-semibold' 
                                      : 'text-[#161616] hover:bg-[#f4f4f4] border-transparent'
                                  }`}
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="font-normal">{solution.title}</span>
                                    {solution.featured && (
                                      <Star className="w-4 h-4 text-[#0f62fe] fill-[#0f62fe]" />
                                    )}
                                  </div>
                                </Link>
                              );
                            })}
                            <Link 
                              to="/services/observability"
                              onMouseEnter={() => setActiveSolution('observability')}
                              onClick={() => handleCategoryClick()}
                              className={`block w-full text-left px-3 py-2 text-sm transition-all border-l-2 ${
                                activeSolution === 'observability' 
                                  ? 'bg-[#f4f4f4] text-[#161616] border-[#0f62fe] font-semibold' 
                                  : 'text-[#161616] hover:bg-[#f4f4f4] border-transparent'
                              }`}
                            >
                              <span className="font-normal">Observability</span>
                            </Link>
                            <Link 
                              to="/services/optimisation"
                              onMouseEnter={() => setActiveSolution('optimisation')}
                              onClick={() => handleCategoryClick()}
                              className={`block w-full text-left px-3 py-2 text-sm transition-all border-l-2 ${
                                activeSolution === 'optimisation' 
                                  ? 'bg-[#f4f4f4] text-[#161616] border-[#0f62fe] font-semibold' 
                                  : 'text-[#161616] hover:bg-[#f4f4f4] border-transparent'
                              }`}
                            >
                              <span className="font-normal">Optimisation</span>
                            </Link>
                            <div className="border-t border-[#e0e0e0] my-2" />
                            <Link to="/services" onClick={() => setActiveMegaMenu(null)} className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-[#0f62fe] hover:text-[#0353e9] hover:bg-[#f4f4f4] transition-colors">
                              View All Solutions <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                        
                        {/* Middle - Active Solution Details */}
                        <div className="flex-1 p-6 bg-white">
                          {(() => {
                            if (activeSolution === 'observability') {
                              return (
                                <>
                                  <Link 
                                    to="/services/observability"
                                    onClick={() => setActiveMegaMenu(null)}
                                    className="group flex items-center gap-2 text-sm font-semibold text-[#161616] mb-2 hover:text-[#0f62fe] transition-colors"
                                  >
                                    Observability
                                    <ArrowRight className="w-4 h-4 text-[#8d8d8d] group-hover:text-[#0f62fe] transition-colors" />
                                  </Link>
                                  <p className="text-sm text-[#525252] leading-relaxed mb-6">Monitor, trace, and gain insights across your entire infrastructure stack with modern observability platforms.</p>
                                  
                                  <div className="mb-6">
                                    <h5 className="text-[11px] font-medium text-[#6f6f6f] uppercase tracking-[0.16px] mb-2">Includes</h5>
                                    <div className="flex flex-wrap gap-2">
                                      <span className="px-2 py-0.5 border border-[#e0e0e0] text-[#525252] text-xs font-medium rounded-full">APM</span>
                                      <span className="px-2 py-0.5 border border-[#e0e0e0] text-[#525252] text-xs font-medium rounded-full">Distributed Tracing</span>
                                      <span className="px-2 py-0.5 border border-[#e0e0e0] text-[#525252] text-xs font-medium rounded-full">Log Management</span>
                                      <span className="px-2 py-0.5 border border-[#e0e0e0] text-[#525252] text-xs font-medium rounded-full">Alerting</span>
                                    </div>
                                  </div>
                                  
                                  <a href="#contact" onClick={() => setActiveMegaMenu(null)} className="inline-flex items-center gap-2 px-4 py-3 bg-[#0f62fe] text-white text-sm font-semibold hover:bg-[#0353e9] transition-colors">
                                    Talk to an Expert <ArrowRight className="w-4 h-4" />
                                  </a>
                                  <div className="h-8" />
                                </>
                              );
                            }
                            
                            if (activeSolution === 'optimisation') {
                              return (
                                <>
                                  <Link 
                                    to="/services/optimisation"
                                    onClick={() => setActiveMegaMenu(null)}
                                    className="group flex items-center gap-2 text-sm font-semibold text-[#161616] mb-2 hover:text-[#0f62fe] transition-colors"
                                  >
                                    Optimisation
                                    <ArrowRight className="w-4 h-4 text-[#8d8d8d] group-hover:text-[#0f62fe] transition-colors" />
                                  </Link>
                                  <p className="text-sm text-[#525252] leading-relaxed mb-6">Maximise performance, reduce costs, and improve efficiency across your cloud and infrastructure investments.</p>
                                  
                                  <div className="mb-6">
                                    <h5 className="text-[11px] font-medium text-[#6f6f6f] uppercase tracking-[0.16px] mb-2">Includes</h5>
                                    <div className="flex flex-wrap gap-2">
                                      <span className="px-2 py-0.5 border border-[#e0e0e0] text-[#525252] text-xs font-medium rounded-full">Cost Optimisation</span>
                                      <span className="px-2 py-0.5 border border-[#e0e0e0] text-[#525252] text-xs font-medium rounded-full">Performance Tuning</span>
                                      <span className="px-2 py-0.5 border border-[#e0e0e0] text-[#525252] text-xs font-medium rounded-full">Resource Rightsizing</span>
                                      <span className="px-2 py-0.5 border border-[#e0e0e0] text-[#525252] text-xs font-medium rounded-full">FinOps</span>
                                    </div>
                                  </div>
                                  
                                  <a href="#contact" onClick={() => setActiveMegaMenu(null)} className="inline-flex items-center gap-2 px-4 py-3 bg-[#0f62fe] text-white text-sm font-semibold hover:bg-[#0353e9] transition-colors">
                                    Talk to an Expert <ArrowRight className="w-4 h-4" />
                                  </a>
                                  <div className="h-8" />
                                </>
                              );
                            }
                            
                            const activeItem = solutions.find(s => s.id === activeSolution);
                            if (!activeItem) return null;
                            
                            return (
                              <>
                                <Link 
                                  to={activeItem.link}
                                  onClick={() => setActiveMegaMenu(null)}
                                  className="group flex items-center gap-2 text-sm font-semibold text-[#161616] mb-2 hover:text-[#0f62fe] transition-colors"
                                >
                                  {activeItem.title}
                                  <ArrowRight className="w-4 h-4 text-[#8d8d8d] group-hover:text-[#0f62fe] transition-colors" />
                                </Link>
                                <p className="text-xs text-[#6f6f6f] font-medium mb-3">{activeItem.subtitle}</p>
                                <p className="text-sm text-[#525252] leading-relaxed mb-6">{activeItem.description}</p>
                                
                                {/* Labels section - 2 column grid */}
                                <div className="mb-6">
                                  <h5 className="text-[11px] font-medium text-[#6f6f6f] uppercase tracking-[0.16px] mb-2">Includes</h5>
                                  <div className="flex flex-wrap gap-2">
                                    {activeItem.combines.map((item, i) => (
                                      <span key={i} className="px-2 py-0.5 border border-[#e0e0e0] text-[#525252] text-xs font-medium rounded-full">{item}</span>
                                    ))}
                                  </div>
                                </div>
                                
                                {/* CTA Button */}
                                <a 
                                  href="#contact" 
                                  onClick={() => setActiveMegaMenu(null)} 
                                  className="inline-flex items-center gap-2 px-4 py-3 bg-[#0f62fe] text-white text-sm font-semibold hover:bg-[#0353e9] transition-colors"
                                >
                                  Talk to an Expert <ArrowRight className="w-4 h-4" />
                                </a>
                                
                                {/* Spacer for dropdown length */}
                                <div className="h-8" />
                              </>
                            );
                          })()}
                        </div>
                        
                        {/* Right Rail - Featured Case Study */}
                        <div className="w-[280px] bg-white pt-6 pr-6 pb-6 flex-shrink-0">
                          <div className="pl-4 pr-0 py-0 border-l-2 border-[#c6c6c6]">
                            <p className="text-[11px] font-semibold text-[#6f6f6f] uppercase tracking-[0.16px] mb-3">Featured Case Study</p>
                            <h4 className="text-sm font-semibold text-[#161616] mb-3">Total Transformation — African Telecom</h4>
                            <p className="text-sm text-[#525252] mb-4 leading-relaxed">Hardware audit → Cloud migration → Managed operations.</p>
                            <Link to="/projects" onClick={() => setActiveMegaMenu(null)} className="inline-flex items-center gap-1 text-sm font-semibold text-[#525252] hover:text-[#0f62fe]">
                              View case study <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
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
                <button 
                  onClick={() => setActiveMegaMenu(null)}
                  className={`flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-all rounded-sm ${activeMegaMenu === 'consultancy' ? 'text-[#0f62fe] bg-[#f4f4f4]' : 'text-[#161616] hover:text-[#0f62fe] hover:bg-[#f4f4f4]/50'}`}
                >
                  Consultancy
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeMegaMenu === 'consultancy' ? 'rotate-90' : ''}`} />
                </button>
                
                {activeMegaMenu === 'consultancy' && (
                  <div className={`fixed left-0 right-0 z-30 transition-all duration-200 ease-out ${isClosing ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}`} style={{ top: 'var(--nav-bottom)' }}>
                    <div className="bg-white border-b border-[#c6c6c6] shadow-[0_4px_12px_rgba(0,0,0,0.15)] w-full max-h-[calc(100vh-80px)] overflow-y-auto">
                      {/* Header */}
                      <div className="bg-[#f4f4f4] border-b border-[#e0e0e0]">
                        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                          <div>
                            <h3 className="text-sm font-semibold text-[#161616]">Consultancy</h3>
                            <p className="text-xs text-[#525252] mt-1">Strategic technology advisory and digital transformation services</p>
                          </div>
                          <button 
                            onClick={() => setActiveMegaMenu(null)}
                            className="p-2 bg-[#e0e0e0] hover:bg-[#161616] transition-all group"
                            aria-label="Close menu"
                          >
                            <X className="w-6 h-6 text-[#161616] group-hover:text-white transition-colors" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Content - Two Column Layout */}
                      <div className="max-w-7xl mx-auto px-6 py-6 pb-10">
                        <div className="flex gap-8">
                          {/* Left: Services */}
                          <div className="w-1/2">
                            <p className="text-xs font-medium text-[#0f62fe] mb-2">Services</p>
                            <div className="space-y-2">
                              <Link to="/services/cloud-strategy" className="flex items-center px-4 py-3 border border-[#e0e0e0] hover:border-[#0f62fe] hover:bg-[#f4f4f4] transition-all group" onClick={() => setActiveMegaMenu(null)}>
                                <span className="text-sm font-medium text-[#161616] group-hover:text-[#0f62fe]">Cloud Strategy</span>
                                <ArrowRight className="w-4 h-4 text-[#8d8d8d] group-hover:text-[#0f62fe] ml-auto" />
                              </Link>
                              <Link to="/services/digital-transformation" className="flex items-center px-4 py-3 border border-[#e0e0e0] hover:border-[#0f62fe] hover:bg-[#f4f4f4] transition-all group" onClick={() => setActiveMegaMenu(null)}>
                                <span className="text-sm font-medium text-[#161616] group-hover:text-[#0f62fe]">Digital Transformation</span>
                                <ArrowRight className="w-4 h-4 text-[#8d8d8d] group-hover:text-[#0f62fe] ml-auto" />
                              </Link>
                              <Link to="/services/it-assessment" className="flex items-center px-4 py-3 border border-[#e0e0e0] hover:border-[#0f62fe] hover:bg-[#f4f4f4] transition-all group" onClick={() => setActiveMegaMenu(null)}>
                                <span className="text-sm font-medium text-[#161616] group-hover:text-[#0f62fe]">IT Assessment</span>
                                <ArrowRight className="w-4 h-4 text-[#8d8d8d] group-hover:text-[#0f62fe] ml-auto" />
                              </Link>
                              <Link to="/services/technology-roadmap" className="flex items-center px-4 py-3 border border-[#e0e0e0] hover:border-[#0f62fe] hover:bg-[#f4f4f4] transition-all group" onClick={() => setActiveMegaMenu(null)}>
                                <span className="text-sm font-medium text-[#161616] group-hover:text-[#0f62fe]">Technology Roadmap</span>
                                <ArrowRight className="w-4 h-4 text-[#8d8d8d] group-hover:text-[#0f62fe] ml-auto" />
                              </Link>
                            </div>
                          </div>
                          
                          {/* Right: Industries */}
                          <div className="w-1/2">
                            <p className="text-xs font-medium text-[#0f62fe] mb-2">Industries</p>
                            <div className="space-y-2">
                              <Link to="/projects?industry=telecommunications" className="flex items-center px-4 py-3 border border-[#e0e0e0] hover:border-[#0f62fe] hover:bg-[#f4f4f4] transition-all group" onClick={() => setActiveMegaMenu(null)}>
                                <span className="text-sm font-medium text-[#161616] group-hover:text-[#0f62fe]">Telecommunications</span>
                                <ArrowRight className="w-4 h-4 text-[#8d8d8d] group-hover:text-[#0f62fe] ml-auto" />
                              </Link>
                              <Link to="/projects?industry=financial" className="flex items-center px-4 py-3 border border-[#e0e0e0] hover:border-[#0f62fe] hover:bg-[#f4f4f4] transition-all group" onClick={() => setActiveMegaMenu(null)}>
                                <span className="text-sm font-medium text-[#161616] group-hover:text-[#0f62fe]">Financial Services</span>
                                <ArrowRight className="w-4 h-4 text-[#8d8d8d] group-hover:text-[#0f62fe] ml-auto" />
                              </Link>
                              <Link to="/projects?industry=manufacturing" className="flex items-center px-4 py-3 border border-[#e0e0e0] hover:border-[#0f62fe] hover:bg-[#f4f4f4] transition-all group" onClick={() => setActiveMegaMenu(null)}>
                                <span className="text-sm font-medium text-[#161616] group-hover:text-[#0f62fe]">Manufacturing</span>
                                <ArrowRight className="w-4 h-4 text-[#8d8d8d] group-hover:text-[#0f62fe] ml-auto" />
                              </Link>
                              <Link to="/projects?industry=realestate" className="flex items-center px-4 py-3 border border-[#e0e0e0] hover:border-[#0f62fe] hover:bg-[#f4f4f4] transition-all group" onClick={() => setActiveMegaMenu(null)}>
                                <span className="text-sm font-medium text-[#161616] group-hover:text-[#0f62fe]">Real Estate</span>
                                <ArrowRight className="w-4 h-4 text-[#8d8d8d] group-hover:text-[#0f62fe] ml-auto" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Footer */}
                      <div className="border-t border-[#e0e0e0] bg-[#f4f4f4] py-4">
                        <div className="max-w-7xl mx-auto px-6">
                          <Link to="/#contact" onClick={() => setActiveMegaMenu(null)} className="flex items-center justify-start gap-3 px-6 py-3 bg-[#0f62fe] text-white text-sm font-semibold hover:bg-[#0353e9] transition-colors">
                            Book a Consultation <ArrowRight className="w-5 h-5" />
                          </Link>
                        </div>
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
                  onClick={() => setActiveMegaMenu(null)}
                  className={`flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-all rounded-sm ${activeMegaMenu === 'cloud' ? 'text-[#0f62fe] bg-[#f4f4f4]' : 'text-[#161616] hover:text-[#0f62fe] hover:bg-[#f4f4f4]/50'}`}
                >
                  Cloud
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeMegaMenu === 'cloud' ? 'rotate-90' : ''}`} />
                </Link>
                
                {activeMegaMenu === 'cloud' && cloudCategory && (
                  <div className={`fixed left-0 right-0 z-30 transition-all duration-200 ease-out ${isClosing ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}`} style={{ top: 'var(--nav-bottom)' }}>
                    <div className="bg-white border-b border-[#c6c6c6] shadow-[0_4px_12px_rgba(0,0,0,0.15)] w-full max-h-[calc(100vh-80px)] overflow-y-auto">
                      {/* Header */}
                      <div className="bg-[#f4f4f4] border-b border-[#e0e0e0]">
                        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                          <div>
                            <h3 className="text-sm font-semibold text-[#161616]">{cloudCategory.label}</h3>
                            <p className="text-xs text-[#525252] mt-1">{cloudCategory.description}</p>
                          </div>
                          <button 
                            onClick={() => setActiveMegaMenu(null)}
                            className="p-2 bg-[#e0e0e0] hover:bg-[#161616] transition-all group"
                            aria-label="Close menu"
                          >
                            <X className="w-6 h-6 text-[#161616] group-hover:text-white transition-colors" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Content - Three Panel Layout */}
                      <div className="max-w-6xl mx-auto flex pb-8">
                        {/* Left Rail */}
                        <div className="w-[240px] bg-white p-4 flex-shrink-0 border-r border-[#e0e0e0]">
                          <div className="space-y-1">
                            {cloudCategory.hubs?.map((hub) => {
                              const isActive = activeServiceByCategory['cloud'] === hub.id;
                              return (
                                <Link 
                                  key={hub.id}
                                  to={`/services/${hub.id}`}
                                  onMouseEnter={() => setActiveServiceByCategory(prev => ({ ...prev, cloud: hub.id }))}
                                  onClick={() => handleCategoryClick()}
                                  className={`block w-full text-left px-3 py-2 text-sm transition-all border-l-2 ${
                                    isActive 
                                      ? 'bg-[#f4f4f4] text-[#161616] border-[#0f62fe] font-semibold' 
                                      : 'text-[#161616] hover:bg-[#f4f4f4] border-transparent'
                                  }`}
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="font-normal">{hub.title}</span>
                                    {hub.badge && (
                                      <Star className="w-3.5 h-3.5 text-[#0f62fe] fill-[#0f62fe]" />
                                    )}
                                  </div>
                                </Link>
                              );
                            })}
                            <div className="border-t border-[#e0e0e0] my-2" />
                            <Link to="/services/cloud" onClick={() => setActiveMegaMenu(null)} className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-[#0f62fe] hover:text-[#0353e9] hover:bg-[#f4f4f4] transition-colors">
                              View All Cloud Services <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                        
                        {/* Middle - Active Hub Details */}
                        <div className="flex-1 p-6 bg-white">
                          {(() => {
                            const activeItem = getActiveItem('cloud');
                            if (!activeItem) return null;
                            
                            return (
                              <>
                                <a 
                                  href={`/services/${activeItem.id}`}
                                  onClick={() => setActiveMegaMenu(null)}
                                  className="group flex items-center gap-2 text-sm font-semibold text-[#161616] mb-2 hover:text-[#0f62fe] transition-colors"
                                >
                                  {activeItem.title}
                                  <ArrowRight className="w-4 h-4 text-[#8d8d8d] group-hover:text-[#0f62fe] transition-colors" />
                                </a>
                                <p className="text-sm text-[#525252] leading-relaxed mb-6">{activeItem.description}</p>
                                
                                {'spokes' in activeItem && activeItem.spokes.length > 0 && (
                                  <div className="mb-6">
                                    <h5 className="text-[11px] font-medium text-[#6f6f6f] uppercase tracking-[0.16px] mb-2">Includes:</h5>
                                    <div className="flex flex-wrap gap-2">
                                      {activeItem.spokes.map((spoke) => (
                                        <span key={spoke.id} className="px-2 py-0.5 border border-[#e0e0e0] text-[#525252] text-xs font-medium rounded-full">{spoke.title}</span>
                                      ))}
                                    </div>
                                  </div>
                                )}
                                
                                {/* CTA */}
                                <a href="#contact" onClick={() => setActiveMegaMenu(null)} className="inline-flex items-center gap-2 px-4 py-3 bg-[#0f62fe] text-white text-sm font-semibold hover:bg-[#0353e9] transition-colors">
                                  Talk to an Expert <ArrowRight className="w-4 h-4" />
                                </a>
                                <div className="h-8" />
                              </>
                            );
                          })()}
                        </div>
                        
                        {/* Right Rail - Featured Case Study */}
                        <div className="w-[280px] bg-white pt-6 pr-6 pb-6 flex-shrink-0">
                          {cloudCategory.caseStudies.find(s => s.featured) && (
                            <div className="pl-4 pr-0 py-0 border-l-2 border-[#c6c6c6]">
                              {(() => {
                                const featured = cloudCategory.caseStudies.find(s => s.featured)!;
                                return (
                                  <>
                                    <p className="text-[11px] font-semibold text-[#6f6f6f] uppercase tracking-[0.16px] mb-3">Featured Case Study</p>
                                    <h4 className="text-sm font-semibold text-[#161616] mb-3">{featured.title}</h4>
                                    <p className="text-sm text-[#525252] mb-4 leading-relaxed">{featured.description}</p>
                                    <Link to={`/projects/case-study/${featured.slug}`} onClick={() => setActiveMegaMenu(null)} className="inline-flex items-center gap-1 text-sm font-semibold text-[#525252] hover:text-[#0f62fe]">
                                      View case study <ArrowRight className="w-4 h-4" />
                                    </Link>
                                  </>
                                );
                              })()}
                            </div>
                          )}
                        </div>
                      </div>
                      
                    </div>
                  </div>
                )}
              </div>

              {/* INFRASTRUCTURE - Full Width Two Panel */}
              <div className="h-6 w-px bg-gray-300 mx-1" />
              <div 
                className="relative" 
                onMouseEnter={() => handleMouseEnter('infrastructure')}
                onMouseLeave={handleMouseLeave}
              >
                <Link 
                  to="/services/infrastructure"
                  onClick={() => setActiveMegaMenu(null)}
                  className={`flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-all rounded-sm ${activeMegaMenu === 'infrastructure' ? 'text-[#0f62fe] bg-[#f4f4f4]' : 'text-[#161616] hover:text-[#0f62fe] hover:bg-[#f4f4f4]/50'}`}
                >
                  Infrastructure
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeMegaMenu === 'infrastructure' ? 'rotate-90' : ''}`} />
                </Link>
                
                {activeMegaMenu === 'infrastructure' && (
                  <div className={`fixed left-0 right-0 z-30 transition-all duration-200 ease-out ${isClosing ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}`} style={{ top: 'var(--nav-bottom)' }}>
                    <div className="bg-white border-b border-[#c6c6c6] shadow-[0_4px_12px_rgba(0,0,0,0.15)] w-full max-h-[calc(100vh-80px)] overflow-y-auto">
                      {/* Header */}
                      <div className="bg-[#f4f4f4] border-b border-[#e0e0e0]">
                        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                          <div>
                            <h3 className="text-sm font-semibold text-[#161616]">Infrastructure</h3>
                            <p className="text-xs text-[#525252] mt-1">Hardware support, data center services, and 24×7 SLA support</p>
                          </div>
                          <button 
                            onClick={() => setActiveMegaMenu(null)}
                            className="p-2 bg-[#e0e0e0] hover:bg-[#161616] transition-all group"
                            aria-label="Close menu"
                          >
                            <X className="w-6 h-6 text-[#161616] group-hover:text-white transition-colors" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Content - Three Panel Layout */}
                      <div className="max-w-6xl mx-auto flex pb-8">
                        {/* Left Rail */}
                        <div className="w-[240px] bg-white p-4 flex-shrink-0 border-r border-[#e0e0e0]">
                          <div className="space-y-1">
                            {infrastructureServices.map((service) => {
                              const isActive = activeInfrastructureItem === service.id;
                              return (
                                <Link 
                                  key={service.id}
                                  to={service.link}
                                  onMouseEnter={() => setActiveInfrastructureItem(service.id)}
                                  onClick={() => handleCategoryClick()}
                                  className={`block w-full text-left px-3 py-2 text-sm transition-all border-l-2 ${
                                    isActive 
                                      ? 'bg-[#f4f4f4] text-[#161616] border-[#0f62fe] font-semibold' 
                                      : 'text-[#161616] hover:bg-[#f4f4f4] border-transparent'
                                  }`}
                                >
                                  <span className="font-normal">{service.title}</span>
                                </Link>
                              );
                            })}
                            <Link 
                              to="/services/network-operations"
                              onMouseEnter={() => setActiveInfrastructureItem('network-operations')}
                              onClick={() => handleCategoryClick()}
                              className={`block w-full text-left px-3 py-2 text-sm transition-all border-l-2 ${
                                activeInfrastructureItem === 'network-operations'
                                  ? 'bg-[#f4f4f4] text-[#161616] border-[#0f62fe] font-semibold' 
                                  : 'text-[#161616] hover:bg-[#f4f4f4] border-transparent'
                              }`}
                            >
                              <span className="font-normal">Network Operations</span>
                            </Link>
                            <div className="border-t border-[#e0e0e0] my-2" />
                            <Link to="/services/infrastructure" onClick={() => setActiveMegaMenu(null)} className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-[#0f62fe] hover:text-[#0353e9] hover:bg-[#f4f4f4] transition-colors">
                              View All Infrastructure <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                        
                        {/* Middle - Active Content */}
                        <div className="flex-1 p-6 bg-white">
                          {activeInfrastructureItem === 'network-operations' ? (
                            <>
                              <Link to="/services/network-operations" onClick={() => setActiveMegaMenu(null)} className="group flex items-center gap-2 text-sm font-semibold text-[#161616] mb-2 hover:text-[#0f62fe] transition-colors">
                                Network Operations
                                <ArrowRight className="w-4 h-4 text-[#8d8d8d] group-hover:text-[#0f62fe] transition-colors" />
                              </Link>
                              <p className="text-sm text-[#525252] leading-relaxed mb-6">Cross-domain automation and network monitoring solutions for telecom and enterprise networks.</p>
                              
                              <div className="mb-6">
                                <h5 className="text-[11px] font-medium text-[#6f6f6f] uppercase tracking-[0.16px] mb-2">Includes:</h5>
                                <div className="flex flex-wrap gap-2">
                                  {networkOperationsServices.map((service) => (
                                    <span key={service.id} className="px-2 py-0.5 border border-[#e0e0e0] text-[#525252] text-xs font-medium rounded-full">{service.title}</span>
                                  ))}
                                </div>
                              </div>
                              
                              {/* CTA */}
                              <a href="#contact" onClick={() => setActiveMegaMenu(null)} className="inline-flex items-center gap-2 px-4 py-3 bg-[#0f62fe] text-white text-sm font-semibold hover:bg-[#0353e9] transition-colors">
                                Talk to an Infrastructure Expert <ArrowRight className="w-4 h-4" />
                              </a>
                              <div className="h-8" />
                            </>
                          ) : (
                            (() => {
                              const service = infrastructureServices.find(s => s.id === activeInfrastructureItem);
                              if (!service) return null;
                              return (
                                <>
                                  <Link to={service.link} onClick={() => setActiveMegaMenu(null)} className="group flex items-center gap-2 text-sm font-semibold text-[#161616] mb-2 hover:text-[#0f62fe] transition-colors">
                                    {service.title}
                                    <ArrowRight className="w-4 h-4 text-[#8d8d8d] group-hover:text-[#0f62fe] transition-colors" />
                                  </Link>
                                  <p className="text-sm text-[#525252] leading-relaxed mb-6">{service.description}</p>
                                  
                                  {/* CTA */}
                                  <a href="#contact" onClick={() => setActiveMegaMenu(null)} className="inline-flex items-center gap-2 px-4 py-3 bg-[#0f62fe] text-white text-sm font-semibold hover:bg-[#0353e9] transition-colors">
                                    Talk to an Infrastructure Expert <ArrowRight className="w-4 h-4" />
                                  </a>
                                  <div className="h-8" />
                                </>
                              );
                            })()
                          )}
                        </div>
                        
                        {/* Right Rail - Case Study & Badge */}
                        <div className="w-[280px] bg-white pt-6 pr-6 pb-6 flex-shrink-0">
                          {/* Case Study */}
                          <div className="pl-4 pr-0 py-0 border-l-2 border-[#c6c6c6] mb-8">
                            <p className="text-[11px] font-semibold text-[#6f6f6f] uppercase tracking-[0.16px] mb-3">Featured Case Study</p>
                            <h4 className="text-sm font-semibold text-[#161616] mb-3">Cross-Domain Network Automation</h4>
                            <p className="text-sm text-[#525252] mb-4 leading-relaxed">Enhanced network efficiency by automating alarm correlation across telecom domains.</p>
                            <Link to="/projects/case-study/network-operations-automation" onClick={() => setActiveMegaMenu(null)} className="inline-flex items-center gap-1 text-sm font-semibold text-[#525252] hover:text-[#0f62fe]">
                              View case study <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                          
                          {/* Huawei Partnership Badge */}
                          <div className="pl-4 pr-0 py-0 border-l-2 border-[#ef4444]">
                            <p className="text-[11px] font-semibold text-[#ef4444] uppercase tracking-[0.16px] mb-3">Certified Partner</p>
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-8 h-8 bg-[#ef4444] flex items-center justify-center flex-shrink-0">
                                <span className="text-white font-semibold text-xs">H</span>
                              </div>
                              <h4 className="text-sm font-semibold text-[#161616]">Huawei Enterprise</h4>
                            </div>
                            <p className="text-sm text-[#525252] mb-4 leading-relaxed">Authorized infrastructure solutions provider</p>
                            <Link to="/blog/huawei-partnership" onClick={() => setActiveMegaMenu(null)} className="inline-flex items-center gap-1 text-sm font-semibold text-[#525252] hover:text-[#0f62fe]">
                              Read our partnership story <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                )}
              </div>

              {/* DATA AND ANALYTICS - Full Width Two Panel */}
              <div className="h-6 w-px bg-gray-300 mx-1" />
              <div 
                className="relative" 
                onMouseEnter={() => handleMouseEnter('data')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  onClick={() => setActiveMegaMenu(null)}
                  className={`flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-all rounded-sm ${activeMegaMenu === 'data' ? 'text-[#0f62fe] bg-[#f4f4f4]' : 'text-[#161616] hover:text-[#0f62fe] hover:bg-[#f4f4f4]/50'}`}
                >
                  Data and Analytics
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeMegaMenu === 'data' ? 'rotate-90' : ''}`} />
                </button>
                
                {activeMegaMenu === 'data' && (
                  <div className={`fixed left-0 right-0 z-30 transition-all duration-200 ease-out ${isClosing ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}`} style={{ top: 'var(--nav-bottom)' }}>
                    <div className="bg-white border-b border-[#c6c6c6] shadow-[0_4px_12px_rgba(0,0,0,0.15)] w-full max-h-[calc(100vh-80px)] overflow-y-auto">
                      {/* Header */}
                      <div className="bg-[#f4f4f4] border-b border-[#e0e0e0]">
                        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                          <div>
                            <h3 className="text-sm font-semibold text-[#161616]">Data & Analytics</h3>
                            <p className="text-xs text-[#525252] mt-1">Transform data into actionable insights with modern analytics platforms</p>
                          </div>
                          <button 
                            onClick={() => setActiveMegaMenu(null)}
                            className="p-2 bg-[#e0e0e0] hover:bg-[#161616] transition-all group"
                            aria-label="Close menu"
                          >
                            <X className="w-6 h-6 text-[#161616] group-hover:text-white transition-colors" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Content - Three Panel Layout */}
                      <div className="max-w-6xl mx-auto flex pb-8">
                        {/* Left Rail */}
                        <div className="w-[240px] bg-white p-4 flex-shrink-0 border-r border-[#e0e0e0]">
                          <div className="space-y-1">
                            {dataServices.map((service) => {
                              const isActive = activeDataItem === service.id;
                              return (
                                <Link 
                                  key={service.id}
                                  to={service.link}
                                  onMouseEnter={() => setActiveDataItem(service.id)}
                                  onClick={() => handleCategoryClick()}
                                  className={`block w-full text-left px-3 py-2 text-sm transition-all border-l-2 ${
                                    isActive 
                                      ? 'bg-[#f4f4f4] text-[#161616] border-[#0f62fe] font-semibold' 
                                      : 'text-[#161616] hover:bg-[#f4f4f4] border-transparent'
                                  }`}
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="font-normal">{service.title}</span>
                                    {service.badge && (
                                      <Star className="w-3.5 h-3.5 text-[#0f62fe] fill-[#0f62fe]" />
                                    )}
                                  </div>
                                </Link>
                              );
                            })}
                            <div className="border-t border-[#e0e0e0] my-2" />
                            <Link to="/services#data" onClick={() => setActiveMegaMenu(null)} className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-[#0f62fe] hover:text-[#0353e9] hover:bg-[#f4f4f4] transition-colors">
                              View All Data Services <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                        
                        {/* Middle - Active Service Details */}
                        <div className="flex-1 p-6 bg-white">
                          {(() => {
                            const activeItem = dataServices.find(s => s.id === activeDataItem);
                            if (!activeItem) return null;
                            
                            return (
                              <>
                                <Link 
                                  to={activeItem.link}
                                  onClick={() => setActiveMegaMenu(null)}
                                  className="group flex items-center gap-2 text-sm font-semibold text-[#161616] mb-2 hover:text-[#0f62fe] transition-colors"
                                >
                                  {activeItem.title}
                                  <ArrowRight className="w-4 h-4 text-[#8d8d8d] group-hover:text-[#0f62fe] transition-colors" />
                                </Link>
                                <p className="text-sm text-[#525252] leading-relaxed mb-6">{activeItem.description}</p>
                                
                                {/* Technologies - as pills */}
                                <div className="mb-6">
                                  <h5 className="text-[11px] font-medium text-[#6f6f6f] uppercase tracking-[0.16px] mb-2">Includes:</h5>
                                  <div className="flex flex-wrap gap-2">
                                    {activeItem.id === 'iot-analytics' && ['Databricks', 'Azure', 'MQTT', 'Data Lakes'].map((tech) => (
                                      <span key={tech} className="px-2 py-0.5 border border-[#e0e0e0] text-[#525252] text-xs font-medium rounded-full">{tech}</span>
                                    ))}
                                    {activeItem.id === 'data-lakes' && ['Snowflake', 'Azure Synapse', 'AWS S3', 'Delta Lake'].map((tech) => (
                                      <span key={tech} className="px-2 py-0.5 border border-[#e0e0e0] text-[#525252] text-xs font-medium rounded-full">{tech}</span>
                                    ))}
                                    {activeItem.id === 'geospatial' && ['ArcGIS', 'Mapbox', 'Google Maps API', 'PostGIS'].map((tech) => (
                                      <span key={tech} className="px-2 py-0.5 border border-[#e0e0e0] text-[#525252] text-xs font-medium rounded-full">{tech}</span>
                                    ))}
                                    {activeItem.id === 'data-federation' && ['Apache Trino', 'Data Virtualization', 'API Gateway', 'GraphQL'].map((tech) => (
                                      <span key={tech} className="px-2 py-0.5 border border-[#e0e0e0] text-[#525252] text-xs font-medium rounded-full">{tech}</span>
                                    ))}
                                    {activeItem.id === 'database-optimisation' && ['DB2 PureScale', 'SQL Server', 'Oracle', 'PostgreSQL'].map((tech) => (
                                      <span key={tech} className="px-2 py-0.5 border border-[#e0e0e0] text-[#525252] text-xs font-medium rounded-full">{tech}</span>
                                    ))}
                                  </div>
                                </div>
                                
                                {/* CTA */}
                                <a href="#contact" onClick={() => setActiveMegaMenu(null)} className="inline-flex items-center gap-2 px-4 py-3 bg-[#0f62fe] text-white text-sm font-semibold hover:bg-[#0353e9] transition-colors">
                                  Talk to a Data Expert <ArrowRight className="w-4 h-4" />
                                </a>
                                <div className="h-8" />
                              </>
                            );
                          })()}
                        </div>
                        
                        {/* Right Rail - Featured Case Study */}
                        <div className="w-[280px] bg-white pt-6 pr-6 pb-6 flex-shrink-0">
                          <div className="pl-4 pr-0 py-0 border-l-2 border-[#c6c6c6]">
                            <p className="text-[11px] font-semibold text-[#6f6f6f] uppercase tracking-[0.16px] mb-3">Featured Case Study</p>
                            <h4 className="text-sm font-semibold text-[#161616] mb-3">IoT Analytics Platform — African Telecom</h4>
                            <p className="text-sm text-[#525252] mb-4 leading-relaxed">Real-time monitoring of mobile towers with geospatial visualisation and predictive maintenance.</p>
                            <Link to="/projects" onClick={() => setActiveMegaMenu(null)} className="inline-flex items-center gap-1 text-sm font-semibold text-[#525252] hover:text-[#0f62fe]">
                              View case study <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                )}
              </div>

              {/* AI - Three Panel */}
              <div className="h-6 w-px bg-gray-300 mx-1" />
              <div 
                className="relative" 
                onMouseEnter={() => handleMouseEnter('ai')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  onClick={() => setActiveMegaMenu(null)}
                  className={`flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-all rounded-sm ${activeMegaMenu === 'ai' ? 'text-[#0f62fe] bg-[#f4f4f4]' : 'text-[#161616] hover:text-[#0f62fe] hover:bg-[#f4f4f4]/50'}`}
                >
                  AI
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeMegaMenu === 'ai' ? 'rotate-90' : ''}`} />
                </button>
                
                {activeMegaMenu === 'ai' && (
                  <div className={`fixed left-0 right-0 z-30 transition-all duration-200 ease-out ${isClosing ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}`} style={{ top: 'var(--nav-bottom)' }}>
                    <div className="bg-white border-b border-[#c6c6c6] shadow-[0_4px_12px_rgba(0,0,0,0.15)] w-full max-h-[calc(100vh-80px)] overflow-y-auto">
                      {/* Header */}
                      <div className="bg-[#f4f4f4] border-b border-[#e0e0e0]">
                        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                          <div>
                            <h3 className="text-sm font-semibold text-[#161616]">AI Services</h3>
                            <p className="text-xs text-[#525252] mt-1">AI-first services including MLOps, AIOps and platform engineering</p>
                          </div>
                          <button 
                            onClick={() => setActiveMegaMenu(null)}
                            className="p-2 bg-[#e0e0e0] hover:bg-[#161616] transition-all group"
                            aria-label="Close menu"
                          >
                            <X className="w-6 h-6 text-[#161616] group-hover:text-white transition-colors" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Content - Three Panel Layout */}
                      <div className="max-w-6xl mx-auto flex pb-8">
                        {/* Left Rail */}
                        <div className="w-[240px] bg-white p-4 flex-shrink-0 border-r border-[#e0e0e0]">
                          <div className="space-y-1">
                            {aiServices.map((service) => {
                              const isActive = activeAIItem === service.id;
                              return (
                                <Link 
                                  key={service.id}
                                  to={service.link}
                                  onMouseEnter={() => setActiveAIItem(service.id)}
                                  onClick={() => handleCategoryClick()}
                                  className={`block w-full text-left px-3 py-2 text-sm transition-all border-l-2 ${
                                    isActive 
                                      ? 'bg-[#f4f4f4] text-[#161616] border-[#0f62fe] font-semibold' 
                                      : 'text-[#161616] hover:bg-[#f4f4f4] border-transparent'
                                  }`}
                                >
                                  <span className="font-normal">{service.title}</span>
                                </Link>
                              );
                            })}
                            <div className="border-t border-[#e0e0e0] my-2" />
                            <Link to="/services#ai" onClick={() => setActiveMegaMenu(null)} className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-[#0f62fe] hover:text-[#0353e9] hover:bg-[#f4f4f4] transition-colors">
                              View All AI Services <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                        
                        {/* Middle - Active Service Details */}
                        <div className="flex-1 p-6 bg-white">
                          {(() => {
                            const activeItem = aiServices.find(s => s.id === activeAIItem);
                            if (!activeItem) return null;
                            
                            return (
                              <>
                                <Link 
                                  to={activeItem.link}
                                  onClick={() => setActiveMegaMenu(null)}
                                  className="group flex items-center gap-2 text-sm font-semibold text-[#161616] mb-2 hover:text-[#0f62fe] transition-colors"
                                >
                                  {activeItem.title}
                                  <ArrowRight className="w-4 h-4 text-[#8d8d8d] group-hover:text-[#0f62fe] transition-colors" />
                                </Link>
                                <p className="text-sm text-[#525252] leading-relaxed mb-6">{activeItem.description}</p>
                                
                                {/* Capabilities - as pills */}
                                <div className="mb-6">
                                  <h5 className="text-[11px] font-medium text-[#6f6f6f] uppercase tracking-[0.16px] mb-2">Includes:</h5>
                                  <div className="flex flex-wrap gap-2">
                                    {activeItem.id === 'mlops' && ['Model Training', 'Model Deployment', 'Monitoring', 'Governance'].map((cap) => (
                                      <span key={cap} className="px-2 py-0.5 border border-[#e0e0e0] text-[#525252] text-xs font-medium rounded-full">{cap}</span>
                                    ))}
                                    {activeItem.id === 'ai-platform' && ['Data Pipelines', 'Containerized Inference', 'Feature Stores', 'Experiment Tracking'].map((cap) => (
                                      <span key={cap} className="px-2 py-0.5 border border-[#e0e0e0] text-[#525252] text-xs font-medium rounded-full">{cap}</span>
                                    ))}
                                    {activeItem.id === 'aiops' && ['Anomaly Detection', 'Predictive Maintenance', 'Incident Correlation', 'Auto-Remediation'].map((cap) => (
                                      <span key={cap} className="px-2 py-0.5 border border-[#e0e0e0] text-[#525252] text-xs font-medium rounded-full">{cap}</span>
                                    ))}
                                  </div>
                                </div>
                                
                                {/* CTA */}
                                <a href="#contact" onClick={() => setActiveMegaMenu(null)} className="inline-flex items-center gap-2 px-4 py-3 bg-[#0f62fe] text-white text-sm font-semibold hover:bg-[#0353e9] transition-colors">
                                  Talk to an AI Expert <ArrowRight className="w-4 h-4" />
                                </a>
                                <div className="h-8" />
                              </>
                            );
                          })()}
                        </div>
                        
                        {/* Right Rail - Featured Case Study */}
                        <div className="w-[280px] bg-white pt-6 pr-6 pb-6 flex-shrink-0">
                          <div className="pl-4 pr-0 py-0 border-l-2 border-[#c6c6c6]">
                            <p className="text-[11px] font-semibold text-[#6f6f6f] uppercase tracking-[0.16px] mb-3">Featured Case Study</p>
                            <h4 className="text-sm font-semibold text-[#161616] mb-3">AIOps-Driven Telecom Anomaly Detection</h4>
                            <p className="text-sm text-[#525252] mb-4 leading-relaxed">Reducing incident noise and improving MTTR with AI-powered insights for network operations.</p>
                            <Link to="/projects" onClick={() => setActiveMegaMenu(null)} className="inline-flex items-center gap-1 text-sm font-semibold text-[#525252] hover:text-[#0f62fe]">
                              View case study <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                )}
              </div>

              {/* IT PLATFORMS - Full Width Two Panel */}
              <div className="h-6 w-px bg-gray-300 mx-1" />
              <div 
                className="relative" 
                onMouseEnter={() => handleMouseEnter('platforms')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  onClick={() => setActiveMegaMenu(null)}
                  className={`flex items-center gap-1 px-3 py-2 text-[13px] font-bold transition-all rounded-sm ${activeMegaMenu === 'platforms' ? 'text-white bg-[#0f62fe]' : 'text-[#161616] hover:text-[#0f62fe] hover:bg-[#f4f4f4]/50'}`}
                >
                  IT Platforms
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeMegaMenu === 'platforms' ? 'rotate-90' : ''}`} />
                </button>
                
                {activeMegaMenu === 'platforms' && (
                  <div className={`fixed left-0 right-0 z-30 transition-all duration-200 ease-out ${isClosing ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}`} style={{ top: 'var(--nav-bottom)' }}>
                    <div className="bg-white border-b border-[#c6c6c6] shadow-[0_4px_12px_rgba(0,0,0,0.15)] w-full max-h-[calc(100vh-80px)] overflow-y-auto relative">
                      {/* Floating Close Button */}
                      <button 
                        onClick={() => setActiveMegaMenu(null)}
                        className="absolute top-4 right-4 z-10 p-2 bg-[#e0e0e0] hover:bg-[#161616] transition-all group rounded-sm"
                        aria-label="Close menu"
                      >
                        <X className="w-5 h-5 text-[#161616] group-hover:text-white transition-colors" />
                      </button>
                      
                      {/* Content - Three Panel Layout */}
                      <div className="max-w-6xl mx-auto flex pb-8">
                        {/* Left Rail */}
                        <div className="w-[240px] bg-white p-4 flex-shrink-0 border-r border-[#e0e0e0]">
                          <div className="space-y-1">
                            {platformsServices.map((service) => {
                              const isActive = activePlatformItem === service.id;
                              return (
                                <Link 
                                  key={service.id}
                                  to={service.link}
                                  onMouseEnter={() => setActivePlatformItem(service.id)}
                                  onClick={() => handleCategoryClick()}
                                  className={`block w-full text-left px-3 py-2 text-sm transition-all border-l-2 ${
                                    isActive 
                                      ? 'bg-[#f4f4f4] text-[#161616] border-[#0f62fe] font-semibold' 
                                      : 'text-[#161616] hover:bg-[#f4f4f4] border-transparent'
                                  }`}
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="font-normal">{service.title}</span>
                                    {service.badge && (
                                      <Star className="w-3.5 h-3.5 text-[#0f62fe] fill-[#0f62fe]" />
                                    )}
                                  </div>
                                </Link>
                              );
                            })}
                            <div className="border-t border-[#e0e0e0] my-2" />
                            <Link to="/services#platforms" onClick={() => setActiveMegaMenu(null)} className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-[#0f62fe] hover:text-[#0353e9] hover:bg-[#f4f4f4] transition-colors">
                              View All Platform Services <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                        
                        {/* Middle - Active Service Details */}
                        <div className="flex-1 p-6 bg-white">
                          {(() => {
                            const activeItem = platformsServices.find(s => s.id === activePlatformItem);
                            if (!activeItem) return null;
                            
                            return (
                              <>
                                <Link 
                                  to={activeItem.link}
                                  onClick={() => setActiveMegaMenu(null)}
                                  className="group flex items-center gap-2 text-sm font-semibold text-[#161616] mb-2 hover:text-[#0f62fe] transition-colors"
                                >
                                  {activeItem.title}
                                  <ArrowRight className="w-4 h-4 text-[#8d8d8d] group-hover:text-[#0f62fe] transition-colors" />
                                </Link>
                                <p className="text-sm text-[#525252] leading-relaxed mb-6">{activeItem.description}</p>
                                
                                {/* Features - as pills */}
                                <div className="mb-6">
                                  <h5 className="text-[11px] font-medium text-[#6f6f6f] uppercase tracking-[0.16px] mb-2">Includes:</h5>
                                  <div className="flex flex-wrap gap-2">
                                    {activeItem.id === 'servicenow' && ['ITSM', 'ITOM', 'CMDB', 'Workflow Automation', '8-Week Go-Live'].map((feat) => (
                                      <span key={feat} className="px-2 py-0.5 border border-[#e0e0e0] text-[#525252] text-xs font-medium rounded-full">{feat}</span>
                                    ))}
                                    {activeItem.id === 'maximo' && ['Asset Management', 'Work Orders', 'Preventive Maintenance', 'Inventory', 'Mobile'].map((feat) => (
                                      <span key={feat} className="px-2 py-0.5 border border-[#e0e0e0] text-[#525252] text-xs font-medium rounded-full">{feat}</span>
                                    ))}
                                    {activeItem.id === 'jira' && ['Agile ITSM', 'Incident Management', 'Change Management', 'SLA Tracking', 'Confluence'].map((feat) => (
                                      <span key={feat} className="px-2 py-0.5 border border-[#e0e0e0] text-[#525252] text-xs font-medium rounded-full">{feat}</span>
                                    ))}
                                    {activeItem.id === 'custom-development' && ['Bespoke Apps', 'APIs', 'Integrations', 'Portals', 'Cloud-Native'].map((feat) => (
                                      <span key={feat} className="px-2 py-0.5 border border-[#e0e0e0] text-[#525252] text-xs font-medium rounded-full">{feat}</span>
                                    ))}
                                    {activeItem.id === 'service-desk' && ['Ticketing', 'Automation', 'Self-Service', 'Knowledge Base', 'Analytics'].map((feat) => (
                                      <span key={feat} className="px-2 py-0.5 border border-[#e0e0e0] text-[#525252] text-xs font-medium rounded-full">{feat}</span>
                                    ))}
                                  </div>
                                </div>
                                
                                {/* CTA */}
                                <a href="#contact" onClick={() => setActiveMegaMenu(null)} className="inline-flex items-center gap-2 px-4 py-3 bg-[#0f62fe] text-white text-sm font-semibold hover:bg-[#0353e9] transition-colors">
                                  Talk to a Platform Expert <ArrowRight className="w-4 h-4" />
                                </a>
                                <div className="h-8" />
                              </>
                            );
                          })()}
                        </div>
                        
                        {/* Right Rail - Featured Case Study */}
                        <div className="w-[280px] bg-white pt-6 pr-6 pb-6 flex-shrink-0">
                          <div className="pl-4 pr-0 py-0 border-l-2 border-[#0f62fe]">
                            <p className="text-[11px] font-semibold text-[#6f6f6f] uppercase tracking-[0.16px] mb-3">Featured Case Study</p>
                            <h4 className="text-sm font-bold text-[#0f62fe] mb-3">ServiceNow ITSM Transformation — African Telecom</h4>
                            <p className="text-sm text-[#525252] mb-4 leading-relaxed">Complete IT service management overhaul with automated workflows, reducing resolution times by 60%.</p>
                            <Link to="/projects" onClick={() => setActiveMegaMenu(null)} className="inline-flex items-center gap-1 text-sm font-semibold text-[#525252] hover:text-[#0f62fe]">
                              View case study <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
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
                <button 
                  onClick={() => setActiveMegaMenu(null)}
                  className={`flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-all rounded-sm ${activeMegaMenu === 'about' ? 'text-[#0f62fe] bg-[#f4f4f4]' : 'text-[#161616] hover:text-[#0f62fe] hover:bg-[#f4f4f4]/50'}`}
                >
                  About
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeMegaMenu === 'about' ? 'rotate-90' : ''}`} />
                </button>
                {activeMegaMenu === 'about' && (
                  <div className={`fixed left-0 right-0 z-30 transition-all duration-200 ease-out ${isClosing ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}`} style={{ top: 'var(--nav-bottom)' }}>
                    <div className="bg-white border-b border-[#c6c6c6] shadow-[0_4px_12px_rgba(0,0,0,0.15)] w-full max-h-[calc(100vh-80px)] overflow-y-auto">
                      {/* Header */}
                      <div className="bg-[#f4f4f4] border-b border-[#e0e0e0]">
                        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                          <div>
                            <h3 className="text-sm font-semibold text-[#161616]">About Perception IT</h3>
                            <p className="text-xs text-[#525252] mt-1">Your partner from hardware to cloud</p>
                          </div>
                          <button 
                            onClick={() => setActiveMegaMenu(null)}
                            className="p-2 bg-[#e0e0e0] hover:bg-[#161616] transition-all group"
                            aria-label="Close menu"
                          >
                            <X className="w-6 h-6 text-[#161616] group-hover:text-white transition-colors" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Content - Three Panel Layout */}
                      <div className="max-w-6xl mx-auto flex pb-8">
                        {/* Left Rail */}
                        <div className="w-[240px] bg-white p-4 flex-shrink-0 border-r border-[#e0e0e0]">
                          <div className="space-y-1">
                            {aboutCategories.map((category) => {
                              const isActive = activeAboutCategory === category.id;
                              return (
                                <Link 
                                  key={category.id} 
                                  to="/about"
                                  onMouseEnter={() => setActiveAboutCategory(category.id)} 
                                  onClick={() => handleCategoryClick()}
                                  className={`block w-full text-left px-3 py-2 text-sm transition-all border-l-2 ${
                                    isActive 
                                      ? 'bg-[#f4f4f4] text-[#161616] border-[#0f62fe] font-semibold' 
                                      : 'text-[#161616] hover:bg-[#f4f4f4] border-transparent'
                                  }`}
                                >
                                  <span className="font-normal">{category.name}</span>
                                </Link>
                              );
                            })}
                            <div className="border-t border-[#e0e0e0] my-2" />
                            <Link to="/projects" className="block px-3 py-2 text-sm font-semibold text-[#0f62fe] hover:text-[#0353e9] hover:bg-[#f4f4f4] transition-colors" onClick={() => setActiveMegaMenu(null)}>Projects</Link>
                            <Link to="/contact" className="block px-3 py-2 text-sm font-semibold text-[#0f62fe] hover:text-[#0353e9] hover:bg-[#f4f4f4] transition-colors" onClick={() => setActiveMegaMenu(null)}>Contact Us</Link>
                          </div>
                        </div>
                        
                        {/* Middle - Active Category Content */}
                        <div className="flex-1 p-6 bg-white">
                          <Link to="/about" onClick={() => setActiveMegaMenu(null)} className="group flex items-center gap-2 text-sm font-semibold text-[#161616] mb-2 hover:text-[#0f62fe] transition-colors">
                            {getActiveAboutCategory().name}
                            <ArrowRight className="w-4 h-4 text-[#8d8d8d] group-hover:text-[#0f62fe] transition-colors" />
                          </Link>
                          <div className="text-sm text-[#525252] mb-6">{getActiveAboutCategory().content}</div>
                          
                          {/* CTA */}
                          <a href="#contact" onClick={() => setActiveMegaMenu(null)} className="inline-flex items-center gap-2 px-4 py-3 bg-[#0f62fe] text-white text-sm font-semibold hover:bg-[#0353e9] transition-colors">
                            Start Your Project — Contact Us <ArrowRight className="w-4 h-4" />
                          </a>
                          <div className="h-8" />
                        </div>
                        
                        {/* Right Rail - Success Stats */}
                        <div className="w-[280px] bg-white pt-6 pr-6 pb-6 flex-shrink-0">
                          <div className="pl-4 pr-0 py-0 border-l-2 border-[#c6c6c6]">
                            <p className="text-[11px] font-semibold text-[#6f6f6f] uppercase tracking-[0.16px] mb-3">Client Success</p>
                            <h4 className="text-sm font-semibold text-[#161616] mb-3">14+ Years of Enterprise Excellence</h4>
                            <p className="text-sm text-[#525252] mb-4 leading-relaxed">50+ platforms deployed across Pakistan, UK, and GCC markets</p>
                            <Link to="/projects" onClick={() => setActiveMegaMenu(null)} className="inline-flex items-center gap-1 text-sm font-semibold text-[#525252] hover:text-[#0f62fe]">
                              View all case studies <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
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
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-200 ${showHighlightBar ? 'top-[84px]' : 'top-[48px]'}`}
          onClick={() => setActiveMegaMenu(null)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`fixed inset-0 z-40 lg:hidden bg-white ${showHighlightBar ? 'top-[84px]' : 'top-[48px]'}`}>
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
          <div className="px-4 py-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 140px)' }}>
            {/* Solutions Mobile - Preserved */}
            {mobileActiveTab === 'solutions' && (
              <div className="space-y-4">
                <p className="text-sm text-[#525252]">Integrated solutions from hardware to cloud</p>
                {solutions.map((solution) => (
                  <div key={solution.id} className={`p-4 rounded-lg border ${solution.featured ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-[#161616]">{solution.title}</h3>
                      {solution.featured && <Star className="w-4 h-4 text-[#0f62fe] fill-[#0f62fe]" />}
                    </div>
                    <p className="text-xs text-[#6f6f6f] mb-1">{solution.subtitle}</p>
                    <p className="text-sm text-[#525252] mb-2">{solution.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {solution.combines.map((item, i) => <span key={i} className="px-2 py-0.5 bg-white border border-gray-200 text-[9px] text-[#525252] rounded">{item}</span>)}
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
                  <p className="text-[11px] font-semibold text-[#6f6f6f] uppercase tracking-[0.16px] mb-2">Services</p>
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
                  <p className="text-[11px] font-semibold text-[#6f6f6f] uppercase tracking-[0.16px] mb-2">Industries</p>
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
                          {hub.badge && <Star className="w-4 h-4 text-[#0f62fe] fill-[#0f62fe]" />}
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
                      {service.badge && <Star className="w-4 h-4 text-[#0f62fe] fill-[#0f62fe]" />}
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
                      {service.badge && <Star className="w-4 h-4 text-[#0f62fe] fill-[#0f62fe]" />}
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
