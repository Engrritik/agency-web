"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";
    
    const variants = {
      primary: "bg-foreground text-background hover:bg-foreground/90 shadow-sm",
      secondary: "bg-accent text-foreground hover:bg-accent/80",
      outline: "border border-border bg-background hover:bg-accent text-foreground",
      ghost: "hover:bg-accent hover:text-foreground text-foreground",
    };
    
    const sizes = {
      sm: "h-9 px-4 py-2 text-xs",
      md: "h-10 px-6 py-2",
      lg: "h-11 rounded-md px-8",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
      <button
        ref={ref}
        className={combinedClassName}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
