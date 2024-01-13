"use client"

import React from "react"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SLIDE_DATA = [
  {
    icon: "/images/home/slide-icon-1.png",
    title: "1 Satoshis",
    text: "per Kb data",
  },
  {
    icon: "/images/home/slide-icon-2.png",
    title: "1.95 Billion",
    text: "Total Transaction",
  },
  {
    icon: "/images/home/slide-icon-3.png",
    title: "$ 0.000003",
    text: "Transaction Fee",
  },
  {
    icon: "/images/home/slide-icon-2.png",
    title: "1.95 Billion",
    text: "Total Transaction",
  },
  {
    icon: "/images/home/slide-icon-3.png",
    title: "$ 0.000003",
    text: "Transaction Fee",
  },
]

const SliderSection = () => {
  const settings = {
    className: "center gfe-carousel ",
    centerMode: true,
    infinite: true,
    centerPadding: "320px",
    slidesToShow: 1,
    draggable: true,
    swipeToSlide: true,
    // speed: 500,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "150px",

        }
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "100px",

        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "50px",

        }
      }
    ]
  }

  return (
    <div className=" relative pt-[100px] auth bg-background">
      <div className="flex lg:px-[200px] flex-col gap-[24px] items-center">
        <h1 className="font-medium py-[8px] px-[16px] text-base md:text-[20px] rounded-sm bg-[#EEF5FF] text-primary">
          Green Fungible Energy
        </h1>
        <h1 className="font-monument text-[45px] text-center lg:text-[50px] font-normal capitalize text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]">
          What is GFE?
        </h1>
        <p className=" text-base lg:text-[20px] text-muted-foreground text-center">
          GFE tokens are the digital representation of electrical energy, with
          each token signifying the right to direct the use of [1] 1kWh of green
          energy that will be generated and consumed by our infrastructure. This
          twofold implication of GFE tokens mean that not only do they serve as
          tradable assets with income, they are reflective of sustainable
          practices and have tangible, real-world utility.
        </p>
      </div>

      <div className="mt-[270px] my-[30px]">
        <div className="">
          <div className="w-full flex items-center relative">
            <div className="h-[500px] absolute w-full ">
              <Slider
                arrows={false}

                {...settings}
              >
                {SLIDE_DATA.map((data, index) => (
                  <div key={index} className="px-[40px] rounded-sm ">
                    <img src={"/images/home/gfe-image.png"} className="h-full w-full object-contain" />
                  </div>
                ))}
              </Slider>
              <style jsx global>{`
          .slick-dots {
            bottom: -48px !important;
            z-index: 999 !important;
          }

          .slick-dots li button:before {
            content: " ";
            border: 1px solid #1570EF;
            line-height: 2px;
            height: 3px;
            width:25px;
          }
          .slick-dots .slick-active button:before {
            background-color: #1570EF;
          }
        `}</style>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SliderSection
