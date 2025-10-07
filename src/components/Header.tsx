import { Menu, X, Shield } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: 'home' },
    { label: 'Product', value: 'product' },
    { label: 'Pricing', value: 'pricing' },
    { label: 'Resources', value: 'resources' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 outline-offset-4 group"
          >
            <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center group-hover:bg-primary/90 transition-colors">
              <Shield className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col items-start -space-y-1">
              <span className="font-semibold text-foreground tracking-tight">Bail Bond Buddy</span>
              <span className="text-xs text-muted-foreground hidden sm:block">Bonding Made Simple</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className={`px-4 py-2 rounded-md transition-all outline-offset-4 ${
                  currentPage === item.value 
                    ? 'text-primary bg-accent' 
                    : 'text-foreground hover:text-primary hover:bg-accent/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Button onClick={() => onNavigate('contact')} size="lg">Request a Demo</Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => (window.location.href = 'https://bail-bonds-ui-app.onrender.com/auth/login')}
            >
              Sign in to my account
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 outline-offset-4 hover:bg-accent rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    onNavigate(item.value);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-3 rounded-md transition-all outline-offset-4 ${
                    currentPage === item.value 
                      ? 'text-primary bg-accent' 
                      : 'text-foreground hover:bg-accent/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <Button 
                  onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }} 
                  className="w-full"
                  size="lg"
                >
                  Request a Demo
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => { window.location.href = 'https://bail-bonds-ui-app.onrender.com/auth/login'; setMobileMenuOpen(false); }} 
                  className="w-full"
                  size="lg"
                >
                  Sign in to my account
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
