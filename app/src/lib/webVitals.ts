export const trackWebVitals = () => {
  // Check if browser supports web vitals
  if ('web-vitals' in window) {
    return;
  }

  // Track LCP (Largest Contentful Paint)
  if ('PerformanceObserver' in window) {
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry & { startTime: number };
        console.log('LCP:', lastEntry.startTime);
        sendToAnalytics('LCP', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch {
      console.log('LCP tracking not supported');
    }

    // Track FID (First Input Delay)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fidEntry = entry as PerformanceEntry & { processingStart: number; startTime: number };
          const delay = fidEntry.processingStart - fidEntry.startTime;
          console.log('FID:', delay);
          sendToAnalytics('FID', delay);
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch {
      console.log('FID tracking not supported');
    }

    // Track CLS (Cumulative Layout Shift)
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const clsEntry = entry as PerformanceEntry & { value: number; hadRecentInput: boolean };
          if (!clsEntry.hadRecentInput) {
            clsValue += clsEntry.value;
          }
        }
        console.log('CLS:', clsValue);
        sendToAnalytics('CLS', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch {
      console.log('CLS tracking not supported');
    }
  }

  // Track navigation timing
  window.addEventListener('load', () => {
    setTimeout(() => {
      const timing = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (timing) {
        const pageLoadTime = timing.loadEventEnd - timing.startTime;
        console.log('Page Load Time:', pageLoadTime);
        sendToAnalytics('PageLoad', pageLoadTime);
      }
    }, 0);
  });
};

const sendToAnalytics = (name: string, value: number) => {
  // In production, send to your analytics service
  // Example: Google Analytics, Mixpanel, etc.
  if (process.env.NODE_ENV === 'production') {
    // gtag('event', 'web_vitals', { name, value });
  } else {
    // In development, log for debugging (can be removed in final release)
    // eslint-disable-next-line no-console
    console.debug('WebVitals:', name, value);
  }
};

export default trackWebVitals;
