"use client"

import React, { ReactNode, useState } from "react"
import { SunbeltContext } from "@/context/context"
import i18n from "@/i18n"
import { I18nextProvider } from "react-i18next"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

interface IProps {
  children: ReactNode
}

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
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </I18nextProvider>
    </SunbeltContext.Provider>
  )
}

export default App
