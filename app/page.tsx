"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { ProfileSection } from "../components/ProfileSection";
import { SOCIAL_LINKS, PERSONAL_INFO } from "../constants";
import { trackDownload, trackExternalLink } from "../lib/analytics";
import {
  SunIcon,
  MoonIcon,
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  InstagramIcon,
  BlueSkyIcon,
  FacebookIcon,
  ThreadsIcon,
} from "../assets/icons";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const iconMap = {
    GitHubIcon,
    LinkedInIcon,
    TwitterIcon,
    InstagramIcon,
    BlueSkyIcon,
    FacebookIcon,
    ThreadsIcon,
  };

  return (
    <div className="min-h-screen bg-theme-bg flex flex-col items-center justify-center px-6 py-8">
      {/* Theme Toggle - Minimal top corner */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="fixed top-6 right-6 w-10 h-10 p-2 bg-theme-card-bg border border-theme-border rounded-full hover:bg-theme-button-bg transition-all duration-200 z-50 flex items-center justify-center"
        aria-label="Toggle theme"
      >
        {!mounted ? (
          <div className="w-6 h-6" />
        ) : theme === "dark" ? (
          <SunIcon className="w-6 h-6 text-theme-icon-sun" />
        ) : (
          <MoonIcon className="w-6 h-6 text-theme-icon" />
        )}
      </button>

      {/* Main Content - Centered */}
      <div className="w-full max-w-xl mx-auto text-center space-y-12">
        {/* Profile Section */}
        <ProfileSection />

        {/* Navigation Links - Enhanced Clickable Cards */}
        <nav className="flex justify-center">
          <div className="flex gap-6">
            {[
              {
                href: "/work",
                label: "Work",
                description: "View my professional experience",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z"
                    />
                  </svg>
                ),
              },
              {
                href: "/bio",
                label: "Bio",
                description: "Learn about my journey",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                ),
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex flex-col items-center p-4 bg-theme-card-bg border border-theme-card-border rounded-2xl shadow-minimal hover:shadow-minimal-lg hover:border-theme-accent/30 transition-all duration-300 w-[160px]"
              >
                <div className="w-10 h-10 bg-theme-accent/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-theme-accent/20 transition-colors duration-300">
                  <div className="text-theme-accent group-hover:text-theme-accent transition-colors duration-300">
                    {link.icon}
                  </div>
                </div>
                <h3 className="text-theme-lg font-semibold text-theme-text mb-2 group-hover:text-theme-accent transition-colors duration-300">
                  {link.label}
                </h3>
                <p className="text-theme-sm text-theme-text-secondary text-center leading-tight">{link.description}</p>
              </Link>
            ))}
          </div>
        </nav>

        {/* Contact Email */}
        <div className="flex justify-center">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-2 px-4 py-2 text-theme-base text-theme-text-secondary hover:text-theme-accent transition-colors duration-200 rounded-lg hover:bg-theme-button-bg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {PERSONAL_INFO.email}
          </a>
        </div>

        {/* Download Resume Button */}
        <div className="flex justify-center">
          <a
            href="/assets/documents/CV_Charinda.pdf"
            download="CV_Charinda.pdf"
            onClick={() => trackDownload("CV_Charinda.pdf")}
            className="group inline-flex items-center gap-3 px-6 py-3 bg-theme-card-bg border border-theme-card-border rounded-xl shadow-minimal hover:shadow-minimal-lg hover:border-theme-accent/30 transition-all duration-300 font-medium"
          >
            <div className="w-8 h-8 bg-theme-accent/10 rounded-full flex items-center justify-center group-hover:bg-theme-accent/20 transition-colors duration-300">
              <svg
                className="w-4 h-4 text-theme-accent group-hover:text-theme-accent transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <span className="text-theme-text group-hover:text-theme-accent transition-colors duration-300">
              Download Résumé
            </span>
          </a>
        </div>

        {/* Social Media Links - Centered */}
        <div className="flex justify-center">
          <div className="flex gap-3 flex-wrap justify-center">
            {SOCIAL_LINKS.map((social) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackExternalLink(social.url, social.name)}
                  className="group w-12 h-12 bg-theme-card-bg border border-theme-card-border rounded-xl shadow-minimal hover:shadow-minimal-lg hover:border-theme-accent/30 transition-all duration-300 flex items-center justify-center"
                  aria-label={social.name}
                >
                  <div className="w-8 h-8 bg-theme-accent/10 rounded-full flex items-center justify-center group-hover:bg-theme-accent/20 transition-colors duration-300">
                    <Icon className="w-4 h-4 text-theme-accent group-hover:text-theme-accent transition-colors duration-300" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <p className="text-theme-text-secondary text-theme-xs">Made with ❤️ by Charinda Dissanayake</p>
        </div>
      </div>
    </div>
  );
}
