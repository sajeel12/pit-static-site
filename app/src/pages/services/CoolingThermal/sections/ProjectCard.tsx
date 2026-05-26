import { useState } from 'react';
import ArrowRight from '@carbon/icons-react/es/ArrowRight';
import Settings from '@carbon/icons-react/es/Settings';
import ChevronUp from '@carbon/icons-react/es/ChevronUp';
import ChevronDown from '@carbon/icons-react/es/ChevronDown';
import styles from '../CoolingThermal.module.css';
import { PROJECTS } from '../data';


export default function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {



  const [expanded, setExpanded] = useState(false);







  return (



    <article className={`${styles.projectCard} group rounded-xl overflow-hidden bg-white transition-all duration-500 border border-[#e0e0e0] hover:border-[#00d4ff] hover:shadow-lg`} style={{ animationDelay: `${index * 100}ms` }}>



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



              <Settings className="w-10 h-10 text-[#00d4ff]/15" />



            </div>



          </>



        )}



      </div>



      <div className="p-6">



        <div className="flex items-center gap-2 mb-2">



          <span className="px-2 py-0.5 bg-[#00d4ff]/5 text-[#00d4ff] carbon-label-01 rounded">{project.sector}</span>



        </div>



        <h3 className="carbon-fluid-heading-03 text-gray-900 mb-2 leading-snug">{project.title}</h3>



        <p className="carbon-label-02 text-gray-400 mb-3">{project.org}</p>



        <p className="carbon-body-02 text-gray-500 mb-5 leading-relaxed">{project.desc}</p>



        {project.tags && (



          <div className="flex flex-wrap gap-2 mb-5">



            {project.tags.map((tag) => (



              <span key={tag} className="px-2.5 py-1 bg-gray-50 text-gray-500 carbon-label-01 rounded-full border border-gray-100">{tag}</span>



            ))}



          </div>



        )}



        <div className="flex items-center gap-5">



          <button onClick={() => setExpanded(!expanded)} className="inline-flex items-center gap-1.5 carbon-body-02 text-[#00d4ff] hover:underline">



            {expanded ? 'Hide outcomes' : 'Show outcomes'} {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}



          </button>



          {project.caseStudy && (



            <a href={project.caseStudy} className="inline-flex items-center gap-1 carbon-body-02 text-gray-400 hover:text-[#00d4ff] transition-colors">



              Read case study <ArrowRight className="w-4 h-4" />



            </a>



          )}



        </div>



      </div>



      {expanded && (



        <div className={`${styles.projectCard__outcomes} px-6 pb-6`}>



          <div className="pt-4 border-t border-[#e0e0e0]">



            <ul className="space-y-3">



              {project.outcomes.map((outcome) => (



                <li key={outcome} className="flex items-start gap-3 carbon-body-02 text-gray-600"><span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0 mt-2" /><span>{outcome}</span></li>



              ))}



            </ul>



          </div>



        </div>



      )}



    </article>



  );



};

