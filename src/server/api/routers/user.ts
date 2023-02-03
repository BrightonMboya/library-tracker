import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from 'zod';
import { hash } from "argon2";
import { TRPCError } from "@trpc/server";
import { signUpSchema } from "../../../components/auth/authSchema";



export const userRouter = createTRPCRouter({
    signup: publicProcedure
        .input(signUpSchema)
        .mutation(async ({ input, ctx }) => {
            const { fullName, email, password } = input;

            const exists = await ctx.prisma.user.findFirst({
                where: { email },
            });

            if (exists) {
                throw new TRPCError({
                    code: "CONFLICT",
                    message: "User already exists",
                });
            }

            const hashedPassword = await hash(password);

            const result = await ctx.prisma.user.create({
                data: { fullName, email, password: hashedPassword },
            });

            return {
                status: 201,
                message: "Account created succesfully",
                result: result.email
            }
        })
});

export default userRouter;