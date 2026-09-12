"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

export default function TiltCard({
  children,
  className = "",
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 200, mass: 1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const glareOpacity = useTransform(springY, [-0.5, 0.5], [0, 0.3]);
  const glareY = useTransform(springY, [-0.5, 0.5], [-20, 20]);
  const glareX = useTransform(springX, [-0.5, 0.5], [-20, 20]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative perspective-1000 ${className}`}
    >
      <div 
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d", transform: "translateZ(auto)" }}
      >
        {children}
        {glare && (
          <motion.div
            style={{
              opacity: glareOpacity,
              y: glareY,
              x: glareX,
              background: "radial-gradient(circle at center, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 80%)",
            }}
            className="pointer-events-none absolute inset-0 z-50 rounded-inherit mix-blend-overlay w-[200%] h-[200%] -left-1/2 -top-1/2 blur-2xl"
          />
        )}
      </div>
    </motion.div>
  );
}
