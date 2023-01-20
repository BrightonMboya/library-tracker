import React, { ChangeEvent } from "react";
import BasicInfo from "../../components/admin/auth/BasicInfo";
import DocUpload from "../../components/admin/auth/DocUpload";
import { api } from "../../utils/api";
import axios from "axios";

// function to upload to s3

async function uploadToS3(e: ChangeEvent<HTMLFormElement>) {
  const formData = new FormData(e.target);

  const file = formData.get("passport");
  if (!file) {
    return null;
  }

  //@ts-ignore
  const fileType = encodeURIComponent(file.type);
  const { data } = await axios.get(`/api/media?fileType=${fileType}`);

  const { uploadUrl, key } = data;

  await axios.put(uploadUrl, key);

  return key;
}

const Signup = () => {
  const addAdmin = api.adminRouter.add.useMutation();

  const [page, setPage] = React.useState(0);
  // initial empty states for the form
  const formStates = {
    fullName: "",
    password: "",
    email: "",
    phoneNumber: "",
    country: "",
    state: "",
    adress: "",
    passportUrl: "",
    identityCardUrl: "",
  };
  const [formData, setFormData] = React.useState(formStates);

  async function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    const key = await uploadToS3(e);
  }

  const AuthForm = () => {
    switch (page) {
      case 0:
        return <BasicInfo formData={formData} setFormData={setFormData} />;
      case 1:
        return <DocUpload formData={formData} setFormData={setFormData} />;
      default:
        return <BasicInfo formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      {AuthForm()}
      {page === 0 && (
        <button
          type="button"
          onClick={() => setPage(page + 1)}
          className="mt-5 w-[250px] cursor-pointer rounded-md bg-blue px-2 py-2 font-medium text-white"
        >
          Next
        </button>
      )}

      {page === 1 && (
        <div className="flex flex-col items-center">
          <button
            type="button"
            onClick={() => setPage(page - 1)}
            className="mt-5 w-[250px] cursor-pointer rounded-md bg-blue px-2 py-2 font-medium text-white"
          >
            Back
          </button>
          <button
            type="submit"
            className="mt-5 w-[250px] cursor-pointer rounded-md bg-blue px-2 py-2 font-medium text-white"
          >
            Sign Up
          </button>
        </div>
      )}
    </form>
  );
};

export default Signup;
