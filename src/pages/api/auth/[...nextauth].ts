import NextAuth, { type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { env } from "../../../env/server.mjs";
import { prisma } from "../../../server/db";
import Credentials from "next-auth/providers/credentials";
// import { loginSchema } from "../../../components/auth/authSchema.js";
import * as z from "zod";
import { verify } from "argon2";
// import { redirect } from "next/dist/server/api-utils/index.js";
// import { nextAuthOptions } from "../../../components/auth/auth.js";

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4).max(12),
})

export const signUpSchema = loginSchema.extend({
    fullName: z.string(),
});


export const nextAuthOptions: NextAuthOptions = {
    debug: true,
    secret: process.env.JWT_SECRET,
    providers: [
        Credentials({
            name: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "ayodele@gmail.com"
                },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                try {
                    const { email, password } = await loginSchema.parseAsync(credentials);
                    const result = await prisma.user.findFirst({
                        where: { email },
                    });
                    if (!result) {
                        console.log("no Result")
                        return null
                    };

                    const isValidPassword = await verify(result.password, password);
                    if (!isValidPassword) {
                        console.log("Password not valid")
                        return null
                    };

                    console.log("login is success")

                    return { id: result.id, email, fullName: result.fullName }
                } catch {
                    console.log("I am returning null")
                    return null;
                }
            },
        }),
    ],

    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.userId = user.id;
                token.email = user.email;
                token.username = user.name;
            }

            return token;
        },
        session: async ({ token, session, user }) => {
            console.log("HItted the session call back")
            if (session.user) {
                session.user.name = token.name;
                session.user.id = user.id;
                session.user.email = user.email;
                console.log("There is session")

            }
            console.log("No session")
            return session;
        },

        // async signIn({ user, account, profile, email, credentials }) {
        //     return true
        // },
        // async redirect({ url, baseUrl }) {
        //     return baseUrl
        // }
    },
    jwt: {
        maxAge: 15 * 24 * 30 * 60, // 15 days
    },
    pages: {
        signIn: "/login",
        newUser: "/signup",
        // error: "/"
    },

};

export default NextAuth(nextAuthOptions);

// export const authOptions: NextAuthOptions = {
//   // Include user.id on session
//   callbacks: {
//     session({ session, user }) {
//       if (session.user) {
//         session.user.id = user.id;
//       }
//       return session;
//     },

//     jwt: async ({ token, user }) => {
//       if (user) {
//         token.email = user.email;
//         token.id = user.id
//       }

//       return token;
//     },
//   },

//   // Configuring the JWT
//   jwt: {
//     secret: "super-secret",
//     maxAge: 15 * 24 * 30 * 60, // 15 days btw
//   },

//   // creating custom pages for auth

//   pages: {
//     signIn: "/signup",
//     newUser: "/libraries",  // new user will be redirected here after sign in
//   },
//   // Configure one or more authentication providers
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     DiscordProvider({
//       clientId: env.DISCORD_CLIENT_ID,
//       clientSecret: env.DISCORD_CLIENT_SECRET,
//     }),

//     Credentials({
//       name: "credentials",
//       credentials: {
//         email: {
//           label: "Email",
//           type: "email",
//           placeholder: "segun@yahoo.com"
//         },
//         password: { label: "Password", type: "password" }
//       },
//       authorize: async (credentials, request) => {
//         // login logic
//         const creds = await loginSchema.parseAsync(credentials);

//         const user = await prisma.user.findFirst({
//           where: { email: creds.email }
//         });

//         if (!user) {
//           return null;
//         }

//         // check of the password is valid
//         // const isValidPassword = await argon2.verify(user.password, creds.password);\
//         const isValidPassword = true;

//         if (!isValidPassword) {
//           return null;
//         }

//         return {
//           id: user.id,
//           email: user.email,
//           fullName: user.fullName
//         }

//       }
//     })

//   ],
// };

