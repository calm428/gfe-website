"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MainNav } from "@/components/header/main-nav"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-20 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <Button
          variant="default"
          className="whitespace-nowrap font-semibold font-mont !mx-2"
          style={{
            background:
              "linear-gradient(277deg, #22B4FD 32.53%, #2D79FF 77.26%)",
          }}
        >
          Sign In
        </Button>
        <Select defaultValue="en">
          <SelectTrigger className="w-auto">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="fr">Spain</SelectItem>
              <SelectItem value="ru">Russian</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </header>
  )
}
