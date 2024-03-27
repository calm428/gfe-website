"use client"

import React, { ReactNode } from "react"
import { SessionProvider, SessionProviderProps } from "next-auth/react"

interface IProps {
  children: ReactNode
  session: SessionProviderProps["session"]
}

const SessionProviders: React.FC<IProps> = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>
}

export default SessionProviders
