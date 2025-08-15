import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedContainerProps {
  children?: React.ReactNode;
  className?: string;
  animation?: "fade-in" | "fade-in-up" | "fade-in-down" | "slide-in-left" | "slide-in-right" | "scale-in";
  delay?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const AnimatedContainer: React.FC<AnimatedContainerProps> = ({ 
  children, 
  className, 
  animation = "fade-in-up", 
  delay,
  ...props
}) => {
  const animationClass = `animate-${animation}`;
  const delayClass = delay ? `animate-stagger-${delay}` : "";

  return (
    <div className={cn(animationClass, delayClass, className)} {...props}>
      {children}
    </div>
  );
};