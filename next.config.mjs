/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Images
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp|ico)$/i,
      type: "asset/resource",
    });

    // SVGs (as React components)
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    // Videos
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mov|avi|mkv)$/i,
      type: "asset/resource",
    });

    // Audio
    config.module.rules.push({
      test: /\.(mp3|wav|flac|aac|m4a)$/i,
      type: "asset/resource",
    });

    // Fonts
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: "asset/resource",
    });

    // Documents / PDFs
    config.module.rules.push({
      test: /\.(pdf|doc|docx|xls|xlsx|ppt|pptx)$/i,
      type: "asset/resource",
    });

    return config;
  },
};

export default nextConfig;
