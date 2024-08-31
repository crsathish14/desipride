"use client";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [admin, setAdmin] = useState(false);

  const handleChange = (e) => {
    setAdmin(e.target.checked);
  };
  return (
    <div className="p-4 flex flex-col mx-auto my-10 max-w-[550px] justify-center bg-black/70 rounded-2xl text-white">
      <div className="text-center font-light my-4">
        <h1 className="font-semibold text-xl">Sign up</h1>
        <h5 className="text-m text-light-grey">Sign up with your details.</h5>
      </div>
      <div className="my-4">
        <div className=" flex w-[100%] gap-2 flex-col sm:flex-row">
          <div className="my-4 flex flex-col basis-1/2">
            <lable>First name</lable>
            <input
              placeholder="Enter first name"
              type="text"
              className="rounded-xl h-10 pl-2 text-black"
            />
          </div>
          <div className="my-4 flex flex-col basis-1/2">
            <lable>Last name</lable>
            <input
              placeholder="Enter last name"
              type="text"
              className="rounded-xl h-10 pl-2 text-black"
            />
          </div>
        </div>
        <div className=" flex w-[100%] gap-2 flex-col sm:flex-row">
          <div className="my-4 flex flex-col basis-1/2">
            <lable>Address</lable>
            <input
              placeholder="Enter address"
              type="text"
              className="rounded-xl pl-2 h-10 text-black"
            />
          </div>
          <div className="my-4 flex flex-col basis-1/2">
            <lable>Phone</lable>
            <input
              placeholder="Enter phone number"
              type="number"
              className="rounded-xl h-10 pl-2 text-black"
            />
          </div>
        </div>
        <div className=" flex w-[100%] gap-2 flex-col sm:flex-row">
          <div className="my-4 flex flex-col basis-1/2">
            <lable>State</lable>
            <input
              placeholder="Enter state"
              type="text"
              className="rounded-xl pl-2 h-10 text-black"
            />
          </div>
          <div className="my-4 flex flex-col basis-1/2">
            <lable>Pincode</lable>
            <input
              placeholder="Enter pincode"
              type="number"
              className="rounded-xl h-10 pl-2 text-black"
            />
          </div>
        </div>
        <div className="my-4 flex flex-col">
          <lable>Email</lable>
          <input
            placeholder="Enter email"
            type="email"
            className="rounded-xl h-10 pl-2 text-black"
          />
        </div>
        <div className="flex justify-center my-4">
          <div>
            <input type="checkbox" onChange={handleChange} />
            <label className="pl-2">Check if admin</label>
          </div>
        </div>
        <button className="bg-black w-[100%] h-10 rounded-xl my-4">
          Register
        </button>
        <p className="w-[100%] text-center">
          Already registered?
          <Link href={admin ? "/admin" : "/user"} className="text-light-grey">
            Login here!
          </Link>
        </p>
      </div>
    </div>
  );
};
export default page;
