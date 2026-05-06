import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/carbon-typography.css';
import Footer from '../../sections/Footer';
import Navigation from '../../components/Navigation';

import FeaturedTestimonial from '../../components/FeaturedTestimonial';
import PartnerLogos from '../../sections/PartnerLogos';
import ClientLogos from '../../sections/ClientLogos';
import {
  ArrowRight, ArrowLeft, ArrowDown, CheckmarkFilled,
  TemperatureHot, WindGusts as Wind,
  Settings, Compare, Meter, Certificate,
  ChevronRight, ChevronDown, Close,

  Lightning, Security as Shield, DataBase, Dashboard
} from '@carbon/icons-react';
import { AirConditioner, Windy, ServerRack, VisualInspection, Analyze, CloudManagedServices, CloudServices, DataCenters, TemperatureHigh, RainyHeavy, FilterVariable, Electric } from '@carbon/pictograms-react';
import { durationFast02, durationModerate01, durationModerate02, easings } from '@carbon/motion';
import { blue50, blue80 } from '@carbon/colors';

interface CardData {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  pictogram?: React.ComponentType<{ className?: string }>;
  title: string;
  short: string;
  category: string;
  enhanced?: boolean;
  bullets: string[];
}


const SECTIONS = ['thermal-failure', 'how-it-works', 'assessment', 'hardware', 'installation', 'managed', 'results', 'pakistan', 'dependencies', 'integration', 'trusted-by', 'faq', 'cta'] as const;

/* Curated nav subset — scroll spy still tracks all SECTIONS */
const NAV_SECTIONS = ['assessment', 'hardware', 'installation', 'managed', 'results', 'pakistan', 'faq', 'cta'] as const;

const caseStudyData = [
  { stat: '99.97%', label: 'Uptime Achieved', client: 'Pakistan Telecom', industry: 'Telecommunications', title: '3-Site Cooling Overhaul', desc: 'Precision CRAC deployment with monsoon-hardened protocols. Zero unplanned thermal outages across two monsoon seasons.', tags: ['CRAC Deployment', 'Monsoon Hardening'], outcomes: ['Zero unplanned thermal outages across two monsoon seasons', 'CRAC units sized with 25% monsoon humidity buffer', 'Remote monitoring with 4-hour response SLA'] },
  { stat: '40%', label: 'Energy Reduction', client: 'Private Bank', industry: 'Financial Services', title: 'Precision Cooling Refresh', desc: 'Replaced legacy AC with in-row cooling and aisle containment. PUE dropped from 1.8 to 1.35.', tags: ['In-Row Cooling', 'PUE Optimisation'], outcomes: ['PUE reduced from 1.8 to 1.35', '40% energy savings validated over 12 months', 'Hot-spot elimination across all 8 racks'] },
  { stat: '4hrs', label: 'Response Time', client: 'Government IDC', industry: 'Government', title: 'Managed Thermal Service', desc: 'End-to-end cooling supply, install, and managed service with quarterly validation and monsoon standby.', tags: ['Managed Service', 'SLA'], outcomes: ['4-hour on-site response guarantee', 'Quarterly thermal validation reports', 'Monsoon standby protocol with spare CRAC'] },
  { stat: '60%', label: 'Capacity Gain', client: 'Textile Manufacturer', industry: 'Manufacturing', title: 'Legacy Cooling Replacement', desc: 'Custom cooling capacity derating for 45°C ambient. High-ambient condensers with thermal mass buffering.', tags: ['Retrofit', 'Precision Cooling'], outcomes: ['60% additional cooling capacity unlocked', 'Condensers rated for 50°C ambient', 'Thermal mass buffering for power fluctuations'] },
  { stat: '99.9%', label: 'Uptime SLA', client: 'National Bank', industry: 'Financial Services', title: 'Monsoon-Hardened Edge Cooling', desc: 'Quarterly room integrity validation and humidity-compensated CRAC setpoints. Zero unplanned monsoon-related failures.', tags: ['Edge', 'Monsoon Hardening'], outcomes: ['99.9% uptime target met for 24 months under signed Enterprise SLA', 'Zero unplanned monsoon-related cooling failures', 'Automated humidity compensation active'] },
  { stat: '35%', label: 'Energy Saved', client: 'Cloud Provider', industry: 'Technology', title: 'Free Cooling Integration', desc: 'Hot/cold aisle containment with free-cooling integration. Energy consumption reduced by 35%.', tags: ['Free Cooling', 'PUE Optimisation'], outcomes: ['35% annual energy reduction', 'Free cooling active 8 months/year', 'Containment retrofit completed without downtime'] },
];

const sectionLabels: Record<string, string> = {
  'thermal-failure': 'Thermal Risk',
  'how-it-works': 'Services',
  assessment: 'Assessment',
  hardware: 'Procurement',
  installation: 'Deployment',
  managed: 'Managed Services',
  pakistan: 'Pakistan-Specific',
  dependencies: 'Dependencies',
  integration: 'Integration',
  results: 'Results',
  'trusted-by': 'Trusted By',
  faq: 'FAQ',
  cta: 'Get Started',
};

/* Infrastructure category accent — Teal 50 */



