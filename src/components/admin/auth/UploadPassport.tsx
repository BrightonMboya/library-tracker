import { useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import axios from "axios";

const BUCKET_URL = "https://librarytracker.s3.amazonaws.com";

//@ts-ignore
export default function Home({ formData, setFormData }) {
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

    const url = data.url;
    const key = data.key;
    let { data: newData } = await axios.put(url, file, {
      headers: {
        "Content-type": file.type,
        "Access-Control-Allow-Origin": "*",
      },
    });

    setUploadedFile(BUCKET_URL + "/" + key);
    setFormData({
      ...formData,
      passportUrl: `${BUCKET_URL}/${key}`,
    });

    setFile(null);
    console.log(url, "the file url");

    console.log(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <main>
        <div className="flex h-[150px] w-[300px] cursor-pointer flex-col  items-center justify-center rounded-md border-2 border-dashed border-gray-500 md:h-[90px]">
          <input
            type="file"
            accept="images/*"
            onChange={(e) => {
              selectFile(e);
            }}
            className="absolute h-[100px] border-2 opacity-0"
          />
          <p className="">Upload Your Passport</p>
        </div>
        {file && (
          <>
            <p>Selected file: {file.name}</p>
            <button
              type="button"
              onClick={async () => {
                setUploadingStatus("Uploading the file to AWS S3");

                let { data } = await axios.post("/api/s3", {
                  name: file.name,
                  type: file.type,
                });
                console.log(file.type, "Fucking file type");
                console.log(data);

                const url = data.url;
                const key = data.key;
                let { data: newData } = await axios.put(url, file, {
                  headers: {
                    "Content-type": file.type,
                    "Access-Control-Allow-Origin": "*",
                  },
                });

                // setUploadedFile(BUCKET_URL + "/" + key);
                setFormData({
                  ...formData,
                  passportUrl: `${BUCKET_URL}/${key}`,
                });

                console.log(formData);
              }}
              className="rounded-sm bg-purple-500 p-2 text-white shadow-md transition-all hover:bg-purple-700"
            >
              Upload File!
            </button>
          </>
        )}

        <img
          src={
            `${formData.passportUrl}`
              ? `${formData.passportUrl}`
              : "/placeholder.png"
          }
          className="mt-5 w-[200px]"
        />
      </main>
    </div>
  );
}
