import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from 'zod';
import { prisma } from "../../db"
import { hash } from "argon2";
import { TRPCError } from "@trpc/server";


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
    all: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.user.findMany();
    }),

    create: publicProcedure
        .input(signUpSchema)
        .mutation(async ({ input, ctx }) => {
            const { fullName, email, password } = input;

            // checking if the email exists
            const exists = await ctx.prisma.user.findFirst({
                where: { email }
            });

            if (exists) {
                throw new TRPCError({
                    code: "CONFLICT",
                    message: "User already Exists"
                })
            }

            // then hash the fuckin password
            const hashedPassword = await hash(password);

            const result = await ctx.prisma.user.create({
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