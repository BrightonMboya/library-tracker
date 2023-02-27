import React from "react";
import Nav from "./Nav";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Link from "next/link";
import Image from "next/legacy/image";

const HeroSection = () => {
  const [showNav, setShowNav] = React.useState(false);
  return (
    <React.Fragment>
      <Nav />
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h3 className="text-xl font-medium tracking-wide">
          Libraries are here .
        </h3>
        <input
          type="search"
          placeholder="Find a Library"
          className="mt-5 rounded-md border-2 border-slate-400 bg-transparent px-2 py-1 focus:outline-none"
        />
      </div>
    </React.Fragment>
  );
};

export default HeroSection;
