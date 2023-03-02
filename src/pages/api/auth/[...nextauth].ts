import NextAuth, { Theme, type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { createTransport } from "nodemailer";
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

            // sendVerificationRequest: async ({ identifier: email, url, token, provider }) => {
            //     const { host } = new URL(url);
            //     const transport = createTransport(provider.server);
            //     const result = await transport.sendMail({
            //         to: email,
            //         from: provider.from,
            //         subject: `Sign in to ${host}`,
            //         html: `html({url, host, theme})`,
            //         text: `text({url, host})`,
            //     });
            //     const failed = result.rejected.concat(result.pending).filter(Boolean);
            //     if (failed) {
            //         throw new Error(`Sending email failed. ${failed}`);
            //     }

            //     /**
            //      * Email HTML body
            //      * Insert invisible space into domains from being turned into a hyperlink by email
            //      * clients like Outlook and Apple mail, as this is confusing because it seems
            //      * like they are supposed to click on it to sign in.
            //      *
            //      * @note We don't add the email address to avoid needing to escape it, if you do, r
            //      * emember to sanitize it!
            //      */

            //     function html(params: { url: string; host: string; theme: Theme }) {
            //         const { url, host, theme } = params

            //         const escapedHost = host.replace(/\./g, "&#8203;.")

            //         const brandColor = theme.brandColor || "#346df1"
            //         const color = {
            //             background: "#f9f9f9",
            //             text: "#444",
            //             mainBackground: "#fff",
            //             buttonBackground: brandColor,
            //             buttonBorder: brandColor,
            //             buttonText: theme.buttonText || "#fff",
            //         }

            //         return `
            //         <body style="background: ${color.background};">
            //         <table width="100%" border="0" cellspacing="20" cellpadding="0"
            //             style="background: ${color.mainBackground}; max-width: 600px; margin: auto; border-radius: 10px;">
            //             <tr>
            //             <td align="center"
            //                 style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
            //                 Sign in to <strong>${escapedHost}</strong>
            //             </td>
            //             </tr>
            //             <tr>
            //             <td align="center" style="padding: 20px 0;">
            //                 <table border="0" cellspacing="0" cellpadding="0">
            //                 <tr>
            //                     <td align="center" style="border-radius: 5px;" bgcolor="${color.buttonBackground}"><a href="${url}"
            //                         target="_blank"
            //                         style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${color.buttonText}; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid ${color.buttonBorder}; display: inline-block; font-weight: bold;">Sign
            //                         in</a></td>
            //                 </tr>
            //                 </table>
            //             </td>
            //             </tr>
            //             <tr>
            //             <td align="center"
            //                 style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
            //                 If you did not request this email you can safely ignore it.
            //             </td>
            //             </tr>
            //         </table>
            //         </body>
            //         `
            //     }
            // }
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

function sendVerificationRequest(params: any) {
    throw new Error("Function not implemented.");
}

