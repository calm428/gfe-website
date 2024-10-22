"use client"

import NextLink from "next/link"
import { usePathname } from "next/navigation"
import { link as linkStyles, NavbarItem } from "@nextui-org/react"
import clsx from "clsx"
import { useLocale } from "next-intl"

import { siteConfig } from "@/config/site"
import { useTranslations } from "next-intl"

export default function NavLinks({
  authenticated,
}: {
  authenticated: boolean
}) {
  const locale = useLocale()
  const t = useTranslations("main")
  let pathname = usePathname()
  if (pathname.startsWith("/" + locale)) {
    pathname = pathname.slice(locale.length + 1)
  }

  return (
    <ul className="ml-2 hidden justify-start gap-6 lg:flex">
      <NavbarItem
        key={"/platform/ico"}
        className="group rounded-md p-2 px-3 data-[active=true]:bg-primary/10"
        data-active={pathname === "/platform/ico"}
      >
        <NextLink
          className={clsx(
            linkStyles({ color: "foreground" }),
            "group-data-[active=true]:font-medium group-data-[active=true]:text-primary"
          )}
          color="foreground"
          href={"/platform/ico"}
        >
          {t("header.ico")}
        </NextLink>
      </NavbarItem>
      <NavbarItem
        key={"/platform/electricity"}
        className="group rounded-md p-2 px-3 data-[active=true]:bg-primary/10"
        data-active={pathname === "/platform/electricity"}
      >
        <NextLink
          className={clsx(
            linkStyles({ color: "foreground" }),
            "group-data-[active=true]:font-medium group-data-[active=true]:text-primary"
          )}
          color="foreground"
          href={"/platform/electricity"}
        >
          {t("header.electricity")}
        </NextLink>
      </NavbarItem>
      <NavbarItem
        key={"/platform/mining"}
        className="group rounded-md p-2 px-3 data-[active=true]:bg-primary/10"
        data-active={pathname === "/platform/mining"}
      >
        <NextLink
          className={clsx(
            linkStyles({ color: "foreground" }),
            "group-data-[active=true]:font-medium group-data-[active=true]:text-primary"
          )}
          color="foreground"
          href={"/platform/mining"}
        >
          {t("header.mining")}
        </NextLink>
      </NavbarItem>
      <NavbarItem
        key={"/platform/dao"}
        className="group rounded-md p-2 px-3 data-[active=true]:bg-primary/10"
        data-active={pathname === "/platform/dao"}
      >
        <NextLink
          className={clsx(
            linkStyles({ color: "foreground" }),
            "group-data-[active=true]:font-medium group-data-[active=true]:text-primary"
          )}
          color="foreground"
          href={"/platform/dao"}
        >
          {t("header.dao")}
        </NextLink>
      </NavbarItem>
      <NavbarItem
        key={"/platform/setting"}
        className="group rounded-md p-2 px-3 data-[active=true]:bg-primary/10"
        data-active={pathname === "/platform/setting"}
      >
        <NextLink
          className={clsx(
            linkStyles({ color: "foreground" }),
            "group-data-[active=true]:font-medium group-data-[active=true]:text-primary"
          )}
          color="foreground"
          href={"/platform/setting"}
        >
          {t("header.setting")}
        </NextLink>
      </NavbarItem>
    </ul>
  )
}
