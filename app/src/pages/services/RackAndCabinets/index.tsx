import { useState, useEffect } from 'react';
import usePageSEO from '@/hooks/usePageSEO';
import CoolingNav from '@/pages/services/CoolingNav';
import Footer from '@/sections/Footer';
import '@/styles/carbon-typography.css';
import '@/styles/design-tokens.css';
import {
  ArrowRight,
  Server,
  Network,
  LayoutGrid,
  Box,
  PanelLeft,
  Ruler,
  Weight,
  Wrench,
  Cable,
  Expand,
  Building2,
  Thermometer,
  Shield,
  ExternalLink,
  ArrowUp,
  Award,
  Clock,
  Users,
  Layers,
  Wind,
  Snowflake,
  GitBranch,
  Lock,
  Activity,
  Zap,
} from 'lucide-react';
import ResultsSection from './sections/ResultsSection';
import FeaturedProductsSection from './sections/FeaturedProductsSection';

const CABINET_ENCLOSURES = [
  {
    icon: Server,
    color: '#0f62fe',
    title: 'Enterprise Server Cabinets',
    features: [
      'Standard 42U, 45U, 48U and 52U heights for high-density server configurations',
      '1000mm to 1200mm depths to accommodate deep enterprise servers and storage arrays',
      'Engineered for heavy, high-density compute loads in enterprise data centres',
      'Lockable front/rear doors and removable side panels for controlled access',
    ],
  },
  {
    icon: Network,
    color: '#4589ff',
    title: 'Network & Patching Enclosures',
    features: [
      '800mm wide cabinets with built-in vertical cable managers',
      'Designed for high-volume copper and fibre structural patching',
      'Clean bend radius management for network and distribution frame applications',
      'Ideal for wiring closets and core network facilities',
    ],
  },
  {
    icon: LayoutGrid,
    color: '#009d9a',
    title: 'Colocation (Split-Compartment) Racks',
    features: [
      'Multi-tenant cabinets divided into 2-pod or 3-pod secure locking zones',
      'Isolated cable pathways to maintain client separation within one enclosure',
      'Separate apartments allow multiple clients to share a cabinet securely',
      'Co-location ready with audit-trail compliant access control',
    ],
  },
  {
    icon: Box,
    color: '#a855f7',
    title: 'Specialized & Edge Enclosures',
    features: [
      'Wall-mount cabinets for space-constrained closets and edge sites',
      'Soundproof acoustic quiet racks for noise-sensitive environments',
      'IP-rated ruggedised enclosures for factory floors and harsh industrial sites',
      'Seismic Zone 4, military and remote-environment options available',
    ],
  },
];

const FORM_FACTORS = [
  {
    title: 'Floor Standing Rack Cabinets',
    desc: 'Fitted with casters and adjustable levellers for uneven floors. Typical sizes: 500, 800 and 1000mm deep — 12U to 48U and higher. Removable side panels and lockable front/rear door access.',
  },
  {
    title: 'Floor Standing Open-Frames',
    desc: 'Same structural design without side panels or doors. Two or four post mounting rail options. Ideal for network wiring closets and distribution frames where open airflow and cable access are preferred.',
  },
  {
    title: 'Wall-Mounted Racks',
    desc: 'Space-saving wall mount with optional hinged swing-away access. Acrylic front door window for equipment visibility. Small form factor fits under desks, worktops and in tight closets.',
  },
  {
    title: 'Wall-Mount Open Frames',
    desc: 'Compact wall-mounted open frame for easy cable access. Designed for internal network cabling and fitted systems in small comms rooms where quick installation matters.',
  },
];

const THERMAL_SYSTEMS = [
  {
    icon: Wind,
    title: 'Aisle Containment Systems',
    desc: 'Design and installation of Hot Aisle Containment (HACS) and Cold Aisle Containment (CACS), including rigid ceiling panels, blanking plates and automatic sliding doors.',
  },
  {
    icon: Thermometer,
    title: 'Airflow Optimization Accessories',
    desc: 'High-density perforated doors with 75% to 80%+ airflow transparency, bypass air-sealing grommets and blanking panels to prevent thermal exhaust recirculation.',
  },
  {
    icon: Snowflake,
    title: 'Rack-Level Intelligent Cooling',
    desc: 'Integration of rack-mounted fan trays, chimney systems for top exhaust routing, and in-row liquid or precision cooling attachments for high-density loads.',
  },
];

