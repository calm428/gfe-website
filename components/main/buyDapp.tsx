import React from "react"
import Image from "next/image"

import { Button } from "../ui/button"

const dummyData: OneNFTInterface[] = [
  { id: 1, image: "/images/main/nft1.png", amount: 100 },
  { id: 2, image: "/images/main/nft2.png", amount: 50 },
]

const BuyDapp = () => {
  return (
    <div className="w-1/3 rounded-md border border-[#E7F0FD] bg-white p-4 shadow-md">
      <p className="text-xl font-semibold text-[#383838]">Buy DAPPr NFT</p>
      <p className="text-sm font-medium text-[#5A6778]">Choose NFT to get </p>
      <div className="my-4 grid grid-cols-2 gap-5">
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
      className="rounded-md border-2 border-[#22B4FD] p-3 "
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
      <p className="text-center text-sm font-medium text-[#040815]"># {id}</p>
      <p className="bg-gradient-to-b from-[#22B4FD] to-[#2D79FF] bg-clip-text text-center text-[17px]  font-medium text-transparent">
        {amount} BTC
      </p>
      <p className="text-center text-[10px] font-medium text-[#64748B]">
        ${amount}
      </p>
    </div>
  )
}

export default BuyDapp
