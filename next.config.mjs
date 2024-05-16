/** @type {import('next').NextConfig} */

// https://lh3.googleusercontent.com/a/ACg8ocLCDZgA72aow3rIt6VbhYv5W_aH0J-p95Rpoqpmtlrq7JvtEicI=s96-c
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
