import { useEffect, useState, lazy, Suspense } from 'react';
import '../../styles/carbon-typography.css';
import Footer from '../../sections/Footer';
import Navigation from '../../components/Navigation';
const HeroCubeAnimationOrange = lazy(() => import('../../components/HeroCubeAnimationOrange'));
const HeroGradientPlanesOrange = lazy(() => import('../../components/HeroGradientPlanesOrange'));
import ArrowRight from '@carbon/icons-react/es/ArrowRight';
import WarningAlt from '@carbon/icons-react/es/WarningAlt';
import Lightning from '@carbon/icons-react/es/Lightning';
import Time from '@carbon/icons-react/es/Time';
import ChartLine from '@carbon/icons-react/es/ChartLine';
import ChevronRight from '@carbon/icons-react/es/ChevronRight';
import Cloud from '@carbon/icons-react/es/Cloud';
import Group from '@carbon/icons-react/es/Group';
import Dashboard from '@carbon/icons-react/es/Dashboard';
import Catalog from '@carbon/icons-react/es/Catalog';
import Book from '@carbon/icons-react/es/Book';
import Settings from '@carbon/icons-react/es/Settings';
import Asset from '@carbon/icons-react/es/Asset';
import Task from '@carbon/icons-react/es/Task';
import AppConnectivity from '@carbon/icons-react/es/AppConnectivity';
import Building from '@carbon/icons-react/es/Building';

