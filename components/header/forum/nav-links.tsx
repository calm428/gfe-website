"use client"

import NextLink from "next/link"
import { usePathname } from "next/navigation"
import { link as linkStyles, NavbarItem } from "@nextui-org/react"
import clsx from "clsx"
import { useLocale } from "next-intl"

import { siteConfig } from "@/config/site"

export default function NavLinks() {
  const locale = useLocale()
  let pathname = usePathname()
  if (pathname.startsWith("/" + locale)) {
    pathname = pathname.slice(locale.length + 1)
  }

  return (
    <ul className="ml-2 hidden justify-start gap-6 lg:flex">
      {siteConfig.navItems.length > 0 &&
        siteConfig.navItems.map((item: any) => (
          <NavbarItem
            key={item.href}
            className="group rounded-md p-2 px-3 data-[active=true]:bg-primary/10"
            data-active={pathname === item.href}
          >
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "group-data-[active=true]:font-medium group-data-[active=true]:text-primary"
              )}
              color="foreground"
              href={item.href}
            >
              {item.label}
            </NextLink>
          </NavbarItem>
        ))}
    </ul>
  )
}
