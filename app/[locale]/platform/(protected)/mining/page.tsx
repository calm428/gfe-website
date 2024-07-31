import MinerList from "@/components/mining/miner-list"
import MiningPlan from "@/components/mining/mining-plan"
import TransactionHistory from "@/components/mining/transaction-history"

export default function MiningPage() {
  return (
    <div>
      <div className="container mx-auto max-w-7xl">
        <h1 className="w-fit bg-gradient-to-t from-[#1A88F9] to-[#76c8ff] bg-clip-text text-3xl font-semibold text-transparent">
          Mining
        </h1>
        <div className="flex flex-col items-end gap-4 sm:flex-row">
          <MinerList className="relative w-full sm:w-1/2 lg:w-2/3 xl:w-[950px]" />
          <MiningPlan />
        </div>
        <TransactionHistory />
      </div>
    </div>
  )
}