const JiraServiceManagement = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0);
  
  // Case studies data
  const caseStudies = [
    {
      id: 'techstart',
      tags: [
        { text: 'Technology', color: 'blue' },
        { text: 'Automation', color: 'green' }
      ],
      title: 'TechStart Pakistan - ITSM Transformation',
      description: 'Migrated from email-based ticketing to Jira Service Management. Reduced ticket resolution time by 60% and improved CSAT scores from 3.2 to 4.6 within 3 months.',
      stats: [
        { value: '60%', label: 'Faster Resolution', icon: Time, color: '#24a148' },
        { value: '4.6/5', label: 'CSAT Score', icon: ChartLine, color: '#00b4d8' },
        { value: '3mo', label: 'Implementation', icon: Lightning, color: '#f4c430' }
      ],
      quote: {
        text: "Jira Service Management transformed how we handle IT requests. The automation alone saves us 20+ hours per week.",
        author: "Head of IT Operations, TechStart Pakistan"
      }
    },
    {
      id: 'edubridge',
      tags: [
        { text: 'Education', color: 'green' },
        { text: 'Multi-Department', color: 'purple' }
      ],
      title: 'EduBridge Academy - Multi-Department Support',
      description: 'Deployed JSM across 8 departments with custom service catalogs. Consolidated 5 different tools into one platform, reducing software costs by 40%.',
      stats: [
        { value: '8', label: 'Departments', icon: Group, color: '#24a148' },
        { value: '40%', label: 'Cost Savings', icon: ChartLine, color: '#00b4d8' },
        { value: '5→1', label: 'Tools Consolidated', icon: Task, color: '#f4c430' }
      ]
    },
    {
      id: 'healthfirst',
      tags: [
        { text: 'Healthcare', color: 'purple' },
        { text: 'Compliance', color: 'blue' }
      ],
      title: 'HealthFirst Clinics - Compliance-Ready ITSM',
      description: 'Implemented JSM with HIPAA-compliant workflows and audit trails. Achieved 99.5% SLA compliance and reduced security incident response time by 75%.',
      stats: [
        { value: '99.5%', label: 'SLA Compliance', icon: ChartLine, color: '#24a148' },
        { value: '75%', label: 'Faster Response', icon: Time, color: '#00b4d8' },
        { value: 'HIPAA', label: 'Compliant', icon: Book, color: '#f4c430' }
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
    { id: 'comparison', label: 'Comparison' },
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

  return (
    <div className="min-h-screen bg-[var(--cds-background)]">
      <Navigation />
      
      {/* Hero Section */}
      <section id="overview" className="relative pt-40 pb-20 bg-[#0a1628] overflow-hidden">
        <Suspense fallback={<div className="h-[500px] bg-slate-900" />}>
          <HeroCubeAnimationOrange />
        </Suspense>
        <Suspense fallback={<div className="h-[500px] bg-slate-900" />}>
          <HeroGradientPlanesOrange />
        </Suspense>
        
        <div className="relative z-10 cds--css-grid" style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
          <div className="cds--col-span-16 lg:cds--col-span-14 lg:cds--col-start-2">
          
          {/* Breadcrumb */}
          <nav className="relative z-10 flex items-center gap-2 text-xs mb-8" aria-label="Breadcrumb">
            <a href="/" className="text-[#f97316] hover:underline">Home</a>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <a href="/services" className="text-[#f97316] hover:underline">Services</a>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="text-[#f97316] hover:underline cursor-pointer">ITSM</span>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="px-2 py-0.5 border border-[#a8a8a8] text-[#a8a8a8] rounded-full">Jira Service Management</span>
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
              {/* Headline */}
              <h1 className="carbon-fluid-heading-05 text-white mb-6">
                Jira Service Management
              </h1>

              {/* Subtitle */}
              <p className="carbon-label-01 text-[#c6c6c6] uppercase tracking-wide mb-6">
                Agile ITSM for Modern Teams
              </p>

              {/* Lead Text */}
              <p className="carbon-body-02 text-gray-300 mb-8">
                Transform your IT service delivery with Atlassian's modern ITSM platform. 
                Built on Jira's legendary flexibility, JSM brings development and operations 
                teams together with intuitive workflows, powerful automation, and deep 
                integration across the Atlassian ecosystem.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('engagement')}
                  className="cds--btn cds--btn--primary bg-[#f97316] hover:bg-[#ea580c]"
                >
                  Request Free Assessment
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                <button 
                  onClick={() => scrollToSection('cases')}
                  className="cds--btn cds--btn--tertiary"
                  style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white', borderWidth: '1px' }}
                >
                  View Client Results
                </button>
              </div>
            </div>

            {/* Right Column - Key Features */}
            <div className="space-y-3">
              {/* Feature 1 */}
              <div className="flex items-start gap-4 p-4 border-l-2 border-[#f97316] bg-white/5">
                <div className="w-10 h-10 bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <Task className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="carbon-heading-01 text-white mb-1">Agile ITSM</h3>
                  <p className="carbon-label-01 text-gray-400">Modern ITIL practices with agile flexibility. Fast to implement, easy to adapt.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4 p-4 border-l-2 border-[#f97316] bg-white/5">
                <div className="w-10 h-10 bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <Lightning className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="carbon-heading-01 text-white mb-1">Incident Management</h3>
                  <p className="carbon-label-01 text-gray-400">Rapid incident response with intelligent routing, on-call management, and swarm collaboration.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4 p-4 border-l-2 border-[#f97316] bg-white/5">
                <div className="w-10 h-10 bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <Settings className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="carbon-heading-01 text-white mb-1">Change Management</h3>
                  <p className="carbon-label-01 text-gray-400">Streamlined change workflows with risk assessment, approvals, and automated scheduling.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-4 p-4 border-l-2 border-[#f97316] bg-white/5">
                <div className="w-10 h-10 bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <Time className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="carbon-heading-01 text-white mb-1">SLA Tracking</h3>
                  <p className="carbon-label-01 text-gray-400">Powerful SLA management with multi-condition goals, alerts, and breach escalation.</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Trust Bar - Carbon Tile Design */}
      <section className="bg-[var(--cds-background)] border-y border-[var(--cds-border-subtle)]">
        <div className="max-w-7xl mx-auto py-6 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Cloud, headline: "Cloud & Data Centre", subtext: 'Flexible Deployment' },
              { icon: AppConnectivity, headline: '500+ Integrations', subtext: 'Atlassian Marketplace' },
              { icon: Group, headline: 'Dev + Ops Together', subtext: 'Unified Platform' },
              { icon: Lightning, headline: 'Rapid Deployment', subtext: 'Weeks, Not Months' }
            ].map((item) => (
              <div
                key={item.headline}
                className="bg-white border border-gray-200 p-4 flex flex-col gap-3"
              >
                <div className="w-10 h-10 bg-orange-100 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-[13px] text-[var(--cds-text-primary)] font-semibold leading-tight mb-1">{item.headline}</p>
                  <p className="text-[11px] text-[#525252]">{item.subtext}</p>
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
                            ? 'text-[#161616] border-[#f97316] bg-[#f4f4f4] font-semibold'
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
              <section id="value" className="py-20 border-b border-gray-200">
                <div className="max-w-5xl mx-auto px-6">
                  <span className="carbon-label-01 text-[#f97316] uppercase tracking-wide mb-3 block">
                    Business Value
                  </span>
                  <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">
                    Why Jira for ITSM?
                  </h2>
                  <p className="carbon-body-01 text-[#525252] mb-8">
                    Traditional ITSM platforms are complex, expensive, and slow to implement. 
                    Jira Service Management brings a fresh approach-combining enterprise-grade 
                    ITIL capabilities with the speed and flexibility modern teams demand. 
                    Unite your development and IT operations on a single platform.
                  </p>

                  {/* Risk Warning */}
                  <div className="mb-8 p-4 border-l-4 border-orange-500 bg-orange-50">
                    <div className="flex items-start gap-3">
                      <WarningAlt className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="carbon-label-01 text-orange-700 mb-1">The Cost of Legacy ITSM</p>
                        <p className="carbon-body-01 text-[#525252]">
                          Organizations using legacy platforms often face 6-12 month implementations, 
                          steep licensing costs, and poor developer adoption. Siloed tools create 
                          friction between teams and slow down service delivery.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Value Props */}
                  <div className="grid md:grid-cols-2 gap-4 mb-12">
                    {[
                      { icon: Lightning, title: 'Faster Implementation', desc: 'Deploy in weeks, not months. Pre-built templates and intuitive configuration get you up and running quickly.' },
                      { icon: ChartLine, title: 'Lower Total Cost', desc: 'Transparent pricing without hidden fees. Reduce licensing costs by 50-70% compared to enterprise alternatives.' },
                      { icon: AppConnectivity, title: 'Developer-Friendly', desc: 'Native integration with Jira Software, Bitbucket, and Confluence. Developers actually want to use it.' },
                      { icon: Cloud, title: 'Integrated Ecosystem', desc: 'One platform for IT, development, and business teams. Break down silos and improve collaboration.' }
                    ].map((item) => (
                      <div key={item.title} className="p-5 bg-white border border-gray-200">
                        <div className="w-10 h-10 bg-orange-100 flex items-center justify-center mb-4">
                          <item.icon className="w-5 h-5 text-orange-600" />
                        </div>
                        <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">{item.title}</h3>
                        <p className="carbon-body-01 text-[#525252]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Visual Break: Full-Width Image Banner */}
                  <div className="relative w-full h-64 md:h-80 bg-gradient-to-r from-[#f4f4f4] to-[#e5e5e5] border border-[#e0e0e0] overflow-hidden">
                    {/* Carbon Pictogram Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="30" stroke="#f97316" strokeWidth="2"/>
                        <circle cx="150" cy="80" r="40" stroke="#f97316" strokeWidth="2"/>
                        <circle cx="280" cy="60" r="25" stroke="#f97316" strokeWidth="2"/>
                        <rect x="80" y="120" width="60" height="60" stroke="#f97316" strokeWidth="2"/>
                        <rect x="200" y="100" width="80" height="80" stroke="#f97316" strokeWidth="2"/>
                      </svg>
                    </div>
                    {/* Center Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                      <Group className="w-16 h-16 text-[#f97316] mb-4"/>
                      <p className="carbon-label-02 text-[#525252] uppercase tracking-wide mb-2">Visual Asset</p>
                      <p className="carbon-body-01 text-[#161616] max-w-md">
                        Team collaboration workspace photo or Jira dashboard screenshot showing 
                        modern ITSM interface with tickets, workflows, and metrics
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* CORE ITSM SECTION */}
              <section id="features" className="py-20 border-b border-gray-200">
                <div className="max-w-5xl mx-auto px-6">
                  <span className="carbon-label-01 text-[#f97316] uppercase tracking-wide mb-3 block">
                    Core ITSM
                  </span>
                  <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">
                    Essential Service Management
                  </h2>
                  <p className="carbon-body-01 text-[#525252] mb-12">
                    Foundational ITIL capabilities that keep your services running smoothly-from 
                    incident response to change control.
                  </p>

                  {/* 3-Column Grid for Core Features */}
                  <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {/* Incident */}
                    <div className="p-5 bg-white border border-[#e0e0e0]">
                      <Lightning className="w-8 h-8 text-[#f97316] mb-4"/>
                      <h3 className="carbon-heading-02 text-[#161616] mb-2">Incident Management</h3>
                      <p className="carbon-body-01 text-[#525252] mb-3">
                        Intelligent routing, on-call schedules, and swarm collaboration to restore services fast.
                      </p>
                      <ul className="space-y-1 carbon-helper-text-01 text-[#6f6f6f]">
                        <li>• Automated classification & prioritization</li>
                        <li>• Opsgenie on-call integration</li>
                        <li>• Slack/Teams swarm channels</li>
                      </ul>
                    </div>

                    {/* Change */}
                    <div className="p-5 bg-white border border-[#e0e0e0]">
                      <Settings className="w-8 h-8 text-[#0f62fe] mb-4"/>
                      <h3 className="carbon-heading-02 text-[#161616] mb-2">Change Management</h3>
                      <p className="carbon-body-01 text-[#525252] mb-3">
                        Risk-based approvals with calendar scheduling and full audit trails.
                      </p>
                      <ul className="space-y-1 carbon-helper-text-01 text-[#6f6f6f]">
                        <li>• Risk assessment workflows</li>
                        <li>• Change calendar & conflict detection</li>
                        <li>• CI/CD pipeline integration</li>
                      </ul>
                    </div>

                    {/* Problem */}
                    <div className="p-5 bg-white border border-[#e0e0e0]">
                      <WarningAlt className="w-8 h-8 text-[#da1e28] mb-4"/>
                      <h3 className="carbon-heading-02 text-[#161616] mb-2">Problem Management</h3>
                      <p className="carbon-body-01 text-[#525252] mb-3">
                        Link related incidents, track root cause analysis, prevent recurrences.
                      </p>
                      <ul className="space-y-1 carbon-helper-text-01 text-[#6f6f6f]">
                        <li>• Incident clustering & trend analysis</li>
                        <li>• Known error database</li>
                        <li>• RCA workflow templates</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* SELF-SERVICE SECTION */}
              <section className="py-20 border-b border-gray-200 bg-[#f4f4f4]">
                <div className="max-w-5xl mx-auto px-6">
                  <span className="carbon-label-01 text-[#f97316] uppercase tracking-wide mb-3 block">
                    Self-Service
                  </span>
                  <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">
                    Empower Your Users
                  </h2>
                  <p className="carbon-body-01 text-[#525252] mb-12">
                    Reduce ticket volume and improve satisfaction with intuitive self-service 
                    experiences powered by Confluence.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Service Catalog - Large Card */}
                    <div className="bg-white border border-[#e0e0e0] p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-[#f97316]/10 flex items-center justify-center flex-shrink-0">
                          <Catalog className="w-6 h-6 text-[#f97316]"/>
                        </div>
                        <div>
                          <h3 className="carbon-heading-02 text-[#161616] mb-2">Service Catalog</h3>
                          <p className="carbon-body-01 text-[#525252]">
                            Branded portals with no-code request forms, automated fulfillment, and approval workflows.
                          </p>
                        </div>
                      </div>
                      {/* Visual Placeholder */}
                      <div className="mt-6 aspect-video bg-[#f4f4f4] border border-[#e0e0e0] flex items-center justify-center">
                        <div className="text-center p-4">
                          <Catalog className="w-8 h-8 text-[#c6c6c6] mx-auto mb-2"/>
                          <p className="carbon-helper-text-01 text-[#6f6f6f]">
                            Service portal screenshot with request forms
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Knowledge Base - Large Card */}
                    <div className="bg-white border border-[#e0e0e0] p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-[#0f62fe]/10 flex items-center justify-center flex-shrink-0">
                          <Book className="w-6 h-6 text-[#0f62fe]"/>
                        </div>
                        <div>
                          <h3 className="carbon-heading-02 text-[#161616] mb-2">Knowledge Base</h3>
                          <p className="carbon-body-01 text-[#525252]">
                            Native Confluence integration with AI-powered recommendations and article health metrics.
                          </p>
                        </div>
                      </div>
                      {/* Visual Placeholder */}
                      <div className="mt-6 aspect-video bg-[#f4f4f4] border border-[#e0e0e0] flex items-center justify-center">
                        <div className="text-center p-4">
                          <Book className="w-8 h-8 text-[#c6c6c6] mx-auto mb-2"/>
                          <p className="carbon-helper-text-01 text-[#6f6f6f]">
                            Confluence knowledge base with article templates
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* INTELLIGENCE & ASSETS SECTION */}
              <section className="py-20 border-b border-gray-200">
                <div className="max-w-5xl mx-auto px-6">
                  <span className="carbon-label-01 text-[#f97316] uppercase tracking-wide mb-3 block">
                    Intelligence & Assets
                  </span>
                  <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">
                    Insights & Infrastructure
                  </h2>
                  <p className="carbon-body-01 text-[#525252] mb-12">
                    Measure performance, track assets, and make data-driven decisions with 
                    powerful analytics and CMDB capabilities.
                  </p>

                  <div className="space-y-6">
                    {/* Dashboards */}
                    <div className="flex gap-6 p-6 bg-white border border-[#e0e0e0]">
                      <div className="w-16 h-16 bg-[#f4f4f4] flex items-center justify-center flex-shrink-0">
                        <Dashboard className="w-8 h-8 text-[#f97316]"/>
                      </div>
                      <div className="flex-1">
                        <h3 className="carbon-heading-02 text-[#161616] mb-2">SLA & Metrics Dashboards</h3>
                        <p className="carbon-body-01 text-[#525252] mb-4">
                          Multi-condition SLA goals, real-time performance tracking, and custom reporting to identify improvement opportunities.
                        </p>
                        {/* Visual Placeholder */}
                        <div className="h-48 bg-[#f4f4f4] border border-[#e0e0e0] flex items-center justify-center">
                          <div className="text-center p-4">
                            <Dashboard className="w-10 h-10 text-[#c6c6c6] mx-auto mb-2"/>
                            <p className="carbon-helper-text-01 text-[#6f6f6f]">
                              JSM dashboard showing SLA compliance, ticket trends, and team metrics
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Asset Management */}
                    <div className="flex gap-6 p-6 bg-white border border-[#e0e0e0]">
                      <div className="w-16 h-16 bg-[#f4f4f4] flex items-center justify-center flex-shrink-0">
                        <Asset className="w-8 h-8 text-[#0f62fe]"/>
                      </div>
                      <div className="flex-1">
                        <h3 className="carbon-heading-02 text-[#161616] mb-2">Asset Management with Insight</h3>
                        <p className="carbon-body-01 text-[#525252] mb-4">
                          Automated discovery, CMDB relationship mapping, and lifecycle tracking for complete infrastructure visibility.
                        </p>
                        {/* Visual Placeholder */}
                        <div className="h-48 bg-[#f4f4f4] border border-[#e0e0e0] flex items-center justify-center">
                          <div className="text-center p-4">
                            <Asset className="w-10 h-10 text-[#c6c6c6] mx-auto mb-2"/>
                            <p className="carbon-helper-text-01 text-[#6f6f6f]">
                              Insight CMDB showing asset relationships and dependencies
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Comparison Section */}
              <section id="comparison" className="py-20 border-b border-gray-200">
                <div className="max-w-5xl mx-auto px-6">
                  <span className="carbon-label-01 text-[#f97316] uppercase tracking-wide mb-3 block">
                    Compare
                  </span>
                  <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">
                    Platform Comparison
                  </h2>
                  <p className="carbon-body-01 text-[#525252] mb-8">
                    How Jira Service Management compares to leading alternatives across key dimensions.
                  </p>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-gray-200">
                          <th className="text-left py-3 px-4 carbon-label-01 text-[var(--cds-text-primary)]">Capability</th>
                          <th className="text-center py-3 px-4 carbon-label-01 text-[#f97316]">Jira SM</th>
                          <th className="text-center py-3 px-4 carbon-label-01 text-gray-500">ServiceNow</th>
                          <th className="text-center py-3 px-4 carbon-label-01 text-gray-500">Zendesk</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { cap: 'Time to Deploy', jira: '✓ Weeks', snow: '✗ 6-12 months', zendesk: '△ 1-2 months' },
                          { cap: 'Pricing Model', jira: '✓ Transparent', snow: '✗ Complex/Negotiated', zendesk: '△ Tiered' },
                          { cap: 'Developer Adoption', jira: '✓ High', snow: '✗ Low', zendesk: '△ Medium' },
                          { cap: 'ITIL Compliance', jira: '✓ Certified', snow: '✓ Certified', zendesk: '△ Basic' },
                          { cap: 'Custom Workflows', jira: '✓ Flexible', snow: '✓ Complex', zendesk: '△ Limited' },
                          { cap: 'Dev Tool Integration', jira: '✓ Native', snow: '△ Connectors', zendesk: '✗ Limited' },
                          { cap: 'Total Cost (3 years)', jira: '✓ $', snow: '✗ $$$$$', zendesk: '△ $$' }
                        ].map((row, i) => (
                          <tr key={i} className="border-b border-gray-100">
                            <td className="py-3 px-4 text-gray-900 font-medium">{row.cap}</td>
                            <td className="py-3 px-4 text-center text-green-600 font-medium">{row.jira}</td>
                            <td className="py-3 px-4 text-center text-gray-400">{row.snow}</td>
                            <td className="py-3 px-4 text-center text-gray-400">{row.zendesk}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Recommendation Callout */}
                  <div className="mt-8 p-6 bg-[#f4f4f4] border-l-4 border-[#f97316]">
                    <p className="carbon-body-01 text-[#161616]">
                      <strong>Our Recommendation:</strong> Choose <span className="text-[#f97316] font-semibold">Jira Service Management</span> for 
                      modern teams wanting fast time-to-value, developer-friendly tools, and lower total cost.
                    </p>
                  </div>
                </div>
              </section>

              {/* Case Studies Section */}
              <section id="cases" className="py-20 border-b border-gray-200">
                <div className="max-w-5xl mx-auto px-6">
                  <span className="carbon-label-01 text-[#f97316] uppercase tracking-wide mb-3 block">
                    Success Stories
                  </span>
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)]">Client Results</h2>
                    <span className="text-sm text-gray-500">
                      {currentCaseStudy + 1} of {caseStudies.length}
                    </span>
                  </div>

                  {/* Case Study Card - ServiceNow Style */}
                  <div className="bg-white border border-gray-200 overflow-hidden">
                    {caseStudies.map((study, index) => (
                      index === currentCaseStudy && (
                        <div key={study.id} className="grid grid-cols-12 gap-0">
                          {/* Left: Image (4 cols) */}
                          <div className="col-span-12 md:col-span-4 relative bg-gray-100 min-h-[300px]">
                            {/* Main Image Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                              <div className="text-center p-6">
                                <Building className="w-16 h-16 text-gray-300 mx-auto mb-3" />
                                <span className="text-gray-400 text-sm">Company/Industry Photo</span>
                              </div>
                            </div>
                            
                            {/* Case Study Number Badge */}
                            <div className="absolute top-4 left-4 px-3 py-1 bg-white border border-gray-200 shadow-sm">
                              <span className="text-xs font-medium text-gray-700">Case Study {currentCaseStudy + 1} of {caseStudies.length}</span>
                            </div>
                            
                            {/* Company Logo - Bottom Left */}
                            <div className="absolute bottom-4 left-4 px-4 py-3 bg-white rounded-lg shadow-md border border-gray-200 flex items-center gap-2">
                              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                                <span className="text-xs text-gray-400">LOGO</span>
                              </div>
                              <span className="text-xs font-medium text-gray-600">Company Name</span>
                            </div>
                          </div>
                          
                          {/* Middle: Content (5 cols) */}
                          <div className="col-span-12 md:col-span-5 p-6 md:p-8 flex flex-col justify-between border-r border-gray-200">
                            <div>
                              {/* Tags */}
                              <div className="flex flex-wrap gap-2 mb-4">
                                {study.tags.map((tag) => (
                                  <span 
                                    key={tag.text}
                                    className="px-2 py-1 text-xs font-medium rounded-sm"
                                    style={{ 
                                      backgroundColor: tag.color === 'blue' ? '#e5f6ff' : 
                                                      tag.color === 'green' ? '#ddefe5' :
                                                      '#f0e6ff',
                                      color: tag.color === 'blue' ? '#0066cc' : 
                                             tag.color === 'green' ? '#198038' :
                                             '#6929c4'
                                    }}
                                  >
                                    {tag.text}
                                  </span>
                                ))}
                              </div>
                              
                              {/* Title */}
                              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                {study.title}
                              </h3>
                              
                              {/* Description */}
                              <p className="text-gray-600 mb-6">
                                {study.description}
                              </p>
                              
                              {/* Quote if available */}
                              {study.quote && (
                                <div className="bg-gray-50 p-4 border-l-4 border-[#f97316] mb-4">
                                  <p className="text-gray-700 italic text-sm mb-2">"{study.quote.text}"</p>
                                  <p className="text-xs text-gray-500">- {study.quote.author}</p>
                                </div>
                              )}
                            </div>
                            
                            {/* CTA */}
                            <a
                              href="#contact"
                              className="inline-flex items-center gap-2 text-[#f97316] font-medium hover:gap-3 transition-all"
                            >
                              Read full case study
                              <ArrowRight className="w-4 h-4" />
                            </a>
                          </div>
                          
                          {/* Right: Stats (3 cols) */}
                          <div className="col-span-12 md:col-span-3 bg-gray-50 p-6 md:p-8">
                            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-5">
                              Key Results
                            </p>
                            
                            <div className="space-y-5">
                              {study.stats.map((stat, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                  <div 
                                    className="w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-sm"
                                    style={{ backgroundColor: `${stat.color}15` }}
                                  >
                                    <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
                                  </div>
                                  <div>
                                    <div className="text-lg font-bold" style={{ color: stat.color }}>
                                      {stat.value}
                                    </div>
                                    <div className="text-xs text-gray-500">{stat.label}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )
                    ))}
                  </div>
                  
                  {/* Pagination Controls */}
                  <div className="flex items-center justify-center gap-3 mt-8">
                    <button
                      onClick={prevCaseStudy}
                      className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:border-[#f97316] hover:bg-gray-50 transition-all"
                      aria-label="Previous case study"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-500 rotate-180" />
                    </button>
                    
                    <div className="flex items-center gap-2">
                      {caseStudies.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentCaseStudy(idx)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            idx === currentCaseStudy ? 'bg-[#f97316]' : 'bg-gray-300'
                          }`}
                          aria-label={`Go to case study ${idx + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={nextCaseStudy}
                      className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:border-[#f97316] hover:bg-gray-50 transition-all"
                      aria-label="Next case study"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>
                </div>
              </section>

              {/* Engagement Section */}
              <section id="engagement" className="py-20">
                <div className="max-w-5xl mx-auto px-6">
                  <span className="carbon-label-01 text-[#f97316] uppercase tracking-wide mb-3 block">
                    How We Work
                  </span>
                  <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-6">
                    Engagement Model
                  </h2>
                  <p className="carbon-body-01 text-[#525252] mb-8">
                    From assessment to production, we guide you through every step of your 
                    Jira Service Management journey with proven methodologies and expert support.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mb-10">
                    {[
                      { step: '01', title: 'Discovery & Assessment', desc: 'Understand your current state, pain points, and goals. Free assessment with recommendations.', color: 'green' },
                      { step: '02', title: 'Design & Configure', desc: 'Custom workflows, forms, and automations designed for your processes and requirements.', color: 'blue' },
                      { step: '03', title: 'Deploy & Optimize', desc: 'Phased rollout with training, documentation, and continuous improvement programs.', color: 'purple' }
                    ].map((item) => (
                      <div key={item.step} className="relative p-6 bg-white border border-gray-200">
                        <span className="absolute top-4 right-4 carbon-heading-02 text-[#c6c6c6]">{item.step}</span>
                        <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">{item.title}</h3>
                        <p className="carbon-body-01 text-[#525252]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA Banner */}
                  <div className="p-8 bg-[#f97316] text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Start Your ITSM Transformation
                    </h3>
                    <p className="text-orange-100 mb-6">
                      Get a free assessment of your current ITSM setup. We'll identify 
                      opportunities and create a roadmap tailored to your organization.
                    </p>
                    <a 
                      href="mailto:info@perception-it.com"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#f97316] carbon-heading-02 hover:bg-gray-100 transition-colors"
                    >
                      Request Free Assessment
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <p className="text-orange-200 text-sm mt-4">
                      Response within 24 hours. Certified Atlassian consultants.
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

export default JiraServiceManagement;
