import { createTRPCRouter, publicProcedure } from "../trpc";
import { Prisma } from "@prisma/client";
import { string, z } from 'zod';
import { prisma } from "../../db"

const libraryInfoSelect = Prisma.validator<Prisma.LibraryInfoSelect>()({
    id: true,
    name: true,
})

export const libraryRegistrationRouter = createTRPCRouter({
    add: publicProcedure
        .input(
            z.object({
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


            }),
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
        })
})