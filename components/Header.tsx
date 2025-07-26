"use client";

import { useTheme } from "next-themes";

import { MoonIcon, SunIcon } from "@/assets/icons";

// Navigation Header Component
export const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="w-full px-6 py-4 border-b border-theme-border">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-theme-accent">
            <span className="font-bold text-white text-theme-lg">L</span>
          </div>
          <h1 className="font-bold text-theme-xl text-theme-text">
            Launch Timer
          </h1>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-lg transition-colors duration-200 bg-theme-button-bg text-theme-button-text hover:bg-theme-button-hover"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
      </nav>
    </header>
  );
};
