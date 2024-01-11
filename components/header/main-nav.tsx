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
import { Icons } from "@/components/icons"

import ExpandableText from "./ExpandableText"

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
    "flex items-center text-sm font-medium font-mont text-muted-foreground px-2 py-2 rounded-lg hover:text-primary"
  )
  return (
    <div className="w-full flex gap-6 md:gap-10">
      <Link
        href="/"
        className="w-[150px] flex flex-col justify-center items-center gap-1"
      >
        <div className="flex flex-col gap-1">
          <Image src="/GFE.svg" alt="Logo" width={154} height={49} />
        </div>
      </Link>
      <Separator
        orientation="vertical"
        className="h-10 my-auto w-[2px] bg-[#2BADFD] hidden lg:block"
      />
      <nav className="hidden lg:flex w-full  gap-6 items-center">
        <NavigationMenu.Root>
          <NavigationMenu.List>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className={navMenuStyle}>
                Ecosystem <CaretDownIcon className="CaretDown" aria-hidden />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="NavigationMenuContent absolute top-[59px]  lg:-left-36 xl:left-0 ">
                <div className="w-[900px] rounded-bl-[20px]  rounded-br-[20px] flex border border-border bg-background">
                  <div className="p-[24px]">
                    <h1 className="font-mont text-[14px] font-medium capitalize text-muted-foreground">
                      token functionalities
                    </h1>
                    {token_functionalities.map((functionality) => (
                      <Link href={"#"} className="flex gap-2 py-[10px]">
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
                              children={functionality.desc}
                              maxChars={60}
                            />
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="p-[24px] border-l border-l-border">
                    <h1 className="font-mont text-[14px] font-medium capitalize text-muted-foreground">
                      Industries
                    </h1>
                    <div className="grid grid-cols-2 gap-2">
                      {industry.map((functionality) => (
                        <Link href={"#"} className="flex gap-2 py-[10px]">
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
                              <p className=" font-mont text-[14px] font-semibold capitalize">
                                {functionality.title}
                              </p>
                              <ExpandableText
                                children={functionality.desc}
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
            "/NFT" === pathname && "text-primary bg-primary/5 font-semibold"
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
              <NavigationMenu.Content className="NavigationMenuContent absolute top-[59px] left-0 ">
                <div className="border border-border p-3 rounded-br-[10px] rounded-bl-[10px] bg-background">
                  {community.map((community) => (
                    <Link href={"#"} className="flex gap-2 py-2">
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
              "text-primary bg-primary/5 font-semibold"
            }`}
          >
            About us
          </Link>
        </div>
        <Link
          href={"/blogs-and-news"}
          className={` ${navMenuStyle} ${
            "/blogs-and-news" === pathname &&
            "text-primary bg-primary/5 font-semibold"
          }`}
        >
          Blogs and News
        </Link>
        <Link
          href={"/contacts"}
          className={` ml-auto ${navMenuStyle} ${
            "/contacts" === pathname &&
            "text-primary bg-primary/5 font-semibold"
          }`}
        >
          Contacts
        </Link>
      </nav>
    </div>
  )
}
