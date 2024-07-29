"use client"

import React from "react"
import { Button } from "@nextui-org/react"
import { useCollapse } from "react-collapsed"
import { FaChevronDown } from "react-icons/fa6"

export default function CollapsibleReplyGroup({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  return (
    <div>
      <Button
        variant="light"
        color="primary"
        {...getToggleProps()}
        endContent={
          <FaChevronDown
            className={`size-3 transition-all duration-300 ${isExpanded ? "rotate-180" : ""}`}
          />
        }
      >
        {title}
      </Button>
      <div {...getCollapseProps()}>{children}</div>
    </div>
  )
}
