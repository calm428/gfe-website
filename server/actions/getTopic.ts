"use server"

import { isDate } from "util/types"
import dbConnect from "@/server/dbConnect"
import Topic from "@/server/model/topic.model"
import mongoose, { isObjectIdOrHexString, isValidObjectId } from "mongoose"

import voteModel from "../model/vote.model"

const serializeDocument: any = (doc: any) => {
  if (Array.isArray(doc)) {
    return doc.map((v) => serializeDocument("_doc" in v ? v._doc : v))
  } else if (doc !== null && typeof doc === "object") {
    if ("_doc" in doc) doc = doc._doc

    const output: { [key: string]: any } = {}
    for (const [key, value] of Object.entries(doc)) {
      if (isObjectIdOrHexString(value)) {
        // More accurate check for ObjectId instances
        output[key] = value?.toString() // Convert ObjectId to string
      } else if (isDate(value)) {
        output[key] = value
      } else {
        output[key] = serializeDocument(value) // Recurse for nested objects/arrays
      }
    }
    return output
  }
  return doc
}

async function getTopic(identifier: string) {
  try {
    await dbConnect()

    const query: Record<string, string> = {}

    // Check if the identifier looks like a MongoDB ObjectId
    if (mongoose.isValidObjectId(identifier)) {
      query._id = identifier
    } else {
      query.slug = identifier
    }

    const topic = await Topic.findOne(query)
      .populate({
        path: "category",
        select: "name slug", // Adjust to include '_id' if necessary. By default, Mongoose includes '_id'.
      })
      .populate({
        path: "tags",
        select: "name slug", // Adjust to include '_id' if necessary
      })
      .populate({
        path: "author",
        select: "name image", // Include additional fields as necessary
      })
      .exec()

    // * get number of likes
    const likes = await voteModel
      .find({ topic: topic._id, type: "like" })
      .countDocuments()

    const topicObject = serializeDocument(topic._doc)

    topicObject.likes = likes

    return topicObject
  } catch (error) {
    console.error(error)
    return null
  }
}

export default getTopic
