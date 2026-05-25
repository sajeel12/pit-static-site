import TestimonialCarousel from './TestimonialCarousel';
import ProjectCardGrid from './ProjectCardGrid';


export default function ResultsSection() {



  return (



    <section id="results" className="py-20 bg-white">



      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">



        <div className="mb-8 carbon-font">



          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#24a148]/8 border border-[#24a148]/15 rounded-full mb-5">



            <span className="w-2 h-2 rounded-full bg-[#24a148]" />



            <span className="carbon-label-02 text-[#24a148] uppercase tracking-wider">Results</span>



          </div>



          <h2 className="carbon-fluid-heading-04 text-[#0F172A] mb-3">Trusted Across Infrastructure Projects</h2>



          <p className="carbon-body-02 text-gray-500 max-w-2xl">Real outcomes from infrastructure engagements across Pakistan.</p>



        </div>



        <div className="mb-12">



          <TestimonialCarousel />



        </div>



        <div className="mb-8">



          <h3 className="carbon-fluid-heading-03 text-[#0F172A] mb-6">Project Outcomes</h3>



          <ProjectCardGrid />



        </div>



      </div>



    </section>



  );



};

