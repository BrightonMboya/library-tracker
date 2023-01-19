import { createTRPCRouter, publicProcedure } from "../trpc";
import { Prisma } from "@prisma/client";
import { z } from 'zod';
import { prisma } from "../../db"


export const adminRouter = createTRPCRouter({
    add: publicProcedure
        .input(
            z.object({
                id: z.string().cuid().optional(),
                fullName: z.string(),
                password: z.string(),
                email: z.string(),
                phoneNumber: z.string(),
                country: z.string(),
                state: z.string(),
                adress: z.string(),
                passportUrl: z.any(),
                identityCardUrl: z.any()
            }),
        )
        .mutation(async ({ input }) => {
            // // these is for the images uploaded
            // const passportUploaded = await getImage(input.passportUrl)
            // const identityCardUploaded = await getImage(input.identityCardUrl)

            // // these is to get the data of the files uploaded above
            // const passportData = await uploadImage(passportUploaded.path);
            // const identityCardData = await uploadImage(identityCardUploaded.path);
            // //@ts-ignore
            // console.log(passportData.public_id)

            const adminInfo = await prisma.adminInfo.create({
                //@ts-ignore

                // images arent stored in the db, but rather the image url to the cloudinary store
                data: { ...input, passportUrl: passportData.public_id, identityCardUrl: identityCardData.public_id }
            })
            return adminInfo;
        })
})

export default adminRouter;