"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

export const Banner = () => {
  return (
    <Splide
      aria-label="My Favorite Images"
      options={{
        // rewind: true,
        width: "auto",
        gap: "1rem",
        type: "loop",
        perPage: 1,
      }}
    >
      <SplideSlide tag="div" className="h-[300px] w-[100%]">
        <div className="bg-[url('/BANNER/Banner1.png')] w-[100%] h-[100%] bg-center bg-cover"></div>
      </SplideSlide>
      <SplideSlide tag="div" className="h-[300px] w-[100%]">
        <div className="bg-[url('/BANNER/Banner2.png')] w-[100%] h-[100%] bg-center bg-cover"></div>
      </SplideSlide>
    </Splide>
  );
};
