import { createTRPCRouter, publicProcedure } from "../trpc";
import { Prisma } from "@prisma/client";
import { z } from 'zod';
import { prisma } from "../../db"
import { TRPCError } from "@trpc/server";

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
    approved: true
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
                identityCardUrl: z.string(),
            }),
        )
        .mutation(async ({ input }) => {
            const adminInfo = await prisma.adminInfo.create({
                data: input,
                select: adminInfoSelect
            })
            return adminInfo;
        }),
    all: publicProcedure.query(async ({ ctx }) => {
        return ctx.prisma.adminInfo.findMany({ select: adminInfoSelect, where: {} })
    }),
    byId: publicProcedure
        .input(
            z.object({
                id: z.string(),
            }),
        )
        .query(async ({ input }) => {
            const { id } = input;
            const admin = await prisma.adminInfo.findUnique({
                where: { id },
                select: adminInfoSelect,
            });
            if (!admin) {
                throw new TRPCError({
                    code: "NOT_FOUND",
                    message: "The Admin you are looking for is not found"
                });
            }
            return admin
        }),
    approve: publicProcedure
        .input(
            z.object({
                id: z.string(),
                approve: z.boolean(),
            })
        )
        .mutation(async ({ input }) => {
            const { id, approve } = input;
            const approveAdmin = await prisma.adminInfo.update({
                where: {
                    id: id,
                },
                data: {
                    approved: approve
                }
            })
            return approveAdmin
        })
})

export default adminRouter;