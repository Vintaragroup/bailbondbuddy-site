import { AlertCircle, Home, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface NotFoundPageProps {
  onNavigate: (page: string) => void;
}

export function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-20">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* 404 Icon */}
        <div className="flex justify-center">
          <div className="h-24 w-24 rounded-full bg-destructive/10 flex items-center justify-center">
            <AlertCircle className="h-12 w-12 text-destructive" />
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl text-muted-foreground/30">404</h1>
          <h2 className="text-3xl md:text-5xl">Page Not Found</h2>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It may have been moved or doesn't exist.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
          <Button
            onClick={() => onNavigate('home')}
            size="lg"
            className="w-full sm:w-auto"
          >
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>

        {/* Helpful Links */}
        <Card className="mt-12">
          <CardContent className="pt-6">
            <h3 className="text-lg mb-4">You might be looking for:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <button
                onClick={() => onNavigate('product')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors outline-offset-4 text-left"
              >
                Product Overview
              </button>
              <button
                onClick={() => onNavigate('pricing')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors outline-offset-4 text-left"
              >
                Pricing
              </button>
              <button
                onClick={() => onNavigate('resources')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors outline-offset-4 text-left"
              >
                Resources
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors outline-offset-4 text-left"
              >
                Contact Us
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
