const IncomeComparison = () => {
  return (
    <div className="bg-[url('/images/miner-hosting/bg4.png')] bg-cover bg-bottom bg-no-repeat py-10 md:py-16">
      <div className="container">
        <h1 className="pb-5 text-center font-goldman text-5xl font-normal text-primary  md:pb-10">
          Income Comparison With Major Vendors
        </h1>

        <div className="grid grid-cols-1 gap-7 py-10 xl:grid-cols-10 ">
          <div className="col-span-1 flex flex-col justify-between gap-10 rounded-3xl bg-[#E7F0FD] p-7 xl:col-span-3">
            <img className="w-24" src={"/images/home/ecos.am-logo.png"}></img>

            <div>
              <h2 className="font-monument text-lg tracking-wider text-muted-foreground">
                ecos.am
              </h2>

              <div className="mt-5 space-y-3">
                <div className="flex justify-between">
                  <span className="font-mont text-muted-foreground">
                    Hashrate Renting Price
                  </span>
                  <span className="ml-3 font-monument tracking-wider text-primary">
                    83.6USD
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mont text-muted-foreground">
                    Service Fee
                  </span>
                  <span className="ml-3 font-monument tracking-wider text-primary">
                    250USD
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mont text-muted-foreground">
                    Bandwidth
                  </span>
                  <span className="ml-3 font-monument tracking-wider text-primary">
                    120TH/s, 1month
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 flex flex-col justify-between gap-10 rounded-3xl bg-primary p-8 xl:col-span-4">
            <h1 className="font-monument text-5xl tracking-wide text-muted xl:text-6xl">
              SUNBELT
            </h1>

            <div>
              <h2 className="font-monument text-lg tracking-widest text-muted">
                OUR COMPANY
              </h2>

              <div className="mt-5 space-y-3">
                <div className="flex justify-between">
                  <span className="font-mont text-muted">
                    Hashrate Renting Price
                  </span>
                  <span className="ml-3 font-monument tracking-wider text-muted">
                    83.6USD
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mont text-muted">Service Fee</span>
                  <span className="ml-3 font-monument tracking-wider text-muted">
                    250USD
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mont text-muted">Bandwidth</span>
                  <span className="ml-3 font-monument tracking-wider text-muted">
                    120TH/s, 1month
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 flex flex-col justify-between gap-10 rounded-3xl bg-[#E7F0FD] p-7 xl:col-span-3">
            <img
              className="w-24"
              src={"/images/home/bitfufu.com-logo.png"}
            ></img>
            <div>
              <h2 className="font-monument text-lg tracking-wider text-muted-foreground">
                bitfufu.com
              </h2>

              <div className="mt-5 space-y-3">
                <div className="flex justify-between">
                  <span className="font-mont text-muted-foreground">
                    Hashrate Renting Price
                  </span>
                  <span className="ml-3 font-monument tracking-wider text-primary">
                    83.6USD
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mont text-muted-foreground">
                    Service Fee
                  </span>
                  <span className="ml-3 font-monument tracking-wider text-primary">
                    250USD
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mont text-muted-foreground">
                    Bandwidth
                  </span>
                  <span className="ml-3 font-monument tracking-wider text-primary">
                    120TH/s, 1month
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IncomeComparison
