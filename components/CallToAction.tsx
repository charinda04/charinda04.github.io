"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface CallToActionProps {
  title?: string;
  description?: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  className?: string;
}

export const CallToAction = ({
  title = "Let's Work Together",
  description = "I'm always interested in new opportunities and challenging projects. Let's discuss how we can bring your ideas to life.",
  primaryButton = {
    text: "View My Projects",
    href: "/projects"
  },
  secondaryButton = {
    text: "Get In Touch",
    href: "/"
  },
  className = ""
}: CallToActionProps) => {
  return (
    <Card className={`border-theme-border bg-theme-card-bg shadow-minimal max-w-2xl mx-auto ${className}`}>
      <CardContent className="pt-6 text-center space-minimal-sm">
        <h3 className="text-theme-xl font-medium text-theme-text">
          {title}
        </h3>
        <p className="text-theme-sm text-theme-text-secondary leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {primaryButton && (
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white border-0 font-medium shadow-sm"
            >
              <Link href={primaryButton.href}>{primaryButton.text}</Link>
            </Button>
          )}
          {secondaryButton && (
            <Button
              asChild
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-400 dark:hover:text-white font-medium shadow-sm"
            >
              <Link href={secondaryButton.href}>{secondaryButton.text}</Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};