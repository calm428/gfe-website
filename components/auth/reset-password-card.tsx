"use client"

import { useState } from "react"
import Image from "next/image"
import NextLink from "next/link"
import { useRouter } from "next/navigation"
import logoPic from "@/public/images/round-logo.png"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import { Link } from "@nextui-org/link"
import axios, { AxiosError } from "axios"
import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { IoMdEye, IoMdEyeOff } from "react-icons/io"
import * as z from "zod"

export function ResetPasswordCard({ token }: { token: string }) {
  const t = useTranslations("main.reset-password")
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const formSchema = z.object({
    password: z.string().min(8, "Password must be at least 8 characters"),
  })

  type UserFormValue = z.infer<typeof formSchema>

  const defaultValues = {
    password: "",
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })

  const onSubmit = async (data: UserFormValue) => {
    setLoading(true)

    try {
      const res = await axios.post("/api/auth/reset-password", {
        token,
        password: data.password,
      })

      if (res.status === 200) {
        toast.success(t("your_password_has_been_reset_successfully"), {
          position: "top-right",
        })

        router.push("/signin")
      } else {
        toast.error(t("something_went_wrong"), {
          position: "top-right",
        })
      }
    } catch (error) {
      const err = error as AxiosError

      if ((err.response?.data as any)?.message === "invalid_token") {
        toast.error(t("invalid_token"), {
          position: "top-right",
        })
      } else if ((err.response?.data as any)?.message === "user_not_found") {
        toast.error(t("user_not_found"), {
          position: "top-right",
        })
      } else if ((err.response?.data as any)?.message === "token_expired") {
        toast.error(t("token_expired"), {
          position: "top-right",
        })
      } else {
        toast.error(t("something_went_wrong"), {
          position: "top-right",
        })
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex size-full flex-col items-center justify-center">
      <div className="mb-8">
        <Link href="/" className="flex items-center gap-2" as={NextLink}>
          <Image
            src={logoPic}
            alt="GFE Foundation logo"
            className="max-w-[50px] dark:hidden"
          />
        </Link>
      </div>
      <div>
        <p className="text-center text-2xl sm:text-3xl">{t("reset_password")}</p>
        <p className="max-w-md text-center text-default-400">
          {t("create_new_password")}
        </p>
      </div>
      <div className="mt-8 flex w-full max-w-sm flex-col gap-3">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-2">
          <Input
            {...register("password")}
            label={t("password")}
            variant="bordered"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <IoMdEyeOff className="pointer-events-none text-2xl text-default-400" />
                ) : (
                  <IoMdEye className="pointer-events-none text-2xl text-default-400" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            isInvalid={!!errors.password}
            color={errors.password ? "danger" : "default"}
            errorMessage={errors.password && errors.password.message}
            className="w-full"
          />
          <Button
            type="submit"
            color="primary"
            className="w-full bg-gradient-to-r from-[#2D79FF] to-[#22B4FD]"
            isLoading={loading}
          >
            {t("reset_password")}
          </Button>
        </form>
        <div className="mt-8 w-full max-w-sm space-y-4">
          <p className="text-center">
            {t("already_have_an_account")}
            <Link
              href="/signin"
              className="bg-gradient-to-r from-[#2D79FF] to-[#22B4FD] bg-clip-text text-transparent"
              as={NextLink}
            >
              {t("sign_in")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
