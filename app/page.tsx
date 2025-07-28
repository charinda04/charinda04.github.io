"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { ProfileSection } from "../components/ProfileSection";
import { SOCIAL_LINKS } from "../constants";
import { 
  SunIcon, 
  MoonIcon,
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  InstagramIcon,
  BlueSkyIcon,
  FacebookIcon,
  ThreadsIcon
} from "../assets/icons";

export default function Home() {
  const { theme, setTheme } = useTheme();

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
        className="fixed top-6 right-6 w-10 h-10 p-2 bg-theme-card-bg border border-theme-border rounded-full hover:bg-theme-button-bg transition-all duration-200 z-50"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <SunIcon className="w-6 h-6 text-amber-400" />
        ) : (
          <MoonIcon className="w-6 h-6 text-theme-text-secondary" />
        )}
      </button>

      {/* Main Content - Centered */}
      <div className="w-full max-w-xl mx-auto text-center space-y-12">
        
        {/* Profile Section */}
        <ProfileSection />
        
        {/* Navigation Links - Centered */}
        <nav className="flex justify-center">
          <div className="flex gap-8">
            {[
              { href: "/work", label: "Work" },
              { href: "/bio", label: "Bio" },
              { href: "/projects", label: "Projects" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-theme-lg font-medium text-theme-text-secondary hover:text-theme-accent transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
        
        {/* Social Media Links - Centered */}
        <div className="flex justify-center">
          <div className="flex gap-4 flex-wrap justify-center">
            {SOCIAL_LINKS.map((social) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 p-2 text-theme-text-secondary hover:text-theme-accent transition-colors duration-200"
                  aria-label={social.name}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>
        
      </div>
    </div>
  );
}
