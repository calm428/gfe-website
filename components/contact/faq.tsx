"use client"

import { useState } from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQS = [
  {
    question: "What is Bitcoin mining?",
    answer:
      "Bitcoin mining is the process by which new bitcoins are created and transactions are added to the blockchain, a decentralized ledger of all transactions in the Bitcoin network. It involves solving complex mathematical problems that validate and secure transactions on the network.",
  },
  {
    question: "What is Bitcoin mining?",
    answer:
      "Bitcoin mining is the process by which new bitcoins are created and transactions are added to the blockchain, a decentralized ledger of all transactions in the Bitcoin network. It involves solving complex mathematical problems that validate and secure transactions on the network.",
  },
  {
    question: "What is Bitcoin mining?",
    answer:
      "Bitcoin mining is the process by which new bitcoins are created and transactions are added to the blockchain, a decentralized ledger of all transactions in the Bitcoin network. It involves solving complex mathematical problems that validate and secure transactions on the network.",
  },
  {
    question: "What is Bitcoin mining?",
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
    <div className="container mb-32 mt-16">
      <h1 className="pb-2 text-center font-monument text-xl font-normal uppercase text-primary md:pb-3 md:text-2xl">
        Getting Started with SUNBELT Miners
      </h1>

      <Accordion type="single" collapsible className="mt-5 space-y-5">
        {FAQS.map((faq, index) => (
          <AccordionItem
            key={index}
            value={index.toString()}
            className="flex items-start"
            isOpen={index === openItem}
          >
            <div className="w-full">
              <AccordionTrigger onClick={() => handleAccordionItemClick(index)}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default FaqSection
