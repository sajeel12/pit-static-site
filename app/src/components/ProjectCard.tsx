import { useState } from 'react';
import { ArrowRight, ChevronUp, ChevronDown, Settings } from 'lucide-react';

export interface ProjectCardData {
  title: string;
  sector: string;
  org: string;
  desc: string;
  outcomes: string[];
  tags: string[];
  link?: string;
  image?: string;
}

interface ProjectCardProps {
  project: ProjectCardData;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className="group rounded-xl overflow-hidden bg-white transition-all duration-500 border border-gray-200 hover:border-[#0f62fe] hover:shadow-lg flex flex-col"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative h-48 sm:h-40 overflow-hidden bg-gray-100">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-[#edf5ff] to-[#f3f0ff]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Settings className="w-10 h-10 text-[#0f62fe]/15" />
            </div>
          </>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-0.5 bg-[#0f62fe]/5 text-[#0f62fe] carbon-label-01 rounded">
            {project.sector}
          </span>
        </div>

        <h3 className="carbon-heading-02 text-gray-900 mb-2 leading-snug">
          {project.title}
        </h3>
        <p className="carbon-label-02 text-gray-400 mb-3">{project.org}</p>
        <p className="carbon-body-02 text-gray-500 mb-5 leading-relaxed">
          {project.desc}
        </p>

        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-gray-50 text-gray-500 carbon-label-01 rounded-full border border-gray-100"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex-1" />

        <div className="flex items-center gap-5 pt-5 border-t border-gray-100">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md carbon-body-02 text-[#0f62fe] hover:bg-[#0f62fe]/10 transition-colors"
          >
            {expanded ? 'Hide outcomes' : 'Show outcomes'}
            {expanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
          {project.link && (
            <a
              href={project.link}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md carbon-body-02 text-[#0f62fe] hover:bg-[#0f62fe]/10 transition-colors"
            >
              Read case study <ArrowRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {expanded && (
        <div className="px-6 pb-6">
          <div className="pt-4 border-t border-[#e0e0e0]">
            <ul className="space-y-3">
              {project.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-start gap-3 carbon-body-02 text-gray-600"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0 mt-2" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </article>
  );
}
