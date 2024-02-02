import React from "react"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function PaginationComponent({
  currentPage,
  maxPage,
  gotoPage,
}: {
  currentPage: number
  maxPage: number
  gotoPage: (page: number) => void
}) {
  const pagination = paginate({ current: currentPage, max: maxPage })

  if (!pagination) return null

  const { current, prev, next, items } = pagination

  return (
    <Pagination className="my-4">
      <PaginationContent>
        {prev && (
          <PaginationItem
            onClick={() => gotoPage(prev)}
            className="cursor-pointer"
          >
            <PaginationPrevious />
          </PaginationItem>
        )}

        {items.map((item) =>
          typeof item === "number" ? (
            <PaginationItem
              key={item}
              onClick={() => gotoPage(item)}
              className="cursor-pointer"
            >
              <PaginationLink isActive={current === item}>
                {item}
              </PaginationLink>
            </PaginationItem>
          ) : (
            <PaginationItem key={Math.random()} className="cursor-pointer">
              <PaginationEllipsis />
            </PaginationItem>
          )
        )}

        {next && (
          <PaginationItem
            onClick={() => gotoPage(next)}
            className="cursor-pointer"
          >
            <PaginationNext />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  )
}

function paginate({ current, max }: { current: number; max: number }) {
  if (!current || !max) return null

  let prev = current === 1 ? null : current - 1,
    next = current === max ? null : current + 1,
    items: (string | number)[] = [1]

  if (current === 1 && max === 1) return { current, prev, next, items }
  if (current > 4) items.push("...")

  let r = 2,
    r1 = current - r,
    r2 = current + r

  for (let i = r1 > 2 ? r1 : 2; i <= Math.min(max, r2); i++) items.push(i)

  if (r2 + 1 < max) items.push("...")
  if (r2 < max) items.push(max)

  return { current, prev, next, items }
}
