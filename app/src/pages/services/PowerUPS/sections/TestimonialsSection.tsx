import TestimonialCarousel from '@/components/TestimonialCarousel';
import type { TestimonialData } from '@/components/TestimonialCarousel';

const testimonials: TestimonialData[] = [
  {
    quote: "Before Perception IT, we lost a server rack every monsoon season to voltage spikes. Their three-phase UPS with AVR and generator sync eliminated outages entirely. The NOC dashboard gives us visibility we never had.",
    author: 'Head of IT Infrastructure',
    org: 'Leading Textile Manufacturer',
    bg: 'from-[#0043ce] to-[#002d9c]',
    project: {
      headline: 'Voltage Spike Elimination with Three-Phase UPS',
      desc: '99.95% uptime achieved after deploying online double-conversion UPS with generator sync',
      link: '/projects/manufacturing-infrastructure',
    },
  },
  {
    quote: "We needed to upgrade our data centre power without downtime. Perception IT designed a modular UPS architecture that let us scale incrementally. Zero downtime during cutover, and our PUE dropped 12%.",
    author: 'Chief Technology Officer',
    org: 'Financial Services Firm',
    bg: 'from-[#0f62fe] to-[#0353e9]',
    project: {
      headline: 'Modular UPS Expansion with Zero Downtime',
      desc: 'Capacity scaled from 200kVA to 600kVA in phases with N+1 redundancy maintained throughout',
      link: '/case-studies/multi-site-precision-cooling',
    },
  },
  {
    quote: "The battery health forecasting is a game-changer. We used to replace batteries on a fixed schedule—wasting money on good cells and risking failures on marginal ones. Now we replace precisely when needed.",
    author: 'Director of Operations',
    org: 'Multi-Site Retail Chain',
    bg: 'from-[#002d9c] to-[#0043ce]',
    project: {
      headline: 'Li-ion Battery Upgrade with AI Monitoring',
      desc: 'Battery life extended from 3 to 12+ years with 30% floor space reduction',
      link: '/case-studies/edge-thermal-management',
    },
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-10">
          <p className="carbon-label-01 text-[#0f62fe] uppercase mb-3">Testimonials</p>
          <h2 className="carbon-fluid-heading-05 text-[#0F172A] mb-4">
            Client feedback
          </h2>
          <p className="carbon-body-02 text-gray-500 max-w-2xl">
            Direct feedback from infrastructure leaders who have seen measurable uptime and continuity outcomes.
          </p>
        </div>

        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}
