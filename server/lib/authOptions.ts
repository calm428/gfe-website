import dbConnect from "@/server/dbConnect"
import User from "@/server/model/user.model"
import bcrypt from "bcryptjs"
import { type NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

const useSecureCookies = process.env.NEXTAUTH_URL?.startsWith("https://")
const cookiePrefix = useSecureCookies ? "__Secure-" : ""

export const authOptions: NextAuthOptions = {
  debug: true,
  cookies: {
    sessionToken: {
      name: `${cookiePrefix}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: useSecureCookies,
        domain:
          process.env.NODE_ENV === "production" && process.env.HOST_NAME
            ? process.env.HOST_NAME
            : "", // add a . in front so that subdomains are included
      },
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    newUser: "/register",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      async profile(profile) {
        await dbConnect()

        const email = profile.email
        const name = profile.name

        const userImage = profile.picture

        const exist_account = await User.findOne({ email })
        if (!exist_account) await User.create({ email, name })

        return {
          id: profile.sub,
          name,
          email,
          image: userImage,
        }
      },
    }),
    CredentialsProvider({
      id: "email",
      name: "email",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        await dbConnect()

        const account = await User.findOne({
          email: credentials.email,
        })

        if (!account) throw Error("Email or Password doesn't match!")

        if (!account.password) {
          throw Error("Please sign in with Google")
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          account.password
        )

        if (!isValid) throw Error("Email or Password doesn't match!")

        return {
          id: account._id,
          name: account.name,
          email: account.email,
        }
      },
    }),
  ],

  // JWT
  callbacks: {
    async session({ token, session }: { token: any; session: any }) {
      const user = session.user

      if (token && user) {
        user.id = token.id
        user.name = token.name
        user.email = token.email
        user.image = token.picture
      }

      return session
    },
    async jwt({ token, user }: { token: any; user: any }) {
      await dbConnect()

      const account = await User.findOne({
        email: token?.email,
      })

      if (!account) {
        token.id = user.id
        return token
      }

      return {
        id: account.id,
        name: account.name,
        email: account.email,
        image: account.image,
        verified: account.verified,
      }
    },
  },
}
