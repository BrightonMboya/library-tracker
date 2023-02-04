import React from "react";

interface Props {
  title: string;
  desc: string;
}
const Header = ({ title, desc }: Props) => {
  return (
    <div className="flex flex-col gap-3 text-center">
      <h3 className="text-xl font-medium tracking-wider text-blue md:text-2xl">
        {title}
      </h3>
      <p className="md:text-lg">{desc}</p>
    </div>
  );
};

export default Header;
