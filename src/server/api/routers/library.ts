import { createTRPCRouter, publicProcedure } from "../trpc";
import { Prisma } from "@prisma/client";
import { z } from 'zod';
import { prisma } from "../../db"


export const library = createTRPCRouter({
    all: publicProcedure.query(async ({ ctx }) => {
        return ctx.prisma.libraryInfo.findMany();
    })
})

export default library;