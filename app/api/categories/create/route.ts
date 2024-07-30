import { NextRequest, NextResponse } from "next/server"
import dbConnect from "@/server/dbConnect"
import Categories from "@/server/model/category.model"
import slugify from "slugify"

export async function POST(req: NextRequest) {
  try {
    // connect database
    await dbConnect()

    const { name } = await req.json()
    const slug = slugify(name, { lower: true })

    const newCategory = await Categories.create({
      name,
      slug,
    })

    return NextResponse.json(newCategory)
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
