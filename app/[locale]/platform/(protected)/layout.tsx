import { ReactNode } from "react"

import Navbar from "@/components/header/platform/navbar"

type Props = {
  children: ReactNode
}

export default function ProtectedPageLayout({ children }: Props) {
  return (
    <div className="relative flex h-screen flex-col">
      {/** @ts-ignore */}
      <Navbar />
      <main className="w-full grow">{children}</main>
    </div>
  )
}
