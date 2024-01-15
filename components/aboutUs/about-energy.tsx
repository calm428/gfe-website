"use client"
import Image from "next/image"


function AboutEnergy() {
  return (
    <div className="bg-[#F9FCFF] pt-24">
      <div className="flex flex-col items-center gap-6 px-5 lg:px-24 ">
        <h1 className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-center font-goldman text-5xl text-transparent">
          Views on energy
        </h1>
        <p className="auth text-center font-mont text-base font-medium md:text-lg lg:w-[1000px]">
          Electricity is a production commodity due to its structure. Current
          technology to store it is not ready to scale to meet our grid based
          distribution technology. This state of affairs makes sales linked to
          consumption in most markets: nearly all electricity is sold and
          consumed at the same time.
        </p>
      </div>
      <div className="flex flex-col pt-14 lg:flex-row">
        <div>
          <Image
            src="/images/about-us/nft2.svg"
            alt="image"
            width={838}
            height={689}
            className="lg:w-[90%]"
          />
        </div>
        <div className="flex flex-col gap-8 px-5 lg:w-1/2 lg:px-0 lg:pr-24">
          <p className="auth font-mont text-base font-medium md:text-lg">
            Small scale storage, for a productive asset consuming a resource,
            has different motivation than a productive asset which has an
            operating expense from its grid energy appetite. We care for the
            electricity we make in a different manner than the financial impact
            felt from a monthly bill. The production and consumption of energy
            by direction allows the best of all situations.
          </p>
          <p className="auth font-mont text-base font-medium md:text-lg">
            The NFT owner is responsible for clean solar panels to maximize her
            KW. The collective is looking for best impact and highest
            remuneration for its energy commodity, and the token holders are
            supporting the process and profiting from a fractional ROI from
            producing and consuming ethically sourced power for profit.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse pt-14 lg:flex-row">
        <div className="flex flex-col gap-8 px-5 lg:w-1/2 lg:px-0 lg:pl-24">
          <p className="auth font-mont text-base font-medium md:text-lg">
            The world{"'"}s diet for energy is in part due to the convenience of
            a grid. Most developing worlds do not have easy access to
            electricity to facilitate using a clothes dryer. Often they dry
            their clothes outside.
          </p>
          <p className="auth font-mont text-base font-medium md:text-lg">
            Being able to run a dryer 24/7/365 is part of the promise of a grid
            in the US, but a reluctant addition to a home owner{"'"}s solar
            system. Providing for a grid requires capacity for everything. In
            the US this results in many plants running at low (inefficient)
            power levels to stand by for demand loads. These plants are often
            coal fired, and even more inefficient (but less polluting) by
            running at standby.
          </p>
        </div>
        <div className="flex justify-end">
          <Image
            src="/images/about-us/nft3.svg"
            alt="image"
            width={849}
            height={629}
            className="lg:w-[90%]"
          />
        </div>
      </div>
      <div className="bg-[url('/images/about-us/bg2.png')] bg-cover bg-center bg-no-repeat pt-24">
        <div className="px-5 lg:px-24">
          <Image
            src="/images/about-us/energy.png"
            width={1520}
            height={452}
            alt="energy"
            className="mx-auto"
          />
        </div>
        <div className="px-5 pb-24 lg:px-24">
          <div className="grid gap-14 pt-20 lg:grid-cols-2">
            <div className=" flex flex-col gap-3">
              <p className="auth font-mont text-base font-medium text-accent-foreground lg:text-lg">
                The more small loads we can partition and remove from their grid
                leashed defaults in design, the more our world transitions to
                renewable power
              </p>
              <div className="rounded-md  bg-gradient-to-br from-[#2BADFD] to-[#1570EF] p-6">
                <div className="mb-3 flex gap-6">
                  <div>
                    <img
                      src="/icons/Buttons.svg"
                      alt="image"
                      className="w-full"
                    />
                  </div>
                  <p className="auth font-mont text-base font-medium text-primary-foreground">
                    Small scale renewable hydrocarbon brewing is needed in many
                    places, this is due to the
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  <p className="auth font-mont text-base font-medium text-primary-foreground">
                    intrinsic costs of delivery of extractive energy. Many small
                    efforts are needed to change things.
                  </p>
                  <p className="auth font-mont text-base font-medium text-primary-foreground">
                    Our transition energy needs rely heavily on hydrogen in many
                    playbooks. That infrastructure can be built in what ever
                    manner our global commons chooses.
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-4">
              <p className="auth font-mont text-base font-medium text-accent-foreground md:text-lg">
                Small scale storage, for a productive asset consuming a
                resource, has different motivation than a productive asset which
                has an operating expense from its grid energy appetite. We care
                for the electricity we make in a different manner than the
                financial impact felt from a monthly bill. The production and
                consumption of energy by direction allows the best of all
                situations.
              </p>
              <p className="auth font-mont text-base font-medium text-accent-foreground md:text-lg">
                The NFT owner is responsible for clean solar panels to maximize
                her KW. The collective is looking for best impact and highest
                remuneration for its energy commodity, and the token holders are
                supporting the process and profiting from a fractional ROI from
                producing and consuming ethically sourced power for profit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutEnergy
