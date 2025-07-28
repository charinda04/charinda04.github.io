"use client";

// import {
//   BlueSkyIcon,
//   FacebookIcon,
//   GitHubIcon,
//   LinkedInIcon,
//   ThreadsIcon,
//   TwitterIcon,
// } from "@/assets/icons";

export const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://web.facebook.com/charinda1/",
      icon: "F",
    },
    {
      name: "Twitter",
      url: "https://x.com/Charinda_D",
      icon: "T",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/charinda-dissanayake/",
      icon: "L",
    },
    {
      name: "GitHub",
      url: "https://github.com/charinda04",
      icon: "G",
    },
    {
      name: "BlueSky",
      url: "https://bsky.app/profile/charinda.bsky.social",
      icon: "B",
    },
    {
      name: "Threads",
      url: "https://www.threads.com/@charinda_jayath",
      icon: "Th",
    },
  ];

  return (
    <footer className="w-full border-t border-theme-border bg-theme-bg py-6">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Media Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-md text-theme-text-secondary hover:text-theme-text hover:bg-theme-button-bg transition-colors duration-200"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
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
