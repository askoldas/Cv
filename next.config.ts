import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  basePath: "/Cv",
  assetPrefix: "/Cv",
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
