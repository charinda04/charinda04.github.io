"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Image from "next/image";

// import { Button } from "@/components/ui/button";
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from "@/assets/icons";
import { AccentColorPicker } from "./AccentColorPicker";
import { trackButtonClick } from "@/lib/analytics";

// Navigation Header Component
export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
          <Link
            href="/work"
            className={`px-3 py-2 text-theme-sm transition-colors duration-200 rounded-md hover:bg-theme-button-bg ${
              pathname === "/work"
                ? "text-theme-accent bg-theme-accent/10 font-medium"
                : "text-theme-text-secondary hover:text-theme-text"
            }`}
          >
            Work
          </Link>
          <Link
            href="/projects"
            className={`px-3 py-2 text-theme-sm transition-colors duration-200 rounded-md hover:bg-theme-button-bg ${
              pathname === "/projects"
                ? "text-theme-accent bg-theme-accent/10 font-medium"
                : "text-theme-text-secondary hover:text-theme-text"
            }`}
          >
            Projects
          </Link>
          <Link
            href="/bio"
            className={`px-3 py-2 text-theme-sm transition-colors duration-200 rounded-md hover:bg-theme-button-bg ${
              pathname === "/bio"
                ? "text-theme-accent bg-theme-accent/10 font-medium"
                : "text-theme-text-secondary hover:text-theme-text"
            }`}
          >
            Bio
          </Link>
        </div>

        {/* Desktop Theme Toggle, Accent Color Picker & Mobile Menu Button */}
        <div className="flex items-center space-x-2">
          {/* Accent Color Picker */}
          <AccentColorPicker />
          
          {/* Theme Toggle */}
          <button
            onClick={() => {
              const newTheme = theme === "dark" ? "light" : "dark";
              setTheme(newTheme);
              trackButtonClick(`Theme Toggle - ${newTheme}`, window.location.pathname);
            }}
            className="w-9 h-9 p-1.5 border border-theme-border bg-theme-card-bg hover:bg-theme-button-bg rounded-lg transition-all duration-200 shadow-minimal hover:shadow-minimal-lg flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <SunIcon className="w-5 h-5 text-theme-icon-sun" />
            ) : (
              <MoonIcon className="w-5 h-5 text-theme-icon" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              trackButtonClick("Mobile Menu Toggle", window.location.pathname);
            }}
            className="md:hidden w-8 h-8 p-0 hover:bg-theme-button-bg rounded-md transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <CloseIcon className="w-5 h-5 text-theme-text" />
            ) : (
              <MenuIcon className="w-5 h-5 text-theme-text" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-theme-border bg-theme-bg/95 backdrop-blur-md">
          <div className="max-w-4xl mx-auto px-6 py-3 space-y-1">
            <Link
              href="/work"
              onClick={closeMobileMenu}
              className={`block px-3 py-2 text-theme-sm transition-colors duration-200 rounded-md hover:bg-theme-button-bg ${
                pathname === "/work"
                  ? "text-theme-accent bg-theme-accent/10 font-medium"
                  : "text-theme-text-secondary hover:text-theme-text"
              }`}
            >
              Work
            </Link>
            <Link
              href="/projects"
              onClick={closeMobileMenu}
              className={`block px-3 py-2 text-theme-sm transition-colors duration-200 rounded-md hover:bg-theme-button-bg ${
                pathname === "/projects"
                  ? "text-theme-accent bg-theme-accent/10 font-medium"
                  : "text-theme-text-secondary hover:text-theme-text"
              }`}
            >
              Projects
            </Link>
            <Link
              href="/bio"
              onClick={closeMobileMenu}
              className={`block px-3 py-2 text-theme-sm transition-colors duration-200 rounded-md hover:bg-theme-button-bg ${
                pathname === "/bio"
                  ? "text-theme-accent bg-theme-accent/10 font-medium"
                  : "text-theme-text-secondary hover:text-theme-text"
              }`}
            >
              Bio
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
