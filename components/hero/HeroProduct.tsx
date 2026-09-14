"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Phone, Activity, User } from "lucide-react";

export default function HeroProduct() {
  const [step, setStep] = React.useState(0);

  // Looping sequence
  React.useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 7);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto mt-12 lg:mt-0">
      {/* Floating badges */}
      <motion.div 
        animate={{ y: [0, -10, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-6 -left-6 md:-left-12 z-20 bg-white shadow-premium rounded-full px-4 py-2 flex items-center gap-2 border border-border"
      >
        <div className="w-2 h-2 rounded-full bg-green-500" />
        <span className="text-xs font-semibold text-foreground">24/7 Available</span>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-6 -right-6 md:-right-12 z-20 bg-white shadow-premium rounded-full px-4 py-2 flex items-center gap-2 border border-border"
      >
        <Calendar size={14} className="text-primary" />
        <span className="text-xs font-semibold text-foreground">Calendar synced</span>
      </motion.div>

      {/* Main SaaS Dashboard Mockup */}
      <div className="relative z-10 bg-white rounded-3xl border border-border shadow-2xl overflow-hidden shadow-primary/5">
        
        {/* Header */}
        <div className="bg-slate-50/80 border-b border-border px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
               <Phone size={14} className="text-white" />
            </div>
            <div>
              <p className="font-semibold text-sm text-foreground">Nexus AI</p>
              <p className="text-[10px] text-muted-foreground flex items-center gap-1 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Agent Online
              </p>
            </div>
          </div>
          <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest bg-slate-200/50 px-2 py-1 rounded-sm">LIVE CALL</div>
        </div>

        {/* Chat / Call Body */}
        <div className="p-5 h-[340px] flex flex-col gap-3 relative bg-card">
          
          <AnimatePresence mode="popLayout">
            {step >= 0 && step < 6 && (
              <motion.div 
                key="incoming"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                className="flex gap-3 items-end"
              >
                <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200">
                  <User size={12} className="text-slate-500" />
                </div>
                <div className="bg-slate-100/80 rounded-2xl rounded-bl-sm px-4 py-3 text-[13px] text-foreground max-w-[85%] font-medium">
                  "Hi, I need to schedule a cleaning."
                </div>
              </motion.div>
            )}

            {step >= 1 && step < 6 && (
              <motion.div 
                key="response1"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                className="flex gap-3 items-end justify-end mt-1"
              >
                <div className="bg-primary text-white rounded-2xl rounded-br-sm px-4 py-3 text-[13px] font-medium max-w-[85%] shadow-sm">
                  "Absolutely. I can help with that. What day works best for you?"
                </div>
              </motion.div>
            )}

            {step >= 2 && step < 6 && (
              <motion.div 
                key="intent"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                className="mx-auto mt-2 mb-1 bg-violet/5 border border-violet/10 rounded-xl p-3 w-full max-w-[90%]"
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <Activity size={12} className="text-violet" />
                  <span className="text-[10px] font-bold text-violet uppercase tracking-wider">Intent Detected</span>
                </div>
                <p className="text-xs font-semibold text-foreground">Appointment Booking</p>
              </motion.div>
            )}

            {step >= 3 && step < 5 && (
              <motion.div 
                key="status"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex justify-center mt-2"
              >
                <div className="text-[11px] font-medium text-muted-foreground flex items-center gap-2 bg-slate-50 py-1.5 px-3 rounded-full border border-border">
                  <span className="animate-spin h-3 w-3 border-2 border-primary border-t-transparent rounded-full" />
                  Checking availability...
                </div>
              </motion.div>
            )}

            {step >= 4 && step < 6 && (
              <motion.div 
                key="slots"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                className="grid grid-cols-2 gap-2 mt-1"
              >
                <div className="bg-slate-50 border border-border rounded-lg p-2.5 text-center text-xs font-semibold text-foreground hover:border-primary/30 transition-colors cursor-pointer">
                  Tue 10:30 AM
                </div>
                <div className="bg-slate-50 border border-border rounded-lg p-2.5 text-center text-xs font-semibold text-foreground hover:border-primary/30 transition-colors cursor-pointer ring-1 ring-primary/20 bg-primary/5">
                  Tue 2:00 PM
                </div>
                <div className="bg-slate-50 border border-border rounded-lg p-2.5 text-center text-xs font-semibold text-foreground">
                  Wed 9:00 AM
                </div>
                <div className="bg-slate-50 border border-border rounded-lg p-2.5 text-center text-xs font-semibold text-foreground">
                  Wed 11:30 AM
                </div>
              </motion.div>
            )}

            {step >= 5 && step < 6 && (
              <motion.div 
                key="confirmed"
                initial={{ opacity: 0, scale: 0.95, backdropFilter: "blur(0px)" }}
                animate={{ opacity: 1, scale: 1, backdropFilter: "blur(4px)" }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-white/70 z-30 flex items-center justify-center p-6"
              >
                <div className="bg-white border border-border shadow-premium rounded-2xl p-6 text-center w-full max-w-[220px]">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar size={22} className="text-green-600" />
                  </div>
                  <p className="font-bold text-sm text-foreground">Appointment Confirmed</p>
                  <p className="text-[11px] text-muted-foreground mt-1">Tuesday at 2:00 PM</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
