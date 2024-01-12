"use client"

import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"

import { Button } from "../ui/button"

const FAQS = [
  {
    question: "What is Green Fungible Energy?",
    answer:
      "GFE tokens are the digital representation of electrical energy, with each token signifying the right to direct the use of [1] 1kWh of green energy that will be generated and consumed by our infrastructure. This twofold implication of GFE tokens mean that not only do they serve as tradable assets with income, they are reflective of sustainable practices and have tangible, real-world utility.",
  },
  {
    question: "Is Bitcoin mining profitable?",
    answer:
      "Bitcoin mining is the process by which new bitcoins are created and transactions are added to the blockchain, a decentralized ledger of all transactions in the Bitcoin network. It involves solving complex mathematical problems that validate and secure transactions on the network.",
  },
  {
    question: "How to start mining Bitcoins?",
    answer:
      "Bitcoin mining is the process by which new bitcoins are created and transactions are added to the blockchain, a decentralized ledger of all transactions in the Bitcoin network. It involves solving complex mathematical problems that validate and secure transactions on the network.",
  },
  {
    question: "How does Bitcoin mining work in company?",
    answer:
      "Bitcoin mining is the process by which new bitcoins are created and transactions are added to the blockchain, a decentralized ledger of all transactions in the Bitcoin network. It involves solving complex mathematical problems that validate and secure transactions on the network.",
  },
]

const CommunitySection = () => {
  return (
    <div className="py-[60px]">
      <div className="flex flex-col justify-between rounded-xl bg-muted p-[60px] md:flex-row">
        <div className="flex flex-col gap-4 lg:w-[60%]">
          <div className="bg-gradient-to-b  from-[#2BADFD]  to-[#1570EF] bg-clip-text font-monument text-3xl text-transparent">
            Join our Community
          </div>
          <div className=" auth my-1 mb-5 font-mont text-sm font-medium md:mb-0 md:text-base">
            By joining the GFE project, investors and environmental advocates
            alike can contribute to the development of a sustainable energy
            ecosystem while receiving the economic benefits afforded by
            blockchain technology and server hosting with an ecologically sound
            and ethically backed global commodity price for extraction free
            power.
          </div>
        </div>
        <div className="flex flex-col gap-5 md:w-[30%]">
          <Button className="auth bg-gradient-to-l from-[#2BADFD] to-[#1570EF] px-8 py-4">
            <Link
              href={siteConfig.links.docs}
              className="flex items-center gap-3"
            >
              <Image
                src={"/icons/discord.svg"}
                width={20}
                height={20}
                alt="x"
              />
              Discord
            </Link>
          </Button>
          <Button className="auth bg-gradient-to-l from-[#2BADFD] to-[#1570EF] px-8 py-4">
            <Link
              href={siteConfig.links.docs}
              className="flex items-center gap-3"
            >
              <Image
                src={"/icons/Telegram.svg"}
                width={20}
                height={20}
                alt="x"
              />
              Telegram
            </Link>
          </Button>
          <Button className="auth bg-gradient-to-l from-[#2BADFD] to-[#1570EF] px-8 py-4">
            <Link
              href={siteConfig.links.docs}
              className="flex items-center gap-3"
            >
              <Image
                src={"/icons/twitter.svg"}
                width={20}
                height={20}
                alt="x"
              />
              Twitter
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CommunitySection
