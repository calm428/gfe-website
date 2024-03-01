"use client"

import React, { useRef, useState } from "react"
import { useTranslations } from "next-intl"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import Image from "next/image"
import Link from "next/link"
import logoIcon from "@/public/logo-small.png"
import { Icon } from "leaflet"
import { useMapEvents } from "react-leaflet"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import SectionTitle from "../common/section-title"
import { Button } from "../ui/button"

interface MapEventsProps {
  setPanelVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const MapEvents: React.FC<MapEventsProps> = ({ setPanelVisible }) => {
  useMapEvents({
    click: () => {
      setPanelVisible(false) // Hide panel when any map area that's not a marker is clicked
    },
  })

  return null
}

export default function GuildMap() {
  const t = useTranslations("main")
  const [panelVisible, setPanelVisible] = useState(false)
  const icon = new Icon({
    iconUrl: "/logo-small.png",
    iconSize: [40, 40],
  })

  return (
    <section id="guild-map" className="pt-24">
      <SectionTitle>
        {t("guild.discover_the_polygon_guilds_near_you")}
      </SectionTitle>
      <div className="container relative mt-6 w-full overflow-hidden">
        <MapContainer
          center={[24.1422, -110.3108]}
          zoom={7.5}
          scrollWheelZoom={true}
          className="h-[500px] w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[24.1422, -110.3108]}
            icon={icon}
            eventHandlers={{
              click: () => {
                setPanelVisible(true)
              },
            }}
          ></Marker>
          <MapEvents setPanelVisible={setPanelVisible} />
        </MapContainer>
        <div
          className={cn(
            "absolute -left-1/2 top-0 z-[1000] h-full w-1/2 space-y-2 bg-gray-100 p-4 transition-all sm:-left-1/3 sm:w-1/3 lg:-left-1/4 lg:w-1/4",
            { "!left-0": panelVisible }
          )}
        >
          <div className="flex flex-col">
            <span className="text-sm uppercase text-gray-500">
              {t("guild.leader")}
            </span>
            <p>John Doe</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm uppercase text-gray-500">
              {t("guild.capacity")}
            </span>
            <p>3500kWh/d</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm uppercase text-gray-500">
              {t("guild.community_channel")}
            </span>
            <span className="text-xs uppercase text-gray-600">- Discord</span>
            <p>
              <Button variant="link">
                <Link href={siteConfig.links.discord} target="_blank">
                  {siteConfig.links.discord}
                </Link>
              </Button>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
