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
        "mt-3 bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text font-goldman text-3xl tracking-wider text-transparent sm:text-4xl md:text-6xl",
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
