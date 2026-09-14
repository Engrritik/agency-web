"use client";
import * as React from "react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Activity, Radio } from "lucide-react";

export default function LiveCallInterface() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-sm relative">
              
              {/* Outer Glows */}
              <div className="absolute inset-0 bg-violet/20 blur-[100px] rounded-full" />
              
              <div className="relative bg-[#050505] rounded-[32px] p-6 border border-[#222] shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-semibold text-slate-300 tracking-wider">LIVE</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">00:42</span>
                </div>

                {/* Subtitle / Actor */}
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Patient</p>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6">
                  <p className="text-[15px] text-white">"I have severe tooth pain and need help, I think I cracked my molar."</p>
                </div>

                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Nexus AI</p>
                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-4 mb-8">
                  <p className="text-[15px] text-blue-100">"I'm very sorry to hear that. For a cracked molar with severe pain, I'm escalating your call immediately to our clinical team."</p>
                </div>

                {/* Audio Waveform Viz */}
                <div className="flex items-center justify-center gap-1 h-12 mb-8">
                  {[...Array(24)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: ["20%", "80%", "30%", "100%", "40%"] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: i * 0.1,
                        ease: "easeInOut"
                      }}
                      className="w-1 bg-violet rounded-full"
                    />
                  ))}
                </div>

                {/* Status card */}
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-slate-400">Intent</span>
                    <span className="text-[11px] font-bold text-red-400 uppercase">Emergency</span>
                  </div>
                  <div className="h-[1px] w-full bg-white/5" />
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-slate-400">Action</span>
                    <span className="text-[11px] font-bold text-white flex items-center gap-1">
                      <Radio size={12} className="text-green-400" />
                      Escalating to clinic
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6 leading-tight">
              Hear every nuance. <br />
              <span className="text-muted-foreground">React in milliseconds.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mb-8">
              Nexus AI uses advanced natural language understanding to parse urgency, sentiment, and context. It doesn't just read scripts—it holds actual conversations.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}
