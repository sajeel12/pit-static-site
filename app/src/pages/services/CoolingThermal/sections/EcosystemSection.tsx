import {
  ArrowRight,
} from '@carbon/icons-react';
import { ECOSYSTEM_ITEMS } from '../data';
import '../../../../styles/carbon-typography.css';

export default function EcosystemSection() {



  return (



    <section id="ecosystem" className="py-20 bg-[#FAFAFA] border-t border-[#e0e0e0]">



      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">



        <div className="mb-8 carbon-font">



          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#24a148]/8 border border-[#24a148]/15 rounded-full mb-5">



            <span className="w-2 h-2 rounded-full bg-[#24a148]" />



            <span className="carbon-label-02 text-[#24a148] uppercase tracking-wider">Ecosystem</span>



          </div>



          <h2 className="carbon-fluid-heading-04 text-[#0F172A] mb-3">Integrated Facility Ecosystem</h2>



          <p className="carbon-body-02 text-gray-500 max-w-2xl">Cooling does not exist in isolation. Our services connect thermal management with the infrastructure layers that dictate its performance from a single accountable team.</p>



        </div>







        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">



          {ECOSYSTEM_ITEMS.map((item) => (



            <a



              key={item.title}



              href={item.link}



              className="group p-5 bg-white rounded-lg border border-[#e0e0e0] hover:border-gray-300 transition-all duration-200"



            >



              <item.icon className="w-5 h-5 text-gray-400 mb-3" />



              <p className="carbon-heading-02 text-gray-900 mb-1">{item.title}</p>



              <p className="carbon-body-02 text-gray-500 leading-relaxed mb-3">{item.desc}</p>



              <span className="inline-flex items-center gap-1 carbon-label-01 text-gray-400 group-hover:text-[#00d4ff] transition-colors">



                Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />



              </span>



            </a>



          ))}



        </div>







        <div className="mt-8 text-center">



          <a href="/#/services/datacenter2" className="inline-flex items-center gap-1.5 carbon-body-02 text-[#00d4ff] hover:underline">



            Explore the full facility services portfolio <ArrowRight className="w-3.5 h-3.5" />



          </a>



        </div>







        <div className="mt-10 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">



          <div>



            <p className="carbon-heading-02 text-gray-900 mb-1">One partner. One SLA. No gaps.</p>



            <p className="carbon-body-02 text-gray-500">When power, airflow, monitoring, and suppression are validated together, cooling performance is engineered, not assumed.</p>



          </div>



          <a



            href="mailto:contact@perception-it.com?subject=Integrated%20Facility%20Ecosystem%20Enquiry"



            className="inline-flex items-center gap-2 px-5 py-3 bg-[#0f62fe] text-white carbon-heading-02 rounded-lg hover:bg-[#0353e9] hover:shadow-[0_0_20px_rgba(15,98,254,0.6)] transition-colors flex-shrink-0"



          >



            Speak to an Engineer



          </a>



        </div>



      </div>



    </section>



  );



};

