"use client";
import React, { useState } from "react";
import Image from "next/image";
import { GetStateTile } from "./GetStateTile";
const states = [
  {
    img: "/States/AP.jpg",
    state: "Andhra Pradesh	",
    key: "AP",
  },
  {
    img: "/States/AS.jpg",
    state: "Assam",
    key: "AS",
  },
  {
    img: "/States/BR.jpg",
    state: "Bihar",
    key: "BR",
  },
  {
    img: "/States/CS.jpg",
    state: "Chhattisgarh",
    key: "CS",
  },
  {
    img: "/States/GA.jpg",
    state: "Goa",
    key: "GA",
  },
  {
    img: "/States/GJ.jpg",
    state: "Gujarat",
    key: "GJ",
  },
  {
    img: "/States/HP.jpg",
    state: "Himachal Pradesh",
    key: "HP",
  },
  {
    img: "/States/JK.jpg",
    state: "Jammu and Kashmir",
    key: "JK",
  },
  {
    img: "/States/KA.jpg",
    state: "Karnataka",
    key: "KA",
  },
  {
    img: "/States/MH.jpg",
    state: "Maharashtra",
    key: "MH",
  },
  {
    img: "/States/ML.jpg",
    state: "Meghalaya",
    key: "ML",
  },
  {
    img: "/States/MN.jpg",
    state: "Manipur",
    key: "MN",
  },
  {
    img: "/States/MP.jpg",
    state: "Madhya Pradesh",
    key: "MP",
  },
  {
    img: "/States/MZ.jpg",
    state: "Mizoram",
    key: "MZ",
  },
  {
    img: "/States/NL.jpg",
    state: "Nagaland",
    key: "NL",
  },
  {
    img: "/States/OD.jpg",
    state: "Odisha",
    key: "OD",
  },
  {
    img: "/States/PB.jpg",
    state: "Punjab",
    key: "PB",
  },
  {
    img: "/States/RJ.jpg",
    state: "Rajasthan",
    key: "RJ",
  },
  {
    img: "/States/SK.jpg",
    state: "Sikkim",
    key: "SK",
  },
  {
    img: "/States/TN.jpg",
    state: "Tamil Nadu",
    key: "TN",
  },
  {
    img: "/States/TR.jpg",
    state: "Tripura",
    key: "TR",
  },
  {
    img: "/States/TS.jpg",
    state: "Telangana",
    key: "TS",
  },
  {
    img: "/States/UP.jpg",
    state: "Uttar Pradesh",
    key: "UP",
  },
  {
    img: "/States/UT.jpg",
    state: "Uttarakhanad",
    key: "UT",
  },
  {
    img: "/States/WB.jpg",
    state: "West Bengal",
    key: "WB",
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
      <div className="state-component m-3">
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
