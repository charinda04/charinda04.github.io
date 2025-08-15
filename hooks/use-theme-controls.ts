import { useState, useEffect, useCallback } from "react";
import { useTheme } from "next-themes";
import type { AccentColorId } from "@/types";
import { trackButtonClick } from "@/lib/analytics";

const ACCENT_COLORS = [
  { id: "pink", color: "#ec4899", name: "Pink" },
  { id: "orange", color: "#f97316", name: "Orange" },
  { id: "green", color: "#10b981", name: "Green" },
  { id: "blue", color: "#3b82f6", name: "Blue" },
  { id: "purple", color: "#8b5cf6", name: "Purple" },
  { id: "cyan", color: "#05eaea", name: "Cyan" },
] as const;

export function useThemeControls() {
  const { theme, setTheme } = useTheme();
  const [selectedAccentColor, setSelectedAccentColor] = useState<AccentColorId>("purple");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Apply accent color to CSS variables
  const applyAccentColor = useCallback((colorId: AccentColorId) => {
    const color = ACCENT_COLORS.find((c) => c.id === colorId);
    if (color && typeof document !== "undefined") {
      const root = document.documentElement;
      root.style.setProperty("--theme-accent", color.color);
      root.style.setProperty("--theme-text-accent", color.color);
    }
  }, []);

  // Load saved accent color from localStorage
  useEffect(() => {
    if (!mounted) return;

    try {
      const savedColor = localStorage.getItem("accent-color") as AccentColorId;
      if (savedColor && ACCENT_COLORS.find((c) => c.id === savedColor)) {
        setSelectedAccentColor(savedColor);
        applyAccentColor(savedColor);
      }
    } catch (error) {
      console.warn("localStorage not available:", error);
    }
  }, [mounted, applyAccentColor]);

  // Toggle theme with analytics tracking
  const toggleTheme = useCallback(() => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    trackButtonClick(`Theme Toggle - ${newTheme}`, window.location.pathname);
  }, [theme, setTheme]);

  // Change accent color with persistence and analytics
  const changeAccentColor = useCallback((colorId: AccentColorId) => {
    setSelectedAccentColor(colorId);
    applyAccentColor(colorId);
    
    try {
      localStorage.setItem("accent-color", colorId);
    } catch (error) {
      console.warn("Failed to save color preference:", error);
    }

    const colorName = ACCENT_COLORS.find((c) => c.id === colorId)?.name || colorId;
    trackButtonClick(`Accent Color - ${colorName}`, window.location.pathname);
  }, [applyAccentColor]);

  return {
    theme,
    mounted,
    selectedAccentColor,
    accentColors: ACCENT_COLORS,
    toggleTheme,
    changeAccentColor,
  };
}