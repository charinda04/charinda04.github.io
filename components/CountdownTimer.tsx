"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  isDark: boolean;
}

// Countdown Timer Component
export const CountdownTimer = ({ isDark }: CountdownTimerProps) => {
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
    <div className="text-center mb-12">
      <h2
        className={`text-3xl font-bold mb-8 ${
          isDark ? "text-white" : "text-gray-800"
        }`}
      >
        Launch Countdown
      </h2>
      <div className="flex gap-6 justify-center">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div
            key={unit}
            className={`px-6 py-4 rounded-xl text-center min-w-[80px] shadow-lg ${
              isDark
                ? "bg-gray-800/50 border border-gray-700"
                : "bg-white/70 border border-gray-200"
            }`}
          >
            <div
              className={`text-3xl font-bold font-mono ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              {value}
            </div>
            <div
              className={`text-sm font-medium mt-1 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {unit.toUpperCase()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
