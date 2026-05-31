import TestimonialCarousel from '@/components/TestimonialCarousel';
import type { TestimonialData } from '@/components/TestimonialCarousel';

const testimonials: TestimonialData[] = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
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
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
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
