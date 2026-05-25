import {
  Accordion, AccordionItem,
} from '@carbon/react';
import { FAQ_ITEMS } from '../data';


export default function FAQSection() {



  return (



    <section id="faq" className="py-16 bg-white">



      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">



        <div className="mb-8 carbon-font">



          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-full mb-5">



            <span className="w-2 h-2 rounded-full bg-gray-400" />



            <span className="carbon-label-02 text-gray-600 uppercase tracking-wider">FAQ</span>



          </div>



          <h2 className="carbon-fluid-heading-04 text-[#0F172A] mb-3">Frequently Asked Questions</h2>



          <p className="carbon-body-02 text-gray-500 max-w-2xl">Common questions about cooling assessments, procurement, deployment timelines, and managed service terms.</p>



        </div>



        <div className="max-w-4xl">



          <Accordion>



            {FAQ_ITEMS.map((item, i) => (



              <AccordionItem key={i} title={item.q}>



                <p className="carbon-body-02 text-gray-600">{item.a}</p>



              </AccordionItem>



            ))}



          </Accordion>



        </div>



      </div>



    </section>



  );



};

