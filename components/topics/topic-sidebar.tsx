"use client"

import { IHeading } from "@/types"

import useActiveSection from "@/hooks/useActiveSection"

export default function TopicSidebar({ headings }: { headings: IHeading[] }) {
  const { activeSection, onHashLinkClick } = useActiveSection(
    headings.map((heading) => heading.id)
  )

  return (
    <ul className="sticky top-28 hidden w-[180px] min-w-[180px] border-l md:block">
      {(() => {
        const topLevel = Math.min(
          ...headings.map((heading) => parseInt(heading.tagName.slice(1)))
        )
        return headings.map((heading) => {
          const level = parseInt(heading.tagName.slice(1))
          const relativeLevel = level - topLevel
          const indent = 5 + relativeLevel * 10 // Adjust this value to change the indentation level

          return (
            <li
              key={heading.id}
              style={{ paddingLeft: `${indent}px` }}
              className="line-height-1 line-clamp-2 border-primary py-1 text-sm font-medium hover:text-primary/80 data-[active=true]:border-l data-[active=true]:bg-primary/10 data-[active=true]:text-primary/80"
              data-active={activeSection === heading.id}
              onClick={() => onHashLinkClick(heading.id)}
            >
              <a href={`#${heading.id}`}>{heading.text}</a>
            </li>
          )
        })
      })()}
    </ul>
  )
}
