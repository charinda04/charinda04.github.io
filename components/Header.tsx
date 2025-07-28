"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";

// import { Button } from "@/components/ui/button";
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from "@/assets/icons";

// Navigation Header Component
export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-theme-border bg-theme-bg/80 backdrop-blur-md">
      <nav className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-8 h-8 rounded-full bg-theme-accent flex items-center justify-center transition-transform group-hover:scale-105">
            <span className="font-semibold text-theme-bg text-theme-sm">C</span>
          </div>
          <h1 className="font-medium text-theme-lg text-theme-text tracking-tight">
            Charinda
          </h1>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-1">
          <Link
            href="/work"
            className="px-3 py-2 text-theme-sm text-theme-text-secondary hover:text-theme-text transition-colors duration-200 rounded-md hover:bg-theme-button-bg"
          >
            Work
          </Link>
          <Link
            href="/bio"
            className="px-3 py-2 text-theme-sm text-theme-text-secondary hover:text-theme-text transition-colors duration-200 rounded-md hover:bg-theme-button-bg"
          >
            Bio
          </Link>
          {/* <Link
            href="/blogs"
            className="px-3 py-2 text-theme-sm text-theme-text-secondary hover:text-theme-text transition-colors duration-200 rounded-md hover:bg-theme-button-bg"
          >
            Blogs
          </Link> */}
          <Link
            href="/projects"
            className="px-3 py-2 text-theme-sm text-theme-text-secondary hover:text-theme-text transition-colors duration-200 rounded-md hover:bg-theme-button-bg"
          >
            Projects
          </Link>
        </div>

        {/* Desktop Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center space-x-2">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-9 h-9 p-1.5 border border-theme-border bg-theme-card-bg hover:bg-theme-button-bg rounded-lg transition-all duration-200 shadow-sm hover:shadow-md dark:border-gray-600"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <SunIcon className="w-5 h-5 text-yellow-400" />
            ) : (
              <MoonIcon />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-8 h-8 p-0 hover:bg-theme-button-bg rounded-md transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
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
              className="block px-3 py-2 text-theme-sm text-theme-text-secondary hover:text-theme-text transition-colors duration-200 rounded-md hover:bg-theme-button-bg"
            >
              Work
            </Link>
            <Link
              href="/bio"
              onClick={closeMobileMenu}
              className="block px-3 py-2 text-theme-sm text-theme-text-secondary hover:text-theme-text transition-colors duration-200 rounded-md hover:bg-theme-button-bg"
            >
              Bio
            </Link>
            {/* <Link
              href="/blogs"
              onClick={closeMobileMenu}
              className="block px-3 py-2 text-theme-sm text-theme-text-secondary hover:text-theme-text transition-colors duration-200 rounded-md hover:bg-theme-button-bg"
            >
              Blogs
            </Link> */}
            <Link
              href="/projects"
              onClick={closeMobileMenu}
              className="block px-3 py-2 text-theme-sm text-theme-text-secondary hover:text-theme-text transition-colors duration-200 rounded-md hover:bg-theme-button-bg"
            >
              Projects
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
