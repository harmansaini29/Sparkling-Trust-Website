/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Enable ultra-fast next-gen image formats
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Enable React strict mode for better rendering checks
  reactStrictMode: true,
};

export default nextConfig;