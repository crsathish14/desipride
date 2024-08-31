"use client";
import Link from "next/link";
import React, { useState } from "react";

export const SignIn = () => {
  const [dropDown, setDropDown] = useState(false);
  const signinClickHandler = () => {
    setDropDown((prevState) => !prevState);
  };
  return (
    <div>
      <p
        onClick={signinClickHandler}
        className="cursor-pointer sm:text-2xl font-semibold"
      >
        Sign in
      </p>
      {dropDown && (
        <div className="absolute z-10 bg-black/55 border rounded-[5px] p-2 text-white  sm:text-xl">
          <Link href={"/admin"} onClick={signinClickHandler} className="block">
            Admin sign-in
          </Link>
          <hr></hr>
          <Link href={"/user"} onClick={signinClickHandler}>
            User sign-in
          </Link>
        </div>
      )}
    </div>
  );
};
