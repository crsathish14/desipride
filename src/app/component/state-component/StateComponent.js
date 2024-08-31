"use client";
import React, { useState } from "react";
import Image from "next/image";
import { GetStateTile } from "./GetStateTile";
const states = [
  {
    img: "/States/AP.jpg",
    state: "Andhra Pradesh	",
  },
  {
    img: "/States/AS.jpg",
    state: "Assam",
  },
  {
    img: "/States/BR.jpg",
    state: "Bihar",
  },
  {
    img: "/States/CS.jpg",
    state: "Chhattisgarh",
  },
  {
    img: "/States/GA.jpg",
    state: "Goa",
  },
  {
    img: "/States/GJ.jpg",
    state: "Gujarat",
  },
  {
    img: "/States/HP.jpg",
    state: "Himachal Pradesh",
  },
  {
    img: "/States/JK.jpg",
    state: "Jammu and Kashmir",
  },
  {
    img: "/States/KA.jpg",
    state: "Karnataka",
  },
  {
    img: "/States/MH.jpg",
    state: "Maharashtra",
  },
  {
    img: "/States/ML.jpg",
    state: "Meghalaya",
  },
  {
    img: "/States/MN.jpg",
    state: "Manipur",
  },
  {
    img: "/States/MP.jpg",
    state: "Madhya Pradesh",
  },
  {
    img: "/States/MZ.jpg",
    state: "Mizoram",
  },
  {
    img: "/States/NL.jpg",
    state: "Nagaland",
  },
  {
    img: "/States/OD.jpg",
    state: "Odisha",
  },
  {
    img: "/States/PB.jpg",
    state: "Punjab",
  },
  {
    img: "/States/RJ.jpg",
    state: "Rajasthan",
  },
  {
    img: "/States/sk.jpg",
    state: "Sikkim",
  },
  {
    img: "/States/SK.jpg",
    state: "Sikkim",
  },
  {
    img: "/States/TN.jpg",
    state: "Tamil Nadu",
  },
  {
    img: "/States/TR.jpg",
    state: "Tripura",
  },
  {
    img: "/States/TS.jpg",
    state: "Telangana",
  },
  {
    img: "/States/UP.jpg",
    state: "Uttar Pradesh",
  },
  {
    img: "/States/UT.jpg",
    state: "Uttarakhanad",
  },
  {
    img: "/States/WB.jpg",
    state: "West Bengal",
  },
];
const initalStateSize = 6;

export const StateComponenet = () => {
  const [showMore, setShowMore] = useState(false);
  const initalStates = states.slice(0, initalStateSize);
  function showMoreHandler() {
    setShowMore((previousState) => !previousState);
    console.log("done");
  }
  return (
    <>
      <div className="state-component m-5">
        <h1 className="text-center text-xl font-bold my-4">Shop by State</h1>
        <div className="mx-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {!showMore &&
            initalStates.map((state) => {
              return <GetStateTile key={state.state} state={state} />;
            })}
          {showMore &&
            states.map((state) => {
              return <GetStateTile key={state.state} state={state} />;
            })}
        </div>
        <button
          onClick={showMoreHandler}
          className="w-[100%] text-center text-white font-semibold border-3 border-blue border-solid bg-gradient-to-r from-white  via-blue  to-white"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </>
  );
};
