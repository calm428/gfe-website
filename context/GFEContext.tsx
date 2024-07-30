import { createContext, useContext } from "react"

export type GlobalContent = {
    account: string
    setAccount: (account: string) => void
  }
  
  export const GFEContext = createContext<GlobalContent>({
    account: "",
    setAccount: () => {},
  })
  
  export const useGFEContext = () => useContext(GFEContext)