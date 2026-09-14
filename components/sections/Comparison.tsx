"use client";
import * as React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Container } from "@/components/ui/Container";
import { PhoneMissed, CheckCircle2, Clock, CalendarCheck, HelpCircle, ShieldAlert } from "lucide-react";

export default function Comparison() {
  const features = [
    {
      title: "Missed Calls",
      traditional: "Patient is sent to voicemail or abandons the call.",
      nexus: "Answered instantly, every single time.",
      icon: <PhoneMissed size={20} className="text-slate-400" />,
      iconNexus: <CheckCircle2 size={20} className="text-primary" />
    },
    {
      title: "After-Hours",
      traditional: "Clinic unreachable until the next morning.",
      nexus: "24/7 AI coverage for booking & questions.",
      icon: <Clock size={20} className="text-slate-400" />,
      iconNexus: <CheckCircle2 size={20} className="text-primary" />
    },
    {
      title: "Scheduling",
      traditional: "Manual calendar Tetris by the front desk.",
      nexus: "Calendar-aware real-time scheduling.",
      icon: <CalendarCheck size={20} className="text-slate-400" />,
      iconNexus: <CheckCircle2 size={20} className="text-primary" />
    },
    {
      title: "Repeated Questions",
      traditional: "Staff repeats the same answers all day.",
      nexus: "Automated answers for policies & services.",
      icon: <HelpCircle size={20} className="text-slate-400" />,
      iconNexus: <CheckCircle2 size={20} className="text-primary" />
    },
    {
      title: "Urgent Callers",
      traditional: "Wait on hold or leave a message.",
      nexus: "Smart escalation directly to your team.",
      icon: <ShieldAlert size={20} className="text-slate-400" />,
      iconNexus: <CheckCircle2 size={20} className="text-primary" />
    },
  ];

  return (
    <section className="py-24 bg-[#F7F8FC]">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight"
          >
            Built for the moments your front desk can't handle.
          </motion.h2>
        </div>

        <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl border border-border shadow-sm overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-50 border-b border-border">
            <div className="p-6 text-center border-b md:border-b-0 md:border-r border-border">
               <h3 className="text-lg font-bold text-muted-foreground uppercase tracking-wider">Traditional Front Desk</h3>
            </div>
            <div className="p-6 text-center flex items-center justify-center gap-2">
               <div className="w-2 h-2 rounded-full bg-primary" />
               <h3 className="text-lg font-bold text-primary-deep uppercase tracking-wider">Nexus AI</h3>
            </div>
          </div>

          {/* Rows */}
          <div className="flex flex-col">
            {features.map((feature, idx) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 border-b border-border last:border-0 hover:bg-slate-50/50 transition-colors group"
              >
                <div className="p-6 flex flex-col md:border-r border-border opacity-70">
                   <div className="flex items-center gap-3 mb-2">
                     {feature.icon}
                     <h4 className="font-bold text-foreground text-sm">{feature.title}</h4>
                   </div>
                   <p className="text-sm text-slate-500 pl-8">{feature.traditional}</p>
                </div>
                <div className="p-6 flex flex-col bg-primary/5">
                   <div className="flex items-center gap-3 mb-2">
                     {feature.iconNexus}
                     <h4 className="font-bold text-primary-deep text-sm">{feature.title}</h4>
                   </div>
                   <p className="text-sm text-slate-700 font-medium pl-8">{feature.nexus}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
