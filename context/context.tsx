import { createContext, useContext } from "react"

export type LandingContent = {
  resetModalOpen: boolean
  setResetModalOpen: (open: boolean) => void
  forgotPwModalOpen: boolean
  setForgotPwModalOpen: (open: boolean) => void
  signInModalOpen: boolean
  setSignInModalOpen: (open: boolean) => void
  signUpModalOpen: boolean
  setSignUpModalOpen: (open: boolean) => void
  verifyModalOpen: boolean
  setVerifyModalOpen: (open: boolean) => void
  mobileNavOpen: boolean
  setMobileNavOpen: (open: boolean) => void
}
export const SunbeltContext = createContext<LandingContent>({
  resetModalOpen: false,
  setResetModalOpen: () => {},
  forgotPwModalOpen: false,
  setForgotPwModalOpen: () => {},
  signInModalOpen: false,
  setSignInModalOpen: () => {},
  signUpModalOpen: false,
  setSignUpModalOpen: () => {},
  verifyModalOpen: false,
  setVerifyModalOpen: () => {},
  mobileNavOpen: false,
  setMobileNavOpen: () => {},
})
export const useSunbeltContext = () => useContext(SunbeltContext)