"use client"

import Image from "next/image"

export default function WorkFlowSection() {
  return (
    <div className="container flex flex-col items-center justify-between py-8">
      <div className="pb-5 text-center font-goldman text-5xl font-normal text-primary  md:pb-10">
        How Sunbelt miners work
      </div>
      <div className="text-md max-w-5xl text-center font-mont text-muted-foreground">
        Unlock the simplicity of our streamlined process. From consultation to
        execution, our user-friendly platform guides you through every step of
        your cryptocurrency mining journey.
      </div>
      <div className="mt-12 w-full">
        <Image
          src="/images/how-it-works/workflow.png"
          alt="how-it-works"
          width={1517}
          height={642}
          className="mx-auto h-auto w-full max-w-5xl"
        />
      </div>
    </div>
  )
}
