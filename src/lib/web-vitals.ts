// Web Vitals Tracking for Core Web Vitals
import { trackEvent } from './analytics';

export const reportWebVitals = (metric: any) => {
  // Send to analytics
  trackEvent('web_vitals', {
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
    delta: metric.delta,
    id: metric.id,
  });

  // Log for debugging (remove in production)
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vital:', metric);
  }
};

// Helper to measure page load time
export const measurePageLoad = () => {
  if (typeof window === 'undefined') return;

  window.addEventListener('load', () => {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    
    trackEvent('page_load_time', {
      load_time: pageLoadTime,
      timestamp: new Date().toISOString(),
    });
  });
};

// Helper to measure First Contentful Paint (FCP)
export const measureFCP = () => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return;
  }

  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          trackEvent('first_contentful_paint', {
            fcp: Math.round(entry.startTime),
          });
        }
      });
    });

    observer.observe({ entryTypes: ['paint'] });
  } catch (error) {
    console.error('FCP measurement error:', error);
  }
};

// Helper to measure Cumulative Layout Shift (CLS)
export const measureCLS = () => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return;
  }

  try {
    let clsValue = 0;
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if ((entry as any).hadRecentInput) continue;
        clsValue += (entry as any).value;
        trackEvent('cumulative_layout_shift', {
          cls: clsValue,
        });
      }
    });

    observer.observe({ entryTypes: ['layout-shift'] });
  } catch (error) {
    console.error('CLS measurement error:', error);
  }
};
