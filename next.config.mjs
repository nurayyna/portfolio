/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Linting is a separate `npm run lint` step; don't block production builds on it.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
