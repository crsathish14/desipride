import React from "react";
import Image from "next/image";

export const GetStateTile = ({ state }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Image src={state.img} width={150} height={150} alt={state.state} />
      <p className="text-center">{state.state}</p>
    </div>
  );
};
