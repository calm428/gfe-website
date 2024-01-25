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
import { useTranslation } from "next-i18next"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SiteFooter() {
  const { t } = useTranslation()

  return (
    <footer className="relative z-40 w-full border-b bg-primary/5 ">
      <div className=" px-0 lg:px-24">
        <div className="container relative mx-4 -mt-72 flex flex-col justify-between gap-5 rounded-3xl  bg-primary bg-gradient-to-br from-[#2BADFD] to-[#1570EF] p-[40px] sm:mx-6 md:mx-8 md:-mt-40 md:items-center md:p-[60px] lg:mx-auto lg:flex-row">
          <img
            src="/Group 37.svg"
            alt="bg"
            className=" absolute -top-10 left-7"
          />
          <div className="w-full lg:w-[50%] lg:max-w-2xl 	">
            <div className="font-goldman text-5xl text-white ">
              {t("footer_section.section2.title")}
            </div>
            <div className="auth mt-4 font-mont text-base font-semibold  text-white">
              {t("footer_section.section2.description")}
            </div>
          </div>
          <div className="w-full lg:w-[50%] lg:max-w-xl ">
            <div className="auth my-1 text-base  font-semibold text-white">
              {t("footer_section.newsletter")}
            </div>
            <div className="auth flex h-12 w-full items-center">
              <Input
                type="email"
                placeholder="Email"
                className="auth h-full rounded-r-none  bg-transparent text-white  placeholder:text-white"
              />
              <Button
                type="submit"
                variant="secondary"
                className="auth h-full rounded-l-none font-mont font-semibold"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="auth container flex flex-col items-start space-x-4 py-[60px] font-mont sm:justify-between sm:space-x-0 md:flex-row">
          <div className="w-full md:w-[40%]">
            <div className="my-6 text-xl font-semibold text-primary">
              {t("footer_section.goalSection.title")}
            </div>
            <div className="font-mont text-base text-primary">
              {t("footer_section.goalSection.description")}
            </div>
          </div>
          <div className="!mx-0 w-full md:w-[20%]">
            <div className="my-6 text-xl  font-semibold text-primary">
              {t("footer_section.important_links")}
            </div>
            <div className="grid grid-cols-2 gap-1 sm:grid-cols-3  md:grid-cols-1">
              {siteConfig.footerLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="  flex items-center rounded-lg font-mont text-base  text-primary hover:text-primary"
                >
                  {t(link.title)}
                </Link>
              ))}
            </div>
            <div className="my-4 text-xl  text-primary">
              {" "}
              {t("footer_section.contact_us")}
            </div>
            <div>
              <div className="my-2 flex gap-2 font-mont text-base text-primary">
                <PhoneCall className="h-5 w-5" />
                {siteConfig.contact.phone}
              </div>
              <div className="my-2 flex gap-2 font-mont text-base text-primary">
                <Mail className="h-5 w-5" />
                {siteConfig.contact.email}
              </div>
            </div>
          </div>
          <div className="!mx-0 w-full md:w-[20%]">
            <div className="my-6 text-xl  font-semibold text-primary">
              {t("footer_section.address")}
            </div>
            <div className="font-mont text-base text-primary">
              {siteConfig.contact.address}
            </div>
            <div className="my-4 hidden text-xl text-primary md:block ">
              {t("footer_section.follow_us")}
            </div>
            <div className="hidden md:flex">
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5 fill-current text-primary" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5 text-primary" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5 fill-current text-primary" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5 fill-current text-primary" />
              </Button>
            </div>
          </div>
          <div className="!mx-0 md:hidden">
            <div className="my-2 text-xl  text-primary">
              {" "}
              {t("footer_section.follow_us")}
            </div>
            <div className="flex">
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5  fill-current text-primary" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5 text-primary" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5 fill-current text-primary" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5 fill-current text-primary" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="auth w-full bg-primary/10 py-6 text-center text-xs font-medium uppercase text-primary">
        © 2024 GFE Foundation. ALL RIGHTS RESERVED
      </div>
    </footer>
  )
}
