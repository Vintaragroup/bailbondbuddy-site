import { Eye, MessageSquare, MapPin, BarChart3, Lock, ArrowRight, Play, Check, Shield, Calendar, Zap, TrendingUp, TrendingDown, CheckCircle, Users, Bell, Clock, Send, MapPinned, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { CaseManagementDemo } from './product-demos/CaseManagementDemo';
import { MessagingDemo } from './product-demos/MessagingDemo';
import { GPSTrackingDemo } from './product-demos/GPSTrackingDemo';
import { ReportingDemo } from './product-demos/ReportingDemo';
import { SecurityDemo } from './product-demos/SecurityDemo';
import { ProductHeroVisual } from './product-demos/ProductHeroVisual';

interface ProductPageProps {
  onNavigate: (page: string) => void;
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Animated counter component
function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * (end - startValue) + startValue));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
    >
      {count}
    </motion.div>
  );
}

export function ProductPage({ onNavigate }: ProductPageProps) {
  const productSections = [
    {
      icon: Eye,
      title: 'Case & Client 360 View',
      description: 'Get a complete picture of every case from a single dashboard. Track client information, bond details, payment status, compliance history, and communications all in one place.',
      features: ['Client profiles with full history', 'Bond and payment tracking', 'Document management', 'Activity timeline', 'Customizable dashboards'],
      demo: CaseManagementDemo,
    },
    {
      icon: MessageSquare,
      title: 'Messaging Hub',
      description: 'Communicate with clients via SMS and email while maintaining full compliance with 10DLC regulations. Every message is logged with complete audit trails.',
      features: ['10DLC-compliant SMS', 'Email campaigns', 'Two-way messaging', 'Complete audit trails', 'Opt-in/opt-out management', 'Template library'],
      demo: MessagingDemo,
    },
    {
      icon: MapPin,
      title: 'GPS Check-ins & Automated Compliance',
      description: 'Monitor client compliance with manual check-ins and automated GPS pings. Set up geofences, receive real-time alerts, and ensure clients meet all location requirements.',
      features: ['Manual GPS check-ins', 'Automated GPS pings', 'Geofencing alerts', 'Location history tracking', 'Compliance reporting', 'Real-time notifications'],
      demo: GPSTrackingDemo,
    },
    {
      icon: BarChart3,
      title: 'Admin/Reporting Dashboards',
      description: 'Make data-driven decisions with comprehensive dashboards and reports. Track agency performance, compliance rates, revenue, and more.',
      features: ['Real-time analytics', 'Custom reports', 'Compliance metrics', 'Revenue tracking', 'Export capabilities', 'Scheduled reports'],
      demo: ReportingDemo,
    },
    {
      icon: Lock,
      title: 'Security & SOC2-Readiness',
      description: 'Your data is protected with enterprise-grade security. Our platform is built with SOC2 compliance in mind, ensuring your client information stays secure.',
      features: ['End-to-end encryption', 'Role-based access control', 'SOC2-ready infrastructure', 'Regular security audits', 'Data backup & recovery', 'GDPR compliance'],
      demo: SecurityDemo,
    },
  ];

  const differentiators = [
    'Built specifically for bail bond agencies',
    'SOC2-ready security and compliance',
    'Seamless integrations with Twilio, Firebase, and MongoDB',
    'Automated workflows reduce manual overhead',
    'Real-time GPS tracking and geofencing',
    'Comprehensive audit trails for all communications',
  ];

  const processSteps = [
    { label: 'Onboard', description: 'Quick client intake with digital consent and compliance forms' },
    { label: 'Monitor', description: 'Real-time tracking with automated GPS check-ins and alerts' },
    { label: 'Communicate', description: 'SMS/email reminders with full audit trails and opt-in management' },
    { label: 'Resolve', description: 'Court date tracking and case resolution workflows' },
  ];

  const integrations = [
    { name: 'Firebase', icon: Zap },
    { name: 'Twilio', icon: MessageSquare },
    { name: 'Redis/BullMQ', icon: Zap },
    { name: 'MongoDB', icon: Shield },
  ];

  return (
    <div className="flex flex-col">
      {/* Intro Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/10 py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-2">Product Overview</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
              Everything You Need to Run a Modern Bail Bond Agency
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Bail Bond Buddy brings together case management, compliance monitoring, communication tools, and analytics in one powerful platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" onClick={() => onNavigate('contact')}>
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => onNavigate('pricing')}>
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Dashboard Preview */}
      <section className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ProductHeroVisual />
          </motion.div>
        </div>
      </section>

      {/* Before/After Comparison - Moved from HomePage */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">The Difference is Clear</h2>
            <p className="text-lg text-muted-foreground">
              See how agencies transform their operations with Bail Bond Buddy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-2 border-destructive/20 bg-destructive/5">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingDown className="h-5 w-5 text-destructive" />
                    <Badge variant="destructive">Before</Badge>
                  </div>
                  <CardTitle>Manual Processes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    'Spreadsheets and paper files scattered everywhere',
                    'Manually calling/texting clients for check-ins',
                    'Missing court dates due to poor tracking',
                    'Hours spent on compliance documentation',
                    'No audit trail for communications',
                    'Constant fear of TCPA violations'
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-background/50 rounded-lg"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="h-5 w-5 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-destructive">✕</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-2 border-primary/20 bg-primary/5 shadow-xl">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <Badge>After Bail Bond Buddy</Badge>
                  </div>
                  <CardTitle>Streamlined Operations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    'All case data centralized in one secure platform',
                    'Automated SMS reminders with 10DLC compliance',
                    'Never miss a court date with automated alerts',
                    'Compliance documentation generated automatically',
                    'Complete audit trail for every interaction',
                    'TCPA-compliant with opt-in/opt-out management'
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-background/50 rounded-lg"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.8)' }}
                    >
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-sm">{item}</p>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Sections */}
      {productSections.map((section, index) => {
        const DemoComponent = section.demo;
        return (
          <section
            key={index}
            className={`py-16 md:py-24 ${index % 2 === 1 ? 'bg-muted/20' : ''}`}
          >
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <motion.div 
                    className={index % 2 === 1 ? 'lg:order-2' : ''}
                    initial={{ opacity: 0, x: index % 2 === 1 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <section.icon className="h-7 w-7 text-primary" />
                      </div>
                      <h2 className="text-3xl md:text-4xl">{section.title}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-8">{section.description}</p>
                    <ul className="space-y-3 mb-8">
                      {section.features.map((feature, fIndex) => (
                        <motion.li 
                          key={fIndex} 
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: fIndex * 0.1, duration: 0.3 }}
                        >
                          <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-foreground">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <Button size="lg" onClick={() => onNavigate('contact')}>
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                  <motion.div 
                    className={index % 2 === 1 ? 'lg:order-1' : ''}
                    initial={{ opacity: 0, x: index % 2 === 1 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <DemoComponent />
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Why Bail Bond Buddy - Moved from HomePage */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Why Bail Bond Buddy?
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {differentiators.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-4 bg-background rounded-lg p-6 shadow-sm"
                  variants={fadeInUp}
                  transition={{ duration: 0.5 }}
                >
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-base">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Timeline - Moved from HomePage */}
      <section className="container mx-auto px-4 lg:px-8 py-16 md:py-24">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">How It Works</h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            A streamlined workflow from intake to resolution
          </p>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {processSteps.map((step, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              variants={scaleIn}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6 flex justify-center">
                <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl shadow-lg">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl mb-3">{step.label}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Integrations - Moved from HomePage */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">Powered by Industry-Leading Technology</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Seamless integrations with trusted platforms
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {integrations.map((integration, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center gap-4 p-6 bg-background rounded-xl shadow-sm"
                variants={scaleIn}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <integration.icon className="h-8 w-8 text-primary" />
                </div>
                <p className="text-center">{integration.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 lg:px-8 py-16 md:py-20">
        <motion.div 
          className="bg-primary text-primary-foreground rounded-2xl p-12 md:p-16 text-center max-w-4xl mx-auto shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">Ready to See It in Action?</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Schedule a personalized demo to see how Bail Bond Buddy can transform your agency's operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => onNavigate('contact')}>
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" onClick={() => onNavigate('resources')}>
              View Resources
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
