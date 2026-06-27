import TestimonialCarousel from '@/components/TestimonialCarousel';
import { TESTIMONIALS } from '../data';

export default function ResultsSection() {
  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-8">
          <p className="carbon-label-01 text-[#0f62fe] uppercase mb-3">Results</p>
          <h2 className="carbon-fluid-heading-05 text-[#0F172A] mb-4">
            Migrations That Convert Into Long-Term Partnerships
          </h2>
          <p className="carbon-body-02 text-gray-500 max-w-2xl">
            Real outcomes from data centre relocation and consolidation projects across Pakistan.
          </p>
        </div>

        <TestimonialCarousel testimonials={TESTIMONIALS} />
      </div>
    </section>
  );
}
