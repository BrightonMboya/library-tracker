import React from "react";

interface Props {
  title: string;
  desc: string;
}
const Header = ({ title, desc }: Props) => {
  return (
    <div className="flex flex-col gap-3 text-center">
      <h3 className="text-xl font-medium tracking-wider text-blue">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default Header;
