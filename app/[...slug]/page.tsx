"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CatchAllPage() {
  const router = useRouter();

  useEffect(() => {
    // Immediately redirect any unmatched route to home page
    router.replace('/');
  }, [router]);

  return (
    <div className="min-h-screen bg-theme-bg flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-theme-text mb-4">Page Not Available</h1>
        <p className="text-theme-text-secondary">
          This page is not available. Redirecting to home page.
        </p>
      </div>
    </div>
  );
}