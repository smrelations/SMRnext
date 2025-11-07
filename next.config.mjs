/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['example.com'], // Add any domains you use for <Image />
  },

  // ✅ New location for Turbopack config:
  turbopack: {
    // Optional: you can enable/disable certain Turbopack options here
    // Example:
    // optimizeCss: true,
    // memoryCache: true,
  },
};

export default nextConfig;
