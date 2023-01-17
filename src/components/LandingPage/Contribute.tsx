import React from "react";
import Image from "next/legacy/image";

const Contribute = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-[300px] w-[300px]">
        <Image
          src="/hands.png"
          alt="logo"
          layout="fill"
          className="grayscale"
        />

        <div className="absolute pl-5 pt-3 text-white">
          <h3 className="text-2xl font-bold">Become a Library Administrator</h3>
          <p>
            Are you a library administrator? Apply to manage your Library data
            on Library Tracker.
          </p>

          <button className="absolute  mt-5 cursor-pointer rounded-md bg-white px-3 py-1 font-medium text-blue">
            Sign Up
          </button>
        </div>
      </div>
      <div className="relative mt-5 h-[332px] w-[335px]">
        <Image src="/map.png" alt="logo" layout="fill" />
        <div className="absolute bottom-0 h-[120px] w-full bg-gradient-to-t from-slate-600 to-transparent">
          <h3 className="absolute top-8  left-3 text-xl font-medium text-white">
            Start tracking a library now
          </h3>

          <button className="absolute bottom-3 right-2 cursor-pointer rounded-md bg-white px-3 py-1 font-medium text-blue">
            Find a Library
          </button>
        </div>
      </div>
      <div className="mt-[2rem] mb-[2rem] flex items-center gap-5">
        <div className="relative h-[53px] w-[104px]">
          <Image src="/libaid.png" alt="logo" layout="fill" />
        </div>

        <div className="relative h-[51px] w-[104px]">
          <Image src="/goeth.png" alt="logo" layout="fill" />
        </div>
      </div>
    </div>
  );
};

export default Contribute;
