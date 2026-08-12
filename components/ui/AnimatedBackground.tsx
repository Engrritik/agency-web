"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const { scrollY } = useScroll();
  const [mounted, setMounted] = useState(false);

  // Map scroll position to 3D rotation and translation for a lag-free 4D effect
  const rotateX = useTransform(scrollY, [0, 1000], [60, 45]);
  const translateZ = useTransform(scrollY, [0, 1000], [0, 150]);
  const translateY = useTransform(scrollY, [0, 1000], [0, -100]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div 
      className="fixed inset-0 z-[-1] overflow-hidden bg-background pointer-events-none"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        style={{
          rotateX,
          translateZ,
          translateY,
          transformOrigin: "top center",
          transformStyle: "preserve-3d",
        }}
        className="absolute top-0 left-[-50vw] w-[200vw] h-[150vh]"
      >
        <div 
          className="absolute inset-0 w-full h-full opacity-[0.04] dark:opacity-[0.06] text-foreground"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '4rem 4rem',
            maskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)',
          }}
        />
      </motion.div>
    </div>
  );
}
