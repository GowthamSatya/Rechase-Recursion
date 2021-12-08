import React from "react";
import Image from "next/image";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/REC_logo.png";

const Footer = ({ className }) => {
  return (
    <footer
      className={`flex flex-col bg-black text-white p-4 w-full items-center justify-center ${className}`}
    >
      <p className="my-1 font-orbit text-sm text-center lg:text-xl md:text-lg sm:text-lg">
        Developed by : RECursion - Programming Community of NIT Durgapur
      </p>
      <div className="icons flex items-center justify-center gap-4 my-1">
        <a href="https://www.facebook.com/recursion.nit/">
          <FaFacebookSquare className="w-6 h-6" />
        </a>
        <a href="https://www.recursionnitd.in/">
          <Image
            src={logo}
            alt="recursion"
            className="rec-icon"
            width={30}
            height={30}
          />
        </a>

        <a href="https://in.linkedin.com/company/recursion-nit-durgapur-programming-community">
          <FaLinkedin className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
