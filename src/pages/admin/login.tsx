import Input from "../../components/UI/Input";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import type { NextPage } from "next";
import type { ChangeEvent } from "react";
import Image from "next/legacy/image";
import { inferProcedureInput } from "@trpc/server";
import { AppRouter } from "../../server/api/root";
import { signIn } from "next-auth/react";

const Login: NextPage = () => {
  const initialFormStates = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormStates);
  return (
    <main className="">
      <div className="mt-5 flex min-h-screen flex-col items-center justify-center">
        <div>
          <h3 className="text-center text-[2rem] font-medium tracking-wide">
            Login
          </h3>
          <button className="mt-3 flex w-[250px] cursor-pointer items-center gap-5 rounded-md border-[1px]  border-[rgba(142,142,147,0.22)] px-2 py-2 text-[#303030]">
            <span>
              <FcGoogle size={25} />
            </span>
            Continue with Google
          </button>
        </div>
        <form className="mt-5 space-y-5 md:mt-[2rem]" onSubmit={() => {}}>
          <Input
            type="email"
            label="Email"
            placeholder="Segun@yahoo.com"
            value={formData.email}
            classes="md:h-[50px] md:w-[300px]"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setFormData({
                ...formData,
                email: e.target.value,
              });
            }}
          />
          <Input
            type="password"
            label="Password"
            placeholder="*********"
            value={formData.password}
            classes="md:h-[50px] md:w-[300px]"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setFormData({
                ...formData,
                password: e.target.value,
              });
            }}
          />

          <div className="md:flex md:items-center md:justify-center">
            <button
              type="submit"
              className="mt-5 w-[250px] cursor-pointer rounded-md bg-blue px-2 py-2 font-medium text-white md:py-4"
            >
              Continue With Email
            </button>
          </div>

          <div className="flex space-x-1 md:pl-5">
            <p>I don&apos;t have an account, </p>
            <Link href="/signup">
              <p className="cursor-pointer font-medium text-blue">sign Up</p>
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
