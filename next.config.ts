import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",              // enables static export
  distDir: "docs",               // export to /docs folder for GitHub Pages
  basePath: "/Cv",               // necessary for project path hosting
  images: {
    unoptimized: true,           // disables Image Optimization (required for export)
  },
};

export default nextConfig;
