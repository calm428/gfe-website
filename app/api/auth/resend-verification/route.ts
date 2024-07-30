import { NextRequest, NextResponse } from "next/server"
import dbConnect from "@/server/dbConnect"
import { authOptions } from "@/server/lib/authOptions"
import sendmail from "@/server/lib/sendmail"
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

    const user = await User.findOne({ email: session?.user?.email })

    if (!user) {
      return NextResponse.json({ message: "user_not_found" }, { status: 400 })
    }

    const verificationCode = await VerificationCode.findOne({
      user: user._id,
    })

    const code = Math.floor(100000 + Math.random() * 900000)

    if (!verificationCode) {
      await VerificationCode.create({
        user: user._id,
        code,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      })

      await sendmail(
        user.email,
        "CONFIRM_EMAIL",
        { name: user.name.split(" ")[0], code: code.toString() },
        "NOTIFICATION"
      )
    } else {
      if (verificationCode.resendAttempts >= 3) {
        return NextResponse.json(
          { message: "too_many_attempts" },
          { status: 400 }
        )
      }

      verificationCode.code = code
      verificationCode.expires = new Date(Date.now() + 1000 * 60 * 60 * 24)
      verificationCode.resendAttempts += 1
      await verificationCode.save()

      await sendmail(
        user.email,
        "CONFIRM_EMAIL",
        { name: user.name.split(" ")[0], code: code.toString() },
        "NOTIFICATION"
      )
    }

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
