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

const FaqSection = () => {
  return (
    <div className="mb-32">
      <h1 className="text-center font-monument font-normal text-2xl text-primary md:pb-3 pb-2 uppercase">
        Get to know <br className="hidden sm:inline" />
        Green Fungible Energy - GFE
      </h1>

      <Accordion type="single" collapsible className="space-y-5 mt-5">
        {FAQS.map((faq, index) => (
          <AccordionItem
            key={index}
            value={index.toString()}
            className="flex items-start"
          >
            <div className="w-full">
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="flex items-center justify-center py-5">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants(),
            "font-monument tracking-widest pt-2.5 font-normal hidden md:block"
          )}
          style={{
            background:
              "linear-gradient(277deg, #22B4FD 32.53%, #2D79FF 77.26%)",
          }}
        >
          View More
        </Link>
      </div>
    </div>
  )
}

export default FaqSection
