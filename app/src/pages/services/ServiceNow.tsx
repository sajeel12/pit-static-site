import { useEffect, useRef, useState } from 'react';
import '../../styles/carbon-typography.css';
// Batch 1: Carbon Icons (exact name matches)
import {
  ArrowRight,
  Settings,
  Activity,
  Code,
  Layers,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight
} from '@carbon/icons-react';

// Batch 2: Carbon Icons (simple name changes)
import {
  Chat,
  Building,
  Security,
  Lightning,
  Locked,
  UserMultiple,
  Quotes,
  Headphones
} from '@carbon/icons-react';

// Batch 3: Carbon Icons (complex mappings)
import {
  Time,
  DataBase,
  Network_1,
  ServerDns,
  Cloud
} from '@carbon/icons-react';

// Pictogram for Automation
import { IbmAutomationPlatform } from '@carbon/pictograms-react';

// Batch 4: Final Lucide→Carbon migrations
import {
  ArrowUp,
  Alarm
} from '@carbon/icons-react';

// Batch 5: Remaining Lucide icons (no Carbon equivalent)
// Server kept from Batch 3
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';
import SidebarMenu from '../../components/SidebarMenu';
import SectionTabs from '../../components/SectionTabs';
import ServiceNowHero from '../../components/ServiceNowHero';

