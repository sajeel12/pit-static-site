import { useState } from 'react';
import TemperatureHot from '@carbon/icons-react/es/TemperatureHot';
import Warning from '@carbon/icons-react/es/Warning';
import Settings from '@carbon/icons-react/es/Settings';
import Certificate from '@carbon/icons-react/es/Certificate';
import ChevronUp from '@carbon/icons-react/es/ChevronUp';
import ChevronDown from '@carbon/icons-react/es/ChevronDown';


export default function DeploymentSection() {



  const [isOpen, setIsOpen] = useState(false);







  const steps = [



    {



      num: '01',



      icon: Settings,



      title: 'Mechanical Installation',



      desc: 'Positioning, refrigerant lines, drains, electrical connections. Every install is validated for Pakistan\'s peak conditions.',



    },



    {



      num: '02',



      icon: TemperatureHot,



      title: 'Thermal Validation',



      desc: 'IR mapping, CFD simulation, load-bank testing. We test at 45°C ambient and 80% RH to guarantee performance.',



    },



    {



      num: '03',



      icon: Certificate,



      title: 'Commissioning & Handover',



      desc: 'Setpoint calibration, DCIM integration, as-built docs. Full operator handover with monitoring dashboard onboarding.',



    },



  ];







  return (



    <section id="deployment" className="py-20 bg-white">



      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">







        <div className="relative rounded-2xl overflow-hidden mb-10 min-h-[320px] lg:min-h-[380px]">



          <img src="/3D images/Cooling and Airflow/Deployment- Cooling.png" alt="Cooling system deployment" className="w-full h-full object-cover absolute inset-0" loading="lazy" />



          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/60 to-transparent" />



          <div className="relative z-10 pt-10 lg:pt-12 pb-10 px-8 lg:px-12 max-w-lg md:max-w-2xl lg:max-w-3xl">



            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full mb-8">



              <span className="w-5 h-5 rounded-full bg-[#0f62fe] flex items-center justify-center text-[10px] font-bold text-white">03</span>



              <span className="carbon-label-02 text-white/90 uppercase tracking-wider">Deployment</span>



            </div>



            <h3 className="carbon-banner-heading text-white mb-8 leading-[1.4]">Installation is where cooling systems win or fail.</h3>



            <p className="carbon-body-02 text-white/75">Because 60% of cooling failures are directly installation-related, our 4-phase deployment protocol introduces full validation to ensure permanent thermal continuity.</p>



          </div>



        </div>







        {/* Step Cards */}



        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">



          {steps.map((step) => (



            <div key={step.title} className="group relative bg-white rounded-xl border border-[#e0e0e0] hover:border-[#374151] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">



              <div className="h-1.5 w-full rounded-t-xl bg-gradient-to-r from-[#374151] to-[#6b7280]" />



              <div className="p-6 sm:p-8">



                <div className="flex items-center gap-4 mb-5">



                  <div className="w-12 h-12 rounded-full bg-[#374151]/5 flex items-center justify-center group-hover:bg-[#374151]/10 transition-colors">



                    <step.icon className="w-6 h-6 text-[#374151]" />



                  </div>



                  <span className="carbon-fluid-heading-03 text-gray-200 font-light">{step.num}</span>



                </div>



                <h3 className="carbon-heading-02 text-gray-900 mb-3">{step.title}</h3>



                <p className="carbon-body-02 text-gray-500">{step.desc}</p>



              </div>



            </div>



          ))}



        </div>







        {/* Stats bar */}



        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">



          {[{n:'8 weeks',l:'Typical deployment'},{n:'45°C',l:'Tested ambient'},{n:'100%',l:'Load-bank validated'},{n:'Validated commissioning*',l:'Minimal service disruption'}].map((s) => (



            <div key={s.l} className="p-6 bg-gray-50 rounded-xl text-center border border-gray-100">



              <p className="carbon-fluid-heading-03 text-[#374151] font-light mb-1">{s.n}</p>



              <p className="carbon-body-02 text-gray-500">{s.l}</p>



            </div>



          ))}



        </div>







        <div className="p-8 rounded-xl relative overflow-hidden mb-6 bg-gradient-to-r from-[#0f62fe] to-[#4589ff]">



          <div className="flex flex-wrap items-center justify-between gap-6 relative">



            <div className="flex-1 min-w-[300px]">



              <h3 className="carbon-heading-02 text-white mb-2">Need deployment planning?</h3>



              <p className="carbon-body-02 text-white/80">Our deployment team understands Pakistani power conditions better than anyone.</p>



            </div>



            <div className="flex gap-3 flex-wrap">



              <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center gap-2 px-5 py-3 bg-white/15 border border-white/40 text-white carbon-body-02 font-medium hover:bg-white/25 transition-colors rounded-lg">



                {isOpen ? 'Close' : 'View Full Process'} {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}



              </button>



              <a href="mailto:contact@perception-it.com?subject=Deployment%20Consultation%20Request" className="inline-flex items-center gap-2 px-5 py-3 bg-white text-[#0f62fe] carbon-body-02 hover:bg-gray-50 transition-colors rounded-lg">Speak to an Engineer</a>



            </div>



          </div>



        </div>







        {isOpen && (



          <div className="space-y-4 mb-6 animate-fade-in">



            <div className="grid md:grid-cols-2 gap-4">



              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">



                <p className="carbon-label-02 text-[#da1e28] uppercase mb-4">Common Installation Failures</p>



                <ul className="space-y-3">



                  {[{l:'Refrigerant charge',v:'Incorrect charge causes 40% of first-year failures'},{l:'Condensate drains',v:'Undersized drains flood during monsoon humidity'},{l:'Thermal validation',v:'Missing validation leaves hotspots undetected'}].map((item) => (



                    <li key={item.l} className="flex items-start gap-2 carbon-body-02 text-gray-600"><Warning className="w-4 h-4 text-[#da1e28] flex-shrink-0 mt-0.5" /><span><strong className="text-gray-900">{item.l}:</strong> {item.v}</span></li>



                  ))}



                </ul>



              </div>



              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">



                <p className="carbon-label-02 uppercase mb-4 text-[#374151]">Our Deployment Protocol</p>



                <ul className="space-y-3">



                  {[{l:'Site survey',v:'Thermal load, airflow path, electrical capacity'},{l:'Placement design',v:'CFD-validated layout for optimal airflow'},{l:'Monsoon hardening',v:'Drain sizing, seal verification, humidity buffers'},{l:'Start-up & balancing',v:'Load-bank test, setpoint calibration, failover'},{l:'As-built docs',v:'Full documentation and operator handover'}].map((item, index) => (



                    <li key={item.l} className="flex items-start gap-2 carbon-body-02 text-gray-600"><span className="carbon-label-02 text-gray-400 w-5 flex-shrink-0">{String(index + 1).padStart(2, '0')}.</span><span><strong className="text-gray-900">{item.l}:</strong> {item.v}</span></li>



                  ))}



                </ul>



              </div>



            </div>



            <div className="p-5 bg-[#24a148]/5 rounded-xl border border-[#24a148]/20 flex gap-4 items-start">



              <Certificate className="w-6 h-6 text-[#24a148] flex-shrink-0 mt-0.5" />



              <div><p className="carbon-label-02 text-[#24a148] uppercase mb-1">45°C+ Ambient Rated</p><p className="carbon-body-02 text-gray-600">Every installation is validated for Pakistan&apos;s peak summer conditions. We test at 45°C ambient and 80% RH.</p></div>



            </div>







            {/* Scope Boundary */}



            <div className="p-5 bg-gray-100 rounded-xl flex gap-4 items-start">



              <Warning className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" />



              <div>



                <p className="carbon-label-02 text-gray-500 uppercase mb-1">Scope</p>



                <p className="carbon-body-02 text-gray-600">Deployment covers mechanical installation, thermal validation, and commissioning only. Capacity planning, monsoon/dust hardening engineering, and SLA-backed uptime targets are scoped separately under Assessment and Managed Services.</p>



              </div>



            </div>



          </div>



        )}



      </div>



    </section>



  );



};

