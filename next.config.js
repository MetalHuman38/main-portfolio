/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  output: "export",
  images: {
    unoptimized: true, // Disable the Image Optimization API
  },
};

module.exports = nextConfig;
