import ArrowRight from '@carbon/icons-react/es/ArrowRight';
import { ECOSYSTEM_ITEMS } from '../data';

export default function EcosystemSection() {

  return (

    <section id="ecosystem" className="py-20 bg-white border-t border-[#e0e0e0]">

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <div className="mb-8 carbon-font">

          <p className="carbon-label-01 text-[#0f62fe] uppercase mb-3">Our Ecosystem</p>

          <h2 className="carbon-fluid-heading-05 text-[#0F172A] mb-4">Integrated Facility Ecosystem</h2>

          <p className="carbon-body-02 text-gray-500 mb-4">Beyond cooling, the full facility stack.</p>

          <p className="carbon-fluid-heading-03 text-[#161616] border-l-4 border-[#0f62fe] pl-6">
            Cooling does not exist in isolation. Our services connect thermal management with the infrastructure layers that dictate its performance from a single accountable team.
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">

          {ECOSYSTEM_ITEMS.map((item) => (

            <a

              key={item.title}

              href={item.link}

              className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-200"

            >

              <item.icon className="w-5 h-5 text-gray-400 mb-3" />

              <p className="carbon-heading-02 text-gray-900 mb-1">{item.title}</p>

              <p className="carbon-body-02 text-gray-500 leading-relaxed mb-3">{item.desc}</p>

              <span className="inline-flex items-center gap-1 carbon-label-01 text-gray-400 group-hover:text-[#0f62fe] transition-colors">

                Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />

              </span>

            </a>

          ))}

        </div>

        <div className="mt-8 text-center">

          <a href="/#/services/datacenter2" className="inline-flex items-center gap-1.5 carbon-body-02 text-[#0f62fe] hover:underline">

            Explore the full facility services portfolio <ArrowRight className="w-3.5 h-3.5" />

          </a>

        </div>

        <div className="mt-10 pt-8 pb-10 border-t border-gray-200 flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-between gap-4 text-center sm:text-left">

          <div>

            <p className="carbon-fluid-heading-03 text-gray-900 mb-1">One partner. One SLA. No gaps.</p>

            <p className="carbon-body-02 text-gray-500 mb-4">When power, airflow, monitoring, and suppression are validated together, cooling performance is engineered, not assumed.<br /><span className="text-[#0f62fe] font-medium">Enterprise volume pricing available for our complete Data Centre Ecosystem Integration.</span></p>

          </div>

          <a

            href="mailto:contact@perception-it.com?subject=Integrated%20Facility%20Ecosystem%20Enquiry"

            className="inline-flex items-center gap-2 px-5 py-3 bg-[#0f62fe] text-white carbon-heading-02 rounded-lg hover:bg-[#0353e9] hover:shadow-[0_0_20px_rgba(15,98,254,0.6)] transition-colors flex-shrink-0"

          >

            Request Technical Consultation

          </a>

        </div>

      </div>

    </section>

  );

};

