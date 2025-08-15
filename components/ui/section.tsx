import { cn } from "@/lib/utils";
import type { BaseComponentProps } from "@/types";

interface SectionProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  centered?: boolean;
  spacing?: "minimal" | "minimal-sm" | "minimal-lg";
}

export function Section({ 
  children, 
  className, 
  title, 
  subtitle, 
  centered = false, 
  spacing = "minimal" 
}: SectionProps) {
  return (
    <section className={cn(`space-${spacing}`, className)}>
      {(title || subtitle) && (
        <div className={cn("mb-8", centered && "text-center")}>
          {title && (
            <h2 className="text-theme-2xl font-semibold text-theme-text mb-2">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-theme-base text-theme-text-secondary max-w-xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}