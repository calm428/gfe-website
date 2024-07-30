import { NextRequest, NextResponse } from "next/server"
import dbConnect from "@/server/dbConnect"
import { authOptions } from "@/server/lib/authOptions"
import {
  generateSlugWithShortHash,
  processHeadingsInHtml,
} from "@/server/lib/utils"
import Categories from "@/server/model/category.model"
import Tags from "@/server/model/tag.model"
import Topic from "@/server/model/topic.model"
import User from "@/server/model/user.model"
import { getServerSession } from "next-auth"

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ message: "unauthorized" }, { status: 401 })
    }

    // connect database
    await dbConnect()

    const { title, category, tags, content } = await req.json()

    if (!title || !category || !tags || !content) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      )
    }

    const slug = generateSlugWithShortHash(title)

    const { modifiedHtml } = processHeadingsInHtml(content)

    const categoryDoc = await Categories.findOne({
      name: category,
    })

    if (!categoryDoc) {
      return NextResponse.json(
        { message: "Category not found" },
        { status: 400 }
      )
    }

    const tagDocs = []

    for (const tag of tags) {
      const tagDoc = await Tags.findOne({
        name: tag,
      })

      if (!tagDoc) {
        const newTag = await Tags.create({
          name: tag,
        })

        tagDocs.push(newTag)
      } else {
        tagDocs.push(tagDoc)
      }
    }

    const author = await User.findOne({ email: session?.user?.email })

    if (!author) {
      return NextResponse.json({ message: "Author not found" }, { status: 400 })
    }

    const newTopic = await Topic.create({
      title,
      slug,
      category: categoryDoc._id,
      tags: tagDocs.map((tag) => tag._id),
      content: modifiedHtml,
      author: author._id,
    })

    console.log(newTopic)

    return NextResponse.json(newTopic)
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
