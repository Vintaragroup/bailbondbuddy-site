import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { BarChart3, TrendingUp, TrendingDown, Download, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function ReportingDemo() {
  const [animateCharts, setAnimateCharts] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    { label: 'Active Cases', value: 47, change: '+12%', trend: 'up', color: 'text-blue-600' },
    { label: 'Compliance Rate', value: 94, change: '+3%', trend: 'up', color: 'text-green-600' },
    { label: 'Revenue', value: 127, prefix: '$', suffix: 'K', change: '+8%', trend: 'up', color: 'text-primary' },
    { label: 'Check-ins', value: 342, change: '+15%', trend: 'up', color: 'text-purple-600' },
  ];

  const weeklyData = [
    { day: 'Mon', value: 65 },
    { day: 'Tue', value: 78 },
    { day: 'Wed', value: 85 },
    { day: 'Thu', value: 72 },
    { day: 'Fri', value: 90 },
    { day: 'Sat', value: 55 },
    { day: 'Sun', value: 48 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimateCharts(true), 300);
    const metricInterval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 2000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(metricInterval);
    };
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <Card className="shadow-2xl border-2 bg-background overflow-hidden">
        <CardHeader className="pb-3 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Analytics Dashboard</h3>
                <p className="text-xs text-muted-foreground">Last 7 Days</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="gap-1">
                <div className="h-2 w-2 rounded-full bg-green-600 animate-pulse" />
                Live
              </Badge>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                <Download className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6 space-y-6">
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 gap-3">
            {metrics.map((metric, index) => {
              const isActive = activeMetric === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    scale: isActive ? 1.02 : 1
                  }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.3
                  }}
                >
                  <Card className={`transition-all ${
                    isActive ? 'border-primary border-2 bg-primary/5' : 'border bg-muted/20'
                  }`}>
                    <CardContent className="p-4">
                      <p className="text-xs text-muted-foreground mb-2">{metric.label}</p>
                      <div className="flex items-end justify-between">
                        <motion.p 
                          className={`text-2xl ${metric.color}`}
                          key={`${index}-value`}
                          initial={{ scale: 1 }}
                          animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                          transition={{ duration: 0.3 }}
                        >
                          {metric.prefix}{metric.value}{metric.suffix}
                        </motion.p>
                        <Badge 
                          variant="secondary" 
                          className={`gap-1 text-xs ${
                            metric.trend === 'up' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                          }`}
                        >
                          {metric.trend === 'up' ? (
                            <TrendingUp className="h-3 w-3" />
                          ) : (
                            <TrendingDown className="h-3 w-3" />
                          )}
                          {metric.change}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Bar Chart */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium">Weekly Check-in Activity</h4>
              <Badge variant="outline" className="text-xs">Compliance %</Badge>
            </div>
            <div className="flex items-end justify-between gap-2 h-40 pb-6">
              {weeklyData.map((data, index) => {
                const height = animateCharts ? data.value : 0;
                return (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <motion.div
                      className="w-full bg-gradient-to-t from-primary to-primary/60 rounded-t-lg relative group cursor-pointer"
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {/* Tooltip on hover */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap">
                          {data.value}%
                        </div>
                      </div>
                    </motion.div>
                    <span className="text-xs text-muted-foreground">{data.day}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Compliance Breakdown */}
          <Card className="bg-muted/30 border-0">
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium">Compliance Breakdown</h4>
                <Badge variant="secondary" className="gap-1">
                  <CheckCircle2 className="h-3 w-3 text-green-600" />
                  Excellent
                </Badge>
              </div>
              {[
                { label: 'GPS Check-ins', value: 96, color: 'bg-green-600' },
                { label: 'Court Attendance', value: 100, color: 'bg-blue-600' },
                { label: 'Payment Schedule', value: 87, color: 'bg-orange-500' },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="space-y-1"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-medium">{item.value}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${item.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value}%` }}
                      transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      {/* Floating Export Badge */}
      <motion.div
        className="absolute -top-3 -right-3 z-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, type: "spring" }}
      >
        <Badge className="bg-primary text-primary-foreground shadow-lg gap-1 px-3 py-1">
          <Download className="h-3 w-3" />
          Export Ready
        </Badge>
      </motion.div>
    </div>
  );
}
