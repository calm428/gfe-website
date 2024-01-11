import React from "react"
import Image from "next/image"

function FaqSection() {
  return (
    <div className="py-14 flex flex-col-reverse xl:flex-row">
      <div className="p-11 border border-border rounded-[20px] shadow-lg z-20 bg-background -mt-[30%] xl:mt-0 xl:w-[80%]">
        <h1 className=" font-monument text-[30px] text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]">
          La Paz BCS example:
        </h1>
        <div className="flex flex-col gap-4 auth">
          <p className=" text-base lg:text-lg font-medium">
            The local utility generates XX mw of power a year. It is used for
            industry, residential, and desalination loads for water. The power
            is in the form of oil. There is no ship sized storage capacity, so
            1-3 small tankers are kept near shore to service the transactions
            and the unloading and storage of large tankers that park off shore.
          </p>
          <p className=" text-base lg:text-lg">
            This energy is distributed throughout various areas of BCS, along
            with the water utility. Often delivery is via trucks. The city has a
            high overhead consumption of power to maintain life in the location.
          </p>
          <p className=" text-base lg:text-lg">
            Using the rural area adjacent to La Paz for DAPPr units can provide
            1-2 mw of power. In 5-7 years this many units can be coordinated to
            feed the district power after infrastructure development. This
            feeding of the grid from various small producers as one
            decentralized entity can put a huge dent in the oil consumption of
            the community. It will reduce global warming and bring a western
            economy income to local means of production, a sunlight farmer
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center xl:justify-start">
        <Image
          src="/images/about-us/person.png"
          alt="image"
          width={534}
          height={654}
          className="w-auto xl:h-[80%] xl:-ml-5"
        />
      </div>
    </div>
  )
}

export default FaqSection
