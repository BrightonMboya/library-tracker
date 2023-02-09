import { NextApiRequest, NextApiResponse } from "next";
import S3 from "aws-sdk/clients/s3";
import { randomUUID } from "crypto";


const s3 = new S3({
    region: process.env.REGION,
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
    signatureVersion: "v4",
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }
    // const extension = (req.query.fileType as string).split('/')[1]

    const uniqueName = randomUUID();

    try {
        let { name, type } = req.body;
        const extension = (type as string).split('/')[1]



        const fileParams = {
            Bucket: process.env.BUCKET_NAME,
            Key: `${uniqueName}.${extension}`,
            Expires: 600,
            ContentType: type,
        };

        const url = await s3.getSignedUrlPromise("putObject", fileParams);

        res.status(200).json({ url, key: `${uniqueName}.${extension}` });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err });
    }
};

export const config = {
    api: {
        bodyParser: {
            sizeLimit: "8mb", // Set desired value here
        },
    },
};