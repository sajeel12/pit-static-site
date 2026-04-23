import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/carbon-typography.css';
import Footer from '../../sections/Footer';
import Navigation from '../../components/Navigation';
import FeaturedTestimonial from '../../components/FeaturedTestimonial';
import PartnerLogos from '../../sections/PartnerLogos';
import ClientLogos from '../../sections/ClientLogos';
import {
  ArrowRight, CheckmarkFilled,
  TemperatureHot, RainDrop, WindGusts as Wind,
  Settings, Meter, Certificate,
  ChevronRight, ChevronDown,

  Lightning, Security as Shield, DataBase, Dashboard
} from '@carbon/icons-react';
import { AirConditioner, Windy, ServerRack, VisualInspection, Analyze, CloudManagedServices, CloudServices, DataCenters } from '@carbon/pictograms-react';
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


const SECTIONS = ['assessment', 'hardware', 'installation', 'managed', 'results', 'pakistan', 'dependencies', 'integration', 'trusted-by', 'faq', 'cta'] as const;

const caseStudyData = [
  { stat: '99.97%', label: 'Uptime Achieved', client: 'Pakistan Telecom', industry: 'Telecommunications', title: '3-Site Cooling Overhaul', desc: 'Precision CRAC deployment with monsoon-hardened protocols. Zero thermal outages across two monsoon seasons.', tags: ['CRAC Deployment', 'Monsoon Hardening'], outcomes: ['Zero thermal outages across two monsoon seasons', 'CRAC units sized with 25% monsoon humidity buffer', 'Remote monitoring with 4-hour response SLA'] },
  { stat: '40%', label: 'Energy Reduction', client: 'Private Bank', industry: 'Financial Services', title: 'Precision Cooling Refresh', desc: 'Replaced legacy AC with in-row cooling and aisle containment. PUE dropped from 1.8 to 1.35.', tags: ['In-Row Cooling', 'PUE Optimisation'], outcomes: ['PUE reduced from 1.8 to 1.35', '40% energy savings validated over 12 months', 'Hot-spot elimination across all 8 racks'] },
  { stat: '4hrs', label: 'Response Time', client: 'Government IDC', industry: 'Government', title: 'Managed Thermal Service', desc: 'End-to-end cooling supply, install, and managed service with quarterly validation and monsoon standby.', tags: ['Managed Service', 'SLA'], outcomes: ['4-hour on-site response guarantee', 'Quarterly thermal validation reports', 'Monsoon standby protocol with spare CRAC'] },
  { stat: '60%', label: 'Capacity Gain', client: 'Textile Manufacturer', industry: 'Manufacturing', title: 'Legacy Cooling Replacement', desc: 'Custom cooling capacity derating for 45°C ambient. High-ambient condensers with thermal mass buffering.', tags: ['Retrofit', 'Precision Cooling'], outcomes: ['60% additional cooling capacity unlocked', 'Condensers rated for 50°C ambient', 'Thermal mass buffering for power fluctuations'] },
  { stat: '99.9%', label: 'Uptime SLA', client: 'National Bank', industry: 'Financial Services', title: 'Monsoon-Hardened Edge Cooling', desc: 'Quarterly room integrity validation and humidity-compensated CRAC setpoints. Zero monsoon-related failures.', tags: ['Edge', 'Monsoon Hardening'], outcomes: ['99.9% uptime SLA met for 24 months', 'Zero monsoon-related cooling failures', 'Automated humidity compensation active'] },
  { stat: '35%', label: 'Energy Saved', client: 'Cloud Provider', industry: 'Technology', title: 'Free Cooling Integration', desc: 'Hot/cold aisle containment with free-cooling integration. Energy consumption reduced by 35%.', tags: ['Free Cooling', 'PUE Optimisation'], outcomes: ['35% annual energy reduction', 'Free cooling active 8 months/year', 'Containment retrofit completed without downtime'] },
];

