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

};

export default nextConfig;
