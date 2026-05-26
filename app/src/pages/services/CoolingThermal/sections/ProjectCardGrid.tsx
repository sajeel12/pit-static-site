import ProjectCard from './ProjectCard';
import { useState } from 'react';
import ChevronLeft from '@carbon/icons-react/es/ChevronLeft';
import ChevronRight from '@carbon/icons-react/es/ChevronRight';
import { PROJECTS } from '../data';


export default function ProjectCardGrid() {



  const [page, setPage] = useState(0);



  const perPage = 3;



  const totalPages = Math.ceil(PROJECTS.length / perPage);







  return (



    <div>



      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">



        {PROJECTS.slice(page * perPage, (page + 1) * perPage).map((project, i) => (



          <ProjectCard key={project.title} project={project} index={i} />



        ))}



      </div>



      {totalPages > 1 && (



        <div className="flex justify-center gap-2 mt-8">



          <button onClick={() => setPage(Math.max(0, page - 1))} disabled={page === 0} className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all ${page === 0 ? 'opacity-40 cursor-not-allowed' : ''}`}><ChevronLeft className="w-5 h-5" /></button>



          {Array.from({ length: totalPages }, (_, i) => (



            <button key={i} onClick={() => setPage(i)} className={`w-10 h-10 rounded-lg flex items-center justify-center carbon-body-02 transition-all ${page === i ? 'bg-[#00d4ff] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{i + 1}</button>



          ))}



          <button onClick={() => setPage(Math.min(totalPages - 1, page + 1))} disabled={page === totalPages - 1} className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all ${page === totalPages - 1 ? 'opacity-40 cursor-not-allowed' : ''}`}><ChevronRight className="w-5 h-5" /></button>



        </div>



      )}



    </div>



  );



};

