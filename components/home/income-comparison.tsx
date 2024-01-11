import React from "react"

const IncomeComparison = () => {
  return (
    <div className=" container py-10 md:py-16">
      <h1 className="text-center font-monument font-normal text-2xl text-primary md:pb-3 pb-2 uppercase">
        Income Comparison With Major Vendors
      </h1>

      <div className="py-10 grid grid-cols-1 xl:grid-cols-10 gap-7 ">
        <div className="bg-[#E7F0FD] p-7 rounded-3xl col-span-1 xl:col-span-3 gap-10 flex flex-col justify-between">
          <img className="w-24" src={"/images/home/ecos.am-logo.png"}></img>

          <div>
            <h2 className="text-lg text-muted-foreground font-monument tracking-wider">
              ecos.am
            </h2>

            <div className="space-y-3 mt-5">
              <div className="flex justify-between">
                <span className="font-mont text-muted-foreground">
                  Hashrate Renting Price
                </span>
                <span className="font-monument text-primary tracking-wider ml-3">
                  83.6USD
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-mont text-muted-foreground">
                  Service Fee
                </span>
                <span className="font-monument text-primary tracking-wider ml-3">
                  250USD
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-mont text-muted-foreground">
                  Bandwidth
                </span>
                <span className="font-monument text-primary tracking-wider ml-3">
                  120TH/s, 1month
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:col-span-4 bg-primary p-8 rounded-3xl gap-10 flex flex-col justify-between">
          <h1 className="text-muted font-monument tracking-wide text-5xl xl:text-6xl">
            SUNBELT
          </h1>

          <div>
            <h2 className="text-muted text-lg font-monument tracking-widest">
              OUR COMPANY
            </h2>

            <div className="space-y-3 mt-5">
              <div className="flex justify-between">
                <span className="font-mont text-muted">
                  Hashrate Renting Price
                </span>
                <span className="font-monument text-muted tracking-wider ml-3">
                  83.6USD
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-mont text-muted">Service Fee</span>
                <span className="font-monument text-muted tracking-wider ml-3">
                  250USD
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-mont text-muted">Bandwidth</span>
                <span className="font-monument text-muted tracking-wider ml-3">
                  120TH/s, 1month
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#E7F0FD] p-7 rounded-3xl col-span-1 xl:col-span-3 gap-10 flex flex-col justify-between">
          <img className="w-24" src={"/images/home/bitfufu.com-logo.png"}></img>
          <div>
            <h2 className="text-lg text-muted-foreground font-monument tracking-wider">
              bitfufu.com
            </h2>

            <div className="space-y-3 mt-5">
              <div className="flex justify-between">
                <span className="font-mont text-muted-foreground">
                  Hashrate Renting Price
                </span>
                <span className="font-monument text-primary tracking-wider ml-3">
                  83.6USD
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-mont text-muted-foreground">
                  Service Fee
                </span>
                <span className="font-monument text-primary tracking-wider ml-3">
                  250USD
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-mont text-muted-foreground">
                  Bandwidth
                </span>
                <span className="font-monument text-primary tracking-wider ml-3">
                  120TH/s, 1month
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IncomeComparison
