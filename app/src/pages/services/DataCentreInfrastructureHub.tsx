import { useEffect, useState } from 'react';
import {
  ArrowRight,
  TrendingUp,
  Zap,
  Server,
  Activity,
  Truck,
  Wrench,
  Check,
  Award,
  Headphones,
  MapPin,
  Clock,
  ShieldCheck,
  Phone,
  ChevronDown,
  ChevronUp,
  Snowflake,
  Sun,
  CloudRain,
  ZapOff,
} from 'lucide-react';
import usePageSEO from '@/hooks/usePageSEO';
import CoolingNav from '@/pages/services/CoolingNav';
import Footer from '@/sections/Footer';
import ClientLogos from '@/sections/ClientLogos';
import CertifiedPartners from '@/sections/CertifiedPartners';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import type { TestimonialData } from '@/components/TestimonialCarousel';
import '@/styles/carbon-typography.css';
import '@/styles/design-tokens.css';

const SERVICE_CARDS = [
  {
    id: 'cost-optimisation',
    title: 'Cost Optimisation',
    description:
      'Identify waste, right-size capacity, and reduce total cost of ownership across power, cooling and physical infrastructure.',
    href: '/#/infrastructure/data-centre-services/cost-optimisation',
    icon: TrendingUp,
    highlights: ['TCO analysis', 'Capacity planning', 'Energy efficiency'],
  },
  {
    id: 'cooling',
    title: 'Cooling & Airflow',
    description:
      'Precision cooling, thermal containment and airflow management designed for Pakistan’s climate and high-density loads.',
    href: '/#/infrastructure/data-centre-services/cooling',
    icon: Snowflake,
    highlights: ['CRAC/CRAH service', 'Thermal containment', 'Capacity planning'],
  },
  {
    id: 'power-ups',
    title: 'Power & UPS',
    description:
      'Resilient power architecture from UPS and PDU selection to battery sizing, bypass design and SLA-backed maintenance.',
    href: '/#/infrastructure/data-centre-services/power-ups',
    icon: Zap,
    highlights: ['UPS & PDU sizing', 'Load-bank testing', 'Battery lifecycle'],
  },
  {
    id: 'rack-cabinets',
    title: 'Rack & Cabinet',
    description:
      'Server cabinets, containment, cable management and acoustic or IP-rated enclosures built for your layout and load.',
    href: '/#/infrastructure/data-centre-services/rack-cabinets',
    icon: Server,
    highlights: ['Cabinet layout', 'Airflow containment', 'Cable management'],
  },
  {
    id: 'monitoring',
    title: 'Monitoring',
    description:
      'Environmental and power monitoring with sensors, dashboards and NOC integration so nothing fails unseen.',
    href: '/#/infrastructure/data-centre-services/monitoring',
    icon: Activity,
    highlights: ['Sensor networks', 'Threshold tuning', 'NOC dashboards'],
  },
  {
    id: 'migration-relocation',
    title: 'Migration & Relocation',
    description:
      'Zero-downtime data centre moves, rack relocations and facility transitions with full risk mitigation.',
    href: '/#/infrastructure/data-centre-services/migration-relocation',
    icon: Truck,
    highlights: ['Zero business impact moves', 'Asset tracking', 'Rollback plans'],
  },
  {
    id: 'maintenance-support',
    title: 'Maintenance & Support',
    description:
      'Single SLA maintenance and 24/7 support across cooling, power, racks and monitoring from local engineers.',
    href: '/#/infrastructure/data-centre-services/maintenance-support',
    icon: Wrench,
    highlights: ['24/7 NOC', '4-hour response', 'Spare parts holding'],
  },
];

const WHY_US = [
  {
    icon: ShieldCheck,
    title: 'Single Vendor Accountability',
    description: 'One contract, one SLA and a single point of accountability across multi-vendor environments.',
  },
  {
    icon: Clock,
    title: '24/7 NOC & Fast Response',
    description: 'Local engineers in Karachi, Lahore and Islamabad with a 4-hour emergency target.',
  },
  {
    icon: Award,
    title: 'Certified Partner Access',
    description: 'Huawei Enterprise Certified Partner with direct parts and escalation channels.',
  },
  {
    icon: MapPin,
    title: 'Local Spare Parts Holding',
    description: 'Critical UPS, cooling and rack components held in Karachi, Lahore and Islamabad for same-day response.',
  },
];

