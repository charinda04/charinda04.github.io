import { Suspense, lazy, ComponentType } from "react";
import type { BaseComponentProps } from "@/types";

interface LazyIconProps extends BaseComponentProps {
  iconName: string;
  fallback?: React.ReactNode;
  size?: string;
}

// Cache for lazy-loaded icon components
const iconCache = new Map<string, ComponentType<any>>();

function createLazyIcon(iconName: string): ComponentType<any> {
  if (iconCache.has(iconName)) {
    return iconCache.get(iconName)!;
  }

  const LazyIconComponent = lazy(() => 
    import(`@/assets/icons/${iconName}.tsx`).catch(() => {
      console.warn(`Icon ${iconName} not found`);
      // Return a default empty component
      return { default: () => <div className="w-4 h-4 bg-gray-300 rounded" /> };
    })
  );

  iconCache.set(iconName, LazyIconComponent);
  return LazyIconComponent;
}

export function LazyIcon({ 
  iconName, 
  className, 
  fallback = <div className="w-4 h-4 bg-gray-300 rounded animate-pulse" />,
  ...props 
}: LazyIconProps) {
  const IconComponent = createLazyIcon(iconName);

  return (
    <Suspense fallback={fallback}>
      <IconComponent className={className} {...props} />
    </Suspense>
  );
}