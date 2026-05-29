import { Meter, DataCenter, Dashboard, Warning } from '@carbon/icons-react';

export const PAGE_SECTIONS = [



  { id: 'services', label: 'Services', inNav: false },



  { id: 'assessment', label: '01 / Assessment', inNav: true },



  { id: 'procurement', label: '02 / Procurement', inNav: true },



  { id: 'deployment', label: '03 / Deployment', inNav: true },



  { id: 'managed', label: '04 / Managed Services', inNav: true },



  { id: 'international', label: '05 / International Advisory', inNav: true },



  { id: 'ecosystem', label: 'Ecosystem', inNav: true },



  { id: 'results', label: 'Results', inNav: true },



  { id: 'faq', label: 'FAQ', inNav: true },



  { id: 'cta', label: 'Get Started', inNav: true },



] as const;





























export const TESTIMONIALS = [



  {



    quote: "Perception IT transformed our server infrastructure from a risk into a reliable engine for operations. Any downtime could have cost us millions. Their 24/7 support, same-day hardware replacements, and proactive maintenance have kept our systems running without a single major incident.\n\nWe now operate with confidence knowing our IT backbone is in expert hands.",



    author: 'Mr. Usman Zafar',



    org: 'Head of IT, Ibrahim Fibres Limited',



    logo: '/logos/clients/IFL-logo.png',



    bg: 'from-[#0043ce] to-[#002d9c]',



    project: {



      headline: 'Deployed ServerLife Extend™ to 48 Critical Servers',



      desc: 'Eliminated hardware downtime risk and deferred CapEx spend without compromise on quality or continuity',



      link: '/services/server-continuity',



    },



  },



  {



    quote: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",



    author: 'Chief Technology Officer',



    org: 'Descon Engineering',



    logo: '/logos/clients/Descon-logo.png',



    bg: 'from-[#002d9c] to-[#0043ce]',



    project: {



      headline: 'Deployed Precision Cooling to Critical Infrastructure',



      desc: 'Deferred CapEx spend without compromise on quality and continuity',



      link: '/services/cooling-airflow',



    },



  },



  {



    quote: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.',



    author: 'Head of Infrastructure',



    org: 'Mayfair Group',



    logo: '/logos/clients/mayfair%20logo%20svg.svg',



    bg: 'from-[#001d6c] to-[#0043ce]',



    project: {



      headline: 'Cooling Refresh with Zero Downtime Migration',



      desc: 'PUE reduced from 1.8 to 1.35 with 40% annual energy savings across all facilities',



      link: '/infrastructure/data-centre-services/cooling-thermal',



    },



  },



  {



    quote: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",



    author: 'Plant Operations Manager',



    org: 'Sefam Private Limited',



    logo: '/logos/clients/client-Sefam.jpeg',



    bg: 'from-[#0f62fe] to-[#0353e9]',



    project: {



      headline: 'Monsoon-Hardened Precision Cooling Deployment',



      desc: 'Custom 45°C ambient-rated solution delivering 60% additional cooling capacity with humidity resilience',



      link: '/infrastructure/data-centre-services/cooling-thermal',



    },



  },



  {



    quote: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",



    author: 'Director of IT Infrastructure',



    org: 'Lahore University of Management Sciences',



    logo: '/logos/clients/LUMS-Logo.png',



    bg: 'from-[#0353e9] to-[#0f62fe]',



    project: {



      headline: 'Research Data Centre Thermal Assessment & Upgrade',



      desc: 'Precision cooling system maintaining stable temperatures through extended load-shedding periods',



      link: '/infrastructure/data-centre-services/cooling-thermal',



    },



  },



];





