
// cloudinary config for uploading the image
import cloudinary from "cloudinary";

cloudinary.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

// @ts-expect-error
export function uploadImage(imageUploaded) {
    return new Promise((resolve, reject) => {
        cloudinary.v2.uploader.upload(
            imageUploaded,
            { width: 400, height: 300, crop: "fill" },
            (err, res) => {
                if (err) reject(err);
                resolve(res);
            }
        )
    })
}