const TRUST_STATS = [
  { value: '99.99%', label: 'Uptime SLA target' },
  { value: '4hrs', label: 'Emergency response' },
  { value: '6+', label: 'Data centre disciplines' },
  { value: '15+', label: 'Years enterprise experience' },
];

const TESTIMONIALS: TestimonialData[] = [
  {
    quote: "Perception-IT did not just move our infrastructure — they stayed with us through hyper-care and into managed support. The migration became the entry point to a much simpler operational model.",
    author: 'Head of Infrastructure',
    org: 'Leading Pakistani Bank',
    logo: '/logos/clients/Descon-logo.png',
    bg: 'from-[#0043ce] to-[#002d9c]',
    project: {
      headline: 'Banking Data Centre Migration',
      desc: 'Turnkey relocation with ongoing managed services and NOC support',
      link: '/#/infrastructure/data-centre-services/migration-relocation',
    },
  },
  {
    quote: "We used Perception-IT as independent oversight on a complex telco migration. Their NOC caught issues before they became outages and their governance kept multiple vendors aligned.",
    author: 'Regional Operations Director',
    org: 'GCC Telecommunications Group',
    logo: '/logos/clients/client-Sefam.jpeg',
    bg: 'from-[#0f62fe] to-[#0353e9]',
    project: {
      headline: 'Managed Migration Oversight',
      desc: 'Independent governance and 24/7 cutover monitoring for a multi-vendor migration',
      link: '/#/infrastructure/data-centre-services/migration-relocation',
    },
  },
  {
    quote: "The refresh-and-relocate bundle gave us new Huawei hardware, a clean migration, and three years of support under one contract. It removed the finger-pointing we had with separate vendors.",
    author: 'IT Director',
    org: 'Manufacturing Group',
    logo: '/logos/clients/mayfair%20logo%20svg.svg',
    bg: 'from-[#002d9c] to-[#0043ce]',
    project: {
      headline: 'Turnkey Migration + Hardware Refresh',
      desc: 'New hardware procurement, migration execution, and ongoing managed services',
      link: '/#/infrastructure/data-centre-services/migration-relocation',
    },
  },
  {
    quote: "Perception IT transformed our server infrastructure from a risk into a reliable engine for operations. Their 24/7 support, same-day hardware replacements, and proactive maintenance have kept our systems running without a single major incident.",
    author: 'Mr. Usman Zafar',
    org: 'Head of IT, Ibrahim Fibres Limited',
    logo: '/logos/clients/IFL-logo.png',
    bg: 'from-[#0353e9] to-[#0f62fe]',
    project: {
      headline: 'Deployed ServerLife Extend™ to 48 Critical Servers',
      desc: 'Eliminated hardware downtime risk and deferred CapEx spend without compromise',
      link: '/#/services/server-continuity',
    },
  },
];

const CASE_STUDIES = [
  {
    title: 'Multi-Site Precision Cooling Deployment',
    sector: 'University / Education',
    org: 'LUMS',
    desc: 'Deployed precision cooling units across four data centres, significantly improving PUE and thermal performance.',
    outcomes: ['PUE significantly improved', 'N+1 redundancy achieved', '8-week deployment timeline'],
    image: '/Sections/Cooling page/Images-cooling/Case studies/LUMS/LUMS-1-1600×700.webp',
    link: '/#/infrastructure/data-centre-services/cooling',
  },
  {
    title: 'Thermal Runaway Prevention',
    sector: 'Engineering / Procurement / Construction',
    org: 'Leading Multinational Conglomerate',
    desc: 'Redesigned airflow management preventing thermal runaway and extending equipment lifespan across critical facilities.',
    outcomes: ['Hotspots eliminated', 'Average temperatures reduced', 'Annual cooling costs reduced'],
    image: '/Sections/Cooling page/Images-cooling/Case studies/descon/DESCON11600×700.webp',
    link: '/#/infrastructure/data-centre-services/cooling',
  },
  {
    title: 'Monsoon Season Resilience',
    sector: 'FMCG',
    org: 'Confectionery & Bakery Manufacturing',
    desc: 'Implemented humidity control and drainage systems to maintain operations during monsoon season.',
    outcomes: ['Humidity-related incidents eliminated', 'Uptime significantly improved', 'Equipment corrosion reduced'],
    image: '/Sections/Cooling page/Images-cooling/Case studies/Mayfair/MAYFAIR1:1600×700.webp',
    link: '/#/infrastructure/data-centre-services/cooling',
  },
];

