import { ArrowRight, Time } from '@carbon/icons-react';
import type { CarbonIconType } from '@carbon/icons-react';

interface DetailBullet {
  title: string;
  desc: string;
}

interface ServiceCardProps {
  icon: CarbonIconType;
  title: string;
  duration: string;
  descriptionBold: string;
  descriptionNormal: string;
  detailHeading?: string;
  detailBullets?: DetailBullet[];
  shortTags: string[];
  cta: string;
  ctaLink: string;
  iconBgColor?: string;
  iconColor?: string;
  accentColor?: string;
}

/**
 * ServiceCard - A reusable card component for service offerings
 * 
 * Features:
 * - Icon with colored background
 * - Title with duration
 * - Two-line description (bold + normal)
 * - Expandable detail section on hover
 * - Tags
 * - CTA button
 * - Carbon Design System styling
 * 
 * Usage:
 * <ServiceCard
 *   icon={Chat}
 *   title="Consultation"
 *   duration="2-4 weeks"
 *   descriptionBold="Don't build until you know the risks."
 *   descriptionNormal="Our risk-mapped approach ensures your business case is solid..."
 *   detailHeading="We cover:"
 *   detailBullets={[...]}
 *   shortTags={['Tag 1', 'Tag 2']}
 *   cta="Get Your Risk Assessment"
 *   ctaLink="#contact"
 * />
 */
export const ServiceCard = ({
  icon: Icon,
  title,
  duration,
  descriptionBold,
  descriptionNormal,
  detailHeading,
  detailBullets,
  shortTags,
  cta,
  ctaLink,
  iconBgColor = '#edf5ff',
  iconColor = '#0f62fe',
  accentColor = '#0f62fe'
}: ServiceCardProps) => {
  return (
    <div 
      className="group relative bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[var(--accent-color)] hover:-translate-y-1 flex flex-col h-full"
      style={{ '--accent-color': accentColor } as React.CSSProperties}
    >
      {/* Color accent bar - left side */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-1 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
        style={{ backgroundColor: accentColor }}
      />
      
      <div className="p-8 flex flex-col h-full">
        {/* Content area - grows to push CTA down */}
        <div className="flex-grow">
          {/* Icon and Title */}
          <div className="flex items-start gap-4 mb-7">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors flex-shrink-0 group-hover:text-white"
              style={{ 
                backgroundColor: iconBgColor,
                color: iconColor 
              }}
            >
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#161616] mb-1">{title}</h3>
              <div className="flex items-center gap-2 text-sm text-[#6f6f6f]">
                <Time className="w-4 h-4" style={{ color: iconColor }} />
                <span>{duration}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-base font-semibold text-[#161616] leading-relaxed">
              {descriptionBold}
            </p>
            <p className="text-sm text-[#6f6f6f] leading-relaxed mt-2">
              {descriptionNormal}
            </p>
          </div>

          {/* Expandable detail description on hover */}
          {detailBullets && detailBullets.length > 0 && (
            <div className="max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-64 mb-0 group-hover:mb-6">
              <div className="bg-[#f4f4f4] p-4 rounded-lg">
                {detailHeading && (
                  <p className="text-sm font-semibold text-[#161616] leading-relaxed mb-2">
                    {detailHeading}
                  </p>
                )}
                <ul className="space-y-1.5">
                  {detailBullets.map((bullet, idx) => (
                    <li key={idx} className="text-xs text-[#525252] leading-snug">
                      <span className="font-semibold text-[#161616]">- {bullet.title}</span> {bullet.desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-x-2 gap-y-3 mb-8">
            {shortTags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1.5 text-xs font-medium text-[#525252] bg-[#f4f4f4] rounded-full border border-transparent group-hover:border-[#0f62fe]/20 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA - always at bottom */}
        <a
          href={ctaLink}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f62fe] hover:text-[#0043ce] transition-all group-hover:gap-3 pt-5 border-t border-gray-100"
        >
          {cta} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
