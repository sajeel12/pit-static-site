import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Cloud, 
  Server, 
  LayoutGrid,
  CheckCircle2,
  TrendingUp,
  Shield,
  Clock,
  ArrowUpRight,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';

const CloudManagement = () => {
  const [isVisible, setIsVisible] = useState<{[key: string]: boolean}>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal-section').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Lift-and-shift or re-architect— we plan and execute migrations that minimize downtime and risk.',
      features: ['Migration assessment', 'Downtime planning', 'Data synchronization', 'Rollback procedures']
    },
    {
      icon: Server,
      title: 'Cloud Provisioning',
      description: 'Infrastructure-as-Code deployments that eliminate manual errors and enable repeatability.',
      features: ['Terraform/CloudFormation', 'Auto-scaling setup', 'Security hardening', 'Cost tagging']
    },
    {
      icon: LayoutGrid,
      title: 'Architecture Patterns',
      description: 'Proven cloud architectures for high availability, disaster recovery, and global scale.',
      features: ['Multi-region design', 'Disaster recovery', 'Load balancing', 'Caching strategies']
    }
  ];

  const caseStudies = [
    {
      title: 'IoT & Analytics Platform for Mobile Towers',
      client: 'Major African Telecom Operator',
      description: 'End-to-end digital transformation for African telecom infrastructure with comprehensive IoT and cloud platform.',
      outcomes: [
        'Real-time monitoring of tower operations',
        'Geospatial visualisation for network planning',
        'Automated data collection across regions'
      ],
      technologies: ['Azure', 'Databricks', 'MQTT', 'Kubernetes', 'AWS', 'IoT'],
      slug: 'iot-data-analytics-mobile-towers'
    },
    {
      title: 'Infrastructure-as-Code for IoT Cloud Platforms',
      client: 'Major African Telecom Operator',
      description: 'Eliminated infrastructure provisioning bottleneck using Terraform and CloudFormation.',
      outcomes: [
        'Provisioning automation reduced manual work by 95%',
        'New region deployments from 5 weeks to <48 hours',
        'Disaster recovery RTO reduced to 30 minutes'
      ],
      technologies: ['Terraform', 'AWS CloudFormation', 'S3', 'CloudWatch'],
      slug: 'cloud-iot-provisioning'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden">
        {/* 
          IMAGE PLACEHOLDER: Hero Background
          TYPE: Screenshot
          CONTENT: AWS/Azure console dashboard showing resource overview with compute, storage, and networking services
          STYLE: Dark theme, blue accents, text slightly blurred for readability
          SIZE: 1920x1080px
          FORMAT: WebP with JPG fallback
          SOURCE: Screenshot from actual AWS/Azure console (obscure sensitive info)
        */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-8">
              <Link to="/services/cloud" className="text-blue-400 hover:text-blue-300 transition-colors">
                Cloud Services
              </Link>
              <span className="text-gray-500">/</span>
              <span className="text-gray-400">Cloud Management</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Cloud<br />
              <span className="text-blue-400">Management</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-400 mb-12 font-light leading-relaxed max-w-2xl font-light">
              Strategic cloud adoption and migration services for seamless infrastructure transition.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:cloud@perception-it.com?subject=Cloud%20Management%20Inquiry"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-400 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/projects?category=cloud"
                className="group inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300"
              >
                View Case Studies
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="reveal-section py-20">
        <div className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 transition-all duration-700 ${isVisible['services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-500 mb-4 block">
              What We Offer
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold text-[#0F172A] leading-tight tracking-tight mb-6">
              Cloud Management Services
            </h2>
            <p className="text-lg text-gray-600">
              End-to-end cloud lifecycle management—from initial migration to ongoing optimisation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-lg p-8 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500"
              >
                {/* 
                  ICON PLACEHOLDER: Service Icons (3 total)
                  TYPE: Custom SVG
                  CONTENT: 
                    1. Server with migration arrow (Cloud Migration)
                    2. Infrastructure stack (Cloud Provisioning)
                    3. Blueprint document (Architecture Patterns)
                  STYLE: Line icons, blue (#3B82F6) stroke, 2px weight, rounded corners
                  SIZE: 56x56px
                  FORMAT: SVG
                  SOURCE: Create in Figma/Illustrator or source from IconFinder
                */}
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-blue-500 group-hover:text-white transition-colors duration-300" />
                  {/* <img src={`/icons/${service.title.toLowerCase().replace(/\s+/g, '-')}.svg`} alt={service.title} className="w-7 h-7" /> */}
                </div>
                
                <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <a 
                  href={`mailto:cloud@perception-it.com?subject=${encodeURIComponent(service.title)}%20Inquiry`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors group"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="reveal-section py-20 bg-white">
        <div className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 transition-all duration-700 ${isVisible['case-studies'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-500 mb-4 block">
                Case Studies
              </span>
              <h2 className="text-4xl sm:text-5xl font-semibold text-[#0F172A] leading-tight tracking-tight mb-4">
                Proven Results
              </h2>
              <p className="text-lg text-gray-600">
                Real cloud management outcomes from enterprise engagements.
              </p>
            </div>
            <Link
              to="/projects?category=cloud"
              className="group inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              View all projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* 
          CASE STUDY IMAGES NEEDED:
          1. IoT Analytics Platform Case Study:
             TYPE: Photo with overlay
             CONTENT: African cell tower with IoT sensor overlay and real-time metrics visualization
             STYLE: Split composition - photo left 60%, metrics overlay right 40%, blue tint
             SIZE: 800x450px (16:9)
             FORMAT: WebP with JPG fallback
             SOURCE: Stock photo (cell tower) + designed overlay in Figma

          2. Infrastructure-as-Code Case Study:
             TYPE: Screenshot + Diagram composite
             CONTENT: Terraform code editor with infrastructure architecture diagram side-by-side
             STYLE: VS Code dark theme, syntax highlighted, diagram showing AWS resources
             SIZE: 800x450px (16:9)
             FORMAT: WebP with JPG fallback
             SOURCE: Actual Terraform code + Cloudcraft/Draw.io diagram
        */}
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, idx) => (
              <Link
                key={idx}
                to={`/projects/case-study/${study.slug}`}
                className="group bg-gray-50 rounded-lg overflow-hidden hover:bg-white hover:shadow-xl hover:border hover:border-gray-100 transition-all duration-300"
              >
                {/* IMAGE PLACEHOLDER: Case Study Thumbnail */}
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  {/* <img src={`/images/case-studies/${study.slug}.webp`} alt={study.title} className="w-full h-full object-cover" loading="lazy" /> */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-400/50 rounded-xl mx-auto mb-2 flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-500">IMG</span>
                    </div>
                    <span className="text-xs text-gray-500">Case Study Image</span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    {study.client}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-[#0F172A] mb-3 group-hover:text-blue-600 transition-colors">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {study.description}
                </p>
                
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Key Outcomes:</p>
                  <ul className="space-y-2">
                    {study.outcomes.map((outcome, oidx) => (
                      <li key={oidx} className="flex items-start gap-2 text-sm text-gray-600">
                        <TrendingUp className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-200">
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white text-gray-600 text-xs rounded-lg border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="reveal-section py-20">
        <div className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 transition-all duration-700 ${isVisible['why-us'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-500 mb-4 block">
                Why Perception IT
              </span>
              <h2 className="text-4xl sm:text-5xl font-semibold text-[#0F172A] leading-tight tracking-tight mb-6">
                Migration without the risk
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We've migrated hundreds of workloads across AWS, Azure, and hybrid environments. 
                Our proven methodology minimizes downtime and eliminates data loss.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Shield, title: 'Zero-Downtime Migrations', desc: 'Blue-green deployment strategies' },
                  { icon: Clock, title: '14+ Years Experience', desc: 'Since the early days of AWS' },
                  { icon: CheckCircle2, title: 'Certified Experts', desc: 'AWS, Azure, and Huawei certified' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0F172A] mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* 
          IMAGE PLACEHOLDER: CTA Card Background
          TYPE: Photo
          CONTENT: David or team member in office environment, working on laptop
          STYLE: Candid shot, blurred with blue tint overlay (30% opacity), professional atmosphere
          SIZE: 800x600px (4:3)
          FORMAT: WebP with JPG fallback
          SOURCE: Company photo library or staged office shoot
        */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-8 lg:p-12 text-white relative overflow-hidden">
              {/* <img src="/images/cta-background.webp" className="absolute inset-0 w-full h-full object-cover opacity-20" /> */}
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-6">Ready to migrate?</h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Get a free migration assessment. We'll analyze your current infrastructure 
                and provide a detailed migration roadmap with cost projections.
              </p>
              
              <a 
                href="mailto:cloud@perception-it.com?subject=Migration%20Assessment"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-medium rounded-full hover:bg-blue-50 transition-colors"
              >
                Request Free Assessment
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm text-blue-200">
                  Typical response time: <span className="text-white font-medium">24 hours</span>
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloudManagement;
