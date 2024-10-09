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
  webpack(conf) {
    conf.resolve.fallback = { 
      wagmi: false,
      net: false,
      tls: false,
      fs: false,
      child_process: false,
      canvas: false
    }
    return conf
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: "https://admin.gfe.foundation/api/:path*", // Proxy to Backend
  //     },
  //     {
  //       source: "/auth",
  //       destination: "https://www.gfe.foundation/platform/api/auth/session", // Proxy to Backend
  //     },
  //   ]
  // },
}

export default withNextIntl(nextConfig)
