import { createTRPCRouter, publicProcedure } from "../trpc";
import { Prisma } from "@prisma/client";
import { z } from 'zod';
import { prisma } from "../../db"

const adminInfoSelect = Prisma.validator<Prisma.AdminInfoSelect>()({
    id: true,
    fullName: true,
    email: true,
    phoneNumber: true,
    country: true,
    state: true,
    adress: true,
    passportUrl: true,
    identityCardUrl: true,
})
export const adminRouter = createTRPCRouter({
    add: publicProcedure
        .input(
            z.object({
                id: z.string().cuid().optional(),
                fullName: z.string(),
                email: z.string(),
                phoneNumber: z.string(),
                country: z.string(),
                state: z.string(),
                adress: z.string(),
                passportUrl: z.string(),
                identityCardUrl: z.string()
            }),
        )
        .mutation(async ({ input }) => {
            const adminInfo = await prisma.adminInfo.create({
                data: input,
                select: adminInfoSelect
            })
            return adminInfo;
        })
})

export default adminRouter;