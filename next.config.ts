import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // ✅ Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ Optional: Add trailing slash to URLs
  // /about → /about/
  // trailingSlash: true,

  // ✅ Optional: Custom output directory (default is 'out')
  // distDir: 'dist',

  // ✅ Optional: Prevent automatic redirects like /me → /me/
  // skipTrailingSlashRedirect: true,
};

export default nextConfig;
