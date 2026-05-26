import { useState } from 'react';
import ArrowRight from '@carbon/icons-react/es/ArrowRight';
import CheckmarkFilled from '@carbon/icons-react/es/CheckmarkFilled';
import Warning from '@carbon/icons-react/es/Warning';
import Settings from '@carbon/icons-react/es/Settings';
import Scale from '@carbon/icons-react/es/Scale';
import Subtract from '@carbon/icons-react/es/Subtract';
import ChevronUp from '@carbon/icons-react/es/ChevronUp';
import ChevronDown from '@carbon/icons-react/es/ChevronDown';
import Calendar from '@carbon/icons-react/es/Calendar';
import Document from '@carbon/icons-react/es/Document';
import { useInView } from '@/hooks/useInView';
import { trackEvent } from '../utils';


export default function AssessmentSection() {



  const [cfdOpen, setCfdOpen] = useState(false);



  const [isOpen, setIsOpen] = useState(false);



  const { ref: bannerRef, isInView: bannerInView } = useInView<HTMLDivElement>();



  const { ref: card1Ref, isInView: card1InView } = useInView<HTMLDivElement>();



  const { ref: card2Ref, isInView: card2InView } = useInView<HTMLDivElement>();



  const { ref: ctaRef, isInView: ctaInView } = useInView<HTMLDivElement>();







  return (



    <section id="assessment" className="py-20 bg-white">



      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">



        {/* Image Banner */}



        <div



          ref={bannerRef}



          className={`relative rounded-2xl overflow-hidden mb-10 min-h-[360px] lg:min-h-[420px] transition-all duration-700 ease-out ${bannerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}



        >



          <img src="/3D images/Cooling and Airflow/Cooling - Assesment.png" alt="Thermal assessment" className="w-full h-full object-cover absolute inset-0" loading="lazy" />



          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/80 via-[45%] to-transparent" />



          <div className="relative z-10 pt-10 lg:pt-12 pb-10 px-8 lg:px-12 max-w-lg md:max-w-2xl lg:max-w-3xl">



            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full mb-8">



              <span className="w-5 h-5 rounded-full bg-[#0f62fe] flex items-center justify-center text-[10px] font-bold text-white">01</span>



              <span className="carbon-label-02 text-white/90 uppercase tracking-wider">Assessment</span>



            </div>



            <h3 className="carbon-banner-heading text-white mb-8 leading-[1.4]">Two paths. One goal: <span className="block">Validate before you spend.</span></h3>





            <ul className="space-y-1 carbon-body-02 text-white/75">



              <li className="flex items-start gap-2">



                <span className="text-white/50 flex-shrink-0 mt-1.5 text-[10px]">●</span>



                <span>Rapid Thermal Audit for existing facilities</span>



              </li>



              <li className="flex items-start gap-2">



                <span className="text-white/50 flex-shrink-0 mt-1.5 text-[10px]">●</span>



                <span>Precision Thermal Engineering for new builds and high-density environments</span>



              </li>



            </ul>



          </div>



        </div>







        {/* Option Cards | Full Detail */}



        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 md:items-start">



          {/* Rapid Thermal Audit */}



          <div



            ref={card1Ref}



            className={`group relative bg-white rounded-xl border border-[#e0e0e0] hover:border-[#6f6f6f] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer ${card1InView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}



            style={{ transitionDelay: card1InView ? '100ms' : '0ms' }}



          >



            {/* Colored top accent */}



            <div className="h-1.5 w-full rounded-t-xl bg-gradient-to-r from-[#6f6f6f] to-[#9ca3af]" />



            <div className="p-6 sm:p-8">



              {/* Header Row */}



              <div className="flex items-start justify-between gap-3 mb-4">



                <div>



                  <p className="carbon-card-title text-gray-900 leading-tight">Rapid Thermal Audit</p>



                </div>



                <span className="inline-flex items-center carbon-label-02 text-white uppercase bg-[#6f6f6f] px-2.5 py-1 rounded-md flex-shrink-0 mt-0.5">Entry</span>



              </div>



              {/* Pricing Block */}



              <div className="mb-5 p-4 bg-[#6f6f6f]/[0.04] rounded-lg border border-[#6f6f6f]/10">



                <p className="carbon-label-02 text-gray-400 uppercase mb-1">From</p>



                <p className="carbon-price text-gray-900">PKR 45,000*</p>



              </div>



              {/* Best For */}



              <div className="mb-5 p-4 bg-[#6f6f6f]/5 rounded-lg border-l-[3px] border-[#6f6f6f]">



                <span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-900 rounded carbon-badge mb-2">Best For</span>



                <p className="carbon-body-02 text-gray-700">Routine maintenance, edge sites, and budget planning.</p>



              </div>



              {/* Deliverables */}



              <div className="pt-5 border-t border-[#e0e0e0]">



                <p className="carbon-label-02 text-[#6f6f6f] uppercase mb-3">Key Deliverables</p>



                <div className="space-y-4">



                  <div className="flex items-start gap-3">



                    <CheckmarkFilled className="w-4 h-4 text-[#24a148] flex-shrink-0 mt-1" />



                    <div>



                      <span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-900 rounded carbon-badge mb-1">Thermal Mapping</span>



                      <p className="carbon-body-02 text-gray-500">Infrared thermal mapping of all active racks</p>



                    </div>



                  </div>



                  <div className="flex items-start gap-3">



                    <CheckmarkFilled className="w-4 h-4 text-[#24a148] flex-shrink-0 mt-1" />



                    <div>



                      <span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-900 rounded carbon-badge mb-1">Risk Scorecard</span>



                      <p className="carbon-body-02 text-gray-500">Structured Fix / Watch / OK risk scorecard</p>



                    </div>



                  </div>



                  <div className="flex items-start gap-3">



                    <CheckmarkFilled className="w-4 h-4 text-[#24a148] flex-shrink-0 mt-1" />



                    <div>



                      <span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-900 rounded carbon-badge mb-1">Derating Validation</span>



                      <p className="carbon-body-02 text-gray-500">Pakistan-specific equipment derating validation</p>



                    </div>



                  </div>



                  <div className="flex items-start gap-3 pt-3 border-t border-[#e0e0e0]/60">



                    <Warning className="w-4 h-4 text-[#f1c21b] flex-shrink-0 mt-1" />



                    <div>



                      <span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-900 rounded carbon-badge mb-1">CFD Simulation (Computational Fluid Dynamics)</span>



                      <p className="carbon-body-02 text-gray-400">Not included, upgrade to Precision Engineering for full airflow analysis</p>



                    </div>



                  </div>



                </div>



              </div>



            </div>



          </div>







          {/* Precision Thermal Engineering */}



          <div



            ref={card2Ref}



            className={`group relative bg-white rounded-xl border border-[#e0e0e0] hover:border-[#6929c4] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer ${card2InView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}



            style={{ transitionDelay: card2InView ? '200ms' : '0ms' }}



          >



            {/* Colored top accent */}



            <div className="h-1.5 w-full rounded-t-xl bg-gradient-to-r from-[#6929c4] to-[#a855f7]" />



            <div className="p-6 sm:p-8">



              {/* Header Row */}



              <div className="flex items-start justify-between gap-3 mb-4">



                <p className="carbon-card-title text-gray-900 leading-tight">Precision Thermal Engineering</p>



                <span className="inline-flex items-center carbon-label-02 text-white uppercase bg-[#6929c4] px-2.5 py-1 rounded-md flex-shrink-0 mt-0.5">Enterprise</span>



              </div>



              {/* Pricing Block */}



              <div className="mb-5 p-4 bg-[#6929c4]/[0.04] rounded-lg border border-[#6929c4]/10">



                <p className="carbon-label-02 text-gray-500 uppercase mb-1">Pricing</p>



                <p className="carbon-price text-gray-900">Custom Scope</p>



                <p className="carbon-body-short-01 text-gray-500 mt-1.5">Quote provided after scope review</p>



              </div>



              {/* Best For */}



              <div className="mb-5 p-4 bg-[#6929c4]/5 rounded-lg border-l-[3px] border-[#6929c4]">



                <span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-900 rounded carbon-badge mb-2">Best For</span>



                <p className="carbon-body-02 text-gray-700">New builds, high-density environments, compliance, and root-cause analysis.</p>



              </div>



              {/* Deliverables */}



              <div className="pt-5 border-t border-[#e0e0e0]">



                <p className="carbon-label-02 text-[#6929c4] uppercase mb-3">Key Deliverables</p>



                <div className="space-y-4">



                  <div className="flex items-start gap-3">



                    <CheckmarkFilled className="w-4 h-4 text-[#24a148] flex-shrink-0 mt-1" />



                    <div>



                      <span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-900 rounded carbon-badge mb-1">Thermal Modelling</span>



                      <p className="carbon-body-02 text-gray-500">3D thermal heat maps and predictive hotspot modelling</p>



                    </div>



                  </div>



                  <div className="flex items-start gap-3">



                    <CheckmarkFilled className="w-4 h-4 text-[#24a148] flex-shrink-0 mt-1" />



                    <div>



                      <span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-900 rounded carbon-badge mb-1">CFD Simulation (Computational Fluid Dynamics)</span>



                      <p className="carbon-body-02 text-gray-500">Full airflow and fluid dynamics simulation</p>



                    </div>



                  </div>



                  <div className="flex items-start gap-3">



                    <CheckmarkFilled className="w-4 h-4 text-[#24a148] flex-shrink-0 mt-1" />



                    <div>



                      <span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-900 rounded carbon-badge mb-1">Capacity Analysis</span>



                      <p className="carbon-body-02 text-gray-500">Exact capacity calculations calibrated for local ambient</p>



                    </div>



                  </div>



                  <div className="flex items-start gap-3">



                    <CheckmarkFilled className="w-4 h-4 text-[#24a148] flex-shrink-0 mt-1" />



                    <div>



                      <span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-900 rounded carbon-badge mb-1">Engineering Validation Report</span>



                      <p className="carbon-body-02 text-gray-500">Formal engineering validation and optimisation roadmap</p>



                    </div>



                  </div>



                </div>



              </div>



              {/* CFD Capabilities */}



              <div className="mt-6 pt-6 border-t border-[#e0e0e0]">



                <div className="bg-[#6929c4]/5 rounded-xl p-5 border border-[#6929c4]/15">



                  <div className="flex items-center gap-2 mb-4">



                    <Settings className="w-4 h-4 text-[#6929c4]" />



                    <p className="carbon-label-02 text-gray-900 uppercase">CFD Capabilities</p>



                  </div>



                  <div className="flex flex-wrap gap-2.5 mb-4">



                    {['Visualise & Diagnose','Simulate & Validate','Plan & Deploy','Airflow & Containment','Engineering & Design'].map((cat) => (



                      <span key={cat} className="inline-flex items-center px-3 py-1.5 bg-white rounded-md border border-[#6929c4]/15 text-xs font-medium text-gray-700">{cat}</span>



                    ))}



                  </div>



                  <button



                    onClick={(e) => { e.stopPropagation(); setCfdOpen(!cfdOpen); trackEvent('cfd_capabilities_view', { event_category: 'engagement', event_label: 'precision_cfd_expand', page_path: '/cooling' }); }}



                    className="w-full flex items-center justify-center gap-2 bg-white border border-[#6929c4]/30 text-gray-900 carbon-body-02 font-medium rounded-lg py-3 hover:bg-[#6929c4]/5 transition-colors"



                  >



                    {cfdOpen ? 'Hide all 21 capabilities' : 'View all 21 capabilities'}



                    {cfdOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}



                  </button>



                  {cfdOpen && (



                    <div className="mt-4 grid grid-cols-1 gap-3 animate-fade-in">



                      {[



                        {



                          label: 'Visualise & Diagnose',



                          items: [



                            'Visually assess cooling airflow and equipment temperatures',



                            'Predict data centre temperature distribution',



                            'Investigate causes of and solutions to overheating',



                            'Pinpoint which IT assets will fail in a given configuration',



                          ]



                        },



                        {



                          label: 'Simulate & Validate',



                          items: [



                            'Run failure scenarios (power outage, fan failure, cooling loss)',



                            'Prevent equipment failure via what-if scenario simulation',



                            'Ensure critical components operate below temperature specs under stress',



                            'Know true boundary conditions for power density and outflow',



                          ]



                        },



                        {



                          label: 'Plan & Deploy',



                          items: [



                            'Increase rack utilisation without sacrificing availability',



                            'Determine best location for new equipment deployment',



                            'Find optimal position of a new asset',



                            'Plan refreshes using future equipment without downtime risk',



                            'Understand impact of planned changes before committing',



                          ]



                        },



                        {



                          label: 'Airflow & Containment',



                          items: [



                            'Hot-aisle vs cold-aisle containment comparison',



                            'Calculate cooling distribution airflow requirements from HVAC',



                            'Reduce costs by optimising airflow and cooling unit operation',



                            'Suggest floor tile additions and rack relocation',



                          ]



                        },



                        {



                          label: 'Engineering & Design',



                          items: [



                            'Design and configure IT devices with risk-free testing',



                            'Dimension and position primary and backup cooling units',



                            'Analyse floor space power consumption and heat load',



                            'Predict availability, capacity and cooling efficiency interaction',



                          ]



                        },



                      ].map((group) => (



                        <div key={group.label} className="p-4 bg-white rounded-lg border border-[#e0e0e0]">



                          <p className="carbon-badge text-gray-900 mb-2">{group.label}</p>



                          <ul className="space-y-1.5 carbon-body-short-01 text-gray-600">



                            {group.items.map((item) => (



                              <li key={item} className="flex items-start gap-2">



                                <span className="text-gray-500 flex-shrink-0 mt-1 text-xs">•</span>



                                <span>{item}</span>



                              </li>



                            ))}



                          </ul>



                        </div>



                      ))}



                    </div>



                  )}



                </div>



              </div>



            </div>



          </div>



        </div>







        {/* Upgrade Path */}



        <div className="p-5 sm:p-6 bg-[#4589ff]/5 rounded-xl mb-6">



          <div className="flex flex-col xl:flex-row items-start xl:items-center gap-5 xl:gap-6">



            {/* Left: Stat */}



            <div className="flex-shrink-0 w-full xl:w-auto xl:max-w-md">



              <p className="carbon-label-02 text-[#4589ff] uppercase mb-2">Upgrade Path</p>



              <div className="flex items-start xl:items-baseline gap-3 min-w-0">



                <span className="carbon-stat text-[#4589ff] flex-shrink-0">20%</span>



                <span className="carbon-body-02 text-gray-600 min-w-0">of your Rapid Thermal Audit fee credited as a discount on Precision Thermal Engineering</span>



              </div>



            </div>



            {/* Middle: Arrow */}



            <div className="hidden xl:flex flex-col items-center flex-shrink-0 px-1">



              <div className="w-px h-5 bg-[#4589ff]/30" />



              <ArrowRight className="w-5 h-5 text-[#4589ff] my-1" />



              <div className="w-px h-5 bg-[#4589ff]/30" />



            </div>



            {/* Right: Conditions */}



            <div className="flex-1 min-w-0 w-full">



              <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">



                <div className="flex items-start gap-3 carbon-body-short-01 text-gray-600 bg-white/80 rounded-xl px-5 py-4 leading-relaxed min-w-0">



                  <Calendar className="w-5 h-5 text-[#4589ff] flex-shrink-0 mt-0.5" />



                  <span className="min-w-0">Valid for 60 days from report delivery</span>



                </div>



                <div className="flex items-start gap-3 carbon-body-short-01 text-gray-600 bg-white/80 rounded-xl px-5 py-4 leading-relaxed min-w-0">



                  <Document className="w-5 h-5 text-[#4589ff] flex-shrink-0 mt-0.5" />



                  <span className="min-w-0">Documented in your upgrade proposal</span>



                </div>



                <div className="flex items-start gap-3 carbon-body-short-01 text-gray-500 bg-white/80 rounded-xl px-5 py-4 leading-relaxed min-w-0">



                  <Warning className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />



                  <span className="min-w-0">Travel charges are additional</span>



                </div>



              </div>



            </div>



          </div>



        </div>







        {/* CTA Band */}



        <div



          ref={ctaRef}



          className={`p-6 sm:p-8 rounded-xl relative overflow-hidden mb-6 bg-white border border-gray-200 transition-all duration-700 ease-out ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}



          style={{ transitionDelay: ctaInView ? '300ms' : '0ms' }}



        >



          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-between gap-4 sm:gap-6 relative text-center sm:text-left">



            <div className="flex-1 min-w-0">



              <h3 className="carbon-heading-02 text-gray-900 mb-2">Rapid Audit or Precision Engineering?</h3>



              <p className="carbon-body-02 text-gray-600">See a side-by-side breakdown of scope, deliverables, and pricing, or speak with our team for a tailored recommendation.</p>



            </div>



            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">



              <button onClick={() => { setIsOpen(!isOpen); trackEvent('assessment_comparison_view', { event_category: 'engagement', event_label: 'rapid_vs_precision_compare', page_path: '/cooling' }); }} className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-gray-50 border border-gray-400 text-gray-800 carbon-body-02 font-medium hover:border-[#0f62fe] hover:text-[#0f62fe] hover:bg-[#0f62fe]/5 transition-colors rounded-lg whitespace-nowrap">



                {isOpen ? 'Hide Comparison' : 'See Comparison'} {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}



              </button>



              <a href="mailto:contact@perception-it.com?subject=Assessment%20Consultation%20Request" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#0f62fe] text-white carbon-body-02 hover:bg-[#0353e9] hover:shadow-[0_0_20px_rgba(15,98,254,0.6)] transition-colors rounded-lg whitespace-nowrap">



                Speak to an Engineer



              </a>



            </div>



          </div>



        </div>







        {/* Comparison Table */}



        {isOpen && (



          <div className="mb-6 animate-fade-in space-y-6">



            {/* Mobile: Card-based comparison (no horizontal scroll) */}



            <div className="md:hidden space-y-4">



              {/* Column header */}



              <div className="grid grid-cols-2 gap-0 rounded-lg overflow-hidden border border-gray-200">



                <div className="text-center py-3 border-r border-gray-200">



                  <p className="carbon-label-02 text-gray-600 uppercase font-bold">Rapid Audit</p>



                </div>



                <div className="text-center py-3">



                  <p className="carbon-label-02 text-gray-600 uppercase font-bold">Precision Engineering</p>



                </div>



              </div>







              {/* Service Profile Section */}



              <div className="bg-gray-50 rounded-lg p-3">



                <p className="carbon-label-02 text-gray-500 uppercase tracking-wide font-bold mb-3">Service Profile</p>



                <div className="space-y-2">



                  {[



                    {d:'Best for', r:'Routine maintenance, edge sites, and budget planning.', p:'New builds, high-density environments, compliance, and root-cause analysis.'},



                    {d:'Precision Level', r:'Qualitative assessment', p:'Quantitative engineering analysis'},



                    {d:'Methodology', r:'Visual inspection, structured checklist, and Infrared (IR) thermal mapping', p:'CFD modelling and complete system analysis'},



                    {d:'Time On-Site', r:'2–4 hours (90-minute core audit)', p:'1–2 days (Site scale dependent)'},



                    {d:'Turnaround', r:'Actionable report within 48 hours', p:'Comprehensive analysis within 1–2 weeks'},



                  ].map((row) => (



                    <div key={row.d} className="bg-white rounded-lg border border-[#e0e0e0] overflow-hidden">



                      <div className="px-3 py-2 bg-gray-50 border-b border-gray-100">



                        <span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-900 rounded carbon-badge">{row.d}</span>



                      </div>



                      <div className="grid grid-cols-2 divide-x divide-gray-100">



                        <div className="p-3 bg-gray-50/30">



                          <p className="carbon-body-short-01 text-gray-700">{row.r}</p>



                          {(row as any).rNote && <p className="text-xs text-gray-400 mt-1">{(row as any).rNote}</p>}



                        </div>



                        <div className="p-3 bg-[#6929c4]/[0.02]">



                          <p className="carbon-body-short-01 text-gray-700">{row.p}</p>



                          {(row as any).pNote && <p className="text-xs text-gray-400 mt-1">{(row as any).pNote}</p>}



                        </div>



                      </div>



                    </div>



                  ))}



                </div>



              </div>







              {/* Key Deliverables Section */}



              <div className="bg-gray-50 rounded-lg p-3">



                <p className="carbon-label-02 text-gray-500 uppercase tracking-wide font-bold mb-3">Key Deliverables</p>



                <div className="space-y-2">



                  {[



                    {d:'Thermal Mapping', r:'Infrared thermal mapping of all active racks', p:'3D heat maps and predictive hotspot modeling'},



                    {d:'Risk Scorecard', r:'Structured Fix / Watch / OK scorecard', p:'None'},



                    {d:'Derating Validation', r:'Pakistan-specific equipment derating validation', p:'None'},



                    {d:'CFD Simulation (Computational Fluid Dynamics)', r:'None', p:'Full airflow and fluid dynamics simulation'},



                    {d:'Capacity Analysis', r:'None', p:'Exact capacity calculations calibrated for local ambient'},



                    {d:'Engineering Validation Report', r:'None', p:'Validation and optimization roadmap'},



                  ].map((row) => (



                    <div key={row.d} className="bg-white rounded-lg border border-[#e0e0e0] overflow-hidden">



                      <div className="px-3 py-2 bg-gray-50 border-b border-gray-100">



                        <span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-900 rounded carbon-badge">{row.d}</span>



                      </div>



                      <div className="grid grid-cols-2">



                        <div className={`p-3 ${row.r === 'None' ? 'bg-gray-50/50' : ''}`}>



                          {row.r !== 'None' ? (



                            <span className="inline-flex items-start gap-1.5">



                              <CheckmarkFilled className="w-4 h-4 text-[#24a148] flex-shrink-0 mt-0.5" />



                              <span className="carbon-body-short-01 text-gray-700">{row.r}</span>



                            </span>



                          ) : (



                            <span className="inline-flex items-center gap-1.5 text-gray-400">



                              <Subtract className="w-3.5 h-3.5 text-gray-300" />



                              <span className="carbon-body-short-01">Not included</span>



                            </span>



                          )}



                        </div>



                        <div className={`p-3 ${row.p === 'None' ? 'bg-gray-50/50' : ''}`}>



                          {row.p !== 'None' ? (



                            <span className="inline-flex items-start gap-1.5">



                              <CheckmarkFilled className="w-4 h-4 text-[#24a148] flex-shrink-0 mt-0.5" />



                              <span className="carbon-body-short-01 text-gray-700">{row.p}</span>



                            </span>



                          ) : (



                            <span className="inline-flex items-center gap-1.5 text-gray-400">



                              <Subtract className="w-3.5 h-3.5 text-gray-300" />



                              <span className="carbon-body-short-01">Not included</span>



                            </span>



                          )}



                        </div>



                      </div>



                    </div>



                  ))}



                </div>



              </div>



            </div>







            {/* Desktop Heading */}



            <div className="hidden md:flex items-center gap-4 pt-2">



              <div className="flex-1 h-px bg-gray-200" />



              <Scale className="w-4 h-4 text-gray-400" />
              <h4 className="carbon-label-02 text-gray-700 uppercase tracking-[0.12em] font-bold">Complete Comparison</h4>



              <div className="flex-1 h-px bg-gray-200" />



            </div>







            {/* Desktop: Improved 3-Column Table */}



            <div className="hidden md:block overflow-hidden rounded-xl border border-gray-200 shadow-lg shadow-slate-200/40">



              <table className="w-full text-left border-collapse">



                <tbody className="divide-y divide-gray-100">



                  {/* Service Profile Section */}



                  <tr>



                    <td className="px-4 py-3 bg-slate-100 carbon-label-02 text-slate-700 uppercase tracking-wide font-bold w-[28%]">Service Profile</td>



                    <td className="px-4 py-3 bg-slate-600 carbon-label-02 text-white uppercase font-bold w-[36%]">



                      <div className="flex items-center gap-2">



                        <div className="w-2 h-2 rounded-full bg-white/70" />



                        Rapid Thermal Audit



                      </div>



                    </td>



                    <td className="px-4 py-3 bg-[#6929c4] carbon-label-02 text-white uppercase font-bold w-[36%]">



                      <div className="flex items-center gap-2">



                        <div className="w-2 h-2 rounded-full bg-white/70" />



                        Precision Thermal Engineering



                      </div>



                    </td>



                  </tr>



                  {[



                    {d:'Best for', r:'Routine maintenance, edge sites, and budget planning.', p:'New builds, high-density environments, compliance, and root-cause analysis.'},



                    {d:'Precision Level', r:'Qualitative assessment', p:'Quantitative engineering analysis'},



                    {d:'Methodology', r:'Visual inspection, structured checklist, and Infrared (IR) thermal mapping', p:'CFD modelling and complete system analysis'},



                    {d:'Time On-Site', r:'2–4 hours', rNote:'90-minute core audit', p:'1–2 days', pNote:'Site scale dependent'},



                    {d:'Turnaround', r:'Actionable report within 48 hours', p:'Comprehensive analysis within 1–2 weeks'},



                  ].map((row) => (



                    <tr key={row.d} className="group hover:bg-gray-50/60 transition-colors">



                      <td className="px-4 py-3.5 border-r border-gray-100 bg-gray-50/60"><span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-900 rounded carbon-badge">{row.d}</span></td>



                      <td className="px-4 py-3.5 carbon-body-short-01 text-gray-700 border-r border-[#e0e0e0] border-l-[3px] border-l-slate-400 bg-slate-50/60">



                        {row.r}



                        {(row as any).rNote && <p className="text-xs text-gray-400 mt-1">{(row as any).rNote}</p>}



                      </td>



                      <td className="px-4 py-3.5 carbon-body-short-01 text-gray-700 border-l-[3px] border-l-[#6929c4] bg-[#6929c4]/[0.04] font-medium">



                        {row.p}



                        {(row as any).pNote && <p className="text-xs text-gray-400 mt-1">{(row as any).pNote}</p>}



                      </td>



                    </tr>



                  ))}



                  {/* Key Deliverables Section */}



                  <tr>



                    <td className="px-4 py-3 bg-slate-100 carbon-label-02 text-slate-700 uppercase tracking-wide font-bold">Key Deliverables</td>



                    <td className="px-4 py-3 bg-slate-50 carbon-label-02 text-slate-600 uppercase font-bold text-center">Rapid Audit Includes</td>



                    <td className="px-4 py-3 bg-purple-50 carbon-label-02 text-[#6929c4] uppercase font-bold text-center">Precision Engineering Includes</td>



                  </tr>



                  {[



                    {d:'Thermal Mapping', r:'Infrared thermal mapping of all active racks', p:'3D heat maps and predictive hotspot modeling'},



                    {d:'Risk Scorecard', r:'Structured Fix / Watch / OK scorecard', p:'None'},



                    {d:'Derating Validation', r:'Pakistan-specific equipment derating validation', p:'None'},



                    {d:'CFD Simulation', r:'None', p:'Full airflow and fluid dynamics simulation'},



                    {d:'Capacity Analysis', r:'None', p:'Exact capacity calculations calibrated for local ambient'},



                    {d:'Engineering Validation Report', r:'None', p:'Validation and optimization roadmap'},



                  ].map((row) => (



                    <tr key={row.d} className="group hover:bg-gray-50/60 transition-colors">



                      <td className="px-4 py-3.5 border-r border-gray-100 bg-gray-50/60"><span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-900 rounded carbon-badge">{row.d}</span></td>



                      <td className="px-4 py-3.5 carbon-body-short-01 text-gray-700 border-r border-[#e0e0e0] border-l-[3px] border-l-slate-400 bg-slate-50/60">



                        {row.r === 'None' ? (



                          <span className="inline-flex items-center gap-1.5 text-gray-400">



                            <Subtract className="w-3.5 h-3.5 text-gray-300" />



                            Not included



                          </span>



                        ) : (



                          <span className="inline-flex items-start gap-1.5">



                            <CheckmarkFilled className="w-4 h-4 text-[#24a148] flex-shrink-0 mt-0.5" />



                            {row.r}



                          </span>



                        )}



                      </td>



                      <td className="px-4 py-3.5 carbon-body-short-01 text-gray-700 border-l-[3px] border-l-[#6929c4] bg-[#6929c4]/[0.04] font-medium">



                        {row.p === 'None' ? (



                          <span className="inline-flex items-center gap-1.5 text-gray-400">



                            <Subtract className="w-3.5 h-3.5 text-gray-300" />



                            Not included



                          </span>



                        ) : (



                          <span className="inline-flex items-start gap-1.5">



                            <CheckmarkFilled className="w-4 h-4 text-[#24a148] flex-shrink-0 mt-0.5" />



                            {row.p}



                          </span>



                        )}



                      </td>



                    </tr>



                  ))}



                  {/* Pricing row */}



                  <tr className="group hover:bg-gray-50/60 transition-colors">



                    <td className="px-4 py-3.5 border-r border-gray-100 bg-gray-50/60"><span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-900 rounded carbon-badge">Pricing</span></td>



                    <td className="px-4 py-3.5 carbon-body-short-01 text-gray-900 border-r border-gray-100 font-semibold">From PKR 45,000*</td>



                    <td className="px-4 py-3.5 carbon-body-short-01 text-gray-900 font-semibold">Custom Scope Only</td>



                  </tr>



                </tbody>



              </table>



            </div>



          </div>



        )}







        {/* Terms */}



        <p className="text-xs text-gray-400 leading-relaxed">



          * Prices are indicative starting points. Final quotes depend on site size, rack count, travel distance, and scope, and are subject to site survey. All prices exclude applicable taxes.



        </p>







      </div>



    </section>



  );



};

