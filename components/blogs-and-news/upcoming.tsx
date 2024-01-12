"use client"

import React from "react"

import Card from "./Card"

const UpcomingSection = () => {
  return (
    <div className="container bg-background-lighten-10 mt-5">
      <h1 className="font-goldman tracking-wider text-5xl mt-20 text-primary">
        UPCOMING EVENTS
      </h1>
      <p className="font-semibold auth my-6">
        Stay tuned for our next exciting event, where innovation meets
        community! Join us for an enriching experience filled with insights,
        networking opportunities, and the latest developments in the world of
        cryptocurrency mining.
      </p>
      <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2">
        <Card />
        <Card />
      </div>
      <div className="border my-12"></div>
    </div>
  )
}

export default UpcomingSection
