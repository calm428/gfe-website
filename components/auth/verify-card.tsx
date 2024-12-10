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
  const t = useTranslations("main.verify")
  const searchParams = useSearchParams()
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [code, setCode] = useState<string>("")
  const { update } = useSession()

  const handleVerify = async () => {
    setLoading(true)

    if (!code || code.length !== 6) {
      toast.error(t("enter_valid_virification_code"), {
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
        toast.success(t("verified_successfully"), {
          position: "top-right",
        })

        await update()

        router.push(
          searchParams.get("callbackUrl") ||
          process.env.NEXT_PUBLIC_DEFAULT_WEBSITE_URL ||
          "/"
        )
      } else {
        toast.error(t("something_went_wrong"), {
          position: "top-right",
        })
      }
    } catch (error) {
      const err = error as AxiosError

      if (
        (err.response?.data as any)?.message === "verification_code_invalid"
      ) {
        toast.error(t("invalid_verification"), {
          position: "top-right",
        })
      } else if (
        (err.response?.data as any)?.message === "verification_code_expired"
      ) {
        toast.error(t("expired_verification"), {
          position: "top-right",
        })
      } else if ((err.response?.data as any)?.message === "user_not_found") {
        toast.error(t("user_not_Found"), {
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

  const handleResend = async () => {
    try {
      const res = await axios.post("/api/auth/resend-verification")

      if (res.status === 200) {
        toast.success(t("virification_sent"), {
          position: "top-right",
        })
      } else {
        toast.error(t("something_went_wrong"), {
          position: "top-right",
        })
      }
    } catch (error) {
      const err = error as AxiosError

      if ((err.response?.data as any)?.message === "unauthorized") {
        toast.error(t("unauthorized"), {
          position: "top-right",
        })
      } else if ((err.response?.data as any)?.message === "user_not_found") {
        toast.error(t("user_not_Found"), {
          position: "top-right",
        })
      } else if ((err.response?.data as any)?.message === "too_many_attempts") {
        toast.error(t("too_many_attempts"), {
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
        <p className="text-center text-2xl sm:text-3xl">{t("verification")}</p>
        <p className="max-w-sm text-center text-default-400">
          {t("description")}
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
          {t("continue")}
        </Button>
        <div className="mt-8 w-full max-w-sm space-y-4">
          <p className="text-center">
            {t("receive_the_code")}
            <Link
              href="#"
              className="bg-gradient-to-r from-[#2D79FF] to-[#22B4FD] bg-clip-text text-transparent"
              as={NextLink}
              onClick={handleResend}
            >
              {t("try_again")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
