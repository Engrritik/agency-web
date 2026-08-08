"use client";

import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Play, Calendar, Clock, ShieldCheck, CheckCircle2, UserPlus, AlertCircle, FileText, ArrowRight, Zap, Lock, Database, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Demo() {
  const [activeScenario, setActiveScenario] = useState("booking");

  const scenarios = {
    "new_patient": {
      label: "New Patient Intake",
      icon: <UserPlus className="w-5 h-5" />,
      outcome: {
        status: "Successfully Answered",
        appointment: "Information Collected",
        wait: "0 Seconds",
        duration: "1m 45s",
        calendar: "CRM Synced"
      }
    },
    "booking": {
      label: "Appointment Booking",
      icon: <Calendar className="w-5 h-5" />,
      outcome: {
        status: "Successfully Answered",
        appointment: "Booked Successfully",
        wait: "0 Seconds",
        duration: "2m 14s",
        calendar: "Synced"
      }
    },
    "insurance": {
      label: "Insurance Question",
      icon: <FileText className="w-5 h-5" />,
      outcome: {
        status: "Successfully Answered",
        appointment: "Verified In-Network",
        wait: "0 Seconds",
        duration: "1m 20s",
        calendar: "N/A"
      }
    },
    "emergency": {
      label: "Emergency Call",
      icon: <AlertCircle className="w-5 h-5" />,
      outcome: {
        status: "Escalated to Human",
        appointment: "Priority Transfer",
        wait: "0 Seconds",
        duration: "0m 45s",
        calendar: "N/A"
      }
    },
    "after_hours": {
      label: "After Hours",
      icon: <Clock className="w-5 h-5" />,
      outcome: {
        status: "Successfully Answered",
        appointment: "Booked for Tomorrow",
        wait: "0 Seconds",
        duration: "1m 10s",
        calendar: "Synced"
      }
    }
  };

  const active = scenarios[activeScenario as keyof typeof scenarios];

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-3xl mb-16 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            Experience the Future of Patient Communications
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Listen to our AI interact naturally with patients, handle complex objections, and integrate directly with practice management software.
          </p>
        </FadeIn>

        {/* Demo Section (Audio Player + Dashboard + Scenarios) */}
        <div className="max-w-6xl mx-auto mb-32 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Side: Player and Scenarios */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Audio Player Replacement / Video Player */}
            <FadeIn delay={0.1}>
              <div className="aspect-video w-full bg-black rounded-3xl overflow-hidden relative shadow-[0_0_50px_rgba(0,0,0,0.1)] border border-border group flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
                {/* Simulated Audio Visualizer */}
                <div className="flex items-center justify-center gap-2 h-24">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="w-3 bg-white/80 rounded-full group-hover:animate-pulse transition-all duration-300"
                      style={{
                        height: `${Math.max(20, ((i * 17) % 100))}%`,
                        animationDelay: `${i * 0.05}s`,
                      }}
                    ></div>
                  ))}
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-white">
                    <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform">
                      <Play className="w-5 h-5 ml-1" fill="currentColor" />
                    </button>
                    <div>
                      <div className="font-bold">{active.label} Simulation</div>
                      <div className="text-sm opacity-80">Listening to patient...</div>
                    </div>
                  </div>
                  <div className="font-mono text-sm text-white/80">0:12 / {active.outcome.duration}</div>
                </div>
              </div>
            </FadeIn>

            {/* Scenario Selector */}
            <FadeIn delay={0.2} className="bg-card border border-border rounded-3xl p-6">
              <h3 className="font-bold text-lg mb-4">Select Call Scenario</h3>
              <div className="flex flex-wrap gap-3">
                {Object.entries(scenarios).map(([key, scenario]) => (
                  <button
                    key={key}
                    onClick={() => setActiveScenario(key)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      activeScenario === key
                        ? "bg-foreground text-background shadow-md scale-[1.02]"
                        : "bg-muted/50 text-foreground hover:bg-muted"
                    }`}
                  >
                    {scenario.icon}
                    {scenario.label}
                  </button>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right Side: Dashboard */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Call Outcome Dashboard */}
            <FadeIn delay={0.3} className="bg-card border border-border rounded-3xl p-8 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-8 border-b border-border/50 pb-6">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <h3 className="font-bold text-xl">Call Outcome Dashboard</h3>
              </div>

              <div className="space-y-6 flex-grow">
                <div>
                  <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Call Status</div>
                  <div className="flex items-center gap-2 font-semibold text-lg">
                    {active.outcome.status === "Escalated to Human" ? <AlertCircle className="w-5 h-5 text-yellow-500" /> : <CheckCircle2 className="w-5 h-5 text-green-500" />}
                    {active.outcome.status}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Action Taken</div>
                  <div className="font-semibold text-lg">{active.outcome.appointment}</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Wait Time</div>
                    <div className="font-semibold text-lg">{active.outcome.wait}</div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Duration</div>
                    <div className="font-semibold text-lg">{active.outcome.duration}</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">System Status</div>
                  <div className="font-semibold text-lg flex items-center gap-2">
                    <Database className="w-5 h-5 text-muted-foreground" /> {active.outcome.calendar}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* AI Capability Grid */}
        <div className="max-w-6xl mx-auto mb-32">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight mb-10 text-center">Engineered Capabilities</h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Books Appointments", "Answers FAQs", "Transfers Emergencies", "Calendar Integration",
              "Human Escalation", "After Hours Coverage", "Captures New Patients", "Natural Human Voice"
            ].map((cap, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-muted/30 border border-border rounded-xl p-4 flex items-center gap-3 hover-card">
                  <CheckCircle2 className="w-5 h-5 text-foreground shrink-0" />
                  <span className="font-semibold text-sm">{cap}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Workflow Visualization */}
        <div className="max-w-6xl mx-auto mb-32">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">How It Works in Real-Time</h2>
          </FadeIn>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {['Patient Calls', 'AI Answers', 'Understands Intent', 'Checks Calendar', 'Books Appointment', 'Confirmation Sent'].map((step, i, arr) => (
              <FadeIn key={i} delay={i * 0.1} className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                <div className="bg-card border border-border rounded-2xl p-6 text-center shadow-sm w-full md:w-auto min-w-[140px]">
                  <span className="font-bold text-sm block">{step}</span>
                </div>
                {i < arr.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0.3, x: 0 }}
                    animate={{ opacity: [0.3, 1, 0.3], x: [0, 8, 0], color: ["#a3a3a3", "#000", "#a3a3a3"] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                    className="hidden md:block text-muted-foreground"
                  >
                    <ArrowRight className="w-6 h-6 shrink-0" />
                  </motion.div>
                )}
                {i < arr.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0.3, y: 0 }}
                    animate={{ opacity: [0.3, 1, 0.3], y: [0, 8, 0], color: ["#a3a3a3", "#000", "#a3a3a3"] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                    className="md:hidden text-muted-foreground"
                  >
                    <ArrowRight className="w-6 h-6 shrink-0 rotate-90 my-2" />
                  </motion.div>
                )}
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Security & Reliability */}
        <div className="max-w-6xl mx-auto mb-32">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Enterprise-Grade Infrastructure</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: "Zero Hallucination Prompting", icon: <Lock className="w-6 h-6" /> },
              { title: "Real-Time Calendar Sync", icon: <Zap className="w-6 h-6" /> },
              { title: "Human Escalation", icon: <UserPlus className="w-6 h-6" /> },
              { title: "Clinic-Specific Knowledge", icon: <Database className="w-6 h-6" /> },
              { title: "Secure API Integrations", icon: <ShieldCheck className="w-6 h-6" /> },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-2xl p-6 text-center flex flex-col items-center gap-4 h-full hover-card">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-sm">{item.title}</h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Before vs After */}
        <div className="max-w-5xl mx-auto mb-32">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">The Nexus AI Difference</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.1} className="bg-muted/20 border border-border rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-muted-foreground">Without Nexus AI</h3>
              <ul className="space-y-4">
                {["Missed Calls", "Lost Revenue", "Long Hold Times", "Frustrated Patients", "Overwhelmed Staff"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground font-medium text-lg">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0">
                      <X className="w-4 h-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.2} className="bg-foreground text-background border border-foreground rounded-3xl p-8 shadow-xl transform md:-translate-y-4">
              <h3 className="text-2xl font-bold mb-6">With Nexus AI</h3>
              <ul className="space-y-4">
                {["Every Call Answered instantly", "More Bookings & Revenue", "24/7 Availability", "Better Patient Experience", "Freed-Up Front Desk"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-lg">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
        
        {/* Technology Stack */}
        <div className="max-w-4xl mx-auto mb-32 text-center">
          <FadeIn>
            <h3 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-8">Powered by Trusted AI Infrastructure</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale font-bold text-xl">
              <div>Retell AI</div>
              <div>OpenAI</div>
              <div>Google Calendar</div>
              <div>Cal.com</div>
              <div>Twilio</div>
            </div>
          </FadeIn>
        </div>

        {/* CTA */}
        <FadeIn delay={0.4} className="mt-32 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">Ready to test it for your clinic?</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Book a call with our engineers and we&apos;ll build a live prototype tailored to your specific clinical workflows.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-14 px-8 text-base shadow-xl hover:scale-105 transition-transform">Book Free Strategy Call</Button>
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}
