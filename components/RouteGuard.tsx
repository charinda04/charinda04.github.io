"use client";

import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

const allowedRoutes = ['/', '/work', '/bio'];

export const RouteGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check if current route is allowed
    if (!allowedRoutes.includes(pathname)) {
      // Redirect to home page
      router.replace('/');
    }
  }, [pathname, router]);

  // Only render children if route is allowed
  if (!allowedRoutes.includes(pathname)) {
    return (
      <div className="min-h-screen bg-theme-bg flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-theme-text mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-theme-text mb-4">Page Not Found</h2>
          <p className="text-theme-text-secondary mb-8">
            Redirecting to home page...
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};