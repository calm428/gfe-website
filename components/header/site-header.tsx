"use client"

import { useContext, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SunbeltContext } from "@/context/context"
import { Divide, Menu } from "lucide-react"

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
import { MainNav } from "@/components/header/main-nav"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

import { ForgotPwModal } from "../auth/forgot"
import { SignInModal } from "../auth/signin"
import { SignUpModal } from "../auth/signup"
import { VerifyModal } from "../auth/verify"
import { LanguageSelector } from "./language"
import { ResetModal } from "../auth/reset"

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

  return (
    <header
      className="bg-background sticky top-0 z-50 w-full border-b"
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
        {mobileNavOpen && (
          <div className="flex lg:hidden absolute left-0 top-20 bg-background w-full  flex-col gap-3 p-4">
            {siteConfig.mainNav?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center text-sm font-medium font-mont text-muted-foreground p-2 rounded-lg hover:text-primary",
                      item.href === pathname &&
                        "text-primary bg-primary/5 font-semibold"
                    )}
                  >
                    {item.title}
                  </Link>
                )
            )}
            <div className="flex space-x-4 justify-center">
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
          </div>
        )}
        <Button
          variant="default"
          className="block lg:hidden whitespace-nowrap font-semibold font-mont !mx-2"
          style={{
            background:
              "linear-gradient(277deg, #22B4FD 32.53%, #2D79FF 77.26%)",
          }}
          onClick={() => setMobileNavOpen(true)}
        >
          <Menu />
        </Button>
      </div>
      <SignInModal open={signInModalOpen} setOpen={setSignInModalOpen} />
      <ForgotPwModal open={forgotPwModalOpen} setOpen={setForgotPwModalOpen} />
      <SignUpModal open={signUpModalOpen} setOpen={setSignUpModalOpen} />
      <VerifyModal open={verifyModalOpen} setOpen={setVerifyModalOpen} />
      <ResetModal open={resetModalOpen} setOpen={setResetModalOpen} />
    </header>
  )
}
