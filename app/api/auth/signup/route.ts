import { NextRequest, NextResponse } from "next/server"
import dbConnect from "@/server/dbConnect"
import sendmail from "@/server/lib/sendmail"
import User from "@/server/model/user.model"
import VerificationCode from "@/server/model/verificationCode.model"
import bcrypt from "bcryptjs"

export async function POST(req: NextRequest) {
  try {
    // connect database
    await dbConnect()

    // Destructure form data from the request body
    const { firstName, lastName, email, password } = await req.json()

    // Check if email already in use
    const existAccount = await User.findOne({ email })
    if (existAccount) {
      return NextResponse.json(
        { message: "Email already in use" },
        { status: 422 }
      )
    }

    const salt = await bcrypt.genSalt(12)

    // Hash the password
    const passwordHash = await bcrypt.hash(password, salt)

    // Create a new user account
    const newAccount = await User.create({
      name: `${firstName} ${lastName}`,
      email,
      password: passwordHash,
    })

    const code = Math.floor(100000 + Math.random() * 900000)

    await VerificationCode.create({
      user: newAccount._id,
      code,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    })

    await sendmail(
      email,
      "CONFIRM_EMAIL",
      { name: firstName, code: code.toString() },
      "NOTIFICATION"
    )

    return NextResponse.json({ message: "Success" }, { status: 200 })
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
