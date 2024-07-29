"use server"

import dbConnect from "@/server/dbConnect"
import Replies from "@/server/model/reply.model"
import Topic from "@/server/model/topic.model"

async function getReplies(slug: string) {
  try {
    await dbConnect()

    const topic = await Topic.findOne({ slug })

    if (!topic) {
      return null
    }

    // Fetch all replies for the topic, including child replies
    const repliesList = await Replies.find({ topic: topic._id })
      .populate({
        path: "author",
        select: "name image", // Customize as needed
      })
      .lean() // Using lean to improve performance since we are only reading data
      .exec()

    // Organize replies into a map by their parentReply ID
    const repliesMap: { [key: string]: any } = { null: [] } // Initialize with null to hold top-level replies
    repliesList.forEach((reply) => {
      // Initialize the array if this is the first child reply
      if (!repliesMap[reply.parentReply]) {
        repliesMap[reply.parentReply] = []
      }
      repliesMap[reply.parentReply].push(reply)
    })

    // Recursive function to build nested replies structure
    const buildNestedReplies = (parentReplyId: string) => {
      return (
        repliesMap[parentReplyId]?.map((reply: any) => ({
          ...reply,
          childReplies: buildNestedReplies(reply._id.toString()), // Recurse into children
        })) || []
      )
    }

    // Build and return the nested structure starting from top-level replies
    const nestedReplies = buildNestedReplies("null") // Pass null to start with top-level replies
    return nestedReplies
  } catch (error) {
    console.error("Error fetching nested replies:", error)
    return null
  }
}

export default getReplies
