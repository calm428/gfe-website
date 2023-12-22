"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Lock } from "lucide-react"
import Slider from "react-slick"

import { Button } from "@/components/ui/button"

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
    <div className="relative max-w-xl mx-auto flex items-start gap-4 my-2 p-8 bg-white rounded-xl shadow-md">
      <div className="absolute top-3 right-2 text-2xl font-monument font-bold text-black/5">
        0{item.index}
      </div>
      <div
        className="flex justify-center items-center w-12 h-12 rounded-xl"
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
          className="w-8 h-8"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-xl font-monument">{item.title}</div>
        <div className="text-sm font-mont text-muted-foreground">
          {item.description}
        </div>
      </div>
    </div>
  )
}

export default function BecomeAMemberSection() {
  return (
    <div className="flex flex-col items-center gap-4 justify-between md:mt-5 pb-10">
      <div className="md:pb-14 pb-10">
        <div className="text-xl text-primary text-center font-monument mt-4">
          Become a Member
        </div>
        <div className="text-md text-muted-foreground text-center font-mont">
          Celebrate your achievement with our Certificate of Excellence, a
          testament to your commitment to success in the world of cryptocurrency
          mining. This certificate recognizes your proficiency, dedication, and
          contributions to the mining community.
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        <div>
          {cardData.map((item) => (
            <StepComponent key={item.title} item={item} />
          ))}
        </div>
        <div
          className="w-full md:h-full h-96 bg-center bg-no-repeat rounded-xl"
          style={{ background: "url(/images/company/become-a-member.png)" }}
        ></div>
      </div>
    </div>
  )
}
