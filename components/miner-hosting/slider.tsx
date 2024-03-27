"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import Slider from "react-slick"

import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

export default function SliderSection() {
  const t = useTranslations("main")

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          vertical: true,
          verticalSwiping: true,
        },
      },
    ],
  }

  const SLIDE_DATA = [
    {
      icon: "/images/home/slide-icon-1.png",
      title: "1 Satoshis",
      text: t("miner_hosting.perKbData"),
    },
    {
      icon: "/images/home/slide-icon-2.png",
      title: "1.95 Billion",
      text: t("miner_hosting.totalTransaction"),
    },
    {
      icon: "/images/home/slide-icon-3.png",
      title: "$ 0.000003",
      text: t("miner_hosting.transactionFee"),
    },
    {
      icon: "/images/home/slide-icon-1.png",
      title: "1 Satoshis",
      text: t("miner_hosting.perKbData"),
    },
    {
      icon: "/images/home/slide-icon-2.png",
      title: "1.95 Billion",
      text: t("miner_hosting.totalTransaction"),
    },
    {
      icon: "/images/home/slide-icon-3.png",
      title: "$ 0.000003",
      text: t("miner_hosting.transactionFee"),
    },
  ]

  return (
    <section className="mt-[-100px] w-full">
      <div className="relative flex h-[300px] w-full items-center bg-[url('/images/miner-hosting/slider-bg.svg')] bg-[length:100%] bg-center bg-no-repeat sm:h-[200px]">
        <div className="absolute right-0 h-fit w-[60%] sm:w-[78%] lg:w-[70%] xl:w-[60%]">
          <Slider arrows={false} {...settings}>
            {SLIDE_DATA.map((data, index) => (
              <div className="!flex items-center gap-3" key={index}>
                <Image
                  src={data.icon}
                  alt="icon"
                  width={50}
                  height={50}
                  className="size-14"
                />
                <div className="flex flex-col gap-2.5">
                  <p className="font-goldman text-2xl">{data.title}</p>
                  <p className="">{data.text}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}
