import { Metadata, Viewport } from "next"
import { NextIntlClientProvider, useMessages } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"

import { siteConfig } from "@/config/site"
import { SiteFooter } from "@/components/footer"
import { SiteHeader } from "@/components/header/site-header"

import "@/styles/globals.css"

interface RootLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export default function SiteLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  unstable_setRequestLocale(locale)
  const messages = useMessages()

  return (
    <div className="relative flex min-h-screen flex-col">
      <NextIntlClientProvider locale={locale} messages={messages}>
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </NextIntlClientProvider>
    </div>
  )
}
