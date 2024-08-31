import React from "react";
import Image from "next/image";
import { SignIn } from "./SignIn";
import Link from "next/link";

export const NavBar = () => {
  return (
    <nav
      id="top-nav-bar"
      className="w-[100%] bg-gradient-to-b from-saffron to-white flex justify-between"
    >
      <Link href={"/"}>
        <div className="desi-logo w-auto flex items-center gap-2 py-3 px-2">
          <Image
            src={"/Logo.JPG"}
            width={60}
            height={60}
            alt="logo"
            className="h-15 w-15 block"
          />
          <span className="text-2xl font-black sm:text-4xl text-[#29699e]">
            𝕯𝖊𝖘𝖎𝕻𝖗𝖎𝖉𝖊
          </span>
        </div>
      </Link>
      <div className="my-auto flex gap-3 mx-4">
        <input
          className="border border-r hidden sm:block h-10 rounded-md pl-2"
          placeholder="Search"
        />
        <SignIn />
        <div className="sm:text-2xl">💗</div>
        <div className="sm:text-2xl">🛒</div>
      </div>
    </nav>
  );
};
