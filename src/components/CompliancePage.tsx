import { Shield, CheckCircle, FileText, MessageSquare, AlertCircle, Mic, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Alert, AlertDescription } from './ui/alert';

interface CompliancePageProps {
  onNavigate: (page: string) => void;
}

export function CompliancePage({ onNavigate }: CompliancePageProps) {
  const whatWeProvide = [
    'Explicit opt-in capture at every touchpoint (web forms, mobile app, phone/in-person)',
    'Verbal consent collection via AI agent for inbound calls',
    'Complete audit logs of all opt-in events with timestamps',
    'Automated STOP/HELP keyword handling',
    'Opt-out management and suppression lists',
    'Double opt-in workflows (optional)',
    'Consent tracking across all communication channels',
  ];

  const actionItems = [
    {
      title: 'Public Opt-In Verification',
      description: 'Bail Bond Buddy captures explicit consent before any SMS is sent. Our consent mechanisms include visible proof that every recipient proactively agreed to receive messages.',
      examples: [
        'Online opt-in forms with clear consent language and STOP/HELP disclosures',
        'Paper consent forms for phone or in-person sign-ups with physical signatures',
        'Login flow with SMS consent checkbox during account creation',
        'Publicly accessible privacy policy and opt-in documentation',
        'AI voice consent script with verbal agreement recording (publicly accessible)',
      ],
      hasPublicLink: true,
    },
    {
      title: 'Evidence Documentation',
      description: 'All consent capture mechanisms are documented and hosted for carrier verification:',
      formats: [
        'Public link to opt-in forms (accessible without login for carrier review)',
        'Screenshots showing consent language during account creation flows',
        'Scanned copies of signed physical consent forms',
        'All documentation hosted on publicly accessible URLs for audit purposes',
      ],
    },
    {
      title: 'Our Disclosure Standards',
      description: 'Every Bail Bond Buddy opt-in touchpoint includes the following required disclosures:',
      items: [
        'Brand name "Bail Bond Buddy" clearly displayed on all materials',
        'Explicit consent language: "By providing your phone number, you agree to receive SMS messages from Bail Bond Buddy"',
        '"Message & data rates may apply" disclaimer on all opt-in forms',
        'Frequency statement: "You may receive up to 10 messages per week"',
        'STOP instructions: "Reply STOP to opt out at any time"',
        'HELP instructions: "Reply HELP for assistance"',
        'Privacy policy link with required clause: "Mobile information will not be shared with third parties for marketing/promotional purposes" (available at bailbondbuddy.com/privacy)',
      ],
    },
    {
      title: 'Message Examples',
      description: 'All Bail Bond Buddy messages include brand identification and opt-out instructions per carrier requirements:',
      samples: [
        'Bail Bond Buddy: Hi [CLIENT_NAME], this is a reminder of your court date on [DATE] at [TIME]. Reply STOP to opt out, HELP for help.',
        'Bail Bond Buddy: GPS check-in required. Please complete your location verification by [TIME]. Reply STOP to unsubscribe.',
        'Bail Bond Buddy: Your payment of $[AMOUNT] has been received. Questions? Reply HELP or contact us. Reply STOP to opt out.',
        'Bail Bond Buddy: Hi [FIRST_NAME], there\'s an update regarding [INMATE_NAME]\'s warrant status. Reply STOP to opt out. Msg & data rates may apply. HELP for info.',
      ],
    },
  ];

  const complianceChecklist = [
    { task: 'Opt-in forms with required disclosures', description: 'All web forms include brand name, consent language, Msg&data rates, frequency, STOP/HELP instructions' },
    { task: 'Privacy policy compliance', description: 'Mobile info sharing clause included and hosted at publicly accessible URL' },
    { task: 'Message templates with carrier requirements', description: 'All messages include brand identification, STOP instructions, and proper variable formatting' },
    { task: 'Opt-in proof documentation', description: 'Screenshots and records of all consent capture mechanisms maintained' },
    { task: 'Public evidence hosting', description: 'Opt-in forms and proof materials available at public URLs for carrier verification' },
    { task: 'Automated STOP/HELP handling', description: 'System configured for immediate opt-out processing. HELP replies trigger an automated message containing support contact information (email and business name).' },
    { task: 'Audit log system active', description: 'All opt-in events tracked with timestamps and stored for verification' },
    { task: 'Verbal consent collection implemented', description: 'AI agent collects and records verbal consent for all inbound call inquiries' },
    { task: 'Verbal consent logs secured', description: 'All verbal consent interactions logged with timestamps and audio recordings for carrier audit' },
  ];

  const faqs = [
    {
      question: 'What is 10DLC and why is it required?',
      answer: '10DLC (10-Digit Long Code) is a carrier standard for Application-to-Person (A2P) messaging in the US. Carriers require businesses to register their messaging campaigns and prove explicit consent from recipients to prevent spam and ensure compliance. Bail Bond Buddy maintains full 10DLC compliance for all SMS messaging.',
    },
    {
      question: 'How does Bail Bond Buddy ensure valid opt-in consent?',
      answer: 'Our platform captures valid opt-in through: (1) proactive phone number submission, (2) clear disclosure of messaging purpose, (3) explicit consent language, (4) brand identification, (5) Msg&data rates disclaimer, (6) STOP/HELP instructions. Consent is never buried in terms or assumed - it must be explicitly granted.',
    },
    {
      question: 'Does Bail Bond Buddy use double opt-in?',
      answer: 'Bail Bond Buddy supports both single and double opt-in workflows. Double opt-in (confirmation message after initial sign-up) provides additional proof of consent and reduces the risk of complaints. Our system is configured to accommodate either approach based on client preference.',
    },
    {
      question: 'How does our STOP/HELP handling work?',
      answer: 'Bail Bond Buddy automatically processes opt-out requests. When a recipient texts STOP, they are immediately added to our suppression list and receive a confirmation of unsubscription. HELP triggers an automated response with contact information. Both are handled in real-time with no manual intervention required.',
    },
    {
      question: 'What happens when someone opts out?',
      answer: 'Once a recipient opts out via STOP, they are permanently added to Bail Bond Buddy\'s suppression list and will not receive further SMS messages unless they explicitly opt back in through a new consent process. All opt-out events are logged in our audit trail with timestamps.',
    },
    {
      question: 'Where does Bail Bond Buddy host opt-in proof?',
      answer: 'Our opt-in proof documentation is hosted on publicly accessible URLs (no login required) for carrier verification. This includes web-based forms, consent scripts, and privacy policy documentation. All materials are available for Twilio and carrier audit upon request.',
    },
    {
      question: 'How does our Privacy Policy meet carrier requirements?',
      answer: 'Bail Bond Buddy\'s Privacy Policy includes the exact carrier-required statement: "Mobile information will not be shared with third parties for marketing or promotional purposes." Our privacy policy is publicly accessible at bailbondbuddy.com/privacy and meets all 10DLC compliance requirements.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/10 py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex h-20 w-20 rounded-2xl bg-primary/10 items-center justify-center mx-auto mb-4">
              <Shield className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
              10DLC Carrier Compliance & Opt-In Proof
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete compliance with carrier requirements for Application-to-Person (A2P) messaging
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-muted/30 py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Alert className="border-l-4 border-l-primary bg-accent/50">
              <AlertCircle className="h-5 w-5 text-primary" />
              <AlertDescription className="text-base">
                <strong>Carrier Verification:</strong> This page serves as public documentation of Bail Bond Buddy's 10DLC compliance standards and consent capture processes for Twilio and carrier review.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="container mx-auto px-4 lg:px-8 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">What Bail Bond Buddy Provides</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Built-in compliance tools to capture and prove explicit consent
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatWeProvide.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-card border rounded-lg hover:shadow-md transition-shadow">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <p className="text-foreground pt-1">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verbal Consent via AI Agent */}
      <section className="bg-gradient-to-br from-accent/20 via-background to-accent/10 py-16 md:py-24 border-y">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Mic className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl">Verbal Consent via AI Agent</h2>
            </div>
            
            <Card className="border-2 shadow-lg">
              <CardContent className="p-8 space-y-6">
                <p className="text-lg text-muted-foreground">
                  When a person calls Bail Bond Buddy to inquire about a warrant, incarceration, or bond, our automated agent collects <strong className="text-foreground">verbal consent</strong> before any text message is sent.
                </p>

                <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-lg">
                  <h3 className="flex items-center gap-2 mb-4">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <span>Example Consent Script:</span>
                  </h3>
                  <blockquote className="italic text-foreground space-y-3">
                    <p>
                      "You may receive text messages from <strong>Bail Bond Buddy</strong> with updates about your inquiry.
                    </p>
                    <p>
                      These may include information about warrants, incarceration status, or bond details.
                    </p>
                    <p>
                      Message and data rates may apply. Reply STOP to opt out or HELP for information.
                    </p>
                    <p>
                      Mobile information will not be shared with third parties for marketing or promotional purposes.
                    </p>
                    <p className="text-primary">
                      Do you agree to receive these SMS notifications?"
                    </p>
                  </blockquote>
                </div>

                <Alert className="border-primary/50 bg-primary/5">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <AlertDescription className="text-base">
                    The caller's verbal "yes" response is recorded and stored with a timestamp. No SMS is sent without explicit, recorded consent. All opt-ins are auditable and can be verified upon request.
                  </AlertDescription>
                </Alert>

                <div className="pt-4">
                  <p className="text-muted-foreground mb-3">
                    <strong className="text-foreground">Recording and Logging:</strong>
                  </p>
                  <p className="text-muted-foreground mb-3">
                    All verbal consent interactions collected by our AI agent are recorded and logged for verification purposes in compliance with carrier standards. Each consent event includes caller identification, timestamp, and audio recording of the explicit "yes" response.
                  </p>
                  <p className="text-muted-foreground mb-3">
                    <strong className="text-foreground">Retention:</strong> Verbal consent recordings are securely stored for a minimum of 24 months for carrier audit purposes.
                  </p>
                  <div className="bg-muted p-3 rounded border-l-4 border-primary mt-3">
                    <p className="text-sm font-mono text-foreground">
                      <strong>Example Log:</strong> Caller 832-555-0194 consented via verbal "yes" on 2025-10-20T14:32:15Z
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our 10DLC Compliance Process */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">Our 10DLC Compliance Process</h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                How Bail Bond Buddy ensures carrier compliance and protects consent integrity
              </p>
            </div>

            {actionItems.map((item, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="h-10 w-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 shadow-md">
                      {index + 1}
                    </div>
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-base pt-2">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {item.examples && (
                    <>
                      <ul className="space-y-2">
                        {item.examples.map((example, eIndex) => (
                          <li key={eIndex} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {example}
                          </li>
                        ))}
                      </ul>
                      {item.hasPublicLink && (
                        <div className="mt-6 p-4 bg-accent/20 rounded-lg border-2 border-primary/30">
                          <p className="mb-3">
                            <strong>AI Voice Consent Script Documentation:</strong>
                          </p>
                          <p className="text-sm text-muted-foreground mb-4">
                            Our complete AI consent script with verbal disclosure language is hosted on a publicly accessible cloud storage platform for carrier verification. The full script includes all required 10DLC disclosures.
                          </p>
                          <Alert className="border-primary/50 bg-primary/5">
                            <FileText className="h-4 w-4 text-primary" />
                            <AlertDescription className="text-sm">
                              <strong>View our AI Voice Consent Script here:</strong> <a href="https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Public Google Drive Link</a>
                              <br />
                              <span className="text-muted-foreground italic mt-1 block">(Replace with your actual public Google Drive or Dropbox link set to "anyone with the link can view")</span>
                            </AlertDescription>
                          </Alert>
                        </div>
                      )}
                    </>
                  )}
                  {item.formats && (
                    <ul className="space-y-2">
                      {item.formats.map((format, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <FileText className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                          {format}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.items && (
                    <ul className="space-y-2">
                      {item.items.map((disclosure, dIndex) => (
                        <li key={dIndex} className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                          {disclosure}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.samples && (
                    <div className="space-y-3 mt-4">
                      {item.samples.map((sample, sIndex) => (
                        <div key={sIndex} className="bg-muted p-4 rounded border-l-4 border-primary">
                          <MessageSquare className="h-4 w-4 mb-2 text-primary" />
                          <p className="font-mono text-sm">{sample}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Checklist */}
      <section className="container mx-auto px-4 lg:px-8 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-12 text-center">Our Compliance Standards</h2>
          <Card className="border-2">
            <CardHeader className="bg-muted/30">
              <CardTitle className="text-2xl">Bail Bond Buddy's Adherence to 10DLC Requirements</CardTitle>
              <CardDescription className="text-base">
                Our platform maintains these compliance standards to ensure carrier approval and message deliverability
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {complianceChecklist.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 rounded bg-accent/10 border">
                    <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{item.task}</div>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex h-20 w-20 rounded-2xl bg-white/10 items-center justify-center mx-auto">
              <Shield className="h-10 w-10" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl">Questions About Our Compliance?</h2>
            <p className="text-lg md:text-xl opacity-95">
              Contact our team for additional documentation or compliance verification
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" onClick={() => onNavigate('contact')} className="shadow-lg">
                Contact Compliance Team
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-lg" onClick={() => onNavigate('privacy')}>
                View Privacy Policy
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">Compliance FAQ</h2>
            <p className="text-lg text-muted-foreground">Common questions about 10DLC and opt-in requirements</p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border-2 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
