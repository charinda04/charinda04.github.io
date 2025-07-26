"use client";

import {
  BlueSkyIcon,
  FacebookIcon,
  GitHubIcon,
  LinkedInIcon,
  ThreadsIcon,
  TwitterIcon,
} from "@/assets/icons";

export const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://facebook.com/charinda",
      icon: <FacebookIcon />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/charinda",
      icon: <TwitterIcon />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/charinda",
      icon: <LinkedInIcon />,
    },
    {
      name: "GitHub",
      url: "https://github.com/charinda",
      icon: <GitHubIcon />,
    },
    {
      name: "BlueSky",
      url: "https://bsky.app/profile/charinda",
      icon: <BlueSkyIcon />,
    },
    {
      name: "Threads",
      url: "https://threads.net/@charinda",
      icon: <ThreadsIcon />,
    },
  ];

  return (
    <footer className="w-full bg-theme-card-bg border-t border-theme-card-border py-8 mt-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Media Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-theme-accent/10 text-theme-text-secondary hover:bg-theme-accent hover:text-white transition-all duration-300 hover:scale-110"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-theme-text-secondary text-theme-sm">
              © 2025 Charinda Dissanayake. All rights reserved.
            </p>
            <p className="text-theme-text-secondary text-theme-xs mt-1">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};