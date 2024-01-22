"use client"

import Image from "next/image"

import { Button } from "@/components/ui/button"

export default function CertificateSection() {
  return (
    <div className="flex flex-col items-center justify-between gap-4 md:mt-5">
      <div className="pb-10 md:pb-14">
        <div className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-transparent  mt-4 text-center font-monument text-xl">
          Our Certificates
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
          <Image
            src="/images/company/certificate.png"
            alt="overview"
            width={800}
            height={600}
          />
        </div>
        <div>
          <div className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-transparent  my-4 font-monument text-xl">
            Calculate of Excellence
          </div>
          <div className="text-md font-mont text-muted-foreground">
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
      <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2">
        <div>
          <div className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-transparent  my-4 font-monument text-xl">
            Calculate of Excellence
          </div>
          <div className="text-md font-mont text-muted-foreground">
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
