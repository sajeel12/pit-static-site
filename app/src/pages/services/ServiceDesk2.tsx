import { useEffect, useState } from 'react';
import '../../styles/carbon-typography.css';
import Footer from '../../sections/Footer';
import Navigation from '../../components/Navigation';
import HeroGradientPlanes from '../../components/HeroGradientPlanes';
import {
  ArrowRight, CheckmarkFilled, WarningAlt,
  Ticket, User, Book, MagicWand, ChartLine, 
  Headset, Report, DataBase,
  ChevronRight, Building, Time, Task
} from '@carbon/icons-react';

const ServiceDesk2 = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0);
  
  // Case studies data
  const caseStudies = [
    {
      id: 'manufacturing',
      tag: 'Manufacturing',
      tagColor: 'green',
      title: 'Manufacturing Giant — 60% Cost Reduction',
      description: 'Transformed fragmented support into a unified service desk with ServiceNow. Reduced MTTR by 45%, improved user satisfaction to 94%, and eliminated shadow IT ticketing.',
      stats: [
        { value: '60%', label: 'Cost Reduction', color: '#24a148' },
        { value: '45%', label: 'MTTR Improvement', color: '#24a148' },
        { value: '94%', label: 'User Satisfaction', color: '#6929c4' }
      ],
      quote: {
        text: "Perception IT didn't just implement a tool—they transformed how our entire organisation thinks about IT support. Our users actually thank the IT team now.",
        author: "CIO, Leading Manufacturing Company"
      }
    },
    {
      id: 'financial',
      tag: 'Financial Services',
      tagColor: 'blue',
      title: 'Banking Sector — Compliance-Ready Service Desk',
      description: 'Deployed a secure, auditable service desk solution meeting strict regulatory requirements. Full SLA compliance, automated escalation, and complete audit trails.',
      stats: [
        { value: '99.8%', label: 'SLA Compliance', color: '#24a148' },
        { value: '100%', label: 'Audit Ready', color: '#24a148' },
        { value: '3min', label: 'Avg Response', color: '#6929c4' }
      ]
    },
    {
      id: 'telecom',
      tag: 'Telecommunications',
      tagColor: 'purple',
      title: 'Telco Provider — Multi-Channel Support Transformation',
      description: 'Unified email, chat, phone, and portal support into a single intelligent platform. Self-service adoption reached 65%, reducing L1 ticket volume significantly.',
      stats: [
        { value: '65%', label: 'Self-Service Adoption', color: '#24a148' },
        { value: '40%', label: 'L1 Ticket Reduction', color: '#24a148' },
        { value: '24/7', label: 'Coverage', color: '#6929c4' }
      ]
    }
  ];
  
  const nextCaseStudy = () => {
    setCurrentCaseStudy((prev) => (prev + 1) % caseStudies.length);
  };
  
  const prevCaseStudy = () => {
    setCurrentCaseStudy((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };
  
  // Section Registry
  const SECTIONS = [
    { id: 'overview', label: 'Overview' },
    { id: 'value', label: 'Business Value' },
    { id: 'features', label: 'Features' },
    { id: 'tiers', label: 'Support Tiers' },
    { id: 'comparison', label: 'Vs. In-house' },
    { id: 'cases', label: 'Case Studies' },
    { id: 'engagement', label: 'Engagement' }
  ] as const;

  // Scroll spy
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
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerOffset,
        behavior: 'smooth'
      });
    }
  };

  const handleMobileNavChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    scrollToSection(e.target.value);
  };

  // Service Desk Tiers data
  const supportTiers = [
    {
      level: 'L1',
      title: 'First-Line Support',
      description: 'Initial contact, triage, and resolution of common issues. Password resets, account unlocks, basic troubleshooting.',
      capabilities: ['Incident logging', 'Basic troubleshooting', 'Password resets', 'Service requests', 'Knowledge base queries'],
      responseTime: '< 15 minutes'
    },
    {
      level: 'L2',
      title: 'Technical Specialists',
      description: 'Advanced troubleshooting, system administration, and complex issue resolution requiring deeper technical knowledge.',
      capabilities: ['Advanced diagnostics', 'System administration', 'Application support', 'Network troubleshooting', 'Vendor coordination'],
      responseTime: '< 30 minutes'
    },
    {
      level: 'L3',
      title: 'Engineering & Development',
      description: 'Complex architectural issues, code-level debugging, and integration problems requiring engineering expertise.',
      capabilities: ['Code-level debugging', 'Architecture review', 'Integration issues', 'Custom development', 'Root cause analysis'],
      responseTime: '< 2 hours'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section id="overview" className="relative pt-40 pb-20 bg-[#0a1628] overflow-hidden">
        <HeroGradientPlanes />
        
        <div className="relative z-10 max-w-[1584px] mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs mb-8" aria-label="Breadcrumb">
            <a href="/" className="text-[#24a148] hover:underline">Home</a>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <a href="/services" className="text-[#24a148] hover:underline">Services</a>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="text-[#24a148] hover:underline cursor-pointer">IT Platforms</span>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="px-2 py-0.5 border border-[#a8a8a8] text-[#a8a8a8] rounded-full">Service Desk</span>
          </nav>

          {/* Mobile Dropdown Navigation */}
          <div className="xl:hidden mb-8">
            <label className="text-xs text-gray-400 block mb-2">
              On this page:
            </label>
            <select 
              onChange={handleMobileNavChange}
              value={activeSection}
              className="w-full h-12 px-4 bg-gray-800 border border-gray-700 text-white text-sm"
            >
              {SECTIONS.map(item => (
                <option key={item.id} value={item.id}>{item.label}</option>
              ))}
            </select>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Column - Main Content */}
            <div>
              <h1 className="carbon-fluid-heading-05 text-white mb-6">
                Service Desk
              </h1>

              <p className="carbon-label-01 text-[#c6c6c6] uppercase tracking-wide mb-6">
                Digitised ITSM Processes with Intelligent Automation
              </p>

              <p className="carbon-body-02 text-gray-300 mb-8">
                Modernise your IT support with a fully-digitised service desk powered by ServiceNow. 
                We deliver measurable improvements in user satisfaction while reducing operational 
                costs by up to 60%.
              </p>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('engagement')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#24a148] text-white font-semibold hover:bg-[#1e7e3e] transition-colors"
                >
                  Request Service Assessment
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => scrollToSection('cases')}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/50 text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  View Client Results
                </button>
              </div>
            </div>

            {/* Right Column - Key Features */}
            <div className="space-y-3">
              <div className="flex items-start gap-4 p-4 border-l-2 border-[#24a148] bg-white/5">
                <div className="w-10 h-10 bg-[#24a148]/20 flex items-center justify-center flex-shrink-0">
                  <Ticket className="w-5 h-5 text-[#24a148]" />
                </div>
                <div>
                  <h3 className="carbon-heading-01 text-white mb-1">Intelligent Ticket Management</h3>
                  <p className="carbon-label-01 text-gray-400">AI-powered routing and categorisation with automated SLA tracking.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 border-l-2 border-[#24a148] bg-white/5">
                <div className="w-10 h-10 bg-[#24a148]/20 flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-[#24a148]" />
                </div>
                <div>
                  <h3 className="carbon-heading-01 text-white mb-1">Self-Service Portal</h3>
                  <p className="carbon-label-01 text-gray-400">Branded user portal with knowledge base, ticket tracking, and service catalogue.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 border-l-2 border-[#24a148] bg-white/5">
                <div className="w-10 h-10 bg-[#24a148]/20 flex items-center justify-center flex-shrink-0">
                  <Book className="w-5 h-5 text-[#24a148]" />
                </div>
                <div>
                  <h3 className="carbon-heading-01 text-white mb-1">Knowledge Base</h3>
                  <p className="carbon-label-01 text-gray-400">AI-powered search with article recommendations and continuous improvement.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 border-l-2 border-[#24a148] bg-white/5">
                <div className="w-10 h-10 bg-[#24a148]/20 flex items-center justify-center flex-shrink-0">
                  <MagicWand className="w-5 h-5 text-[#24a148]" />
                </div>
                <div>
                  <h3 className="carbon-heading-01 text-white mb-1">Intelligent Automation</h3>
                  <p className="carbon-label-01 text-gray-400">Automated workflows, approvals, and repetitive task handling to reduce MTTR.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#f4f4f4] border-y border-[#e0e0e0]">
        <div className="max-w-[1584px] mx-auto py-6 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Building, headline: "95% User Satisfaction", subtext: 'Across all engagements' },
              { icon: Ticket, headline: '60% Cost Reduction', subtext: 'Vs. traditional in-house' },
              { icon: CheckmarkFilled, headline: '45% Faster Resolution', subtext: 'AI-powered automation' },
              { icon: Time, headline: '24/7 Coverage', subtext: 'Round-the-clock support' }
            ].map((item) => (
              <div
                key={item.headline}
                className="bg-white border border-[#e0e0e0] p-4 flex flex-col gap-3"
              >
                <div className="w-10 h-10 bg-[#24a148]/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-[#24a148]" />
                </div>
                <div>
                  <p className="carbon-label-01 text-[#161616] leading-tight mb-1">{item.headline}</p>
                  <p className="carbon-helper-text-01 text-[#525252]">{item.subtext}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content with Side Navigation */}
      <div>
        <div className="max-w-[1584px] mx-auto">
          <div className="flex">
            
            {/* Desktop Side Menu */}
            <aside className="hidden xl:block w-56 flex-shrink-0 pl-6 pr-8">
              <nav className="sticky top-20 pt-8 pb-8 h-[calc(100vh-5rem)]">
                <ul className="space-y-0.5">
                  {SECTIONS.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left px-4 py-2 carbon-body-01 transition-colors border-l-2 ${
                          activeSection === item.id
                            ? 'text-[#161616] border-[#24a148] bg-[#f4f4f4] font-semibold'
                            : 'text-[#525252] border-transparent hover:text-[#161616] hover:bg-[#f4f4f4]'
                        }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Content Area */}
            <main className="flex-1 min-w-0 pl-8 pr-6">
              
              {/* Business Value Section */}
              <section id="value" className="py-20 border-b border-[#e0e0e0]">
                <div className="max-w-5xl mx-auto px-6">
                  <span className="carbon-label-01 text-[#24a148] uppercase tracking-wide mb-3 block">
                    Business Value
                  </span>
                  <h2 className="carbon-fluid-heading-05 text-[#161616] mb-6">
                    Why Modernise Your Service Desk?
                  </h2>
                  <p className="carbon-body-01 text-[#525252] mb-8">
                    Traditional IT support is drowning in manual processes, fragmented tools, and poor visibility. 
                    Modern service desk solutions transform IT from a cost centre into a strategic enabler—delivering 
                    faster resolution, happier users, and lower operational costs.
                  </p>

                  {/* Risk Warning */}
                  <div className="mb-8 p-4 border-l-4 border-red-500 bg-red-50">
                    <div className="flex items-start gap-3">
                      <WarningAlt className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="carbon-label-01 text-red-700 mb-1">The Cost of Legacy Support</p>
                        <p className="carbon-body-01 text-[#525252]">
                          Outdated service desks create hidden costs: shadow IT ticketing, knowledge silos, 
                          compliance gaps, and frustrated users. Every hour of downtime costs enterprises 
                          thousands in lost productivity and revenue.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Value Props */}
                  <div className="grid md:grid-cols-2 gap-4 mb-12">
                    {[
                      { icon: Time, title: 'Reduced MTTR', desc: 'AI-powered routing and automation cut mean time to resolution by up to 45%.' },
                      { icon: User, title: 'Improved User Satisfaction', desc: 'Self-service options and faster response times drive 95%+ satisfaction scores.' },
                      { icon: ChartLine, title: 'Lower Operational Costs', desc: 'Automation and efficient tier structure reduce support costs by up to 60%.' },
                      { icon: Report, title: 'Better Visibility', desc: 'Real-time dashboards and analytics for data-driven decision making.' }
                    ].map((item) => (
                      <div key={item.title} className="p-5 bg-white border border-[#e0e0e0]">
                        <div className="w-10 h-10 bg-[#24a148]/10 flex items-center justify-center mb-4">
                          <item.icon className="w-5 h-5 text-[#24a148]" />
                        </div>
                        <h3 className="carbon-heading-02 text-[#161616] mb-2">{item.title}</h3>
                        <p className="carbon-body-01 text-[#525252]">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Core Features Section */}
              <section id="features" className="py-20 border-b border-[#e0e0e0]">
                <div className="max-w-5xl mx-auto px-6">
                  <span className="carbon-label-01 text-[#24a148] uppercase tracking-wide mb-3 block">
                    Core Capabilities
                  </span>
                  <h2 className="carbon-fluid-heading-05 text-[#161616] mb-6">
                    Essential Service Desk Functions
                  </h2>
                  <p className="carbon-body-01 text-[#525252] mb-12">
                    A comprehensive service desk built on ServiceNow, delivering enterprise-grade 
                    functionality with consumer-grade usability.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {[
                      { icon: Ticket, title: 'Intelligent Ticketing', desc: 'AI-powered categorisation and automatic routing to the right support tier.', tags: ['Auto-routing', 'Smart priority', 'Agent matching'] },
                      { icon: User, title: 'Self-Service Portal', desc: 'Branded portal for logging tickets, checking status, and accessing knowledge.', tags: ['24/7 access', 'Ticket tracking', 'Service catalogue'] },
                      { icon: Book, title: 'Knowledge Management', desc: 'Centralised knowledge base with AI-powered search and article recommendations.', tags: ['AI search', 'Recommendations', 'Continuous learning'] }
                    ].map((feature) => (
                      <div key={feature.title} className="p-5 bg-white border border-[#e0e0e0] hover:border-[#24a148] transition-colors">
                        <div className="w-10 h-10 bg-[#24a148]/10 flex items-center justify-center mb-4">
                          <feature.icon className="w-5 h-5 text-[#24a148]" />
                        </div>
                        <h3 className="carbon-heading-02 text-[#161616] mb-2">{feature.title}</h3>
                        <p className="carbon-body-01 text-[#525252] mb-3">{feature.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {feature.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-[#f4f4f4] text-[#525252] carbon-helper-text-01">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Advanced Features Section */}
              <section className="py-20 border-b border-[#e0e0e0] bg-[#f4f4f4]">
                <div className="max-w-5xl mx-auto px-6">
                  <span className="carbon-label-01 text-[#24a148] uppercase tracking-wide mb-3 block">
                    Advanced Capabilities
                  </span>
                  <h2 className="carbon-fluid-heading-05 text-[#161616] mb-6">
                    Power & Intelligence
                  </h2>
                  <p className="carbon-body-01 text-[#525252] mb-12">
                    Extended capabilities that drive efficiency, visibility, and continuous improvement.
                  </p>

                  <div className="space-y-6">
                    {[
                      { icon: Time, title: 'SLA Management & Monitoring', desc: 'Real-time SLA tracking with automated escalation, breach alerts, and comprehensive reporting for accountability.', visual: 'Insert a screenshot of an SLA dashboard with green/yellow/red status indicators and response-time trend graphs.' },
                      { icon: Task, title: 'Automation & Workflows', desc: 'Automated ticket handling, approval workflows, and repetitive task automation to reduce resolution times.', visual: 'Insert a flowchart diagram showing automated ticket routing from intake to assignment.' },
                      { icon: Headset, title: 'Multi-Channel Support', desc: 'Unified experience across email, chat, phone, and portal. All channels feed into a single ticketing system.', visual: 'Insert a UI mockup of a support interface displaying email, chat, and phone channel badges.' },
                      { icon: ChartLine, title: 'Reporting & Analytics', desc: 'Executive dashboards, operational metrics, and trend analysis to drive continuous improvement.', visual: 'Insert a screenshot of an analytics dashboard with line charts, bar graphs, and KPI cards.' },
                      { icon: DataBase, title: 'CMDB Integration', desc: 'Configuration Management Database integration for better impact analysis and relationship mapping.', visual: 'Insert a network topology diagram showing asset nodes and dependency relationships.' }
                    ].map((feature) => (
                      <div key={feature.title} className="flex gap-6 p-6 bg-white border border-[#e0e0e0]">
                        <div className="w-16 h-16 bg-[#f4f4f4] flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-8 h-8 text-[#24a148]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="carbon-heading-02 text-[#161616] mb-2">{feature.title}</h3>
                          <p className="carbon-body-01 text-[#525252] mb-4">{feature.desc}</p>
                          <div className="h-40 bg-gradient-to-br from-[#e8f5e9] to-[#c8e6c9] border border-[#24a148]/20 flex items-center justify-center p-4">
                            <div className="text-center">
                              <feature.icon className="w-8 h-8 text-[#24a148] mx-auto mb-2" />
                              <p className="carbon-label-01 text-[#1b5e20] font-semibold mb-1">{feature.title}</p>
                              <p className="carbon-helper-text-01 text-[#2e7d32]">{feature.visual}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Support Tiers Section */}
              <section id="tiers" className="py-20 border-b border-[#e0e0e0]">
                <div className="max-w-5xl mx-auto px-6">
                  <span className="carbon-label-01 text-[#24a148] uppercase tracking-wide mb-3 block">
                    Support Structure
                  </span>
                  <h2 className="carbon-fluid-heading-05 text-[#161616] mb-6">
                    Support Tier Structure
                  </h2>
                  <p className="carbon-body-01 text-[#525252] mb-12">
                    Optimised tier structure ensuring the right expertise is applied to every issue—
                    minimising escalation while maximising first-contact resolution.
                  </p>

                  <div className="space-y-6">
                    {supportTiers.map((tier) => (
                      <div key={tier.level} className="p-6 bg-white border border-[#e0e0e0]">
                        <div className="flex flex-col md:flex-row md:items-start gap-6">
                          <div className="w-16 h-16 bg-[#f4f4f4] flex items-center justify-center flex-shrink-0">
                            <span className="text-2xl font-bold text-[#24a148]">{tier.level}</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                              <h3 className="carbon-heading-02 text-[#161616]">{tier.title}</h3>
                              <span className="px-3 py-1 text-xs font-semibold w-fit bg-[#24a148]/10 text-[#24a148]">
                                Response: {tier.responseTime}
                              </span>
                            </div>
                            <p className="carbon-body-01 text-[#525252] mb-4">{tier.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {tier.capabilities.map((cap) => (
                                <span key={cap} className="px-2 py-1 bg-[#f4f4f4] text-[#525252] carbon-helper-text-01">
                                  {cap}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Comparison Section */}
              <section id="comparison" className="py-20 border-b border-[#e0e0e0]">
                <div className="max-w-5xl mx-auto px-6">
                  <span className="carbon-label-01 text-[#24a148] uppercase tracking-wide mb-3 block">
                    Compare
                  </span>
                  <h2 className="carbon-fluid-heading-05 text-[#161616] mb-6">
                    Managed Service Desk vs In-house
                  </h2>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-[#e0e0e0]">
                          <th className="text-left py-3 px-4 carbon-label-01 text-[#161616]">Factor</th>
                          <th className="text-center py-3 px-4 carbon-label-01 text-[#24a148]">Perception IT Managed</th>
                          <th className="text-center py-3 px-4 carbon-label-01 text-[#525252]">In-house Team</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { factor: 'Setup Time', pit: '✓ Weeks', inhouse: '✗ Months' },
                          { factor: '24/7 Coverage', pit: '✓ Included', inhouse: '✗ Expensive shifts' },
                          { factor: 'ServiceNow License', pit: '✓ Included', inhouse: '✗ Separate cost' },
                          { factor: 'Scalability', pit: '✓ On-demand', inhouse: '✗ Hiring cycles' },
                          { factor: 'Best Practices', pit: '✓ Built-in', inhouse: '✗ Build over time' },
                          { factor: 'Cost Predictability', pit: '✓ Fixed monthly', inhouse: '✗ Variable overhead' },
                          { factor: 'Knowledge Retention', pit: '✓ Documented', inhouse: '✗ Staff dependent' },
                          { factor: 'Technology Updates', pit: '✓ Automatic', inhouse: '✗ Manual upgrades' }
                        ].map((row, i) => (
                          <tr key={i} className="border-b border-[#e0e0e0]">
                            <td className="py-3 px-4 text-[#161616]">{row.factor}</td>
                            <td className="py-3 px-4 text-center text-[#24a148] font-medium">{row.pit}</td>
                            <td className="py-3 px-4 text-center text-[#c6c6c6]">{row.inhouse}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-8 p-6 bg-[#f4f4f4] border-l-4 border-[#24a148]">
                    <p className="carbon-body-01 text-[#161616]">
                      <strong>Bottom line:</strong> Our managed service desk typically delivers 40-60% cost savings 
                      while providing superior service levels, faster implementation, and access to specialised 
                      expertise without the overhead of hiring and training.
                    </p>
                  </div>
                </div>
              </section>

              {/* Case Studies Section */}
              <section id="cases" className="py-20 border-b border-[#e0e0e0]">
                <div className="max-w-5xl mx-auto px-6">
                  <span className="carbon-label-01 text-[#24a148] uppercase tracking-wide mb-3 block">
                    Success Stories
                  </span>
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="carbon-fluid-heading-05 text-[#161616]">Client Results</h2>
                    <p className="carbon-body-01 text-[#525252]">
                      {currentCaseStudy + 1} of {caseStudies.length}
                    </p>
                  </div>

                  {/* Case Study Content */}
                  <div className="bg-white border border-[#e0e0e0] mb-6">
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 text-xs font-semibold mb-3 bg-[#24a148]/10 text-[#24a148]">
                        {caseStudies[currentCaseStudy].tag}
                      </span>
                      <h3 className="carbon-heading-02 text-[#161616] mb-3">
                        {caseStudies[currentCaseStudy].title}
                      </h3>
                      <p className="carbon-body-01 text-[#525252] mb-4">
                        {caseStudies[currentCaseStudy].description}
                      </p>
                      
                      {caseStudies[currentCaseStudy].stats && (
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          {caseStudies[currentCaseStudy].stats.map((stat) => (
                            <div key={stat.label}>
                              <p className="carbon-fluid-heading-04" style={{ color: stat.color }}>{stat.value}</p>
                              <p className="carbon-helper-text-01 text-[#525252]">{stat.label}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {caseStudies[currentCaseStudy].quote && (
                        <div className="bg-[#f4f4f4] p-4 border-l-4 border-[#24a148] mt-4">
                          <p className="carbon-body-01 text-[#161616] italic mb-2">"{caseStudies[currentCaseStudy].quote.text}"</p>
                          <p className="carbon-helper-text-01 text-[#525252]">— {caseStudies[currentCaseStudy].quote.author}</p>
                        </div>
                      )}
                    </div>

                    {/* Pagination Controls */}
                    <div className="flex items-center justify-between px-6 py-4 border-t border-[#e0e0e0] bg-[#f4f4f4]">
                      <button
                        onClick={prevCaseStudy}
                        className="flex items-center gap-2 carbon-body-01 text-[#525252] hover:text-[#161616] transition-colors"
                      >
                        <ArrowRight className="w-4 h-4 rotate-180" />
                        Previous
                      </button>
                      
                      <div className="flex items-center gap-2">
                        {caseStudies.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentCaseStudy(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === currentCaseStudy ? 'bg-[#24a148]' : 'bg-[#c6c6c6]'
                            }`}
                          />
                        ))}
                      </div>

                      <button
                        onClick={nextCaseStudy}
                        className="flex items-center gap-2 carbon-body-01 text-[#525252] hover:text-[#161616] transition-colors"
                      >
                        Next
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Engagement Section */}
              <section id="engagement" className="py-20">
                <div className="max-w-5xl mx-auto px-6">
                  <span className="carbon-label-01 text-[#24a148] uppercase tracking-wide mb-3 block">
                    How We Work
                  </span>
                  <h2 className="carbon-fluid-heading-05 text-[#161616] mb-6">
                    Engagement Model
                  </h2>
                  <p className="carbon-body-01 text-[#525252] mb-12">
                    Flexible support tiers designed to match your organisational needs and budget. 
                    All plans include ServiceNow licensing and implementation.
                  </p>

                  {/* Pricing Tiers */}
                  <div className="grid md:grid-cols-3 gap-4 mb-12">
                    {[
                      { 
                        name: 'Essential', 
                        price: 'PKR 150K', 
                        period: '/month',
                        description: 'Perfect for small organisations getting started with ITSM',
                        features: [
                          'Up to 100 users',
                          'Business hours support (8x5)',
                          'Email & portal channels',
                          'Basic knowledge base',
                          'Standard reporting',
                          'ServiceNow Essentials'
                        ],
                        highlight: false
                      },
                      { 
                        name: 'Professional', 
                        price: 'PKR 350K', 
                        period: '/month',
                        description: 'Comprehensive coverage for growing organisations',
                        features: [
                          'Up to 500 users',
                          'Extended hours support (12x6)',
                          'Email, chat & portal channels',
                          'Advanced knowledge management',
                          'Custom dashboards',
                          'ServiceNow Professional',
                          'SLA management'
                        ],
                        highlight: true
                      },
                      { 
                        name: 'Enterprise', 
                        price: 'Custom', 
                        period: '',
                        description: 'Full-featured solution for large organisations',
                        features: [
                          'Unlimited users',
                          '24x7 support coverage',
                          'All channels + phone',
                          'AI-powered automation',
                          'Advanced analytics',
                          'ServiceNow Enterprise',
                          'Dedicated account manager',
                          'Custom integrations'
                        ],
                        highlight: false
                      }
                    ].map((tier) => (
                      <div 
                        key={tier.name} 
                        className={`p-6 border relative ${tier.highlight ? 'border-[#24a148] bg-[#f4f4f4]' : 'border-[#e0e0e0] bg-white'}`}
                      >
                        {tier.highlight && (
                          <span className="absolute -top-3 left-6 px-3 py-1 bg-[#24a148] text-white text-xs font-semibold">
                            Most Popular
                          </span>
                        )}
                        <h3 className="carbon-heading-02 text-[#161616] mb-1">{tier.name}</h3>
                        <div className="flex items-baseline gap-1 mb-3">
                          <span className="text-2xl font-bold text-[#161616]">{tier.price}</span>
                          <span className="carbon-helper-text-01 text-[#525252]">{tier.period}</span>
                        </div>
                        <p className="carbon-body-01 text-[#525252] mb-4">{tier.description}</p>
                        <ul className="space-y-2">
                          {tier.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2 carbon-body-01 text-[#525252]">
                              <CheckmarkFilled className="w-4 h-4 text-[#24a148] flex-shrink-0 mt-0.5" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Implementation Process */}
                  <div className="grid md:grid-cols-4 gap-4 mb-12">
                    {[
                      { step: '01', title: 'Assessment', desc: 'Current state analysis and requirements gathering' },
                      { step: '02', title: 'Design', desc: 'Solution architecture and workflow configuration' },
                      { step: '03', title: 'Deploy', desc: 'Platform setup, migration, and user training' },
                      { step: '04', title: 'Optimise', desc: 'Continuous improvement based on metrics' }
                    ].map((item) => (
                      <div key={item.step} className="relative p-6 bg-white border border-[#e0e0e0]">
                        <span className="absolute top-4 right-4 carbon-heading-02 text-[#c6c6c6]">{item.step}</span>
                        <h3 className="carbon-heading-02 text-[#161616] mb-2">{item.title}</h3>
                        <p className="carbon-body-01 text-[#525252]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA Banner */}
                  <div className="p-8 bg-[#24a148] text-center">
                    <h3 className="carbon-fluid-heading-04 text-white mb-4">
                      Ready to Transform Your IT Support?
                    </h3>
                    <p className="carbon-body-01 text-white/80 mb-6">
                      Get a free assessment of your current service desk. We'll show you exactly 
                      where you can improve—and how much you can save.
                    </p>
                    <a 
                      href="mailto:contact@perception-it.com"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#24a148] font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Request Free Assessment
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <p className="text-white/60 text-sm mt-4">
                      Response within 4 hours. No obligation.
                    </p>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDesk2;
