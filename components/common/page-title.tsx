import { cn } from "@/lib/utils"

export default function PageTitle({
  children,
  className,
  align = "center",
}: {
  children: React.ReactNode
  className?: string
  align?: "left" | "right" | "center"
}) {
  return (
    <h1
      className={cn(
        "mt-8 text-balance bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text pb-1.5 font-sans text-4xl font-semibold text-transparent sm:text-5xl xl:text-6xl xl:leading-[72px]",
        className,
        {
          "text-center": align === "center",
          "text-left": align === "left",
          "text-right": align === "right",
        }
      )}
    >
      {children}
    </h1>
  )
}
