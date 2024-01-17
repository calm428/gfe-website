"use client"

import { Button } from "../../ui/button"
import ListItem from "./list-item"

function CalculatorSection() {
  return (
    <div className=" relative flex flex-col-reverse  items-center gap-40 bg-[url('/bgs/Features.svg')] bg-cover pb-60 sm:pt-[100px] lg:flex-row">
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
      <div className="flex container flex-col gap-12 lg:w-1/2">
        <div className="flex flex-col gap-6">
          <div className="w-[100px] rounded-sm bg-[#EEF5FF]">
            <h1 className="auth w-fit bg-gradient-to-b from-[#2BADFD] to-[#1570EF]  bg-clip-text px-[16px] py-[8px] text-base font-medium text-transparent md:text-[20px] ">
              Future
            </h1>
          </div>
          <h1 className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-transparent  font-goldman  text-6xl font-normal">
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
    </div>
  )
}

export default CalculatorSection
