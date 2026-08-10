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
    <InteractiveCard className={className} innerClassName="p-8 bg-white/40 backdrop-blur-xl border-white/20">
      <div className="w-14 h-14 rounded-[16px] bg-black/5 flex items-center justify-center text-blue-600 mb-8 relative z-10 transition-transform duration-300 group-hover:scale-105 border border-black/5">
        {icon}
      </div>
      
      <div className="space-y-6 flex-grow relative z-10">
        <div>
          <h3 className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-2">The Problem</h3>
          <p className="text-xl font-bold text-foreground transition-colors duration-300 tracking-[-0.02em] leading-snug">{problem}</p>
        </div>
        
        <div className="border-t border-black/5 pt-6">
          <h3 className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-2">Our Solution</h3>
          <p className="text-lg text-muted-foreground leading-relaxed transition-colors duration-300">{solution}</p>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-black/5 relative z-10">
        <h3 className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-2">Business Outcome</h3>
        <div className="flex items-center gap-2 text-foreground font-bold text-lg tracking-tight group-hover:text-blue-600 transition-colors">
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          {outcome}
        </div>
      </div>
    </InteractiveCard>
  );
}
