"use client"

import { useState } from "react"

import { Button } from "../ui/button"
import ListItem from "./ListItem"

function CalculatorSection() {
  const [amount, setAmount] = useState<number | null>(null)
  return (
    // <div className=' container py-20'>
    //   <h1 className="text-center font-monument font-normal text-2xl text-primary pb-20 uppercase">Buy Our Energy & Save Per Machine</h1>

    //   <div className='w-full flex flex-col xl:flex-row gap-10'>
    //     <HistoricalPowerGraph />

    //     <div className='xl:w-1/2 w-full'>
    //       <h1 className='text-xl font-monument tracking-wider text-primary pt-10 pb-5'>Calculate</h1>

    //       <div className='flex items-start gap-3'>
    //         <div className='w-full'>
    //           <div className='w-full space-y-2'>
    //             <Label>Amount</Label>
    //             <div className='relative flex w-full h-full items-center'>
    //               <Input type="number" placeholder='Enter amount' className={'w-full h-14 text-primary font-mont text-lg ' + `${(amount && amount > 0) && "font-bold text-lg"}`} value={amount || ""} onChange={(e) => setAmount(e.target.value as any)} />
    //               {(amount && amount > 0) && <span className='absolute ml-3 font-mont text-primary font-bold text-lg'><span className='text-transparent mr-2'>{amount}</span>Kwh</span>}
    //             </div>
    //           </div>
    //           <Slider defaultValue={[33]} max={100} step={1} className='my-6' />
    //         </div>

    //         <div className='space-y-2'>
    //           <Label>Amount</Label>
    //           <span className='py-[13px] px-5 bg-[#D8FFB4] font-bold text-lg flex items-center justify-center font-mont text-[#479A0B]'>11%</span>
    //         </div>
    //       </div>

    //       <div className='grid grid-cols-1 xl:grid-cols-2 gap-3'>
    //         <div className='flex justify-between bg-accent p-4 rounded-md'>
    //           <span className='text-lg'>Bonus Energy</span>
    //           <span className='font-mont text-primary font-bold text-lg'>2720 Kwh</span>
    //         </div>

    //         <div className='flex justify-between bg-accent p-4 rounded-md'>
    //           <span className='text-lg'>Total Energy</span>
    //           <span className='font-mont text-primary font-bold text-lg'>2720 Kwh</span>
    //         </div>
    //       </div>

    //       <div className='flex justify-between bg-blue-100 p-4 rounded-md mt-5'>
    //         <span className='text-lg'>Price</span>
    //         <span className='font-mont text-primary font-bold text-lg'>$ 2720</span>
    //       </div>

    //       <Button className={cn(buttonVariants(), "font-monument tracking-widest pt-2.5 font-normal hidden md:block mt-10")} style={{
    //         background:
    //           "linear-gradient(75deg, #22B4FD 10%, #2D79FF 90%)",
    //       }}>Next</Button>
    //     </div>
    //   </div>
    // </div>
    <div className=" relative flex flex-col-reverse  items-center gap-40 bg-[url('/bgs/Features.svg')] bg-cover px-5 pb-60 sm:pt-[100px] lg:flex-row lg:px-24">
      <img
        src="/advantages/hue.svg"
        alt="bg"
        className="absolute -left-5 top-0"
      />
      {/* image */}
      <div className="flex items-center justify-center lg:w-1/2">
        <img src="/advantages/Group.svg" alt="image" className="w-[90%]" />
      </div>
      {/* main */}
      <div className="flex flex-col gap-12 lg:w-1/2">
        <div className="flex flex-col gap-6">
          <div className="w-[100px] rounded-sm bg-[#EEF5FF]">
            <h1 className="auth w-fit bg-gradient-to-b from-[#2BADFD] to-[#1570EF]  bg-clip-text px-[16px] py-[8px] text-base font-medium text-transparent md:text-[20px] ">
              Future
            </h1>
          </div>
          <h1 className="font-goldman  text-6xl font-normal text-primary">
            Building a better future
          </h1>
          <p className=" auth text-lg font-medium text-muted-foreground">
            By increasing our capacity, we not only enhance the value of GFE
            tokens but also contribute to a larger societal shift towards
            renewable energy usage. Our planet benefits every time a power
            intensive industry is moved to renewable in a way that carbon
            offsets can’t provide. Industries we are examining for KW
            fungability.
          </p>
          <p className="auth text-lg font-medium">
            We are going to participate in energy intensive industries and
            market our effluent heat energy
          </p>
          <div className="grid  sm:grid-cols-2">
            <ListItem text="Server hosting" />
            <ListItem text="District rural power" />
            <ListItem text="EV charging" />
            <ListItem text="Hydrocarbon Production" />
            <ListItem text="Brewing and distillation" />
            <ListItem text="Fish farming" />
            <ListItem text="Commercial laundry" />
          </div>
        </div>
        <div>
          <Button className="auth bg-gradient-to-l from-[#2BADFD] to-[#1570EF] px-8 py-4">
            Read More About Project
          </Button>
        </div>
      </div>
      {/* <img
        src="/bgs/global.jpg"
        alt="bg"
        className=" absolute bottom-0 xl:top-0 -right-[100px] opacity-50 "
      /> */}
    </div>
  )
}

export default CalculatorSection
