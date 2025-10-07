# Analytics Setup Instructions

## Quick Setup Guide

Your Bail Bond Buddy marketing site now includes Google Analytics 4 (GA4) tracking. Follow these steps to enable analytics tracking:

### 1. Get Your Google Analytics 4 Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property (or use an existing one)
3. Navigate to Admin → Data Streams
4. Select your web data stream (or create a new one)
5. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### 2. Configure Analytics in Your App

Open `/utils/analytics.ts` and replace the placeholder:

```typescript
// Line 12
const GA4_MEASUREMENT_ID = 'YOUR_GA4_MEASUREMENT_ID';

// Change to:
const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Your actual Measurement ID
```

### 3. Deploy Your Site

Analytics will automatically initialize in production. When running on localhost or 127.0.0.1, analytics will be disabled and events will be logged to the console for testing instead.

## What's Being Tracked

### Automatic Tracking

- **Page Views**: Every page navigation is tracked with the page name and title
- **Navigation Events**: Tracks user flow between pages

### CTA Tracking

The following call-to-action buttons are tracked:
- "Request a Demo" buttons (with location context)
- "View Pricing" buttons (with location context)
- "View All FAQs" links
- "Start Saving Time Today" button in ROI calculator

### Form Tracking

- **Contact Form Submissions**: Tracks both successful and failed submissions
- Form data is NOT sent to analytics (privacy-safe)

### Custom Events Available

You can add custom tracking anywhere in your app:

```typescript
import { trackEvent, trackCTAClick, trackResourceDownload } from './utils/analytics';

// Track a custom event
trackEvent('custom_event_name', { 
  property1: 'value1',
  property2: 'value2'
});

// Track CTA clicks
trackCTAClick('Button Label', 'Page Section');

// Track resource downloads
trackResourceDownload('pdf', 'Getting Started Guide');
```

## Performance Monitoring

Performance metrics are automatically tracked when analytics is enabled:

- **Largest Contentful Paint (LCP)**
- **First Input Delay (FID)**
- **Cumulative Layout Shift (CLS)**
- **Page Load Time**
- **Time to First Byte (TTFB)**

All metrics are logged to the console and sent to Google Analytics for reporting.

## Privacy & Compliance

- Analytics is disabled in development mode
- No personally identifiable information (PII) is tracked
- Form field values are never sent to analytics
- Only success/failure status of forms is tracked
- Compliant with your existing Cookie Consent banner

## Viewing Analytics Data

1. Log into [Google Analytics](https://analytics.google.com/)
2. Select your property
3. View real-time data under **Reports → Realtime**
4. View page views under **Reports → Engagement → Pages and screens**
5. View custom events under **Reports → Engagement → Events**

## Testing Analytics

### In Development (localhost)

When running on localhost, analytics tracking is disabled but all events are logged to the console:

1. Open your browser console
2. You'll see `[Analytics] Skipping initialization in development mode`
3. Navigate through pages - you'll see `[Analytics] Page view:` logs
4. Click CTAs - you'll see `[Analytics] Event:` logs
5. Submit the contact form - you'll see form submission events

### In Production

After deploying with a configured GA4 ID, analytics will automatically track all events and send them to Google Analytics.

## Troubleshooting

**Analytics not working?**
- Check that `GA4_MEASUREMENT_ID` is set correctly (must start with `G-`)
- Ensure you're NOT on localhost (analytics auto-disabled on localhost/127.0.0.1)
- Check browser console - you should see `[Analytics] Initialized` in production
- Check browser console for any errors
- Verify your GA4 property is set up correctly in Google Analytics

**Need help?**
- [Google Analytics 4 Documentation](https://support.google.com/analytics/answer/9304153)
- [GA4 Event Tracking Guide](https://support.google.com/analytics/answer/9322688)
