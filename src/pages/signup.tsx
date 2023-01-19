import Link from "next/link";
import Input from "../components/UI/Input";
import { FcGoogle } from "react-icons/fc";
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, ISignUp } from "../server/api/routers/user";
import { api } from "../utils/api";

const signup: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<ISignUp>({
    resolver: zodResolver(signUpSchema),
  });

  const { mutateAsync } = api.user.signUp.useMutation();
  const onSubmit = useCallback(
    async (data: ISignUp) => {
      const result = await mutateAsync(data);
      if (result.status === 201) {
        router.push("/");
      }
    },
    [mutateAsync, router]
  );
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
      <form className="mt-5 space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <label>Full Name</label>
          <input
            type="text"
            className="w-[250px] rounded-md  bg-grey px-2 py-2  focus:outline-none"
            placeholder="Dami Dangote"
            {...register("fullName")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Email</label>
          <input
            type="email"
            className="w-[250px] rounded-md  bg-grey px-2 py-2  focus:outline-none"
            placeholder="Segun@yahoo.com"
            {...register("email")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Password</label>
          <input
            type="password"
            className="w-[250px] rounded-md  bg-grey px-2 py-2  focus:outline-none"
            placeholder="*********"
            {...register("password")}
          />
        </div>

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
