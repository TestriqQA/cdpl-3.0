import type { NextConfig } from "next";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  serverExternalPackages: ['@prisma/client'], // Remove this line if not using Prisma or similar
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  reactStrictMode: true,

  // Performance optimizations
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      'react-icons',
      '@headlessui/react',
      'lucide-react',
    ],
    optimizeCss: false, // Disabled to prevent render blocking
    optimizeServerReact: true,
    webpackBuildWorker: true, // Faster builds
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
    // React compiler optimizations
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },



  // Tree-shaking optimizations
  // modularizeImports removed in favor of optimizePackageImports in experimental

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [320, 640, 750, 828, 1080, 1200, 1536, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 320, 346, 384],
  },
};

export default withBundleAnalyzer(nextConfig);