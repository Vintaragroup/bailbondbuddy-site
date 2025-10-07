import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { CheckCircle2, Check, Clock, Send, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'agent' | 'client';
  status?: 'sending' | 'sent' | 'delivered' | 'read';
  timestamp?: string;
  isAutomated?: boolean;
}

export function MessagingDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const conversationSteps: Message[] = [
    {
      id: 1,
      text: "Hi John, this is a reminder that your court date is in 3 days (Jan 15 at 9:00 AM). Please reply YES to confirm.",
      sender: 'agent',
      status: 'delivered',
      timestamp: '10:00 AM',
      isAutomated: true
    },
    {
      id: 2,
      text: "YES",
      sender: 'client',
      timestamp: '10:02 AM'
    },
    {
      id: 3,
      text: "Great! Don't forget to check in via GPS by 8:00 PM today.",
      sender: 'agent',
      status: 'delivered',
      timestamp: '10:02 AM',
      isAutomated: true
    },
    {
      id: 4,
      text: "GPS check-in completed ✓",
      sender: 'client',
      timestamp: '7:45 PM'
    },
    {
      id: 5,
      text: "Perfect! Your compliance rate is 100%. Keep it up!",
      sender: 'agent',
      status: 'delivered',
      timestamp: '7:46 PM',
      isAutomated: true
    }
  ];

  useEffect(() => {
    const sequence = async () => {
      // Reset
      if (currentStep >= conversationSteps.length) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        setMessages([]);
        setCurrentStep(0);
        return;
      }

      const currentMessage = conversationSteps[currentStep];
      
      // Show typing indicator
      if (currentMessage.sender === 'client') {
        setIsTyping(true);
        await new Promise(resolve => setTimeout(resolve, 1200));
        setIsTyping(false);
      }

      // Add message with sending status for agent messages
      if (currentMessage.sender === 'agent') {
        setMessages(prev => [...prev, { ...currentMessage, status: 'sending' }]);
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Update to sent
        setMessages(prev => prev.map((msg, idx) => 
          idx === prev.length - 1 ? { ...msg, status: 'sent' } : msg
        ));
        await new Promise(resolve => setTimeout(resolve, 300));
        
        // Update to delivered
        setMessages(prev => prev.map((msg, idx) => 
          idx === prev.length - 1 ? { ...msg, status: 'delivered' } : msg
        ));
      } else {
        // Client message appears instantly
        setMessages(prev => [...prev, currentMessage]);
      }

      await new Promise(resolve => setTimeout(resolve, 1800));
      setCurrentStep(prev => prev + 1);
    };

    const timer = setTimeout(sequence, 100);
    return () => clearTimeout(timer);
  }, [currentStep]);

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case 'sending':
        return <Clock className="h-3 w-3 text-muted-foreground animate-pulse" />;
      case 'sent':
        return <Check className="h-3 w-3 text-muted-foreground" />;
      case 'delivered':
      case 'read':
        return <CheckCircle2 className="h-3 w-3 text-primary" />;
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <Card className="shadow-2xl border-2 bg-background overflow-hidden">
        <CardHeader className="pb-3 border-b bg-muted/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-medium text-primary">JD</span>
              </div>
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">BB-2891 • Active</p>
              </div>
            </div>
            <Badge variant="secondary" className="gap-1 text-xs">
              <Shield className="h-3 w-3" />
              10DLC
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="p-4 min-h-[400px] max-h-[400px] overflow-y-auto bg-muted/5">
          {/* Opt-in Notice */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-4 p-3 bg-accent/50 rounded-lg text-center"
          >
            <p className="text-xs text-muted-foreground">
              <Shield className="h-3 w-3 inline mr-1" />
              Client opted in to SMS updates • Compliant
            </p>
          </motion.div>

          {/* Messages */}
          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.3,
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                  }}
                  className={`flex ${message.sender === 'agent' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[80%] ${message.sender === 'agent' ? 'order-1' : 'order-2'}`}>
                    <div
                      className={`rounded-2xl px-4 py-2 ${
                        message.sender === 'agent'
                          ? 'bg-primary text-primary-foreground rounded-tl-sm'
                          : 'bg-muted text-foreground rounded-tr-sm'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      {message.isAutomated && message.sender === 'agent' && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="mt-1"
                        >
                          <Badge 
                            variant="secondary" 
                            className="text-xs py-0 px-1 bg-primary-foreground/20 text-primary-foreground"
                          >
                            Auto
                          </Badge>
                        </motion.div>
                      )}
                    </div>
                    <div className={`flex items-center gap-1 mt-1 px-2 ${
                      message.sender === 'agent' ? 'justify-start' : 'justify-end'
                    }`}>
                      <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                      {message.sender === 'agent' && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {getStatusIcon(message.status)}
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  key="typing"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex justify-end"
                >
                  <div className="bg-muted text-foreground rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                    <div className="flex items-center gap-1">
                      <motion.div
                        className="h-2 w-2 rounded-full bg-muted-foreground"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="h-2 w-2 rounded-full bg-muted-foreground"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="h-2 w-2 rounded-full bg-muted-foreground"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Stats Footer */}
          {messages.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 pt-4 border-t"
            >
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="bg-background rounded-lg p-2">
                  <p className="text-xs text-muted-foreground">Sent Today</p>
                  <p className="text-lg text-primary">{messages.filter(m => m.sender === 'agent').length}</p>
                </div>
                <div className="bg-background rounded-lg p-2">
                  <p className="text-xs text-muted-foreground">Response Rate</p>
                  <p className="text-lg text-green-600">100%</p>
                </div>
              </div>
            </motion.div>
          )}
        </CardContent>

        {/* Input Area (Static - for visual completeness) */}
        <div className="border-t bg-background p-3">
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-muted/30 rounded-full px-4 py-2 text-sm text-muted-foreground">
              Type a message...
            </div>
            <button className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Card>

      {/* Floating Compliance Badge */}
      <motion.div
        className="absolute -top-3 -right-3 z-10"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
      >
        <Badge className="bg-green-600 text-white shadow-lg gap-1 px-3 py-1">
          <CheckCircle2 className="h-3 w-3" />
          TCPA Compliant
        </Badge>
      </motion.div>

      {/* Floating Automation Indicator */}
      <motion.div
        className="absolute -bottom-3 -left-3 z-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <Card className="shadow-lg border-2 border-primary/20 bg-background">
          <CardContent className="p-3">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-600 animate-pulse" />
              <p className="text-xs font-medium">Automated Workflows Active</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
