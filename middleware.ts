import { NextRequest, NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import { withAuth } from "next-auth/middleware"
import createIntlMiddleware from "next-intl/middleware"

import { locales } from "./navigation"

const publicPages = [
  "/",
  "/about-us",
  "/blogs-and-news",
  "/contacts",
  "/governance",
  "/guild",
  "/miner-hosting",
  "/nft",
  "/privacy",
  "/terms",
  "/unsubscribe",
  "/signin",
  "/signup",
  "/verify",
  "/forgot-password",
  "/reset-password/[slug]",
]

const intlMiddleware = createIntlMiddleware({
  locales,
  localePrefix: "as-needed",
  defaultLocale: "en",
})

const authMiddleware = withAuth(
  (req) => {
    return intlMiddleware(req)
  }, {
    callbacks: {
      authorized: ({ token }) => token != null,
    },
    pages: {
      signIn: `${process.env.NEXTAUTH_URL}/signin`,
    },
  }
)

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  const formattedPublicPages = publicPages
    .map((p) =>
      p === "/"
        ? ["", "/"]
        : p
            .replace("[slug]", "[a-zA-Z0-9-_]+")
            .replace("[id]", "[a-zA-Z0-9-_]+")
            .replace("[username]", "[a-zA-Z0-9-_]+")
    )
    .flat() // Flatten the array here to ensure proper joining

  const publicPathnameRegex = new RegExp(
    `^(/(${locales.join("|")}))?(${formattedPublicPages.join("|")})/?$`,
    "i"
  )

  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname)

  if (isPublicPage) {
    return intlMiddleware(req)
  } else if (!token) {
    return NextResponse.redirect(
      new URL(
        `${process.env.NEXTAUTH_URL}/signin?callbackUrl=${encodeURIComponent(`${req.nextUrl.pathname}`)}`
      )
    )
  } else if (token && !token.verified) {
    return NextResponse.redirect(new URL(`${process.env.NEXTAUTH_URL}/verify`))
  } else {
    return (authMiddleware as any)(req)
  }
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
}
