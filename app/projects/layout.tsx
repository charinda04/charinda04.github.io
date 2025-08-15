import type { Metadata } from "next";
import { SEO_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
  title: SEO_CONFIG.projects.title,
  description: SEO_CONFIG.projects.description,
  keywords: SEO_CONFIG.projects.keywords,
  openGraph: {
    title: SEO_CONFIG.projects.title,
    description: SEO_CONFIG.projects.description,
    url: `${SEO_CONFIG.siteUrl}/projects`,
    type: "website",
  },
  alternates: {
    canonical: `${SEO_CONFIG.siteUrl}/projects`,
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}