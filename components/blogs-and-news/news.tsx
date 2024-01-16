"use client"

import Card from "@/components/common/cards/blog-card"

const NewsSection = () => {
  return (
    <div className="bg-[#F9F9F9]">
      <div className="container py-24 ">
        <h1 className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-transparent  font-goldman text-5xl  tracking-wider">
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
