import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Nav = () => {
  const [showNav, setShowNav] = React.useState(false);
  return (
    <nav>
      <div className="mt-5 flex items-center justify-between">
        <Link href="/">
          <div className="relative ml-5  h-[40px] w-[140px]">
            <Image
              src="/logo.png"
              layout="fill"
              alt="logo-img"
              className="cursor-pointer"
            />
          </div>
        </Link>

        <div className="flex items-center gap-5">
          <Link href="/libraries">
            <p className="mr-5 cursor-pointer font-medium tracking-wide text-gray-700">
              Library List
            </p>
          </Link>

          <div
            onClick={() => setShowNav(!showNav)}
            className="absolute right-5 top-2 cursor-pointer md:relative md:top-0 "
          >
            {!showNav ? <FaBars size={25} color="" /> : <ImCross size={20} />}
          </div>
        </div>
      </div>

      {showNav && (
        <div className="z-[100] flex h-screen flex-col items-start gap-10  bg-white pl-5 pt-[5rem] text-xl font-medium text-blue md:absolute md:h-[600px]">
          <Link href="/libraries">
            <p className="w-screen border-b-[2px] pb-3">Library List</p>
          </Link>

          <Link href="/login">
            <p className="w-screen border-b-[2px] pb-3">User Login</p>
          </Link>

          <Link href="/signup">
            <p className="w-screen border-b-[2px] pb-3">User SignUp</p>
          </Link>

          <Link href="/admin/login">
            <p className="w-screen border-b-[2px] pb-3">Library Admin Login</p>
          </Link>

          <Link href="/admin/signup">
            <p className="w-screen border-b-[2px] pb-3">
              Library Admin Sign Up
            </p>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
