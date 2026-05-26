import ArrowRight from '@carbon/icons-react/es/ArrowRight';
import Time from '@carbon/icons-react/es/Time';

interface DetailBullet {
  title: string;
  desc: string;
}

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  duration: string;
  descriptionBold: string;
  descriptionNormal: string;
  shortTags: string[];
  detailHeadingBold?: string;
  detailHeadingNormal?: string | null;
  detailBullets?: DetailBullet[];
  cta: string;
  link: string;
}

const OfferingCard = ({
  icon: Icon,
  title,
  duration,
  descriptionBold,
  descriptionNormal,
  shortTags,
  detailHeadingBold,
  detailHeadingNormal,
  detailBullets,
  cta,
  link
}: ServiceCardProps) => {
  return (
    <div 
      className="cds--col-span-5 cds--col-span-5--md group relative bg-[var(--cds-layer-01)] border border-[var(--cds-border-subtle)] overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[var(--cds-link-primary)] hover:-translate-y-1 flex flex-col h-full"
    >
      {/* Color accent bar - left side */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--cds-link-primary)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
      
      <div className="p-8 flex flex-col h-full">
        {/* Content area - grows to push CTA down */}
        <div className="flex-grow">
          {/* Icon and Title */}
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[var(--cds-layer-accent)] flex items-center justify-center text-[var(--cds-link-primary)] transition-colors group-hover:bg-[var(--cds-link-primary)] group-hover:text-[var(--cds-text-inverse)] flex-shrink-0">
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="carbon-heading-03 text-[var(--cds-text-primary)] mb-1">{title}</h3>
              <div className="flex items-center gap-2 carbon-body-compact-01 text-[var(--cds-text-helper)]">
                <Time className="w-4 h-4 text-[var(--cds-link-primary)]" />
                <span>{duration}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            {descriptionBold && (
              <>
                <p className="carbon-body-02 font-semibold text-[var(--cds-text-primary)] leading-relaxed">
                  {descriptionBold}
                </p>
                <p className="carbon-body-compact-02 text-[var(--cds-text-helper)] leading-relaxed mt-2">
                  {descriptionNormal}
                </p>
              </>
            )}
          </div>

          {/* Expandable detail description on hover */}
          <div className="max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-64 mb-0 group-hover:mb-6">
            <div className="bg-[var(--cds-layer-02)] p-4 rounded-lg">
              {detailHeadingBold && (
                <p className="carbon-helper-text-02 leading-relaxed mb-2">
                  <span className="font-semibold text-[var(--cds-text-primary)]">
                    {detailHeadingBold}
                  </span>
                  {detailHeadingNormal && (
                    <span className="text-[var(--cds-text-secondary)] ml-1">
                      {detailHeadingNormal}
                    </span>
                  )}
                </p>
              )}
              {detailBullets && (
                <ul className="space-y-1.5">
                  {detailBullets.map((bullet, idx) => (
                    <li key={idx} className="carbon-helper-text-02 text-[var(--cds-text-secondary)] leading-snug">
                      <span className="font-semibold text-[var(--cds-text-primary)]">- {bullet.title}</span> {bullet.desc}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-x-2 gap-y-3 mb-8">
            {shortTags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1.5 text-xs font-medium text-[var(--cds-text-secondary)] bg-[var(--cds-layer-02)] rounded-full border border-transparent group-hover:border-[var(--cds-link-primary)]/20 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA - always at bottom */}
        <a
          href={link}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--cds-link-primary)] hover:text-[var(--cds-link-primary-hover)] transition-all group-hover:gap-3 pt-5 border-t border-[var(--cds-border-subtle)]"
        >
          {cta} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default OfferingCard;
