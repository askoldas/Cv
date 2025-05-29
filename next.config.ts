import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  // basePath: "/Cv",
  // assetPrefix: "/Cv",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
