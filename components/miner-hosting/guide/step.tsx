"use client"

import Image from "next/image"

import { Step } from "."

export default function StepComponent({ step }: { step: Step }) {
  return (
    <div className="relative mx-auto my-2 flex max-w-xl items-start gap-4 rounded-xl bg-white p-8 shadow-md">
      <div className="absolute right-2 top-3 font-goldman text-2xl font-bold text-black/5">
        0{step.index}
      </div>
      <div
        className="flex size-12 items-center justify-center rounded-xl"
        style={{
          background: "linear-gradient(37deg, #22B4FD 2.42%, #2D79FF 80.84%)",
          minWidth: "3rem",
        }}
      >
        <Image
          src={step.icon}
          alt={step.title}
          width={100}
          height={100}
          className="size-8"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-goldman text-xl">{step.title}</div>
        <div className="font-mont text-sm text-muted-foreground">
          {step.description}
        </div>
      </div>
    </div>
  )
}
