"use client";

import { CountdownTimer } from "@/components/CountdownTimer";
import { Header } from "@/components/Header";
import { ProfileSection } from "@/components/ProfileSection";

// Work in Progress Component
function WorkInProgressNotice() {
  return (
    <div className="rounded-xl p-6 text-center max-w-md shadow-lg border border-theme-warning-border bg-theme-warning-bg">
      <p className="font-semibold mb-2 text-theme-lg text-theme-warning-text">
        🚧 Work in Progress
      </p>
      <p className="text-theme-warning-text-secondary">
        This application is currently under development. Stay tuned for updates!
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="font-sans min-h-screen transition-colors duration-300 bg-theme-bg">
      <Header />

      <main className="flex flex-col items-center justify-center px-8 py-16 min-h-[calc(100vh-80px)]">
        <ProfileSection />
        <CountdownTimer />
        <WorkInProgressNotice />
      </main>
    </div>
  );
}
