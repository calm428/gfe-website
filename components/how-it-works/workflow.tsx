"use client"

import Image from "next/image"
import Link from "next/link"
import { Lock } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function WorkFlowSection() {
  return (
    <div className="flex flex-col items-center justify-between">
      <div className="text-2xl text-center uppercase font-semibold mt-4 text-primary mx-auto">
        How Sunbelt miners work
      </div>
      <div className="text-md max-w-5xl text-center font-mont text-muted-foreground">
        Unlock the simplicity of our streamlined process. From consultation to
        execution, our user-friendly platform guides you through every step of
        your cryptocurrency mining journey.
      </div>
      <div className="w-full mt-12">
        <Image
          src="/images/how-it-works/workflow.png"
          alt="how-it-works"
          width={800}
          height={600}
          className="max-w-5xl w-full h-auto mx-auto"
        />
      </div>
    </div>
  )
}
