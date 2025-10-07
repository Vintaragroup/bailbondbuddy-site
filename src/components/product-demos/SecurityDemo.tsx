import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { Shield, Lock, CheckCircle2, Eye, Key, Database } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export function SecurityDemo() {
  const [securityScore, setSecurityScore] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const [showParticles, setShowParticles] = useState(false);

  const features = [
    { icon: Lock, label: 'End-to-End Encryption', status: 'Active', color: 'text-green-600' },
    { icon: Eye, label: 'Audit Logging', status: 'Active', color: 'text-blue-600' },
    { icon: Key, label: 'Role-Based Access', status: 'Active', color: 'text-purple-600' },
    { icon: Database, label: 'Data Backup', status: 'Active', color: 'text-orange-600' },
  ];

  const auditLogs = [
    { action: 'User login', user: 'admin@agency.com', time: '2m ago' },
    { action: 'Case updated', user: 'agent@agency.com', time: '5m ago' },
    { action: 'Report generated', user: 'admin@agency.com', time: '8m ago' },
  ];

  useEffect(() => {
    // Animate security score
    let currentScore = 0;
    const targetScore = 98;
    const interval = setInterval(() => {
      currentScore += 2;
      if (currentScore >= targetScore) {
        setSecurityScore(targetScore);
        setShowParticles(true);
        clearInterval(interval);
      } else {
        setSecurityScore(currentScore);
      }
    }, 30);

    // Cycle through features
    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 2500);

    return () => {
      clearInterval(interval);
      clearInterval(featureInterval);
    };
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <Card className="shadow-2xl border-2 bg-background overflow-hidden">
        <CardHeader className="pb-3 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Security Overview</h3>
                <p className="text-xs text-muted-foreground">Real-time Status</p>
              </div>
            </div>
            <Badge className="bg-green-600 text-white gap-1">
              <CheckCircle2 className="h-3 w-3" />
              Protected
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="p-6 space-y-6">
          {/* Security Score Circle */}
          <div className="flex justify-center py-6">
            <div className="relative">
              {/* Animated particles */}
              {showParticles && (
                <>
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary rounded-full"
                      initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                      animate={{
                        x: Math.cos((i / 8) * Math.PI * 2) * 80,
                        y: Math.sin((i / 8) * Math.PI * 2) * 80,
                        opacity: 0,
                        scale: 0
                      }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                    />
                  ))}
                </>
              )}

              {/* Score circle */}
              <svg width="180" height="180" className="transform -rotate-90">
                {/* Background circle */}
                <circle
                  cx="90"
                  cy="90"
                  r="70"
                  stroke="hsl(var(--muted))"
                  strokeWidth="12"
                  fill="none"
                />
                {/* Progress circle */}
                <motion.circle
                  cx="90"
                  cy="90"
                  r="70"
                  stroke="hsl(var(--primary))"
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ strokeDasharray: "439.6 439.6", strokeDashoffset: 439.6 }}
                  animate={{ 
                    strokeDashoffset: 439.6 - (439.6 * securityScore) / 100 
                  }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </svg>

              {/* Score text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.div
                  key={securityScore}
                  initial={{ scale: 1 }}
                  animate={{ scale: securityScore === 98 ? [1, 1.1, 1] : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-4xl text-primary">{securityScore}</p>
                  <p className="text-sm text-muted-foreground">Security Score</p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Security Features Grid */}
          <div className="grid grid-cols-2 gap-3">
            {features.map((feature, index) => {
              const isActive = activeFeature === index;
              const Icon = feature.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    scale: isActive ? 1.02 : 1
                  }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Card className={`transition-all ${
                    isActive ? 'border-primary border-2 bg-primary/5' : 'border bg-muted/20'
                  }`}>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className={`h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center flex-shrink-0 ${
                          isActive ? 'shadow-lg' : ''
                        }`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{feature.label}</p>
                          <Badge 
                            variant="secondary" 
                            className="mt-1 text-xs gap-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          >
                            <div className="h-1.5 w-1.5 rounded-full bg-green-600" />
                            {feature.status}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Audit Trail */}
          <Card className="bg-muted/30 border-0">
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium">Recent Audit Trail</h4>
                <Badge variant="outline" className="text-xs">Last 10m</Badge>
              </div>
              <AnimatePresence mode="popLayout">
                {auditLogs.map((log, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-2 rounded-lg bg-background/50"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 + index * 0.1 }}
                  >
                    <div className="h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium">{log.action}</p>
                      <p className="text-xs text-muted-foreground truncate">{log.user}</p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{log.time}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </CardContent>
          </Card>

          {/* Compliance Badges */}
          <div className="flex flex-wrap gap-2 justify-center pt-2">
            {[
              { label: 'SOC2 Ready', delay: 2 },
              { label: 'GDPR Compliant', delay: 2.1 },
              { label: 'HIPAA Ready', delay: 2.2 },
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: badge.delay }}
              >
                <Badge variant="outline" className="gap-1">
                  <CheckCircle2 className="h-3 w-3 text-green-600" />
                  {badge.label}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Floating Badge */}
      <motion.div
        className="absolute -top-3 -right-3 z-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, type: "spring" }}
      >
        <Badge className="bg-green-600 text-white shadow-lg gap-1 px-3 py-1">
          <Shield className="h-3 w-3" />
          Enterprise Grade
        </Badge>
      </motion.div>
    </div>
  );
}
