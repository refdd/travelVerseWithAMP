"use client";
import React, { useRef, useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
// import CardPackageTypes from "./CardPackageTypes";
import Link from "next/link";
import MainCard from "./MainCard";
function GroupPackage() {
  return (
    <div className=" ">
      <MainCard />
      <div className="  group w-full pt-10  md:pt-7 flex justify-center items-center  ">
        <Link href={`/`}>
          <button className=" wrapper  group-hover:text-white md:text-xl md:py-1 bg-[#00AEFF] px-4 py-3 rounded-2xl z-10 text-white overflow-hidden  ">
            <span className="absolute w-0 top-0 left-0 b-b-width bg-blue-700 -z-10 h-full"></span>
            View All
          </button>
        </Link>
      </div>
    </div>
  );
}

export default GroupPackage;
