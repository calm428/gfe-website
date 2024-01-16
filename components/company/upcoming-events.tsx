import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import Card from "@/components/common/cards/blog-card"

const UpcomingEventsSection = () => {
  return (
    <div>
      <div className="flex gap-5">
        <div className="pb-10 md:pb-14">
          <div className="mt-4 font-monument text-xl text-primary">
            UPCOMING EVENTS
          </div>
          <div className="text-md font-mont text-muted-foreground">
            Stay tuned for our next exciting event, where innovation meets
            community! Join us for an enriching experience filled with insights,
            networking opportunities, and the latest developments in the world
            of cryptocurrency mining.
          </div>
        </div>

        <Button
          className="whitespace-nowrap font-monument tracking-wider"
          style={{
            background:
              "linear-gradient(277deg, #22B4FD 32.53%, #2D79FF 77.26%)",
          }}
        >
          All Events
        </Button>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card />
        <Card />
      </div>

      <div className="mt-16 flex justify-between">
        <div className="flex items-center gap-3 font-monument text-[#727C8F]">
          <ChevronLeft />
          <span className="pt-0.5">Previous</span>
        </div>
        <div className="flex items-center gap-3 font-monument text-[#727C8F]">
          <span className="pt-0.5">Next</span>
          <ChevronRight />
        </div>
      </div>
    </div>
  )
}

export default UpcomingEventsSection
