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
  innerClassName = "p-8 md:p-10", 
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

  const radialColor = "rgba(139, 92, 246, 0.15)"; // Neon Purple spotlight
  
  const innerOpacityClass = permanent ? "opacity-100" : "opacity-0 group-hover:opacity-100 transition duration-300";

  return (
    <div className={`relative group h-full ${className}`}>
      <div
        className={`relative h-full rounded-3xl neu-flat hover:neu-flat-lg hover-glow transition-all duration-500 border border-transparent overflow-hidden ${innerClassName}`}
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className={`pointer-events-none absolute -inset-px rounded-3xl ${innerOpacityClass}`}
          style={{
            background: useMotionTemplate`
              radial-gradient(
                800px circle at ${mouseX}px ${mouseY}px,
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
