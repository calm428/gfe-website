import Image from "next/image"

import { Button } from "../../ui/button"

interface Props {
  title: string
  desc: string
  image: string
}
function AdvantageCard({ title, desc, image }: Props) {
  return (
    <div className=" relative flex flex-col overflow-hidden rounded-md border border-border bg-muted">
      <div className="flex flex-col gap-8 py-[30px] pl-[30px]">
        <div className="flex flex-col gap-4">
          <h3 className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text font-goldman text-4xl capitalize text-transparent">
            {title}
          </h3>
          <p className="auth w-[80%] text-base font-medium ">{desc}</p>
        </div>
        <div>
          <Button className="auth bg-gradient-to-l from-[#2BADFD] to-[#1570EF] px-5 py-4">
            Read More
          </Button>
        </div>
      </div>
      <Image src={image} alt={title} className="mx-auto mb-4 w-2/3" />
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

export default AdvantageCard
