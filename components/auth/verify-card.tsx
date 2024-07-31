"use client"

import { useState } from "react"
import Image from "next/image"
import NextLink from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import logoPic from "@/public/images/round-logo.png"
import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/link"
import axios, { AxiosError } from "axios"
import { useSession } from "next-auth/react"
import { useTranslations } from "next-intl"
import toast from "react-hot-toast"
import VerificationInput from "react-verification-input"

export function VerifyCard() {
  const t = useTranslations("main")
  const searchParams = useSearchParams()
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [code, setCode] = useState<string>("")
  const { update } = useSession()

  const handleVerify = async () => {
    setLoading(true)

    if (!code || code.length !== 6) {
      toast.error("Please enter a valid verification code", {
        position: "top-right",
      })
      setLoading(false)
      return
    }

    try {
      const res = await axios.post("/api/auth/verify", {
        code,
      })

      if (res.status === 200) {
        toast.success("Your account has been verified successfully!", {
          position: "top-right",
        })

        await update()

        router.push(
          searchParams.get("callbackUrl") ||
            process.env.NEXT_PUBLIC_DEFAULT_WEBSITE_URL ||
            "/"
        )
      } else {
        toast.error("Something went wrong!", {
          position: "top-right",
        })
      }
    } catch (error) {
      const err = error as AxiosError

      if (
        (err.response?.data as any)?.message === "verification_code_invalid"
      ) {
        toast.error("Verification code is invalid", {
          position: "top-right",
        })
      } else if (
        (err.response?.data as any)?.message === "verification_code_expired"
      ) {
        toast.error("Verification code has expired", {
          position: "top-right",
        })
      } else if ((err.response?.data as any)?.message === "user_not_found") {
        toast.error("User not found", {
          position: "top-right",
        })
      } else {
        toast.error("Something went wrong!", {
          position: "top-right",
        })
      }
    } finally {
      setLoading(false)
    }
  }

  const handleResend = async () => {
    try {
      const res = await axios.post("/api/auth/resend-verification")

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

      if ((err.response?.data as any)?.message === "unauthorized") {
        toast.error("You are not authorized", {
          position: "top-right",
        })
      } else if ((err.response?.data as any)?.message === "user_not_found") {
        toast.error("User not found", {
          position: "top-right",
        })
      } else if ((err.response?.data as any)?.message === "too_many_attempts") {
        toast.error("You have exceeded the maximum number of attempts", {
          position: "top-right",
        })
      } else {
        toast.error("Something went wrong!", {
          position: "top-right",
        })
      }
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
        <p className="text-center text-2xl sm:text-3xl">Verification</p>
        <p className="max-w-sm text-center text-default-400">
          To help maintain a trusted community, please verify your account.
          It&apos;s quick, simple, and secure.
        </p>
      </div>
      <div className="mt-8 flex w-full max-w-sm flex-col gap-3">
        <VerificationInput
          classNames={{
            container: "w-full",
            character: "border-1 rounded-md border-gray-200",
            characterInactive: "bg-background",
            characterSelected: "",
          }}
          aria-labelledby="verification-code"
          value={code}
          onChange={(value) => setCode(value)}
          placeholder="_"
        />
        <Button
          color="primary"
          className="w-full bg-gradient-to-r from-[#2D79FF] to-[#22B4FD]"
          isLoading={loading}
          isDisabled={code.length !== 6}
          onClick={handleVerify}
        >
          Continue
        </Button>
        <div className="mt-8 w-full max-w-sm space-y-4">
          <p className="text-center">
            Didn&apos;t receive the code?{" "}
            <Link
              href="#"
              className="bg-gradient-to-r from-[#2D79FF] to-[#22B4FD] bg-clip-text text-transparent"
              as={NextLink}
              onClick={handleResend}
            >
              Try again
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
