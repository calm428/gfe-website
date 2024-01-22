"use client"

import { useState } from "react"
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
  const [openItem, setOpenItem] = useState<number | null>(null)

  const handleAccordionItemClick = (index: number) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === index ? null : index))
  }
  return (
    <div className="flex flex-col  gap-[50px] px-5 py-24">
      <div className="flex flex-col items-center gap-4">
        <h1 className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text font-goldman text-5xl text-transparent">
          FAQ
        </h1>
        <p className="auth font-mont text-lg">
          Belows are the FAQs regarding our NFT’s with answers
        </p>
      </div>
      <div>
        {/* <div className="py-[50px]"> */}
        <Accordion type="single" collapsible className="auth mt-5 space-y-5">
          {FAQS.map((faq, index) => (
            <AccordionItem
              key={index}
              value={("0" + (index + 1)).toString()}
              className="auth accordion flex items-start rounded-lg"
              isOpen={index === openItem}
            >
              <div className="w-full">
                <AccordionTrigger
                  onClick={() => handleAccordionItemClick(index)}
                  className="auth font-semibold text-secondary-foreground hover:no-underline"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="auth text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="flex items-center justify-center pt-[50px]">
          <Button className="auth bg-gradient-to-l from-[#2BADFD] to-[#1570EF] px-8 py-4">
            <Link href={siteConfig.links.docs}>View More</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default FAQ
