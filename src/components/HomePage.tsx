import { Shield, MessageSquare, MapPin, Calendar, ArrowRight, CheckCircle, Zap, TrendingUp, Bell, Clock, Sparkles, Users, BarChart3, AlertCircle, HelpCircle, ChevronDown, MapPinned, DollarSign } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
// import { Avatar, AvatarFallback } from './ui/avatar';
// import { Progress } from './ui/progress';
import { Separator } from './ui/separator';
import { Slider } from './ui/slider';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { HeroVisual } from './HeroVisual';
import { trackCTAClick } from '../utils/analytics';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

// const fadeIn = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1 }
// };

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

export function HomePage({ onNavigate }: HomePageProps) {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [numCases, setNumCases] = useState([50]);
  const heroRef = useRef<HTMLElement>(null);

  // Sticky CTA scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.offsetTop + heroRef.current.offsetHeight;
        setShowStickyCTA(window.scrollY > heroBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'Case Management',
      description: 'Complete 360° view of clients, cases, and compliance status in one centralized dashboard.',
    },
    {
      icon: MessageSquare,
      title: 'Automated Reminders/SMS',
      description: '10DLC-compliant messaging with automated reminders, check-ins, and two-way communication.',
    },
    {
      icon: MapPin,
      title: 'GPS Compliance Workflows',
      description: 'Manual check-ins and automated GPS ping monitoring with geofencing capabilities.',
    },
    {
      icon: Calendar,
      title: 'Court Scheduling',
      description: 'Track court dates, automate notifications, and ensure clients never miss an appearance.',
    },
  ];

  // ROI Calculator
  const casesPerMonth = numCases[0];
  const hoursManuallyPerCase = 0.5;
  const hourlyRate = 25;
  // const monthsSaved = Math.floor((casesPerMonth * hoursManuallyPerCase) / 40) || 0;
  const moneySaved = Math.floor(casesPerMonth * hoursManuallyPerCase * hourlyRate);
  const roiMultiplier = Math.floor(moneySaved / 199) || 0;

  return (
    <div className="flex flex-col">
      {/* Sticky CTA Bar */}
      <AnimatePresence>
        {showStickyCTA && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-lg"
          >
            <div className="container mx-auto px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5" />
                  <p>Ready to transform your agency? Start saving time today.</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => onNavigate('contact')}
                  >
                    Request Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => (window.location.href = 'https://bail-bonds-ui-app.onrender.com/auth/login')}
                  >
                    Log In
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section with Interactive Platform Visual */}
      <section ref={heroRef} className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16 lg:py-20">
          {/* Hero Copy - Centered Above Visual */}
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-12 lg:mb-16 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-2">Trusted by Bail Bond Agencies</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
              Modern CRM & Operations Platform for Bail Bond Agencies
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Streamline case management, automate compliance workflows, and keep clients accountable with our purpose-built platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => onNavigate('contact')}>
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => (window.location.href = 'https://bail-bonds-ui-app.onrender.com/auth/login')}>
                Log In
              </Button>
              <Button size="lg" variant="outline" onClick={() => onNavigate('product')}>
                See Product Overview
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>SOC2 Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>10DLC Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>99.9% Uptime</span>
              </div>
            </div>
          </motion.div>

          {/* Interactive Platform Visual */}
          <div className="relative max-w-7xl mx-auto">
            <HeroVisual />
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="flex flex-col items-center gap-2 text-muted-foreground"
            >
              <span className="text-sm">Scroll to explore</span>
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature Overview Cards */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">Everything Your Agency Needs</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Purpose-built tools to manage cases, monitor compliance, and communicate effectively
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                variants={scaleIn}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group"
              >
                <Card className="h-full border-2 hover:border-primary transition-all hover:shadow-xl relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <CardHeader className="relative z-10">
                    <motion.div 
                      className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon className="h-7 w-7 text-primary group-hover:scale-110 transition-transform" />
                    </motion.div>
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    
                    {/* Learn More indicator */}
                    <motion.div
                      className="flex items-center gap-2 text-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <span>Learn more</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" onClick={() => onNavigate('product')}>
              Explore All Features
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">
              <Zap className="h-3 w-3 mr-1" />
              Simple Process
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">How It Works</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Get started in minutes with our streamlined onboarding process
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
              {/* Connecting Lines - Desktop Only */}
              <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -z-10" />
              
              {[
                {
                  step: '01',
                  icon: Users,
                  title: 'Import Your Cases',
                  description: 'Upload existing cases or add new clients in minutes. Our intuitive interface makes setup a breeze.',
                  color: 'bg-blue-500',
                  delay: 0
                },
                {
                  step: '02',
                  icon: Zap,
                  title: 'Automate Workflows',
                  description: 'Set up automated reminders, GPS check-ins, and court notifications tailored to your agency.',
                  color: 'bg-green-500',
                  delay: 0.2
                },
                {
                  step: '03',
                  icon: Shield,
                  title: 'Stay Compliant 24/7',
                  description: 'Monitor compliance, track communications, and maintain audit-ready records automatically.',
                  color: 'bg-purple-500',
                  delay: 0.4
                },
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: step.delay }}
                    className="relative"
                  >
                    <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl relative overflow-hidden group">
                      {/* Step Number Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge variant="outline" className="text-lg px-3 py-1">
                          {step.step}
                        </Badge>
                      </div>

                      <CardContent className="p-8 pt-12">
                        {/* Icon with Animation */}
                        <motion.div
                          className="relative mb-6"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className={`h-20 w-20 rounded-2xl ${step.color} flex items-center justify-center mx-auto shadow-lg`}>
                            <Icon className="h-10 w-10 text-white" />
                          </div>
                          
                          {/* Pulse Animation */}
                          <motion.div
                            className={`absolute inset-0 h-20 w-20 rounded-2xl ${step.color} opacity-20 mx-auto`}
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.2, 0, 0.2],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        </motion.div>

                        <h3 className="text-xl mb-3 text-center">{step.title}</h3>
                        <p className="text-muted-foreground text-center leading-relaxed">
                          {step.description}
                        </p>

                        {/* Arrow indicator */}
                        {index < 2 && (
                          <div className="hidden md:flex absolute -right-6 top-1/2 transform -translate-y-1/2 z-20">
                            <motion.div
                              animate={{ x: [0, 5, 0] }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              <ArrowRight className="h-6 w-6 text-primary" />
                            </motion.div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Below Steps */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-muted-foreground mb-4">Ready to get started?</p>
              <Button size="lg" onClick={() => onNavigate('contact')}>
                Schedule Your Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust/Security Banner */}
      <section className="border-y bg-background">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <motion.div
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12 max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              { icon: Shield, label: 'SOC2 Ready', color: 'text-blue-600' },
              { icon: CheckCircle, label: '10DLC Compliant', color: 'text-green-600' },
              { icon: Zap, label: '99.9% Uptime', color: 'text-orange-600' },
              { icon: Shield, label: 'Bank-Level Encryption', color: 'text-purple-600' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`h-10 w-10 rounded-lg bg-muted flex items-center justify-center`}>
                    <Icon className={`h-5 w-5 ${item.color}`} />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
            <Card className="border-none shadow-md">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="h-4 w-4 rounded-full bg-primary" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-lg">"Game changer for our agency"</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "Bail Bond Buddy has transformed how we manage our cases and communicate with clients. The compliance tracking alone has saved us countless hours."
                </p>
                <p className="text-sm">— County Bail Agent</p>
              </CardContent>
            </Card>
            </motion.div>
            <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
            <Card className="border-none shadow-md">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="h-4 w-4 rounded-full bg-primary" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-lg">"Compliance made easy"</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "The 10DLC compliance features and audit trails give us peace of mind with every message. Setup was seamless."
                </p>
                <p className="text-sm">— Private Bail Agency</p>
              </CardContent>
            </Card>
            </motion.div>
            <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
            <Card className="border-none shadow-md">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="h-4 w-4 rounded-full bg-primary" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-lg">"Saves us hours every week"</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "Automated reminders and GPS tracking mean less manual follow-up and better compliance rates across all our cases."
                </p>
                <p className="text-sm">— Multi-County Agency</p>
              </CardContent>
            </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="relative bg-primary text-primary-foreground py-20 md:py-24 overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-3">Trusted by Agencies Nationwide</h2>
            <p className="text-lg opacity-90">Real results from real bail bond professionals</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {[
              { icon: Users, end: 500, label: 'Active Cases', suffix: '+', percent: 85 },
              { icon: MessageSquare, end: 10000, label: 'Messages Sent', suffix: '+', percent: 92 },
              { icon: BarChart3, end: 98, label: 'Compliance Rate', suffix: '%', percent: 98 },
              { icon: Clock, end: 15, label: 'Hours Saved/Week', suffix: '', percent: 75 },
            ].map((stat, index) => {
              const Icon = stat.icon;
              const radius = 70;
              const circumference = 2 * Math.PI * radius;
              const strokeDashoffset = circumference - (stat.percent / 100) * circumference;

              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex flex-col items-center space-y-6"
                >
                  {/* Icon above */}
                  <Icon className="h-10 w-10 opacity-90" />

                  {/* Circular Progress Ring */}
                  <div className="relative w-44 h-44">
                    {/* Background circle */}
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="88"
                        cy="88"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="none"
                        className="opacity-30"
                      />
                      {/* Progress circle */}
                      <motion.circle
                        cx="88"
                        cy="88"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset: strokeDashoffset }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                      />
                    </svg>
                    
                    {/* Number in center */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="text-3xl leading-none">
                        <AnimatedCounter end={stat.end} />
                      </div>
                      {stat.suffix && (
                        <div className="text-xl leading-none mt-1">
                          {stat.suffix}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Label below */}
                  <p className="text-base opacity-90 text-center">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">
              <CheckCircle className="h-3 w-3 mr-1" />
              Solutions That Work
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">Common Problems, Solved</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We understand the daily challenges bail bond agencies face
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                problem: 'Missing Court Dates',
                problemIcon: Clock,
                problemColor: 'text-red-600',
                solution: 'Automated Reminders',
                solutionIcon: Bell,
                solutionColor: 'text-green-600',
                description: 'Smart SMS reminders ensure clients never miss a court appearance with automated, compliant messaging.',
                stat: '98% attendance rate'
              },
              {
                problem: 'Manual Check-ins',
                problemIcon: MapPinned,
                problemColor: 'text-orange-600',
                solution: 'GPS Tracking',
                solutionIcon: MapPin,
                solutionColor: 'text-blue-600',
                description: 'Automated location tracking with geofencing eliminates time-consuming manual follow-ups.',
                stat: '15+ hours saved/week'
              },
              {
                problem: 'Compliance Headaches',
                problemIcon: AlertCircle,
                problemColor: 'text-yellow-600',
                solution: 'Audit-Ready Records',
                solutionIcon: Shield,
                solutionColor: 'text-purple-600',
                description: 'Complete communication logs and compliance documentation automatically maintained and organized.',
                stat: '100% audit ready'
              },
            ].map((item, index) => {
              const ProblemIcon = item.problemIcon;
              const SolutionIcon = item.solutionIcon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <Card className="border-2 hover:shadow-xl transition-all group h-full">
                    <CardContent className="p-6 space-y-6">
                      {/* Problem */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                            <ProblemIcon className={`h-5 w-5 ${item.problemColor}`} />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Problem</p>
                            <p className="font-medium">{item.problem}</p>
                          </div>
                        </div>
                      </div>

                      {/* Arrow Transition */}
                      <div className="flex justify-center">
                        <motion.div
                          animate={{ y: [0, 5, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90" />
                        </motion.div>
                      </div>

                      {/* Solution */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                            <SolutionIcon className={`h-5 w-5 ${item.solutionColor}`} />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Solution</p>
                            <p className="font-medium">{item.solution}</p>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>

                      {/* Stat Badge */}
                      <Badge variant="secondary" className="w-full justify-center py-2 bg-primary/10 text-primary border-none">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {item.stat}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive ROI Calculator */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <DollarSign className="h-3 w-3 mr-1" />
                ROI Calculator
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">See Your Potential Savings</h2>
              <p className="text-lg text-muted-foreground">
                Calculate how much time and money you could save with Bail Bond Buddy
              </p>
            </div>

            <Card className="shadow-xl border-2">
              <CardContent className="p-8">
                <div className="space-y-8">
                  {/* Slider Input */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="font-medium">How many cases do you manage monthly?</label>
                      <Badge variant="outline" className="text-lg px-4 py-2">
                        {casesPerMonth}
                      </Badge>
                    </div>
                    <Slider
                      value={numCases}
                      onValueChange={setNumCases}
                      min={10}
                      max={500}
                      step={10}
                      className="cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>10 cases</span>
                      <span>500 cases</span>
                    </div>
                  </div>

                  <Separator />

                  {/* Results */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                      className="bg-accent/50 rounded-lg p-6 text-center space-y-2"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Clock className="h-8 w-8 text-primary mx-auto" />
                      <p className="text-3xl text-primary">{Math.floor(casesPerMonth * hoursManuallyPerCase)}</p>
                      <p className="text-sm text-muted-foreground">Hours Saved/Month</p>
                    </motion.div>
                    <motion.div
                      className="bg-accent/50 rounded-lg p-6 text-center space-y-2"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <DollarSign className="h-8 w-8 text-green-600 mx-auto" />
                      <p className="text-3xl text-green-600">${moneySaved.toLocaleString()}</p>
                      <p className="text-sm text-muted-foreground">Cost Savings/Month</p>
                    </motion.div>
                    <motion.div
                      className="bg-accent/50 rounded-lg p-6 text-center space-y-2"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <TrendingUp className="h-8 w-8 text-blue-600 mx-auto" />
                      <p className="text-3xl text-blue-600">{roiMultiplier}x</p>
                      <p className="text-sm text-muted-foreground">ROI vs. Subscription</p>
                    </motion.div>
                  </div>

                  <div className="bg-primary/10 rounded-lg p-4 text-center">
                    <p className="text-sm">
                      💡 <span className="font-medium">Based on average time savings of {hoursManuallyPerCase}hr per case</span> from automated reminders, GPS tracking, and streamlined workflows
                    </p>
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full"
                    onClick={() => {
                      trackCTAClick('Start Saving Time Today', 'ROI Calculator');
                      onNavigate('contact');
                    }}
                  >
                    Start Saving Time Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <HelpCircle className="h-3 w-3 mr-1" />
                Common Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Quick answers to questions you may have
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {[
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
                  question: "Do you offer training and support?",
                  answer: "Yes! Every plan includes onboarding training, video tutorials, and documentation. Our support team is available via email and chat during business hours, with priority support available for higher-tier plans."
                },
                {
                  question: "Can I try before I buy?",
                  answer: "Yes! Request a demo to see the platform in action and understand how it can benefit your agency. We also offer consultation calls to discuss your specific needs and determine the best plan for your organization."
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <AccordionItem value={`item-${index}`} className="border rounded-lg px-6 bg-background">
                    <AccordionTrigger className="hover:no-underline">
                      <span className="text-left">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">Have more questions?</p>
              <Button size="lg" variant="outline" onClick={() => {
                trackCTAClick('View All FAQs', 'FAQ Section 1');
                onNavigate('resources');
              }}>
                View All FAQs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <HelpCircle className="h-3 w-3 mr-1" />
                Common Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Quick answers to questions you may have
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {[
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
                  question: "Do you offer training and support?",
                  answer: "Yes! Every plan includes onboarding training, video tutorials, and documentation. Our support team is available via email during business hours, with priority support available for higher-tier plans."
                },
                {
                  question: "Can I try before I buy?",
                  answer: "Yes! Request a demo to see the platform in action and understand how it can benefit your agency. We also offer consultation calls to discuss your specific needs and determine the best plan for your organization."
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <AccordionItem value={`item-${index}`} className="border rounded-lg px-6 bg-background">
                    <AccordionTrigger className="hover:no-underline">
                      <span className="text-left">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">Have more questions?</p>
              <Button variant="outline" onClick={() => {
                trackCTAClick('View All FAQs', 'FAQ Section 2');
                onNavigate('resources');
              }}>
                View All FAQs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="container mx-auto px-4 lg:px-8 py-16 md:py-20">
        <motion.div 
          className="bg-primary text-primary-foreground rounded-2xl p-12 md:p-16 text-center max-w-4xl mx-auto shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">Ready to Transform Your Agency?</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join leading bail bond agencies using Bail Bond Buddy to streamline operations and improve compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => {
              trackCTAClick('Request a Demo', 'Bottom CTA Banner');
              onNavigate('contact');
            }}>
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" onClick={() => {
              trackCTAClick('View Pricing', 'Bottom CTA Banner');
              onNavigate('pricing');
            }}>
              View Pricing
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
