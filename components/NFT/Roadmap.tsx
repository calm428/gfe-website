import React from "react"

import Step from "./Step"

function Roadmap() {
  return (
    <div className="pb-24 px-5 lg:px-24">
      <h1 className=" font-monument capitalize text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF] text-[45px] text-center">
        GFE Foundation Roadmap
      </h1>
      <div className="flex flex-col pt-24 xl:pt-32">
        <img src="/images/Step.svg" alt="roadmap" className=" hidden lg:block" />
        <div className="grid lg:grid-cols-5 gap-8 lg:pt-12 xl:pt-16">
          <Step step={1} desc="Description of the tasks. What to do. Why to do it How to achieve it"/>
          <Step step={2} desc="Description of the tasks. What to do. Why to do it How to achieve it"/>
          <Step step={3} desc="Description of the tasks. What to do. Why to do it How to achieve it"/>
          <Step step={4} desc="Description of the tasks. What to do. Why to do it How to achieve it"/>
          <Step step={5} desc="Description of the tasks. What to do. Why to do it How to achieve it"/>
        </div>
      </div>
    </div>
  )
}

export default Roadmap
