import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from 'zod';
import { prisma } from "../../db"
// import { hash } from "argon2";
import { TRPCError } from "@trpc/server";

// import argon2 from 'argon2';

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4).max(12)
})

export const signUpSchema = loginSchema.extend({
    fullName: z.string()
})

export type ILogin = z.infer<typeof loginSchema>;
export type ISignUp = z.infer<typeof signUpSchema>;


export const userRouter = createTRPCRouter({
    signUp: publicProcedure
        .input(signUpSchema)
        .mutation(async ({ input }) => {
            const { fullName, email, password } = input;

            // checking if the email exists
            const exists = await prisma.user.findFirst({
                where: { email }
            });

            if (exists) {
                throw new TRPCError({
                    code: "CONFLICT",
                    message: "User already Exists"
                })
            }

            // then hash the fuckin password
            // const hashedPassword = await hash(password);
            // const hashedPassword = await argon2.hash(password)
            const hashedPassword = "";
            const result = await prisma.user.create({
                data: { fullName, email, password: hashedPassword }
            });

            return {
                status: 201,
                message: "Account Created Successfully",
                result: result.email,
            }

        })
})


export default userRouter;