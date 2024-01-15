import AdvantageCard from "./advantage-card"

const AdvantagesSection = () => {
  return (
    <div className="grid gap-[50px] px-5 py-24 md:grid-cols-2 lg:px-24">
      <AdvantageCard
        title="DAPPs Units"
        desc="Our Journey began with the design and construction of a sustainably-run server hosting environment prototype."
        image="/advantages/adv2.svg"
      />
      <AdvantageCard
        title="NFT"
        desc="NFT holders have the ownership of these units and earn a daily income."
        image="/advantages/adv1.svg"
      />
    </div>
  )
}

export default AdvantagesSection