export const PROJECTS = [



  { title: 'Out-of-Warranty Infrastructure Support', sector: 'Manufacturing / Textile', org: 'Leading Textile Manufacturer', desc: 'A major textile manufacturer faced end-of-warranty risk across its entire server fleet running production-critical systems. Perception IT delivered 24x7 hardware support, local spare parts inventory, proactive maintenance, and automated patching — eliminating unplanned downtime exposure.', outcomes: ['Zero unplanned outages','$750K+ downtime risk avoided','Full fleet under 24/7 SLA','Automated patching implemented'], tags: ['Server Fleet SLA','24/7 Support','Preventive Maintenance'], caseStudy: '/projects/manufacturing-infrastructure', image: '/Sections/Cooling page/Images-cooling/Case studies/ibrahim-fibres/Ibrahim Fibres -case study- 1600 × 700 px.webp' },



  { title: 'Hardware Maintenance', sector: 'University / Education', org: 'LUMS', desc: 'Deployed precision cooling units across four data centres, reducing PUE from 1.8 to 1.35.', outcomes: ['PUE reduced from 1.8 to 1.35','N+1 redundancy achieved','8-week deployment timeline'], tags: ['Multi-Site','PUE Optimisation','N+1 Redundancy'], caseStudy: '/case-studies/multi-site-precision-cooling', image: '/Sections/Cooling page/Images-cooling/Case studies/LUMS/LUMS-1-1600×700.webp' },



  { title: 'Thermal Runaway Prevention', sector: 'Engineering / Procurement / Construction (EPC)', org: 'Leading Multinational Conglomerate', desc: 'Redesigned airflow management preventing thermal runaway and extending equipment lifespan.', outcomes: ['Hotspots eliminated','3°C average temperature reduction','Annual cooling cost savings of 25%'], tags: ['Airflow Redesign','Thermal Mapping','Cost Reduction'], caseStudy: '/case-studies/thermal-runaway-prevention', image: '/Sections/Cooling page/Images-cooling/Case studies/descon/DESCON11600×700.webp' },



  { title: 'Monsoon Season Resilience', sector: 'FMCG', org: 'Confectionery & Bakery Manufacturing', desc: 'Implemented humidity control and drainage systems to maintain operations during monsoon season.', outcomes: ['Zero humidity-related outages','99.9% uptime maintained','Reduced equipment corrosion by 40%'], tags: ['Humidity Control','Drainage Systems','Monsoon Hardening'], caseStudy: '/case-studies/monsoon-season-resilience', image: '/Sections/Cooling page/Images-cooling/Case studies/Mayfair/MAYFAIR1:1600×700.webp' },



  { title: 'Legacy Cooling System Modernisation', sector: 'Government / Public Sector', org: 'Government Agency', desc: 'Upgraded 15-year-old cooling infrastructure with modern precision units and smart controls.', outcomes: ['Cooling efficiency improved by 45%','Remote monitoring implemented','Maintenance costs reduced by 30%'], tags: ['Retrofit','Smart Controls','Efficiency Gain'], caseStudy: '/case-studies/legacy-cooling-modernisation', image: '/Sections/Cooling page/Images-cooling/Card hero/Cooling - Procurement.png' },



  { title: 'Edge Site Thermal Management', sector: 'Textile Manufacturing / Fashion Retail', org: 'An elite fashion design house and a world-class textile manufacturer', desc: 'Designed and deployed compact cooling solutions for 12 edge data centres across Pakistan.', outcomes: ['Standardised cooling across all sites','Remote monitoring for all locations','Deployment completed in 6 weeks'], tags: ['Edge Deployment','Standardisation','Remote Monitoring'], caseStudy: '/case-studies/edge-thermal-management', image: '/Sections/Cooling page/Images-cooling/Case studies/Bareeze/Bareeze1:1600×700.webp' },



  { title: 'Data Centre Expansion Cooling', sector: 'Cloud / Technology', org: 'Cloud Provider', desc: 'Scaled cooling capacity by 200% to support data centre expansion while maintaining efficiency.', outcomes: ['200% capacity increase','PUE maintained at 1.4','Phased deployment minimising downtime'], tags: ['Capacity Scaling','Phased Deploy','PUE Maintenance'], caseStudy: '/case-studies/data-centre-expansion-cooling', image: '/Sections/Cooling page/Images-cooling/not used 3d/perceptionit_noc_bigscreens_v2.png' },



];





export const ECOSYSTEM_ITEMS = [



  { icon: Meter, title: 'Power & UPS', desc: 'Stable, conditioned, redundant power for cooling load.', link: '/infrastructure/data-centre-services/power-ups' },



  { icon: DataCenter, title: 'Rack & Cabinet', desc: 'Airflow containment, blanking panels, and IP54 sealing.', link: '/infrastructure/data-centre-services/rack-cabinet' },



  { icon: Dashboard, title: 'Environmental Monitoring', desc: 'Rack-level temperature, humidity, and leak detection.', link: '/infrastructure/data-centre-services/environmental-monitoring' },



  { icon: Warning, title: 'Fire Suppression', desc: 'FM200/clean-agent protection with thermal recovery.', link: '/infrastructure/data-centre-services/fire-suppression' },



];





export const FAQ_ITEMS = [



  { q: 'How long does a thermal assessment take?', a: 'A standard assessment takes 2-3 days on-site, plus 5 business days for report delivery. For multi-site deployments, we parallelise teams to compress the timeline.' },



  { q: 'Can you work with existing cooling equipment?', a: 'Yes. Our assessment includes retrofit recommendations for existing infrastructure. We design solutions that maximise reuse while achieving target PUE.' },



  { q: 'What is the typical ROI on precision cooling?', a: 'Most clients see ROI within 18-24 months through reduced energy costs, deferred capital expenditure on expansion, and prevented thermal-related downtime.' },



  { q: 'Do you provide emergency cooling response?', a: 'Enterprise managed services include 24/7 emergency response with 4-hour on-site SLA. We maintain portable cooling units in Karachi, Lahore, and Islamabad for rapid deployment.' },



  { q: 'How do you handle monsoon humidity?', a: 'Our designs include humidity control systems, drainage redundancy, and monsoon-specific maintenance protocols. Enterprise tier includes dedicated monsoon standby engineers.' },



  { q: 'What certifications do your engineers hold?', a: 'Our deployment engineers hold manufacturer certifications from Huawei, Vertiv, and Stulz. Our NOC team includes certified thermal analysts and CFD specialists.' },



];





