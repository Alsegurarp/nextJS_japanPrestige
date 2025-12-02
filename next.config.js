/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    // Handle image files (svg, png, jpg, jpeg, gif, webp)
    config.module.rules.push({
      test: /\.(svg|png|jpe?g|gif|webp)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]',
      },
    });

    return config;
  },
};

export default nextConfig;
