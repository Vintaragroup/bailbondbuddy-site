import { Facebook, Twitter, Linkedin, Mail, Shield, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const productLinks = [
    { label: 'Product Overview', value: 'product' },
    { label: 'Pricing', value: 'pricing' },
    { label: 'Resources', value: 'resources' },
  ];

  const companyLinks = [
    { label: 'About Us', value: 'home' },
    { label: 'Contact', value: 'contact' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', value: 'privacy' },
    { label: 'Terms of Service', value: 'terms' },
    { label: '10DLC Compliance', value: 'compliance' },
  ];

  return (
    <footer className="border-t bg-gradient-to-br from-muted/30 to-muted/50">
      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center">
                <Shield className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-foreground">Bail Bond Buddy</span>
                <span className="text-xs text-muted-foreground">Bonding Made Simple</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Modern CRM and operations platform purpose-built for bail bond agencies to streamline operations and ensure compliance.
            </p>
            <div className="flex space-x-4">
              <button 
                className="h-9 w-9 rounded-lg bg-background border hover:bg-accent hover:border-primary/20 text-muted-foreground hover:text-primary transition-all outline-offset-4 flex items-center justify-center" 
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </button>
              <button 
                className="h-9 w-9 rounded-lg bg-background border hover:bg-accent hover:border-primary/20 text-muted-foreground hover:text-primary transition-all outline-offset-4 flex items-center justify-center" 
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </button>
              <button 
                className="h-9 w-9 rounded-lg bg-background border hover:bg-accent hover:border-primary/20 text-muted-foreground hover:text-primary transition-all outline-offset-4 flex items-center justify-center" 
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </button>
              <button 
                className="h-9 w-9 rounded-lg bg-background border hover:bg-accent hover:border-primary/20 text-muted-foreground hover:text-primary transition-all outline-offset-4 flex items-center justify-center" 
                aria-label="Email"
              >
                <Mail size={18} />
              </button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.value}>
                  <button
                    onClick={() => onNavigate(link.value)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors outline-offset-4"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.value}>
                  <button
                    onClick={() => onNavigate(link.value)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors outline-offset-4"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h3 className="text-sm uppercase tracking-wider text-foreground mb-4">Legal</h3>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.value}>
                    <button
                      onClick={() => onNavigate(link.value)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors outline-offset-4"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-foreground mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:support@bailbondbuddy.com" className="text-sm text-foreground hover:text-primary transition-colors">
                    support@bailbondbuddy.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Headquarters</p>
                  <p className="text-sm text-foreground">
                    United States
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Bail Bond Buddy. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground text-center md:text-right">
              SOC2 Type II Compliant • 10DLC Certified • GDPR Ready
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
