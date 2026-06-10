export const TESTIMONIALS = [
  {
    quote: "Perception IT ran a full site survey of our server room, identified airflow restrictions and cable congestion, and produced a revised rack layout with clear capacity planning. The implementation was completed over a weekend with no unplanned downtime, and cooling efficiency improved measurably.",
    author: 'Head of IT Infrastructure',
    org: 'Leading Pakistani Bank',
    bg: 'from-[#0043ce] to-[#002d9c]',
    project: {
      headline: 'Rack Reconfiguration with Thermal Modelling',
      desc: '40% floor space reclaimed and 2x capacity increase within the same footprint',
      link: '/#/services/rack-cabinets',
    },
  },
  {
    quote: "We needed seismic-rated cabinets for our factory floor in Faisalabad. Perception IT supplied Zone 4 compliant enclosures with integrated vibration damping and on-site installation. Every cabinet passed stress testing before go-live.",
    author: 'Director of Operations',
    org: 'Multi-Site Manufacturing Group',
    bg: 'from-[#0f62fe] to-[#0353e9]',
    project: {
      headline: 'Seismic-Rated Cabinet Deployment',
      desc: 'Zone 4 compliant racks with vibration damping for industrial environments',
      link: '/#/services/rack-cabinets',
    },
  },
  {
    quote: "The co-location apartments Perception IT designed inside our cabinets allowed us to onboard three enterprise clients in one month instead of three. The separate power metering and access control per compartment was exactly what we needed.",
    author: 'Chief Technology Officer',
    org: 'Karachi Data Centre Operator',
    bg: 'from-[#002d9c] to-[#0043ce]',
    project: {
      headline: 'Co-Location Cabinet Design',
      desc: 'Multi-tenant enclosures with separate metering and access per apartment',
      link: '/#/services/rack-cabinets',
    },
  },
];

export const PROJECTS = [
  {
    title: 'Rack Reconfiguration for Financial Services Data Centre',
    sector: 'Banking / Financial Services',
    org: 'Leading Pakistani Bank',
    desc: 'A major financial institution had outgrown its original server room. Cabinets were scattered, cable management was non-existent, and hot spots were causing thermal shutdowns. The bank needed to double capacity without expanding floor space.',
    outcomes: [
      'Conducted thermal CFD modelling of existing room layout',
      'Designed hot-aisle/cold-aisle with joined cabinet rows',
      'Specified 42U cabinets with integrated vertical cable management',
      'Installed environmental sensors per cabinet for NOC monitoring',
      '40% floor space reclaimed, 18% cooling cost reduction',
      '2x capacity increase within same footprint',
    ],
    tags: ['Rack Design', 'Thermal Modelling', 'Cable Management'],
    link: '/#/projects',
  },
  {
    title: 'Seismic-Rated Cabinet Deployment for Manufacturing',
    sector: 'Manufacturing / Industrial',
    org: 'Textile Manufacturer and Exporter',
    desc: 'A textile manufacturer in Faisalabad required industrial-grade server cabinets for a new Industry 4.0 deployment. The factory floor had vibration from heavy machinery and dust ingress risks. Standard office cabinets would not survive.',
    outcomes: [
      'Supplied Zone 4 seismic-rated enclosures with vibration damping',
      'IP54 dust-proof rating achieved with sealed gaskets',
      'Integrated cooling ducting connected to existing HVAC',
      'Equipment failures reduced by 78% post-deployment',
      'All cabinets load-tested and stress-validated on-site',
    ],
    tags: ['Seismic Cabinets', 'Industrial Grade', 'IP54 Rated'],
    link: '/#/projects',
  },
];
