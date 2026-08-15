import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.BASE_PATH?.replace(/\/$/, "") ?? "",
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
