"use client";

import { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden tracking-tight";
    
    const variants = {
      primary: "bg-foreground text-background hover:bg-foreground/90 shadow-[0_2px_10px_rgba(0,0,0,0.08)]",
      secondary: "bg-black/5 text-foreground hover:bg-black/10",
      outline: "border border-border bg-transparent hover:bg-black/5 text-foreground",
      ghost: "hover:bg-black/5 hover:text-foreground text-foreground",
    };
    
    const sizes = {
      sm: "h-8 px-4 py-1.5 text-[13px]",
      md: "h-10 px-5 py-2",
      lg: "h-12 px-8 text-base",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
      <motion.button
        ref={ref}
        className={combinedClassName}
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;

