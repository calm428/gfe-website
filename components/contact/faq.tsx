"use client";

import React from 'react';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FAQS = [
    {
        question: "What is Bitcoin mining?",
        answer: "Bitcoin mining is the process by which new bitcoins are created and transactions are added to the blockchain, a decentralized ledger of all transactions in the Bitcoin network. It involves solving complex mathematical problems that validate and secure transactions on the network."
    },
    {
        question: "What is Bitcoin mining?",
        answer: "Bitcoin mining is the process by which new bitcoins are created and transactions are added to the blockchain, a decentralized ledger of all transactions in the Bitcoin network. It involves solving complex mathematical problems that validate and secure transactions on the network."
    },
    {
        question: "What is Bitcoin mining?",
        answer: "Bitcoin mining is the process by which new bitcoins are created and transactions are added to the blockchain, a decentralized ledger of all transactions in the Bitcoin network. It involves solving complex mathematical problems that validate and secure transactions on the network."
    },
    {
        question: "What is Bitcoin mining?",
        answer: "Bitcoin mining is the process by which new bitcoins are created and transactions are added to the blockchain, a decentralized ledger of all transactions in the Bitcoin network. It involves solving complex mathematical problems that validate and secure transactions on the network."
    }
];

const FaqSection = () => {
    return (
        <div className='mb-32 container mt-16'>
            <h1 className="text-center font-monument font-normal text-xl md:text-2xl text-primary md:pb-3 pb-2 uppercase">Getting Started with SUNBELT Miners</h1>

            <Accordion type="single" collapsible className='space-y-5 mt-5'>
                {FAQS.map((faq, index) => (
                    <AccordionItem key={index} value={index.toString()} className='flex items-start'>
                        <div className='w-full'>
                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                            <AccordionContent>
                                {faq.answer}
                            </AccordionContent>
                        </div>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default FaqSection;