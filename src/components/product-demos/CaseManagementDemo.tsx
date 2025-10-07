import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Progress } from '../ui/progress';
import { Separator } from '../ui/separator';
import { CheckCircle2, AlertCircle, Clock, DollarSign, FileText, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function CaseManagementDemo() {
  const [activeCase, setActiveCase] = useState(0);
  
  const cases = [
    { id: 'BB-2891', name: 'John Doe', status: 'active', compliance: 94, bond: '$5,000', nextDate: 'Jan 15' },
    { id: 'BB-2892', name: 'Jane Smith', status: 'compliant', compliance: 100, bond: '$2,500', nextDate: 'Jan 18' },
    { id: 'BB-2893', name: 'Mike Johnson', status: 'warning', compliance: 67, bond: '$10,000', nextDate: 'Jan 12' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCase((prev) => (prev + 1) % cases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentCase = cases[activeCase];

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <Card className="shadow-2xl border-2 bg-background">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg">Active Cases</h3>
            <Badge variant="secondary" className="gap-1">
              <Clock className="h-3 w-3" />
              Real-time
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Case List */}
          <div className="space-y-2">
            {cases.map((caseItem, index) => (
              <motion.div
                key={caseItem.id}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  activeCase === index 
                    ? 'bg-primary/5 border-primary' 
                    : 'bg-muted/30 border-transparent hover:border-muted'
                }`}
                animate={{ 
                  scale: activeCase === index ? 1.02 : 1,
                  opacity: activeCase === index ? 1 : 0.7
                }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveCase(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {caseItem.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{caseItem.name}</p>
                      <p className="text-xs text-muted-foreground">{caseItem.id}</p>
                    </div>
                  </div>
                  {caseItem.status === 'compliant' && (
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  )}
                  {caseItem.status === 'warning' && (
                    <AlertCircle className="h-5 w-5 text-orange-500" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <Separator />

          {/* Case Details */}
          <motion.div
            key={activeCase}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <DollarSign className="h-3 w-3" />
                  <span>Bond Amount</span>
                </div>
                <p className="text-lg">{currentCase.bond}</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>Next Check-in</span>
                </div>
                <p className="text-lg">{currentCase.nextDate}</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <FileText className="h-3 w-3" />
                  <span>Documents</span>
                </div>
                <p className="text-lg">12</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Compliance Rate</span>
                <motion.span
                  key={currentCase.compliance}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  className={currentCase.compliance >= 90 ? 'text-green-600' : 'text-orange-500'}
                >
                  {currentCase.compliance}%
                </motion.span>
              </div>
              <Progress 
                value={currentCase.compliance} 
                className="h-2"
              />
            </div>

            {/* Activity Timeline */}
            <div className="bg-muted/30 rounded-lg p-3 space-y-2">
              <p className="text-xs font-medium text-muted-foreground">Recent Activity</p>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2 text-sm"
              >
                <div className="h-2 w-2 rounded-full bg-green-600" />
                <span className="text-muted-foreground">GPS Check-in completed</span>
                <span className="text-xs text-muted-foreground ml-auto">2h ago</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-2 text-sm"
              >
                <div className="h-2 w-2 rounded-full bg-blue-600" />
                <span className="text-muted-foreground">Payment received</span>
                <span className="text-xs text-muted-foreground ml-auto">1d ago</span>
              </motion.div>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
}
