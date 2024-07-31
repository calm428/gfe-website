"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { useSession } from "next-auth/react"
import { useTranslations } from "next-intl"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/header/main-nav"

import { LanguageSelector } from "./language"
import { MobileMenu } from "./mobile-menu"

export function SiteHeader() {
  const pathname = usePathname()
  const header_available = ['about-us', 'blogs-and-news', 'contacts', 'governance', 'guild', 'miner-hosting', 'nft', 'privacy', 'terms', 'unsubscribe']
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    let headerFound = false
    header_available.map((subUrl) => {
      if (pathname.includes(subUrl)) {
        headerFound = true
      }
    })
    setShowHeader(headerFound)
  }), [pathname]

  return (
    <>
      {showHeader && <BaseHeader />}
    </>
  )
}

export function MainHeader() {
  return (
    <BaseHeader />
  )
}

const BaseHeader = () => {  
  const t = useTranslations("main")
  const { data: session } = useSession()

  return (
    <>
      <header className="siteheader sticky top-0 z-50 w-full border-b bg-background px-0 font-sans">
        <div className="container flex h-20 items-center space-x-4 sm:justify-between sm:space-x-0">
          <MainNav items={siteConfig.mainNav} />
          <div className="hidden space-x-4 lg:flex">
            <Button
              variant="default"
              className="!mx-2 whitespace-nowrap font-sans font-semibold"
              style={{
                background:
                  "linear-gradient(277deg, #22B4FD 32.53%, #2D79FF 77.26%)",
              }}
              asChild
            >
              <Link href="https://platform.gfe.foundation">
                {(session?.user as any)?.id
                  ? t("header.launch_app")
                  : t("header.sign_in")}
              </Link>
            </Button>
            <LanguageSelector />
          </div>
          <div className="flex gap-1 lg:hidden">
            <MobileMenu>
              <Button
                variant="default"
                className="!mx-2 block whitespace-nowrap font-sans font-semibold lg:hidden"
                style={{
                  background:
                    "linear-gradient(277deg, #22B4FD 32.53%, #2D79FF 77.26%)",
                }}
                aria-label="open mobile menu"
              >
                <Menu />
              </Button>
            </MobileMenu>
          </div>
        </div>
      </header>
    </>
  )
}