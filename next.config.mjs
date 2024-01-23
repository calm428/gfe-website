/** @type {import('next').NextConfig} */
import pkg from './next-i18next.config.js';
const { i18n } = pkg;
const nextConfig = {
  reactStrictMode: false,
  i18n,
}

export default nextConfig
