import { FileText, BookOpen, Video, Download, ArrowRight, HelpCircle, Calendar, Clock, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';

interface ResourcesPageProps {
  onNavigate: (page: string) => void;
}

export function ResourcesPage({ onNavigate }: ResourcesPageProps) {
  const guides = [
    {
      title: 'Getting Started with Bail Bond Buddy',
      description: 'A comprehensive guide to setting up your account and onboarding your first clients.',
      type: 'PDF Guide',
    },
    {
      title: '10DLC Compliance Best Practices',
      description: 'Everything you need to know about carrier compliance and opt-in requirements.',
      type: 'PDF Guide',
    },
    {
      title: 'GPS Tracking Setup Guide',
      description: 'Step-by-step instructions for configuring manual and automated GPS check-ins.',
      type: 'PDF Guide',
    },
  ];

  const videos = [
    {
      title: 'Platform Overview (5 min)',
      description: 'Quick tour of the Bail Bond Buddy dashboard and key features.',
    },
    {
      title: 'Case Management Walkthrough (10 min)',
      description: 'Learn how to create, manage, and track cases from intake to resolution.',
    },
    {
      title: 'Setting Up Automated Workflows (8 min)',
      description: 'Configure automated reminders, GPS pings, and compliance workflows.',
    },
  ];

  const useCases = [
    {
      title: 'Small County Agency',
      description: 'How a county bail bond office reduced manual work by 60% with automated reminders and GPS tracking.',
    },
    {
      title: 'Multi-State Private Agency',
      description: 'Managing 500+ clients across 3 states with centralized case management and compliance.',
    },
    {
      title: 'Bail Bond Network',
      description: 'White-label deployment for a network of 20+ independent bail agents.',
    },
  ];

  const articles = [
    {
      title: "The Complete Guide to 10DLC SMS Compliance for Bail Bonds",
      description: "Everything bail bond agencies need to know about carrier compliance, A2P 10DLC registration, and avoiding message blocking.",
      date: "October 2025",
      readTime: "8 min read",
      category: "Compliance",
    },
    {
      title: "5 Ways GPS Tracking Reduces FTA Rates",
      description: "Learn how automated GPS check-ins and geofencing alerts help bail agencies reduce failure-to-appear rates by up to 40%.",
      date: "September 2025",
      readTime: "6 min read",
      category: "Best Practices",
    },
    {
      title: "Automated Workflows: Saving 10+ Hours Per Week",
      description: "Real case study showing how small agencies use automated reminders and messaging workflows to eliminate repetitive manual tasks.",
      date: "September 2025",
      readTime: "5 min read",
      category: "Case Study",
    },
    {
      title: "Modern CRM vs. Spreadsheets: Why It's Time to Upgrade",
      description: "The hidden costs of manual tracking and how dedicated bail bond software pays for itself within the first 3 months.",
      date: "August 2025",
      readTime: "7 min read",
      category: "Industry Insights",
    },
  ];

  const faqs = [
    {
      question: "How long does implementation take?",
      answer: "Most agencies are up and running within 1-2 weeks. Our team handles the technical setup, including Twilio integration and 10DLC registration. You'll get hands-on training and ongoing support to ensure a smooth transition."
    },
    {
      question: "Is my client data secure and compliant?",
      answer: "Yes. We're SOC2-ready with enterprise-grade security including encrypted data storage, role-based access controls, and comprehensive audit trails. All SMS communications are 10DLC compliant with proper opt-in/opt-out management and TCPA compliance features built-in."
    },
    {
      question: "What kind of GPS tracking do you offer?",
      answer: "We support both manual check-ins (where clients submit their location via SMS or app) and automated GPS pings. You can set up geofencing alerts, track compliance history, and receive notifications if clients miss scheduled check-ins."
    },
    {
      question: "Can I migrate my existing case data?",
      answer: "Absolutely. We provide data migration assistance to help you transfer existing case information, client records, and historical data. Our team will work with you to ensure a seamless transition from your current system."
    },
    {
      question: "What integrations are included?",
      answer: "Bail Bond Buddy includes Twilio for SMS/voice, Firebase for real-time updates, MongoDB for data storage, and Redis/BullMQ for job scheduling. We're continuously adding new integrations based on customer feedback."
    },
    {
      question: "Do you offer training and support?",
      answer: "Yes! Every plan includes onboarding training, video tutorials, and documentation. Our support team is available via email and chat during business hours, with priority support available for higher-tier plans."
    },
    {
      question: "How does 10DLC compliance work?",
      answer: "We handle 10DLC compliance automatically, including opt-in management, STOP/HELP keywords, and maintaining audit trails. Our platform ensures all messaging meets carrier requirements and provides documentation for carrier verification. Visit our 10DLC Compliance page for detailed information."
    },
    {
      question: "Can I try before I buy?",
      answer: "Yes! Request a demo to see the platform in action and understand how it can benefit your agency. We also offer consultation calls to discuss your specific needs and determine the best plan for your organization."
    },
    {
      question: "What happens if I need custom features?",
      answer: "Our Enterprise plan includes custom development options. We work with you to understand your specific requirements and can build custom integrations, workflows, or features tailored to your agency's unique needs."
    },
    {
      question: "Do you offer white-label options?",
      answer: "Yes, white-label solutions are available on our Enterprise plan. This allows bail bond networks and larger agencies to deploy the platform under their own branding while maintaining centralized management."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/10 py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-2">
              <HelpCircle className="h-3 w-3 mr-1" />
              Resources & Support
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
              Everything You Need to Succeed
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Guides, tutorials, case studies, and FAQs to help you get the most out of Bail Bond Buddy
            </p>
          </div>
        </div>
      </section>

      {/* Latest Articles & Insights */}
      <section className="container mx-auto px-4 lg:px-8 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <TrendingUp className="h-3 w-3 mr-1" />
              Latest Insights
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">Articles & Industry Updates</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay informed with the latest best practices, compliance updates, and industry insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:border-primary/50 transition-all hover:shadow-md">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{article.category}</Badge>
                    </div>
                    <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{article.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <Button variant="ghost" className="w-full group">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Tabs */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">Learning Resources</h2>
              <p className="text-lg text-muted-foreground">
                Guides, videos, and real-world examples to help you succeed
              </p>
            </div>

            <Tabs defaultValue="guides" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
                <TabsTrigger value="guides">Guides</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="cases">Use Cases</TabsTrigger>
              </TabsList>

            <TabsContent value="guides" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {guides.map((guide, index) => (
                  <Card key={index} className="hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <FileText className="h-8 w-8 mb-2 text-primary" />
                      <CardTitle>{guide.title}</CardTitle>
                      <CardDescription>{guide.type}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{guide.description}</p>
                      <Button variant="outline" className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {videos.map((video, index) => (
                  <Card key={index} className="hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="aspect-video bg-muted rounded flex items-center justify-center mb-4">
                        <Video className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <CardTitle>{video.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{video.description}</p>
                      <Button variant="outline" className="w-full">
                        Watch Video
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="cases" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {useCases.map((useCase, index) => (
                  <Card key={index} className="hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <BookOpen className="h-8 w-8 mb-2 text-primary" />
                      <CardTitle>{useCase.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{useCase.description}</p>
                      <Button variant="outline" className="w-full">
                        Read Case Study
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about Bail Bond Buddy
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <AccordionItem value={`item-${index}`} className="border rounded-lg px-6 bg-background">
                    <AccordionTrigger className="hover:no-underline">
                      <span className="text-left font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">Still have questions?</p>
              <Button size="lg" onClick={() => onNavigate('contact')}>
                Contact Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 lg:px-8 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            See how Bail Bond Buddy can transform your agency's operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" onClick={() => onNavigate('contact')}>
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => onNavigate('product')}>
              Explore Features
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
