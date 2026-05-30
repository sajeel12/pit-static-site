import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Thermometer, BatteryCharging, Server, Eye, Flame, Layers, Construction, Settings, Plus, Minus } from 'lucide-react';

const services = [
  {
    icon: Thermometer,
    title: 'Cooling & Airflow',
    link: '/infrastructure/data-centre-services/cooling-thermal',
    sections: [
      {
        label: 'Target Outcomes',
        items: [
          'PUE 1.8 → 1.35 (typical range)',
          '25–40% energy reduction (typical range)',
        ],
      },
      {
        label: 'The Offer',
        items: [
          'Precision cooling units',
          'Aisle containment',
          'AI-driven setpoint optimisation',
        ],
      },
      {
        label: 'Technical Execution',
        items: [
          'VFD-controlled compressors',
          'CFD-validated airflow modelling',
          'Predictive thermal algorithms',
        ],
      },
      {
        label: 'Validation',
        items: [
          'Baseline PUE metering',
          'Pre/post energy tracking',
          'ASHRAE TC 9.9 compliance review',
        ],
      },
    ],
  },
  {
    icon: BatteryCharging,
    title: 'Power & UPS',
    link: '/services/power-ups',
    sections: [
      {
        label: 'Target Outcomes',
        items: [
          '15–20% power waste reduction (typical range)',
          'Load-aligned efficiency optimisation (typical range)',
        ],
      },
      {
        label: 'The Offer',
        items: [
          'Right-sized UPS configurations',
          'Lithium-ion battery retrofits',
          'Harmonic filtering',
        ],
      },
      {
        label: 'Technical Execution',
        items: [
          'Real-time load profiling',
          'Power quality analysis',
          'Thermal load integration modelling',
        ],
      },
      {
        label: 'Validation',
        items: [
          'Pre/post efficiency curves',
          'IEEE 519 harmonic compliance',
          'Load-bank testing protocols',
        ],
      },
    ],
  },
  {
    icon: Server,
    title: 'Rack & Cabinet',
    link: '/services/rack-cabinets',
    sections: [
      {
        label: 'Target Outcomes',
        items: [
          '10–15% cooling load reduction (typical range)',
          'Eliminated bypass airflow (target outcome)',
        ],
      },
      {
        label: 'The Offer',
        items: [
          'Hot/cold aisle containment',
          'Blanking panels',
          'Brush-sealed cable management',
        ],
      },
      {
        label: 'Technical Execution',
        items: [
          'Airflow pressure mapping',
          'Thermal imaging validation',
          'Modular containment design',
        ],
      },
      {
        label: 'Validation',
        items: [
          'Baseline bypass airflow audit',
          'Containment integrity testing',
          'Delta-T verification',
        ],
      },
    ],
  },
  {
    icon: Eye,
    title: 'Environmental Monitoring',
    link: '/services/environmental-monitoring',
    sections: [
      {
        label: 'Target Outcomes',
        items: [
          'Proactive thermal risk mitigation (target outcome)',
          'Zero unplanned thermal events (target outcome)',
        ],
      },
      {
        label: 'The Offer',
        items: [
          'Rack-level temperature/humidity/leak sensors',
          'Predictive alerting platform',
        ],
      },
      {
        label: 'Technical Execution',
        items: [
          'IoT sensor mesh deployment',
          'ML-based anomaly detection',
          'SLA-backed alert escalation',
        ],
      },
      {
        label: 'Validation',
        items: [
          'Sensor calibration logs',
          'False-positive rate tracking',
          'Alert-to-resolution SLA reporting',
        ],
      },
    ],
  },
  {
    icon: Flame,
    title: 'Fire Suppression',
    link: '/services/fire-suppression',
    sections: [
      {
        label: 'Target Outcomes',
        items: [
          'Regulatory compliance (target outcome)',
          'Insurance premium optimisation (target outcome)',
        ],
      },
      {
        label: 'The Offer',
        items: [
          'FM200/clean-agent systems',
          'Thermal recovery planning',
          'Regulatory gap assessment',
        ],
      },
      {
        label: 'Technical Execution',
        items: [
          'Risk-based system sizing',
          'NFPA 2001 compliance mapping',
          'Post-discharge recovery protocols',
        ],
      },
      {
        label: 'Validation',
        items: [
          'Pre-installation risk audit',
          'Certification documentation',
          'Insurer requirement alignment',
        ],
      },
    ],
  },
  {
    icon: Construction,
    title: 'Design & Build',
    link: '/services/design-build',
    sections: [
      {
        label: 'Target Outcomes',
        items: [
          'Zero design rework (target outcome)',
          'On-time, on-budget delivery (target outcome)',
          'TCO-optimised architecture from day one (target outcome)',
        ],
      },
      {
        label: 'The Offer',
        items: [
          'CFD-validated layout design',
          'Phased construction planning',
          'Change-order mitigation',
        ],
      },
      {
        label: 'Technical Execution',
        items: [
          '3D thermal modelling',
          'Stakeholder alignment workshops',
          'Procurement sequencing optimisation',
        ],
      },
      {
        label: 'Validation',
        items: [
          'Design freeze sign-offs',
          'Milestone tracking',
          'Post-commissioning performance validation',
        ],
      },
    ],
  },
  {
    icon: Settings,
    title: 'Maintenance & Support',
    link: '/services/maintenance-support',
    sections: [
      {
        label: 'Target Outcomes',
        items: [
          'Predictable OpEx (target outcome)',
          '99.9% SLA-backed availability (target outcome)',
        ],
      },
      {
        label: 'The Offer',
        items: [
          'Fixed-price maintenance contracts',
          '24/7 engineering support',
          'Proactive health monitoring',
        ],
      },
      {
        label: 'Technical Execution',
        items: [
          'Predictive component lifecycle tracking',
          'Local spare parts inventory',
          'Automated patch management',
        ],
      },
      {
        label: 'Validation',
        items: [
          'Monthly SLA performance reports',
          'MTTR tracking',
          'Incident post-mortem documentation',
        ],
      },
    ],
  },
  {
    icon: Layers,
    title: 'Cross-Service Bundles',
    link: '/services/infrastructure',
    sections: [
      {
        label: 'Target Outcomes',
        items: [
          '~30% lower total cost (typical range)',
          'Unified accountability (target outcome)',
        ],
      },
      {
        label: 'The Offer',
        items: [
          'Integrated cooling + power + monitoring under single SLA, consolidated procurement',
        ],
      },
      {
        label: 'Technical Execution',
        items: [
          'Unified architecture design',
          'Cross-discipline dependency mapping',
          'Single-point reporting dashboard',
        ],
      },
      {
        label: 'Validation',
        items: [
          'TCO baseline modelling',
          'Multi-vendor consolidation audit',
          'Unified uptime/efficiency reporting',
        ],
      },
    ],
  },
];

