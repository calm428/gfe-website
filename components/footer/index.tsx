"use client"

import Link from "next/link"
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  PhoneCall,
  Twitter,
} from "lucide-react"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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

export function SiteFooter() {
  return (
    <footer className="relative z-40 w-full border-b bg-primary/5">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 bg-primary max-w-5xl p-5 sm:p-5 md:p-10 lg:mx-auto -mt-20 rounded-3xl mx-4 sm:mx-6 md:mx-8"
        style={{
          background:
            "linear-gradient(277deg, #22B4FD 32.53%, #2D79FF 77.26%), #1570EF",
          boxShadow: "0px 0px 18px 0px rgba(0, 0, 0, 0.06)",
        }}
      >
        <div className="hidden sm:block">
          <div className="text-sm text-white font-mont font-medium my-1">
            Subscribe to be informed
          </div>
          <div className="text-3xl text-white font-monument">Stay Informed</div>
        </div>
        <div>
          <div className="text-sm text-white font-monument my-1">
            Newsletter
          </div>
          <div className="flex w-full  items-center">
            <Input
              type="email"
              placeholder="Email"
              className="bg-transparent text-white placeholder:text-white rounded-r-none"
            />
            <Button
              type="submit"
              variant="secondary"
              className="rounded-l-none font-monument"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="container flex md:flex-row flex-col items-start space-x-4 sm:justify-between sm:space-x-0 py-8">
        <div className="md:w-[40%] w-full">
          <div className="text-xl text-primary font-monument my-2">
            About us
          </div>
          <div className="text-sm text-primary font-mont">
            Welcome to SUNBELT Mining, a pioneer in cryptocurrency mining.
            Committed to innovation and sustainability, we offer cutting-edge
            SUNBELT miners for optimal performance. With a focus on eco-friendly
            practices and customer satisfaction, we provide tailored solutions
            for all levels of miners. Join us in shaping the future of
            sustainable and advanced cryptocurrency mining.
          </div>
          <div className="text-xl text-primary font-monument my-2 hidden md:block">
            Follow us
          </div>
          <div className="md:flex hidden">
            <Button variant="ghost" size="icon">
              <Facebook className="text-primary w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Instagram className="text-primary w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter className="text-primary w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="text-primary w-5 h-5" />
            </Button>
          </div>
        </div>
        <div className="md:w-[20%] w-full !mx-0">
          <div className="text-xl text-primary font-monument my-2">
            Important Links
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:grid-cols-1">
            {siteConfig.footerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="flex items-center text-sm font-mont text-primary my-2 rounded-lg hover:text-primary"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="md:w-[20%] w-full !mx-0">
          <div className="text-xl text-primary font-monument my-2">
            Contact Us
          </div>
          <div>
            <div className="flex text-sm font-mont text-primary my-2 gap-2">
              <PhoneCall />
              {siteConfig.contact.phone}
            </div>
            <div className="flex text-sm font-mont text-primary my-2 gap-2">
              <Mail />
              {siteConfig.contact.email}
            </div>
          </div>
          <div className="text-xl text-primary font-monument my-2">Address</div>
          <div className="text-sm text-primary font-mont">
            {siteConfig.contact.address}
          </div>
        </div>
        <div className="!mx-0 md:hidden">
          <div className="text-xl text-primary font-monument my-2">
            Follow us
          </div>
          <div className="flex">
            <Button variant="ghost" size="icon">
              <Facebook className="text-primary w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Instagram className="text-primary w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter className="text-primary w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="text-primary w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full text-center text-xs uppercase text-primary font-medium py-4 bg-primary/10">
        COPYRIGHT © 2023 TRADEVISION. ALL RIGHTS RESERVED
      </div>
    </footer>
  )
}
