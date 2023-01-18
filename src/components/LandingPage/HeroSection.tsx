import React from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Link from "next/link";

const HeroSection = () => {
  const [showNav, setShowNav] = React.useState(false);
  return (
    <React.Fragment>
      <div
        onClick={() => setShowNav(!showNav)}
        className="absolute right-5 top-2 cursor-pointer"
      >
        {!showNav ? <FaBars size={30} color="" /> : <ImCross size={30} />}
      </div>

      {showNav && (
        <div className="flex h-screen flex-col items-start gap-10  bg-white pl-5 pt-[5rem] text-xl font-medium text-blue">
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

      <div className="flex min-h-screen flex-col items-center justify-center">
        <input
          type="search"
          placeholder="Search for a library"
          className="rounded-md border-2 border-slate-400 bg-transparent px-2 py-1 focus:outline-none"
        />
      </div>
    </React.Fragment>
  );
};

export default HeroSection;
