"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { trackButtonClick } from "@/lib/analytics";

const ACCENT_COLORS = [
  { id: "pink", color: "#ec4899", name: "Pink" },
  { id: "orange", color: "#f97316", name: "Orange" },
  { id: "green", color: "#10b981", name: "Green" },
  { id: "blue", color: "#3b82f6", name: "Blue" },
  { id: "purple", color: "#8b5cf6", name: "Purple" },
  { id: "cyan", color: "#05eaea", name: "Cyan" },
] as const;

export type AccentColorId = (typeof ACCENT_COLORS)[number]["id"];

interface AccentColorPickerProps {
  onColorChange?: (colorId: AccentColorId) => void;
}

export const AccentColorPicker: React.FC<AccentColorPickerProps> = ({ onColorChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState<AccentColorId>("purple");
  const [isClient, setIsClient] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Ensure component is mounted on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Memoize color data to prevent unnecessary recalculations
  const selectedColorData = useMemo(() => ACCENT_COLORS.find((c) => c.id === selectedColor), [selectedColor]);

  // Optimized color application function
  const applyAccentColor = useCallback((colorId: AccentColorId) => {
    const color = ACCENT_COLORS.find((c) => c.id === colorId);
    if (color && typeof document !== "undefined") {
      const root = document.documentElement;
      root.style.setProperty("--theme-accent", color.color);
      root.style.setProperty("--theme-text-accent", color.color);
    }
  }, []);

  // Optimized click outside handler
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen, handleClickOutside]);

  // Load saved color from localStorage with proper hydration handling
  useEffect(() => {
    if (!isClient) return;

    try {
      const savedColor = localStorage.getItem("accent-color") as AccentColorId;
      if (savedColor && ACCENT_COLORS.find((c) => c.id === savedColor)) {
        setSelectedColor(savedColor);
        applyAccentColor(savedColor);
      }
    } catch (error) {
      // Fallback if localStorage is not available
      console.warn("localStorage not available:", error);
    }
  }, [isClient, applyAccentColor]);

  // Optimized color selection handler
  const handleColorSelect = useCallback(
    (colorId: AccentColorId) => {
      setSelectedColor(colorId);
      setIsOpen(false);

      // Apply the color immediately
      applyAccentColor(colorId);

      // Save to localStorage with error handling
      try {
        localStorage.setItem("accent-color", colorId);
      } catch (error) {
        console.warn("Failed to save color preference:", error);
      }

      // Track the color selection
      const colorName = ACCENT_COLORS.find((c) => c.id === colorId)?.name || colorId;
      trackButtonClick(`Accent Color - ${colorName}`, window.location.pathname);

      // Call the callback if provided
      onColorChange?.(colorId);
    },
    [applyAccentColor, onColorChange]
  );

  // Don't render until client-side hydration is complete
  if (!isClient) {
    return (
      <div className="w-9 h-9 p-1.5 border border-theme-border bg-theme-card-bg rounded-lg">
        <div className="w-5 h-5 rounded-full border border-theme-border bg-gray-300" />
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-9 h-9 p-1.5 border border-theme-border bg-theme-card-bg hover:bg-theme-button-bg rounded-lg transition-all duration-200 shadow-minimal hover:shadow-minimal-lg flex items-center justify-center hover-lift"
        aria-label="Change accent color"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        role="button"
      >
        <div
          className="w-5 h-5 rounded-full border border-theme-border transition-transform duration-200 hover:scale-110"
          style={{ backgroundColor: selectedColorData?.color }}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          className="absolute top-full right-0 mt-1 p-2 bg-theme-card-bg border border-theme-border rounded-lg shadow-minimal-lg backdrop-blur-sm z-50 animate-scale-in"
          role="listbox"
          aria-label="Accent color options"
        >
          <div className="flex flex-col gap-1.5">
            {ACCENT_COLORS.map((color, index) => (
              <button
                key={color.id}
                onClick={() => handleColorSelect(color.id)}
                className={`w-7 h-7 rounded-full border transition-all duration-150 hover:scale-105 animate-fade-in animate-stagger-${
                  index + 1
                } ${
                  selectedColor === color.id
                    ? "border-theme-text border-2 scale-105"
                    : "border-theme-border hover:border-theme-text-secondary"
                }`}
                style={{ backgroundColor: color.color }}
                aria-label={`Select ${color.name} accent color`}
                aria-selected={selectedColor === color.id}
                role="option"
                title={color.name}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
