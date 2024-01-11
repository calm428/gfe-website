"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Lock } from "lucide-react"
import Slider from "react-slick"

import { Button } from "@/components/ui/button"

export default function CertificateSection() {
  return (
    <div className="flex flex-col items-center gap-4 justify-between md:mt-5">
      <div className="md:pb-14 pb-10">
        <div className="text-xl text-primary text-center font-monument mt-4">
          Our Certificates
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
          <Image
            src="/images/company/certificate.png"
            alt="overview"
            width={800}
            height={600}
          />
        </div>
        <div>
          <div className="text-xl text-primary font-monument my-4">
            Calculate of Excellence
          </div>
          <div className="text-md text-muted-foreground font-mont">
            {`Celebrate your achievement with our Certificate of Excellence, a testament to your commitment to success in the world of cryptocurrency mining. This certificate recognizes your proficiency, dedication, and contributions to the mining community. Showcase your expertise and accomplishments proudly, demonstrating a commitment to excellence and innovation in the evolving landscape of digital assets. Elevate your standing with our prestigious Certificate of Excellence, a symbol of your mastery in the realm of cryptocurrency.`}
          </div>
          <div>
            <Button
              variant="default"
              className="mt-5"
              style={{
                background:
                  "linear-gradient(180deg, #2BADFD 0%, #1570EF 88.02%)",
              }}
              onClick={() => {}}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        <div>
          <div className="text-xl text-primary font-monument my-4">
            Calculate of Excellence
          </div>
          <div className="text-md text-muted-foreground font-mont">
            {`Celebrate your achievement with our Certificate of Excellence, a testament to your commitment to success in the world of cryptocurrency mining. This certificate recognizes your proficiency, dedication, and contributions to the mining community. Showcase your expertise and accomplishments proudly, demonstrating a commitment to excellence and innovation in the evolving landscape of digital assets. Elevate your standing with our prestigious Certificate of Excellence, a symbol of your mastery in the realm of cryptocurrency.`}
          </div>
          <div>
            <Button
              variant="default"
              className="mt-5"
              style={{
                background:
                  "linear-gradient(180deg, #2BADFD 0%, #1570EF 88.02%)",
              }}
              onClick={() => {}}
            >
              Next
            </Button>
          </div>
        </div>
        <div>
          <Image
            src="/images/company/certificate.png"
            alt="overview"
            width={800}
            height={600}
          />
        </div>
      </div>
    </div>
  )
}
