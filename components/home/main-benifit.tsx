import { AdvantageCard } from "./advantage-card"

const MainBenefitSection = () => {
  return (
    <div className=" container grid grid-cols-1 py-10 xl:grid-cols-5">
      <div className="col-span-4 pb-10 md:pb-14">
        <h1 className="pb-2 text-start font-monument text-2xl font-normal uppercase text-primary md:pb-3">
          Main Benefit{" "}
        </h1>
        <h3 className="text-start font-mont font-medium text-muted-foreground md:text-xl">
          We secure our future by promoting renewable energy resources. Our
          expert team take care of the regular maintenance and warranty
          servicing of your machine.
        </h3>
      </div>

      <div className="col-span-4 grid grid-cols-1 gap-10 lg:grid-cols-3">
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
  )
}

export default MainBenefitSection
