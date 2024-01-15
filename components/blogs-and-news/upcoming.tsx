"use client"

import Card from "@/components/common/cards/blog-card"

const UpcomingSection = () => {
  return (
    <div className="bg-background-lighten-10 container mt-5">
      <h1 className="mt-20 font-goldman text-5xl tracking-wider text-primary">
        UPCOMING EVENTS
      </h1>
      <p className="auth my-6 font-semibold">
        Stay tuned for our next exciting event, where innovation meets
        community! Join us for an enriching experience filled with insights,
        networking opportunities, and the latest developments in the world of
        cryptocurrency mining.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card />
        <Card />
      </div>
      <div className="my-12 border"></div>
    </div>
  )
}

export default UpcomingSection
