"use client"

// import { Metadata } from "next"
import { useSearchParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import axios, { AxiosError } from "axios"
import { MailX } from "lucide-react"
import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import SectionDescription from "@/components/common/section-description"
import SectionTitle from "@/components/common/section-title"

// export const metadata: Metadata = {
//   metadataBase: new URL(process.env.NEXT_PUBLIC_METADATA_BASE || ""),
//   title: "Unsubscribe",
//   description: "Unsubscribe from our newsletter and updates.",
//   openGraph: {
//     title: "Unsubscribe",
//     description: "Unsubscribe from our newsletter and updates.",
//   },
// }

function Page() {
  const t = useTranslations("main")
  const searchParams = useSearchParams()

  const formSchema = z.object({
    email: z.string().email(t("unsubscribe.enter_valid_email")),
  })

  type UserFormValue = z.infer<typeof formSchema>

  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: searchParams.get("email") || "",
    },
  })

  const onSubmit = async (data: UserFormValue) => {
    try {
      await axios.delete("/api/subscribe/delete", {
        data: {
          email: data.email,
        },
      })

      toast.success(t("unsubscribe.unsubscribe_success"), {
        position: "top-right",
      })

      form.reset()
    } catch (error) {
      const axiosError = error as AxiosError | any

      if (axiosError.response?.data?.message === "EMAIL_NOT_FOUND") {
        toast.error(t("unsubscribe.unsubscribe_email_not_exist"), {
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
    <section className="container pb-[300px] pt-10 md:pb-[200px] lg:px-24">
      <div className="text-center">
        <MailX className="mx-auto mb-8 size-16 text-gray-500" />
        <SectionTitle>{t("unsubscribe.unsubscribe")}</SectionTitle>
        <SectionDescription className="italic text-gray-500 md:text-base">
          {t("unsubscribe.unsubscribe_content")}
        </SectionDescription>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="auth mx-auto mt-16 flex h-12 w-full max-w-md items-center">
                      <Input
                        type="email"
                        aria-label="Email"
                        placeholder="Email"
                        {...field}
                        className="auth h-full rounded-l-full  rounded-r-none bg-transparent"
                      />
                      <Button
                        type="submit"
                        variant="outline"
                        className="auth h-full rounded-l-none rounded-r-full border-l-0 font-mont font-semibold"
                      >
                        {t("unsubscribe.unsubscribe")}
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
    </section>
  )
}

export default Page
