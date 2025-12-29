import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = {
  // eslint-disable-next-line @typescript-eslint/no-require-imports

  serverExternalPackages: ['@prisma/client'], // Remove this line if not using Prisma or similar
  productionBrowserSourceMaps: true,
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', 'react-icons', 'next/image'],
    cssChunking: true,     // Split + reorder CSS per route
    optimizeCss: true,     // Inline critical CSS (Critters)
    inlineCss: true        // Alternative inlining flag present in newer versions
  },
};

export default bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);