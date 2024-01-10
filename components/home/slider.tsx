"use client"

import React from "react"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Coursel from "./Coursel"

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
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

  return (
    // <div className=' container pb-52 hidden lg:block'>
    //     <div className='absolute w-[1900px] right-0'>
    //         <div
    //             className='h-[230px] !bg-cover !bg-no-repeat w-full flex items-center relative'
    //             style={{
    //                 background: "url(/images/home/slider-bg.png)",
    //             }}
    //         >
    //             <div className='absolute right-0 w-[800px] h-fit'>
    //                 <Slider arrows={false} {...settings}>
    //                     {SLIDE_DATA.map((data, index) => (
    //                         <div className='!flex items-center gap-6' key={index}>
    //                             <img src={data.icon} />
    //                             <div className='flex flex-col gap-2.5'>
    //                                 <h1 className='text-2xl font-monument'>{data.title}</h1>
    //                                 <p className=''>{data.text}</p>
    //                             </div>
    //                         </div>
    //                     ))}
    //                 </Slider>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <div className=" px-5 relative pt-[100px] auth bg-background z-10">
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
      <div>
        
      </div>
    </div>
  )
}

export default SliderSection
