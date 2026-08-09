"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface SolutionCardProps {
  icon: ReactNode;
  problem: string;
  solution: string;
  outcome: string;
  className?: string;
}

export default function SolutionCard({ icon, problem, solution, outcome, className = "" }: SolutionCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className={`relative group ${className}`}>
      {/* Colorful Background Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-30 transition duration-700"></div>
      
      <div
        className="relative h-full rounded-3xl bg-white backdrop-blur-md p-8 flex flex-col overflow-hidden shadow-sm border border-black/5 transition-transform duration-500 group-hover:-translate-y-1"
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(0, 0, 0, 0.03),
                transparent 80%
              )
            `,
          }}
        />
        
        <div className="w-14 h-14 rounded-2xl bg-muted/80 flex items-center justify-center text-foreground mb-8 relative z-10 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      
      <div className="space-y-6 flex-grow relative z-10">
        <div>
          <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">The Problem</h3>
          <p className="text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-foreground/80">{problem}</p>
        </div>
        
        <div className="border-t border-border/40 pt-6">
          <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Our Solution</h3>
          <p className="text-lg text-foreground/90 leading-relaxed transition-colors duration-300 group-hover:text-foreground/80">{solution}</p>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border/40 relative z-10">
        <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Business Outcome</h3>
        <div className="flex items-center gap-2 text-foreground font-bold text-lg">
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          {outcome}
        </div>
      </div>
    </div>
    </div>
  );
}
