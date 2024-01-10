"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"

import { Button} from "../ui/button"

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
      <div className="p-[60px] flex flex-col md:flex-row justify-between bg-muted rounded-xl">
        <div className="flex flex-col gap-4 lg:w-[60%]">
          <div className="text-3xl  font-monument  text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]">
            Join our Community
          </div>
          <div className=" text-sm md:text-base  font-mont auth mb-5 md:mb-0 my-1">
            By joining the GFE project, investors and environmental advocates
            alike can contribute to the development of a sustainable energy
            ecosystem while receiving the economic benefits afforded by
            blockchain technology and server hosting with an ecologically sound
            and ethically backed global commodity price for extraction free
            power.
          </div>
        </div>
        <div className="flex flex-col gap-5 md:w-[30%]">
          <Button className="auth py-4 px-8 bg-gradient-to-l from-[#2BADFD] to-[#1570EF]">
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
          <Button className="auth py-4 px-8 bg-gradient-to-l from-[#2BADFD] to-[#1570EF]">
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
          <Button className="auth py-4 px-8 bg-gradient-to-l from-[#2BADFD] to-[#1570EF]">
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
