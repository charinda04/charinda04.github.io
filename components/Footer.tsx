"use client";

import {
  BlueSkyIcon,
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  ThreadsIcon,
  TwitterIcon,
} from "@/assets/icons";
import { SOCIAL_LINKS } from "@/constants";

export const Footer = () => {
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
    <footer className="w-full border-t border-theme-border bg-theme-bg py-6">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Media Links */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 p-1.5 flex items-center justify-center rounded-md text-theme-text-secondary hover:text-theme-accent hover:bg-theme-button-bg transition-colors duration-200"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-theme-text-secondary text-theme-xs">
              © 2025 Charinda Dissanayake
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
