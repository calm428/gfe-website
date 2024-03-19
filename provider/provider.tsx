"use client"

import React, { ReactNode, useState } from "react"
import { SunbeltContext } from "@/context/context"
import axios from "axios"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

interface IProps {
  children: ReactNode
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

const App: React.FC<IProps> = ({ children }) => {
  const [resetModalOpen, setResetModalOpen] = useState<boolean>(false)
  const [forgotPwModalOpen, setForgotPwModalOpen] = useState<boolean>(false)
  const [signInModalOpen, setSignInModalOpen] = useState<boolean>(false)
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)
  const [signUpModalOpen, setSignUpModalOpen] = useState<boolean>(false)
  const [verifyModalOpen, setVerifyModalOpen] = useState<boolean>(false)

  return (
    <SunbeltContext.Provider
      value={{
        resetModalOpen,
        setResetModalOpen,
        forgotPwModalOpen,
        setForgotPwModalOpen,
        mobileNavOpen,
        setMobileNavOpen,
        signInModalOpen,
        setSignInModalOpen,
        signUpModalOpen,
        setSignUpModalOpen,
        verifyModalOpen,
        setVerifyModalOpen,
      }}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SunbeltContext.Provider>
  )
}

export default App
