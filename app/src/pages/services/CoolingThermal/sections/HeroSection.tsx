import {
  ArrowRight,
} from '@carbon/icons-react';


export default function HeroSection() {



  return (<section id="overview" className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] overflow-hidden pt-20 carbon-font text-white">



    <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(100,116,139,0.10), transparent 35%), radial-gradient(circle at left, rgba(71,85,105,0.06), transparent 30%)' }} />



    <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-6 pb-20 lg:pb-24">
        <nav aria-label="Breadcrumb" className="mb-6">



        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400">



          <li><a href="/#/" className="hover:text-[#00d4ff] transition-colors">Home</a></li>



          <li className="text-slate-600">/</li>



          <li><a href="/#/services/infrastructure" className="hover:text-[#00d4ff] transition-colors">Infrastructure</a></li>



          <li className="text-slate-600">/</li>



          <li><a href="/#/services/datacenter2" className="hover:text-[#00d4ff] transition-colors">Data Centre</a></li>



          <li className="text-slate-600">/</li>



          <li className="text-slate-200 font-medium" aria-current="page">Cooling</li>



        </ol>



      </nav>



      <div className="grid gap-10 items-center">



        <div className="relative max-w-3xl">



          <div className="absolute -left-16 top-10 w-72 h-72 rounded-full bg-[radial-gradient(circle,_rgba(100,116,139,0.10),transparent_55%)] blur-3xl pointer-events-none" />



          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/15 rounded-full mb-6">



            <span className="w-2 h-2 bg-[#00ff88] rounded-full shadow-[0_0_8px_rgba(0,255,136,0.8)]" />



            <span className="carbon-label-02 text-slate-100">Engineered for Pakistan&apos;s 45°C summers</span>



          </div>



          <div className="relative mb-6">



            <div className="absolute inset-x-0 top-0 h-36 rounded-full bg-[radial-gradient(circle,_rgba(71,85,105,0.10),transparent_55%)] blur-3xl opacity-80 pointer-events-none" />



            <h1 className="relative carbon-fluid-display-03 text-white">



              <span className="block bg-gradient-to-r from-[#00d4ff] to-[#ff00ff] bg-clip-text text-transparent">Data Centre Cooling</span>



              <span className="block text-slate-200">Built for Pakistan&apos;s Climate</span>



            </h1>



          </div>



          <p className="carbon-fluid-heading-03 font-medium text-slate-100 mb-5">



            One partner, end-to-end thermal solution.



          </p>



          <p className="carbon-body-02 text-slate-400 mb-8">



            We engineer for Pakistan&apos;s operational extremes, providing site-specific thermal validation at every step of the process.



          </p>



          {/* 4-Step Pipeline */}



          <div className="flex flex-wrap items-center gap-x-1 gap-y-2">



            {[



              { num: '01', label: 'Assessment' },



              { num: '02', label: 'Procurement' },



              { num: '03', label: 'Deployment' },



              { num: '04', label: '24/7 Monitoring' },



            ].map((step, i) => (



              <div key={step.label} className="flex items-center">



                <div className="flex items-center gap-2">



                  <span className="w-5 h-5 rounded-full bg-[#00d4ff]/20 flex items-center justify-center text-[10px] font-bold text-[#78a9ff]">{step.num}</span>



                  <span className="carbon-label-02 text-slate-300">{step.label}</span>



                </div>



                {i < 3 && (



                  <ArrowRight className="w-3.5 h-3.5 text-slate-600 mx-1.5" />



                )}



              </div>



            ))}



          </div>



          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-10 lg:mt-12">



            <a href="mailto:contact@perception-it.com?subject=Free%20Cooling%20Consultation%20Request" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 h-12 sm:h-14 bg-gradient-to-r from-[#0f62fe] to-[#4589ff] text-white carbon-body-02 hover:from-[#0353e9] hover:to-[#0f62fe] shadow-lg shadow-blue-500/25 hover:shadow-[0_0_30px_rgba(15,98,254,0.5)] rounded-lg">



              Speak to an Engineer



            </a>



            <button onClick={() => { const el = document.getElementById('international'); if (el) { const headerOffset = 80; const pos = el.getBoundingClientRect().top + window.scrollY; window.scrollTo({ top: pos - headerOffset, behavior: 'smooth' }); } }} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 h-12 sm:h-14 text-slate-300 carbon-body-02 hover:text-white transition-colors cursor-pointer">



              International Services



              <ArrowRight className="w-4 h-4" />



            </button>



          </div>



        </div>







      </div>



    </div>



    {/* Stack Layer Bar | Cooling: steel-full */}



    <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, #94a3b8 0%, #475569 100%)' }} />



  </section>



  );
}