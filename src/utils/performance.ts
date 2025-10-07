/**
 * Performance monitoring utilities
 * Tracks Core Web Vitals and page load metrics
 */

/**
 * Initialize performance monitoring
 * Reports Core Web Vitals: LCP, FID, CLS, FCP, TTFB
 */
export function initPerformanceMonitoring() {
  if (typeof window === 'undefined') {
    return;
  }

  // Skip in development (localhost)
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('[Performance] Monitoring disabled in development');
    return;
  }

  // Report Core Web Vitals when available
  if ('PerformanceObserver' in window) {
    // Largest Contentful Paint (LCP)
    observePerformance('largest-contentful-paint', (entries) => {
      const lastEntry = entries[entries.length - 1];
      const lcp = lastEntry.renderTime || lastEntry.loadTime;
      reportMetric('LCP', lcp);
    });

    // First Input Delay (FID)
    observePerformance('first-input', (entries) => {
      const firstInput = entries[0];
      const fid = firstInput.processingStart - firstInput.startTime;
      reportMetric('FID', fid);
    });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    observePerformance('layout-shift', (entries) => {
      for (const entry of entries) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      reportMetric('CLS', clsValue);
    });
  }

  // Report Navigation Timing metrics
  if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const timing = window.performance.timing;
        const loadTime = timing.loadEventEnd - timing.navigationStart;
        const domContentLoaded = timing.domContentLoadedEventEnd - timing.navigationStart;
        const timeToFirstByte = timing.responseStart - timing.navigationStart;

        reportMetric('Page Load Time', loadTime);
        reportMetric('DOM Content Loaded', domContentLoaded);
        reportMetric('Time to First Byte', timeToFirstByte);
      }, 0);
    });
  }
}

/**
 * Observe performance entries
 */
function observePerformance(
  type: string,
  callback: (entries: PerformanceEntry[]) => void
) {
  try {
    const observer = new PerformanceObserver((list) => {
      callback(list.getEntries());
    });
    observer.observe({ type, buffered: true });
  } catch (error) {
    console.warn(`Could not observe ${type}:`, error);
  }
}

/**
 * Report a performance metric
 * In production, you would send this to your analytics service
 */
function reportMetric(name: string, value: number) {
  console.log(`[Performance] ${name}: ${Math.round(value)}ms`);
  
  // Send to analytics if available
  if (window.gtag) {
    window.gtag('event', 'performance_metric', {
      metric_name: name,
      metric_value: Math.round(value),
    });
  }
}

/**
 * Measure and log component render time
 * Usage: const measure = measureRender('ComponentName'); ... measure();
 */
export function measureRender(componentName: string) {
  const startTime = performance.now();
  
  return () => {
    const endTime = performance.now();
    const renderTime = endTime - startTime;
    console.log(`[Performance] ${componentName} rendered in ${renderTime.toFixed(2)}ms`);
  };
}

/**
 * Preload critical resources
 */
export function preloadCriticalResources() {
  // Add preconnect hints for external resources
  const preconnects = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://www.googletagmanager.com',
  ];

  preconnects.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = url;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
}

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}
