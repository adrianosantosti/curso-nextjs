/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'emersonbroga.com',
          },
          {
            hostname: 'raw.githubsercontent.com'
          }
        ],
      },
      output: "standalone",
};

export default nextConfig;
