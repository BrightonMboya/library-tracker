import type { NextApiRequest, NextApiResponse } from "next";
import S3 from "aws-sdk/clients/s3";
import { randomUUID } from "crypto";

const s3 = new S3({
    apiVersion: '2006-03-01',
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
    region: process.env.REGION,
    signatureVersion: 'v4'
})

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {

//     const post = s3.createPresignedPost({
//         Bucket: process.env.BUCKET_NAME,
//         Fields: {
//             key: req.query.file,
//             'Content-Type': req.query.fileType,
//         },
//         Expires: 60, //seconds btw
//         Conditions: [
//             ['content-length-range', 0, 5048576], // up to 5MB
//         ],
//     })

//     res.status(200).json(post)
// }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const extension = (req.query.fileType as string).split('/')[1]
    const Key = `${randomUUID()}.${extension}`

    const s3Params = {
        Bucket: process.env.BUCKET_NAME,
        Key,
        Expires: 60,
        ContentType: `image/${extension}`
    }

    const uploadUrl = s3.getSignedUrl('putObject', s3Params)

    res.status(200).json({
        uploadUrl,
        key: Key
    })
}
