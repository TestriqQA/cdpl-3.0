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
  // We opt into Turbopack for handling this.
  turbopack: {},

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
        source: '/software-testing-course',
        destination: '/courses/software-testing-course',
        permanent: true,
      },
      {
        source: '/manual-testing-course',
        destination: '/courses/software-testing-course/manual-testing-course',
        permanent: true,
      },
      {
        source: '/automation-testing-course',
        destination: '/courses/software-testing-course/automation-testing-course',
        permanent: true,
      },
      {
        source: '/api-testing',
        destination: '/courses/software-testing-course/api-testing',
        permanent: true,
      },
      {
        source: '/etl-testing',
        destination: '/courses/software-testing-course/etl-testing',
        permanent: true,
      },
      {
        source: '/dbms-course',
        destination: '/courses/software-testing-course/dbms-course',
        permanent: true,
      },
      {
        source: '/advance-software-testing',
        destination: '/courses/software-testing-course/advance-software-testing',
        permanent: true,
      },
      {
        source: '/java-course',
        destination: '/courses/software-testing-course/java-course',
        permanent: true,
      },
      {
        source: '/advance-manual-automation-testing',
        destination: '/courses/software-testing-course/advance-manual-automation-testing',
        permanent: true,
      },
      {
        source: '/python-course',
        destination: '/courses/software-testing-course/python-course',
        permanent: true,
      },
      {
        source: '/ds-ml-courses',
        destination: '/courses/ds-ml-courses',
        permanent: true,
      },
      {
        source: '/machine-learning-course',
        destination: '/courses/ds-ml-courses/machine-learning-course',
        permanent: true,
      },
      {
        source: '/generative-ai-course',
        destination: '/courses/ds-ml-courses/generative-ai-course',
        permanent: true,
      },
      {
        source: '/data-science-course',
        destination: '/courses/ds-ml-courses/data-science-course',
        permanent: true,
      },
      {
        source: '/ai-course',
        destination: '/courses/ds-ml-courses/ai-course',
        permanent: true,
      },
      {
        source: '/machine-learning-using-python',
        destination: '/courses/ds-ml-courses/machine-learning-using-python',
        permanent: true,
      },
      {
        source: '/data-visualization-in-r-programming',
        destination: '/courses/ds-ml-courses/data-visualization-in-r-programming',
        permanent: true,
      },
      {
        source: '/bi-courses',
        destination: '/courses/bi-courses',
        permanent: true,
      },
      {
        source: '/data-analytics',
        destination: '/courses/bi-courses/data-analytics',
        permanent: true,
      },
      {
        source: '/data-analytics-python',
        destination: '/courses/bi-courses/data-analytics-python',
        permanent: true,
      },
      {
        source: '/data-analytics-and-visualization',
        destination: '/courses/bi-courses/data-analytics-and-visualization',
        permanent: true,
      },
      {
        source: '/data-analytics-with-tableau',
        destination: '/courses/bi-courses/data-analytics-with-tableau',
        permanent: true,
      },
      {
        source: '/power-bi-course',
        destination: '/courses/bi-courses/power-bi-course',
        permanent: true,
      },
      {
        source: '/masters-in-data-engineering',
        destination: '/courses/bi-courses/masters-in-data-engineering',
        permanent: true,
      },
      {
        source: '/artificial-intelligence-courses',
        destination: '/courses/artificial-intelligence-courses',
        permanent: true,
      },
      {
        source: '/prompt-engineering-course',
        destination: '/courses/artificial-intelligence-courses/prompt-engineering-course',
        permanent: true,
      },
      {
        source: '/digital-marketing-courses',
        destination: '/courses/digital-marketing-courses',
        permanent: true,
      },
      {
        source: '/digital-marketing-course',
        destination: '/courses/digital-marketing-courses/digital-marketing-course',
        permanent: true,
      },
      {
        source: '/ai-in-digital-marketing',
        destination: '/courses/digital-marketing-courses/ai-in-digital-marketing',
        permanent: true,
      },
      {
        source: '/ai-bootcamp',
        destination: '/courses/digital-marketing-courses/ai-bootcamp',
        permanent: true,
      },
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