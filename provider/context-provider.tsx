"use client"

import React from "react"
import { ForumContext } from "@/context/forumContext"

interface ProviderProps {
  children: React.ReactNode
}

export default function Provider({ children }: ProviderProps) {
  const [account, setAccount] = React.useState<string>("")
  return (
    <ForumContext.Provider
      value={{
        account,
        setAccount,
      }}
    >
      {children}
    </ForumContext.Provider>
  )
}