const FAQS = [
  {
    q: 'Do I need all seven services, or can I choose one?',
    a: 'You can start with any single service. Most clients begin with Cost Optimisation or Monitoring, then expand into maintenance or migration as risks become visible.',
  },
  {
    q: 'What is a Data Centre Health Assessment?',
    a: 'A structured review of your power, cooling, racks and monitoring environment. We deliver a risk register, capacity outlook and a prioritised improvement roadmap.',
  },
  {
    q: 'Can you support equipment installed by another vendor?',
    a: 'Yes. We take over multi-vendor environments including APC, Eaton, Vertiv, Huawei and Schneider under a single SLA.',
  },
  {
    q: 'How do these services relate to Server Continuity?',
    a: 'Data Centre Infrastructure Services cover the facility layer — power, cooling, racks and environment — while Server Continuity covers the compute layer. Together they form a single continuity chain.',
  },
];

const CONTACT_EMAIL_BODY = encodeURIComponent(
  'Hi Perception IT Team,\n\nI would like to request a Data Centre Infrastructure Health Assessment. Please find our initial details below.\n\n- Company name:\n- Site location(s):\n- Facility type (server room / data centre / co-location):\n- Approximate rack count:\n- Current equipment brands (UPS / cooling / racks):\n- Primary pain points or upcoming projects:\n- Preferred contact number and email:\n\nPlease contact me to arrange a technical consultation.\n\nBest regards,'
);

