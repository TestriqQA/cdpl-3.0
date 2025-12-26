import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // eslint-disable-next-line @typescript-eslint/no-require-imports

  serverExternalPackages: ['@prisma/client'], // Remove this line if not using Prisma or similar
  productionBrowserSourceMaps: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;