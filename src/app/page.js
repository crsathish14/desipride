import Image from "next/image";
import { NavBar } from "./component/nav-bar/NavBar";
import { Banner } from "./component/banner/Banner";
import { Footer } from "./component/footer/Footer";
import { MainPage } from "./component/mainPage/MainPage";

export default function Home() {
  return (
    <>
      <MainPage /> 
    </>
  );
}