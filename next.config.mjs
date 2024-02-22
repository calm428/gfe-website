/** @type {import('next').NextConfig} */

import pkg from "./next-i18next.config.js"

const { i18n } = pkg
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["utfs.io"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://admin.gfe.foundation/api/:path*", // Proxy to Backend
      },
      {
        source: "/auth",
        destination: "https://platform.gfe.foundation/api/auth/session", // Proxy to Backend
      },
    ]
  },
  i18n,
}

export default nextConfig
