import AdvantageDiv from "./AdvantageDiv"

const AdvantagesSection = () => {
  return (
    // <div className=' container py-10'>
    //   <div className="md:pb-14 pb-10">
    //     <h1 className="text-center font-monument font-normal text-2xl text-primary md:pb-3 pb-2 uppercase">Advantages of sunbelt renewable mining</h1>
    //     <h3 className="font-mont font-medium text-lg md:text-xl text-center">Focused on sustainable mining and eco-friendly options, contribute to making the world better</h3>
    //   </div>

    //   <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
    //     <div className='grid grid-rows-2 grid-cols-1 gap-5'>
    //       <AdvantageCard icon='/images/home/Specialization-icon.png' title='Specialization' text='SUNBELT miners are purpose-built for specific cryptocurrency algorithms, providing superior performance and efficiency compared to general-purpose hardware like CPUs or GPUs.' />
    //       <AdvantageCard icon='/images/home/EnergyEfficiency-icon.png' title='Energy Efficiency' text='SUNBELT miners are designed to be energy-efficient, minimizing wasted energy and making them cost-effective in terms of electricity consumption over the long run.' />
    //     </div>

    //     <div className='rounded-3xl relative flex items-center flex-col min-h-[525px]'
    //       style={{
    //         background:
    //           "linear-gradient(0deg, #2D79FF 10%, #22B4FD 50%)",
    //       }}
    //     >
    //       <div className='p-10'>
    //         <h1 className="text-xl text-accent font-monument tracking-wider">SUNBELT MINER</h1>
    //         <p className="mt-2 text-white transition-all duration-500">SUNBELT (Application-Specific Integrated Circuit) miners offer several advantages in the context of cryptocurrency mining compared to other types of mining hardware, such as CPUs or GPUs.</p>
    //       </div>
    //       <img className="max-w-[350px] w-full absolute bottom-0 px-2.5" src={"/images/home/miner.png"}></img>
    //     </div>

    //     <div className='grid grid-rows-2 grid-cols-1 gap-5'>
    //       <AdvantageCard icon='/images/home/HighHashrate-icon.png' title='High Hashrate' text='SUNBELTs offer a significantly higher hashrate, enabling faster and more efficient mining of cryptocurrency, resulting in a higher probability of successfully mining a block.' />
    //       <AdvantageCard icon='/images/home/RealTimeTrading-icon.png' title='Real Time Trading' text='SUNBELT miners are dedicated devices, leading to increased stability and reliability in mining operations. Their singular purpose contributes to consistent performance over time.' />
    //     </div>
    //   </div>
    // </div>
    <div className="grid gap-[50px] px-5 py-24 md:grid-cols-2 lg:px-24">
      <AdvantageDiv
        title="DAPPs Units"
        desc="Our Journey began with the design and construction of a sustainably-run server hosting environment prototype."
        image="/advantages/adv2.svg"
      />
      <AdvantageDiv
        title="NFT"
        desc="NFT holders have the ownership of these units and earn a daily income."
        image="/advantages/adv1.svg"
      />
    </div>
  )
}

export default AdvantagesSection
