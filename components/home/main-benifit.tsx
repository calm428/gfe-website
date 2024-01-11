import React from "react"

import { AdvantageCard } from "./advantage-card"

const MainBenifitSection = () => {
  return (
    <div className=" container py-10 grid grid-cols-1 xl:grid-cols-5">
      <div className="md:pb-14 pb-10 col-span-4">
        <h1 className="text-start font-monument font-normal text-2xl text-primary md:pb-3 pb-2 uppercase">
          Main Benefit{" "}
        </h1>
        <h3 className="font-mont font-medium text-muted-foreground md:text-xl text-start">
          We secure our future by promoting renewable energy resources. Our
          expert team take care of the regular maintenance and warranty
          servicing of your machine.
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 col-span-4 gap-10">
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

export default MainBenifitSection