const CoolingAirflow2 = () => {
  const [activeSection, setActiveSection] = useState('thermal-failure');
  const [caseStudyPage, setCaseStudyPage] = useState(0);
  const [testimonialPage, setTestimonialPage] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeDeployTab, setActiveDeployTab] = useState(0);
  const [assessmentExpanded, setAssessmentExpanded] = useState(false);
  const [matrixExpanded, setMatrixExpanded] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [openPakistanIdx, setOpenPakistanIdx] = useState<number | null>(null);
  const [checklistModalOpen, setChecklistModalOpen] = useState(false);
  const [checklistForm, setChecklistForm] = useState({ name: '', email: '', phone: '' });
  const [checklistSubmitted, setChecklistSubmitted] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  /* Close mobile dropdown when clicking outside */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(e.target as Node)) {
        setMobileDropdownOpen(false);
      }
    };
    if (mobileDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [mobileDropdownOpen]);

  const toggleFaq = (idx: number) => setOpenFaq(openFaq === idx ? null : idx);

  /* Detect when page is scrolled past hero for sticky nav styling */
  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Scroll-triggered entrance animations */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target as Element);
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll('.scroll-animate').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* Canonical tag for SEO */
  useEffect(() => {
    const canonicalUrl = `${window.location.origin}/#/infrastructure/data-centre-services/cooling-airflow`;
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonicalUrl;
    return () => {
      if (link && document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      for (const id of SECTIONS) {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
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
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--cds-background)]">
      <Navigation />

      {/* Schema.org BreadcrumbList */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://perception-it.com/' },
            { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://perception-it.com/services' },
            { '@type': 'ListItem', position: 3, name: 'Infrastructure' },
            { '@type': 'ListItem', position: 4, name: 'Data Centre Services' },
            { '@type': 'ListItem', position: 5, name: 'Cooling & Airflow', item: 'https://perception-it.com/#/infrastructure/data-centre-services/cooling-airflow' }
          ]
        })}
      </script>

      {/* Hero Section */}
      <section id="overview" className="relative pt-40 pb-20 bg-[#0a1628] overflow-hidden">
        {/* Thermal Gradient Background — warm bottom (heat), cool top (extracted) */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Warm layer — uncooled heat at the bottom */}
          <div className="absolute -bottom-40 left-1/4 w-[800px] h-[600px] bg-[#8a3a1d] rounded-full blur-[180px] opacity-[0.18] animate-drift-slow" />
          <div className="absolute bottom-0 right-1/3 w-[600px] h-[500px] bg-[#b85c1a] rounded-full blur-[150px] opacity-[0.12] animate-drift" style={{ animationDelay: '-3s' }} />
          
          {/* Cool layer — extracted air at the top */}
          <div className="absolute -top-20 right-1/4 w-[600px] h-[600px] bg-[#0f62fe] rounded-full blur-[140px] opacity-[0.22] animate-drift" />
          <div className="absolute top-1/3 left-1/2 w-[400px] h-[400px] bg-[#1192e8] rounded-full blur-[100px] opacity-[0.14] animate-drift" style={{ animationDelay: '-5s' }} />
          
          {/* Condensation / mist layer */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[300px] bg-[#c6c6c6] rounded-full blur-[120px] opacity-[0.08] animate-drift-slow" style={{ animationDelay: '-8s' }} />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#009d9a] rounded-full blur-[100px] opacity-[0.18] animate-drift" style={{ animationDelay: '-12s' }} />
          <div className="absolute top-1/2 left-[20%] w-[300px] h-[300px] bg-[#22d3ee] rounded-full blur-[80px] opacity-[0.10] animate-drift" style={{ animationDelay: '-15s' }} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Mobile Dropdown Navigation — Custom (no native select detachment) */}
          <div className="xl:hidden mb-8 relative" ref={mobileDropdownRef}>
            <label className="text-xs text-gray-400 block mb-2">On this page:</label>
            <button
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              aria-expanded={mobileDropdownOpen}
              aria-controls="mobile-nav-dropdown"
              className="w-full h-12 px-4 bg-gray-800 border border-gray-700 text-white text-sm flex items-center justify-between"
            >
              <span>{sectionLabels[activeSection] || 'Select section'}</span>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} style={{ transitionDuration: '200ms' }} />
            </button>
            {mobileDropdownOpen && (
              <div
                id="mobile-nav-dropdown"
                className="absolute top-full left-0 right-0 mt-1 bg-gray-800 border border-gray-700 shadow-xl z-40 max-h-64 overflow-y-auto"
              >
                {NAV_SECTIONS.map((id) => (
                  <button
                    key={id}
                    onClick={() => {
                      scrollToSection(id);
                      setMobileDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-sm transition-colors ${activeSection === id ? 'text-[#0f62fe] bg-[#0f62fe]/10 font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                  >
                    {sectionLabels[id]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-xs">
              <li><Link to="/" className="text-[#78a9ff] hover:text-white hover:underline transition-colors" style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}>Home</Link></li>
              <li aria-hidden="true"><ChevronRight className="w-3 h-3 text-[#525252]" /></li>
              <li><Link to="/services" className="text-[#78a9ff] hover:text-white hover:underline transition-colors" style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}>Services</Link></li>
              <li aria-hidden="true"><ChevronRight className="w-3 h-3 text-[#525252]" /></li>
              <li><Link to="/services/infrastructure" className="text-[#78a9ff] hover:text-white hover:underline transition-colors" style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}>Infrastructure</Link></li>
              <li aria-hidden="true"><ChevronRight className="w-3 h-3 text-[#525252]" /></li>
              <li><Link to="/services/datacenter2" className="text-[#78a9ff] hover:text-white hover:underline transition-colors" style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}>Data Centre Services</Link></li>
              <li aria-hidden="true"><ChevronRight className="w-3 h-3 text-[#525252]" /></li>
              <li><span className="text-[#009d9a] font-medium" aria-current="page">Cooling & Airflow</span></li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-3xl md:carbon-fluid-heading-05 text-white mb-8 max-w-4xl leading-tight">Precision Cooling &amp; Thermal Continuity for Data Centres</h1>
            <p className="carbon-heading-02 text-[#c6c6c6] mb-8 max-w-2xl">Maintain optimal temperatures for your critical infrastructure. We handle everything: thermal assessment, hardware supply, installation, and 24/7 monitoring. One partner, one end-to-end uptime SLA.</p>
            <p className="carbon-body-02 text-[#a8a8a8] mb-10 max-w-2xl">Engineered for Pakistan&apos;s climate reality: 45°C summers, monsoon humidity spikes, dust infiltration, and unstable grid power.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#cta" className="cds--btn cds--btn--primary bg-[#0f62fe] hover:bg-[#0353e9] inline-flex items-center">
                Request Thermal Health Check
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a href="#hardware" className="cds--btn cds--btn--tertiary" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white', borderWidth: '1px' }}>
                Explore Hardware Options
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Desktop Horizontal Anchor Nav — Full Bleed */}
      <nav className={`hidden xl:block sticky top-28 z-30 border-b border-[var(--cds-border-subtle)] transition-all ${navScrolled ? 'bg-[#f4f4f4] shadow-md' : 'bg-[var(--cds-background)]'}`} style={{ transitionDuration: '150ms' }}>
        <div className="max-w-[1584px] mx-auto px-6">
          <ul className="flex items-center gap-1 overflow-x-auto py-2">
            {NAV_SECTIONS.map((id) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className={`px-3 py-2 text-sm whitespace-nowrap transition-colors border-b-2 ${activeSection === id ? 'text-[#0f62fe] border-[#0f62fe] font-medium' : 'text-[#525252] border-transparent hover:text-[#161616] hover:border-[#c6c6c6]'}`}
                  style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}
                >
                  {sectionLabels[id]}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-[1584px] mx-auto">

        {/* Thermal Failure Simulation — Lead Section */}
        <section id="thermal-failure" className="py-16 bg-[var(--cds-background)]">
          <div className="max-w-5xl mx-auto px-6 scroll-animate">
            <div className="mb-6">
              <div className="w-6 h-0.5 bg-[#cf0a2c] mb-2" />
              <p className="carbon-label-01 text-[#cf0a2c] uppercase tracking-wider">Thermal Risk</p>
            </div>
            <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-4">
              What Happens at 45°C / 90% RH
            </h2>
            <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-10 max-w-3xl">
              Pakistan's summer peaks push standard cooling beyond its design limits. When ambient exceeds 35°C and humidity crosses 80%, three failure modes cascade — and they cascade fast.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { 
                  step: '01', 
                  title: 'Overheat', 
                  temp: '45°C+',
                  desc: 'Server inlet temperatures exceed 27°C. Thermal throttling begins. Performance drops 30–50% before hard shutdown.' 
                },
                { 
                  step: '02', 
                  title: 'Condensation', 
                  temp: '90% RH',
                  desc: 'Humidity exceeds dew point inside cabinets. Corrosion begins on boards and contacts. Latent damage not visible for weeks.' 
                },
                { 
                  step: '03', 
                  title: 'Downtime', 
                  temp: 'PKR 2–5M/day',
                  desc: 'Cascading thermal shutdowns trigger SLA penalties, client churn, and emergency CapEx.' 
                },
              ].map((item) => (
                <div key={item.step} className="p-6 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-[#cf0a2c] text-white flex items-center justify-center font-semibold text-base">
                      {item.step}
                    </div>
                    <span className="carbon-label-01 text-[#cf0a2c] font-semibold uppercase tracking-wider">{item.temp}</span>
                  </div>
                  <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">{item.title}</h3>
                  <p className="carbon-body-01 text-[var(--cds-text-secondary)]">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="p-6 text-center">
              <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">Don't wait for the next heatwave.</h3>
              <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-4 max-w-xl mx-auto">
                A Thermal Health Check identifies your risk profile before the summer peak. From PKR 75,000. 90 minutes. No obligation.
              </p>
              <a 
                href="#cta" 
                className="cds--btn cds--btn--primary inline-flex items-center bg-[#0f62fe] text-white hover:bg-[#0353e9] transition-colors"
                style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}
              >
                Book Thermal Health Check
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* Services — Process Overview */}
        <section id="how-it-works" className="py-16 bg-[#f4f4f4]">
          <div className="max-w-5xl mx-auto px-6 scroll-animate">
            <div className="mb-3">
              <div className="w-6 h-0.5 bg-[#009d9a] mb-2" />
              <p className="carbon-label-01 text-[#161616] uppercase tracking-wider">Services</p>
            </div>
            <h2 className="carbon-fluid-heading-04 text-[var(--cds-text-primary)] mb-8">From Cooling Assessment to 24/7 Accountability</h2>
            <div className="grid grid-cols-2 gap-4 items-start md:flex md:flex-row md:items-stretch md:gap-0">
              {[
                { step: '01', title: 'Assessment', desc: 'Thermal assessment & risk scoring', sectionId: 'assessment' },
                { step: '02', title: 'Procurement', desc: 'Right-sized hardware, certified', sectionId: 'hardware' },
                { step: '03', title: 'Deployment', desc: 'Install, validate, monitor', sectionId: 'installation' },
                { step: '04', title: 'Managed Services', desc: '24/7 monitoring & maintenance', sectionId: 'managed' },
              ].map((item, idx) => (
                <div key={item.step} className="md:flex md:items-stretch md:flex-1">
                  <button
                    onClick={() => scrollToSection(item.sectionId)}
                    className={`md:flex-1 p-5 bg-[var(--cds-layer-01)] text-left transition-colors border-b-2 cursor-pointer ${idx === 0 ? 'border-[#0f62fe] hover:bg-[#f4f4f4]' : 'border-transparent hover:border-[#0f62fe] hover:bg-[#f4f4f4]'}`}
                    style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}
                  >
                    <div className="w-10 h-10 bg-[#0f62fe] text-white flex items-center justify-center font-semibold text-base mb-3">
                      {item.step}
                    </div>
                    <p className="carbon-heading-02 text-[var(--cds-text-primary)] mb-1">{item.title}</p>
                    <p className="carbon-body-01 text-[#525252]">{item.desc}</p>
                  </button>
                  {idx < 3 && (
                    <div className="hidden md:flex md:items-center md:justify-center md:px-3">
                      <ArrowRight className="w-5 h-5 text-[#c6c6c6]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <main>
            
            {/* Section 0: Assessment */}
            <section id="assessment" className="py-16 bg-[var(--cds-background)]">
              <div className="max-w-5xl mx-auto px-6 scroll-animate">
                <div className="grid md:grid-cols-5 gap-8 mb-10">
                  {/* Text content — left side */}
                  <div className="md:col-span-3">

                    <div className="mb-6">
                      <div className="w-6 h-0.5 bg-[#009d9a] mb-2" />
                      <p className="carbon-label-01 text-[#009d9a] uppercase tracking-wider">Assessment — Choose Your Path</p>
                    </div>
                    {/* Trust badges removed — cooling is a new service offering */}
                    <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-4">Your Two Assessment Options</h2>
                    <p className="carbon-body-01 text-[var(--cds-text-primary)] font-semibold mb-2">
                      Rapid triage or engineering-grade analysis.
                    </p>
                    <ul className="space-y-2 carbon-body-01 text-[var(--cds-text-secondary)] mb-6">
                      <li className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#525252] mt-2 flex-shrink-0" />
                        <span>Most facilities begin with the <strong>Standard Thermal Health Check</strong>.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#525252] mt-2 flex-shrink-0" />
                        <span>We recommend <strong>Precision Thermal Engineering</strong> only when your layout, load density, or criticality demands it.</span>
                      </li>
                    </ul>

                  </div>

                  {/* Assessment image — document checks */}
                  <div className="md:col-span-2">
                    <img
                      src="/3D images/Cooling and Airflow/perceptionit_document_checks_2.webp"
                      alt="Engineer reviewing thermal assessment documentation, checklist validation, and audit scorecards for data centre cooling systems"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Two Paths — Carbon Base Tile Group */}
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  {/* Path 1: Thermal Health Check */}
                  <div
                    className="group bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] hover:border-[#0f62fe] transition-all flex flex-col"
                    style={{ transitionDuration: `${durationModerate01}ms`, transitionTimingFunction: easings.standard.productive }}
                  >
                    {/* Top accent — blue indicates recommended / most common */}
                    <div className="h-1 bg-[#0f62fe]" />
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <div>
                          <span className="inline-flex items-center px-2 py-1 bg-[#0f62fe] text-white text-[10px] font-medium uppercase tracking-wider">Option 1</span>
                          <span className="carbon-label-01 text-[#0f62fe] uppercase tracking-wider ml-2">Standard</span>
                          <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mt-1 leading-snug">Thermal Health Check</h3>
                          <p className="carbon-body-01 text-[#525252] mt-1">Quick confidence in 90 minutes</p>
                        </div>
                        <VisualInspection className="w-14 h-14 flex-shrink-0" style={{ fill: 'url(#pictogramGrad)' }} />
                      </div>

                      {/* Choose this if */}
                      <div className="border-t border-[var(--cds-border-subtle)] pt-4 mb-4">
                        <p className="carbon-heading-01 text-[#0f62fe] font-medium border-l-2 border-[#0f62fe] pl-3 mb-3">Choose this if</p>
                        <ul className="space-y-2">
                          {[
                            'Routine maintenance or edge-class sites',
                            'Budget-constrained planning phase',
                            'Quick triage without engineering overhead',
                            'Results needed within 48 hours',
                          ].map((item) => (
                            <li key={item} className="flex items-start gap-2 carbon-body-01 text-[#525252]">
                              <CheckmarkFilled className="w-4 h-4 text-[#0f62fe] mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* What you get */}
                      <div className="border-t border-[var(--cds-border-subtle)] pt-4 mb-4">
                        <p className="carbon-heading-01 text-[#0f62fe] font-medium border-l-2 border-[#0f62fe] pl-3 mb-3">What you get</p>
                        <ul className="space-y-2">
                          {[
                            'Visual walk-through + IR thermal mapping',
                            'Fix / Watch / OK scorecard',
                            'Pakistan derating validation',
                            'Monsoon, dust, and grid risk scoring',
                          ].map((item) => (
                            <li key={item} className="flex items-start gap-2 carbon-body-01 text-[#525252]">
                              <span className="w-1 h-1 rounded-full bg-[#525252] mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Metadata + CTA */}
                      <div className="mt-auto border-t border-[var(--cds-border-subtle)] pt-4">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4">
                          <span className="carbon-label-01 text-[#0f62fe] font-medium">From PKR 75,000</span>
                          <span className="w-1 h-1 rounded-full bg-[#c6c6c6]" />
                          <span className="carbon-label-01 text-[#525252]">90 min</span>
                          <span className="w-1 h-1 rounded-full bg-[#c6c6c6]" />
                          <span className="carbon-label-01 text-[#525252]">Report in 48 hrs</span>
                        </div>
                        <a
                          href="#cta"
                          className="cds--btn cds--btn--primary w-full h-12 flex items-center justify-center bg-[#0f62fe] text-white hover:bg-[#0353e9] transition-colors"
                          style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}
                        >
                          Book Thermal Health Check
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Path 2: Precision Thermal Engineering */}
                  <div
                    className="group bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] hover:border-[#0f62fe] transition-all flex flex-col"
                    style={{ transitionDuration: `${durationModerate01}ms`, transitionTimingFunction: easings.standard.productive }}
                  >
                    {/* Top accent — gray for standard option */}
                    <div className="h-1 bg-[#c6c6c6] group-hover:bg-[#0f62fe] transition-colors" style={{ transitionDuration: `${durationFast02}ms` }} />
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <div>
                          <span className="inline-flex items-center px-2 py-1 bg-[#0f62fe] text-white text-[10px] font-medium uppercase tracking-wider">Option 2</span>
                          <span className="carbon-label-01 text-[#0f62fe] uppercase tracking-wider ml-2">Engineering-Grade</span>
                          <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mt-1 leading-snug">Precision Thermal Engineering</h3>
                          <p className="carbon-body-01 text-[#525252] mt-1">See heat flow before you spend</p>
                        </div>
                        <Analyze className="w-14 h-14 flex-shrink-0" style={{ fill: 'url(#pictogramGrad)' }} />
                      </div>

                      {/* Choose this if */}
                      <div className="border-t border-[var(--cds-border-subtle)] pt-4 mb-4">
                        <p className="carbon-heading-01 text-[#0f62fe] font-medium border-l-2 border-[#0f62fe] pl-3 mb-3">Choose this if</p>
                        <ul className="space-y-2">
                          {[
                            'New build or major retrofit planning',
                            'High-density loads (&gt;8 kW per rack)',
                            'Compliance or audit documentation required',
                            'Recurring thermal issues need root-cause analysis',
                          ].map((item) => (
                            <li key={item} className="flex items-start gap-2 carbon-body-01 text-[#525252]">
                              <CheckmarkFilled className="w-4 h-4 text-[#0f62fe] mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* What you get */}
                      <div className="border-t border-[var(--cds-border-subtle)] pt-4 mb-4">
                        <p className="carbon-heading-01 text-[#0f62fe] font-medium border-l-2 border-[#0f62fe] pl-3 mb-3">What you get</p>
                        <ul className="space-y-2">
                          {[
                            '3D airflow & temperature maps of your layout',
                            'Hotspot prediction under Pakistan conditions',
                            'Containment & setpoint recommendations',
                            'Engineering sign-off + visual report',
                          ].map((item) => (
                            <li key={item} className="flex items-start gap-2 carbon-body-01 text-[#525252]">
                              <span className="w-1 h-1 rounded-full bg-[#525252] mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Metadata + CTA */}
                      <div className="mt-auto border-t border-[var(--cds-border-subtle)] pt-4">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4">
                          <span className="carbon-label-01 text-[#0f62fe] font-medium">From PKR 650,000</span>
                          <span className="w-1 h-1 rounded-full bg-[#c6c6c6]" />
                          <span className="carbon-label-01 text-[#525252]">2–3 weeks</span>
                          <span className="w-1 h-1 rounded-full bg-[#c6c6c6]" />
                          <span className="carbon-label-01 text-[#525252]">Up to 50 racks</span>
                        </div>
                        <a
                          href="mailto:contact@perception-it.com?subject=Precision%20Thermal%20Engineering%20Proposal%20Request"
                          className="cds--btn cds--btn--primary w-full h-12 flex items-center justify-center bg-[#0f62fe] text-white hover:bg-[#0353e9] transition-colors"
                          style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}
                        >
                          Request CFD Proposal
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Collapsible: Two Paths to Clarity */}
                <div className="mb-10 mt-8">
                  <button
                    onClick={() => setAssessmentExpanded(!assessmentExpanded)}
                    aria-expanded={assessmentExpanded}
                    aria-controls="assessment-comparison-panel"
                    className={`w-full flex items-center justify-between p-6 border-l-[6px] transition-all shadow-sm ${assessmentExpanded ? 'border-l-[#0f62fe] bg-[#0f62fe]/[0.04]' : 'border-l-[#0f62fe] bg-[#0f62fe]/[0.06] hover:bg-[#0f62fe]/[0.10]'}`}
                    style={{ transitionDuration: `${durationModerate01}ms`, transitionTimingFunction: easings.standard.productive }}
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-white flex items-center justify-center flex-shrink-0">
                        <Compare className="w-7 h-7 text-[#0f62fe]" />
                      </div>
                      <div className="text-left">
                        <p className="carbon-heading-02 text-[var(--cds-text-primary)]">Compare Option 1 and Option 2</p>
                        <div className="flex items-center gap-2 mt-1 mb-1">
                          <span className="px-2 py-1 bg-[#f4f4f4] border border-[#c6c6c6] text-[10px] font-semibold uppercase tracking-wider text-[#525252]">Thermal Health Check</span>
                          <span className="w-4 h-px bg-[#c6c6c6]" />
                          <span className="px-2 py-1 bg-[#f4f4f4] border border-[#c6c6c6] text-[10px] font-semibold uppercase tracking-wider text-[#525252]">Precision Thermal Engineering</span>
                        </div>
                        <p className="carbon-body-01 text-[#525252]">See a side-by-side breakdown of methods, deliverables, timing, and investment.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="hidden sm:inline carbon-label-01 font-semibold text-[#0f62fe]">{assessmentExpanded ? 'Collapse' : 'Expand comparison'}</span>
                      <div className="w-11 h-11 rounded-full flex items-center justify-center bg-[#0f62fe]">
                        <ChevronDown className={`w-5 h-5 text-white transition-transform ${assessmentExpanded ? 'rotate-180' : ''}`} style={{ transitionDuration: `${durationFast02}ms` }} />
                      </div>
                    </div>
                  </button>

                  <div id="assessment-comparison-panel" className={`overflow-hidden transition-all ${assessmentExpanded ? 'max-h-[4000px] opacity-100' : 'max-h-0 opacity-0'}`} style={{ transitionDuration: `${durationModerate01}ms`, transitionTimingFunction: easings.standard.productive }}>
                    <div className="pt-8">

                      <h3 className="carbon-fluid-heading-04 text-[var(--cds-text-primary)] mb-2">Side-by-Side Comparison</h3>
                      <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-8 max-w-3xl">
                        Review the full breakdown below to match the right assessment to your facility&apos;s scale and criticality.
                      </p>

                      {/* Comparison table */}
                      <div className="overflow-x-auto mb-10 shadow-[inset_-12px_0_12px_-12px_rgba(0,0,0,0.08)]">
                        <table className="w-full text-sm border-collapse">
                          <thead>
                            <tr className="border-b border-[var(--cds-border-subtle)]">
                              <th className="text-left py-2 px-4"></th>
                              <th className="text-left py-2 px-4">
                                <span className="inline-block px-2 py-0.5 bg-white border border-[#c6c6c6] text-[10px] font-semibold uppercase tracking-wider text-[#525252]">Option 1</span>
                              </th>
                              <th className="text-left py-2 px-4">
                                <span className="inline-block px-2 py-0.5 bg-[#e8f3ff] border border-[#0f62fe] text-[10px] font-semibold uppercase tracking-wider text-[#0f62fe]">Option 2</span>
                              </th>
                            </tr>
                            <tr className="border-b-2 border-[var(--cds-border-subtle)]">
                              <th className="text-left py-3 px-4 carbon-label-01 text-[var(--cds-text-primary)]">Feature</th>
                              <th className="text-left py-3 px-4 carbon-label-01 text-[var(--cds-text-primary)]">Thermal Health Check</th>
                              <th className="text-left py-3 px-4 carbon-label-01 text-[#0f62fe]">Precision Thermal Engineering</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-[var(--cds-border-subtle)]">
                              <td className="py-3 px-4 carbon-body-01 text-[var(--cds-text-secondary)]">Best For</td>
                              <td className="py-3 px-4 carbon-body-01 text-[#525252]">Routine maintenance, edge sites, budget planning</td>
                              <td className="py-3 px-4 carbon-body-01 text-[#525252]">New builds, high-density, compliance, root cause</td>
                            </tr>
                            <tr className="border-b border-[var(--cds-border-subtle)] bg-[var(--cds-background)]">
                              <td className="py-3 px-4 carbon-body-01 text-[var(--cds-text-secondary)]">Deliverable</td>
                              <td className="py-3 px-4 carbon-body-01 text-[#525252]">Photo log + &quot;Fix / Watch / OK&quot; list</td>
                              <td className="py-3 px-4 carbon-body-01 text-[#525252]">3D heat maps + capacity calculations</td>
                            </tr>
                            <tr className="border-b border-[var(--cds-border-subtle)]">
                              <td className="py-3 px-4 carbon-body-01 text-[var(--cds-text-secondary)]">Precision</td>
                              <td className="py-3 px-4 carbon-body-01 text-[#525252]">Qualitative (&quot;Rack 12 feels warm&quot;)</td>
                              <td className="py-3 px-4 carbon-body-01 text-[#525252]">Quantitative (&quot;Rack 12 exceeds 27°C at 45°C ambient&quot;)</td>
                            </tr>
                            <tr className="border-b border-[var(--cds-border-subtle)] bg-[var(--cds-background)]">
                              <td className="py-3 px-4 carbon-body-01 text-[var(--cds-text-secondary)]">Method</td>
                              <td className="py-3 px-4 carbon-body-01 text-[#525252]">Visual inspection + structured checklist</td>
                              <td className="py-3 px-4 carbon-body-01 text-[#525252]">CFD modeling + engineering analysis</td>
                            </tr>
                            <tr className="border-b border-[var(--cds-border-subtle)]">
                              <td className="py-3 px-4 carbon-body-01 text-[var(--cds-text-secondary)]">Tools</td>
                              <td className="py-3 px-4 carbon-body-01 text-[#525252]">IR camera, airflow meter, checklist</td>
                              <td className="py-3 px-4 carbon-body-01 text-[#525252]">6SigmaDC/ANSYS, thermal sensors, load data</td>
                            </tr>
                            <tr className="border-b border-[var(--cds-border-subtle)] bg-[var(--cds-background)]">
                              <td className="py-3 px-4 carbon-body-01 text-[var(--cds-text-secondary)]">Time On-Site</td>
                              <td className="py-3 px-4 carbon-body-01 text-[#525252]">2–4 hours (single visit)</td>
                              <td className="py-3 px-4 carbon-body-01 text-[#525252]">1–2 days (data collection)</td>
                            </tr>
                            <tr className="border-b border-[var(--cds-border-subtle)]">
                              <td className="py-3 px-4 carbon-body-01 text-[var(--cds-text-secondary)]">Turnaround</td>
                              <td className="py-3 px-4 carbon-body-01 text-[#525252]">Report within 48 hours</td>
                              <td className="py-3 px-4 carbon-body-01 text-[#525252]">Analysis within 1–2 weeks</td>
                            </tr>
                            <tr className="border-b border-[var(--cds-border-subtle)] bg-[var(--cds-background)]">
                              <td className="py-3 px-4 carbon-body-01 text-[var(--cds-text-secondary)]">Investment</td>
                              <td className="py-3 px-4 carbon-body-01 text-[#0f62fe] font-medium">Starting from PKR 75,000 per visit</td>
                              <td className="py-3 px-4 carbon-body-01 text-[#0f62fe] font-medium">Starting from PKR 650,000 (up to 50 racks)</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="p-4 bg-[#009d9a]/10 border-l-4 border-[#009d9a] mb-6">
                        <p className="carbon-body-01 text-[var(--cds-text-primary)]">
                          <strong>Still unsure which path fits your facility?</strong>{' '}
                          <a href="#cta" className="text-[#0f62fe] hover:underline font-medium">Book a free 15-minute call</a> with our assessment team. No commitment required.
                        </p>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Decision support now lives inside the Carbon tiles above + comparison table below. 20% credit mentioned in hero, FAQ, process summary, and CTA. */}

                {/* Upgrade path callout — positioned after comparison, before exclusions */}
                <div className="mt-8 p-4 bg-[#009d9a]/10 border-l-4 border-[#009d9a] mb-6">
                  <p className="carbon-body-01 text-[var(--cds-text-primary)]">
                    <strong>Upgrade path:</strong> If your Health Check reveals complexity, 20% of your PKR 75,000 fee (PKR 15,000) is credited toward Precision Thermal Engineering when upgraded within 60 days.
                  </p>
                </div>

                {/* Explicit Exclusions */}
                <div className="mt-8 p-4 bg-[#009d9a]/10 border-l-4 border-[#009d9a]">
                  <p className="carbon-label-01 text-[#161616] uppercase tracking-wider mb-1">Explicit Exclusions</p>
                  <p className="carbon-helper-text-01 text-[#525252]">Assessment covers audit, scoring, and recommendation only. Excludes: implementation, hardware supply, and ongoing monitoring.</p>
                </div>

                <div className="border-t border-[var(--cds-border-subtle)] pt-5 mt-8 flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-[#0f62fe] mt-1 flex-shrink-0" />
                  <p className="carbon-body-01 text-[var(--cds-text-secondary)]">
                    <span className="text-[#0f62fe] font-medium">Next:</span> Once you know what your facility needs, the next step is sourcing hardware validated for Pakistan&apos;s conditions — and sized to maintain thermal continuity under 45°C peak loads.
                  </p>
                </div>

              </div>
            </section>

            {/* Section 1: Hardware Supply */}
            <section id="hardware" className="py-16 bg-[#f4f4f4]">
              <div className="max-w-5xl mx-auto px-6 scroll-animate">
                <div className="grid md:grid-cols-5 gap-8 mb-10">
                  <div className="md:col-span-3">
                    <div className="mb-6">
                      <div className="w-6 h-0.5 bg-[#009d9a] mb-2" />
                      <p className="carbon-label-01 text-[#161616] uppercase tracking-wider">Procurement</p>
                    </div>
                    <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-4">Cooling Hardware Procurement</h2>
                    <p className="carbon-body-01 text-[var(--cds-text-primary)] font-semibold mb-2">
                      Thermal continuity depends on hardware that survives Pakistan&apos;s reality.
                    </p>
                    <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-10">
                      We source cooling equipment from tier-1 manufacturers and validate every unit for 45°C ambient, monsoon humidity, and dust infiltration before it ships. From procurement to deployment, one partner handles the full stack. No guesswork, no incompatible hardware, full accountability.
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <img
                      src="/3D images/Cooling and Airflow/perceptionit_cooling_ibm_style_v2.png"
                      alt="Precision cooling hardware showcase — CRAC and ACU units in a data centre environment with hot and cold aisle containment"
                      className="w-full h-auto object-cover border border-[#e0e0e0]"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Gradient definitions for pictograms */}
                <svg width="0" height="0" className="absolute" aria-hidden="true">
                  <defs>
                    <linearGradient id="pictogramGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={blue80} />
                      <stop offset="100%" stopColor={blue50} />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {([
                    {
                      icon: TemperatureHot,
                      pictogram: AirConditioner,
                      title: 'Server Room AC Units',
                      short: 'Edge sites & small server rooms up to 50kW.',
                      category: 'Room Cooling',
                      bullets: [
                        'Wall-mounted, ceiling-suspended, and portable units',
                        'Designed for edge sites and small server rooms up to 50kW heat load',
                        'Split-system and ducted configurations available',
                        'All units validated for 45°C ambient and monsoon humidity before shipment',
                      ],
                    },
                    {
                      icon: Wind,
                      pictogram: Windy,
                      title: 'In-Row & CRAC Precision Cooling',
                      short: 'Close-coupled cooling for high-density racks.',
                      category: 'Precision Cooling',
                      bullets: [
                        'Close-coupled cooling for high-density racks',
                        'Hot/cold aisle compatible with N+1 redundancy options',
                        'Row-based and room-based CRAC/CRAH units from 5kW to 150kW',
                        'Integrated with aisle containment and variable-speed fans for part-load efficiency',
                      ],
                    },
                    {
                      icon: Meter,
                      pictogram: ServerRack,
                      title: 'Liquid Cooling Systems',
                      short: 'Direct-to-chip and immersion cooling.',
                      category: 'Liquid Cooling',
                      bullets: [
                        'Direct-to-chip and immersion cooling for HPC, AI training clusters, and GPU-dense deployments',
                        'Coolant Distribution Units (CDUs) with leak detection and automatic isolation',
                        'Supports NVIDIA H100/A100 densities up to 80kW per rack',
                      ],
                    },
                  ] as CardData[]).map((card) => (
                    <div key={card.title} className="group [perspective:1000px] h-96">
                      <div className="relative h-full w-full overflow-hidden shadow-sm hover:shadow-lg group">
                        {/* Front Face — always visible */}
                        <div className="h-full w-full bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] flex flex-col">
                          <div className="h-1.5" style={{ background: `linear-gradient(135deg, ${blue80}, ${blue50})` }} />
                          <div className="p-6 flex-1 flex flex-col relative">
                            <span className="inline-flex self-start px-2 py-0.5 bg-[#f4f4f4] border border-[#e0e0e0] text-[#525252] text-[10px] font-medium uppercase tracking-wider mb-3">
                              {card.category}
                            </span>
                            <h3 className="text-xl font-normal text-[var(--cds-text-primary)] leading-snug mb-4">{card.title}</h3>
                            <p className="carbon-body-01 text-[#525252]">{card.short}</p>
                            <div className="mt-auto flex items-end justify-between">
                              {card.pictogram ? (() => {
                                const P = card.pictogram as React.FC<React.SVGProps<SVGSVGElement>>;
                                return <P className="w-20 h-20" style={{ fill: 'url(#pictogramGrad)' }} />;
                              })() : (
                                <card.icon className="w-14 h-14 text-[#0f62fe]" strokeWidth={1} />
                              )}
                              <svg className="w-5 h-5 text-[#0f62fe]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        {/* Back Face — gradient fades in first, then content follows */}
                        <div
                          className="absolute inset-0 h-full w-full text-white flex flex-col opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ background: `linear-gradient(to bottom right, ${blue80}, ${blue50})`, transitionDuration: '245ms', transitionTimingFunction: easings.standard.productive }}
                        >
                          <div
                            className="p-6 flex-1 flex flex-col opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all"
                            style={{ transitionDuration: '245ms', transitionTimingFunction: easings.standard.expressive, transitionDelay: '122ms' }}
                          >
                            <h3 className="text-sm font-semibold text-white leading-snug mb-6">{card.title}</h3>
                            <ul className="text-sm text-white/90 leading-relaxed list-disc list-outside pl-4 space-y-2 marker:text-white/50 flex-1">
                              {card.bullets.map((b, i) => (
                                <li key={i}>{b}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[var(--cds-border-subtle)] pt-6">
                  <p className="carbon-helper-text-01 text-[#525252]">
                    Procurement covers hardware supply and manufacturer warranty administration only; thermal capacity planning, monsoon/dust hardening, commissioning validation, uptime SLAs, and 24/7 monitoring are scoped separately under Assessment, Deployment, and Managed Services.
                  </p>
                </div>

                <div className="mt-10 text-center">
                  <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-4">Manufacturer Partnerships</h3>
                  <p className="carbon-body-01 text-[var(--cds-text-secondary)] max-w-2xl mx-auto mb-6">These are the brands we pre-qualify for Pakistan deployments, so procurement is backed by climate-tested and monsoon-ready equipment.</p>
                  <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
                    {[
                      { name: 'Huawei', logo: '/logos/partners/Partner-Huawei-Logo.svg', width: 80 },
                      { name: 'Lenovo', logo: '/logos/partners/Partner-Lenovo-Logo.svg', width: 70 },
                      { name: 'Dell', logo: '/logos/partners/Partner-Dell-logo.svg', width: 60 },
                      { name: 'HP', logo: '/logos/partners/Partner- Hewlett-Packard-Logo.svg', width: 50 },
                    ].map((partner) => (
                      <div key={partner.name} className="flex items-center justify-center h-10 px-2">
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="h-full w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                          style={{ maxWidth: partner.width, transitionDuration: `${durationModerate01}ms`, transitionTimingFunction: easings.standard.productive }}
                        />
                      </div>
                    ))}
                  </div>
                  <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)] max-w-2xl mx-auto">
                    Manufacturer warranty administered through Perception-IT — we handle claims, diagnostics, and replacement logistics. You deal with one partner, not the manufacturer. Extended warranty and spare-part bundling available via{' '}
                    <Link 
                      to="/services/server-continuity" 
                      className="text-[#0f62fe] hover:underline font-medium"
                      title="Mission-critical support for out-of-warranty systems with same-day spares and 99.95% uptime SLA"
                    >
                      ServerLife Extend™
                    </Link>.
                  </p>
                </div>

                <div className="mt-8 p-6 bg-white border border-[#e0e0e0] shadow-sm text-center">
                  <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">Need hardware validated for Pakistan?</h3>
                  <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-2">Speak to a procurement engineer about sizing, lead times, and monsoon-hardened specifications.</p>
                  <p className="carbon-body-02 text-[var(--cds-text-secondary)] mb-4">We only source systems pre-screened for 45°C ambient, high humidity, and dust-prone conditions.</p>
                  <a href="#cta" className="cds--btn cds--btn--primary inline-flex items-center bg-[#0f62fe] text-white hover:bg-[#0353e9] transition-colors">
                    Request Hardware Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>

                <div className="border-t border-[var(--cds-border-subtle)] pt-5 mt-8 flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-[#0f62fe] mt-1 flex-shrink-0" />
                  <p className="carbon-body-01 text-[var(--cds-text-secondary)]">
                    <span className="text-[#0f62fe] font-medium">Next:</span> Hardware is only as good as its installation. Our commissioning protocol eliminates the 60% first-year failure rate seen in Pakistan deployments that skip structured validation.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Basic Installation */}
            <section id="installation" className="py-16 bg-[var(--cds-background)]">
              <div className="max-w-5xl mx-auto px-6 scroll-animate">
                <div className="mb-6">
                  <div className="w-6 h-0.5 bg-[#009d9a] mb-2" />
                  <p className="carbon-label-01 text-[#161616] uppercase tracking-wider">Deployment</p>
                </div>
                <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-4">Deployment & Commissioning</h2>
                <p className="carbon-body-01 text-[var(--cds-text-primary)] font-semibold mb-2">
                  Thermal continuity is won or lost at installation.
                </p>
                <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-10">
                  Core deployment covers mechanical installation and power-on verification. Thermal validation, airflow mapping, failover testing, and monitoring integration are scoped to your contract — and validated for Pakistan&apos;s grid instability, dust loads, and monsoon humidity before handover.
                </p>

                {(() => {
                  const deployTabs = [
                    { step: '01', icon: Settings, title: 'Mechanical Installation', items: ['Positioning and levelling', 'Refrigerant line brazing and pressure testing', 'Condensate drain routing', 'Electrical connection and breaker sizing'] },
                    { step: '02', icon: Meter, title: 'Thermal Validation', items: ['Infrared thermal mapping of rack inlets', 'CFD airflow simulation for hotspot elimination', 'Load-bank testing at design capacity', 'Failover simulation: primary → secondary → portable'] },
                    { step: '03', icon: Certificate, title: 'Commissioning Sign-Off', items: ['As-built documentation', 'Cooling capacity test report', 'Setpoint calibration (temperature & humidity)', 'Operator training handover'] },
                    { step: '04', icon: Dashboard, title: 'Monitoring Integration', items: ['Sensor placement (rack inlet, return air, under-floor)', 'DCIM integration (Huawei iManager, Schneider StruxureWare)', 'Alert threshold configuration', 'NOC dashboard onboarding'] },
                  ];
                  const activeTab = deployTabs[activeDeployTab];
                  return (
                    <div className="mb-8 bg-[var(--cds-layer-01)]">
                      {/* Tab Bar — Desktop */}
                      <div className="hidden md:flex border-b border-[var(--cds-border-subtle)]">
                        {deployTabs.map((tab, idx) => {
                          const isActive = idx === activeDeployTab;
                          return (
                            <button
                              key={tab.title}
                              onClick={() => setActiveDeployTab(idx)}
                              role="tab"
                              aria-selected={isActive}
                              aria-controls="deployment-tab-panel"
                              className={`flex-1 flex items-center justify-center gap-2 px-3 py-4 text-sm transition-colors border-b-2 ${
                                isActive
                                  ? 'border-[#0f62fe] text-[#0f62fe] font-semibold bg-[#0f62fe]/[0.04]'
                                  : 'border-transparent text-[#525252] hover:text-[#0f62fe]'
                              }`}
                              style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}
                            >
                              <span className={`text-[10px] font-mono mr-1 transition-colors duration-150 ${isActive ? 'text-[#0f62fe]' : 'text-[#a8a8a8]'}`}>{tab.step}</span>
                              <tab.icon className={`w-4 h-4 transition-colors duration-150 ${isActive ? 'text-[#0f62fe]' : 'text-[#a8a8a8]'}`} />
                              <span>{tab.title}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Stepper — Mobile */}
                      <div className="md:hidden border-b border-[var(--cds-border-subtle)]">
                        {deployTabs.map((tab, idx) => {
                          const isActive = idx === activeDeployTab;
                          return (
                            <button
                              key={tab.title}
                              onClick={() => setActiveDeployTab(idx)}
                              role="tab"
                              aria-selected={isActive}
                              aria-controls="deployment-tab-panel"
                              className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors border-l-4 ${
                                isActive
                                  ? 'border-[#0f62fe] text-[#0f62fe] font-semibold bg-[#0f62fe]/[0.04]'
                                  : 'border-transparent text-[#525252] hover:text-[#0f62fe]'
                              }`}
                              style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}
                            >
                              <span className={`text-[10px] font-mono transition-colors duration-150 ${isActive ? 'text-[#0f62fe]' : 'text-[#a8a8a8]'}`}>{tab.step}</span>
                              <tab.icon className={`w-4 h-4 transition-colors duration-150 ${isActive ? 'text-[#0f62fe]' : 'text-[#a8a8a8]'}`} />
                              <span>{tab.title}</span>
                            </button>
                          );
                        })}
                      </div>
                      {/* Content Panel */}
                      <div
                        id="deployment-tab-panel"
                        key={activeTab.title}
                        className="p-6 border border-[var(--cds-border-subtle)] border-t-0"
                        role="tabpanel"
                      >
                        <div className="grid md:grid-cols-5 gap-8">
                          <div className="md:col-span-3">
                            <h3 className="carbon-fluid-heading-03 text-[var(--cds-text-primary)] mb-4">{activeTab.title}</h3>
                            <ul className="space-y-3">
                              {activeTab.items.map((item) => (
                                <li key={item} className="flex items-start gap-3 carbon-body-01 text-[var(--cds-text-primary)]">
                                  <CheckmarkFilled className="w-4 h-4 text-[#0f62fe] mt-0.5 flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="md:col-span-2">
                            {(() => {
                              const tabImages: Record<string, { src: string; alt: string }> = {
                                'Mechanical Installation': {
                                  src: '/3D images/Cooling and Airflow/perceptionit_mechanical_final.webp',
                                  alt: 'Mechanical installation of precision cooling unit showing positioning, refrigerant line brazing, condensate drain routing, and electrical connections',
                                },
                                'Thermal Validation': {
                                  src: '/3D images/Cooling and Airflow/perceptionit_thermal_validation_final.webp',
                                  alt: 'Thermal validation process showing infrared thermal mapping, CFD airflow simulation, load-bank testing, and failover simulation for precision cooling systems',
                                },
                                'Commissioning Sign-Off': {
                                  src: '/3D images/Cooling and Airflow/perceptionit_commissioning_people_final.webp',
                                  alt: 'Commissioning sign-off process showing as-built documentation, cooling capacity test reports, setpoint calibration, and operator training handover',
                                },
                                'Monitoring Integration': {
                                  src: '/3D images/Cooling and Airflow/perceptionit_monitoring_integration.png',
                                  alt: 'Monitoring integration showing sensor placement, DCIM dashboard integration, alert threshold configuration, and NOC onboarding',
                                },
                              };
                              const img = tabImages[activeTab.title];
                              if (img) {
                                return (
                                  <div className="bg-[#F4F4F4]">
                                    <img
                                      src={img.src}
                                      alt={img.alt}
                                      className="w-full h-auto object-contain"
                                      loading="lazy"
                                    />
                                  </div>
                                );
                              }
                              return (
                                <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-[#c6c6c6] bg-white text-center h-full min-h-[200px]">
                                  <svg className="w-8 h-8 text-[#8d8d8d] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                  </svg>
                                  <p className="carbon-label-01 text-[#525252] uppercase tracking-wider text-[10px]">3D Rendering / Photo Placeholder</p>
                                  <p className="carbon-heading-01 text-[#161616] mt-1">{activeTab.title}</p>
                                  <p className="carbon-helper-text-01 text-[#8d8d8d] mt-2">Target: 4:3 aspect | Min 800×600px</p>
                                </div>
                              );
                            })()}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* Common Installation Failure */}
                <div className="p-8 md:p-10 scroll-animate">
                  {/* Preamble */}
                  <div className="border-l-4 border-[#009d9a] bg-[#009d9a]/10 pl-5 py-3 mb-8">
                    <p className="carbon-body-01 text-[#525252]">
                      Without a structured commissioning protocol, these are the failure modes we see repeatedly in Pakistan deployments.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-12 gap-8 items-start">
                    {/* Stat */}
                    <div className="md:col-span-4 text-center md:text-left">
                      {/* Circular progress ring */}
                      <div className="relative w-32 h-32 mx-auto md:mx-0 mb-4">
                        <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                          <path className="text-[#c6c6c6]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2" />
                          <path className="text-[#0f62fe]" strokeDasharray="60, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-3xl font-light text-[#161616]">60%</span>
                        </div>
                      </div>
                      <div className="carbon-fluid-heading-03 text-[#0f62fe] mt-2">of cooling failures</div>
                      <p className="carbon-body-01 text-[#525252] mt-1">occur within the first 12 months in Pakistan</p>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-full min-h-[200px] bg-[#c6c6c6] self-stretch" />

                    {/* Detail */}
                    <div className="md:col-span-7">
                      <p className="carbon-label-01 text-[#0f62fe] uppercase tracking-wider mb-4">Common Installation Failure</p>
                      <p className="carbon-body-01 text-[#525252] mb-5">These failures originate from installation errors, not hardware defects:</p>

                      {/* Failure mode cards */}
                      <div className="grid sm:grid-cols-3 gap-3 mb-6">
                        {[
                          { num: '01', text: 'Incorrect refrigerant charge' },
                          { num: '02', text: 'Undersized condensate drains' },
                          { num: '03', text: 'Missing thermal validation' },
                        ].map((item) => (
                          <div key={item.num} className="bg-white border-t-2 border-[#0f62fe] p-4 shadow-sm">
                            <span className="text-[10px] font-mono text-[#0f62fe] block mb-2">{item.num}</span>
                            <p className="carbon-body-01 text-[#161616]">{item.text}</p>
                          </div>
                        ))}
                      </div>

                      {/* Resolution bar */}
                      <div className="border-l-4 border-[#009d9a] bg-[#009d9a]/10 pl-4 py-3">
                        <p className="carbon-body-01 text-[#007d79]">Our commissioning protocol eliminates these root causes before handover.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-10 p-6 bg-[#f4f4f4] text-center">
                  <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">Ready to deploy?</h3>
                  <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-4 max-w-xl mx-auto">
                    Schedule a site assessment and we will scope the exact commissioning protocol for your Pakistan environment — including monsoon hardening and high-ambient validation.
                  </p>
                  <a
                    href="#cta"
                    className="cds--btn cds--btn--primary inline-flex items-center bg-[#0f62fe] text-white hover:bg-[#0353e9] transition-colors"
                    style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}
                  >
                    Book Deployment Assessment
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>

                {/* Explicit Exclusions */}
                <div className="mt-8 p-4 bg-[#009d9a]/10 border-l-4 border-[#009d9a]">
                  <p className="carbon-label-01 text-[#161616] uppercase tracking-wider mb-1">Explicit Exclusions</p>
                  <p className="carbon-helper-text-01 text-[#525252]">Deployment covers installation, validation, and commissioning only. Excludes: thermal capacity planning, monsoon hardening engineering, and SLA guarantees.</p>
                </div>

                <div className="border-t border-[var(--cds-border-subtle)] pt-5 mt-8 flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-[#0f62fe] mt-1 flex-shrink-0" />
                  <p className="carbon-body-01 text-[var(--cds-text-secondary)]">
                    <span className="text-[#0f62fe] font-medium">Next:</span> After commissioning, thermal continuity depends on what happens next — proactive monitoring, seasonal validation, and engineers who understand Pakistan&apos;s climate stress cycles.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Managed Services */}
            <section id="managed" className="py-16 bg-[#E8EDF2]">
              <div className="max-w-5xl mx-auto px-6 scroll-animate">
                <div className="grid md:grid-cols-5 gap-8 mb-10">
                  <div className="md:col-span-3">
                    <div className="mb-6">
                      <div className="w-6 h-0.5 bg-[#009d9a] mb-2" />
                      <p className="carbon-label-01 text-[#009d9a] uppercase tracking-wider">Managed Services — Choose Your Tier</p>
                    </div>
                    <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-4">Managed Thermal Services: 24/7 Accountability</h2>
                    <p className="carbon-body-01 text-[var(--cds-text-primary)] font-semibold mb-2">
                      Thermal continuity does not end at handover.
                    </p>
                    <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-10">
                      Filters clog. Refrigerant leaks. Setpoints drift. Our managed service catches degradation before it becomes an outage — with NOC engineers who understand Pakistan&apos;s monsoon season, dust cycles, and grid stress patterns.
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <img
                      src="/3D images/Cooling and Airflow/perceptionit_noc_bg_e8edf2.png"
                      alt="Network operations centre with large monitoring screens displaying thermal dashboards, cooling telemetry, and real-time infrastructure alerts on a seamless blue-gray background"
                      className="w-full h-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Pricing Tiers */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {[
                    {
                      name: 'Essential',
                      price: 'PKR 65K',
                      pictogram: CloudManagedServices,
                      items: ['Quarterly preventive maintenance', 'Filter replacement', 'Refrigerant check', 'Basic telemetry review'],
                      cta: 'Enquire',
                      ctaStyle: 'tertiary',
                    },
                    {
                      name: 'Professional',
                      price: 'PKR 145K',
                      pictogram: CloudServices,
                      items: ['Monthly preventive maintenance', '8-hour response SLA', 'Predictive alerts', 'Thermal trending report', 'Spare parts pre-staging', 'Remote monitoring'],
                      cta: 'Get Started',
                      ctaStyle: 'primary',
                      recommended: true,
                    },
                    {
                      name: 'Enterprise',
                      price: 'PKR 380K+',
                      pictogram: DataCenters,
                      items: ['24/7 NOC monitoring (Karachi, Lahore, Islamabad hubs)', '4-hour response SLA', 'Monsoon standby engineers', 'Quarterly room integrity validation', '99.9% uptime target under signed Enterprise SLA', 'Predictive alerts', 'Spare parts pre-staged at your site'],
                      cta: 'Contact Sales',
                      ctaStyle: 'tertiary',
                    },
                  ].map((tier) => (
                    <div key={tier.name} className={`flex flex-col bg-[var(--cds-layer-01)] transition-all hover:-translate-y-1 ${tier.recommended ? 'border-2 border-[#0f62fe] relative' : 'border border-[var(--cds-border-subtle)] relative'}`} style={{ transitionDuration: `${durationModerate02}ms`, transitionTimingFunction: easings.standard.productive }}>
                      <div className="absolute top-0 left-0 w-full h-1.5" style={{ background: `linear-gradient(135deg, ${blue80}, ${blue50})` }} />
                      {tier.recommended ? (
                        <div className="px-6 pt-3 pb-2">
                          <span className="inline-block px-2 py-0.5 bg-[#0f62fe]/10 text-[#0f62fe] carbon-label-01 uppercase tracking-wider">Recommended</span>
                        </div>
                      ) : (
                        <div className="px-6 pt-3 pb-2 invisible">
                          <span className="inline-block px-2 py-0.5 carbon-label-01 uppercase tracking-wider">Recommended</span>
                        </div>
                      )}
                      <div className="px-6 pt-4 pb-4 border-b border-[var(--cds-border-subtle)]">
                        <tier.pictogram className="w-12 h-12 mb-3" style={{ fill: 'url(#pictogramGrad)' }} />
                        <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">{tier.name}</h3>
                        <div className="flex items-baseline gap-1">
                          <span className={`text-3xl font-light ${tier.recommended ? 'text-[#0f62fe]' : 'text-[#161616]'}`}>{tier.price}</span>
                          <span className="carbon-body-01 text-[#525252]">/mo</span>
                        </div>
                      </div>
                      <div className="p-6 flex-1">
                        <ul className="space-y-3">
                          {tier.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                              <CheckmarkFilled className="w-4 h-4 text-[#0f62fe] mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-6 border-t border-[var(--cds-border-subtle)]">
                        {tier.ctaStyle === 'primary' ? (
                          <a href="#cta" className="cds--btn cds--btn--primary w-full h-12 flex items-center justify-center bg-[#0f62fe] text-white hover:bg-[#0353e9] transition-colors" style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}>
                            {tier.cta}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </a>
                        ) : (
                          <a href="#cta" className="cds--btn cds--btn--tertiary w-full h-12 flex items-center justify-center border-[#161616] text-[#161616] hover:bg-[#161616] hover:text-white transition-colors" style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}>
                            {tier.cta}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Comparison Matrix — Accordion */}
                <div className="mb-8 mt-8">
                  <button
                    onClick={() => setMatrixExpanded(!matrixExpanded)}
                    aria-expanded={matrixExpanded}
                    aria-controls="matrix-comparison-panel"
                    className={`w-full flex items-center justify-between p-6 border-l-[6px] transition-all shadow-sm ${matrixExpanded ? 'border-l-[#0f62fe] bg-[#0f62fe]/[0.04]' : 'border-l-[#0f62fe] bg-[#0f62fe]/[0.06] hover:bg-[#0f62fe]/[0.10]'}`}
                    style={{ transitionDuration: `${durationModerate01}ms`, transitionTimingFunction: easings.standard.productive }}
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-white flex items-center justify-center flex-shrink-0">
                        <Compare className="w-7 h-7 text-[#0f62fe]" />
                      </div>
                      <div className="text-left">
                        <p className="carbon-heading-02 text-[var(--cds-text-primary)]">Compare service tiers in detail</p>
                        <div className="flex items-center gap-2 mt-1 mb-1">
                          <span className="px-2 py-1 bg-[#f4f4f4] border border-[#c6c6c6] text-[10px] font-semibold uppercase tracking-wider text-[#525252]">Essential</span>
                          <span className="w-4 h-px bg-[#c6c6c6]" />
                          <span className="px-2 py-1 bg-[#f4f4f4] border border-[#c6c6c6] text-[10px] font-semibold uppercase tracking-wider text-[#525252]">Professional</span>
                          <span className="w-4 h-px bg-[#c6c6c6]" />
                          <span className="px-2 py-1 bg-[#f4f4f4] border border-[#c6c6c6] text-[10px] font-semibold uppercase tracking-wider text-[#525252]">Enterprise</span>
                        </div>
                        <p className="carbon-body-01 text-[#525252]">See the full capability breakdown across all three service levels.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="hidden sm:inline carbon-label-01 font-semibold text-[#0f62fe]">{matrixExpanded ? 'Collapse' : 'Expand comparison'}</span>
                      <div className="w-11 h-11 rounded-full flex items-center justify-center bg-[#0f62fe]">
                        <ChevronDown className={`w-5 h-5 text-white transition-transform ${matrixExpanded ? 'rotate-180' : ''}`} style={{ transitionDuration: `${durationFast02}ms` }} />
                      </div>
                    </div>
                  </button>

                  <div id="matrix-comparison-panel" className={`overflow-hidden transition-all ${matrixExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`} style={{ transitionDuration: `${durationModerate01}ms`, transitionTimingFunction: easings.standard.productive }}>
                    <div className="pt-6">
                      <div className="p-4 bg-[#009d9a]/10 border-l-4 border-[#009d9a] mb-6">
                        <p className="carbon-body-01 text-[var(--cds-text-primary)]">
                          <strong>Not sure which tier matches your facility?</strong>{' '}
                          <a href="#cta" className="text-[#0f62fe] hover:underline font-medium">Schedule a 15-minute tier consultation</a>. We will map your rack count, heat load, and criticality to the right service level.
                        </p>
                      </div>
                      <div className="overflow-x-auto shadow-[inset_-12px_0_12px_-12px_rgba(0,0,0,0.08)]">
                        <table className="w-full text-sm border-collapse">
                          <thead>
                            <tr className="border-b-2 border-[var(--cds-border-subtle)]">
                              <th className="text-left py-3 px-4 carbon-label-01 text-[var(--cds-text-primary)]">Capability</th>
                              <th className="text-center py-3 px-4 carbon-label-01 text-[var(--cds-text-primary)]">Essential</th>
                              <th className="text-center py-3 px-4 carbon-label-01 text-[var(--cds-text-primary)]">Professional</th>
                              <th className="text-center py-3 px-4 carbon-label-01 text-[var(--cds-text-primary)]">Enterprise</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              { cap: 'Preventive Maintenance', e: true, p: true, en: true },
                              { cap: 'Filter / Refrigerant Service', e: true, p: true, en: true },
                              { cap: 'Remote Monitoring', e: false, p: true, en: true },
                              { cap: 'Predictive Alerts', e: false, p: true, en: true },
                              { cap: 'Response SLA', e: 'Next business day', p: '8 hours', en: '4 hours' },
                              { cap: 'Monsoon Standby', e: false, p: false, en: true },
                              { cap: 'Room Integrity Validation', e: false, p: false, en: 'Quarterly' },
                              { cap: 'Uptime Guarantee', e: false, p: false, en: '99.9%*' },
                            ].map((row, idx) => (
                              <tr key={idx} className="border-b border-[var(--cds-border-subtle)]">
                                <td className="py-3 px-4 text-[var(--cds-text-primary)]">{row.cap}</td>
                                <td className="py-3 px-4 text-center">
                                  {typeof row.e === 'boolean' ? (row.e ? <CheckmarkFilled className="w-4 h-4 text-[#0f62fe] mx-auto" /> : <span className="text-[#a8a8a8]">-</span>) : <span className="carbon-body-01 text-[var(--cds-text-secondary)]">{row.e}</span>}
                                </td>
                                <td className="py-3 px-4 text-center">
                                  {typeof row.p === 'boolean' ? (row.p ? <CheckmarkFilled className="w-4 h-4 text-[#0f62fe] mx-auto" /> : <span className="text-[#a8a8a8]">-</span>) : <span className="carbon-body-01 text-[var(--cds-text-secondary)]">{row.p}</span>}
                                </td>
                                <td className="py-3 px-4 text-center">
                                  {typeof row.en === 'boolean' ? (row.en ? <CheckmarkFilled className="w-4 h-4 text-[#0f62fe] mx-auto" /> : <span className="text-[#a8a8a8]">-</span>) : <span className="carbon-body-01 text-[var(--cds-text-secondary)]">{row.en}</span>}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)] mt-2">*Service levels subject to signed SLA, site assessment, and force majeure exclusions. Essential tier excludes: 24/7 monitoring, predictive alerts, monsoon standby, SLA-backed uptime targets. Professional tier excludes: 4-hour response, quarterly room integrity validation, on-site spare parts. Enterprise tier excludes: custom engineering projects, hardware supply, non-cooling infrastructure.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>
            {/* Section: Results — Case Studies + Featured Testimonial + CFD Credibility */}
            <section id="results" className="py-20 bg-[#161616] relative overflow-hidden">
              {/* Ambient glow at top center */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-[#0f62fe] rounded-full blur-[150px] opacity-[0.04]" />
              <div className="max-w-5xl mx-auto px-6 scroll-animate">
                {/* Shared credibility header */}
                <div className="mb-10">
                  <p className="carbon-label-01 text-[#a8a8a8] uppercase tracking-wider mb-4">Results</p>
                  <div className="flex items-end justify-between">
                    <h2 className="carbon-fluid-heading-05 text-[#f4f4f4]">Infrastructure Projects</h2>
                    <Link to="/projects" className="hidden md:inline-flex items-center gap-2 carbon-body-01 text-[#78a9ff] hover:text-[#a6c8ff] transition-colors" style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}>
                      View all projects <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Case Study Grid */}
                <div className="grid md:grid-cols-3 gap-4 mb-12">
                  {caseStudyData.slice(caseStudyPage * 3, caseStudyPage * 3 + 3).map((study) => (
                    <Link
                      key={study.title}
                      to="/projects"
                      className="group bg-[#262626] border border-[#393939] overflow-hidden hover:border-[#009d9a] hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col" style={{ transitionDuration: `${durationModerate02}ms`, transitionTimingFunction: easings.standard.productive }}
                    >
                      {/* Watermark Header */}
                      <div className="relative h-28 bg-[#1a1a1a] border-b border-[#393939] flex items-center justify-center overflow-hidden">
                        <span className="text-7xl font-light text-[#2a2a2a] select-none">
                          {study.client.charAt(0)}
                        </span>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="carbon-label-01 text-[#525252] uppercase tracking-wider bg-[#1a1a1a]/80 px-3 py-1">Project Photo Placeholder</span>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-[#0f62fe] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>

                      {/* Content */}
                      <div className="p-5 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="carbon-label-01 text-[#a8a8a8]">{study.industry}</span>
                          <span className="w-1 h-1 rounded-full bg-[#525252]" />
                          <span className="carbon-label-01 text-[#6f6f6f]">{study.tags[0]}</span>
                        </div>

                        <h3 className="carbon-heading-02 text-[#f4f4f4] mb-2 group-hover:text-[#78a9ff] transition-colors"
                        style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}>
                          {study.title}
                        </h3>

                        <p className="carbon-body-01 text-[#a8a8a8] leading-relaxed mb-5 line-clamp-2">
                          {study.desc}
                        </p>

                        {/* Metric */}
                        <div className="mt-auto pt-4 border-t border-[#393939]">
                          <div className="text-3xl font-light text-[#0f62fe]">{study.stat}</div>
                          <div className="carbon-label-01 text-[#6f6f6f] uppercase tracking-wider mt-0.5">{study.label}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Case Study Pagination */}
                <div className="flex items-center justify-center gap-3 mb-16">
                  <button
                    onClick={() => setCaseStudyPage(0)}
                    className={`w-3 h-3 rounded-full transition-colors ${caseStudyPage === 0 ? 'bg-[#0f62fe]' : 'bg-transparent border border-[#525252] hover:border-[#78a9ff]'}`}
                    style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}
                    aria-label="Page 1"
                  />
                  <button
                    onClick={() => setCaseStudyPage(1)}
                    className={`w-3 h-3 rounded-full transition-colors ${caseStudyPage === 1 ? 'bg-[#0f62fe]' : 'bg-transparent border border-[#525252] hover:border-[#78a9ff]'}`}
                    style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}
                    aria-label="Page 2"
                  />
                </div>

                {/* Featured Testimonial — shared component */}
                <div className="mb-4">
                  <p className="carbon-label-01 text-[#a8a8a8] uppercase tracking-wider mb-2">Client Voice</p>
                  <h3 className="carbon-fluid-heading-04 text-[#f4f4f4]">Testimonials</h3>
                </div>

                {([
                  {
                    context: { client: 'Ibrahim Fibres', desc: 'Deployed ServerLife Extend™ to Critical Infrastructure and deferred CapEx spend without compromise on quality and continuity', link: '/projects/case-study/out-of-warranty-server-support-ibrahim-fibres', solutionLink: '/services/server-continuity' },
                    bgImage: '/case-studies/ibrahim-fibres/hero-1920.jpg',
                    quote: "Perception IT transformed our server infrastructure from a risk into a reliable engine for operations. With 48 critical Lenovo servers supporting our production and financial systems, any downtime could have cost us millions. Their 24/7 support, same-day hardware replacements, and proactive maintenance have kept our systems running without a single major incident.\n\nWe now operate with confidence knowing our IT backbone is in expert hands. For any organization managing critical hardware, I highly recommend their service.",
                    author: 'Mr. Usman Zafar',
                    role: 'Head of IT, Ibrahim Fibres Limited',
                    initials: 'UZ',
                    logo: '/logos/clients/IFL-logo.png',
                  },
                  {
                    context: { client: 'National Telecom Operator', desc: 'Monsoon-hardened precision cooling across 3 sites', link: null, solutionLink: null },
                    bgImage: null,
                    quote: 'Their quarterly monsoon validation protocol caught a condensate drain issue before it became an outage. That proactive approach is why we renewed for three more years.',
                    author: 'DC Operations Manager',
                    role: 'National Telecom Operator',
                    initials: 'NT',
                    logo: null,
                  },
                ] as const).filter((_, i) => i === testimonialPage).map((item) => (
                  <FeaturedTestimonial
                    key={item.context.client}
                    quote={item.quote}
                    author={item.author}
                    role={item.role}
                    client={item.context.client}
                    initials={item.initials}
                    clientLogo={item.logo}
                    bgImage={item.bgImage}
                    contextDesc={item.context.desc}
                    contextLink={item.context.link}
                    solutionLink={item.context.solutionLink}
                    solutionLabel="ServerLife Extend™ Solution details"
                    showNav
                    onPrev={() => setTestimonialPage(testimonialPage === 0 ? 1 : 0)}
                    onNext={() => setTestimonialPage(testimonialPage === 0 ? 1 : 0)}
                    variant="dark"
                  />
                ))}

                {/* Testimonial Pagination */}
                <div className="mt-6 flex items-center justify-center gap-3">
                  <button
                    onClick={() => setTestimonialPage(0)}
                    className={`w-3 h-3 rounded-full transition-colors ${testimonialPage === 0 ? 'bg-[#0f62fe]' : 'bg-transparent border border-[#525252] hover:border-[#78a9ff]'}`}
                    style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}
                    aria-label="Testimonial 1"
                  />
                  <button
                    onClick={() => setTestimonialPage(1)}
                    className={`w-3 h-3 rounded-full transition-colors ${testimonialPage === 1 ? 'bg-[#0f62fe]' : 'bg-transparent border border-[#525252] hover:border-[#78a9ff]'}`}
                    style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}
                    aria-label="Testimonial 2"
                  />
                </div>

                {/* CFD credibility note — cooling is a new service; case studies below illustrate projected outcomes based on data centre infrastructure experience */}
              </div>
            </section>


            {/* Section 5: Pakistan-Specific Deployment */}
            <section id="pakistan" className="py-16 bg-[var(--cds-background)]">
              <div className="max-w-5xl mx-auto px-6 scroll-animate">
                <div className="mb-6">
                  <div className="w-6 h-0.5 bg-[#009d9a] mb-2" />
                  <p className="carbon-label-01 text-[#161616] uppercase tracking-wider">Pakistan</p>
                </div>
                <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] font-light mb-4">Pakistan-Specific Thermal Engineering</h2>
                <p className="carbon-body-02 text-[var(--cds-text-primary)] font-semibold mb-6 max-w-3xl">
                  Global cooling datasheets assume 35°C ambient, clean air, and stable power. We engineer for four realities they ignore.
                </p>

                {/* Pakistan-specific accordion */}
                <div className="mb-8">
                  {[
                    { Pictogram: TemperatureHigh, title: 'Extreme Heat Resilience', items: [
                      { lead: 'Oversized by 60%', desc: 'rated load still covered at 45°C ambient' },
                      { lead: '50°C+ condensers', desc: 'high-ambient rated operation' },
                      { lead: 'Thermal mass buffering', desc: 'protects during load-shedding intervals' },
                    ]},
                    { Pictogram: RainyHeavy, title: 'Monsoon Humidity Control', items: [
                      { lead: 'Active humidity management', desc: 'precision CRAC/CRAH maintains 40-60% RH' },
                      { lead: 'Condensate drain redundancy', desc: 'overflow protection and backup routing' },
                      { lead: 'Pre- and mid-monsoon validation', desc: 'intensive checks in May and July' },
                    ]},
                    { Pictogram: FilterVariable, title: 'Dust Exclusion & Filtration', items: [
                      { lead: 'IP54-rated cabinets', desc: 'dust-protected, splash-resistant, gasket-sealed' },
                      { lead: 'MERV 13+ filters', desc: 'capture 90%+ dust vs G4 clogging in weeks' },
                      { lead: 'Monthly filter inspection', desc: 'scheduled in industrial zones' },
                    ]},
                    { Pictogram: Electric, title: 'Grid Instability Hardening', items: [
                      { lead: 'Soft-start compressors', desc: 'no breaker trips during voltage fluctuation' },
                      { lead: 'UPS-buffered controls', desc: 'graceful shutdown circuits' },
                      { lead: 'Generator-compatible start', desc: 'synchronised start sequences' },
                    ]},
                  ].map((card, idx) => {
                    const isOpen = openPakistanIdx === idx;
                    return (
                      <div key={card.title} className={`border border-[var(--cds-border-subtle)] ${isOpen ? 'border-l-4 border-l-[#0f62fe] bg-[var(--cds-layer-01)]' : 'border-l-4 border-l-transparent bg-[var(--cds-layer-01)] hover:border-[#0f62fe]'} transition-all mb-2`} style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}>
                        <button
                          onClick={() => setOpenPakistanIdx(isOpen ? null : idx)}
                          aria-expanded={isOpen}
                          aria-controls={`pakistan-panel-${idx}`}
                          className="w-full flex items-center justify-between p-5 text-left"
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-14 h-14 flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-[#0f62fe]/10' : 'bg-[#f4f4f4]'}`} style={{ transitionDuration: `${durationFast02}ms` }}>
                              <card.Pictogram className={`w-10 h-10 ${isOpen ? 'text-[#0f62fe]' : 'text-[#525252]'}`} />
                            </div>
                            <h3 className={`carbon-fluid-heading-03 ${isOpen ? 'text-[#0f62fe]' : 'text-[var(--cds-text-primary)]'}`}>{card.title}</h3>
                          </div>
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${isOpen ? 'bg-[#0f62fe]' : 'bg-[#f4f4f4]'}`} style={{ transitionDuration: `${durationFast02}ms` }}>
                            <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'text-white rotate-180' : 'text-[#525252]'}`} style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }} />
                          </div>
                        </button>
                        <div id={`pakistan-panel-${idx}`} className={`overflow-hidden transition-all ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`} style={{ transitionDuration: `${durationModerate01}ms`, transitionTimingFunction: easings.standard.productive }}>
                          <div className="px-5 pb-5">
                            <ul className="space-y-3 pl-16">
                              {card.items.map((item) => (
                                <li key={item.lead} className="flex items-start gap-3 carbon-body-01 text-[var(--cds-text-primary)]">
                                  <CheckmarkFilled className="w-4 h-4 text-[#0f62fe] mt-0.5 flex-shrink-0" />
                                  <span><strong className="font-medium">{item.lead}:</strong> {item.desc}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Cost of Failure */}
                <div className="p-8 md:p-10 mb-8 scroll-animate">
                  <div className="grid md:grid-cols-12 gap-8 items-center">
                    {/* Stat */}
                    <div className="md:col-span-4 text-center md:text-left">
                      <div className="carbon-fluid-heading-05 text-[#161616] leading-none">13-19%</div>
                      <div className="carbon-fluid-heading-03 text-[#0f62fe] mt-1">of data centre outages</div>
                      <p className="carbon-body-01 text-[#525252] mt-3">are caused by cooling failures (Uptime Institute)</p>
                    </div>
                    {/* Divider */}
                    <div className="hidden md:block w-px h-24 bg-[var(--cds-border-subtle)] mx-auto" />
                    {/* Detail */}
                    <div className="md:col-span-7">
                      <p className="carbon-label-01 text-[#0f62fe] uppercase tracking-wider mb-4">The Cost of Failure</p>
                      <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                        {[
                          { label: 'Production Loss', desc: 'PKR 2–5M/day in lost production revenue' },
                          { label: 'Warranty Void', desc: 'Thermal damage voids manufacturer cover' },
                          { label: 'SLA Penalties', desc: 'Clause triggers with downstream clients' },
                          { label: 'Reputation Risk', desc: 'Regulator and enterprise trust erosion' },
                        ].map((item) => (
                          <div key={item.label}>
                            <p className="carbon-body-01 text-[var(--cds-text-primary)] font-medium">{item.label}</p>
                            <p className="carbon-body-01 text-[#525252]">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#0f62fe] to-[#009d9a] p-10 text-white text-center scroll-animate">
                  <div className="flex items-center justify-center gap-8 mb-4">
                    <div className="text-right">
                      <div className="text-sm text-white/70 uppercase tracking-wider">Standard Design</div>
                      <div className="text-4xl font-light text-white/60">35°C</div>
                    </div>
                    <div className="w-px h-16 bg-white/30" />
                    <div className="text-left">
                      <div className="text-sm text-white/70 uppercase tracking-wider">Our Engineering</div>
                      <div className="text-6xl font-light">45°C+</div>
                    </div>
                  </div>
                  <p className="carbon-body-01 text-white/90">Lahore summer peak ambient. Standard units fail. We engineer for this.</p>
                </div>

                {/* Thermal Readiness Checklist — Downloadable Asset */}
                <div className="mt-10 border-2 border-dashed border-[#c6c6c6] bg-[#fafafa] p-6 md:p-8 scroll-animate">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#e0e0e0] flex items-center justify-center flex-shrink-0">
                        <RainyHeavy className="w-6 h-6 text-[#525252]" />
                      </div>
                      <div>
                        <p className="carbon-label-01 text-[#525252] uppercase tracking-wider mb-1">Downloadable</p>
                        <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-1">Thermal Readiness Checklist</h3>
                        <p className="carbon-body-01 text-[var(--cds-text-secondary)] max-w-lg">
                          Our field-tested 18-point protocol used across 40+ Pakistan data centre sites. Covers ambient conditions, cooling equipment health, airflow management, power redundancy, monitoring, and maintenance documentation.
                        </p>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <button
                        onClick={() => setChecklistModalOpen(true)}
                        className="cds--btn cds--btn--tertiary inline-flex items-center"
                      >
                        <ArrowDown className="w-4 h-4 mr-2" />
                        Download Thermal Readiness Checklist
                      </button>
                    </div>
                  </div>
                </div>

                {/* Checklist Download Modal */}
                {checklistModalOpen && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" onClick={() => setChecklistModalOpen(false)} />
                    <div className="relative bg-white w-full max-w-md p-8 shadow-2xl my-auto">
                      <button
                        onClick={() => setChecklistModalOpen(false)}
                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-[#525252] hover:text-[#161616] transition-colors"
                        aria-label="Close modal"
                      >
                        <Close className="w-5 h-5" />
                      </button>

                      <div className="mb-6">
                        <div className="w-10 h-10 bg-[#0f62fe]/10 flex items-center justify-center mb-3">
                          <RainyHeavy className="w-5 h-5 text-[#0f62fe]" />
                        </div>
                        <h3 className="carbon-heading-02 text-[#161616] mb-1">Download Thermal Readiness Checklist</h3>
                        <p className="carbon-body-01 text-[#525252]">
                          Perception-IT Field-Tested Protocol | 18-Point Validation. Used across 40+ Pakistan data centre sites.
                        </p>
                      </div>

                      {checklistSubmitted ? (
                        <div className="text-center py-4">
                          <div className="w-12 h-12 bg-[#009d9a]/10 flex items-center justify-center mx-auto mb-3">
                            <CheckmarkFilled className="w-6 h-6 text-[#009d9a]" />
                          </div>
                          <h4 className="carbon-heading-02 text-[#161616] mb-1">Checklist downloaded</h4>
                          <p className="carbon-body-01 text-[#525252]">Thank you. The file should begin downloading automatically.</p>
                        </div>
                      ) : (
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            setChecklistSubmitted(true);
                            const content = `THERMAL READINESS CHECKLIST
Perception-IT Field-Tested Protocol | 18-Point Monsoon Season Validation
Used across 40+ Pakistan data centre sites | Updated: Jan 2026

═══════════════════════════════════════════════════════════════

CHECKLIST OVERVIEW
───────────────────────────────────────────────────────────────
Purpose: Preliminary thermal health assessment to identify critical risks before monsoon season (Jun-Sep) or peak summer (Apr-Jun).
Who Should Use: Facilities managers, IT directors, data centre operators in Pakistan.
Time Required: 60-90 minutes for walkthrough + documentation review.
Outcome: Risk scorecard (Green/Amber/Red) + recommendation for Standard Thermal Health Check vs. Precision Thermal Engineering.

Disclaimer: This checklist is for preliminary self-assessment only. It does not constitute a professional engineering assessment, SLA guarantee, or regulatory compliance certification. Formal validation requires on-site assessment by Perception-IT engineers. Actual thermal performance depends on facility condition, environmental factors, and operational practices.

═══════════════════════════════════════════════════════════════

SECTION 1: AMBIENT & ENVIRONMENTAL CONDITIONS
───────────────────────────────────────────────────────────────

1.1 Maximum Ambient Temperature Recording
Check: Review last 12 months of outdoor temperature logs (facility weather station or local meteorological data)
Threshold: If max ambient >40C for >30 days/year -> Amber Risk
Threshold: If max ambient >45C for >10 days/year -> Red Risk
Action: Document peak temperature, duration, and corresponding rack inlet temps
Pakistan Context: Lahore summer peaks regularly exceed 45C; standard cooling units derate 40% at this temperature

1.2 Monsoon Humidity Exposure
Check: Review humidity logs for Jun-Sep period (last 2 years)
Threshold: If RH >80% for >60 consecutive days -> Amber Risk
Threshold: If RH >90% for >30 consecutive days -> Red Risk
Action: Inspect condensate drain pans for standing water, algae growth, or overflow marks
Pakistan Context: Karachi/Lahore monsoon humidity regularly exceeds 85%; condensation risk inside cabinets increases exponentially

1.3 Dust & Particulate Load
Check: Visual inspection of air filters (return air grilles, CRAC/CRAH units, rack inlet filters)
Threshold: If filters show visible dust accumulation >5mm thickness -> Amber Risk
Threshold: If filters are clogged/restricted (airflow visibly reduced) -> Red Risk
Action: Document filter change frequency; if >3 months between changes -> Amber Risk
Pakistan Context: Lahore/Karachi industrial zones average 180-220 ug/m3 PM10; filters clog 3x faster than global averages

═══════════════════════════════════════════════════════════════

SECTION 2: COOLING EQUIPMENT HEALTH
───────────────────────────────────────────────────────────────

2.1 Cooling Unit Age & Runtime
Check: Review installation date and runtime hours for each cooling unit (CRAC, CRAH, in-row, server room AC)
Threshold: If unit age >7 years -> Amber Risk
Threshold: If unit age >10 years OR runtime >60,000 hours -> Red Risk
Action: Document make, model, serial number, and last preventive maintenance date
Pakistan Context: 73% of Pakistan facilities operate cooling equipment >7 years beyond design life; compressor failure risk increases 3x after 10 years

2.2 Refrigerant Charge & Pressure
Check: Review last refrigerant pressure test report (if available)
Threshold: If no pressure test in last 12 months -> Amber Risk
Threshold: If pressure readings outside manufacturer spec (+/-10%) -> Red Risk
Action: Visually inspect refrigerant lines for oil stains (indicates leak)
Pakistan Context: Incorrect refrigerant charge causes 60% of first-year cooling failures in Pakistan; requires certified technician validation

2.3 Condensate Drain Integrity
Check: Visual inspection of condensate drain pans, pipes, and pumps
Threshold: If drain pan shows rust, cracks, or standing water -> Amber Risk
Threshold: If condensate pump is single (no redundancy) OR no float switch -> Red Risk
Action: Pour 1L water into drain pan; verify flow within 60 seconds and no overflow
Pakistan Context: Monsoon humidity increases condensate volume 2-3x; undersized drains cause water damage in 31% of Pakistan facilities

2.4 Cooling Capacity vs. IT Load
Check: Calculate total IT load (kW) from UPS/PDU meters; compare to cooling capacity (kW) from unit nameplates
Threshold: If cooling capacity <1.3x IT load -> Amber Risk
Threshold: If cooling capacity <1.1x IT load OR any rack inlet >27C -> Red Risk
Action: Document design load vs. actual load; note any planned server additions in next 12 months
Pakistan Context: Pakistani DCs average 88% UPS load; cooling must be oversized 60% to account for 45C derating

═══════════════════════════════════════════════════════════════

SECTION 3: AIRFLOW & THERMAL MANAGEMENT
───────────────────────────────────────────────────────────────

3.1 Rack Inlet Temperature Mapping
Check: Measure inlet temperature at top, middle, and bottom of 3 representative racks (use IR thermometer or data logger)
Threshold: If any inlet >25C -> Amber Risk
Threshold: If any inlet >27C OR temperature variation >3C across rack -> Red Risk
Action: Document rack location, IT load, and inlet temps; photograph thermal camera reading if available
Pakistan Context: ASHRAE A2 recommends 18-27C inlet; >27C triggers thermal throttling and 17% higher fan failure rate

3.2 Hot/Cold Aisle Containment
Check: Visual inspection of aisle layout; verify blanking panels fill all empty U-spaces
Threshold: If >10% of U-spaces lack blanking panels -> Amber Risk
Threshold: If no aisle containment (open room) OR hot/cold air mixing visible -> Red Risk
Action: Count missing blanking panels; document aisle width and ceiling height
Pakistan Context: Bypass airflow from missing blanking panels reduces cooling efficiency 30-40%; critical in high-ambient environments

3.3 Raised Floor Plenum Integrity (if applicable)
Check: Visual inspection under raised floor for cable obstructions, dust accumulation, and tile sealing
Threshold: If floor tiles lack gaskets OR visible gaps >3mm -> Amber Risk
Threshold: If plenum depth <300mm OR cables block >20% of airflow path -> Red Risk
Action: Lift 3 random tiles; photograph plenum condition; measure tile-to-tile height variation
Pakistan Context: Dust infiltration through unsealed plenum edges causes 17% of thermal failures; quarterly gasket validation required

3.4 CRAC/CRAH Unit Airflow Direction
Check: Verify supply air direction matches rack orientation (front-to-back airflow)
Threshold: If any unit supplies air perpendicular to cold aisle -> Amber Risk
Threshold: If supply/return air short-circuiting (visible smoke test or IR camera) -> Red Risk
Action: Document unit location, supply direction, and distance to nearest rack
Pakistan Context: Short-circuit airflow reduces effective cooling capacity 40%; common in retrofitted facilities

═══════════════════════════════════════════════════════════════

SECTION 4: POWER & REDUNDANCY
───────────────────────────────────────────────────────────────

4.1 Cooling Power Supply Redundancy
Check: Verify cooling units are on UPS-backed circuits OR generator-backed circuits
Threshold: If any critical cooling unit on utility-only power -> Red Risk
Action: Trace power from cooling unit to breaker panel; document UPS/generator backup status
Pakistan Context: Grid instability (8-12hr load-shedding) requires generator to power cooling plant, not just IT load

4.2 Voltage Stability at Cooling Units
Check: Review power quality logs or use power meter to measure voltage at cooling unit terminals
Threshold: If voltage fluctuation >+/-10% from nominal -> Amber Risk
Threshold: If voltage fluctuation >+/-15% OR frequent brownouts documented -> Red Risk
Action: Document voltage range, frequency of fluctuations, and presence of voltage stabilisers
Pakistan Context: Compressor motor life degrades 3x with voltage fluctuation >+/-10%; stabilised power extends cooling asset life

4.3 Generator Runtime for Cooling Load
Check: Calculate total cooling load (kW); verify generator capacity includes cooling plant + IT load
Threshold: If generator runtime <4 hours at full load -> Amber Risk
Threshold: If generator does NOT power cooling plant -> Red Risk
Action: Document generator fuel capacity, runtime at current load, and refuelling protocol
Pakistan Context: 72-hour runtime assurance required for extended load-shedding; generator must power cooling plant to prevent thermal cascade

═══════════════════════════════════════════════════════════════

SECTION 5: MONITORING & ALERTING
───────────────────────────────────────────────────────────────

5.1 Rack-Level Temperature Sensors
Check: Count number of temperature sensors per rack (inlet + exhaust minimum)
Threshold: If <2 sensors per rack OR sensors only at room level -> Amber Risk
Threshold: If no sensors OR sensors non-functional -> Red Risk
Action: Document sensor locations, calibration date, and alert thresholds
Pakistan Context: Without rack-level sensors, thermal runaway is invisible until equipment fails; 2 sensors/rack minimum (top inlet + bottom exhaust)

5.2 Humidity Monitoring
Check: Verify presence of humidity sensors in cold aisle and hot aisle
Threshold: If humidity monitoring only at room level -> Amber Risk
Threshold: If no humidity monitoring -> Red Risk
Action: Document sensor locations, current RH readings, and alarm setpoints
Pakistan Context: Monsoon humidity spikes to 90%+ RH; condensation risk inside cabinets requires rack-level monitoring

5.3 Alert Thresholds & Escalation
Check: Review alert configuration for temperature, humidity, and cooling unit failures
Threshold: If alert threshold >27C for rack inlet -> Amber Risk
Threshold: If no SMS/email alerts OR no escalation procedure -> Red Risk
Action: Document alert thresholds, notification recipients, and response time SLA
Pakistan Context: 4-hour response threshold during monsoon; alerts must trigger NOC escalation within 30 minutes

5.4 Historical Trending & Reporting
Check: Verify system stores >=90 days of historical temperature/humidity data
Threshold: If data retention <30 days -> Amber Risk
Threshold: If no trending capability OR no monthly reports -> Red Risk
Action: Request sample monthly report; verify PUE calculation methodology
Pakistan Context: Quarterly validation reports required for SBP compliance; trending identifies seasonal degradation patterns

═══════════════════════════════════════════════════════════════

SECTION 6: MAINTENANCE & DOCUMENTATION
───────────────────────────────────────────────────────────────

6.1 Preventive Maintenance Schedule
Check: Review last 12 months of maintenance records for cooling units
Threshold: If maintenance frequency <quarterly -> Amber Risk
Threshold: If no documented maintenance in last 6 months -> Red Risk
Action: Document last filter change, coil cleaning, refrigerant check, and belt inspection dates
Pakistan Context: Quarterly maintenance mandatory for monsoon hardening; annual maintenance insufficient for Pakistan climate

6.2 Spare Parts Inventory
Check: Review on-site spare parts list (compressors, fans, control boards, refrigerant)
Threshold: If no critical spares on-site -> Amber Risk
Threshold: If no spare parts agreement with vendor -> Red Risk
Action: Document spare parts location, quantity, and last inventory audit date
Pakistan Context: 4-hour response SLA requires regional spare parts pre-staging (Lahore/Karachi/Islamabad hubs)

6.3 Emergency Response Procedure
Check: Review documented procedure for cooling failure during monsoon/peak summer
Threshold: If procedure exists but not tested in last 12 months -> Amber Risk
Threshold: If no documented procedure -> Red Risk
Action: Verify procedure includes portable cooling deployment, condensate overflow response, and generator-cooling coordination
Pakistan Context: Quarterly emergency drills required for Tier 1 SLA; monsoon standby engineers must be pre-identified

6.4 Manufacturer Warranty & Service Contracts
Check: Review warranty status and service contract coverage for all cooling units
Threshold: If warranty expired OR no service contract -> Amber Risk
Threshold: If warranty voided by unauthorised modifications -> Red Risk
Action: Document warranty expiration dates, service provider contact, and response time commitments
Pakistan Context: Manufacturer warranty administered through Perception-IT; extended warranty and spare-part bundling available

═══════════════════════════════════════════════════════════════

RISK SCORECARD & RECOMMENDATIONS
───────────────────────────────────────────────────────────────

Scoring Methodology
Green (Low Risk): 0-3 Red flags, 0-6 Amber flags -> Suitable for Essential tier monitoring
Amber (Medium Risk): 4-6 Red flags OR 7-12 Amber flags -> Requires Professional tier + Thermal Health Check
Red (High Risk): 7+ Red flags OR 13+ Amber flags -> Requires Enterprise tier + Precision Thermal Engineering

Your Results
Category                          Red Flags   Amber Flags   Risk Level
1. Ambient & Environmental        ___         ___           ___
2. Cooling Equipment Health       ___         ___           ___
3. Airflow & Thermal Management   ___         ___           ___
4. Power & Redundancy             ___         ___           ___
5. Monitoring & Alerting          ___         ___           ___
6. Maintenance & Documentation    ___         ___           ___
TOTAL                             ___         ___           ___

Recommended Next Steps

If Green (Low Risk):
- Continue quarterly preventive maintenance
- Monitor inlet temps weekly during monsoon season
- Consider Professional tier for predictive alerts and faster response

If Amber (Medium Risk):
- Book Standard Thermal Health Check (From PKR 75,000, 90 min)
- Address Red flags within 30 days
- Upgrade to Professional tier for monthly maintenance and 8-hour response

If Red (High Risk):
- Book Precision Thermal Engineering assessment (from PKR 650,000)
- Implement emergency mitigations within 7 days (portable cooling, condensate pumps)
- Upgrade to Enterprise tier for 4-hour response and monsoon standby

═══════════════════════════════════════════════════════════════

SUBMIT YOUR RESULTS (Optional)
───────────────────────────────────────────────────────────────
Email completed checklist to thermal@perception-it.com for free engineer review.
Include: Facility location, total IT load (kW), number of racks, and primary concern (monsoon/dust/heat/aging equipment).
Response Time: Within 2 business days with tailored recommendations.
Confidentiality: All submitted checklists are treated as confidential. No obligation to engage Perception-IT services.

═══════════════════════════════════════════════════════════════

Perception-IT (Private) Limited
thermal@perception-it.com | www.perception-it.com
Huawei Enterprise Partner certification valid through Feb 2027 (CERT20251216000154)
`;
                            const blob = new Blob([content], { type: 'text/plain' });
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = 'Thermal-Readiness-Checklist.txt';
                            a.click();
                            URL.revokeObjectURL(url);
                          }}
                          className="space-y-4"
                        >
                          <div>
                            <label htmlFor="checklist-name" className="block carbon-label-01 text-[#525252] mb-1">Full Name</label>
                            <input
                              id="checklist-name"
                              type="text"
                              required
                              value={checklistForm.name}
                              onChange={(e) => setChecklistForm({ ...checklistForm, name: e.target.value })}
                              className="w-full h-10 px-3 border border-[#c6c6c6] bg-white text-[#161616] text-sm focus:outline-none focus:border-[#0f62fe]"
                              placeholder="Your name"
                            />
                          </div>
                          <div>
                            <label htmlFor="checklist-email" className="block carbon-label-01 text-[#525252] mb-1">Email Address <span className="text-[#cf0a2c]">*</span></label>
                            <input
                              id="checklist-email"
                              type="email"
                              required
                              value={checklistForm.email}
                              onChange={(e) => setChecklistForm({ ...checklistForm, email: e.target.value })}
                              className="w-full h-10 px-3 border border-[#c6c6c6] bg-white text-[#161616] text-sm focus:outline-none focus:border-[#0f62fe]"
                              placeholder="you@company.com"
                            />
                          </div>
                          <div>
                            <label htmlFor="checklist-phone" className="block carbon-label-01 text-[#525252] mb-1">Phone Number <span className="text-[#cf0a2c]">*</span></label>
                            <input
                              id="checklist-phone"
                              type="tel"
                              required
                              value={checklistForm.phone}
                              onChange={(e) => setChecklistForm({ ...checklistForm, phone: e.target.value })}
                              className="w-full h-10 px-3 border border-[#c6c6c6] bg-white text-[#161616] text-sm focus:outline-none focus:border-[#0f62fe]"
                              placeholder="+92-300-XXXXXXX"
                            />
                          </div>
                          <p className="carbon-caption-01 text-[#8d8d8d]">
                            We respect your privacy. No spam, ever.
                          </p>
                          <button
                            type="submit"
                            className="cds--btn cds--btn--primary w-full justify-center"
                          >
                            Download Checklist
                            <ArrowDown className="w-4 h-4 ml-2" />
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                )}

              </div>
            </section>

            {/* Section 5: Critical Dependencies — SVG Hub-and-Spoke */}
            <section id="dependencies" className="py-16 bg-[#f4f4f4] relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                backgroundImage: 'radial-gradient(circle, #161616 1px, transparent 1px)',
                backgroundSize: '32px 32px'
              }} />
              <div className="relative max-w-5xl mx-auto px-6 scroll-animate">
                <div className="mb-6">
                  <div className="w-6 h-0.5 bg-[#009d9a] mb-2" />
                  <p className="carbon-label-01 text-[#161616] uppercase tracking-wider">Dependencies</p>
                </div>
                <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-4">Critical Dependencies</h2>
                <p className="carbon-body-01 text-[var(--cds-text-primary)] font-semibold mb-2">
                  Cooling does not work in isolation.
                </p>
                <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-10">
                  Power quality, rack layout, monitoring coverage, and physical security all affect thermal performance. We map these dependencies so there are no surprises.
                </p>

                {/* Hub-and-Spoke Diagram — SVG-based */}
                <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-4">What Cooling Needs to Work</h3>
                <div className="relative mb-10 pt-6">
                  {/* Desktop: visual diagram */}
                  <div className="hidden md:block relative h-[520px]">
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 520">
                      <defs>
                        <linearGradient id="depLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#0f62fe" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#c6c6c6" stopOpacity="0.5" />
                        </linearGradient>
                      </defs>
                      {[
                        { x1: 400, y1: 260, x2: 400, y2: 80 },
                        { x1: 400, y1: 260, x2: 580, y2: 160 },
                        { x1: 400, y1: 260, x2: 580, y2: 360 },
                        { x1: 400, y1: 260, x2: 220, y2: 360 },
                        { x1: 400, y1: 260, x2: 220, y2: 160 },
                      ].map((line, i) => (
                        <line
                          key={i}
                          x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
                          stroke="url(#depLineGrad)"
                          strokeWidth="1.5"
                          strokeDasharray="6 4"
                          className="animate-pulse"
                          style={{ animationDelay: `${i * 0.3}s`, animationDuration: '3s' }}
                        />
                      ))}
                    </svg>

                    {/* Center hub */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                      <div className="absolute inset-0 -m-4 border border-[#0f62fe]/30 animate-ping" style={{ animationDuration: '3s' }} />
                      <div className="absolute inset-0 -m-2 border border-[#0f62fe]/20 animate-ping" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
                      <div className="relative w-28 h-28 bg-[#0f62fe] text-white flex flex-col items-center justify-center shadow-lg">
                        <TemperatureHot className="w-7 h-7 mb-1" />
                        <span className="text-[11px] font-semibold text-center leading-tight uppercase tracking-wider">Cooling<br/>System</span>
                      </div>
                    </div>

                    {/* Nodes */}
                    {[
                      { icon: Lightning, label: 'UPS Power', desc: 'Compressor motor life degrades 3× with voltage fluctuation > ±10%. Stabilised power extends cooling asset life.', pos: { x: '50%', y: '12%', tx: '-50%' }, color: '#0f62fe' },
                      { icon: Wind, label: 'Rack Layout', desc: 'Hotspots form when rack inlet temperatures vary > 3°C. Proper aisle containment and blanking panels are non-negotiable.', pos: { x: '80%', y: '26%', tx: '-30%' }, color: '#0f62fe' },
                      { icon: Dashboard, label: 'Monitoring', desc: 'Without rack-level sensors, thermal runaway is invisible until equipment fails. We integrate temperature, humidity, and leak detection.', pos: { x: '80%', y: '74%', tx: '-30%' }, color: '#0f62fe' },
                      { icon: Shield, label: 'Security', desc: 'Unauthorized door openings destroy pressure differentials and introduce dust. Access control audit logs correlate with thermal anomalies.', pos: { x: '20%', y: '74%', tx: '-70%' }, color: '#0f62fe' },
                      { icon: DataBase, label: 'Fire Suppression', desc: 'Gas discharge creates a temporary thermal shock. Cooling must recover within 90 seconds to prevent secondary damage.', pos: { x: '20%', y: '26%', tx: '-70%' }, color: '#0f62fe' },
                    ].map((node) => (
                      <div
                        key={node.label}
                        className="absolute group"
                        style={{ left: node.pos.x, top: node.pos.y, transform: `translate(${node.pos.tx}, -50%)` }}
                      >
                        <div className="w-56 bg-white border border-[#e0e0e0] p-4 shadow-sm hover:shadow-lg hover:border-[#0f62fe] hover:-translate-y-1 transition-all" style={{ transitionDuration: `${durationModerate02}ms`, transitionTimingFunction: easings.standard.productive }}>
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-9 h-9 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${node.color}15` }}>
                              <node.icon className="w-5 h-5" style={{ color: node.color }} />
                            </div>
                            <span className="text-sm font-semibold text-[#161616]">{node.label}</span>
                          </div>
                          <p className="text-xs text-[#525252] leading-relaxed">{node.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mobile: stacked cards */}
                  <div className="md:hidden space-y-3">
                    {[
                      { icon: Lightning, label: 'UPS Power Quality', desc: 'Compressor motor life degrades 3× with voltage fluctuation > ±10%. Stabilised power extends cooling asset life.' },
                      { icon: Wind, label: 'Rack Layout & Airflow', desc: 'Hotspots form when rack inlet temperatures vary > 3°C. Proper aisle containment and blanking panels are non-negotiable.' },
                      { icon: Dashboard, label: 'Environmental Monitoring', desc: 'Without rack-level sensors, thermal runaway is invisible until equipment fails. We integrate temperature, humidity, and leak detection.' },
                      { icon: Shield, label: 'Physical Security', desc: 'Unauthorized door openings destroy pressure differentials and introduce dust. Access control audit logs correlate with thermal anomalies.' },
                      { icon: DataBase, label: 'Fire Suppression', desc: 'Gas discharge creates a temporary thermal shock. Cooling must recover within 90 seconds to prevent secondary damage.' },
                    ].map((item) => (
                      <div key={item.label} className="p-4 bg-white border border-[#e0e0e0] flex items-start gap-3 hover:border-[#0f62fe] transition-all" style={{ transitionDuration: `${durationModerate02}ms`, transitionTimingFunction: easings.standard.productive }}>
                        <div className="w-10 h-10 bg-[#0f62fe]/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-[#0f62fe]" />
                        </div>
                        <div>
                          <p className="carbon-label-01 text-[#0f62fe] uppercase mb-1">{item.label}</p>
                          <p className="carbon-body-01 text-[var(--cds-text-primary)] text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 border-l-4 border-[#009d9a] bg-[#009d9a]/10">
                  <p className="carbon-body-01 text-[var(--cds-text-primary)]">
                    <strong>Our approach:</strong> Every cooling engagement includes a dependency audit. If your power, monitoring, or physical layout is not ready, we tell you upfront and offer the services to fix it. No hidden gaps, no finger-pointing later.
                  </p>
                </div>

                {/* Cross-Links: Related Services + Compute Dependency */}
                <div className="mt-8 grid md:grid-cols-3 gap-0 border-t border-[var(--cds-border-subtle)]">
                  {[
                    { to: '/services/power-ups', tag: 'Related Service', tagColor: '#0f62fe', title: 'Power & UPS Solutions', desc: 'Compressor motor life degrades 3× with voltage fluctuation. Stabilised power extends cooling asset life.' },
                    { to: '/services/environmental-monitoring', tag: 'Related Service', tagColor: '#0f62fe', title: 'Environmental Monitoring', desc: 'Without rack-level sensors, thermal runaway is invisible until equipment fails. We integrate temperature, humidity, and leak detection.' },
                    { to: '/services/server-continuity', tag: 'Compute Dependency', tagColor: '#009d9a', title: 'Server Continuity', desc: 'Cooling failure is the leading cause of server SLA breaches. Bundle thermal continuity with server support under one SLA.' },
                  ].map((card, idx) => (
                    <Link
                      key={card.title}
                      to={card.to}
                      className={`group flex items-start gap-4 p-5 hover:bg-[var(--cds-layer-01)] transition-all ${idx < 2 ? 'md:border-r border-[var(--cds-border-subtle)]' : ''} border-b md:border-b-0 border-[var(--cds-border-subtle)]`}
                      style={{ transitionDuration: `${durationModerate01}ms`, transitionTimingFunction: easings.standard.productive }}
                    >
                      <div className="flex-1 min-w-0">
                        <p className="carbon-label-01 uppercase tracking-wider mb-2" style={{ color: card.tagColor }}>{card.tag}</p>
                        <p className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2 group-hover:text-[#0f62fe] transition-colors">{card.title}</p>
                        <p className="carbon-body-01 text-[var(--cds-text-secondary)]">{card.desc}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-[#0f62fe] mt-1 flex-shrink-0 transition-transform group-hover:translate-x-1" style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }} />
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            {/* Section: Trusted By */}
            <section id="trusted-by" className="py-16 bg-[#f4f4f4]">
              <div className="max-w-5xl mx-auto px-6 scroll-animate">
                <div className="mb-10 text-center">
                  <p className="carbon-label-01 text-[var(--cds-text-secondary)] uppercase tracking-wider mb-4">Trusted By</p>
                  <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)]">Partners & Clients</h2>
                </div>
                <PartnerLogos />
                <div className="mt-12">
                  <ClientLogos />
                </div>
              </div>
            </section>

            {/* Section 12: FAQ */}
            <section id="faq" className="py-16 bg-[var(--cds-background)]">
              <div className="max-w-5xl mx-auto px-6 scroll-animate">
                <div className="mb-6">
                  <div className="w-6 h-0.5 bg-[#009d9a] mb-2" />
                  <p className="carbon-label-01 text-[#161616] uppercase tracking-wider">FAQ</p>
                </div>
                <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-8">What Buyers Ask</h2>

                <div className="space-y-0">
                  {[
                    {
                      q: 'Can you work with my existing cooling units?',
                      a: 'Yes. We conduct a thermal health assessment to validate performance, map blind spots, and recommend targeted upgrades or containment modifications. If your equipment meets ASHRAE A3/A4 tolerances and passes monsoon stress testing, we integrate it into your managed service plan. If not, we provide a right-sized replacement roadmap.',
                    },
                    {
                      q: 'What happens if monsoon flooding affects the condensate drain?',
                      a: 'Tier 1 contracts include 2× oversized condensate pumps, secondary drain pans, float switches, and subfloor leak detection with <60-second SMS alerts. During monsoon peak (Jun–Sept), we deploy portable extraction units and conduct weekly drain integrity checks. Reactive support only is available under Tier 2.',
                    },
                    {
                      q: 'How long does full installation take?',
                      a: 'Standard rack-level deployments: 3–5 days. Full-room precision cooling with containment: 10–14 days. Large-scale CRAC/CRAH or liquid cooling: 3–6 weeks depending on site readiness, utility coordination, and commissioning validation. We provide a Gantt chart with dependency mapping before mobilisation.',
                    },
                    {
                      q: 'Do I need all three tiers, or can I start with Essential?',
                      a: 'You can start with any tier. Essential covers baseline maintenance for stable, low-risk environments. Professional adds predictive monitoring and faster response for production workloads. Enterprise delivers full-stack continuity with 4-hour monsoon response and quarterly validation for SBP-regulated or mission-critical sites. 78% of clients upgrade within 18 months as thermal risk exposure increases.',
                    },
                    {
                      q: 'What if I only need engineering-grade analysis, not managed services?',
                      a: 'Precision Thermal Engineering is available as a standalone project. You receive 3D airflow maps, hotspot prediction, containment recommendations, and engineering sign-off. Implementation and ongoing monitoring are optional. Assessment fees may be credited toward future services subject to mutual agreement.',
                    },
                    {
                      q: 'How does the 4-hour response SLA work in practice?',
                      a: 'Critical alert acknowledgment within 30 minutes (24/7). Engineer dispatched within 60 minutes. On-site arrival within 4 hours (Enterprise) or 8 hours (Standard). GPS-tracked dispatch, real-time ETA updates, and pre-staged spare parts at regional hubs. Monsoon peak (Jun–Sept) includes dedicated standby engineers in Lahore/Karachi. *Response time targets are engineering baselines. Contractual commitments, remedies, and exclusions are defined exclusively in signed service agreements following site assessment.',
                    },
                    {
                      q: 'What if grid power fails during installation or operation?',
                      a: 'Our commissioning protocol includes staged grid-failure simulation (utility → UPS → generator) with cooling plant runtime validation. During operation, Tier 1 contracts include generator-cooling integration, lithium-ion autonomy, and voltage-stabilised inputs. We validate 72-hour runtime assurance for extended load-shedding scenarios.',
                    },
                    {
                      q: 'How do I build the business case for my CFO?',
                      a: 'We provide a PKR/day risk model comparing projected downtime costs against Tier 1 service investment. Includes energy savings projection (VFD integration, free-cooling validation, PUE optimisation), warranty preservation metrics, and regulatory compliance alignment (SBP/SECP/NFPA). All figures are illustrative; formal business case requires on-site assessment.',
                    },
                    {
                      q: 'Are spare parts stocked in Pakistan?',
                      a: 'Yes. Enterprise tier includes on-site spare parts cache (compressors, fans, control boards, refrigerant). Professional tier includes regional pre-staging (Lahore/Karachi/Islamabad hubs). Essential tier covers on-request procurement with manufacturer lead times. All parts are manufacturer-certified and logged for warranty compliance.',
                    },
                  ].map((faq, idx) =>(
                    <div key={idx} className="border-b border-[var(--cds-border-subtle)]">
                      <button
                        onClick={() => toggleFaq(idx)}
                        aria-expanded={openFaq === idx}
                        aria-controls={`faq-panel-${idx}`}
                        className="w-full flex items-center justify-between py-4 text-left hover:bg-white/50 transition-colors px-2"
                        style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}
                      >
                        <span className="carbon-heading-02 text-[var(--cds-text-primary)] pr-4">{faq.q}</span>
                        <span className={`text-[#0f62fe] text-xl font-light flex-shrink-0 transition-transform duration-200 ${openFaq === idx ? 'rotate-45' : ''}`}>+</span>
                      </button>
                      <div id={`faq-panel-${idx}`} className={`overflow-hidden transition-all ${openFaq === idx ? 'max-h-96 pb-4' : 'max-h-0'}`} style={{ transitionDuration: `${durationModerate01}ms`, transitionTimingFunction: easings.standard.productive }}>
                        <p className="carbon-body-01 text-[var(--cds-text-secondary)] px-2">{faq.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 13: CTA */}
            <section id="cta" className="py-16 bg-[#f4f4f4]">
              <div className="max-w-5xl mx-auto px-6 scroll-animate">
                <div className="mb-6">
                  <div className="w-6 h-0.5 bg-[#009d9a] mb-2" />
                  <p className="carbon-label-01 text-[#161616] uppercase tracking-wider">Next Step</p>
                </div>
                <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-4">Start With a Thermal Health Check</h2>
                <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-6 max-w-3xl">
                  Engineered for Pakistan&apos;s climate reality. 90-minute on-site assessment. Clear scorecard. No obligation.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-10">
                  {[
                    { step: '01', title: 'Thermal Health Check', desc: 'We map your current state and tell you what is working, what needs attention, and whether deeper analysis adds value.' },
                    { step: '02', title: 'Right-Sized Solution', desc: 'Start with the standard Health Check. If your facility needs deeper analysis, we escalate to Precision Thermal Engineering — with a clear scope, timeline, and hardware recommendation.' },
                    { step: '03', title: 'Implementation or Managed Service', desc: 'Hardware, installation, commissioning, or 24/7 monitoring — all under one SLA with one partner.' },
                  ].map((item) => (
                    <div key={item.step} className="relative p-6 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] hover:-translate-y-1 transition-all" style={{ transitionDuration: `${durationModerate02}ms`, transitionTimingFunction: easings.standard.productive }}>
                      <div className="absolute top-4 right-4 w-8 h-8 bg-[#0f62fe] text-white flex items-center justify-center font-semibold text-sm">
                        {item.step}
                      </div>
                      <h3 className="carbon-fluid-heading-03 text-[var(--cds-text-primary)] mb-2 pr-10">{item.title}</h3>
                      <p className="carbon-body-01 text-[var(--cds-text-secondary)]">{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Pricing Reference */}
                <div className="mb-10 p-6 bg-white border border-[var(--cds-border-subtle)]">
                  <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-4">Pricing Reference</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)]">
                      <p className="carbon-label-01 text-[var(--cds-text-secondary)] uppercase tracking-wider mb-1">From Thermal Assessment</p>
                      <p className="carbon-fluid-heading-03 text-[var(--cds-text-primary)]">From PKR 75,000</p>
                      <p className="carbon-helper-text-01 text-[#525252] mt-1">20% potentially credited toward Precision Engineering if upgraded within 60 days</p>
                    </div>
                    <div className="p-4 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)]">
                      <p className="carbon-label-01 text-[var(--cds-text-secondary)] uppercase tracking-wider mb-1">Tier 1 Managed Cooling</p>
                      <p className="carbon-fluid-heading-03 text-[var(--cds-text-primary)]">From PKR 65K<span className="text-lg">/mo</span></p>
                      <p className="carbon-helper-text-01 text-[#525252] mt-1">SLA-backed continuity</p>
                    </div>
                    <div className="p-4 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)]">
                      <p className="carbon-label-01 text-[var(--cds-text-secondary)] uppercase tracking-wider mb-1">Tier 2 Hardware + Install</p>
                      <p className="carbon-fluid-heading-03 text-[var(--cds-text-primary)]">From PKR 280K</p>
                      <p className="carbon-helper-text-01 text-[#525252] mt-1">One-time basic deployment</p>
                    </div>
                  </div>
                </div>

                {/* Final CTA Banner */}
                <div className="p-8 bg-gradient-to-br from-[#0f62fe] to-[#009d9a] text-white text-center">
                  <h3 className="carbon-fluid-heading-04 mb-2">Get Thermal Certainty Before the Next Crisis</h3>
                  <p className="carbon-body-01 text-white/90 mb-6 max-w-2xl mx-auto">
                    PKR 75,000. 90-minute assessment. Clear scorecard. No obligation.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a 
                      href="mailto:contact@perception-it.com"
                      className="cds--btn cds--btn--primary inline-flex items-center bg-white text-[#0f62fe] hover:bg-[#e8e8e8] transition-colors"
                      style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}
                    >
                      Request Thermal Health Check
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                    <button 
                      onClick={() => setChecklistModalOpen(true)}
                      className="inline-flex items-center px-4 py-3 border border-white text-white hover:bg-white hover:text-[#0f62fe] transition-colors font-medium text-sm"
                      style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}
                    >
                      Download Thermal Readiness Checklist
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Explore More Data Centre Services — Hub Return Path */}
            <section className="py-16 bg-[var(--cds-background)] border-t border-[var(--cds-border-subtle)]">
              <div className="max-w-5xl mx-auto px-6">
                <div className="mb-6">
                  <div className="w-6 h-0.5 bg-[#009d9a] mb-2" />
                  <p className="carbon-label-01 text-[#161616] uppercase tracking-wider">Data Centre Services</p>
                </div>
                <h3 className="carbon-fluid-heading-04 text-[var(--cds-text-primary)] mb-4">Explore More Services</h3>
                <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-6 max-w-2xl">
                  Cooling & Airflow is one part of a complete data centre infrastructure stack. Explore related services or return to the Data Centre Services overview.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {[
                    { label: 'Power & UPS', link: '/services/power-ups' },
                    { label: 'Rack & Cabinet', link: '/services/rack-cabinets' },
                    { label: 'Environmental Monitoring', link: '/services/environmental-monitoring' },
                    { label: 'Fire Suppression', link: '/services/fire-suppression' },
                    { label: 'Design & Build', link: '/services/design-build' },
                  ].map((item) => (
                    <Link 
                      key={item.label}
                      to={item.link}
                      className="px-4 py-2 bg-white border border-[var(--cds-border-subtle)] text-sm text-[#161616] hover:border-[#0f62fe] hover:text-[#0f62fe] transition-colors"
                      style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <Link 
                  to="/services/datacenter2"
                  className="inline-flex items-center gap-2 text-[#0f62fe] hover:underline font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Data Centre Services
                </Link>
              </div>
            </section>


          </main>
        </div>

      {/* Footer Disclaimer */}
      <section className="py-12 bg-[#f4f4f4] border-t border-[var(--cds-border-subtle)]">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="carbon-label-01 text-[var(--cds-text-secondary)] uppercase tracking-wider mb-6">Important Notices</h3>
          <div className="space-y-4">
            <p className="carbon-helper-text-01 text-[#525252]">
              Service outcomes, cooling uptime targets, and remedies are defined exclusively in signed contractual agreements between Perception-IT and the client. Marketing materials do not constitute offers or guarantees.
            </p>
            <p className="carbon-helper-text-01 text-[#525252]">
              Capacity figures and thermal projections are illustrative — formal sizing requires on-site assessment. Risk calculations, exposure estimates, and failure reduction statistics are based on industry benchmarks and pilot client data. Actual results depend on facility condition, environmental factors, client cooperation, and forces beyond Perception-IT&apos;s control.
            </p>
            <p className="carbon-helper-text-01 text-[#525252]">
              &quot;Monsoon-hardened,&quot; &quot;dust-excluded,&quot; and similar terms describe engineering protocols and design intent, not absolute performance warranties.
            </p>
            <p className="carbon-helper-text-01 text-[#525252]">
              SBP/SECP/NFPA compliance support does not constitute legal advice or regulatory certification. Clients remain responsible for their own compliance obligations.
            </p>
            <p className="carbon-helper-text-01 text-[#525252]">
              Perception-IT (Private) Limited. Huawei Enterprise Partner certification valid through Feb 2027 (CERT20251216000154). All trademarks acknowledged.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoolingAirflow2;
