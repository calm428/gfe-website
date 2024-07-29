"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { NextUIProvider } from "@nextui-org/react"

export interface NextUIProvidersProps {
  children: React.ReactNode
}

export function NextUIProviders({ children }: NextUIProvidersProps) {
  const router = useRouter()

  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
}
