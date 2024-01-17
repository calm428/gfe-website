import Image from "next/image"

function ServerHosting() {
  return (
    <div className="relative mb-24 flex flex-col-reverse gap-12 lg:flex-row lg:px-0">
      <div className="flex items-center justify-between lg:w-1/2">
        <Image
          src="/images/nft/server-hosting.svg"
          alt="image"
          width={854}
          height={961}
        />
      </div>
      <div className="flex flex-col gap-6 container pt-5 lg:w-1/2 justify-center">
        <h1 className="auth w-fit rounded-sm bg-[#EEF5FF] px-[16px] py-[8px] text-base font-medium text-primary md:text-[20px]">
          Future
        </h1>
        <h1 className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text font-goldman text-5xl text-transparent">
          Blockchain and server hosting
        </h1>
        <p className="auth font-mont text-lg">
          The world cost of electricity is determined by local monopolies. We
          have no global market to draw a value measurement for decentralized
          power. Market prices are based on many factors, in our case we need a
          global process that consumes power around the world to measure
          against. This energy use needs to provide a product that is fungible
          globally. We see the energy and hash power related to blockchain
          earnings as an ideal situation for analysis, it consumes around 1% of
          the world{"'"}s energy.
        </p>
        <p className="auth font-mont text-lg ">
          This hash power and energy conversion to FIAT currency occurs in
          London and China, the equipment is very similar and the energy is the
          biggest geographic component variable. Often mining environments
          (servers, electrical infrastructure, cooling equipment and housing)
          are de-commissioned based on the cost of power vs the productive
          output. The environment and equipment requirements are so similar it
          {"'"}s hard to tell the difference between server hosting and mining.
          The collective doesn{"'"}t discriminate in our server hosting; we sell
          our power to all. We provide ethically sourced power one KW at a time
          to global commons consumers.
        </p>
      </div>
      <div className="absolute bottom-24 left-0 z-0 hidden w-full lg:-bottom-10 lg:flex 2xl:bottom-0">
        <Image
          src="/images/bottom.svg"
          alt="bottom"
          width={1010}
          height={232}
          className="w-full"
        />
      </div>
    </div>
  )
}

export default ServerHosting
