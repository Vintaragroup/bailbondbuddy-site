import { Check, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface PricingPageProps {
  onNavigate: (page: string) => void;
}

export function PricingPage({ onNavigate }: PricingPageProps) {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small agencies getting started',
      price: 'Contact for Pricing',
      features: [
        'Up to 50 active cases',
        '2 user accounts included',
        'Basic case management',
        'SMS messaging (pay per message)',
        'Manual GPS check-ins',
        'Email support',
        'Standard reports',
        'Mobile app access',
      ],
      addOns: ['Additional users: +$X/month', 'SMS bundle packages available'],
    },
    {
      name: 'Growth',
      description: 'For growing agencies with advanced needs',
      price: 'Contact for Pricing',
      popular: true,
      features: [
        'Up to 250 active cases',
        '5 user accounts included',
        'Advanced case management',
        'Unlimited SMS messaging',
        'Automated GPS pings',
        'Email & SMS automation',
        'Priority support',
        'Custom reports & dashboards',
        'API access',
        'Advanced integrations',
      ],
      addOns: ['Additional users: +$X/month', 'Dedicated onboarding specialist'],
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for large agencies',
      price: 'Custom',
      features: [
        'Unlimited active cases',
        'Unlimited user accounts',
        'White-label options',
        'Custom workflows',
        'Dedicated account manager',
        'Custom integrations',
        'SLA guarantee (99.9% uptime)',
        'Advanced security features',
        'Custom training',
        'Priority feature requests',
      ],
      addOns: ['Volume discounts available', 'Multi-location support'],
    },
  ];

  const allFeatures = [
    {
      category: 'Case Management',
      features: [
        { name: 'Client profiles & 360 view', starter: true, growth: true, enterprise: true },
        { name: 'Document management', starter: true, growth: true, enterprise: true },
        { name: 'Payment tracking', starter: true, growth: true, enterprise: true },
        { name: 'Court date scheduling', starter: true, growth: true, enterprise: true },
        { name: 'Automated workflows', starter: false, growth: true, enterprise: true },
        { name: 'Custom case fields', starter: false, growth: true, enterprise: true },
      ],
    },
    {
      category: 'Communication',
      features: [
        { name: 'SMS messaging (10DLC compliant)', starter: true, growth: true, enterprise: true },
        { name: 'Email messaging', starter: true, growth: true, enterprise: true },
        { name: 'Automated reminders', starter: false, growth: true, enterprise: true },
        { name: 'Two-way messaging', starter: true, growth: true, enterprise: true },
        { name: 'Message templates', starter: true, growth: true, enterprise: true },
        { name: 'Bulk messaging', starter: false, growth: true, enterprise: true },
      ],
    },
    {
      category: 'GPS & Compliance',
      features: [
        { name: 'Manual GPS check-ins', starter: true, growth: true, enterprise: true },
        { name: 'Automated GPS pings', starter: false, growth: true, enterprise: true },
        { name: 'Geofencing', starter: false, growth: true, enterprise: true },
        { name: 'Location history', starter: true, growth: true, enterprise: true },
        { name: 'Compliance alerts', starter: true, growth: true, enterprise: true },
        { name: 'Custom compliance rules', starter: false, growth: false, enterprise: true },
      ],
    },
    {
      category: 'Reporting & Analytics',
      features: [
        { name: 'Standard reports', starter: true, growth: true, enterprise: true },
        { name: 'Custom dashboards', starter: false, growth: true, enterprise: true },
        { name: 'Data export (CSV, PDF)', starter: true, growth: true, enterprise: true },
        { name: 'API access', starter: false, growth: true, enterprise: true },
        { name: 'Advanced analytics', starter: false, growth: true, enterprise: true },
        { name: 'Custom reporting', starter: false, growth: false, enterprise: true },
      ],
    },
    {
      category: 'Support & Security',
      features: [
        { name: 'Email support', starter: true, growth: true, enterprise: true },
        { name: 'Priority support', starter: false, growth: true, enterprise: true },
        { name: 'Dedicated account manager', starter: false, growth: false, enterprise: true },
        { name: 'SOC2-ready infrastructure', starter: true, growth: true, enterprise: true },
        { name: 'SLA guarantee', starter: false, growth: false, enterprise: true },
        { name: 'Custom security features', starter: false, growth: false, enterprise: true },
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/10 py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-2">Pricing</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
              Choose the Right Plan for Your Agency
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Scale as you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-2 border-primary shadow-2xl md:scale-105' : 'border'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1 shadow-lg">
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="pt-6">
                  <div className="text-3xl text-primary">{plan.price}</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {plan.addOns && plan.addOns.length > 0 && (
                  <div className="pt-4 border-t">
                    <p className="text-sm mb-3 text-muted-foreground">Add-ons available:</p>
                    <ul className="space-y-2">
                      {plan.addOns.map((addon, aIndex) => (
                        <li key={aIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary">+</span>
                          {addon}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Button 
                  className="w-full mt-6" 
                  variant={plan.popular ? 'default' : 'outline'}
                  size="lg"
                  onClick={() => onNavigate('contact')}
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">Feature Comparison</h2>
              <p className="text-lg text-muted-foreground">Detailed breakdown of features by plan</p>
            </div>
            
            <div className="bg-background rounded-lg border overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">Feature</th>
                    <th className="text-center p-4">Starter</th>
                    <th className="text-center p-4 bg-primary/5">Growth</th>
                    <th className="text-center p-4">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {allFeatures.map((category, cIndex) => (
                    <>
                      <tr key={`cat-${cIndex}`} className="bg-muted/50">
                        <td colSpan={4} className="p-4">
                          <strong>{category.category}</strong>
                        </td>
                      </tr>
                      {category.features.map((feature, fIndex) => (
                        <tr key={`feat-${cIndex}-${fIndex}`} className="border-b last:border-b-0">
                          <td className="p-4">{feature.name}</td>
                          <td className="text-center p-4">
                            {feature.starter ? (
                              <Check className="h-5 w-5 text-primary inline" />
                            ) : (
                              <span className="text-muted-foreground">—</span>
                            )}
                          </td>
                          <td className="text-center p-4 bg-primary/5">
                            {feature.growth ? (
                              <Check className="h-5 w-5 text-primary inline" />
                            ) : (
                              <span className="text-muted-foreground">—</span>
                            )}
                          </td>
                          <td className="text-center p-4">
                            {feature.enterprise ? (
                              <Check className="h-5 w-5 text-primary inline" />
                            ) : (
                              <span className="text-muted-foreground">—</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-primary text-primary-foreground rounded-lg p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl mb-4">Not Sure Which Plan is Right?</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule a consultation with our team to discuss your agency's needs
          </p>
          <Button size="lg" variant="secondary" onClick={() => onNavigate('contact')}>
            Talk to Sales
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
