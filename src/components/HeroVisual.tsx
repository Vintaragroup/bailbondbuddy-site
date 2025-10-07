import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle2, Send, MapPin, Bell, Clock, Zap, TrendingUp, MessageSquare, Navigation, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export function HeroVisual() {
  const [activeActivity, setActiveActivity] = useState(0);
  const [notifications, setNotifications] = useState<Array<{ id: number; type: string; message: string; client: string; time: string }>>([]);
  const [messageStatus, setMessageStatus] = useState<'idle' | 'sending' | 'delivered' | 'confirmed'>('idle');
  const [gpsMarkers, setGpsMarkers] = useState<Array<{ id: number; x: number; y: number; client: string }>>([]);

  // Activity cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveActivity((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Message sending animation
  useEffect(() => {
    if (activeActivity === 0) {
      const sequence = async () => {
        setMessageStatus('idle');
        await new Promise(resolve => setTimeout(resolve, 500));
        setMessageStatus('sending');
        await new Promise(resolve => setTimeout(resolve, 1200));
        setMessageStatus('delivered');
        await new Promise(resolve => setTimeout(resolve, 800));
        setMessageStatus('confirmed');
      };
      sequence();
    }
  }, [activeActivity]);

  // GPS tracking animation
  useEffect(() => {
    if (activeActivity === 1) {
      setGpsMarkers([]);
      const markers = [
        { id: 1, x: 30, y: 40, client: 'John D.' },
        { id: 2, x: 60, y: 30, client: 'Jane S.' },
        { id: 3, x: 75, y: 60, client: 'Mike J.' },
      ];
      
      markers.forEach((marker, index) => {
        setTimeout(() => {
          setGpsMarkers(prev => [...prev, marker]);
        }, index * 600);
      });
    }
  }, [activeActivity]);

  // Notification popups
  useEffect(() => {
    if (activeActivity === 2) {
      setNotifications([]);
      const notifs = [
        { id: 1, type: 'check-in', message: 'GPS Check-in Complete', client: 'John Doe', time: '2m ago' },
        { id: 2, type: 'reminder', message: 'Court Reminder Sent', client: 'Jane Smith', time: '5m ago' },
        { id: 3, type: 'payment', message: 'Payment Confirmed', client: 'Mike Johnson', time: '8m ago' },
      ];
      
      notifs.forEach((notif, index) => {
        setTimeout(() => {
          setNotifications(prev => [...prev, notif]);
        }, index * 700);
      });
    }
  }, [activeActivity]);

  return (
    <div className="relative w-full h-full min-h-[500px] lg:min-h-[600px]">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="hero-grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid-pattern)" />
        </svg>
      </div>

      {/* Floating Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 flex items-center justify-center h-full p-4">
        <div className="w-full max-w-5xl">
          {/* Main Interactive Dashboard Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Left Column - Activity Cards */}
            <div className="lg:col-span-5 space-y-4">
              {/* Activity Selector Pills */}
              <div className="flex gap-2 mb-4">
                {[
                  { icon: MessageSquare, label: 'Messaging' },
                  { icon: MapPin, label: 'GPS' },
                  { icon: Bell, label: 'Alerts' },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      animate={{
                        scale: activeActivity === index ? 1.05 : 1,
                        opacity: activeActivity === index ? 1 : 0.6,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Badge 
                        variant={activeActivity === index ? "default" : "secondary"}
                        className="px-3 py-2 cursor-pointer"
                      >
                        <Icon className="h-3 w-3 mr-1" />
                        {item.label}
                      </Badge>
                    </motion.div>
                  );
                })}
              </div>

              {/* Messaging Activity */}
              <AnimatePresence mode="wait">
                {activeActivity === 0 && (
                  <motion.div
                    key="messaging"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Card className="border-2 shadow-xl bg-background">
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <MessageSquare className="h-5 w-5 text-primary" />
                            <h4 className="font-medium">Automated Messaging</h4>
                          </div>
                          <Badge variant="outline" className="gap-1">
                            <div className="h-2 w-2 rounded-full bg-green-600 animate-pulse" />
                            Live
                          </Badge>
                        </div>

                        {/* Message Composition */}
                        <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <User className="h-4 w-4" />
                            <span>To: John Doe</span>
                          </div>
                          <div className="bg-background rounded-lg p-3 text-sm">
                            Reminder: Your court appearance is scheduled for Jan 15 at 9:00 AM. Please confirm your attendance by replying YES.
                          </div>
                        </div>

                        {/* Message Status */}
                        <div className="flex items-center gap-3">
                          <motion.div
                            animate={{
                              scale: messageStatus !== 'idle' ? [1, 1.2, 1] : 1,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                              messageStatus === 'idle' ? 'bg-muted' :
                              messageStatus === 'sending' ? 'bg-blue-500' :
                              messageStatus === 'delivered' ? 'bg-green-500' :
                              'bg-green-600'
                            }`}>
                              {messageStatus === 'idle' && <Send className="h-5 w-5 text-muted-foreground" />}
                              {messageStatus === 'sending' && (
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                >
                                  <Send className="h-5 w-5 text-white" />
                                </motion.div>
                              )}
                              {(messageStatus === 'delivered' || messageStatus === 'confirmed') && (
                                <CheckCircle2 className="h-5 w-5 text-white" />
                              )}
                            </div>
                          </motion.div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">
                              {messageStatus === 'idle' && 'Ready to send'}
                              {messageStatus === 'sending' && 'Sending message...'}
                              {messageStatus === 'delivered' && 'Message delivered'}
                              {messageStatus === 'confirmed' && 'Client confirmed ✓'}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {messageStatus === 'confirmed' ? 'Reply: YES - Will attend' : '10DLC Compliant'}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}

                {/* GPS Tracking Activity */}
                {activeActivity === 1 && (
                  <motion.div
                    key="gps"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Card className="border-2 shadow-xl bg-background">
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-primary" />
                            <h4 className="font-medium">GPS Monitoring</h4>
                          </div>
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            {gpsMarkers.length}/3 Active
                          </Badge>
                        </div>

                        {/* Mini Map */}
                        <div className="relative h-48 rounded-lg bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 border-2 overflow-hidden">
                          {/* Grid overlay */}
                          <div className="absolute inset-0 opacity-10">
                            <svg width="100%" height="100%">
                              <defs>
                                <pattern id="map-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                                </pattern>
                              </defs>
                              <rect width="100%" height="100%" fill="url(#map-grid)" />
                            </svg>
                          </div>

                          {/* GPS Markers */}
                          <AnimatePresence>
                            {gpsMarkers.map((marker) => (
                              <motion.div
                                key={marker.id}
                                className="absolute"
                                style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ type: "spring", duration: 0.6 }}
                              >
                                {/* Pulse rings */}
                                <motion.div
                                  className="absolute inset-0 -m-4"
                                  animate={{
                                    scale: [1, 2, 2],
                                    opacity: [0.6, 0.3, 0],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeOut"
                                  }}
                                >
                                  <div className="w-full h-full rounded-full bg-green-500" />
                                </motion.div>

                                {/* Marker */}
                                <div className="relative h-8 w-8 rounded-full bg-green-600 flex items-center justify-center ring-2 ring-background shadow-lg">
                                  <Navigation className="h-4 w-4 text-white" />
                                </div>

                                {/* Label */}
                                <motion.div
                                  initial={{ opacity: 0, y: 5 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.3 }}
                                  className="absolute top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap"
                                >
                                  <Badge variant="secondary" className="text-xs shadow-md">
                                    {marker.client}
                                  </Badge>
                                </motion.div>
                              </motion.div>
                            ))}
                          </AnimatePresence>
                        </div>

                        {/* Check-in Stats */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-green-500/10 rounded-lg p-3 text-center">
                            <p className="text-2xl text-green-600">{gpsMarkers.length}</p>
                            <p className="text-xs text-muted-foreground">Check-ins Today</p>
                          </div>
                          <div className="bg-primary/10 rounded-lg p-3 text-center">
                            <p className="text-2xl text-primary">100%</p>
                            <p className="text-xs text-muted-foreground">Compliance Rate</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}

                {/* Notifications Activity */}
                {activeActivity === 2 && (
                  <motion.div
                    key="notifications"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Card className="border-2 shadow-xl bg-background">
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <Bell className="h-5 w-5 text-primary" />
                            <h4 className="font-medium">Real-time Alerts</h4>
                          </div>
                          <Badge variant="outline">
                            {notifications.length} New
                          </Badge>
                        </div>

                        <div className="space-y-2">
                          <AnimatePresence>
                            {notifications.map((notif, index) => (
                              <motion.div
                                key={notif.id}
                                initial={{ opacity: 0, y: -10, height: 0 }}
                                animate={{ opacity: 1, y: 0, height: 'auto' }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="overflow-hidden"
                              >
                                <div className="bg-muted/50 rounded-lg p-3 border-l-4 border-green-500">
                                  <div className="flex items-start gap-3">
                                    <div className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                                      notif.type === 'check-in' ? 'bg-green-500' :
                                      notif.type === 'reminder' ? 'bg-blue-500' :
                                      'bg-purple-500'
                                    }`}>
                                      {notif.type === 'check-in' && <MapPin className="h-4 w-4 text-white" />}
                                      {notif.type === 'reminder' && <Bell className="h-4 w-4 text-white" />}
                                      {notif.type === 'payment' && <CheckCircle2 className="h-4 w-4 text-white" />}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <p className="text-sm font-medium">{notif.message}</p>
                                      <div className="flex items-center gap-2 mt-1">
                                        <p className="text-xs text-muted-foreground">{notif.client}</p>
                                        <span className="text-xs text-muted-foreground">•</span>
                                        <p className="text-xs text-muted-foreground">{notif.time}</p>
                                      </div>
                                    </div>
                                    <motion.div
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      transition={{ delay: 0.3 }}
                                    >
                                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                                    </motion.div>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </AnimatePresence>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Column - Stats Dashboard */}
            <div className="lg:col-span-7 space-y-4">
              {/* Stats Header Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="border-2 shadow-xl bg-gradient-to-br from-primary/5 to-accent/10">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-lg font-medium mb-1">BailBond Buddy Dashboard</h3>
                        <p className="text-sm text-muted-foreground">Real-time operations overview</p>
                      </div>
                      <Badge className="gap-1">
                        <Zap className="h-3 w-3" />
                        Active
                      </Badge>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { label: 'Active Cases', value: '47', icon: User, color: 'text-blue-600', bg: 'bg-blue-500/10' },
                        { label: 'Messages Sent', value: '128', icon: MessageSquare, color: 'text-green-600', bg: 'bg-green-500/10' },
                        { label: 'GPS Check-ins', value: '94%', icon: MapPin, color: 'text-purple-600', bg: 'bg-purple-500/10' },
                        { label: 'Compliance', value: '98%', icon: CheckCircle2, color: 'text-orange-600', bg: 'bg-orange-500/10' },
                      ].map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="cursor-pointer"
                          >
                            <div className={`${stat.bg} rounded-lg p-4 space-y-2`}>
                              <Icon className={`h-5 w-5 ${stat.color}`} />
                              <p className={`text-2xl ${stat.color}`}>{stat.value}</p>
                              <p className="text-xs text-muted-foreground">{stat.label}</p>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Activity Timeline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="border-2 shadow-xl bg-background">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium">Recent Activity</h4>
                      <Badge variant="secondary">Last 24 hours</Badge>
                    </div>

                    <div className="space-y-3">
                      {[
                        { time: '2m', action: 'GPS check-in completed', client: 'John Doe', icon: MapPin, color: 'bg-green-500' },
                        { time: '15m', action: 'Court reminder sent', client: 'Jane Smith', icon: Send, color: 'bg-blue-500' },
                        { time: '1h', action: 'Payment confirmed', client: 'Mike Johnson', icon: CheckCircle2, color: 'bg-purple-500' },
                        { time: '3h', action: 'Case status updated', client: 'Sarah Williams', icon: TrendingUp, color: 'bg-orange-500' },
                      ].map((activity, index) => {
                        const Icon = activity.icon;
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                          >
                            <div className={`h-8 w-8 rounded-full ${activity.color} flex items-center justify-center flex-shrink-0`}>
                              <Icon className="h-4 w-4 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium">{activity.action}</p>
                              <p className="text-xs text-muted-foreground">{activity.client}</p>
                            </div>
                            <div className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {activity.time}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Bottom Floating Elements */}
          <motion.div
            className="absolute -bottom-4 left-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Badge className="bg-green-600 text-white shadow-xl px-4 py-2 gap-2">
              <CheckCircle2 className="h-4 w-4" />
              98% Compliance Rate
            </Badge>
          </motion.div>

          <motion.div
            className="absolute -bottom-4 right-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <Badge className="bg-primary text-primary-foreground shadow-xl px-4 py-2 gap-2">
              <TrendingUp className="h-4 w-4" />
              24/7 Monitoring
            </Badge>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
