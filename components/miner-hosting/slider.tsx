"use client"

import Image from "next/image"
import { useTranslation } from "react-i18next"
import Slider from "react-slick"

import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

const SliderSection = () => {
  const { t } = useTranslation()
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
      text: t("minerHosting.perKbData"),
    },
    {
      icon: "/images/home/slide-icon-2.png",
      title: "1.95 Billion",
      text: t("minerHosting.totalTransaction"),
    },
    {
      icon: "/images/home/slide-icon-3.png",
      title: "$ 0.000003",
      text: t('minerHosting.transactionFee'),
    },
    {
      icon: "/images/home/slide-icon-1.png",
      title: "1 Satoshis",
      text: t("minerHosting.perKbData"),
    },
    {
      icon: "/images/home/slide-icon-2.png",
      title: "1.95 Billion",
      text: t("minerHosting.totalTransaction"),
    },
    {
      icon: "/images/home/slide-icon-3.png",
      title: "$ 0.000003",
      text: t('minerHosting.transactionFee'),
    },
  ]

  return (
    <div className="-mt-[100px] w-full">
      <div className="relative flex h-[300px] w-full items-center bg-[url('/images/miner-hosting/slider-bg.svg')] bg-cover bg-center bg-no-repeat sm:h-[200px]">
        <div className="absolute right-0 h-fit w-[60%] sm:w-[78%] lg:w-[70%] xl:w-[60%]">
          <Slider arrows={false} {...settings}>
            {SLIDE_DATA.map((data, index) => (
              <div className="!flex items-center gap-3" key={index}>
                <Image
                  src={data.icon}
                  alt="icon"
                  width={50}
                  height={50}
                  className="h-14 w-14"
                />
                <div className="flex flex-col gap-2.5">
                  <h1 className="font-goldman text-2xl">{data.title}</h1>
                  <p className="">{data.text}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default SliderSection