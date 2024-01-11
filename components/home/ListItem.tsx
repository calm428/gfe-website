import React from "react"
import Image from "next/image"

interface Props {
  text: string
}
function ListItem({ text }: Props) {
  return (
    <div className="flex gap-4 items-center">
      <Image src={"/advantages/check.svg"} width={20} height={20} alt="icon" />
      <h2 className="font-muted-foreground text-base auth">{text}</h2>
    </div>
  )
}

export default ListItem
