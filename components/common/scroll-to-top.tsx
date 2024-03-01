"use client"

import { ScrollToTop as ReactScrollToTop } from "react-simple-scroll-up"

export default function ScrollToTop() {
  return (
    <ReactScrollToTop
      className="!bottom-[50px] z-[999]"
      strokeFillColor="#21b4fd"
      strokeEmptyColor="#21b4fd55"
      bgColor="#21b4fd99"
    />
  )
}
