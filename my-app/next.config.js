/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Whitelist our specific image qualities to clear the warning
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;