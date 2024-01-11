"use client"

import React from "react"

import Card from "./Card"

const UpcomingSection = () => {
  return (
    <div className="container bg-background-lighten-10 mt-5">
      <h1 className="font-monument tracking-wider  text-2xl text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]">
        UPCOMING EVENTS
      </h1>
      <p className="font-semibold">
        Stay tuned for our next exciting event, where innovation meets
        community! Join us for an enriching experience filled with insights,
        networking opportunities, and the latest developments in the world of
        cryptocurrency mining.
      </p>
      <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2">
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default UpcomingSection
