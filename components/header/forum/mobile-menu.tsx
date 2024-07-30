"use client"

import { usePathname } from "next/navigation"
import { NavbarMenu } from "@nextui-org/react"
import { useLocale } from "next-intl"

import Sidebar from "../sidebar/sidebar"
import WalletConnectButton from "./wallet-connect-button"

export default function MobileMenu() {
  const locale = useLocale()
  let pathname = usePathname()
  if (pathname.startsWith("/" + locale)) {
    pathname = pathname.slice(locale.length + 1)
  }

  return (
    <NavbarMenu>
      <Sidebar className="!top-0" />
      <div className="mb-8 mt-auto">
        <WalletConnectButton />
      </div>
    </NavbarMenu>
  )
}