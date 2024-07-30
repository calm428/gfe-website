import { NextRequest, NextResponse } from "next/server"
import dbConnect from "@/server/dbConnect"
import categoryModel from "@/server/model/category.model"
import tagModel from "@/server/model/tag.model"
import topicModel from "@/server/model/topic.model"

export async function GET(req: NextRequest) {
  try {
    // connect database
    await dbConnect()

    const { searchParams } = new URL(req.url)
    const keyword = searchParams.get("keyword") || ""
    const category = searchParams.get("category")
    const tag = searchParams.get("tag")
    const skip = Number(searchParams.get("skip") || "0")
    const limit = Number(searchParams.get("limit") || "10")
    const sort = searchParams.get("sort") || "createdAt"
    const order = searchParams.get("order") || "desc"

    const query: { [key: string]: any } = {}
    if (keyword) {
      query.$or = [
        { title: { $regex: keyword, $options: "i" } },
        { content: { $regex: keyword, $options: "i" } },
      ]
    }
    if (category && category !== "all") {
      const _category = await categoryModel.findOne({
        slug: category,
      })

      if (!_category) {
        return NextResponse.json(
          { message: "Category not found" },
          { status: 400 }
        )
      }

      query.category = _category._id
    }
    if (tag && tag !== "all") {
      const _tag = await tagModel.findOne({
        slug: tag,
      })

      if (!_tag) {
        return NextResponse.json({ message: "Tag not found" }, { status: 400 })
      }

      query.tags = { $in: [_tag._id] }
    }

    const topics = await topicModel
      .find(query)
      .skip(skip)
      .limit(limit)
      .populate({ path: "category", select: "name" })
      .populate({ path: "tags", select: "name" })
      .populate({ path: "author", select: "name image" })
      .sort({ [sort]: order === "asc" ? 1 : -1 })
      .exec()

    // for (let i = 0; i < topics.length; i++) {
    //   const replies = await replyModel
    //     .find({ topic: topics[i]._id, parentReply: null })
    //     .countDocuments()

    //   topics[i].replies = replies
    //   await topics[i].save()

    //   // topics[i] = topics[i].toObject()
    //   // topics[i].replies = replies
    // }

    // calculate meta data
    const total = await topicModel.countDocuments(query)
    const next =
      skip + limit < total
        ? `/api/topics/get?${keyword ? `keyword=${keyword}&` : ""}category=${category}&tag=${tag}&skip=${skip + limit}&limit=${limit}&sort=${sort}&order=${order}`
        : null

    return NextResponse.json({
      topics,
      next,
    })
  } catch (error: unknown) {
    console.log(error)
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 })
    } else {
      return NextResponse.json(
        { message: "An unknown error occurred" },
        { status: 500 }
      )
    }
  }
}
