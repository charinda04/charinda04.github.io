import type { Metadata } from "next";
import { SEO_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
  title: SEO_CONFIG.blogs.title,
  description: SEO_CONFIG.blogs.description,
  keywords: SEO_CONFIG.blogs.keywords,
  openGraph: {
    title: SEO_CONFIG.blogs.title,
    description: SEO_CONFIG.blogs.description,
    url: `${SEO_CONFIG.siteUrl}/blogs`,
    type: "website",
  },
  alternates: {
    canonical: `${SEO_CONFIG.siteUrl}/blogs`,
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}