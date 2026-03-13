import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronRight, ArrowRight } from 'lucide-react';

interface ServiceItem {
  title: string;
  description: string;
  link: string;
}

interface ServiceCategory {
  id: string;
  name: string;
  link?: string;
  badge?: string;
  items: ServiceItem[];
}

interface InfrastructureCategory {
  id: string;
  name: string;
  items: ServiceItem[];
}

interface AboutCategory {
  id: string;
  name: string;
  content: React.ReactNode;
}

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('cloud-cost');
  const [activeInfraCategory, setActiveInfraCategory] = useState<string>('out-of-warranty');
  const [activeAboutCategory, setActiveAboutCategory] = useState<string>('company-overview');
  const megaMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setActiveMegaMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const serviceCategories: ServiceCategory[] = [
    {
      id: 'cloud-cost',
      name: 'Cloud & Cost Optimization',
      link: '/services/cloud-cost-optimization',
      items: [
        { title: 'Cloud Cost Optimization (FinOps)', description: 'Cut AWS/Azure bills by 40% without performance loss', link: '#services' },
        { title: 'Performance Optimization', description: '2x faster applications, 50% less infrastructure', link: '#services' },
        { title: 'Infrastructure Right-Sizing', description: 'Pay for what you use, not what you provisioned', link: '#services' },
      ]
    },
    {
      id: 'cloud-infra',
      name: 'Cloud Infrastructure & DevOps',
      items: [
        { title: 'Container Orchestration', description: 'Deploy 10x faster with zero downtime', link: '#services' },
        { title: 'Deployment Pipelines', description: 'From code commit to production in under 1 hour', link: '#services' },
        { title: 'Cloud Provisioning', description: 'New environments in minutes, not weeks', link: '#services' },
        { title: 'Cloud Migration', description: 'Zero-downtime migration with risk insurance', link: '#services' },
        { title: 'DevSecOps Integration', description: 'Security checks that don\'t slow down developers', link: '#services' },
      ]
    },
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      items: [
        { title: 'MLOps Development', description: 'From notebook to production pipeline', link: '#services' },
        { title: 'Deployment & Monitoring Services', description: 'Detect model drift before it costs you', link: '#services' },
        { title: 'MLOps Consulting & Strategy', description: 'Is your data ready for AI? Find out in 2 weeks', link: '#services' },
      ]
    },
    {
      id: 'ai-agents',
      name: 'AI Agents & Automation',
      badge: 'NEW',
      items: [
        { title: 'Agentic AI Development', description: 'Build autonomous AI agents that execute complex workflows end-to-end', link: '#services' },
        { title: 'Agent Orchestration & Governance', description: 'Manage multi-agent systems with oversight, security, and control', link: '#services' },
        { title: 'Intelligent Process Automation', description: 'Combine AI agents with RPA for self-healing, adaptive automation', link: '#services' },
      ]
    },
    {
      id: 'itsm',
      name: 'IT Service Management',
      items: [
        { title: 'ServiceNow Implementation', description: 'Go live in 8 weeks, not 8 months', link: '/service-now' },
        { title: 'IBM Maximo Asset Management', description: 'From reactive maintenance to predictive', link: '#services' },
        { title: 'Jira Service Management', description: 'Developer-friendly ITSM that actually gets used', link: '#services' },
        { title: 'Digitised ITSM Processes', description: 'Self-service that deflects 60% of tickets', link: '#services' },
        { title: 'IT Service Automation', description: 'Automate the routine, focus on the strategic', link: '#services' },
      ]
    },
    {
      id: 'managed',
      name: 'Managed IT Services',
      items: [
        { title: 'Total Care', description: 'Your entire IT function, managed for fixed monthly fee', link: '#services' },
        { title: 'Service Desk', description: '95% first-call resolution, 24/7 coverage', link: '#services' },
        { title: 'Consultancy', description: 'Enterprise-grade strategy without enterprise overhead', link: '#services' },
        { title: 'AIOps', description: 'AI that predicts failures before they happen', link: '#services' },
        { title: 'Managed Kubernetes', description: 'Expert operations without hiring 3 SREs', link: '#services' },
        { title: 'Managed Cloud Services', description: '24/7 cloud ops at 40% less than in-house', link: '#services' },
        { title: 'Infrastructure Support', description: 'From break-fix to predictive maintenance', link: '#services' },
      ]
    },
    {
      id: 'monitoring',
      name: 'Monitoring & Observability',
      items: [
        { title: 'Network Operations', description: 'See every packet, fix issues before users notice', link: '#services' },
        { title: 'Server and Storage Monitoring', description: 'Predict hardware failures 2 weeks early', link: '#services' },
        { title: 'Application Performance', description: 'Slow app? We find why in 5 minutes', link: '#services' },
        { title: 'Transaction Monitoring', description: 'Know when checkout breaks before customers do', link: '#services' },
        { title: 'Logfile', description: 'Turn log noise into security signals', link: '#services' },
        { title: 'Cloud Observability', description: 'Container and serverless visibility that scales', link: '#services' },
        { title: 'Pipeline Monitoring', description: 'Failed deployment? Know in seconds, not hours', link: '#services' },
        { title: 'Data Observability', description: 'Bad data detected before it hits the dashboard', link: '#services' },
        { title: 'Database and Middleware', description: 'Slow queries identified and optimized automatically', link: '#services' },
        { title: 'Integrations', description: 'One dashboard for all your tools', link: '#services' },
      ]
    },
  ];

  const solutions: ServiceItem[] = [
    { title: 'Cloud Control', description: 'Cut cloud costs 40% and never worry about uptime', link: '#services' },
    { title: 'AI Accelerator', description: 'From data to deployed AI in 90 days', link: '#services' },
    { title: 'Service Excellence', description: '95% user satisfaction, 60% cost reduction', link: '#services' },
    { title: 'Fortress IT', description: 'Security that passes audits, insurance that pays', link: '#services' },
    { title: 'Total Transformation', description: 'Your digital transformation, delivered', link: '#services' },
  ];

  const infrastructureCategories: InfrastructureCategory[] = [
    {
      id: 'out-of-warranty',
      name: 'Out of Warranty Support',
      items: [
        { title: 'Third-Party Maintenance', description: 'Save 60% vs. vendor support contracts', link: '#services' },
        { title: 'Hardware Lifecycle Extension', description: 'Get 2-3 more years from existing equipment', link: '#services' },
        { title: 'Spare Parts Management', description: 'Critical parts on-site within 4 hours', link: '#services' },
      ]
    },
    {
      id: 'sla',
      name: '24x7 Service Level Agreements',
      items: [
        { title: '15-Minute Response', description: 'Emergency support when you need it most', link: '#services' },
        { title: '99.9% Uptime Guarantee', description: 'SLA-backed availability with penalties', link: '#services' },
        { title: 'Proactive Monitoring', description: 'Fix issues before they impact users', link: '#services' },
      ]
    },
    {
      id: 'datacenter',
      name: 'Data Center Services',
      items: [
        { title: 'Hybrid Cloud Architecture', description: 'On-premise + cloud that actually works', link: '#services' },
        { title: 'Colocation Management', description: 'We manage your racks, you focus on business', link: '#services' },
        { title: 'DC Migration', description: 'Zero-downtime data center relocations', link: '#services' },
      ]
    },
    {
      id: 'continuity',
      name: 'Business Continuity',
      items: [
        { title: 'Disaster Recovery', description: 'RTO under 1 hour, tested quarterly', link: '#services' },
        { title: 'Backup Solutions', description: 'Immutable backups, air-gapped storage', link: '#services' },
        { title: 'High Availability Design', description: 'Zero single points of failure', link: '#services' },
      ]
    },
    {
      id: 'security',
      name: 'Security Monitoring and Audit',
      items: [
        { title: '24/7 Security Operations', description: 'Detect threats in minutes, not months', link: '#services' },
        { title: 'Vulnerability Management', description: 'Continuous scanning, prioritized patching', link: '#services' },
        { title: 'Compliance Audits', description: 'ISO 27001, SOC 2, GDPR readiness', link: '#services' },
      ]
    },
  ];

  const aboutCategories: AboutCategory[] = [
    {
      id: 'company-overview',
      name: 'Company Overview',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-[#161616] mb-2">Our Story</h4>
              <p className="text-sm text-[#525252]">Founded by British-certified technologists, delivering enterprise IT solutions across Pakistan and the UK since 2010.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-[#161616] mb-2">Our Mission</h4>
              <p className="text-sm text-[#525252]">Make enterprise-grade IT accessible to ambitious organizations in emerging markets.</p>
            </div>
          </div>
          <div className="flex gap-8 pt-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-pi-blue">14+</div>
              <div className="text-sm text-[#525252]">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pi-blue">50+</div>
              <div className="text-sm text-[#525252]">Platforms Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pi-blue">24/7</div>
              <div className="text-sm text-[#525252]">Support Coverage</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'leadership',
      name: 'Leadership/Team',
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <img src="/david_headshot.jpg" alt="David Pridmore" className="w-16 h-16 rounded-full object-cover" />
            <div>
              <h4 className="font-semibold text-[#161616]">David Pridmore</h4>
              <p className="text-sm text-[#525252]">Founder & CTO</p>
              <p className="text-xs text-[#525252] mt-1">British-certified enterprise technologist with 14+ years experience</p>
            </div>
          </div>
          <p className="text-sm text-[#525252]">Our team combines British enterprise standards with local market expertise.</p>
        </div>
      )
    },
    {
      id: 'careers',
      name: 'Careers',
      content: (
        <div className="space-y-4">
          <p className="text-sm text-[#525252]">Join a team where enterprise standards meet innovation.</p>
          <div className="space-y-2">
            <div className="p-3 bg-gray-50 rounded-lg flex justify-between items-center">
              <div>
                <h4 className="font-medium text-[#161616]">Senior DevOps Engineer</h4>
                <p className="text-xs text-[#525252]">Lahore • Full-time</p>
              </div>
              <ChevronRight className="w-4 h-4 text-pi-blue" />
            </div>
            <div className="p-3 bg-gray-50 rounded-lg flex justify-between items-center">
              <div>
                <h4 className="font-medium text-[#161616]">ServiceNow Consultant</h4>
                <p className="text-xs text-[#525252]">Lahore • Full-time</p>
              </div>
              <ChevronRight className="w-4 h-4 text-pi-blue" />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'partners',
      name: 'Partners',
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <div className="text-lg font-bold text-pi-blue mb-1">Huawei</div>
              <p className="text-xs text-[#525252]">Enterprise Partner</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <div className="text-lg font-bold text-pi-blue mb-1">ServiceNow</div>
              <p className="text-xs text-[#525252]">Implementation Partner</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <div className="text-lg font-bold text-pi-blue mb-1">EZY</div>
              <p className="text-xs text-[#525252]">Distribution Alliance</p>
            </div>
          </div>
          <p className="text-sm text-[#525252]">Strategic partnerships that extend our capabilities and reach.</p>
        </div>
      )
    },
    {
      id: 'contact',
      name: 'Contact Information',
      content: (
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-[#161616] mb-2">Pakistan</h4>
            <p className="text-sm text-[#525252]">Office #01, 1st Floor, Liberty Gate Plaza</p>
            <p className="text-sm text-[#525252]">Tariq Road, Gulberg III, Lahore</p>
            <p className="text-sm text-pi-blue mt-2">+92 301 8436565</p>
          </div>
          <div>
            <h4 className="font-semibold text-[#161616] mb-2">United Kingdom</h4>
            <p className="text-sm text-[#525252]">12a Fleet Business Park, Sandy Lane</p>
            <p className="text-sm text-[#525252]">Fleet, Hampshire, GU52 8BF</p>
            <p className="text-sm text-pi-blue mt-2">+44 7456 457005</p>
          </div>
        </div>
      )
    },
  ];

  const getActiveServiceCategory = () => {
    if (activeCategory === 'solutions') {
      return { name: 'Solutions', link: '#services', items: solutions };
    }
    return serviceCategories.find(c => c.id === activeCategory) || serviceCategories[0];
  };

  const getActiveInfraCategory = () => {
    return infrastructureCategories.find(c => c.id === activeInfraCategory) || infrastructureCategories[0];
  };

  const getActiveAboutCategory = () => {
    return aboutCategories.find(c => c.id === activeAboutCategory) || aboutCategories[0];
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' 
            : 'bg-white border-b border-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo - P Icon Only */}
            <Link to="/" className="flex items-center group">
              <img 
                src="/logo_icon.png" 
                alt="Perception IT" 
                className="h-8 w-auto flex-shrink-0"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1" ref={megaMenuRef}>
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => {
                  setActiveMegaMenu('services');
                  setActiveCategory('cloud-cost');
                }}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                    activeMegaMenu === 'services' ? 'text-pi-blue' : 'text-[#161616] hover:text-pi-blue'
                  }`}
                >
                  Services
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeMegaMenu === 'services' ? 'rotate-90' : ''}`} />
                </button>

                {activeMegaMenu === 'services' && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-2xl overflow-hidden" style={{ width: '900px' }}>
                      <div className="flex">
                        {/* Left Rail - Categories */}
                        <div className="w-[280px] bg-[#f4f4f4] p-4">
                          <div className="space-y-1">
                            {serviceCategories.map((category) => (
                              <button
                                key={category.id}
                                onMouseEnter={() => setActiveCategory(category.id)}
                                className={`w-full text-left px-3 py-2.5 text-sm rounded transition-all ${
                                  activeCategory === category.id
                                    ? 'bg-white border-l-[3px] border-pi-blue text-[#161616] font-medium'
                                    : 'text-[#525252] hover:bg-[#e5e5e5]'
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <span>{category.name}</span>
                                  {category.badge && (
                                    <span className="px-1.5 py-0.5 bg-pi-blue text-white text-[10px] rounded">
                                      {category.badge}
                                    </span>
                                  )}
                                </div>
                              </button>
                            ))}
                            <div className="border-t border-gray-300 my-2" />
                            <button
                              onMouseEnter={() => setActiveCategory('solutions')}
                              className={`w-full text-left px-3 py-2.5 text-sm rounded transition-all ${
                                activeCategory === 'solutions'
                                  ? 'bg-white border-l-[3px] border-pi-blue text-[#161616] font-medium'
                                  : 'text-[#525252] hover:bg-[#e5e5e5]'
                              }`}
                            >
                              Solutions
                            </button>
                            {solutions.map((solution, idx) => (
                              <button
                                key={idx}
                                onMouseEnter={() => setActiveCategory('solutions')}
                                className={`w-full text-left px-3 py-2 text-xs rounded transition-all ${
                                  activeCategory === 'solutions'
                                    ? 'bg-white text-[#161616]'
                                    : 'text-[#525252] hover:bg-[#e5e5e5]'
                                }`}
                              >
                                {solution.title.toUpperCase()}
                              </button>
                            ))}
                            <a 
                              href="#services" 
                              className="flex items-center gap-2 px-3 py-3 text-sm text-pi-blue hover:text-pi-blue-dark mt-2"
                            >
                              View All Services & Solutions
                              <ArrowRight className="w-4 h-4" />
                            </a>
                          </div>
                        </div>

                        {/* Right Content Area */}
                        <div className="flex-1 p-6 bg-white">
                          <Link 
                            to={getActiveServiceCategory().link || '#services'}
                            className="flex items-center gap-2 text-lg font-semibold text-[#161616] hover:text-pi-blue mb-6 group"
                            onClick={() => setActiveMegaMenu(null)}
                          >
                            {getActiveServiceCategory().name}
                            <ArrowRight className="w-5 h-5 text-pi-blue group-hover:translate-x-1 transition-transform" />
                          </Link>
                          
                          <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                            {getActiveServiceCategory().items.map((item, idx) => (
                              <a
                                key={idx}
                                href={item.link}
                                className="group block"
                              >
                                <h4 className="text-sm font-semibold text-[#161616] group-hover:text-pi-blue mb-1">
                                  {item.title}
                                </h4>
                                <p className="text-sm text-[#525252] leading-relaxed">
                                  {item.description}
                                </p>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Bottom CTA */}
                      <a 
                        href="#services" 
                        className="block w-full bg-pi-blue text-white text-center py-3 text-sm font-medium hover:bg-pi-blue-dark transition-colors"
                      >
                        Explore all services →
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Infrastructure Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => {
                  setActiveMegaMenu('infrastructure');
                  setActiveInfraCategory('out-of-warranty');
                }}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                    activeMegaMenu === 'infrastructure' ? 'text-pi-blue' : 'text-[#161616] hover:text-pi-blue'
                  }`}
                >
                  Infrastructure
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeMegaMenu === 'infrastructure' ? 'rotate-90' : ''}`} />
                </button>

                {activeMegaMenu === 'infrastructure' && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-2xl overflow-hidden" style={{ width: '900px' }}>
                      <div className="flex">
                        {/* Left Rail */}
                        <div className="w-[280px] bg-[#f4f4f4] p-4">
                          <div className="space-y-1">
                            {infrastructureCategories.map((category) => (
                              <button
                                key={category.id}
                                onMouseEnter={() => setActiveInfraCategory(category.id)}
                                className={`w-full text-left px-3 py-2.5 text-sm rounded transition-all ${
                                  activeInfraCategory === category.id
                                    ? 'bg-white border-l-[3px] border-pi-blue text-[#161616] font-medium'
                                    : 'text-[#525252] hover:bg-[#e5e5e5]'
                                }`}
                              >
                                {category.name}
                              </button>
                            ))}
                            <a 
                              href="#services" 
                              className="flex items-center gap-2 px-3 py-3 text-sm text-pi-blue hover:text-pi-blue-dark mt-2"
                            >
                              View All Infrastructure Services
                              <ArrowRight className="w-4 h-4" />
                            </a>
                          </div>
                        </div>

                        {/* Right Content Area */}
                        <div className="flex-1 p-6 bg-white">
                          {/* Huawei Partnership Banner */}
                          <div className="bg-gradient-to-r from-pi-blue/10 to-pi-blue/5 border border-pi-blue/20 rounded-lg p-4 mb-6">
                            <div className="flex items-center gap-3">
                              {/* Huawei Logo */}
                              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M50 10C45 25 35 35 20 40C35 45 45 55 50 70C55 55 65 45 80 40C65 35 55 25 50 10Z" fill="#FF0000"/>
                                  <path d="M50 75C47.5 82.5 42.5 87.5 35 90C42.5 87.5 47.5 82.5 50 75Z" fill="#FF0000"/>
                                  <path d="M25 50C17.5 52.5 12.5 57.5 10 65C12.5 57.5 17.5 52.5 25 50Z" fill="#FF0000"/>
                                  <path d="M75 50C82.5 52.5 87.5 57.5 90 65C87.5 57.5 82.5 52.5 75 50Z" fill="#FF0000"/>
                                  <path d="M35 25C30 30 25 35 22 42C28 38 33 33 35 25Z" fill="#FF0000"/>
                                  <path d="M65 25C70 30 75 35 78 42C72 38 67 33 65 25Z" fill="#FF0000"/>
                                  <path d="M15 35C12 42 10 50 12 58C14 50 18 42 15 35Z" fill="#FF0000"/>
                                  <path d="M85 35C88 42 90 50 88 58C86 50 82 42 85 35Z" fill="#FF0000"/>
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-semibold text-[#161616]">Huawei Enterprise Partner</h4>
                                <p className="text-sm text-[#525252]">Authorized support for servers, storage & networking</p>
                              </div>
                            </div>
                          </div>

                          <a 
                            href="#services" 
                            className="flex items-center gap-2 text-lg font-semibold text-[#161616] hover:text-pi-blue mb-6 group"
                          >
                            {getActiveInfraCategory().name}
                            <ArrowRight className="w-5 h-5 text-pi-blue group-hover:translate-x-1 transition-transform" />
                          </a>
                          
                          <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                            {getActiveInfraCategory().items.map((item, idx) => (
                              <a
                                key={idx}
                                href={item.link}
                                className="group block"
                              >
                                <h4 className="text-sm font-semibold text-[#161616] group-hover:text-pi-blue mb-1">
                                  {item.title}
                                </h4>
                                <p className="text-sm text-[#525252] leading-relaxed">
                                  {item.description}
                                </p>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Bottom CTA */}
                      <a 
                        href="#services" 
                        className="block w-full bg-pi-blue text-white text-center py-3 text-sm font-medium hover:bg-pi-blue-dark transition-colors"
                      >
                        Explore all infrastructure services →
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Projects - Simple Link */}
              <Link
                to="/projects"
                className="px-4 py-2 text-sm font-medium text-[#161616] hover:text-pi-blue transition-colors"
              >
                Projects
              </Link>

              {/* About Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => {
                  setActiveMegaMenu('about');
                  setActiveAboutCategory('company-overview');
                }}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                    activeMegaMenu === 'about' ? 'text-pi-blue' : 'text-[#161616] hover:text-pi-blue'
                  }`}
                >
                  About
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeMegaMenu === 'about' ? 'rotate-90' : ''}`} />
                </button>

                {activeMegaMenu === 'about' && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-2xl overflow-hidden" style={{ width: '700px' }}>
                      <div className="flex">
                        {/* Left Rail */}
                        <div className="w-[240px] bg-[#f4f4f4] p-4">
                          <div className="space-y-1">
                            {aboutCategories.map((category) => (
                              <button
                                key={category.id}
                                onMouseEnter={() => setActiveAboutCategory(category.id)}
                                className={`w-full text-left px-3 py-2.5 text-sm rounded transition-all ${
                                  activeAboutCategory === category.id
                                    ? 'bg-white border-l-[3px] border-pi-blue text-[#161616] font-medium'
                                    : 'text-[#525252] hover:bg-[#e5e5e5]'
                                }`}
                              >
                                {category.name}
                              </button>
                            ))}
                            <a 
                              href="#about" 
                              className="flex items-center gap-2 px-3 py-3 text-sm text-pi-blue hover:text-pi-blue-dark mt-2"
                            >
                              View All About Pages
                              <ArrowRight className="w-4 h-4" />
                            </a>
                          </div>
                        </div>

                        {/* Right Content Area */}
                        <div className="flex-1 p-6 bg-white">
                          <a 
                            href="#about" 
                            className="flex items-center gap-2 text-lg font-semibold text-[#161616] hover:text-pi-blue mb-4 group"
                          >
                            {getActiveAboutCategory().name}
                            <ArrowRight className="w-5 h-5 text-pi-blue group-hover:translate-x-1 transition-transform" />
                          </a>
                          
                          <div className="text-sm text-[#525252]">
                            {getActiveAboutCategory().content}
                          </div>
                        </div>
                      </div>
                      
                      {/* Bottom CTA */}
                      <a 
                        href="#about" 
                        className="block w-full bg-pi-blue text-white text-center py-3 text-sm font-medium hover:bg-pi-blue-dark transition-colors"
                      >
                        Learn more about Perception IT →
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                className="inline-flex items-center px-5 py-2.5 bg-pi-blue text-white text-sm font-medium rounded-lg hover:bg-pi-blue-dark transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#161616]"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-white" />
          <div className="relative pt-20 px-6 h-full overflow-y-auto">
            <div className="space-y-4">
              {/* Services Accordion */}
              <div className="border-b border-gray-100 pb-4">
                <button className="flex items-center justify-between w-full py-3 text-lg font-medium text-[#161616]">
                  Services
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="pl-4 space-y-2 mt-2">
                  {serviceCategories.map((cat) => (
                    <a key={cat.id} href="#services" className="block py-2 text-sm text-[#525252]">
                      {cat.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Infrastructure Accordion */}
              <div className="border-b border-gray-100 pb-4">
                <button className="flex items-center justify-between w-full py-3 text-lg font-medium text-[#161616]">
                  Infrastructure
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="pl-4 space-y-2 mt-2">
                  {infrastructureCategories.map((cat) => (
                    <a key={cat.id} href="#services" className="block py-2 text-sm text-[#525252]">
                      {cat.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Simple Links */}
              <Link to="/projects" className="block py-3 text-lg font-medium text-[#161616] border-b border-gray-100">
                Projects
              </Link>

              {/* About Accordion */}
              <div className="border-b border-gray-100 pb-4">
                <button className="flex items-center justify-between w-full py-3 text-lg font-medium text-[#161616]">
                  About
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="pl-4 space-y-2 mt-2">
                  {aboutCategories.map((cat) => (
                    <a key={cat.id} href="#about" className="block py-2 text-sm text-[#525252]">
                      {cat.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pb-8">
              <a
                href="#contact"
                className="block w-full text-center px-5 py-4 bg-pi-blue text-white font-medium rounded-lg"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
