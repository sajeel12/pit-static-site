import TestimonialCarousel from '@/components/TestimonialCarousel';
import ProjectCard from '@/components/ProjectCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PROJECTS, TESTIMONIALS } from '../data';

export default function ResultsSection() {
  return (
    <section id="results" className="py-20 bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-8">
          <p className="carbon-label-01 text-[#0f62fe] uppercase mb-3">Results</p>
          <h2 className="carbon-fluid-heading-05 text-[#0F172A] mb-4">
            Monitoring That Prevents Downtime
          </h2>
          <p className="carbon-body-02 text-gray-500 max-w-2xl">
            Real outcomes from server room and data centre monitoring deployments across Pakistan and the GCC.
          </p>
        </div>

        <div className="mb-12">
          <TestimonialCarousel testimonials={TESTIMONIALS} />
        </div>

        <div className="mb-8">
          <p className="carbon-label-02 text-gray-500 uppercase mb-6">Project Outcomes</p>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {PROJECTS.map((project, index) => (
                <CarouselItem
                  key={project.title}
                  className="pl-4 basis-full md:basis-1/2"
                >
                  <ProjectCard project={project} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 left-0 top-0 size-10 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 border-0 disabled:opacity-40" />
              <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 left-0 top-0 size-10 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 border-0 disabled:opacity-40" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
