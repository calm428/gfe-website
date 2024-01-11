"use client"

import React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"
import { Button } from "../ui/button"

const FAQS = [
  {
    question: "What is DAPPr NFT?",
    answer:
      "GFE tokens are the digital representation of electrical energy, with each token signifying the right to direct the use of [1] 1kWh of green energy that will be generated and consumed by our infrastructure. This twofold implication of GFE tokens mean that not only do they serve as tradable assets with income, they are reflective of sustainable practices and have tangible, real-world utility.",
  },
  {
    question:
      "What exactly will I get by purchasing an NFT from your marketplace?",
    answer:
      "Bitcoin mining is the process by which new bitcoins are created and transactions are added to the blockchain, a decentralized ledger of all transactions in the Bitcoin network. It involves solving complex mathematical problems that validate and secure transactions on the network.",
  },
  {
    question: "What is the minimum cost of NFT?",
    answer:
      "Bitcoin mining is the process by which new bitcoins are created and transactions are added to the blockchain, a decentralized ledger of all transactions in the Bitcoin network. It involves solving complex mathematical problems that validate and secure transactions on the network.",
  },
  {
    question: "Where is DAPPr located?",
    answer:
      "Bitcoin mining is the process by which new bitcoins are created and transactions are added to the blockchain, a decentralized ledger of all transactions in the Bitcoin network. It involves solving complex mathematical problems that validate and secure transactions on the network.",
  },
  {
    question: "How much income will I get from NFT?",
    answer:
      "Bitcoin mining is the process by which new bitcoins are created and transactions are added to the blockchain, a decentralized ledger of all transactions in the Bitcoin network. It involves solving complex mathematical problems that validate and secure transactions on the network.",
  },
  {
    question: "Is my revenue fixed?",
    answer:
      "Bitcoin mining is the process by which new bitcoins are created and transactions are added to the blockchain, a decentralized ledger of all transactions in the Bitcoin network. It involves solving complex mathematical problems that validate and secure transactions on the network.",
  },
]

function FAQ() {
  return (
    <div className="py-24 px-5  flex flex-col gap-[50px]">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-5xl font-goldman text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]">
          FAQ
        </h1>
        <p className="auth text-lg font-mont auth">
          Belows are the FAQs regarding our NFT’s with answers
        </p>
      </div>
      <div>
        {/* <div className="py-[50px]"> */}
        <Accordion type="single" collapsible className="space-y-5 mt-5 auth">
          {FAQS.map((faq, index) => (
            <AccordionItem
              key={index}
              value={("0" + (index + 1)).toString()}
              className="flex items-start rounded-lg auth accordion"
            >
              <div className="w-full">
                <AccordionTrigger className="auth font-semibold text-secondary-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base auth text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="flex items-center justify-center pt-[50px]">
          <Button className="auth py-4 px-8 bg-gradient-to-l from-[#2BADFD] to-[#1570EF]">
            <Link href={siteConfig.links.docs}>View More</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default FAQ
