"use client"

import { useState } from "react"
import Image from "next/image"
import NextLink from "next/link"
import { useRouter } from "next/navigation"
import logoPic from "@/public/images/round-logo.png"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@nextui-org/button"
import { Divider } from "@nextui-org/divider"
import { Input } from "@nextui-org/input"
import { Link } from "@nextui-org/link"
import axios from "axios"
import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { FcGoogle } from "react-icons/fc"
import { IoMdEye, IoMdEyeOff } from "react-icons/io"
import * as z from "zod"

export function SignUpCard() {
  const t = useTranslations("main")
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const formSchema = z.object({
    firstName: z
      .string()
      .min(1, "First name is required")
      .regex(/^\p{Letter}*$/u, "Only alphabets are allowed and no spaces"),
    lastName: z
      .string()
      .min(1, "Last name is required")
      .regex(/^\p{Letter}*$/u, "Only alphabets are allowed and no spaces"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
  })

  type UserFormValue = z.infer<typeof formSchema>

  const defaultValues = {
    firstName: "",
    lastName: "",
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
    setLoading(true)

    try {
      const res = await axios.post("/api/auth/signup", data)

      if (res.status === 200) {
        toast.success("Your account has been created successfully!", {
          position: "top-right",
        })

        router.push("/signin")
      } else {
        toast.error("Something went wrong!", {
          position: "top-right",
        })
      }
    } catch (error) {
      toast.error("Something went wrong!", {
        position: "top-right",
      })
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
          <div className="grid grid-cols-2 gap-2">
            <Input
              {...register("firstName")}
              label="First name"
              variant="bordered"
              isInvalid={!!errors.firstName}
              color={errors.firstName ? "danger" : "default"}
              errorMessage={errors.firstName && errors.firstName.message}
              className="w-full"
            />
            <Input
              {...register("lastName")}
              label="Last name"
              variant="bordered"
              isInvalid={!!errors.lastName}
              color={errors.lastName ? "danger" : "default"}
              errorMessage={errors.lastName && errors.lastName.message}
              className="w-full"
            />
          </div>
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
          <Button
            type="submit"
            color="primary"
            className="w-full bg-gradient-to-r from-[#2D79FF] to-[#22B4FD]"
            isLoading={loading}
          >
            Register
          </Button>
          <p>
            By registering you accept the{" "}
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
