import '../../../../styles/carbon-typography.css';

export default function TrustTiles() {



  const reasons = [



    'Certified Tier 1 Supply Chain',



    'Pakistan-Specific Engineering Protocols',



    'Single-Partner Accountability for precision cooling, containment and temperature stability.',



    'Single-Partner Accountability for the full purchase, installation and commissioning cycle.',



  ];



  return (



    <section className="py-16 bg-white border-t border-[#e0e0e0]">



      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">



        <div className="text-center mb-10 carbon-font">



          <h2 className="carbon-fluid-heading-04 text-[#0F172A] mb-3">Why Perception IT</h2>



          <p className="carbon-body-02 text-gray-500 max-w-2xl mx-auto">Four reasons data centre operators across Pakistan trust Perception IT.</p>



        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">



          {reasons.map((reason) => (



            <div key={reason} className="flex items-center gap-3 p-4 bg-gray-50 border border-gray-100 rounded-lg">



              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />



              <span className="carbon-label-02 text-gray-900">{reason}</span>



            </div>



          ))}



        </div>



      </div>



    </section>



  );



};

