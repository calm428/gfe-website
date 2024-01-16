"use client"

import Image from "next/image"

type CardDataType = {
  index: number
  title: string
  description: string
  icon: string
}

const cardData: CardDataType[] = [
  {
    index: 1,
    title: "Exclusive Benefits",
    description:
      "Enjoy privileged access to insider insights, sustainable mining practices, and strategic investment opportunities tailored for members.",
    icon: "/images/company/exclusive-benefits-icon.svg",
  },
  {
    index: 2,
    title: "Supportive Community",
    description:
      "Join a thriving network of cryptocurrency enthusiasts, fostering collaboration, knowledge-sharing, and a supportive environment for your mining journey.",
    icon: "/images/company/supportive-community-icon.svg",
  },
  {
    index: 3,
    title: "Educational Resources",
    description:
      "Access a wealth of educational materials and resources designed to empower your understanding of cryptocurrency mining.",
    icon: "/images/company/educational-resources-icon.svg",
  },
]

function StepComponent({ item }: { item: CardDataType }) {
  return (
    <div className="relative mx-auto my-2 flex max-w-xl items-start gap-4 rounded-xl bg-white p-8 shadow-md">
      <div className="absolute right-2 top-3 font-monument text-2xl font-bold text-black/5">
        0{item.index}
      </div>
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl"
        style={{
          background: "linear-gradient(37deg, #22B4FD 2.42%, #2D79FF 80.84%)",
          minWidth: "3rem",
        }}
      >
        <Image
          src={item.icon}
          alt={item.title}
          width={100}
          height={100}
          className="h-8 w-8"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-monument text-xl">{item.title}</div>
        <div className="font-mont text-sm text-muted-foreground">
          {item.description}
        </div>
      </div>
    </div>
  )
}

export default function BecomeAMemberSection() {
  return (
    <div className="flex flex-col items-center justify-between gap-4 pb-10 md:mt-5">
      <div className="pb-10 md:pb-14">
        <div className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-transparent  mt-4 text-center font-monument text-xl text-primary">
          Become a Member
        </div>
        <div className="text-md text-center font-mont text-muted-foreground">
          Celebrate your achievement with our Certificate of Excellence, a
          testament to your commitment to success in the world of cryptocurrency
          mining. This certificate recognizes your proficiency, dedication, and
          contributions to the mining community.
        </div>
      </div>
      <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2">
        <div>
          {cardData.map((item) => (
            <StepComponent key={item.title} item={item} />
          ))}
        </div>
        <div
          className="h-96 w-full rounded-xl bg-center bg-no-repeat md:h-full"
          style={{ background: "url(/images/company/become-a-member.png)" }}
        ></div>
      </div>
    </div>
  )
}
