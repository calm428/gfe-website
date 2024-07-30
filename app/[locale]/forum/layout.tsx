import { ReactNode } from "react"

import Navbar from "@/components/header/navbar"

type Props = {
  children: ReactNode
}

export default function ProtectedPageLayout({ children }: Props) {
  return (
    <div className="relative flex flex-col">
      {/* <Navbar /> */}
      <main className="container mx-auto">{children}</main>
    </div>
  )
}
