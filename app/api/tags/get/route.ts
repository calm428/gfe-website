import { NextRequest, NextResponse } from "next/server"
import dbConnect from "@/server/dbConnect"
import Tags from "@/server/model/tag.model"

export async function GET(req: NextRequest) {
  try {
    // connect database
    await dbConnect()

    const tags = await Tags.find({})

    return NextResponse.json(tags)
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
