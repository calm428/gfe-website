"use client"

import { useState } from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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

const FaqSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const handleAccordionItemClick = (index: number) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === index ? null : index))
  }

  return (
    <div className="py-[100px]">
      <h1 className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-transparent  pb-[50px] text-center font-goldman text-3xl uppercase text-primary">
        Get to know <br className="hidden sm:inline" />
        Green Fungible Energy - GFE
      </h1>

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
                className="auth  font-semibold hover:no-underline"
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
        <Button className="auth bg-gradient-to-l from-[#2BADFD] to-[#1570EF] px-8 py-4 font-bold">
          <Link href={siteConfig.links.docs}>View All</Link>
        </Button>
      </div>
    </div>
  )
}

export default FaqSection
