"use client";
import Link from "next/link";
import React, { useState } from "react";

const user = () => {
  return (
    <div className="p-4 flex flex-col mx-auto my-10 max-w-[550px] justify-center bg-black/70 rounded-2xl text-white">
      <div className="text-center font-light my-4">
        <h1 className="font-semibold text-xl">User sign in</h1>
        <h5 className="text-m text-light-grey">
          Sign in with your username and password
        </h5>
      </div>
      <div className="my-4">
        <div className="my-4 flex flex-col">
          <lable>Your username</lable>
          <input
            placeholder="Enter username"
            type="email"
            className="rounded-xl h-10 pl-2 text-black"
          />
        </div>
        <div className="my-4 flex flex-col">
          <lable>Your password</lable>
          <input
            placeholder="Enter password"
            type="password"
            className="rounded-xl h-10 pl-2 text-black"
          />
        </div>
        <div className="flex justify-between my-4">
          <div>
            <input type="checkbox" />
            <label className="pl-2">Remember me</label>
          </div>
          <div>
            <p className="text-light-grey">Forgot Password?</p>
          </div>
        </div>
        <button className="bg-black w-[100%] h-10 rounded-xl my-4">
          Login
        </button>
        <p className="w-[100%] text-center">
          Not a member?<Link href={'/signup'} className="text-light-grey">Register here!</Link>
        </p>
      </div>
    </div>
  );
};

export default user;
