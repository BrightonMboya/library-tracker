import NextAuth, { type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import nodemailer from "nodemailer";
import EmailProvider from "next-auth/providers/email";

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google'
import * as z from "zod";
import { prisma } from "../../../server/db";


export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4).max(12),
})

export const signUpSchema = loginSchema.extend({
    fullName: z.string(),
});


export const nextAuthOptions: NextAuthOptions = {
    debug: true,
    secret: process.env.NEXTAUTH_SECRET,
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({

            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
        EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                //@ts-ignore
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD,
                },
            },
            from: process.env.EMAIL_FROM,
            maxAge: 10 * 60, // Magic links are valid for 10 min only
        }),
    ],
    pages: {
        signIn: "/signup",
    },
    // callbacks: {
    //     // session({ session, user }) {
    //     //     if (session.user) {
    //     //         session.user.id = user.id;
    //     //     }
    //     //     return session;
    //     // },
    //     async jwt({ token }) {
    //         token.userRole = "admin"
    //         return token
    //     },
    // },

};

export default NextAuth(nextAuthOptions);

