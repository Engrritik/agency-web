"use client";

import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Play, Calendar, Clock, ShieldCheck, CheckCircle2, UserPlus, AlertCircle, FileText, ArrowRight, Zap, Lock, Database, X } from "lucide-react";
import { motion } from "framer-motion";
import InteractiveCard from "@/components/InteractiveCard";

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
    <div className="flex flex-col min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-4xl mb-16 md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 border border-black/5 mb-6">
              <span className="flex w-2 h-2 rounded-full bg-blue-600"></span>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">Live Demonstration</p>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[0.9] mb-8 text-foreground">
              Hear The AI In Action.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl tracking-tight">
              Listen to unedited, real-world recordings of our AI Voice Receptionist handling actual patient scenarios.
            </p>
          </FadeIn>

        {/* Demo Section (Audio Player + Dashboard + Scenarios) */}
        <div className="max-w-6xl mx-auto mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Side: Player and Scenarios */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Audio Player Replacement / Video Player */}
            <FadeIn delay={0.1} className="moving-glow">
              <div className="aspect-video w-full bg-black rounded-3xl overflow-hidden relative shadow-[0_0_50px_rgba(0,0,0,0.1)] border border-border group flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
                {/* Simulated Audio Visualizer */}
                <div className="flex items-center justify-center gap-2 h-24">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="w-3 bg-black/80 rounded-full group-hover:animate-pulse transition-all duration-300"
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
                  <div className="font-mono text-sm text-black/80">0:12 / {active.outcome.duration}</div>
                </div>
              </div>
            </FadeIn>

            {/* Scenario Selector */}
            <FadeIn delay={0.2} className="bg-white border border-black/5 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="font-bold text-lg mb-4 tracking-[-0.02em]">Select Call Scenario</h3>
              <div className="flex flex-wrap gap-3">
                {Object.entries(scenarios).map(([key, scenario]) => (
                  <button
                    key={key}
                    onClick={() => setActiveScenario(key)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      activeScenario === key
                        ? "bg-blue-600 text-white shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] scale-[1.02]"
                        : "bg-black/5 text-foreground hover:bg-black/10"
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
            <FadeIn delay={0.3} className="bg-white border border-black/5 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full flex flex-col">
              <div className="flex items-center gap-3 mb-8 border-b border-black/5 p-8 pb-6 bg-black/[0.02]">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </div>
                <h3 className="font-bold text-xl tracking-tight">Call Outcome Dashboard</h3>
              </div>

              <div className="space-y-8 flex-grow px-8 pb-8">
                <div>
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-2">Call Status</div>
                  <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
                    {active.outcome.status === "Escalated to Human" ? <AlertCircle className="w-5 h-5 text-yellow-500" /> : <CheckCircle2 className="w-5 h-5 text-blue-600" />}
                    {active.outcome.status}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-2">Action Taken</div>
                  <div className="font-bold text-xl tracking-tight">{active.outcome.appointment}</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-2">Wait Time</div>
                    <div className="font-bold text-xl tracking-tight">{active.outcome.wait}</div>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-2">Duration</div>
                    <div className="font-bold text-xl tracking-tight">{active.outcome.duration}</div>
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-2">System Status</div>
                  <div className="font-bold text-xl tracking-tight flex items-center gap-2">
                    <Database className="w-5 h-5 text-blue-600" /> {active.outcome.calendar}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* AI Capability Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight mb-10 text-center">Engineered Capabilities</h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Books Appointments", "Answers FAQs", "Transfers Emergencies", "Calendar Integration",
              "Human Escalation", "After Hours Coverage", "Captures New Patients", "Natural Human Voice"
            ].map((cap, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-muted/30 border border-border rounded-xl p-4 flex items-center gap-3 hover-card hover-glow">
                  <CheckCircle2 className="w-5 h-5 text-foreground shrink-0" />
                  <span className="font-semibold text-sm">{cap}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Workflow Visualization */}
        <div className="max-w-6xl mx-auto mb-16">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">How It Works in Real-Time</h2>
          </FadeIn>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {['Patient Calls', 'AI Answers', 'Understands Intent', 'Checks Calendar', 'Books Appointment', 'Confirmation Sent'].map((step, i, arr) => (
              <FadeIn key={i} delay={i * 0.1} className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                <div className="bg-card border border-border rounded-2xl p-6 text-center shadow-sm w-full md:w-auto min-w-[140px] hover-glow">
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
        <div className="max-w-6xl mx-auto mb-16">
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
                <InteractiveCard innerClassName="p-6 text-center flex flex-col items-center gap-4 h-full">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground relative z-10 transition-transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-sm relative z-10">{item.title}</h3>
                </InteractiveCard>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Before vs After */}
        <div className="max-w-5xl mx-auto mb-16">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">The Nexus AI Difference</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.1} className="bg-white border border-black/5 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="text-2xl font-bold mb-6 text-muted-foreground tracking-[-0.02em]">Without Nexus AI</h3>
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
            <FadeIn delay={0.2} className="bg-blue-600 text-white border border-blue-500 rounded-3xl p-8 shadow-[0_8px_30px_rgba(37,99,235,0.2)] transform md:-translate-y-4">
              <h3 className="text-2xl font-bold mb-6 tracking-[-0.02em]">With Nexus AI</h3>
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
        <div className="max-w-4xl mx-auto mb-16 text-center">
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
        <FadeIn delay={0.4} className="mt-40 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.04em] mb-8 text-foreground">Ready to test it for your clinic?</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed tracking-tight">
            Book a call with our engineers and we&apos;ll build a live prototype tailored to your specific clinical workflows.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-14 px-8 text-base shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:scale-[1.02] transition-transform rounded-full ">Book Free Strategy Call</Button>
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}
