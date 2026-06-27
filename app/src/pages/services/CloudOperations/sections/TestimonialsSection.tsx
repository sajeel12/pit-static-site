import TestimonialCarousel from '@/components/TestimonialCarousel';
import { TESTIMONIALS } from '../data';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-8 md:mb-10">
          <span className="carbon-label-02 text-[#0f62fe] uppercase tracking-wider block mb-3">
            Featured Testimonials
          </span>
          <h2 className="carbon-fluid-heading-05 text-[#161616]">
            Trusted by Leaders in Telecom and Agri-Tech
          </h2>
        </div>
        <TestimonialCarousel testimonials={TESTIMONIALS} compact />
      </div>
    </section>
  );
}
