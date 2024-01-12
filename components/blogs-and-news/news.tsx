"use client"

import Card from "./Card"

const NewsSection = () => {
  return (
    <div className="bg-[#F9F9F9]">
      <div className="container py-24 ">
        <h1 className="font-goldman text-5xl  tracking-wider text-primary">
          News
        </h1>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default NewsSection
