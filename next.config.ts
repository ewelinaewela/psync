import type { NextConfig } from "next";

const basePath = process.env.PSYNC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
