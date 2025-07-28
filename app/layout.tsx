import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { RouteGuard } from "../components/RouteGuard";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://charinda04.github.io"),
  title: "Charinda Dissanayake - Senior Software Engineer | React, Next.js & React Native Expert",
  description:
    "Charinda Dissanayake is a Senior Software Engineer and Frontend Engineer specializing in React, Next.js, React Native, and full-stack development. Expert in mobile and web applications with 8+ years of experience.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  keywords: [
    "Charinda",
    "Charinda Dissanayake",
    "React",
    "React Native",
    "Next.js",
    "NextJS",
    "Frontend Engineer",
    "Fullstack Engineer",
    "Senior Software Engineer",
    "JavaScript",
    "TypeScript",
    "Mobile Development",
    "Web Development",
    "Software Engineer Sri Lanka",
  ],
  authors: [{ name: "Charinda Dissanayake" }],
  creator: "Charinda Dissanayake",
  publisher: "Charinda Dissanayake",
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
    url: "https://charinda04.github.io",
    title: "Charinda Dissanayake - Senior Software Engineer | React, Next.js & React Native Expert",
    description:
      "Senior Software Engineer specializing in React, Next.js, React Native, and full-stack development. Expert in mobile and web applications.",
    siteName: "Charinda Dissanayake Portfolio",
    images: [
      {
        url: "/assets/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Charinda Dissanayake - Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Charinda Dissanayake - Senior Software Engineer",
    description: "React, Next.js & React Native Expert | Frontend & Fullstack Engineer",
    creator: "@Charinda_D",
    images: ["/assets/images/profile.jpg"],
  },
  verification: {
    google: "your-google-verification-code", // You'll need to add this later
  },
  alternates: {
    canonical: "https://charinda04.github.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Charinda Dissanayake",
    jobTitle: "Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in React, React Native, and full-stack development with 8+ years of experience.",
    url: "https://charinda04.github.io",
    image: "https://charinda04.github.io/assets/images/profile.jpg",
    sameAs: [
      "https://github.com/charinda04",
      "https://www.linkedin.com/in/charinda-dissanayake/",
      "https://x.com/Charinda_D",
      "https://www.instagram.com/charinda_jayath/",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "React Native",
      "JavaScript",
      "TypeScript",
      "Frontend Development",
      "Full Stack Development",
      "Mobile Development",
      "Web Development",
      "Software Engineering",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Senior Software Engineer",
      occupationLocation: {
        "@type": "Place",
        name: "Colombo, Sri Lanka",
      },
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Colombo",
    },
  };

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

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" themes={["light", "dark"]} enableSystem={false}>
          <RouteGuard>{children}</RouteGuard>
        </ThemeProvider>
      </body>
    </html>
  );
}
