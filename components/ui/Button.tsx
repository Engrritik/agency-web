"use client";

import { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden";
    
    const variants = {
      primary: "bg-foreground text-background hover:bg-foreground/90 shadow-sm",
      secondary: "bg-accent text-foreground hover:bg-accent/80",
      outline: "border border-border bg-background hover:bg-accent text-foreground",
      ghost: "hover:bg-accent hover:text-foreground text-foreground",
    };
    
    const sizes = {
      sm: "h-9 px-4 py-2 text-xs",
      md: "h-10 px-6 py-2",
      lg: "h-11 px-8",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
      <motion.button
        ref={ref}
        className={combinedClassName}
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98, y: 0 }}
        transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;

