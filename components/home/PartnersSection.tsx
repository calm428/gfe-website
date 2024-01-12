import React from "react"
import Image from "next/image"

function PartnersSection() {
  return (
    <div className=" px-5 lg:px-24 py-[100px] lg:flex items-center gap-6 bg-muted">
      <h1 className="font-goldman text-3xl capitalize text-center mb-4 lg:mb-0 text-primary">
        Partners
      </h1>
      <div className="flex ml-20 flex-wrap sm:grid-cols-2 md:grid-cols-5 gap-3">
        {/* company logos */}
        <div className="py-4 rounded-md px-6 flex items-center justify-center bg-background">
          <Image
            src={"/logos/logo2.svg"}
            width={200}
            height={100}
            alt="company"
          />
        </div>
        <div className="py-4 rounded-md px-6 flex items-center justify-center bg-background">
          <Image
            src={"/logos/logo3.svg"}
            width={200}
            height={100}
            alt="company"
          />
        </div>
        <div className="py-4 rounded-md px-6 flex items-center justify-center bg-background">
          <Image
            src={"/logos/logo4.svg"}
            width={100}
            height={100}
            alt="company"
          />
        </div>
        <div className="py-4 rounded-md px-6 flex items-center justify-center bg-background ">
          <Image
            src={"/logos/logo1.svg"}
            width={120}
            height={100}
            alt="company"
          />
        </div>

        <div className="py-4 rounded-md px-6 flex items-center justify-center bg-background">
          <Image
            src={"/logos/logo5.svg"}
            width={100}
            height={100}
            alt="company"
          />
        </div>
      </div>
    </div>
  )
}

export default PartnersSection
