import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

interface AboutCategory {
  id: string;
  name: string;
  content: React.ReactNode;
}

// Infrastructure services with Network Operations included
const infrastructureServices = [
  { id: 'server-continuity', title: 'Server Continuity', description: 'Ensure business continuity with robust server management and disaster recovery solutions.', link: '/services/server-continuity' },
  { id: 'hardware-support', title: 'Hardware Support', description: 'Save 60% vs. vendor support contracts with our comprehensive hardware maintenance.', link: '/services/hardware-support' },
  { id: 'sla-support', title: '24×7 SLA Support', description: 'Guaranteed response times with 24/7 coverage for critical infrastructure.', link: '/services/sla-support' },
];

const networkOperationsServices = [
  { id: 'cross-domain-automation', title: 'Cross-Domain Automation', description: 'Automate correlation of alarms across telecom domains.', link: '/services/cross-domain-automation' },
  { id: 'network-monitoring', title: 'Network Monitoring', description: 'Real-time visibility and performance optimisation for network infrastructure.', link: '/services/network-monitoring' },
];

const dataCentreServices = [
  { id: 'cost-optimisation', title: 'Cost Optimisation', description: 'Cost reduction and ROI across data centre power, cooling and physical infrastructure.', link: '/infrastructure/data-centre-services/cost-optimisation' },
  { id: 'cooling', title: 'Cooling Management', description: 'Precision cooling from hardware supply to 24/7 managed thermal continuity.', link: '/infrastructure/data-centre-services/cooling' },
  { id: 'power-ups', title: 'Power & UPS Solutions', description: 'UPS systems, power distribution, and backup power for critical infrastructure.', link: '/infrastructure/data-centre-services/power-ups' },
  { id: 'rack-cabinets', title: 'Rack & Cabinet Solutions', description: 'Server cabinets, acoustic racks, and outdoor enclosures.', link: '/infrastructure/data-centre-services/rack-cabinets' },
  { id: 'monitoring', title: 'Monitoring', description: 'Temperature, humidity, leak detection, and IoT sensor networks.', link: '/infrastructure/data-centre-services/monitoring' },
  { id: 'migration-relocation', title: 'Migration & Relocation Services', description: 'Zero-downtime server relocation and data centre migration.', link: '/infrastructure/data-centre-services/migration-relocation' },
  { id: 'maintenance-support', title: 'Maintenance & Support Contracts', description: 'SLA-backed maintenance, spare parts, and 24/7 technical support.', link: '/infrastructure/data-centre-services/maintenance-support' },
];

interface NavigationProps {
  activeMegaMenu?: string | null;
  setActiveMegaMenu?: (menu: string | null) => void;
  variant?: "light" | "dark";
}

