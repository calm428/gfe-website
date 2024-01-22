"use client"

import { BenefitCard } from "./benefit-card"

const CARDS_DATA = [
  {
    title: "High Income",
    description:
      "Embark on your mining journey with our intuitive step-by-step guide. From setting up your equipment to selecting the right mining pool, our platform walks you through each crucial stage of the process. Gain a comprehensive understanding of cryptocurrency mining as you follow our user-friendly steps, ensuring a smooth and rewarding experience.",
  },
  {
    title: "Make The World Better",
    description:
      "Bitcoin, created in 2009, is a decentralized digital currency facilitating peer-to-peer transactions on a transparent blockchain. Capped at 21 million coins, it serves as a borderless store of value and potential hedge against inflation.",
  },
]

export default function BenefitSection() {
  return (
    <div className="container flex flex-col items-stretch justify-center gap-4 pb-32 md:flex-row">
      <div
        className="mx-auto h-96 max-w-sm rounded-xl bg-primary bg-cover bg-center bg-no-repeat p-4 md:mx-0 md:h-auto md:w-2/5"
        style={{ backgroundImage: "url(/images/how-it-works/bg2.png)" }}
      >
        <div className="font-monument text-2xl text-white">
          Benefits of hosting in our data center and green ecosystem
        </div>
      </div>
      <div className="w-full space-y-4 md:w-3/5">
        {CARDS_DATA.map((card) => (
          <BenefitCard
            key={card.title}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  )
}
