"use client";

import { motion } from "framer-motion";
import { ReactNode, CSSProperties } from "react";

export function FadeInStagger({ children, className = "", staggerDelay = 0.1, delay = 0 }: { children: ReactNode, className?: string, staggerDelay?: number, delay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  duration?: number;
  style?: CSSProperties;
  useStagger?: boolean;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  duration = 0.5,
  style,
  useStagger = false,
}: FadeInProps) {
  const directionOffset = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 },
  };

  const hidden = {
    opacity: 0,
    ...directionOffset[direction],
  };

  const visible = {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: duration,
      delay: useStagger ? 0 : delay,
      ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
    }
  };

  if (useStagger) {
    return (
      <motion.div
        variants={{ hidden, visible }}
        className={className}
        style={style}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
