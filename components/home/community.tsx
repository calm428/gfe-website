"use client"

import React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Button, buttonVariants } from "../ui/button"

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
    <div className="my-56">
      <div
        className="flex flex-col sm:flex-row justify-between gap-5 items-center  max-w-5xl p-5 sm:p-5 md:p-10 lg:mx-auto -mt-20 rounded-3xl mx-4 sm:mx-6 md:mx-8 bg-[rgba(255,255,255,0.04)]"
      >
        <div className="w-full ">
          <div className="text-3xl  font-monument  text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]">
            Join our Community
          </div>
          <div className="text-sm  font-mont font-medium my-1">
            By joining the GFE project, investors and environmental advocates
            alike can contribute to the development of a sustainable energy
            ecosystem while receiving the economic benefits afforded by
            blockchain technology and server hosting with an ecologically sound
            and ethically backed global commodity price for extraction free
            power.
          </div>
        </div>
        <div className="w-full sm:w-fit flex flex-col gap-4">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants(),
              "font-monument tracking-widest pt-2.5 font-normal hidden md:block px-10"
            )}
            style={{
              background:
                "linear-gradient(277deg, #22B4FD 32.53%, #2D79FF 77.26%)",
            }}
          >
            Discord
          </Link>
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants(),
              "font-monument tracking-widest pt-2.5 font-normal hidden md:block px-10"
            )}
            style={{
              background:
                "linear-gradient(277deg, #22B4FD 32.53%, #2D79FF 77.26%)",
            }}
          >
            Telegram
          </Link>
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants(),
              "font-monument tracking-widest pt-2.5 font-normal hidden md:block px-10"
            )}
            style={{
              background:
                "linear-gradient(277deg, #22B4FD 32.53%, #2D79FF 77.26%)",
            }}
          >
            Twitter
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CommunitySection
