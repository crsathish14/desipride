import React from "react";
import Image from "next/image";
import Link from "next/link";

export const GetStateTile = ({ state, key }) => {
  return (
    <Link key={"state-tile-" + key} href={'/state/' + state.key}>
      <div className="flex justify-center items-center flex-col">
        <Image src={state.img} width={150} height={150} alt={state.state} />
        <p className="text-center">{state.state}</p>
      </div>
    </Link>
  );
};
