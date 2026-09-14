"use client";
import * as React from "react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Phone, Calendar, ArrowUpRight, MessageSquare, LayoutDashboard, Settings, User } from "lucide-react";

export default function DashboardMockup() {
  const stats = [
    { label: "Calls Today", value: "142", icon: <Phone size={16} className="text-blue-500" /> },
    { label: "Appointments", value: "18", icon: <Calendar size={16} className="text-green-500" /> },
    { label: "Questions Answered", value: "85", icon: <MessageSquare size={16} className="text-purple-500" /> },
    { label: "Escalations", value: "3", icon: <ArrowUpRight size={16} className="text-orange-500" /> },
  ];

  const calls = [
    { time: "10:42 AM", type: "New patient inquiry", status: "Resolved", color: "bg-green-100 text-green-700" },
    { time: "10:37 AM", type: "Appointment booking", status: "Booked", color: "bg-primary/20 text-primary-deep" },
    { time: "10:31 AM", type: "Emergency call", status: "Escalated", color: "bg-orange-100 text-orange-700" },
    { time: "10:15 AM", type: "Hours/Location question", status: "Resolved", color: "bg-green-100 text-green-700" },
  ];

  return (
    <section className="py-24 bg-[#F7F8FC] overflow-hidden">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight"
          >
            Everything your AI receptionist<br />
            is doing — at a glance.
          </motion.h2>
        </div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95, y: 40 }}
           whileInView={{ opacity: 1, scale: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
           className="w-full max-w-5xl mx-auto bg-white rounded-[24px] border border-border shadow-premium overflow-hidden flex flex-col md:flex-row h-auto min-h-[500px]"
        >
          {/* Sidebar */}
          <div className="w-full md:w-56 bg-slate-50 border-r border-border p-6 flex flex-col gap-8 shrink-0 hidden md:flex">
             <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                   <Phone size={12} className="text-white" />
                </div>
                <span className="font-bold text-sm text-foreground">Nexus AI</span>
             </div>

             <nav className="flex flex-col gap-2">
               <div className="flex items-center gap-3 px-3 py-2 bg-white rounded-lg border border-border shadow-sm text-primary">
                 <LayoutDashboard size={16} />
                 <span className="text-sm font-semibold">Overview</span>
               </div>
               <div className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-slate-100 rounded-lg transition-colors cursor-pointer">
                 <Phone size={16} />
                 <span className="text-sm font-medium">Calls</span>
               </div>
               <div className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-slate-100 rounded-lg transition-colors cursor-pointer">
                 <Calendar size={16} />
                 <span className="text-sm font-medium">Appointments</span>
               </div>
               <div className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-slate-100 rounded-lg transition-colors cursor-pointer">
                 <User size={16} />
                 <span className="text-sm font-medium">Patients</span>
               </div>
             </nav>

             <nav className="mt-auto flex flex-col gap-2">
               <div className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-slate-100 rounded-lg transition-colors cursor-pointer">
                 <Settings size={16} />
                 <span className="text-sm font-medium">Settings</span>
               </div>
             </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 lg:p-10 bg-white">
             <div className="mb-8">
               <h3 className="text-2xl font-bold text-foreground">Today's Overview</h3>
               <p className="text-sm text-muted-foreground">Live activity for your dental practice.</p>
             </div>

             <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
               {stats.map((stat) => (
                 <div key={stat.label} className="p-4 rounded-2xl border border-border bg-slate-50 flex flex-col">
                   <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center mb-4">
                     {stat.icon}
                   </div>
                   <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                   <p className="text-xs font-semibold text-muted-foreground">{stat.label}</p>
                 </div>
               ))}
             </div>

             <div>
               <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Recent Conversations</h4>
               <div className="flex flex-col gap-3">
                 {calls.map((call, i) => (
                   <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-border hover:border-primary/30 transition-colors">
                     <div className="flex flex-col mb-3 sm:mb-0">
                       <span className="text-sm font-semibold text-foreground">{call.type}</span>
                       <span className="text-xs text-muted-foreground">{call.time}</span>
                     </div>
                     <div className={`px-3 py-1 rounded-full text-xs font-bold w-fit ${call.color}`}>
                       {call.status}
                     </div>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