const CABLE_SYSTEMS = [
  {
    icon: Cable,
    title: 'Structured Cable Pathways',
    desc: 'High-capacity vertical and horizontal managers, finger ducts and overhead basket trays to ensure clean bend radiuses and organised topology.',
  },
  {
    icon: PanelLeft,
    title: 'Zero-U Space Utilization',
    desc: 'Mounting brackets and PDU trays designed to house power distribution and connectivity accessories in the Zero-U dead space along the sides of the cabinet.',
  },
  {
    icon: GitBranch,
    title: 'Fibre Overlength Management',
    desc: 'Specialised fibre trays and slack storage spools within the cabinet to prevent optical signal degradation and maintain serviceability.',
  },
];

const SECURITY_ENVIRONMENTAL = [
  {
    icon: Lock,
    title: 'Access Control & Smart Locking',
    desc: 'Electronic swing-handles, biometric fingerprint or iris scanners, and RFID card readers integrated with the centralised building management system.',
  },
  {
    icon: Activity,
    title: 'Micro-Environmental Monitoring',
    desc: 'Rack-level sensors for point-specific tracking of temperature at top, middle and bottom inlets, plus humidity and micro-vibrations.',
  },
  {
    icon: Zap,
    title: 'Grounding & Bonding Systems',
    desc: 'Factory-installed grounding busbars and copper bonding kits ensuring every frame element is tied to the main data centre grounding matrix.',
  },
];

const CONSIDERATIONS = [
  {
    icon: Wrench,
    title: 'Assembled or Disassembled',
    desc: 'Cabinets supplied made-up or ready for on-site assembly. Ideal for narrow doorways and restricted access where logistics are tight.',
  },
  {
    icon: Cable,
    title: 'Cable Management',
    desc: 'Shelves, mounting rails, patch panels, castors, cooling and stabilisation kits for a neat, error-free assembly that reduces disconnection risk.',
  },
  {
    icon: Expand,
    title: 'Expansion & Joining',
    desc: 'Cabinets bolt together to form rows — perfect for hot-aisle/cold-aisle containment, floor-space optimisation and cooling efficiency.',
  },
  {
    icon: Building2,
    title: 'Co-Location Ready',
    desc: 'Separate apartments within the same enclosure allow multiple clients to share one cabinet securely with isolated pathways.',
  },
  {
    icon: Thermometer,
    title: 'Cooling & Heat Removal',
    desc: 'Heat can be ducted directly away from the cabinet with cool air supplied via the front — part of an integrated cooling design.',
  },
];

