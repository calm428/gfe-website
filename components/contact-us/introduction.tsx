"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import axios, { AxiosError } from "axios"
import {
  Facebook,
  Instagram,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react"
import { useTranslation } from "next-i18next"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import * as z from "zod"

import { siteConfig } from "@/config/site"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

function Introduction() {
  const { t } = useTranslation()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const formSchema = z.object({
    name: z
      .string()
      .min(1, { message: t("contactus_page.formFields.invalidName") }),
    email: z.string().email(t("contactus_page.formFields.invalidEmail")),
    subject: z
      .string()
      .min(1, { message: t("contactus_page.formFields.invalidSubject") }),
    message: z
      .string()
      .min(1, { message: t("contactus_page.formFields.invalidMessage") }),
  })

  type UserFormValue = z.infer<typeof formSchema>

  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = async (data: UserFormValue) => {
    setIsLoading(true)

    try {
      await axios.post("/api/feedback", {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      })

      toast.success(t("contactus_page.formFields.success"), {
        position: "top-right",
      })
    } catch (error) {
      toast.error(t("contactus_page.formFields.error"), {
        position: "top-right",
      })
    }

    setIsLoading(false)
  }

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
                    className="size-6"
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
                    <Mail className="size-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm uppercase text-muted-foreground">
                      {t("contactus_page.contactInfo.email")}
                    </div>
                    <div className="text-md font-medium text-black">
                      {siteConfig.emails.info}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Phone className="size-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm uppercase text-muted-foreground">
                      {t("contactus_page.contactInfo.phone")}
                    </div>
                    <div className="text-md font-medium text-black">
                      {siteConfig.contact.phone}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <MapPin className="size-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-md font-medium text-black">
                      {siteConfig.contact.address}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text font-mont text-lg font-medium lowercase text-transparent">
                  <div className="h-[3px] w-6 bg-primary"></div>
                  {t("contactus_page.contactInfo.connect_with_us")}
                </div>
                <div className="flex gap-2">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Facebook className="size-6 text-primary" />
                  </div>
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Twitter className="size-6 text-primary" />
                  </div>
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Linkedin className="size-6 text-primary" />
                  </div>
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Instagram className="size-6 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-center bg-secondary p-8 px-16"
          >
            <div className="auth flex w-full flex-col gap-6">
              <div className="flex w-full gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-md font-mont text-muted-foreground">
                        {t("contactus_page.formFields.name.title")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          placeholder={t(
                            "contactus_page.formFields.name.placeholder"
                          )}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-md font-mont text-muted-foreground">
                        {t("contactus_page.formFields.email.title")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          placeholder={t(
                            "contactus_page.formFields.email.placeholder"
                          )}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-md font-mont text-muted-foreground">
                      {t("contactus_page.formFields.subject.title")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        placeholder={t(
                          "contactus_page.formFields.subject.placeholder"
                        )}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-md font-mont text-muted-foreground">
                      {t("contactus_page.formFields.message.title")}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder={t(
                          "contactus_page.formFields.message.placeholder"
                        )}
                        rows={10}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="auth mt-6 w-full bg-gradient-to-l from-[#2BADFD] to-[#1570EF] px-8 py-4 font-mont"
            >
              {isLoading && <Loader2 className="mr-2 size-4 animate-spin" />}
              {t("contactus_page.formFields.send")}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default Introduction
