import { cn } from "@/lib/utils"

export default function SectionTitle({
  children,
  className,
  align = "center",
}: {
  children: React.ReactNode
  className?: string
  align?: "left" | "right" | "center"
}) {
  return (
    <h2
      className={cn(
        "bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text font-goldman text-3xl text-transparent sm:text-4xl xl:text-5xl",
        className,
        {
          "text-center": align === "center",
          "text-left": align === "left",
          "text-right": align === "right",
        }
      )}
    >
      {children}
    </h2>
  )
}
