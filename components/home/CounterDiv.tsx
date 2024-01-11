import React from "react"

interface Props {
  count: number
  title: String
}
function CounterDiv({ count, title }: Props) {
  return (
    <div
      className={`${
        count === 0
          ? "bg-background text-primary"
          : "bg-gradient-to-b from-[#2BADFD] to-[#1570EF] text-white"
      }  p-[16px] flex flex-col items-center justify-center rounded-[8px] border border-border font-mont `}
    >
      <h1 className=" text-[14px] md:text-[28px] font-semibold">
        {count < 10 ? "0" + count : count}
      </h1>
      <p className=" text-[14px] md:text-[18px] font-medium">{title}</p>
    </div>
  )
}

export default CounterDiv
