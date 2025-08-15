"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useThemeControls } from "@/hooks";
import type { AccentColorPickerProps, AccentColorId } from "@/types";

export const AccentColorPicker: React.FC<AccentColorPickerProps> = ({ onColorChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { selectedAccentColor, accentColors, changeAccentColor, mounted } = useThemeControls();

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
    return undefined;
  }, [isOpen, handleClickOutside]);

  // Handle color selection
  const handleColorSelect = useCallback(
    (colorId: AccentColorId) => {
      changeAccentColor(colorId);
      setIsOpen(false);
      onColorChange?.(colorId);
    },
    [changeAccentColor, onColorChange]
  );

  // Loading state during hydration
  if (!mounted) {
    return (
      <div className="w-9 h-9 p-1.5 border border-theme-border bg-theme-card-bg rounded-lg">
        <div className="w-5 h-5 rounded-full border border-theme-border bg-gray-300" />
      </div>
    );
  }

  const selectedColorData = accentColors.find((c) => c.id === selectedAccentColor);

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
            {accentColors.map((color, index) => (
              <button
                key={color.id}
                onClick={() => handleColorSelect(color.id)}
                className={`w-7 h-7 rounded-full border transition-all duration-150 hover:scale-105 animate-fade-in animate-stagger-${
                  index + 1
                } ${
                  selectedAccentColor === color.id
                    ? "border-theme-text border-2 scale-105"
                    : "border-theme-border hover:border-theme-text-secondary"
                }`}
                style={{ backgroundColor: color.color }}
                aria-label={`Select ${color.name} accent color`}
                aria-selected={selectedAccentColor === color.id}
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
