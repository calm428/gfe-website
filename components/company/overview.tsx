"use client"

import Image from "next/image"

import { Button } from "@/components/ui/button"

export default function OverviewSection() {
  return (
    <div className="flex flex-col items-center justify-between gap-10 md:mt-5">
      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
        <div>
          <Image
            src="/images/company/sunbelt-box.png"
            alt="overview"
            width={800}
            height={600}
          />
        </div>
        <div>
          <div className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-transparent  my-4 font-monument text-xl">
            {"DAPPr (decentralized Anonymous Power Producing Renewable)"}
          </div>
          <div className="text-md font-mont text-muted-foreground">
            {`Introducing DAPPr (decentralized Anonymous Power Producing
            Renewable) Azure Phoenix—a revolutionary container designed for
            decentralized, anonymous, and power-producing renewable mining. Our
            container prioritizes efficiency through ASIC miners and employs an
            optimized heat dissipation system utilizing ground source heat pumps
            powered by renewable energy. Experience cutting-edge technology and
            eco-friendly mining practices with the DAPPr Azure Phoenix
            container, where sustainability meets innovation in the world of
            cryptocurrency mining.`}
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
              Start Now
            </Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
        <div>
          <div className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-transparent  my-4 font-monument text-xl">
            {"SUNBELT’s ECO SYSTEM"}
          </div>
          <div className="text-md font-mont text-muted-foreground">
            {`Immerse yourself in our comprehensive mining ecosystem, meticulously
            crafted for efficiency, sustainability, and profitability. From
            state-of-the-art ASIC miners to eco-friendly energy solutions, our
            ecosystem harmonizes technology and environmental responsibility.`}
          </div>
        </div>
        <div>
          <Image
            src="/images/company/eco-ground.png"
            alt="overview"
            width={800}
            height={600}
          />
        </div>
      </div>
    </div>
  )
}
