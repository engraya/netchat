/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      remotePatterns: [
        { protocol: 'https', hostname: 'i.imgur.com' },
        { protocol: 'https', hostname: 'www.svgrepo.com' }
      ]
    }
  };
export default nextConfig;
