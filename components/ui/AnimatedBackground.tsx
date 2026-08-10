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
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-white pointer-events-none">
      {/* Orb 1 - Blue */}
      <motion.div
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -100, 100, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-400/20 blur-[120px]"
      />
      
      {/* Orb 2 - Purple */}
      <motion.div
        animate={{
          x: [0, -100, 100, 0],
          y: [0, 100, -100, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-400/20 blur-[150px]"
      />

      {/* Orb 3 - Cyan */}
      <motion.div
        animate={{
          x: [0, 150, -50, 0],
          y: [0, 50, -150, 0],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute top-[20%] left-[40%] w-[40vw] h-[40vw] rounded-full bg-cyan-400/10 blur-[100px]"
      />

      {/* Subtle overlay grid for texture */}
      <div 
        className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
        }}
      />
    </div>
  );
}