const Navigation = ({ activeMegaMenu: externalActiveMegaMenu, setActiveMegaMenu: externalSetActiveMegaMenu, variant = "light" }: NavigationProps = {}) => {
  const isDark = variant === "dark";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [internalActiveMegaMenu, setInternalActiveMegaMenu] = useState<string | null>(null);
  const [showHighlightBar, setShowHighlightBar] = useState(variant === "light");
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


  const [activeDataItem, setActiveDataItem] = useState<string>('iot-analytics');
  const [activeAIItem, setActiveAIItem] = useState<string>('mlops');
  const [activePlatformItem, setActivePlatformItem] = useState<string>('servicenow');
  const [mobileActiveTab, setMobileActiveTab] = useState<string>('consultancy');
  const [, setMobileExpandedCategory] = useState<string | null>(null);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  // Close mega menu on route changes
  useEffect(() => {
    setActiveMegaMenu(null);
    setIsClosing(false);
  }, [location, setActiveMegaMenu]);

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

  // Continuously update dropdown position while mega menu is open or closing to prevent detachment during scroll/transitions
  useEffect(() => {
    if ((!activeMegaMenu && !isClosing) || !navRef.current) return;
    let rafId: number;
    const update = () => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        document.documentElement.style.setProperty('--nav-bottom', `${rect.bottom}px`);
      }
      rafId = requestAnimationFrame(update);
    };
    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, [activeMegaMenu, isClosing]);

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
    }, 350);
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


  // Mobile tabs - updated for new structure
  const mobileTabs = [
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
        <div className="fixed top-0 left-0 right-0 z-[80] bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-2 flex items-center justify-center gap-2 text-sm">
            <span className="px-2 py-0.5 bg-blue-500 text-white text-xs font-bold rounded">NEW</span>
            <Link to="/services" className="hover:underline">AI Accelerator - Deploy AI in 90 days</Link>
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
      <nav ref={navRef} className={`fixed left-0 right-0 z-[70] transition-[background-color,backdrop-filter,box-shadow,border-color] duration-300 ${showHighlightBar ? 'top-[36px]' : 'top-0'} ${isDark ? (isScrolled ? 'bg-[#161616]/95 border-b border-gray-800' : 'bg-[#161616] border-b border-transparent') : (isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-white border-b border-transparent')}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 sm:px-6 lg:px-8 relative">
          <div className="flex items-center h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center group flex-shrink-0">
              <img src="/logos/PIT/logo-icon-black.png" alt="Perception IT" className="h-8 w-auto" />
            </Link>

            <div className="hidden lg:flex items-center ml-8" ref={megaMenuRef}>
              

              {/* CONSULTANCY - Hybrid Style */}
              <div 
                className="relative" 
                onMouseEnter={() => handleMouseEnter('consultancy')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  onClick={() => setActiveMegaMenu(null)}
                  className={`flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-all mx-1 ${activeMegaMenu === 'consultancy' ? isDark ? 'text-white bg-transparent border-2 border-white' : 'text-[#0f62fe] bg-white border-2 border-[#0f62fe]' : isDark ? 'text-white hover:text-white hover:bg-white/10' : 'text-[#161616] hover:text-[#0f62fe] hover:bg-[#f4f4f4]/50'}`}
                >
                  Consultancy
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeMegaMenu === 'consultancy' ? 'rotate-90' : ''}`} />
                </button>
                
                {activeMegaMenu === 'consultancy' && (
                  <div className={`fixed left-0 right-0 z-[100] transition-opacity transition-transform duration-200 ease-out ${isClosing ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}`} style={{ top: 'var(--nav-bottom)' }} onMouseEnter={() => { if (closeTimerRef.current) { clearTimeout(closeTimerRef.current); closeTimerRef.current = null; } }}>
                    <div className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] w-full max-h-[calc(100vh-80px)] overflow-y-auto relative">
                      {/* Floating Close Button */}
                      <button 
                        onClick={() => setActiveMegaMenu(null)}
                        className="absolute top-4 right-4 z-10 p-2 bg-[#e0e0e0] hover:bg-[#161616] transition-colors group"
                        aria-label="Close menu"
                      >
                        <X className="w-5 h-5 text-[#161616] group-hover:text-white transition-colors" />
                      </button>
                      
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
              <div 
                className="relative" 
                onMouseEnter={() => handleMouseEnter('cloud')}
                onMouseLeave={handleMouseLeave}
              >
                <Link 
                  to="/services/cloud"
                  onClick={() => setActiveMegaMenu(null)}
                  className={`flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-all mx-1 ${activeMegaMenu === 'cloud' ? isDark ? 'text-white bg-transparent border-2 border-white' : 'text-[#0f62fe] bg-white border-2 border-[#0f62fe]' : isDark ? 'text-white hover:text-white hover:bg-white/10' : 'text-[#161616] hover:text-[#0f62fe] hover:bg-[#f4f4f4]/50'}`}
                >
                  Cloud
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeMegaMenu === 'cloud' ? 'rotate-90' : ''}`} />
                </Link>
                
                {activeMegaMenu === 'cloud' && cloudCategory && (
                  <div className={`fixed left-0 right-0 z-[100] transition-opacity transition-transform duration-200 ease-out ${isClosing ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}`} style={{ top: 'var(--nav-bottom)' }} onMouseEnter={() => { if (closeTimerRef.current) { clearTimeout(closeTimerRef.current); closeTimerRef.current = null; } }}>
                    <div className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] w-full max-h-[calc(100vh-80px)] overflow-y-auto relative">
                      {/* Floating Close Button */}
                      <button 
                        onClick={() => setActiveMegaMenu(null)}
                        className="absolute top-4 right-4 z-10 p-2 bg-[#e0e0e0] hover:bg-[#161616] transition-colors group"
                        aria-label="Close menu"
                      >
                        <X className="w-5 h-5 text-[#161616] group-hover:text-white transition-colors" />
                      </button>
                      
                      {/* Content - Three Panel Layout */}
                      <div className="max-w-6xl mx-auto flex pb-8">
                        {/* Left Rail */}
                        <div className="w-[240px] bg-white p-4 flex-shrink-0 border-r border-[#e0e0e0]">
                          <div className="space-y-1 max-h-[calc(100vh-180px)] overflow-y-auto pr-1">
                            <Link 
                              to="/services/cloud"
                              onClick={() => handleCategoryClick()}
                              onMouseEnter={() => setActiveServiceByCategory(prev => ({ ...prev, cloud: cloudCategory.hubs?.[0]?.id ?? '' }))}
                              className="block w-full text-left px-3 py-2 text-sm font-semibold text-[#0f62fe] hover:text-[#0353e9] hover:bg-[#f4f4f4] transition-colors border-l-2 border-transparent"
                            >
                              Cloud Services
                            </Link>
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
                                      : hub.badge === 'POPULAR'
                                        ? 'bg-[#edf5ff] text-[#161616] hover:bg-[#dbeaff] border-transparent'
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
              <div 
                className="relative" 
                onMouseEnter={() => handleMouseEnter('infrastructure')}
                onMouseLeave={handleMouseLeave}
              >
                <Link 
                  to="/services/infrastructure"
                  onClick={() => setActiveMegaMenu(null)}
                  className={`flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-all mx-1 ${activeMegaMenu === 'infrastructure' ? isDark ? 'text-white bg-transparent border-2 border-white' : 'text-[#0f62fe] bg-white border-2 border-[#0f62fe]' : isDark ? 'text-white hover:text-white hover:bg-white/10' : 'text-[#161616] hover:text-[#0f62fe] hover:bg-[#f4f4f4]/50'}`}
                >
                  Infrastructure
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeMegaMenu === 'infrastructure' ? 'rotate-90' : ''}`} />
                </Link>
                
                {activeMegaMenu === 'infrastructure' && (
                  <div className={`fixed left-0 right-0 z-[100] transition-opacity transition-transform duration-200 ease-out ${isClosing ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}`} style={{ top: 'var(--nav-bottom)' }} onMouseEnter={() => { if (closeTimerRef.current) { clearTimeout(closeTimerRef.current); closeTimerRef.current = null; } }}>
                    <div className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] w-full max-h-[calc(100vh-80px)] overflow-y-auto relative">
                      {/* Floating Close Button */}
                      <button 
                        onClick={() => setActiveMegaMenu(null)}
                        className="absolute top-4 right-4 z-10 p-2 bg-[#e0e0e0] hover:bg-[#161616] transition-colors group"
                        aria-label="Close menu"
                      >
                        <X className="w-5 h-5 text-[#161616] group-hover:text-white transition-colors" />
                      </button>
                      
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
                            {/* Category heading */}
                            <div className="px-3 pt-3 pb-1">
                              <span className="text-[10px] font-semibold text-[#0f62fe] uppercase tracking-wider">Service Groups</span>
                            </div>
                            <Link 
                              to="/services/network-operations"
                              onMouseEnter={() => setActiveInfrastructureItem('network-operations')}
                              onClick={() => handleCategoryClick()}
                              className={`block w-full text-left px-3 py-2 text-sm transition-all border-l-2 ${
                                activeInfrastructureItem === 'network-operations'
                                  ? 'bg-[#f4f4f4] text-[#161616] border-[#0f62fe]' 
                                  : 'text-[#161616] hover:bg-[#f4f4f4] border-transparent'
                              }`}
                            >
                              <span className="font-semibold">Network Operations</span>
                              <span className="block text-[11px] text-[#525252] font-normal mt-0.5">2 sub-services</span>
                            </Link>
                            <Link 
                              to="/infrastructure/data-centre-services"
                              onMouseEnter={() => setActiveInfrastructureItem('data-centre-services')}
                              onClick={() => handleCategoryClick()}
                              className={`block w-full text-left px-3 py-2 text-sm transition-all border-l-2 ${
                                activeInfrastructureItem === 'data-centre-services'
                                  ? 'bg-[#f4f4f4] text-[#161616] border-[#0f62fe]' 
                                  : 'text-[#161616] hover:bg-[#f4f4f4] border-transparent'
                              }`}
                            >
                              <span className="font-semibold">Data Centre Services</span>
                              <span className="block text-[11px] text-[#525252] font-normal mt-0.5">{dataCentreServices.length} sub-services</span>
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
                          ) : activeInfrastructureItem === 'data-centre-services' ? (
                            <>
                              {/* Category Header — visually dominant */}
                              <div className="mb-5 pb-5 border-b border-[#e0e0e0]">
                                <span className="inline-block px-2 py-0.5 bg-[#0f62fe]/10 text-[#0f62fe] text-[10px] font-semibold uppercase tracking-wider rounded mb-2">
                                  Service Group
                                </span>
                                <Link 
                                  to="/infrastructure/data-centre-services"
                                  onClick={() => handleCategoryClick()}
                                  className="group flex items-center gap-2 text-base font-semibold text-[#161616] mb-1 hover:text-[#0f62fe] transition-colors"
                                >
                                  Data Centre Services
                                  <ArrowRight className="w-4 h-4 text-[#8d8d8d] group-hover:text-[#0f62fe] transition-colors" />
                                </Link>
                                <p className="text-sm text-[#525252] leading-relaxed">Comprehensive data centre infrastructure, engineered for Pakistan&apos;s climate and grid reality.</p>
                              </div>
                              
                              {/* Sub-services Grid */}
                              <div className="flex items-center justify-between mb-3">
                                <p className="text-[11px] font-semibold text-[#6f6f6f] uppercase tracking-[0.16px]">Sub-services</p>
                                <span className="text-[11px] text-[#a8a8a8]">{dataCentreServices.length} pages</span>
                              </div>
                              <div className="grid grid-cols-2 gap-2 mb-6">
                                {dataCentreServices.map((service) => (
                                  <Link 
                                    key={service.id}
                                    to={service.link}
                                    onClick={() => handleCategoryClick()}
                                    className="group px-3 py-2.5 bg-[#f4f4f4] text-[13px] text-[#161616] hover:bg-[#e8e8e8] hover:text-[#0f62fe] transition-colors rounded-sm border border-transparent hover:border-[#0f62fe]/20"
                                  >
                                    <span className="font-medium block leading-tight">{service.title}</span>
                                    <span className="text-[11px] text-[#525252] group-hover:text-[#0f62fe] leading-tight block mt-0.5 line-clamp-2">{service.description}</span>
                                  </Link>
                                ))}
                              </div>
                              
                              {/* CTA */}
                              <a href="#contact" onClick={() => setActiveMegaMenu(null)} className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0f62fe] text-white text-sm font-semibold hover:bg-[#0353e9] transition-colors">
                                Talk to a Data Centre Expert <ArrowRight className="w-4 h-4" />
                              </a>
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
                          {activeInfrastructureItem === 'data-centre-services' ? (
                            <>
                              <div className="pl-4 pr-0 py-0 border-l-2 border-[#cf0a2c]">
                                <p className="text-[11px] font-semibold text-[#cf0a2c] uppercase tracking-[0.16px] mb-3">Huawei Partner Product</p>
                                <h4 className="text-sm font-semibold text-[#161616] mb-2">FusionCol8000-E</h4>
                                <p className="text-[11px] text-[#525252] mb-1 leading-relaxed font-medium">Indirect Evaporative Cooling</p>
                                <p className="text-xs text-[#525252] mb-4 leading-relaxed">For public cloud, large colo DCs, IDCs, and medium- to large-sized data centres of carriers, enterprises, governments, and financial institutions.</p>
                                <a href="#contact" onClick={() => setActiveMegaMenu(null)} className="inline-flex items-center gap-2 px-4 py-2 bg-[#cf0a2c] text-white text-xs font-semibold hover:bg-[#a80a20] transition-colors">
                                  Enquire About FusionCol8000-E <ArrowRight className="w-3 h-3" />
                                </a>
                              </div>
                            </>
                          ) : (
                            <>
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
                            </>
                          )}
                        </div>
                      </div>
                      
                    </div>
                  </div>
                )}
              </div>

              {/* DATA AND ANALYTICS - Full Width Two Panel */}
              <div 
                className="relative" 
                onMouseEnter={() => handleMouseEnter('data')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  onClick={() => setActiveMegaMenu(null)}
                  className={`flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-all mx-1 ${activeMegaMenu === 'data' ? isDark ? 'text-white bg-transparent border-2 border-white' : 'text-[#0f62fe] bg-white border-2 border-[#0f62fe]' : isDark ? 'text-white hover:text-white hover:bg-white/10' : 'text-[#161616] hover:text-[#0f62fe] hover:bg-[#f4f4f4]/50'}`}
                >
                  Data and Analytics
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeMegaMenu === 'data' ? 'rotate-90' : ''}`} />
                </button>
                
                {activeMegaMenu === 'data' && (
                  <div className={`fixed left-0 right-0 z-[100] transition-opacity transition-transform duration-200 ease-out ${isClosing ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}`} style={{ top: 'var(--nav-bottom)' }} onMouseEnter={() => { if (closeTimerRef.current) { clearTimeout(closeTimerRef.current); closeTimerRef.current = null; } }}>
                    <div className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] w-full max-h-[calc(100vh-80px)] overflow-y-auto relative">
                      {/* Floating Close Button */}
                      <button 
                        onClick={() => setActiveMegaMenu(null)}
                        className="absolute top-4 right-4 z-10 p-2 bg-[#e0e0e0] hover:bg-[#161616] transition-colors group"
                        aria-label="Close menu"
                      >
                        <X className="w-5 h-5 text-[#161616] group-hover:text-white transition-colors" />
                      </button>
                      
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
                            <h4 className="text-sm font-semibold text-[#161616] mb-3">IoT Analytics Platform - African Telecom</h4>
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
              <div 
                className="relative" 
                onMouseEnter={() => handleMouseEnter('ai')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  onClick={() => setActiveMegaMenu(null)}
                  className={`flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-all mx-1 ${activeMegaMenu === 'ai' ? isDark ? 'text-white bg-transparent border-2 border-white' : 'text-[#0f62fe] bg-white border-2 border-[#0f62fe]' : isDark ? 'text-white hover:text-white hover:bg-white/10' : 'text-[#161616] hover:text-[#0f62fe] hover:bg-[#f4f4f4]/50'}`}
                >
                  AI
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeMegaMenu === 'ai' ? 'rotate-90' : ''}`} />
                </button>
                
                {activeMegaMenu === 'ai' && (
                  <div className={`fixed left-0 right-0 z-[100] transition-opacity transition-transform duration-200 ease-out ${isClosing ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}`} style={{ top: 'var(--nav-bottom)' }} onMouseEnter={() => { if (closeTimerRef.current) { clearTimeout(closeTimerRef.current); closeTimerRef.current = null; } }}>
                    <div className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] w-full max-h-[calc(100vh-80px)] overflow-y-auto relative">
                      {/* Floating Close Button */}
                      <button 
                        onClick={() => setActiveMegaMenu(null)}
                        className="absolute top-4 right-4 z-10 p-2 bg-[#e0e0e0] hover:bg-[#161616] transition-colors group"
                        aria-label="Close menu"
                      >
                        <X className="w-5 h-5 text-[#161616] group-hover:text-white transition-colors" />
                      </button>
                      
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
              <div 
                className="relative" 
                onMouseEnter={() => handleMouseEnter('platforms')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  onClick={() => setActiveMegaMenu(null)}
                  className={`flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-all mx-1 ${activeMegaMenu === 'platforms' ? isDark ? 'text-white bg-transparent border-2 border-white' : 'text-[#0f62fe] bg-white border-2 border-[#0f62fe]' : isDark ? 'text-white hover:text-white hover:bg-white/10' : 'text-[#161616] hover:text-[#0f62fe] hover:bg-[#f4f4f4]/50'}`}
                >
                  IT Platforms
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeMegaMenu === 'platforms' ? 'rotate-90' : ''}`} />
                </button>
                
                {activeMegaMenu === 'platforms' && (
                  <div className={`fixed left-0 right-0 z-[100] transition-opacity transition-transform duration-200 ease-out ${isClosing ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}`} style={{ top: 'var(--nav-bottom)' }} onMouseEnter={() => { if (closeTimerRef.current) { clearTimeout(closeTimerRef.current); closeTimerRef.current = null; } }}>
                    <div className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] w-full max-h-[calc(100vh-80px)] overflow-y-auto relative">
                      {/* Floating Close Button */}
                      <button 
                        onClick={() => setActiveMegaMenu(null)}
                        className="absolute top-4 right-4 z-10 p-2 bg-[#e0e0e0] hover:bg-[#161616] transition-colors group"
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
                            <h4 className="text-sm font-bold text-[#0f62fe] mb-3">ServiceNow ITSM Transformation - African Telecom</h4>
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
              <div className="relative">
                <Link
                  to="/projects"
                  className={`flex items-center px-3 py-2 text-[13px] font-medium transition-all mx-1 ${isDark ? "text-white hover:text-white hover:bg-white/10" : "text-[#161616] hover:text-[#0f62fe] hover:bg-[#f4f4f4]/50"}`}
                >
                  Projects
                </Link>
              </div>

              {/* ABOUT - Hybrid Style */}
              <div 
                className="relative" 
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  onClick={() => setActiveMegaMenu(null)}
                  className={`flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-all mx-1 ${activeMegaMenu === 'about' ? isDark ? 'text-white bg-transparent border-2 border-white' : 'text-[#0f62fe] bg-white border-2 border-[#0f62fe]' : isDark ? 'text-white hover:text-white hover:bg-white/10' : 'text-[#161616] hover:text-[#0f62fe] hover:bg-[#f4f4f4]/50'}`}
                >
                  About
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeMegaMenu === 'about' ? 'rotate-90' : ''}`} />
                </button>
                {activeMegaMenu === 'about' && (
                  <div className={`fixed left-0 right-0 z-[100] transition-opacity transition-transform duration-200 ease-out ${isClosing ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}`} style={{ top: 'var(--nav-bottom)' }} onMouseEnter={() => { if (closeTimerRef.current) { clearTimeout(closeTimerRef.current); closeTimerRef.current = null; } }}>
                    <div className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] w-full max-h-[calc(100vh-80px)] overflow-y-auto relative">
                      {/* Floating Close Button */}
                      <button 
                        onClick={() => setActiveMegaMenu(null)}
                        className="absolute top-4 right-4 z-10 p-2 bg-[#e0e0e0] hover:bg-[#161616] transition-colors group"
                        aria-label="Close menu"
                      >
                        <X className="w-5 h-5 text-[#161616] group-hover:text-white transition-colors" />
                      </button>
                      
                      {/* Content - Three Panel Layout */}
                      <div className="max-w-6xl mx-auto flex pb-8">
                        {/* Left Rail - Only Company Overview */}
                        <div className="w-[240px] bg-white p-4 flex-shrink-0 border-r border-[#e0e0e0]">
                          <div className="space-y-1">
                            <Link 
                              to="/about"
                              onClick={() => handleCategoryClick()}
                              className="block w-full text-left px-3 py-2 text-sm transition-all border-l-2 bg-[#f4f4f4] text-[#161616] border-[#0f62fe] font-semibold"
                            >
                              <span className="font-normal">Company Overview</span>
                            </Link>
                            <div className="border-t border-[#e0e0e0] my-2" />
                            <Link to="/projects" className="block px-3 py-2 text-sm font-semibold text-[#0f62fe] hover:text-[#0353e9] hover:bg-[#f4f4f4] transition-colors" onClick={() => setActiveMegaMenu(null)}>Projects</Link>
                            <Link to="/contact" className="block px-3 py-2 text-sm font-semibold text-[#0f62fe] hover:text-[#0353e9] hover:bg-[#f4f4f4] transition-colors" onClick={() => setActiveMegaMenu(null)}>Contact Us</Link>
                          </div>
                        </div>
                        
                        {/* Middle - Company Overview Content */}
                        <div className="flex-1 p-6 bg-white">
                          <Link to="/about" onClick={() => setActiveMegaMenu(null)} className="group flex items-center gap-2 text-sm font-semibold text-[#161616] mb-2 hover:text-[#0f62fe] transition-colors">
                            Company Overview
                            <ArrowRight className="w-4 h-4 text-[#8d8d8d] group-hover:text-[#0f62fe] transition-colors" />
                          </Link>
                          <div className="text-sm text-[#525252] mb-6">
                            <p className="mb-4">Perception IT is your trusted partner from hardware to cloud, delivering enterprise-grade solutions across Pakistan, UK, and GCC markets.</p>
                            <div className="grid grid-cols-2 gap-4 mb-4">
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
                          
                          {/* CTA */}
                          <a href="#contact" onClick={() => setActiveMegaMenu(null)} className="inline-flex items-center gap-2 px-4 py-3 bg-[#0f62fe] text-white text-sm font-semibold hover:bg-[#0353e9] transition-colors">
                            Start Your Project - Contact Us <ArrowRight className="w-4 h-4" />
                          </a>
                          <div className="h-8" />
                        </div>
                        
                        {/* Right Rail - Includes & Success Stats */}
                        <div className="w-[280px] bg-white pt-6 pr-6 pb-6 flex-shrink-0">
                          {/* Includes Section */}
                          <div className="pl-4 pr-0 py-0 border-l-2 border-[#0f62fe] mb-8">
                            <p className="text-[11px] font-medium text-[#6f6f6f] uppercase tracking-[0.16px] mb-3">Includes</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              <Link to="/about" onClick={() => setActiveMegaMenu(null)} className="px-2 py-0.5 border border-[#e0e0e0] text-[#525252] text-xs font-medium rounded-full hover:border-[#0f62fe] hover:text-[#0f62fe] transition-colors">Our Approach</Link>
                              <Link to="/about" onClick={() => setActiveMegaMenu(null)} className="px-2 py-0.5 border border-[#e0e0e0] text-[#525252] text-xs font-medium rounded-full hover:border-[#0f62fe] hover:text-[#0f62fe] transition-colors">Leadership Team</Link>
                            </div>
                          </div>
                          
                          {/* Success Stats */}
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

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`lg:hidden p-2 ${isDark ? "text-white" : "text-[#161616]"}`}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Background Overlay for Mega Menus */}
      {activeMegaMenu && (
        <div 
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] transition-opacity duration-200 ${showHighlightBar ? 'top-[84px]' : 'top-[48px]'}`}
          onClick={() => setActiveMegaMenu(null)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`fixed inset-0 z-[100] lg:hidden bg-white ${showHighlightBar ? 'top-[84px]' : 'top-[48px]'}`}>
          <div className="flex items-center justify-between px-4 h-16 border-b border-gray-100">
            <Link to="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
              <img src="/logos/PIT/logo-icon-black.png" alt="Perception IT" className="h-8 w-auto" />
            </Link>
            <button onClick={() => setIsMobileMenuOpen(false)} className={`p-2 ${isDark ? "text-white" : "text-[#161616]"}`}><X className="w-6 h-6" /></button>
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
                <Link 
                  to="/services/cloud" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-4 bg-[#edf5ff] rounded-lg text-[#0f62fe] font-semibold"
                >
                  Cloud Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
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
                <p className="text-sm text-[#525252]">Hardware support, data centre services, and 24×7 SLA support</p>
                <div className="space-y-3">
                  {/* Individual Services */}
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

                  {/* Network Operations — Category Group */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="p-4 bg-slate-50">
                      <span className="inline-block px-2 py-0.5 bg-[#0f62fe]/10 text-[#0f62fe] text-[10px] font-semibold uppercase tracking-wider rounded mb-1.5">
                        Service Group
                      </span>
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

                  {/* Data Centre Services — Category Group */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="p-4 bg-slate-50">
                      <span className="inline-block px-2 py-0.5 bg-[#0f62fe]/10 text-[#0f62fe] text-[10px] font-semibold uppercase tracking-wider rounded mb-1.5">
                        Service Group · {dataCentreServices.length} services
                      </span>
                      <h3 className="font-semibold text-[#161616]">Data Centre Services</h3>
                      <p className="text-sm text-[#525252] mt-1">Comprehensive data centre infrastructure for Pakistan&apos;s climate and grid reality</p>
                    </div>
                    <div className="p-2 space-y-1">
                      {dataCentreServices.map((service) => (
                        <a 
                          key={service.id}
                          href={service.link} 
                          className="block p-3 hover:bg-slate-50 rounded-lg"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span className="text-[13px] font-medium text-[#161616]">{service.title}</span>
                          <span className="block text-[11px] text-[#525252] mt-0.5">{service.description}</span>
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
