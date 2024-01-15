"use client"

import Image from "next/image"

const AboutGFE = () => {
  return (
    <div className=" flex flex-col items-center gap-20 py-20 lg:py-24">
      <p className="auth px-5 font-mont text-base font-semibold text-black md:text-lg lg:px-24">
        GFE foundation’s vision started with a simple question: why do we know
        so many people who want solar power, and no one is purchasing it. That
        question is still being answered; but a large part of the answer is
        market friction. A typical home owner installation offsets the homes
        consumption of power, and uses the grid as storage. The problems are
        many in this scenario; with monopoly and monopsony relationships with
        the grid it is a questionable trading partner at best.
      </p>
      <div className="flex  flex-col-reverse gap-12 px-5 lg:flex-row lg:px-0 lg:pl-24">
        <div className="flex flex-col gap-6 lg:w-2/3">
          <p className="auth font-mont text-base font-semibold text-muted-foreground md:text-lg">
            We sought a work around, and our answer came without use of the
            local marketplace. I would much rather sell power to Yemen; it costs
            more there and they really need power. This global commons
            perspective framed our efforts; and scaling our DAPPr unit into a
            productive scale solved several problems.
          </p>
          <p className="auth font-mont text-lg font-semibold text-muted-foreground">
            Our solar farm capacity allows us to generate electricity for local
            consumption operations, the scale of our ambitions, to move the
            world’s energy capacity to renewable power, needs global momentum
            and will provide profitability to our members while making the world
            better. You don’t need the grid, the grid needs you; break free of
            your convenience leash and make the world better
          </p>
          <div className="flex gap-6 rounded-md bg-gradient-to-br from-[#2BADFD] to-[#1570EF] p-6">
            <div>
              <img src="/icons/Buttons.svg" alt="image" className="" />
            </div>
            <p className="auth font-mont text-base font-semibold text-primary-foreground">
              Our prototype unit will work to normalize utility scale electrical
              capacity without grid necessity. The unit produces global currency
              backed local production to mostly edit
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <Image
            src="/images/about-us/nft1.svg"
            alt="image"
            width={873}
            height={780}
          />
        </div>
      </div>
    </div>
  )
}

export default AboutGFE
