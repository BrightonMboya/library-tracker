import React, { ChangeEvent } from "react";
import BasicInfo from "../../components/admin/auth/BasicInfo";
import UploadPassport from "../../components/admin/auth/UploadPassport";
import UploadIdentityCard from "../../components/admin/auth/UploadIdentityCard";
import { api } from "../../utils/api";
import axios from "axios";
import { inferProcedureInput, router } from "@trpc/server";
import type { AppRouter } from "../../server/api/root";
import { useRouter } from "next/router";

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
  const nextRouter = useRouter();
  const addAdmin = api.adminRouter.add.useMutation();

  const [page, setPage] = React.useState(0);
  // initial empty states for the form
  const formStates = {
    fullName: "",
    email: "",
    phoneNumber: "",
    country: "",
    state: "",
    adress: "",
    passportUrl: "",
    identityCardUrl: "",
  };
  const [formData, setFormData] = React.useState(formStates);

  const AuthForm = () => {
    switch (page) {
      case 0:
        return <BasicInfo formData={formData} setFormData={setFormData} />;
      case 1:
        return <UploadPassport formData={formData} setFormData={setFormData} />;

      case 2:
        return (
          <UploadIdentityCard formData={formData} setFormData={setFormData} />
        );

      default:
        return <BasicInfo formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <form
      className="flex flex-col items-center"
      onSubmit={async (e) => {
        e.preventDefault();
        console.log(formData);
        type Input = inferProcedureInput<AppRouter["adminRouter"]["add"]>;
        const input: Input = {
          fullName: formData.fullName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          country: formData.country,
          adress: formData.adress,
          state: formData.state,
          passportUrl: formData.passportUrl,
          identityCardUrl: formData.identityCardUrl,
        };

        try {
          console.log(input, "This is correct right");
          await addAdmin.mutateAsync(input);
          // console.log(adminId, "Direct me here");
          setFormData(formStates);
          setPage(0);
          if (addAdmin.isSuccess) {
            nextRouter.push("/");
          }
        } catch (cause) {
          console.log({ cause }, "Failed to register the Admin");
        }
      }}
    >
      {AuthForm()}
      {page <= 1 && (
        <button
          type="button"
          onClick={() => setPage(page + 1)}
          className="mt-5 w-[250px] cursor-pointer rounded-md bg-blue px-2 py-2 font-medium text-white"
        >
          Next
        </button>
      )}

      {page >= 1 && (
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
            disabled={addAdmin.isLoading}
            className="mt-5 w-[250px] cursor-pointer rounded-md bg-blue px-2 py-2 font-medium text-white"
            onClick={() => {}}
          >
            Sign Up
          </button>
        </div>
      )}
    </form>
  );
};

export default Signup;
