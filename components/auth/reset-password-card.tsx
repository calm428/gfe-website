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
  const t = useTranslations("main")
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
        toast.success("Your password has been reset successfully!", {
          position: "top-right",
        })

        router.push("/signin")
      } else {
        toast.error("Something went wrong. Please try again.", {
          position: "top-right",
        })
      }
    } catch (error) {
      const err = error as AxiosError

      if ((err.response?.data as any)?.message === "invalid_token") {
        toast.error("Invalid token. Please try again.", {
          position: "top-right",
        })
      } else if ((err.response?.data as any)?.message === "user_not_found") {
        toast.error("User not found. Please try again.", {
          position: "top-right",
        })
      } else if ((err.response?.data as any)?.message === "token_expired") {
        toast.error("Token expired. Please try again.", {
          position: "top-right",
        })
      } else {
        toast.error("Something went wrong. Please try again.", {
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
        <p className="text-center text-2xl sm:text-3xl">Reset Password</p>
        <p className="max-w-md text-center text-default-400">
          Create a new secure password for your account. A strong, unique
          password will grant immediate access back to your account.
        </p>
      </div>
      <div className="mt-8 flex w-full max-w-sm flex-col gap-3">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-2">
          <Input
            {...register("password")}
            label="Password"
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
            Reset Password
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
