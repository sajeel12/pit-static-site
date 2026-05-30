import ProjectCardGrid from '@/components/ProjectCardGrid';
import type { ProjectCardData } from '@/components/ProjectCard';

const cases: ProjectCardData[] = [
  {
    title: 'Out-of-Warranty Infrastructure Support',
    sector: 'Manufacturing / Textile',
    org: 'Leading Textile Manufacturer and Exporter',
    desc: 'A major textile manufacturer faced end-of-warranty risk across its entire server fleet running production-critical systems. Perception IT delivered 24x7 hardware support, local spare parts inventory, proactive maintenance, and automated patching — eliminating unplanned downtime exposure.',
    outcomes: [
      'Zero unplanned outages',
      'PKR 750K+ downtime risk avoided',
      'Full fleet under 24/7 SLA',
      'Automated patching implemented',
    ],
    tags: ['Server Fleet SLA', '24/7 Support', 'Preventive Maintenance'],
    link: '/projects/manufacturing-infrastructure',
    image: '/Sections/data centre cost optimisation/images/ibrahim-fibres.webp',
  },
  {
    title: 'Multi-Site Precision Cooling Deployment',
    sector: 'Banking / Financial Services',
    org: 'Leading Pakistani Bank',
    desc: 'Deployed precision cooling units across four data centres, replacing legacy DX systems with VFD-controlled, free-cooling-integrated units.',
    outcomes: [
      'PUE reduced from 1.8 to 1.35',
      '40% reduction in annual cooling energy bill',
      'N+1 redundancy achieved across all sites',
      '8-week deployment timeline',
    ],
    tags: ['Multi-Site', 'PUE Optimisation', 'N+1 Redundancy'],
    link: '/case-studies/multi-site-precision-cooling',
    image: '/Sections/data centre cost optimisation/images/lums.webp',
  },
  {
    title: 'Thermal Runaway Prevention',
    sector: 'Engineering / Procurement / Construction (EPC)',
    org: 'Leading Multinational Conglomerate',
    desc: 'Redesigned airflow management preventing thermal runaway and extending equipment lifespan.',
    outcomes: [
      'Hotspots eliminated',
      '3°C average temperature reduction',
      'Annual cooling cost savings of 25%',
    ],
    tags: ['Airflow Redesign', 'Thermal Mapping', 'Cost Reduction'],
    link: '/case-studies/thermal-runaway-prevention',
    image: '/Sections/data centre cost optimisation/images/descon.webp',
  },
  {
    title: 'Monsoon Season Resilience',
    sector: 'FMCG',
    org: 'Confectionery & Bakery Manufacturing',
    desc: 'Implemented humidity control and drainage systems to maintain operations during monsoon season.',
    outcomes: [
      'Zero humidity-related outages',
      '99.9% uptime maintained',
      'Reduced equipment corrosion by 40%',
    ],
    tags: ['Humidity Control', 'Drainage Systems', 'Monsoon Hardening'],
    link: '/case-studies/monsoon-season-resilience',
    image: '/Sections/data centre cost optimisation/images/mayfair.webp',
  },
];

export default function CaseStudiesSection() {
  return (
    <section id="cases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-10">
          <p className="carbon-label-01 text-[#0f62fe] uppercase mb-3">Case Studies</p>
          <h2 className="carbon-fluid-heading-05 text-[#0F172A] mb-4">
            Cost reduction in practice
          </h2>
          <p className="carbon-body-02 text-gray-500 max-w-2xl">
            See how organisations reduced operational expenditure, deferred capital spend, and hardened continuity through both ecosystem integration and individual service deployments.
          </p>
        </div>

        <ProjectCardGrid projects={cases} />
      </div>
    </section>
  );
}
