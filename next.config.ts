import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // eslint-disable-next-line @typescript-eslint/no-require-imports

  serverExternalPackages: ['@prisma/client'], // Remove this line if not using Prisma or similar
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', 'react-icons'],
  },
};

export default nextConfig;