const sectionLabels: Record<string, string> = {
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


const ImagePlaceholder = ({ title, desc, aspect = '16/9' }: { title: string; desc: string; aspect?: string }) => (
  <div className="mt-8 border-2 border-dashed border-[#c6c6c6] bg-white">
    <div className="flex flex-col items-center justify-center p-8 text-center min-h-[200px]">
      <svg className="w-10 h-10 text-[#8d8d8d] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <p className="carbon-label-01 text-[#525252] uppercase tracking-wider mb-2">3D Rendering / Photography Placeholder</p>
      <p className="carbon-heading-02 text-[#161616] mb-2">{title}</p>
      <p className="carbon-body-01 text-[#525252] max-w-2xl">{desc}</p>
      <p className="carbon-helper-text-01 text-[#8d8d8d] mt-3">Target: {aspect} aspect ratio | Min 1200×675px | PNG/WebP</p>
    </div>
  </div>
);

const CoolingAirflow = () => {
  const [activeSection, setActiveSection] = useState('hardware');
  const [caseStudyPage, setCaseStudyPage] = useState(0);
  const [testimonialPage, setTestimonialPage] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeDeployTab, setActiveDeployTab] = useState(0);
  const [assessmentExpanded, setAssessmentExpanded] = useState(false);
  const [matrixExpanded, setMatrixExpanded] = useState(false);

  const toggleFaq = (idx: number) => setOpenFaq(openFaq === idx ? null : idx);

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
            { '@type': 'ListItem', position: 5, name: 'Cooling & Airflow' }
          ]
        })}
      </script>

      {/* Hero Section */}
      <section id="overview" className="relative pt-40 pb-20 bg-[#0a1628] overflow-hidden">
        {/* Ambient mesh gradient — visible but subtle */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 right-1/4 w-[600px] h-[600px] bg-[#0f62fe] rounded-full blur-[140px] opacity-20 animate-drift" />
          <div className="absolute -bottom-20 left-1/4 w-[500px] h-[500px] bg-[#009d9a] rounded-full blur-[120px] opacity-[0.15] animate-drift-slow" />
          <div className="absolute top-1/3 left-1/2 w-[400px] h-[400px] bg-[#1192e8] rounded-full blur-[100px] opacity-10 animate-drift" style={{ animationDelay: '-5s' }} />
          <div className="absolute bottom-1/4 right-1/3 w-[350px] h-[350px] bg-[#0f62fe] rounded-full blur-[90px] opacity-[0.15] animate-drift-slow" style={{ animationDelay: '-10s' }} />
          <div className="absolute top-1/2 left-[20%] w-[300px] h-[300px] bg-[#009d9a] rounded-full blur-[80px] opacity-10 animate-drift" style={{ animationDelay: '-15s' }} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Mobile Dropdown Navigation */}
          <div className="xl:hidden mb-8">
            <label className="text-xs text-gray-400 block mb-2">On this page:</label>
            <select
              onChange={handleMobileNavChange}
              value={activeSection}
              className="w-full h-12 px-4 bg-gray-800 border border-gray-700 text-white text-sm"
            >
              {SECTIONS.map((id) => (
                <option key={id} value={id}>{sectionLabels[id]}</option>
              ))}
            </select>
          </div>

          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-xs">
              <li><a href="/" className="text-[#78a9ff] hover:text-white hover:underline transition-colors" style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}>Home</a></li>
              <li aria-hidden="true"><ChevronRight className="w-3 h-3 text-[#525252]" /></li>
              <li><a href="/services" className="text-[#78a9ff] hover:text-white hover:underline transition-colors" style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}>Services</a></li>
              <li aria-hidden="true"><ChevronRight className="w-3 h-3 text-[#525252]" /></li>
              <li><span className="text-[#a8a8a8]">Infrastructure</span></li>
              <li aria-hidden="true"><ChevronRight className="w-3 h-3 text-[#525252]" /></li>
              <li><span className="text-[#a8a8a8]">Data Centre Services</span></li>
              <li aria-hidden="true"><ChevronRight className="w-3 h-3 text-[#525252]" /></li>
              <li><span className="text-[#009d9a] font-medium" aria-current="page">Cooling & Airflow</span></li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="carbon-fluid-heading-05 text-white mb-8 max-w-4xl leading-tight">Precision Cooling &amp; Thermal Continuity for Data Centres</h1>
            <p className="carbon-heading-02 text-[#c6c6c6] mb-8 max-w-2xl">Keep your critical infrastructure running at optimal temperature. From hardware supply to 24/7 managed thermal continuity.</p>
            <p className="carbon-body-02 text-[#a8a8a8] mb-10 max-w-2xl">Precision cooling engineered for Pakistan&apos;s climate reality: 45°C summers, monsoon humidity spikes, dust infiltration, and unstable grid power. One partner, end-to-end accountability.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#cta" className="cds--btn cds--btn--primary bg-[#0f62fe] hover:bg-[#0353e9] inline-flex items-center">
                Request Thermal Health Check
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a href="#hardware" className="cds--btn cds--btn--tertiary" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white', borderWidth: '1px' }}>
                Explore Hardware Options
              </a>
            </div>
            <p className="mt-4 text-sm text-[#a8a8a8]">90-minute assessment. PKR 75,000. 20% credited toward Precision Thermal Engineering if upgraded within 60 days.</p>
          </div>
        </div>
      </section>

      {/* Process Summary */}
      <section className="py-12 bg-[#f4f4f4]">
        <div className="max-w-5xl mx-auto px-6 scroll-animate">
          <div className="mb-3">
            <div className="w-6 h-0.5 bg-[#009d9a] mb-2" />
            <p className="carbon-label-01 text-[#161616] uppercase tracking-wider">How It Works</p>
          </div>
          <h2 className="carbon-fluid-heading-04 text-[var(--cds-text-primary)] mb-8">From Assessment to 24/7 Accountability</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { step: '01', title: 'Assessment', desc: 'Thermal audit & risk scoring' },
              { step: '02', title: 'Procurement', desc: 'Right-sized hardware, certified' },
              { step: '03', title: 'Deployment', desc: 'Install, validate, monitor' },
              { step: '04', title: 'Managed Services', desc: "Customised SLA's" },
            ].map((item) => (
              <div key={item.step} className="p-4 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)]">
                <div className="w-8 h-8 bg-[#0f62fe] text-white flex items-center justify-center font-semibold text-sm mb-3">
                  {item.step}
                </div>
                <p className="carbon-heading-02 text-[var(--cds-text-primary)] mb-1">{item.title}</p>
                <p className="carbon-body-01 text-[#525252]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content with Side Navigation */}
      <div className="max-w-[1584px] mx-auto">
        <div className="flex">
          {/* Desktop Side Menu */}
          <aside className="hidden xl:block w-56 flex-shrink-0 pl-6 pr-8">
            <nav className="sticky top-20 pt-8 pb-8 h-[calc(100vh-5rem)]">
              <p className="carbon-label-01 text-[#a8a8a8] uppercase tracking-wider mb-4 px-3">On this page</p>
              <ul className="space-y-0.5">
                {SECTIONS.map((id) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollToSection(id)}
                      className={`w-full text-left px-3 py-2 text-sm transition-colors border-l-2 ${activeSection === id ? 'text-[#0f62fe] border-[#0f62fe] bg-[#f4f4f4] font-semibold' : 'text-[#525252] border-transparent hover:text-[#161616] hover:bg-[#f4f4f4] hover:border-[#c6c6c6]'}`}
                      style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}
                    >
                      {sectionLabels[id]}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content Area */}
          <main className="flex-1 min-w-0 pl-8 pr-6">
            
            {/* Section 0: Assessment */}
            <section id="assessment" className="py-16 bg-[#f4f4f4]">
              <div className="max-w-5xl mx-auto px-6 scroll-animate">
                <div className="mb-6">
                  <div className="w-6 h-0.5 bg-[#009d9a] mb-2" />
                  <p className="carbon-label-01 text-[#161616] uppercase tracking-wider">Assessment</p>
                </div>
                <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-4">Your Assessment Options</h2>
                <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-6 max-w-3xl">
                  From rapid visual checks to engineering-grade CFD modeling. Most facilities begin with our 90-minute Health Check. If you need deeper certainty, we model heat flow in 3D before you spend.
                </p>

                {/* Two Paths — Flip Cards */}
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  {/* Path 1: Thermal Health Check */}
                  <div className="group [perspective:1000px] h-80">
                    <div className="relative h-full w-full overflow-hidden shadow-sm hover:shadow-lg group">
                      {/* Front Face */}
                      <div className="h-full w-full bg-[var(--cds-layer-01)] border-2 border-[#0f62fe] flex flex-col relative">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#0f62fe]" />
                        <div className="p-6 flex-1 flex flex-col relative">
                          <span className="inline-flex self-start px-2 py-0.5 bg-[#0f62fe]/10 text-[#0f62fe] text-[10px] font-medium uppercase tracking-wider mb-3">Path 1</span>
                          <h3 className="text-xl font-normal text-[var(--cds-text-primary)] leading-snug mb-2">Thermal Health Check</h3>
                          <p className="carbon-body-01 text-[#525252] mb-4">Quick confidence in 90 minutes</p>
                          <div className="mt-auto flex items-end justify-between">
                            <VisualInspection className="w-20 h-20" style={{ fill: 'url(#pictogramGrad)' }} />
                            <svg className="w-5 h-5 text-[#0f62fe]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      {/* Back Face */}
                      <div
                        className="absolute inset-0 h-full w-full text-white flex flex-col opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ background: `linear-gradient(to bottom right, ${blue80}, ${blue50})`, transitionDuration: '245ms', transitionTimingFunction: easings.standard.productive }}
                      >
                        <div
                          className="p-6 flex-1 flex flex-col opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all"
                          style={{ transitionDuration: '245ms', transitionTimingFunction: easings.standard.expressive, transitionDelay: '122ms' }}
                        >
                          <h3 className="text-sm font-semibold text-white leading-snug mb-4">Thermal Health Check</h3>
                          <ul className="text-sm text-white/90 leading-relaxed list-disc list-outside pl-4 space-y-2 marker:text-white/50 flex-1">
                            <li>Visual walk-through + infrared thermal mapping</li>
                            <li>Checklist scorecard: Fix / Watch / OK</li>
                            <li>Capacity validation with Pakistan derating</li>
                            <li>Monsoon, dust, and grid risk scoring</li>
                          </ul>
                          <p className="text-xs text-white/70 mt-3 mb-3">2–4 hours on-site · Report within 48 hours</p>
                          <a href="#cta" className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white text-[#0f62fe] text-sm font-medium hover:bg-white/90 transition-colors">
                            Book Thermal Health Check
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Path 2: Precision Thermal Engineering */}
                  <div className="group [perspective:1000px] h-80">
                    <div className="relative h-full w-full overflow-hidden shadow-sm hover:shadow-lg group">
                      {/* Front Face */}
                      <div className="h-full w-full bg-[var(--cds-layer-01)] border-2 border-[#0f62fe] flex flex-col relative">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#0f62fe]" />
                        <div className="p-6 flex-1 flex flex-col relative">
                          <span className="inline-flex self-start px-2 py-0.5 bg-[#0f62fe]/10 text-[#0f62fe] text-[10px] font-medium uppercase tracking-wider mb-3">Path 2</span>
                          <h3 className="text-xl font-normal text-[var(--cds-text-primary)] leading-snug mb-2">Precision Thermal Engineering (CFD Modeling)</h3>
                          <p className="carbon-body-01 text-[#525252] mb-4">See heat flow before you spend</p>
                          <div className="mt-auto flex items-end justify-between">
                            <Analyze className="w-20 h-20" style={{ fill: 'url(#pictogramGrad)' }} />
                            <svg className="w-5 h-5 text-[#0f62fe]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      {/* Back Face */}
                      <div
                        className="absolute inset-0 h-full w-full text-white flex flex-col opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ background: `linear-gradient(to bottom right, ${blue80}, ${blue50})`, transitionDuration: '245ms', transitionTimingFunction: easings.standard.productive }}
                      >
                        <div
                          className="p-6 flex-1 flex flex-col opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all"
                          style={{ transitionDuration: '245ms', transitionTimingFunction: easings.standard.expressive, transitionDelay: '122ms' }}
                        >
                          <h3 className="text-sm font-semibold text-white leading-snug mb-4">Precision Thermal Engineering (CFD Modeling)</h3>
                          <ul className="text-sm text-white/90 leading-relaxed list-disc list-outside pl-4 space-y-2 marker:text-white/50 flex-1">
                            <li>3D airflow & temperature maps of your layout</li>
                            <li>Hotspot prediction under Pakistan conditions</li>
                            <li>Containment & setpoint recommendations</li>
                            <li>Engineering sign-off + visual report</li>
                          </ul>
                          <p className="text-xs text-white/70 mt-3 mb-3">1–2 days data collection · Analysis 1–2 weeks</p>
                          <a href="mailto:contact@perception-it.com?subject=Precision%20Thermal%20Engineering%20Proposal%20Request" className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white text-[#0f62fe] text-sm font-medium hover:bg-white/90 transition-colors">
                            Request CFD Proposal
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Collapsible: Two Paths to Clarity */}
                <div className="mb-10">
                  <button
                    onClick={() => setAssessmentExpanded(!assessmentExpanded)}
                    className={`w-full flex items-center justify-between p-5 bg-[var(--cds-layer-01)] border transition-all ${assessmentExpanded ? 'border-[#0f62fe] shadow-md' : 'border-[var(--cds-border-subtle)] hover:border-[#0f62fe] hover:shadow-md'}`}
                    style={{ transitionDuration: `${durationModerate01}ms`, transitionTimingFunction: easings.standard.productive }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[#0f62fe]/10 flex items-center justify-center flex-shrink-0">
                        <Meter className="w-5 h-5 text-[#0f62fe]" />
                      </div>
                      <div className="text-left">
                        <p className="carbon-heading-02 text-[var(--cds-text-primary)]">Compare Both Assessment Options</p>
                        <p className="carbon-body-01 text-[#525252]">See a side-by-side breakdown of methods, deliverables, timing, and investment.</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-[#0f62fe] transition-transform ${assessmentExpanded ? 'rotate-180' : ''}`} style={{ transitionDuration: `${durationFast02}ms` }} />
                  </button>

                  <div className={`overflow-hidden transition-all ${assessmentExpanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`} style={{ transitionDuration: `${durationModerate01}ms`, transitionTimingFunction: easings.standard.productive }}>
                    <div className="pt-8">

                    <h3 className="carbon-fluid-heading-04 text-[var(--cds-text-primary)] mb-2">Side-by-Side Comparison</h3>
                    <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-8 max-w-3xl">
                      Hover the cards above for a quick preview, or review the full breakdown below to match the right assessment to your facility&apos;s scale and criticality.
                    </p>

                    {/* Comparison table */}
                    <div className="overflow-x-auto mb-10">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="border-b-2 border-[var(--cds-border-subtle)]">
                            <th className="text-left py-3 px-4 carbon-label-01 text-[var(--cds-text-primary)]">Feature</th>
                            <th className="text-left py-3 px-4 carbon-label-01 text-[var(--cds-text-primary)]">Thermal Health Check</th>
                            <th className="text-left py-3 px-4 carbon-label-01 text-[#0f62fe]">Precision Thermal Engineering</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-[var(--cds-border-subtle)]">
                            <td className="py-3 px-4 carbon-body-01 text-[var(--cds-text-secondary)]">Method</td>
                            <td className="py-3 px-4 carbon-body-01 text-[#525252]">Visual inspection + structured checklist</td>
                            <td className="py-3 px-4 carbon-body-01 text-[#525252]">CFD modeling + engineering analysis</td>
                          </tr>
                          <tr className="border-b border-[var(--cds-border-subtle)] bg-[var(--cds-background)]">
                            <td className="py-3 px-4 carbon-body-01 text-[var(--cds-text-secondary)]">Tools</td>
                            <td className="py-3 px-4 carbon-body-01 text-[#525252]">IR camera, airflow meter, checklist</td>
                            <td className="py-3 px-4 carbon-body-01 text-[#525252]">6SigmaDC/ANSYS, thermal sensors, load data</td>
                          </tr>
                          <tr className="border-b border-[var(--cds-border-subtle)]">
                            <td className="py-3 px-4 carbon-body-01 text-[var(--cds-text-secondary)]">Time On-Site</td>
                            <td className="py-3 px-4 carbon-body-01 text-[#525252]">2–4 hours (single visit)</td>
                            <td className="py-3 px-4 carbon-body-01 text-[#525252]">1–2 days (data collection)</td>
                          </tr>
                          <tr className="border-b border-[var(--cds-border-subtle)] bg-[var(--cds-background)]">
                            <td className="py-3 px-4 carbon-body-01 text-[var(--cds-text-secondary)]">Turnaround</td>
                            <td className="py-3 px-4 carbon-body-01 text-[#525252]">Report within 48 hours</td>
                            <td className="py-3 px-4 carbon-body-01 text-[#525252]">Analysis within 1–2 weeks</td>
                          </tr>
                          <tr className="border-b border-[var(--cds-border-subtle)]">
                            <td className="py-3 px-4 carbon-body-01 text-[var(--cds-text-secondary)]">Deliverable</td>
                            <td className="py-3 px-4 carbon-body-01 text-[#525252]">Photo log + &quot;Fix / Watch / OK&quot; list</td>
                            <td className="py-3 px-4 carbon-body-01 text-[#525252]">3D heat maps + capacity calculations</td>
                          </tr>
                          <tr className="border-b border-[var(--cds-border-subtle)] bg-[var(--cds-background)]">
                            <td className="py-3 px-4 carbon-body-01 text-[var(--cds-text-secondary)]">Precision</td>
                            <td className="py-3 px-4 carbon-body-01 text-[#525252]">Qualitative (&quot;Rack 12 feels warm&quot;)</td>
                            <td className="py-3 px-4 carbon-body-01 text-[#525252]">Quantitative (&quot;Rack 12 exceeds 27°C at 45°C ambient&quot;)</td>
                          </tr>
                          <tr className="border-b border-[var(--cds-border-subtle)]">
                            <td className="py-3 px-4 carbon-body-01 text-[var(--cds-text-secondary)]">Best For</td>
                            <td className="py-3 px-4 carbon-body-01 text-[#525252]">Routine maintenance, edge sites, budget planning</td>
                            <td className="py-3 px-4 carbon-body-01 text-[#525252]">New builds, high-density, compliance, root cause</td>
                          </tr>
                          <tr className="border-b border-[var(--cds-border-subtle)] bg-[var(--cds-background)]">
                            <td className="py-3 px-4 carbon-body-01 text-[var(--cds-text-secondary)]">Investment</td>
                            <td className="py-3 px-4 carbon-body-01 text-[#0f62fe] font-medium">PKR 75,000 per visit</td>
                            <td className="py-3 px-4 carbon-body-01 text-[#0f62fe] font-medium">PKR 650,000 (up to 50 racks)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    </div>
                  </div>
                </div>

                {/* Decision Support Module */}
                <div className="mb-10">
                  <h3 className="carbon-fluid-heading-04 text-[var(--cds-text-primary)] mb-2">Which Path Is Right for You?</h3>
                  <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-6 max-w-3xl">
                    Most facilities get full clarity from the Thermal Health Check. If we spot complexity that needs engineering-grade analysis, we will recommend the next step — and credit 20% of your Health Check fee toward Precision Thermal Engineering if upgraded within 60 days.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-[var(--cds-layer-01)] border-2 border-[#0f62fe] relative flex flex-col">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#0f62fe]" />
                    <p className="carbon-heading-02 text-[var(--cds-text-primary)] mb-4">Choose Thermal Health Check If:</p>
                    <ul className="space-y-3 mb-6">
                      {['You want a routine maintenance review', 'You are planning next year\'s budget', 'You have a small server room (<10 racks)', 'You need a quick "second opinion" on airflow'].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-[#525252]">
                          <span className="text-[#0f62fe] flex-shrink-0 mt-0.5">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a href="#cta" className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#0f62fe] text-white text-sm font-medium hover:bg-[#0353e9] transition-colors" style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}>
                      Book Thermal Health Check
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="p-6 bg-[var(--cds-layer-01)] border-2 border-[#0f62fe] relative flex flex-col">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#0f62fe]" />
                    <p className="carbon-heading-02 text-[var(--cds-text-primary)] mb-4">Choose Precision Thermal Engineering If:</p>
                    <ul className="space-y-3 mb-6">
                      {['You are building a new data hall or expanding capacity', 'You are deploying high-density racks (>10kW per rack)', 'You need compliance documentation for auditors or insurers', 'You are investigating recurring thermal alerts or outages'].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-[#525252]">
                          <span className="text-[#0f62fe] flex-shrink-0 mt-0.5">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a href="mailto:contact@perception-it.com?subject=Precision%20Thermal%20Engineering%20Proposal%20Request" className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2 border border-[#161616] text-[#161616] text-sm font-medium hover:bg-[#161616] hover:text-white transition-colors" style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}>
                      Request CFD Proposal
                    </a>
                  </div>
                </div>
                </div>

                {/* The Upgrade Path */}
                <div className="p-6 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] mb-10">
                  <p className="carbon-heading-02 text-[var(--cds-text-primary)] mb-2">The Upgrade Path</p>
                  <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-4">Start small. Scale with confidence. Unsure which level you need? Start with the Thermal Health Check.</p>
                  <div className="grid sm:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-start gap-2">
                      <CheckmarkFilled className="w-4 h-4 text-[#0f62fe] mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-[#525252]"><strong className="text-[var(--cds-text-primary)]">Low Risk:</strong> Validate our expertise with a small investment first.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckmarkFilled className="w-4 h-4 text-[#0f62fe] mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-[#525252]"><strong className="text-[var(--cds-text-primary)]">No Waste:</strong> 20% of your initial spend applies to deeper analysis if needed.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckmarkFilled className="w-4 h-4 text-[#0f62fe] mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-[#525252]"><strong className="text-[var(--cds-text-primary)]">Clarity:</strong> We only recommend CFD if the data justifies it.</p>
                    </div>
                  </div>
                  <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)]">If our technicians identify complexity requiring engineering-grade modeling, we credit 20% of your Health Check fee toward Precision Thermal Engineering within 60 days.</p>
                </div>


              </div>
            </section>

            {/* Section 1: Hardware Supply */}
            <section id="hardware" className="py-16 bg-[var(--cds-background)]">
              <div className="max-w-5xl mx-auto px-6 scroll-animate">
                <div className="mb-6">
                  <div className="w-6 h-0.5 bg-[#009d9a] mb-2" />
                  <p className="carbon-label-01 text-[#161616] uppercase tracking-wider">Procurement</p>
                </div>
                <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-8">Cooling Hardware Procurement</h2>
                <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-10">
                  <strong className="font-semibold text-[var(--cds-text-primary)]">Right-sized, procured, certified, and ready for Pakistan.</strong>
                  <br />
                  We source cooling equipment from tier-1 manufacturers and validate every unit for Pakistan&apos;s operating conditions before it ships. From procurement to deployment, one partner handles the full thermal continuity stack. No guesswork, no incompatible hardware, full accountability.
                </p>

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

                <div className="p-6 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)]">
                  <h3 className="carbon-heading-02 text-[var(--cds-text-primary)] mb-4">Manufacturer Partnerships</h3>
                  <div className="flex flex-wrap items-center gap-4 mb-4">
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
                  <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)]">
                    All hardware includes manufacturer warranty pass-through. Extended warranty and spare-part bundling available via{' '}
                    <Link 
                      to="/services/server-continuity" 
                      className="text-[#0f62fe] hover:underline font-medium"
                      title="Mission-critical support for out-of-warranty systems with same-day spares and 99.95% uptime SLA"
                    >
                      ServerLife Extend™
                    </Link>.
                  </p>
                </div>

                <ImagePlaceholder
                  title="Precision Cooling Hardware Showcase"
                  desc="3D rendering of server room precision cooling units in a data centre environment. Show CRAC/ACU units with front intake grilles, rear exhaust, and hot/cold aisle containment. Include subtle blue LED status indicators. Monsoon-hardened casing detail visible on one unit. Clean, technical aesthetic with soft overhead lighting. No people."
                />
              </div>
            </section>

            {/* Section 2: Basic Installation */}
            <section id="installation" className="py-16 bg-[var(--cds-background)]">
              <div className="max-w-5xl mx-auto px-6 scroll-animate">
                <div className="mb-6">
                  <div className="w-6 h-0.5 bg-[#009d9a] mb-2" />
                  <p className="carbon-label-01 text-[#161616] uppercase tracking-wider">Deployment</p>
                </div>
                <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-8">Deployment & Commissioning</h2>
                <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-10">
                  <strong className="font-semibold text-[var(--cds-text-primary)]">We offer more than plug-and-play.</strong>
                  <br />
                  Core deployment covers mechanical installation and power-on verification. Thermal validation, airflow mapping, failover testing, and monitoring integration are scoped to your contract and operational requirements.
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
                      {/* Tab Bar */}
                      <div className="flex border-b border-[var(--cds-border-subtle)]">
                        {deployTabs.map((tab, idx) => {
                          const isActive = idx === activeDeployTab;
                          return (
                            <button
                              key={tab.title}
                              onClick={() => setActiveDeployTab(idx)}
                              className={`flex-1 flex items-center justify-center gap-2 px-3 py-4 text-sm transition-colors border-b-2 ${
                                isActive
                                  ? 'border-[#0f62fe] text-[#0f62fe] font-semibold bg-[#0f62fe]/[0.04]'
                                  : 'border-transparent text-[#525252] hover:bg-[#e8e8e8] hover:text-[#161616]'
                              }`}
                              style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}
                            >
                              <span className={`text-[10px] font-mono mr-1 ${isActive ? 'text-[#0f62fe]' : 'text-[#525252]'}`}>{tab.step}</span>
                              <tab.icon className="w-4 h-4" />
                              <span className="hidden md:inline">{tab.title}</span>
                              <span className="md:hidden">{tab.title.split(' ')[0]}</span>
                            </button>
                          );
                        })}
                      </div>
                      {/* Content Panel */}
                      <div
                        key={activeTab.title}
                        className="p-6 border border-[var(--cds-border-subtle)] border-t-0"
                      >
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
                    </div>
                  );
                })()}

                {/* Common Installation Failure */}
                <div className="bg-[#161616] p-8 md:p-10 scroll-animate">
                  {/* Preamble */}
                  <div className="border-l-4 border-[#fa4d56] pl-5 mb-8">
                    <p className="carbon-body-01 text-[#a8a8a8]">
                      Without a structured commissioning protocol, these are the failure modes we see repeatedly in Pakistan deployments.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-12 gap-8 items-start">
                    {/* Stat */}
                    <div className="md:col-span-4 text-center md:text-left">
                      {/* Circular progress ring */}
                      <div className="relative w-32 h-32 mx-auto md:mx-0 mb-4">
                        <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                          <path className="text-[#393939]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2" />
                          <path className="text-[#fa4d56]" strokeDasharray="60, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-3xl font-light text-white">60%</span>
                        </div>
                      </div>
                      <div className="carbon-fluid-heading-03 text-[#fa4d56] mt-2">of cooling failures</div>
                      <p className="carbon-body-01 text-[#a8a8a8] mt-1">within the first 12 months in Pakistan</p>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-full min-h-[200px] bg-[#393939] self-stretch" />

                    {/* Detail */}
                    <div className="md:col-span-7">
                      <p className="carbon-label-01 text-[#fa4d56] uppercase tracking-wider mb-4">Common Installation Failure</p>
                      <p className="carbon-body-01 text-[#a8a8a8] mb-5">These failures originate from installation errors, not hardware defects:</p>

                      {/* Failure mode cards */}
                      <div className="grid sm:grid-cols-3 gap-3 mb-6">
                        {[
                          { num: '01', text: 'Incorrect refrigerant charge' },
                          { num: '02', text: 'Undersized condensate drains' },
                          { num: '03', text: 'Missing thermal validation' },
                        ].map((item) => (
                          <div key={item.num} className="bg-[#1a1a1a] border-t-2 border-[#fa4d56] p-4">
                            <span className="text-[10px] font-mono text-[#fa4d56] block mb-2">{item.num}</span>
                            <p className="carbon-body-01 text-white">{item.text}</p>
                          </div>
                        ))}
                      </div>

                      {/* Resolution bar */}
                      <div className="border-l-4 border-[#009d9a] bg-[#0a2a2a]/30 pl-4 py-3">
                        <p className="carbon-body-01 text-[#009d9a]">Our commissioning protocol eliminates these root causes before handover.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="p-8 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] text-center">
                  <h3 className="carbon-fluid-heading-03 text-[var(--cds-text-primary)] mb-3">Ready to deploy?</h3>
                  <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-6 max-w-xl mx-auto">
                    Schedule a site assessment and we will scope the exact commissioning protocol for your environment.
                  </p>
                  <a
                    href="#cta"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f62fe] text-white font-medium hover:bg-[#0353e9] transition-colors"
                    style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}
                  >
                    Book Deployment Assessment
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </section>

            {/* Section 3: Managed Services */}
            <section id="managed" className="py-16 bg-[#f4f4f4]">
              <div className="max-w-5xl mx-auto px-6 scroll-animate">
                <div className="mb-6">
                  <div className="w-6 h-0.5 bg-[#009d9a] mb-2" />
                  <p className="carbon-label-01 text-[#161616] uppercase tracking-wider">Managed Services</p>
                </div>
                <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-8">Managed Thermal Services: 24/7 Accountability</h2>
                <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-10">
                  <strong className="font-semibold text-[var(--cds-text-primary)]">Cooling equipment degrades predictably.</strong>
                  <br />
                  Our managed service catches these before they become outages.
                </p>

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
                      items: ['24/7 NOC monitoring', '4-hour response SLA', 'Monsoon standby engineers', 'Quarterly room integrity validation', 'SLA-backed 99.9% uptime', 'Predictive alerts', 'Spare parts pre-staging'],
                      cta: 'Contact Sales',
                      ctaStyle: 'tertiary',
                    },
                  ].map((tier) => (
                    <div key={tier.name} className={`flex flex-col bg-[var(--cds-layer-01)] transition-all hover:-translate-y-1 ${tier.recommended ? 'border-2 border-[#0f62fe] hover:shadow-lg relative' : 'border-2 border-[#0f62fe] hover:shadow-md relative'}`} style={{ transitionDuration: `${durationModerate02}ms`, transitionTimingFunction: easings.standard.productive }}>
                      <div className="absolute top-0 left-0 w-full h-1.5" style={{ background: `linear-gradient(135deg, ${blue80}, ${blue50})` }} />
                      {tier.recommended && (
                        <div className="px-6 pt-3 pb-2">
                          <span className="inline-block px-2 py-0.5 bg-[#0f62fe]/10 text-[#0f62fe] carbon-label-01 uppercase tracking-wider">Recommended</span>
                        </div>
                      )}
                      <div className={`px-6 pb-4 border-b border-[var(--cds-border-subtle)] ${tier.recommended ? '' : 'pt-6'}`}>
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
                      <div className="p-6 pt-0">
                        <tier.pictogram className="w-16 h-16 mb-4" style={{ fill: 'url(#pictogramGrad)' }} />
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
                <div className="mb-8">
                  <button
                    onClick={() => setMatrixExpanded(!matrixExpanded)}
                    className={`w-full flex items-center justify-between p-5 bg-[var(--cds-layer-01)] border transition-all ${matrixExpanded ? 'border-[#0f62fe] shadow-md' : 'border-[var(--cds-border-subtle)] hover:border-[#0f62fe] hover:shadow-md'}`}
                    style={{ transitionDuration: `${durationModerate01}ms`, transitionTimingFunction: easings.standard.productive }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[#0f62fe]/10 flex items-center justify-center flex-shrink-0">
                        <Meter className="w-5 h-5 text-[#0f62fe]" />
                      </div>
                      <div className="text-left">
                        <p className="carbon-heading-02 text-[var(--cds-text-primary)]">Compare service tiers in detail</p>
                        <p className="carbon-body-01 text-[#525252]">See the full capability breakdown across Essential, Professional, and Enterprise</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-[#0f62fe] transition-transform ${matrixExpanded ? 'rotate-180' : ''}`} style={{ transitionDuration: `${durationFast02}ms` }} />
                  </button>

                  <div className={`overflow-hidden transition-all ${matrixExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`} style={{ transitionDuration: `${durationModerate01}ms`, transitionTimingFunction: easings.standard.productive }}>
                    <div className="pt-6">
                      <div className="overflow-x-auto">
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
                        <p className="carbon-helper-text-01 text-[var(--cds-text-secondary)] mt-2">*Uptime targets subject to signed SLA, site assessment, and force majeure exclusions.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <img
                  src="/3D%20images/Cooling%20and%20Airflow/Managed%20Services-section-2transparent-3D%20(1).png"
                  alt="Thermal monitoring operations centre visualization showing server racks with holographic data displays, temperature analytics, and real-time cooling system dashboards"
                  className="max-w-md mx-auto mt-8"
                  loading="lazy"
                />
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
                    <h2 className="carbon-fluid-heading-05 text-[#f4f4f4]">Proven Results</h2>
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
                    className={`w-8 h-8 flex items-center justify-center carbon-label-01 transition-colors ${caseStudyPage === 0 ? 'bg-[#0f62fe] text-[#f4f4f4]' : 'bg-transparent text-[#6f6f6f] border border-[#525252] hover:border-[#78a9ff]'}`}
                    style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}
                  >
                    1
                  </button>
                  <button
                    onClick={() => setCaseStudyPage(1)}
                    className={`w-8 h-8 flex items-center justify-center carbon-label-01 transition-colors ${caseStudyPage === 1 ? 'bg-[#0f62fe] text-[#f4f4f4]' : 'bg-transparent text-[#6f6f6f] border border-[#525252] hover:border-[#78a9ff]'}`}
                    style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}
                  >
                    2
                  </button>
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
                    className={`w-8 h-8 flex items-center justify-center carbon-label-01 transition-colors ${testimonialPage === 0 ? 'bg-[#0f62fe] text-[#f4f4f4]' : 'bg-transparent text-[#6f6f6f] border border-[#525252] hover:border-[#78a9ff]'}`}
                    style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}
                  >
                    1
                  </button>
                  <button
                    onClick={() => setTestimonialPage(1)}
                    className={`w-8 h-8 flex items-center justify-center carbon-label-01 transition-colors ${testimonialPage === 1 ? 'bg-[#0f62fe] text-[#f4f4f4]' : 'bg-transparent text-[#6f6f6f] border border-[#525252] hover:border-[#78a9ff]'}`}
                    style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}
                  >
                    2
                  </button>
                </div>

                {/* CFD Case Study Teaser */}
                <div className="bg-[#262626] border border-[#393939] p-6 flex flex-col md:flex-row items-start md:items-center gap-4 mt-12">
                  <div className="w-12 h-12 bg-[#0f62fe]/15 flex items-center justify-center flex-shrink-0">
                    <Certificate className="w-6 h-6 text-[#78a9ff]" />
                  </div>
                  <div className="flex-1">
                    <p className="carbon-heading-01 text-[#f4f4f4] mb-1">Ibrahim Fibres Limited</p>
                    <p className="carbon-body-01 text-[#a8a8a8]">
                      CFD simulation identified a 12°C hotspot in the MES rack row before any hardware was purchased. Containment retrofit and in-row cooling recommendation prevented a thermal outage that would have cost an estimated PKR 35M in production downtime.
                    </p>
                  </div>
                  <Link
                    to="/projects/case-study/out-of-warranty-server-support-ibrahim-fibres"
                    className="inline-flex items-center gap-2 carbon-label-01 text-[#78a9ff] hover:text-[#a6c8ff] transition-colors flex-shrink-0"
                    style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}
                  >
                    Read case study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </section>


            {/* Section 5: Pakistan-Specific Deployment */}
            <section id="pakistan" className="py-16 bg-[var(--cds-background)]">
              <div className="max-w-5xl mx-auto px-6 scroll-animate">
                <div className="mb-6">
                  <div className="w-6 h-0.5 bg-[#009d9a] mb-2" />
                  <p className="carbon-label-01 text-[#161616] uppercase tracking-wider">Pakistan</p>
                </div>
                <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-8">Pakistan-Specific Engineering: Global Templates Fail Here</h2>
                <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-6">
                  <strong className="font-semibold text-[var(--cds-text-primary)]">Global cooling templates are built for ideal conditions. Pakistan&apos;s reality is different:</strong>
                </p>
                <div className="mb-10">
                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      { assumption: '35°C ambient', reality: '45°C+ peak in Lahore' },
                      { assumption: 'Clean, filtered air', reality: 'Dust clogs filters in weeks' },
                      { assumption: 'Stable grid power', reality: 'Load-shedding stresses compressors' },
                    ].map((item) => (
                      <div key={item.assumption} className="bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)]">
                        <div className="p-4 border-b border-[var(--cds-border-subtle)]">
                          <p className="carbon-label-01 text-[#24a148] uppercase tracking-wider mb-1">Global Standard</p>
                          <p className="carbon-body-01 text-[#525252]">{item.assumption}</p>
                        </div>
                        <div className="p-4 border-l-2 border-[#fa4d56]">
                          <p className="carbon-label-01 text-[#fa4d56] uppercase tracking-wider mb-1">Pakistan Reality</p>
                          <p className="carbon-body-01 text-[var(--cds-text-primary)] font-medium">{item.reality}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: TemperatureHot, title: 'Extreme Heat Resilience', items: ['Cooling capacity derated 40% at 45°C → we oversize by 60%', 'High-ambient condensers rated for 50°C+ operation', 'Thermal mass buffering for load-shedding intervals'] },
                    { icon: RainDrop, title: 'Monsoon Humidity Control', items: ['Precision CRAC/CRAH with active humidity management (40-60% RH)', 'Condensate overflow protection and drain redundancy', 'Quarterly validation protocols June–September'] },
                    { icon: Wind, title: 'Dust Exclusion & Filtration', items: ['IP54 cabinet rating with gasket integrity checks', 'MERV 13+ filter specification (not standard G4)', 'Monthly filter inspection in industrial zones'] },
                    { icon: Lightning, title: 'Grid Instability Hardening', items: ['Soft-start compressors to reduce inrush current', 'UPS-buffered control circuits for graceful shutdown', 'Generator-compatible start sequences'] },
                  ].map((card) => (
                    <div key={card.title} className="p-6 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] hover:shadow-md hover:-translate-y-1 transition-all" style={{ transitionDuration: `${durationModerate02}ms`, transitionTimingFunction: easings.standard.productive }}>
                      <div className="w-10 h-10 bg-[#cf0a2c]/10 flex items-center justify-center mb-4">
                        <card.icon className="w-5 h-5 text-[#cf0a2c]" />
                      </div>
                      <h3 className="carbon-fluid-heading-03 text-[var(--cds-text-primary)] mb-3">{card.title}</h3>
                      <ul className="space-y-2">
                        {card.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 carbon-body-01 text-[var(--cds-text-primary)]">
                            <CheckmarkFilled className="w-4 h-4 text-[#24a148] mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Cost of Failure */}
                <div className="bg-[#161616] p-8 md:p-10 mb-8 scroll-animate">
                  <div className="grid md:grid-cols-12 gap-8 items-center">
                    {/* Stat */}
                    <div className="md:col-span-4 text-center md:text-left">
                      <div className="carbon-fluid-heading-05 text-white leading-none">PKR 2–5M</div>
                      <div className="carbon-fluid-heading-03 text-[#009d9a] mt-1">per day</div>
                      <p className="carbon-body-01 text-[#a8a8a8] mt-3">in lost production revenue from unplanned cooling outages</p>
                    </div>
                    {/* Divider */}
                    <div className="hidden md:block w-px h-24 bg-[#393939] mx-auto" />
                    {/* Detail */}
                    <div className="md:col-span-7">
                      <p className="carbon-label-01 text-[#fa4d56] uppercase tracking-wider mb-4">The Cost of Failure</p>
                      <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                        {[
                          { label: 'Production Loss', desc: 'PKR 2–5M/day downtime cost' },
                          { label: 'Warranty Void', desc: 'Thermal damage voids manufacturer cover' },
                          { label: 'SLA Penalties', desc: 'Clause triggers with downstream clients' },
                          { label: 'Reputation Risk', desc: 'Regulator and enterprise trust erosion' },
                        ].map((item) => (
                          <div key={item.label}>
                            <p className="carbon-body-01 text-white font-medium">{item.label}</p>
                            <p className="carbon-body-01 text-[#a8a8a8]">{item.desc}</p>
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

                <ImagePlaceholder
                  title="Monsoon-Hardened Cooling Infrastructure"
                  desc="3D rendering showing split-view comparison: left side shows standard cooling unit exposed to monsoon rain and dust, right side shows protected unit with IP54 housing, humidity shields, elevated condensate drains, and MERV 13+ filters. Dramatic lighting to highlight the engineering difference. Use Perception IT blue accent (#0f62fe) for protected elements."
                />
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
                <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-8">Critical Dependencies: What Cooling Needs to Work</h2>
                <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-10">
                  <strong className="font-semibold text-[var(--cds-text-primary)]">Cooling does not work in isolation.</strong>
                  <br />
                  Power quality, rack layout, monitoring coverage, and physical security all affect thermal performance. We map these dependencies so there are no surprises.
                </p>

                {/* Hub-and-Spoke Diagram — SVG-based */}
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
                      { icon: Lightning, label: 'UPS Power', desc: 'Compressor motor life degrades 3× with voltage fluctuation > ±10%. Stabilised power extends cooling asset life.', pos: { x: '50%', y: '12%', tx: '-50%' }, color: '#f97316' },
                      { icon: Wind, label: 'Rack Layout', desc: 'Hotspots form when rack inlet temperatures vary > 3°C. Proper aisle containment and blanking panels are non-negotiable.', pos: { x: '80%', y: '26%', tx: '-30%' }, color: '#f97316' },
                      { icon: Dashboard, label: 'Monitoring', desc: 'Without rack-level sensors, thermal runaway is invisible until equipment fails. We integrate temperature, humidity, and leak detection.', pos: { x: '80%', y: '74%', tx: '-30%' }, color: '#f97316' },
                      { icon: Shield, label: 'Security', desc: 'Unauthorized door openings destroy pressure differentials and introduce dust. Access control audit logs correlate with thermal anomalies.', pos: { x: '20%', y: '74%', tx: '-70%' }, color: '#f97316' },
                      { icon: DataBase, label: 'Fire Suppression', desc: 'Gas discharge creates a temporary thermal shock. Cooling must recover within 90 seconds to prevent secondary damage.', pos: { x: '20%', y: '26%', tx: '-70%' }, color: '#f97316' },
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
                      { icon: Lightning, label: 'UPS Power Quality', desc: 'Compressor motor life degrades 3× with voltage fluctuation > ±10%. Stabilised power extends cooling asset life.', color: '#f97316' },
                      { icon: Wind, label: 'Rack Layout & Airflow', desc: 'Hotspots form when rack inlet temperatures vary > 3°C. Proper aisle containment and blanking panels are non-negotiable.', color: '#f97316' },
                      { icon: Dashboard, label: 'Environmental Monitoring', desc: 'Without rack-level sensors, thermal runaway is invisible until equipment fails. We integrate temperature, humidity, and leak detection.', color: '#f97316' },
                      { icon: Shield, label: 'Physical Security', desc: 'Unauthorized door openings destroy pressure differentials and introduce dust. Access control audit logs correlate with thermal anomalies.', color: '#f97316' },
                      { icon: DataBase, label: 'Fire Suppression', desc: 'Gas discharge creates a temporary thermal shock. Cooling must recover within 90 seconds to prevent secondary damage.', color: '#f97316' },
                    ].map((item) => (
                      <div key={item.label} className="p-4 bg-white border border-[#e0e0e0] flex items-start gap-3 hover:shadow-md hover:border-[#0f62fe] transition-all" style={{ transitionDuration: `${durationModerate02}ms`, transitionTimingFunction: easings.standard.productive }}>
                        <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${item.color}15` }}>
                          <item.icon className="w-5 h-5" style={{ color: item.color }} />
                        </div>
                        <div>
                          <p className="carbon-label-01 uppercase mb-1" style={{ color: item.color }}>{item.label}</p>
                          <p className="carbon-body-01 text-[var(--cds-text-primary)] text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 border-l-4 border-[#f97316] bg-[#fff8e1]">
                  <p className="carbon-body-01 text-[var(--cds-text-primary)]">
                    <strong>Our approach:</strong> Every cooling engagement includes a dependency audit. If your power, monitoring, or physical layout is not ready, we tell you upfront and offer the services to fix it. No hidden gaps, no finger-pointing later.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Integration with Server Continuity Suite */}
            <section id="integration" className="py-16 bg-[var(--cds-background)]">
              <div className="max-w-5xl mx-auto px-6 scroll-animate">
                <div className="mb-6">
                  <div className="w-6 h-0.5 bg-[#009d9a] mb-2" />
                  <p className="carbon-label-01 text-[#161616] uppercase tracking-wider">Integration</p>
                </div>
                <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-8">Integration with Server Continuity Suite</h2>
                <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-10">
                  <strong className="font-semibold text-[var(--cds-text-primary)]">31% of server SLA breaches originate in the facility layer.</strong>
                  <br />
                  Cooling failure, power loss, or environmental excursion. When cooling is bundled with ServerLife Extend™, ModServe™, or ServerSure™, accountability is unified. One call. One SLA. One partner.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    { from: 'Cooling stability', to: 'ServerLife Extend™ thermal requirements (18–24°C inlet, ASHRAE A2)' },
                    { from: 'Predictive thermal alerts', to: 'ServerSure™ dashboard integration: facility + server health in one view' },
                    { from: 'Monsoon standby', to: 'ModServe™ migration windows protected by guaranteed cooling continuity' },
                    { from: 'Dust control', to: 'IP54 cabinets prevent 17% higher server fan failures that breach ServerLife Extend™ SLAs' },
                  ].map((item) => (
                    <div key={item.from} className="p-5 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] flex items-center gap-4 hover:shadow-md hover:-translate-y-1 transition-all" style={{ transitionDuration: `${durationModerate02}ms`, transitionTimingFunction: easings.standard.productive }}>
                      <div className="w-10 h-10 bg-[#24a148]/10 flex items-center justify-center flex-shrink-0">
                        <ArrowRight className="w-5 h-5 text-[#24a148]" />
                      </div>
                      <div>
                        <p className="carbon-label-01 text-[var(--cds-text-secondary)] uppercase">{item.from}</p>
                        <p className="carbon-body-01 text-[var(--cds-text-primary)]">{item.to}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 31% stat banner with donut visualization */}
                <div className="bg-gradient-to-br from-[#0f62fe] to-[#009d9a] p-10 text-white text-center relative overflow-hidden scroll-animate">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    {/* CSS Donut */}
                    <div className="relative w-32 h-32">
                      <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                        <path className="text-white/20" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                        <path className="text-white" strokeDasharray="31, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-light">31%</span>
                      </div>
                    </div>
                    <div className="text-left">
                      <p className="carbon-fluid-heading-04 mb-2">of ServerLife Extend™ SLA breaches</p>
                      <p className="carbon-body-01 text-white/90">originate in cooling/power, not server hardware. Bundling eliminates this gap.</p>
                    </div>
                  </div>
                </div>

                <ImagePlaceholder
                  title="Server Continuity Suite Ecosystem"
                  desc="3D diagram or node network visualization showing the Server Continuity Suite ecosystem. Central cooling node connected to ServerLife Extend™, ModServe™, ServerSure™, and ServiceNow nodes. Cooling highlighted with blue glow. Lines between nodes show data exchange. Dark background with subtle grid pattern."
                />
              </div>
            </section>


            {/* Section: Trusted By */}
            <section id="trusted-by" className="py-16 bg-[var(--cds-background)]">
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
            <section id="faq" className="py-16 bg-[#f4f4f4]">
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
                      a: 'Yes. We assess your current infrastructure during the Thermal Health Check and recommend whether to retrofit, supplement, or replace. Many clients start with our managed service on existing equipment and upgrade hardware in Phase 2.',
                    },
                    {
                      q: 'What happens if monsoon flooding affects the condensate drain?',
                      a: 'Our monsoon-hardened installation includes elevated drain routing, overflow sensors, and automatic pump backup. The Enterprise managed service tier includes quarterly monsoon validation June–September.',
                    },
                    {
                      q: 'How long does full installation take?',
                      a: 'Standard installation: 2–3 weeks. Monsoon-hardened commissioning adds 1 week for thermal validation and failover testing. We schedule around your maintenance windows.',
                    },
                    {
                      q: 'Do I need all three tiers, or can I start with Essential?',
                      a: 'Most clients start with Professional for the first 12 months, then right-size based on actual incident data. Essential is designed for facilities with basic cooling and low density. Enterprise is for mission-critical environments with SLA-backed uptime requirements.',
                    },
                    {
                      q: 'What if I only need engineering-grade analysis, not managed services?',
                      a: 'Deeper analysis is available as a standalone engagement. Most clients start with the Thermal Health Check (PKR 75,000). If we identify complexity, we recommend Precision Thermal Engineering (CFD modeling). There is no obligation to purchase hardware or managed services afterward, and 20% of your Health Check fee is credited if you upgrade within 60 days.',
                    },
                    {
                      q: 'How does the 4-hour response SLA work in practice?',
                      a: 'Our NOC monitors your cooling telemetry 24/7. On alert, a pre-staged engineer is dispatched from the nearest hub (Karachi, Lahore, or Islamabad). Spare parts are held at your site or the nearest depot. Response clock starts on alert acknowledgement, not arrival.',
                    },
                  ].map((faq, idx) => (
                    <div key={idx} className="border-b border-[var(--cds-border-subtle)]">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between py-4 text-left hover:bg-white/50 transition-colors px-2"
                        style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}
                      >
                        <span className="carbon-heading-02 text-[var(--cds-text-primary)] pr-4">{faq.q}</span>
                        <span className={`text-[#0f62fe] text-xl font-light flex-shrink-0 transition-transform duration-200 ${openFaq === idx ? 'rotate-45' : ''}`}>+</span>
                      </button>
                      <div className={`overflow-hidden transition-all ${openFaq === idx ? 'max-h-96 pb-4' : 'max-h-0'}`} style={{ transitionDuration: `${durationModerate01}ms`, transitionTimingFunction: easings.standard.productive }}>
                        <p className="carbon-body-01 text-[var(--cds-text-secondary)] px-2">{faq.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 13: CTA */}
            <section id="cta" className="py-16 bg-[var(--cds-background)]">
              <div className="max-w-5xl mx-auto px-6 scroll-animate">
                <div className="mb-6">
                  <div className="w-6 h-0.5 bg-[#009d9a] mb-2" />
                  <p className="carbon-label-01 text-[#161616] uppercase tracking-wider">Next Step</p>
                </div>
                <h2 className="carbon-fluid-heading-05 text-[var(--cds-text-primary)] mb-4">Start With a Thermal Health Check</h2>
                <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-6 max-w-3xl">
                  90-minute on-site assessment. Clear scorecard. No obligation. And if you need deeper analysis later, 20% of your PKR 75,000 fee is credited toward Precision Thermal Engineering.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-10">
                  {[
                    { step: '01', title: 'Thermal Health Check', desc: 'We map your current state and tell you what is working, what needs attention, and whether deeper analysis adds value.' },
                    { step: '02', title: 'Right-Sized Solution', desc: 'If needed, we propose Precision Thermal Engineering — and credit 20% of your PKR 75,000 fee toward the upgrade within 60 days.' },
                    { step: '03', title: 'Implementation or Managed Service', desc: 'Hardware, installation, commissioning, or 24/7 monitoring — all under one SLA with one partner.' },
                  ].map((item) => (
                    <div key={item.step} className="relative p-6 bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] hover:shadow-md hover:-translate-y-1 transition-all" style={{ transitionDuration: `${durationModerate02}ms`, transitionTimingFunction: easings.standard.productive }}>
                      <div className="absolute top-4 right-4 w-8 h-8 bg-[#0f62fe] text-white flex items-center justify-center font-semibold text-sm">
                        {item.step}
                      </div>
                      <h3 className="carbon-fluid-heading-03 text-[var(--cds-text-primary)] mb-2">{item.title}</h3>
                      <p className="carbon-body-01 text-[var(--cds-text-secondary)]">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="p-8 bg-gradient-to-br from-[#0f62fe] to-[#009d9a] text-center">
                  <h3 className="carbon-fluid-heading-04 text-white mb-4">Ready to know where you stand?</h3>
                  <p className="carbon-body-01 text-white/90 mb-6">Request a Thermal Health Check. PKR 75,000. 20% credited toward Precision Thermal Engineering if upgraded within 60 days.</p>
                  <a 
                    href="mailto:contact@perception-it.com"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0f62fe] font-semibold hover:bg-[var(--cds-background)] transition-colors"
                    style={{ transitionDuration: `${durationFast02}ms`, transitionTimingFunction: easings.standard.productive }}
                  >
                    Request Thermal Health Check
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </section>

            {/* Legal Disclaimer */}
            <section className="py-8 bg-[var(--cds-background)] border-t border-[var(--cds-border-subtle)]">
              <div className="max-w-5xl mx-auto px-6">
                <p className="carbon-label-01 text-[var(--cds-text-secondary)] uppercase tracking-wide mb-3">Important Notices</p>
                <div className="space-y-2 carbon-helper-text-01 text-[var(--cds-text-secondary)]">
                  <p>• Service outcomes, uptime targets, and remedies are defined exclusively in signed contractual agreements between Perception-IT and the client. Marketing materials do not constitute offers or guarantees.</p>
                  <p>• Cooling capacity figures are illustrative and depend on room dimensions, heat load, insulation, and environmental conditions. Formal sizing requires on-site thermal assessment.</p>
                  <p>• &quot;Monsoon-hardened,&quot; &quot;dust-excluded,&quot; and similar terms describe engineering protocols and design intent, not absolute performance warranties.</p>
                  <p>• Perception-IT (Private) Limited. Huawei Enterprise Partner certification valid through Feb 2027 (CERT20251216000154). All trademarks acknowledged.</p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CoolingAirflow;
