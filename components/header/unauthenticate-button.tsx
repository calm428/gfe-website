"use client"

import { default as Link } from "next/link"
import {
  Button
} from "@nextui-org/react"

import { useTranslations } from "next-intl"

export default function UnauthenticateButton () {
  const t = useTranslations("main")

  return(
    <div>
        <Button
            color="primary"
            className="bg-gradient-to-r from-[#2D79FF] to-[#22B4FD]"
            >
            <Link
                href={`${process.env.NEXT_PUBLIC_AUTH_SERVER}/signin?callbackUrl=${encodeURIComponent(process.env.NEXT_PUBLIC_WEBSITE_URL || "")}`}
            >
                {t("header.sign_in")}
            </Link>
        </Button>
    </div>
    
  )
}