"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import axios, { AxiosError } from "axios"
import { Facebook, Instagram, Linkedin, Mail, PhoneCall } from "lucide-react"
import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { FaDiscord, FaTelegramPlane } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import * as z from "zod"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import SectionDescription from "../common/section-description"
import SectionTitle from "../common/section-title"

export function SiteFooter() {
  const t = useTranslations("main")

  const formSchema = z.object({
    email: z.string().email(t("footer.enter_valid_email")),
  })

  type UserFormValue = z.infer<typeof formSchema>

  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = async (data: UserFormValue) => {
    try {
      await axios.post("/api/subscribe", data)

      toast.success("Subscribed successfully", {
        position: "top-right",
      })

      form.reset()
    } catch (error) {
      const axiosError = error as AxiosError | any
      if (axiosError.response?.data?.message === "EMAIL_ALREADY_SUBSCRIBED") {
        toast.error(t("footer.subscribe_email_already_exists"), {
          position: "top-right",
        })
      } else {
        toast.error(t("something_went_wrong"), {
          position: "top-right",
        })
      }
    }
  }

  return (
    <footer className="relative z-40 w-full border-b bg-primary/5 ">
      <div className=" px-0 lg:px-24">
        <div className="relative mx-4 -mt-72 flex flex-col justify-between gap-5 rounded-3xl  bg-primary bg-gradient-to-br from-[#2BADFD] to-[#1570EF] p-[40px] sm:mx-6 md:mx-8 md:-mt-40 md:items-center md:p-[60px] lg:mx-auto lg:flex-row">
          <div className="w-full lg:w-[50%] lg:max-w-2xl 	">
            <SectionTitle className="text-white" align="left">
              {t("footer.section2.title")}
            </SectionTitle>
            <SectionDescription
              className="text-white xl:text-base"
              align="left"
            >
              {t("footer.section2.description")}
            </SectionDescription>
          </div>
          <div className="w-full lg:w-[50%] lg:max-w-xl ">
            <div className="auth my-1 text-base  font-semibold text-white">
              {t("footer.newsletter")}
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="auth flex h-12 w-full items-center">
                          <Input
                            type="email"
                            aria-label="Email"
                            placeholder="Email"
                            {...field}
                            className="auth h-full rounded-r-none  bg-transparent text-white  placeholder:text-white"
                          />
                          <Button
                            type="submit"
                            variant="secondary"
                            className="auth h-full rounded-l-none font-mont font-semibold"
                          >
                            {t("footer.subscribe")}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </div>
        </div>
        <div className="auth container flex flex-col items-start gap-4 py-[60px] font-mont sm:justify-between md:flex-row">
          <div className="w-full md:w-[40%]">
            <div className="my-6 text-xl font-semibold text-primary">
              {t("footer.goalSection.title")}
            </div>
            <div className="font-mont text-base text-primary">
              {t("footer.goalSection.description")}
            </div>
          </div>
          <div className="!mx-0 w-full md:w-[30%]">
            <div className="my-6 text-xl  font-semibold text-primary">
              {t("footer.important_links")}
            </div>
            <div className="grid grid-cols-2 gap-1 sm:grid-cols-3  md:grid-cols-1">
              {siteConfig.footerLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="  flex items-center rounded-lg font-mont text-base  text-primary hover:text-primary"
                >
                  {t(link.title as any)}
                </Link>
              ))}
            </div>
            <div className="my-4 text-xl  text-primary">
              {" "}
              {t("footer.contact_us")}
            </div>
            <div>
              <div className="my-2 flex gap-2 font-mont text-base text-primary">
                <PhoneCall className="size-5" />
                {siteConfig.contact.phone}
              </div>
              <div className="my-2 flex gap-2 font-mont text-base text-primary">
                <Mail className="size-5" />
                {siteConfig.contact.email}
              </div>
            </div>
          </div>
          <div className="!mx-0 w-full md:w-[30%]">
            <div className="my-6 text-xl  font-semibold text-primary">
              {t("footer.address")}
            </div>
            <div className="font-mont text-base text-primary">
              {siteConfig.contact.address}
            </div>
            <div className="my-4 hidden text-xl text-primary md:block ">
              {t("footer.follow_us")}
            </div>
            <div className="hidden md:flex">
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <Link
                  href={siteConfig.links.facebook}
                  className="flex items-center gap-3"
                  aria-label="Facebook"
                >
                  <Facebook className="size-5  fill-current text-primary" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Link
                  href={siteConfig.links.instagram}
                  className="flex items-center gap-3"
                  aria-label="Instagram"
                >
                  <Instagram className="size-5 text-primary" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Link
                  href={siteConfig.links.twitter}
                  className="flex items-center gap-3"
                  aria-label="Twitter"
                >
                  <FaXTwitter className="size-5 fill-current text-primary" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" aria-label="Linkedin">
                <Link
                  href={siteConfig.links.linkedin}
                  className="flex items-center gap-3"
                  aria-label="Linkedin"
                >
                  <Linkedin className="size-5 fill-current text-primary" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" aria-label="Telegram">
                <Link
                  href={siteConfig.links.telegram}
                  className="flex items-center gap-3"
                  aria-label="Telegram"
                >
                  <FaTelegramPlane className="size-5 fill-current text-primary" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" aria-label="Discord">
                <Link
                  href={siteConfig.links.discord}
                  className="flex items-center gap-3"
                  aria-label="Discord"
                >
                  <FaDiscord className="size-5 fill-current text-primary" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="!mx-0 md:hidden">
            <div className="my-2 text-xl  text-primary">
              {" "}
              {t("footer.follow_us")}
            </div>
            <div className="flex">
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <Link
                  href={siteConfig.links.facebook}
                  className="flex items-center gap-3"
                  aria-label="Facebook"
                >
                  <Facebook className="size-5  fill-current text-primary" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Link
                  href={siteConfig.links.instagram}
                  className="flex items-center gap-3"
                  aria-label="Instagram"
                >
                  <Instagram className="size-5 text-primary" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Link
                  href={siteConfig.links.twitter}
                  className="flex items-center gap-3"
                  aria-label="Twitter"
                >
                  <FaXTwitter className="size-5 fill-current text-primary" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" aria-label="Linkedin">
                <Link
                  href={siteConfig.links.linkedin}
                  className="flex items-center gap-3"
                  aria-label="Linkedin"
                >
                  <Linkedin className="size-5 fill-current text-primary" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" aria-label="Telegram">
                <Link
                  href={siteConfig.links.telegram}
                  className="flex items-center gap-3"
                  aria-label="Telegram"
                >
                  <FaTelegramPlane className="size-5 fill-current text-primary" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" aria-label="Discord">
                <Link
                  href={siteConfig.links.discord}
                  className="flex items-center gap-3"
                  aria-label="Discord"
                >
                  <FaDiscord className="size-5 fill-current text-primary" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="auth flex w-full flex-col items-center justify-between gap-2 bg-primary/5 p-6 py-3 text-xs font-semibold uppercase text-primary md:flex-row md:py-6">
        <p className="order-last md:order-first">
          © 2024 GFE Foundation. ALL RIGHTS RESERVED
        </p>
        <div className="flex gap-4">
          <Link href="/privacy" target="_blank">
            {t("footer.privacy_policy")}
          </Link>
          <Link href="/terms" target="_blank">
            {t("footer.terms_and_conditions")}
          </Link>
        </div>
      </div>
    </footer>
  )
}
