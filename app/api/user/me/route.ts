import { NextRequest, NextResponse } from "next/server"
import dbConnect from "@/server/dbConnect"
import { authOptions } from "@/server/lib/authOptions"
import User from "@/server/model/user.model"
import bcrypt from "bcryptjs"
import { getServerSession } from "next-auth"

export async function GET(req: NextRequest) {
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

    return NextResponse.json(
      {
        id: user._id,
        name: user.name,
        email: user.email,
        image: user.image,
      },
      { status: 200 }
    )
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

export async function PUT(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ message: "unauthorized" }, { status: 401 })
    }

    const { firstName, lastName, avatar, password, newPassword } =
      await req.json()

    // connect database
    await dbConnect()

    const user = await User.findOne({ email: session?.user?.email })

    if (!user) {
      return NextResponse.json({ message: "user_not_found" }, { status: 400 })
    }

    if (firstName && lastName) {
      user.name = `${firstName} ${lastName}`
    }

    if (avatar) {
      user.image = avatar
    }

    if (password && newPassword) {
      if (bcrypt.compareSync(password, user.password) === false) {
        return NextResponse.json(
          {
            message: "incorrect_password",
          },
          { status: 400 }
        )
      }

      const salt = await bcrypt.genSalt(12)

      // Hash the password
      const passwordHash = await bcrypt.hash(password, salt)

      user.password = passwordHash
    }

    await user.save()

    return NextResponse.json(
      {
        message: "success",
      },
      { status: 200 }
    )
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
