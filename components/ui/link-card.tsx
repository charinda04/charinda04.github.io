import Link from "next/link";
import { cn } from "@/lib/utils";
import type { BaseComponentProps } from "@/types";

interface LinkCardProps extends BaseComponentProps {
  href: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  variant?: "default" | "compact";
  external?: boolean;
}

export function LinkCard({ 
  href, 
  title, 
  description, 
  icon, 
  className, 
  variant = "default",
  external = false
}: LinkCardProps) {
  const baseClasses = cn(
    "group flex items-center p-3 sm:p-4 bg-theme-card-bg border border-theme-card-border rounded-2xl shadow-minimal hover:shadow-minimal-lg hover:border-theme-accent/30 transition-all duration-300 hover-lift",
    variant === "compact" ? "flex-row gap-3" : "flex-col text-center w-full sm:w-[160px]",
    className
  );

  const linkProps = external 
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link href={href} className={baseClasses} {...linkProps}>
      {icon && (
        <div className={cn(
          "bg-theme-accent/10 rounded-full flex items-center justify-center group-hover:bg-theme-accent/20 transition-colors duration-300",
          variant === "compact" ? "w-8 h-8 flex-shrink-0" : "w-10 h-10 mb-3"
        )}>
          <div className="text-theme-accent group-hover:text-theme-accent transition-colors duration-300">
            {icon}
          </div>
        </div>
      )}
      <div className={cn(variant === "compact" && "flex-1")}>
        <h3 className={cn(
          "font-semibold text-theme-text group-hover:text-theme-accent transition-colors duration-300",
          variant === "compact" ? "text-theme-base mb-1" : "text-theme-lg mb-2"
        )}>
          {title}
        </h3>
        {description && (
          <p className={cn(
            "text-theme-text-secondary leading-tight",
            variant === "compact" ? "text-theme-sm" : "text-theme-sm text-center"
          )}>
            {description}
          </p>
        )}
      </div>
    </Link>
  );
}