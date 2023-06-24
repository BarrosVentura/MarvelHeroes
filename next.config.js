/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    marvelPublicKey: "dfda30705779ba499a12d36d60395241",
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "i.annihil.us",
      },
    ],
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
    },
  },
};

module.exports = nextConfig;
