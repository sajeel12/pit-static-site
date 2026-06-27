import TestimonialCarousel from '@/components/TestimonialCarousel';
import type { TestimonialData } from '@/components/TestimonialCarousel';

const testimonials: TestimonialData[] = [
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
      link: '/infrastructure/data-centre-services/cooling',
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
      link: '/infrastructure/data-centre-services/cooling',
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
      link: '/infrastructure/data-centre-services/cooling',
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
      link: '/infrastructure/data-centre-services/cooling',
    },
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-10">
          <p className="carbon-label-01 text-[#0f62fe] uppercase mb-3">Testimonials</p>
          <h2 className="carbon-fluid-heading-05 text-[#0F172A] mb-4">
            Client feedback
          </h2>
          <p className="carbon-body-02 text-gray-500 max-w-2xl">
            Direct feedback from infrastructure leaders who have seen measurable cost and continuity outcomes.
          </p>
        </div>

        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}
