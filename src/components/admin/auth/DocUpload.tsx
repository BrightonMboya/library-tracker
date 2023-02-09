import React, { useRef, useState } from "react";
import Image from "next/legacy/image";
import axios from "axios";

const BUCKET_URL = "https://librarytracker.s3.amazonaws.com";

//@ts-ignore
const DocUpload = ({ formData, setFormData }) => {
  // refs for the passport img
  const imageUploader = useRef<HTMLInputElement>(null);

  // refs for the identity card img
  const uploadedId = useRef<HTMLImageElement>(null);
  const idUploader = useRef<HTMLInputElement>(null);

  const [imageUploaded, setImageUploaded] = useState();
  const [passportUploaded, setPassportUploaded] = useState();
  const [uploadedFile, setUploadedFile] = useState<any>();

  const [file, setFile] = useState<any>();

  // const selectFile = (e: any) => {
  //   setFile(e.target.files[0]);
  // };

  return (
    <React.Fragment>
      <div>
        <h3>Upload Passport photograph</h3>

        <UploadPassport />
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

const UploadPassport = () => {
  const [file, setFile] = useState<any>();
  const [uploadingStatus, setUploadingStatus] = useState<any>();
  const [uploadedFile, setUploadedFile] = useState<any>();

  const selectFile = (e: any) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = async () => {
    setUploadingStatus("Uploading the file to AWS S3");

    let { data } = await axios.post("/api/s3", {
      name: file.name,
      type: file.type,
    });
    console.log(file.type, "Fucking file type");
    console.log(data);

    const url = data.url;
    let { data: newData } = await axios.put(url, file, {
      headers: {
        "Content-type": file.type,
        "Access-Control-Allow-Origin": "*",
      },
    });

    setUploadedFile(BUCKET_URL + "/" + file.name);
    setFile(null);
    console.log(url, "the file url");
  };

  return (
    <>
      <div className="flex h-[150px] w-[300px] cursor-pointer flex-col  items-center justify-center rounded-md border-2 border-dashed border-gray-500 md:h-[90px]">
        <input
          type="file"
          onChange={(e) => {
            selectFile(e);
            uploadFile;
          }}
        />
      </div>
      {file && (
        <>
          <p>Selected file: {file.name}</p>
          <button
            onClick={uploadFile}
            className=" rounded-sm bg-purple-500 p-2 text-white shadow-md transition-all hover:bg-purple-700"
          >
            Upload a File!
          </button>
        </>
      )}

      {uploadedFile && <img src={uploadedFile} />}
    </>
  );
};
