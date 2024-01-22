"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CaretDownIcon } from "@radix-ui/react-icons"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

import ExpandableText from "./expandable-text"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname()
  const [ecoMenuOpen, setEcomenuOpen] = React.useState(false)
  const token_functionalities = siteConfig.token_functionalities
  const industry = siteConfig.industry
  const community = siteConfig.community

  const navMenuStyle = cn(
    "flex items-center rounded-lg p-2 font-mont text-sm font-medium text-muted-foreground hover:text-primary"
  )
  return (
    <div className="flex w-full gap-6 md:gap-10">
      <Link
        href="/"
        className="flex w-[150px] flex-col items-center justify-center gap-1"
      >
        <div className="flex flex-col gap-1">
          <Image src="/GFE.svg" alt="Logo" width={154} height={49} />
        </div>
      </Link>
      <Separator
        orientation="vertical"
        className="my-auto hidden h-10 w-[2px] bg-[#2BADFD] lg:block"
      />
      <nav className="hidden w-full items-center  gap-6 lg:flex">
        <NavigationMenu.Root>
          <NavigationMenu.List>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className={navMenuStyle}>
                Ecosystem <CaretDownIcon className="CaretDown" aria-hidden />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="NavigationMenuContent absolute top-[59px]  lg:-left-36 xl:left-0 ">
                <div className="flex w-[900px]  rounded-b-[20px] border border-border bg-background">
                  <div className="p-[24px]">
                    <h1 className="font-mont text-[14px] font-medium capitalize text-muted-foreground">
                      token functionalities
                    </h1>
                    {token_functionalities.map((functionality, ind) => (
                      <Link
                        key={ind}
                        href={functionality.href}
                        className="flex gap-2 py-[10px]"
                      >
                        <div>
                          <Image
                            src={functionality.icon}
                            width={20}
                            height={20}
                            alt={functionality.title}
                            className=" min-w-5"
                          />
                        </div>
                        <div>
                          <p key={functionality.title}>
                            <p className=" font-mont text-[14px] font-semibold capitalize ">
                              {functionality.title}
                            </p>
                            <ExpandableText
                              description={functionality.desc}
                              maxChars={60}
                            />
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="border-l border-l-border p-[24px]">
                    <h1 className="font-mont text-[14px] font-medium capitalize text-muted-foreground">
                      Industries
                    </h1>
                    <div className="grid grid-cols-2 gap-2">
                      {industry.map((industry, ind) => (
                        <Link
                          key={ind}
                          href={industry.href}
                          className="flex gap-2 py-[10px]"
                        >
                          <div>
                            <Image
                              src={industry.icon}
                              width={20}
                              height={20}
                              alt={industry.title}
                              className=" min-w-5"
                            />
                          </div>
                          <div>
                            <p key={industry.title}>
                              <p className=" font-mont text-[14px] font-semibold capitalize">
                                {industry.title}
                              </p>
                              <ExpandableText
                                description={industry.desc}
                                maxChars={60}
                              />
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
        <Link
          href={"/NFT"}
          className={` ${navMenuStyle} ${
            "/NFT" === pathname && "bg-primary/5 font-semibold text-primary"
          }`}
        >
          NFT
        </Link>
        <NavigationMenu.Root>
          <NavigationMenu.List>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className={navMenuStyle}>
                Community <CaretDownIcon className="CaretDown" aria-hidden />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="NavigationMenuContent absolute left-0 top-[59px] ">
                <div className="rounded-b-[10px] border border-border bg-background p-3">
                  {community.map((community, ind) => (
                    <Link href={"#"} key={ind} className="flex gap-2 py-2">
                      <Image
                        src={community.icon}
                        width={20}
                        height={20}
                        alt={community.title}
                      />
                      <p className="font-mont text-[14px] font-medium text-muted-foreground">
                        {community.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
        <div className="flex items-center ">
          <Link
            href={"/about-us"}
            className={` ${navMenuStyle} ${
              "/about-us" === pathname &&
              "bg-primary/5 font-semibold text-primary"
            }`}
          >
            About us
          </Link>
        </div>
        <Link
          href={"/blogs-and-news"}
          className={` ${navMenuStyle} ${
            "/blogs-and-news" === pathname &&
            "bg-primary/5 font-semibold text-primary"
          }`}
        >
          Blogs and News
        </Link>
        <Link
          href={"/contacts"}
          className={` ml-auto ${navMenuStyle} ${
            "/contacts" === pathname &&
            "bg-primary/5 font-semibold text-primary"
          }`}
        >
          Contacts
        </Link>
      </nav>
    </div>
  )
}
