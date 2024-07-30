"use client"

import React, { useRef, useState } from "react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"
import Slider from "react-slick"

import MinerCard from "@/components/mining/miner-card"

import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

import { Button } from "@nextui-org/react"

interface MinerListProps {
  className: string
}

export default function MinerList({ className }: MinerListProps) {
  const [slideIndex, setSlideIndex] = useState(0)
  const [updateCount, setUpdateCount] = useState(0)
  let sliderRef = useRef(null)

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    afterChange: () => setUpdateCount(updateCount + 1),
    beforeChange: (current: number, next: number) => setSlideIndex(next),
  }

  return (
    <div className={className}>
      {/** @ts-ignore */}
      <Slider
        {...settings}
        ref={(slider) => {
          // @ts-ignore
          sliderRef = slider
        }}
      >
        <MinerCard />
        <MinerCard />
        <MinerCard />
        <MinerCard />
      </Slider>

      <Button
        isIconOnly
        radius="full"
        variant="faded"
        aria-label="prev"
        className="absolute left-0 top-1/2 -translate-y-1/2"
        disabled={slideIndex === 0}
        // @ts-ignore
        onClick={() => sliderRef.slickGoTo(slideIndex - 1)}
      >
        <LuChevronLeft className="size-4" />
      </Button>
      <Button
        isIconOnly
        radius="full"
        variant="faded"
        aria-label="next"
        className="absolute right-0 top-1/2 -translate-y-1/2"
        disabled={slideIndex === 4}
        // @ts-ignore
        onClick={() => sliderRef.slickGoTo(slideIndex + 1)}
      >
        <LuChevronRight className="size-4" />
      </Button>
    </div>
  )
}
