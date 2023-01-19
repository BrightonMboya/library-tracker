import NextAuth, { type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { env } from "../../../env/server.mjs";
import { prisma } from "../../../server/db";
import Credentials from "next-auth/providers/credentials";
// import { verify } from "argon2";
// import argon2 from "argon2"
import { loginSchema } from "../../../server/api/routers/user";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },

    jwt: async ({ token, user }) => {
      if (user) {
        token.email = user.email;
        token.id = user.id
      }

      return token;
    },
  },

  // Configuring the JWT
  jwt: {
    secret: "super-secret",
    maxAge: 15 * 24 * 30 * 60, // 15 days btw
  },

  // creating custom pages for auth

  pages: {
    signIn: "/signup",
    newUser: "/libraries",  // new user will be redirected here after sign in
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),

    Credentials({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "segun@yahoo.com"
        },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials, request) => {
        // login logic
        const creds = await loginSchema.parseAsync(credentials);

        const user = await prisma.user.findFirst({
          where: { email: creds.email }
        });

        if (!user) {
          return null;
        }

        // check of the password is valid
        // const isValidPassword = await argon2.verify(user.password, creds.password);\
        const isValidPassword = true;

        if (!isValidPassword) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          fullName: user.fullName
        }
      }
    })

  ],
};

export default NextAuth(authOptions);
