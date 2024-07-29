"use client"

import { useState } from "react"
import markAsLike from "@/server/actions/markAsLike"
import { Button } from "@nextui-org/react"
import { FaHeart } from "react-icons/fa6"

export default function TopicLikeButton({
  authenticated,
  likes,
  slug,
  replyId,
}: {
  authenticated: boolean
  likes: number
  slug: string
  replyId?: string
}) {
  const [likesCount, setLikesCount] = useState(likes)

  const handleLike = async () => {
    const res = await markAsLike(slug, replyId)

    if (res.success) {
      setLikesCount(res.likes ?? likesCount)
    }
  }

  return (
    <Button
      variant="light"
      color="primary"
      endContent={<FaHeart className="size-5" />}
      onClick={() => authenticated && handleLike()}
    >
      {likesCount}
    </Button>
  )
}
