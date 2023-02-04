import Image from "next/legacy/image";

const Contribute = () => {
  return (
    <div className="relative  flex flex-col items-center pt-10">
      <div className="absolute -top-1 h-[500px] w-full bg-[#7C7C7C] py-1 md:h-[700px] ">
        <h3 className="pl-5 text-xl text-white md:mt-5 md:pl-7  ">
          Contribute to Library Tracker
        </h3>
      </div>
      <div className="relative h-[300px] w-[350px] md:mt-5 md:h-[400px] md:w-[700px]">
        <Image
          src="/hands.png"
          alt="logo"
          layout="fill"
          className="object-cover grayscale"
        />

        <div className="absolute pl-5 pt-3 text-white">
          <h3 className="text-2xl font-bold md:mt-[2rem] md:text-3xl">
            Become a Library Administrator
          </h3>
          <p className="md:mt-5 md:text-lg">
            Are you a library administrator? Apply to manage your Library data
            on Library Tracker.
          </p>

          <button className="absolute  mt-5 cursor-pointer rounded-md bg-white px-3 py-1 font-medium text-blue md:py-3 md:px-5 md:text-xl">
            Sign Up
          </button>
        </div>
      </div>
      <div className="relative mt-5 h-[332px] w-[350px] md:h-[400px] md:w-[700px]">
        <Image src="/map.png" alt="logo" layout="fill" />
        <div className="absolute bottom-0 h-[120px] w-full bg-gradient-to-t from-slate-600 to-transparent md:h-[140px]">
          <h3 className="absolute top-8 left-3  text-xl font-medium text-white md:top-12 md:text-2xl">
            Start tracking a library now
          </h3>

          <button className="absolute bottom-3 right-2 cursor-pointer rounded-md bg-white px-3 py-1 font-medium text-blue md:bottom-12 md:px-5  md:py-3 md:text-lg">
            Find a Library
          </button>
        </div>
      </div>
      <div className="mt-[2rem] mb-[2rem] flex items-center gap-5 md:mt-[3rem] md:gap-[3rem]">
        <div className="relative h-[53px] w-[104px] md:h-[70px] md:w-[120px]">
          <Image src="/libaid.png" alt="logo" layout="fill" />
        </div>

        <div className="relative h-[51px] w-[104px] md:h-[70px] md:w-[120px]">
          <Image src="/goeth.png" alt="logo" layout="fill" />
        </div>
      </div>
    </div>
  );
};

export default Contribute;
