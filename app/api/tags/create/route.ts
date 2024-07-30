import { NextRequest, NextResponse } from "next/server"
import dbConnect from "@/server/dbConnect"
import Tags from "@/server/model/tag.model"
import slugify from "slugify"

export async function POST(req: NextRequest) {
  try {
    // connect database
    await dbConnect()

    const { name } = await req.json()
    const slug = slugify(name, { lower: true })

    const newTag = await Tags.create({
      name,
      slug,
    })

    return NextResponse.json(newTag)
  } catch (error: unknown) {
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
