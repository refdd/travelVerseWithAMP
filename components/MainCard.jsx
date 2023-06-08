"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BsStarFill } from "react-icons/bs";
import { PackageS } from "../data/dammyData";
import { useStateContext } from "../contexts/ContextProvider";
import { useAmp } from "next/amp";
function MainCard() {
  const { handleClick, isClicked, setIsClicked } = useStateContext();
  const [singelPackage, setSingelPackage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const isAmp = useAmp();
  useEffect(() => {
    const fliterPackageByCountry = PackageS.filter((item) =>
      item.night.includes(isClicked.type)
    );
    setSingelPackage(fliterPackageByCountry);
  }, [isClicked]);

  useEffect(() => {
    function handleResize() {
      const isMobileDevice = window.innerWidth < 768; // Adjust the breakpoint as per your needs
      setIsMobile(isMobileDevice);
    }

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(isMobile);
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 xl:grid-cols-4">
      {singelPackage &&
        singelPackage.slice(0, isMobile ? 3 : 8)?.map((item, index) => {
          return (
            <div
              key={index}
              className="  px-2 py-1  mt-5 shadow-lg p-4 shadow-blue-100"
            >
              <div className="flex flex-col gap-2 py-1 px-2 e ">
                {/* image and countary*/}
                <div className="relative overflow-hidden w-full h-[200px]  ">
                  {isAmp ? (
                    <amp-img
                      width="300"
                      height="300"
                      src={item.imageUrl}
                      alt="a cool image"
                      layout="responsive"
                    />
                  ) : (
                    <Image
                      src={item.imageUrl}
                      fill
                      loading={"lazy"}
                      className={"rounded-lg "}
                      alt="imgaeCard"
                    />
                  )}

                  <div className="absolute top-0 left-0 w-full h-[98%] bg-[#00000040] rounded-t-lg md:h-full cursor-pointer"></div>
                  <div className="absolute top-[16px] left-[22px] w-44 md:w-32 h-autp bg-[#00b1ff99] rounded-xl py-1">
                    <p className="text-white text-lg md:text-[16px] font-Roboto capitalize text-center my-auto">
                      {item.night}
                    </p>
                  </div>
                </div>
                {/* content */}
                <div className="container flex flex-col gap-2">
                  <h1 className="text-xl md:font-medium md:h-[43px] text-gray-800 font-Roboto font-semibold capitalize ">
                    {item.type}
                  </h1>
                  <p className="text-lg text-gray-500 md:text-[16px] md:font-normal font-Roboto font-medium capitalize">
                    {item.start}
                  </p>
                </div>
                {/* price and days  */}
                <div className="container flex flex-col gap-2">
                  {/* days and reate */}
                  <div className="flex  justify-between  ">
                    <p className=" text-xl text-gray-700 md:font-medium font-mono font-semibold  md:text-lg capitalize">
                      {item.days} / 10 Night
                    </p>
                    <p className="text-xl text-gray-700 md:text-lg  text-right font-Roboto font-medium capitalize">
                      from{" "}
                    </p>
                  </div>
                  {/* price */}
                  <div className="flex justify-between">
                    <p className="flex gap-1 items-center ">
                      <BsStarFill color="#FFD500" size={24} />{" "}
                      <BsStarFill color="#FFD500" size={24} />{" "}
                      <BsStarFill color="#FFD500" size={24} />{" "}
                      <BsStarFill color="#FFD500" size={24} />{" "}
                      <BsStarFill color="#FFD500" size={24} />{" "}
                      <span className="text-sm text-gray-400"> (29) </span>
                    </p>

                    <p className="text-3xl text-[#00AEFF] font-mono font-semibold md:font-normal md:text-xl ">
                      <span className="text-xl md:text-sm">$</span>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default MainCard;
