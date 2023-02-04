import React, { useRef, useState } from "react";
import type { SetStateAction } from "react";

//@ts-ignore
const DocUpload = ({ formData, setFormData }) => {
  // refs for the passport img
  const uploadedImage = useRef<HTMLImageElement>(null);
  const imageUploader = useRef<HTMLInputElement>(null);

  // refs for the identity card img
  const uploadedId = useRef<HTMLImageElement>(null);
  const idUploader = useRef<HTMLInputElement>(null);

  const [imageUploaded, setImageUploaded] = useState();
  const [passportUploaded, setPassportUploaded] = useState();

  return (
    <React.Fragment>
      <div>
        <h3>Upload Passport photograph</h3>
        <div className="flex h-[150px] w-[300px] cursor-pointer flex-col  items-center justify-center rounded-md border-2 border-dashed border-gray-500 md:h-[90px]">
          <input
            type="file"
            name="passport"
            accept="image/jpeg image/png image/jpg"
            className="absolute h-[100px] border-2 opacity-0"
            onChange={(e: any) => {
              setImageUploaded(e.target?.files[0]);
              setFormData({
                ...formData,
                passportUrl: passportUploaded,
              });
            }}
            ref={imageUploader}
          />
          <p className="">Upload Your Passport</p>
        </div>

        <div onClick={() => imageUploader.current?.click()}>
          <picture>
            <img
              ref={uploadedImage}
              className="mt-5 h-[150px] w-[250px] "
              alt=""
            />
          </picture>
        </div>
      </div>

      <div className="mt-[2rem]">
        <h3>Upload Identity Card</h3>
        <div className="flex h-[150px] w-[300px] cursor-pointer flex-col  items-center justify-center rounded-md border-2 border-dashed border-gray-500 md:h-[90px]">
          <input
            type="file"
            accept="images/*"
            className="absolute h-[100px] border-2 opacity-0"
            onChange={(e: any) => {
              setImageUploaded(e.target.files[0]);
              setFormData({
                ...formData,
                identityCardUrl: imageUploaded,
              });
            }}
            ref={idUploader}
          />
          <p className="">Upload Your Identity Card</p>
        </div>

        {imageUploaded && (
          <picture>
            <img
              ref={uploadedId}
              className="mt-5 h-[150px] w-[250px] "
              alt=""
            />
          </picture>
        )}
      </div>
    </React.Fragment>
  );
};

export default DocUpload;
