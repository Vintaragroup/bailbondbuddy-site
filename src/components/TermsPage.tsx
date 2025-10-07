import { FileText, Mail } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface TermsPageProps {
  onNavigate: (page: string) => void;
}

export function TermsPage({ onNavigate }: TermsPageProps) {
  const sections = [
    { id: 'section-1', title: '1. Account Registration & Eligibility' },
    { id: 'section-2', title: '2. License & Acceptable Use' },
    { id: 'section-3', title: '3. SMS & Communication Compliance' },
    { id: 'section-4', title: '4. Customer Data' },
    { id: 'section-5', title: '5. Fees & Payment' },
    { id: 'section-6', title: '6. Service Availability & Support' },
    { id: 'section-7', title: '7. Intellectual Property' },
    { id: 'section-8', title: '8. Third-Party Services' },
    { id: 'section-9', title: '9. Confidentiality' },
    { id: 'section-10', title: '10. Disclaimer of Warranties' },
    { id: 'section-11', title: '11. Limitation of Liability' },
    { id: 'section-12', title: '12. Indemnification' },
    { id: 'section-13', title: '13. Termination' },
    { id: 'section-14', title: '14. Modifications' },
    { id: 'section-15', title: '15. Governing Law & Dispute Resolution' },
    { id: 'section-16', title: '16. Miscellaneous' },
    { id: 'contact', title: 'Contact' },
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
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl">Terms of Service</h1>
              <p className="text-muted-foreground mt-2">Last updated: October 3, 2025</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
            These Terms of Service ("Terms") govern access to and use of the Bail Bond Buddy platform, website, 
            and related services ("Services"). By using the Services, you agree to these Terms and our Privacy Policy. 
            If you use the Services on behalf of an organization, you represent that you have authority to bind that organization.
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
                  <h2 className="text-2xl mb-4 text-foreground">1. Account Registration & Eligibility</h2>
                  <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-6">
                    <li>You must be 18+ and legally able to enter contracts.</li>
                    <li>Provide accurate account information and keep it current.</li>
                    <li>Maintain the confidentiality of your login credentials. You are responsible for activities under your account.</li>
                  </ul>
                </section>

                {/* Section 2 */}
                <section id="section-2">
                  <h2 className="text-2xl mb-4 text-foreground">2. License & Acceptable Use</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We grant a limited, non-exclusive, revocable license to access the Services for your professional operations.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-3">You agree not to:</p>
                  <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-6">
                    <li>Reverse engineer, copy, or resell the Services.</li>
                    <li>Upload viruses, malicious code, or interfere with functionality.</li>
                    <li>Use the Services for unlawful or unauthorized purposes.</li>
                    <li>Perform automated data scraping without written permission.</li>
                  </ul>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    You are responsible for your content and compliance with applicable laws (including messaging, privacy, and bail regulations).
                  </p>
                </section>

                {/* Section 3 */}
                <section id="section-3">
                  <h2 className="text-2xl mb-4 text-foreground">3. SMS & Communication Compliance</h2>
                  <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-6">
                    <li>You must secure documented opt-in from every recipient and provide opt-out mechanics.</li>
                    <li>You may not send unsolicited, fraudulent, or emergency communications.</li>
                    <li>You are responsible for all carrier fees and regulatory penalties arising from your usage.</li>
                  </ul>
                </section>

                {/* Section 4 */}
                <section id="section-4">
                  <h2 className="text-2xl mb-4 text-foreground">4. Customer Data</h2>
                  <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-6">
                    <li>You retain ownership of client/case data you upload.</li>
                    <li>You grant us a limited right to use that data solely to provide and support the Services.</li>
                    <li>You confirm you have the legal right and consents to upload such data.</li>
                  </ul>
                </section>

                {/* Section 5 */}
                <section id="section-5">
                  <h2 className="text-2xl mb-4 text-foreground">5. Fees & Payment</h2>
                  <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-6">
                    <li>Subscription fees are invoiced as agreed (monthly or annually).</li>
                    <li>Fees are non-refundable except where required by law.</li>
                    <li>Late payments may incur interest or suspension of access.</li>
                    <li>Taxes are your responsibility, except those based on our income.</li>
                  </ul>
                </section>

                {/* Section 6 */}
                <section id="section-6">
                  <h2 className="text-2xl mb-4 text-foreground">6. Service Availability & Support</h2>
                  <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-6">
                    <li>We aim for high availability but do not guarantee uninterrupted service.</li>
                    <li>Planned maintenance and outages may occur; we'll provide notice when feasible.</li>
                    <li>Support access is defined by your plan (email, chat, or dedicated CSM).</li>
                  </ul>
                </section>

                {/* Section 7 */}
                <section id="section-7">
                  <h2 className="text-2xl mb-4 text-foreground">7. Intellectual Property</h2>
                  <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-6">
                    <li>All software, trademarks, and trade secrets belong to Bail Bond Buddy or our licensors.</li>
                    <li>You may not remove or alter branding or copyright notices.</li>
                  </ul>
                </section>

                {/* Section 8 */}
                <section id="section-8">
                  <h2 className="text-2xl mb-4 text-foreground">8. Third-Party Services</h2>
                  <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-6">
                    <li>Integrations and links to third parties (e.g., Twilio, Stripe) are provided for convenience.</li>
                    <li>Use of those services is subject to their terms; we are not responsible for third-party actions.</li>
                  </ul>
                </section>

                {/* Section 9 */}
                <section id="section-9">
                  <h2 className="text-2xl mb-4 text-foreground">9. Confidentiality</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Both parties agree to keep non-public information confidential, except when disclosure is required by law 
                    or written consent is provided.
                  </p>
                </section>

                {/* Section 10 */}
                <section id="section-10">
                  <h2 className="text-2xl mb-4 text-foreground">10. Disclaimer of Warranties</h2>
                  <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-6">
                    <li>The Services are provided "AS IS" and "AS AVAILABLE."</li>
                    <li>We disclaim all implied warranties (merchantability, fitness for a particular purpose, non-infringement).</li>
                    <li>We do not warrant that the Services will meet your requirements or be error-free.</li>
                  </ul>
                </section>

                {/* Section 11 */}
                <section id="section-11">
                  <h2 className="text-2xl mb-4 text-foreground">11. Limitation of Liability</h2>
                  <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-6">
                    <li>To the fullest extent permitted, Bail Bond Buddy's total liability under these Terms is limited to the fees you paid during the twelve months before the claim.</li>
                    <li>We are not liable for indirect, incidental, consequential, or punitive damages.</li>
                  </ul>
                </section>

                {/* Section 12 */}
                <section id="section-12">
                  <h2 className="text-2xl mb-4 text-foreground">12. Indemnification</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You agree to indemnify and hold harmless Bail Bond Buddy from claims related to your use of the Services, 
                    breach of these Terms, or violation of law.
                  </p>
                </section>

                {/* Section 13 */}
                <section id="section-13">
                  <h2 className="text-2xl mb-4 text-foreground">13. Termination</h2>
                  <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-6">
                    <li>You may terminate at any time by closing your account (charges apply until end of billing term).</li>
                    <li>We may suspend or terminate access for breach, unlawful use, or nonpayment.</li>
                    <li>Upon termination, your access ceases; we will delete data per our retention schedule unless legally required to keep it.</li>
                  </ul>
                </section>

                {/* Section 14 */}
                <section id="section-14">
                  <h2 className="text-2xl mb-4 text-foreground">14. Modifications</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update these Terms from time to time. Continued use after changes constitutes acceptance. 
                    Material changes will be communicated via email or in-app notices.
                  </p>
                </section>

                {/* Section 15 */}
                <section id="section-15">
                  <h2 className="text-2xl mb-4 text-foreground">15. Governing Law & Dispute Resolution</h2>
                  <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-6">
                    <li>These Terms are governed by the laws of the State of Texas, without regard to conflict of laws principles.</li>
                    <li>Disputes will be resolved in the courts located in Harris County, Texas, unless mutually agreed otherwise.</li>
                  </ul>
                </section>

                {/* Section 16 */}
                <section id="section-16">
                  <h2 className="text-2xl mb-4 text-foreground">16. Miscellaneous</h2>
                  <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-6">
                    <li>These Terms constitute the entire agreement between you and Bail Bond Buddy.</li>
                    <li>If any provision is deemed unenforceable, the remainder remains in effect.</li>
                    <li>Failure to enforce a provision isn't a waiver.</li>
                  </ul>
                </section>

                {/* Contact */}
                <section id="contact">
                  <h2 className="text-2xl mb-4 text-foreground">Contact</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    For questions about these Terms, contact us:
                  </p>
                  <div className="bg-muted/50 p-6 rounded-lg space-y-3">
                    <p className="text-foreground">Bail Bond Buddy</p>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="h-4 w-4 text-primary" />
                      <a href="mailto:legal@bailbondbuddy.com" className="text-primary hover:underline">
                        legal@bailbondbuddy.com
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
