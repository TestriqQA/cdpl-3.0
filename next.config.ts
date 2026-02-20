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

  transpilePackages: ['next-sanity', 'sanity', '@sanity/vision', '@sanity/code-input'],
  // Performance optimizations
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      'react-icons',
      '@headlessui/react',
      'lucide-react',
    ],
    optimizeCss: false, // Disabled: incompatible with Tailwind v4 (causes build error)
    optimizeServerReact: true,
    // webpackBuildWorker: true, // Commented out to ensure critters runs reliably
  },

  // Fix: Tailwind v4 generates CSS with data URIs that contain '&' characters.
  // Next.js's CSS loader misinterprets these as module paths, causing "Can't resolve './&'" errors.
  webpack: (config) => {
    // Find and update the css-loader rules to not resolve url() references
    const rules = config.module?.rules;
    if (rules) {
      for (const rule of rules) {
        if (rule && typeof rule === 'object' && rule.oneOf) {
          for (const oneOfRule of rule.oneOf) {
            if (oneOfRule?.use && Array.isArray(oneOfRule.use)) {
              for (const loader of oneOfRule.use) {
                if (
                  loader &&
                  typeof loader === 'object' &&
                  typeof loader.loader === 'string' &&
                  loader.loader.includes('css-loader') &&
                  !loader.loader.includes('postcss-loader')
                ) {
                  if (!loader.options) loader.options = {};
                  loader.options.url = false;
                }
              }
            }
          }
        }
      }
    }
    return config;
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
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
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
      {
        source: '/authors/:slug',
        destination: '/blog/author/:slug',
        permanent: true,
      },
      {
        source: '/blog/category/ai-ml',
        destination: '/blog/category/artificial-intelligence',
        permanent: true,
      },
      {
        source: '/blog/how-prompt-engineering-can-automate-test-case-generation',
        destination: '/blog/category/software-testing',
        permanent: true,
      },
      {
        source: '/events/sttp-iot-applications',
        destination: '/events',
        permanent: true,
      },
      {
        source: '/events/train-the-trainer-program-corporate',
        destination: '/events',
        permanent: true,
      },
      {
        source: '/events/6-days-workshop-on-machine-learning-with-hands-on-training-on-industry-projects-2',
        destination: '/events',
        permanent: true,
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);