"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "@/components/ui/Container";
import { PhoneMissed, PhoneCall, UserX, CheckCircle, Clock } from "lucide-react";

export default function ProblemSection() {
  const [isNexus, setIsNexus] = React.useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIsNexus(prev => !prev);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-[#F7F8FC]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <div className="flex flex-col lg:pr-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]"
            >
              Your front desk can only answer one call at a time.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground leading-relaxed space-y-6"
            >
              <p>
                Your team is busy checking in patients, handling insurance verification, managing office logistics, and keeping the practice flowing.
              </p>
              <p>
                As a result, Nexus AI handles the inbound conversations that would otherwise become:
              </p>
              <ul className="grid grid-cols-2 gap-4 pt-2">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                  <span className="font-medium text-foreground">Missed calls</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                  <span className="font-medium text-foreground">Lost opportunities</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                  <span className="font-medium text-foreground">Voicemail</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                  <span className="font-medium text-foreground">Delayed bookings</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Right Visual split */}
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square max-w-md mx-auto lg:max-w-none">
             <div className="absolute inset-0 bg-white rounded-3xl shadow-premium border border-border overflow-hidden">
                
                <AnimatePresence mode="wait">
                  {!isNexus ? (
                    <motion.div
                      key="traditional"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, filter: "blur(4px)" }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-slate-50"
                    >
                      <div className="w-full max-w-[280px] bg-white border border-red-100 shadow-sm rounded-2xl p-6 flex flex-col items-center text-center">
                         <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
                           <PhoneMissed className="text-red-500" size={32} />
                         </div>
                         <h3 className="font-bold text-foreground text-lg mb-1">Missed Call</h3>
                         <p className="text-sm text-muted-foreground mb-6">Patient called at 10:45 AM</p>
                         
                         <div className="w-full bg-slate-100 rounded-lg p-3 flex items-center gap-3">
                            <Clock className="text-slate-400" size={16} />
                            <span className="text-xs font-semibold text-slate-500">Sent to Voicemail</span>
                         </div>
                      </div>
                      
                      <div className="mt-8 flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-border shadow-sm">
                        <UserX className="text-slate-400" size={16} />
                        <span className="text-sm font-medium text-muted-foreground">Front desk busy</span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="nexus"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, filter: "blur(4px)" }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-primary/5"
                    >
                      <div className="w-full max-w-[280px] bg-white border border-primary/20 shadow-premium-hover rounded-2xl p-6 flex flex-col items-center text-center relative overflow-hidden">
                         
                         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-violet" />
                         
                         <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4 relative">
                           <PhoneCall className="text-green-500 relative z-10" size={32} />
                           <motion.div 
                             animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                             transition={{ duration: 2, repeat: Infinity }}
                             className="absolute inset-0 bg-green-400 rounded-full z-0"
                           />
                         </div>
                         <h3 className="font-bold text-foreground text-lg mb-1">Call Answered</h3>
                         <p className="text-sm text-primary mb-6 font-medium">By Nexus AI</p>
                         
                         <div className="w-full bg-green-50 rounded-lg p-3 flex items-center gap-3 border border-green-100">
                            <CheckCircle className="text-green-600" size={16} />
                            <span className="text-xs font-semibold text-green-700">Appointment Booked</span>
                         </div>
                      </div>

                      <div className="mt-8 flex items-center gap-3 bg-primary px-4 py-2 rounded-full shadow-md shadow-primary/20">
                        <span className="text-sm font-semibold text-white">Patient helped instantly</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

             </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
