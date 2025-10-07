import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { CheckCircle2, Users, MapPin, MessageSquare, TrendingUp, Bell, Clock, DollarSign, AlertCircle, Calendar, Navigation } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export function ProductHeroVisual() {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    { 
      icon: Users, 
      label: 'Case Management', 
      color: 'bg-blue-600',
      stats: '47 Active Cases'
    },
    { 
      icon: MessageSquare, 
      label: 'Messaging Hub', 
      color: 'bg-green-600',
      stats: '128 Messages Sent'
    },
    { 
      icon: MapPin, 
      label: 'GPS Tracking', 
      color: 'bg-purple-600',
      stats: '94% Check-in Rate'
    },
    { 
      icon: TrendingUp, 
      label: 'Analytics', 
      color: 'bg-orange-600',
      stats: '$127K Revenue'
    },
  ];

  // Module-specific content data
  const moduleContent = {
    0: { // Case Management
      cases: [
        { id: 'BB-2891', name: 'John Doe', status: 'Active', amount: '$15,000', court: 'Jan 15, 9:00 AM', compliance: 100 },
        { id: 'BB-2890', name: 'Jane Smith', status: 'Active', amount: '$8,500', court: 'Jan 18, 2:00 PM', compliance: 94 },
        { id: 'BB-2889', name: 'Mike Johnson', status: 'Active', amount: '$12,000', court: 'Jan 20, 10:00 AM', compliance: 87 },
      ]
    },
    1: { // Messaging Hub
      messages: [
        { client: 'John Doe', message: 'Court reminder sent', time: '2m ago', type: 'automated', status: 'delivered' },
        { client: 'Jane Smith', message: 'YES - Confirmed check-in', time: '15m ago', type: 'received', status: 'read' },
        { client: 'Mike Johnson', message: 'Payment reminder sent', time: '1h ago', type: 'automated', status: 'delivered' },
      ]
    },
    2: { // GPS Tracking
      locations: [
        { client: 'John Doe', location: 'Home Zone', time: '8:00 AM', status: 'success', type: 'auto' },
        { client: 'Jane Smith', location: 'Work', time: '12:30 PM', status: 'success', type: 'manual' },
        { client: 'Mike Johnson', location: 'Courthouse', time: '3:00 PM', status: 'success', type: 'auto' },
      ]
    },
    3: { // Analytics
      metrics: [
        { label: 'Total Revenue', value: '$127K', change: '+8%', icon: DollarSign, color: 'text-green-600' },
        { label: 'Active Cases', value: '47', change: '+12%', icon: Users, color: 'text-blue-600' },
        { label: 'Compliance Rate', value: '94%', change: '+3%', icon: CheckCircle2, color: 'text-purple-600' },
      ]
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveModule((prev) => (prev + 1) % modules.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const renderModuleContent = () => {
    switch (activeModule) {
      case 0: // Case Management
        return (
          <div className="space-y-2">
            {moduleContent[0].cases.map((caseItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-3 rounded-lg bg-background border hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className="h-10 w-10 rounded-full bg-blue-600/10 flex items-center justify-center">
                    <span className="text-xs font-medium text-blue-600">{caseItem.id.split('-')[1]}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{caseItem.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary" className="text-xs py-0">{caseItem.status}</Badge>
                      <span className="text-xs text-muted-foreground">{caseItem.amount}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                    <Calendar className="h-3 w-3" />
                    <span className="hidden sm:inline">{caseItem.court}</span>
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    <div className="h-1.5 w-16 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-green-600"
                        initial={{ width: 0 }}
                        animate={{ width: `${caseItem.compliance}%` }}
                        transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">{caseItem.compliance}%</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 1: // Messaging Hub
        return (
          <div className="space-y-2">
            {moduleContent[1].messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-3 rounded-lg bg-background border hover:border-primary/50 transition-colors"
              >
                <div className={`h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.type === 'automated' ? 'bg-green-600' : 'bg-blue-600'
                }`}>
                  <MessageSquare className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <p className="text-sm font-medium truncate">{msg.client}</p>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{msg.time}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{msg.message}</p>
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant={msg.type === 'automated' ? 'default' : 'secondary'} 
                      className="text-xs py-0"
                    >
                      {msg.type === 'automated' ? 'Auto' : 'Received'}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3 text-green-600" />
                      <span className="text-xs text-muted-foreground capitalize">{msg.status}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 2: // GPS Tracking
        return (
          <div className="space-y-3">
            {/* Mini Map Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-32 rounded-lg bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 relative overflow-hidden border"
            >
              {/* Grid background */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%">
                  <defs>
                    <pattern id="mini-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#mini-grid)" />
                </svg>
              </div>
              
              {/* Location markers */}
              {[
                { x: 25, y: 30, color: 'bg-green-600' },
                { x: 50, y: 50, color: 'bg-blue-600' },
                { x: 70, y: 35, color: 'bg-purple-600' },
              ].map((marker, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                >
                  <div className={`h-6 w-6 rounded-full ${marker.color} flex items-center justify-center ring-2 ring-background shadow-lg`}>
                    <MapPin className="h-3 w-3 text-white" />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Location list */}
            <div className="space-y-2">
              {moduleContent[2].locations.map((loc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center justify-between p-2 rounded-lg bg-background border"
                >
                  <div className="flex items-center gap-2">
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                      loc.status === 'success' ? 'bg-green-600/10' : 'bg-orange-500/10'
                    }`}>
                      <Navigation className={`h-4 w-4 ${
                        loc.status === 'success' ? 'text-green-600' : 'text-orange-500'
                      }`} />
                    </div>
                    <div>
                      <p className="text-xs font-medium">{loc.client}</p>
                      <p className="text-xs text-muted-foreground">{loc.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant={loc.type === 'auto' ? 'default' : 'secondary'} className="text-xs py-0 mb-1">
                      {loc.type === 'auto' ? 'Auto' : 'Manual'}
                    </Badge>
                    <p className="text-xs text-muted-foreground">{loc.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 3: // Analytics
        return (
          <div className="space-y-3">
            {/* Key metrics */}
            <div className="grid grid-cols-3 gap-2">
              {moduleContent[3].metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="border bg-background">
                      <CardContent className="p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center">
                            <Icon className={`h-4 w-4 ${metric.color}`} />
                          </div>
                        </div>
                        <p className={`text-lg mb-1 ${metric.color}`}>{metric.value}</p>
                        <p className="text-xs text-muted-foreground truncate">{metric.label}</p>
                        <Badge variant="secondary" className="text-xs py-0 mt-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          {metric.change}
                        </Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Mini chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="p-3 rounded-lg bg-background border"
            >
              <p className="text-xs font-medium mb-3">Weekly Compliance Trend</p>
              <div className="flex items-end justify-between gap-1 h-20">
                {[65, 78, 85, 72, 90, 94, 96].map((height, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-1">
                    <motion.div
                      className="w-full bg-gradient-to-t from-orange-600 to-orange-400 rounded-t"
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.05 }}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative w-full">
      <Card className="overflow-hidden border-2 shadow-2xl bg-gradient-to-br from-background via-background to-accent/5">
        <CardContent className="p-0">
          {/* Main Dashboard Visual */}
          <div className="relative bg-gradient-to-br from-muted/30 via-background to-muted/20">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-[0.03]">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="hero-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                    <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hero-grid)" />
              </svg>
            </div>

            {/* Header Bar */}
            <div className="relative border-b bg-background/80 backdrop-blur-sm p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                    <span className="text-lg text-primary-foreground">BB</span>
                  </div>
                  <div>
                    <h3 className="font-medium">BailBond Buddy</h3>
                    <p className="text-xs text-muted-foreground">Operations Dashboard</p>
                  </div>
                </div>
                <Badge variant="secondary" className="gap-1 hidden sm:flex">
                  <div className="h-2 w-2 rounded-full bg-green-600 animate-pulse" />
                  Live
                </Badge>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="relative p-4 md:p-8 space-y-4 md:space-y-6">
              {/* Module Cards Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {modules.map((module, index) => {
                  const isActive = activeModule === index;
                  const Icon = module.icon;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        scale: isActive ? 1.05 : 1
                      }}
                      transition={{ 
                        delay: index * 0.1,
                        duration: 0.3
                      }}
                    >
                      <Card className={`relative overflow-hidden transition-all cursor-pointer ${
                        isActive ? 'border-primary border-2 shadow-lg' : 'border'
                      }`}>
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 bg-primary/5"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          />
                        )}
                        <CardContent className="p-3 md:p-4 relative z-10">
                          <div className={`h-10 w-10 md:h-12 md:w-12 rounded-lg ${module.color} flex items-center justify-center mb-2 md:mb-3`}>
                            <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                          </div>
                          <p className="text-xs md:text-sm font-medium mb-1">{module.label}</p>
                          <motion.p 
                            className="text-xs text-muted-foreground"
                            key={`${index}-${isActive}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          >
                            {module.stats}
                          </motion.p>
                        </CardContent>
                        {isActive && (
                          <motion.div
                            className="absolute top-0 right-0 m-2"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                          </motion.div>
                        )}
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              {/* Dynamic Content Area */}
              <Card className="border bg-background/50 backdrop-blur-sm min-h-[280px]">
                <CardContent className="p-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeModule}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <Bell className="h-4 w-4 text-muted-foreground" />
                        <h4 className="text-sm font-medium">{modules[activeModule].label}</h4>
                        <Badge variant="outline" className="ml-auto text-xs">Real-time</Badge>
                      </div>
                      {renderModuleContent()}
                    </motion.div>
                  </AnimatePresence>
                </CardContent>
              </Card>
            </div>

            {/* Floating Stats Badges */}
            <motion.div
              className="absolute top-20 md:top-24 right-4 md:right-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Badge className="bg-green-600 text-white shadow-lg gap-1 px-3 py-1.5">
                <CheckCircle2 className="h-3 w-3" />
                98% Compliance
              </Badge>
            </motion.div>

            <motion.div
              className="absolute bottom-24 md:bottom-32 left-4 md:left-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <Badge className="bg-primary text-primary-foreground shadow-lg gap-1 px-3 py-1.5">
                <TrendingUp className="h-3 w-3" />
                24/7 Monitoring
              </Badge>
            </motion.div>
          </div>
        </CardContent>
      </Card>

      {/* Bottom Feature Indicators */}
      <motion.div 
        className="flex justify-center gap-2 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        {modules.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all ${
              activeModule === index ? 'w-8 bg-primary' : 'w-1.5 bg-muted-foreground/30'
            }`}
          />
        ))}
      </motion.div>
    </div>
  );
}
