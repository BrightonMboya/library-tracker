import React from "react";
import Nav from "./Nav";
import Search from "./Search";

const HeroSection = () => {
  const [showNav, setShowNav] = React.useState(false);
  return (
    <React.Fragment>
      <Nav />
      <div className="mb-[2rem] flex min-h-screen flex-col items-center justify-center bg-[url('../../public/hero.png')] object-contain">
        <h3 className="text-xl font-medium tracking-wide">
          Libraries are here .
        </h3>
        {/* <input
          type="search"
          placeholder="Find a Library"
          className="mt-5 rounded-md border-2 border-slate-400 bg-transparent px-2 py-1 focus:outline-none"
        /> */}
        <Search />
      </div>
    </React.Fragment>
  );
};

export default HeroSection;
