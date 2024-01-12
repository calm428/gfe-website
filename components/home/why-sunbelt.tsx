import { AdvantageCard } from "./advantage-card"

const WhySunbeltSection = () => {
  return (
    <div className=" container pt-12 md:pt-20">
      <div className="pb-10 md:pb-14">
        <h1 className="pb-2 text-center font-monument text-2xl font-normal uppercase text-primary md:pb-3">
          Why Sunbelt?
        </h1>
        <h3 className="text-center font-mont text-lg">
          Our own power plant, strong team, the best partners support to form
          our unique infrastructure that provides sustainable mining service to
          users with reliability, stability, profitability and confidence in the
          future.
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
        <AdvantageCard
          icon="/images/home/RenewableEnergy-icon.png"
          title="Renewable Energy"
          text="Renewable energy uses natural resources like sunlight and wind for sustainable power, reducing environmental impact and fostering energy independence."
        />
        <AdvantageCard
          icon="/images/home/GeothermalCooling-icon.png"
          title="Geothermal Cooling"
          text="Renewable energy uses natural resources like sunlight and wind for sustainable power, reducing environmental impact and fostering energy independence."
        />
        <AdvantageCard
          icon="/images/home/AfterSaleService-icon.png"
          title="After Sale Service"
          text="After-sale service is ongoing customer support provided by a business post-purchase. It includes technical assistance, maintenance guidance. environmental impact "
        />
        <AdvantageCard
          icon="/images/home/LowFee&HighProfit-icon.png"
          title="Low Fee & High Profit"
          text="Renewable energy uses natural resources like sunlight and wind for sustainable power, reducing environmental impact and fostering energy independence."
        />
      </div>
    </div>
  )
}

export default WhySunbeltSection
