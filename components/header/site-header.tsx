"use client"

import { useContext } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SunbeltContext } from "@/context/context"
import { CaretDownIcon } from "@radix-ui/react-icons"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import { Menu, X } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { MainNav } from "@/components/header/main-nav"

import { ForgotPwModal } from "../auth/forgot"
import { ResetModal } from "../auth/reset"
import { SignInModal } from "../auth/signin"
import { SignUpModal } from "../auth/signup"
import { VerifyModal } from "../auth/verify"
import ExpandableText from "./expandable-text"
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
    "flex items-center rounded-lg p-2 font-mont text-sm font-medium text-muted-foreground hover:text-primary"
  )

  // menulist items

  const token_functionalities = siteConfig.token_functionalities
  const industry = siteConfig.industry
  const community = siteConfig.community
  return (
    <>
      <header
        className="siteheader sticky top-0 z-50 w-full border-b bg-background px-0 font-mont"
        onClick={() => mobileNavOpen && setMobileNavOpen(false)}
      >
        <div className="container flex h-20 items-center space-x-4 sm:justify-between sm:space-x-0">
          <MainNav items={siteConfig.mainNav} />
          <div className="hidden space-x-4 lg:flex">
            <Button
              variant="default"
              className="!mx-2 whitespace-nowrap font-mont font-semibold"
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
          <div className="flex gap-1 lg:hidden">
            <LanguageSelector />
            <Button
              variant="default"
              className="!mx-2 block whitespace-nowrap font-mont font-semibold lg:hidden"
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
        className={` ${mobileNavOpen ? "block" : "hidden"
          } absolute inset-0 z-50 bg-[#03375c3d] !bg-opacity-20 backdrop-blur-sm lg:hidden`}
      >
        <div
          className={`${mobileNavOpen ? "right-0 " : "-right-[360px]"
            } fixed z-30  h-full min-w-[360px] max-w-[360px] bg-background transition-all lg:hidden`}
        >
          <div className="flex h-full flex-col">
            <div className="sticky top-0 z-50 bg-background pt-5">
              <div className="flex justify-between">
                <Link
                  href="/"
                  className="flex w-[150px] flex-col items-center justify-center gap-1"
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
                  className="!mx-2 block whitespace-nowrap font-mont font-semibold lg:hidden"
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
                className="mx-auto my-[16px] block h-[3px] w-[90%] bg-[#2BADFD]"
              />
            </div>

            <nav className="auth flex w-full  flex-col items-center gap-6">
              <NavigationMenu.Root>
                <NavigationMenu.List>
                  <NavigationMenu.Item>
                    <NavigationMenu.Trigger
                      className={` ${navMenuStyle} flex w-full items-center justify-center`}
                    >
                      Ecosystem
                      <CaretDownIcon className="CaretDown" aria-hidden />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="NavigationMenuContent h-fit">
                      <div className=" flex flex-col border border-border bg-background">
                        <div className="p-[24px]">
                          <h1 className="text-center font-mont text-[14px] font-medium capitalize text-muted-foreground">
                            token functionalities
                          </h1>
                          {token_functionalities.map((functionality, ind) => (
                            <Link
                              href={"#"}
                              key={ind}
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
                          <h1 className="text-center font-mont text-[14px] font-medium capitalize text-muted-foreground">
                            Industries
                          </h1>
                          <div className=" gap-2">
                            {industry.map((functionality, ind) => (
                              <Link
                                href={"#"}
                                key={ind}
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
                                    <p className=" font-mont text-[14px] font-semibold capitalize">
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
                        </div>
                      </div>
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>
                </NavigationMenu.List>
              </NavigationMenu.Root>
              <Link
                href={"/NFT"}
                className={` ${navMenuStyle} ${"/NFT" === pathname &&
                  "bg-primary/5 font-semibold text-primary"
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
                      <div className=" w-full bg-background p-3">
                        {community.map((community, ind) => (
                          <Link
                            href={"#"}
                            key={ind}
                            className="flex gap-2 py-2"
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
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>
                </NavigationMenu.List>
              </NavigationMenu.Root>
              <div className="flex items-center ">
                <Link
                  href={"/about-us"}
                  className={` ${navMenuStyle} ${"/about-us" === pathname &&
                    "bg-primary/5 font-semibold text-primary"
                    }`}
                >
                  About us
                </Link>
              </div>
              <Link
                href={"/blogs-and-news"}
                className={` ${navMenuStyle} ${"/blogs-and-news" === pathname &&
                  "bg-primary/5 font-semibold text-primary"
                  }`}
              >
                Blogs and News
              </Link>
              <Button
                variant="default"
                className="w-[80%] whitespace-nowrap font-mont font-semibold"
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
                className={`${navMenuStyle} ${"/contacts" === pathname ?
                    "bg-primary/5 font-semibold text-primary" : ""
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
