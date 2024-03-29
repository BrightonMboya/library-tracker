import { type DefaultSession } from "next-auth";
import { User } from "./interfaces";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: {
      id: string;
    } & DefaultSession["user"];
  }

  // interface Session {
  //   user: User;
  // }
}
