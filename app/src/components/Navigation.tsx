import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, ChevronRight, ArrowRight, MessageCircle,
  Cloud, Server, LayoutGrid, PieChart, Bell, Calendar, BarChart3, Lightbulb,
  GitBranch, ShieldCheck, FileCode, Hexagon, Layers, Grid3x3, Eye, ScrollText, BellRing
} from 'lucide-react';
import {
  serviceCategories,
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

// Infrastructure and service data can be added here as needed

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
    console.log('Mouse enter:', menu);
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    if (menu === 'cloud') setActiveCategory('cloud');
    setActiveMegaMenu(menu);
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

  // About categories can be expanded here for mega menu content

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
      {/* Highlight Bar - Carbon UI Shell Header Style */}
      {showHighlightBar && (
        <div className="fixed top-0 left-0 right-0 z-[60]" style={{ backgroundColor: '#161616' }}>
          <div className="cds--css-grid" style={{ paddingTop: 'var(--cds-spacing-03)', paddingBottom: 'var(--cds-spacing-03)' }}>
            <div className="cds--col-span-16 cds--col-span-16--lg flex items-center justify-center gap-2">
              <span className="cds--tag cds--tag--blue">NEW</span>
              <Link to="/services" style={{ color: '#ffffff' }} className="cds--body-compact-01 hover:underline">AI Accelerator — Deploy AI in 90 days</Link>
              <button 
                onClick={() => setShowHighlightBar(false)} 
                className="cds--btn cds--btn--ghost"
                style={{ padding: 'var(--cds-spacing-02)', color: '#a8a8a8' }}
                aria-label="Dismiss highlight"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation - Carbon Header Style */}
      <nav 
        className={`fixed left-0 right-0 z-50 transition-all duration-150 ${showHighlightBar ? 'top-[36px]' : 'top-0'}`}
        style={{ 
          backgroundColor: isScrolled ? '#ffffff' : '#ffffff',
          borderBottom: isScrolled ? '1px solid #e0e0e0' : '1px solid transparent',
          boxShadow: isScrolled ? '0 2px 6px rgba(0,0,0,0.1)' : 'none'
        }}
      >
        <div className="cds--css-grid" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className="cds--col-span-16 cds--col-span-16--lg flex items-center" style={{ height: '64px' }}>
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0" style={{ marginRight: 'var(--cds-spacing-07)' }}>
              <img src="/logo_icon.png" alt="Perception IT" style={{ height: '32px', width: 'auto' }} />
            </Link>

            <div className="hidden lg:flex items-center" ref={megaMenuRef} style={{ gap: 'var(--cds-spacing-02)', flex: 1, overflow: 'visible' }}>
              
              {/* SOLUTIONS */}
              <div 
                className="relative" 
                onMouseEnter={() => handleMouseEnter('solutions')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className="cds--header__menu-item"
                  style={{ 
                    color: activeMegaMenu === 'solutions' ? 'var(--cds-link-primary)' : 'var(--cds-text-primary)',
                    fontWeight: 400,
                    fontSize: '0.875rem',
                    letterSpacing: '0.16px'
                  }}
                >
                  Solutions
                  <ChevronRight className="w-4 h-4" style={{ transform: activeMegaMenu === 'solutions' ? 'rotate(90deg)' : 'none' }} />
                </button>
                {activeMegaMenu === 'solutions' && (
                  <div className="fixed left-0 right-0 z-30" style={{ top: showHighlightBar ? '100px' : '64px' }}>
                    <div className="absolute left-0 right-0 h-4" style={{ top: '-16px' }} />
                    <div style={{ backgroundColor: '#f4f4f4', borderBottom: '1px solid #e0e0e0', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                      {/* Header */}
                      <div style={{ backgroundColor: '#e5e5e5', borderBottom: '1px solid #c6c6c6' }}>
                        <div className="cds--css-grid" style={{ padding: 'var(--cds-spacing-05) var(--cds-spacing-07)' }}>
                          <div className="cds--col-span-16">
                            <h3 className="cds--heading-02" style={{ color: 'var(--cds-text-primary)' }}>Integrated Solutions</h3>
                            <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', marginTop: 'var(--cds-spacing-03)' }}>From Hardware to Cloud — One Partner, Complete Accountability</p>
                          </div>
                        </div>
                      </div>
                      {/* Content - 4 column grid */}
                      <div className="cds--css-grid" style={{ padding: 'var(--cds-spacing-06) var(--cds-spacing-07)' }}>
                        {solutions.map((solution) => (
                          <div key={solution.id} className="cds--col-span-4 cds--col-span-4--md">
                            <Link 
                              to={solution.link} 
                              className="cds--tile"
                              style={{ 
                                display: 'block',
                                backgroundColor: solution.featured ? '#edf5ff' : '#ffffff',
                                borderLeft: solution.featured ? '4px solid #0f62fe' : '4px solid transparent',
                                height: '100%'
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 'var(--cds-spacing-03)' }}>
                                <h4 className="cds--heading-01" style={{ color: 'var(--cds-text-primary)' }}>{solution.title}</h4>
                                {solution.featured && <span className="cds--tag cds--tag--blue">POPULAR</span>}
                              </div>
                              <p className="cds--label-01" style={{ color: 'var(--cds-link-primary)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-03)' }}>{solution.subtitle}</p>
                              <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', marginBottom: 'var(--cds-spacing-04)' }}>{solution.description}</p>
                              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--cds-spacing-02)' }}>
                                {solution.combines.map((item, i) => <span key={i} className="cds--tag">{item}</span>)}
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                      {/* Footer */}
                      <div style={{ backgroundColor: '#e5e5e5', borderTop: '1px solid #c6c6c6' }}>
                        <div className="cds--css-grid" style={{ padding: 'var(--cds-spacing-05) var(--cds-spacing-07)' }}>
                          <div className="cds--col-span-16">
                            <Link to="/#contact" className="cds--btn cds--btn--primary" style={{ width: '100%' }}>
                              Get Expert Advice — Schedule Free Consultation <ArrowRight className="w-5 h-5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* CONSULTANCY */}
              <div 
                className="relative" 
                onMouseEnter={() => handleMouseEnter('consultancy')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className="cds--header__menu-item"
                  style={{ 
                    color: activeMegaMenu === 'consultancy' ? 'var(--cds-link-primary)' : 'var(--cds-text-primary)',
                    fontWeight: 400,
                    fontSize: '0.875rem',
                    letterSpacing: '0.16px'
                  }}
                >
                  Consultancy
                  <ChevronRight className="w-4 h-4" style={{ transform: activeMegaMenu === 'consultancy' ? 'rotate(90deg)' : 'none' }} />
                </button>
                
                {activeMegaMenu === 'consultancy' && (
                  <div className="absolute left-0 top-full z-50" style={{ width: '480px' }}>
                    <div className="absolute left-0 right-0 h-2" style={{ top: '-8px' }} />
                    <div style={{ backgroundColor: '#f4f4f4', border: '1px solid #e0e0e0', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', marginTop: '8px' }}>
                      {/* Header */}
                      <div style={{ padding: 'var(--cds-spacing-04)', backgroundColor: '#e5e5e5', borderBottom: '1px solid #c6c6c6' }}>
                        <span className="cds--label-01" style={{ color: 'var(--cds-text-secondary)', textTransform: 'uppercase' }}>Consultancy Services</span>
                      </div>
                      
                      {/* Two Column Content */}
                      <div style={{ display: 'flex' }}>
                        {/* Left: Services */}
                        <div style={{ width: '50%', padding: 'var(--cds-spacing-04)', borderRight: '1px solid #e0e0e0' }}>
                          <p className="cds--label-01" style={{ color: 'var(--cds-text-secondary)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-04)' }}>Services</p>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--cds-spacing-02)' }}>
                            {['Cloud Strategy', 'Digital Transformation', 'IT Assessment', 'Technology Roadmap'].map((service) => (
                              <Link 
                                key={service}
                                to={`/services/${service.toLowerCase().replace(/ /g, '-')}`}
                                className="cds--header__menu-item"
                                style={{ justifyContent: 'flex-start' }}
                                onClick={() => setActiveMegaMenu(null)}
                              >
                                <span className="cds--body-compact-01">{service}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                        
                        {/* Right: Industries */}
                        <div style={{ width: '50%', padding: 'var(--cds-spacing-04)' }}>
                          <p className="cds--label-01" style={{ color: 'var(--cds-text-secondary)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-04)' }}>Industries</p>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--cds-spacing-02)' }}>
                            {['Telecommunications', 'Financial Services', 'Manufacturing', 'Real Estate'].map((industry) => (
                              <Link 
                                key={industry}
                                to={`/projects?industry=${industry.toLowerCase().replace(/ /g, '-')}`}
                                className="cds--header__menu-item"
                                style={{ justifyContent: 'flex-start' }}
                                onClick={() => setActiveMegaMenu(null)}
                              >
                                <span className="cds--body-compact-01">{industry}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Footer CTA */}
                      <div style={{ padding: 'var(--cds-spacing-04)', borderTop: '1px solid #e0e0e0' }}>
                        <Link to="/#contact" className="cds--btn cds--btn--primary" style={{ width: '100%' }}>
                          Book a Consultation <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* CLOUD */}
              <div 
                className="relative" 
                onMouseEnter={() => handleMouseEnter('cloud')}
                onMouseLeave={handleMouseLeave}
              >
                <Link 
                  to="/services/cloud"
                  className="cds--header__menu-item"
                  style={{ 
                    color: activeMegaMenu === 'cloud' ? 'var(--cds-link-primary)' : 'var(--cds-text-primary)',
                    fontWeight: 400,
                    fontSize: '0.875rem',
                    letterSpacing: '0.16px'
                  }}
                >
                  Cloud
                  <ChevronRight className="w-4 h-4" style={{ transform: activeMegaMenu === 'cloud' ? 'rotate(90deg)' : 'none' }} />
                </Link>
                
                {activeMegaMenu === 'cloud' && cloudCategory && (
                  <div className="fixed left-0 right-0 z-30" style={{ top: showHighlightBar ? '100px' : '64px' }}>
                    <div className="absolute left-0 right-0 h-4" style={{ top: '-16px' }} />
                    <div style={{ backgroundColor: '#f4f4f4', borderBottom: '1px solid #e0e0e0', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                      {/* Header */}
                      <div style={{ backgroundColor: '#e5e5e5', borderBottom: '1px solid #c6c6c6' }}>
                        <div className="cds--css-grid" style={{ padding: 'var(--cds-spacing-05) var(--cds-spacing-07)' }}>
                          <div className="cds--col-span-16">
                            <h3 className="cds--heading-02" style={{ color: 'var(--cds-text-primary)' }}>{cloudCategory.label}</h3>
                            <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', marginTop: 'var(--cds-spacing-03)' }}>{cloudCategory.description}</p>
                          </div>
                        </div>
                      </div>
                      {/* Content - 2 column layout */}
                      <div style={{ display: 'flex', minHeight: '400px' }}>
                        {/* Left Rail - 4 columns */}
                        <div style={{ width: '25%', backgroundColor: '#e5e5e5', padding: 'var(--cds-spacing-05)', borderRight: '1px solid #c6c6c6' }}>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--cds-spacing-02)' }}>
                            {cloudCategory.hubs?.map((hub) => {
                              const isActive = activeServiceByCategory['cloud'] === hub.id;
                              return (
                                <button 
                                  key={hub.id}
                                  onMouseEnter={() => setActiveServiceByCategory(prev => ({ ...prev, cloud: hub.id }))}
                                  className={`cds--header__menu-item ${isActive ? 'cds--header__menu-item--active' : ''}`}
                                  style={{ 
                                    backgroundColor: isActive ? '#0f62fe' : 'transparent',
                                    color: isActive ? '#ffffff' : 'var(--cds-text-primary)',
                                    justifyContent: 'space-between'
                                  }}
                                >
                                  <span className="cds--body-compact-01">{hub.title}</span>
                                  {hub.badge && (
                                    <span className="cds--tag" style={{ backgroundColor: isActive ? '#78a9ff' : '#0f62fe', color: '#ffffff' }}>
                                      {hub.badge}
                                    </span>
                                  )}
                                </button>
                              );
                            })}
                            <div style={{ borderTop: '1px solid #c6c6c6', margin: 'var(--cds-spacing-03) 0' }} />
                            <Link to="/services/cloud" className="cds--link inline-flex items-center gap-2">
                              View All Cloud Services <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link to="/projects/cloud" className="cds--link inline-flex items-center gap-2">
                              See Client Success Stories <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                        
                        {/* Right Content - 12 columns */}
                        <div style={{ width: '75%', padding: 'var(--cds-spacing-06)', backgroundColor: '#ffffff' }}>
                          {(() => {
                            const activeItem = getActiveItem('cloud');
                            if (!activeItem) return null;
                            
                            return (
                              <>
                                <div style={{ marginBottom: 'var(--cds-spacing-06)' }}>
                                  <a 
                                    href={`/services/${activeItem.id}`}
                                    className="cds--link"
                                    style={{ display: 'flex', alignItems: 'center', gap: 'var(--cds-spacing-03)', marginBottom: 'var(--cds-spacing-03)', paddingLeft: 'var(--cds-spacing-04)', borderLeft: '4px solid #0f62fe' }}
                                  >
                                    <span className="cds--heading-01">{activeItem.title}</span>
                                    <ArrowRight className="w-4 h-4" />
                                  </a>
                                  <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)' }}>{activeItem.description}</p>
                                </div>
                                
                                {'spokes' in activeItem && activeItem.spokes.length > 0 && (
                                  <div style={{ marginBottom: 'var(--cds-spacing-06)' }}>
                                    <h5 className="cds--label-01" style={{ color: 'var(--cds-text-secondary)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-04)' }}>Services</h5>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--cds-spacing-03)' }}>
                                      {activeItem.spokes.map((spoke) => {
                                        const IconComponent = iconMap[spoke.icon];
                                        return (
                                          <a 
                                            key={spoke.id}
                                            href={spoke.link}
                                            className="cds--tile"
                                            style={{ display: 'flex', alignItems: 'center', gap: 'var(--cds-spacing-03)' }}
                                          >
                                            {IconComponent && <div style={{ color: 'var(--cds-link-primary)' }}><IconComponent className="w-4 h-4" /></div>}
                                            <span className="cds--body-compact-01" style={{ color: 'var(--cds-link-primary)', flex: 1 }}>{spoke.title}</span>
                                            <ArrowRight className="w-4 h-4" />
                                          </a>
                                        );
                                      })}
                                    </div>
                                  </div>
                                )}
                                
                                {cloudCategory.caseStudies.find(s => s.featured) && (
                                  <div style={{ padding: 'var(--cds-spacing-05)', backgroundColor: '#edf5ff', border: '1px solid #c6c6c6' }}>
                                    <p className="cds--label-01" style={{ color: 'var(--cds-link-primary)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-03)' }}>Featured Case Study</p>
                                    {(() => {
                                      const featured = cloudCategory.caseStudies.find(s => s.featured)!;
                                      return (
                                        <>
                                          <h4 className="cds--heading-01" style={{ color: 'var(--cds-text-primary)', marginBottom: 'var(--cds-spacing-03)' }}>{featured.title}</h4>
                                          <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', marginBottom: 'var(--cds-spacing-04)' }}>{featured.description}</p>
                                          <Link to={`/projects/case-study/${featured.slug}`} className="cds--link inline-flex items-center gap-1">
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
                      <div style={{ backgroundColor: '#e5e5e5', borderTop: '1px solid #c6c6c6', padding: 'var(--cds-spacing-04) var(--cds-spacing-07)' }}>
                        <a href="#contact" className="cds--btn cds--btn--primary" style={{ width: '100%' }}>
                          Talk to an Expert <ArrowRight className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* More navigation items following Carbon patterns... */}
              {/* INFRASTRUCTURE */}
              <div 
                className="relative" 
                onMouseEnter={() => handleMouseEnter('infrastructure')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className="cds--header__menu-item"
                  style={{ 
                    color: activeMegaMenu === 'infrastructure' ? 'var(--cds-link-primary)' : 'var(--cds-text-primary)',
                    fontWeight: 400,
                    fontSize: '0.875rem',
                    letterSpacing: '0.16px'
                  }}
                >
                  Infrastructure
                  <ChevronRight className="w-4 h-4" style={{ transform: activeMegaMenu === 'infrastructure' ? 'rotate(90deg)' : 'none' }} />
                </button>
                
                {activeMegaMenu === 'infrastructure' && (
                  <div className="fixed left-0 right-0 z-30" style={{ top: showHighlightBar ? '100px' : '64px' }}>
                    <div className="absolute left-0 right-0 h-4" style={{ top: '-16px' }} />
                    <div style={{ backgroundColor: '#f4f4f4', borderBottom: '1px solid #e0e0e0', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                      <div className="cds--css-grid" style={{ paddingTop: 'var(--cds-spacing-06)', paddingBottom: 'var(--cds-spacing-06)' }}>
                        <div className="cds--col-span-16 cds--col-span-16--lg">
                          <h3 className="cds--heading-02" style={{ color: 'var(--cds-text-primary)' }}>Infrastructure</h3>
                          <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)' }}>Hardware support, data center services, and 24×7 SLA support</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* DATA AND ANALYTICS */}
              <div 
                className="relative" 
                onMouseEnter={() => handleMouseEnter('data')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className="cds--header__menu-item"
                  style={{ 
                    color: activeMegaMenu === 'data' ? 'var(--cds-link-primary)' : 'var(--cds-text-primary)',
                    fontWeight: 400,
                    fontSize: '0.875rem',
                    letterSpacing: '0.16px'
                  }}
                >
                  Data
                  <ChevronRight className="w-4 h-4" style={{ transform: activeMegaMenu === 'data' ? 'rotate(90deg)' : 'none' }} />
                </button>
              </div>

              {/* AI */}
              <div 
                className="relative" 
                onMouseEnter={() => handleMouseEnter('ai')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className="cds--header__menu-item"
                  style={{ 
                    color: activeMegaMenu === 'ai' ? 'var(--cds-link-primary)' : 'var(--cds-text-primary)',
                    fontWeight: 400,
                    fontSize: '0.875rem',
                    letterSpacing: '0.16px'
                  }}
                >
                  AI
                  <ChevronRight className="w-4 h-4" style={{ transform: activeMegaMenu === 'ai' ? 'rotate(90deg)' : 'none' }} />
                </button>
              </div>

              {/* IT PLATFORMS */}
              <div 
                className="relative" 
                onMouseEnter={() => handleMouseEnter('platforms')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className="cds--header__menu-item"
                  style={{ 
                    color: activeMegaMenu === 'platforms' ? 'var(--cds-link-primary)' : 'var(--cds-text-primary)',
                    fontWeight: 400,
                    fontSize: '0.875rem',
                    letterSpacing: '0.16px'
                  }}
                >
                  Platforms
                  <ChevronRight className="w-4 h-4" style={{ transform: activeMegaMenu === 'platforms' ? 'rotate(90deg)' : 'none' }} />
                </button>
              </div>

              {/* PROJECTS */}
              <div className="relative">
                <Link
                  to="/projects"
                  className="cds--header__menu-item"
                  style={{ 
                    color: 'var(--cds-text-primary)',
                    fontWeight: 400,
                    fontSize: '0.875rem',
                    letterSpacing: '0.16px'
                  }}
                >
                  Projects
                </Link>
              </div>

              {/* ABOUT */}
              <div 
                className="relative" 
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className="cds--header__menu-item"
                  style={{ 
                    color: activeMegaMenu === 'about' ? 'var(--cds-link-primary)' : 'var(--cds-text-primary)',
                    fontWeight: 400,
                    fontSize: '0.875rem',
                    letterSpacing: '0.16px'
                  }}
                >
                  About
                  <ChevronRight className="w-4 h-4" style={{ transform: activeMegaMenu === 'about' ? 'rotate(90deg)' : 'none' }} />
                </button>
                {activeMegaMenu === 'about' && (
                  <div className="fixed left-0 right-0 z-30" style={{ top: showHighlightBar ? '100px' : '64px' }}>
                    <div className="absolute left-0 right-0 h-4" style={{ top: '-16px' }} />
                    <div style={{ backgroundColor: '#f4f4f4', borderBottom: '1px solid #e0e0e0', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                      <div className="cds--css-grid" style={{ paddingTop: 'var(--cds-spacing-06)', paddingBottom: 'var(--cds-spacing-06)' }}>
                        <div className="cds--col-span-16 cds--col-span-16--lg">
                          <h3 className="cds--heading-02" style={{ color: 'var(--cds-text-primary)' }}>About Perception IT</h3>
                          <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)' }}>Your partner from hardware to cloud</p>
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
                  className="cds--btn cds--btn--primary"
                  style={{ borderRadius: '50%', width: '48px', height: '48px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <MessageCircle className="w-5 h-5" />
                </Link>
              </div>
            )}

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden" style={{ padding: 'var(--cds-spacing-03)', color: 'var(--cds-text-primary)' }}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Background Overlay for Mega Menus */}
      {activeMegaMenu && (
        <div 
          className="fixed inset-0 z-40 transition-opacity duration-200"
          style={{ 
            top: showHighlightBar ? '84px' : '48px', 
            backgroundColor: 'rgba(0,0,0,0.4)', 
            backdropFilter: 'blur(4px)' 
          }}
          onClick={() => setActiveMegaMenu(null)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" style={{ top: showHighlightBar ? '84px' : '48px', backgroundColor: '#ffffff' }}>
          <div className="cds--css-grid" style={{ paddingTop: 'var(--cds-spacing-04)', paddingBottom: 'var(--cds-spacing-04)', borderBottom: '1px solid #e0e0e0' }}>
            <div className="cds--col-span-16 flex items-center justify-between">
              <Link to="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                <img src="/logo_icon.png" alt="Perception IT" style={{ height: '32px', width: 'auto' }} />
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} style={{ padding: 'var(--cds-spacing-03)' }}>
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          {/* Mobile Content - Simplified for Carbon */}
          <div className="cds--css-grid" style={{ paddingTop: 'var(--cds-spacing-04)', height: 'calc(100vh - 180px)', overflowY: 'auto' }}>
            <div className="cds--col-span-16">
              {mobileTabs.map((tab) => (
                <Link
                  key={tab.id}
                  to={`/${tab.id}`}
                  className="cds--header__menu-item"
                  style={{ 
                    justifyContent: 'flex-start', 
                    padding: 'var(--cds-spacing-05) 0',
                    borderBottom: '1px solid #e0e0e0'
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="cds--body-02">{tab.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
