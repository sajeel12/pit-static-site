import TestimonialCarousel from './TestimonialCarousel';
import ProjectCardGrid from './ProjectCardGrid';


export default function ResultsSection() {



  return (



    <section id="results" className="py-20 bg-gray-50">



      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">



        <div className="mb-8 carbon-font">



          <p className="carbon-label-01 text-[#0f62fe] uppercase mb-3">Results</p>



          <h2 className="carbon-fluid-heading-05 text-[#0F172A] mb-4">Trusted Across Infrastructure Projects</h2>



          <p className="carbon-body-02 text-gray-500 max-w-2xl">Real outcomes from infrastructure engagements across Pakistan.</p>



        </div>



        <div className="mb-12">



          <TestimonialCarousel />



        </div>



        <div className="mb-8">



          <p className="carbon-label-02 text-gray-500 uppercase mb-6">Project Outcomes</p>



          <ProjectCardGrid />



        </div>



      </div>



    </section>



  );



};

