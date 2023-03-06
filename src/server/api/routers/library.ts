import { createTRPCRouter, publicProcedure } from "../trpc";
import { Prisma } from "@prisma/client";
import { z } from 'zod';
import { prisma } from "../../db";
import { libraryInfoSelect } from "./libRegistration";
import { TRPCError } from "@trpc/server";


export const library = createTRPCRouter({
    all: publicProcedure.query(async ({ ctx }) => {
        return ctx.prisma.libraryInfo.findMany();
    }),
    titles: publicProcedure.query(async ({ ctx }) => {
        const data: { id: string, name: string }[] = [];
        const libraries = await ctx.prisma.libraryInfo.findMany();
        libraries.forEach((library) => {
            data.push({ id: library.id, name: library.name });
        });
        return data;
    }),

    list: publicProcedure
        .input(
            z.object({
                limit: z.number().min(1).max(5).nullish(),
                cursor: z.string().nullish(),
            }),
        )
        .query(
            async ({ input, ctx }) => {
                const limit = input.limit ?? 50;
                const { cursor } = input;

                const libraries = await ctx.prisma.libraryInfo.findMany({
                    take: limit + 1,
                    where: {},
                    cursor: cursor ? { id: cursor, } : undefined
                });
                let nextCursor: typeof cursor | undefined = undefined;
                if (libraries.length > limit) {
                    // remove the last item and use it as the next cursor
                    const nextItem = libraries.pop()!;
                    nextCursor = nextItem.id;
                }
                return {
                    libraries: libraries,
                    nextCursor
                }
            }
        ),
    byId: publicProcedure
        .input(
            z.object({
                id: z.string(),
            }),
        )
        .query(async ({ input }) => {
            const { id } = input;
            const library = await prisma.libraryInfo.findUnique({
                where: { id },
                select: libraryInfoSelect,
            });
            if (!library) {
                throw new TRPCError({
                    code: "NOT_FOUND",
                    message: "No such library with this id",
                });
            }
            return library
        })

})

export default library;