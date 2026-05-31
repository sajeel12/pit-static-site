import ProjectCardGrid from '@/components/ProjectCardGrid';
import { POWER_CASES } from '../data';

export default function ResultsSection() {
  return (
    <section id="results" className="py-16 md:py-24 bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-10">
          <p className="carbon-label-01 text-[#0f62fe] uppercase mb-3">Case Studies</p>
          <h2 className="carbon-fluid-heading-05 text-[#0F172A] mb-4">
            Client Outcomes
          </h2>
          <p className="carbon-body-02 text-gray-500 max-w-2xl">
            Real results from Pakistani data centres, industrial facilities, and edge deployments.
            Every project includes load profiling, grid-sync testing, and SLA-backed commissioning.
          </p>
        </div>

        <ProjectCardGrid projects={POWER_CASES} />
      </div>
    </section>
  );
}
