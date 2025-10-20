import { useEffect, useMemo, useRef, lazy, Suspense } from 'react';
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
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

// Page metadata for SEO keyed by route key
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

// Helpers to map between paths and route keys
const pathToKey = (path: string): string => {
  if (path === '/' || path === '' || path === '/home') return 'home';
  if (path === '/product') return 'product';
  if (path === '/pricing') return 'pricing';
  if (path === '/resources') return 'resources';
  if (path === '/contact') return 'contact';
  if (path === '/privacy') return 'privacy';
  if (path === '/terms') return 'terms';
  if (path === '/compliance' || path === '/10dlc') return 'compliance';
  return '404';
};

const keyToPath = (key: string): string => {
  switch (key) {
    case 'home':
      return '/';
    case 'product':
      return '/product';
    case 'pricing':
      return '/pricing';
    case 'resources':
      return '/resources';
    case 'contact':
      return '/contact';
    case 'privacy':
      return '/privacy';
    case 'terms':
      return '/terms';
    case 'compliance':
      return '/compliance';
    default:
      return '/404';
  }
};

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPage = useMemo(() => pathToKey(location.pathname), [location.pathname]);
  const prevPageRef = useRef<string>('home');

  // Initialize analytics and performance monitoring on mount
  useEffect(() => {
    initAnalytics();
    initPerformanceMonitoring();
    preloadCriticalResources();
  }, []);

  // Update document title/meta and analytics on route change
  useEffect(() => {
    const metadata = pageMetadata[currentPage];
    if (metadata) {
      document.title = metadata.title;

      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', metadata.description);

      trackPageView(currentPage, metadata.title);
      const prev = prevPageRef.current;
      if (prev !== currentPage) {
        trackNavigation(prev, currentPage);
        prevPageRef.current = currentPage;
      }
    } else {
      document.title = '404 - Page Not Found | Bail Bond Buddy';
      trackPageView('404', '404 - Page Not Found');
    }
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    const path = keyToPath(page);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">
        <Suspense fallback={<PageLoadingSkeleton />}>
          <Routes>
            <Route path="/" element={<HomePage onNavigate={handleNavigate} />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/product" element={<ProductPage onNavigate={handleNavigate} />} />
            <Route path="/pricing" element={<PricingPage onNavigate={handleNavigate} />} />
            <Route path="/resources" element={<ResourcesPage onNavigate={handleNavigate} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage onNavigate={handleNavigate} />} />
            <Route path="/terms" element={<TermsPage onNavigate={handleNavigate} />} />
            <Route path="/compliance" element={<CompliancePage onNavigate={handleNavigate} />} />
            <Route path="/10dlc" element={<Navigate to="/compliance" replace />} />
            <Route path="*" element={<NotFoundPage onNavigate={handleNavigate} />} />
          </Routes>
        </Suspense>
      </main>
      <Footer onNavigate={handleNavigate} />
      <CookieBanner onNavigate={handleNavigate} />
    </div>
  );
}
