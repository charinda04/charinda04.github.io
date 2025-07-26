"use client";

import { CountdownTimer } from "@/components/CountdownTimer";
import { Header } from "@/components/Header";
import { useState, useEffect } from "react";

// Work in Progress Component
interface WorkInProgressNoticeProps {
  isDark: boolean;
}

function WorkInProgressNotice({ isDark }: WorkInProgressNoticeProps) {
  return (
    <div
      className={`rounded-xl p-6 text-center max-w-md shadow-lg ${
        isDark
          ? "bg-yellow-900/30 border border-yellow-700/50"
          : "bg-yellow-50/80 border border-yellow-200"
      }`}
    >
      <p
        className={`font-semibold text-lg mb-2 ${
          isDark ? "text-yellow-300" : "text-yellow-800"
        }`}
      >
        🚧 Work in Progress
      </p>
      <p className={`${isDark ? "text-yellow-200" : "text-yellow-700"}`}>
        This application is currently under development. Stay tuned for updates!
      </p>
    </div>
  );
}

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      className="font-sans min-h-screen transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#202023" : "#f0e7db" }}
    >
      <Header isDark={isDark} toggleTheme={toggleTheme} />

      <main className="flex flex-col items-center justify-center px-8 py-16 min-h-[calc(100vh-80px)]">
        <CountdownTimer isDark={isDark} />
        <WorkInProgressNotice isDark={isDark} />
      </main>
    </div>
  );
}
