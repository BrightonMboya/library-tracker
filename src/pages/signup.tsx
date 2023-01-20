import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import type { NextPage } from "next";
import Input from "../components/UI/Input";
import { useRouter } from "next/router";
import { api } from "../utils/api";
import { inferProcedureInput } from "@trpc/server";
import { AppRouter } from "../server/api/root";
import { useState } from "react";

const signup: NextPage = () => {
  const router = useRouter();

  const createUser = api.user.create.useMutation();
  const allUsers = api.user.all.useQuery();
  // console.log("No Users?", allUsers.data);

  const formStates = {
    fullName: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(formStates);

  return (
    <div className="mt-5 flex min-h-screen flex-col items-center justify-center">
      <div>
        <h3 className="text-center text-[2rem] font-medium tracking-wide">
          Sign Up
        </h3>
        <button className="mt-3 flex w-[250px] cursor-pointer items-center gap-5 rounded-md border-[1px]  border-[rgba(142,142,147,0.22)] px-2 py-2 text-[#303030]">
          <span>
            <FcGoogle size={25} />
          </span>
          Continue with Google
        </button>
      </div>
      <form
        className="mt-5 space-y-5"
        onSubmit={async (e) => {
          e.preventDefault();
          type Input = inferProcedureInput<AppRouter["user"]["create"]>;
          const input: Input = {
            fullName: formData.fullName,
            email: formData.email,
            password: formData.password,
          };

          try {
            await createUser.mutateAsync(input);
            setFormData(formStates);
            router.push("/libraries");
          } catch (cause) {
            console.error({ cause }, "Failed to create the user!!");
          }
        }}
      >
        <Input
          label="Full Name"
          placeholder="Segun Favour"
          type="text"
          value={formData.fullName}
          onChange={(e: any) => {
            setFormData({
              ...formData,
              fullName: e.target.value,
            });
          }}
        />
        <Input
          label="Email"
          placeholder="Segun@yahoo.com"
          type="email"
          value={formData.email}
          onChange={(e: any) => {
            setFormData({
              ...formData,
              email: e.target.value,
            });
          }}
        />

        <Input
          label="Password"
          placeholder="*****"
          type="password"
          value={formData.password}
          onChange={(e: any) => {
            setFormData({
              ...formData,
              password: e.target.value,
            });
          }}
        />

        <button
          type="submit"
          className="mt-5 w-[250px] cursor-pointer rounded-md bg-blue px-2 py-2 font-medium text-white"
        >
          Continue With Email
        </button>

        <div className="flex space-x-1">
          <p>I already have an account, </p>
          <Link href="/login">
            <p className="cursor-pointer font-medium text-blue">login</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default signup;
