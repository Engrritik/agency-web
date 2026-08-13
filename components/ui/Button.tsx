"use client";

import { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/50 disabled:pointer-events-none disabled:opacity-50 relative tracking-tight hover-glow group";
    
    const variants = {
      primary: "bg-foreground text-background hover:bg-foreground/90 border border-transparent shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_25px_rgba(0,0,0,0.2)]",
      secondary: "bg-background text-foreground border border-border hover:bg-muted/50 shadow-sm",
      outline: "border border-border bg-transparent hover:bg-muted/50 text-foreground shadow-sm",
      ghost: "hover:bg-muted/50 hover:text-foreground text-foreground",
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

