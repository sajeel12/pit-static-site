import { Check, Star, ArrowRight } from 'lucide-react';

const Differentiator = () => {
  const comparisons = [
    {
      title: 'vs. ServiceNow Direct',
      advantages: [
        {
          title: 'Local Accountability',
          description: '24/7 support from our Lahore/UK teams, not a global ticket queue.'
        },
        {
          title: 'Infrastructure Synergy',
          description: 'As a Huawei Certified Partner, we integrate ServiceNow with your physical server layer seamlessly.'
        },
        {
          title: 'Commercial Flexibility',
          description: 'Tailored PKR/USD models with fixed-scope options, avoiding rigid global pricing.'
        }
      ]
    },
    {
      title: 'vs. General System Integrators',
      advantages: [
        {
          title: 'Proven Scale',
          description: "14+ years delivering for Pakistan's critical infrastructure (Banking, Telco, Manufacturing)."
        },
        {
          title: 'Speed to Core',
          description: 'Deploy essential ITSM modules in 8 weeks, not 6+ months.'
        },
        {
          title: 'Data Continuity',
          description: "We don't just install software; we map your legacy assets to the new CMDB accurately."
        }
      ]
    }
  ];

  const guarantees = [
    {
      icon: <Star className="w-5 h-5" />,
      title: 'Rapid Deployment Commitment',
      description: 'Core modules live in 8 weeks or we absorb the overrun costs.*'
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: '99.95% Uptime SLA',
      description: 'Contractual penalties apply if integration stability targets are missed.'
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: 'Fixed-Scope Pricing',
      description: 'No hidden change orders. Your commercial model is locked before execution.'
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: 'Certified Expertise',
      description: 'Only ServiceNow-certified architects lead your deployment.'
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#0F172A] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400 mb-4 block">
            The Differentiator
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight mb-6">
            The Perception-IT Advantage
          </h2>
          <p className="text-lg text-gray-400">
            Integrated Hardware & Software Delivery. Faster Time-to-Value. Zero Integration Blind Spots.
          </p>
        </div>

        {/* Why We Outperform */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold text-white text-center mb-12">Why We Outperform</h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {comparisons.map((comparison, idx) => (
              <div 
                key={idx}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full mb-6">
                  <span className="text-sm font-semibold text-blue-400">VS</span>
                  <span className="text-sm text-white">{comparison.title.replace('vs. ', '')}</span>
                </div>
                
                <ul className="space-y-6">
                  {comparison.advantages.map((advantage, aidx) => (
                    <li key={aidx} className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{advantage.title}</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">{advantage.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Guarantee */}
        <div className="bg-[#0a1224] rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-semibold text-white mb-2">Our Performance Guarantee</h3>
            <p className="text-gray-400">Backed by contractually defined SLAs and risk buffers.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee, idx) => (
              <div 
                key={idx}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                  {guarantee.icon}
                </div>
                <h4 className="font-semibold text-white mb-2 text-sm">{guarantee.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{guarantee.description}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-500 text-center mt-8">
            *Terms apply to defined 'Rapid Start' scopes. Full enterprise transformations follow a phased roadmap.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-400 transition-all duration-300 group"
          >
            Experience the Advantage
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Differentiator;
