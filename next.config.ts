import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true" && Boolean(repositoryName);

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPagesBuild ? `/${repositoryName}` : "",
  assetPrefix: isGitHubPagesBuild ? `/${repositoryName}/` : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
