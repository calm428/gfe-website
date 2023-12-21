"use client"

import Image from "next/image"

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

function BenefitCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="bg-accent p-5 rounded-3xl">
      <h2 className="text-xl font-monument mt-5 tracking-wider">{title}</h2>
      <p className="mt-2 text-muted-foreground text-sm mb-5">{description}</p>
    </div>
  )
}

export default function BenefitSection() {
  return (
    <div className="flex flex-col md:flex-row items-stretch gap-4 justify-center pb-32">
      <div
        className="md:w-2/5 max-w-sm mx-auto h-96 md:h-auto md:mx-0 bg-primary p-4 bg-cover bg-center bg-no-repeat rounded-xl"
        style={{ backgroundImage: "url(/images/how-it-works/bg2.png)" }}
      >
        <div className="text-2xl text-white font-monument">
          Benefits of hosting in our data center and green ecosystem
        </div>
      </div>
      <div className="w-full md:w-3/5 space-y-4">
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
