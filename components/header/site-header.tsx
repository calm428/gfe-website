"use client"

import { useContext, useState } from "react"
import Link from "next/link"
import { SunbeltContext } from "@/context/context"

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

import { SignInModal } from "../auth/signin"
import { SignUpModal } from "../auth/signup"
import { VerifyModal } from "../auth/verify"
import { LanguageSelector } from "./language"

export function SiteHeader() {
  const {
    signInModalOpen,
    setSignInModalOpen,
    signUpModalOpen,
    setSignUpModalOpen,
    verifyModalOpen,
    setVerifyModalOpen,
  } = useContext(SunbeltContext)

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
          onClick={() => setSignInModalOpen(true)}
        >
          Sign In
        </Button>
        <LanguageSelector />
      </div>

      <SignInModal open={signInModalOpen} setOpen={setSignInModalOpen} />
      <SignUpModal open={signUpModalOpen} setOpen={setSignUpModalOpen} />
      <VerifyModal open={verifyModalOpen} setOpen={setVerifyModalOpen} />
    </header>
  )
}
