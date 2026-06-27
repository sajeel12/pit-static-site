import { ArrowRight, Server } from 'lucide-react';
import ProjectCardGrid from '@/components/ProjectCardGrid';
import { CASE_STUDY, RELATED_SERVICES, PROJECTS } from '../data';

export default function CaseStudySection() {
  return (
    <section id="case-study" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
          <div className="relative rounded-xl overflow-hidden bg-[#0a1628] h-64 md:h-80 flex items-center justify-center">
            <div className="text-center p-8 relative z-10">
              <div className="w-20 h-20 rounded-2xl bg-[#0f62fe]/20 flex items-center justify-center mx-auto mb-4">
                <Server className="w-10 h-10 text-[#78a9ff]" />
              </div>
              <p className="carbon-label-02 text-[#78a9ff] uppercase tracking-wider">Telecommunications</p>
              <p className="carbon-body-01 text-slate-400 mt-1">IoT &amp; Streaming Analytics</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/80 via-[45%] to-transparent" />
          </div>

          <div>
            <span className="carbon-label-02 text-[#0f62fe] uppercase tracking-wider block mb-3">
              Featured Case Study
            </span>
            <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
              {CASE_STUDY.headline}
            </h2>
            <p className="carbon-body-02 text-[#525252] text-lg mb-6">
              {CASE_STUDY.description}
            </p>
            <a
              href={CASE_STUDY.link}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f62fe] text-white carbon-body-02 hover:bg-[#0353e9] transition-colors rounded-lg"
            >
              Read Case Study
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-12 border-t border-[#e0e0e0]">
          <p className="carbon-label-02 text-gray-500 uppercase mb-6">Project Outcomes</p>
          <ProjectCardGrid projects={PROJECTS} />
        </div>

        <div className="pt-10">
          <h3 className="carbon-heading-02 text-[#161616] mb-6">
            Services You Might Be Interested In
          </h3>
          <div className="flex flex-wrap gap-3 mb-6">
            {RELATED_SERVICES.map((service) => (
              <a
                key={service.label}
                href={service.href}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#f4f4f4] text-[#161616] carbon-body-02 rounded-lg hover:bg-[#0f62fe] hover:text-white transition-colors"
              >
                {service.label}
                <ArrowRight className="w-4 h-4" />
              </a>
            ))}
          </div>
          <a
            href="/#/projects/devops-cloud"
            className="inline-flex items-center gap-2 carbon-label-02 text-[#0f62fe] hover:text-[#0353e9] transition-colors"
          >
            Explore DevOps and Cloud Projects
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
