/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["geist"],
  async redirects() {
    return [
      {
        source: "/youtube",
        destination: "https://youtube.com/@phpMyArfi",
        permanent: true,
      },
      {
        source: "/informace",
        destination: "/discord/informace",
        permanent: true,
      },
      {
        source: "/pravidla",
        destination: "/discord/pravidla",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
