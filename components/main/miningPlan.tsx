import React from "react"

const MiningPlan = () => {
  return (
    <div className="rounded-md p-4 bg-white border border-[#E7F0FD] shadow-md">
      <p className="text-xl text-[#383838] font-semibold">Mining Plan</p>
      <div className="grid grid-cols-2 gap-4">
        <div></div>
        <div className="flex flex-col gap-3">
          <div className="p-2 bg-[#FAFAFA] rounded-md">
            <div className="flex items-center gap-1">
              <p>150 Days Plan </p>
              <p>.</p>
              <p>120 TH/s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiningPlan
