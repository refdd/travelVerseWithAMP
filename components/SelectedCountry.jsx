"use client";
import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { useEffect } from "react";
function SelectedCountry() {
  const { handleClick, isClicked, setIsClicked } = useStateContext();
  useEffect(() => {
    setIsClicked({ Asia: true, type: "Asia" });
  }, []);
  return (
    <div className="container md:w-[90%] mx-auto ">
      <ul className="flex gap-3 flex-wrap py-3 md:justify-center md:gap-5">
        <li
          onClick={() => handleClick("Asia")}
          className={
            isClicked.Asia
              ? " flex justify-center items-center flex-1 md:flex-none  md:w-24 border-2 py-1 px-3 rounded-lg cursor-pointer text-[#fff]  bg-[#00AEFF] "
              : " flex justify-center items-center flex-1 md:flex-none  md:w- border-2 py-1 px-3 rounded-lg cursor-pointer text-gray-900  bg-[#fff] "
          }
        >
          <p className="text-xl md:text-[16px] md:font-normal md:px-0 font-Roboto font-medium capitalize  px-2  decoration-[#F7F8FA] ">
            Asia{" "}
          </p>
        </li>
        <li
          onClick={() => handleClick("Africa")}
          className={
            isClicked.Africa
              ? " flex justify-center items-center flex-1 md:flex-none  md:w- border-2 py-1 px-3 rounded-lg cursor-pointer text-[#fff]  bg-[#00AEFF] "
              : " flex justify-center items-center flex-1 md:flex-none  md:w- border-2 py-1 px-3 rounded-lg cursor-pointer text-gray-900  bg-[#fff] "
          }
        >
          <p className="text-xl text-center font-Roboto md:text-[16px] md:font-normal md:px-0 font-medium capitalize  px-2  decoration-[#F7F8FA] ">
            {" "}
            Africa
          </p>
        </li>
        <li
          onClick={() => handleClick("Europe")}
          className={
            isClicked.Europe
              ? " flex justify-center items-center flex-1 md:flex-none  md:w- border-2 py-1 px-3 rounded-lg cursor-pointer text-[#fff]  bg-[#00AEFF] "
              : " flex justify-center items-center flex-1 md:flex-none  md:w- border-2 py-1 px-3 rounded-lg cursor-pointer text-gray-900  bg-[#fff] "
          }
        >
          <p className="text-xl text-center font-Roboto md:text-[16px] md:font-normal md:px-0 font-medium capitalize  px-2  decoration-[#F7F8FA] ">
            {" "}
            Europe
          </p>
        </li>
        <li
          onClick={() => handleClick("Latin")}
          className={
            isClicked.Latin
              ? " flex justify-center items-center flex-1 md:flex-none  md:w- border-2 py-1 px-3 rounded-lg cursor-pointer text-[#fff]  bg-[#00AEFF] "
              : " flex justify-center items-center flex-1 md:flex-none  md:w- border-2 py-1 px-3 rounded-lg cursor-pointer text-gray-900  bg-[#fff] "
          }
        >
          <p className="text-xl text-center font-Roboto md:text-[16px] md:font-normal md:px-0 font-medium capitalize  px-2  decoration-[#F7F8FA] ">
            latin America
          </p>
        </li>
        <li
          onClick={() => handleClick("Multi")}
          className={
            isClicked.Multi
              ? " flex justify-center items-center flex-1 md:flex-none  md:w- border-2 py-1 px-3 rounded-lg cursor-pointer text-[#fff]  bg-[#00AEFF] "
              : " flex justify-center items-center flex-1 md:flex-none  md:w- border-2 py-1 px-3 rounded-lg cursor-pointer text-gray-900  bg-[#fff] "
          }
        >
          <p className="text-xl text-center font-Roboto md:text-[16px] md:font-normal md:px-0 font-medium capitalize  px-2  decoration-[#F7F8FA] ">
            Multi Destinations
          </p>
        </li>
      </ul>
    </div>
  );
}

export default SelectedCountry;
