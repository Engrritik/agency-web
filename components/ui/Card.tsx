"use client";
import * as React from "react";
import { motion, HTMLMotionProps } from "motion/react";

export interface CardProps extends HTMLMotionProps<"div"> {
  hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", hoverEffect = false, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hoverEffect ? { y: -5, scale: 1.01 } : undefined}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className={`rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow ${hoverEffect ? 'hover:shadow-premium hover:border-primary/20' : ''} ${className}`}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
Card.displayName = "Card";
