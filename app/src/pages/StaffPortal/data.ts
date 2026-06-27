export interface PortalResource {
  id: string;
  title: string;
  description: string;
  fileName: string;
  fileType: 'PDF' | 'Word' | 'Excel';
  category: string;
}

export interface PortalSection {
  id: string;
  label: string;
  publicPath: string;
  categories: string[];
  resources: PortalResource[];
}

export const PORTAL_SECTIONS: PortalSection[] = [
  {
    id: 'cooling',
    label: 'Cooling & Airflow',
    publicPath: '/#/infrastructure/data-centre-services/cooling',
    categories: ['Costing', 'Case Studies', 'Testimonials', 'Training', 'Tools'],
    resources: [
      {
        id: 'cooling-costing-formulas',
        title: 'Cooling Costing Formulas',
        description: 'Margin calculators, pricing matrices, and discount structures for cooling proposals.',
        fileName: 'cooling-costing-formulas.xlsx',
        fileType: 'Excel',
        category: 'Costing',
      },
      {
        id: 'cooling-case-study-intake',
        title: 'Case Study Intake Form',
        description: 'Template for collecting project details, outcomes, and client quotes for new case studies.',
        fileName: 'case-study-intake.docx',
        fileType: 'Word',
        category: 'Case Studies',
      },
      {
        id: 'cooling-case-study-checklist',
        title: 'Case Study Submission Checklist',
        description: 'Review checklist before publishing a case study to the public site.',
        fileName: 'case-study-checklist.pdf',
        fileType: 'PDF',
        category: 'Case Studies',
      },
      {
        id: 'cooling-testimonial-form',
        title: 'Testimonial Request Form',
        description: 'Template for requesting client quotes and approval for public testimonials.',
        fileName: 'testimonial-request.docx',
        fileType: 'Word',
        category: 'Testimonials',
      },
      {
        id: 'cooling-testimonial-workflow',
        title: 'Testimonial Approval Workflow',
        description: 'Step-by-step process for collecting, reviewing, and publishing client testimonials.',
        fileName: 'testimonial-workflow.pdf',
        fileType: 'PDF',
        category: 'Testimonials',
      },
      {
        id: 'cooling-thermal-audit-sop',
        title: 'Thermal Audit SOP',
        description: 'Standard operating procedure for conducting on-site thermal assessments.',
        fileName: 'thermal-audit-sop.pdf',
        fileType: 'PDF',
        category: 'Training',
      },
      {
        id: 'cooling-cfd-brief',
        title: 'CFD Capability Brief',
        description: 'Internal guide to Computational Fluid Dynamics capabilities and sales talking points.',
        fileName: 'cfd-capability-brief.pdf',
        fileType: 'PDF',
        category: 'Training',
      },
      {
        id: 'cooling-derating-guide',
        title: 'Pakistan Derating Guide',
        description: 'Equipment derating factors for Pakistani ambient temperatures and grid conditions.',
        fileName: 'pakistan-derating-guide.pdf',
        fileType: 'PDF',
        category: 'Training',
      },
      {
        id: 'cooling-audit-checklist',
        title: 'Thermal Audit Checklist',
        description: 'Field checklist for thermal audits — equipment, measurements, and documentation.',
        fileName: 'thermal-audit-checklist.pdf',
        fileType: 'PDF',
        category: 'Tools',
      },
      {
        id: 'cooling-site-survey',
        title: 'Site Survey Template',
        description: 'Structured template for data centre site surveys and pre-installation assessment.',
        fileName: 'site-survey-template.docx',
        fileType: 'Word',
        category: 'Tools',
      },
      {
        id: 'cooling-commissioning-signoff',
        title: 'Commissioning Sign-Off',
        description: 'Client sign-off form for cooling system commissioning and handover.',
        fileName: 'commissioning-signoff.pdf',
        fileType: 'PDF',
        category: 'Tools',
      },
    ],
  },
  {
    id: 'power',
    label: 'Power & UPS',
    publicPath: '/#/infrastructure/data-centre-services/power-ups',
    categories: ['Sizing', 'Assessment', 'Case Studies', 'Operations', 'Pricing', 'Training'],
    resources: [
      {
        id: 'power-sizing-guide',
        title: 'UPS Sizing Calculator Guide',
        description: 'Step-by-step guide for calculating correct UPS size for any load profile.',
        fileName: 'ups-sizing-guide.pdf',
        fileType: 'PDF',
        category: 'Sizing',
      },
      {
        id: 'power-kva-reference',
        title: 'kVA-to-kW Reference Sheet',
        description: 'Quick reference for converting kVA to kW across common power factors.',
        fileName: 'kva-kw-reference.pdf',
        fileType: 'PDF',
        category: 'Sizing',
      },
      {
        id: 'power-load-assessment',
        title: 'Load Assessment Template',
        description: 'Template for profiling client load and documenting power requirements.',
        fileName: 'load-assessment-template.docx',
        fileType: 'Word',
        category: 'Assessment',
      },
      {
        id: 'power-site-survey',
        title: 'Power Site Survey Form',
        description: 'Pre-installation survey form for power and UPS deployments.',
        fileName: 'power-site-survey.docx',
        fileType: 'Word',
        category: 'Assessment',
      },
      {
        id: 'power-case-study-intake',
        title: 'Case Study Intake Form',
        description: 'Template for collecting project details, outcomes, and client quotes for Power & UPS case studies.',
        fileName: 'case-study-intake-ups.docx',
        fileType: 'Word',
        category: 'Case Studies',
      },
      {
        id: 'power-battery-sop',
        title: 'Battery Replacement SOP',
        description: 'Standard operating procedure for safe UPS battery replacement.',
        fileName: 'battery-replacement-sop.pdf',
        fileType: 'PDF',
        category: 'Operations',
      },
      {
        id: 'power-generator-checklist',
        title: 'Generator Sync Testing Checklist',
        description: 'Validation checklist for generator synchronization and auto-transfer testing.',
        fileName: 'generator-sync-checklist.pdf',
        fileType: 'PDF',
        category: 'Operations',
      },
      {
        id: 'power-sla-pricing',
        title: 'SLA Tier Pricing Sheet',
        description: 'Internal pricing for Basic, Standard, and Enterprise SLA tiers.',
        fileName: 'sla-pricing.xlsx',
        fileType: 'Excel',
        category: 'Pricing',
      },
      {
        id: 'power-volume-matrix',
        title: 'Volume Discount Matrix',
        description: 'Discount structures for multi-site and volume UPS deployments.',
        fileName: 'volume-discount-matrix.xlsx',
        fileType: 'Excel',
        category: 'Pricing',
      },
      {
        id: 'power-topology-guide',
        title: 'UPS Topology Guide',
        description: 'Internal sales guide: Online, Line-Interactive, Standby — when to recommend each.',
        fileName: 'ups-topology-guide.pdf',
        fileType: 'PDF',
        category: 'Training',
      },
      {
        id: 'power-battery-comparison',
        title: 'Li-ion vs VRLA Comparison',
        description: 'Side-by-side comparison for client conversations and proposal writing.',
        fileName: 'li-ion-vrla-comparison.pdf',
        fileType: 'PDF',
        category: 'Training',
      },
      {
        id: 'power-grid-briefing',
        title: 'Pakistani Grid Fluctuation Briefing',
        description: 'Talking points and data for explaining Pakistani grid challenges to clients.',
        fileName: 'grid-fluctuation-briefing.pdf',
        fileType: 'PDF',
        category: 'Training',
      },
    ],
  },
];
