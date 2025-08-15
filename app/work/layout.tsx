import type { Metadata } from "next";
import { SEO_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
  title: SEO_CONFIG.work.title,
  description: SEO_CONFIG.work.description,
  keywords: SEO_CONFIG.work.keywords,
  openGraph: {
    title: SEO_CONFIG.work.title,
    description: SEO_CONFIG.work.description,
    url: `${SEO_CONFIG.siteUrl}/work`,
    type: "website",
  },
  alternates: {
    canonical: `${SEO_CONFIG.siteUrl}/work`,
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}