/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
  reactStrictMode: true,
  distDir: "build",
  output: "export",
};

export default nextConfig;
