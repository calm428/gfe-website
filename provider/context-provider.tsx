"use client"

import React from "react"
import { GFEContext } from "@/context/GFEContext"

interface ProviderProps {
  children: React.ReactNode
}

export default function Provider({ children }: ProviderProps) {
  const [account, setAccount] = React.useState<string>("")
  return (
    <GFEContext.Provider
      value={{
        account,
        setAccount,
      }}
    >
      {children}
    </GFEContext.Provider>
  )
}
