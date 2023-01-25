import { createTRPCRouter, publicProcedure } from "../trpc";
import { Prisma } from "@prisma/client";
import { z } from 'zod';
import { prisma } from "../../db"
import { TRPCError } from "@trpc/server";

const libraryInfoSelect = Prisma.validator<Prisma.LibraryInfoSelect>()({
    id: true,
    name: true,
    libraryType: true,
    yearOfEstablishment: true,
    email: true,
    phoneNumber: true,
    website: true,
    latitude: true,
    longitude: true,
    country: true,
    State: true,
    adress: true,
    extract: true,
    openingTime: true,
    closingTime: true,
    numberOfProffesionalStaff: true,
    numberOfUnproffessionalStaff: true,
    numberOfUsers: true,
    numberOfComputerSets: true,
    numberOfELibrariesPlartform: true,
    readingSpaceCapacity: true,
    numberOfReadingTablets: true,
    numberOfBooks: true,
    numberOfJournals: true,
    internetFacilities: true,
    printAndCopyAccess: true,
    disablePersonUseLibrary: true,
    SRHRInfoServices: true,
    registrationCostPerMonth: true,
    registrationCostPerYear: true,
    eventsTitle: true,
    eventExtract: true,
    monthOfTheEvent: true,
})

export const libTypes = {
    id: z.string().cuid().optional(),
    name: z.string(),
    libraryType: z.string(),
    yearOfEstablishment: z.string(),
    email: z.string(),
    phoneNumber: z.string(),
    website: z.string(),
    latitude: z.string(),
    longitude: z.string(),
    country: z.string(),
    State: z.string(),
    adress: z.string(),
    extract: z.string(),
    openingTime: z.string(),
    closingTime: z.string(),
    numberOfProffesionalStaff: z.string(),
    numberOfUnproffessionalStaff: z.string(),
    numberOfUsers: z.string(),
    numberOfComputerSets: z.string(),
    numberOfELibrariesPlartform: z.string(),
    readingSpaceCapacity: z.string(),
    numberOfReadingTablets: z.string(),
    numberOfBooks: z.string(),
    numberOfJournals: z.string(),
    internetFacilities: z.string(),
    printAndCopyAccess: z.string(),
    disablePersonUseLibrary: z.string(),
    SRHRInfoServices: z.string(),
    registrationCostPerMonth: z.string(),
    registrationCostPerYear: z.string(),
    eventsTitle: z.string(),
    eventExtract: z.string(),
    monthOfTheEvent: z.string(),


};

export const libraryRegistrationRouter = createTRPCRouter({
    add: publicProcedure
        .input(
            z.object(libTypes)
        )
        .mutation(async ({ input }) => {
            const library = await prisma.libraryInfo.create({
                data: input,
                select: libraryInfoSelect,
            })
            // const library = await prisma.libraryInfo.create({
            //     data: input,
            //     // select: defaultLibrarySelect,
            // });
            return library
        }),

    all: publicProcedure.query(async ({ ctx }) => {
        return ctx.prisma.libraryInfo.findMany();
    }),

    librariesSlug: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.libraryInfo.findMany({ select: { name: true } });
    }),

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

export default libraryRegistrationRouter;