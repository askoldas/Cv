import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  basePath: "/Cv",
  assetPrefix: "/Cv", // ✅ THIS IS THE KEY FIX
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
