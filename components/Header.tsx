"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";

import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from "@/assets/icons";

// Navigation Header Component
export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full px-6 py-4 border-b border-theme-border bg-theme-bg backdrop-blur-sm">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-theme-accent">
            <span className="font-bold text-white text-theme-lg">C</span>
          </div>
          <h1 className="font-bold text-theme-xl text-theme-text">
            Charinda
          </h1>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/work"
            className="text-theme-text hover:text-theme-accent transition-colors duration-200 font-medium"
          >
            Work
          </Link>
          <Link
            href="/bio"
            className="text-theme-text hover:text-theme-accent transition-colors duration-200 font-medium"
          >
            Bio
          </Link>
          <Link
            href="/blogs"
            className="text-theme-text hover:text-theme-accent transition-colors duration-200 font-medium"
          >
            Blogs
          </Link>
          <Link
            href="/projects"
            className="text-theme-text hover:text-theme-accent transition-colors duration-200 font-medium"
          >
            Projects
          </Link>
        </div>

        {/* Desktop Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg transition-colors duration-200 bg-theme-button-bg text-theme-button-text hover:bg-theme-button-hover"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors duration-200 bg-theme-button-bg text-theme-button-text hover:bg-theme-button-hover"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-theme-bg border-t border-theme-card-border backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 py-4 space-y-4">
            <Link
              href="/work"
              onClick={closeMobileMenu}
              className="block text-theme-text hover:text-theme-accent transition-colors duration-200 font-medium py-2"
            >
              Work
            </Link>
            <Link
              href="/bio"
              onClick={closeMobileMenu}
              className="block text-theme-text hover:text-theme-accent transition-colors duration-200 font-medium py-2"
            >
              Bio
            </Link>
            <Link
              href="/blogs"
              onClick={closeMobileMenu}
              className="block text-theme-text hover:text-theme-accent transition-colors duration-200 font-medium py-2"
            >
              Blogs
            </Link>
            <Link
              href="/projects"
              onClick={closeMobileMenu}
              className="block text-theme-text hover:text-theme-accent transition-colors duration-200 font-medium py-2"
            >
              Projects
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
