import React from "react";
import { Vision } from "../vision/Vision";
import { StateComponenet } from "../state-component/StateComponent.js";
import { Footer } from "../footer/Footer";
import { NavBar } from "../nav-bar/NavBar";
import { Banner } from "../banner/Banner";

export const MainPage = () => {
  return (
    <>
      <Banner />
      <Vision />
      <StateComponenet />
    </>
  );
};
