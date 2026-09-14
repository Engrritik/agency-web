"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Mic, Calendar, User, Activity, ShieldAlert, Phone } from "lucide-react";

const tabs = ["Answer", "Understand", "Schedule", "Escalate"];

export default function InteractiveShowcase() {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <section className="py-24 lg:py-32 bg-[#050505] text-white">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            See Nexus in action.
          </motion.h2>
          <p className="text-muted-foreground text-lg">
            Experience the intelligence of an AI that truly understands your patients.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 relative z-20">
          {tabs.map((tab, idx) => (
            <button
              key={tab}
              onClick={() => setActiveTab(idx)}
              className="relative px-6 py-2.5 text-sm md:text-[15px] font-medium transition-colors outline-none"
            >
              {activeTab === idx ? (
                <span className="text-[#050505] relative z-10">{tab}</span>
              ) : (
                <span className="text-slate-400 hover:text-slate-200">{tab}</span>
              )}
              {activeTab === idx && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Dashboard Area */}
        <div className="relative max-w-4xl mx-auto h-[400px] md:h-[450px] bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl">
           {/* Top bar */}
           <div className="h-12 border-b border-white/10 bg-white/5 flex items-center px-6 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-4 text-xs font-medium text-slate-400 tracking-wider">NEXUS_ENGINE_V2</span>
           </div>

           <div className="p-8 h-full flex flex-col items-center justify-center">
             <AnimatePresence mode="wait">
               
               {activeTab === 0 && (
                 <motion.div
                   key="answer"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -20 }}
                   className="w-full max-w-md flex flex-col gap-6"
                 >
                   <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4">
                     <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 shrink-0">
                       <User className="text-slate-300" size={20} />
                     </div>
                     <div className="flex flex-col">
                       <p className="text-xs text-slate-400 font-semibold mb-1">PATIENT</p>
                       <p className="text-sm md:text-base font-medium">"Hello, I need to get my teeth cleaned, are you accepting new patients?"</p>
                     </div>
                   </div>
                   <div className="flex items-center gap-4 bg-primary/20 border border-primary/30 rounded-2xl p-4 ml-8 relative shadow-[0_0_30px_rgba(37,99,235,0.15)]">
                     <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                       <Phone className="text-white" size={20} />
                     </div>
                     <div className="flex flex-col">
                       <p className="text-xs text-blue-300 font-semibold mb-1">NEXUS AI</p>
                       <p className="text-sm md:text-base font-medium text-white">"Yes, we are! I can help you schedule that cleaning right now."</p>
                     </div>
                   </div>
                 </motion.div>
               )}

               {activeTab === 1 && (
                 <motion.div
                   key="understand"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -20 }}
                   className="w-full max-w-lg grid grid-cols-2 gap-4"
                 >
                   <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-2">
                     <Activity className="text-violet-400 mb-2" size={24} />
                     <p className="text-xs text-slate-400 font-bold tracking-wider uppercase">Intent Detected</p>
                     <p className="text-lg font-medium text-white">New Patient Appointment</p>
                   </div>
                   <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-2">
                     <User className="text-blue-400 mb-2" size={24} />
                     <p className="text-xs text-slate-400 font-bold tracking-wider uppercase">Patient Type</p>
                     <p className="text-lg font-medium text-white">Unregistered / New</p>
                   </div>
                   <div className="col-span-2 bg-gradient-to-r from-violet-500/10 to-primary/10 border border-white/10 rounded-2xl p-6 flex items-center justify-between">
                     <div>
                       <p className="text-xs text-slate-400 font-bold tracking-wider uppercase mb-1">Urgency Score</p>
                       <p className="text-lg font-medium text-white">Normal</p>
                     </div>
                     <div className="w-32 h-2 rounded-full bg-slate-800 overflow-hidden">
                       <div className="w-1/4 h-full bg-green-400 rounded-full" />
                     </div>
                   </div>
                 </motion.div>
               )}

               {activeTab === 2 && (
                 <motion.div
                   key="schedule"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -20 }}
                   className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-6"
                 >
                   <div className="flex items-center gap-3 mb-6">
                     <Calendar className="text-slate-300" />
                     <span className="font-semibold">Checking Calendar</span>
                     <span className="ml-auto flex flex-col gap-1">
                       <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-pulse" />
                       <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-pulse delay-75" />
                       <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-pulse delay-150" />
                     </span>
                   </div>
                   
                   <div className="grid grid-cols-2 gap-3 mb-6">
                     <div className="bg-white/10 border border-white/10 rounded-xl p-3 text-center opacity-50">
                       <p className="text-[11px] text-slate-400">Tue 10:00 AM</p>
                     </div>
                     <div className="bg-primary/20 border border-primary rounded-xl p-3 text-center shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                       <p className="text-[11px] text-white font-bold">Tue 2:00 PM</p>
                     </div>
                   </div>

                   <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                       <div className="w-2 h-2 rounded-full bg-green-500" />
                     </div>
                     <p className="text-sm font-medium text-green-100">Appointment successfully booked.</p>
                   </div>
                 </motion.div>
               )}

               {activeTab === 3 && (
                 <motion.div
                   key="escalate"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -20 }}
                   className="w-full max-w-md flex flex-col gap-4"
                 >
                   <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500" />
                     <div className="flex items-center justify-between mb-4">
                       <div className="flex items-center gap-3">
                         <ShieldAlert className="text-red-400" size={24} />
                         <span className="font-bold text-red-200">Urgency Detected</span>
                       </div>
                       <span className="text-[10px] bg-red-500/20 text-red-300 px-2 py-1 rounded font-bold uppercase">Critical</span>
                     </div>
                     <p className="text-sm text-slate-300 leading-relaxed mb-4">
                       "I'm in extreme pain, my tooth is throbbing and swelling."
                     </p>
                     
                     <div className="bg-black/40 rounded-xl p-4 flex flex-col gap-2">
                       <div className="flex items-center gap-2">
                         <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                         <p className="text-xs text-slate-400">Team Notified</p>
                       </div>
                       <p className="text-sm font-medium text-white">Call routed to Dr. Smith's mobile line.</p>
                     </div>
                   </div>
                 </motion.div>
               )}

             </AnimatePresence>
           </div>
        </div>
      </Container>
    </section>
  );
}
