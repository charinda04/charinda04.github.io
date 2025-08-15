import type { NextConfig } from "next";
import type { Configuration } from "webpack";

const nextConfig: NextConfig = {
  // Remove static export for development - can be enabled for production builds
  // output: "export",
  // trailingSlash: true,
  // distDir: "out",

  // Image optimization settings for static export
  images: {
    unoptimized: true,
    formats: ["image/webp", "image/avif"],
  },

  // Build optimization
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Bundle analyzer (enabled with ANALYZE=true)
  ...(process.env.ANALYZE === "true" && {
    webpack: (config: Configuration) => {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
      config.plugins?.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          reportFilename: "./analyze/client.html",
          openAnalyzer: false,
        })
      );
      return config;
    },
  }),

  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-avatar",
      "@radix-ui/react-dialog",
      "@radix-ui/react-separator",
    ],
  },
};

export default nextConfig;
