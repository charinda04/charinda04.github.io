"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Header } from "./Header";

export const ConditionalHeader = () => {
  const pathname = usePathname();
  
  useEffect(() => {
    // Add/remove padding class based on whether header is shown
    if (pathname === "/") {
      document.body.classList.remove("page-with-header");
    } else {
      document.body.classList.add("page-with-header");
    }
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove("page-with-header");
    };
  }, [pathname]);
  
  // Don't show header on the root page
  if (pathname === "/") {
    return null;
  }
  
  return <Header />;
};