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
    ];
  },
};

module.exports = nextConfig;
