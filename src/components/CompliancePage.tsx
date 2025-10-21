import { Shield, CheckCircle, Upload, FileText, MessageSquare, AlertCircle, Mic } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Checkbox } from './ui/checkbox';
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
      title: 'Show Public Proof of Opt-In/Consent',
      description: 'Every recipient must proactively agree before SMS goes out. Carriers require visible evidence that consent was obtained.',
      examples: [
        'Screenshot of online opt-in form with clear consent language',
        'Photo/scan of paper consent form (for phone or in-person sign-ups)',
        'Login flow screenshot showing SMS consent checkbox',
        'Public URL hosting your opt-in form or privacy policy',
        'AI voice consent script (publicly accessible link)',
      ],
      hasPublicLink: true,
    },
    {
      title: 'Submit Evidence',
      description: 'Acceptable proof formats for Twilio and carrier review:',
      formats: [
        'Public link to your opt-in form (must be accessible without login)',
        'Screenshot showing consent language during account creation',
        'Photo/scan of signed physical consent forms',
        'Documentation hosted on a publicly accessible URL',
      ],
    },
    {
      title: 'Required Disclosures',
      description: 'Your opt-in materials and messages must include:',
      items: [
        'Brand name clearly displayed',
        'Explicit consent language: "By providing your phone number, you agree to receive SMS messages from [Bail Bond Buddy]"',
        '"Message & data rates may apply" disclaimer',
        'Frequency statement: "You may receive up to [X] messages per week"',
        'STOP instructions: "Reply STOP to opt out"',
        'HELP instructions: "Reply HELP for assistance"',
        'Link to privacy policy containing: "Mobile information will not be shared with third parties for marketing/promotional purposes"',
      ],
    },
    {
      title: 'Sample Messages',
      description: 'All messages must include brand identification and opt-out instructions:',
      samples: [
        'Bail Bond Buddy: Hi [CLIENT_NAME], this is a reminder of your court date on [DATE] at [TIME]. Reply STOP to opt out, HELP for help.',
        'Bail Bond Buddy: GPS check-in required. Please complete your location verification by [TIME]. Reply STOP to unsubscribe.',
        'Bail Bond Buddy: Your payment of $[AMOUNT] has been received. Questions? Reply HELP or contact us. Reply STOP to opt out.',
        'Bail Bond Buddy: Hi [FIRST_NAME], there\'s an update regarding [INMATE_NAME]\'s warrant status. Reply STOP to opt out. Msg & data rates may apply. HELP for info.',
      ],
    },
  ];

  const complianceChecklist = [
    { task: 'Opt-in form created with required disclosures', description: 'Web form includes brand name, consent language, Msg&data rates, frequency, STOP/HELP' },
    { task: 'Privacy policy updated', description: 'Includes mobile info sharing clause and accessible public URL' },
    { task: 'Sample messages prepared', description: 'Messages include brand, STOP instructions, and bracketed variables' },
    { task: 'Opt-in proof collected', description: 'Screenshots/photos of consent capture mechanisms' },
    { task: 'Evidence hosted publicly', description: 'Opt-in form or proof available at public URL' },
    { task: 'STOP/HELP handling configured', description: 'Automated responses and opt-out processing enabled' },
    { task: 'Audit log system verified', description: 'All opt-in events tracked with timestamps' },
    { task: 'Verbal consent process implemented and recorded', description: 'AI calls collect and store verbal consent for inbound inquiries' },
    { task: 'Verbal consent logs stored securely', description: 'All verbal consent interactions logged with timestamps for verification' },
  ];

  const faqs = [
    {
      question: 'What is 10DLC and why is it required?',
      answer: '10DLC (10-Digit Long Code) is a carrier standard for Application-to-Person (A2P) messaging in the US. Carriers require businesses to register their messaging campaigns and prove explicit consent from recipients to prevent spam and ensure compliance.',
    },
    {
      question: 'What constitutes valid opt-in consent?',
      answer: 'Valid opt-in requires: (1) recipient provides phone number proactively, (2) clear disclosure of what they\'re signing up for, (3) explicit consent language, (4) brand identification, (5) Msg&data rates disclaimer, (6) STOP/HELP instructions. Consent cannot be buried in terms or assumed.',
    },
    {
      question: 'Do I need double opt-in?',
      answer: 'Double opt-in (confirmation message after initial sign-up) is not required but is considered best practice. It provides additional proof of consent and reduces the risk of complaints. Bail Bond Buddy supports both single and double opt-in workflows.',
    },
    {
      question: 'How does STOP/HELP handling work?',
      answer: 'When a recipient texts STOP, they are immediately added to a suppression list and receive a confirmation that they\'ve been unsubscribed. HELP triggers an automated response with your contact information. Both are handled automatically by Bail Bond Buddy.',
    },
    {
      question: 'What happens if someone opts out?',
      answer: 'Once a recipient opts out, they are permanently added to your suppression list and will not receive further SMS messages unless they explicitly opt back in. All opt-out events are logged in the audit trail.',
    },
    {
      question: 'Where should I host my opt-in proof?',
      answer: 'Opt-in proof must be accessible via a public URL (no login required). You can host it on your website, use a public Google Drive/Dropbox link, or we can provide hosting as part of your Bail Bond Buddy account.',
    },
    {
      question: 'What about the Privacy Policy requirement?',
      answer: 'Your Privacy Policy must include the exact statement: "Mobile information will not be shared with third parties for marketing or promotional purposes." This clause is required by carriers for 10DLC compliance and must be publicly accessible.',
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
                <strong>Important:</strong> Carriers require explicit opt-in proof for all A2P messaging. This page outlines what you need to provide for Twilio 10DLC campaign registration and how Bail Bond Buddy helps you stay compliant.
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
                  <p className="text-muted-foreground">
                    All verbal consent interactions collected by our AI agent are recorded and logged for verification purposes in compliance with carrier standards. Each consent event includes caller identification, timestamp, and audio recording of the explicit "yes" response.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Your Action Items */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">Your Action Items</h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                What you need to submit for Twilio carrier review
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
                            <strong>View our AI voice consent script:</strong>
                          </p>
                          <Button 
                            size="lg" 
                            variant="default"
                            className="w-full sm:w-auto"
                            onClick={() => window.open('#', '_blank')}
                          >
                            <FileText className="h-4 w-4 mr-2" />
                            View AI Consent Script
                          </Button>
                          <p className="text-sm text-muted-foreground mt-3">
                            Public link available for carrier verification. Replace '#' with your Google Drive or Dropbox URL (set to "anyone with the link can view").
                          </p>
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-12 text-center">Compliance Checklist</h2>
          <Card className="border-2">
            <CardHeader className="bg-muted/30">
              <CardTitle className="text-2xl">Pre-Launch Requirements</CardTitle>
              <CardDescription className="text-base">
                Complete all items before submitting your 10DLC campaign for review
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {complianceChecklist.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded hover:bg-muted transition-colors">
                    <Checkbox id={`check-${index}`} className="mt-1" />
                    <label htmlFor={`check-${index}`} className="flex-1 cursor-pointer">
                      <div>{item.task}</div>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Upload CTA */}
      <section className="bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex h-20 w-20 rounded-2xl bg-white/10 items-center justify-center mx-auto">
              <Upload className="h-10 w-10" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl">Ready to Submit Your Opt-In Proof?</h2>
            <p className="text-lg md:text-xl opacity-95">
              Upload your consent documentation or contact us for assistance with 10DLC compliance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" onClick={() => onNavigate('contact')} className="shadow-lg">
                Upload Opt-In Proof
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-lg">
                Contact Compliance Team
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