export default function RackAndCabinets() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  usePageSEO({
    title: 'Server Room Racks & Data Centre Cabinets | Perception IT',
    description:
      'Enterprise server cabinets, open-frame racks and wall-mount enclosures for Pakistani data centres. 12U to 48U+, seismic options, and integrated cable management.',
    canonicalPath: '/infrastructure/data-centre-services/rack-cabinets',
    ogType: 'website',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <CoolingNav />

      {/* Sticky Breadcrumb */}
      <div className="sticky top-12 z-40 bg-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-12 flex items-center">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-500">
              <li><a href="/#/" className="hover:text-[#0f62fe] transition-colors">Home</a></li>
              <li className="text-gray-300">/</li>
              <li><a href="/#/infrastructure" className="hover:text-[#0f62fe] transition-colors">Infrastructure</a></li>
              <li className="text-gray-300">/</li>
              <li><a href="/#/infrastructure/data-centre-services" className="hover:text-[#0f62fe] transition-colors">Data Centre</a></li>
              <li className="text-gray-300">/</li>
              <li className="text-gray-900 font-medium" aria-current="page">Rack & Cabinet</li>
            </ol>
          </nav>
        </div>
      </div>

      <main id="main-content">
        {/* Hero */}
        <section className="relative bg-[#0a1628] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f1d3a] to-[#0a1628]" />
          <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#0f62fe]/5 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-16 md:pt-28 md:pb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f62fe]/10 border border-[#0f62fe]/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0f62fe]" />
              <span className="carbon-label-02 text-[#78a9ff] uppercase tracking-wider">Data Centre Infrastructure</span>
            </div>

            <h1 className="carbon-fluid-display-03 text-white max-w-4xl mb-6">
              Server Room Racks & Data Centre Cabinets
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mb-10">
              {[
                { icon: Ruler, label: '12U to 48U+', desc: 'Floor, wall and open-frame options' },
                { icon: Weight, label: '1500Kg Static', desc: 'Enterprise load ratings with heavy-duty levellers and castors' },
                { icon: Shield, label: 'Seismic Ready', desc: 'Zone 4 and ruggedised options' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0f62fe]/15 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#78a9ff]" />
                  </div>
                  <div>
                    <p className="carbon-heading-02 text-white mb-0.5">{item.label}</p>
                    <p className="carbon-body-02 text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:contact@perception-it.com?subject=Rack%20%26%20Cabinet%20Assessment%20Request"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0f62fe] text-white carbon-heading-02 rounded-lg hover:bg-[#0353e9] hover:shadow-xl hover:shadow-[#0f62fe]/25 hover:-translate-y-0.5 transition-all"
              >
                Schedule Assessment
              </a>
              <a
                href="#cabinet-enclosures"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('cabinet-enclosures');
                  if (el) {
                    const pos = el.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({ top: pos - 80, behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/20 text-white carbon-heading-02 rounded-lg hover:bg-white/10 hover:border-white/30 transition-all"
              >
                Explore Cabinet Types
              </a>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-10">
              <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
                Overview
              </span>
              <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
                Enclosures for Space, Footprint, Cooling and Cable Assembly
              </h2>
              <p className="carbon-body-02 text-gray-600">
                We supply a wide range of enclosures and sizes to help you optimise space, footprint, 
                cooling, airflow, power and network cable assemblies. Our cabinets are designed to take 
                servers, switches, routers, SANs, telecoms, video conferencing, UPS systems, automatic 
                transfer switches and PDUs — backed by a complete rack design and installation service.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Server, label: 'Servers & Compute', desc: 'Enterprise servers, storage arrays and high-density compute loads' },
                { icon: Network, label: 'Network & Telecoms', desc: 'Switches, routers, patch panels and telecommunications hardware' },
                { icon: Thermometer, label: 'Thermal Integration', desc: 'Airflow, aisle containment and rack-level cooling design' },
                { icon: Cable, label: 'Cable Assembly', desc: 'Structured copper, fibre, power and PDU routing' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 p-4 bg-[#f4f4f4] rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#0f62fe]/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#0f62fe]" />
                  </div>
                  <div>
                    <p className="carbon-heading-02 text-[#161616] mb-0.5">{item.label}</p>
                    <p className="carbon-helper-text-01 text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 md:py-24 bg-[#0f1d3a]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-10">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/15 rounded-full mb-4">
                <Award className="w-4 h-4 text-[#78a9ff]" />
                <span className="carbon-label-02 text-white/90 uppercase tracking-wider">Why Perception IT</span>
              </span>
              <h2 className="carbon-fluid-heading-05 text-white mb-4">
                The Enclosure Is a Commodity. The Architecture Is Not.
              </h2>
              <p className="carbon-body-02 text-white/80">
                We do not supply standard cabinets. We engineer integrated rack systems — 
                thermal management, power distribution, cable routing and infrastructure monitoring — 
                validated as a unified architecture for enterprise and mission-critical environments in Pakistan.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Clock, label: 'Always-On Infrastructure Monitoring', desc: 'Cabinet-level visibility into temperature, humidity, power status and physical access, monitored continuously from our operations centre' },
                { icon: Award, label: 'Enterprise Architecture Heritage', desc: 'Twenty-four years of critical infrastructure design and deployment, combining British governance frameworks with Pakistani operational execution' },
                { icon: Users, label: 'Regional Engineering Capability', desc: 'Pakistan-based deployment and field engineering teams experienced across seismic, industrial and classified-site environments' },
                { icon: Layers, label: 'Vendor-Neutral Engineering', desc: 'Independent specification across Tier 1 manufacturers. Rack architecture is selected on technical fit and compliance, not commercial allegiance.' },
              ].map((item) => (
                <div key={item.label} className="p-5 bg-white/5 border border-white/10 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#0f62fe]/20 flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-[#78a9ff]" />
                  </div>
                  <p className="carbon-heading-02 text-white mb-2">{item.label}</p>
                  <p className="carbon-body-02 text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cabinet Enclosures & Structural Varieties */}
        <section id="cabinet-enclosures" className="py-16 md:py-24 bg-[#f4f4f4]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12 md:mb-16">
              <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
                Cabinet Enclosures
              </span>
              <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
                Structural Varieties for Every Environment
              </h2>
              <p className="carbon-body-02 text-gray-600">
                In modern high-density environments, a rack is no longer just metal shelving — 
                it is an engineered system integrated with cooling, power and monitoring.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {CABINET_ENCLOSURES.map((type) => (
                <div
                  key={type.title}
                  className="group bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="h-1.5 w-full" style={{ backgroundColor: type.color }} />
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: type.color + '12' }}
                      >
                        <type.icon className="w-6 h-6" style={{ color: type.color }} />
                      </div>
                      <h3 className="carbon-heading-02 text-[#161616]">{type.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {type.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 carbon-body-02 text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0f62fe] mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
              <h3 className="carbon-heading-02 text-[#161616] mb-6">Available Form Factors</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {FORM_FACTORS.map((ff) => (
                  <div key={ff.title}>
                    <p className="carbon-heading-02 text-[#161616] mb-2">{ff.title}</p>
                    <p className="carbon-body-02 text-gray-500">{ff.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Thermal Management & Containment Integration */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12 md:mb-16">
              <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
                Thermal Management
              </span>
              <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
                Containment Integration & Rack-Level Cooling
              </h2>
              <p className="carbon-body-02 text-gray-600">
                Thermal efficiency starts at the cabinet. We integrate aisle containment, airflow 
                optimisation and intelligent rack-level cooling to protect high-density deployments.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {THERMAL_SYSTEMS.map((item) => (
                <div
                  key={item.title}
                  className="group bg-[#f4f4f4] p-5 sm:p-6 rounded-xl border border-gray-200 hover:border-[#0f62fe]/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0f62fe]/10 flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-[#0f62fe]" />
                  </div>
                  <h3 className="carbon-heading-02 text-[#161616] mb-2">{item.title}</h3>
                  <p className="carbon-body-02 text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* High-Density Cable Management & Topology */}
        <section className="py-16 md:py-24 bg-[#f4f4f4]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12 md:mb-16">
              <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
                Cable Management
              </span>
              <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
                High-Density Topology & Pathway Design
              </h2>
              <p className="carbon-body-02 text-gray-600">
                Clean cable topology reduces error rates, simplifies maintenance and presents a 
                professional environment for client visits. We design pathways for copper, fibre and power.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {CABLE_SYSTEMS.map((item) => (
                <div
                  key={item.title}
                  className="group bg-white p-5 sm:p-6 rounded-xl border border-gray-200 hover:border-[#0f62fe]/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0f62fe]/10 flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-[#0f62fe]" />
                  </div>
                  <h3 className="carbon-heading-02 text-[#161616] mb-2">{item.title}</h3>
                  <p className="carbon-body-02 text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cabinet Security & Environmental Integration */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12 md:mb-16">
              <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
                Security & Environment
              </span>
              <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
                Physical Security, Monitoring & Grounding
              </h2>
              <p className="carbon-body-02 text-gray-600">
                The right server cabinet delivers a safe environment for critical infrastructure — 
                from smart access control and environmental sensors to grounding systems tied to the site matrix.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {SECURITY_ENVIRONMENTAL.map((item) => (
                <div
                  key={item.title}
                  className="group bg-[#f4f4f4] p-5 sm:p-6 rounded-xl border border-gray-200 hover:border-[#0f62fe]/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0f62fe]/10 flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-[#0f62fe]" />
                  </div>
                  <h3 className="carbon-heading-02 text-[#161616] mb-2">{item.title}</h3>
                  <p className="carbon-body-02 text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {['Lockable front/rear doors', 'Side panel seals', 'Access logging', 'Compliant audit trails', 'Biometric / RFID options'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-[#0f1d3a] text-white/90 carbon-label-01 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Sizing & Specifications */}
        <section className="py-16 md:py-24 bg-[#f4f4f4]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
                  Sizing Guide
                </span>
                <h2 className="carbon-fluid-heading-05 text-[#161616] mb-6">
                  Rack Units, Depth & Load Capacity
                </h2>

                <div className="space-y-6">
                  <div className="p-5 rounded-xl border border-gray-200 bg-white">
                    <p className="carbon-label-02 text-gray-500 uppercase tracking-wider mb-2">Rack Unit (U)</p>
                    <p className="text-2xl font-semibold text-[#161616] mb-2">1U = 44.45mm</p>
                    <p className="carbon-body-02 text-gray-600">
                      All rack-mount equipment has a U height and mm depth. The standard internal 
                      mounting width remains 19 inches per EIA-310 standards. Add up the U count for 
                      your equipment, then pick a cabinet with enough depth for cable radius bends 
                      and rear-mounted PDUs.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-gray-200 bg-white">
                    <p className="carbon-label-02 text-gray-500 uppercase tracking-wider mb-2">Weight Capacity</p>
                    <p className="text-2xl font-semibold text-[#161616] mb-2">300Kg – 1500Kg</p>
                    <p className="carbon-body-02 text-gray-600">
                      A typical 27U cabinet supports around 300Kg including servers, routers and a UPS 
                      battery pack. Enterprise-grade cabinets are rated to 1500Kg static. We validate 
                      load distribution and select the correct rating during site survey.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-gray-200 bg-white">
                    <p className="carbon-label-02 text-gray-500 uppercase tracking-wider mb-2">Rack Depth</p>
                    <p className="text-2xl font-semibold text-[#161616] mb-2">600mm – 1200mm+</p>
                    <p className="carbon-body-02 text-gray-600">
                      Shallow 600mm – 800mm depths suit patch panels and network switches. 
                      Deep 1000mm – 1200mm+ depths are required for enterprise servers and 
                      heavy-duty storage arrays.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#0f1d3a] rounded-2xl p-8 sm:p-10">
                <p className="carbon-label-02 text-[#78a9ff] uppercase tracking-wider mb-4">Common Cabinet Sizes</p>
                <div className="space-y-4">
                  {[
                    { size: '12U – 24U', use: 'Wall-mount applications, small office network closets, retail edge sites' },
                    { size: '27U – 42U', use: 'Medium businesses, branch offices and standard data centre deployments' },
                    { size: '42U – 48U+', use: 'Enterprise facilities and high-density hyperscale deployments' },
                    { size: '600mm – 800mm', use: 'Shallow depths for patch panels, switches and shallow servers' },
                    { size: '1000mm – 1200mm+', use: 'Deep configurations for enterprise servers and storage arrays' },
                  ].map((row) => (
                    <div key={row.size} className="flex items-start gap-4 pb-4 border-b border-white/10 last:border-0 last:pb-0">
                      <span className="carbon-heading-02 text-white whitespace-nowrap">{row.size}</span>
                      <span className="carbon-body-02 text-white/70">{row.use}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Considerations */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12 md:mb-16">
              <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
                Planning
              </span>
              <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
                Key Considerations for Cabinet Selection
              </h2>
              <p className="carbon-body-02 text-gray-600">
                Beyond height and depth, these factors determine the right enclosure for your 
                operational reality.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CONSIDERATIONS.map((item) => (
                <div
                  key={item.title}
                  className="group bg-[#f4f4f4] p-5 sm:p-6 rounded-xl border border-gray-200 hover:border-[#0f62fe]/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0f62fe]/10 flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-[#0f62fe]" />
                  </div>
                  <h3 className="carbon-heading-02 text-[#161616] mb-2">{item.title}</h3>
                  <p className="carbon-body-02 text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supply Chain — Tier 1 Procurement */}
        <section className="py-16 md:py-24 bg-[#f4f4f4]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12">
              <div>
                <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
                  Procurement
                </span>
                <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
                  Need Help Choosing Racks?
                </h2>
                <p className="carbon-body-02 text-gray-600 mb-6">
                  We procure from Tier 1 manufacturers with free site survey before order placement. 
                  British governance standards applied to Pakistani supply chain execution — 
                  every cabinet is spec-validated before it ships.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="mailto:contact@perception-it.com?subject=Rack%20Comparison%20%26%20Technical%20Consultation"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0f62fe] text-white carbon-heading-02 rounded-lg hover:bg-[#0353e9] transition-colors"
                  >
                    Request Technical Consultation
                  </a>
                </div>
              </div>

              {/* Partner Logos */}
              <div>
                <p className="carbon-label-02 text-gray-500 uppercase tracking-wider mb-5">Certified Supply Chain</p>
                <div className="flex flex-wrap items-center gap-8 md:gap-10">
                  {[
                    { name: 'Huawei', src: '/logos/partners/Partner-Huawei-Logo.svg' },
                    { name: 'Dell', src: '/logos/partners/DELL LOGO/DELL LOGO 1 .webp' },
                    { name: 'HP', src: '/logos/partners/HPE logo /HPE Logo files/HPE Logo/HPE-logo-full-clr-pos-rgb (3).webp' },
                    { name: 'Lenovo', src: '/logos/partners/Partner-Lenovo-Logo.svg' },
                  ].map((p) => (
                    <div key={p.name} className="w-28 h-14 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                      <img src={p.src} alt={p.name} title={p.name} className="max-w-full max-h-full object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        <FeaturedProductsSection />

        <ResultsSection />

        {/* Ecosystem Upsell */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-10">
              <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
                The Ecosystem
              </span>
              <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
                Complete Data Centre Resilience
              </h2>
              <p className="carbon-body-02 text-gray-600">
                Racks and cabinets do not operate in isolation. When integrated with power, cooling, 
                and monitoring under one SLA, your infrastructure operates as a single resilient system.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                { title: 'Cooling & Airflow', desc: 'Precision thermal management for high-density racks', href: '/#/infrastructure/data-centre-services/cooling-airflow' },
                { title: 'Power & UPS', desc: 'UPS, PDU and busbar power for every cabinet', href: '/#/infrastructure/data-centre-services/power-ups' },
                { title: 'Monitoring', desc: 'Environmental sensors and NOC visibility per rack', href: '/#/services/observability' },
              ].map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="group bg-[#f4f4f4] rounded-xl border border-gray-200 p-6 hover:border-[#0f62fe]/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <h3 className="carbon-heading-02 text-[#161616] mb-2">{item.title}</h3>
                  <p className="carbon-body-02 text-gray-600 mb-4">{item.desc}</p>
                  <div className="flex items-center gap-2 text-[#0f62fe] carbon-label-02">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-[#0F172A] rounded-2xl p-8 sm:p-10 text-center">
              <h3 className="carbon-fluid-heading-03 text-white mb-3">
                One partner. One SLA. No gaps.
              </h3>
              <p className="carbon-body-02 text-white/70 max-w-2xl mx-auto mb-6">
                When rack layout, cooling, power, and monitoring are validated together, 
                your data centre operates as a single resilient system.
              </p>
              <a
                href="mailto:contact@perception-it.com?subject=Enterprise%20Pricing%20-%20Rack%20%26%20Cabinet"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0f62fe]/20 text-[#78a9ff] carbon-label-02 rounded-full hover:bg-[#0f62fe]/30 transition-colors"
              >
                Enterprise Pricing
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-[#0f62fe]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h2 className="carbon-fluid-heading-05 text-white mb-4">
              Ready to Plan Your Rack Layout?
            </h2>
            <p className="carbon-body-02 text-white/80 max-w-2xl mx-auto mb-8">
              Schedule a technical assessment — we survey your space, calculate load capacity, and 
              recommend the right cabinet configuration for your equipment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:contact@perception-it.com?subject=Rack%20%26%20Cabinet%20Assessment%20Request"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0f62fe] carbon-heading-02 rounded-lg hover:bg-white/90 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5 transition-all"
              >
                Schedule Assessment
              </a>
              <a
                href="https://e.huawei.com/en/products/data-center"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/15 border border-white/30 text-white carbon-heading-02 rounded-lg hover:bg-white/25 transition-colors"
              >
                Explore Solutions
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 left-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-[#0f62fe] text-white shadow-lg transition-all duration-300 hover:bg-[#0353e9] ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <Footer />
    </div>
  );
}
