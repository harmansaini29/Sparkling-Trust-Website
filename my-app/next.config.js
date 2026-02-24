/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< Updated upstream
  /* config options here */
=======
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
>>>>>>> Stashed changes
};

export default nextConfig;