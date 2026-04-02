import { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  placeholder?: 'blur' | 'color';
}

const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  placeholder = 'color'
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(() => loading === 'eager');
  const imgRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (loading === 'eager') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [loading]);

  // Generate srcset for responsive images
  const generateSrcSet = (baseSrc: string) => {
    if (!baseSrc.includes('.')) return undefined;
    
    const ext = baseSrc.split('.').pop();
    const base = baseSrc.replace(`.${ext}`, '');
    
    // Generate WebP variants
    return [
      `${base}-400.webp 400w`,
      `${base}-800.webp 800w`,
      `${base}-1200.webp 1200w`,
      `${base}.webp 1920w`
    ].join(', ');
  };

  // Fallback src for non-WebP browsers
  const fallbackSrc = src.replace('.webp', '.jpg');

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Placeholder */}
      {!isLoaded && (
        <div 
          className={`absolute inset-0 ${
            placeholder === 'blur' 
              ? 'bg-gray-200 animate-pulse' 
              : 'bg-gray-100'
          }`}
        />
      )}
      
      {/* Actual Image */}
      {isInView && (
        <picture>
          {/* WebP source */}
          <source
            srcSet={generateSrcSet(src)}
            type="image/webp"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Fallback JPG source */}
          <source
            srcSet={src.replace('.webp', '.jpg')}
            type="image/jpeg"
          />
          {/* Img element */}
          <img
            src={fallbackSrc}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;
