import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ArrowRight from '@carbon/icons-react/es/ArrowRight';
import CheckmarkFilled from '@carbon/icons-react/es/CheckmarkFilled';
import Time from '@carbon/icons-react/es/Time';
import Globe from '@carbon/icons-react/es/Globe';
import ChevronRight from '@carbon/icons-react/es/ChevronRight';
import ChevronDown from '@carbon/icons-react/es/ChevronDown';
import '../styles/carbon-typography.css';
import Navigation from '../components/Navigation';
import Footer from '../sections/Footer';
import {
  serviceCategories,
  getFeaturedCaseStudy,
  type ServiceCategoryId
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
      
      {/* Hero Section - Light Theme like Case Study Detail */}
      <section className="pt-32 pb-16 bg-[#f4f4f4] border-b border-[#e0e0e0]">
        <div className="max-w-[1584px] mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
            <Link to="/" className="text-[#0f62fe] hover:text-[#0353e9] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-[#8d8d8d]" />
            <span className="px-2 py-0.5 border border-[#525252] text-[#525252] rounded-full">
              Projects
            </span>
          </nav>

          <div className="max-w-3xl">
            {/* Heading */}
            <h1 className="carbon-fluid-heading-05 text-[#161616] mb-6">
              Real Results for Real Clients
            </h1>
            
            {/* Lead Text */}
            <p className="carbon-body-02 text-[#525252] mb-8">
              Every service we offer is backed by proven case studies. Explore how we've helped 
              organisations transform their operations across cloud, infrastructure, and platforms.
            </p>
            
            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[#e0e0e0]">
              {[
                { value: '50+', label: 'Platforms Deployed', icon: CheckmarkFilled },
                { value: '14+', label: 'Years Experience', icon: Time },
                { value: '3', label: 'Continents', icon: Globe }
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#0f62fe]/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-[#0f62fe]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#161616]">{stat.value}</p>
                    <p className="carbon-helper-text-01 text-[#525252]">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs - Carbon Style */}
      <div className="sticky top-16 z-30 bg-white border-b border-[#e0e0e0]">
        <div className="max-w-[1584px] mx-auto px-6">
          <div className="flex items-center gap-1 py-4 overflow-x-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2.5 text-sm font-medium whitespace-nowrap transition-all border-2 ${
                activeFilter === 'all'
                  ? 'bg-[#0f62fe] border-[#0f62fe] text-white'
                  : 'bg-transparent border-transparent text-[#525252] hover:bg-[#f4f4f4]'
              }`}
            >
              All Projects
            </button>
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-5 py-2.5 text-sm font-medium whitespace-nowrap transition-all border-2 ${
                  activeFilter === category.id
                    ? 'bg-[#0f62fe] border-[#0f62fe] text-white'
                    : 'bg-transparent border-transparent text-[#525252] hover:bg-[#f4f4f4]'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Project */}
      {featuredStudy && (activeFilter === 'all' || activeFilter === 'cloud') && (
        <section className="bg-[#f4f4f4] border-b border-[#e0e0e0]">
          <div className="max-w-[1584px] mx-auto px-6 py-16">
            {/* Section Label */}
            <span className="carbon-label-01 text-[#0f62fe] uppercase tracking-wide mb-4 block">
              Featured Case Study
            </span>

            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Featured Image */}
              <div className="aspect-[4/3] bg-[#f4f4f4] border border-[#e0e0e0] flex items-center justify-center overflow-hidden">
                {featuredStudy.image ? (
                  <img 
                    src={featuredStudy.image} 
                    alt={featuredStudy.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-[#e0e0e0] flex items-center justify-center mx-auto mb-4">
                      {(() => {
                        const category = serviceCategories.find(c => c.id === 'cloud');
                        const Icon = category?.icon || CheckmarkFilled;
                        return <Icon className="w-12 h-12 text-[#9e9e9e]" />;
                      })()}
                    </div>
                    <p className="carbon-label-01 text-[#525252]">Featured Project Image</p>
                    <p className="carbon-helper-text-01 text-[#6f6f6f] mt-1">
                      Cloud infrastructure or dashboard visualization
                    </p>
                  </div>
                )}
              </div>

              {/* Content */}
              <div>
                <p className="carbon-label-01 text-[#525252] uppercase tracking-wide mb-2">
                  {featuredStudy.industry}
                </p>
                <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
                  {featuredStudy.title}
                </h2>
                <p className="carbon-body-01 text-[#525252] mb-6">
                  {featuredStudy.description}
                </p>

                {/* Outcomes */}
                <div className="space-y-3 mb-6">
                  {featuredStudy.outcomes.slice(0, 3).map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckmarkFilled className="w-5 h-5 text-[#0f62fe] flex-shrink-0 mt-0.5" />
                      <span className="carbon-body-01 text-[#161616]">{outcome}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredStudy.technologies.slice(0, 5).map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-white border border-[#e0e0e0] text-[#161616] text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link 
                  to={`/projects/case-study/${featuredStudy.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f62fe] text-white carbon-button-01 hover:bg-[#0353e9] transition-colors"
                >
                  Read Full Story
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-[1584px] mx-auto px-6">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="carbon-label-01 text-[#0f62fe] uppercase tracking-wide mb-2 block">
                Case Studies
              </span>
              <h2 className="carbon-fluid-heading-05 text-[#161616]">
                {activeFilter === 'all' 
                  ? 'All Projects' 
                  : serviceCategories.find(c => c.id === activeFilter)?.label}
              </h2>
            </div>
            <p className="carbon-body-01 text-[#525252]">
              Showing {regularStudies.length} {regularStudies.length === 1 ? 'study' : 'studies'}
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularStudies.map((study) => {
              const isExpanded = expandedProject === study.id;
              const Icon = study.categoryColor ? 
                serviceCategories.find(c => c.id === study.categoryId)?.icon : 
                CheckmarkFilled;

              return (
                <article 
                  key={study.id}
                  className="group bg-white border border-[#e0e0e0] overflow-hidden hover:border-[#0f62fe] transition-all"
                >
                  {/* Image - Clickable */}
                  <div 
                    className="h-48 bg-[#f4f4f4] border-b border-[#e0e0e0] flex items-center justify-center relative overflow-hidden cursor-pointer"
                    onClick={() => navigate(`/projects/case-study/${study.slug}`)}
                  >
                    {study.image ? (
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-[#e0e0e0] flex items-center justify-center">
                        {Icon && <Icon className="w-8 h-8 text-[#9e9e9e]" />}
                      </div>
                    )}
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#0f62fe]/0 group-hover:bg-[#0f62fe]/5 transition-all" />
                    
                    {study.isCollection && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-[#161616] text-white text-xs carbon-label-01">
                        {study.collectionCount} studies
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="carbon-label-01 text-[#6f6f6f] uppercase">
                        {study.industry}
                      </span>
                      <span className="text-[#c6c6c6]">•</span>
                      <span className="carbon-label-01 text-[#0f62fe]">
                        {study.categoryLabel}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 
                      className="carbon-heading-02 text-[#161616] mb-3 group-hover:text-[#0f62fe] transition-colors cursor-pointer"
                      onClick={() => navigate(`/projects/case-study/${study.slug}`)}
                    >
                      {study.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="carbon-body-01 text-[#525252] mb-4">
                      {study.description}
                    </p>

                    {/* Expandable Outcomes */}
                    {isExpanded && (
                      <div className="mb-4 p-4 bg-[#f4f4f4] border border-[#e0e0e0]">
                        <p className="carbon-label-01 text-[#161616] mb-3">Key Outcomes:</p>
                        <ul className="space-y-2">
                          {study.outcomes.map((outcome, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckmarkFilled className="w-4 h-4 text-[#0f62fe] flex-shrink-0 mt-0.5" />
                              <span className="carbon-body-01 text-[#525252]">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.technologies.slice(0, 3).map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-[#f4f4f4] text-[#525252] carbon-helper-text-01"
                        >
                          {tech}
                        </span>
                      ))}
                      {study.technologies.length > 3 && (
                        <span className="px-2 py-1 text-[#6f6f6f] carbon-helper-text-01">
                          +{study.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#e0e0e0]">
                      <button 
                        onClick={() => setExpandedProject(isExpanded ? null : study.id)}
                        className="flex items-center gap-1 carbon-body-01 text-[#525252] hover:text-[#0f62fe] transition-colors"
                      >
                        {isExpanded ? 'Show less' : 'Show outcomes'}
                        <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                      <Link 
                        to={`/projects/case-study/${study.slug}`}
                        className="inline-flex items-center gap-2 text-[#0f62fe] carbon-body-01 font-medium hover:gap-3 transition-all"
                      >
                        Read case study
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Empty State */}
          {regularStudies.length === 0 && (
            <div className="text-center py-20 bg-[#f4f4f4] border border-[#e0e0e0]">
              <p className="carbon-body-01 text-[#525252] mb-4">
                No case studies found in this category.
              </p>
              <button
                onClick={() => setActiveFilter('all')}
                className="px-6 py-3 bg-[#0f62fe] text-white carbon-button-01 hover:bg-[#0353e9] transition-colors"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#f4f4f4] border-t border-[#e0e0e0]">
        <div className="max-w-[1584px] mx-auto px-6 text-center">
          <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="carbon-body-01 text-[#525252] mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your operations with proven methodologies 
            and expert support.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0f62fe] text-white carbon-button-01 hover:bg-[#0353e9] transition-colors"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
