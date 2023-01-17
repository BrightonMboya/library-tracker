import React from "react";
import BasicInfo from "../../components/admin/auth/BasicInfo";
import DocUpload from "../../components/admin/auth/DocUpload";
import { inferProcedureInput } from "@trpc/server";
import { AppRouter } from "../../server/api/root";
import { api } from "../../utils/api";

const signup = () => {
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

  const submitData = async (e: any) => {
    e.preventDefault();
    try {
      await fetch("/api/uploadAdminInfo", {
        method: "POST",
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.error(error);
    }
  };

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
    <form
      className="flex flex-col items-center"
      onSubmit={async (e) => {
        e.preventDefault();
        type Input = inferProcedureInput<AppRouter["adminRouter"]["add"]>;
        const input: Input = {
          passportUrl: formData.passportUrl,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          country: formData.country,
          adress: formData.adress,
          fullName: formData.fullName,
          password: formData.password,
          state: formData.state,
          identityCardUrl: formData.identityCardUrl,
        };

        try {
          await addAdmin.mutateAsync(input);
          setFormData(formStates);
          setPage(0);
        } catch (cause) {
          console.error({ cause }, "Failed to add the Admin");
        }
      }}
    >
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

export default signup;

//  onSubmit={async (e) => {
//         e.preventDefault();
//         type Input = inferProcedureInput<AppRouter["adminRouter"]["add"]>;
//         const input: Input = {
//           passportUrl: formData.passportUrl,
//           email: formData.email,
//           phoneNumber: formData.phoneNumber,
//           country: formData.country,
//           adress: formData.adress,
//           fullName: formData.fullName,
//           password: formData.password,
//           state: formData.state,
//           identityCardUrl: formData.identityCardUrl,
//         };

//         try {
//           await addAdmin.mutateAsync(input);
//           setFormData(formStates);
//           setPage(0);
//         } catch (cause) {
//           console.error({ cause }, "Failed to add the Admin");
//         }
//       }}
