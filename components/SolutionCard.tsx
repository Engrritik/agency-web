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
    <InteractiveCard className={className} innerClassName="p-8 flex flex-col h-full bento-inner">
      <div className="w-12 h-12 rounded-[16px] bg-violet-500/10 flex items-center justify-center text-violet-400 mb-6 relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-violet-500/20 border border-violet-500/20 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
        {icon}
      </div>
      
      <div className="space-y-4 flex-grow relative z-10">
        <div>
          <h3 className="text-[11px] font-bold text-violet-400/80 uppercase tracking-[0.2em] mb-2">The Problem</h3>
          <p className="text-xl font-bold text-foreground transition-colors duration-300 tracking-[-0.02em] leading-snug">{problem}</p>
        </div>
        
        <div className="border-t border-white/5 pt-5 mt-5">
          <h3 className="text-[11px] font-bold text-violet-400/80 uppercase tracking-[0.2em] mb-2">Our Solution</h3>
          <p className="text-base text-muted-foreground leading-relaxed transition-colors duration-300">{solution}</p>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-white/5 relative z-10">
        <h3 className="text-[11px] font-bold text-violet-400/80 uppercase tracking-[0.2em] mb-2">Business Outcome</h3>
        <div className="flex items-center gap-2 text-foreground font-bold text-base tracking-tight transition-colors group-hover:text-violet-300">
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          {outcome}
        </div>
      </div>
    </InteractiveCard>
  );
}
