import { AdvantageCard } from "./advantage-card"

const MainBenefitSection = () => {
  return (
    <div className="relative py-24">
      {/* <div className="overflow-hidden">
        <Image
          src="/images/miner-hosting/globe.gif"
          alt="globe"
          width={450}
          height={500}
          className="absolute -bottom-60 -right-36 z-[-1] w-1/2 opacity-10"
        />
      </div> */}
      <div className="container flex flex-col items-start justify-start px-10">
        <div className="pb-10 md:pb-14">
          <h1 className="pb-5 font-goldman text-5xl font-normal text-primary  md:pb-10">
            Main Benefit{" "}
          </h1>
          <h3 className="text-start font-mont font-medium text-muted-foreground md:text-xl">
            We secure our future by promoting renewable energy resources. Our
            expert team take care of the regular maintenance and warranty
            servicing of your machine.
          </h3>
        </div>

        <div className="grid w-auto grid-cols-1 justify-start gap-6 sm:grid-cols-2 xl:grid-cols-3">
          <AdvantageCard
            icon="/images/home/Safety-icon.png"
            title="Safety"
            text="Our commitment is to fortify the security landscape for miners. We employ cutting-edge  protocols, conducting."
          />
          <AdvantageCard
            icon="/images/home/Sustainability-icon.png"
            title="Sustainability"
            text="In the dynamic realm of Bitcoin mining, our industry perspective revolves around sustainability as a cornerstone of responsible growth. "
          />
          <AdvantageCard
            icon="/images/home/MaxProfit-icon.png"
            title="Max Profit"
            text="In the competitive landscape of Bitcoin mining, our industry perspective centers on achieving maximum profit while upholding."
          />
        </div>
      </div>
    </div>
  )
}

export default MainBenefitSection
