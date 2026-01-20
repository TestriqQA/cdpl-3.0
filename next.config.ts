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
    optimizeCss: true, // Re-enabled for LCP
    optimizeServerReact: true,
    // webpackBuildWorker: true, // Commented out to ensure critters runs reliably
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
    qualities: [40, 50, 60, 75, 90],
    deviceSizes: [320, 360, 390, 414, 480, 640, 750, 828, 1080, 1200, 1536, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 320, 346, 384],
  },
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/email-marketing',
        destination: '/digital-marketing-courses',
        permanent: true,
      },
      {
        source: '/actd-certification-training',
        destination: '/actd-certification',
        permanent: true,
      },
      {
        source: '/events/software-testing-workshop-bangalore',
        destination: '/events/past-events',
        permanent: true,
      },
      {
        source: '/events/faculty-development-mumbai-university',
        destination: '/events/past-events',
        permanent: true,
      },
      {
        source: '/events/fullstack-workshop-infosys-pune',
        destination: '/events/past-events',
        permanent: true,
      },
      {
        source: '/events/data-science-bootcamp-iit-delhi',
        destination: '/events/past-events',
        permanent: true,
      },
      {
        source: '/events/industrial-visit-tata-motors',
        destination: '/events/past-events',
        permanent: true,
      },
      {
        source: '/events/past-events',
        destination: '/events',
        permanent: true,
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);