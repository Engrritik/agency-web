"use client";

import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import InteractiveCard from "./InteractiveCard";

interface SolutionCardProps {
  icon: ReactNode;
  problem: string;
  solution: string;
  outcome: string;
  className?: string;
}

export default function SolutionCard({ icon, problem, solution, outcome, className = "" }: SolutionCardProps) {
  return (
    <InteractiveCard className={className} innerClassName="glass-panel hover-glow p-8 flex flex-col h-full hover:bg-white/5 transition-colors">
      <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-8 relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-500/20 border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
        {icon}
      </div>
      
      <div className="space-y-4 flex-grow relative z-10">
        <div>
          <h3 className="text-[11px] font-bold text-blue-400 uppercase tracking-[0.2em] mb-2">The Problem</h3>
          <p className="text-2xl font-bold text-white transition-colors duration-300 tracking-tight leading-snug">{problem}</p>
        </div>
        
        <div className="border-t border-white/10 pt-5 mt-5">
          <h3 className="text-[11px] font-bold text-blue-400 uppercase tracking-[0.2em] mb-2">Our Solution</h3>
          <p className="text-base text-gray-400 leading-relaxed transition-colors duration-300">{solution}</p>
        </div>
      </div>

      <div className="mt-8 pt-5 border-t border-white/10 relative z-10">
        <h3 className="text-[11px] font-bold text-blue-400 uppercase tracking-[0.2em] mb-3">Business Outcome</h3>
        <div className="flex items-center gap-2 text-white font-bold text-base tracking-tight transition-colors group-hover:text-blue-300">
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          {outcome}
        </div>
      </div>
    </InteractiveCard>
  );
}
