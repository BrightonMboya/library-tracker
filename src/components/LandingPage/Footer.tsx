import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="bg-[#F3F3F3]  pt-5">
      <div className="flex items-center justify-center pl-0">
        <div className="relative flex h-[40px] w-[147px] items-center justify-center">
          <Image src="/logo.png" alt="logo" layout="fill" />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 pl-5">
        <h3 className="text-xl font-medium uppercase tracking-wide">Company</h3>
        <Link href="#">Sign In</Link>
        <Link href="#">Sign Up</Link>
        <Link href="#">Library Administrator</Link>

        <h3 className="mt-5 text-xl font-medium uppercase tracking-wide">
          contact us
        </h3>
        <div className="flex items-center gap-2 text-lg">
          <AiOutlinePhone size={25} />
          <p>+23478908734</p>
        </div>

        <div className="flex items-center gap-2 text-lg">
          <AiOutlineMail size={25} />
          <p>info@libraryaidafrica.org</p>
        </div>

        <div>
          <h3 className="mt-5 text-xl font-medium uppercase tracking-wide">
            Follow Us
          </h3>
          <div className="mt-5 flex items-center gap-5">
            <FaFacebook size={25} />
            <FaInstagram size={25} />
            <FaLinkedin size={25} />
            <FaTwitter size={25} />
          </div>
        </div>

        <p className="mt-5 text-lg">Copyright {date}</p>
      </div>
    </div>
  );
};

export default Footer;
