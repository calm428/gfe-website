import { ReactNode } from "react"

import Sidebar from "@/components/sidebar/sidebar"

type Props = {
  children: ReactNode
}

export default function PublicPageLayout({ children }: Props) {
  return (
    <div className="relative flex gap-4">
      <Sidebar className="hidden lg:block" />
      {children}
    </div>
  )
}
