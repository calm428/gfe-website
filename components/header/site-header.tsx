"use client"

import { useContext, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SunbeltContext } from "@/context/context"
import { CaretDownIcon } from "@radix-ui/react-icons"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import { Divide, Menu, X } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
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
import { Separator } from "@/components/ui/separator"
import { MainNav } from "@/components/header/main-nav"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

import { ForgotPwModal } from "../auth/forgot"
import { ResetModal } from "../auth/reset"
import { SignInModal } from "../auth/signin"
import { SignUpModal } from "../auth/signup"
import { VerifyModal } from "../auth/verify"
import ExpandableText from "./ExpandableText"
import { LanguageSelector } from "./language"

export function SiteHeader() {
  const {
    resetModalOpen,
    setResetModalOpen,
    forgotPwModalOpen,
    setForgotPwModalOpen,
    signInModalOpen,
    setSignInModalOpen,
    mobileNavOpen,
    setMobileNavOpen,
    signUpModalOpen,
    setSignUpModalOpen,
    verifyModalOpen,
    setVerifyModalOpen,
  } = useContext(SunbeltContext)
  const pathname = usePathname()

  // closing the modal

  const handleClose = (e: any) => {
    if (e.target.id === "sidebar") setMobileNavOpen(false)
  }
  // nav style menu

  const navMenuStyle = cn(
    "flex items-center text-sm font-medium font-mont text-muted-foreground px-2 py-2 rounded-lg hover:text-primary"
  )

  // menulist items

  const token_functionalities = siteConfig.token_functionalities
  const industry = siteConfig.industry
  const community = siteConfig.community
  return (
    <>
      <header
        className="siteheader bg-background sticky top-0 z-50 w-full border-b px-0 font-mont"
        onClick={() => mobileNavOpen && setMobileNavOpen(false)}
      >
        <div className="container flex h-20 items-center space-x-4 sm:justify-between sm:space-x-0">
          <MainNav items={siteConfig.mainNav} />
          <div className="hidden lg:flex space-x-4">
            <Button
              variant="default"
              className="whitespace-nowrap font-semibold font-mont !mx-2"
              style={{
                background:
                  "linear-gradient(277deg, #22B4FD 32.53%, #2D79FF 77.26%)",
              }}
              onClick={() => setSignInModalOpen(true)}
            >
              Sign In
            </Button>
            <LanguageSelector />
          </div>
          <div className="flex lg:hidden gap-1">
            <LanguageSelector  />
          <Button
            variant="default"
            className="block lg:hidden whitespace-nowrap font-semibold font-mont !mx-2"
            style={{
              background:
                "linear-gradient(277deg, #22B4FD 32.53%, #2D79FF 77.26%)",
            }}
            onClick={(e) => setMobileNavOpen(true)}
          >
            <Menu />
          </Button>
          </div>
          
        </div>
        <SignInModal open={signInModalOpen} setOpen={setSignInModalOpen} />
        <ForgotPwModal
          open={forgotPwModalOpen}
          setOpen={setForgotPwModalOpen}
        />
        <SignUpModal open={signUpModalOpen} setOpen={setSignUpModalOpen} />
        <VerifyModal open={verifyModalOpen} setOpen={setVerifyModalOpen} />
        <ResetModal open={resetModalOpen} setOpen={setResetModalOpen} />
      </header>
      {/* sidebar */}
      <div
        id="sidebar"
        onClick={handleClose}
        className={` ${
          mobileNavOpen ? "block" : "hidden"
        } absolute inset-0 bg-[#03375c3d] !bg-opacity-20 backdrop-blur-sm lg:hidden z-50`}
      >
        <div
          className={`${
            mobileNavOpen ? "right-0 " : "-right-[360px]"
          } lg:hidden z-30  fixed max-w-[360px] min-w-[360px] h-full bg-background transition-all`}
        >
          <div className="h-full flex flex-col">
            <div className="sticky top-0 z-50 bg-background pt-5">
              <div className="flex justify-between">
                <Link
                  href="/"
                  className="w-[150px] flex flex-col justify-center items-center gap-1"
                >
                  <div className="flex flex-col gap-1">
                    <Image src="/GFE.svg" alt="Logo" width={80} height={32} />
                    <Image
                      src={"/Foundation.svg"}
                      alt="sublogo"
                      width={100}
                      height={10}
                    />
                  </div>
                </Link>
                <Button
                  variant="default"
                  className="block lg:hidden whitespace-nowrap font-semibold font-mont !mx-2"
                  style={{
                    background:
                      "linear-gradient(277deg, #22B4FD 32.53%, #2D79FF 77.26%)",
                  }}
                  onClick={() => setMobileNavOpen(false)}
                >
                  <X />
                </Button>
              </div>
              <Separator
                orientation="vertical"
                className="h-[3px] my-[16px] mx-auto w-[90%] bg-[#2BADFD] block"
              />
            </div>

            <nav className="flex flex-col w-full  gap-6 items-center auth">
              <NavigationMenu.Root>
                <NavigationMenu.List>
                  <NavigationMenu.Item>
                    <NavigationMenu.Trigger
                      className={` ${navMenuStyle} w-full flex justify-center items-center`}
                    >
                      Ecosystem
                      <CaretDownIcon className="CaretDown" aria-hidden />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="NavigationMenuContent h-fit">
                      <div className=" flex flex-col border border-border bg-background">
                        <div className="p-[24px]">
                          <h1 className="font-mont text-[14px] text-center font-medium capitalize text-muted-foreground">
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
                          <h1 className="font-mont text-[14px] text-center font-medium capitalize text-muted-foreground">
                            Industries
                          </h1>
                          <div className=" gap-2">
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
                  "/NFT" === pathname &&
                  "text-primary bg-primary/5 font-semibold"
                }`}
              >
                NFT
              </Link>
              <NavigationMenu.Root>
                <NavigationMenu.List>
                  <NavigationMenu.Item>
                    <NavigationMenu.Trigger className={navMenuStyle}>
                      Community{" "}
                      <CaretDownIcon className="CaretDown" aria-hidden />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="NavigationMenuContent">
                      <div className=" p-3 w-full bg-background">
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
              <Button
              variant="default"
              className="whitespace-nowrap font-semibold font-mont w-[80%]"
              style={{
                background:
                  "linear-gradient(277deg, #22B4FD 32.53%, #2D79FF 77.26%)",
              }}
              onClick={() => setSignInModalOpen(true)}
            >
              Sign In
            </Button>
              <Link
                href={"/contacts"}
                className={`${navMenuStyle} ${
                  "/contacts" === pathname &&
                  "text-primary bg-primary/5 font-semibold"
                }`}
              >
                Contacts
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
