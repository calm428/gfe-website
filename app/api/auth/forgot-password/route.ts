import crypto from "crypto"
import { NextRequest, NextResponse } from "next/server"
import dbConnect from "@/server/dbConnect"
import sendmail from "@/server/lib/sendmail"
import ResetPasswordToken from "@/server/model/resetPasswordToken.model"
import User from "@/server/model/user.model"

export async function POST(req: NextRequest) {
  try {
    // connect database
    await dbConnect()

    // Destructure form data from the request body
    const { email } = await req.json()

    const user = await User.findOne({ email: email })

    if (!user) {
      return NextResponse.json({ message: "user_not_found" }, { status: 400 })
    }

    const token = crypto.randomBytes(20).toString("hex")

    await ResetPasswordToken.create({
      user: user._id,
      token,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    })

    await sendmail(
      user.email,
      "FORGOT_PASSWORD",
      {
        resetPasswordURL: `${process.env.WEBSITE_URL}/auth/reset-password/${token}`,
      },
      "NOTIFICATION"
    )

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
