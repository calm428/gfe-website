"use client"

import React from "react"

import Card from "./Card"

const NewsSection = () => {
  return (
    <div className="bg-[#F9F9F9]">
      <div className="container py-24 ">
        <h1 className="font-goldman tracking-wider  text-5xl text-primary">
          News
        </h1>
        <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default NewsSection
