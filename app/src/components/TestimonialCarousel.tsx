/**
 * TestimonialCarousel
 * ──────────────────────────────────────────────
 * Multi-item testimonial carousel, IBM Carbon Design System.
 *
 * Carbon compliance:
 *   • 0px border-radius (sharp corners)
 *   • Solid layer backgrounds (no gradients)
 *   • Carbon spacing + color tokens
 *   • Decorative quotation mark (IBM Plex Serif)
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from '@carbon/icons-react';
import styles from './TestimonialCarousel.module.css';

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  client: string;
  tags?: string[];
  initials?: string;
  clientLogo?: string | null;
  bgImage?: string | null;
  contextDesc?: string;
  contextLink?: string | null;
  solutionLink?: string | null;
  solutionLabel?: string;
}

export interface TestimonialCarouselProps {
  items: TestimonialItem[];
}

export default function TestimonialCarousel({ items }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);
  const total = items.length;
  const item = items[current];

  if (total === 0) return null;

  return (
    <div className={styles['tc-wrap']}>
      <div className={styles['tc-card']}>
        <div className={styles['tc-grid']}>
          {/* Left: Image panel */}
          <div className={styles['tc-left']}>
            {item.bgImage ? (
              <>
                <img src={item.bgImage} alt="" className={styles['tc-left__bg']} />
                <div className={styles['tc-left__overlay']} />
                {item.tags && item.tags.length > 0 && (
                  <div className={styles['tc-left__tags']}>
                    {item.tags.map((tag) => (
                      <span key={tag} className={styles['tc-left__tag']}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className={styles['tc-left__fallback']} />
            )}
          </div>

          {/* Right: Content panel */}
          <div className={styles['tc-right']}>
            {/* Context header: logo + name + desc + link */}
            <div className={styles['tc-context']}>
              {item.clientLogo && (
                <div className={styles['tc-context__logo']}>
                  <img
                    src={item.clientLogo}
                    alt={item.client}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              )}
              <div className={styles['tc-context__text']}>
                <span className={`cds--body-01 ${styles['tc-context__client']}`}>
                  {item.client}
                </span>
                {item.contextDesc && (
                  <p className={`cds--body-compact-01 ${styles['tc-context__desc']}`}>
                    {item.contextDesc}
                  </p>
                )}
                {item.solutionLink && (
                  <Link
                    to={item.solutionLink}
                    className={`cds--label-01 ${styles['tc-context__link']}`}
                  >
                    {item.solutionLabel || 'Solution details'}
                    <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            </div>

            {/* Quote with decorative mark */}
            <div className={styles['tc-quote-wrap']}>
              <span className={styles['tc-quote__mark']} aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className={styles['tc-quote']}>
                <div className={styles['tc-quote__body']}>
                  {item.quote.split('\n\n').map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </blockquote>
            </div>

            {/* Author + CTA row */}
            <div className={styles['tc-author-block']}>
              <div className={styles['tc-author']}>
                <span className={`cds--body-01 ${styles['tc-author__name']}`}>
                  {item.author}
                </span>
                <span className={`cds--helper-text-01 ${styles['tc-author__role']}`}>
                  {item.role}
                </span>
              </div>
              {item.contextLink && (
                <Link
                  to={item.contextLink}
                  className={`cds--label-01 ${styles['tc-study-link']}`}
                >
                  Full case study
                  <ArrowRight size={16} />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar: dots + counter + nav */}
        <div className={styles['tc-footer']}>
          <div className={styles['tc-footer__left']}>
            <div className={styles['tc-dots']}>
              {Array.from({ length: total }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={
                    idx === current
                      ? styles['tc-dot--active']
                      : styles['tc-dot--inactive']
                  }
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <span className={`cds--label-01 ${styles['tc-counter']}`}>
              {current + 1} / {total}
            </span>
          </div>

          <div className={styles['tc-nav']}>
            <button
              className={styles['tc-nav__btn']}
              onClick={() => setCurrent((prev) => (prev - 1 + total) % total)}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className={styles['tc-nav__btn']}
              onClick={() => setCurrent((prev) => (prev + 1) % total)}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
