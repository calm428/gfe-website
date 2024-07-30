import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function ProtectedPageLayout({ children }: Props) {
  return (
    <div className="relative flex flex-col">
      <main className="w-full grow">{children}</main>
    </div>
  )
}
