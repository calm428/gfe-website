import { NextRequest } from "next/server"
import createIntlMiddleware from "next-intl/middleware"

import { locales } from "./navigation"

const intlMiddleware = createIntlMiddleware({
  locales,
  localePrefix: "as-needed",
  defaultLocale: "en",
})

export default function middleware(req: NextRequest) {
  return intlMiddleware(req)
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
}
