"use client"

import Image from "next/image"
import { useTranslation } from "next-i18next"

function AboutEnergy() {
  let { t } = useTranslation()
  return (
    <div className="bg-[#F9FCFF] pt-24">
      <div className="flex flex-col items-center gap-6 container ">
        <h1 className=" bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-center font-goldman text-5xl text-transparent">
          {t("about_us_page.energy_section.title")}
        </h1>
        <p className="auth text-center font-mont text-base font-medium md:text-lg lg:w-[1000px]">
          {t("about_us_page.energy_section.para1")}
        </p>
      </div>
      <div className="container flex flex-col px-0 pt-14 lg:flex-row justify-between">
        <div>
          <Image
            src="/images/about-us/nft2.svg"
            alt="image"
            width={838}
            height={689}
            className="lg:w-[90%]"
          />
        </div>
        <div className="flex flex-col gap-8 container lg:w-1/2 lg:pr-24 justify-center">
          <p className="auth font-mont text-base font-medium md:text-lg">
            {t("about_us_page.energy_section.para2")}
          </p>
          <p className="auth font-mont text-base font-medium md:text-lg">
            {t("about_us_page.energy_section.para3")}
          </p>
        </div>
      </div>
      <div className="container flex flex-col-reverse px-0 pt-14 lg:flex-row justify-between">
        <div className="flex flex-col gap-8 px-0 lg:w-1/2 lg:px-0  justify-center">
          <p className="auth font-mont text-base font-medium md:text-lg">
            {t("about_us_page.energy_section.para4")}
          </p>
          <p className="auth font-mont text-base font-medium md:text-lg">
            {t("about_us_page.energy_section.para5")}
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
        <div className="container">
          <div className=" lg:px-24">
            <Image
              src="/images/about-us/energy.png"
              width={1520}
              height={452}
              alt="energy"
              className="mx-auto"
            />
          </div>
          <div className="pb-24 lg:px-24">
            <div className="grid gap-14 pt-20 lg:grid-cols-2">
              <div className=" flex flex-col gap-3">
                <p className="auth font-mont text-base font-medium text-accent-foreground lg:text-lg">
                  {t("about_us_page.energy_section.para6")}
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
                      {t("about_us_page.energy_section.point1")}
                    </p>
                  </div>
                  <div className="flex flex-col gap-6">
                    <p className="auth font-mont text-base font-medium text-primary-foreground">
                      {t("about_us_page.energy_section.point2")}
                    </p>
                    <p className="auth font-mont text-base font-medium text-primary-foreground">
                      {t("about_us_page.energy_section.point3")}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-4">
                <p className="auth font-mont text-base font-medium text-accent-foreground md:text-lg">
                  {t("about_us_page.energy_section.para7")}
                </p>
                <p className="auth font-mont text-base font-medium text-accent-foreground md:text-lg">
                  {t("about_us_page.energy_section.para8")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutEnergy
