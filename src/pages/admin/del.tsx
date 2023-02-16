import { useState } from "react";
import type { ChangeEvent } from "react";
import axios from "axios";

const BUCKET_URL = "https://librarytracker.s3.amazonaws.com";

export default function Home() {
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
    const key = data.key;
    console.log(key, "the url to the img");
    let { data: newData } = await axios.put(url, file, {
      headers: {
        "Content-type": file.type,
        "Access-Control-Allow-Origin": "*",
      },
    });

    setUploadedFile(BUCKET_URL + "/" + key);
    setFile(null);
    console.log(url, "the file url");
  };

  return (
    <div className="container mx-auto flex min-h-screen items-center justify-center p-4">
      <main>
        <p>Please select a file to upload</p>
        <input type="file" onChange={(e) => selectFile(e)} />
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

        {/* <img src="https://librarytracker.s3.amazonaws.com/gugo.png" alt="fu" /> */}
      </main>
    </div>
  );
}
