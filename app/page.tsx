"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Calculate target date (1 week from now)
    const targetDate = new Date("2025-07-25");
    targetDate.setDate(targetDate.getDate() + 7);

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Update immediately
    updateCountdown();

    // Update every second
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        {/* Countdown Timer */}
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Launch Countdown
          </h2>
          <div className="flex gap-4 justify-center">
            <div className="bg-black/[.05] dark:bg-white/[.06] px-4 py-3 rounded-lg text-center min-w-[60px]">
              <div className="text-2xl font-bold font-mono">
                {timeLeft.days}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                DAYS
              </div>
            </div>
            <div className="bg-black/[.05] dark:bg-white/[.06] px-4 py-3 rounded-lg text-center min-w-[60px]">
              <div className="text-2xl font-bold font-mono">
                {timeLeft.hours}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                HOURS
              </div>
            </div>
            <div className="bg-black/[.05] dark:bg-white/[.06] px-4 py-3 rounded-lg text-center min-w-[60px]">
              <div className="text-2xl font-bold font-mono">
                {timeLeft.minutes}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                MINUTES
              </div>
            </div>
            <div className="bg-black/[.05] dark:bg-white/[.06] px-4 py-3 rounded-lg text-center min-w-[60px]">
              <div className="text-2xl font-bold font-mono">
                {timeLeft.seconds}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                SECONDS
              </div>
            </div>
          </div>
        </div>

        {/* Work in Progress Notice */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 text-center">
          <p className="text-yellow-800 dark:text-yellow-200 font-medium">
            🚧 Work in Progress
          </p>
          <p className="text-yellow-700 dark:text-yellow-300 text-sm mt-1">
            This application is currently under development. Stay tuned for
            updates!
          </p>
        </div>
      </main>
    </div>
  );
}
