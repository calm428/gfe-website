"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react"
import { useTranslation } from "next-i18next"

import { siteConfig } from "@/config/site"

import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

function Introduction() {
  const { t } = useTranslation()

  return (
    <div className="auth w-full bg-[url('/images/bg-gradient.webp')] bg-cover bg-center bg-no-repeat px-10 py-24">
      <div className="mx-auto grid w-full max-w-7xl overflow-hidden rounded-xl lg:grid-cols-2">
        <div className="bg-primary/10 p-8">
          <div>
            <div className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text font-goldman text-5xl text-transparent">
              {t("contactus_page.bookMeetingTitle")}
            </div>
            <p className="auth my-4 font-mont text-base lg:text-lg">
              {t("contactus_page.bookMeetingDescription")}
            </p>
            <div className="mb-24 mt-4 flex flex-col gap-4 md:flex-row lg:flex-col xl:flex-row">
              <Button
                className=" auth bg-gradient-to-l from-[#2BADFD] to-[#1570EF] px-8 py-4 font-mont"
                asChild
              >
                <Link
                  href={siteConfig.links.calcom}
                  className="flex items-center gap-3"
                  target="_blank"
                >
                  {t("contactus_page.bookMeetingCEO")}
                </Link>
              </Button>
              {/* <Button
                className="auth border border-secondary-foreground bg-background px-8 py-4 hover:bg-muted"
                variant="outline"
                asChild
              >
                <Link
                  href={siteConfig.links.docs}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <Image
                    src="/images/contacts/calendly.svg"
                    width={24}
                    height={25}
                    alt="calendly"
                    className="h-6 w-6"
                  />
                  Calendly
                </Link>
              </Button> */}
            </div>
          </div>
          <div className="auth flex flex-col gap-6">
            <div className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text font-mont text-2xl font-bold text-transparent">
              {t("contactus_page.contactInfo.title")}
            </div>
            <div className="flex flex-col gap-2 md:flex-row lg:flex-col xl:flex-row">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm uppercase text-muted-foreground">
                      {t("contactus_page.contactInfo.email")}
                    </div>
                    <div className="text-md font-medium text-black">
                      info@gfe.foundation
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm uppercase text-muted-foreground">
                      {t("contactus_page.contactInfo.phone")}
                    </div>
                    <div className="text-md font-medium text-black">
                      0000000000000
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-md font-medium text-black">
                      83 McDonald Road, City of Edinburgh, Alba / Scotland, EH7
                      4NQ, United Kingdom
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text font-mont text-lg font-medium text-transparent">
                  <div className="h-[3px] w-6 bg-primary"></div>
                  connect with us:
                </div>
                <div className="flex gap-2">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Facebook className="h-6 w-6 text-primary" />
                  </div>
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Twitter className="h-6 w-6 text-primary" />
                  </div>
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Instagram className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-secondary p-8 px-16">
          <div className="auth flex w-full flex-col gap-6">
            <div className="flex w-full gap-4">
              <div className="w-full">
                <div className="text-md font-mont text-muted-foreground">
                  {t("contactus_page.formFields.name.title")}
                </div>
                <Input
                  type="text"
                  placeholder={t("contactus_page.formFields.name.placeholder")}
                />
              </div>
              <div className="w-full">
                <div className="text-md font-mont text-muted-foreground">
                  {t("contactus_page.contactInfo.email")}
                </div>
                <Input type="email" placeholder="Email address" />
              </div>
            </div>
            <div>
              <div className="text-md font-mont text-muted-foreground">
                {t("contactus_page.formFields.subject.title")}
              </div>
              <Input
                type="text"
                placeholder={t("contactus_page.formFields.subject.placeholder")}
              />
            </div>
            <div>
              <div className="text-md font-mont text-muted-foreground">
                {t("contactus_page.formFields.message.title")}
              </div>
              <Textarea
                placeholder={t("contactus_page.formFields.message.placeholder")}
                rows={10}
              />
            </div>
          </div>
          <Button className="auth mt-6 w-full bg-gradient-to-l from-[#2BADFD] to-[#1570EF] px-8 py-4 font-mont">
            Send
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Introduction
