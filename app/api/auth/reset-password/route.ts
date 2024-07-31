import { NextRequest, NextResponse } from "next/server"
import dbConnect from "@/server/dbConnect"
import ResetPasswordToken from "@/server/model/resetPasswordToken.model"
import User from "@/server/model/user.model"
import bcrypt from "bcryptjs"

export async function POST(req: NextRequest) {
  try {
    // connect database
    await dbConnect()

    // Destructure form data from the request body
    const { token, password } = await req.json()

    const resetPasswordToken = await ResetPasswordToken.findOne({
      token,
    })

    if (!resetPasswordToken) {
      return NextResponse.json({ message: "invalid_token" }, { status: 400 })
    } else if (resetPasswordToken.expires < new Date()) {
      return NextResponse.json({ message: "token_expired" }, { status: 400 })
    }

    const user = await User.findById(resetPasswordToken.user)

    if (!user) {
      return NextResponse.json({ message: "user_not_found" }, { status: 400 })
    }

    const salt = await bcrypt.genSalt(12)

    // Hash the password
    const passwordHash = await bcrypt.hash(password, salt)

    // Update the user's password
    user.password = passwordHash
    await user.save()

    // Delete the reset password token
    await ResetPasswordToken.findByIdAndDelete(resetPasswordToken._id)

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
