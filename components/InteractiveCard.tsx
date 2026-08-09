"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ReactNode } from "react";

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  permanent?: boolean;
  darker?: boolean;
}

export default function InteractiveCard({ 
  children, 
  className = "", 
  innerClassName = "p-8", 
  permanent = false, 
  darker = false 
}: InteractiveCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const glowGradient = darker 
    ? "from-blue-700 via-purple-700 to-pink-700" 
    : "from-blue-500 via-purple-500 to-pink-500";
    
  const radialColor = darker ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.03)";
  
  const opacityClass = permanent ? "opacity-30" : "opacity-0 group-hover:opacity-30";
  const innerOpacityClass = permanent ? "opacity-100" : "opacity-0 group-hover:opacity-100 transition duration-300";

  return (
    <div className={`relative group h-full ${className}`}>
      {/* Colorful Background Glow */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${glowGradient} rounded-[2rem] blur-xl transition duration-700 ${opacityClass}`}></div>
      
      <div
        className={`relative h-full rounded-3xl ${darker ? 'bg-zinc-950 text-zinc-100 border-white/10' : 'bg-white backdrop-blur-md border-black/5'} flex flex-col overflow-hidden shadow-sm transition-transform duration-500 group-hover:-translate-y-1 ${innerClassName}`}
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className={`pointer-events-none absolute -inset-px rounded-3xl ${innerOpacityClass}`}
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                ${radialColor},
                transparent 80%
              )
            `,
          }}
        />
        {children}
      </div>
    </div>
  );
}
