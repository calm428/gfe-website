interface Props {
  count: number
  title: String
}

function CounterCard({ count, title }: Props) {
  return (
    <div
      className={`${
        count === 0
          ? "bg-background text-primary"
          : "bg-gradient-to-b from-[#2BADFD] to-[#1570EF] text-white"
      }  border-border flex flex-col items-center justify-center rounded-[8px] border p-[16px] `}
    >
      <h1 className=" text-[14px] font-semibold md:text-[28px]">
        {count < 10 ? "0" + count : count}
      </h1>
      <p className=" text-[14px] font-medium md:text-[18px]">{title}</p>
    </div>
  )
}

export default CounterCard
