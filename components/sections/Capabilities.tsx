"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { PhoneIncoming, MessageSquare, CalendarCheck, Moon, ArrowUpRight, Zap, ShieldCheck } from "lucide-react";

export default function Capabilities() {
  const cards = [
    {
      icon: <PhoneIncoming size={20} className="text-primary" />,
      title: "Inbound Calls",
      desc: "Answers instantly when your team is unavailable.",
      viz: (
        <div className="w-full bg-slate-50 rounded-xl p-3 border border-border shadow-inner">
          <div className="flex items-center justify-between bg-white rounded-lg p-2.5 border border-border/60 shadow-sm">
             <div className="flex items-center gap-2">
               <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                 <PhoneIncoming size={12} className="text-slate-600" />
               </div>
               <div>
                 <p className="text-[11px] font-semibold text-foreground leading-tight">Patient Calling</p>
               </div>
             </div>
             <div className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded">0s Hold</div>
          </div>
        </div>
      )
    },
    {
      icon: <MessageSquare size={20} className="text-primary" />,
      title: "Patient Questions",
      desc: "Handles common questions about your practice, hours, services, and policies.",
      viz: (
        <div className="w-full bg-slate-50 rounded-xl p-3 border border-border shadow-inner flex flex-col gap-2">
          <div className="bg-white rounded-lg rounded-tl-sm px-3 py-2 border border-border/60 shadow-sm w-fit max-w-[85%]">
             <p className="text-[10px] text-foreground font-medium">"Do you take Delta Dental?"</p>
          </div>
          <div className="bg-primary text-white rounded-lg rounded-br-sm px-3 py-2 shadow-sm w-fit max-w-[85%] self-end">
             <p className="text-[10px] font-medium">"Yes, we are in-network with Delta."</p>
          </div>
        </div>
      )
    },
    {
      icon: <CalendarCheck size={20} className="text-primary" />,
      title: "Smart Scheduling",
      desc: "Checks availability and helps patients book appointments.",
      viz: (
        <div className="w-full bg-slate-50 rounded-xl p-3 border border-border shadow-inner">
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white border border-primary/30 rounded-md p-1.5 text-center shadow-sm">
              <span className="text-[10px] font-semibold text-primary">Today 2 PM</span>
            </div>
            <div className="bg-white border border-border rounded-md p-1.5 text-center opacity-50">
              <span className="text-[10px] font-semibold text-muted-foreground line-through">Today 3 PM</span>
            </div>
            <div className="bg-white border border-border rounded-md p-1.5 text-center">
              <span className="text-[10px] font-semibold text-foreground">Wed 9 AM</span>
            </div>
            <div className="bg-white border border-border rounded-md p-1.5 text-center opacity-50">
              <span className="text-[10px] font-semibold text-muted-foreground line-through">Wed 10 AM</span>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: <Moon size={20} className="text-primary" />,
      title: "After-Hours Coverage",
      desc: "Stay available to capture opportunities when your office is closed.",
      viz: (
        <div className="w-full bg-slate-900 rounded-xl p-3 border border-slate-800 shadow-inner overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-700/30 via-slate-900 to-slate-900" />
          <div className="relative flex items-center justify-center h-[52px]">
            <div className="px-3 py-1.5 bg-slate-800/80 border border-slate-700 rounded-full flex items-center gap-2 backdrop-blur-sm">
               <Moon size={12} className="text-violet" />
               <span className="text-[10px] font-semibold text-slate-200 tracking-wide">Nexus Online: 11:45 PM</span>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: <ArrowUpRight size={20} className="text-primary" />,
      title: "Call Escalation",
      desc: "Recognizes situations that need a human and routes them appropriately.",
      viz: (
        <div className="w-full bg-slate-50 rounded-xl p-3 border border-border shadow-inner">
          <div className="bg-white rounded-lg p-2.5 border border-red-100 shadow-sm flex flex-col gap-2">
             <div className="flex items-center gap-2">
                <ShieldCheck size={12} className="text-red-500" />
                <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider">Urgent Flag</span>
             </div>
             <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full w-full bg-red-400 animate-pulse" />
             </div>
             <p className="text-[9px] text-slate-500 font-medium">Forwarding to On-Call Doctor...</p>
          </div>
        </div>
      )
    },
    {
      icon: <Zap size={20} className="text-primary" />,
      title: "Front Desk Automation",
      desc: "Reduce repetitive phone work so your team can focus on patients in the office.",
      viz: (
        <div className="w-full bg-slate-50 rounded-xl p-3 border border-border shadow-inner flex items-center justify-between">
           <div className="flex flex-col gap-2 w-[45%]">
             <div className="h-2 w-full bg-slate-200 rounded-full" />
             <div className="h-2 w-3/4 bg-slate-200 rounded-full" />
             <div className="h-2 w-5/6 bg-slate-200 rounded-full" />
           </div>
           <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
             <Zap size={10} className="text-primary" />
           </div>
           <div className="flex flex-col gap-2 w-[45%]">
             <div className="h-2 w-full bg-primary/20 rounded-full" />
             <div className="h-2 w-5/6 bg-primary/20 rounded-full" />
             <div className="h-2 w-3/4 bg-primary/20 rounded-full" />
           </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight"
          >
            One AI receptionist. <br/>
            Your entire front desk workflow.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Card hoverEffect className="h-full flex flex-col pt-8">
                <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 border border-primary/10">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{card.title}</h3>
                <p className="text-sm text-muted-foreground mb-8 flex-grow leading-relaxed">
                  {card.desc}
                </p>
                <div className="mt-auto">
                  {card.viz}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
