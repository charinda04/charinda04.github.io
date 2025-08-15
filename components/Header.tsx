"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from "@/assets/icons";
import { AccentColorPicker } from "./AccentColorPicker";
import { IconButton } from "@/components/ui";
import { useThemeControls } from "@/hooks";
import type { NavigationLink } from "@/types";

const NAVIGATION_LINKS: NavigationLink[] = [
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/bio", label: "Bio" },
];

// Navigation Header Component
export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme, mounted } = useThemeControls();

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-theme-border bg-theme-bg/95 backdrop-blur-md shadow-sm">
      <nav className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-theme-accent transition-transform group-hover:scale-105 shadow-sm">
            <Image
              src="/assets/images/profile.jpg"
              alt="Charinda Dissanayake"
              width={32}
              height={32}
              className="w-full h-full object-cover brightness-85"
              priority
            />
          </div>
          <h1 className="font-medium text-theme-lg text-theme-text tracking-tight">Charinda</h1>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-1">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-theme-sm transition-colors duration-200 rounded-md hover:bg-theme-button-bg ${
                pathname === link.href
                  ? "text-theme-accent bg-theme-accent/10 font-medium"
                  : "text-theme-text-secondary hover:text-theme-text"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Theme Toggle, Accent Color Picker & Mobile Menu Button */}
        <div className="flex items-center space-x-2">
          {/* Accent Color Picker */}
          <AccentColorPicker />
          
          {/* Theme Toggle */}
          <IconButton
            onClick={toggleTheme}
            icon={
              !mounted ? (
                <div className="w-5 h-5" />
              ) : theme === "dark" ? (
                <SunIcon className="w-5 h-5 text-theme-icon-sun" />
              ) : (
                <MoonIcon className="w-5 h-5 text-theme-icon" />
              )
            }
            aria-label="Toggle theme"
          />

          {/* Mobile Menu Button */}
          <IconButton
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            icon={
              isMobileMenuOpen ? (
                <CloseIcon className="w-5 h-5 text-theme-text" />
              ) : (
                <MenuIcon className="w-5 h-5 text-theme-text" />
              )
            }
            className="md:hidden"
            size="sm"
            variant="ghost"
            aria-label="Toggle mobile menu"
          />
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-theme-border bg-theme-bg/95 backdrop-blur-md">
          <div className="max-w-4xl mx-auto px-6 py-3 space-y-1">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className={`block px-3 py-2 text-theme-sm transition-colors duration-200 rounded-md hover:bg-theme-button-bg ${
                  pathname === link.href
                    ? "text-theme-accent bg-theme-accent/10 font-medium"
                    : "text-theme-text-secondary hover:text-theme-text"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
