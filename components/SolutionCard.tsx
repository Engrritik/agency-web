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
    <InteractiveCard className={className} innerClassName="p-6 flex flex-col h-full bento-inner">
      <div className="w-10 h-10 rounded-[12px] bg-white/5 flex items-center justify-center text-foreground mb-6 relative z-10 transition-transform duration-300 group-hover:scale-105 border border-white/10">
        {icon}
      </div>
      
      <div className="space-y-4 flex-grow relative z-10">
        <div>
          <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-1.5">The Problem</h3>
          <p className="text-lg font-bold text-foreground transition-colors duration-300 tracking-[-0.02em] leading-snug">{problem}</p>
        </div>
        
        <div className="border-t border-white/10 pt-4">
          <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-1.5">Our Solution</h3>
          <p className="text-base text-muted-foreground leading-relaxed transition-colors duration-300">{solution}</p>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-white/10 relative z-10">
        <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-1.5">Business Outcome</h3>
        <div className="flex items-center gap-2 text-foreground font-bold text-base tracking-tight transition-colors">
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          {outcome}
        </div>
      </div>
    </InteractiveCard>
  );
}
