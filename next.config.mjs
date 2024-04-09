/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin("./i18n.ts")

const nextConfig = {
  output: 'standalone',
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
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
}

export default withNextIntl(nextConfig)
