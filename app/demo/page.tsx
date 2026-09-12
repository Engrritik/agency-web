"use client";

import { useState } from "react";
import FadeIn, { FadeInStagger } from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Play, Calendar, Clock, ShieldCheck, CheckCircle2, UserPlus, AlertCircle, FileText, ArrowRight, Zap, Lock, Database, X } from "lucide-react";
import { motion } from "framer-motion";
import InteractiveCard from "@/components/InteractiveCard";

export default function Demo() {
  const [activeScenario, setActiveScenario] = useState("booking");

  const scenarios = {
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
    <div className="flex flex-col min-h-screen relative z-10 overflow-x-hidden md:overflow-x-visible">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen animate-aurora"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[150px] mix-blend-screen animate-aurora" style={{ animationDelay: '-5s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <FadeInStagger staggerDelay={0.15}>
          <FadeIn className="max-w-4xl mx-auto mb-16 text-center flex flex-col items-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6 hover:bg-white/5 transition-colors">
              <span className="flex w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-pulse-slow"></span>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-300">Live Simulator</p>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1] mb-8 text-white">
              Hear The AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-500">In Action.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl font-medium mx-auto">
              Listen to unedited, real-world recordings of our AI Voice Receptionist handling actual patient scenarios.
            </p>
          </FadeIn>

        {/* Demo Section (Audio Player + Dashboard + Scenarios) */}
        <div className="max-w-6xl mx-auto mb-24 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Side: Player and Scenarios */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Audio Player */}
            <FadeIn useStagger>
              <div className="aspect-[16/10] w-full bg-[#06070a]/90 backdrop-blur-3xl rounded-[2.5rem] overflow-hidden relative border border-white/10 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(3,3,5,0.8)] hover-glow">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none mix-blend-overlay"></div>
                
                {/* Simulated Audio Visualizer (Sleek Dark Mode) */}
                <div className="flex items-center justify-center gap-[3px] h-32 w-full px-12 mt-[-40px]">
                  {[...Array(40)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 bg-blue-500/50 rounded-full transition-all duration-300"
                      style={{
                         height: `${Math.max(10, ((i * 23 + Math.random() * 50) % 100))}%`,
                         animationDelay: `${i * 0.05}s`,
                      }}
                    ></div>
                  ))}
                </div>
                
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-3xl glass-panel bg-black/40 border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-5 text-white">
                    <button className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-105 hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                      <Play className="w-6 h-6 ml-1" fill="currentColor" />
                    </button>
                    <div>
                      <div className="font-bold tracking-tight text-lg">{active.label}</div>
                      <div className="text-sm text-gray-400 tracking-tight font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Listening to patient
                      </div>
                    </div>
                  </div>
                  <div className="font-mono text-sm text-gray-400 font-medium bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                    0:12 / {active.outcome.duration}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Scenario Selector */}
            <FadeIn useStagger className="glass-panel border-white/10 rounded-3xl p-8 relative z-10">
              <h3 className="font-bold text-lg mb-6 tracking-tight text-gray-300 uppercase text-sm">Select Scenario</h3>
              <div className="flex flex-wrap gap-4">
                {Object.entries(scenarios).map(([key, scenario]) => (
                  <button
                    key={key}
                    onClick={() => setActiveScenario(key)}
                    className={`flex items-center gap-2.5 px-5 py-3.5 rounded-2xl text-sm font-semibold transition-all border ${
                      activeScenario === key
                        ? "bg-blue-600/20 text-blue-400 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.15)] scale-[1.02]"
                        : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white"
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
            <FadeIn useStagger className="glass-panel border-white/10 rounded-3xl overflow-hidden h-full flex flex-col relative z-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[60px] rounded-full pointer-events-none"></div>
              
              <div className="flex items-center gap-3 mb-8 border-b border-white/10 p-8 pb-6 bg-white/[0.02]">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </div>
                <h3 className="font-bold text-xl tracking-tight text-white/90">Execution Output</h3>
              </div>

              <div className="space-y-8 flex-grow px-8 pb-10">
                <div>
                  <div className="text-[11px] font-bold text-blue-400 uppercase tracking-[0.2em] mb-2">Call Status</div>
                  <div className="flex items-center gap-2 font-bold text-2xl tracking-tight text-white">
                    {active.outcome.status === "Escalated to Human" ? <AlertCircle className="w-6 h-6 text-yellow-500" /> : <CheckCircle2 className="w-6 h-6 text-blue-400" />}
                    {active.outcome.status}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-blue-400 uppercase tracking-[0.2em] mb-2">Action Taken</div>
                  <div className="font-bold text-2xl tracking-tight text-white">{active.outcome.appointment}</div>
                </div>
                <div className="grid grid-cols-2 gap-6 bg-white/5 p-6 rounded-2xl border border-white/5">
                  <div>
                    <div className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">Wait Time</div>
                    <div className="font-bold text-xl tracking-tight text-white">{active.outcome.wait}</div>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">Duration</div>
                    <div className="font-bold text-xl tracking-tight text-white">{active.outcome.duration}</div>
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-blue-400 uppercase tracking-[0.2em] mb-2">System Status</div>
                  <div className="font-bold text-xl tracking-tight text-white flex items-center gap-3">
                    <Database className="w-5 h-5 text-gray-400" /> {active.outcome.calendar}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
        </FadeInStagger>

        {/* AI Capability Grid */}
        <FadeInStagger staggerDelay={0.1} className="max-w-6xl mx-auto mb-24">
          <FadeIn useStagger>
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center text-white">Engineered Capabilities</h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Books Appointments", "Answers FAQs", "Transfers Emergencies", "Calendar Integration",
              "Human Escalation", "After Hours Coverage", "Captures New Patients", "Natural Human Voice"
            ].map((cap, i) => (
              <FadeIn useStagger key={i}>
                <InteractiveCard innerClassName="p-5 flex items-center gap-4 h-full glass-panel hover-glow border-white/10 hover:border-blue-500/30" className="h-full">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 relative z-10" />
                  <span className="font-semibold text-sm text-white relative z-10">{cap}</span>
                </InteractiveCard>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>

        {/* Workflow Visualization */}
        <div className="max-w-6xl mx-auto mb-24 hidden md:block">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">How It Works in Real-Time</h2>
          </FadeIn>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {['Patient Calls', 'AI Answers', 'Understands Intent', 'Checks Calendar', 'Books Appointment', 'Confirmation Sent'].map((step, i, arr) => (
              <FadeIn key={i} delay={i * 0.1} className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                <InteractiveCard innerClassName="px-4 py-8 text-center h-full flex flex-col justify-center glass-panel hover:bg-white/5" className="w-full md:w-auto min-w-[140px]">
                  <span className="font-bold text-xs uppercase tracking-widest text-white relative z-10">{step}</span>
                </InteractiveCard>
                {i < arr.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0.3, x: 0 }}
                    animate={{ opacity: [0.3, 1, 0.3], x: [0, 8, 0], color: ["#4b5563", "#60a5fa", "#4b5563"] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: i * 0.3,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="hidden lg:block text-gray-600"
                  >
                    <ArrowRight className="w-6 h-6 shrink-0" />
                  </motion.div>
                )}
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Security & Reliability */}
        <FadeInStagger staggerDelay={0.1} className="max-w-6xl mx-auto mb-24">
          <FadeIn useStagger className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white tracking-tighter mb-4">Enterprise-Grade Infrastructure</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: "Zero Hallucination", icon: <Lock className="w-6 h-6" /> },
              { title: "Real-Time Sync", icon: <Zap className="w-6 h-6" /> },
              { title: "Human Escalation", icon: <UserPlus className="w-6 h-6" /> },
              { title: "Custom Knowledge", icon: <Database className="w-6 h-6" /> },
              { title: "Secure APIs", icon: <ShieldCheck className="w-6 h-6" /> },
            ].map((item, i) => (
              <FadeIn useStagger key={i}>
                <InteractiveCard innerClassName="p-8 text-center flex flex-col items-center justify-center gap-6 h-full glass-panel border-white/10 hover-glow">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 relative z-10 transition-transform group-hover:scale-110 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-sm text-white relative z-10 uppercase tracking-wider">{item.title}</h3>
                </InteractiveCard>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>

        {/* Before vs After */}
        <FadeInStagger staggerDelay={0.1} className="max-w-5xl mx-auto mb-24">
          <FadeIn useStagger className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-4 text-white">The Nexus AI Difference</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn useStagger className="glass-panel border-white/5 rounded-[2rem] p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-8 text-gray-500 tracking-tight uppercase text-sm">Without Nexus AI</h3>
              <ul className="space-y-6">
                {["Missed Calls & Voicemails", "Lost Revenue to Competitors", "Long Hold Times", "Frustrated Patients", "Overwhelmed Staff Working Late"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-400 font-medium text-lg">
                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 border border-red-500/20">
                      <X className="w-4 h-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn useStagger className="glass-panel border-blue-500/20 rounded-[2rem] p-10 transform md:-translate-y-4 shadow-[0_0_50px_rgba(59,130,246,0.1)] bg-blue-900/5 hover:bg-blue-900/10 transition-colors">
              <h3 className="text-2xl font-bold mb-8 tracking-tight text-blue-400 uppercase text-sm">With Nexus AI</h3>
              <ul className="space-y-6">
                {["Every Call Answered instantly", "More Bookings & Revenue", "24/7 Availability & Triage", "Premium Patient Experience", "Freed-Up Front Desk Staff"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 font-medium text-lg text-white">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0 border border-blue-500/20">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </FadeInStagger>
        
        {/* Technology Stack */}
        <div className="max-w-4xl mx-auto mb-24 text-center glass-panel py-8 px-6 rounded-3xl">
          <FadeIn>
            <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-8">Powered by Trusted Infrastructure</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale font-bold text-xl font-sans tracking-tight">
              <div>Retell AI</div>
              <div>OpenAI</div>
              <div>Google Calendar</div>
              <div>Cal.com</div>
              <div>Twilio</div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* CTA section matching the others */}
      <section className="py-24 relative border-t border-white/5 bg-[#06070a]/80 backdrop-blur-3xl">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 md:text-center">
          <FadeInStagger staggerDelay={0.15} className="flex flex-col items-center">
            <FadeIn className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-8 text-white">Ready to test it for your clinic?</h2>
              <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
                Book a call with our engineers and we&apos;ll build a live prototype tailored to your specific clinical workflows.
              </p>
              <Link href="/contact" className="inline-block">
                <Button size="lg" className="h-16 px-10 text-lg font-bold rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all flex items-center justify-center gap-3">
                  Book Free Strategy Call <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </FadeIn>
          </FadeInStagger>
        </div>
      </section>
    </div>
  );
}