const ServiceNow = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  
  // Case Studies Carousel State
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0);
  
  // TCO Calculator State
  const [tcoUserMultiple, setTcoUserMultiple] = useState(500);
  const [tcoToolset, setTcoToolset] = useState<'excel' | 'jira' | 'legacy'>('excel');
  const [tcoModules, setTcoModules] = useState<string[]>(['itsm']);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const brandColor = 'var(--cds-button-primary)';

  // Sidebar menu items
  const sidebarItems = [
    { id: 'offerings', label: 'ServiceNow Offerings' },
    { id: 'expertise', label: 'Technological Expertise' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'testimonial', label: 'Client Testimonial' },
    { id: 'tco-calculator', label: 'TCO Calculator' },
    { id: 'framework', label: 'Success Framework' },
    { id: 'compliance', label: 'Compliance' },
    { id: 'next-steps', label: 'Next Steps' },
    { id: 'complementary', label: 'Complementary Solutions' }
  ];

  // ServiceNow Offerings Data
  const offerings = [
    {
      id: 'consultation',
      icon: Chat,
      title: 'Consultation',
      duration: '2-4 weeks',
      descriptionBold: "Secure your build by identifying integration risks on Day 1.",
      descriptionNormal: "Our risk-mapped approach ensures your business case is solid before a single line of code is written.",
      shortTags: ['Current State & Gap Analysis', 'SBP-Aligned Roadmap', 'TCO & ROI Modeling'],
      detailHeading: "We cover:",
      detailBullets: [
        { title: 'Current State & Gap Analysis:', desc: 'Including legacy hardware assessment.' },
        { title: 'SBP-Aligned Roadmap:', desc: 'Compliance-ready architecture design.' },
        { title: 'TCO & ROI Modeling:', desc: 'Fixed-scope financial projections.' },
        { title: 'Outcome:', desc: 'A de-risked blueprint ready for immediate execution.' }
      ],
      cta: 'Get Your Risk Assessment',
      color: 'bg-blue-500',
      link: '#contact'
    },
    {
      id: 'implementation',
      icon: Settings,
      title: 'Rapid Implementation',
      duration: '8 Weeks',
      descriptionBold: 'Go live faster, with zero integration blind spots.',
      descriptionNormal: 'Our proven methodology deploys core ITSM modules in 8 weeks. Unlike pure software shops, we integrate your physical infrastructure (Huawei/Servers) from Day 1.',
      shortTags: ['Native Configuration', 'Full-Stack Integration', 'Data Migration'],
      detailHeadingBold: 'We deliver:',
      detailHeadingNormal: null,
      detailBullets: [
        { title: 'Native Configuration:', desc: 'Upgrade-safe workflows using Flow Designer.' },
        { title: 'Full-Stack Integration:', desc: 'Bridging hardware telemetry to ServiceNow ITOM.' },
        { title: 'Data Migration:', desc: '99% accurate CMDB population via risk-mapped audits.' },
        { title: 'Go Live:', desc: 'Go-live in 8 weeks' }
      ],
      cta: 'Start Your 8-Week Deployment',
      color: 'bg-green-500',
      link: '#contact'
    },
    {
      id: 'support',
      icon: Headphones,
      title: 'Managed Support & Optimization',
      duration: 'Ongoing',
      descriptionBold: 'One partner for your software and underlying infrastructure.',
      descriptionNormal: 'Stop managing multiple vendors. Our Lahore-based NOC provides 24/7 oversight of both your ServiceNow instance and the servers it runs on.',
      shortTags: ['Unified 24/7 NOC', 'Proactive CMDB Health', 'Quarterly Business Reviews'],
      detailHeadingBold: 'SLA Backed:',
      detailHeadingNormal: '99.95% uptime guarantee with contractual penalties.',
      detailBullets: [
        { title: 'Unified 24/7 NOC:', desc: 'Single point of contact for app AND infrastructure alerts.' },
        { title: 'Proactive CMDB Health:', desc: 'Continuous data cleansing and asset reconciliation.' },
        { title: 'Quarterly Business Reviews:', desc: 'Strategic optimization aligned with your growth.' }
      ],
      cta: 'View Support SLAs',
      color: 'bg-purple-500',
      link: '#contact'
    }
  ];

  // Technology Expertise Data
  // Case Studies Data
  const caseStudies = [
    {
      id: 'migration',
      link: '/projects/case-study/telco-service-desk-it-process-migration-to-servicenow',
      icon: Building,
      iconColor: brandColor,
      tags: [
        { text: 'Telecom', class: 'bg-[var(--cds-layer-accent)] text-[var(--cds-link-primary-hover)]' },
        { text: 'Migration', class: 'bg-[var(--cds-layer-accent)] text-[var(--cds-link-primary-hover)]' },
        { text: 'ServiceNow', class: 'bg-[var(--cds-layer-02)] text-[var(--cds-text-secondary)]' }
      ],
      title: "Enabling 99.95% uptime and 24/7 follow-the-sun support for Pakistan's largest telecom through ServiceNow Cloud migration",
      description: "Pakistan's largest telecommunications provider modernised their service desk and migrated to ServiceNow Cloud, enabling 24/7 follow-the-sun support operations with 99.95% platform availability.",
      stats: [
        { icon: ArrowUp, iconBg: 'bg-[var(--cds-layer-accent)]', iconColor: 'text-[var(--cds-link-primary)]', value: '99.95%', label: 'Uptime SLA' },
        { icon: Alarm, iconBg: 'bg-[var(--cds-layer-accent)]', iconColor: 'text-[var(--cds-link-primary)]', value: '24/7', label: 'Coverage' },
        { icon: Activity, iconBg: `${brandColor}15`, iconColor: brandColor, value: '52%', label: 'Faster Resolution' }
      ]
    },
    {
      id: 'automation',
      link: '/projects/case-study/servicenow-incident-automation',
      icon: Lightning,
      iconColor: 'var(--cds-support-warning)',
      bgGradient: 'linear-gradient(135deg, var(--cds-layer-01), var(--cds-layer-02))',
      tags: [
        { text: 'Automation', class: 'bg-[var(--cds-support-warning-subtle)] text-[var(--cds-support-warning)]' },
        { text: 'Integration', class: 'bg-[var(--cds-layer-accent)] text-[var(--cds-link-primary-hover)]' },
        { text: 'ServiceNow', class: 'bg-[var(--cds-layer-02)] text-[var(--cds-text-secondary)]' }
      ],
      title: '40% faster incident resolution for major telecom through intelligent ServiceNow automation',
      description: 'Developed an intelligent microservice bridge integrating network alarms with ServiceNow, eliminating manual incident handling and reducing response times through automated correlation and smart routing.',
      stats: [
        { icon: Lightning, iconBg: 'bg-[var(--cds-support-warning-subtle)]', iconColor: 'text-[var(--cds-support-warning)]', value: '40%', label: 'Less Manual Work' },
        { icon: Activity, iconBg: 'bg-[var(--cds-layer-accent)]', iconColor: 'text-[var(--cds-link-primary)]', value: '98%', label: 'SLA Compliance' },
        { icon: Time, iconBg: 'bg-[var(--cds-layer-accent)]', iconColor: 'text-[var(--cds-link-primary)]', value: '45%', label: 'Faster Resolution' }
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
    
    const currentAnnualCost = tcoUserMultiple * baseCostPerUser[tcoToolset] * (tcoModules.includes('itom') && tcoModules.includes('itsm') ? moduleMultiplier.itsm_itom : tcoModules.includes('itom') ? moduleMultiplier.itom : moduleMultiplier.itsm);
    const hiddenCosts = currentAnnualCost * 0.35; // Downtime, manual labor
    const current3Year = (currentAnnualCost + hiddenCosts) * 3;
    
    const perceptionCost = tcoUserMultiple * 320 * (tcoModules.includes('itom') && tcoModules.includes('itsm') ? 1.6 : tcoModules.includes('itom') ? 1.3 : 1);
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
    <div className="min-h-screen bg-[var(--cds-background)]">
      <Navigation />
      
      <ServiceNowHero onScrollToSection={scrollToSection} />

      {/* Mobile Section Tabs - Horizontal scroll */}
      <SectionTabs items={sidebarItems} brandColor={brandColor} />

      {/* Main content wrapper with sidebar - starts after hero */}
      <div className="flex">
        {/* Sidebar - Sticky, IBM-style 256px width with 32px gap */}
        <div className="hidden xl:block flex-shrink-0" style={{ marginRight: '32px' }}>
          <SidebarMenu items={sidebarItems} brandColor={brandColor} />
        </div>
        
        {/* Main content */}
        <div className="flex-1 min-w-0">
        {/* ServiceNow Offerings Section */}
        <section id="offerings" ref={servicesRef} className="py-24 bg-white">
        <div className="cds--css-grid">
        <div className="cds--col-span-16 cds--col-span-16--lg">
          <div className="mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--cds-text-helper)] mb-4 block" style={{ color: brandColor }}>
              Our Services
            </span>
            <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-4">
              ServiceNow Offerings
            </h2>
            <p className="carbon-body-02 text-[var(--cds-text-secondary)] max-w-2xl">
              End-to-end ServiceNow services from strategy to ongoing support
            </p>
          </div>

          <div className="cds--css-grid gap-6" style={{ padding: 0 }}>
            {offerings.map((offering) => (
              <div 
                key={offering.id}
                className="cds--col-span-5 cds--col-span-5--md group relative bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[var(--cds-link-primary)] hover:-translate-y-1 flex flex-col h-full"
              >
                {/* Color accent bar - left side */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--cds-link-primary)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                
                <div className="p-8 flex flex-col h-full">
                  {/* Content area - grows to push CTA down */}
                  <div className="flex-grow">
                    {/* Icon and Title */}
                    <div className="flex items-start gap-4 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-[var(--cds-layer-accent)] flex items-center justify-center text-[var(--cds-link-primary)] transition-colors group-hover:bg-[var(--cds-link-primary)] group-hover:text-[var(--cds-text-inverse)] flex-shrink-0">
                        <offering.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="carbon-heading-03 text-[var(--cds-text-primary)] mb-1">{offering.title}</h3>
                        <div className="flex items-center gap-2 carbon-body-compact-01 text-[var(--cds-text-helper)]">
                          <Time className="w-4 h-4 text-[var(--cds-link-primary)]" />
                          <span>{offering.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      {offering.descriptionBold && (
                        <>
                          <p className="carbon-body-02 font-semibold text-[var(--cds-text-primary)] leading-relaxed">
                            {offering.descriptionBold}
                          </p>
                          <p className="carbon-body-compact-02 text-[var(--cds-text-helper)] leading-relaxed mt-2">
                            {offering.descriptionNormal}
                          </p>
                        </>
                      )}
                    </div>

                    {/* Expandable detail description on hover */}
                    <div className="max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-64 mb-0 group-hover:mb-6">
                      <div className="bg-[var(--cds-layer-02)] p-4 rounded-lg">
                        {offering.detailHeadingBold && (
                          <p className="leading-relaxed mb-2">
                            <span className="carbon-label-02 font-bold text-[var(--cds-text-primary)]">
                              {offering.detailHeadingBold}
                            </span>
                            {offering.detailHeadingNormal && (
                              <span className="carbon-body-compact-01 text-[var(--cds-text-secondary)] ml-1">
                                {offering.detailHeadingNormal}
                              </span>
                            )}
                          </p>
                        )}
                        {offering.detailBullets && (
                          <ul className="space-y-1.5">
                            {offering.detailBullets.map((bullet, idx) => (
                              <li key={idx} className="carbon-helper-text-02 text-[var(--cds-text-secondary)] leading-snug">
                                <span className="font-semibold text-[var(--cds-text-primary)]">- {bullet.title}</span> {bullet.desc}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-x-2 gap-y-3 mb-8">
                      {offering.shortTags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1.5 text-xs font-medium text-[var(--cds-text-secondary)] bg-[var(--cds-layer-02)] rounded-full border border-transparent group-hover:border-[var(--cds-link-primary)]/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA - always at bottom */}
                  <a
                    href={offering.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--cds-link-primary)] hover:text-[var(--cds-link-primary-hover)] transition-all group-hover:gap-3 pt-5 border-t border-[var(--cds-border-subtle)]"
                  >
                    {offering.cta} <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Technological Expertise Section - Category Grouping */}
      {/* Technological Expertise Section */}
      <section id="expertise" className="py-24 bg-[var(--cds-layer-01)]">
        <div className="cds--css-grid">
          <div className="cds--col-span-16 cds--col-span-16--lg">
            {/* Section Header */}
            <div className="mb-12">
              <div className="cds--tag cds--tag--blue mb-4">
                <Settings className="w-4 h-4 mr-2" />
                Technical Capabilities
              </div>
              <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-4">
                Technological Expertise
              </h2>
              <p className="carbon-body-02 text-[var(--cds-text-secondary)] max-w-2xl">
                Deep technical knowledge across the entire ServiceNow platform
              </p>
            </div>

            {/* Expertise Grid - 4 Column Layout */}
            <div className="cds--css-grid" style={{ padding: 0 }}>
              {/* Column 1: Core Platform */}
              <div className="cds--col-span-4 cds--col-span-4--md">
                <div className="cds--tile bg-white h-full" style={{ padding: 'var(--cds-spacing-06)' }}>
                  <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[var(--cds-link-primary)] flex items-center justify-center">
                      <Layers className="w-5 h-5 text-white" />
                    </div>
                    Core Platform
                  </h3>
                  <ul className="cds--list--unordered space-y-2">
                    {['ITSM', 'CMDB', 'Service Portal', 'Workflow Editor', 'Business Rules', 'SLA Definitions'].map((item) => (
                      <li key={item} className="cds--list__item">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Column 2: Development */}
              <div className="cds--col-span-4 cds--col-span-4--md">
                <div className="cds--tile bg-white h-full" style={{ padding: 'var(--cds-spacing-06)' }}>
                  <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[var(--cds-support-success)] flex items-center justify-center">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    Development
                  </h3>
                  <ul className="cds--list--unordered space-y-2">
                    {['JavaScript', 'Glide API', 'Script Includes', 'Client Scripts', 'UI Policies', 'Source Control'].map((item) => (
                      <li key={item} className="cds--list__item">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Column 3: Integration */}
              <div className="cds--col-span-4 cds--col-span-4--md">
                <div className="cds--tile bg-white h-full" style={{ padding: 'var(--cds-spacing-06)' }}>
                  <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[var(--cds-support-warning)] flex items-center justify-center">
                      <Network_1 className="w-5 h-5 text-[var(--cds-text-primary)]" />
                    </div>
                    Integration
                  </h3>
                  <ul className="cds--list--unordered space-y-2">
                    {['REST APIs', 'IntegrationHub', 'Flow Designer', 'Orchestration', 'MID Server', 'Import Sets'].map((item) => (
                      <li key={item} className="cds--list__item">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Column 4: ITOM & Discovery */}
              <div className="cds--col-span-4 cds--col-span-4--md">
                <div className="cds--tile bg-white h-full" style={{ padding: 'var(--cds-spacing-06)' }}>
                  <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[var(--cds-support-error)] flex items-center justify-center">
                      <Activity className="w-5 h-5 text-white" />
                    </div>
                    ITOM & Discovery
                  </h3>
                  <ul className="cds--list--unordered space-y-2">
                    {['Discovery', 'Service Mapping', 'Event Management', 'Cloud Operations', 'Transform Maps', 'Scheduled Jobs'].map((item) => (
                      <li key={item} className="cds--list__item">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Carousel */}
      <section id="case-studies" className="py-24 bg-white">
        <div className="cds--css-grid">
        <div className="cds--col-span-16 cds--col-span-16--lg">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--cds-text-helper)] mb-4 block" style={{ color: brandColor }}>
                Success Stories
              </span>
              <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)]">
                Case Studies
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                to="/projects"
                className="hidden md:inline-flex items-center gap-2 text-[var(--cds-link-primary)] carbon-link-01 hover:text-[var(--cds-link-primary-hover)] transition-colors mr-4"
              >
                View all case studies
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center gap-3">
                <button
                  onClick={prevCaseStudy}
                className="w-10 h-10 rounded-full border border-[var(--cds-border-subtle)] flex items-center justify-center hover:border-[var(--cds-focus)] hover:bg-[var(--cds-layer-accent)] transition-all"
              >
                <ChevronLeft className="w-5 h-5 text-[var(--cds-text-secondary)]" />
              </button>
              <div className="flex gap-2">
                {caseStudies.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentCaseStudy(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentCaseStudy ? 'bg-[var(--cds-layer-accent)] w-6' : 'bg-[var(--cds-layer-03)]'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextCaseStudy}
                className="w-10 h-10 rounded-full border border-[var(--cds-border-subtle)] flex items-center justify-center hover:border-[var(--cds-focus)] hover:bg-[var(--cds-layer-accent)] transition-all"
              >
                <ChevronRight className="w-5 h-5 text-[var(--cds-text-secondary)]" />
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
                  <div className="bg-[var(--cds-layer-01)] rounded-2xl p-8 md:p-12">
                    <div className="cds--css-grid" style={{ padding: 0 }}>
                      <div className="cds--col-span-8 cds--col-span-8--lg">
                        <div className="flex flex-wrap gap-2 mb-6">
                          {study.tags.map((tag) => (
                            <span 
                              key={tag.text}
                              className={`px-3 py-1 rounded-full carbon-label-01 ${tag.class}`}
                            >
                              {tag.text}
                            </span>
                          ))}
                        </div>
                        <h3 className="carbon-fluid-heading-04 text-[var(--cds-text-primary)] mb-4">
                          {study.title}
                        </h3>
                        <p className="carbon-body-02 text-[var(--cds-text-secondary)] mb-8 leading-relaxed">
                          {study.description}
                        </p>
                        <Link
                          to={study.link}
                          className="inline-flex items-center gap-2 text-[var(--cds-link-primary)] carbon-link-01 hover:text-[var(--cds-link-primary-hover)] transition-colors"
                        >
                          Read full case study
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </div>
                      <div className="cds--col-span-8 cds--col-span-8--lg space-y-6">
                        {/* Photo Placeholder */}
                        <div className="bg-white rounded-xl overflow-hidden border border-[var(--cds-border-subtle)] shadow-sm">
                          <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                            <div className="text-center">
                              <Building className="w-16 h-16 text-[var(--cds-text-secondary)] mx-auto mb-2" />
                              <span className="carbon-helper-text-01 text-[var(--cds-text-secondary)]">Case Study Photo</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Stats */}
                        <div className="cds--css-grid" style={{ padding: 0 }}>
                          {study.stats.map((stat, idx) => (
                            <div key={idx} className="cds--col-span-5 cds--col-span-5--md bg-white rounded-xl p-5 text-center shadow-sm">
                              <div className={`w-12 h-12 rounded-lg ${stat.iconBg} flex items-center justify-center mx-auto mb-3`}>
                                <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                              </div>
                              <div className="text-xl font-bold text-[var(--cds-text-primary)] mb-1">{stat.value}</div>
                              <div className="carbon-helper-text-02 text-[var(--cds-text-helper)]">{stat.label}</div>
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
        </div>
      </section>

      {/* Client Testimonial Section */}
      <section id="testimonial" className="py-24 bg-[var(--cds-layer-01)]">
        <div className="cds--css-grid">
        <div className="cds--col-span-16 cds--col-span-16--lg">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--cds-text-helper)] mb-4 block" style={{ color: brandColor }}>
              Feedback
            </span>
            <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)]">
              Client Testimonial
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-[var(--cds-border-subtle)]">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-[var(--cds-layer-03)] flex items-center justify-center">
                  <UserMultiple className="w-10 h-10 text-[var(--cds-text-placeholder)]" />
                </div>
              </div>
              <div className="flex-1">
                <Quotes className="w-10 h-10 text-[var(--cds-link-secondary)] mb-4" />
                <blockquote 
                  className="carbon-fluid-quotation-01 text-[var(--cds-text-secondary)] mb-6"
                >
                  &quot;Perception IT transformed our IT operations with their ServiceNow expertise. 
                  Their team successfully migrated us from Maximo to ServiceNow with zero downtime, 
                  and the automation they implemented has reduced our incident resolution time by 45%. 
                  Their deep understanding of both the technical and business aspects made all the difference.&quot;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="carbon-heading-01 text-[var(--cds-text-primary)]">Usman Ikram</div>
                    <div className="carbon-helper-text-02 text-[var(--cds-text-helper)]">IT Operations Director, Major Telecom Provider</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* TCO Calculator Section */}
      <section id="tco-calculator" className="py-24 bg-white border-y border-[var(--cds-border-subtle)]">
        <div className="cds--css-grid">
        <div className="cds--col-span-16 cds--col-span-16--lg">
          <div className="mb-10">
            <span className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--cds-text-helper)] mb-4 block" style={{ color: brandColor }}>
              Financial Transparency
            </span>
            <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-4">
              Stop Guessing Your ITSM Budget
            </h2>
            <p className="carbon-body-02 text-[var(--cds-text-secondary)]">
              See Your 3-Year TCO Now
            </p>
          </div>

          <div className="bg-[var(--cds-layer-01)] rounded-xl border border-[var(--cds-border-subtle)] p-8">
            {/* Inputs */}
            <div className="cds--css-grid" style={{ padding: 0, marginBottom: '1.5rem' }}>
              <div className="cds--col-span-5 cds--col-span-5--md">
                <label className="block carbon-label-01 text-[var(--cds-text-secondary)] mb-2">Number of UserMultiple</label>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="100"
                  value={tcoUserMultiple}
                  onChange={(e) => setTcoUserMultiple(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--cds-layer-03)] rounded-lg appearance-none cursor-pointer"
                  style={{ accentColor: brandColor }}
                />
                <div className="text-center mt-2 carbon-heading-02 text-[var(--cds-text-primary)]">{tcoUserMultiple.toLocaleString()}</div>
              </div>

              <div className="cds--col-span-5 cds--col-span-5--md">
                <label className="block carbon-label-01 text-[var(--cds-text-secondary)] mb-2">Current Toolset</label>
                <select
                  value={tcoToolset}
                  onChange={(e) => setTcoToolset(e.target.value as 'excel' | 'jira' | 'legacy')}
                  className="w-full px-4 py-2 border border-[var(--cds-border-subtle)] rounded-lg focus:outline-none focus:border-[var(--cds-border-strong)]"
                >
                  <option value="excel">Excel / Spreadsheets</option>
                  <option value="jira">Jira / Basic Tools</option>
                  <option value="legacy">Legacy ITSM Platform</option>
                </select>
              </div>

              <div className="cds--col-span-5 cds--col-span-5--md">
                <label className="block carbon-label-01 text-[var(--cds-text-secondary)] mb-2">Desired Modules</label>
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
                      className="w-4 h-4 rounded border-[var(--cds-border-strong)]"
                      style={{ accentColor: brandColor }}
                    />
                    <span className="carbon-body-compact-02 text-[var(--cds-text-secondary)]">ITSM (Service Desk)</span>
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
                      className="w-4 h-4 rounded border-[var(--cds-border-strong)]"
                      style={{ accentColor: brandColor }}
                    />
                    <span className="carbon-body-compact-02 text-[var(--cds-text-secondary)]">ITOM (Operations)</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="cds--css-grid" style={{ padding: 0, paddingTop: '2rem', borderTop: '1px solid var(--cds-border-subtle)' }}>
              <div className="cds--col-span-5 cds--col-span-5--md text-center">
                <p className="carbon-helper-text-01 text-[var(--cds-text-helper)] mb-1">Current 3-Year Cost</p>
                <p className="text-3xl font-bold text-[var(--cds-text-primary)]">${tcoResult.current}K</p>
                <p className="carbon-helper-text-01 text-[var(--cds-text-placeholder)] mt-1">Including hidden costs</p>
              </div>
              <div className="cds--col-span-5 cds--col-span-5--md text-center">
                <p className="carbon-helper-text-01 text-[var(--cds-text-helper)] mb-1">Perception-IT Fixed Cost</p>
                <p className="carbon-fluid-heading-04" style={{ color: brandColor }}>${tcoResult.perception}K</p>
                <p className="carbon-helper-text-01 text-[var(--cds-text-placeholder)] mt-1">Fixed-price guarantee</p>
              </div>
              <div className="cds--col-span-5 cds--col-span-5--md text-center">
                <p className="carbon-helper-text-01 text-[var(--cds-text-helper)] mb-1">Your Savings</p>
                <p className="text-3xl font-bold text-[var(--cds-link-primary)]">{tcoResult.savingsPercent}%</p>
                <p className="carbon-helper-text-01 text-[var(--cds-text-placeholder)] mt-1">${tcoResult.savings}K saved</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-white carbon-label-01 rounded-lg transition-all hover:opacity-90"
                style={{ backgroundColor: brandColor }}
              >
                Download Detailed Commercial Model
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ServiceNow Success Framework */}
      <section id="framework" className="py-24 bg-[var(--cds-layer-01)]">
        <div className="cds--css-grid">
        <div className="cds--col-span-16 cds--col-span-16--lg">
          {/* Header */}
          <div className="mb-10">
            <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-2">
              The ServiceNow Success Framework
            </h2>
            <p className="text-[var(--cds-text-secondary)] max-w-2xl">
              Delivering ROI requires more than software installation. It demands Full-Stack integration across four critical dimensions.
            </p>
          </div>

          {/* 4-Card Grid - Success Framework */}
          <div className="cds--css-grid" style={{ padding: 0 }}>
            {/* 1. Data Integrity (The Foundation) */}
            <div className="cds--col-span-8 cds--col-span-8--md bg-white rounded-xl p-5 border border-[var(--cds-border-subtle)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[var(--cds-layer-accent)] flex items-center justify-center">
                  <DataBase className="w-4 h-4" style={{ color: brandColor }} />
                </div>
                <div>
                  <h3 className="carbon-heading-02 text-[var(--cds-text-primary)]">Data Integrity</h3>
                  <p className="carbon-helper-text-02 text-[var(--cds-text-placeholder)]">The Foundation</p>
                </div>
              </div>
              
              <p className="carbon-label-01 text-[var(--cds-text-secondary)] mb-3">
                Success depends on a CMDB you can trust.
              </p>
              
              <div className="space-y-3">
                <div className="bg-[var(--cds-layer-01)] rounded-lg p-3">
                  <p className="carbon-label-01 text-[var(--cds-text-helper)] uppercase tracking-wide mb-1">The Challenge</p>
                  <p className="carbon-body-compact-01 text-[var(--cds-text-secondary)] leading-snug">Legacy data schemas rarely match new models. Without deep auditing, relationships break, and adoption stalls by Week 4.</p>
                </div>
                
                <div className="rounded-lg p-3" style={{ backgroundColor: `${brandColor}10` }}>
                  <p className="carbon-label-01 uppercase tracking-wide mb-1" style={{ color: brandColor }}>The Perception-IT Standard</p>
                  <p className="carbon-body-compact-01 text-[var(--cds-text-secondary)] leading-snug">We perform Risk-Mapped Data Audits before migration. By reconciling schema conflicts in the planning phase, we deliver a 99% accurate CMDB from Day 1, ensuring immediate user trust.</p>
                </div>
              </div>
            </div>

            {/* 2. Total Visibility (The Engine) */}
            <div className="cds--col-span-8 cds--col-span-8--md bg-white rounded-xl p-5 border border-[var(--cds-border-subtle)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[var(--cds-layer-accent)] flex items-center justify-center">
                  <ServerDns className="w-4 h-4" style={{ color: brandColor }} />
                </div>
                <div>
                  <h3 className="carbon-heading-02 text-[var(--cds-text-primary)]">Total Visibility</h3>
                  <p className="carbon-helper-text-02 text-[var(--cds-text-placeholder)]">The Engine</p>
                </div>
              </div>
              
              <p className="carbon-label-01 text-[var(--cds-text-secondary)] mb-3">
                ServiceNow cannot automate what it cannot see.
              </p>
              
              <div className="space-y-3">
                <div className="bg-[var(--cds-layer-01)] rounded-lg p-3">
                  <p className="carbon-label-01 text-[var(--cds-text-helper)] uppercase tracking-wide mb-1">The Challenge</p>
                  <p className="carbon-body-compact-01 text-[var(--cds-text-secondary)] leading-snug">Pure software integrators lack access to physical layer telemetry. Critical server or network events remain silent until users report an outage.</p>
                </div>
                
                <div className="rounded-lg p-3" style={{ backgroundColor: `${brandColor}10` }}>
                  <p className="carbon-label-01 uppercase tracking-wide mb-1" style={{ color: brandColor }}>The Perception-IT Standard</p>
                  <p className="carbon-body-compact-01 text-[var(--cds-text-secondary)] leading-snug">As a Huawei Certified Partner, we bridge hardware health metrics directly into ServiceNow ITOM. This enables proactive incident automation, resolving infrastructure issues before they impact business operations.</p>
                </div>
              </div>
            </div>

            {/* 3. Sustainable Architecture (The Long Game) */}
            <div className="cds--col-span-8 cds--col-span-8--md bg-white rounded-xl p-5 border border-[var(--cds-border-subtle)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[var(--cds-layer-accent)] flex items-center justify-center">
                  <ArrowUp className="w-4 h-4" style={{ color: brandColor }} />
                </div>
                <div>
                  <h3 className="carbon-heading-02 text-[var(--cds-text-primary)]">Sustainable Architecture</h3>
                  <p className="carbon-helper-text-02 text-[var(--cds-text-placeholder)]">The Long Game</p>
                </div>
              </div>
              
              <p className="carbon-label-01 text-[var(--cds-text-secondary)] mb-3">
                True speed means never having to rebuild.
              </p>
              
              <div className="space-y-3">
                <div className="bg-[var(--cds-layer-01)] rounded-lg p-3">
                  <p className="carbon-label-01 text-[var(--cds-text-helper)] uppercase tracking-wide mb-1">The Challenge</p>
                  <p className="carbon-body-compact-01 text-[var(--cds-text-secondary)] leading-snug">Hard-coded customizations create technical debt that breaks during mandatory platform updates, causing downtime and rework.</p>
                </div>
                
                <div className="rounded-lg p-3" style={{ backgroundColor: `${brandColor}10` }}>
                  <p className="carbon-label-01 uppercase tracking-wide mb-1" style={{ color: brandColor }}>The Perception-IT Standard</p>
                  <p className="carbon-body-compact-01 text-[var(--cds-text-secondary)] leading-snug">We architect using native ServiceNow capabilities (Flow Designer, Integration Hub). This upgrade-safe approach ensures your investment remains stable and adaptable through future patches without costly refactoring.</p>
                </div>
              </div>
            </div>

            {/* 4. Unified Accountability (The Guarantee) */}
            <div className="cds--col-span-8 cds--col-span-8--md bg-white rounded-xl p-5 border border-[var(--cds-border-subtle)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[var(--cds-layer-accent)] flex items-center justify-center">
                  <Security className="w-4 h-4" style={{ color: brandColor }} />
                </div>
                <div>
                  <h3 className="carbon-heading-02 text-[var(--cds-text-primary)]">Unified Accountability</h3>
                  <p className="carbon-helper-text-02 text-[var(--cds-text-placeholder)]">The Guarantee</p>
                </div>
              </div>
              
              <p className="carbon-label-01 text-[var(--cds-text-secondary)] mb-3">
                One partner, one outcome.
              </p>
              
              <div className="space-y-3">
                <div className="bg-[var(--cds-layer-01)] rounded-lg p-3">
                  <p className="carbon-label-01 text-[var(--cds-text-helper)] uppercase tracking-wide mb-1">The Challenge</p>
                  <p className="carbon-body-compact-01 text-[var(--cds-text-secondary)] leading-snug">Fragmented vendors (software vs. hardware) create blame cycles that delay resolution and bleed SLAs.</p>
                </div>
                
                <div className="rounded-lg p-3" style={{ backgroundColor: `${brandColor}10` }}>
                  <p className="carbon-label-01 uppercase tracking-wide mb-1" style={{ color: brandColor }}>The Perception-IT Standard</p>
                  <p className="carbon-body-compact-01 text-[var(--cds-text-secondary)] leading-snug">We provide Full-Stack Accountability. From the shipping dock to the cloud dashboard, one team owns the resolution, ensuring seamless coordination and guaranteed uptime.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Supporting Pillars */}
          <div className="mt-8 bg-white rounded-xl p-6 border border-[var(--cds-border-subtle)]">
            <div className="cds--css-grid" style={{ padding: 0 }}>
              {/* Value Realization Card */}
              <div className="cds--col-span-8 cds--col-span-8--md bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-[var(--cds-border-subtle)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--cds-button-primary)] flex items-center justify-center">
                    <Lightning className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="carbon-heading-02 text-[var(--cds-text-primary)]">Accelerating Your Value Realization</h3>
                    <p className="carbon-helper-text-02 text-[var(--cds-text-helper)]">How our full-stack capability speeds up your ROI</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    { title: 'Instant Trust', desc: 'Real-time server health mapping keeps your CMDB accurate' },
                    { title: 'Zero-Downtime Ops', desc: 'Physical data center events trigger automated workflows pre-outage' },
                    { title: 'Smart Correlation', desc: 'Network alerts automatically prioritize incidents based on business impact' },
                    { title: 'Seamless Lifecycle', desc: 'Procurement data flows directly into Asset Management for perfect tracking' }
                  ].map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--cds-layer-accent)]0 mt-2 flex-shrink-0" />
                      <div>
                        <span className="carbon-label-02 text-[var(--cds-text-primary)] block">{item.title}</span>
                        <span className="carbon-helper-text-02 text-[var(--cds-text-secondary)]">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Delivery Backbone Card */}
              <div className="cds--col-span-8 cds--col-span-8--md bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-[var(--cds-border-subtle)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--cds-background)] flex items-center justify-center">
                    <Network_1 className="w-5 h-5 text-[var(--cds-text-primary)]" />
                  </div>
                  <div>
                    <h3 className="carbon-heading-02 text-[var(--cds-text-primary)]">The Delivery Backbone</h3>
                    <p className="carbon-helper-text-02 text-[var(--cds-text-helper)]">Global alliances enabling local excellence</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    { title: 'Supply Chain Sync', desc: 'Your CMDB matches deployed assets instantly via direct procurement channels' },
                    { title: 'Rapid Readiness', desc: 'Infrastructure staging aligns perfectly with ServiceNow deployment timelines' },
                    { title: 'Deep Connectivity', desc: 'Robust REST/SOAP integration ensures flawless data flow between hardware and ITSM' },
                    { title: 'Unified Oversight', desc: '24/7 NOC/SOC monitoring feeds directly into your ServiceNow dashboards' }
                  ].map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--cds-layer-02)] mt-2 flex-shrink-0" />
                      <div>
                        <span className="carbon-label-02 text-[var(--cds-text-primary)] block">{item.title}</span>
                        <span className="carbon-helper-text-02 text-[var(--cds-text-secondary)]">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="mt-8 bg-[var(--cds-background)] rounded-xl p-6 text-center">
            <p className="text-[var(--cds-text-secondary)] mb-1">
              &quot;We don&apos;t just implement ServiceNow; we integrate it with your business reality.&quot;
            </p>
            <p className="text-white carbon-label-01" style={{ color: brandColor }}>
              Our Risk-Mapped Framework identifies opportunities for optimization in Week 1, accelerating your time-to-value.
            </p>
          </div>
        </div>
        </div>
      </section>



      {/* Compliance Section */}
      <section id="compliance" className="py-24 bg-[var(--cds-layer-01)]">
        <div className="cds--css-grid">
        <div className="cds--col-span-16 cds--col-span-16--lg">
          <div className="bg-white rounded-xl border border-[var(--cds-border-subtle)] p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{ backgroundColor: `${brandColor}15` }}>
                  <Locked className="w-12 h-12" style={{ color: brandColor }} />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="carbon-fluid-heading-04 text-[var(--cds-text-primary)] mb-4">
                  Aligned with SBP Guidelines & Local Data Sovereignty Laws
                </h2>
                <p className="carbon-body-02 text-[var(--cds-text-secondary)] mb-6">
                  Enable Your Regulatory Compliance with Local Data Control. Our Lahore delivery center ensures your sensitive data remains within Pakistan jurisdiction unless explicitly authorized for cross-border transfer. Unlike global SaaS-only providers, we provide the local oversight and audit trails required by Banking and Government sectors to meet their SBP obligations.
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <span className="px-4 py-2 bg-[var(--cds-layer-02)] text-[var(--cds-text-secondary)] carbon-label-01 rounded-lg">SBP Guidelines Aligned</span>
                  <span className="px-4 py-2 bg-[var(--cds-layer-02)] text-[var(--cds-text-secondary)] carbon-label-01 rounded-lg">Local Data Residency</span>
                  <span className="px-4 py-2 bg-[var(--cds-layer-02)] text-[var(--cds-text-secondary)] carbon-label-01 rounded-lg">Audit-Ready Documentation</span>
                  <span className="px-4 py-2 bg-[var(--cds-layer-02)] text-[var(--cds-text-secondary)] carbon-label-01 rounded-lg">24/7 Local Support Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Next Steps Roadmap */}
      <section id="next-steps" className="py-24 bg-white border-y border-[var(--cds-border-subtle)]">
        <div className="cds--css-grid">
        <div className="cds--col-span-16 cds--col-span-16--lg">
          <div className="mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--cds-text-helper)] mb-4 block" style={{ color: brandColor }}>
              Your Path Forward
            </span>
            <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-4">
              Start Your Migration Audit
            </h2>
            <p className="carbon-body-02 text-[var(--cds-text-secondary)]">
              A structured process with clear outcomes at every step
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-[var(--cds-layer-03)] hidden md:block" />

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="flex-shrink-0 flex md:block items-center gap-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 relative" style={{ backgroundColor: brandColor }}>
                    1
                  </div>
                  <div className="md:hidden flex-1">
                    <h3 className="carbon-heading-03 text-[var(--cds-text-primary)]">Book a 30-min Technical Discovery Call</h3>
                  </div>
                </div>
                <div className="flex-1 bg-[var(--cds-layer-01)] rounded-xl p-6 md:ml-0 ml-0">
                  <h3 className="carbon-heading-03 text-[var(--cds-text-primary)] mb-2 hidden md:block">Book a 30-min Technical Discovery Call</h3>
                  <p className="carbon-body-02 text-[var(--cds-text-secondary)]">
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
                    <h3 className="carbon-heading-03 text-[var(--cds-text-primary)]">Receive a Preliminary Risk Assessment Report</h3>
                  </div>
                </div>
                <div className="flex-1 bg-[var(--cds-layer-01)] rounded-xl p-6">
                  <h3 className="carbon-heading-03 text-[var(--cds-text-primary)] mb-2 hidden md:block">Receive a Preliminary Risk Assessment Report</h3>
                  <p className="carbon-body-02 text-[var(--cds-text-secondary)]">
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
                    <h3 className="carbon-heading-03 text-[var(--cds-text-primary)]">Review Fixed-Scope Proposal within 48 Hours</h3>
                  </div>
                </div>
                <div className="flex-1 bg-[var(--cds-layer-01)] rounded-xl p-6">
                  <h3 className="carbon-heading-03 text-[var(--cds-text-primary)] mb-2 hidden md:block">Review Fixed-Scope Proposal within 48 Hours</h3>
                  <p className="carbon-body-02 text-[var(--cds-text-secondary)]">
                    Clear timeline, fixed price, defined deliverables. No hidden costs. No surprises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Complementary Solutions Section */}
      <section id="complementary" className="py-24 bg-[var(--cds-layer-01)]">
        <div className="cds--css-grid">
          <div className="cds--col-span-16 cds--col-span-16--lg">
            <div className="text-center mb-12">
              <span className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--cds-text-helper)] mb-4 block" style={{ color: brandColor }}>
                Extend Your Value
              </span>
              <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-4">
                Complementary Solutions
              </h2>
              <p className="carbon-body-02 text-[var(--cds-text-secondary)] max-w-2xl mx-auto">
                Extend your ServiceNow value beyond IT.
              </p>
            </div>

            {/* Carbon 2x Grid: 5-6-5 columns to match Hero */}
            <div className="cds--css-grid" style={{ padding: 0 }}>
              {/* Infrastructure & Observability - 5 cols */}
              <div className="cds--col-span-5 cds--col-span-5--lg">
                <a href="/services/infrastructure" className="cds--tile cds--tile--clickable group flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="cds--tag cds--tag--blue">
                      <Cloud className="w-4 h-4 mr-2" />
                      Infrastructure
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[var(--cds-link-primary)]" />
                  </div>
                  <h3 className="cds--tile-heading text-[var(--cds-text-primary)] mb-2">Infrastructure & Observability</h3>
                  <p className="cds--tile-caption text-[var(--cds-text-secondary)] mb-4">Bridge physical reality to digital workflows.</p>
                  <ul className="cds--list--unordered space-y-2 mb-6 flex-grow">
                    <li className="cds--list__item text-[var(--cds-text-secondary)]">Server Health Audits (MODSERVE) mapped to CMDB</li>
                    <li className="cds--list__item text-[var(--cds-text-secondary)]">Network alert correlation & unified monitoring</li>
                    <li className="cds--list__item text-[var(--cds-text-secondary)]">DCIM integration for real-time asset visibility</li>
                  </ul>
                  <span className="cds--link flex items-center gap-2 mt-auto">
                    Explore Infrastructure Services
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
              </div>

              {/* Security & Compliance - 6 cols (center, slightly wider) */}
              <div className="cds--col-span-6 cds--col-span-6--lg">
                <a href="/services/security" className="cds--tile cds--tile--clickable group flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="cds--tag cds--tag--red">
                      <Security className="w-4 h-4 mr-2" />
                      Security
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[var(--cds-link-primary)]" />
                  </div>
                  <h3 className="cds--tile-heading text-[var(--cds-text-primary)] mb-2">Security & Compliance</h3>
                  <p className="cds--tile-caption text-[var(--cds-text-secondary)] mb-4">Automate risk response for regulated sectors.</p>
                  <ul className="cds--list--unordered space-y-2 mb-6 flex-grow">
                    <li className="cds--list__item text-[var(--cds-text-secondary)]">SecOps integration (SIEM to Ticket)</li>
                    <li className="cds--list__item text-[var(--cds-text-secondary)]">Automated vulnerability remediation tasks</li>
                    <li className="cds--list__item text-[var(--cds-text-secondary)]">SBP-aligned compliance reporting & controls</li>
                  </ul>
                  <span className="cds--link flex items-center gap-2 mt-auto">
                    Explore Security Services
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
              </div>

              {/* Enterprise Automation - 5 cols */}
              <div className="cds--col-span-5 cds--col-span-5--lg">
                <a href="/services/automation" className="cds--tile cds--tile--clickable group flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="cds--tag cds--tag--green">
                      <IbmAutomationPlatform className="w-4 h-4 mr-2" />
                      Automation
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[var(--cds-link-primary)]" />
                  </div>
                  <h3 className="cds--tile-heading text-[var(--cds-text-primary)] mb-2">Enterprise Automation</h3>
                  <p className="cds--tile-caption text-[var(--cds-text-secondary)] mb-4">Scale workflows to HR, Facilities, and Customers.</p>
                  <ul className="cds--list--unordered space-y-2 mb-6 flex-grow">
                    <li className="cds--list__item text-[var(--cds-text-secondary)]">ESM portals for internal service delivery</li>
                    <li className="cds--list__item text-[var(--cds-text-secondary)]">Customer Service Management (CSM) portals</li>
                    <li className="cds--list__item text-[var(--cds-text-secondary)]">ERP-linked procurement & custom App Engine apps</li>
                  </ul>
                  <span className="cds--link flex items-center gap-2 mt-auto">
                    Explore Automation Services
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24" style={{ backgroundColor: brandColor }}>
        <div className="cds--css-grid">
          <div className="cds--col-span-16 cds--col-span-16--lg text-center">
            <span className="inline-block px-4 py-2 bg-white/10 rounded-full carbon-label-01 text-white/90 mb-6">
              8-Week Go-Live Guarantee
            </span>
            <h2 className="carbon-fluid-heading-05 text-white mb-6">
              Ready to Transform Your ITSM?
            </h2>
            <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
              Get a free ServiceNow migration assessment. We&apos;ll analyse your current setup, 
              identify risks, and provide a detailed roadmap—all at no cost.
            </p>
            <p className="carbon-body-compact-01 text-white/60 mb-10 max-w-2xl mx-auto">
              Go live in 8 weeks guaranteed, or we work for free until you do.
            </p>
            <a
              href="#footer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[var(--cds-background)] text-[var(--cds-text-primary)] carbon-heading-02 rounded-full hover:bg-[var(--cds-layer-01)] transition-all duration-300"
            >
              Get Your Free Assessment
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

        </div>{/* End of main content */}
      </div>{/* End of flex wrapper */}

      <Footer />
    </div>
  );
};

export default ServiceNow;
