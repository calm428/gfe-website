import { createContext, useContext } from "react"

export type ForumContent = {
    account: string
    setAccount: (account: string) => void
  }
  
  export const ForumContext = createContext<ForumContent>({
    account: "",
    setAccount: () => {},
  })
  
  export const useForumContext = () => useContext(ForumContext)