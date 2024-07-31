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
import * as z from "zod"

export function ForgotPasswordCard() {
  const t = useTranslations("main")
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)

  const formSchema = z.object({
    email: z.string().email("Invalid email address"),
  })

  type UserFormValue = z.infer<typeof formSchema>

  const defaultValues = {
    email: "",
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
      const res = await axios.post("/api/auth/forgot-password", data)

      if (res.status === 200) {
        toast.success("Verification code has been sent!", {
          position: "top-right",
        })
      } else {
        toast.error("Something went wrong!", {
          position: "top-right",
        })
      }
    } catch (error) {
      const err = error as AxiosError

      if ((err.response?.data as any)?.message === "user_not_found") {
        toast.error("User not found", {
          position: "top-right",
        })
      } else {
        toast.error("Something went wrong!", {
          position: "top-right",
        })
      }
    }

    setLoading(false)
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
        <p className="text-center text-2xl sm:text-3xl">Forgot Password?</p>
        <p className="max-w-sm text-center text-default-400">
          Enter the email address associated with your account. We&#39;ll send
          you a link to reset your password.
        </p>
      </div>
      <div className="mt-8 flex w-full max-w-sm flex-col gap-3">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-2">
          <Input
            {...register("email")}
            label="Email"
            variant="bordered"
            isInvalid={!!errors.email}
            color={errors.email ? "danger" : "default"}
            errorMessage={errors.email && errors.email.message}
            className="w-full"
          />
          <Button
            type="submit"
            color="primary"
            className="w-full bg-gradient-to-r from-[#2D79FF] to-[#22B4FD]"
            isLoading={loading}
          >
            Continue
          </Button>
        </form>
        <div className="mt-8 w-full max-w-sm space-y-4">
          <p className="text-center">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="bg-gradient-to-r from-[#2D79FF] to-[#22B4FD] bg-clip-text text-transparent"
              as={NextLink}
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
