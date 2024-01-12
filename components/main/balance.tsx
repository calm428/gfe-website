import { Icons } from "../icons"
import { Button } from "../ui/button"

const Balance = () => {
  return (
    <div
      className="w-2/5 rounded-md p-4 text-white"
      style={{
        background:
          "linear-gradient(277deg, #22B4FD 32.53%, #2D79FF 77.26%), #1570EF",
        boxShadow: "0px 0px 18px 0px rgba(0, 0, 0, 0.06)",
      }}
    >
      <Icons.balance />
      <p className="mb-4 mt-3 text-sm font-medium">Current Balance</p>
      <p className="mb-2 text-4xl font-semibold">$99,118.5</p>
      <div className="mb-4 flex items-center justify-between">
        <p className="font-medium">Current Balance</p>
        <div
          className="flex items-center gap-1 rounded-md px-2 py-1 text-[#70FF29] "
          style={{ background: "rgba(46, 255, 92, 0.08)" }}
        >
          <Icons.up />
          <p>10.5%</p>
        </div>
      </div>
      <div
        className="my-3 h-1 w-full"
        style={{ background: "rgba(46, 255, 92, 0.08)" }}
      ></div>
      <div className="grid grid-cols-2 gap-5">
        <Button className="w-full" variant={"secondary"}>
          <Icons.add />
          Deposit
        </Button>
        <Button className="w-full " variant={"secondary"}>
          <Icons.send />
          Withdraw
        </Button>
      </div>
    </div>
  )
}

export default Balance
