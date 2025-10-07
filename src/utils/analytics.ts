/**
 * Analytics utility for tracking page views and events
 * Supports Google Analytics 4 (GA4)
 * 
 * Setup Instructions:
 * 1. Get your GA4 Measurement ID from Google Analytics (format: G-XXXXXXXXXX)
 * 2. Replace 'YOUR_GA4_MEASUREMENT_ID' below with your actual ID
 * 3. Add the GA4 script tag to your index.html or deploy configuration
 */

const GA4_MEASUREMENT_ID = 'YOUR_GA4_MEASUREMENT_ID'; // Replace with your actual GA4 ID

// Type definitions for gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

/**
 * Initialize Google Analytics
 * Call this once when your app loads
 */
export function initAnalytics() {
  // Skip if not configured
  if (GA4_MEASUREMENT_ID === 'YOUR_GA4_MEASUREMENT_ID') {
    console.log('[Analytics] Not configured - add your GA4 Measurement ID');
    return;
  }

  // Skip in development (localhost)
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('[Analytics] Skipping initialization in development mode');
    return;
  }

  // Load GA4 script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer?.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA4_MEASUREMENT_ID, {
    send_page_view: false, // We'll send page views manually
  });

  console.log('[Analytics] Initialized');
}

/**
 * Track a page view
 * @param page - Page identifier (e.g., 'home', 'pricing', 'contact')
 * @param title - Page title
 */
export function trackPageView(page: string, title: string) {
  if (!window.gtag) {
    console.log(`[Analytics] Page view: ${page} - ${title}`);
    return;
  }

  window.gtag('event', 'page_view', {
    page_title: title,
    page_location: window.location.href,
    page_path: `/${page}`,
  });
}

/**
 * Track a custom event
 * @param eventName - Name of the event (e.g., 'cta_click', 'form_submit')
 * @param params - Event parameters
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, any>
) {
  if (!window.gtag) {
    console.log(`[Analytics] Event: ${eventName}`, params);
    return;
  }

  window.gtag('event', eventName, params);
}

/**
 * Track a CTA (Call-to-Action) button click
 * @param ctaName - Name/label of the CTA button
 * @param location - Where on the page the CTA is located
 */
export function trackCTAClick(ctaName: string, location: string) {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_location: location,
  });
}

/**
 * Track form submission
 * @param formName - Name of the form (e.g., 'contact_form', 'newsletter')
 * @param success - Whether the submission was successful
 */
export function trackFormSubmission(formName: string, success: boolean) {
  trackEvent('form_submit', {
    form_name: formName,
    success: success,
  });
}

/**
 * Track navigation events
 * @param from - Page navigated from
 * @param to - Page navigated to
 */
export function trackNavigation(from: string, to: string) {
  trackEvent('navigation', {
    from_page: from,
    to_page: to,
  });
}

/**
 * Track resource downloads
 * @param resourceType - Type of resource (e.g., 'pdf', 'video')
 * @param resourceName - Name of the resource
 */
export function trackResourceDownload(resourceType: string, resourceName: string) {
  trackEvent('resource_download', {
    resource_type: resourceType,
    resource_name: resourceName,
  });
}
