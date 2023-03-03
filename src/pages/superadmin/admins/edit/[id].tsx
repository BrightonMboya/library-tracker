import { api } from "../../../../utils/api";
import { Footer, Nav } from "../../../../components/LandingPage";
import type { inferProcedureInput } from "@trpc/server";
import type { AppRouter } from "../../../../server/api/root";
import { useRouter } from "next/router";
import Input from "../../../../components/UI/Input";
import React, { type ChangeEvent } from "react";
import Link from "next/link";

const Index = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const adminQuery = api.adminRouter.byId.useQuery({ id });
  const editQuery = api.adminRouter.edit.useMutation();
  const utils = api.useContext(); // for invalidating the query after editing the admin

  const formStates = {
    fullName: adminQuery.data?.fullName as string,
    email: adminQuery.data?.email as string,
    phoneNumber: adminQuery.data?.phoneNumber as string,
    country: adminQuery.data?.country as string,
    state: adminQuery.data?.state as string,
    adress: adminQuery.data?.adress as string,
    passportUrl: adminQuery.data?.passportUrl as string,
    identityCardUrl: adminQuery.data?.identityCardUrl as string,
  };

  const [formData, setFormData] = React.useState(formStates);

  const onSubmitHandler = async () => {
    type Input = inferProcedureInput<AppRouter["adminRouter"]["edit"]>;
    const input: Input = {
      id: id,
      fullName: formData.fullName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      country: formData.country,
      state: formData.state,
      adress: formData.adress,
      passportUrl: adminQuery.data?.passportUrl as string,
      identityCardUrl: adminQuery.data?.identityCardUrl as string,
    };

    try {
      await editQuery.mutateAsync(input);
      //   utils.adminRouter.byId.invalidate({ id });
      // router.push(`/superadmin/admins/`);
      router.replace(`/superadmin/admins/`);
      //   router.reload();
    } catch (cause) {
      console.error({ cause }, "Failed to Edit the Admin");
    }
  };

  if (adminQuery.error) {
    return <div>Failed to fetch the Data</div>;
  }
  return (
    <>
      <Nav />
      <main className="mt-5 flex flex-col md:mt-[2rem] md:mb-[3rem] md:flex-row  md:justify-center">
        <form
          className="flex flex-col items-center md:mt-[2rem] md:gap-[1.5rem]"
          onSubmit={onSubmitHandler}
        >
          <div>
            <p className="text-xl font-medium text-blue">Basic Info</p>
          </div>

          <div className="mt-5 flex flex-col gap-5 md:flex-row">
            <Input
              type="text"
              label="Full Name"
              placeholder="Segun Favour Aletogibe"
              value={formData.fullName}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setFormData({
                  ...formData,
                  fullName: e.target.value,
                });
              }}
            />
            <Input
              type="email"
              label="Email"
              placeholder="Segun@yahoo.com"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setFormData({
                  ...formData,
                  email: e.target.value,
                });
              }}
              value={formData.email}
            />
          </div>

          <div className="mt-5 flex flex-col gap-5 md:mt-0 md:flex-row">
            <Input
              label="Phone Number"
              placeholder="+234784319877"
              type="phonenumber"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setFormData({
                  ...formData,
                  phoneNumber: e.target.value,
                });
              }}
              value={formData.phoneNumber}
            />
            <Input
              type="text"
              label="Country"
              placeholder="Nigeria"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setFormData({
                  ...formData,
                  country: e.target.value,
                });
              }}
              value={formData.country}
            />
          </div>

          <div className="mt-5 flex flex-col gap-5 md:mt-0 md:flex-row">
            <Input
              type="text"
              label="State"
              placeholder="Abuja"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setFormData({
                  ...formData,
                  state: e.target.value,
                });
              }}
              value={formData.state}
            />
            <Input
              type="text"
              label="Contact Adress"
              placeholder="Lagos, Nigeria"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setFormData({
                  ...formData,
                  adress: e.target.value,
                });
              }}
              value={formData.adress}
            />
          </div>

          <div className="mb-[2rem] flex gap-5">
            <button
              className="mt-5 cursor-pointer rounded-md bg-blue px-4 py-2 font-medium text-white"
              type="submit"
              disabled={editQuery.isLoading}
            >
              Edit Admin
            </button>

            <Link href="/superadmin/admins/">
              <button
                className="mt-5 cursor-pointer rounded-md bg-[#f2f2f2] px-4 py-2 font-medium "
                type="button"
              >
                Go Back
              </button>
            </Link>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Index;
