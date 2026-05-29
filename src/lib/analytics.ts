// Google Analytics 4 Initialization
export const initGA = () => {
  if (typeof window === 'undefined') return;
  
  const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
  if (!GA4_ID) {
    console.warn('GA4_ID not configured');
    return;
  }

  // Create script element
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  
  // Add gtag function
  (window as any).dataLayer = (window as any).dataLayer || [];
  const gtag = (...args: any[]) => (window as any).dataLayer.push(args);
  (window as any).gtag = gtag;
  
  gtag('js', new Date());
  gtag('config', GA4_ID, {
    page_path: window.location.pathname,
  });

  document.head.appendChild(script);
};

// Track page views
export const pageView = (path: string, title: string) => {
  if (typeof window === 'undefined') return;
  
  const gtag = (window as any).gtag;
  if (!gtag) return;
  
  gtag('event', 'page_view', {
    page_path: path,
    page_title: title,
  });
};

// Track custom events
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window === 'undefined') return;
  
  const gtag = (window as any).gtag;
  if (!gtag) return;
  
  gtag('event', eventName, eventParams);
};

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent('form_submission', {
    form_name: formName,
    success,
    timestamp: new Date().toISOString(),
  });
};

// Track search
export const trackSearch = (searchQuery: string) => {
  trackEvent('search', {
    search_term: searchQuery,
  });
};
