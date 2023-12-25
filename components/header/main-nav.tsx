"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import { Icons } from "@/components/icons"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname()

  return (
    <div className="w-full flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/logo.svg" alt="Logo" width={256} height={32} />
      </Link>
      <Separator
        orientation="vertical"
        className="h-10 my-auto w-[2px] bg-[#2BADFD]"
      />
      {items?.length ? (
        <nav className="w-full flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium font-mont text-muted-foreground px-2 rounded-lg hover:text-primary",
                    item.disabled && "cursor-not-allowed opacity-80",
                    item.href === pathname &&
                      "text-primary bg-primary/5 font-semibold",
                    item.href === "/contact" && "ml-auto"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
