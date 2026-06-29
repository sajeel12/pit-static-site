import { useState } from 'react';
import Warning from '@carbon/icons-react/es/Warning';
import ChevronUp from '@carbon/icons-react/es/ChevronUp';
import ChevronDown from '@carbon/icons-react/es/ChevronDown';
import DataCenter from '@carbon/icons-react/es/DataCenter';
import Windy from '@carbon/icons-react/es/Windy';
import Temperature from '@carbon/icons-react/es/Temperature';
import Download from '@carbon/icons-react/es/Download';


export default function ProcurementSection() {



  const [isOpen, setIsOpen] = useState(false);



  const [datasheetOpen, setDatasheetOpen] = useState(false);







  const cards = [



    {



      icon: Temperature,



      tag: 'Entry',



      title: 'Server Room AC Units',



      desc: 'For edge sites & small server rooms up to 50kW.',



      features: ['Wall-mounted, ceiling-suspended, and portable units','Tier 1 cooling hardware designed for edge sites up to 50kW heat load','Split-system and ducted configurations'],



      color: '#6f6f6f',



    },



    {



      icon: Windy,



      tag: 'Professional',



      title: 'Precision Cooling (CRAC/CRAH)',



      desc: 'For data centres requiring ±1°C control.',



      features: ['In-row and perimeter CRAC/CRAH units','±1°C temperature control for mission-critical systems','N+1 and 2N redundancy configurations'],



      color: '#1565c0',



    },



    {



      icon: DataCenter,



      tag: 'Enterprise',



      title: 'Large-Scale Facility Cooling',



      desc: 'For facilities >500kW cooling load.',



      features: ['Centralised chiller plants and cooling towers','Free-cooling and adiabatic cooling','Custom designs for facilities >500kW'],



      color: '#6929c4',



    },



  ];







  return (



    <section id="procurement" className="py-20 bg-[#FAFAFA]">



      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">







        <div className="relative rounded-2xl overflow-hidden mb-8 md:mb-12 min-h-[320px] lg:min-h-[380px]">



          <img src="/Sections/Cooling page/Images-cooling/Card hero/Cooling - Procurement.png" alt="Cooling hardware procurement" className="w-full h-full object-cover absolute inset-0" loading="lazy" />



          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/60 to-transparent" />



          <div className="relative z-10 pt-10 lg:pt-12 pb-10 px-8 lg:px-12 max-w-lg md:max-w-2xl lg:max-w-3xl">



            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full mb-4 md:mb-6">
              <span className="w-5 h-5 rounded-full bg-[#0f62fe] flex items-center justify-center text-[10px] font-bold text-white">02</span>
              <span className="carbon-label-02 text-white/90 uppercase tracking-wider">Procurement</span>
            </div>



            <h3 className="carbon-fluid-heading-05 text-white mb-4 leading-[1.4]">Cooling Hardware from Tier 1 manufacturers.</h3>



            <ul className="space-y-1 carbon-body-02 text-white/75">



              <li className="flex items-start gap-2">



                <span className="text-white/50 flex-shrink-0 mt-1.5 text-[10px]">●</span>



                <span>Sourced directly from Huawei, Lenovo, and HP.</span>



              </li>



              <li className="flex items-start gap-2">



                <span className="text-white/50 flex-shrink-0 mt-1.5 text-[10px]">●</span>



                <span>Right-sized for Pakistan&apos;s 45°C heat, monsoons, and dust.</span>



              </li>



            </ul>



          </div>



        </div>







        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 md:mb-12">



          {cards.map((card) => (



            <div key={card.title} className="group relative bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">



              <div className="h-1.5 w-full rounded-t-xl bg-gradient-to-r from-gray-200 to-gray-100" />



              <div className="p-6 sm:p-8">
                <div className="flex justify-end mb-4">
                  <span className="inline-flex items-center px-2 py-0.5 text-white carbon-label-01 uppercase tracking-wider rounded-full border border-white/20" style={{ backgroundColor: card.color === '#6f6f6f' ? '#9ca3af' : card.color === '#1565c0' ? '#4f8eff' : '#a855f7' }}>{card.tag}</span>
                </div>

                <div className="mb-5">
                  <p className="carbon-heading-02 text-gray-900 leading-tight">{card.title}</p>
                  <p className="carbon-body-02 text-gray-600 mt-2">{card.desc}</p>
                </div>

                <div className="pt-5 border-t border-gray-100">
                  <p className="carbon-label-02 text-gray-500 uppercase mb-3">Solutions</p>
                  <ul className="space-y-3">
                    {card.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 carbon-body-02 text-gray-600">
                        <span className="w-1 h-1 rounded-full bg-gray-400 flex-shrink-0 mt-1" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>



            </div>



          ))}



        </div>







        <div className="p-8 rounded-xl relative overflow-hidden mb-6 bg-white border border-gray-200">



          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-6 relative">



            <div className="flex-1 min-w-[300px] text-center sm:text-left">



              <h3 className="carbon-heading-02 text-gray-900 mb-2">Need help choosing hardware?</h3>



              <p className="carbon-body-02 text-gray-600">We procure from Tier 1 manufacturers with free site survey before order placement.</p>



            </div>



            <div className="flex gap-3 flex-wrap justify-center sm:justify-start">



              <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center gap-2 px-5 py-3 bg-gray-50 border border-gray-400 text-gray-800 carbon-body-02 font-medium hover:border-[#0f62fe] hover:text-[#0f62fe] hover:bg-[#0f62fe]/5 transition-colors rounded-lg">



                {isOpen ? 'Close' : 'Compare Hardware'} {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}



              </button>



              <a href="mailto:info@perception-it.com?subject=Hardware%20Consultation%20Request" className="inline-flex items-center gap-2 px-5 py-3 bg-[#0f62fe] text-white carbon-body-02 hover:bg-[#0353e9] hover:shadow-[0_0_20px_rgba(15,98,254,0.6)] transition-colors rounded-lg">Request Technical Consultation</a>



            </div>



          </div>



        </div>







        {isOpen && (



          <div className="space-y-4 mb-6 animate-fade-in">



            <div className="grid md:grid-cols-3 gap-4">



              <div className="p-6 bg-white rounded-xl border border-[#e0e0e0]">



                <p className="carbon-label-02 text-[#6f6f6f] uppercase mb-4">Room AC</p>



                <ul className="space-y-3">



                  {[{l:'Best for',v:'Edge sites, small rooms, offices'},{l:'Capacity',v:'Up to 50kW per unit'},{l:'Precision',v:'±2–3°C'},{l:'Lead time',v:'2–4 weeks'}].map((item) => (



                    <li key={item.l} className="flex items-start gap-2 carbon-body-02 text-gray-600"><span><span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-900 rounded carbon-badge mr-1">{item.l}</span>{item.v}</span></li>



                  ))}



                </ul>



              </div>



              <div className="p-6 bg-white rounded-xl border border-[#e0e0e0]">



                <p className="carbon-label-02 uppercase mb-4 text-[#1565c0]">Precision (CRAC/CRAH)</p>



                <ul className="space-y-3">



                  {[{l:'Best for',v:'Data centres, high-density racks'},{l:'Capacity',v:'50kW – 500kW+ per unit'},{l:'Precision',v:'±1°C, ±5% RH'},{l:'Lead time',v:'4–8 weeks'}].map((item) => (



                    <li key={item.l} className="flex items-start gap-2 carbon-body-02 text-gray-600"><span><span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-900 rounded carbon-badge mr-1">{item.l}</span>{item.v}</span></li>



                  ))}



                </ul>



              </div>



              <div className="p-6 bg-white rounded-xl border border-[#e0e0e0]">



                <p className="carbon-label-02 text-[#6929c4] uppercase mb-4">Facility Scale</p>



                <ul className="space-y-3">



                  {[{l:'Best for',v:'Large facilities, hyperscale'},{l:'Capacity',v:'500kW – 10MW+'},{l:'Precision',v:'±2°C at room level'},{l:'Lead time',v:'8–16 weeks'}].map((item) => (



                    <li key={item.l} className="flex items-start gap-2 carbon-body-02 text-gray-600"><span><span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-900 rounded carbon-badge mr-1">{item.l}</span>{item.v}</span></li>



                  ))}



                </ul>



              </div>



            </div>



          </div>



        )}







        {/* Partner Logos */}



        <div className="mb-8 md:mb-12">



          <p className="carbon-label-02 uppercase tracking-[0.16px] text-gray-500 mb-4">Certified Supply Chain</p>



          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 rounded-xl overflow-hidden">



            {[



              { name: 'Huawei', src: '/logos/partners/Partner-Huawei-Logo.svg' },



              { name: 'Lenovo', src: '/logos/partners/Partner-Lenovo-Logo.svg' },



              { name: 'Dell', src: '/logos/partners/DELL LOGO/DELL LOGO 1 .webp' },



              { name: 'HP', src: '/logos/partners/HPE logo /HPE Logo files/HPE Logo/HPE-logo-full-clr-pos-rgb (3).webp' },



            ].map((p) => (



              <div key={p.name} className="flex items-center justify-center p-6 bg-white">



                <img src={p.src} alt={p.name} className="max-w-[180px] max-h-[48px] opacity-60 hover:opacity-100 transition-opacity" loading="lazy" />



              </div>



            ))}



          </div>



        </div>







        {/* Featured Product */}



        <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] gap-0 rounded-xl overflow-hidden bg-white border border-[#e0e0e0] shadow-sm">



          <div className="relative bg-gray-50 flex items-center justify-center p-8 min-h-[280px]">



            <span className="absolute top-4 left-4 px-3 py-1 bg-[#1f2937] text-white carbon-label-02 uppercase tracking-wider rounded-full">Featured Hardware</span>



            <img src="/Sections/Cooling page/Images-cooling/not used 3d/FusionCool.png" alt="FusionCol8000-E cooling unit" className="max-w-[90%] max-h-[220px] object-contain" loading="lazy" />



          </div>



          <div className="p-8 flex flex-col justify-center">



            <h3 className="carbon-heading-02 text-gray-900 mb-3 leading-tight">FusionCol8000-E</h3>



            <p className="carbon-body-02 text-gray-600 mb-6">Enterprise-grade precision cooling for high-density data centres.</p>



            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">



              {[{l:'Cooling Capacity',v:'Up to 100kW'},{l:'Control Precision',v:'±1°C / ±5% RH'},{l:'Redundancy',v:'N+1 ready'},{l:'Deploy',v:'In-row or perimeter'}].map((s) => (



                <div key={s.l} className="bg-gray-50 rounded-lg p-3 border border-gray-100"><p className="carbon-label-02 text-gray-400 uppercase mb-1">{s.l}</p><p className="carbon-heading-01 md:carbon-price text-gray-900">{s.v}</p></div>



              ))}



            </div>



            <div className="flex flex-col gap-3">



              <div className="flex gap-3 flex-wrap justify-center sm:justify-start">



                <button onClick={() => setDatasheetOpen(true)} className="inline-flex items-center gap-2 px-5 py-3 border border-gray-300 text-gray-700 carbon-body-02 hover:border-[#0f62fe] hover:text-[#0f62fe] transition-colors rounded-lg">



                  <Download className="w-4 h-4" />



                  Get Datasheet



                </button>



                <a href="mailto:info@perception-it.com?subject=FusionCol8000-E%20Enquiry" className="inline-flex items-center gap-2 px-5 py-3 bg-[#0f62fe] text-white carbon-body-02 hover:bg-[#0353e9] hover:shadow-[0_0_20px_rgba(15,98,254,0.6)] transition-colors rounded-lg">Request Technical Consultation</a>



              </div>



            </div>



          </div>



        </div>







        {/* Scope Boundary */}



        <div className="mt-10 p-5 bg-gray-100 rounded-xl flex gap-4 items-start">



          <Warning className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" />



          <div>



            <p className="carbon-label-01 text-gray-500 uppercase mb-1">Scope</p>



            <p className="carbon-helper-text-01 text-gray-500">Procurement covers hardware supply and manufacturer warranty administration only. Installation, piping, ducting, commissioning validation, and ongoing maintenance are scoped separately under Deployment and Managed Services.</p>



          </div>



        </div>



      </div>







      {/* Datasheet Gated Modal */}



      {datasheetOpen && (



        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm" onClick={() => setDatasheetOpen(false)}>



          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 p-8 relative" onClick={(e) => e.stopPropagation()}>



            <button onClick={() => setDatasheetOpen(false)} className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 transition-colors">



              <ChevronDown className="w-5 h-5 rotate-180" />



            </button>



            <h3 className="carbon-heading-02 text-gray-900 mb-2">FusionCol8000-E Datasheet</h3>



            <p className="carbon-body-02 text-gray-500 mb-6">This datasheet is available on request. Send us a quick email and we&apos;ll deliver the full technical specifications to your inbox.</p>



            <div className="flex flex-col gap-3">



              <a href="mailto:info@perception-it.com?subject=Request:%20FusionCol8000-E%20Datasheet" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#0f62fe] text-white carbon-body-02 hover:bg-[#0353e9] hover:shadow-[0_0_20px_rgba(15,98,254,0.6)] transition-colors rounded-lg">



                Request via Email



              </a>



              <a href="/Sections/Cooling page/Data sheets-cooling /Perception-IT-FusionCol8000-E-Datasheet.pdf" download className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-gray-300 text-gray-700 carbon-body-02 hover:border-[#0f62fe] hover:text-[#0f62fe] transition-colors rounded-lg">



                <Download className="w-4 h-4" />



                Download Directly



              </a>



            </div>



            <p className="carbon-helper-text-01 text-gray-400 mt-4 text-center">File: Perception-IT-FusionCol8000-E-Datasheet.pdf</p>



          </div>



        </div>



      )}



    </section>



  );



};

