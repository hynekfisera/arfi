/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/2Fs4pkpCcG",
        permanent: true,
      },
      {
        source: "/playlist",
        destination: "/#playlist",
        permanent: true,
      },
      {
        source: "/youtube",
        destination: "https://youtube.com/phpMyArfi",
        permanent: true,
      },
      {
        source: "/donate",
        destination: "https://hynekfisera.cz/donate",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
