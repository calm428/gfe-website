import React from "react"
import Image from "next/image"

import { Button } from "../ui/button"

interface Props {
  title: string
  desc: string
  image: string
}
function AdvantageDiv({ title, desc, image }: Props) {
  return (
    <div className=" relative flex flex-col overflow-hidden rounded-md border border-border bg-muted">
      <div className="py-[50px] pl-[50px] flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="font-monument text-xl capitalize text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]">
            {title}
          </h1>
          <p className="auth text-base font-medium w-[80%] ">{desc}</p>
        </div>
        <div>
          <Button className="bg-gradient-to-l auth from-[#2BADFD] to-[#1570EF] py-4 px-5">
            Read More
          </Button>
        </div>
      </div>
      <Image
        src={image}
        width={639}
        height={500}
        alt={title}
        className=" self-end"
      />
      <Image
        src={"/advantages/grid.svg"}
        width={539}
        height={400}
        alt="img"
        className="absolute bottom-0 right-0"
      />
    </div>
  )
}

export default AdvantageDiv