export default function ServiceCategoriesSection() {
  const [openSections, setOpenSections] = useState<Record<string, Set<string>>>({
    'Cooling & Airflow': new Set(['Target Outcomes']),
    'Power & UPS': new Set(['Target Outcomes']),
    'Rack & Cabinet': new Set(['Target Outcomes']),
    'Environmental Monitoring': new Set(['Target Outcomes']),
    'Fire Suppression': new Set(['Target Outcomes']),
    'Design & Build': new Set(['Target Outcomes']),
    'Maintenance & Support': new Set(['Target Outcomes']),
    'Cross-Service Bundles': new Set(['Target Outcomes']),
  });

  const toggleSection = (cardTitle: string, sectionLabel: string) => {
    setOpenSections((prev) => {
      const cardOpen = new Set(prev[cardTitle] || []);
      if (cardOpen.has(sectionLabel)) {
        cardOpen.delete(sectionLabel);
      } else {
        cardOpen.add(sectionLabel);
      }
      return { ...prev, [cardTitle]: cardOpen };
    });
  };

  const isOpen = (cardTitle: string, sectionLabel: string) =>
    !!openSections[cardTitle]?.has(sectionLabel);

  return (
    <section id="services" className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16">
          <div className="max-w-4xl">
            <p className="carbon-label-01 text-[#0f62fe] uppercase mb-3">Cost Optimisation</p>
            <h2 className="carbon-fluid-heading-05 text-[#0F172A] mb-6">
              Infrastructure disciplines that drive cost reduction
            </h2>
            <p className="carbon-body-02 text-[#161616] mb-4">
              We deliver measurable ROI across three fronts
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg border border-gray-200 border-l-[3px] border-l-[#0f62fe]">
                <div className="w-10 h-10 rounded-lg bg-[#0f62fe]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#0f62fe] carbon-heading-02">01</span>
                </div>
                <div>
                  <p className="carbon-heading-02 text-gray-900 mb-1">Lower OpEx</p>
                  <p className="carbon-body-02 text-gray-500">Reduce energy, maintenance, and emergency spend</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg border border-gray-200 border-l-[3px] border-l-[#0f62fe]">
                <div className="w-10 h-10 rounded-lg bg-[#0f62fe]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#0f62fe] carbon-heading-02">02</span>
                </div>
                <div>
                  <p className="carbon-heading-02 text-gray-900 mb-1">Higher Resilience</p>
                  <p className="carbon-body-02 text-gray-500">Avoid costly downtime and emergency repairs</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg border border-gray-200 border-l-[3px] border-l-[#a855f7]">
                <div className="w-10 h-10 rounded-lg bg-[#a855f7]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#a855f7] carbon-heading-02">03</span>
                </div>
                <div>
                  <p className="carbon-heading-02 text-gray-900 mb-1">Flexible Deployment</p>
                  <p className="carbon-body-02 text-gray-500">Ecosystem bundles or phased individual services</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <p className="carbon-label-01 text-[#0f62fe] uppercase mb-3">Benchmarks</p>
          <h2 className="carbon-fluid-heading-05 text-[#0F172A] mb-4">
            Infrastructure optimisation benchmarks
          </h2>
          <p className="carbon-body-02 text-gray-500 max-w-2xl mb-3">
            We design interventions to achieve ASHRAE and Uptime Institute efficiency ranges adjusted for Pakistan&apos;s climate, utility profiles, and facility classes. Actual results depend on facility condition, scope, and implementation.
          </p>
          <p className="carbon-label-02 text-[#0f62fe]">
            Click on a service card below for full specifications, pricing tiers, and deployment methodology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative bg-white rounded-xl border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 flex flex-col overflow-hidden"
            >
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#0f62fe]/[0.06] flex items-center justify-center pointer-events-none">
                <s.icon className="w-5 h-5 text-[#0f62fe]/40" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <Link to={s.link} className="flex items-center gap-3 mb-5 group/title">
                  <p className="carbon-heading-02 text-gray-900">{s.title}</p>
                  <span className="text-gray-300 text-lg leading-none group-hover/title:text-[#0f62fe] transition-colors">→</span>
                </Link>

                <div className="flex-1 space-y-3">
                  {s.sections.map((section) => (
                    <div key={section.label}>
                      {section.label === 'Target Outcomes' ? (
                        <div>
                          <p className="carbon-label-01 text-gray-500 uppercase tracking-wider mb-1.5">{section.label}</p>
                          <ul className="space-y-1 carbon-body-02 text-gray-900">
                            {section.items.map((item) => (
                              <li key={item} className="flex items-start gap-2">
                                <span className="w-1 h-1 rounded-full bg-[#0f62fe] mt-2 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <>
                          <button
                            type="button"
                            onClick={() => toggleSection(s.title, section.label)}
                            className="w-full flex items-center justify-between px-3 py-2 rounded-md bg-[#f8f9fc] hover:bg-[#0f62fe]/5 text-gray-700 carbon-helper-text-01 uppercase tracking-wider hover:text-[#0f62fe] transition-colors"
                          >
                            <span>{section.label}</span>
                            {isOpen(s.title, section.label) ? (
                              <Minus className="w-3.5 h-3.5 text-[#0f62fe]" />
                            ) : (
                              <Plus className="w-3.5 h-3.5 text-[#0f62fe]" />
                            )}
                          </button>
                          {isOpen(s.title, section.label) && (
                            <ul className="mt-1.5 ml-4 space-y-1 carbon-body-02 text-gray-600">
                              {section.items.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                  <span className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>

                <Link
                  to={s.link}
                  className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-end text-[#0f62fe] carbon-label-02 uppercase group/cta"
                >
                  <span>View Page</span>
                  <span className="text-lg leading-none ml-2">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
