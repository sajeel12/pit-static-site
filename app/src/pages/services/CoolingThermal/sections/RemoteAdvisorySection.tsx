import {
  ArrowRight, CheckmarkFilled, TemperatureHot, Settings,
  Meter, Certificate, Dashboard, Windy,
  ChartLine,
} from '@carbon/icons-react';
import {
  Accordion, AccordionItem,
} from '@carbon/react';
import '../../../../styles/carbon-typography.css';

export default function RemoteAdvisorySection() {



  return (



    <section id="international" className="relative py-20 bg-[#0F172A] carbon-font text-white overflow-hidden">



      {/* Background glow */}



      <div className="pointer-events-none absolute inset-0 overflow-hidden">



        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[radial-gradient(circle,_rgba(120,169,255,0.15),_transparent_60%)] blur-3xl" />



        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[radial-gradient(circle,_rgba(36,161,72,0.10),_transparent_60%)] blur-3xl" />



      </div>







      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">



        {/* Header */}



        <div className="mb-14 carbon-font">



          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/15 rounded-full mb-6">



            <span className="w-2 h-2 bg-[#78a9ff] rounded-full" />



            <span className="carbon-label-02 text-slate-200">International Advisory</span>



          </div>



          <h2 className="carbon-fluid-heading-04 bg-gradient-to-r from-[#00d4ff] to-white bg-clip-text text-transparent mb-3">Offshore Technical Consultation</h2>



          <p className="carbon-body-02 text-slate-400 max-w-2xl">



            Strategic thermal guidance for offshore data centres, delivered entirely remotely. We review your designs, specifications, and airflow plans, then provide actionable recommendations validated for extreme heat, humidity, and operational stress.



          </p>



        </div>







        {/* Who It's For | 3 cards */}



        <div className="mb-14">



          <p className="carbon-label-02 text-slate-500 uppercase tracking-[0.16px] mb-5">Who It&apos;s For</p>



          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">



            {[



              { icon: ChartLine, title: 'Pre-Sales & Planning Teams', desc: 'Need thermal direction before procurement or site mobilization. Validate feasibility before budget commitment.' },



              { icon: TemperatureHot, title: 'International Operators', desc: 'Designing for emerging-market or extreme climates where local thermal expertise is unavailable.' },



              { icon: Settings, title: 'Architects & Engineers', desc: 'Validating cooling strategy during design or refurbishment phases. Independent engineering sign-off.' },



            ].map((card) => (



              <div key={card.title} className="p-6 glass-dark rounded-3xl">



                <div className="w-9 h-9 rounded-lg bg-[#00d4ff]/20 flex items-center justify-center mb-3 shadow-[0_0_12px_rgba(0,212,255,0.3)]">



                  <card.icon className="w-4 h-4 text-[#78a9ff]" />



                </div>



                <p className="carbon-heading-02 text-white mb-1">{card.title}</p>



                <p className="carbon-body-02 text-slate-400">{card.desc}</p>



              </div>



            ))}



          </div>



        </div>







        {/* What You Receive | 4 cards with top accent */}



        <div className="mb-14">



          <p className="carbon-label-02 text-slate-500 uppercase tracking-[0.16px] mb-5">What You Receive</p>



          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">



            {[



              { num: '01', icon: Windy, title: 'CFD & Airflow Review', desc: 'Remote CFD modelling and airflow analysis from your supplied drawings. Includes equipment placement recommendations, containment strategy comparison, and what-if scenario simulation.' },



              { num: '02', icon: TemperatureHot, title: 'Climate Risk Assessment', desc: 'Thermal validation for 45°C+ ambient and monsoon conditions using Pakistan-validated derating.' },



              { num: '03', icon: Certificate, title: 'Vendor Spec Review', desc: 'Independent validation of equipment specs, redundancy, and manufacturer claims against your load.' },



              { num: '04', icon: Dashboard, title: 'Implementation Roadmap', desc: 'Phased plan with prioritised actions and clear boundaries. Physical validation requires local engagement.' },



            ].map((item) => (



              <div key={item.num} className="relative glass-dark rounded-3xl overflow-hidden flex flex-col">



                <div className="h-1 bg-[#78a9ff]" />



                <div className="p-5 flex-1 flex flex-col">



                  <div className="flex items-center gap-2 mb-3">



                    <div className="w-7 h-7 rounded-md bg-[#00d4ff]/20 flex items-center justify-center">



                      <item.icon className="w-3.5 h-3.5 text-[#78a9ff]" />



                    </div>



                    <span className="carbon-label-02 text-[#00d4ff]">{item.num}</span>



                  </div>



                  <p className="carbon-heading-02 text-white mb-2">{item.title}</p>



                  <p className="carbon-body-02 text-slate-400">{item.desc}</p>



                </div>



              </div>



            ))}



          </div>



        </div>







        {/* Save on Time and Costs */}



        <div className="mb-14 p-6 sm:p-8 glass-dark-strong rounded-2xl">



          <p className="carbon-label-02 text-slate-500 uppercase tracking-[0.16px] mb-6 block">Save on Time and Costs</p>



          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">



            <div className="flex items-start gap-4">



              <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/20 flex items-center justify-center flex-shrink-0 shadow-[0_0_12px_rgba(0,212,255,0.12)]">



                <ArrowRight className="w-5 h-5 text-[#00d4ff] rotate-[-45deg]" />



              </div>



              <div>



                <p className="carbon-heading-02 text-white mb-1">Accelerate Timelines</p>



                <p className="carbon-body-02 text-slate-400">Begin strategy and spec review immediately, without travel logistics or visa delays.</p>



              </div>



            </div>



            <div className="flex items-start gap-4">



              <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/20 flex items-center justify-center flex-shrink-0">



                <Meter className="w-5 h-5 text-[#00d4ff]" />



              </div>



              <div>



                <p className="carbon-heading-02 text-white mb-1">Reduce Advisory Overhead</p>



                <p className="carbon-body-02 text-slate-400">Expert engineering without mobilisation fees, daily allowances, or travel costs.</p>



              </div>



            </div>



            <div className="flex items-start gap-4">



              <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/20 flex items-center justify-center flex-shrink-0">



                <CheckmarkFilled className="w-5 h-5 text-[#00d4ff]" />



              </div>



              <div>



                <p className="carbon-heading-02 text-white mb-1">De-risk Procurement</p>



                <p className="carbon-body-02 text-slate-400">Validate thermal design and vendor claims before capital commitment or contract signature.</p>



              </div>



            </div>



          </div>



        </div>







        {/* How It Works + Scope | Accordion */}



        <div className="mb-14 bg-white/5 border border-white/10 rounded-2xl overflow-hidden">



          <Accordion>



            <AccordionItem title="How It Works: 3 steps, 10–15 business days">



              <div className="pb-2">



                <ol className="space-y-4 carbon-body-02 text-slate-300 list-decimal list-inside mb-4">



                  <li><strong className="text-white">Data Submission</strong>: You share room layouts, equipment schedules, and environmental parameters via secure portal</li>



                  <li><strong className="text-white">Remote Analysis</strong>: We run CFD modelling, assess thermal risk, and validate vendor specifications</li>



                  <li><strong className="text-white">Roadmap Delivery</strong>: You receive a practical thermal strategy with prioritised recommendations and implementation boundaries</li>



                </ol>



                <p className="carbon-label-02 text-slate-500">Typical turnaround: 10–15 business days from data receipt.</p>



              </div>



            </AccordionItem>



            <AccordionItem title="Scope & Delivery Boundaries: What is and is not included">



              <div className="pb-2">



                <p className="carbon-body-02 text-slate-300 mb-3">This engagement delivers strategic advisory only. To ensure clarity:</p>



                <div className="grid sm:grid-cols-2 gap-4">



                  <div className="p-4 bg-[#24a148]/10 rounded-xl border border-[#24a148]/20">



                    <p className="carbon-label-02 text-[#24a148] uppercase mb-3">Included</p>



                    <ul className="space-y-2 carbon-body-02 text-slate-300">



                      <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-slate-500 flex-shrink-0" />Methodology validation</li>



                      <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-slate-500 flex-shrink-0" />Design logic review</li>



                      <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-slate-500 flex-shrink-0" />Specification alignment</li>



                      <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-slate-500 flex-shrink-0" />Risk modelling</li>



                    </ul>



                  </div>



                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">



                    <p className="carbon-label-02 text-slate-400 uppercase mb-3">Not Included</p>



                    <ul className="space-y-2 carbon-body-02 text-slate-400">



                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-600 flex-shrink-0" />Physical site surveys</li>



                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-600 flex-shrink-0" />Instrumented testing</li>



                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-600 flex-shrink-0" />On-site commissioning</li>



                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-600 flex-shrink-0" />Final handover sign-off</li>



                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-600 flex-shrink-0" />Verification of client-supplied data accuracy</li>



                    </ul>



                  </div>



                </div>



                <p className="mt-4 carbon-body-02 text-slate-500 text-sm">Physical validation, commissioning, and managed services are available separately for Pakistan-based deployments.</p>



              </div>



            </AccordionItem>



          </Accordion>



        </div>







        {/* CTA */}



        <div className="rounded-2xl bg-gradient-to-r from-[#0f62fe] to-[#4589ff] p-8 sm:p-10 md:flex md:items-center md:justify-between gap-6">



          <div className="max-w-xl">



            <h3 className="carbon-heading-02 text-white mb-2">Ready to review your thermal strategy?</h3>



            <p className="carbon-body-02 text-white/80">Request a Remote Advisory Consultation and receive a scoping call within 48 hours.</p>



          </div>



          <a href="mailto:contact@perception-it.com?subject=Remote%20Advisory%20Consultation%20Request" className="mt-6 md:mt-0 inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#0f62fe] carbon-body-02 font-medium hover:bg-slate-100 transition-colors rounded-lg flex-shrink-0">



            Request Remote Advisory Consultation



          </a>



        </div>



      </div>



    </section>



  );



};

