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
      {/* Wave Layer 1 */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-10%] w-[120vw] h-[70vh] bg-blue-100/40 rounded-[100%] blur-[60px]"
      />
      {/* Wave Layer 2 */}
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, 50, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-20%] right-[-10%] w-[130vw] h-[60vh] bg-blue-200/30 rounded-[100%] blur-[70px]"
      />
      {/* Wave Layer 3 */}
      <motion.div
        animate={{ y: [0, -50, 0], x: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[-20%] w-[150vw] h-[50vh] bg-cyan-100/30 rounded-[100%] blur-[80px]"
      />
      
      {/* Subtle overlay texture */}
      <div 
        className="absolute inset-0 w-full h-full opacity-[0.02] pointer-events-none mix-blend-overlay"
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
