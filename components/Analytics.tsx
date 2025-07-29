"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackPageView } from "@/lib/analytics";

export const Analytics: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Track page view when pathname changes
    if (typeof window !== 'undefined') {
      const url = window.location.href;
      const title = document.title;
      
      // Small delay to ensure the page title is updated
      const timeoutId = setTimeout(() => {
        trackPageView(url, title);
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [pathname]);

  return null; // This component doesn't render anything
};