import { NextRequest, NextResponse } from "next/server"
import dbConnect from "@/server/dbConnect"
import { processHeadingsInHtml } from "@/server/lib/utils"
import Categories from "@/server/model/category.model"
import Tags from "@/server/model/tag.model"
import Topic from "@/server/model/topic.model"

export async function PUT(req: NextRequest) {
  try {
    const slug = req.url.split("/").pop()

    // connect database
    await dbConnect()

    const { title, category, tags, content } = await req.json()

    if (!title || !category || !tags || !content) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      )
    }

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

    const newTopic = await Topic.findOneAndUpdate(
      { slug },
      {
        title,
        content: modifiedHtml,
        category: categoryDoc._id,
        tags: tagDocs.map((tag) => tag._id),
      }
    )

    if (!newTopic) {
      return NextResponse.json({ message: "Topic not found" }, { status: 400 })
    }

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
