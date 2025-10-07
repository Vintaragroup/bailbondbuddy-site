import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { MapPin, Navigation, CheckCircle2, AlertTriangle, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

interface CheckIn {
  id: number;
  x: number; // percentage position
  y: number; // percentage position
  time: string;
  status: 'success' | 'warning' | 'pending';
  type: 'manual' | 'auto';
  location: string;
}

export function GPSTrackingDemo() {
  const [activeCheckIn, setActiveCheckIn] = useState(0);
  const [showPath, setShowPath] = useState(false);

  const checkIns: CheckIn[] = [
    { id: 1, x: 30, y: 25, time: '8:00 AM', status: 'success', type: 'auto', location: 'Home' },
    { id: 2, x: 55, y: 45, time: '12:30 PM', status: 'success', type: 'manual', location: 'Work' },
    { id: 3, x: 70, y: 30, time: '3:00 PM', status: 'success', type: 'auto', location: 'Courthouse' },
    { id: 4, x: 40, y: 65, time: '6:15 PM', status: 'success', type: 'auto', location: 'Home' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCheckIn((prev) => {
        const next = (prev + 1) % checkIns.length;
        if (next === 0) {
          setShowPath(false);
        } else {
          setShowPath(true);
        }
        return next;
      });
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <Card className="shadow-2xl border-2 bg-background overflow-hidden">
        <CardHeader className="pb-3 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">GPS Tracking</h3>
                <p className="text-xs text-muted-foreground">John Doe • Today</p>
              </div>
            </div>
            <Badge variant="secondary" className="gap-1">
              <CheckCircle2 className="h-3 w-3 text-green-600" />
              On Track
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          {/* Map Area */}
          <div className="relative bg-gradient-to-br from-blue-50 via-green-50/30 to-blue-50 dark:from-blue-950/20 dark:via-green-950/10 dark:to-blue-950/20 h-96 overflow-hidden">
            {/* Grid background - Map styling */}
            <div className="absolute inset-0 opacity-[0.15]">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="map-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#map-grid)" />
              </svg>
            </div>

            {/* Streets/Roads effect */}
            <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
              <line x1="0%" y1="40%" x2="100%" y2="40%" stroke="currentColor" strokeWidth="2" />
              <line x1="0%" y1="70%" x2="100%" y2="70%" stroke="currentColor" strokeWidth="2" />
              <line x1="35%" y1="0%" x2="35%" y2="100%" stroke="currentColor" strokeWidth="2" />
              <line x1="65%" y1="0%" x2="65%" y2="100%" stroke="currentColor" strokeWidth="2" />
            </svg>

            {/* Geofence Circle (Home Zone) - at home position */}
            <motion.div
              className="absolute"
              style={{ left: '30%', top: '25%' }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative" style={{ transform: 'translate(-50%, -50%)' }}>
                <div className="h-32 w-32 rounded-full border-2 border-primary/40 bg-primary/5" />
                <Badge 
                  variant="outline" 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background/90 backdrop-blur text-xs"
                >
                  Home Zone
                </Badge>
              </div>
            </motion.div>

            {/* Path Lines */}
            {showPath && (
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {checkIns.slice(0, activeCheckIn + 1).map((checkIn, index) => {
                  if (index === 0) return null;
                  const prev = checkIns[index - 1];
                  
                  return (
                    <motion.line
                      key={`line-${index}`}
                      x1={`${prev.x}%`}
                      y1={`${prev.y}%`}
                      x2={`${checkIn.x}%`}
                      y2={`${checkIn.y}%`}
                      stroke="hsl(var(--primary))"
                      strokeWidth="3"
                      strokeDasharray="8,4"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.7 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                  );
                })}
              </svg>
            )}

            {/* Check-in Markers */}
            <AnimatePresence>
              {checkIns.slice(0, activeCheckIn + 1).map((checkIn, index) => {
                const isActive = index === activeCheckIn;

                return (
                  <motion.div
                    key={checkIn.id}
                    className="absolute"
                    style={{ left: `${checkIn.x}%`, top: `${checkIn.y}%` }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: 1, 
                      opacity: 1,
                      x: '-50%',
                      y: '-100%'
                    }}
                    transition={{ 
                      duration: 0.4,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                  >
                    {/* Pulse Ring - only for active */}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-full bg-primary"
                        style={{ width: '12px', height: '12px' }}
                        initial={{ scale: 1, opacity: 0.6 }}
                        animate={{ scale: 3.5, opacity: 0 }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}

                    {/* Marker Pin */}
                    <motion.div 
                      className="relative z-10"
                      animate={isActive ? { y: [0, -5, 0] } : {}}
                      transition={{ duration: 1, repeat: isActive ? Infinity : 0, repeatDelay: 0.5 }}
                    >
                      {/* Pin shadow */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 h-2 w-6 bg-black/20 rounded-full blur-sm" />
                      
                      {/* Pin body */}
                      <div className={`relative h-12 w-12 rounded-full flex items-center justify-center shadow-lg ring-4 ring-background ${
                        checkIn.status === 'success' ? 'bg-green-600' :
                        checkIn.status === 'warning' ? 'bg-orange-500' :
                        'bg-blue-600'
                      }`}>
                        {checkIn.status === 'success' && <CheckCircle2 className="h-6 w-6 text-white" />}
                        {checkIn.status === 'warning' && <AlertTriangle className="h-6 w-6 text-white" />}
                        {checkIn.status === 'pending' && <Clock className="h-6 w-6 text-white animate-pulse" />}
                      </div>
                      
                      {/* Pin point */}
                      <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent ${
                        checkIn.status === 'success' ? 'border-t-green-600' :
                        checkIn.status === 'warning' ? 'border-t-orange-500' :
                        'border-t-blue-600'
                      }`} />
                    </motion.div>

                    {/* Info Popup */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.9 }}
                        animate={{ opacity: 1, y: -20, scale: 1 }}
                        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-nowrap"
                      >
                        <Card className="shadow-xl border-2 border-primary/20">
                          <CardContent className="p-3">
                            <div className="flex items-center gap-2 mb-1">
                              <Badge variant={checkIn.type === 'auto' ? 'default' : 'secondary'} className="text-xs">
                                {checkIn.type === 'auto' ? 'Auto' : 'Manual'}
                              </Badge>
                              <span className="text-xs font-medium">{checkIn.time}</span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              {checkIn.location}
                            </p>
                          </CardContent>
                        </Card>
                        {/* Arrow pointing down */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-px w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-border" />
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Stats Panel */}
          <div className="grid grid-cols-4 gap-4 p-4 bg-muted/30 border-t">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-2xl text-green-600">{activeCheckIn + 1}</p>
              <p className="text-xs text-muted-foreground">Check-ins</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-2xl text-primary">
                {Math.round(((activeCheckIn + 1) / checkIns.length) * 100)}%
              </p>
              <p className="text-xs text-muted-foreground">Complete</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-2xl">
                {checkIns.filter((c, i) => i <= activeCheckIn && c.type === 'auto').length}
              </p>
              <p className="text-xs text-muted-foreground">Auto</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-2xl text-green-600">
                <Navigation className="h-6 w-6 mx-auto" />
              </p>
              <p className="text-xs text-muted-foreground">Active</p>
            </motion.div>
          </div>
        </CardContent>
      </Card>

      {/* Floating Alert */}
      <motion.div
        className="absolute -top-3 -right-3 z-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, type: "spring" }}
      >
        <Badge className="bg-green-600 text-white shadow-lg gap-1 px-3 py-1">
          <CheckCircle2 className="h-3 w-3" />
          All Check-ins On Time
        </Badge>
      </motion.div>
    </div>
  );
}
