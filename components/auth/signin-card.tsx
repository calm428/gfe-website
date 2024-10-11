"use client"

import { useState } from "react"
import Image from "next/image"
import NextLink from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import logoPic from "@/public/images/round-logo.png"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@nextui-org/button"
import { Checkbox } from "@nextui-org/checkbox"
import { Divider } from "@nextui-org/divider"
import { Input } from "@nextui-org/input"
import { Link } from "@nextui-org/link"
import { signIn } from "next-auth/react"
import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { FcGoogle } from "react-icons/fc"
import { IoMdEye, IoMdEyeOff } from "react-icons/io"
import ReCAPTCHA from "react-google-recaptcha"
import * as z from "zod"

export function SignInCard() {
  const t = useTranslations("main")
  const searchParams = useSearchParams()
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [captcha, setCaptcha] = useState(null)

  const formSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
  })

  type UserFormValue = z.infer<typeof formSchema>

  const defaultValues = {
    email: "",
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
    if (!captcha) {
      toast.error('Please complete the captcha!');
      return
    }

    setLoading(true)

    const status = await signIn("email", {
      email: data.email,
      password: data.password,
      redirect: false,
    })

    if (status?.error) {
      toast.error(status?.error, {
        position: "top-right",
      })
    }
    if (status?.ok) {
      toast.success("Welcome back to GFE Foundation!", {
        position: "top-right",
      })

      router.push(
        searchParams.get("callbackUrl") ||
          process.env.NEXT_PUBLIC_DEFAULT_WEBSITE_URL ||
          "/"
      )
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
      <p className="text-center text-2xl sm:text-3xl">
        Welcome to{" "}
        <span className="bg-gradient-to-r from-[#77C167] to-[#1A88F9] bg-clip-text font-semibold text-transparent">
          GFE Foundation
        </span>
      </p>
      <div className="mt-8 flex w-full max-w-sm flex-col gap-3">
        <div>
          <Button
            color="default"
            variant="bordered"
            startContent={<FcGoogle size={20} />}
            className="w-full"
          >
            Continue with Google
          </Button>
        </div>
        <div className="relative w-full">
          <Divider className="my-4" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-3 text-default-400">
            OR
          </span>
        </div>
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
          <div className="flex w-full justify-end">
            <Link href="/forgot-password" as={NextLink}>
              Forgot password?
            </Link>
          </div>
          <Checkbox>Remember me</Checkbox>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={(code) => setCaptcha(code)}
          />
          <Button
            type="submit"
            color="primary"
            className="w-full bg-gradient-to-r from-[#2D79FF] to-[#22B4FD]"
            isLoading={loading}
          >
            Sign In
          </Button>
          <p>
            By signing in you accept the{" "}
            <Link
              href={process.env.NEXT_PUBLIC_TERMS_URL || "#"}
              as={NextLink}
              target="_blank"
              className="text-primary"
            >
              Terms & Conditions
            </Link>{" "}
            and the{" "}
            <Link
              href={process.env.NEXT_PUBLIC_PRIVACY_URL || "#"}
              as={NextLink}
              target="_blank"
              className="text-primary"
            >
              Privacy Policy
            </Link>
          </p>
        </form>
        <div className="mt-8 w-full max-w-sm space-y-4">
          <p className="text-center">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="bg-gradient-to-r from-[#2D79FF] to-[#22B4FD] bg-clip-text text-transparent"
              as={NextLink}
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
