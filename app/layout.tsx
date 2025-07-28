import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
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
  title: "Charinda Dissanayake - Senior Software Engineer | React & React Native Expert",
  description: "Charinda Dissanayake is a Senior Software Engineer and Frontend Engineer specializing in React, React Native, and full-stack development. Expert in mobile and web applications with 8+ years of experience.",
  keywords: [
    "Charinda",
    "Charinda Dissanayake", 
    "React",
    "React Native",
    "Frontend Engineer",
    "Fullstack Engineer", 
    "Senior Software Engineer",
    "JavaScript",
    "TypeScript",
    "Mobile Development",
    "Web Development",
    "Software Engineer Sri Lanka"
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
    title: "Charinda Dissanayake - Senior Software Engineer | React & React Native Expert",
    description: "Senior Software Engineer specializing in React, React Native, and full-stack development. Expert in mobile and web applications.",
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
    description: "React & React Native Expert | Frontend & Fullstack Engineer",
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
    "name": "Charinda Dissanayake",
    "jobTitle": "Senior Software Engineer",
    "description": "Senior Software Engineer specializing in React, React Native, and full-stack development with 8+ years of experience.",
    "url": "https://charinda04.github.io",
    "image": "https://charinda04.github.io/assets/images/profile.jpg",
    "sameAs": [
      "https://github.com/charinda04",
      "https://www.linkedin.com/in/charinda-dissanayake/",
      "https://x.com/Charinda_D",
      "https://www.instagram.com/charinda_jayath/"
    ],
    "knowsAbout": [
      "React",
      "React Native", 
      "JavaScript",
      "TypeScript",
      "Frontend Development",
      "Full Stack Development",
      "Mobile Development",
      "Web Development",
      "Software Engineering"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Senior Software Engineer",
      "occupationLocation": {
        "@type": "Place",
        "name": "Colombo, Sri Lanka"
      }
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "University of Colombo"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          themes={["light", "dark"]}
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
