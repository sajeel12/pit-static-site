import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronDown,
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../sections/Footer';
import LogoTicker from '../components/LogoTicker';
import {
  serviceCategories,
  getFeaturedCaseStudy,
  type ServiceCategoryId,
  portfolioStats
} from '../config/services';

// Flatten case studies from all categories for display
const getAllCaseStudies = () => {
  return serviceCategories.flatMap(category => 
    category.caseStudies.map(study => ({
      ...study,
      categoryId: category.id,
      categoryLabel: category.label,
      categoryColor: category.color
    }))
  );
};

function getInitialFilter(category: string | undefined): ServiceCategoryId | 'all' {
  if (category && serviceCategories.some(c => c.id === category)) {
    return category as ServiceCategoryId;
  }
  return 'all';
}

export default function Projects() {
  const navigate = useNavigate();
  const { category } = useParams<{ category?: string }>();
  const [activeFilter, setActiveFilter] = useState<ServiceCategoryId | 'all'>(() => getInitialFilter(category));
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  // Sync filter when URL param changes
  useEffect(() => {
    const newFilter = getInitialFilter(category);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActiveFilter(newFilter);
  }, [category]);

  const allCaseStudies = getAllCaseStudies();
  const featuredStudy = getFeaturedCaseStudy();
  
  const filteredStudies = activeFilter === 'all' 
    ? allCaseStudies 
    : allCaseStudies.filter(study => study.categoryId === activeFilter);
  
  const regularStudies = filteredStudies.filter(s => !s.featured);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white pt-32">
        <div className="max-w-[1400px] mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-blue-400 font-semibold text-sm uppercase tracking-wide mb-4">
              Portfolio
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Real Results for Real Clients
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Every service we offer is backed by proven case studies. Explore how we've helped organisations transform their operations.
            </p>
            
            {/* Stats Bar */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-slate-700">
              {portfolioStats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-sm text-slate-400">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Trusted By Logo Ticker */}
      <LogoTicker />

      {/* Filter Tabs */}
      <div className="sticky top-20 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center gap-1 py-4 overflow-x-auto scrollbar-hide">
            <button
              onClick={() => setActiveFilter('all')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                activeFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              All Projects
            </button>
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeFilter === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Project */}
      {featuredStudy && (activeFilter === 'all' || activeFilter === 'cloud') && (
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50/50 border-b border-blue-100">
          <div className="max-w-[1400px] mx-auto px-6 py-12">
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wide">
                Featured Case Study
              </span>
              {featuredStudy.isCollection && (
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                  {featuredStudy.collectionCount} Related Studies
                </span>
              )}
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Placeholder Visual */}
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    {(() => {
                      const category = serviceCategories.find(c => c.id === 'cloud');
                      const Icon = category?.icon || CheckCircle2;
                      return <Icon className="w-12 h-12" />;
                    })()}
                  </div>
                  <p className="text-lg font-semibold">{featuredStudy.title}</p>
                  <p className="text-blue-200 text-sm">{featuredStudy.industry}</p>
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                  {featuredStudy.industry}
                </p>
                <h2 className="text-3xl font-bold text-slate-900 mb-3">
                  {featuredStudy.title}
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  {featuredStudy.description}
                </p>

                {/* Outcomes */}
                <div className="space-y-3 mb-6">
                  {featuredStudy.outcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{outcome}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredStudy.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-lg border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Services Linked */}
                <div className="mb-8">
                  <p className="text-sm font-semibold text-slate-700 mb-2">Related Services:</p>
                  <div className="flex flex-wrap gap-2">
                    {featuredStudy.relatedServiceIds.map((serviceId, idx) => {
                      // Find service name from categories
                      let serviceName = serviceId;
                      let serviceLink = '#';
                      for (const cat of serviceCategories) {
                        const service = cat.services?.find(s => s.id === serviceId);
                        if (service) {
                          serviceName = service.title;
                          serviceLink = service.link;
                          break;
                        }
                      }
                      return (
                        <a 
                          key={idx}
                          href={serviceLink}
                          className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors"
                        >
                          {serviceName}
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Dual CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  <Link 
                    to={`/projects/case-study/${featuredStudy.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                  >
                    Read Full Story
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a 
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 text-blue-600 font-semibold hover:text-blue-700 transition-colors border border-blue-200 rounded-lg hover:bg-blue-50"
                  >
                    Discuss similar project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Projects Grid */}
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-900">
            {activeFilter === 'all' 
              ? 'All Case Studies' 
              : serviceCategories.find(c => c.id === activeFilter)?.label}
          </h2>
          <p className="text-slate-500 text-sm">
            Showing {regularStudies.length} {regularStudies.length === 1 ? 'study' : 'studies'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularStudies.map((study) => {
            const isExpanded = expandedProject === study.id;
            const Icon = study.categoryColor ? 
              serviceCategories.find(c => c.id === study.categoryId)?.icon : 
              CheckCircle2;

            return (
              <div 
                key={study.id}
                className={`group bg-white rounded-xl border border-gray-200 overflow-hidden transition-all hover:shadow-lg hover:border-blue-300 cursor-pointer ${
                  study.isCollection ? 'ring-2 ring-blue-100' : ''
                }`}
                onClick={() => navigate(`/projects/case-study/${study.slug}`)}
              >
                {/* Placeholder Header */}
                <div 
                  className="h-40 flex items-center justify-center relative"
                  style={{ 
                    backgroundColor: study.categoryColor?.light?.replace('bg-', '') || '#f1f5f9'
                  }}
                >
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: study.categoryColor?.bg?.replace('bg-', '') || '#e2e8f0'
                    }}
                  >
                    {Icon && <Icon className="w-8 h-8" style={{ color: '#2563eb' }} />}
                  </div>
                  {study.isCollection && (
                    <div className="absolute top-4 right-4 px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold rounded-lg shadow-sm">
                      {study.collectionCount} studies
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      {study.industry}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs font-medium text-blue-600">
                      {study.categoryLabel}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    <Link to={`/projects/case-study/${study.slug}`} className="hover:text-blue-600 transition-colors">
                      {study.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                    {study.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {study.technologies.slice(0, 3).map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {study.technologies.length > 3 && (
                      <span className="px-2 py-0.5 text-slate-400 text-xs">
                        +{study.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Related Services */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-slate-500 mb-1">Services:</p>
                    <div className="flex flex-wrap gap-1">
                      {study.relatedServiceIds.slice(0, 2).map((serviceId, idx) => {
                        let serviceName = serviceId;
                        for (const cat of serviceCategories) {
                          const service = cat.services?.find(s => s.id === serviceId);
                          if (service) {
                            serviceName = service.title;
                            break;
                          }
                        }
                        return (
                          <span 
                            key={idx}
                            className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded"
                          >
                            {serviceName}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Expandable Outcomes */}
                  {isExpanded && (
                    <div className="mb-4 p-3 bg-slate-50 rounded-lg">
                      <p className="text-xs font-semibold text-slate-700 mb-2">Key Outcomes:</p>
                      <ul className="space-y-1.5">
                        {study.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <button 
                      onClick={(e) => { e.stopPropagation(); setExpandedProject(isExpanded ? null : study.id); }}
                      className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      {isExpanded ? 'Show less' : 'Details'}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                    <div className="flex items-center gap-2">
                      <a 
                        href="#contact"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs font-medium text-slate-400 hover:text-blue-600 transition-colors px-2 py-1"
                      >
                        Similar project
                      </a>
                      <Link 
                        to={`/projects/case-study/${study.slug}`}
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-[1400px] mx-auto px-6 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Have a similar challenge?
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Let's discuss how we can apply our expertise to your specific needs. No obligation, just insights.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="mailto:info@perception-it.com" 
                className="inline-flex items-center gap-2 px-8 py-4 border border-slate-600 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
