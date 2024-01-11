import React from "react"
import Image from "next/image"

import { formatCustomDate } from "@/lib/utils"

import { Icons } from "../icons"
import { Button } from "../ui/button"

const dummyData: OneNFTInterface[] = [
  { id: 1, image: "/images/main/nft1.png", amount: 100 },
  { id: 2, image: "/images/main/nft2.png", amount: 50 },
]

const BuyDapp = () => {
  return (
    <div className="rounded-md p-4 bg-white border border-[#E7F0FD] shadow-md w-1/3">
      <p className="text-xl text-[#383838] font-semibold">Buy DAPPr NFT</p>
      <p className="text-sm text-[#5A6778] font-medium">Choose NFT to get </p>
      <div className="grid grid-cols-2 gap-5 my-4">
        {dummyData.map((transaction) => (
          <OneNFT key={transaction.id} {...transaction} />
        ))}
      </div>
      <Button className="w-full">Buy</Button>
    </div>
  )
}

interface OneNFTInterface {
  image: string
  id: number
  amount: number
}

const OneNFT: React.FC<OneNFTInterface> = ({ id, image, amount }) => {
  return (
    <div
      className="p-3 rounded-md border-2 border-[#22B4FD] "
      style={{
        background:
          "linear-gradient(37deg, rgba(34, 180, 253, 0.08) 2.42%, rgba(45, 121, 255, 0.08) 80.84%);",
      }}
    >
      <Image
        src={image}
        alt={id.toString()}
        width={100}
        height={100}
        className="w-[100%]"
      />
      <p className="text-center text-[#040815] text-sm font-medium"># {id}</p>
      <p className="text-center text-transparent bg-clip-text bg-gradient-to-b from-[#22B4FD] to-[#2D79FF]  text-[17px] font-medium">
        {amount} BTC
      </p>
      <p className="text-center text-[#64748B] text-[10px] font-medium">
        ${amount}
      </p>
    </div>
  )
}

export default BuyDapp
