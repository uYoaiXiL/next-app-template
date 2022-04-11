/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  distDir: 'build',
  experimental: {
    removeConsole: {
      exclude: ['error'],
    },
    // Uncomment this to suppress all logs.
    // removeConsole: true,
  },
};
