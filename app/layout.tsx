import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { RouteGuard } from "../components/RouteGuard";
import { ConditionalHeader } from "../components/ConditionalHeader";
import { Analytics } from "../components/Analytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { SEO_CONFIG, STRUCTURED_DATA } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SEO_CONFIG.siteUrl),
  title: SEO_CONFIG.main.title,
  description: SEO_CONFIG.main.description,
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  keywords: SEO_CONFIG.main.keywords,
  authors: [{ name: SEO_CONFIG.author }],
  creator: SEO_CONFIG.author, 
  publisher: SEO_CONFIG.author,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SEO_CONFIG.siteUrl,
    title: SEO_CONFIG.main.title,
    description: SEO_CONFIG.main.description,
    siteName: SEO_CONFIG.siteName,
    images: [
      {
        url: SEO_CONFIG.profileImage,
        width: 1200,
        height: 630,
        alt: "Charinda Dissanayake - Senior Software Engineer & React Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Charinda - Senior Software Engineer & React Expert",
    description: "8+ years building exceptional React, Next.js & React Native applications | Senior Software Engineer",
    creator: "@Charinda_D",
    images: [SEO_CONFIG.profileImage],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: SEO_CONFIG.siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />

        {/* Google Analytics - Only in production */}
        {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                  });
                `,
              }}
            />
          </>
        )}

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-theme-bg text-theme-text`} style={{backgroundColor: 'var(--theme-bg)', color: 'var(--theme-text)'}}>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" themes={["light", "dark"]} enableSystem={false}>
          <Analytics />
          <ConditionalHeader />
          <RouteGuard>{children}</RouteGuard>
        </ThemeProvider>
      </body>
    </html>
  );
}
