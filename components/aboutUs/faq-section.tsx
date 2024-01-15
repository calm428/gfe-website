import Image from "next/image"

function FaqSection() {
  return (
    <div className="flex flex-col-reverse py-14 xl:flex-row">
      <div className="z-20 -mt-[30%] rounded-[20px] border border-border bg-background p-11 shadow-lg xl:mt-0 xl:w-[80%]">
        <h1 className=" bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text font-monument text-[30px] text-transparent">
          La Paz BCS example:
        </h1>
        <div className="auth flex flex-col gap-4">
          <p className=" text-base font-medium lg:text-lg">
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
          className="w-auto xl:-ml-5 xl:h-[80%]"
        />
      </div>
    </div>
  )
}

export default FaqSection
