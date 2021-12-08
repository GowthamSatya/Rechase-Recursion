import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo1 from "../../assets/logo.png";
import logo2 from "../../assets/final_logo.png";
import { HiMenu } from "react-icons/hi";
import { useSession, signIn, signOut } from "next-auth/client";

import useWindowWidth from "../../hooks/useWidth";

const Navbar = ({ className, btnName, btnName2 }) => {
  const [session, loading] = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const width = useWindowWidth();

  const handleSignin = (e) => {
    e.preventDefault();
    signIn();
  };
  const handleSignout = (e) => {
    e.preventDefault();
    signOut();
  };

  const desktopNav = (
    <div className="flex items-center justify-center">
      <Link href={`${btnName === "Home" ? "/" : `/${btnName}`}`}>
        <a className="mx-4 font-archivo  font-bold hover:rounded-lg hover:bg-glow hover:text-black hover:shadow-glow p-2">
          {btnName}
        </a>
      </Link>
      <Link href={`/${btnName2}`}>
        <a className="mx-4 font-archivo font-bold hover:rounded-lg hover:bg-glow hover:text-black hover:shadow-glow p-2">
          {btnName2}
        </a>
      </Link>
      {/* https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=958168262361-491v7er5akoh97000chkte553386ec2d&scope=openid%20email%20profile&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fapi%2Fauth%2Fcallback%2Fgoogle&state=M4xMteUURngJUD6MMIgS_y8I-AtswhQuIyMAFL9_cj8&code_challenge=cXanijPqDvir7ztJ9dsKje-xmX8Uv4TLZeHYpdjCbXE&code_challenge_method=S256&flowName=GeneralOAuthFlow */}

      {session ? (
        <a
          onClick={handleSignout}
          className="mx-4 font-archivo font-bold hover:rounded-lg hover:bg-glow hover:text-black hover:shadow-glow p-2"
        >
          Sign Out
        </a>
      ) : (
        <a
          onClick={handleSignin}
          className="mx-4 font-archivo font-bold hover:rounded-lg hover:bg-glow hover:text-black hover:shadow-glow p-2"
        >
          Sign In
        </a>
      )}
    </div>
  );

  const mobileNav = (
    <div className="flex items-center justify-center  ">
      <Link href={`${btnName === "Home" ? "/" : `/${btnName}`}`}>
        <a className="mx-2 font-archivo text-md font-bold hover:rounded-lg hover:bg-glow hover:text-black hover:shadow-glow p-2">
          {btnName}
        </a>
      </Link>
      <Link href={`/${btnName2}`}>
        <a className="mx-2 font-archivo text-md font-bold hover:rounded-lg hover:bg-glow hover:text-black hover:shadow-glow p-2">
          {btnName2}
        </a>
      </Link>

      {session ? (
        <a
          onClick={handleSignout}
          className="mx-4 font-archivo font-bold hover:rounded-lg hover:bg-glow hover:text-black hover:shadow-glow p-2"
        >
          Sign Out
        </a>
      ) : (
        <a
          onClick={handleSignin}
          className="mx-4 font-archivo font-bold hover:rounded-lg hover:bg-glow hover:text-black hover:shadow-glow p-2"
        >
          Sign In
        </a>
      )}
    </div>
  );

  return (
    <nav
      className={`flex flex-col justify-between items-center md:p-4 text-white ${className}`}
    >
      <div className="flex justify-between items-center  p-2 text-white w-full">
        <div className="flex items-center bg-black">
          <a href="/">
            <Image src={logo2} width={90} height={70} className="p-2 mr-2" />
          </a>

          <Image
            src={logo1}
            width={70}
            height={70}
            layout="intrinsic"
            className="p-2 mr-2 mt-1"
          />
          {loading && <p>Loading...</p>}
          {session && (
            <p className="mx-4 font-medium mt-1">Hi, {session.user.name}</p>
          )}
        </div>

        {width < 768 && (
          <button
            className="visible md:hidden lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            className=""
          >
            <HiMenu className="w-8 h-8" />
          </button>
        )}

        {width > 768 && desktopNav}
      </div>

      {width < 768 && isOpen && mobileNav}
    </nav>
  );
};

export default Navbar;
