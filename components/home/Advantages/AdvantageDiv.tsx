import Image from "next/image"

import { Button } from "../../ui/button"

interface Props {
  title: string
  desc: string
  image: string
}
function AdvantageDiv({ title, desc, image }: Props) {
  return (
    <div className=" relative flex flex-col overflow-hidden rounded-md border border-border bg-muted">
      <div className="flex flex-col gap-8 py-[50px] pl-[50px]">
        <div className="flex flex-col gap-4">
          <h1 className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text font-goldman text-4xl capitalize text-transparent">
            {title}
          </h1>
          <p className="auth w-[80%] text-base font-medium ">{desc}</p>
        </div>
        <div>
          <Button className="auth bg-gradient-to-l from-[#2BADFD] to-[#1570EF] px-5 py-4">
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
