import "next-auth";
import { Session as DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user?: {
      id: string | null;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role: string | null;
    };
  }
}
