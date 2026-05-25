const gtag = (window as any).gtag || ((...args: any[]) => { console.log('[GA4]', ...args); });







export const trackEvent = (eventName: string, params?: Record<string, any>) => {



  try {



    gtag('event', eventName, params);



  } catch {



    /* silent fail */



  }



};
