import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Check, Mail, ChevronDown, ChevronUp, TrendingDown, Zap, DollarSign, Award, Globe, Shield, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';
import CrossSellCard, { CloudCostOptimisationCrossSell } from '../../components/CrossSellCard';

const CloudCostOptimisation = () => {
  const [auditExpanded, setAuditExpanded] = useState(false);
  const [sprintExpanded, setSprintExpanded] = useState(false);
  const [handoverExpanded, setHandoverExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState<{[key: string]: boolean}>({});
  const heroRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center bg-[#0F172A] overflow-hidden">
        {/* 
          IMAGE PLACEHOLDER: Hero Background
          TYPE: Screenshot
          CONTENT: AWS Cost Explorer showing 6-month declining cost trend line graph with savings annotations
          STYLE: Dark theme, green downward trend line, cost amounts in USD, blue accents
          SIZE: 1920x1080px
          FORMAT: WebP with JPG fallback
          SOURCE: Screenshot from AWS Cost Explorer (mock data if needed)
        */}
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500 rounded-full blur-3xl" />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.25em] text-blue-400 mb-8">
              Cloud Services
            </span>
            
            <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Cloud & Cost<br />
              <span className="text-blue-400">Optimisation</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-400 mb-12 font-light leading-relaxed max-w-2xl font-light">
              Cut AWS/Azure bills by 40%—without risking application uptime or performance.
            </p>
            
            <a
              href="mailto:cloud-audit@perception-it.com?subject=Waste%20Audit"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-400 transition-all duration-300 text-lg"
            >
              <Mail className="w-5 h-5" />
              Get Free Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            {/* Trust Badges */}
            <div className="mt-12 pt-12 border-t border-white/10">
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3 px-5 py-3 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">14+ Years</div>
                    <div className="text-xs text-gray-400">Experience</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-5 py-3 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Huawei Partner</div>
                    <div className="text-xs text-gray-400">Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
        </div>
      </section>

      {/* Meet Your Lead Consultant */}
      <section id="consultant" className="reveal-section py-16 lg:py-20 bg-white border-b border-gray-100">
        <div className={`max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 transition-all duration-700 ${isVisible['consultant'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Photo */}
            <div className="relative flex-shrink-0">
              <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-lg overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src="/team/david_headshot.jpg" 
                  alt="David Pridmore" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                <Shield className="w-5 h-5 text-white" />
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-blue-500 mb-3">
                Meet Your Lead Consultant
              </span>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#0F172A] mb-4 leading-tight">
                David Pridmore
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-2xl">
                Former British military engineer with 14+ years of enterprise IT leadership. 
                Huawei-certified cloud architect who's delivered cost optimisation programmes 
                for telecom, finance, and government sectors across three continents.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg">
                  <Award className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium text-blue-700">Huawei Certified</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg">
                  <Globe className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">3 Continents Experience</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-lg">
                  <TrendingDown className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium text-green-700">PKR 50M+ Saved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="reveal-section py-20">
        <div className={`max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 transition-all duration-700 ${isVisible['problem'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-500 mb-4 block">
              The Challenge
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold text-[#0F172A] mb-6 leading-tight tracking-tight">
              The Cloud Cost Trap
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Cloud bills rise faster than revenue. This isn't growth—it's margin drain.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: TrendingDown, 
                title: 'Idle Infrastructure', 
                desc: 'Servers running 24/7 that deliver value only 4 hours/day.',
                color: 'red'
              },
              { 
                icon: Zap, 
                title: 'Over-Provisioning', 
                desc: 'Paying for 16GB RAM when peak load only hits 4GB.',
                color: 'orange'
              },
              { 
                icon: DollarSign, 
                title: 'Orphaned Storage', 
                desc: 'Forgotten snapshots and unattached disks billing monthly.',
                color: 'yellow'
              },
              { 
                icon: ArrowRight, 
                title: 'On-Demand Waste', 
                desc: 'Missing 60% savings by not using Reserved Instances.',
                color: 'blue'
              },
            ].map((item, idx) => (
              <div 
                key={idx}
                className="group p-8 bg-white rounded-lg border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                {/* 
                  ICON PLACEHOLDER: Problem Icons (4 total)
                  TYPE: Custom SVG Illustrations
                  CONTENT:
                    1. Idle server (sleeping server icon with Zzz)
                    2. Oversized VM (VM with 'too big' arrows)
                    3. Orphaned disk (floating disk with question mark)
                    4. RI calculator (calculator with percentage sign)
                  STYLE: Flat illustrations, colored backgrounds matching theme (red, orange, yellow, blue)
                  SIZE: 48x48px
                  FORMAT: SVG
                  SOURCE: Create in Figma or source from Undraw/IconFinder
                */}
                <div className={`w-12 h-12 rounded-xl bg-${item.color}-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-6 h-6 text-${item.color}-500`} />
                  {/* <img src={`/icons/problem-${item.title.toLowerCase().replace(/\s+/g, '-')}.svg`} alt={item.title} className="w-6 h-6" /> */}
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof / Case Study Section */}
      <section id="case-study" className="reveal-section py-20 bg-white">
        <div className={`max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 transition-all duration-700 delay-100 ${isVisible['case-study'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-blue-700">Verified Client Success Story</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#0F172A] leading-tight tracking-tight mb-4">
              Breaking the Cost-to-Scale Link
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl">
              How a Tier-1 telecom provider cut cloud costs by 37% while handling 3x more data
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* 
          IMAGE PLACEHOLDER: Case Study Thumbnail
          TYPE: Split Screenshot
          CONTENT: Before $890K/month vs After $560K/month AWS cost dashboard side-by-side
          STYLE: Left side red highlight on high costs, right side green highlight on savings, 37% reduction badge
          SIZE: 800x600px (4:3)
          FORMAT: WebP with JPG fallback
          SOURCE: AWS Cost Explorer screenshots with annotation in Figma
        */}
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center border border-gray-200">
              {/* <img src="/images/case-studies/cost-optimization-dashboard.webp" alt="Cost Dashboard" className="w-full h-full object-cover rounded-lg" loading="lazy" /> */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-300 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <TrendingDown className="w-10 h-10 text-gray-400" />
                </div>
                <span className="text-sm text-gray-400">Cost Dashboard Visualization</span>
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-sm font-medium text-blue-700">Verified Results</span>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-2">The Risk</h4>
                  <p className="text-gray-600 leading-relaxed">
                    A Tier-1 provider faced linear cost scaling—sensor data growth meant PKR 3.9M annual budget overrun.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">The Solution</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Automated S3 lifecycle tiering and EC2 right-sizing prevented PKR 3.9M in annual waste.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-2">The Outcome</h4>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    PKR 890K/month → PKR 560K/month (37% reduction). System handles 3x more data with zero performance degradation.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="px-6 py-4 bg-green-50 rounded-xl">
                      <div className="text-3xl font-light text-green-600">37%</div>
                      <div className="text-xs text-green-700 uppercase tracking-wide mt-1">Cost Reduction</div>
                    </div>
                    <div className="px-6 py-4 bg-blue-50 rounded-xl">
                      <div className="text-3xl font-light text-blue-600">3x</div>
                      <div className="text-xs text-blue-700 uppercase tracking-wide mt-1">Data Volume</div>
                    </div>
                    <div className="px-6 py-4 bg-gray-50 rounded-xl">
                      <div className="text-3xl font-light text-gray-600">0%</div>
                      <div className="text-xs text-gray-700 uppercase tracking-wide mt-1">Performance Loss</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <blockquote className="border-l-2 border-blue-500 pl-6 py-2">
                <p className="text-lg text-gray-700 italic leading-relaxed mb-4">
                  "Perception IT de-risked our entire scaling strategy. We process 3x the data without fearing an unpredictable bill."
                </p>
                <footer className="text-sm text-gray-500">
                  — CTO, Mobile Network Infrastructure
                </footer>
              </blockquote>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/projects/cloud-infrastructure-iot"
                  className="group inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                  View full case study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/projects?category=cloud-cost"
                  className="inline-flex items-center gap-2 text-gray-500 font-medium hover:text-gray-700 transition-colors"
                >
                  See all projects
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section id="outcomes" className="reveal-section py-20">
        <div className={`max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 transition-all duration-700 delay-200 ${isVisible['outcomes'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-500 mb-4 block">
              Outcomes
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold text-[#0F172A] leading-tight tracking-tight mb-6">
              What We Deliver
            </h2>
            <p className="text-lg text-gray-600">
              Measurable results with full risk controls.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: '40%',
                label: 'Cost Reduction',
                title: 'Lower Cloud Bills',
                desc: 'Right-size instances, enforce auto-scaling, move storage to cheaper tiers, apply Reserved Instances.',
                proof: 'PKR 4.2M/month saved on AWS estate (90 days)',
                color: 'green'
              },
              {
                metric: '2x',
                label: 'Performance Gain',
                title: 'Faster Applications',
                desc: 'Optimize resource allocation per workload—not just shrink everything.',
                proof: 'IoT platform handled 3x data volume post-optimisation',
                color: 'blue'
              },
              {
                metric: '100%',
                label: 'Accountability',
                title: 'Pay For What You Use',
                desc: 'Hard provisioning limits, automated non-prod shutdown, cost tagging enforcement.',
                proof: '61% idle resource reduction (60 days)',
                color: 'purple'
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="group relative p-10 bg-white rounded-lg border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-${item.color}-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="mb-8">
                  <div className={`text-6xl font-light text-${item.color}-500 mb-2`}>{item.metric}</div>
                  <div className={`text-sm uppercase tracking-wide text-${item.color}-600`}>{item.label}</div>
                </div>
                
                <h3 className="text-xl font-semibold text-[#0F172A] mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{item.desc}</p>
                
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    <span className={`font-medium text-${item.color}-600`}>Proof:</span> {item.proof}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section id="audience" className="reveal-section py-20 bg-white">
        <div className={`max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 transition-all duration-700 delay-300 ${isVisible['audience'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-500 mb-4 block">
                Who It's For
              </span>
              <h2 className="text-4xl sm:text-5xl font-semibold text-[#0F172A] leading-tight tracking-tight mb-6">
                Built for teams that need results.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Not for initial cloud migrations. We optimize existing estates—we don't do first-time setups.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                'CFOs seeing cloud costs rise faster than revenue',
                'CTOs whose teams provision "just in case" capacity',
                'Companies using AWS/Azure without FinOps practice',
                'Teams lacking time to audit bills line-by-line'
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300"
                >
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Sell Section */}
      <section id="cross-sell" className="reveal-section py-16 lg:py-20 bg-gray-50">
        <div className={`max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 transition-all duration-700 delay-400 ${isVisible['cross-sell'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid md:grid-cols-2 gap-8">
            <CloudCostOptimisationCrossSell />
            <CrossSellCard
              variant="journey"
              title="Related Reading"
              description="Case studies and insights on cloud optimisation."
              items={[
                {
                  title: 'Farmdar Case Study',
                  description: 'How we reduced cloud costs by 40% for an IoT platform',
                  link: '/projects'
                },
                {
                  title: 'FinOps Best Practices',
                  description: 'Our guide to sustainable cloud cost management',
                  link: '#services'
                }
              ]}
            />
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section id="process" className="reveal-section py-20">
        <div className={`max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 transition-all duration-700 delay-400 ${isVisible['process'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-500 mb-4 block">
              Process
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold text-[#0F172A] leading-tight tracking-tight">
              Three steps to savings.
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Free Waste Audit',
                duration: '15 minutes',
                content: [
                  'Exact waste locations (e.g., "32 idle EC2 instances: PKR 217K/month")',
                  'Total PKR savings potential',
                  'Execution plan with risk controls'
                ],
                expanded: auditExpanded,
                setExpanded: setAuditExpanded
              },
              {
                step: '02',
                title: 'Optimisation Sprint',
                duration: '4–8 weeks',
                content: [
                  'Pre-change performance baselines',
                  'Rollback plans for every change',
                  'Daily spend dashboards'
                ],
                expanded: sprintExpanded,
                setExpanded: setSprintExpanded
              },
              {
                step: '03',
                title: 'The Handover',
                duration: 'Documentation & training',
                content: [
                  'Documented changes with full runbooks',
                  'Team training on new baseline',
                  'No lock-in, full knowledge transfer'
                ],
                expanded: handoverExpanded,
                setExpanded: setHandoverExpanded
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-lg border border-gray-100 overflow-hidden hover:border-blue-200 transition-colors duration-300"
              >
                <button
                  onClick={() => item.setExpanded(!item.expanded)}
                  className="w-full flex items-center justify-between p-8 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-[#0F172A] text-white rounded-xl flex items-center justify-center text-lg font-semibold">
                      {item.step}
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold text-[#0F172A]">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.duration}</p>
                    </div>
                  </div>
                  <div className={`w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 ${item.expanded ? 'bg-blue-500 border-blue-500' : ''}`}>
                    {item.expanded ? (
                      <ChevronUp className={`w-5 h-5 ${item.expanded ? 'text-white' : 'text-gray-400'}`} />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${item.expanded ? 'max-h-96' : 'max-h-0'}`}
                >
                  <div className="px-8 pb-8 pl-28">
                    <ul className="space-y-3">
                      {item.content.map((point, pidx) => (
                        <li key={pidx} className="flex items-start gap-3 text-gray-600">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="reveal-section py-20 bg-[#0F172A]">
        <div className={`max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center transition-all duration-700 delay-500 ${isVisible['cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400 mb-6 block">
            Next Step
          </span>
          
          <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-8 leading-tight tracking-tight">
            Secure your free audit.
          </h2>
          
          <div className="bg-white/5 backdrop-blur rounded-lg p-8 mb-10 border border-white/10">
            <p className="text-gray-400 mb-4">
              Email your last cloud bill to:
            </p>
            <a 
              href="mailto:cloud-audit@perception-it.com?subject=Waste%20Audit"
              className="text-2xl sm:text-3xl font-medium text-blue-400 hover:text-blue-300 transition-colors"
            >
              cloud-audit@perception-it.com
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Subject: Waste Audit
            </p>
          </div>
          
          <div className="text-left max-w-lg mx-auto mb-10">
            <p className="text-gray-400 mb-6">
              We'll reply within 24 hours with:
            </p>
            <ul className="space-y-4">
              {[
                'Bulleted list of visible waste',
                'Estimated PKR annual savings',
                'Proceed/decline recommendation'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-gray-300">
                  <span className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-blue-400" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
            <p className="text-sm text-gray-400">
              <span className="text-white font-medium">No sales call required.</span> If savings potential is under 25%, we decline immediately. We only take projects where we deliver massive impact.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloudCostOptimisation;
