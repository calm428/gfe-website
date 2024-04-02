"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CaretDownIcon } from "@radix-ui/react-icons"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import { useTranslations } from "next-intl"
import { BiSolidFileDoc } from "react-icons/bi"
import { FaGuilded } from "react-icons/fa"
import { FaUsers } from "react-icons/fa6"
import { GrArticle } from "react-icons/gr"
import { HiUsers } from "react-icons/hi"
import { MdArrowOutward } from "react-icons/md"
import { RiGovernmentFill } from "react-icons/ri"

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
  const t = useTranslations("main")

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
        aria-label="Home"
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
                {t("header.ecosystem")}{" "}
                <CaretDownIcon className="CaretDown" aria-hidden />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="NavigationMenuContent absolute top-[59px]  lg:-left-36 xl:left-0 ">
                <div className="flex w-[900px]  rounded-b-[20px] border border-border bg-background">
                  <div className="p-[24px]">
                    <p className="font-mont text-[14px] font-medium capitalize text-muted-foreground">
                      {t("header.token_functionalities")}
                    </p>
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
                    <p className="font-mont text-[14px] font-medium capitalize text-muted-foreground">
                      {t("header.industries")}
                    </p>
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
          href={"/nft"}
          className={` ${navMenuStyle} ${
            "/nft" === pathname && "bg-primary/5 font-semibold text-primary"
          }`}
        >
          {t("header.nft")}
        </Link>
        <NavigationMenu.Root>
          <NavigationMenu.List>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className={navMenuStyle}>
                {t("header.community")}{" "}
                <CaretDownIcon className="CaretDown" aria-hidden />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="NavigationMenuContent absolute left-0 top-[59px] ">
                <div className="flex w-[450px]  rounded-b-[20px] border border-border bg-background">
                  <div className="p-4">
                    <p className="w-28 font-mont text-[14px] font-medium capitalize text-muted-foreground">
                      {t("header.social")}
                    </p>
                    {community.map((community, ind) => (
                      <Link
                        href={community.href}
                        key={ind}
                        className="flex w-fit gap-2 rounded-md p-2 hover:bg-muted-foreground/10"
                      >
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
                  <div className="border-l border-l-border p-4">
                    <div className="grid grid-cols-1 gap-2">
                      <Link
                        href="/governance"
                        className="flex gap-2 rounded-md p-3 py-[10px] hover:bg-muted-foreground/10"
                      >
                        <div>
                          <RiGovernmentFill className="min-w-5 text-[#21b4fd]" />
                        </div>
                        <div>
                          <p>
                            <p className="font-mont text-[14px] font-semibold capitalize">
                              {t("header.governance")}
                            </p>
                            <p className="text-xs">
                              {t("header.governance_description")}
                            </p>
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/guild"
                        className="flex gap-2 rounded-md p-3 py-[10px] hover:bg-muted-foreground/10"
                      >
                        <div>
                          <FaGuilded className="min-w-5 text-[#21b4fd]" />
                        </div>
                        <div>
                          <p>
                            <p className="font-mont text-[14px] font-semibold capitalize">
                              {t("header.guilds")}
                            </p>
                            <p className="text-xs">
                              {t("header.guilds_description")}
                            </p>
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="https://forum.gfe.foundation"
                        target="_blank"
                        className="flex gap-2 rounded-md p-3 py-[10px] hover:bg-muted-foreground/10"
                      >
                        <div>
                          <FaUsers className="min-w-5 text-[#21b4fd]" />
                        </div>
                        <div>
                          <p>
                            <p className="flex font-mont text-[14px] font-semibold capitalize">
                              {t("header.gfe_forum")}
                              <MdArrowOutward className="size-4" />
                            </p>
                            <p className="text-xs">
                              {t("header.gfe_forum_description")}
                            </p>
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
        <NavigationMenu.Root>
          <NavigationMenu.List>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className={navMenuStyle}>
                {t("header.learn")}
                <CaretDownIcon className="CaretDown" aria-hidden />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="NavigationMenuContent absolute left-0 top-[59px] ">
                <div className="flex w-[300px] rounded-b-[20px] border border-border bg-background">
                  <div className="grid grid-cols-1 gap-2 p-4">
                    <Link
                      href={"/about-us"}
                      className="flex gap-2 rounded-md p-3 py-[10px] hover:bg-muted-foreground/10"
                    >
                      <div>
                        <HiUsers className="min-w-5 text-[#21b4fd]" />
                      </div>
                      <div>
                        <p>
                          <p className="font-mont text-[14px] font-semibold capitalize">
                            {t("header.about_us")}
                          </p>
                          <p className="text-xs">
                            {t("header.about_us_description")}
                          </p>
                        </p>
                      </div>
                    </Link>
                    <Link
                      href={"/blogs-and-news"}
                      className="flex gap-2 rounded-md p-3 py-[10px] hover:bg-muted-foreground/10"
                    >
                      <div>
                        <GrArticle className="min-w-5 text-[#21b4fd]" />
                      </div>
                      <div>
                        <p>
                          <p className="font-mont text-[14px] font-semibold capitalize">
                            {t("header.blogs_and_news")}
                          </p>
                          <p className="text-xs">
                            {t("header.blogs_and_news_description")}
                          </p>
                        </p>
                      </div>
                    </Link>
                    <Link
                      href="https://docs.gfe.foundation"
                      target="_blank"
                      className="flex gap-2 rounded-md p-3 py-[10px] hover:bg-muted-foreground/10"
                    >
                      <div>
                        <BiSolidFileDoc className="min-w-5 text-[#21b4fd]" />
                      </div>
                      <div>
                        <p>
                          <p className="flex font-mont text-[14px] font-semibold capitalize">
                            {t("header.documentation")}
                            <MdArrowOutward className="size-4" />
                          </p>
                          <p className="text-xs">
                            {t("header.documentation_description")}
                          </p>
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
        <Link
          href={"/contacts"}
          className={` ml-auto ${navMenuStyle} ${
            "/contacts" === pathname &&
            "bg-primary/5 font-semibold text-primary"
          }`}
        >
          {t("header.contacts")}
        </Link>
      </nav>
    </div>
  )
}