const DataCentreInfrastructureHub = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  usePageSEO({
    title: 'Data Centre Infrastructure Services Pakistan | Perception IT',
    description:
      'End-to-end data centre infrastructure services in Pakistan: cost optimisation, power & UPS, racks, monitoring, migration and maintenance. Book a free health assessment.',
    canonicalPath: '/infrastructure/data-centre-services',
    ogType: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Data Centre Infrastructure Services',
      provider: {
        '@type': 'Organization',
        name: 'Perception IT',
        url: 'https://perception-it.com',
        logo: 'https://perception-it.com/logos/Perception IT_logo_in-white.png',
      },
      areaServed: { '@type': 'Country', name: 'Pakistan' },
      serviceType: 'Data Centre Infrastructure',
      description:
        'Cost optimisation, power & UPS, rack & cabinet, monitoring, migration and maintenance services for enterprise data centres.',
      url: 'https://perception-it.com/#/infrastructure/data-centre-services',
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <CoolingNav />

      {/* Breadcrumb */}
      <div className="sticky top-12 z-40 bg-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-12 flex items-center">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-500">
              <li>
                <a href="/#/" className="hover:text-[#0f62fe] transition-colors">
                  Home
                </a>
              </li>
              <li className="text-gray-300">/</li>
              <li>
                <a href="/#/services/infrastructure" className="hover:text-[#0f62fe] transition-colors">
                  Infrastructure
                </a>
              </li>
              <li className="text-gray-300">/</li>
              <li className="text-gray-900 font-medium" aria-current="page">
                Data Centre Infrastructure Services
              </li>
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
              <span className="carbon-label-02 text-[#78a9ff] uppercase tracking-wider">
                Data Centre Infrastructure
              </span>
            </div>

            <h1 className="carbon-fluid-display-03 text-white max-w-4xl mb-6">
              End-to-End Data Centre Infrastructure Services
            </h1>

            <p className="carbon-fluid-heading-04 text-white/90 max-w-3xl mb-10">
              Design, build, optimise and support the facility layer that keeps your servers running.
            </p>

            <p className="carbon-body-02 text-slate-400 max-w-3xl mb-12">
              From cooling and power to racks, monitoring, migration and maintenance, we provide a single
              accountability chain for critical facilities across Pakistan. One partner, one SLA, no gaps.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:info@perception-it.com?subject=Data%20Centre%20Health%20Assessment%20Request&body=${CONTACT_EMAIL_BODY}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0f62fe] text-white carbon-heading-02 rounded-lg hover:bg-[#0353e9] hover:shadow-xl hover:shadow-[#0f62fe]/25 hover:-translate-y-0.5 transition-all"
              >
                Book an Infrastructure Audit
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('services');
                  if (el) {
                    const pos = el.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({ top: pos - 80, behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/20 text-white carbon-heading-02 rounded-lg hover:bg-white/10 hover:border-white/30 transition-all"
              >
                Explore Services
              </a>
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <ClientLogos />

        {/* Service Grid */}
        <section id="services" className="py-16 md:py-24 bg-[#f4f4f4]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12 md:mb-16">
              <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
                Service Layers
              </span>
              <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
                Seven Disciplines. One Integrated Facility Layer.
              </h2>
              <p className="carbon-body-02 text-gray-600">
                Each service is available standalone or as part of a unified data centre lifecycle contract.
                Click through for technical depth, pricing and SLAs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICE_CARDS.map((service) => (
                <a
                  key={service.id}
                  href={service.href}
                  className="group bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0f62fe]/10 flex items-center justify-center mb-5 group-hover:bg-[#0f62fe]/15 transition-colors">
                    <service.icon className="w-6 h-6 text-[#0f62fe]" />
                  </div>
                  <h3 className="carbon-fluid-heading-03 text-[#161616] mb-2">{service.title}</h3>
                  <p className="carbon-body-02 text-gray-600 mb-6 flex-grow">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 carbon-body-02 text-gray-700">
                        <Check className="w-4 h-4 text-[#0f62fe] flex-shrink-0 mt-0.5" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-2 text-[#0f62fe] carbon-heading-02 group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Local Engineering USP */}
        <section className="py-16 md:py-24 bg-[#0a1628]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="inline-block carbon-label-02 text-[#78a9ff] uppercase tracking-wider mb-3">
                  Our USP
                </span>
                <h2 className="carbon-fluid-heading-05 text-white mb-4">
                  Local Engineering
                </h2>
                <p className="carbon-fluid-heading-04 text-[#78a9ff] mb-6">
                  Global Templates Fail Here. We Engineer for Monsoons, Dust & Load-Shedding.
                </p>
                <p className="carbon-body-02 text-white/80 leading-relaxed mb-8">
                  Standard data centre designs assume textbook conditions. We design for extreme temperatures 45°+ summers,
                  Karachi&apos;s coastal dust, and 8–12 hour daily load-shedding. We prioritise absolute resilience
                  over theoretical efficiency.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`mailto:info@perception-it.com?subject=Data%20Centre%20Local%20Engineering%20Enquiry&body=${CONTACT_EMAIL_BODY}`}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0f62fe] text-white carbon-heading-02 rounded-lg hover:bg-[#0353e9] hover:shadow-xl hover:shadow-[#0f62fe]/25 hover:-translate-y-0.5 transition-all"
                  >
                    Talk to a Local Engineer
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    icon: Sun,
                    title: '45°+ Summers',
                    desc: 'Lahore-grade heat tolerance and ambient-rated cooling design for 45°C+ peaks.'
                  },
                  {
                    icon: CloudRain,
                    title: 'Monsoon & Dust',
                    desc: 'Karachi coastal dust and humidity-hardened containment.',
                  },
                  {
                    icon: ZapOff,
                    title: 'Load-Shedding',
                    desc: '8–12 hour power resilience through UPS, bypass and generator integration.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-6 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-[#0f62fe]/30 hover:bg-white/[0.08] transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#0f62fe]/15 flex items-center justify-center mb-5">
                      <item.icon className="w-6 h-6 text-[#78a9ff]" />
                    </div>
                    <h3 className="carbon-heading-02 text-white mb-2">{item.title}</h3>
                    <p className="carbon-body-02 text-white/70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
                  Why Perception IT
                </span>
                <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
                  Mission-Critical Infrastructure, Delivered Locally by a Single Vendor
                </h2>
                <p className="carbon-body-02 text-gray-600 mb-8">
                  Enterprise data centres cannot afford vendor fragmentation. We bring the facility layer under one
                  accountable partner with local engineers, certified parts access and procedures written for
                  Pakistan's operating conditions.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {WHY_US.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#0f62fe]/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-[#0f62fe]" />
                      </div>
                      <div>
                        <h3 className="carbon-heading-02 text-[#161616] mb-1">{item.title}</h3>
                        <p className="carbon-body-02 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#0a1628] rounded-2xl p-8 sm:p-10">
                <h3 className="carbon-fluid-heading-03 text-white mb-8">Trusted Across Critical Facilities</h3>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {TRUST_STATS.map((stat) => (
                    <div key={stat.label} className="p-4 rounded-xl bg-white/[0.05] border border-white/10">
                      <p className="carbon-fluid-display-03 text-[#78a9ff] mb-1">{stat.value}</p>
                      <p className="carbon-body-02 text-white/70">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {[
                    'Certified partner: Huawei only',
                    'Spare parts holding in Karachi, Lahore & Islamabad',
                    'Engineers experienced with APC, Eaton, Vertiv, Huawei & Schneider',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 carbon-body-02 text-white/90">
                      <Award className="w-5 h-5 text-[#78a9ff] flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certified Partners */}
        <CertifiedPartners />

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-[#f4f4f4]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12 md:mb-16">
              <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
                Client Feedback
              </span>
              <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
                Real Outcomes from Critical Facilities
              </h2>
              <p className="carbon-body-02 text-gray-600">
                Direct feedback from infrastructure leaders who have seen measurable continuity and cost outcomes.
              </p>
            </div>
            <TestimonialCarousel testimonials={TESTIMONIALS} />
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12 md:mb-16">
              <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
                Case Studies
              </span>
              <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
                Data Centre Infrastructure in Action
              </h2>
              <p className="carbon-body-02 text-gray-600">
                See how we have delivered cooling, airflow and facility resilience across Pakistan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CASE_STUDIES.map((study) => (
                <a
                  key={study.title}
                  href={study.link}
                  className="group bg-[#f4f4f4] rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 text-xs font-medium bg-[#0f62fe]/10 text-[#0f62fe] rounded">
                        {study.sector}
                      </span>
                      <span className="text-xs text-gray-500">{study.org}</span>
                    </div>
                    <h3 className="carbon-heading-02 text-[#161616] mb-2">{study.title}</h3>
                    <p className="carbon-body-02 text-gray-600 mb-4 flex-grow">{study.desc}</p>
                    <ul className="space-y-1 mb-4">
                      {study.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-start gap-2 carbon-body-02 text-gray-700">
                          <Check className="w-4 h-4 text-[#0f62fe] flex-shrink-0 mt-0.5" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-2 text-[#0f62fe] carbon-heading-02 group-hover:gap-3 transition-all">
                      View solution <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-[#f4f4f4]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12 md:mb-16">
              <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
                How We Work
              </span>
              <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
                From Assessment to Continuous Operations
              </h2>
              <p className="carbon-body-02 text-gray-600">
                A repeatable process that turns fragmented infrastructure into a predictable, maintained facility layer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Assess',
                  desc: 'Baseline your power, cooling, racks and monitoring. Identify risks, capacity gaps and cost drivers.',
                },
                {
                  step: '02',
                  title: 'Design',
                  desc: 'Right-size each subsystem and define how they integrate under one SLA and accountability chain.',
                },
                {
                  step: '03',
                  title: 'Deploy',
                  desc: 'Procure, install and commission with local engineers, manufacturer SOPs and minimal downtime.',
                },
                {
                  step: '04',
                  title: 'Operate',
                  desc: 'Monitor, maintain and optimise continuously with 24/7 NOC support and planned preventive visits.',
                },
              ].map((item, idx) => (
                <div key={item.step} className="relative">
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-[#0f62fe]/20" />
                  )}
                  <div className="bg-white rounded-xl border border-gray-200 p-6 hover:border-[#0f62fe]/20 hover:shadow-lg transition-all duration-300 h-full">
                    <span className="inline-block carbon-fluid-heading-03 text-[#0f62fe] mb-4">{item.step}</span>
                    <h3 className="carbon-heading-02 text-[#161616] mb-2">{item.title}</h3>
                    <p className="carbon-body-02 text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12 md:mb-16">
              <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">FAQ</span>
              <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
                Common Questions About Data Centre Infrastructure
              </h2>
            </div>

            <div className="max-w-3xl space-y-4">
              {FAQS.map((faq) => {
                const isOpen = openFaq === faq.q;
                return (
                  <div
                    key={faq.q}
                    className={`bg-[#f4f4f4] rounded-xl border overflow-hidden transition-all duration-300 ${
                      isOpen ? 'border-[#0f62fe]/30 shadow-lg' : 'border-gray-200'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : faq.q)}
                      className="w-full flex items-center justify-between p-5 text-left"
                    >
                      <span className="carbon-heading-02 text-[#161616] pr-4">{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#0f62fe] flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 border-t border-gray-100">
                        <p className="carbon-body-02 text-gray-600 leading-relaxed pt-4">{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-[#0a1628]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="carbon-fluid-heading-05 text-white mb-4">
                  Book a Data Centre Health Assessment
                </h2>
                <p className="carbon-body-02 text-white/80 mb-8 leading-relaxed">
                  Tell us about your facility and current challenges. We will identify immediate risks, map the right
                  service mix and give you a clear improvement roadmap.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`mailto:info@perception-it.com?subject=Data%20Centre%20Health%20Assessment%20Request&body=${CONTACT_EMAIL_BODY}`}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0f62fe] text-white carbon-heading-02 rounded-lg hover:bg-[#0353e9] hover:shadow-xl hover:shadow-[#0f62fe]/25 hover:-translate-y-0.5 transition-all"
                  >
                    Request an Assessment
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="tel:+923001234567"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/20 text-white carbon-heading-02 rounded-lg hover:bg-white/10 hover:border-white/30 transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    Speak to an Engineer
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-white/[0.05] border border-white/10">
                  <Headphones className="w-6 h-6 text-[#78a9ff] mb-3" />
                  <p className="carbon-heading-02 text-white mb-1">24/7 NOC</p>
                  <p className="carbon-body-02 text-white/70">Always-on monitoring and escalation</p>
                </div>
                <div className="p-5 rounded-xl bg-white/[0.05] border border-white/10">
                  <MapPin className="w-6 h-6 text-[#78a9ff] mb-3" />
                  <p className="carbon-heading-02 text-white mb-1">Local Engineers</p>
                  <p className="carbon-body-02 text-white/70">Karachi, Lahore and Islamabad</p>
                </div>
                <div className="p-5 rounded-xl bg-white/[0.05] border border-white/10">
                  <ShieldCheck className="w-6 h-6 text-[#78a9ff] mb-3" />
                  <p className="carbon-heading-02 text-white mb-1">Single SLA</p>
                  <p className="carbon-body-02 text-white/70">Across cooling, power, racks and monitoring</p>
                </div>
                <div className="p-5 rounded-xl bg-white/[0.05] border border-white/10">
                  <Award className="w-6 h-6 text-[#78a9ff] mb-3" />
                  <p className="carbon-heading-02 text-white mb-1">Certified Partner</p>
                  <p className="carbon-body-02 text-white/70">Huawei Enterprise Certified</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-[#0f62fe] text-white rounded-full shadow-lg hover:bg-[#0353e9] transition-all"
          aria-label="Back to top"
        >
          <ArrowRight className="w-5 h-5 rotate-[-90deg]" />
        </button>
      )}
    </div>
  );
};

export default DataCentreInfrastructureHub;
