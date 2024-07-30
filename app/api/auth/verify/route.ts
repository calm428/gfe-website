import { NextRequest, NextResponse } from "next/server"
import dbConnect from "@/server/dbConnect"
import { authOptions } from "@/server/lib/authOptions"
import User from "@/server/model/user.model"
import VerificationCode from "@/server/model/verificationCode.model"
import { getServerSession } from "next-auth"

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ message: "unauthorized" }, { status: 401 })
    }

    // connect database
    await dbConnect()

    // Destructure form data from the request body
    const { code } = await req.json()

    const user = await User.findOne({ email: session?.user?.email })

    if (!user) {
      return NextResponse.json({ message: "user_not_found" }, { status: 400 })
    }

    const verificationCode = await VerificationCode.findOne({
      user: user._id,
      code,
    })

    if (!verificationCode) {
      return NextResponse.json(
        { message: "verification_code_invalid" },
        { status: 400 }
      )
    }

    if (verificationCode.expires < new Date()) {
      return NextResponse.json(
        { message: "verification_code_expired" },
        { status: 400 }
      )
    }

    user.verified = true
    await user.save()

    await VerificationCode.findByIdAndDelete(verificationCode._id)

    return NextResponse.json({ message: "success" }, { status: 200 })
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
