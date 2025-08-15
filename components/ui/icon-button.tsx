import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import type { BaseComponentProps } from "@/types";

interface IconButtonProps 
  extends BaseComponentProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  icon: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "ghost" | "outline";
  loading?: boolean;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, icon, size = "md", variant = "default", loading, ...props }, ref) => {
    const sizeClasses = {
      sm: "w-8 h-8 p-1.5",
      md: "w-9 h-9 p-2",
      lg: "w-10 h-10 p-2.5",
    };

    const variantClasses = {
      default: "bg-theme-card-bg border border-theme-border hover:bg-theme-button-bg",
      ghost: "hover:bg-theme-button-bg",
      outline: "border border-theme-border hover:bg-theme-button-bg",
    };

    return (
      <button
        className={cn(
          "rounded-lg transition-all duration-200 shadow-minimal hover:shadow-minimal-lg flex items-center justify-center hover-lift disabled:opacity-50 disabled:cursor-not-allowed",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        ref={ref}
        disabled={loading}
        {...props}
      >
        {loading ? (
          <div className="w-4 h-4 border-2 border-theme-accent border-t-transparent rounded-full animate-spin" />
        ) : (
          icon
        )}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

export { IconButton };