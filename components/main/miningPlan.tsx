const MiningPlan = () => {
  return (
    <div className="rounded-md border border-[#E7F0FD] bg-white p-4 shadow-md">
      <p className="text-xl font-semibold text-[#383838]">Mining Plan</p>
      <div className="grid grid-cols-2 gap-4">
        <div></div>
        <div className="flex flex-col gap-3">
          <div className="rounded-md bg-[#FAFAFA] p-2">
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
