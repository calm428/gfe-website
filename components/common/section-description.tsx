import { cn } from "@/lib/utils"

export default function SectionDescription({
  children,
  className,
  align = "center",
}: {
  children: React.ReactNode
  className?: string
  align?: "left" | "right" | "center"
}) {
  return (
    <p
      className={cn("mt-3 text-sm sm:text-base xl:text-xl", className, {
        "text-center": align === "center",
        "text-left": align === "left",
        "text-right": align === "right",
      })}
    >
      {children}
    </p>
  )
}
