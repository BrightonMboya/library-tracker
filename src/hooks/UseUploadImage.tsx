import type { ChangeEvent } from "react";
import { useState } from "react";
import axios from "axios";

interface Props {
  name: string;
}

const BUCKET_URL = "https://librarytracker.s3.amazonaws.com";

export default async function UseUploadImage({ name }: Props) {
  const [file, setFile] = useState<any>();
  const [uploadingStatus, setUploadingStatus] = useState<String>();
  const [uploadedFile, setUploadedFile] = useState<String>();

  const formData = new FormData();

  setUploadingStatus("Uploading the file to AWS S3");

  const selectFile = (e: any) => {
    setFile(formData.get(name));
  };

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
  return url;
}
