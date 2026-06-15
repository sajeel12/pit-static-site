import { Meter, DataCenter, Dashboard, Warning } from '@carbon/icons-react';

export const PAGE_SECTIONS = [



  { id: 'services', label: 'Services', inNav: false },



  { id: 'assessment', label: 'Assessment', inNav: true },



  { id: 'ai-design', label: 'AI Design', inNav: true },



  { id: 'procurement', label: 'Procurement', inNav: true },



  { id: 'deployment', label: 'Deployment', inNav: true },



  { id: 'managed', label: 'Managed Services', inNav: true },



  { id: 'international', label: 'International Advisory', inNav: true },



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



  { title: 'Out-of-Warranty Infrastructure Support', sector: 'Manufacturing / Textile', org: 'Leading Textile Manufacturer and Exporter', desc: 'A major textile manufacturer faced end-of-warranty risk across its entire server fleet running production-critical systems. Perception IT delivered 24x7 hardware support, local spare parts inventory, proactive maintenance, and automated patching — eliminating unplanned downtime exposure.', outcomes: ['Zero unplanned outages','PKR 750K+ downtime risk avoided','Full fleet under 24/7 SLA','Automated patching implemented'], tags: ['Server Fleet SLA','24/7 Support','Preventive Maintenance'], link: '/projects/manufacturing-infrastructure', image: '/Sections/Cooling page/Images-cooling/Case studies/ibrahim-fibres/Ibrahim Fibres -case study- 1600 × 700 px.webp' },



  { title: 'Hardware Maintenance', sector: 'University / Education', org: 'LUMS', desc: 'Deployed precision cooling units across four data centres, significantly improving PUE and thermal performance.', outcomes: ['PUE significantly improved','N+1 redundancy achieved','8-week deployment timeline'], tags: ['Multi-Site','PUE Optimisation','N+1 Redundancy'], link: '/case-studies/multi-site-precision-cooling', image: '/Sections/Cooling page/Images-cooling/Case studies/LUMS/LUMS-1-1600×700.webp' },



  { title: 'Thermal Runaway Prevention', sector: 'Engineering / Procurement / Construction (EPC)', org: 'Leading Multinational Conglomerate', desc: 'Redesigned airflow management preventing thermal runaway and extending equipment lifespan.', outcomes: ['Hotspots eliminated','Average temperatures reduced','Annual cooling costs reduced'], tags: ['Airflow Redesign','Thermal Mapping','Cost Reduction'], link: '/case-studies/thermal-runaway-prevention', image: '/Sections/Cooling page/Images-cooling/Case studies/descon/DESCON11600×700.webp' },



  { title: 'Monsoon Season Resilience', sector: 'FMCG', org: 'Confectionery & Bakery Manufacturing', desc: 'Implemented humidity control and drainage systems to maintain operations during monsoon season.', outcomes: ['Humidity-related incidents eliminated','Uptime significantly improved','Equipment corrosion reduced'], tags: ['Humidity Control','Drainage Systems','Monsoon Hardening'], link: '/case-studies/monsoon-season-resilience', image: '/Sections/Cooling page/Images-cooling/Case studies/Mayfair/MAYFAIR1:1600×700.webp' },



  { title: 'Legacy Cooling System Modernisation', sector: 'Government / Public Sector', org: 'Government Agency', desc: 'Upgraded 15-year-old cooling infrastructure with modern precision units and smart controls.', outcomes: ['Cooling efficiency significantly improved','Remote monitoring implemented','Maintenance costs reduced'], tags: ['Retrofit','Smart Controls','Efficiency Gain'], link: '/case-studies/legacy-cooling-modernisation', image: '/Sections/Cooling page/Images-cooling/Card hero/Cooling - Procurement.png' },



  { title: 'Edge Site Thermal Management', sector: 'Textile Manufacturing / Fashion Retail', org: 'An elite fashion design house and a world-class textile manufacturer', desc: 'Designed and deployed compact cooling solutions for 12 edge data centres across Pakistan.', outcomes: ['Standardised cooling across all sites','Remote monitoring for all locations','Deployment completed in 6 weeks'], tags: ['Edge Deployment','Standardisation','Remote Monitoring'], link: '/case-studies/edge-thermal-management', image: '/Sections/Cooling page/Images-cooling/Case studies/Bareeze/Bareeze1:1600×700.webp' },



  { title: 'Data Centre Expansion Cooling', sector: 'Cloud / Technology', org: 'Cloud Provider', desc: 'Scaled cooling capacity substantially to support data centre expansion while maintaining efficiency.', outcomes: ['Capacity substantially increased','PUE maintained at target levels','Phased deployment minimising downtime'], tags: ['Capacity Scaling','Phased Deploy','PUE Maintenance'], link: '/case-studies/data-centre-expansion-cooling', image: '/Sections/Cooling page/Images-cooling/not used 3d/perceptionit_noc_bigscreens_v2.png' },



];





export const ECOSYSTEM_ITEMS = [



  { icon: Meter, title: 'Power & UPS', desc: 'Stable, conditioned, redundant power for cooling load.', link: '/infrastructure/data-centre-services/power-ups' },



  { icon: DataCenter, title: 'Rack & Cabinet', desc: 'Airflow containment, blanking panels, and IP54 sealing.', link: '/infrastructure/data-centre-services/rack-cabinet' },



  { icon: Dashboard, title: 'Monitoring', desc: 'Rack-level temperature, humidity, and leak detection.', link: '/services/monitoring' },



  { icon: Warning, title: 'Fire Suppression', desc: 'FM200/clean-agent protection with thermal recovery.', link: '/infrastructure/data-centre-services/fire-suppression' },



];





export const FAQ_ITEMS = [



  { q: 'How long does a thermal assessment take?', a: ['A standard assessment takes 2–3 days on-site, plus 5 business days for report delivery','For multi-site deployments, we parallelise teams to compress the timeline','Rush assessments available for critical thermal events'] },



  { q: 'Can you work with existing cooling equipment?', a: ['Yes — our assessment includes retrofit recommendations for existing infrastructure','We design solutions that maximise reuse while achieving target PUE','Phased upgrades minimise disruption to live environments'] },



  { q: 'What is the typical ROI on precision cooling?', a: ['Most clients see ROI within 18–24 months through reduced energy costs','Deferred capital expenditure on expansion delays costly build-outs','Prevented thermal-related downtime protects revenue and reputation'] },



  { q: 'Do you provide emergency cooling response?', a: ['Enterprise managed services include 24/7 emergency response with 4-hour on-site SLA','Portable cooling units maintained in Karachi, Lahore, and Islamabad for rapid deployment','Temporary cooling can be deployed while permanent repairs are completed'] },



  { q: 'How do you handle monsoon humidity?', a: ['Designs include humidity control systems and drainage redundancy','Monsoon-specific maintenance protocols prevent moisture-related failures','Enterprise tier includes dedicated monsoon standby engineers'] },



  { q: 'What certifications do your engineers hold?', a: ['Deployment engineers hold manufacturer certifications from Huawei, Vertiv, and Stulz','NOC team includes certified thermal analysts and CFD specialists','All designs follow ASHRAE standards and local building codes'] },



];





