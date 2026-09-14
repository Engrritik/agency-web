"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "motion/react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", children, ...props }, ref) => {
    
    let baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none rounded-[12px]";
    
    let variantStyles = "";
    if (variant === "primary") {
      variantStyles = "bg-primary text-white shadow-premium border border-transparent";
    } else if (variant === "secondary") {
      variantStyles = "bg-white text-foreground border border-border shadow-sm";
    } else if (variant === "ghost") {
      variantStyles = "bg-transparent text-foreground hover:bg-muted";
    }

    let sizeStyles = "";
    if (size === "sm") sizeStyles = "px-4 py-2 text-sm";
    else if (size === "md") sizeStyles = "px-6 py-3 text-[15px]";
    else if (size === "lg") sizeStyles = "px-8 py-4 text-base";
    
    return (
      <motion.button
        ref={ref}
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";
