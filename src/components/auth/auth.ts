import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { verify } from "argon2";
import { prisma } from "../../server/db";
import { loginSchema } from "./authSchema";

export const nextAuthOptions: NextAuthOptions = {
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
                    const result = await prisma.adminInfo.findFirst({
                        where: { email },
                    });
                    if (!result) return null;

                    const isValidPassword = await verify(result.password, password);
                    if (!isValidPassword) return null;

                    return { id: result.id, email, fullName: result.fullName }
                } catch {
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

        // async session({ session, token, user }) {
        //     if (token) {

        //         // session.accessToken = token.accessToken
        //         (session.user?.name as string) = token?.id
        //     }

        //     return session
        // }

    },
    jwt: {
        maxAge: 15 * 24 * 30 * 60, // 15 days
    },
    pages: {
        signIn: "/",
        newUser: "/sign-up",
    },
    secret: "super-secret",
};
