import { NextRequest, NextResponse } from "next/server"
import dbConnect from "@/server/dbConnect"
import Categories from "@/server/model/category.model"

export async function GET(req: NextRequest) {
  try {
    // connect database
    await dbConnect()

    const categories = await Categories.find({})

    return NextResponse.json(categories)
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
