// this one is for getting the image from the forms
import { IncomingForm } from "formidable"

//@ts-ignore
export async function getImage(formData) {
    const data = await new Promise(function (resolve, reject) {
        const form = new IncomingForm({ keepExtensions: true });
        form.parse(formData, function (err, fields, files) {
            if (err) return reject(err);
            resolve({ fields, files });
        });
    });

    //@ts-expect-error
    return data.files.image;
}