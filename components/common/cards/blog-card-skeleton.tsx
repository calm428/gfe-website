"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { formatCustomDate, getInitials } from "@/lib/utils"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

export default function BlogCardSkeleton({
  className,
}: {
  className?: string
}) {
  return (
    <div
      className={`relative w-full h-full max-w-[320px] sm:max-w-[400px] mx-auto flex flex-col border rounded-3xl overflow-hidden ${className}`}
    >
      <Skeleton className="w-full h-48 rounded-none" />

      <div className="relative space-y-3 p-5 flex flex-col">
        <div>
          <Skeleton className="w-2/3 h-6 mb-2" />
          <Skeleton className="w-full h-5 mb-1" />
          <Skeleton className="w-full h-5 mb-1" />
          <Skeleton className="w-full h-5 mb-1" />
        </div>

        <div className="relative flex items-end justify-between">
          <div className="flex gap-2 mt-auto">
            <Skeleton className="w-20 h-20 rounded-full" />

            <div className="flex flex-col text-sm justify-center space-y-2">
              <Skeleton className="w-28 h-5" />
              <Skeleton className="w-16 h-4" />
            </div>
          </div>

          <Skeleton className="w-24 h-6" />
        </div>
      </div>
    </div>
  )
}
