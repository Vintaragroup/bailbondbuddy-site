import { Shield, Mail } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface PrivacyPageProps {
  onNavigate: (page: string) => void;
}

export function PrivacyPage({ onNavigate }: PrivacyPageProps) {
  const sections = [
    { id: 'section-1', title: '1. Information We Collect' },
    { id: 'section-2', title: '2. How We Use Information' },
    { id: 'section-3', title: '3. Sharing Information' },
    { id: 'section-4', title: '4. Data Retention' },
    { id: 'section-5', title: '5. Security' },
    { id: 'section-6', title: '6. Your Rights & Choices' },
    { id: 'section-7', title: '7. Cookies & Tracking' },
    { id: 'section-8', title: '8. Children\'s Privacy' },
    { id: 'section-9', title: '9. International Use' },
    { id: 'section-10', title: '10. Changes' },
    { id: 'section-11', title: '11. Contact Us' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/30 to-background py-16 md:py-20 border-b">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl">Privacy Policy</h1>
              <p className="text-muted-foreground mt-2">Last updated: October 3, 2025</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
            Bail Bond Buddy ("we," "our," "us") provides software to bail agencies and allied professionals. 
            This Privacy Policy explains how we collect, use, and safeguard information when you visit our website, 
            engage with our marketing, or use the Bail Bond Buddy platform (collectively, the "Services"). 
            If you do not agree with this policy, please discontinue use of the Services.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 max-w-7xl mx-auto">
          {/* Table of Contents - Sidebar */}
          <aside className="lg:sticky lg:top-24 h-fit">
            <Card className="border shadow-sm">
              <CardContent className="p-6">
                <h3 className="mb-4 text-sm uppercase tracking-wider text-muted-foreground">
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className="block w-full text-left text-sm py-2 px-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <div className="prose prose-slate max-w-none">
            <Card className="border shadow-sm">
              <CardContent className="p-8 md:p-12 space-y-10">
                
                {/* Section 1 */}
                <section id="section-1">
                  <h2 className="text-2xl mb-4 text-foreground">1. Information We Collect</h2>
                  <ul className="space-y-3 text-muted-foreground leading-relaxed">
                    <li><strong className="text-foreground">Account & Contact Data:</strong> Name, email, phone number, agency details, billing contacts.</li>
                    <li><strong className="text-foreground">Client/Case Data:</strong> Information that you upload to manage cases (defendant info, indemnitor details, check-ins, documents). You control this data.</li>
                    <li><strong className="text-foreground">Usage & Technical Data:</strong> Log files, device/browser identifiers, IP address, pages visited, actions taken.</li>
                    <li><strong className="text-foreground">Communication Records:</strong> Messages sent through the platform, support tickets, call notes.</li>
                    <li><strong className="text-foreground">Mobile & SMS Data:</strong> Phone numbers, opt-in status, delivery receipts, STOP/HELP opt-out logs.</li>
                  </ul>
                </section>

                {/* Section 2 */}
                <section id="section-2">
                  <h2 className="text-2xl mb-4 text-foreground">2. How We Use Information</h2>
                  <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-6">
                    <li>Provide, manage, and improve the Services.</li>
                    <li>Authenticate users and secure accounts.</li>
                    <li>Deliver notifications, reminders, and supported communications.</li>
                    <li>Process transactions and subscriptions.</li>
                    <li>Provide support, detect misuse, and maintain audit trails.</li>
                    <li>Meet legal, security, and compliance obligations.</li>
                  </ul>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    We do not use client case data for advertising or sell it to third parties.
                  </p>
                </section>

                {/* Section 3 */}
                <section id="section-3">
                  <h2 className="text-2xl mb-4 text-foreground">3. Sharing Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">We share data only with:</p>
                  <ul className="space-y-3 text-muted-foreground leading-relaxed">
                    <li><strong className="text-foreground">Service Providers:</strong> Hosting (e.g., Google Cloud), messaging (Twilio), payments (Stripe), analytics, customer support. Each provider is bound by contractual confidentiality.</li>
                    <li><strong className="text-foreground">Legal/Regulatory Requests:</strong> When required by law or court order.</li>
                    <li><strong className="text-foreground">With Your Consent:</strong> When you authorize integrations or data exports.</li>
                  </ul>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Mobile information will not be shared with third parties for marketing or promotional purposes.
                  </p>
                </section>

                {/* Section 4 */}
                <section id="section-4">
                  <h2 className="text-2xl mb-4 text-foreground">4. Data Retention</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We retain information while you maintain an account and thereafter as required for legal, audit, or contractual obligations. 
                    Case data retention is controlled by the account owner, subject to backup schedules.
                  </p>
                </section>

                {/* Section 5 */}
                <section id="section-5">
                  <h2 className="text-2xl mb-4 text-foreground">5. Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use industry-standard safeguards (encryption in transit, access controls, logging, vulnerability management). 
                    No system is perfect; notify us immediately if you suspect unauthorized access.
                  </p>
                </section>

                {/* Section 6 */}
                <section id="section-6">
                  <h2 className="text-2xl mb-4 text-foreground">6. Your Rights & Choices</h2>
                  <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-6">
                    <li>Access, correct, or delete your account information.</li>
                    <li>Export or remove case data you control.</li>
                    <li>Opt out of marketing emails via unsubscribe link.</li>
                    <li>For SMS: reply STOP to cancel or HELP for assistance.</li>
                    <li>Submit privacy inquiries to <a href="mailto:privacy@bailbondbuddy.com" className="text-primary hover:underline">privacy@bailbondbuddy.com</a>.</li>
                  </ul>
                </section>

                {/* Section 7 */}
                <section id="section-7">
                  <h2 className="text-2xl mb-4 text-foreground">7. Cookies & Tracking</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use necessary cookies to maintain sessions and optional analytics cookies to understand usage. 
                    You can adjust browser settings to control cookies; disabling may impact functionality.
                  </p>
                </section>

                {/* Section 8 */}
                <section id="section-8">
                  <h2 className="text-2xl mb-4 text-foreground">8. Children's Privacy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The Services are not directed to children under 13. If we learn we collected information from a child, we will delete it.
                  </p>
                </section>

                {/* Section 9 */}
                <section id="section-9">
                  <h2 className="text-2xl mb-4 text-foreground">9. International Use</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The Services are hosted in the United States. By using them, you consent to data transfer to the U.S. 
                    and jurisdictions where our providers operate.
                  </p>
                </section>

                {/* Section 10 */}
                <section id="section-10">
                  <h2 className="text-2xl mb-4 text-foreground">10. Changes</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this policy to reflect new practices. Revisions will be posted at this URL with the "Last updated" date. 
                    Material changes will be communicated via email or in-app notice.
                  </p>
                </section>

                {/* Section 11 - Contact */}
                <section id="section-11">
                  <h2 className="text-2xl mb-4 text-foreground">11. Contact Us</h2>
                  <div className="bg-muted/50 p-6 rounded-lg space-y-3">
                    <p className="text-foreground">Bail Bond Buddy</p>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="h-4 w-4 text-primary" />
                      <a href="mailto:privacy@bailbondbuddy.com" className="text-primary hover:underline">
                        privacy@bailbondbuddy.com
                      </a>
                    </div>
                  </div>
                </section>

              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
