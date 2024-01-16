"use client"

import { cn } from "@/lib/utils"

export default function Coin({
  icon,
  name,
  selected,
  setSelected,
}: {
  icon: any
  name: string
  selected: string
  setSelected: Function
}) {
  return (
    <button
      onClick={() => setSelected(name)}
      className={cn(
        "flex items-center gap-2 rounded-md border-[2px] border-transparent px-2 py-2.5 hover:bg-[#E7F0FD]",
        `${name == selected && "border-primary bg-[#E7F0FD]"}`
      )}
    >
      {icon}
      {name}
    </button>
  )
}
