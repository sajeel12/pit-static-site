import { useState } from 'react';
import CheckmarkFilled from '@carbon/icons-react/es/CheckmarkFilled';
import ChevronUp from '@carbon/icons-react/es/ChevronUp';
import ChevronDown from '@carbon/icons-react/es/ChevronDown';


export default function ManagedSection() {



  const [isOpen, setIsOpen] = useState(false);







  const tiers = [



    {



      name: 'Essential',



      price: 'PKR 65K*',



      period: '/mo',



      accent: '#6f6f6f',



      items: ['Quarterly preventive maintenance','Filter replacement','Refrigerant check','Basic telemetry review'],



    },



    {



      name: 'Professional',



      price: 'PKR 145K*',



      period: '/mo',



      accent: '#1565c0',



      items: ['Monthly preventive maintenance','8-hour response SLA','Predictive alerts','Thermal trending report','Spare parts pre-staging','Remote monitoring'],



      recommended: true,



    },



    {



      name: 'Enterprise',



      price: 'PKR 380K+*',



      period: '/mo',



      accent: '#6929c4',



      items: ['24/7 NOC monitoring (3 hubs)','4-hour response SLA*','Monsoon standby engineers','Quarterly room integrity validation','99.9% uptime target* under signed SLA','Predictive alerts','On-site spare parts pre-staged'],



    },



  ];







  return (



    <section id="managed" className="py-20 bg-[#FAFAFA]">



      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">



        <div className="relative rounded-2xl overflow-hidden mb-8 md:mb-12 min-h-[320px] lg:min-h-[380px]">



          <img src="/Sections/Cooling page/Images-cooling/Card hero/managed service - Cooling - page.png" alt="Managed thermal services" className="w-full h-full object-cover absolute inset-0" loading="lazy" />



          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/60 to-transparent" />



          <div className="relative z-10 pt-10 lg:pt-12 pb-10 px-8 lg:px-12 max-w-lg md:max-w-2xl lg:max-w-3xl">



            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full mb-4 md:mb-6">
              <span className="w-5 h-5 rounded-full bg-[#0f62fe] flex items-center justify-center text-[10px] font-bold text-white">04</span>
              <span className="carbon-label-02 text-white/90 uppercase tracking-wider">Managed Services</span>
            </div>



            <h3 className="carbon-fluid-heading-05 text-white mb-4 leading-[1.4]">Thermal Continuity Beyond Handover</h3>



            <p className="carbon-body-02 text-white/75">Prevent Outages with NOC Monitoring &amp; Monsoon Standby Engineering 24x7</p>



          </div>



        </div>







        {/* Tier Cards */}



        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 md:mb-12">



          {tiers.map((tier) => (



            <div key={tier.name} className={`group relative bg-white rounded-xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer border-gray-200 hover:border-gray-300`}>



              <div className="h-1.5 w-full rounded-t-xl bg-gradient-to-r from-gray-200 to-gray-100" />



              <div className="p-6 sm:p-8">
                <div className="flex justify-end mb-4">
                  <span className="inline-flex items-center px-2 py-0.5 text-white carbon-label-01 uppercase tracking-wider rounded-full border border-white/20" style={{ backgroundColor: tier.accent === '#6f6f6f' ? '#9ca3af' : tier.accent === '#1565c0' ? '#4f8eff' : '#a855f7' }}>{tier.name}</span>
                </div>

                <div className="mb-5 p-4 rounded-lg border" style={{ backgroundColor: tier.accent + '08', borderColor: tier.accent + '18' }}>
                  <p className="carbon-label-02 text-gray-500 uppercase mb-1">From</p>
                  <div className="flex items-baseline">
                    <span className="carbon-fluid-heading-03 text-gray-900 font-light">{tier.price}</span>
                    <span className="carbon-body-02 text-gray-400 ml-0.5">{tier.period}</span>
                  </div>
                  <p className="carbon-helper-text-01 text-gray-400 mt-1">*Starting price. Scales with cooling load and SLA tier.</p>
                </div>

                <ul className="space-y-3 pt-5 border-t border-gray-100 mb-8">



                  {tier.items.map((item) => (



                    <li key={item} className="flex items-start gap-3 carbon-body-02 text-gray-600">



                      <CheckmarkFilled className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: tier.accent }} />



                      <span>{item}</span>



                    </li>



                  ))}



                </ul>



                <a href="mailto:contact@perception-it.com?subject=Managed%20Services%20Enquiry" className={`inline-flex items-center gap-2 px-5 py-3 w-full justify-center carbon-body-02 rounded-lg transition-colors ${tier.recommended ? 'bg-[#0f62fe] text-white hover:bg-[#0353e9]' : 'border border-gray-300 text-gray-700 hover:border-[#0f62fe] hover:text-[#0f62fe]'}`}>



                  Choose {tier.name}



                </a>



              </div>



            </div>



          ))}



        </div>








        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 md:mb-12">

          {/* Emergency Response — On-Demand */}
          <div className="group relative bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
            <div className="p-6 sm:p-8 flex flex-col flex-1">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <p className="carbon-heading-02 text-gray-900 leading-tight">Emergency Response</p>
                  <p className="carbon-label-02 text-gray-500 uppercase mt-1">Emergency AC Hire</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 text-white carbon-label-01 uppercase tracking-wider rounded-full shrink-0 ml-3" style={{ backgroundColor: '#da1e28' }}>On-Demand</span>
              </div>
              <div className="pt-4 border-t border-gray-100 flex-1">
                <p className="carbon-body-02 text-gray-600 leading-relaxed">
                  <strong className="text-gray-900">Thermal Continuity Bridging</strong> — Rapid-deployment cooling rental with certified engineers on-site within 4 hours for outage recovery or capacity gaps.
                </p>
              </div>
              <a href="https://wa.me/923093955577?text=Emergency%20AC%20Hire%20Request%20-%20Cooling%20Services" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 w-full carbon-body-02 rounded-lg border border-[#25D366] text-black hover:bg-[#25D366] hover:text-white active:bg-[#128C7E] active:text-white transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12.04 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.35 5L2 22l5.09-1.34A9.96 9.96 0 0012.04 22c5.52 0 10-4.48 10-10S17.56 2 12.04 2zm0 18c-1.66 0-3.22-.51-4.52-1.38l-.32-.21-3.02.79.8-2.94-.21-.33A8.02 8.02 0 014.04 12c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8zm4.24-5.78c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.12-.12.24-.29.37-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.31-.75-1.79-.2-.46-.39-.4-.54-.41-.14 0-.3 0-.45 0-.16 0-.42.06-.64.29-.22.22-.85.83-.85 2.03 0 1.2.87 2.36.99 2.53.12.17 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.5.58.19 1.11.16 1.52.1.47-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.27z"/></svg>
                Request Emergency Response
              </a>
            </div>
          </div>

          {/* Energy Optimisation */}
          <div className="group relative bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
            <div className="p-6 sm:p-8 flex flex-col flex-1">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <p className="carbon-heading-02 text-gray-900 leading-tight">Energy Efficiency</p>
                  <p className="carbon-label-02 text-gray-500 uppercase mt-1">PUE Optimisation</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 text-white carbon-label-01 uppercase tracking-wider rounded-full shrink-0 ml-3" style={{ backgroundColor: '#059669' }}>Optimisation</span>
              </div>
              <div className="pt-4 border-t border-gray-100 flex-1">
                <p className="carbon-body-02 text-gray-600 leading-relaxed">
                  <strong className="text-gray-900">Thermal Energy Intelligence</strong> — Cooling system optimisation with VFD control, free-cooling integration, and AI-driven setpoint adjustments to reduce energy consumption by 25-40%.
                </p>
              </div>
              <a href="#/infrastructure/operational-efficiency" className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 w-full carbon-body-02 rounded-lg border border-gray-300 text-black hover:bg-[#0f62fe] hover:border-[#0f62fe] hover:text-white active:bg-[#0353e9] active:border-[#0353e9] active:text-white transition-colors">
                See Full Infrastructure ROI
              </a>
            </div>
          </div>

        </div>







        <div className="p-8 rounded-xl relative overflow-hidden mb-6 bg-gradient-to-r from-[#0f62fe] to-[#4589ff]">



          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 relative text-center md:text-left">



            <div className="flex-1 min-w-0 md:min-w-[300px]">



              <h3 className="carbon-heading-02 text-white mb-2">Not sure which tier fits?</h3>



              <p className="carbon-body-02 text-white/80">Most mid-size data centres start with Professional. We can assess your cooling load in a 30-minute call.</p>



            </div>



            <div className="flex flex-col sm:flex-row gap-3 items-center w-full sm:w-auto">



              <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/15 border border-white/40 text-white carbon-body-02 font-medium hover:bg-white/25 transition-colors rounded-lg w-full sm:w-auto">



                {isOpen ? 'Close' : 'Compare All Tiers'} {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}



              </button>



              <a href="mailto:contact@perception-it.com?subject=Managed%20Services%20Consultation" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-[#0f62fe] carbon-body-02 hover:bg-gray-50 transition-colors rounded-lg w-full sm:w-auto">Request Technical Consultation</a>



            </div>



          </div>



        </div>







        {isOpen && (



          <div className="space-y-4 mb-6 animate-fade-in">



            <div className="p-4 bg-[#00d4ff]/5 rounded-lg border border-[#00d4ff]/20 flex items-start gap-3">



              <div className="w-8 h-8 rounded-full bg-[#00d4ff]/10 flex items-center justify-center flex-shrink-0">



                <span className="text-[#00d4ff] carbon-heading-02">?</span>



              </div>



              <div>



                <p className="carbon-label-02 text-[#00d4ff] uppercase mb-0.5">Quick Recommendation</p>



                <p className="carbon-body-02 text-gray-600">Most mid-size data centres start with Professional. We can assess your cooling load in a 30-minute call.</p>



              </div>



            </div>







            {/* Feature Comparison | Desktop Table */}



            <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-200">



              <table className="w-full text-left">



                <thead>



                  <tr className="bg-gray-50 border-b border-gray-200">



                    <th className="p-2 md:p-4 carbon-label-02 text-gray-500 uppercase">Feature</th>



                    <th className="p-2 md:p-4 carbon-label-02 text-[#6f6f6f] uppercase text-center">Essential</th>



                    <th className="p-2 md:p-4 carbon-label-02 text-[#1565c0] uppercase text-center">Professional</th>



                    <th className="p-2 md:p-4 carbon-label-02 text-[#6929c4] uppercase text-center">Enterprise</th>



                  </tr>



                </thead>



                <tbody>



                  {[



                    {f:'Preventive maintenance',e:'Quarterly',p:'Monthly',ent:'Monthly + quarterly room integrity'},



                    {f:'Response SLA',e:'None',p:'8-hour',ent:'4-hour'},



                    {f:'NOC monitoring',e:'Basic telemetry',p:'Remote monitoring',ent:'24/7 NOC (3 hubs)'},



                    {f:'Predictive alerts',e:false,p:true,ent:true},



                    {f:'Thermal trending report',e:false,p:true,ent:true},



                    {f:'Spare parts pre-staging',e:false,p:true,ent:'On-site pre-staged'},



                    {f:'Monsoon standby engineers',e:false,p:false,ent:true},



                    {f:'Uptime target (SLA)',e:false,p:false,ent:'99.9%*'},



                  ].map((row) => {



                    const Cell = ({v, color}:{v:string|boolean, color:string}) => {



                      if (v === true) return <CheckmarkFilled className={`w-4 h-4 ${color} inline-block`} />;



                      if (v === false || v === 'None') return <span className="inline-flex items-center gap-1.5 text-gray-400"><span className="w-1.5 h-1.5 rounded-full bg-gray-300" /><span className="carbon-body-short-01">Not included</span></span>;



                      return <span className="inline-flex items-center justify-center gap-1.5 text-gray-600"><CheckmarkFilled className={`w-4 h-4 ${color} flex-shrink-0`} />{v}</span>;



                    };



                    return (



                      <tr key={row.f} className="bg-white">



                        <td className="p-2 md:p-4 border-b border-[#e0e0e0]"><span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-900 rounded carbon-badge">{row.f}</span></td>



                        <td className="p-2 md:p-4 carbon-body-short-01 text-gray-500 text-center border-b border-[#e0e0e0]"><Cell v={row.e} color="text-[#6f6f6f]" /></td>



                        <td className="p-2 md:p-4 carbon-body-short-01 text-gray-700 text-center border-b border-[#e0e0e0] font-medium"><Cell v={row.p} color="text-[#1565c0]" /></td>



                        <td className="p-2 md:p-4 carbon-body-short-01 text-gray-700 text-center border-b border-[#e0e0e0] font-medium"><Cell v={row.ent} color="text-[#6929c4]" /></td>



                      </tr>



                    );



                  })}



                </tbody>



              </table>



            </div>







            {/* Feature Comparison | Mobile Cards */}



            <div className="md:hidden space-y-4">



              {[



                { name: 'Essential', accent: 'text-[#6f6f6f]', bg: 'bg-[#f5f5f5]', features: [



                  {label:'Preventive maintenance', value:'Quarterly'},



                  {label:'Response SLA', value:'None'},



                  {label:'NOC monitoring', value:'Basic telemetry'},



                  {label:'Predictive alerts', value:false},



                  {label:'Thermal trending report', value:false},



                  {label:'Spare parts pre-staging', value:false},



                  {label:'Monsoon standby engineers', value:false},



                  {label:'Uptime target (SLA)', value:false},



                ]},



                { name: 'Professional', accent: 'text-[#1565c0]', bg: 'bg-[#eff6ff]', features: [



                  {label:'Preventive maintenance', value:'Monthly'},



                  {label:'Response SLA', value:'8-hour'},



                  {label:'NOC monitoring', value:'Remote monitoring'},



                  {label:'Predictive alerts', value:true},



                  {label:'Thermal trending report', value:true},



                  {label:'Spare parts pre-staging', value:true},



                  {label:'Monsoon standby engineers', value:false},



                  {label:'Uptime target (SLA)', value:false},



                ]},



                { name: 'Enterprise', accent: 'text-[#6929c4]', bg: 'bg-[#f6f2ff]', features: [



                  {label:'Preventive maintenance', value:'Monthly + quarterly room integrity'},



                  {label:'Response SLA', value:'4-hour'},



                  {label:'NOC monitoring', value:'24/7 NOC (3 hubs)'},



                  {label:'Predictive alerts', value:true},



                  {label:'Thermal trending report', value:true},



                  {label:'Spare parts pre-staging', value:'On-site pre-staged'},



                  {label:'Monsoon standby engineers', value:true},



                  {label:'Uptime target (SLA)', value:'99.9%*'},



                ]},



              ].map((tier) => (



                <div key={tier.name} className={`rounded-xl border border-gray-200 p-4 ${tier.bg}`}>



                  <p className={`carbon-label-01 uppercase mb-3 ${tier.accent}`}>{tier.name}</p>



                  <ul className="space-y-2">



                    {tier.features.map((feat) => (



                      <li key={feat.label} className="flex items-start justify-between gap-3 carbon-body-short-01">



                        <span className="inline-flex px-2 py-0.5 bg-gray-100 text-gray-500 rounded carbon-micro uppercase tracking-wider">{feat.label}</span>



                        <span className="text-gray-900 font-medium text-right flex-shrink-0">



                          {feat.value === true ? <CheckmarkFilled className={`w-4 h-4 ${tier.name === 'Essential' ? 'text-gray-400' : tier.name === 'Professional' ? 'text-[#1565c0]' : 'text-[#6929c4]'}`} /> :



                           feat.value === false ? <span className="inline-flex items-center gap-1.5 text-gray-400"><span className="w-1.5 h-1.5 rounded-full bg-gray-300" />Not included</span> :



                           feat.value}



                        </span>



                      </li>



                    ))}



                  </ul>



                </div>



              ))}



            </div>







            {/* Important Pricing & Service Terms */}



            <div className="group p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-300 transition-colors duration-300">



              <p className="carbon-label-02 text-gray-500 uppercase tracking-wide mb-3">Important Pricing &amp; Service Terms</p>



              <ul className="space-y-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">



                <li className="flex items-start gap-2 carbon-helper-text-01 text-gray-500"><span className="text-gray-400 mt-0.5">•</span><span><strong className="text-gray-900">Pricing:</strong> All prices shown are starting points (PKR/month) for baseline configurations. Final pricing is determined following site assessment and scales with: cooling load (kW), facility complexity, redundancy requirements (N+1/2N), SLA tier, and geographic location. Travel, visitation, and non-standard parts are billed separately unless included in your agreement.</span></li>



                <li className="flex items-start gap-2 carbon-helper-text-01 text-gray-500"><span className="text-gray-400 mt-0.5">•</span><span><strong className="text-gray-900">Service Levels:</strong> Uptime targets (e.g., 99.9%), response times (e.g., 4-hour), and performance metrics are engineering baselines. Contractual commitments, remedies, exclusions, and credit calculations are defined exclusively in signed Service Level Agreements (SLAs) following site assessment.</span></li>



                <li className="flex items-start gap-2 carbon-helper-text-01 text-gray-500"><span className="text-gray-400 mt-0.5">•</span><span><strong className="text-gray-900">Performance Dependencies:</strong> Actual service performance depends on: facility infrastructure condition, client-provided access/utilities, environmental factors (monsoon, dust, grid instability), and force majeure events. Perception IT is not liable for failures caused by client infrastructure, third-party services, or events beyond reasonable control.</span></li>



                <li className="flex items-start gap-2 carbon-helper-text-01 text-gray-500"><span className="text-gray-400 mt-0.5">•</span><span><strong className="text-gray-900">Scope Boundaries:</strong> Hardware replacement costs, facility structural modifications, third-party software licensing, and non-cooling infrastructure repairs are excluded unless explicitly scoped in your agreement.</span></li>



                <li className="flex items-start gap-2 carbon-helper-text-01 text-gray-500"><span className="text-gray-400 mt-0.5">•</span><span><strong className="text-gray-900">Regulatory Compliance:</strong> Support for SBP/SECP/NFPA alignment does not constitute regulatory certification. Clients remain responsible for their own compliance obligations.</span></li>



              </ul>



            </div>











          </div>



        )}







      </div>



    </section>



  );



};

