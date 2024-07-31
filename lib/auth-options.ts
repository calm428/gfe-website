import dbConnect from "@/server/dbConnect";
import Admin from "@/server/model/admin.model";
import bcrypt from "bcryptjs";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  debug: true,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    newUser: "/register",
  },
  providers: [
    CredentialsProvider({
      id: "email",
      name: "email",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "bruce@wayne.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        await dbConnect();

        const account = await Admin.findOne({
          email: credentials.email,
        });

        if (!account) throw Error("User Not Found!");

        if (!account.password) {
          throw Error("Please sign in with Google");
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          account.password,
        );

        if (!isValid) throw Error("Password doesn't match!");

        return {
          id: account._id,
          name: account.name,
          email: account.email,
          image: account?.avatar,
          role: account.role,
        };
      },
    }),
  ],

  // JWT
  callbacks: {
    async session({ token, session }: { token: any; session: any }) {
      const user = session.user;

      if (token && user) {
        user.id = token.id;
        user.name = token.name;
        user.email = token.email;
        user.image = token?.image;
        user.role = token.role;
      }

      return session;
    },
    async jwt({ token, user }: { token: any; user: any }) {
      await dbConnect();

      const account = await Admin.findOne({
        email: token?.email,
      });

      if (!account) {
        token.id = user.id;
        return token;
      }

      return {
        id: account.id,
        name: account.name,
        email: account.email,
        image: account?.avatar,
        role: account.role,
      };
    },
  },
};
