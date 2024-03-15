"use client"

import { Skeleton } from "@/components/ui/skeleton"

export default function BlogCardSkeleton({
  className,
}: {
  className?: string
}) {
  return (
    <div
      className={`relative mx-auto flex h-full w-full max-w-[320px] flex-col overflow-hidden rounded-3xl border sm:max-w-[400px] ${className}`}
    >
      <Skeleton className="h-48 w-full rounded-none" />

      <div className="relative flex flex-col space-y-3 p-5">
        <div>
          <Skeleton className="mb-2 h-6 w-2/3" />
          <Skeleton className="mb-1 h-5 w-full" />
          <Skeleton className="mb-1 h-5 w-full" />
          <Skeleton className="mb-1 h-5 w-full" />
        </div>

        <div className="relative flex items-end justify-between">
          <div className="mt-auto flex gap-2">
            <Skeleton className="h-20 w-20 rounded-full" />

            <div className="flex flex-col justify-center space-y-2 text-sm">
              <Skeleton className="h-5 w-28" />
              <Skeleton className="h-4 w-16" />
            </div>
          </div>

          <Skeleton className="h-6 w-24" />
        </div>
      </div>
    </div>
  )
}
