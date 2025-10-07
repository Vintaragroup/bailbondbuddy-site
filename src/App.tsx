import { useState, useEffect, lazy, Suspense } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PageLoadingSkeleton } from './components/PageLoadingSkeleton';
import { CookieBanner } from './components/CookieBanner';
import { initAnalytics, trackPageView, trackNavigation } from './utils/analytics';
import { initPerformanceMonitoring, preloadCriticalResources } from './utils/performance';

// Lazy load page components for better performance and code splitting
const HomePage = lazy(() => import('./components/HomePage').then(m => ({ default: m.HomePage })));
const ProductPage = lazy(() => import('./components/ProductPage').then(m => ({ default: m.ProductPage })));
const CompliancePage = lazy(() => import('./components/CompliancePage').then(m => ({ default: m.CompliancePage })));
const PricingPage = lazy(() => import('./components/PricingPage').then(m => ({ default: m.PricingPage })));
const ContactPage = lazy(() => import('./components/ContactPage').then(m => ({ default: m.ContactPage })));
const ResourcesPage = lazy(() => import('./components/ResourcesPage').then(m => ({ default: m.ResourcesPage })));
const PrivacyPage = lazy(() => import('./components/PrivacyPage').then(m => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('./components/TermsPage').then(m => ({ default: m.TermsPage })));
const NotFoundPage = lazy(() => import('./components/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

// Page metadata for SEO
const pageMetadata: Record<string, { title: string; description: string }> = {
  home: {
    title: 'Bail Bond Buddy - Modern CRM for Bail Bond Agencies',
    description: 'Complete bail bond operations platform with case management, GPS tracking, automated messaging, and compliance tools. Streamline your agency operations today.',
  },
  product: {
    title: 'Product Overview - Bail Bond Buddy',
    description: 'Discover powerful features including case management, GPS tracking, automated messaging, reporting, and security. Purpose-built for bail bond agencies.',
  },
  compliance: {
    title: '10DLC SMS Compliance - Bail Bond Buddy',
    description: 'Stay compliant with 10DLC regulations. Complete consent tracking, audit trails, and automated compliance documentation for your bail bond agency.',
  },
  pricing: {
    title: 'Pricing Plans - Bail Bond Buddy',
    description: 'Flexible pricing for agencies of all sizes. Choose from Starter, Professional, or Enterprise plans. No hidden fees, cancel anytime.',
  },
  contact: {
    title: 'Contact Us - Bail Bond Buddy',
    description: 'Get in touch with our team. We\'re here to help your bail bond agency succeed with modern CRM and operations tools.',
  },
  resources: {
    title: 'Resources - Bail Bond Buddy',
    description: 'Guides, articles, and resources to help you get the most out of your bail bond operations platform.',
  },
  privacy: {
    title: 'Privacy Policy - Bail Bond Buddy',
    description: 'Learn how Bail Bond Buddy collects, uses, and protects your data. SOC2 Type II compliant and GDPR ready.',
  },
  terms: {
    title: 'Terms of Service - Bail Bond Buddy',
    description: 'Terms and conditions for using Bail Bond Buddy\'s bail bond operations platform and services.',
  },
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [previousPage, setPreviousPage] = useState('home');
  const [isValidPage, setIsValidPage] = useState(true);

  // Initialize analytics and performance monitoring on mount
  useEffect(() => {
    initAnalytics();
    initPerformanceMonitoring();
    preloadCriticalResources();
  }, []);

  // Update document title and meta description when page changes
  useEffect(() => {
    const metadata = pageMetadata[currentPage];
    if (metadata) {
      document.title = metadata.title;
      
      // Update or create meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', metadata.description);
      
      setIsValidPage(true);
      
      // Track page view
      trackPageView(currentPage, metadata.title);
      
      // Track navigation (except on initial load)
      if (previousPage !== currentPage) {
        trackNavigation(previousPage, currentPage);
      }
    } else {
      // 404 - page not found
      document.title = '404 - Page Not Found | Bail Bond Buddy';
      setIsValidPage(false);
      trackPageView('404', '404 - Page Not Found');
    }
  }, [currentPage, previousPage]);

  const handleNavigate = (page: string) => {
    setPreviousPage(currentPage);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    // If page is invalid, show 404
    if (!isValidPage) {
      return <NotFoundPage onNavigate={handleNavigate} />;
    }

    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'product':
        return <ProductPage onNavigate={handleNavigate} />;
      case 'compliance':
        return <CompliancePage onNavigate={handleNavigate} />;
      case 'pricing':
        return <PricingPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      case 'resources':
        return <ResourcesPage onNavigate={handleNavigate} />;
      case 'privacy':
        return <PrivacyPage onNavigate={handleNavigate} />;
      case 'terms':
        return <TermsPage onNavigate={handleNavigate} />;
      default:
        return <NotFoundPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">
        <Suspense fallback={<PageLoadingSkeleton />}>
          {renderPage()}
        </Suspense>
      </main>
      <Footer onNavigate={handleNavigate} />
      <CookieBanner onNavigate={handleNavigate} />
    </div>
  );
}
