"use client";

import { useEffect, useState } from "react";

// Countdown Timer Component
export const CountdownTimer = () => {
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
      <h2 className="font-bold mb-8 text-theme-3xl text-theme-text">
        Launch Countdown
      </h2>
      <div className="flex gap-6 justify-center">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div
            key={unit}
            className="px-6 py-4 rounded-xl text-center min-w-[80px] shadow-lg border border-theme-card-border bg-theme-card-bg"
          >
            <div className="font-bold font-mono text-theme-3xl text-theme-text">
              {value}
            </div>
            <div className="font-medium mt-1 text-theme-sm text-theme-text-secondary">
              {unit.toUpperCase()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
